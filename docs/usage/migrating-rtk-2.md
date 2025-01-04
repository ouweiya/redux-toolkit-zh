---
id: migrating-rtk-2
title: 迁移到 RTK 2.0 和 Redux 5.0
sidebar_label: 迁移到 RTK 2.0 和 Redux 5.0
hide_title: true
toc_max_heading_level: 4
---

&nbsp;

<div className="migration-guide">

# 迁移到 RTK 2.0 和 Redux 5.0 

:::tip 你将学到

- Redux Toolkit 2.0、Redux core 5.0、Reselect 5.0和Redux Thunk 3.0中有哪些变化,包括破坏性变更和新特性

:::

## 介绍

Redux Toolkit 自2019年发布以来,已成为编写 Redux 应用程序的标准方式。我们已经4年多没有任何破坏性变更了。现在,RTK 2.0 给了我们一个机会来优化打包、清理已弃用的选项,并修复一些边界情况。

**Redux Toolkit 2.0 随附所有其他 Redux 包的主要版本更新:Redux core 5.0、React-Redux 9.0、Reselect 5.0和Redux Thunk 3.0**。

本页列出了每个包中已知的潜在破坏性变更,以及 Redux Toolkit 2.0 中的新功能。提醒一下,**你实际上不需要直接安装或使用核心 `redux` 包** - RTK 封装并重新导出了所有方法和类型。

实际上,**大多数"破坏性"变更应该不会对最终用户产生实际影响,我们预计许多项目只需更新包版本,几乎不需要进行代码更改**。

最可能需要更新应用程序代码的变更是:

