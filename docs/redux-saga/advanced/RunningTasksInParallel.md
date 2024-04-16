---
title: 并行运行任务
hide_title: true
---

# 并行运行任务

`yield`语句非常适合以线性方式表示异步控制流，但我们也需要并行执行任务。我们不能这样写：

```javascript
// 错误，效果将按顺序执行
const users = yield call(fetch, '/users')
const repos = yield call(fetch, '/repos')
```

因为第二个效果将不会执行，直到第一个调用解决。相反，我们必须这样写：

```javascript
import { all, call } from 'redux-saga/effects'

// 正确，效果将并行执行
const [users, repos] = yield all([
  call(fetch, '/users'),
  call(fetch, '/repos')
])
```

当我们 yield 一个效果数组时，生成器会被阻塞，直到所有效果都被解决，或者一旦有一个被拒绝（就像 `Promise.all` 的行为一样）。
