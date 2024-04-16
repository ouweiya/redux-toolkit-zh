---
title: 非阻塞调用
hide_title: true
---

# 非阻塞调用

在上一节中，我们看到了如何使用 `take` Effect 更好地在一个中心位置描述一个非平凡的流程。

回顾一下登录流程的例子：

```javascript
function* loginFlow() {
  while (true) {
    yield take('LOGIN')
    // ... 执行登录逻辑
    yield take('LOGOUT')
    // ... 执行登出逻辑
  }
}
```

让我们完成这个例子并实现实际的登录/登出逻辑。假设我们有一个 API，它允许我们在远程服务器上授权用户。如果授权成功，服务器将返回一个授权令牌，我们的应用程序将使用 DOM 存储来存储它（假设我们的 API 提供了另一个用于 DOM 存储的服务）。

当用户登出时，我们将删除之前存储的授权令牌。

### 第一次尝试

到目前为止，我们已经有了所有需要实现上述流程的 Effects。我们可以使用 `take` Effect 在存储中等待特定的动作。我们可以使用 `call` Effect 进行异步调用。最后，我们可以使用 `put` Effect 向存储中派发动作。

让我们试一试：

> 注意：下面的代码有一个微妙的问题。请确保阅读到本节的最后。

```javascript
import { take, call, put } from 'redux-saga/effects'
import Api from '...'

function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    return token
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
}

function* loginFlow() {
  while (true) {
    const {user, password} = yield take('LOGIN_REQUEST')
    const token = yield call(authorize, user, password)
    if (token) {
      yield call(Api.storeItem, {token})
      yield take('LOGOUT')
      yield call(Api.clearItem, 'token')
    }
  }
}
```

首先，我们创建了一个单独的 Generator `authorize`，它将执行实际的 API 调用并在成功时通知 Store。

`loginFlow` 在 `while (true)` 循环内实现其整个流程，这意味着一旦我们到达流程的最后一步（`LOGOUT`），我们就会开始新的迭代，等待新的 `LOGIN_REQUEST` 动作。

`loginFlow` 首先等待一个 `LOGIN_REQUEST` 动作。然后，它在动作负载中检索凭据（`user` 和 `password`），并对 `authorize` 任务进行 `call`。

如你所见，`call` 不仅用于调用返回 Promise 的函数。我们也可以用它来调用其他 Generator 函数。在上面的例子中，**`loginFlow` 将等待 authorize 直到它终止并返回**（即在执行 api 调用、派发动作然后将令牌返回给 `loginFlow` 之后）。

如果 API 调用成功，`authorize` 将派发一个 `LOGIN_SUCCESS` 动作，然后返回获取的令牌。如果出现错误，它将派发一个 `LOGIN_ERROR` 动作。

如果对 `authorize` 的调用成功，`loginFlow` 将在 DOM 存储中存储返回的令牌，并等待一个 `LOGOUT` 动作。当用户登出时，我们删除存储的令牌并等待新的用户登录。

如果 `authorize` 失败，它将返回 `undefined`，这将导致 `loginFlow` 跳过前面的过程并等待新的 `LOGIN_REQUEST` 动作。

注意整个逻辑都存储在一个地方。新的开发者阅读我们的代码时不必在各个地方来回跳转以理解控制流程。这就像阅读一个同步算法：步骤按照自然顺序排列。我们有函数调用其他函数并等待它们的结果。

### 但是上述方法仍然存在一个微妙的问题

假设当 `loginFlow` 正在等待以下调用解决时：

```javascript
function* loginFlow() {
  while (true) {
    // ...
    try {
      const token = yield call(authorize, user, password)
      // ...
    }
    // ...
  }
}
```

用户点击了 `Logout` 按钮，导致派发了一个 `LOGOUT` 动作。

以下示例说明了事件的假设顺序：

```
UI                              loginFlow
--------------------------------------------------------
LOGIN_REQUEST...................call authorize.......... 等待解决
........................................................
........................................................
LOGOUT.................................................. 错过了！
........................................................
................................authorize 返回了........ 派发一个 `LOGIN_SUCCESS`!!
........................................................
```

当 `loginFlow` 在 `authorize` 调用上被阻塞时，调用和响应之间发生的任何 `LOGOUT` 都会被错过，因为 `loginFlow` 还没有执行 `yield take('LOGOUT')`。

上述代码的问题在于 `call` 是一个阻塞效应。也就是说，生成器在调用结束之前不能执行/处理其他任何事情。但在我们的情况下，我们不仅希望 `loginFlow` 执行授权调用，还希望在此调用中间观察可能发生的 `LOGOUT` 动作。这是因为 `LOGOUT` 是与 `authorize` 调用 *并发* 的。

所以，我们需要的是一种启动 `authorize` 而不阻塞 `loginFlow` 的方法，这样 `loginFlow` 就可以继续并观察可能的/并发的 `LOGOUT` 动作。