- [移除了 `createReducer` 和 `createSlice.extraReducers` 的对象语法](#移除了-createslice.extrareducers-和-createreducer-的对象语法)
- [`configureStore.middleware` 必须是回调函数](#configurestoremiddleware-必须是回调函数)
- [`Middleware` 类型变更 - 中间件的 `action` 和 `next` 被类型化为 `unknown`](#middleware-类型变更---中间件的-action-和-next-被类型化为-unknown)

## 打包变更(所有)

我们更新了所有 Redux 相关库的打包格式。这些在技术上是"破坏性"的,但_应该_对最终用户透明,实际上还能更好地支持一些场景,如在 Node 下通过 ESM 文件使用 Redux。

#### 在 `package.json` 中添加 `exports` 字段 

我们已将包定义迁移为包含 `exports` 字段来定义要加载的构件,以现代 ESM 构建作为主要构件(仍包含 CJS 以保持兼容性)。

我们已经进行了本地测试,但我们希望社区能在你们自己的项目中尝试并报告任何发现的问题!

#### 构建构件现代化

我们以多种方式更新了构建输出:

- **构建输出不再被转译!** 而是针对现代 JS 语法(ES2020)
- 将所有构建构件移到 `./dist/` 下,而不是单独的顶级文件夹
- 我们测试的最低 TypeScript 版本现在是 **TS 4.7**。

#### 移除 UMD 构建

Redux 一直提供 UMD 构建构件。这些主要用于直接作为脚本标签导入,例如在 CodePen 或无打包工具的构建环境中。

目前,我们从已发布的包中移除了这些构建构件,因为这些用例在今天看来非常罕见。

我们在 `dist/$PACKAGE_NAME.browser.mjs` 包含了一个可在浏览器中使用的 ESM 构建构件,可以通过指向 Unpkg 上该文件的脚本标签加载。

如果你有继续包含 UMD 构建构件的强烈用例,请告诉我们!

## 破坏性变更

### Core 

#### Action types _必须_是字符串

我们一直特别告诉用户[action 和 state _必须_是可序列化的](https://redux.js.org/style-guide/#do-not-put-non-serializable-values-in-state-or-actions),并且 `action.type` _应该_是字符串。这既是为了确保 action 是可序列化的,也是为了帮助在 Redux DevTools 中提供可读的 action 历史记录。

`store.dispatch(action)` 现在专门要求**`action.type` _必须_是字符串**,否则会抛出错误,就像当 action 不是普通对象时一样抛出错误。

实际上,这在99.99%的情况下都是如此,不应该对用户产生任何影响(特别是使用 Redux Toolkit 和 `createSlice` 的用户),但可能有一些旧的 Redux 代码库选择将 Symbol 用作 action type。

#### `createStore` 弃用

在 [Redux 4.2.0, 我们将原始的 `createStore` 方法标记为 `@deprecated`](https://github.com/reduxjs/redux/releases/tag/v4.2.0)。严格来说,**这 _不是_ 破坏性变更**,在 5.0 中也不是新变更,但为了完整性我们在此记录。

**此弃用仅是一个 _视觉_ 指示器,旨在鼓励用户[将其应用程序从传统 Redux 模式迁移到使用现代 Redux Toolkit API](https://redux.js.org/usage/migrating-to-modern-redux)**。

弃用会导致导入和使用时出现**视觉上的删除线**,比如 **~~`createStore`~~**,但 **_没有_ 运行时错误或警告**。

**`createStore` 将继续无限期工作,并且 _永远不会_ 被移除**。但是,今天我们希望 _所有_ Redux 用户都使用 Redux Toolkit 来处理所有 Redux 逻辑。

要修复这个问题,有三个选项:

- **[按照我们的强烈建议切换到 Redux Toolkit 和 `configureStore`](https://redux.js.org/usage/migrating-to-modern-redux)**
- 什么都不做。这只是一个视觉上的删除线,不会影响代码的行为。忽略它。
- 切换使用 `legacy_createStore` API,该 API 现在已导出,它与原函数完全相同,但没有 `@deprecated` 标签。最简单的选项是进行别名导入重命名,如 `import { legacy_createStore as createStore } from 'redux'`

<div class="typescript-only">

#### Typescript 重写

2019年,我们开始了一个由社区驱动的将 Redux 代码库转换为 TypeScript 的项目。最初的工作在 [#3500: Port to TypeScript](https://github.com/reduxjs/redux/issues/3500) 中讨论,并在 PR [#3536: Convert to TypeScript](https://github.com/reduxjs/redux/issues/3536) 中集成。

然而,TS 转换后的代码在仓库中闲置了几年,未被使用和发布,因为我们担心与现有生态系统的兼容性问题(以及我们自身的惯性)。

Redux core v5 现在基于该 TS 转换后的源代码构建。理论上,这应该在运行时行为和类型上几乎与 4.x 版本相同,但很可能某些更改会导致类型问题。

请在 [Github](https://github.com/reduxjs/redux/issues) 上报告任何意外的兼容性问题!

#### `AnyAction` 弃用,改用 `UnknownAction`

Redux TS 类型一直导出一个 `AnyAction` 类型,其定义为 `{type: string}` 并将任何其他字段视为 `any`。这使得编写 `console.log(action.whatever)` 之类的代码变得容易,但不幸的是,这并没有提供任何有意义的类型安全。

我们现在导出一个 `UnknownAction` 类型,将 `action.type` 以外的所有字段视为 `unknown`。这鼓励用户编写类型守卫来检查 action 对象并断言其_特定_的 TS 类型。在这些检查中,你可以更安全地访问字段。

`UnknownAction` 现在是 Redux 源代码中期望 action 对象的任何地方的默认值。

`AnyAction` 仍然存在以保持兼容性,但已被标记为弃用。

请注意,[Redux Toolkit 的 action 创建器有一个 `.match()` 方法](https://redux-toolkit.js.org/api/createAction#actioncreatormatch),它充当有用的类型守卫:

```ts
if (todoAdded.match(someUnknownAction)) {
  // action 现在被类型化为 PayloadAction<Todo>
}
```

你还可以使用新的 `isAction` 工具来检查未知值是否是某种 action 对象。

#### `Middleware` 类型变更 - 中间件的 `action` 和 `next` 被类型化为 `unknown`

以前,`next` 参数被类型化为传递的 `D` 类型参数,`action` 被类型化为从 dispatch 类型中提取的 `Action`。这些都不是安全的假设:

- `next` 将被类型化为具有**所有** dispatch 扩展,包括链中较早的那些不再适用的扩展。
  - 从技术上讲,将 `next` 类型化为基础 redux store 实现的默认 Dispatch 是_大部分_安全的,但这会导致 `next(action)` 出错(因为我们不能保证 `action` 实际上是 `Action`),并且不会考虑任何后续中间件在看到特定 action 时返回与给定 action 不同的内容。
- `action` 不一定是已知的 action,它可以是任何东西 - 例如 thunk 将是一个没有 `.type` 属性的函数(因此 `AnyAction` 将不准确)

我们将 `next` 更改为 `(action: unknown) => unknown`(这是准确的,我们不知道 `next` 期望什么或会返回什么),并将 `action` 参数更改为 `unknown`(如上所述,这是准确的)。

为了安全地与值交互或访问 `action` 参数中的字段,你必须首先进行类型守卫检查以缩小类型范围,例如 `isAction(action)` 或 `someActionCreator.match(action)`。

这个新类型与 v4 `Middleware` 类型不兼容,因此如果包的中间件显示不兼容,请检查它从哪个版本的 Redux 获取其类型!(请参阅本页后面的[覆盖依赖项](#overriding-dependencies))。

#### 移除 `PreloadedState` 类型,改用 `Reducer` 泛型

我们对 TS 类型进行了调整,以提高类型安全性和行为。

首先,`Reducer` 类型现在有一个 `PreloadedState` 可选泛型:

```ts
type Reducer<S, A extends Action, PreloadedState = S> = (
  state: S | PreloadedState | undefined,
  action: A,
) => S
```

根据 [#4491](https://github.com/reduxjs/redux/pull/4491) 中的解释:

为什么需要这个更改?当 store 首次由 `createStore`/`configureStore` 创建时,初始状态设置为传递的 `preloadedState` 参数(如果未传递则为 `undefined`)。这意味着第一次调用 reducer 时,它会接收 `preloadedState`。在第一次调用之后,reducer 始终接收当前状态(即 `S`)。

对于大多数普通 reducer,`S | undefined` 准确描述了可以传递的 `preloadedState`。然而,`combineReducers` 函数允许 `Partial<S> | undefined` 的预加载状态。

解决方案是有一个单独的泛型来表示 reducer 接受的预加载状态。这样 `createStore` 就可以使用该泛型作为其 `preloadedState` 参数。

以前,这是通过 `$CombinedState` 类型处理的,但这使事情复杂化并导致一些用户报告的问题。这完全消除了对 `$CombinedState` 的需求。

此更改确实包含一些破坏性更改,但总体上不应对用户升级产生巨大影响:

- `Reducer`、`ReducersMapObject` 和 `createStore`/`configureStore` 类型/函数接受一个额外的 `PreloadedState` 泛型,默认为 `S`。
- 移除了 `combineReducers` 的重载,改为一个函数定义,将 `ReducersMapObject` 作为其泛型参数。由于这些更改,删除重载是必要的,因为有时它会选择错误的重载。
- 显式列出 reducer 泛型的增强器需要添加第三个泛型。

</div>

### Toolkit only

#### 移除了 `createSlice.extraReducers` 和 `createReducer` 的对象语法

RTK 的 `createReducer` API 最初设计为接受一个 action type 字符串到 case reducer 的查找表,如 `{ "ADD_TODO": (state, action) => {} }`。我们后来添加了"构建器回调"形式,以允许更灵活地添加"匹配器"和默认处理程序,并对 `createSlice.extraReducers` 进行了相同的处理。

我们在 RTK 2.0 中移除了 `createReducer` 和 `createSlice.extraReducers` 的"对象"形式,因为构建器回调形式实际上与代码行数相同,并且在 TypeScript 中效果更好。

例如,这段代码:

```ts
const todoAdded = createAction('todos/todoAdded')

createReducer(initialState, {
  [todoAdded]: (state, action) => {},
})

createSlice({
  name,
  initialState,
  reducers: {
    /* case reducers here */
  },
  extraReducers: {
    [todoAdded]: (state, action) => {},
  },
})
```

应迁移为:

```ts
createReducer(initialState, (builder) => {
  builder.addCase(todoAdded, (state, action) => {})
})

createSlice({
  name,
  initialState,
  reducers: {
    /* case reducers here */
  },
  extraReducers: (builder) => {
    builder.addCase(todoAdded, (state, action) => {})
  },
})
```

##### Codemods

为了简化代码库的升级,我们发布了一组 codemods,它们会自动将已弃用的"对象"语法转换为等效的"构建器"语法。

codemods 包在 NPM 上可用,名为 [`@reduxjs/rtk-codemods`](https://www.npmjs.com/package/@reduxjs/rtk-codemods)。更多详细信息请参见[此处](../api/codemods)。

要对代码库运行 codemods,请运行 `npx @reduxjs/rtk-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js.`

示例:

```sh
npx @reduxjs/rtk-codemods createReducerBuilder ./src

npx @reduxjs/rtk-codemods createSliceBuilder ./packages/my-app/**/*.ts
```

我们还建议在提交更改之前重新运行 Prettier。

这些 codemods 应该可以工作,但我们非常感谢更多实际代码库的反馈!

#### `configureStore.middleware` 必须是回调函数

从一开始,`configureStore` 就接受一个直接的数组值作为 `middleware` 选项。然而,直接提供数组会阻止 `configureStore` 调用 `getDefaultMiddleware()`。因此,`middleware: [myMiddleware]` 意味着没有添加 thunk 中间件(或任何开发模式检查)。

这是一个陷阱,我们有许多用户不小心这样做,导致他们的应用程序失败,因为默认中间件从未配置。

因此,我们现在使 `middleware` 仅接受回调形式。如果出于某种原因你仍然希望完全替换所有内置中间件,请通过回调返回一个数组:

```ts
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    // 警告:这意味着没有添加任何默认中间件!
    return [myMiddleware]
    // 或者对于 TS 用户,使用:
    // return new Tuple(myMiddleware)
  },
})
```

但请注意,**我们始终建议不要完全替换默认中间件**,你应该使用 `return getDefaultMiddleware().concat(myMiddleware)`。

#### `configureStore.enhancers` 必须是回调函数

与 `configureStore.middleware` 类似,`enhancers` 字段也必须是回调函数,原因相同。

回调将接收一个 `getDefaultEnhancers` 函数,可用于自定义默认包含的批处理增强器[现在默认包含](#configurestore-adds-autobatchenhancer-by-default)。

例如:

```ts
const store = configureStore({
  reducer,
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers({
      autoBatch: { type: 'tick' },
    }).concat(myEnhancer)
  },
})
```

需要注意的是,`getDefaultEnhancers` 的结果还将包含使用任何配置/默认中间件创建的中间件增强器。为了帮助防止错误,如果提供了中间件并且回调结果中未包含中间件增强器,`configureStore` 将在控制台记录错误。

```ts
const store = configureStore({
  reducer,
  enhancers: (getDefaultEnhancers) => {
    return [myEnhancer] // 我们在这里丢失了中间件
    // 改为:
    return getDefaultEnhancers().concat(myEnhancer)
  },
})
```

#### 移除独立的 `getDefaultMiddleware` 和 `getType`

自 v1.6.1 起,独立版本的 `getDefaultMiddleware` 已被弃用,现在已被移除。请改用传递给 `middleware` 回调的函数,它具有正确的类型。

我们还移除了 `getType` 导出,该导出用于从使用 `createAction` 创建的 action 创建器中提取类型字符串。请改用静态属性 `actionCreator.type`。

#### RTK Query 行为变更

我们收到了一些报告,RTK Query 在使用 `dispatch(endpoint.initiate(arg, {subscription: false}))` 时存在问题。还有报告称,多个触发的惰性查询在错误的时间解析了 promise。这两个问题的根本原因是 RTKQ 在这些情况下没有跟踪缓存条目(有意为之)。我们重新设计了逻辑,以始终跟踪缓存条目(并在需要时删除它们),这应该可以解决这些行为问题。

我们还收到了一些关于尝试连续运行多个突变以及标签失效行为的问题。RTKQ 现在具有内部逻辑,可以稍微延迟标签失效,以便一起处理多个失效。这由 `createApi` 上的新 `invalidationBehavior: 'immediate' | 'delayed'` 标志控制。新的默认行为是 `'delayed'`。将其设置为 `'immediate'` 以恢复 RTK 1.9 中的行为。

在 RTK 1.9 中,我们重新设计了 RTK Query 的内部结构,将大部分订阅状态保留在 RTKQ 中间件中。这些值仍然同步到 Redux store 状态,但主要用于 Redux DevTools "RTK Query" 面板显示。与上述缓存条目更改相关,我们优化了这些值同步到 Redux 状态的频率以提高性能。

#### `reactHooksModule` 自定义钩子配置

以前,可以将 React Redux 的钩子(`useSelector`、`useDispatch` 和 `useStore`)的自定义版本分别传递给 `reactHooksModule`,通常是为了启用使用不同于默认 `ReactReduxContext` 的上下文。

实际上,react hooks 模块需要提供这三个钩子,并且很容易只传递 `useSelector` 和 `useDispatch`,而不传递 `useStore`。

该模块现在将这三个钩子移到同一个配置键下,并将检查如果存在该键,则必须提供这三个钩子。

```ts
// 以前
const customCreateApi = buildCreateApi(
  coreModule(),
  reactHooksModule({
    useDispatch: createDispatchHook(MyContext),
    useSelector: createSelectorHook(MyContext),
    useStore: createStoreHook(MyContext),
  }),
)

// 现在
const customCreateApi = buildCreateApi(
  coreModule(),
  reactHooksModule({
    hooks: {
      useDispatch: createDispatchHook(MyContext),
      useSelector: createSelectorHook(MyContext),
      useStore: createStoreHook(MyContext),
    },
  }),
)
```

#### 错误消息提取

Redux 4.1.0 通过[从生产构建中提取错误消息字符串](https://github.com/reduxjs/redux/releases/tag/v4.1.0)优化了其包大小,基于 React 的方法。我们将相同的技术应用于 RTK。这节省了大约 1000 字节的生产包大小(实际收益取决于使用了哪些导入)。

<div class="typescript-only">

#### `configureStore` 字段顺序对 `middleware` 重要

如果你同时传递 `middleware` 和 `enhancers` 字段给 `configureStore`,则 `middleware` 字段必须先出现,以便内部 TS 推断正常工作。

#### 非默认中间件/增强器必须使用 `Tuple`

我们看到许多用户将 `middleware` 参数传递给 configureStore 时尝试展开 `getDefaultMiddleware()` 返回的数组,或传递替代的普通数组。不幸的是,这会丢失各个中间件的确切 TS 类型,并且经常导致 TS 问题(例如 `dispatch` 被类型化为 `Dispatch<AnyAction>` 并且不知道 thunk)。

`getDefaultMiddleware()` 已经使用了一个内部的 `MiddlewareArray` 类,这是一个 `Array` 子类,具有强类型的 `.concat/prepend()` 方法,可以正确捕获和保留中间件类型。

我们将该类型重命名为 `Tuple`,并且 `configureStore` 的 TS 类型现在要求如果你想传递自己的中间件数组,则必须使用 `Tuple`:

```ts
import { configureStore, Tuple } from '@reduxjs/toolkit'

configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => new Tuple(additionalMiddleware, logger),
})
```

(请注意,如果你使用 RTK 和普通 JS,这没有任何影响,你仍然可以在这里传递一个普通数组。)

同样的限制适用于 `enhancers` 字段。

#### 实体适配器类型更新

`createEntityAdapter` 现在有一个 `Id` 泛型参数,将用于强类型化任何暴露的项目 ID。以前,ID 字段类型始终为 `string | number`。TS 现在将尝试从你的实体类型的 `.id` 字段或 `selectId` 返回类型推断确切类型。你也可以选择直接传递该泛型类型。如果你直接使用 `EntityState<Data, Id>` 类型,你必须提供这两个泛型参数!

`.entities` 查找表现在定义为使用标准 TS `Record<Id, MyEntityType>`,默认情况下假定每个项目查找都存在。以前,它使用 `Dictionary<MyEntityType>` 类型,假定结果为 `MyEntityType | undefined`。`Dictionary` 类型已被移除。

如果你更喜欢假定查找可能未定义,请使用 TypeScript 的 `noUncheckedIndexedAccess` 配置选项来控制。

</div>

### Reselect

#### `createSelector` 使用 `weakMapMemoize` 作为默认记忆化器

**`createSelector` 现在使用一个名为 `weakMapMemoize` 的新默认记忆化函数**。这个记忆化器提供了一个实际上无限的缓存大小,这应该简化使用不同参数的情况,但完全依赖于引用比较。

如果你需要自定义相等比较,请自定义 `createSelector` 以使用原始的 `lruMemoize` 方法:

```ts no-emit
createSelector(inputs, resultFn, {
  memoize: lruMemoize,
  memoizeOptions: { equalityCheck: yourEqualityFunction },
})
```

#### `defaultMemoize` 重命名为 `lruMemoize`

由于原始的 `defaultMemoize` 函数不再是默认值,我们将其重命名为 `lruMemoize` 以便清晰。这仅在你特别导入它到你的应用程序以自定义选择器时才重要。

#### `createSelector` 开发模式检查

`createSelector` 现在在开发模式下检查常见错误,如始终返回新引用的输入选择器或立即返回其参数的结果函数。这些检查可以在选择器创建时或全局自定义。

这很重要,因为输入选择器返回的结果在相同参数下有实质性差异意味着输出选择器将永远不会正确记忆化并且会不必要地运行,从而(可能)创建一个新结果并导致重新渲染。

```ts
const addNumbers = createSelector(
  // 这个输入选择器每次运行都会返回一个新引用
  // 因此缓存将永远不会被使用
  (a, b) => ({ a, b }),
  ({ a, b }) => ({ total: a + b }),
)
// 相反,你应该为每个稳定的数据片段创建一个输入选择器
const addNumbersStable = createSelector(
  (a, b) => a,
  (a, b) => b,
  (a, b) => ({
    total: a + b,
  }),
)
```

这是在选择器第一次调用时完成的,除非另有配置。更多详细信息请参见 [Reselect 文档中的开发模式检查](https://reselect.js.org/api/development-only-stability-checks)。

请注意,虽然 RTK 重新导出 `createSelector`,但它有意不重新导出全局配置此检查的函数 - 如果你希望这样做,你应该直接依赖 `reselect` 并自行导入。

<div class="typescript-only">

#### 移除 `ParametricSelector` 类型

已移除 `ParametricSelector` 和 `OutputParametricSelector` 类型。请改用 `Selector` 和 `OutputSelector`。

</div>

### React-Redux

#### 需要 React 18

React-Redux v7 和 v8 适用于所有支持钩子的 React 版本(16.8+、17 和 18)。v8 从内部订阅管理切换到 React 的新 `useSyncExternalStore` 钩子,但使用"shim"实现来提供对 React 16.8 和 17 的支持,这些版本没有内置该钩子。

**React-Redux v9 切换为_需要_ React 18,并且不支持 React 16 或 17**。这使我们能够删除 shim 并节省一些包大小。

<div class="typescript-only">

#### 自定义上下文类型

React Redux 支持使用[自定义上下文](https://react-redux.js.org/api/hooks#custom-context)创建 `hooks`(和 `connect`),但对此进行类型化一直相当不标准。v9 之前的类型要求 `Context<ReactReduxContextValue>`,但上下文默认值通常初始化为 `null`(因为钩子使用它来确保它们实际具有提供的上下文)。在"最佳"情况下,这将导致如下所示:

```ts title="Pre-v9 custom context"
import { createContext } from 'react'
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
} from 'react-redux'
import { AppStore, RootState, AppDispatch } from './store'

// highlight-next-line
const context = createContext<ReactReduxContextValue>(null as any)

export const useStore = createStoreHook(context).withTypes<AppStore>()
export const useDispatch = createDispatchHook(context).withTypes<AppDispatch>()
export const useSelector = createSelectorHook(context).withTypes<RootState>()
```

在 v9 中,类型现在与运行时行为匹配。上下文类型化为持有 `ReactReduxContextValue | null`,钩子知道如果它们接收到 `null`,它们会抛出错误,因此不会影响返回类型。

上述示例现在变为:

```ts title="v9+ custom context"
import { createContext } from 'react'
import {
  ReactReduxContextValue,
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
} from 'react-redux'
import { AppStore, RootState, AppDispatch } from './store'

// highlight-next-line
const context = createContext<ReactReduxContextValue | null>(null)

export const useStore = createStoreHook(context).withTypes<AppStore>()
export const useDispatch = createDispatchHook(context).withTypes<AppDispatch>()
export const useSelector = createSelectorHook(context).withTypes<RootState>()
```

</div>

### Redux Thunk

#### Thunk 使用命名导出

`redux-thunk` 包以前使用一个单一的默认导出作为中间件,附带一个名为 `withExtraArgument` 的字段,允许自定义。

默认导出已被移除。现在有两个命名导出:`thunk`(基本中间件)和 `withExtraArgument`。

如果你使用 Redux Toolkit,这应该没有影响,因为 RTK 已经在 `configureStore` 内部处理了这个问题。

## 新功能

这些功能是 Redux Toolkit 2.0 中的新功能,有助于涵盖我们在生态系统中看到的其他用例。

### `combineSlices` API 和切片 reducer 注入以进行代码拆分

Redux core 一直包含 `combineReducers`,它接受一个充满"切片 reducer"函数的对象并生成一个调用这些切片 reducer 的 reducer。RTK 的 `createSlice` 生成切片 reducer 和相关的 action 创建器,我们教导了导出单个 action 创建器作为命名导出和切片 reducer 作为默认导出的模式。同时,我们从未正式支持惰性加载 reducer,尽管我们在文档中有一些"reducer 注入"模式的示例代码](https://redux.js.org/usage/code-splitting)。

此版本包含一个新的 [`combineSlices`](../api/combineSlices) API,旨在启用运行时惰性加载 reducer。它接受单个切片或充满切片的对象作为参数,并使用 `sliceObject.name` 字段作为每个状态字段的键自动调用 `combineReducers`。生成的 reducer 函数附带一个额外的 `.inject()` 方法,可用于在运行时动态注入其他切片。它还包括一个 `.withLazyLoadedSlices()` 方法,可用于为稍后添加的 reducer 生成 TS 类型。请参阅 [#2776](https://github.com/reduxjs/redux-toolkit/issues/2776) 了解围绕此想法的原始讨论。

目前,我们没有将其内置到 `configureStore` 中,因此你需要自己调用 `const rootReducer = combineSlices(.....)` 并将其传递给 `configureStore({reducer: rootReducer})`。

**基本用法:将切片和独立 reducer 混合传递给 `combineSlices`**

```ts
const stringSlice = createSlice({
  name: 'string',
  initialState: '',
  reducers: {},
})

const numberSlice = createSlice({
  name: 'number',
  initialState: 0,
  reducers: {},
})

const booleanReducer = createReducer(false, () => {})

const api = createApi(/*  */)

const combinedReducer = combineSlices(
  stringSlice,
  {
    num: numberSlice.reducer,
    boolean: booleanReducer,
  },
  api,
)
expect(combinedReducer(undefined, dummyAction())).toEqual({
  string: stringSlice.getInitialState(),
  num: numberSlice.getInitialState(),
  boolean: booleanReducer.getInitialState(),
  api: api.reducer.getInitialState(),
})
```

**基本切片 reducer 注入**

```ts
// 创建一个具有 TS 类型的 reducer,知道 `numberSlice` 将被注入
const combinedReducer =
  combineSlices(stringSlice).withLazyLoadedSlices<
    WithSlice<typeof numberSlice>
  >()

// `state.number` 最初不存在
expect(combinedReducer(undefined, dummyAction()).number).toBe(undefined)

// 创建一个注入了 `numberSlice` 的 reducer 版本(主要用于类型)
const injectedReducer = combinedReducer.inject(numberSlice)

// `state.number` 现在存在,并且 injectedReducer 的类型不再将其标记为可选
expect(injectedReducer(undefined, dummyAction()).number).toBe(
  numberSlice.getInitialState(),
)

// 原始 reducer 也已更改(类型仍为可选)
expect(combinedReducer(undefined, dummyAction()).number).toBe(
  numberSlice.getInitialState(),
)
```

### `createSlice` 中的 `selectors` 字段

现有的 `createSlice` API 现在支持直接在切片中定义 [`selectors`](../api/createSlice#selectors)。默认情况下,这些将假定切片使用 `slice.name` 作为字段挂载在根状态中,例如 `name: "todos"` -> `rootState.todos`。此外,现在有一个 `slice.selectSlice` 方法,用于执行默认的根状态查找。

你可以调用 `sliceObject.getSelectors(selectSliceState)` 以生成具有备用位置的选择器,类似于 `entityAdapter.getSelectors()` 的工作方式。

```ts
const slice = createSlice({
  name: 'counter',
  initialState: 42,
  reducers: {},
  selectors: {
    selectSlice: (state) => state,
    selectMultiple: (state, multiplier: number) => state * multiplier,
  },
})

// 基本用法
const testState = {
  [slice.name]: slice.getInitialState(),
}
const { selectSlice, selectMultiple } = slice.selectors
expect(selectSlice(testState)).toBe(slice.getInitialState())
expect(selectMultiple(testState, 2)).toBe(slice.getInitialState() * 2)

// 在不同键下挂载切片 reducer 的用法
const customState = {
  number: slice.getInitialState(),
}
const { selectSlice, selectMultiple } = slice.getSelectors(
  (state: typeof customState) => state.number,
)
expect(selectSlice(customState)).toBe(slice.getInitialState())
expect(selectMultiple(customState, 2)).toBe(slice.getInitialState() * 2)
```

### `createSlice.reducers` 回调语法和 thunk 支持

我们收到的最早的功能请求之一是能够直接在 `createSlice` 中声明 thunks。直到现在,你一直需要单独声明它们,为 thunk 提供一个字符串 action 前缀,并通过 `createSlice.extraReducers` 处理这些 actions:

```ts
// 单独声明 thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  },
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // 标准 reducer 逻辑,每个 reducer 自动生成 action 类型
  },
  extraReducers: (builder) => {
    // 在此处为其他 action 类型添加 reducers,并根据需要处理加载状态
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload)
    })
  },
})
```

许多用户告诉我们,这种分离感觉很尴尬。

我们_希望_在 `createSlice` 中包含一种直接声明 thunks 的方法,并尝试了各种原型。始终存在两个主要阻碍问题和一个次要问题:

1. 不清楚在内部声明 thunk 的语法应该是什么样子。
2. thunks 可以访问 `getState` 和 `dispatch`,但 `RootState` 和 `AppDispatch` 类型通常从 store 推断,而 store 又从切片状态类型推断。在 `createSlice` 中声明 thunks 会导致循环类型推断错误,因为 store 需要切片类型,但切片需要 store 类型。我们不愿意发布一个对我们的 JS 用户来说可以正常工作但对我们的 TS 用户来说不行的 API,特别是因为我们_希望_人们使用 TS 和 RTK。
3. 你不能在 ES 模块中进行同步条件导入,并且没有好的方法使 `createAsyncThunk` 导入可选。要么 `createSlice` 始终依赖它(并将其添加到包大小中),要么它根本不能使用 `createAsyncThunk`。

我们达成了这些妥协:

- **为了在 `createSlice` 中创建异步 thunks,你需要专门[设置一个自定义版本的 `createSlice`,以便访问 `createAsyncThunk`](../api/createSlice#createasyncthunk)**。
- 你可以通过在 `reducers` 字段中使用类似于 RTK Query 的 `createApi` 中的"构建器回调"语法(使用类型化函数在对象中创建字段)在 `createSlice.reducers` 中声明 thunks。这样做看起来与现有的 `reducers` 字段的"对象"语法有所不同,但仍然相当相似。
- 你可以自定义 `createSlice` 中 thunks 的_某些_类型,但不能自定义 `state` 或 `dispatch` 类型。如果需要这些,你可以手动进行 `as` 转换,如 `getState() as RootState`。

实际上,我们希望这些是合理的权衡。在 `createSlice` 中创建 thunks 已被广泛要求,因此我们认为这是一个会被使用的 API。如果 TS 自定义选项是一个限制,你仍然可以像往常一样在 `createSlice` 外部声明 thunks,并且大多数异步 thunks 不需要 `dispatch` 或 `getState` - 它们只是获取数据并返回。最后,设置一个自定义 `createSlice` 允许你选择将 `createAsyncThunk` 包含在你的包大小中(尽管如果直接使用或作为 RTK Query 的一部分可能已经包含 - 在这两种情况下没有_额外_的包大小)。

以下是新回调语法的样子:

```ts
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const todosSlice = createAppSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: [],
    error: null,
  } as TodoState,
  reducers: (create) => ({
    // 一个普通的"case reducer",与往常一样
    deleteTodo: create.reducer((state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1)
    }),
    // 一个带有"prepare 回调"的 case reducer,用于自定义 action
    addTodo: create.preparedReducer(
      (text: string) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
      // action 类型从 prepare 回调推断
      (state, action) => {
        state.todos.push(action.payload)
      },
    ),
    // 一个异步 thunk
    fetchTodo: create.asyncThunk(
      // 异步 payload 函数作为第一个参数
      async (id: string, thunkApi) => {
        const res = await fetch(`myApi/todos?id=${id}`)
        return (await res.json()) as Item
      },
      // 包含 `{pending?, rejected?, fulfilled?, settled?, options?}` 的对象作为第二个参数
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error
        },
        fulfilled: (state, action) => {
          state.todos.push(action.payload)
        },
        // settled 在 rejected 和 fulfilled action 中都被调用
        settled: (state, action) => {
          state.loading = false
        },
      },
    ),
  }),
})

// `addTodo` 和 `deleteTodo` 是普通的 action 创建器。
// `fetchTodo` 是异步 thunk
export const { addTodo, deleteTodo, fetchTodo } = todosSlice.actions
```

#### Codemod

**使用新回调语法是完全可选的(对象语法仍然是标准的)**,但现有的切片需要转换才能利用此语法提供的新功能。为了简化这一过程,提供了一个 [codemod](../api/codemods)。

```sh
npx @reduxjs/rtk-codemods createSliceReducerBuilder ./src/features/todos/slice.ts
```

### "动态中间件" 中间件

Redux store 的中间件管道在 store 创建时是固定的,不能在以后更改。我们_确实_看到了一些生态系统库试图允许动态添加和删除中间件,这可能对代码拆分等场景有用。

这是一个相对小众的用例,但我们构建了[我们自己的"动态中间件"中间件版本](../api/createDynamicMiddleware)。在设置 store 时将其添加到 Redux store,它允许你在运行时添加中间件。它还带有一个[React 钩子集成,会自动将中间件添加到 store 并返回更新的 dispatch 方法](../api/createDynamicMiddleware#react-integration)。

```ts
import { createDynamicMiddleware, configureStore } from '@reduxjs/toolkit'

const dynamicMiddleware = createDynamicMiddleware()

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(dynamicMiddleware.middleware),
})

// 稍后
dynamicMiddleware.addMiddleware(someOtherMiddleware)
```

### `configureStore` 默认添加 `autoBatchEnhancer`

[在 v1.9.0 中,我们添加了一个新的 `autoBatchEnhancer`](https://github.com/reduxjs/redux-toolkit/releases/tag/v1.9.0),它在连续调度多个"低优先级" action 时会稍微延迟通知订阅者。这提高了性能,因为 UI 更新通常是更新过程中最昂贵的部分。RTK Query 默认将其大多数内部 action 标记为"低优先级",但你必须将 `autoBatchEnhancer` 添加到 store 才能受益。

我们更新了 `configureStore` 以默认将 `autoBatchEnhancer` 添加到 store 设置中,以便用户无需手动调整 store 配置即可受益于性能提升。

### `entityAdapter.getSelectors` 接受 `createSelector` 函数

[`entityAdapter.getSelectors()`](../api/createEntityAdapter#selector-functions) 现在接受一个选项对象作为其第二个参数。这允许你传入自己喜欢的 `createSelector` 方法,该方法将用于记忆化生成的选择器。如果你想使用 Reselect 的新替代记忆化器之一,或具有等效签名的其他记忆化库,这可能会很有用。

### Immer 10.0

[Immer 10.0](https://github.com/immerjs/immer/releases/tag/v10.0.0) 现在是最终版本,并且有几个重大改进和更新:

- 更快的更新性能
- 更小的包大小
- 更好的 ESM/CJS 包格式
- 没有默认导出
- 没有 ES5 回退

我们已更新 RTK 以依赖最终的 Immer 10.0 版本。

### Next.js 设置指南

我们现在有一个文档页面,介绍[如何正确设置 Redux 和 Next.js](https://redux.js.org/usage/nextjs)。我们看到很多关于使用 Redux、Next 和 App Router 的问题,这个指南应该能提供一些建议。

(目前,Next.js `with-redux` 示例仍显示过时的模式 - 我们将很快提交一个 PR 以更新该示例以匹配我们的文档指南。)

## 覆盖依赖项

包更新其对 Redux core 5.0 的 peer 依赖项需要一段时间,在此期间,诸如[中间件类型](#middleware-类型变更---中间件的-action-和-next-被类型化为-unknown)之类的更改将导致感知的不兼容性。

大多数库可能实际上没有任何与 5.0 不兼容的实践,但由于对 4.0 的 peer 依赖项,它们最终会引入旧的类型声明。

这可以通过手动覆盖依赖项解析来解决,这在 `npm` 和 `yarn` 中都受支持。

### `npm` - `overrides`

NPM 通过 `package.json` 中的 [`overrides`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides) 字段支持这一点。你可以覆盖特定包的依赖项,或确保每个引入 Redux 的包都接收相同的版本。

```json title="Individual override - redux-persist"
{
  "overrides": {
    "redux-persist": {
      "redux": "^5.0.0"
    }
  }
}
```

```json title="Blanket override"
{
  "overrides": {
    "redux": "^5.0.0"
  }
}
```

### `yarn` - `resolutions`

Yarn 通过 `package.json` 中的 [`resolutions`](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/) 字段支持这一点。就像 NPM 一样,你可以覆盖特定包的依赖项,或确保每个引入 Redux 的包都接收相同的版本。

```json title="Individual override - redux-persist"
{
  "resolutions": {
    "redux-persist/redux": "^5.0.0"
  }
}
```

```json title="Blanket override"
{
  "resolutions": {
    "redux": "^5.0.0"
  }
}
```

## 建议

基于 2.0 及之前版本的更改,有一些思维方式的转变是值得了解的,尽管非必需。

### `actionCreator.toString()` 的替代方案

作为 RTK 的原始 API 的一部分,使用 `createAction` 创建的 action 创建器具有一个自定义的 `toString()` 重写,返回 action 类型。

这主要用于(现在已移除的) `createReducer` 的对象语法:

```ts
const todoAdded = createAction<Todo>('todos/todoAdded')

createReducer(initialState, {
  [todoAdded]: (state, action) => {}, // 在此调用 toString, 'todos/todoAdded'
})
```

虽然这很方便(并且 Redux 生态系统中的其他库如 `redux-saga` 和 `redux-observable` 在各种程度上支持这一点),但它与 TypeScript 不太兼容,并且通常有点太"魔法"。

```ts
const test = todoAdded.toString()
//    ^? 类型为 string,而不是特定的 action 类型
```

随着时间的推移,action 创建器还获得了一个静态 `type` 属性和 `match` 方法,它们更明确并且在 TypeScript 中效果更好。

```ts
const test = todoAdded.type
//    ^? 'todos/todoAdded'

// 充当类型谓词
if (todoAdded.match(unknownAction)) {
  unknownAction.payload
  // ^? 现在类型化为 PayloadAction<Todo>
}
```

为了兼容,此重写仍然存在,但我们鼓励考虑使用静态属性之一以获得更易理解的代码。

例如,使用 `redux-observable`:

```ts
// 之前(在运行时有效,但不会正确过滤类型)
const epic = (action$: Observable<Action>) =>
  action$.pipe(
    ofType(todoAdded),
    map((action) => action),
    //   ^? 仍然是 Action<any>
  )

// 考虑(更好的类型过滤)
const epic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(todoAdded.match),
    map((action) => action),
    //   ^? 现在是 PayloadAction<Todo>
  )
```

使用 `redux-saga`:

```ts
// 之前(仍然有效)
yield takeEvery(todoAdded, saga)

// 考虑
yield takeEvery(todoAdded.match, saga)
// 或
yield takeEvery(todoAdded.type, saga)
```

## 未来计划

### 自定义切片 reducer 创建器

随着[createSlice 的回调语法](#callback-syntax-for-createslicereducers)的添加,[建议](https://github.com/reduxjs/redux-toolkit/issues/3837)启用自定义切片 reducer 创建器。这些创建器将能够:

- 通过添加 case 或 matcher reducers 修改 reducer 行为
- 将 actions(或任何其他有用的函数)附加到 `slice.actions`
- 将提供的 case reducers 附加到 `slice.caseReducers`

创建器首先需要在第一次调用 `createSlice` 时返回一个"定义"形状,然后它处理该形状,通过添加任何必要的 reducers 和/或 actions。

此 API 尚未确定,但现有的 `create.asyncThunk` 创建器可以使用潜在的 API 实现如下:

```js
const asyncThunkCreator = {
  type: ReducerType.asyncThunk,
  define(payloadCreator, config) {
    return {
      type: ReducerType.asyncThunk, // 需要匹配 reducer 类型,以便正确处理程序可以被调用
      payloadCreator,
      ...config,
    }
  },
  handle(
    {
      // reducer 定义的键
      reducerName,
      // 自动生成的 action 类型,即 `${slice.name}/${reducerName}`
      type,
    },
    // 来自 define() 的定义
    definition,
    // 修改切片的方法
    context,
  ) {
    const { payloadCreator, options, pending, fulfilled, rejected, settled } =
      definition
    const asyncThunk = createAsyncThunk(type, payloadCreator, options)

    if (pending) context.addCase(asyncThunk.pending, pending)
    if (fulfilled) context.addCase(asyncThunk.fulfilled, fulfilled)
    if (rejected) context.addCase(asyncThunk.rejected, rejected)
    if (settled) context.addMatcher(asyncThunk.settled, settled)

    context.exposeAction(reducerName, asyncThunk)
    context.exposeCaseReducer(reducerName, {
      pending: pending || noop,
      fulfilled: fulfilled || noop,
      rejected: rejected || noop,
      settled: settled || noop,
    })
  },
}

const createSlice = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator,
  },
})
```

我们不确定有多少人/库会实际使用这个功能,因此欢迎在 [Github issue](https://github.com/reduxjs/redux-toolkit/issues/3837) 上提供反馈!

### `createSlice.selector` 选择器工厂

内部提出了一些关于 `createSlice.selectors` 是否充分支持记忆化选择器的担忧。你可以将记忆化选择器提供给 `createSlice.selectors` 配置,但你只能使用那个实例。

```ts
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {},
  selectors: {
    selectTodosByAuthor = createSelector(
      (state: TodoState) => state.todos,
      (state: TodoState, author: string) => author,
      (todos, author) => todos.filter((todo) => todo.author === author),
    ),
  },
})

export const { selectTodosByAuthor } = todoSlice.selectors
```

使用 `createSelector` 的默认缓存大小为 1,这可能会在多个组件中使用不同参数调用时导致缓存问题。解决此问题的一个典型方法(不使用 `createSlice`)是[选择器工厂](https://redux.js.org/usage/deriving-data-selectors#creating-unique-selector-instances):

```ts
export const makeSelectTodosByAuthor = () =>
  createSelector(
    (state: RootState) => state.todos.todos,
    (state: RootState, author: string) => author,
    (todos, author) => todos.filter((todo) => todo.author === author),
  )

function AuthorTodos({ author }: { author: string }) {
  const selectTodosByAuthor = useMemo(makeSelectTodosByAuthor, [])
  const todos = useSelector((state) => selectTodosByAuthor(state, author))
}
```

当然,使用 `createSlice.selectors` 时,这不再可能,因为你需要在创建切片时拥有选择器实例。

在 2.0.0 中,我们对此没有确定的解决方案 - 已经提出了一些 API([PR 1](https://github.com/reduxjs/redux-toolkit/pull/3671),[PR 2](https://github.com/reduxjs/redux-toolkit/pull/3836)),但没有决定。如果这是你希望看到支持的功能,请考虑在 [Github 讨论](https://github.com/reduxjs/redux-toolkit/discussions/3387)中提供反馈!

### 3.0 - RTK Query

RTK 2.0 主要关注核心和工具包的更改。现在 2.0 已发布,我们希望将重点转移到 RTK Query,因为仍有一些需要解决的棘手问题 - 其中一些可能需要破坏性更改,需要 3.0 版本。

如果你对这可能是什么样子有任何反馈,请考虑在 [RTK Query API 痛点和棘手问题反馈线程](https://github.com/reduxjs/redux-toolkit/issues/3692)中发表意见!

</div>
