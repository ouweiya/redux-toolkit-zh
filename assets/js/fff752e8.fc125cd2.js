"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[6760],{7372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var c=t(4848),r=t(8453);const a={id:"autoBatchEnhancer",title:"\u81ea\u52a8\u6279\u5904\u7406\u589e\u5f3a\u5668",sidebar_label:"\u81ea\u52a8\u6279\u5904\u7406\u589e\u5f3a\u5668",hide_title:!0},i="autoBatchEnhancer",o={id:"api/autoBatchEnhancer",title:"\u81ea\u52a8\u6279\u5904\u7406\u589e\u5f3a\u5668",description:"&nbsp;",source:"@site/docs/api/autoBatchEnhancer.mdx",sourceDirName:"api",slug:"/api/autoBatchEnhancer",permalink:"/redux-toolkit-zh/api/autoBatchEnhancer",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/autoBatchEnhancer.mdx",tags:[],version:"current",frontMatter:{id:"autoBatchEnhancer",title:"\u81ea\u52a8\u6279\u5904\u7406\u589e\u5f3a\u5668",sidebar_label:"\u81ea\u52a8\u6279\u5904\u7406\u589e\u5f3a\u5668",hide_title:!0},sidebar:"docs",previous:{title:"\u83b7\u53d6\u9ed8\u8ba4\u589e\u5f3a\u5668",permalink:"/redux-toolkit-zh/api/getDefaultEnhancers"},next:{title:"\u521b\u5efa\u51cf\u901f\u5668",permalink:"/redux-toolkit-zh/api/createReducer"}},d={},s=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"<code>autoBatchEnhancer</code>",id:"autobatchenhancer-1",level:3},{value:"<code>prepareAutoBatched</code>",id:"prepareautobatched",level:3},{value:"\u6279\u5904\u7406\u65b9\u6cd5\u548c\u80cc\u666f",id:"\u6279\u5904\u7406\u65b9\u6cd5\u548c\u80cc\u666f",level:2},{value:"RTK \u67e5\u8be2\u548c\u6279\u5904\u7406",id:"rtk-\u67e5\u8be2\u548c\u6279\u5904\u7406",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\xa0"}),"\n",(0,c.jsx)(n.h1,{id:"autobatchenhancer",children:(0,c.jsx)(n.code,{children:"autoBatchEnhancer"})}),"\n",(0,c.jsx)(n.p,{children:'\u8fd9\u662f\u4e00\u4e2aRedux\u5b58\u50a8\u589e\u5f3a\u5668\uff0c\u5b83\u4f1a\u5bfb\u627e\u4e00\u884c\u6216\u591a\u884c\u88ab\u6d3e\u53d1\u7684"\u4f4e\u4f18\u5148\u7ea7"\u52a8\u4f5c\uff0c\u5e76\u5728\u5ef6\u8fdf\u4e0a\u6392\u961f\u4e00\u4e2a\u56de\u8c03\u6765\u8fd0\u884c\u8ba2\u9605\u8005\u901a\u77e5\u3002\u7136\u540e\uff0c\u5b83\u4f1a\u5728\u6392\u961f\u7684\u56de\u8c03\u8fd0\u884c\u65f6\uff0c\u6216\u8005\u5f53\u4e0b\u4e00\u4e2a"\u6b63\u5e38\u4f18\u5148\u7ea7"\u7684\u52a8\u4f5c\u88ab\u6d3e\u53d1\u65f6\uff0c\u901a\u77e5\u8ba2\u9605\u8005\uff0c\u4ee5\u5148\u5230\u8005\u4e3a\u51c6\u3002'}),"\n",(0,c.jsx)(n.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import {\n  createSlice,\n  configureStore,\n  autoBatchEnhancer,\n  prepareAutoBatched,\n} from '@reduxjs/toolkit'\n\ninterface CounterState {\n  value: number\n}\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 } satisfies CounterState as CounterState,\n  reducers: {\n    incrementBatched: {\n      // \u6279\u5904\u7406\uff0c\u4f4e\u4f18\u5148\u7ea7\n      reducer(state) {\n        state.value += 1\n      },\n      // highlight-start\n      // \u4f7f\u7528 `prepareAutoBatched` \u5b9e\u7528\u7a0b\u5e8f\u81ea\u52a8\n      // \u6dfb\u52a0\u589e\u5f3a\u5668\u9700\u8981\u7684 `action.meta[SHOULD_AUTOBATCH]` \u5b57\u6bb5\n      prepare: prepareAutoBatched<void>(),\n      // highlight-end\n    },\n    // \u672a\u6279\u5904\u7406\uff0c\u6b63\u5e38\u4f18\u5148\u7ea7\n    decrementUnbatched(state) {\n      state.value -= 1\n    },\n  },\n})\nconst { incrementBatched, decrementUnbatched } = counterSlice.actions\n\n// \u9ed8\u8ba4\u5305\u542b\u6279\u5904\u7406\u589e\u5f3a\u5668\uff0c\u4eceRTK 2.0\u5f00\u59cb\nconst store = configureStore({\n  reducer: counterSlice.reducer,\n})\n"})}),"\n",(0,c.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,c.jsx)(n.h3,{id:"autobatchenhancer-1",children:(0,c.jsx)(n.code,{children:"autoBatchEnhancer"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",metastring:'title="autoBatchEnhancer \u7b7e\u540d" no-transpile',children:"export type SHOULD_AUTOBATCH = string\ntype AutoBatchOptions =\n  | { type: 'tick' }\n  | { type: 'timer'; timeout: number }\n  | { type: 'raf' }\n  | { type: 'callback'; queueNotification: (notify: () => void) => void }\n\nexport type autoBatchEnhancer = (options?: AutoBatchOptions) => StoreEnhancer\n"})}),"\n",(0,c.jsxs)(n.admonition,{type:"tip",children:[(0,c.jsxs)(n.p,{children:["\u4eceRTK 2.0\u5f00\u59cb\uff0c\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"configureStore"})," \u65f6\u9ed8\u8ba4\u5305\u542b ",(0,c.jsx)(n.code,{children:"autoBatchEnhancer"}),"\u3002"]}),(0,c.jsxs)(n.p,{children:["\u8fd9\u610f\u5473\u7740\u8981\u914d\u7f6e\u5b83\uff0c\u4f60\u5e94\u8be5\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\uff0c\u8be5\u56de\u8c03\u63a5\u6536 ",(0,c.jsx)(n.code,{children:"getDefaultEnhancers"})," \u5e76\u7528\u4f60\u60f3\u8981\u7684\u8bbe\u7f6e\u8c03\u7528\u5b83\u3002"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",metastring:'title="\u4f7f\u7528 getDefaultEnhancers \u914d\u7f6e autoBatchEnhancer"',children:"import { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({\n  reducer: () => 0,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers({\n      autoBatch: { type: 'tick' },\n    }),\n})\n"})})]}),"\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 autobatch \u5b58\u50a8\u589e\u5f3a\u5668\u5b9e\u4f8b\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4efb\u4f55\u5e26\u6709 ",(0,c.jsx)(n.code,{children:"action.meta[SHOULD_AUTOBATCH] = true"}),' \u6807\u7b7e\u7684\u52a8\u4f5c\u90fd\u5c06\u88ab\u89c6\u4e3a"\u4f4e\u4f18\u5148\u7ea7"\uff0c\u5e76\u5c06\u6392\u961f\u4e00\u4e2a\u901a\u77e5\u56de\u8c03\u3002\u589e\u5f3a\u5668\u5c06\u5ef6\u8fdf\u901a\u77e5\u8ba2\u9605\u8005\uff0c\u76f4\u5230\u4ee5\u4e0b\u4efb\u4e00\u60c5\u51b5\u53d1\u751f\uff1a']}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6392\u961f\u7684\u56de\u8c03\u8fd0\u884c\u5e76\u89e6\u53d1\u901a\u77e5"}),"\n",(0,c.jsxs)(n.li,{children:['\u5728\u540c\u4e00\u523b\u6d3e\u53d1\u4e00\u4e2a"\u6b63\u5e38\u4f18\u5148\u7ea7"\u7684\u52a8\u4f5c\uff08\u4efb\u4f55\u6ca1\u6709 ',(0,c.jsx)(n.code,{children:"action.meta[SHOULD_AUTOBATCH] = true"})," \u7684\u52a8\u4f5c\uff09"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"autoBatchEnhancer"})," \u63a5\u53d7\u9009\u9879\u6765\u914d\u7f6e\u5982\u4f55\u6392\u961f\u901a\u77e5\u56de\u8c03\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"{type: 'raf'}"}),"\uff1a\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"requestAnimationFrame"})," \u6392\u961f\uff08\u9ed8\u8ba4\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"{type: 'tick'}"}),"\uff1a\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"queueMicrotask"})," \u6392\u961f"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"{type: 'timer', timeout: number}"}),"\uff1a\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"setTimeout"})," \u6392\u961f"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"{type: 'callback', queueNotification: (notify: () => void) => void}"}),"\uff1a\u8ba9\u4f60\u63d0\u4f9b\u81ea\u5df1\u7684\u56de\u8c03\uff0c\u4f8b\u5982\u4e00\u4e2a\u9632\u6296\u6216\u8282\u6d41\u51fd\u6570"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9ed8\u8ba4\u884c\u4e3a\u662f\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"requestAnimationFrame"})," \u6392\u961f\u901a\u77e5\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"SHOULD_AUTOBATCH"})," \u503c\u5e94\u8be5\u662f\u4e0d\u900f\u660e\u7684 - \u5b83\u76ee\u524d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u4f46\u5728\u672a\u6765\u53ef\u80fd\u662f\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"Symbol"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"prepareautobatched",children:(0,c.jsx)(n.code,{children:"prepareAutoBatched"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",metastring:'title="prepareAutoBatched \u7b7e\u540d" no-transpile',children:"type prepareAutoBatched = <T>() => (payload: T) => { payload: T; meta: unknown }\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"payload"})," \u503c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5e26\u6709 ",(0,c.jsx)(n.code,{children:"{payload, meta: {[SHOULD_AUTOBATCH]: true}}"})," \u7684\u5bf9\u8c61\u3002\u8fd9\u662f\u4e3a\u4e86\u4e0eRTK\u7684 ",(0,c.jsx)(n.code,{children:"createSlice"}),' \u53ca\u5176 "',(0,c.jsx)(n.code,{children:"prepare"}),' \u56de\u8c03"\u8bed\u6cd5\u4e00\u8d77\u4f7f\u7528\uff1a']}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"createSlice({\n  name: 'todos',\n  initialState,\n  reducers: {\n    todoAdded: {\n      reducer(state, action: PayloadAction<Todo>) {\n        state.push(action.payload)\n      },\n      // highlight-start\n      prepare: prepareAutoBatched<Todo>(),\n      // highlight-end\n    },\n  },\n})\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6279\u5904\u7406\u65b9\u6cd5\u548c\u80cc\u666f",children:"\u6279\u5904\u7406\u65b9\u6cd5\u548c\u80cc\u666f"}),"\n",(0,c.jsxs)(n.p,{children:["\u6587\u7ae0 ",(0,c.jsx)(n.a,{href:"https://blog.isquaredsoftware.com/2020/01/blogged-answers-redux-batching-techniques/",children:"A Comparison of Redux Batching Techniques"}),' \u63cf\u8ff0\u4e86\u56db\u79cd\u4e0d\u540c\u7684"\u6279\u5904\u7406 Redux \u52a8\u4f5c/\u6d3e\u53d1"\u7684\u65b9\u6cd5\uff1a']}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4e00\u4e2a\u9ad8\u9636 reducer\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a\u771f\u5b9e\u52a8\u4f5c\u4e2d\u5d4c\u5957\u7684\u591a\u4e2a\u52a8\u4f5c\uff0c\u5e76\u4e00\u8d77\u8fed\u4ee3\u5b83\u4eec"}),"\n",(0,c.jsxs)(n.li,{children:["\u4e00\u4e2a\u5305\u88c5 ",(0,c.jsx)(n.code,{children:"dispatch"})," \u5e76\u9632\u6296\u901a\u77e5\u56de\u8c03\u7684\u589e\u5f3a\u5668"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4e00\u4e2a\u5305\u88c5 ",(0,c.jsx)(n.code,{children:"dispatch"})," \u4ee5\u63a5\u53d7\u52a8\u4f5c\u6570\u7ec4\u7684\u589e\u5f3a\u5668"]}),"\n",(0,c.jsxs)(n.li,{children:["React \u7684 ",(0,c.jsx)(n.code,{children:"unstable_batchedUpdates()"}),"\uff0c\u5b83\u53ea\u662f\u5c06\u591a\u4e2a\u6392\u961f\u7684\u6e32\u67d3\u5408\u5e76\u4e3a\u4e00\u4e2a\uff0c\u4f46\u4e0d\u5f71\u54cd\u8ba2\u9605\u8005\u901a\u77e5"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:'\u8fd9\u4e2a\u589e\u5f3a\u5668\u662f"\u9632\u6296"\u65b9\u6cd5\u7684\u4e00\u4e2a\u53d8\u4f53\uff0c\u4f46\u6709\u4e00\u4e2a\u8f6c\u6298\u3002'}),"\n",(0,c.jsxs)(n.p,{children:["\u5b83\u4e0d\u4ec5\u4ec5\u662f\u9632\u6296\u6240\u6709\u8ba2\u9605\u8005\u901a\u77e5\uff0c\u800c\u662f\u89c2\u5bdf\u4efb\u4f55\u5e26\u6709\u7279\u5b9a ",(0,c.jsx)(n.code,{children:"action.meta[SHOULD_AUTOBATCH]: true"})," \u5b57\u6bb5\u7684\u52a8\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5f53\u5b83\u770b\u5230\u5e26\u6709\u8be5\u5b57\u6bb5\u7684\u52a8\u4f5c\u65f6\uff0c\u5b83\u4f1a\u6392\u961f\u4e00\u4e2a\u56de\u8c03\u3002reducer \u7acb\u5373\u66f4\u65b0\uff0c\u4f46\u589e\u5f3a\u5668\u4e0d\u4f1a\u7acb\u5373\u901a\u77e5\u8ba2\u9605\u8005\u3002\u5982\u679c\u5728\u8fde\u7eed\u7684\u52a8\u4f5c\u4e2d\u6d3e\u53d1\u4e86\u5e26\u6709\u76f8\u540c\u5b57\u6bb5\u7684\u5176\u4ed6\u52a8\u4f5c\uff0c\u589e\u5f3a\u5668\u5c06\u7ee7\u7eed\u4e0d\u901a\u77e5\u8ba2\u9605\u8005\u3002\u7136\u540e\uff0c\u5f53\u6392\u961f\u7684\u56de\u8c03\u8fd0\u884c\u65f6\uff0c\u5b83\u6700\u7ec8\u4f1a\u901a\u77e5\u6240\u6709\u8ba2\u9605\u8005\uff0c\u7c7b\u4f3c\u4e8e React \u5982\u4f55\u6279\u5904\u7406\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,c.jsx)(n.p,{children:'\u989d\u5916\u7684\u8f6c\u6298\u4e5f\u53d7\u5230\u4e86 React \u5c06\u66f4\u65b0\u5206\u4e3a"\u4f4e\u4f18\u5148\u7ea7"\u548c"\u7acb\u5373"\u884c\u4e3a\uff08\u5982\u7531 AJAX \u8bf7\u6c42\u6392\u961f\u7684\u6e32\u67d3 vs \u5e94\u540c\u6b65\u5904\u7406\u7684\u7528\u6237\u8f93\u5165\u6392\u961f\u7684\u6e32\u67d3\uff09\u7684\u542f\u53d1\u3002'}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u5df2\u7ecf\u6d3e\u53d1\u4e86\u4e00\u4e9b\u4f4e\u4f18\u5148\u7ea7\u7684\u52a8\u4f5c\u5e76\u6392\u961f\u4e86\u4e00\u4e2a\u901a\u77e5\u5fae\u4efb\u52a1\uff0c\u7136\u540e\u6d3e\u53d1\u4e86\u4e00\u4e2a\u6b63\u5e38\u4f18\u5148\u7ea7\u7684\u52a8\u4f5c\uff08\u6ca1\u6709\u8be5\u5b57\u6bb5\uff09\uff0c\u589e\u5f3a\u5668\u5c06\u50cf\u5f80\u5e38\u4e00\u6837\u540c\u6b65\u901a\u77e5\u6240\u6709\u8ba2\u9605\u8005\uff0c\u5e76\u5728\u523b\u5ea6\u7ed3\u675f\u65f6\u4e0d\u901a\u77e5\u4ed6\u4eec\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u5141\u8bb8 Redux \u7528\u6237\u9009\u62e9\u6027\u5730\u4e3a\u67d0\u4e9b\u52a8\u4f5c\u6807\u8bb0\u4ee5\u5b9e\u73b0\u6709\u6548\u7684\u6279\u5904\u7406\u884c\u4e3a\uff0c\u4f7f\u8fd9\u5b8c\u5168\u662f\u6bcf\u4e2a\u52a8\u4f5c\u7684\u9009\u62e9\uff0c\u540c\u65f6\u4fdd\u7559\u6240\u6709\u5176\u4ed6\u52a8\u4f5c\u7684\u6b63\u5e38\u901a\u77e5\u884c\u4e3a\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"rtk-\u67e5\u8be2\u548c\u6279\u5904\u7406",children:"RTK \u67e5\u8be2\u548c\u6279\u5904\u7406"}),"\n",(0,c.jsxs)(n.p,{children:["RTK Query \u5df2\u7ecf\u5c06\u5176\u51e0\u4e2a\u5173\u952e\u7684\u5185\u90e8\u52a8\u4f5c\u7c7b\u578b\u6807\u8bb0\u4e3a\u53ef\u6279\u5904\u7406\u3002\u901a\u8fc7\u5c06 ",(0,c.jsx)(n.code,{children:"autoBatchEnhancer"})," \u6dfb\u52a0\u5230\u5b58\u50a8\u8bbe\u7f6e\u4e2d\uff0c\u5b83\u63d0\u9ad8\u4e86\u6574\u4f53\u7684 UI \u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u6e32\u67d3\u4f7f\u7528 RTKQ \u67e5\u8be2\u94a9\u5b50\u7684\u5927\u578b\u7ec4\u4ef6\u5217\u8868\u65f6\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var c=t(6540);const r={},a=c.createContext(r);function i(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);