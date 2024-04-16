---
title: 未来的操作
hide_title: true
---

# 获取未来的操作

到目前为止，我们已经使用了辅助效果 `takeEvery` 来在每个传入的操作上生成一个新的任务。这在某种程度上模仿了 `redux-thunk` 的行为：每次一个组件，例如，调用一个 `fetchProducts` 操作创建器，操作创建器将分派一个 thunk 来执行控制流。

实际上，`takeEvery` 只是一个包装效果，用于内部辅助函数，这些函数是基于更低级别和更强大的 API 构建的。在本节中，我们将看到一个新的效果，`take`，它通过允许完全控制操作观察过程，使得构建复杂的控制流成为可能。

## 一个基本的记录器

让我们看一个基本的例子，一个 Saga 监视所有分派到存储的操作，并将它们记录到控制台。

使用 `takeEvery('*')`（带有通配符 `*` 的模式），我们可以捕获所有分派的操作，无论它们的类型是什么。

```javascript
import { select, takeEvery } from 'redux-saga/effects'

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  })
}
```

现在让我们看看如何使用 `take` 效果来实现上述相同的流程：

```javascript
import { select, take } from 'redux-saga/effects'

function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}
```

`take` 就像我们之前看到的 `call` 和 `put`。它创建了另一个命令对象，告诉中间件等待一个特定的操作。`call` 效果的结果行为与中间件挂起生成器直到 Promise 解析时相同。在 `take` 的情况下，它将挂起生成器，直到分派一个匹配的操作。在上面的例子中，`watchAndLog` 被挂起，直到任何操作被分派。

注意我们正在运行一个无尽的循环 `while (true)`。记住，这是一个生成器函数，它没有运行到完成的行为。我们的生成器将在每次迭代时阻塞，等待一个操作发生。

使用 `take` 对我们编写代码的方式有一个微妙的影响。在 `takeEvery` 的情况下，被调用的任务无法控制它们何时被调用。它们将在每个匹配的操作上被反复调用。它们也无法控制何时停止观察。

在 `take` 的情况下，控制权被反转。而不是操作被 *推送* 到处理器任务，Saga 是自己 *拉取* 操作。它看起来就像 Saga 在执行一个正常的函数调用 `action = getNextAction()`，当操作被分派时，它将解析。

这种控制权的反转使我们能够实现传统的 *推送* 方法难以实现的控制流。

作为一个基本的例子，假设在我们的 Todo 应用程序中，我们想要观察用户操作，并在用户创建了他们的前三个 todos 之后显示一个祝贺消息。

```javascript
import { take, put } from 'redux-saga/effects'

function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take('TODO_CREATED')
  }
  yield put({type: 'SHOW_CONGRATULATION'})
}
```

我们运行的是一个 `for` 循环，而不是一个 `while (true)`，它只会迭代三次。在取得前三个 `TODO_CREATED` 操作之后，`watchFirstThreeTodosCreation` 将导致应用程序显示一个祝贺消息，然后终止。这意味着生成器将被垃圾收集，不再进行观察。

拉取方法的另一个好处是，我们可以使用熟悉的同步风格来描述我们的控制流。例如，假设我们想要实现一个登录流程，有两个操作：`LOGIN` 和 `LOGOUT`。使用 `takeEvery`（或 `redux-thunk`），我们将不得不写两个独立的任务（或 thunks）：一个用于 `LOGIN`，另一个用于 `LOGOUT`。

结果是，我们的逻辑现在分散在两个地方。为了让读我们代码的人理解它，他们将不得不阅读两个处理器的源代码，并在他们的头脑中建立逻辑之间的联系。换句话说，这意味着他们将不得不通过在他们的头脑中以正确的顺序重新排列放置在代码的各个地方的逻辑，来重建流程的模型。

使用拉取模型，我们可以在同一个地方写我们的流程，而不是反复处理同一个操作。

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

`loginFlow` Saga 更清楚地传达了预期的操作序列。它知道 `LOGIN` 操作应该总是被 `LOGOUT` 操作跟随，而 `LOGOUT` 总是被 `LOGIN` 跟随（一个好的 UI 应该总是通过隐藏或禁用意外的操作来强制执行操作的一致顺序）。