为了表达非阻塞调用，库提供了另一个效应：[`fork`](https://redux-saga.js.org/docs/api/index.html#forkfn-args)。当我们 fork 一个 *任务* 时，任务在后台启动，调用者可以在不等待 fork 的任务结束的情况下继续其流程。

所以，为了让 `loginFlow` 不错过并发的 `LOGOUT`，我们不能 `call` `authorize` 任务，而必须 `fork` 它。

```javascript
import { fork, call, take, put } from 'redux-saga/effects'

function* loginFlow() {
  while (true) {
    ...
    try {
      // 非阻塞调用，这里返回的值是什么？
      const ?? = yield fork(authorize, user, password)
      ...
    }
    ...
  }
}
```

现在的问题是，由于我们的 `authorize` 动作在后台启动，我们无法获取 `token` 结果（因为我们必须等待它）。所以我们需要将 token 存储操作移动到 `authorize` 任务中。

```javascript
import { fork, call, take, put } from 'redux-saga/effects'
import Api from '...'

function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    yield call(Api.storeItem, {token})
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
}

function* loginFlow() {
  while (true) {
    const {user, password} = yield take('LOGIN_REQUEST')
    yield fork(authorize, user, password)
    yield take(['LOGOUT', 'LOGIN_ERROR'])
    yield call(Api.clearItem, 'token')
  }
}
```

我们也在做 `yield take(['LOGOUT', 'LOGIN_ERROR'])`。这意味着我们正在同时监视两个动作：

- 如果 `authorize` 任务在用户登出之前成功，它将分发一个 `LOGIN_SUCCESS` 动作，然后终止。我们的 `loginFlow` saga 将只等待未来的 `LOGOUT` 动作（因为 `LOGIN_ERROR` 永远不会发生）。

- 如果 `authorize` 在用户登出之前失败，它将分发一个 `LOGIN_ERROR` 动作，然后终止。所以 `loginFlow` 会在 `LOGOUT` 之前接收到 `LOGIN_ERROR`，然后它将进入另一个 `while` 迭代，并等待下一个 `LOGIN_REQUEST` 动作。

- 如果用户在 `authorize` 结束之前登出，那么 `loginFlow` 将接收到一个 `LOGOUT` 动作，并等待下一个 `LOGIN_REQUEST`。

注意，对 `Api.clearItem` 的调用应该是幂等的。如果 `authorize` 调用没有存储令牌，它将没有效果。`loginFlow` 确保在等待下一次登录之前，存储中不会有令牌。

但我们还没有完成。如果我们在 API 调用过程中接收到 `LOGOUT`，我们必须**取消** `authorize` 过程，否则我们将有两个并行的任务：`authorize` 任务将继续运行，并在成功（或失败）后，分发一个 `LOGIN_SUCCESS`（或 `LOGIN_ERROR`）动作，导致状态不一致。

为了取消一个 forked 任务，我们使用一个专用的 Effect [`cancel`](https://redux-saga.js.org/docs/api/index.html#canceltask)

```javascript
import { take, put, call, fork, cancel } from 'redux-saga/effects'

// ...

function* loginFlow() {
  while (true) {
    const {user, password} = yield take('LOGIN_REQUEST')
    // fork 返回一个 Task 对象
    const task = yield fork(authorize, user, password)
    const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
    if (action.type === 'LOGOUT')
      yield cancel(task)
    yield call(Api.clearItem, 'token')
  }
}
```

`yield fork` 产生一个 [Task 对象](https://redux-saga.js.org/docs/api/index.html#task)。我们将返回的对象赋值给一个本地常量 `task`。稍后，如果我们接收到一个 `LOGOUT` 动作，我们将该任务传递给 `cancel` Effect。如果任务仍在运行，它将被中止。如果任务已经完成，那么什么都不会发生，取消将导致无操作。最后，如果任务以错误完成，那么我们什么都不做，因为我们知道任务已经完成。

我们*几乎*完成了（并发并不那么简单；你必须认真对待）。

假设当我们接收到一个 `LOGIN_REQUEST` 动作时，我们的 reducer 将某个 `isLoginPending` 标志设置为 true，以便在 UI 中显示一些消息或旋转器。如果我们在 API 调用过程中接收到 `LOGOUT` 并通过*杀死它*（即任务立即停止）来中止任务，那么我们可能会再次处于不一致的状态。我们仍然将 `isLoginPending` 设置为 true，我们的 reducer 将等待一个结果动作（`LOGIN_SUCCESS` 或 `LOGIN_ERROR`）。

幸运的是，`cancel` Effect 不会粗暴地杀死我们的 `authorize` 任务。相反，它会给它一个执行清理逻辑的机会。被取消的任务可以在其 `finally` 块中处理任何取消逻辑（以及任何其他类型的完成）。由于 finally 块在任何类型的完成（正常返回、错误或强制取消）上执行，所以有一个 Effect `cancelled`，你可以使用它如果你想以特殊的方式处理取消：

```javascript
import { take, call, put, cancelled } from 'redux-saga/effects'
import Api from '...'

function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    yield call(Api.storeItem, {token})
    return token
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  } finally {
    if (yield cancelled()) {
      // ... 在这里放置特殊的取消处理代码
    }
  }
}
```

你可能已经注意到，我们还没有做任何关于清除我们的 `isLoginPending` 状态的事情。对此，至少有两种可能的解决方案：

- 分发一个专用的动作 `RESET_LOGIN_PENDING`
- 让 reducer 在 `LOGOUT` 动作上清除 `isLoginPending`
