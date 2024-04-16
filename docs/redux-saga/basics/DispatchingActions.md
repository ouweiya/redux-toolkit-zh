---
title: 分发操作
hide_title: true
---

# 向存储库派发操作

进一步扩展上一个例子，假设每次保存后，我们想要派发一些操作来通知存储库获取操作已经成功（我们暂时忽略失败的情况）。

我们可以将存储库的 `dispatch` 函数传递给生成器。然后生成器在接收到获取响应后调用它：

```javascript
// ...

function* fetchProducts(dispatch) {
  const products = yield call(Api.fetch, '/products')
  dispatch({ type: 'PRODUCTS_RECEIVED', products })
}
```

然而，这种解决方案与直接从生成器内部调用函数的缺点是一样的（如前一节所讨论的）。如果我们想要测试 `fetchProducts` 在接收到 AJAX 响应后执行派发，我们将需要再次模拟 `dispatch` 函数。

相反，我们需要相同的声明式解决方案。创建一个普通的 JavaScript 对象来指示中间件我们需要派发一些操作，并让中间件执行真正的派发。这样我们可以以相同的方式测试生成器的派发：通过检查生成的效果并确保它包含正确的指令。

为此目的，该库提供了另一个函数 `put`，用于创建派发效果。

```javascript
import { call, put } from 'redux-saga/effects'
// ...

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  // 创建并产生一个派发效果
  yield put({ type: 'PRODUCTS_RECEIVED', products })
}
```

现在，我们可以像在前一节中那样轻松地测试生成器

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

// 创建一个假的响应
const products = {}

// 期望一个派发指令
assert.deepEqual(
  iterator.next(products).value,
  put({ type: 'PRODUCTS_RECEIVED', products }),
  "fetchProducts 应该产生一个 Effect put({ type: 'PRODUCTS_RECEIVED', products })"
)
```

注意我们如何通过生成器的 `next` 方法传递假响应。在中间件环境之外，我们对生成器有完全的控制，我们可以通过模拟结果并用它们恢复生成器来模拟真实环境。模拟数据比模拟函数和监视调用要容易得多。
