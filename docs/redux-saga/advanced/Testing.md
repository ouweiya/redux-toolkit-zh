---
title: 测试
hide_title: true
---

# 测试 Sagas

测试 Sagas 主要有两种方式：逐步测试 saga 生成器函数或运行完整的 saga 并断言副作用。

## 测试 Saga 生成器函数

假设我们有以下操作：

```javascript
const CHOOSE_COLOR = 'CHOOSE_COLOR'
const CHANGE_UI = 'CHANGE_UI'

const chooseColor = color => ({
  type: CHOOSE_COLOR,
  payload: {
    color,
  },
})

const changeUI = color => ({
  type: CHANGE_UI,
  payload: {
    color,
  },
})
```

我们想要测试这个 saga：

```javascript
function* changeColorSaga() {
  const action = yield take(CHOOSE_COLOR)
  yield put(changeUI(action.payload.color))
}
```

由于 Sagas 总是产生一个 Effect，这些 effects 有基本的工厂函数（例如 put，take 等），测试可以检查产生的 effect 并将其与预期的 effect 进行比较。要从 saga 获取第一个产生的值，调用其 `next().value`：

```javascript
const gen = changeColorSaga()

assert.deepEqual(gen.next().value, take(CHOOSE_COLOR), '它应该等待用户选择颜色')
```

然后必须返回一个值以赋值给 `action` 常量，该常量用作 `put` effect 的参数：

```javascript
const color = 'red'
assert.deepEqual(
  gen.next(chooseColor(color)).value,
  put(changeUI(color)),
  '它应该派发一个操作来改变 UI',
)
```

由于没有更多的 `yield`，所以下次调用 `next()` 时，生成器将完成：

```javascript
assert.deepEqual(gen.next().done, true, '它应该完成')
```

### 分支 Saga

有时你的 saga 会有不同的结果。为了测试不同的分支而不重复所有导致它的步骤，你可以使用实用函数 **cloneableGenerator**

这次我们添加两个新的操作，`CHOOSE_NUMBER` 和 `DO_STUFF`，以及相关的操作创建器：

```javascript
const CHOOSE_NUMBER = 'CHOOSE_NUMBER'
const DO_STUFF = 'DO_STUFF'

const chooseNumber = number => ({
  type: CHOOSE_NUMBER,
  payload: {
    number,
  },
})

const doStuff = () => ({
  type: DO_STUFF,
})
```

现在要测试的 saga 将在等待 `CHOOSE_NUMBER` 操作并放置 `changeUI('red')` 或 `changeUI('blue')` 之前，放置两个 `DO_STUFF` 操作，具体取决于数字是偶数还是奇数。

```javascript
function* doStuffThenChangeColor() {
  yield put(doStuff())
  yield put(doStuff())
  const action = yield take(CHOOSE_NUMBER)
  if (action.payload.number % 2 === 0) {
    yield put(changeUI('red'))
  } else {
    yield put(changeUI('blue'))
  }
}
```

测试如下：

```javascript
import { put, take } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'

test('doStuffThenChangeColor', assert => {
  const gen = cloneableGenerator(doStuffThenChangeColor)()
  gen.next() // DO_STUFF
  gen.next() // DO_STUFF
  gen.next() // CHOOSE_NUMBER

  assert.test('用户选择了一个偶数', a => {
    // 在发送数据之前克隆生成器
    const clone = gen.clone()
    a.deepEqual(clone.next(chooseNumber(2)).value, put(changeUI('red')), '应该将颜色改为红色')

    a.equal(clone.next().done, true, '它应该完成')

    a.end()
  })

  assert.test('用户选择了一个奇数', a => {
    const clone = gen.clone()
    a.deepEqual(clone.next(chooseNumber(3)).value, put(changeUI('blue')), '应该将颜色改为蓝色')

    a.equal(clone.next().done, true, '它应该完成')

    a.end()
  })
})
```

另请参见：[任务取消](TaskCancellation.md) 用于测试 fork effects

## 测试完整的 Saga

尽管测试 saga 的每一步可能很有用，但实际上这会使测试变得脆弱。相反，可能更希望运行整个 saga 并断言已发生的预期效果。

假设我们有一个基本的 saga，它调用一个 HTTP API：

```javascript
function* callApi(url) {
  const someValue = yield select(somethingFromState)
  try {
    const result = yield call(myApi, url, someValue)
    yield put(success(result.json()))
    return result.status
  } catch (e) {
    yield put(error(e))
    return -1
  }
}
```

我们可以用模拟值运行 saga：

```javascript
const dispatched = []

const saga = runSaga(
  {
    dispatch: action => dispatched.push(action),
    getState: () => ({ value: 'test' }),
  },
  callApi,
  'http://url',
)
```

