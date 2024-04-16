---
title: 入门指南
hide_title: true
---

# 入门指南

## 安装

```sh
$ npm install redux-saga
```

或者

```sh
$ yarn add redux-saga
```

另外，你也可以直接在HTML页面的`<script>`标签中使用提供的UMD构建。请参阅[此部分](#在浏览器中使用UMD构建)。

## 使用示例

假设我们有一个UI，当点击一个按钮时，它会从远程服务器获取一些用户数据。（为了简洁，我们只展示触发操作的代码。）

```javascript
class UserComponent extends React.Component {
  ...
  onSomeButtonClicked() {
    const { userId, dispatch } = this.props
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
  }
  ...
}
```

组件向Store派发一个普通的Object操作。我们将创建一个Saga，它会监视所有的`USER_FETCH_REQUESTED`操作，并触发一个API调用来获取用户数据。

#### `sagas.js`

```javascript
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

// worker Saga: 将在 USER_FETCH_REQUESTED 操作上触发
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId)
    yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

/*
  在每个派发的 `USER_FETCH_REQUESTED` 操作上启动 fetchUser。
  允许并发获取用户。
*/
function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
}

/*
  或者你可以使用 takeLatest。

  不允许并发获取用户。如果在已经有一个获取请求在等待的时候，派发了 "USER_FETCH_REQUESTED"，
  那么等待的获取请求将被取消，只有最新的请求会被执行。
*/
function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
}

export default mySaga
```

要运行我们的Saga，我们需要使用`redux-saga`中间件将其连接到Redux Store。

#### `main.js`

```javascript
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// 创建 saga 中间件
const sagaMiddleware = createSagaMiddleware()
// 将其挂载到 Store 上
const store = configureStore({
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// 然后运行 saga
sagaMiddleware.run(mySaga)

// 渲染应用程序
```

## 在浏览器中使用UMD构建

在`dist/`文件夹中也有一个`redux-saga`的**UMD**构建。当使用umd构建时，`redux-saga`将作为`ReduxSaga`在窗口对象中可用。这使你可以像这样创建Saga中间件，而不使用ES6的`import`语法：

```javascript
var sagaMiddleware = ReduxSaga.default()
```

如果你不使用Webpack或Browserify，UMD版本会很有用。你可以直接从[unpkg](https://unpkg.com/)访问它。

以下构建是可用的：

- [https://unpkg.com/redux-saga/dist/redux-saga.umd.js](https://unpkg.com/redux-saga/dist/redux-saga.umd.js)
- [https://unpkg.com/redux-saga/dist/redux-saga.umd.min.js](https://unpkg.com/redux-saga/dist/redux-saga.umd.min.js)

**重要!**
如果你的目标浏览器不支持_ES2015生成器_，你必须对它们进行转译（例如，使用[babel插件](https://github.com/facebook/regenerator/tree/main/packages/transform)），并提供一个有效的运行时，例如[这里的一个](https://unpkg.com/regenerator-runtime/runtime.js)。在**redux-saga**之前，必须导入运行时：

```javascript
import 'regenerator-runtime/runtime'
// 然后
import sagaMiddleware from 'redux-saga'
```
