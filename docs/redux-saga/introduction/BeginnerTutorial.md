---
title: 初级教程
hide_title: true
---

# 初学者教程

## 本教程的目标

本教程试图以一种（希望）易于理解的方式介绍redux-saga。

在我们的入门教程中，我们将使用Redux仓库中的简单Counter演示。这个应用程序非常基础，但很适合阐述redux-saga的基本概念，而不会迷失在过多的细节中。

### 初始设置

在我们开始之前，克隆[教程仓库](https://github.com/redux-saga/redux-saga-beginner-tutorial)。

> 本教程的最终代码位于`sagas`分支。

然后在命令行中运行：

```sh
$ cd redux-saga-beginner-tutorial
$ npm install
```

要启动应用程序，运行：

```sh
$ npm start
```

编译完成后，用浏览器打开[http://localhost:9966](http://localhost:9966)。

我们从最基本的用例开始：2个按钮`Increment`和`Decrement`用于计数器。稍后，我们将引入异步调用。

如果一切顺利，你应该看到2个按钮`Increment`和`Decrement`，以及下面显示`Counter: 0`的消息。

> 如果你在运行应用程序时遇到问题，欢迎在[教程仓库](https://github.com/redux-saga/redux-saga-beginner-tutorial/issues)创建问题。

## Hello Sagas!

我们将创建我们的第一个Saga。按照传统，我们将为Sagas编写我们的'Hello, world'版本。

创建一个`sagas.js`文件，然后添加以下代码片段：

```javascript
export function* helloSaga() {
  console.log('Hello Sagas!')
}
```

所以没有什么可怕的，只是一个普通的函数（除了`*`）。它所做的只是在控制台打印一个问候消息。

为了运行我们的Saga，我们需要：

- 创建一个带有要运行的Sagas列表的Saga中间件（到目前为止，我们只有一个`helloSaga`）
- 将Saga中间件连接到Redux store

我们将对`main.js`进行更改：

```javascript
// ...
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// ...
import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})

// 其余部分不变
```

首先，我们从`./sagas`模块导入我们的Saga。然后我们使用`redux-saga`库导出的工厂函数`createSagaMiddleware`创建一个中间件。

在运行我们的`helloSaga`之前，我们必须使用`applyMiddleware`将我们的中间件连接到Store。然后我们可以使用`sagaMiddleware.run(helloSaga)`来启动我们的Saga。

到目前为止，我们的Saga没有做什么特别的事情。它只是记录一条消息然后退出。

## 进行异步调用

现在让我们添加一些更接近原始 Counter 示例的内容。为了说明异步调用，我们将添加另一个按钮，在点击后一秒钟增加计数器。

首先，我们将为 UI 组件提供一个额外的按钮和一个回调 `onIncrementAsync`。

我们将对 `Counter.js` 进行更改：

```javascript
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      一秒后增加
    </button>
    {' '}
    <button onClick={onIncrement}>
      增加
    </button>
    {' '}
    <button onClick={onDecrement}>
      减少
    </button>
    <hr />
    <div>
      点击了: {value} 次
    </div>
  </div>
```

接下来，我们应该将组件的 `onIncrementAsync` 连接到 Store 操作。

我们将如下修改 `main.js` 模块

```javascript
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}
```

注意，与 redux-thunk 不同，我们的组件分派一个普通对象操作。

现在我们将引入另一个 Saga 来执行异步调用。我们的用例如下：

> 对于每一个 `INCREMENT_ASYNC` 操作，我们希望启动一个任务，该任务将执行以下操作

> - 等待 1 秒，然后增加计数器

将以下代码添加到 `sagas.js` 模块：

```javascript
import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

// 我们的 worker Saga：将执行异步增加任务
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// 我们的 watcher Saga：在每个 INCREMENT_ASYNC 上产生一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
```

是时候解释一下了。

我们创建了一个 `delay` 函数，该函数返回一个 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，该 Promise 将在指定的毫秒数后解析。我们将使用这个函数来 *阻塞* 生成器。

Sagas 是实现为 [Generator 函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)，它们 *yield* 对象给 redux-saga 中间件。yield 的对象是一种由中间件解释的指令。当一个 Promise 被 yield 给中间件时，中间件将挂起 Saga，直到 Promise 完成。在上面的例子中，`incrementAsync` Saga 被挂起，直到 `delay` 返回的 Promise 解析，这将在 1 秒后发生。

一旦 Promise 解析，中间件将恢复 Saga，执行代码直到下一个 yield。在这个例子中，下一个语句是另一个 yield 对象：调用 `put({type: 'INCREMENT'})` 的结果，它指示中间件分派一个 `INCREMENT` 操作。

`put` 是我们所说的 *Effect* 的一个例子。Effects 是包含由中间件完成的指令的普通 JavaScript 对象。当中间件检索到由 Saga yield 的 Effect 时，Saga 将被暂停，直到 Effect 被完成。

所以总结一下，`incrementAsync` Saga 通过调用 `delay(1000)` 休眠 1 秒，然后分派一个 `INCREMENT` 操作。

接下来，我们创建了另一个 Saga `watchIncrementAsync`。我们使用 `redux-saga` 提供的帮助函数 `takeEvery`，监听分派的 `INCREMENT_ASYNC` 操作，并每次运行 `incrementAsync`。

现在我们有了 2 个 Sagas，我们需要同时启动它们。为此，我们将添加一个负责启动我们其他 Sagas 的 `rootSaga`。在同一个文件 `sagas.js` 中，按照以下方式重构文件：

```javascript
import { put, takeEvery, all } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// 注意我们现在只导出 rootSaga
// 同时启动所有 Sagas 的单一入口点
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
```

这个 Saga yield 了一个数组，数组中包含调用我们两个 sagas，`helloSaga` 和 `watchIncrementAsync` 的结果。这意味着两个生成的 Generators 将并行启动。现在我们只需要在 `main.js` 中对 root Saga 调用 `sagaMiddleware.run`。

```javascript
// ...
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = ...
sagaMiddleware.run(rootSaga)

// ...
```

## 使我们的代码可测试

我们想要测试我们的 `incrementAsync` Saga，以确保它执行了期望的任务。

创建另一个文件 `sagas.spec.js`：

```javascript
import test from 'tape'

import { incrementAsync } from './sagas'

test('incrementAsync Saga 测试', (assert) => {
  const gen = incrementAsync()

  // 现在该怎么办？
})
```

`incrementAsync` 是一个生成器函数。当运行时，它返回一个迭代器对象，迭代器的 `next` 方法返回以下形状的对象

```javascript
gen.next() // => { done: boolean, value: any }
```

`value` 字段包含产生的表达式，即 `yield` 后的表达式结果。`done` 字段表示生成器是否已终止或是否还有更多的 'yield' 表达式。

在 `incrementAsync` 的情况下，生成器连续产生两个值：

1. `yield delay(1000)`
2. `yield put({type: 'INCREMENT'})`

所以，如果我们连续三次调用生成器的 next 方法，我们会得到以下结果：

```javascript
gen.next() // => { done: false, value: <调用 delay(1000) 的结果> }
gen.next() // => { done: false, value: <调用 put({type: 'INCREMENT'}) 的结果> }
gen.next() // => { done: true, value: undefined }
```

前两次调用返回 yield 表达式的结果。在第三次调用时，由于没有更多的 yield，`done` 字段被设置为 true。并且，由于 `incrementAsync` 生成器没有返回任何东西（没有 `return` 语句），`value` 字段被设置为 `undefined`。

所以现在，为了测试 `incrementAsync` 内部的逻辑，我们必须遍历返回的生成器并检查生成器产生的值。

```javascript
import test from 'tape'

import { incrementAsync } from './sagas'

test('incrementAsync Saga 测试', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next(),
    { done: false, value: ??? },
    'incrementAsync 应返回一个 Promise，该 Promise 将在 1 秒后解析'
  )
})
```

问题是我们如何测试 `delay` 的返回值？我们不能对 Promise 进行简单的等式测试。如果 `delay` 返回一个*正常*的值，测试就会更容易。

好的，`redux-saga` 提供了一种方式使上述声明成为可能。我们不是直接在 `incrementAsync` 中调用 `delay(1000)`，而是*间接*调用它并导出它，以使后续的深度比较成为可能：

```javascript
import { put, takeEvery, all, call } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...

export function* incrementAsync() {
  // 使用 call Effect
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}
```

我们现在不是做 `yield delay(1000)`，而是做 `yield call(delay, 1000)`。有什么区别？

在第一种情况下，yield 表达式 `delay(1000)` 在传递给 `next` 的调用者之前被评估（调用者可以是运行我们的代码时的中间件。也可以是运行生成器函数并遍历返回的生成器的测试代码）。所以调用者得到的是一个 Promise，就像上面的测试代码一样。

在第二种情况下，yield 表达式 `call(delay, 1000)` 是传递给 `next` 的调用者的。`call` 就像 `put` 一样，返回一个 Effect，该 Effect 指示中间件使用给定的参数调用给定的函数。事实上，`put` 和 `call` 本身都不执行任何 dispatch 或异步调用，它们返回纯 JavaScript 对象。

```javascript
put({type: 'INCREMENT'}) // => { PUT: {type: 'INCREMENT'} }
call(delay, 1000)        // => { CALL: {fn: delay, args: [1000]}}
```

发生的是，中间件检查每个产生的 Effect 的类型，然后决定如何满足该 Effect。如果 Effect 类型是 `PUT`，那么它将向 Store 发送一个 action。如果 Effect 是 `CALL`，那么它将调用给定的函数。

这种 Effect 创建和 Effect 执行的分离使得测试我们的生成器变得惊人地简单：

```javascript
import test from 'tape'

import { put, call } from 'redux-saga/effects'
import { incrementAsync, delay } from './sagas'

test('incrementAsync Saga 测试', (assert) => {
  const gen = incrementAsync()

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync Saga 必须调用 delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({type: 'INCREMENT'}),
    'incrementAsync Saga 必须派发一个 INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsync Saga 必须完成'
  )

  assert.end()
})
```

由于 `put` 和 `call` 返回纯对象，我们可以在我们的测试代码中重用相同的函数。并且为了测试 `incrementAsync` 的逻辑，我们遍历生成器并对其值进行 `deepEqual` 测试。

要运行上述测试，运行：

```sh
$ npm test
```

这应该在控制台上报告结果。
