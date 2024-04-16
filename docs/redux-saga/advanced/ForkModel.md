---
title: 分支模型
hide_title: true
---

# redux-saga的fork模型

在`redux-saga`中，你可以使用2种Effects动态地fork在后台执行的任务

- `fork`用于创建*附加的forks*
- `spawn`用于创建*分离的forks*

## 附加的forks（使用`fork`）

附加的forks按照以下规则附加到其父任务

### 完成

- Saga只有在以下情况后才终止
  - 它完成了自己的指令体
  - 所有附加的forks都已经终止

例如，我们有以下代码

```js
import { fork, call, put, delay } from 'redux-saga/effects'
import api from './somewhere/api' // app specific
import { receiveData } from './somewhere/actions' // app specific

function* fetchAll() {
  const task1 = yield fork(fetchResource, 'users')
  const task2 = yield fork(fetchResource, 'comments')
  yield delay(1000)
}

function* fetchResource(resource) {
  const {data} = yield call(api.fetch, resource)
  yield put(receiveData(data))
}

function* main() {
  yield call(fetchAll)
}
```

`call(fetchAll)`将在以下情况后终止：

- `fetchAll`体本身终止，这意味着所有3个effects都已执行。由于`fork` effects是非阻塞的，任务将在`delay(1000)`上阻塞

- 2个forked任务终止，即在获取所需资源并放置相应的`receiveData`操作后

所以整个任务将阻塞，直到延迟1000毫秒并且`task1`和`task2`都完成了他们的任务。

例如，1000毫秒的延迟已经过去，但2个任务还没有完成，那么`fetchAll`仍然会等待所有forked任务完成后才终止整个任务。

细心的读者可能已经注意到，`fetchAll` saga可以使用并行Effect重写

```js
function* fetchAll() {
  yield all([
    call(fetchResource, 'users'),     // task1
    call(fetchResource, 'comments'),  // task2,
    delay(1000)
  ])
}
```

实际上，附加的forks与并行Effect具有相同的语义：

- 我们正在并行执行任务
- 父任务将在所有启动的任务终止后终止

这也适用于所有其他语义（错误和取消传播）。你可以通过将其视为*动态并行* Effect来理解附加forks的行为。

## 错误传播

按照相同的类比，让我们详细检查并行Effects中如何处理错误

例如，我们有这个Effect

```js
yield all([
  call(fetchResource, 'users'),
  call(fetchResource, 'comments'),
  delay(1000)
])
```

上述效果将在3个子Effects中的任何一个失败时立即失败。此外，未捕获的错误将导致并行Effect取消所有其他待处理的Effects。所以例如，如果`call(fetchResource, 'users')`引发了一个未捕获的错误，那么并行Effect将取消其他2个任务（如果它们仍在等待），然后用失败调用的相同错误中止自己。

对于附加的forks，Saga会在以下情况下立即中止

- 它的主指令体抛出一个错误

- 其中一个附加的forks引发了一个未捕获的错误

所以在前面的例子中

```js
//... imports

function* fetchAll() {
  const task1 = yield fork(fetchResource, 'users')
  const task2 = yield fork(fetchResource, 'comments')
  yield delay(1000)
}

function* fetchResource(resource) {
  const {data} = yield call(api.fetch, resource)
  yield put(receiveData(data))
}

function* main() {
  try {
    yield call(fetchAll)
  } catch (e) {
    // handle fetchAll errors
  }
}
```

如果在某一时刻，例如，`fetchAll`被`delay(1000)` Effect阻塞，而`task1`失败了，那么整个`fetchAll`任务将失败，导致

- 取消所有其他待处理的任务。这包括：
  - *主任务*（`fetchAll`的主体）：取消它意味着取消当前的Effect `delay(1000)`
  - 其他仍在等待的forked任务。即我们例子中的`task2`。

- `call(fetchAll)`将引发一个错误，该错误将在`main`的`catch`体中被捕获

注意，我们只能从`call(fetchAll)`中的`main`捕获错误，因为我们使用的是阻塞调用。并且我们不能直接从`fetchAll`捕获错误。这是一个经验法则，**你不能捕获来自forked任务的错误**。一个附加的fork的失败将导致forking的父任务中止（就像没有办法在并行Effect内部捕获错误一样，只能从外部通过阻塞并行Effect捕获错误）。

## 取消

取消Saga会导致取消：

- *主任务*，这意味着取消Saga被阻塞的当前Effect

- 所有仍在执行的附加forks

**正在进行中**

## 分离的forks（使用`spawn`）

分离的forks在他们自己的执行上下文中生活。父任务不等待分离的forks终止。从spawned任务中的未捕获错误不会向父任务冒泡。取消父任务不会自动取消分离的forks（你需要显式地取消它们）。

简而言之，分离的forks的行为就像直接使用`middleware.run` API启动的根Saga一样。
