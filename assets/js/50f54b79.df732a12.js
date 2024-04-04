"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[1997],{6460:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var d=r(4848),o=r(8453);const c={id:"configureStore",title:"configureStore",sidebar_label:"configureStore",hide_title:!0},i="configureStore",t={id:"api/configureStore",title:"configureStore",description:"&nbsp;",source:"@site/docs/api/configureStore.mdx",sourceDirName:"api",slug:"/api/configureStore",permalink:"/redux-toolkit-zh/api/configureStore",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/configureStore.mdx",tags:[],version:"current",frontMatter:{id:"configureStore",title:"configureStore",sidebar_label:"configureStore",hide_title:!0},sidebar:"docs",previous:{title:"\u5728 Next.js \u4e2d\u7684\u8bbe\u7f6e",permalink:"/redux-toolkit-zh/usage/nextjs"},next:{title:"getDefaultMiddleware",permalink:"/redux-toolkit-zh/api/getDefaultMiddleware"}},s={},l=[{value:"\u76ee\u7684\u548c\u884c\u4e3a",id:"\u76ee\u7684\u548c\u884c\u4e3a",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"<code>reducer</code>",id:"reducer",level:3},{value:"<code>middleware</code>",id:"middleware",level:3},{value:"<code>devTools</code>",id:"devtools",level:3},{value:"<code>trace</code>",id:"trace",level:4},{value:"<code>preloadedState</code>",id:"preloadedstate",level:3},{value:"<code>enhancers</code>",id:"enhancers",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:3},{value:"\u5b8c\u6574\u793a\u4f8b",id:"\u5b8c\u6574\u793a\u4f8b",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"\xa0"}),"\n",(0,d.jsx)(n.h1,{id:"configurestore",children:(0,d.jsx)(n.code,{children:"configureStore"})}),"\n",(0,d.jsxs)(n.p,{children:["\u521b\u5efa Redux \u5b58\u50a8\u7684\u6807\u51c6\u65b9\u6cd5\u3002\u5b83\u5185\u90e8\u4f7f\u7528\u4f4e\u7ea7 Redux \u6838\u5fc3 ",(0,d.jsx)(n.code,{children:"createStore"})," \u65b9\u6cd5\uff0c\u4f46\u5305\u88c5\u4e86\u8be5\u65b9\u6cd5\uff0c\u4e3a\u5b58\u50a8\u8bbe\u7f6e\u63d0\u4f9b\u826f\u597d\u7684\u9ed8\u8ba4\u503c\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u76ee\u7684\u548c\u884c\u4e3a",children:"\u76ee\u7684\u548c\u884c\u4e3a"}),"\n",(0,d.jsx)(n.p,{children:"\u6807\u51c6\u7684 Redux \u5b58\u50a8\u8bbe\u7f6e\u901a\u5e38\u9700\u8981\u591a\u4e2a\u914d\u7f6e\u90e8\u5206\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5c06\u5207\u7247 reducer \u5408\u5e76\u5230\u6839 reducer"}),"\n",(0,d.jsx)(n.li,{children:"\u521b\u5efa\u4e2d\u95f4\u4ef6\u589e\u5f3a\u5668\uff0c\u901a\u5e38\u4f7f\u7528 thunk \u4e2d\u95f4\u4ef6\u6216\u5176\u4ed6\u526f\u4f5c\u7528\u4e2d\u95f4\u4ef6\uff0c\u4ee5\u53ca\u53ef\u80fd\u7528\u4e8e\u5f00\u53d1\u68c0\u67e5\u7684\u4e2d\u95f4\u4ef6"}),"\n",(0,d.jsx)(n.li,{children:"\u6dfb\u52a0 Redux DevTools \u589e\u5f3a\u5668\uff0c\u5e76\u5c06\u589e\u5f3a\u5668\u7ec4\u5408\u5728\u4e00\u8d77"}),"\n",(0,d.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"createStore"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f20\u7edf\u7684 Redux \u4f7f\u7528\u6a21\u5f0f\u901a\u5e38\u9700\u8981\u590d\u5236\u7c98\u8d34\u51e0\u5341\u884c\u6837\u677f\u4ee3\u7801\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["Redux Toolkit \u7684 ",(0,d.jsx)(n.code,{children:"configureStore"})," \u7b80\u5316\u4e86\u8be5\u8bbe\u7f6e\u8fc7\u7a0b\uff0c\u4e3a\u60a8\u5b8c\u6210\u6240\u6709\u8fd9\u4e9b\u5de5\u4f5c\u3002\u4e00\u6b21\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"configureStore"})," \u5c06\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"combineReducers"})," \u5c06\u60a8\u7684\u5207\u7247 reducer \u5408\u5e76\u5230\u6839 reducer \u51fd\u6570"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6dfb\u52a0 thunk \u4e2d\u95f4\u4ef6\u5e76\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"applyMiddleware"})]}),"\n",(0,d.jsx)(n.li,{children:"\u5728\u5f00\u53d1\u4e2d\uff0c\u81ea\u52a8\u6dfb\u52a0\u66f4\u591a\u4e2d\u95f4\u4ef6\u4ee5\u68c0\u67e5\u5e38\u89c1\u9519\u8bef\uff0c\u5982\u610f\u5916\u5730\u6539\u53d8\u72b6\u6001"}),"\n",(0,d.jsx)(n.li,{children:"\u81ea\u52a8\u8bbe\u7f6e Redux DevTools Extension \u8fde\u63a5"}),"\n",(0,d.jsxs)(n.li,{children:["\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"createStore"})," \u4f7f\u7528\u8be5\u6839 reducer \u548c\u8fd9\u4e9b\u914d\u7f6e\u9009\u9879\u521b\u5efa Redux \u5b58\u50a8"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0e\u539f\u59cb\u7684 ",(0,d.jsx)(n.code,{children:"createStore"})," \u76f8\u6bd4\uff0c",(0,d.jsx)(n.code,{children:"configureStore"})," \u8fd8\u63d0\u4f9b\u4e86\u6539\u8fdb\u7684 API \u548c\u4f7f\u7528\u6a21\u5f0f\uff0c\u63a5\u53d7 ",(0,d.jsx)(n.code,{children:"reducer"}),"\uff0c",(0,d.jsx)(n.code,{children:"preloadedState"}),"\uff0c",(0,d.jsx)(n.code,{children:"middleware"}),"\uff0c",(0,d.jsx)(n.code,{children:"enhancers"})," \u548c ",(0,d.jsx)(n.code,{children:"devtools"})," \u7684\u547d\u540d\u5b57\u6bb5\uff0c\u4ee5\u53ca\u66f4\u597d\u7684 TS \u7c7b\u578b\u63a8\u65ad\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"configureStore"})," \u63a5\u53d7\u4e00\u4e2a\u5355\u4e00\u7684\u914d\u7f6e\u5bf9\u8c61\u53c2\u6570\uff0c\u5177\u6709\u4ee5\u4e0b\u9009\u9879\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"\ninterface ConfigureStoreOptions<\n  S = any,\n  A extends Action = UnknownAction,\n  M extends Tuple<Middlewares<S>> = Tuple<Middlewares<S>>\n  E extends Tuple<Enhancers> = Tuple<Enhancers>,\n  P = S\n> {\n  /**\n   * \u5c06\u7528\u4f5c\u6839 reducer \u7684\u5355\u4e2a reducer \u51fd\u6570\uff0c\u6216\u8005\n   * \u5c06\u4f20\u9012\u7ed9 `combineReducers()` \u7684\u5207\u7247 reducer \u5bf9\u8c61\u3002\n   */\n  reducer: Reducer<S, A, P> | ReducersMapObject<S, A, P>\n\n  /**\n   * \u8981\u5b89\u88c5\u7684 Redux \u4e2d\u95f4\u4ef6\u6570\u7ec4\u3002\u5982\u679c\u672a\u63d0\u4f9b\uff0c\u5219\u9ed8\u8ba4\u4e3a\n   * `getDefaultMiddleware()` \u8fd4\u56de\u7684\u4e2d\u95f4\u4ef6\u96c6\u3002\n   */\n  middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M\n\n  /**\n   * \u662f\u5426\u542f\u7528 Redux DevTools \u96c6\u6210\u3002\u9ed8\u8ba4\u4e3a `true`\u3002\n   *\n   * \u53ef\u4ee5\u901a\u8fc7\u4f20\u9012 Redux DevTools \u9009\u9879\u8fdb\u884c\u989d\u5916\u914d\u7f6e\n   */\n  devTools?: boolean | DevToolsOptions\n\n  /**\n   * \u521d\u59cb\u72b6\u6001\uff0c\u4e0e Redux \u7684 createStore \u76f8\u540c\u3002\n   * \u60a8\u53ef\u4ee5\u9009\u62e9\u6307\u5b9a\u5b83\u4ee5\u4ece\u670d\u52a1\u5668\u4e2d\u7684\u901a\u7528\u5e94\u7528\u7a0b\u5e8f\u4e2d\u63d0\u53d6\u72b6\u6001\uff0c\n   * \u6216\u6062\u590d\u4ee5\u524d\u5e8f\u5217\u5316\u7684\u7528\u6237\u4f1a\u8bdd\u3002\u5982\u679c\u60a8\u4f7f\u7528 `combineReducers()` \u751f\u6210\u6839 reducer\n   * \u51fd\u6570\uff08\u76f4\u63a5\u6216\u95f4\u63a5\u901a\u8fc7\u5c06\u5bf9\u8c61\u4f5c\u4e3a `reducer` \u4f20\u9012\uff09\uff0c\n   * \u8fd9\u5fc5\u987b\u662f\u4e00\u4e2a\u4e0e reducer \u6620\u5c04\u952e\u5f62\u72b6\u76f8\u540c\u7684\u5bf9\u8c61\u3002\n   */\n  preloadedState?: P\n\n  /**\n   * \u8981\u5e94\u7528\u7684\u5b58\u50a8\u589e\u5f3a\u5668\u3002\u53c2\u89c1 Redux \u7684 `createStore()`\u3002\n   * \u6240\u6709\u589e\u5f3a\u5668\u90fd\u5c06\u5728 DevTools Extension \u589e\u5f3a\u5668\u4e4b\u524d\u5305\u542b\u3002\n   * \u5982\u679c\u60a8\u9700\u8981\u81ea\u5b9a\u4e49\u589e\u5f3a\u5668\u7684\u987a\u5e8f\uff0c\u63d0\u4f9b\u4e00\u4e2a\u56de\u8c03\n   * \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u63a5\u6536 getDefaultEnhancers\uff0c\n   * \u5e76\u5e94\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4\uff08\u4f8b\u5982 `getDefaultEnhancers().concat(offline)`\uff09\u3002\n   * \u5982\u679c\u60a8\u53ea\u9700\u8981\u6dfb\u52a0\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 `middleware` \u53c2\u6570\u4ee3\u66ff\u3002\n   */\n  enhancers?: (getDefaultEnhancers: GetDefaultEnhancers<M>) => E | E\n}\n\nfunction configureStore<\n  S = any,\n  A extends Action = UnknownAction,\n  M extends Tuple<Middlewares<S>> = Tuple<Middlewares<S>>\n  E extends Tuple<Enhancers> = Tuple<Enhancers>,\n  P = S\n>(options: ConfigureStoreOptions<S, A, M, E, P>): EnhancedStore<S, A, M, E>\n"})}),"\n",(0,d.jsx)(n.h3,{id:"reducer",children:(0,d.jsx)(n.code,{children:"reducer"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u8fd9\u662f\u4e00\u4e2a\u5355\u4e00\u7684\u51fd\u6570\uff0c\u5b83\u5c06\u76f4\u63a5\u7528\u4f5c\u5b58\u50a8\u7684\u6839 reducer\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u5207\u7247 reducer \u7684\u5bf9\u8c61\uff0c\u5982 ",(0,d.jsx)(n.code,{children:"{users : usersReducer, posts : postsReducer}"}),"\uff0c\n",(0,d.jsx)(n.code,{children:"configureStore"})," \u5c06\u81ea\u52a8\u901a\u8fc7\u5c06\u6b64\u5bf9\u8c61\u4f20\u9012\u7ed9\n",(0,d.jsxs)(n.a,{href:"https://redux.js.org/api/combinereducers",children:["Redux ",(0,d.jsx)(n.code,{children:"combineReducers"})," \u5b9e\u7528\u7a0b\u5e8f"]})," \u521b\u5efa\u6839 reducer\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"middleware",children:(0,d.jsx)(n.code,{children:"middleware"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e00\u4e2a\u5c06\u63a5\u6536 ",(0,d.jsx)(n.code,{children:"getDefaultMiddleware"})," \u4f5c\u4e3a\u5176\u53c2\u6570\u7684\u56de\u8c03\uff0c\n\u5e76\u5e94\u8fd4\u56de\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u6570\u7ec4\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u63d0\u4f9b\u4e86\u6b64\u9009\u9879\uff0c\u5b83\u5e94\u8fd4\u56de\u60a8\n\u5e0c\u671b\u6dfb\u52a0\u5230\u5b58\u50a8\u7684\u6240\u6709\u4e2d\u95f4\u4ef6\u51fd\u6570\u3002",(0,d.jsx)(n.code,{children:"configureStore"})," \u5c06\u81ea\u52a8\u5c06\u8fd9\u4e9b\u4f20\u9012\u7ed9 ",(0,d.jsx)(n.code,{children:"applyMiddleware"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u672a\u63d0\u4f9b\uff0c",(0,d.jsx)(n.code,{children:"configureStore"})," \u5c06\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"getDefaultMiddleware"})," \u5e76\u4f7f\u7528\n\u5b83\u8fd4\u56de\u7684\u4e2d\u95f4\u4ef6\u51fd\u6570\u6570\u7ec4\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6709\u5173 ",(0,d.jsx)(n.code,{children:"middleware"})," \u53c2\u6570\u7684\u5de5\u4f5c\u65b9\u5f0f\u4ee5\u53ca\u9ed8\u8ba4\u6dfb\u52a0\u7684\u4e2d\u95f4\u4ef6\u5217\u8868\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\n",(0,d.jsxs)(n.a,{href:"/redux-toolkit-zh/api/getDefaultMiddleware",children:[(0,d.jsx)(n.code,{children:"getDefaultMiddleware"})," \u6587\u6863\u9875\u9762"]}),"\u3002"]}),"\n",(0,d.jsxs)(n.admonition,{title:"Tuple",type:"note",children:[(0,d.jsxs)(n.p,{children:["Typescript \u7528\u6237\u9700\u8981\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"Tuple"})," \u5b9e\u4f8b\uff08\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"getDefaultMiddleware"})," \u7ed3\u679c\uff0c\u5b83\u5df2\u7ecf\u662f\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Tuple"}),"\uff09\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u63a8\u65ad\u3002"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"import { configureStore, Tuple } from '@reduxjs/toolkit'\n\nconfigureStore({\n  reducer: rootReducer,\n  middleware: () => new Tuple(additionalMiddleware, logger),\n})\n"})}),(0,d.jsx)(n.p,{children:"\u4ec5 Javascript \u7528\u6237\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u4f7f\u7528\u666e\u901a\u6570\u7ec4\u3002"})]}),"\n",(0,d.jsx)(n.h3,{id:"devtools",children:(0,d.jsx)(n.code,{children:"devTools"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u8fd9\u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u5b83\u5c06\u7528\u4e8e\u6307\u793a ",(0,d.jsx)(n.code,{children:"configureStore"})," \u662f\u5426\u5e94\u81ea\u52a8\u542f\u7528\u5bf9 ",(0,d.jsx)(n.a,{href:"https://github.com/reduxjs/redux-devtools",children:"Redux DevTools \u6d4f\u89c8\u5668\u6269\u5c55"})," \u7684\u652f\u6301\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u5c06\u542f\u7528 DevTools \u6269\u5c55\uff0c\u5e76\u5c06\u9009\u9879\u5bf9\u8c61\u4f20\u9012\u7ed9 ",(0,d.jsx)(n.code,{children:"composeWithDevtools()"}),"\u3002\u8bf7\u53c2\u9605\nDevTools \u6269\u5c55\u6587\u6863\u4e2d\u7684 ",(0,d.jsx)(n.a,{href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md",children:(0,d.jsx)(n.code,{children:"EnhancerOptions"})})," \u4ee5\u83b7\u53d6\n\u53ef\u7528\u7684\u7279\u5b9a\u9009\u9879\u5217\u8868\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"trace",children:(0,d.jsx)(n.code,{children:"trace"})}),"\n",(0,d.jsxs)(n.p,{children:["Redux DevTools \u6269\u5c55\u6700\u8fd1\u6dfb\u52a0\u4e86",(0,d.jsx)(n.a,{href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/Features/Trace.md",children:"\u652f\u6301\u663e\u793a\u64cd\u4f5c\u5806\u6808\u8ddf\u8e2a"}),"\u7684\u529f\u80fd\uff0c\u8fd9\u53ef\u4ee5\u663e\u793a\u6bcf\u4e2a\u64cd\u4f5c\u88ab\u5206\u6d3e\u7684\u786e\u5207\u4f4d\u7f6e\u3002\n\u6355\u83b7\u8fd9\u4e9b\u8ddf\u8e2a\u53ef\u80fd\u4f1a\u589e\u52a0\u4e00\u4e9b\u5f00\u9500\uff0c\u56e0\u6b64 DevTools \u6269\u5c55\u5141\u8bb8\u7528\u6237\u901a\u8fc7",(0,d.jsx)(n.a,{href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md#trace",children:"\u8bbe\u7f6e 'trace' \u53c2\u6570"}),"\u6765\u914d\u7f6e\u662f\u5426\u6355\u83b7\u64cd\u4f5c\u5806\u6808\u8ddf\u8e2a\u3002\n\u5982\u679c\u901a\u8fc7\u4f20\u9012 ",(0,d.jsx)(n.code,{children:"true"})," \u6216\u4e00\u4e2a\u5bf9\u8c61\u542f\u7528\u4e86 DevTools\uff0c\u90a3\u4e48 ",(0,d.jsx)(n.code,{children:"configureStore"})," \u5c06\u9ed8\u8ba4\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u542f\u7528\u6355\u83b7\u64cd\u4f5c\u5806\u6808\u8ddf\u8e2a\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"preloadedstate",children:(0,d.jsx)(n.code,{children:"preloadedState"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e00\u4e2a\u53ef\u9009\u7684\u521d\u59cb\u72b6\u6001\u503c\uff0c\u53ef\u4ee5\u4f20\u9012\u7ed9 Redux \u7684 ",(0,d.jsx)(n.code,{children:"createStore"})," \u51fd\u6570\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"enhancers",children:(0,d.jsx)(n.code,{children:"enhancers"})}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u589e\u5f3a\u5668\u6570\u7ec4\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u6b64\u56de\u8c03\u8fd4\u56de\u7684\u589e\u5f3a\u5668\u5c06\u88ab\u4f20\u9012\u7ed9 ",(0,d.jsxs)(n.a,{href:"https://redux.js.org/api/compose",children:["Redux \u7684 ",(0,d.jsx)(n.code,{children:"compose"})," \u51fd\u6570"]}),"\uff0c\u5e76\u4e14\u7ec4\u5408\u7684\u589e\u5f3a\u5668\u5c06\u88ab\u4f20\u9012\u7ed9 ",(0,d.jsx)(n.code,{children:"createStore"}),"\u3002"]}),"\n",(0,d.jsxs)(n.admonition,{title:"Dev Tools",type:"tip",children:[(0,d.jsxs)(n.p,{children:["\u8fd9\u4e0d\u5e94\u8be5\u5305\u62ec Redux DevTools \u6269\u5c55\u7684 ",(0,d.jsx)(n.code,{children:"composeWithDevTools"}),"\uff0c\u56e0\u4e3a\u8fd9\u5df2\u7ecf\u7531 ",(0,d.jsx)(n.code,{children:"configureStore"})," \u5904\u7406\u4e86\u3002"]}),(0,d.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a",(0,d.jsx)(n.code,{children:"enhancers: () => new Tuple(offline)"})," \u5c06\u5bfc\u81f4\u6700\u7ec8\u7684\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"[offline, devToolsExtension]"}),"\u3002"]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u672a\u63d0\u4f9b\uff0c",(0,d.jsx)(n.code,{children:"configureStore"})," \u5c06\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"getDefaultEnhancers"})," \u5e76\u4f7f\u7528\u5b83\u8fd4\u56de\u7684\u589e\u5f3a\u5668\u6570\u7ec4\uff08\u5305\u62ec\u6307\u5b9a\u7684\u4e2d\u95f4\u4ef6\u7684 ",(0,d.jsx)(n.code,{children:"applyMiddleware"}),"\uff09\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u6dfb\u52a0\u6216\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u7684\u589e\u5f3a\u5668\uff0c\u4f60\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5c06\u63a5\u6536 ",(0,d.jsx)(n.code,{children:"getDefaultEnhancers"})," \u4f5c\u4e3a\u5176\u53c2\u6570\uff0c\u5e76\u5e94\u8fd4\u56de\u4e00\u4e2a\u589e\u5f3a\u5668\u6570\u7ec4\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a",(0,d.jsx)(n.code,{children:"enhancers: (defaultEnhancers) => defaultEnhancers.prepend(offline)"})," \u5c06\u5bfc\u81f4\u6700\u7ec8\u7684\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"[offline, applyMiddleware, devToolsExtension]"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6709\u5173 ",(0,d.jsx)(n.code,{children:"enhancer"})," \u53c2\u6570\u7684\u5de5\u4f5c\u65b9\u5f0f\u4ee5\u53ca\u9ed8\u8ba4\u6dfb\u52a0\u7684\u589e\u5f3a\u5668\u5217\u8868\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsxs)(n.a,{href:"./getDefaultEnhancers",children:[(0,d.jsx)(n.code,{children:"getDefaultEnhancers"})," \u6587\u6863\u9875\u9762"]}),"\u3002"]}),"\n",(0,d.jsxs)(n.admonition,{title:"Middleware",type:"caution",children:[(0,d.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"getDefaultEnhancers"})," \u800c\u662f\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c",(0,d.jsx)(n.code,{children:"applyMiddleware"})," \u589e\u5f3a\u5668\u5c06 ",(0,d.jsx)(n.em,{children:"\u4e0d\u4f1a"})," \u88ab\u4f7f\u7528\u3002"]}),(0,d.jsxs)(n.p,{children:["\u5982\u679c\u63d0\u4f9b\u4e86\u4efb\u4f55\u4e2d\u95f4\u4ef6\uff08\u6216\u4fdd\u7559\u4e3a\u9ed8\u8ba4\u503c\uff09\u4f46\u672a\u5305\u542b\u5728\u6700\u7ec8\u7684\u589e\u5f3a\u5668\u5217\u8868\u4e2d\uff0c",(0,d.jsx)(n.code,{children:"configureStore"})," \u5c06\u5728\u63a7\u5236\u53f0\u4e2d\u53d1\u51fa\u8b66\u544a\u3002"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"// \u8b66\u544a - \u4e2d\u95f4\u4ef6\u88ab\u5b9a\u5236\u4f46\u672a\u5305\u542b\u5728\u6700\u7ec8\u7684\u589e\u5f3a\u5668\u4e2d\nconfigureStore({\n  reducer,\n  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)\n  enhancers: [offline(offlineConfig)],\n})\n\n// \u6b63\u5e38 - \u5305\u542b\u4e86\u9ed8\u8ba4\u7684\u589e\u5f3a\u5668\nconfigureStore({\n  reducer,\n  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(offline(offlineConfig)),\n})\n\n// \u4e5f\u5141\u8bb8\nconfigureStore({\n  reducer,\n  middleware: () => [],\n  enhancers: () => [offline(offlineConfig)],\n})\n"})}),(0,d.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528 Typescript\uff0c",(0,d.jsx)(n.code,{children:"middleware"})," \u9009\u9879\u9700\u8981\u5728\u589e\u5f3a\u5668\u9009\u9879\u4e4b\u524d\u63d0\u4f9b\uff0c\u56e0\u4e3a ",(0,d.jsx)(n.code,{children:"getDefaultEnhancers"})," \u7684\u7c7b\u578b\u53d6\u51b3\u4e8e\u5176\u7ed3\u679c\u3002"]})]}),"\n",(0,d.jsxs)(n.admonition,{title:"Tuple",type:"note",children:[(0,d.jsxs)(n.p,{children:["Typescript \u7528\u6237\u9700\u8981\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"Tuple"})," \u5b9e\u4f8b\uff08\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"getDefaultEnhancer"})," \u7684\u7ed3\u679c\uff0c\u8be5\u7ed3\u679c\u5df2\u7ecf\u662f\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"Tuple"}),"\uff09\uff0c\u4ee5\u4fbf\u66f4\u597d\u7684\u63a8\u65ad\u3002"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"import { configureStore, Tuple } from '@reduxjs/toolkit'\n\nconfigureStore({\n  reducer: rootReducer,\n  enhancers: () => new Tuple(offline),\n})\n"})}),(0,d.jsx)(n.p,{children:"\u4ec5\u4f7f\u7528 Javascript \u7684\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u4f7f\u7528\u666e\u901a\u6570\u7ec4\u3002"})]}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,d.jsx)(n.h3,{id:"\u57fa\u672c\u793a\u4f8b",children:"\u57fa\u672c\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"// \u6587\u4ef6: reducers.ts noEmit\nimport type { Reducer } from '@reduxjs/toolkit'\ndeclare const rootReducer: Reducer<{}>\nexport default rootReducer\n\n// \u6587\u4ef6: store.ts\nimport { configureStore } from '@reduxjs/toolkit'\n\nimport rootReducer from './reducers'\n\nconst store = configureStore({ reducer: rootReducer })\n// \u73b0\u5728\u7684 store \u5df2\u7ecf\u6dfb\u52a0\u4e86 redux-thunk\uff0c\u5e76\u4e14\u5df2\u7ecf\u6253\u5f00\u4e86 Redux DevTools \u6269\u5c55\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5b8c\u6574\u793a\u4f8b",children:"\u5b8c\u6574\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"// \u6587\u4ef6: todos/todosReducer.ts noEmit\nimport type { Reducer } from '@reduxjs/toolkit'\ndeclare const reducer: Reducer<{}>\nexport default reducer\n\n// \u6587\u4ef6: visibility/visibilityReducer.ts noEmit\nimport type { Reducer } from '@reduxjs/toolkit'\ndeclare const reducer: Reducer<{}>\nexport default reducer\n\n// \u6587\u4ef6: store.ts\nimport { configureStore } from '@reduxjs/toolkit'\n\n// \u6211\u4eec\u5c06\u4f7f\u7528 redux-logger \u4f5c\u4e3a\u6dfb\u52a0\u53e6\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u7684\u793a\u4f8b\nimport logger from 'redux-logger'\n\n// \u5e76\u4f7f\u7528 redux-batched-subscribe \u4f5c\u4e3a\u6dfb\u52a0\u589e\u5f3a\u5668\u7684\u793a\u4f8b\nimport { batchedSubscribe } from 'redux-batched-subscribe'\n\nimport todosReducer from './todos/todosReducer'\nimport visibilityReducer from './visibility/visibilityReducer'\n\nconst reducer = {\n  todos: todosReducer,\n  visibility: visibilityReducer,\n}\n\nconst preloadedState = {\n  todos: [\n    {\n      text: 'Eat food',\n      completed: true,\n    },\n    {\n      text: 'Exercise',\n      completed: false,\n    },\n  ],\n  visibilityFilter: 'SHOW_COMPLETED',\n}\n\nconst debounceNotify = _.debounce((notify) => notify())\n\nconst store = configureStore({\n  reducer,\n  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),\n  devTools: process.env.NODE_ENV !== 'production',\n  preloadedState,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers({\n      autoBatch: false,\n    }).concat(batchedSubscribe(debounceNotify)),\n})\n\n// \u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\u521b\u5efa\u4e86 store\uff1a\n// - \u5207\u7247 reducer \u81ea\u52a8\u4f20\u9012\u7ed9 combineReducers()\n// - redux-thunk \u548c redux-logger \u88ab\u6dfb\u52a0\u4e3a\u4e2d\u95f4\u4ef6\n// - Redux DevTools \u6269\u5c55\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u88ab\u7981\u7528\n// - \u4e2d\u95f4\u4ef6\uff0c\u6279\u91cf\u8ba2\u9605\u548c devtools \u589e\u5f3a\u5668\u88ab\u7ec4\u5408\u5728\u4e00\u8d77\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var d=r(6540);const o={},c=d.createContext(o);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);