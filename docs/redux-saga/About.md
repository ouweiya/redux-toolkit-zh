---
title: 关于
hide_title: true
---

# 关于 Redux-Saga

`redux-saga` 是一个库，旨在使应用程序的副作用（例如异步操作如数据获取和不纯净的操作如访问浏览器缓存）更易于管理，执行更高效，易于测试，并且在处理失败时更优秀。

其思维模型是，saga 就像你的应用程序中的一个单独线程，专门负责副作用。`redux-saga` 是一个 redux 中间件，这意味着这个线程可以从主应用程序通过正常的 redux 动作启动、暂停和取消，它可以访问完整的 redux 应用程序状态，并且可以派发 redux 动作。

它使用了一个名为 Generators 的 ES6 特性，使得这些异步流程易于阅读、编写和测试。*(如果你对它们不熟悉，[这里有一些入门链接][ext-links])* 通过这样做，这些异步流程看起来就像你的标准同步 JavaScript 代码。（有点像 `async`/`await`，但是 generators 有一些我们需要的更棒的特性）

你可能之前用过 `redux-thunk` 来处理你的数据获取。与 redux thunk 不同，你不会陷入回调地狱，你可以轻松测试你的异步流程，而且你的动作保持纯净。

[ext-links]: https://redux-saga.js.org/docs/ExternalResources.html