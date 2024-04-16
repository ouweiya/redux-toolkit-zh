---
title: 并发性
hide_title: true
---

# 并发

在基础部分，我们看到了如何使用辅助效应 `takeEvery` 和 `takeLatest` 来管理效应之间的并发。

在这个部分，我们将看到如何使用低级效应来实现这些辅助器。

## `takeEvery`

```javascript
import {fork, take} from "redux-saga/effects"

const takeEvery = (pattern, saga, ...args) => fork(function*() {
  while (true) {
    const action = yield take(pattern)
    yield fork(saga, ...args.concat(action))
  }
})
```

`takeEvery` 允许并发地分叉多个 `saga` 任务。

## `takeLatest`

```javascript
import {cancel, fork, take} from "redux-saga/effects"

const takeLatest = (pattern, saga, ...args) => fork(function*() {
  let lastTask
  while (true) {
    const action = yield take(pattern)
    if (lastTask) {
      yield cancel(lastTask) // 如果任务已经结束，取消是无操作的
    }
    lastTask = yield fork(saga, ...args.concat(action))
  }
})
```

`takeLatest` 不允许并发地触发多个 Saga 任务。一旦它接收到一个新的派发动作，它就会取消任何之前分叉的任务（如果仍在运行）。

`takeLatest` 可以用来处理 AJAX 请求，我们只想得到最新请求的响应。
