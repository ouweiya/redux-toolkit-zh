---
title: 使用 Run Saga
hide_title: true
---

# 将 Sagas 连接到外部输入/输出

我们看到 `take` 效果是通过等待向 Store 分派的操作来解决的。而 `put` 效果是通过分派作为参数提供的操作来解决的。

当 Saga 启动（无论是在启动时还是稍后动态启动）时，中间件会自动将其 `take`/`put` 连接到 store。这两种效果可以被看作是 Saga 的一种输入/输出。

`redux-saga` 提供了一种在 Redux 中间件环境之外运行 Saga 并将其连接到自定义输入/输出的方法。

```js
import { runSaga, stdChannel } from 'redux-saga'

const emitter = new EventEmitter()
const channel = stdChannel()
emitter.on("action", channel.put)

const myIO = {
  // 这将用于协调 take 和 put 效果
  channel,
  // 这将用于解决 put 效果
  dispatch(output) {
    emitter.emit("action", output)
  },
  // 这将用于解决 select 效果
  getState() {
    return state
  }
}

runSaga(
  myIO,
  function* saga() { ... },
)
```

更多信息，请参见 [API 文档](https://redux-saga.js.org/docs/api/index.html##runsagaoptions-saga-args)，[Channels](./Channels.md)，[演示](https://codesandbox.io/s/1yq1lx77jq)。
