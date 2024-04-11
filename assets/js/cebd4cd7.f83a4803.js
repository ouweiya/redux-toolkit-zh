"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7213],{6120:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>s,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=i(4848),c=i(8453);const d={id:"other-exports",title:"\u5176\u4ed6\u5bfc\u51fa",sidebar_label:"\u5176\u4ed6\u5bfc\u51fa",hide_title:!0},t="\u5176\u4ed6\u5bfc\u51fa",o={id:"api/other-exports",title:"\u5176\u4ed6\u5bfc\u51fa",description:"&nbsp;",source:"@site/docs/api/otherExports.mdx",sourceDirName:"api",slug:"/api/other-exports",permalink:"/redux-toolkit-zh/api/other-exports",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/api/otherExports.mdx",tags:[],version:"current",frontMatter:{id:"other-exports",title:"\u5176\u4ed6\u5bfc\u51fa",sidebar_label:"\u5176\u4ed6\u5bfc\u51fa",hide_title:!0},sidebar:"docs",previous:{title:"\u5339\u914d\u5de5\u5177",permalink:"/redux-toolkit-zh/api/matching-utilities"},next:{title:"\u4ee3\u7801\u4fee\u6539",permalink:"/redux-toolkit-zh/api/codemods"}},s={},l=[{value:"<code>nanoid</code>",id:"nanoid",level:3},{value:"<code>miniSerializeError</code>",id:"miniserializeerror",level:3},{value:"<code>copyWithStructuralSharing</code>",id:"copywithstructuralsharing",level:3},{value:"\u6765\u81ea\u5176\u4ed6\u5e93\u7684\u5bfc\u51fa",id:"\u6765\u81ea\u5176\u4ed6\u5e93\u7684\u5bfc\u51fa",level:2},{value:"<code>createNextState</code>",id:"createnextstate",level:3},{value:"<code>current</code>",id:"current",level:3},{value:"<code>original</code>",id:"original",level:3},{value:"<code>isDraft</code>",id:"isdraft",level:3},{value:"<code>freeze</code>",id:"freeze",level:3},{value:"<code>combineReducers</code>",id:"combinereducers",level:3},{value:"<code>compose</code>",id:"compose",level:3},{value:"<code>bindActionCreators</code>",id:"bindactioncreators",level:3},{value:"<code>createStore</code>",id:"createstore",level:3},{value:"<code>applyMiddleware</code>",id:"applymiddleware",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"\xa0"}),"\n",(0,n.jsx)(r.h1,{id:"\u5176\u4ed6\u5bfc\u51fa",children:"\u5176\u4ed6\u5bfc\u51fa"}),"\n",(0,n.jsx)(r.p,{children:"Redux Toolkit \u5bfc\u51fa\u4e86\u4e00\u4e9b\u5185\u90e8\u5de5\u5177\uff0c\u5e76\u4ece\u5176\u4ed6\u4f9d\u8d56\u9879\u91cd\u65b0\u5bfc\u51fa\u4e86\u989d\u5916\u7684\u51fd\u6570\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"nanoid",children:(0,n.jsx)(r.code,{children:"nanoid"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://github.com/ai/nanoid",children:(0,n.jsx)(r.code,{children:"nanoid/nonsecure"})}),"\u7684\u5185\u8054\u526f\u672c\u3002\u751f\u6210\u975e\u52a0\u5bc6\u5b89\u5168\u7684\u968f\u673a ID \u5b57\u7b26\u4e32\u3002",(0,n.jsx)(r.code,{children:"createAsyncThunk"})," \u9ed8\u8ba4\u4f7f\u7528\u6b64\u9879\u4f5c\u4e3a\u8bf7\u6c42 ID\u3002\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u53ef\u80fd\u6709\u7528\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { nanoid } from '@reduxjs/toolkit'\n\nconsole.log(nanoid())\n// 'dgPXxUz_6fWIQBD8XmiSy'\n"})}),"\n",(0,n.jsx)(r.h3,{id:"miniserializeerror",children:(0,n.jsx)(r.code,{children:"miniSerializeError"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"createAsyncThunk"})," \u4f7f\u7528\u7684\u9ed8\u8ba4\u9519\u8bef\u5e8f\u5217\u5316\u51fd\u6570\uff0c\u57fa\u4e8e ",(0,n.jsx)(r.a,{href:"https://github.com/sindresorhus/serialize-error",children:"https://github.com/sindresorhus/serialize-error"})," \u3002\u5982\u679c\u5176\u53c2\u6570\u662f\u4e00\u4e2a\u5bf9\u8c61\uff08\u5982 ",(0,n.jsx)(r.code,{children:"Error"})," \u5b9e\u4f8b\uff09\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u590d\u5236\u4e86\u4efb\u4f55\u5217\u51fa\u5b57\u6bb5\u7684\u666e\u901a JS ",(0,n.jsx)(r.code,{children:"SerializedError"})," \u5bf9\u8c61\u3002\u5426\u5219\uff0c\u5b83\u8fd4\u56de\u503c\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\uff1a",(0,n.jsx)(r.code,{children:"{ message: String(value) }"}),"\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"no-transpile",children:"export interface SerializedError {\n  name?: string\n  message?: string\n  stack?: string\n  code?: string\n}\n\nexport function miniSerializeError(value: any): SerializedError {}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"copywithstructuralsharing",children:(0,n.jsx)(r.code,{children:"copyWithStructuralSharing"})}),"\n",(0,n.jsx)(r.p,{children:"\u4e00\u4e2a\u5b9e\u7528\u5de5\u5177\uff0c\u5c06\u4e24\u4e2a\u76f8\u4f3c\u7684\u5bf9\u8c61\u9012\u5f52\u5730\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u5982\u679c\u503c\u770b\u8d77\u6765\u76f8\u540c\uff0c\u5219\u4fdd\u7559\u73b0\u6709\u7684\u5f15\u7528\u3002\u8fd9\u5728\u5185\u90e8\u7528\u4e8e\u786e\u4fdd\u91cd\u65b0\u83b7\u53d6\u7684\u6570\u636e\u4fdd\u6301\u4f7f\u7528\u76f8\u540c\u7684\u5f15\u7528\uff0c\u9664\u975e\u65b0\u6570\u636e\u5b9e\u9645\u4e0a\u5df2\u7ecf\u6539\u53d8\uff0c\u4ee5\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u3002\u5426\u5219\uff0c\u6bcf\u6b21\u91cd\u65b0\u83b7\u53d6\u90fd\u53ef\u80fd\u5bfc\u81f4\u6574\u4e2a\u6570\u636e\u96c6\u88ab\u66ff\u6362\uff0c\u6240\u6709\u6d88\u8d39\u7ec4\u4ef6\u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u8f93\u5165\u7684\u4efb\u4f55\u4e00\u4e2a\u4e0d\u662f\u666e\u901a\u7684 JS \u5bf9\u8c61\u6216\u6570\u7ec4\uff0c\u5c06\u8fd4\u56de\u65b0\u503c\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"no-transpile",children:"export function copyWithStructuralSharing<T>(oldObj: any, newObj: T): T\nexport function copyWithStructuralSharing(oldObj: any, newObj: any): any {}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u6765\u81ea\u5176\u4ed6\u5e93\u7684\u5bfc\u51fa",children:"\u6765\u81ea\u5176\u4ed6\u5e93\u7684\u5bfc\u51fa"}),"\n",(0,n.jsx)(r.h3,{id:"createnextstate",children:(0,n.jsx)(r.code,{children:"createNextState"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6765\u81ea ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/",children:[(0,n.jsx)(r.code,{children:"immer"})," \u5e93"]}),"\u7684\u9ed8\u8ba4\u4e0d\u53ef\u53d8\u66f4\u65b0\u51fd\u6570\uff0c\u91cd\u65b0\u5bfc\u51fa\u4e3a ",(0,n.jsx)(r.code,{children:"createNextState"}),"\uff08\u4e5f\u5e38\u88ab\u79f0\u4e3a ",(0,n.jsx)(r.a,{href:"https://immerjs.github.io/immer/produce",children:(0,n.jsx)(r.code,{children:"produce"})}),"\uff09"]}),"\n",(0,n.jsx)(r.h3,{id:"current",children:(0,n.jsx)(r.code,{children:"current"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6765\u81ea ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/",children:[(0,n.jsx)(r.code,{children:"immer"})," \u5e93"]}),"\u7684 ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/current",children:[(0,n.jsx)(r.code,{children:"current"})," \u51fd\u6570"]}),"\uff0c\u5b83\u83b7\u53d6\u8349\u7a3f\u7684\u5f53\u524d\u72b6\u6001\u5e76\u5b8c\u6210\u5b83\uff08\u4f46\u4e0d\u51bb\u7ed3\uff09\u3002Current \u662f\u5728\u8c03\u8bd5\u8fc7\u7a0b\u4e2d\u6253\u5370\u5f53\u524d\u72b6\u6001\u7684\u4e00\u4e2a\u5f88\u597d\u7684\u5de5\u5177\uff0c",(0,n.jsx)(r.code,{children:"current"})," \u7684\u8f93\u51fa\u4e5f\u53ef\u4ee5\u5b89\u5168\u5730\u6cc4\u9732\u5230\u751f\u4ea7\u8005\u4e4b\u5916\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { createReducer, createAction, current } from '@reduxjs/toolkit'\n\ninterface Todo {\n  //...\n}\nconst addTodo = createAction<Todo>('addTodo')\n\nconst initialState = [] satisfies Todo[] as Todo[]\n\nconst todosReducer = createReducer(initialState, (builder) => {\n  builder.addCase(addTodo, (state, action) => {\n    state.push(action.payload)\n    console.log(current(state))\n  })\n})\n"})}),"\n",(0,n.jsx)(r.h3,{id:"original",children:(0,n.jsx)(r.code,{children:"original"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6765\u81ea ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/",children:[(0,n.jsx)(r.code,{children:"immer"})," \u5e93"]}),"\u7684 ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/original",children:[(0,n.jsx)(r.code,{children:"original"})," \u51fd\u6570"]}),"\uff0c\u5b83\u8fd4\u56de\u539f\u59cb\u5bf9\u8c61\u3002\u8fd9\u5728 reducer \u4e2d\u8fdb\u884c\u5f15\u7528\u7b49\u4ef7\u6027\u68c0\u67e5\u65f6\u7279\u522b\u6709\u7528\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"isdraft",children:(0,n.jsx)(r.code,{children:"isDraft"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6765\u81ea ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/",children:[(0,n.jsx)(r.code,{children:"immer"})," \u5e93"]}),"\u7684 ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/original",children:[(0,n.jsx)(r.code,{children:"isDraft"})," \u51fd\u6570"]}),'\uff0c\u5b83\u68c0\u67e5\u7ed9\u5b9a\u7684\u503c\u662f\u5426\u662f Proxy \u5305\u88c5\u7684 "draft" \u72b6\u6001\u3002']}),"\n",(0,n.jsx)(r.h3,{id:"freeze",children:(0,n.jsx)(r.code,{children:"freeze"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6765\u81ea ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/",children:[(0,n.jsx)(r.code,{children:"immer"})," \u5e93"]}),"\u7684 ",(0,n.jsxs)(r.a,{href:"https://immerjs.github.io/immer/api",children:[(0,n.jsx)(r.code,{children:"freeze"})," \u51fd\u6570"]}),"\uff0c\u5b83",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",children:"\u51bb\u7ed3"}),"\u53ef\u8349\u7a3f\u5316\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"combinereducers",children:(0,n.jsx)(r.code,{children:"combineReducers"})}),"\n",(0,n.jsxs)(r.p,{children:["Redux \u7684 ",(0,n.jsx)(r.a,{href:"https://cn.redux.js.org/api/combinereducers",children:(0,n.jsx)(r.code,{children:"combineReducers"})}),"\uff0c\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\u91cd\u65b0\u5bfc\u51fa\u3002\u867d\u7136 ",(0,n.jsx)(r.code,{children:"configureStore"})," \u5728\u5185\u90e8\u8c03\u7528\u4e86\u8fd9\u4e2a\uff0c\u4f46\u4f60\u53ef\u80fd\u5e0c\u671b\u81ea\u5df1\u8c03\u7528\u5b83\u6765\u7ec4\u5408\u591a\u7ea7\u7684 slice reducers\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"compose",children:(0,n.jsx)(r.code,{children:"compose"})}),"\n",(0,n.jsxs)(r.p,{children:["Redux \u7684 ",(0,n.jsx)(r.a,{href:"https://cn.redux.js.org/api/compose",children:(0,n.jsx)(r.code,{children:"compose"})}),"\u3002\u5b83\u4ece\u53f3\u5230\u5de6\u7ec4\u5408\u51fd\u6570\u3002\n\u8fd9\u662f\u4e00\u4e2a\u51fd\u6570\u5f0f\u7f16\u7a0b\u5b9e\u7528\u5de5\u5177\u3002\u4f60\u53ef\u80fd\u60f3\u7528\u5b83\u6765\u8fde\u7eed\u5e94\u7528\u51e0\u4e2a store \u81ea\u5b9a\u4e49\u589e\u5f3a\u5668/\u51fd\u6570\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"bindactioncreators",children:(0,n.jsx)(r.code,{children:"bindActionCreators"})}),"\n",(0,n.jsxs)(r.p,{children:["Redux \u7684 ",(0,n.jsx)(r.a,{href:"https://cn.redux.js.org/api/bindactioncreators",children:(0,n.jsx)(r.code,{children:"bindActionCreators"})}),"\u3002\u5b83\u7528 ",(0,n.jsx)(r.code,{children:"dispatch()"})," \u5305\u88c5 action \u521b\u5efa\u8005\uff0c\u4ee5\u4fbf\u5b83\u4eec\u5728\u88ab\u8c03\u7528\u65f6\u7acb\u5373\u5206\u6d3e\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"createstore",children:(0,n.jsx)(r.code,{children:"createStore"})}),"\n",(0,n.jsxs)(r.p,{children:["Redux \u7684 ",(0,n.jsx)(r.a,{href:"https://cn.redux.js.org/api/createstore",children:(0,n.jsx)(r.code,{children:"createStore"})}),"\u3002\u4f60\u4e0d\u5e94\u8be5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"applymiddleware",children:(0,n.jsx)(r.code,{children:"applyMiddleware"})}),"\n",(0,n.jsxs)(r.p,{children:["Redux \u7684 ",(0,n.jsx)(r.a,{href:"https://cn.redux.js.org/api/applymiddleware",children:(0,n.jsx)(r.code,{children:"applyMiddleware"})}),"\u3002\u4f60\u4e0d\u5e94\u8be5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u3002"]})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>t,x:()=>o});var n=i(6540);const c={},d=n.createContext(c);function t(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);