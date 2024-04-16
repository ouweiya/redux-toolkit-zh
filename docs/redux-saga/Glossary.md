---
id: Glossary
title: 术语表
hide_title: true
---

# 术语表

这是 Redux Saga 的核心术语的术语表。

### Effect

Effect 是一个包含一些由 saga 中间件执行的指令的普通 JavaScript 对象。

你可以使用 redux-saga 库提供的工厂函数创建 effects。例如，你可以使用 `call(myfunc, 'arg1', 'arg2')` 指示中间件调用 `myfunc('arg1', 'arg2')` 并将结果返回给产生 effect 的 Generator。

### Task

Task 就像是在后台运行的进程。在基于 redux-saga 的应用程序中，可以有多个并行运行的任务。你可以使用 `fork` 函数创建任务。

```javascript
import {fork} from "redux-saga/effects"

function* saga() {
  ...
  const task = yield fork(otherSaga, ...args)
  ...
}
```

### 阻塞/非阻塞调用

阻塞调用意味着 Saga 产生了一个 Effect，并将等待其执行结果，然后再继续执行产生 Effect 的 Generator 中的下一条指令。

非阻塞调用意味着 Saga 在产生 Effect 后将立即恢复。

例如

```javascript
import {call, cancel, join, take, put} from "redux-saga/effects"

function* saga() {
  yield take(ACTION)              // 阻塞：将等待 action
  yield call(ApiFn, ...args)      // 阻塞：将等待 ApiFn（如果 ApiFn 返回 Promise）
  yield call(otherSaga, ...args)  // 阻塞：将等待 otherSaga 结束

  yield put(...)                  // 非阻塞：将在内部调度器中分派

  const task = yield fork(otherSaga, ...args)  // 非阻塞：不会等待 otherSaga
  yield cancel(task)                           // 非阻塞：将立即恢复
  // 或
  yield join(task)                             // 阻塞：将等待任务结束
}
```

### Watcher/Worker

指的是使用两个独立的 Sagas 组织控制流的方式

- 观察者（Watcher）：将观察分派的操作，并在每个操作上分叉一个 worker

- 工作者（Worker）：将处理操作并终止

示例

```javascript
function* watcher() {
  while (true) {
    const action = yield take(ACTION)
    yield fork(worker, action.payload)
  }
}

function* worker(payload) {
  // ... 做一些事情
}
```
