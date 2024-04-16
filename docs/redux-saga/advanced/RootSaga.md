---
title: 根 Saga
hide_title: true
---

# 根 Saga 模式

根 Saga 将多个 Saga 聚合到一个单一的入口点，供 sagaMiddleware 运行。

在[初级教程](../introduction/BeginnerTutorial.md)中，展示了你的根 saga 可能会像这样：

```javascript
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
  // all-effect 之后的代码
}
```

这是实现根的几种方式之一。这里，`all` 效果用于数组，你的 sagas 将并行执行。其他根实现可能会帮助你更好地处理错误和更复杂的数据流。

## 非阻塞 fork 效果

贡献者 @slorber 在 [issue#760](https://github.com/redux-saga/redux-saga/issues/760) 中提到了其他几种常见的根实现。首先，有一种流行的实现方式，其行为类似于教程中的根 saga 行为：

```javascript
export default function* rootSaga() {
  yield fork(saga1)
  yield fork(saga2)
  yield fork(saga3)
  // fork-effect 之后的代码
}
```

使用三个独特的 `yield fork` 将返回三次任务描述符。你的应用程序中的结果行为是所有的子 saga 都按照相同的顺序开始和执行。由于 `fork` 是非阻塞的，`rootSaga` 可以在子 saga 继续运行并被其内部效果阻塞的同时完成。

一个大的 all 效果和几个 fork 效果之间的区别是，`all` 效果是阻塞的，所以 *all-effect 之后的代码*（参见上述代码中的注释）在所有子 saga 完成时执行，而 `fork` 效果是非阻塞的，所以 *fork-effect 之后的代码* 在产生 fork 效果后立即执行。另一个区别是，当使用 fork 效果时，你可以得到任务描述符，所以在后续的代码中，你可以通过任务描述符取消/加入 forked 任务。

## 在 all 效果中嵌套 fork 效果

```javascript
const [task1, task2, task3] = yield all([ fork(saga1), fork(saga2), fork(saga3) ])
```

设计根 saga 时有另一种流行的模式：在 `all` 效果中嵌套 `fork` 效果。这样做，你可以得到一个任务描述符数组，`all` 效果之后的代码将立即执行，因为每个 `fork` 效果都是非阻塞的，并同步返回一个任务描述符。

请注意，尽管 `fork` 效果嵌套在 `all` 效果中，但它们总是通过底层的 forkQueue 与父任务连接。来自 forked 任务的未捕获错误会冒泡到父任务，从而中止它（及其所有子任务） - 它们不能被父任务捕获。

## 避免在 race 效果中嵌套 fork 效果

```javascript
// 不要这样做。fork 效果总是立即赢得比赛。
yield race([
  fork(someSaga),
  take('SOME-ACTION'),
  somePromise,
])
```

另一方面，`race` 效果中的 `fork` 效果很可能是一个 bug。在上述代码中，由于 `fork` 效果是非阻塞的，它们总是会立即赢得比赛。

## 保持根活跃

在实践中，这些实现并不实用，因为你的 `rootSaga` 将在任何单个子效果或 saga 的第一个错误上终止，并崩溃你的整个应用！特别是 Ajax 请求会使你的应用程序完全依赖于你的应用程序向其发出请求的任何端点的状态。

`spawn` 是一个效果，它会将你的子 saga 与其父级断开连接，使其可以在不崩溃其父级的情况下失败。显然，这并不能免除我们作为开发者处理错误的责任。实际上，这可能会从开发者的视角掩盖某些失败，导致后续问题。

[`spawn`](../API.md#spawnfn-args) 效果可能被认为类似于 React 中的 [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)，它可以在 saga 树的某个级别作为额外的安全措施使用，切断失败的功能，不让整个应用崩溃。区别在于，没有像 React Error Boundaries 那样的特殊语法 `componentDidCatch`。你仍然需要编写自己的错误处理和恢复代码。

```javascript
export default function* rootSaga() {
  yield spawn(saga1)
  yield spawn(saga2)
  yield spawn(saga3)
}
```

在这个实现中，即使一个 saga 失败，`rootSaga` 和其他 sagas 也不会被杀死。然而，这也可能是有问题的，因为失败的 saga 在应用的生命周期内将无法使用。

## 保持所有事物活跃

在某些情况下，你可能希望你的 sagas 能够在失败后重新启动。好处是你的应用和 sagas 可能在失败后继续工作，例如，一个 `yield takeEvery(myActionType)` 的 saga。但我们不建议这作为保持所有 sagas 活跃的一揽子解决方案。很可能让你的 saga 在理智和可预测的情况下失败，并处理/记录你的错误更有意义。

例如，@ajwhite 提供了这样一个场景，作为保持你的 saga 活跃会导致更多问题的一个案例：

```javascript
function* sagaThatMayCrash () {
  // 等待一些在应用启动期间发生的事情
  yield take('APP_INITIALIZED')

  // 假设它在这里死掉
  yield call(doSomethingThatMayCrash)
}
```

> 如果 sagaThatMayCrash 重启，它将重启并等待一个只在应用启动时发生一次的动作。在这种情况下，它重启，但它永远不会恢复。

但对于那些从开始就会受益的特定情况，用户 @granmoe 在 [issue#570](https://github.com/redux-saga/redux-saga/issues/570) 中提出了这样的实现：

```javascript
function* rootSaga () {
  const sagas = [
    saga1,
    saga2,
    saga3,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}
```

这种策略将我们的子 sagas 映射到生成的生成器（将它们从根父级分离），这些生成器在 `try` 块中启动我们的 sagas 作为子任务。我们的 saga 将运行到终止，然后自动重启。`catch` 块无害地处理了可能已经被抛出并终止了我们的 saga 的任何错误。
