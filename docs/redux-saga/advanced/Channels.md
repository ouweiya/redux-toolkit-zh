---
title: 通道
hide_title: true
---

# 使用 Channels

到目前为止，我们已经使用了 `take` 和 `put` 效果来与 Redux Store 进行通信。Channels 将这些效果推广到与外部事件源或 Saga 之间的通信。它们也可以用来从 Store 队列特定的操作。

在这一节中，我们将看到：

- 如何使用 `yield actionChannel` 效果从 Store 缓冲特定的操作。

- 如何使用 `eventChannel` 工厂函数将 `take` 效果连接到外部事件源。

- 如何使用通用的 `channel` 工厂函数创建一个 channel，并在 `take`/`put` 效果中使用它来在两个 Saga 之间进行通信。

## 使用 `actionChannel` 效果

让我们回顾一下典型的例子：

```javascript
import { take, fork, ... } from 'redux-saga/effects'

function* watchRequests() {
  while (true) {
    const {payload} = yield take('REQUEST')
    yield fork(handleRequest, payload)
  }
}

function* handleRequest(payload) { ... }
```

上面的例子说明了典型的 *watch-and-fork* 模式。`watchRequests` saga 使用 `fork` 来避免阻塞，从而不会错过来自 store 的任何操作。每一个 `REQUEST` 操作都会创建一个 `handleRequest` 任务。所以，如果有很多操作在短时间内被触发，那么可能会有很多 `handleRequest` 任务同时执行。

现在假设我们的需求是这样的：我们想要串行处理 `REQUEST`。如果我们在任何时刻有四个操作，我们想要处理第一个 `REQUEST` 操作，然后只有在完成这个操作之后我们才处理第二个操作，依此类推...

所以我们想要 *队列* 所有未处理的操作，一旦我们处理完当前的请求，我们就从队列中获取下一个消息。

Redux-Saga 提供了一个小的 helper 效果 `actionChannel`，它可以为我们处理这个问题。让我们看看我们如何用它来重写前面的例子：

```javascript
import { take, actionChannel, call, ... } from 'redux-saga/effects'

function* watchRequests() {
  // 1- 为请求操作创建一个 channel
  const requestChan = yield actionChannel('REQUEST')
  while (true) {
    // 2- 从 channel 中取出
    const {payload} = yield take(requestChan)
    // 3- 注意我们正在使用一个阻塞调用
    yield call(handleRequest, payload)
  }
}

function* handleRequest(payload) { ... }
```

首先要创建 action channel。我们使用 `yield actionChannel(pattern)`，其中 pattern 是按照我们之前提到的 `take(pattern)` 的规则解释的。两种形式的区别在于 `actionChannel` **可以缓冲传入的消息**，如果 Saga 还没有准备好接收它们（例如，被 API 调用阻塞）。

接下来是 `yield take(requestChan)`。除了与 `pattern` 一起使用以从 Redux Store 中获取特定操作外，`take` 也可以与 channels 一起使用（上面我们从特定的 Redux 操作中创建了一个 channel 对象）。`take` 将阻塞 Saga，直到 channel 上有消息可用。如果底层缓冲区中存储了消息，take 也可能立即恢复。

需要注意的重要一点是我们如何使用阻塞的 `call`。Saga 将保持阻塞状态，直到 `call(handleRequest)` 返回。但与此同时，如果在 Saga 仍然被阻塞时分派了其他的 `REQUEST` 操作，它们将由 `requestChan` 内部排队。当 Saga 从 `call(handleRequest)` 恢复并执行下一个 `yield take(requestChan)` 时，take 将解析为队列中的消息。

