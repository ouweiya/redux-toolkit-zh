---
title: 使用 Saga 辅助函数
hide_title: true
---

# 使用 Saga Helpers

`redux-saga` 提供了一些包装内部函数的辅助效果，当某些特定的动作被分派到 Store 时，它们会生成任务。

这些辅助函数是基于较低级别的 API 构建的。在高级部分，我们将看到如何实现这些函数。

第一个函数，`takeEvery` 是最熟悉的，并提供了类似于 `redux-thunk` 的行为。

让我们用常见的 AJAX 示例来说明。每次点击 Fetch 按钮时，我们都会分派一个 `FETCH_REQUESTED` 动作。我们希望通过启动一个任务来处理这个动作，该任务将从服务器获取一些数据。

首先，我们创建将执行异步操作的任务：

```javascript
import { call, put } from 'redux-saga/effects'
import Api from './path/to/api'

export function* fetchData(action) {
  try {
    const data = yield call(Api.fetchUser, action.payload.url)
    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}
```

要在每个 `FETCH_REQUESTED` 动作上启动上述任务：

```javascript
import { takeEvery } from 'redux-saga/effects'

function* watchFetchData() {
  yield takeEvery('FETCH_REQUESTED', fetchData)
}
```

在上述示例中，`takeEvery` 允许同时启动多个 `fetchData` 实例。在给定的时刻，我们可以启动一个新的 `fetchData` 任务，而此时可能仍有一个或多个先前的 `fetchData` 任务尚未结束。

如果我们只想获取最新请求的响应（例如，总是显示数据的最新版本），我们可以使用 `takeLatest` 辅助函数：

```javascript
import { takeLatest } from 'redux-saga/effects'

function* watchFetchData() {
  yield takeLatest('FETCH_REQUESTED', fetchData)
}
```

与 `takeEvery` 不同，`takeLatest` 在任何时刻只允许运行一个 `fetchData` 任务。并且它将是最新启动的任务。如果在启动另一个 `fetchData` 任务时，前一个任务仍在运行，那么前一个任务将被自动取消。

如果你有多个 Sagas 监视不同的动作，你可以使用这些内置的辅助函数创建多个观察者，它们的行为就像是使用了 `fork` 来生成它们（我们稍后会谈到 `fork`。现在，把它看作是一个可以让我们在后台启动多个 sagas 的 Effect）。

例如：

```javascript
import { takeEvery } from 'redux-saga/effects'

// FETCH_USERS
function* fetchUsers(action) { ... }

// CREATE_USER
function* createUser(action) { ... }

// 并行使用它们
export default function* rootSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers)
  yield takeEvery('CREATE_USER', createUser)
}
```
