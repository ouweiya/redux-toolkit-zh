---
title: 声明式效果
hide_title: true
---

# 声明式效果

在 `redux-saga` 中，Sagas 是使用生成器函数实现的。为了表达 Saga 逻辑，我们从生成器中产生纯 JavaScript 对象。我们称这些对象为[*效果*](https://redux-saga.js.org/docs/api/#effect-creators)。效果是一个包含一些由中间件解释的信息的对象。你可以将效果视为对中间件执行某些操作（例如，调用某个异步函数，向存储库派发一个动作等）的指令。

要创建效果，你需要使用 `redux-saga/effects` 包提供的函数。

在本节和以下部分，我们将介绍一些基本的效果。并看看这个概念如何使 Sagas 易于测试。

Sagas 可以以多种形式产生效果。最简单的方式是产生一个 Promise。

例如，假设我们有一个 Saga，它监视一个 `PRODUCTS_REQUESTED` 动作。对于每一个匹配的动作，它都会启动一个任务，从服务器获取产品列表。

```javascript
import { takeEvery } from 'redux-saga/effects'
import Api from './path/to/api'

function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
}

function* fetchProducts() {
  const products = yield Api.fetch('/products')
  console.log(products)
}
```

在上面的例子中，我们直接从生成器内部调用 `Api.fetch`（在生成器函数中，`yield` 右边的任何表达式都会被评估，然后结果会被产生给调用者）。

`Api.fetch('/products')` 触发一个 AJAX 请求，并返回一个将解析为解析响应的 Promise，AJAX 请求将立即执行。简单且符合习惯，但是...

假设我们想要测试上面的生成器：

```javascript
const iterator = fetchProducts()
assert.deepEqual(iterator.next().value, ??) // 我们期望什么？
```

我们想要检查生成器产生的第一个值的结果。在我们的情况下，它是运行 `Api.fetch('/products')` 的结果，这是一个 Promise。在测试期间执行真实的服务既不可行也不实用，所以我们必须*模拟* `Api.fetch` 函数，即我们必须用一个假的函数替换真实的函数，这个假的函数实际上并不运行 AJAX 请求，而只是检查我们是否用正确的参数（在我们的情况下是 `'/products'`）调用了 `Api.fetch`。

模拟使测试更加困难和不可靠。另一方面，返回值的函数更容易测试，因为我们可以使用一个简单的 `equal()` 来检查结果。这是编写最可靠测试的方式。

还不信服？我鼓励你阅读 [Eric Elliott 的文章](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.4ttnnzpgc)：

> (...)`equal()`，本质上回答了每个单元测试必须回答的两个最重要的问题，
但大多数没有：
- 实际的输出是什么？
- 预期的输出是什么？
>
> 如果你在没有回答这两个问题的情况下完成了一个测试，那么你并没有一个真正的单元测试。你有的只是一个马虎、半成品的测试。

我们实际需要做的是确保 `fetchProducts` 任务产生了正确的函数和正确的参数的调用。

与其直接从生成器内部调用异步函数，**我们可以只产生函数调用的描述**。也就是说，我们将产生一个看起来像这样的对象：

```javascript
// 效果 -> 用 `./products` 作为参数调用函数 Api.fetch
{
  CALL: {
    fn: Api.fetch,
    args: ['./products']
  }
}
```

换句话说，生成器将产生包含*指令*的纯对象，`redux-saga` 中间件将负责执行这些指令，并将它们的执行结果返回给生成器。这样，当测试生成器时，我们只需要检查它是否产生了预期的指令，通过对产生的对象进行简单的 `deepEqual`。

出于这个原因，库提供了一种不同的方式来执行异步调用。

```javascript
import { call } from 'redux-saga/effects'

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  // ...
}
```

我们现在使用的是 `call(fn, ...args)` 函数。**与前面的例子的区别在于，现在我们并没有立即执行 fetch 调用，相反，`call` 创建了一个效果的描述**。就像在 Redux 中你使用动作创建器来创建一个描述将由 Store 执行的动作的纯对象一样，`call` 创建了一个描述函数调用的纯对象。redux-saga 中间件负责执行函数调用，并将解析的响应恢复到生成器。

这使我们可以轻松地在 Redux 环境之外测试生成器。因为 `call` 只是一个返回纯对象的函数。

```javascript
import { call } from 'redux-saga/effects'
import Api from '...'

const iterator = fetchProducts()

// 期望一个调用指令
assert.deepEqual(
  iterator.next().value,
  call(Api.fetch, '/products'),
  "fetchProducts 应该产生一个 Effect call(Api.fetch, './products')"
)
```

现在我们不需要模拟任何东西，一个基本的等式测试就足够了。

这些*声明式调用*的优点是，我们可以通过迭代生成器并对连续产生的值进行 `deepEqual` 测试，来测试 Saga 中的所有逻辑。这是一个真正的好处，因为你的复杂异步操作不再是黑箱，无论它们有多复杂，你都可以详细地测试它们的操作逻辑。

`call` 还支持调用对象方法，你可以使用以下形式为被调用的函数提供一个 `this` 上下文：

```javascript
yield call([obj, obj.method], arg1, arg2, ...) // 就像我们做的 obj.method(arg1, arg2 ...)
```

`apply` 是方法调用形式的别名

```javascript
yield apply(obj, obj.method, [arg1, arg2, ...])
```

`call` 和 `apply` 非常适合处理返回 Promise 结果的函数。另一个函数 `cps` 可以用来处理 Node 风格的函数（例如 `fn(...args, callback)`，其中 `callback` 是 `(error, result) => ()` 的形式）。`cps` 代表 Continuation Passing Style。

例如：

```javascript
import { cps } from 'redux-saga/effects'

const content = yield cps(readFile, '/path/to/file')
```

当然，你可以像测试 `call` 一样测试它：

```javascript
import { cps } from 'redux-saga/effects'

const iterator = fetchSaga()
assert.deepEqual(iterator.next().value, cps(readFile, '/path/to/file') )
```

`cps` 也支持与 `call` 相同的方法调用形式。

声明式效果的完整列表可以在 [API 参考](https://redux-saga.js.org/docs/api/#effect-creators) 中找到。
