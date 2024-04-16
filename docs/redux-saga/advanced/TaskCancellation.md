---
title: 任务取消
hide_title: true
---

# 任务取消

我们已经在[非阻塞调用](NonBlockingCalls.md)部分看到了取消的例子。在这个部分，我们将更详细地回顾取消。

一旦一个任务被分叉，你可以使用 `yield cancel(task)` 来中止它的执行。

为了看到它是如何工作的，让我们考虑一个基本的例子：一个可以通过一些UI命令启动/停止的后台同步。在接收到 `START_BACKGROUND_SYNC` 动作后，我们分叉一个后台任务，该任务将定期从远程服务器同步一些数据。

该任务将一直执行，直到触发 `STOP_BACKGROUND_SYNC` 动作。然后我们取消后台任务，并再次等待下一个 `START_BACKGROUND_SYNC` 动作。

```javascript
import { take, put, call, fork, cancel, cancelled, delay } from 'redux-saga/effects'
import { someApi, actions } from 'somewhere'

function* bgSync() {
  try {
    while (true) {
      yield put(actions.requestStart())
      const result = yield call(someApi)
      yield put(actions.requestSuccess(result))
      yield delay(5000)
    }
  } finally {
    if (yield cancelled())
      yield put(actions.requestFailure('同步取消！'))
  }
}

function* main() {
  while ( yield take('START_BACKGROUND_SYNC') ) {
    // 在后台启动任务
    const bgSyncTask = yield fork(bgSync)

    // 等待用户停止动作
    yield take('STOP_BACKGROUND_SYNC')
    // 用户点击停止。取消后台任务
    // 这将导致分叉的 bgSync 任务跳入其 finally 块
    yield cancel(bgSyncTask)
  }
}
```

在上面的例子中，`bgSyncTask` 的取消将使用 [Generator.prototype.return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return) 使生成器直接跳到 finally 块。在这里，你可以使用 `yield cancelled()` 来检查生成器是否已被取消。

取消正在运行的任务也将取消任务在取消时刻被阻塞的当前效果。

例如，假设在应用程序的某个生命周期点，我们有这个待处理的调用链：

```javascript
function* main() {
  const task = yield fork(subtask)
  ...
  // later
  yield cancel(task)
}

function* subtask() {
  ...
  yield call(subtask2) // currently blocked on this call
  ...
}

function* subtask2() {
  ...
  yield call(someApi) // currently blocked on this call
  ...
}
```

`yield cancel(task)` 触发了对 `subtask` 的取消，这反过来又触发了对 `subtask2` 的取消。

所以我们看到取消是向下传播的（与返回值和未捕获的错误向上传播形成对比）。你可以将其看作是调用者（调用异步操作的人）和被调用者（被调用的操作）之间的*契约*。被调用者负责执行操作。如果它已经完成（无论是成功还是错误），结果将向上传播到它的调用者，最终传播到调用者的调用者等等。也就是说，被调用者负责*完成流程*。

现在，如果被调用者仍然在等待，而调用者决定取消操作，它会触发一种信号，这种信号会向下传播到被调用者（可能还有被调用者自己调用的任何深层操作）。所有深层等待的操作都将被取消。

取消还有另一个方向可以传播：任务的 joiners（那些在 `yield join(task)` 上被阻塞的人）如果被 join 的任务被取消，他们也会被取消。同样，那些 joiners 的任何潜在调用者也将被取消（因为他们被阻塞在一个已经从外部被取消的操作上）。

## 测试带有 fork 效果的生成器

当调用 `fork` 时，它会在后台启动任务，并返回任务对象，就像我们之前学过的那样。在测试这个时，我们必须使用 `createMockTask` 实用函数。这个函数返回的对象应该在 fork 测试后的下一个 `next` 调用中传递。然后可以将模拟任务传递给 `cancel`。这是对本页顶部的 `main` 生成器的测试。

```javascript
import { createMockTask } from '@redux-saga/testing-utils';

describe('main', () => {
  const generator = main();

  it('waits for start action', () => {
    const expectedYield = take('START_BACKGROUND_SYNC');
    expect(generator.next().value).to.deep.equal(expectedYield);
  });

  it('forks the service', () => {
    const expectedYield = fork(bgSync);
    const mockedAction = { type: 'START_BACKGROUND_SYNC' };
    expect(generator.next(mockedAction).value).to.deep.equal(expectedYield);
  });

  it('waits for stop action and then cancels the service', () => {
    const mockTask = createMockTask();

    const expectedTakeYield = take('STOP_BACKGROUND_SYNC');
    expect(generator.next(mockTask).value).to.deep.equal(expectedTakeYield);

    const expectedCancelYield = cancel(mockTask);
    expect(generator.next().value).to.deep.equal(expectedCancelYield);
  });
});
```

你可以使用模拟任务的 `setResult`，`setError` 和 `cancel` 方法来控制它的状态。例如 `mockTask.setResult(42)` 将设置其内部状态为 Done，任何给定该任务的 `join` 效果将返回 `42`。

在已经调用了其中一个之后，再次调用 `setResult`，`setError` 或 `cancel` 来尝试第二次改变其状态，将抛出错误。

### 注意

重要的是要记住，`yield cancel(task)` 不会等待被取消的任务完成（即执行其 finally 块）。取消效果的行为就像 fork 一样。它会在取消开始后立即返回。一旦被取消，任务通常应该在完成其清理逻辑后尽快返回。

## 自动取消

除了手动取消，还有一些情况下会自动触发取消

1. 在 `race` 效果中。所有的 race 竞争者，除了赢家，都会被自动取消。

2. 在并行效果中（`yield all([...])`）。一旦其中一个子效果被拒绝（如 `Promise.all` 所示），并行效果就会被拒绝。在这种情况下，所有其他的子效果都会被自动取消。
