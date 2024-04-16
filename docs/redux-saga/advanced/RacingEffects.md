---
title: 竞态效应
hide_title: true
---

## 在多个 Effects 之间开始一场竞赛

有时我们并行启动多个任务，但我们不想等待所有任务，我们只需要得到*赢家*：第一个解决（或拒绝）的任务。`race` Effect 提供了一种触发多个 Effects 之间竞赛的方式。

以下示例显示了一个触发远程获取请求的任务，并在 1 秒内限制响应。

```javascript
import { race, call, put, delay } from 'redux-saga/effects'

function* fetchPostsWithTimeout() {
  const {posts, timeout} = yield race({
    posts: call(fetchApi, '/posts'),
    timeout: delay(1000)
  })

  if (posts)
    yield put({type: 'POSTS_RECEIVED', posts})
  else
    yield put({type: 'TIMEOUT_ERROR'})
}
```

`race` 的另一个有用特性是它会自动取消输掉竞赛的 Effects。例如，假设我们有两个 UI 按钮：

- 第一个在后台启动一个任务，该任务在一个无限循环 `while (true)` 中运行（例如，每隔 x 秒与服务器同步一些数据）。

- 一旦后台任务开始，我们就启用第二个按钮，该按钮将取消任务

```javascript
import { race, take, call } from 'redux-saga/effects'

function* backgroundTask() {
  while (true) { ... }
}

function* watchStartBackgroundTask() {
  while (true) {
    yield take('START_BACKGROUND_TASK')
    yield race({
      task: call(backgroundTask),
      cancel: take('CANCEL_TASK')
    })
  }
}
```

在分派 `CANCEL_TASK` 操作的情况下，`race` Effect 将自动取消 `backgroundTask`，在其中抛出一个取消错误。
