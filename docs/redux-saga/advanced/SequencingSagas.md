---
title: Saga 序列化
hide_title: true
---

# 通过 `yield*` 进行 Sagas 序列化

你可以使用内置的 `yield*` 操作符以顺序方式组合多个 Sagas。这允许你以过程式风格序列化你的*宏任务*。

```javascript
function* playLevelOne() { ... }

function* playLevelTwo() { ... }

function* playLevelThree() { ... }

function* game() {
  const score1 = yield* playLevelOne()
  yield put(showScore(score1))

  const score2 = yield* playLevelTwo()
  yield put(showScore(score2))

  const score3 = yield* playLevelThree()
  yield put(showScore(score3))
}
```

注意，使用 `yield*` 将导致 JavaScript 运行时*展开*整个序列。结果迭代器（来自 `game()`）将产生来自嵌套迭代器的所有值。一个更强大的替代方案是使用更通用的中间件组合机制。