然后可以编写一个测试来断言派发的操作和模拟调用：

```javascript
import sinon from 'sinon'
import * as api from './api'

test('callApi', async assert => {
  const dispatched = []
  sinon.stub(api, 'myApi').callsFake(() => ({
    json: () => ({
      some: 'value',
    }),
  }))
  const url = 'http://url'
  const result = await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => ({ state: 'test' }),
    },
    callApi,
    url,
  ).toPromise()

  assert.true(myApi.calledWith(url, somethingFromState({ state: 'test' })))
  assert.deepEqual(dispatched, [success({ some: 'value' })])
})
```

另请参见：仓库示例：

https://github.com/redux-saga/redux-saga/blob/main/examples/counter/test/sagas.js

https://github.com/redux-saga/redux-saga/blob/main/examples/shopping-cart/test/sagas.js

## 测试库

虽然上述两种测试方法都可以原生编写，但存在几个库可以使两种方法更容易。此外，有些库可以用第三种方式测试 sagas：记录特定的副作用（但不是全部）。

Sam Hogarth的 (@sh1989) [文章](http://blog.scottlogic.com/2018/01/16/evaluating-redux-saga-test-libraries.html) 很好地总结了不同的选项。

对于逐步测试每个生成器的产出，有 [`redux-saga-test`][1] 和 [`redux-saga-testing`][2]。[`redux-saga-test-engine`][3] 用于记录和测试特定的副作用。对于集成测试，有 [`redux-saga-tester`][4]。而 [`redux-saga-test-plan`][5] 实际上可以覆盖所有三个基础。

### `redux-saga-test` 和 `redux-saga-testing` 用于逐步测试

`redux-saga-test` 库为你的逐步测试提供了语法糖。`fromGenerator` 函数返回一个可以用 `.next()` 手动迭代并使用相关的 saga 效果方法进行断言的值。

```javascript
import fromGenerator from 'redux-saga-test'

test('with redux-saga-test', () => {
  const generator = callApi('url')
  /*
   * 传递给 fromGenerator 的断言
   * 需要一个 `deepEqual` 方法
   */
  const expect = fromGenerator(assertions, generator)

  expect.next().select(somethingFromState)
  expect.next(selectedData).call(myApi, 'url', selectedData)
  expect.next(result).put(success(result.json))
})
```

`redux-saga-testing` 库提供了一个 `sagaHelper` 方法，它接受你的生成器并返回一个值，这个值的工作方式很像 Jest 的 `it()` 函数，但也推进了被测试的生成器。传入回调的 `result` 参数是生成器产出的值。

```javascript
import sagaHelper from 'redux-saga-testing'

test('with redux-saga-testing', () => {
  const it = sagaHelper(callApi())

  it('should select from state', selectResult => {
    // 使用 Jest 的 `expect`
    expect(selectResult).toBe(value)
  })

  it('should select from state', apiResponse => {
    // 不使用 tape 的 `test`
    assert.deepEqual(apiResponse.json(), jsonResponse)
  })

  // 空的 `it` 调用可以用来跳过一个效果
  it('', () => {})
})
```

### `redux-saga-test-plan`

这是最通用的库。`testSaga` API 用于精确顺序测试，`expectSaga` 用于记录副作用和集成测试。

```javascript
import { expectSaga, testSaga } from 'redux-saga-test-plan';

test('exact order with redux-saga-test-plan', () => {
  return testSaga(callApi, 'url')
    .next()
    .select(selectFromState)
    .next()
    .call(myApi, 'url', valueFromSelect);

    ...
});

test('recorded effects with redux-saga-test-plan', () => {
  /*
  * 使用 expectSaga，你可以断言你的 saga 中的任何产出
  * 都如预期那样发生，*无论顺序如何*。
  * 你必须在最后调用 .run()。
  */
  return expectSaga(callApi, 'url')
    .put(success(value)) // 我们的 saga 的最后一个效果，第一个被测试的

    .call(myApi, 'url', value)
    .run();
    /* 注意没有对 select 调用的断言 */
});

test('test only final effect with .provide()', () => {
  /*
  * 使用 expectSaga 的 .provide() 方法
  * 你可以传入所有预期的值
  * 并只测试你的 saga 的最终效果。
  */
  return expectSaga(callApi, 'url')
    .provide([
      [select(selectFromState), selectedValue],
      [call(myApi, 'url', selectedValue), response]
    ])
    .put(success(response))
    .run();
});

test('integration test with withReducer', () => {
  /*
  * 使用 `withReducer` 可以让你测试
  * 在你的 reducer 完成后的状态形状 -
  * 对你的 Redux 存储管理的真正集成测试。
  */

  return expectSaga(callApi, 'url')
    .withReducer(myReducer)
    .provide([
      [call(myApi, 'url', value), response]
    ])
    .hasFinalState({
      data: response
    })
    .run();
});
```

### redux-saga-test-engine

这个库的设置方式与`redux-saga-test-plan`非常相似，但最好用来记录效果。提供一组由`createSagaTestEngine`函数观察的saga通用效果集合，该函数反过来返回一个函数。然后提供你的saga和特定的效果及其参数。

```javascript
const collectedEffects  = createSagaTestEngine(['SELECT', 'CALL', 'PUT']);
const actualEffects = collectEffects(mySaga, [ [myEffect(arg), value], ... ], argsToMySaga);
```

`actualEffects`的值是一个数组，包含所有_收集到的_效果产生的值，按照出现的顺序。

```javascript
import createSagaTestEngine from 'redux-saga-test-engine'

test('使用redux-saga-test-engine进行测试', () => {
  const collectEffects = createSagaTestEngine(['CALL', 'PUT'])

  const actualEffects = collectEffects(
    callApi,
    [[select(selectFromState), selectedValue], [call(myApi, 'url', selectedValue), response]],
    // 任何进一步的参数都传递给saga
    // 这里是我们的URL，但通常会是派发的动作
    'url',
  )

  // 断言你关心的效果按预期发生，按顺序
  assert.equal(actualEffects[0], call(myApi, 'url', selectedValue))
  assert.equal(actualEffects[1], put(success, response))

  // 断言你的saga没有做任何意外的事情
  assert.true(actualEffects.length === 2)
})
```

### redux-saga-tester

最后一个考虑进行集成测试的库。这个库提供了一个`sagaTester`类，你可以用你的存储的初始状态和你的reducer来实例化它。

要测试你的saga，使用`sagaTester`实例的`start()`方法和你的saga及其参数。这将运行你的saga到结束。然后你可以断言效果发生，动作被派发，状态如预期更新。

```javascript
import SagaTester from 'redux-saga-tester';

test('使用redux-saga-tester', () => {
  const sagaTester = new SagaTester({
    initialState: defaultState,
    reducers: reducer
  });

  sagaTester.start(callApi);

  sagaTester.dispatch(actionToTriggerSaga());

  await sagaTester.waitFor(success);

  assert.true(sagaTester.wasCalled(success(response)));

  assert.deepEqual(sagaTester.getState(), { data: response });
});
```

## `effectMiddlewares`

提供了一种原生的方式来进行类似集成的测试，而不需要上述的库。

这个想法是，你可以在你的测试文件中创建一个带有saga中间件的真实redux存储。saga中间件接受一个对象作为参数。该对象将有一个`effectMiddlewares`值：一个函数，你可以在其中拦截/劫持任何效果并自行解决它 - 将它非常redux风格地传递给下一个中间件。

在你的测试中，你将启动一个saga，使用effectMiddlewares拦截/解决异步效果，并断言诸如状态更新之类的事情来测试你的saga和存储之间的集成。

这是[文档](https://github.com/redux-saga/redux-saga/blob/34c9093684323ab92eacdf2df958f31d9873d3b1/test/interpreter/effectMiddlewares.js#L88)中的一个例子：

```javascript
test('effectMiddleware', assert => {
  assert.plan(1)

  let actual = []

  function rootReducer(state = {}, action) {
    return action
  }

  const effectMiddleware = next => effect => {
    if (effect === apiCall) {
      Promise.resolve().then(() => next('injected value'))
      return
    }
    return next(effect)
  }

  const middleware = sagaMiddleware({ effectMiddlewares: [effectMiddleware] })
  const store = createStore(rootReducer, {}, applyMiddleware(middleware))

  const apiCall = call(() => new Promise(() => {}))

  function* root() {
    actual.push(yield all([call(fnA), apiCall]))
  }

  function* fnA() {
    const result = []
    result.push((yield take('ACTION-1')).val)
    result.push((yield take('ACTION-2')).val)
    return result
  }

  const task = middleware.run(root)

  Promise.resolve()
    .then(() => store.dispatch({ type: 'ACTION-1', val: 1 }))
    .then(() => store.dispatch({ type: 'ACTION-2', val: 2 }))

  const expected = [[[1, 2], 'injected value']]

  task
    .toPromise()
    .then(() => {
      assert.deepEqual(
        actual,
        expected,
        'effectMiddleware必须能够以自定义的方式拦截和解决效果',
      )
    })
    .catch(err => assert.fail(err))
})
```

[1]: https://github.com/stoeffel/redux-saga-test
[2]: https://github.com/antoinejaussoin/redux-saga-testing/
[3]: https://github.com/DNAinfo/redux-saga-test-engine
[4]: https://github.com/wix/redux-saga-tester
[5]: https://github.com/jfairbank/redux-saga-test-plan
