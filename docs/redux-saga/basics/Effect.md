---
title: 效果
hide_title: true
---

# 一个常见的抽象：Effect

一般来说，从Saga内部触发副作用总是通过产生一些声明性的Effect来完成的。（你也可以直接yield Promise，但是这会使测试变得困难，正如我们在第一部分看到的。）

Saga实际上做的是将所有这些Effects组合在一起，以实现所需的控制流。最基本的例子是通过将yield的Effects一个接一个地放置来序列化它们。你也可以使用熟悉的控制流操作符（`if`，`while`，`for`）来实现更复杂的控制流。

我们看到，使用像`call`和`put`这样的Effects，结合高级APIs如`takeEvery`，使我们能够实现与`redux-thunk`相同的事情，但带来的好处是易于测试。

但是`redux-saga`相比`redux-thunk`还有另一个优势。在高级部分，你会遇到一些更强大的Effects，它们让你能够表达复杂的控制流，同时仍然允许同样的可测试性优势。