默认情况下，`actionChannel` 会无限制地缓冲所有传入的消息。如果你想对缓冲有更多的控制，你可以向效果创建器提供一个 Buffer 参数。Redux-Saga 提供了一些常见的缓冲（无，丢弃，滑动），但你也可以提供你自己的缓冲实现。[查看 API 文档](../api#buffers) 了解更多详情。

例如，如果你只想处理最近的五个项目，你可以使用：

```javascript
import { buffers } from 'redux-saga'
import { actionChannel } from 'redux-saga/effects'

function* watchRequests() {
  const requestChan = yield actionChannel('REQUEST', buffers.sliding(5))
  ...
}
```

## 使用 `eventChannel` 工厂连接到外部事件

像 `actionChannel` (Effect) 一样，`eventChannel` (一个工厂函数，不是 Effect) 创建了一个用于事件的 Channel，但是事件源不是 Redux Store。

这个基本示例从一个间隔创建一个 Channel：

```javascript
import { eventChannel, END } from 'redux-saga'

function countdown(secs) {
  return eventChannel(emitter => {
      const iv = setInterval(() => {
        secs -= 1
        if (secs > 0) {
          emitter(secs)
        } else {
          // 这会导致 channel 关闭
          emitter(END)
        }
      }, 1000);
      // 订阅者必须返回一个取消订阅的函数
      return () => {
        clearInterval(iv)
      }
    }
  )
}
```

`eventChannel` 的第一个参数是一个 *订阅者* 函数。订阅者的角色是初始化外部事件源（上面使用 `setInterval`），然后通过调用提供的 `emitter` 将所有来自源的事件路由到 channel。在上面的例子中，我们每秒都在调用 `emitter`。

> 注意：你需要清理你的事件源，以免通过事件 channel 传递 null 或 undefined。虽然传递数字是可以的，但我们建议你像组织你的 redux actions 一样组织你的事件 channel 数据。选择 `{ number }` 而不是 `number`。

还要注意 `emitter(END)` 的调用。我们使用它来通知任何 channel 消费者，channel 已经关闭，意味着不会有其他消息通过这个 channel。

让我们看看我们如何在我们的 Saga 中使用这个 channel。（这是从仓库中的 cancellable-counter 示例中取出的。）

```javascript
import { take, put, call } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'

// 从秒间隔创建一个事件 Channel
function countdown(seconds) { ... }

export function* saga() {
  const chan = yield call(countdown, value)
  try {
    while (true) {
      // take(END) 将导致 saga 通过跳转到 finally 块来终止
      let seconds = yield take(chan)
      console.log(`countdown: ${seconds}`)
    }
  } finally {
    console.log('countdown terminated')
  }
}
```

所以 Saga 是在 `take(chan)`。这导致 Saga 阻塞，直到在 channel 上放置一条消息。在我们上面的例子中，它对应于我们调用 `emitter(secs)` 时。还要注意我们在 `try/finally` 块内执行整个 `while (true) {...}` 循环。当间隔终止时，countdown 函数通过调用 `emitter(END)` 关闭事件 channel。关闭一个 channel 会导致所有在该 channel 上的 `take` 阻塞的 Sagas 终止。在我们的例子中，终止 Saga 将导致它跳转到其 `finally` 块（如果提供了，否则 Saga 终止）。

订阅者返回一个 `unsubscribe` 函数。这是 channel 在事件源完成之前取消订阅的方式。在一个从事件 channel 消费消息的 Saga 中，如果我们想在事件源完成之前*提前退出*（例如，Saga 已被取消），你可以调用 `chan.close()` 来关闭 channel 并从源取消订阅。

例如，我们可以让我们的 Saga 支持取消：

```javascript
import { take, put, call, cancelled } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'

// 从秒间隔创建一个事件 Channel
function countdown(seconds) { ... }

export function* saga() {
  const chan = yield call(countdown, value)
  try {
    while (true) {
      let seconds = yield take(chan)
      console.log(`countdown: ${seconds}`)
    }
  } finally {
    if (yield cancelled()) {
      chan.close()
      console.log('countdown cancelled')
    }
  }
}
```

这是另一个示例，展示了如何使用事件 channels 将 WebSocket 事件传入你的 saga（例如：使用 socket.io 库）。
假设你正在等待服务器消息 `ping`，然后在一些延迟后回复一个 `pong` 消息。


```javascript
import { take, put, call, apply, delay } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { createWebSocketConnection } from './socketConnection'

// 这个函数从给定的 socket 创建一个事件通道
// 设置订阅到传入的 `ping` 事件
function createSocketChannel(socket) {
  // `eventChannel` 接受一个订阅者函数
  // 订阅者函数接受一个 `emit` 参数来将消息放入通道
  return eventChannel(emit => {

    const pingHandler = (event) => {
      // 将事件负载放入通道
      // 这允许 Saga 从返回的通道中获取此负载
      emit(event.payload)
    }

    const errorHandler = (errorEvent) => {
      // 创建一个 Error 对象并将其放入通道
      emit(new Error(errorEvent.reason))
    }

    // 设置订阅
    socket.on('ping', pingHandler)
    socket.on('error', errorHandler)

    // 订阅者必须返回一个取消订阅的函数
    // 当 saga 调用 `channel.close` 方法时，将调用此函数
    const unsubscribe = () => {
      socket.off('ping', pingHandler)
    }

    return unsubscribe
  })
}

// 通过调用 `socket.emit('pong')` 回复一个 `pong` 消息
function* pong(socket) {
  yield delay(5000)
  yield apply(socket, socket.emit, ['pong']) // 以 `socket` 为上下文调用 `emit` 方法
}

export function* watchOnPings() {
  const socket = yield call(createWebSocketConnection)
  const socketChannel = yield call(createSocketChannel, socket)

  while (true) {
    try {
      // socketChannel 的错误会导致 saga 跳到 catch 块
      const payload = yield take(socketChannel)
      yield put({ type: INCOMING_PONG_PAYLOAD, payload })
      yield fork(pong, socket)
    } catch(err) {
      console.error('socket error:', err)
      // 在 catch 块中，socketChannel 仍然是打开的
      // 如果我们想结束 socketChannel，我们需要显式地关闭它
      // socketChannel.close()
    }
  }
}
```

> 注意：默认情况下，eventChannel 上的消息不会被缓冲。你必须向 eventChannel 工厂提供一个缓冲区，以指定通道的缓冲策略（例如 `eventChannel(subscriber, buffer)`）。
[查看 API 文档](../api#buffers) 以获取更多信息。

在这个 WebSocket 示例中，当发生某些 socket 错误时，socketChannel 可能会发出错误，这将中止我们在此 eventChannel 上的 `yield take(socketChannel)` 等待。注意，发出错误默认不会中止通道，如果我们想在错误后结束通道，我们需要显式地关闭通道。

## 使用通道在 Sagas 之间通信

除了动作通道和事件通道，你还可以直接创建默认情况下不连接到任何源的通道。然后你可以手动在通道上 `put`。当你想使用通道在 sagas 之间通信时，这很方便。

为了说明，让我们回顾一下请求处理的前一个例子。

```javascript
import { take, fork, ... } from 'redux-saga/effects'

function* watchRequests() {
  while (true) {
    const {payload} = yield take('REQUEST')
    yield fork(handleRequest, payload)
  }
}

function* handleRequest(payload) { ... }
```

我们看到，watch-and-fork 模式允许同时处理多个请求，对执行并发的工作任务数量没有限制。然后，我们使用了 `actionChannel` 效果来将并发限制为一次一个任务。

所以假设我们的需求是一次最多执行三个任务。当我们收到一个请求并且执行的任务少于三个时，我们立即处理请求，否则我们将任务排队并等待其中一个*插槽*变为空闲。

以下是使用通道的解决方案的一个例子：

```javascript
import { channel } from 'redux-saga'
import { take, fork, ... } from 'redux-saga/effects'

function* watchRequests() {
  // 创建一个通道来队列传入的请求
  const chan = yield call(channel)

  // 创建 3 个工作 '线程'
  for (var i = 0; i < 3; i++) {
    yield fork(handleRequest, chan)
  }

  while (true) {
    const {payload} = yield take('REQUEST')
    yield put(chan, payload)
  }
}

function* handleRequest(chan) {
  while (true) {
    const payload = yield take(chan)
    // 处理请求
  }
}
```

在上面的例子中，我们使用 `channel` 工厂创建了一个通道。我们得到一个默认情况下缓冲我们放在上面的所有消息的通道（除非有一个待处理的接收者，在这种情况下，接收者会立即恢复消息）。

然后 `watchRequests` saga 分叉了三个工作 saga。注意，创建的通道被提供给所有分叉的 sagas。`watchRequests` 将使用此通道向三个工作 saga *分派* 工作。在每个 `REQUEST` 动作上，Saga 将在通道上放置负载。然后，任何*空闲*的工作者将获取负载。否则，通道将排队，直到一个工作 Saga 准备好获取它。

所有的三个工作者都运行一个典型的 while 循环。在每次迭代中，一个工作者将获取下一个请求，或者将阻塞，直到有消息可用。注意，这种机制在 3 个工作者之间提供了自动的负载平衡。快速的工作者不会被慢的工作者拖慢。

## 使用 `multicastChannel` 与*不同*的工作线程进行通信

在上面的部分中，我们看到了如何使用 `channels` 在*多次分叉*的*同一*工作线程之间进行请求的负载均衡。如果我们需要将一个动作 `put` 到一个通道，并且有*几个不同*的工作线程消费它呢？

我们可能需要将传入的请求传递给不同的工作线程以执行不同的副作用。

这里有一个使用 `channels` 的例子，我们可以看到问题：当我们在 `channel` 中使用 `yield put(chan, payload)` 进行 `put` 时，我们总是只运行*一个*工作线程（`logWorker` 或 `mainWorker`），而不是*两个*。

```javascript
import { channel } from 'redux-saga'
import { take, fork, call, put } from 'redux-saga/effects'

function* watchRequests() {
  // 创建一个通道来队列传入的请求
  const chan = yield call(channel)

  // 分叉两个工作线程
  yield fork(logWorker, chan)
  yield fork(mainWorker, chan)

  while (true) {
    const { payload } = yield take('REQUEST')

    // 这里的 put 只会到达一个工作线程，而不是两个！
    yield put(chan, payload)
  }
}

function* logWorker(channel) {
  while (true) {
    const payload = yield take(channel)
    // 在某处记录请求..
    console.log('logWorker:', payload)
  }
}

function* mainWorker(channel) {
  while (true) {
    const payload = yield take(channel)
    // 处理请求
    console.log('mainWorker', payload)
  }
}
```

为了解决这个问题，我们需要使用 `multicastChannel`，它会将动作*广播*到所有的工作线程。
> 注意，使用 `multicastChannel` 的 `take` 需要我们传递额外的参数 *pattern* - 你可以用它来过滤要 `take` 的动作。

看下面的例子：

```javascript
import { multicastChannel } from 'redux-saga'
import { take, fork, call, put } from 'redux-saga/effects'

function* watchRequests() {
  // 创建一个 multicastChannel 来队列传入的请求
  const channel = yield call(multicastChannel)

  // 分叉不同的工作线程
  yield fork(logWorker, channel)
  yield fork(mainWorker, channel)

  while (true) {
    const { payload } = yield take('REQUEST')
    yield put(channel, payload)
  }
}

function* logWorker(channel) {
  while (true) {
    // 为了简单，pattern 为 '*'
    const payload = yield take(channel, '*')
    // 在某处记录请求..
    console.log('logWorker:', payload)
  }
}

function* mainWorker(channel) {
  while (true) {
    // 为了简单，pattern 为 '*'
    const payload = yield take(channel, '*')
    // 处理请求
    console.log('mainWorker', payload)
  }
}
```
