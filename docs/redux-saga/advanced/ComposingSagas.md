---
title: 编写 Sagas
hide_title: true
---

# 组合 Sagas

虽然使用 `yield*` 提供了一种组合 Sagas 的习惯性方式，但这种方法有一些限制：

- 你可能会希望单独测试嵌套的生成器。这会导致测试代码中的一些重复，以及重复执行的开销。我们不希望执行嵌套的生成器，只希望确保对它的调用是用正确的参数发出的。

- 更重要的是，`yield*` 只允许任务的顺序组合，所以你一次只能 `yield*` 到一个生成器。

你可以使用 `yield` 同时启动一个或多个子任务。当对生成器的调用产生 yield 时，Saga 会等待生成器终止后再继续，然后用返回的值恢复（或者如果错误从子任务传播，则抛出）。

```javascript
function* fetchPosts() {
  yield put(actions.requestPosts())
  const products = yield call(fetchApi, '/products')
  yield put(actions.receivePosts(products))
}

function* watchFetch() {
  while (yield take('FETCH_POSTS')) {
    yield call(fetchPosts) // 等待 fetchPosts 任务终止
  }
}
```

对嵌套生成器的数组产生 yield 会同时启动所有的子生成器，等待它们完成，然后用所有的结果恢复

```javascript
function* mainSaga(getState) {
  const results = yield all([call(task1), call(task2), ...])
  yield put(showResults(results))
}
```

实际上，产生 Sagas 的 yield 与产生其他效果（未来的动作，超时等）没有区别。这意味着你可以使用效果组合器将这些 Sagas 与所有其他类型组合。

例如，你可能希望用户在有限的时间内完成一些游戏：

```javascript
function* game(getState) {
  let finished
  while (!finished) {
    // 必须在60秒内完成
    const {score, timeout} = yield race({
      score: call(play, getState),
      timeout: delay(60000)
    })

    if (!timeout) {
      finished = true
      yield put(showScore(score))
    }
  }
}
```
