---
id: api
title: API 参考
hide_title: true
---

# API 参考

## 中间件 API

### `createSagaMiddleware(options)`

创建一个 Redux 中间件并将 Sagas 连接到 Redux Store

- `options: Object` - 传递给中间件的选项列表。目前支持的选项有：
  - `context: Object` - saga 的初始上下文值。

  - `sagaMonitor` : [SagaMonitor](#sagamonitor) - 如果提供了 Saga Monitor，中间件将向监视器传递监视事件。

  - `onError: (error: Error, { sagaStack: string })` - 如果提供，中间件将用 Sagas 的未捕获错误调用它。对于将未捕获的异常发送到错误跟踪服务很有用。
  - `effectMiddlewares` : Function [] - 允许你拦截任何效果，自己解决它并传递给下一个中间件。详细示例请参见[此部分](advanced/Testing.md#effectmiddlewares)
  - `channel`: 如果提供，中间件将使用此通道而不是默认的 `stdChannel()` 来进行
   * `take` 和 `put` 效果。

#### 示例

下面我们将创建一个函数 `configureStore`，它将通过一个新的方法 `runSaga` 来增强 Store。然后在我们的主模块中，我们将使用该方法来启动应用程序的 root Saga。

**configureStore.js**
```javascript
import createSagaMiddleware from 'redux-saga'
import reducer from './path/to/reducer'

export default function configureStore(initialState) {
  // 注意：将中间件作为最后一个参数传递给 createStore 需要 redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducer, initialState, applyMiddleware(/* 其他中间件, */sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}
```

**main.js**
```javascript
import configureStore from './configureStore'
import rootSaga from './sagas'
// ... 其他导入

const store = configureStore()
store.runSaga(rootSaga)
```

#### 注释

有关 `sagaMiddleware.run` 方法的更多信息，请参见下面。

### `middleware.run(saga, ...args)`

动态运行 `saga`。只能在 `applyMiddleware` 阶段**之后**运行 Sagas。

- `saga: Function`: 一个生成器函数
- `args: Array<any>`: 提供给 `saga` 的参数

该方法返回一个 [任务描述符](#task-descriptor)。

#### 注释

`saga` 必须是一个返回 [生成器对象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)的函数。然后，中间件将遍历生成器并执行所有产生的效果。

`saga` 也可以使用库提供的各种效果启动其他 sagas。下面描述的迭代过程也适用于所有子 sagas。

在第一次迭代中，中间件调用 `next()` 方法来获取下一个效果。然后，中间件执行由下面的 Effects API 指定的产生的效果。同时，生成器将被挂起，直到效果执行结束。在接收到执行结果后，中间件在生成器上调用 `next(result)`，并将检索到的结果作为参数传递。这个过程重复，直到生成器正常终止或抛出一些错误。

如果执行结果是一个错误（如每个 Effect 创建者所指定的），那么将调用生成器的 `throw(error)` 方法。如果生成器函数定义了一个 `try/catch` 来包围当前的 yield 指令，那么底层的生成器运行时将调用 `catch` 块。运行时也将调用任何对应的 finally 块。

在取消 Saga 的情况下（无论是手动还是使用提供的效果），中间件将调用生成器的 `return()` 方法。这将导致生成器直接跳到 finally 块。

## 效果创建者

> 注释：

> - 下面的每个函数都返回一个普通的 JavaScript 对象，并不执行任何操作。
> - 执行是由中间件在上述的迭代过程中进行的。
> - 中间件检查每个效果描述并执行适当的操作。

### `take(pattern)`

创建一个 Effect 描述，指示中间件等待 Store 上的指定操作。
生成器将挂起，直到分派一个与 `pattern` 匹配的操作。

`yield take(pattern)` 的结果是正在分派的操作对象。

`pattern` 按照以下规则解释：

- 如果没有参数或 `'*'` 调用 `take`，则所有分派的操作都将匹配（例如，`take()` 将匹配所有操作）

- 如果它是一个函数，那么如果 `pattern(action)` 为真，则操作匹配（例如，`take(action => action.entities)` 将匹配所有具有（真实的）`entities` 字段的操作。）
> 注意：如果在模式函数上定义了 `toString`，则将 `action.type` 测试为 `pattern.toString()`。如果你正在使用像 redux-act 或 redux-actions 这样的操作创建库，这将非常有用。

- 如果它是一个字符串，那么如果 `action.type === pattern`，则操作匹配（例如，`take(INCREMENT_ASYNC)`）

- 如果它是一个数组，那么数组中的每一项都与上述规则匹配，因此支持字符串和函数谓词的混合数组。最常见的用例是字符串数组，因此 `action.type` 与数组中的所有项匹配（例如，`take([INCREMENT, DECREMENT])`，这将匹配类型为 `INCREMENT` 或 `DECREMENT` 的任何操作）。

中间件提供了一个特殊的操作 `END`。如果你分派 END 操作，那么所有在 take Effect 上阻塞的 Sagas 将被终止，无论指定的模式如何。如果被终止的 Saga 仍然有一些正在运行的 forked 任务，它将等待所有子任务终止后再终止任务。

### `takeMaybe(pattern)`

与 `take(pattern)` 相同，但在 `END` 操作上不会自动终止 Saga。相反，所有在 take Effect 上阻塞的 Sagas 将得到 `END` 对象。

#### 注释

`takeMaybe` 的名字来自 FP 类比 - 它就像我们可以有 `Maybe(ACTION)` 类型的返回类型，所以我们可以处理两种情况：

- 有 `Just(ACTION)`（我们有一个操作）的情况
- `NOTHING`（通道已关闭*）的情况。即我们需要某种方式来映射 `END`

* 内部所有 `dispatch` 的操作都通过 `stdChannel` 进行，当 `dispatch(END)` 发生时，`stdChannel` 将被关闭

### `take(channel)`

创建一个 Effect 描述，指示中间件等待从提供的 Channel 接收指定的消息。如果通道已经关闭，那么生成器将立即终止，过程与上述 `take(pattern)` 描述的相同。

### `takeMaybe(channel)`

与 `take(channel)` 相同，但在 `END` 操作上不会自动终止 Saga。相反，所有在 take Effect 上阻塞的 Sagas 将得到 `END` 对象。查看更多[这里](#takemaybepattern)

### `takeEvery(pattern, saga, ...args)`

在每个分派到 Store 的与 `pattern` 匹配的操作上生成一个 `saga`。

- `pattern: String | Array | Function` - 更多信息请参阅 [`take(pattern)`](#takepattern) 的文档

- `saga: Function` - 一个生成器函数

- `args: Array<any>` - 要传递给启动任务的参数。`takeEvery` 将将传入的操作添加到参数列表中（即，操作将是提供给 `saga` 的最后一个参数）

#### 示例

在以下示例中，我们创建了一个基本任务 `fetchUser`。我们使用 `takeEvery` 在每个分派的 `USER_REQUESTED` 操作上启动一个新的 `fetchUser` 任务：

```javascript
import { takeEvery } from `redux-saga/effects`

function* fetchUser(action) {
  ...
}

function* watchFetchUser() {
  yield takeEvery('USER_REQUESTED', fetchUser)
}
```

#### 注释

`takeEvery` 是使用 `take` 和 `fork` 构建的高级 API。以下是如何使用低级效果实现帮助器

```javascript
const takeEvery = (patternOrChannel, saga, ...args) => fork(function*() {
  while (true) {
    const action = yield take(patternOrChannel)
    yield fork(saga, ...args.concat(action))
  }
})
```

`takeEvery` 允许处理并发操作。在上面的示例中，当分派一个 `USER_REQUESTED`
操作时，即使前一个 `fetchUser` 仍在等待，也会启动一个新的 `fetchUser` 任务
（例如，用户连续两次快速点击 `Load User` 按钮，第二次
点击将分派一个 `USER_REQUESTED` 操作，而在第一次触发的 `fetchUser` 还没有终止）

`takeEvery` 不处理任务的乱序响应。不能保证任务将
按照它们开始的顺序终止。要处理乱序响应，你可以考虑下面的 `takeLatest`。

### `takeEvery(channel, saga, ...args)`

你也可以将通道作为参数传入，其行为与 [takeEvery(pattern, saga, ...args)](#takeeverypattern-saga-args) 相同。

### `takeLatest(pattern, saga, ...args)`

对于匹配 `pattern` 的每个派发到 Store 的动作，都会触发一个 `saga`。并自动取消
任何之前启动的仍在运行的 `saga` 任务。

每次动作被派发到 store。如果此动作匹配 `pattern`，`takeLatest`
会在后台启动一个新的 `saga` 任务。如果之前启动了一个 `saga` 任务（在实际动作之前派发的最后一个动作），并且此任务仍在运行，那么该任务将被取消。

- `pattern: String | Array | Function` - 更多信息请查看 [`take(pattern)`](#takepattern) 的文档

- `saga: Function` - 一个 Generator 函数

- `args: Array<any>` - 要传递给启动任务的参数。`takeLatest` 会将
传入的动作添加到参数列表中（即，动作将是提供给 `saga` 的最后一个参数）

#### 示例

在以下示例中，我们创建了一个基本任务 `fetchUser`。我们使用 `takeLatest` 来
在每个派发的 `USER_REQUESTED` 动作上启动一个新的 `fetchUser` 任务。由于 `takeLatest`
会取消之前启动的任何待处理任务，我们确保如果用户快速连续触发多个 `USER_REQUESTED` 动作，我们只会处理最新的动作

```javascript
import { takeLatest } from `redux-saga/effects`

function* fetchUser(action) {
  ...
}

function* watchLastFetchUser() {
  yield takeLatest('USER_REQUESTED', fetchUser)
}
```

#### 注释

`takeLatest` 是使用 `take` 和 `fork` 构建的高级 API。以下是如何使用低级效果实现该助手的方法

```javascript
const takeLatest = (patternOrChannel, saga, ...args) => fork(function*() {
  let lastTask
  while (true) {
    const action = yield take(patternOrChannel)
    if (lastTask) {
      yield cancel(lastTask) // 如果任务已经结束，取消操作无效
    }
    lastTask = yield fork(saga, ...args.concat(action))
  }
})
```

### `takeLatest(channel, saga, ...args)`

你也可以将通道作为参数传入，其行为与 [takeLatest(pattern, saga, ...args)](#takelatestpattern-saga-args) 相同。

### `takeLeading(pattern, saga, ...args)`

对于匹配 `pattern` 的每个派发到 Store 的动作，都会触发一个 `saga`。
在触发一次任务后，它会阻塞，直到触发的 saga 完成，然后再开始监听 `pattern`。

简而言之，`takeLeading` 在不运行 saga 时监听动作。

- `pattern: String | Array | Function` - 更多信息请查看 [`take(pattern)`](#takepattern) 的文档

- `saga: Function` - 一个 Generator 函数

- `args: Array<any>` - 要传递给启动任务的参数。`takeLeading` 会将
传入的动作添加到参数列表中（即，动作将是提供给 `saga` 的最后一个参数）

#### 示例

在以下示例中，我们创建了一个基本任务 `fetchUser`。我们使用 `takeLeading` 来
在每个派发的 `USER_REQUESTED` 动作上启动一个新的 `fetchUser` 任务。由于 `takeLeading`
在启动后忽略任何新的任务，我们确保如果用户快速连续触发多个 `USER_REQUESTED` 动作，我们只会继续运行领先的动作

```javascript
import { takeLeading } from `redux-saga/effects`

function* fetchUser(action) {
  ...
}

function* watchLastFetchUser() {
  yield takeLeading('USER_REQUESTED', fetchUser)
}
```

#### 注释

`takeLeading` 是使用 `take` 和 `call` 构建的高级 API。以下是如何使用低级效果实plement该助手的方法

```javascript
const takeLeading = (patternOrChannel, saga, ...args) => fork(function*() {
  while (true) {
    const action = yield take(patternOrChannel);
    yield call(saga, ...args.concat(action));
  }
})
```

### `takeLeading(channel, saga, ...args)`

你也可以将通道作为参数传入，其行为与 [takeLeading(pattern, saga, ...args)](#takeleadingpattern-saga-args) 相同。

### `put(action)`

创建一个 Effect 描述，指示中间件安排将一个动作分派到存储器。这个分派可能不会立即发生，因为 saga 任务队列中可能还有其他任务，或者还有任务正在进行中。

然而，你可以期望在当前的堆栈帧（即 `yield put(action)` 后的下一行代码）中更新存储器，除非你有其他的 Redux 中间件，它们有异步流程，这会延迟动作的传播。

下游错误（例如，来自 reducer 的错误）将被冒泡上来。

- `action: Object` - [查看 Redux `dispatch` 文档以获取完整信息](https://redux.js.org/api/store#dispatchaction)

### `putResolve(action)`

就像 [`put`](#putaction) 一样，但是 effect 是阻塞的（如果从 `dispatch` 返回 promise，它将等待其解决）并且会冒泡下游的错误。

- `action: Object` - [查看 Redux `dispatch` 文档以获取完整信息](https://redux.js.org/api/store/#dispatchaction)

### `put(channel, action)`

创建一个 Effect 描述，指示中间件将一个动作放入提供的通道中。

- `channel: Channel` - 一个 [`Channel`](#channel) 对象。
- `action: Object` - [查看 Redux `dispatch` 文档以获取完整信息](https://redux.js.org/api/store/#dispatchaction)

如果 put *不* 是缓冲的，而是立即被 takers 消费，那么这个 effect 就是阻塞的。如果在这些 takers 中抛出了任何错误，它将冒泡回 saga。

### `call(fn, ...args)`

创建一个 Effect 描述，指示中间件以 `args` 为参数调用函数 `fn`。

- `fn: Function` - 一个 Generator 函数，或者是一个普通函数，它返回一个 Promise 作为结果，或者任何其他值。
- `args: Array<any>` - 一个作为参数传递给 `fn` 的值的数组

#### 注释

`fn` 可以是一个 *普通* 函数或一个 Generator 函数。

中间件调用函数并检查其结果。

如果结果是一个迭代器对象，中间件将运行该 Generator 函数，就像它对启动的 Generator 做的那样（在启动时传递给中间件）。父 Generator 将被挂起，直到子 Generator 正常终止，在这种情况下，父 Generator 将以子 Generator 返回的值恢复。或者，直到子 Generator 因某些错误而中止，在这种情况下，将在父 Generator 内部抛出一个错误。

如果 `fn` 是一个普通函数并返回一个 Promise，中间件将挂起 Generator，直到 Promise 被解决。在 promise 解决后，Generator 会以解决的值恢复，或者如果 Promise 被拒绝，Generator 内部会抛出一个错误。

如果结果既不是迭代器对象也不是 Promise，中间件将立即将该值返回给 saga，以便它可以同步地恢复执行。

当在 Generator 内部抛出一个错误时，如果它有一个 `try/catch` 块包围当前的 `yield` 指令，控制权将被传递给 `catch` 块。否则，Generator 将中止并抛出错误，如果这个 Generator 是由另一个 Generator 调用的，错误将传播到调用的 Generator。

### `call([context, fn], ...args)`

与 `call(fn, ...args)` 相同，但支持将 `this` 上下文传递给 `fn`。这对于调用对象方法很有用。

### `call([context, fnName], ...args)`

与 `call([context, fn], ...args)` 相同，但支持将 `fn` 作为字符串传递。对于调用对象的方法很有用，例如 `yield call([localStorage, 'getItem'], 'redux-saga')`。

### `call({context, fn}, ...args)`

与 `call([context, fn], ...args)` 相同，但支持将 `context` 和 `fn` 作为对象的属性传递，例如 `yield call({context: localStorage, fn: localStorage.getItem}, 'redux-saga')`。`fn` 可以是字符串或函数。

### `apply(context, fn, [args])`

`call([context, fn], ...args)` 的别名。

### `cps(fn, ...args)`

创建一个 Effect 描述，指示中间件以 Node 风格的函数调用 `fn`。

- `fn: Function` - 一个 Node 风格的函数。即，一个函数，除了它的参数外，还接受一个额外的回调函数，当 `fn` 结束时被 `fn` 调用。回调函数接受两个参数，其中第一个参数用于报告错误，而第二个参数用于报告成功的结果。

- `args: Array<any>` - 一个作为 `fn` 的参数的数组。

#### 注释

中间件将执行调用 `fn(...arg, cb)`。`cb` 是由中间件传递给 `fn` 的回调。如果 `fn` 正常终止，它必须调用 `cb(null, result)` 来通知中间件成功的结果。如果 `fn` 遇到一些错误，那么它必须调用 `cb(error)` 以通知中间件发生了错误。

中间件将保持挂起状态，直到 `fn` 终止。

### `cps([context, fn], ...args)`

支持将 `this` 上下文传递给 `fn`（对象方法调用）

### `cps({context, fn}, ...args)`

与 `cps([context, fn], ...args)` 相同，但支持将 `context` 和 `fn` 作为对象的属性传递。`fn` 可以是字符串或函数。

### `fork(fn, ...args)`

创建一个 Effect 描述，指示中间件对 `fn` 执行*非阻塞调用*

#### 参数

- `fn: Function` - 一个 Generator 函数，或者是一个普通函数，它返回一个 Promise 作为结果
- `args: Array<any>` - 一个作为参数传递给 `fn` 的值的数组

返回一个 [Task](#task) 对象。

#### 注释

`fork`，像 `call` 一样，可以用来调用普通函数和 Generator 函数。但是，调用是非阻塞的，中间件在等待 `fn` 的结果时不会挂起 Generator。相反，一旦 `fn` 被调用，Generator 立即恢复。

`fork`，与 `race` 一起，是管理 Saga 之间并发的核心 Effect。

`yield fork(fn ...args)` 的结果是一个 [Task](#task) 对象。一个带有一些有用方法和属性的对象。

所有 forked 任务都*附加*到它们的父任务。当父任务终止其自身的指令体时，它将等待所有 forked 任务终止后才返回。

#### 错误传播
子任务的错误会自动冒泡到它们的父任务。如果任何 forked 任务引发了未捕获的错误，那么父任务将以子任务的错误中止，整个父任务的执行树（即 forked 任务 + 父任务的*主任务*，如果它仍在运行）将被取消。

取消一个 forked 任务将自动取消所有仍在执行的 forked 任务。它还会取消当前被取消的任务被阻塞的 Effect（如果有的话）。

如果一个 forked 任务*同步*失败（即：在执行任何异步操作之前立即失败），那么不会返回任何任务，相反，父任务将尽快中止（因为父任务和子任务并行执行，父任务将在注意到子任务失败后尽快中止）。

要创建*分离*的 fork，使用 `spawn`。

### `fork([context, fn], ...args)`

支持以 `this` 上下文调用 forked 函数

### `fork({context, fn}, ...args)`

与 `fork([context, fn], ...args)` 相同，但支持将 `context` 和 `fn` 作为对象的属性传递。`fn` 可以是字符串或函数。

### `spawn(fn, ...args)`

与 `fork(fn, ...args)` 相同，但创建一个*分离*的任务。一个分离的任务与其父任务独立，表现得像一个顶级任务。父任务在返回前不会等待分离的任务终止，所有可能影响父任务或分离任务的事件都是完全独立的（错误，取消）。

### `spawn([context, fn], ...args)`

支持以 `this` 上下文调用 spawn 函数

### `join(task)`

创建一个 Effect 描述，指示中间件等待之前 forked 任务的结果。

- `task: Task` - 由之前的 `fork` 返回的 [Task](#task) 对象

#### 注释

`join` 将解析为与 joined 任务相同的结果（成功或错误）。如果 joined 任务被取消，取消也将传播到执行 join effect 的 Saga。同样，那些可能的 joiners 的任何潜在调用者也将被取消。

### `join([...tasks])`

创建一个 Effect 描述，指示中间件等待之前 forked 任务的结果。

- `tasks: Array<Task>` - [Task](#task) 是由之前的 `fork` 返回的对象

#### 注释

它将任务数组包装在[join effects](#jointask)中，大致相当于
`yield tasks.map(t => join(t))`。

### `cancel(task)`

创建一个Effect描述，指示中间件取消之前分叉的任务。

- `task: Task` - 由之前的`fork`返回的[Task](#task)对象

#### 注释

要取消正在运行的任务，中间件将在底层的生成器对象上调用`return`。这将取消任务中的当前Effect，并跳转到finally块（如果定义了的话）。

在finally块内部，你可以执行任何清理逻辑或者派发一些动作来保持存储在一致的状态（例如，当一个ajax请求被取消时，重置一个旋转器的状态为false）。你可以在finally块内部通过发出`yield cancelled()`来检查一个Saga是否被取消。

取消会向下传播到子sagas。当取消一个任务时，中间件也会取消当前的Effect（任务当前被阻塞的地方）。如果当前的Effect是对另一个Saga的调用，它也会被取消。当取消一个Saga时，所有*附加的分叉*（使用`yield fork()`分叉的sagas）都会被取消。这意味着取消实际上影响到属于被取消任务的整个执行树。

`cancel`是一个非阻塞的Effect。即执行它的Saga将在执行取消后立即恢复。

对于返回Promise结果的函数，你可以通过在promise上附加一个`[CANCEL]`来插入你自己的取消逻辑。

以下示例显示了如何将取消逻辑附加到Promise结果：

```javascript
import { CANCEL } from 'redux-saga'
import { fork, cancel } from 'redux-saga/effects'

function myApi() {
  const promise = myXhr(...)

  promise[CANCEL] = () => myXhr.abort()
  return promise
}

function* mySaga() {

  const task = yield fork(myApi)

  // ... later
  // will call promise[CANCEL] on the result of myApi
  yield cancel(task)
}
```

redux-saga将自动使用它们的`abort`方法取消jqXHR对象。

### `cancel([...tasks])`

创建一个Effect描述，指示中间件取消之前分叉的任务。

- `tasks: Array<Task>` - [Task](#task)是之前`fork`返回的对象

#### 注释

它将任务数组包装在[cancel effects](#canceltask)中，大致相当于
`yield tasks.map(t => cancel(t))`。

### `cancel()`

创建一个Effect描述，指示中间件取消其中已产生的任务（自我取消）。
它允许在`finally`块中重用析构器类似的逻辑，用于外部（`cancel(task)`）和自我（`cancel()`）取消。

#### 示例

```javascript
function* deleteRecord({ payload }) {
  try {
    const { confirm, deny } = yield call(prompt);
    if (confirm) {
      yield put(actions.deleteRecord.confirmed())
    }
    if (deny) {
      yield cancel()
    }
  } catch(e) {
    // 处理失败
  } finally {
    if (yield cancelled()) {
      // 共享取消逻辑
      yield put(actions.deleteRecord.cancel(payload))
    }
  }
}
```

### `select(selector, ...args)`

创建一个效果，指示中间件在当前Store的状态上调用提供的选择器（即返回`selector(getState(), ...args)`的结果）。

- `selector: Function` - 函数 `(state, ...args) => args`。它接受当前状态和一些可选参数，并返回当前Store状态的一个切片

- `args: Array<any>` - 要传递给选择器的可选参数，除了`getState`。

如果`select`没有参数调用（即`yield select()`），那么效果将解析为整个状态（与`getState()`调用的结果相同）。

> 重要的是要注意，当一个动作被分派到存储器时，中间件首先将动作转发给reducers，然后通知Sagas。这意味着当你查询Store的State时，你得到的是动作应用**后**的State。
> 然而，这种行为只有在所有后续的中间件同步调用`next(action)`时才能保证。如果任何后续的中间件异步调用`next(action)`（这是不寻常的，但是可能的），那么sagas将得到动作应用**前**的状态。因此，建议审查每个后续中间件的源代码，以确保它同步调用`next(action)`，或者确保redux-saga是调用链中的最后一个中间件。

#### 注释

最好，一个Saga应该是自主的，不应该依赖于Store的状态。这使得在不影响Saga代码的情况下，可以很容易地修改状态实现。一个saga最好只依赖于它自己的内部控制状态。但是有时候，人们可能会发现让Saga查询状态，而不是自己维护所需的数据更方便（例如，当一个Saga复制调用某个reducer的逻辑来计算已经由Store计算出的状态时）。

例如，假设我们在应用程序中有这样的状态形状：

```javascript
state = {
  cart: {...}
}
```

我们可以创建一个*选择器*，即一个知道如何从State中提取`cart`数据的函数：

`./selectors`
```javascript
export const getCart = state => state.cart
```

然后我们可以在Saga中使用`select` Effect来使用该选择器：

`./sagas.js`
```javascript
import { take, fork, select } from 'redux-saga/effects'
import { getCart } from './selectors'

function* checkout() {
  // 使用导出的选择器查询状态
  const cart = yield select(getCart)

  // ... 调用一些API端点，然后分派一个成功/错误动作
}

export default function* rootSaga() {
  while (true) {
    yield take('CHECKOUT_REQUEST')
    yield fork(checkout)
  }
}
```

`checkout`可以通过使用`select(getCart)`直接获取所需的信息。Saga只与`getCart`选择器耦合。如果我们有许多需要访问`cart`切片的Sagas（或React组件），他们都将耦合到同一个函数`getCart`。现在，如果我们改变状态形状，我们只需要更新`getCart`。

### `actionChannel(pattern, [buffer])`

创建一个效果，指示中间件使用事件通道对匹配`pattern`的操作进行排队。可选地，您可以提供一个缓冲区来控制排队操作的缓冲。

- `pattern:` - 参见 `take(pattern)` 的API
- `buffer: Buffer` - 一个 [Buffer](#buffer) 对象

#### 示例

以下代码创建了一个通道，用于缓冲所有的 `USER_REQUEST` 操作。注意，即使 Saga 可能在 `call` 效果上被阻塞。所有在它被阻塞时来的操作都会自动被缓冲。这导致 Saga 一次执行一个 API 调用。

```javascript
import { actionChannel, call } from 'redux-saga/effects'
import api from '...'

function* takeOneAtMost() {
  const chan = yield actionChannel('USER_REQUEST')
  while (true) {
    const {payload} = yield take(chan)
    yield call(api.getUser, payload)
  }
}
```

### `flush(channel)`

创建一个效果，指示中间件从通道中刷新所有缓冲的项目。刷新的项目被返回给 saga，因此如果需要，它们可以被利用。

- `channel: Channel` - 一个 [`Channel`](#channel) 对象。

#### 示例

```javascript
function* saga() {
  const chan = yield actionChannel('ACTION')

  try {
    while (true) {
      const action = yield take(chan)
      // ...
    }
  } finally {
    const actions = yield flush(chan)
    // ...
  }

}
```

### `cancelled()`

创建一个效果，指示中间件返回此生成器是否已被取消。通常，您在 finally 块中使用此效果来运行取消特定的代码。

#### 示例

```javascript
function* saga() {
  try {
    // ...
  } finally {
    if (yield cancelled()) {
      // 只在取消时执行的逻辑
    }
    // 在所有情况下都应执行的逻辑（例如，关闭一个通道）
  }
}
```

### `setContext(props)`

创建一个效果，指示中间件更新其自身的上下文。此效果扩展了 saga 的上下文，而不是替换它。

### `getContext(prop)`

创建一个效果，指示中间件返回 saga 上下文的特定属性。

### `delay(ms, [val])`

返回一个效果描述符，以阻塞执行 `ms` 毫秒并返回 `val` 值。

### `throttle(ms, pattern, saga, ...args)`

在匹配 `pattern` 的操作被分派到 Store 时，生成一个 `saga`。生成任务后，它仍然接受进入底层 `buffer` 的操作，最多保留 1 个（最近的一个），但同时在 `ms` 毫秒内暂停生成新任务（因此其名称 - `throttle`）。这样做的目的是在处理任务的同时忽略给定时间段内的进入操作。

- `ms: Number` - 在操作开始处理后将忽略操作的时间窗口长度（以毫秒为单位）

- `pattern: String | Array | Function` - 更多信息请参见 [`take(pattern)`](#takepattern) 的文档

- `saga: Function` - 一个生成器函数

- `args: Array<any>` - 要传递给启动任务的参数。`throttle` 将添加进入操作到参数列表（即，操作将是提供给 `saga` 的最后一个参数）

#### 示例

在以下示例中，我们创建了一个基本任务 `fetchAutocomplete`。我们使用 `throttle` 在分派 `FETCH_AUTOCOMPLETE` 操作时启动新的 `fetchAutocomplete` 任务。然而，由于 `throttle` 在一段时间内忽略连续的 `FETCH_AUTOCOMPLETE`，我们确保用户不会用请求淹没我们的服务器。

```javascript
import { call, put, throttle } from `redux-saga/effects`

function* fetchAutocomplete(action) {
  const autocompleteProposals = yield call(Api.fetchAutocomplete, action.text)
  yield put({type: 'FETCHED_AUTOCOMPLETE_PROPOSALS', proposals: autocompleteProposals})
}

function* throttleAutocomplete() {
  yield throttle(1000, 'FETCH_AUTOCOMPLETE', fetchAutocomplete)
}
```

#### 注释

`throttle` 是使用 `take`，`fork` 和 `actionChannel` 构建的高级 API。以下是如何使用低级效果实现该助手

```javascript
const throttle = (ms, pattern, task, ...args) => fork(function*() {
  const throttleChannel = yield actionChannel(pattern, buffers.sliding(1))

  while (true) {
    const action = yield take(throttleChannel)
    yield fork(task, ...args, action)
    yield delay(ms)
  }
})
```

### `throttle(ms, channel, saga, ...args)`
你也可以将通道作为参数处理，其行为与 [`throttle(ms, pattern, saga, ..args)`](#throttlems-pattern-saga-args) 相同

### `debounce(ms, pattern, saga, ...args)`

在匹配 `pattern` 的动作被分发到 Store 后，生成一个 `saga`。在 `ms` 毫秒内停止接收 `pattern` 动作后，将调用 Saga。这样做的目的是防止在动作被解决之前调用 saga。

- `ms: Number` - 定义从最后一次触发 `pattern` 动作到调用 `saga` 应经过多少毫秒

- `pattern: String | Array | Function` - 更多信息请参见 [`take(pattern)`](#takepattern) 的文档

- `saga: Function` - 一个 Generator 函数

- `args: Array<any>` - 要传递给启动任务的参数。`debounce` 将把
传入的动作添加到参数列表中（即，动作将是提供给 `saga` 的最后一个参数）

#### 示例

在以下示例中，我们创建了一个基本任务 `fetchAutocomplete`。我们使用 `debounce` 来
延迟调用 `fetchAutocomplete` saga，直到我们停止接收任何 `FETCH_AUTOCOMPLETE` 事件至少 `1000` 毫秒。

```javascript
import { call, put, debounce } from `redux-saga/effects`

function* fetchAutocomplete(action) {
  const autocompleteProposals = yield call(Api.fetchAutocomplete, action.text)
  yield put({type: 'FETCHED_AUTOCOMPLETE_PROPOSALS', proposals: autocompleteProposals})
}

function* debounceAutocomplete() {
  yield debounce(1000, 'FETCH_AUTOCOMPLETE', fetchAutocomplete)
}
```

#### 注释

`debounce` 是使用 `take`、`delay`、`race` 和 `fork` 构建的高级 API。以下是如何使用低级效果实现 helper 的方法

```javascript
const debounce = (ms, pattern, task, ...args) => fork(function*() {
  while (true) {
    let action = yield take(pattern)

    while (true) {
      const { debounced, latestAction } = yield race({
        debounced: delay(ms),
        latestAction: take(pattern)
      })

      if (debounced) {
        yield fork(task, ...args, action)
        break
      }

      action = latestAction
    }
  }
})
```

### `debounce(ms, channel, saga, ...args)`
你也可以将通道作为参数处理，其行为与 [`debounce(ms, pattern, saga, ..args)`](#debouncems-pattern-saga-args) 相同

### `retry(maxTries, delay, fn, ...args)`
创建一个 Effect 描述，指示中间件用 `args` 作为参数调用函数 `fn`。
如果失败，将在 `delay` 毫秒后尝试再次调用，如果尝试次数 < `maxTries`。

- `maxTries: Number` - 最大调用次数。
- `delay: Number` - `fn` 调用之间的时间窗口长度（以毫秒为单位）。
- `fn: Function` - 一个 Generator 函数，或者是返回 Promise 作为结果的普通函数，或者是任何其他值。
- `args: Array<any>` - 要作为参数传递给 `fn` 的值数组

#### 示例

在以下示例中，我们创建了一个基本任务 `retrySaga`。我们使用 `retry` 来尝试用 10 秒的间隔调用我们的 API 3 次。如果 `request` 第一次失败，那么 `retry` 将再次调用 `request`，只要调用次数少于 3 次。

```javascript
import { put, retry } from 'redux-saga/effects'
import { request } from 'some-api';

function* retrySaga(data) {
  try {
    const SECOND = 1000
    const response = yield retry(3, 10 * SECOND, request, data)
    yield put({ type: 'REQUEST_SUCCESS', payload: response })
  } catch(error) {
    yield put({ type: 'REQUEST_FAIL', payload: { error } })
  }
}
```

#### 注释
`retry` 是使用 `delay` 和 `call` 构建的高级 API。[这是如何使用低级效果实现 helper 的方法](/docs/recipes/#retrying-xhr-calls)

## Effect 组合器

### `race(effects)`

创建一个 Effect 描述，指示中间件在多个 Effects 之间运行一个 *Race*（这类似于 [`Promise.race([...])`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 的行为）。

`effects: Object` - 形式为 `{label: effect, ...}` 的字典对象

#### 示例

以下示例在两个效果之间进行竞赛：

1. 调用一个函数 `fetchUsers`，该函数返回一个 Promise
2. 可能最终在 Store 上分派的 `CANCEL_FETCH` 操作

```javascript
import { take, call, race } from `redux-saga/effects`
import fetchUsers from './path/to/fetchUsers'

function* fetchUsersSaga() {
  const { response, cancel } = yield race({
    response: call(fetchUsers),
    cancel: take(CANCEL_FETCH)
  })
}
```

如果 `call(fetchUsers)` 首先解析，`race` 的结果将是一个带有单键对象 `{response: result}` 的对象，其中 `result` 是 `fetchUsers` 的解析结果。

如果 `call(fetchUsers)` 首先拒绝，`race` 会抛出拒绝原因。

如果在 `fetchUsers` 完成之前在 Store 上分派了类型为 `CANCEL_FETCH` 的操作，结果将是一个带有单键对象 `{cancel: action}` 的对象，其中 action 是分派的操作。

#### 注释

在解析 `race` 时，中间件会自动取消所有失败的 Effects。

### `race([...effects]) (带数组)`

与 [`race(effects)`](#raceeffects) 相同，但允许你传入一个效果数组。

#### 示例

以下示例在两个效果之间进行竞赛：

1. 调用一个函数 `fetchUsers`，该函数返回一个 Promise
2. 可能最终在 Store 上分派的 `CANCEL_FETCH` 操作

```javascript
import { take, call, race } from `redux-saga/effects`
import fetchUsers from './path/to/fetchUsers'

function* fetchUsersSaga() {
  const [response, cancel] = yield race([
    call(fetchUsers),
    take(CANCEL_FETCH)
  ])
}
```

如果 `call(fetchUsers)` 首先解析，`response` 将是 `fetchUsers` 的结果，`cancel` 将是 `undefined`。

如果 `call(fetchUsers)` 首先拒绝，`race` 会抛出拒绝原因。

如果在 `fetchUsers` 完成之前在 Store 上分派了类型为 `CANCEL_FETCH` 的操作，`response` 将是 `undefined`，`cancel` 将是分派的操作。

### `all([...effects]) - 并行效果`

创建一个 Effect 描述，指示中间件并行运行多个 Effects，并等待它们全部完成。这与标准的 [`Promise#all`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) API 相对应。

#### 示例

以下示例并行运行两个阻塞调用：

```javascript
import { fetchCustomers, fetchProducts } from './path/to/api'
import { all, call } from `redux-saga/effects`

function* mySaga() {
  const [customers, products] = yield all([
    call(fetchCustomers),
    call(fetchProducts)
  ])
}
```

### `all(effects)`

与 [`all([...effects])`](#alleffects-parallel-effects) 相同，但允许你传入带有标签的效果字典对象，就像 [`race(effects)`](#raceeffects)

- `effects: Object` - 形式为 `{label: effect, ...}` 的字典对象

#### 示例

以下示例并行运行两个阻塞调用：

```javascript
import { fetchCustomers, fetchProducts } from './path/to/api'
import { all, call } from `redux-saga/effects`

function* mySaga() {
  const { customers, products } = yield all({
    customers: call(fetchCustomers),
    products: call(fetchProducts)
  })
}
```

#### 注释

在并行运行 Effects 时，中间件会挂起 Generator，直到发生以下情况之一：

- 所有的 Effects 都成功完成：用包含所有 Effects 结果的数组恢复 Generator。

- 在所有效果完成之前，有一个效果被拒绝：在 Generator 内部抛出拒绝错误。

## 接口

### 任务

任务接口指定了使用 `fork`，`middleware.run` 或 `runSaga` 运行 Saga 的结果。

<table id="task-descriptor">
  <tr>
    <th>方法</th>
    <th>返回值</th>
  </tr>
  <tr>
    <td>task.isRunning()</td>
    <td>如果任务尚未返回或抛出错误，则为 true</td>
  </tr>
  <tr>
    <td>task.isCancelled()</td>
    <td>如果任务已被取消，则为 true</td>
  </tr>
  <tr>
    <td>task.result()</td>
    <td>任务的返回值。如果任务仍在运行，则为 `undefined`</td>
  </tr>
  <tr>
    <td>task.error()</td>
    <td>任务抛出的错误。如果任务仍在运行，则为 `undefined`</td>
  </tr>
  <tr>
    <td>task.toPromise()</td>
    <td>
      一个 Promise，它可能是：
        <ul>
          <li>用任务的返回值解析的</li>
          <li>用任务抛出的错误拒绝的</li>
        </ul>
      </td>
  </tr>
  <tr>
    <td>task.cancel()</td>
    <td>取消任务（如果它仍在运行）</td>
  </tr>
</table>

### 通道

通道是一个用于在任务之间发送和接收消息的对象。发送者的消息会被排队，直到有感兴趣的接收者请求消息，而注册的接收者会被排队，直到有消息可用。

每个通道都有一个底层缓冲区，该缓冲区定义了缓冲策略（固定大小，丢弃，滑动）

通道接口定义了3个方法：`take`，`put` 和 `close`

`Channel.take(callback):` 用于注册一个接收者。接收者的解决遵循以下规则

- 如果通道有缓冲的消息，那么`callback`将会用底层缓冲区的下一条消息（使用`buffer.take()`）来调用
- 如果通道已关闭且没有缓冲的消息，那么`callback`将会用`END`来调用
- 否则`callback`将会排队，直到有消息被放入通道

`Channel.put(message):` 用于在缓冲区放入消息。放入将会按照以下规则处理

- 如果通道已关闭，那么放入将不会有任何效果
- 如果有待处理的接收者，那么用消息调用最旧的接收者
- 否则将消息放入底层缓冲区

`Channel.flush(callback):` 用于从通道提取所有缓冲的消息。刷新将按照以下规则解决

- 如果通道已关闭且没有缓冲的消息，那么`callback`将会用`END`来调用
- 否则`callback`将会用所有缓冲的消息来调用

`Channel.close():` 关闭通道，这意味着不再允许放入。所有待处理的接收者将会用`END`来调用。

### 缓冲区

用于为通道实现缓冲策略。缓冲区接口定义了3个方法：`isEmpty`，`put` 和 `take`

- `isEmpty()`: 如果缓冲区没有消息，则返回true。每当注册新的接收者时，通道都会调用此方法
- `put(message)`: 用于在缓冲区放入新消息。注意缓冲区可以选择不存储消息（例如，超过给定限制的新消息可以被丢弃缓冲区）
- `take()`: 用于检索任何缓冲的消息。注意，此方法的行为必须与`isEmpty`一致

### SagaMonitor

由中间件使用，以分派监视事件。实际上，中间件分派了6个事件：

- 当根saga启动时（通过`runSaga`或`sagaMiddleware.run`），中间件调用`sagaMonitor.rootSagaStarted`

- 当触发效果时（通过`yield someEffect`），中间件调用`sagaMonitor.effectTriggered`

- 如果效果成功解决，中间件调用`sagaMonitor.effectResolved`

- 如果效果被错误拒绝，中间件调用`sagaMonitor.effectRejected`

- 如果效果被取消，中间件调用`sagaMonitor.effectCancelled`

- 最后，当分派Redux操作时，中间件调用`sagaMonitor.actionDispatched`

以下是每个方法的签名

- `sagaMonitor.rootSagaStarted(options)`：其中options是一个具有以下字段的对象

  - `effectId`：数字 - 分配给此根saga执行的唯一ID

  - `saga`：函数 - 开始运行的生成器函数

  - `args`：数组 - 传递给生成器函数的参数

- `effectTriggered(options)`

  - `effectId`：数字 - 分配给产生的效果的唯一ID

  - `parentEffectId`：数字 - 父效果的ID。在`race`或`parallel`效果的情况下，内部产生的所有效果都将直接将race/parallel效果作为父级。在顶级效果的情况下，父级将是包含的Saga

  - `label`：字符串 - 在`race`/`all`效果的情况下，所有子效果都将被分配为标签，对应于传递给`race`/`all`的对象的键

  - `effect`：对象 - 产生的效果本身

- `effectResolved(effectId, result)`

    - `effectId`：数字 - 产生的效果的ID

    - `result`：任何 - 效果成功解决的结果。在`fork`或`spawn`效果的情况下，结果将是一个`Task`对象。

- `effectRejected(effectId, error)`

    - `effectId`：数字 - 产生的效果的ID

    - `error`：任何 - 与效果的拒绝一起引发的错误

- `effectCancelled(effectId)`

    - `effectId`：数字 - 产生的效果的ID

- `actionDispatched(action)`

    - `action`：对象 - 分派的Redux操作。如果操作是由Saga分派的，则操作将具有一个属性`SAGA_ACTION`设置为true（`SAGA_ACTION`可以从`@redux-saga/symbols`导入）。


## 外部 API
------------------------

### `runSaga(options, saga, ...args)`

允许在 Redux 中间件环境之外启动 sagas。如果你想将 Saga 连接到除存储操作之外的外部输入/输出，这将非常有用。

`runSaga` 返回一个任务对象。就像从 `fork` 效果返回的那样。

- `options: Object` - 目前支持的选项有：
  - `channel` - 参见 [`channel`](#channel) 的文档（这里最好使用 `stdChannel`）

  - `dispatch(output): Function` - 用于满足 `put` 效果。
    - `output: any` - 由 Saga 提供给 `put` 效果的参数（参见下面的注释）。

  - `getState(): Function` - 用于满足 `select` 和 `getState` 效果

  - `sagaMonitor` : [SagaMonitor](#sagamonitor) - 参见 [`createSagaMiddleware(options)`](#createsagamiddlewareoptions) 的文档

  - `onError: Function` - 参见 [`createSagaMiddleware(options)`](#createsagamiddlewareoptions) 的文档

  - `context` : {} - 参见 [`createSagaMiddleware(options)`](#createsagamiddlewareoptions) 的文档
  - `effectMiddlewares` : Function[] - 参见 [`createSagaMiddleware(options)`](#createsagamiddlewareoptions) 的文档

- `saga: Function` - 一个生成器函数

- `args: Array<any>` - 提供给 `saga` 的参数

#### 注释

`{channel, dispatch}` 用于满足 `take` 和 `put` 效果。这定义了 Saga 的输入/输出接口。

`channel` 用于满足 `take(PATTERN)` 效果。每次在通道上放置东西时，都会通知所有待处理的内部监听器。如果 Saga 被 `take` 效果阻塞，并且 take 模式匹配当前进入的输入，Saga 将以该输入恢复。

`dispatch` 用于满足 `put` 效果。每次 Saga 发出 `yield put(output)` 时，都会用 output 调用 `dispatch`。

如何使用此 API 的示例可以在[这里](advanced/UsingRunSaga.md)找到。

## 实用工具

### `channel([buffer])`

一个可以用来创建 Channels 的工厂方法。你可以选择性地传递一个缓冲区来控制通道如何缓冲消息。

默认情况下，如果没有提供缓冲区，通道将排队接收的消息达到 10，直到注册感兴趣的接收者。默认的缓冲将使用 FIFO 策略：新的接收者将被传递缓冲区中最旧的消息。

### `eventChannel(subscribe, [buffer])`

创建一个将使用 `subscribe` 方法订阅事件源的通道。来自事件源的传入事件将在通道中排队，直到注册感兴趣的接收者。

- `subscribe: Function` 用于订阅底层事件源。该函数必须返回一个取消订阅函数以终止订阅。

- `buffer: Buffer` 可选的 Buffer 对象，用于在此通道上缓冲消息。如果未提供，此通道上的消息将不会被缓冲。

要通知通道事件源已终止，你可以用 `END` 通知提供的订阅者。

#### 示例

在以下示例中，我们创建了一个事件通道，该通道将订阅 `setInterval`

```javascript
const countdown = (secs) => {
  return eventChannel(emitter => {
      const iv = setInterval(() => {
        console.log('countdown', secs)
        secs -= 1
        if (secs > 0) {
          emitter(secs)
        } else {
          emitter(END)
          clearInterval(iv)
          console.log('countdown terminated')
        }
      }, 1000);
      return () => {
        clearInterval(iv)
        console.log('countdown cancelled')
      }
    }
  )
}
```

### `buffers`

提供一些常见的缓冲区

- `buffers.none()`: 没有缓冲，如果没有待处理的接收者，新消息将丢失

- `buffers.fixed(limit)`: 新消息将被缓冲到 `limit`。溢出将引发错误。省略 `limit` 值将导致限制为 10。

- `buffers.expanding(initialSize)`: 类似于 `fixed`，但溢出将导致缓冲区动态扩展。

- `buffers.dropping(limit)`: 与 `fixed` 相同，但溢出将静默丢弃消息。

- `buffers.sliding(limit)`: 与 `fixed` 相同，但溢出将在末尾插入新消息并丢弃缓冲区中最旧的消息。


### `cloneableGenerator(generatorFunc)`

接受一个生成器函数（function*）并返回一个生成器函数。
从此函数实例化的所有生成器都将是可克隆的。
仅用于测试目的。

#### 示例

当你想要测试 saga 的不同分支而无需重播导致它的操作时，这非常有用。

```javascript
import { cloneableGenerator } from '@redux-saga/testing-utils';

function* oddOrEven() {
  // 这里做了一些事情
  yield 1;
  yield 2;
  yield 3;

  const userInput = yield '输入一个数字';
  if (userInput % 2 === 0) {
    yield '偶数';
  } else {
    yield '奇数'
  }
}

test('我的 oddOrEven saga', assert => {
  const data = {};
  data.gen = cloneableGenerator(oddOrEven)();

  assert.equal(
    data.gen.next().value,
    1,
    '应该产出 1'
  );

  assert.equal(
    data.gen.next().value,
    2,
    '应该产出 2'
  );

  assert.equal(
    data.gen.next().value,
    3,
    '应该产出 3'
  );

  assert.equal(
    data.gen.next().value,
    '输入一个数字',
    '应该询问一个数字'
  );

  assert.test('给定偶数', a => {
    // 在给出数字之前，我们克隆了生成器；
    data.clone = data.gen.clone();

    a.equal(
      data.gen.next(2).value,
      '偶数',
      '应该产出 "偶数"'
    );

    a.equal(
      data.gen.next().done,
      true,
      '应该完成'
    );

    a.end();
  });

  assert.test('给定奇数', a => {

    a.equal(
      data.clone.next(1).value,
      '奇数',
      '应该产出 "奇数"'
    );

    a.equal(
      data.clone.next().done,
      true,
      '应该完成'
    );

    a.end();
  });

  assert.end();
});

```
### `createMockTask()`

返回一个模拟任务的对象。
仅用于测试目的。
[有关更多信息，请参阅任务取消文档。](advanced/TaskCancellation.md#testing-generators-with-fork-effect)

## 速查表

### 阻塞 / 非阻塞

| 名称                 | 阻塞                                                        |
| -------------------- | ------------------------------------------------------------|
| takeEvery            | 否                                                          |
| takeLatest           | 否                                                          |
| takeLeading          | 否                                                          |
| throttle             | 否                                                          |
| debounce             | 否                                                          |
| retry                | 是                                                          |
| take                 | 是                                                          |
| take(channel)        | 有时（参见 API 参考）                                       |
| takeMaybe            | 是                                                          |
| put                  | 否                                                          |
| putResolve           | 是                                                          |
| put(channel, action) | 否                                                          |
| call                 | 是                                                          |
| apply                | 是                                                          |
| cps                  | 是                                                          |
| fork                 | 否                                                          |
| spawn                | 否                                                          |
| join                 | 是                                                          |
| cancel               | 否                                                          |
| select               | 否                                                          |
| actionChannel        | 否                                                          |
| flush                | 是                                                          |
| cancelled            | 是                                                          |
| race                 | 是                                                          |
| delay                | 是                                                          |
| all                  | 如果数组或对象中有阻塞效果，则阻塞                          |
