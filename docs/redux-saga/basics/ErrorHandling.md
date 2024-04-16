---
title: 错误处理
hide_title: true
---

# 错误处理

在这一部分，我们将看到如何处理上一个例子中的失败情况。假设我们的API函数 `Api.fetch` 返回一个Promise，当远程获取因某种原因失败时，该Promise会被拒绝。

我们希望在我们的 Saga 中通过向 Store 分发一个 `PRODUCTS_REQUEST_FAILED` 动作来处理这些错误。

我们可以使用熟悉的 `try/catch` 语法在 Saga 中捕获错误。

```javascript
import Api from './path/to/api'
import { call, put } from 'redux-saga/effects'

// ...

function* fetchProducts() {
  try {
    const products = yield call(Api.fetch, '/products')
    yield put({ type: 'PRODUCTS_RECEIVED', products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
  }
}
```

为了测试失败情况，我们将使用 Generator 的 `throw` 方法

```javascript
import { call, put } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// 期望一个调用指令
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts 应该产生一个 Effect call(Api.fetch, './products')"
)

// 创建一个假错误
const error = {}

// 期望一个分发指令
assert.deepEqual(
  iterator.throw(error).value,
  put({ type: 'PRODUCTS_REQUEST_FAILED', error }),
  "fetchProducts 应该产生一个 Effect put({ type: 'PRODUCTS_REQUEST_FAILED', error })"
)
```

在这种情况下，我们传递给 `throw` 方法一个假错误。这将导致 Generator 打断当前流程并执行 catch 块。

当然，你并不一定要在 `try`/`catch` 块中处理你的 API 错误。你也可以让你的 API 服务返回一个带有错误标志的正常值。例如，你可以捕获 Promise 拒绝并将它们映射到一个带有错误字段的对象。

```javascript
import Api from './path/to/api'
import { call, put } from 'redux-saga/effects'

function fetchProductsApi() {
  return Api.fetch('/products')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function* fetchProducts() {
  const { response, error } = yield call(fetchProductsApi)
  if (response)
    yield put({ type: 'PRODUCTS_RECEIVED', products: response })
  else
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
}
```

## onError 钩子
在分叉任务中的错误[bubble up to their parents](../API.md#error-propagation)
直到它被捕获或达到根 saga。
如果一个错误传播到根 saga，整个 saga 树已经**终止**。在这种情况下，首选的方法是使用 [onError 钩子](../API.md#error-propagation#createsagamiddlewareoptions) 来报告异常，通知用户问题并优雅地终止你的应用。

为什么我不能使用 `onError` 钩子作为全局错误处理器？
通常，没有一种适合所有情况的解决方案，因为异常是依赖于上下文的。将 `onError` 钩子视为最后的手段，它可以帮助你处理**意外**的错误。

如果我不希望错误冒泡怎么办？
考虑使用安全包装器。你可以在[这里](https://github.com/redux-saga/redux-saga/issues/1250)找到示例。
