"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[1597],{849:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var n=t(4848),i=t(8453);const d={id:"redux-integration",title:"API \u5207\u7247\uff1aRedux \u96c6\u6210",sidebar_label:"Redux \u96c6\u6210",hide_title:!0},c="API\u5207\u7247\uff1aRedux\u96c6\u6210",o={id:"rtk-query/api/created-api/redux-integration",title:"API \u5207\u7247\uff1aRedux \u96c6\u6210",description:"&nbsp;",source:"@site/docs/rtk-query/api/created-api/redux-integration.mdx",sourceDirName:"rtk-query/api/created-api",slug:"/rtk-query/api/created-api/redux-integration",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/redux-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/api/created-api/redux-integration.mdx",tags:[],version:"current",frontMatter:{id:"redux-integration",title:"API \u5207\u7247\uff1aRedux \u96c6\u6210",sidebar_label:"Redux \u96c6\u6210",hide_title:!0},sidebar:"docs",previous:{title:"API \u5207\u7247\u6982\u89c8",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/overview"},next:{title:"\u7aef\u70b9",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/endpoints"}},s={},a=[{value:"<code>reducerPath</code>",id:"reducerpath",level:2},{value:"<code>reducer</code>",id:"reducer",level:2},{value:"<code>middleware</code>",id:"middleware",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"\xa0"}),"\n",(0,n.jsx)(r.h1,{id:"api\u5207\u7247redux\u96c6\u6210",children:"API\u5207\u7247\uff1aRedux\u96c6\u6210"}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u5185\u90e8\uff0c",(0,n.jsx)(r.code,{children:"createApi"}),"\u4f1a\u8c03\u7528",(0,n.jsxs)(r.a,{href:"https://redux-toolkit.js.org/api/createSlice",children:["Redux Toolkit\u7684",(0,n.jsx)(r.code,{children:"createSlice"})," API"]}),"\u6765\u751f\u6210\u4e00\u4e2a\u5207\u7247reducer\u548c\u76f8\u5e94\u7684action\u521b\u5efa\u5668\uff0c\u8fd9\u4e9b\u521b\u5efa\u5668\u5177\u6709\u7f13\u5b58\u83b7\u53d6\u7684\u6570\u636e\u7684\u9002\u5f53\u903b\u8f91\u3002\u5b83\u8fd8\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684Redux\u4e2d\u95f4\u4ef6\uff0c\u8be5\u4e2d\u95f4\u4ef6\u7ba1\u7406\u8ba2\u9605\u8ba1\u6570\u548c\u7f13\u5b58\u751f\u547d\u5468\u671f\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u751f\u6210\u7684\u5207\u7247reducer\u548c\u4e2d\u95f4\u4ef6\u90fd\u9700\u8981\u6dfb\u52a0\u5230\u4f60\u7684Redux store\u8bbe\u7f6e\u4e2d\u7684",(0,n.jsx)(r.code,{children:"configureStore"}),"\u4e2d\uff0c\u4ee5\u4fbf\u6b63\u786e\u5de5\u4f5c\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="src/store.ts"',children:"// \u6587\u4ef6\uff1asrc/services/pokemon.ts noEmit\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const pokemonApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: () => ({}),\n})\n\n// \u6587\u4ef6\uff1asrc/store.ts\nimport { configureStore } from '@reduxjs/toolkit'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // \u5c06\u751f\u6210\u7684reducer\u6dfb\u52a0\u4e3a\u7279\u5b9a\u7684\u9876\u7ea7\u5207\u7247\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n  },\n  // \u6dfb\u52a0api\u4e2d\u95f4\u4ef6\u542f\u7528\u7f13\u5b58\uff0c\u5931\u6548\uff0c\u8f6e\u8be2\uff0c\n  // \u548c`rtk-query`\u7684\u5176\u4ed6\u6709\u7528\u7279\u6027\u3002\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n})\n\n// \u4f7f\u7528\u63d0\u4f9b\u7684\u9ed8\u8ba4\u503c\u914d\u7f6e\u76d1\u542c\u5668\nsetupListeners(store.dispatch)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"reducerpath",children:(0,n.jsx)(r.code,{children:"reducerPath"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"no-transpile",children:"reducerPath: string\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5305\u542b\u63d0\u4f9b\u7ed9",(0,n.jsx)(r.code,{children:"createApi"}),"\u7684",(0,n.jsx)(r.code,{children:"reducerPath"}),"\u9009\u9879\u3002\u5728\u5c06",(0,n.jsx)(r.code,{children:"reducer"}),"\u51fd\u6570\u6dfb\u52a0\u5230store\u65f6\uff0c\u4f7f\u7528\u6b64\u4f5c\u4e3a\u6839\u72b6\u6001\u952e\uff0c\u4ee5\u4fbf\u751f\u6210\u7684API\u903b\u8f91\u53ef\u4ee5\u6b63\u786e\u627e\u5230\u72b6\u6001\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"reducer",children:(0,n.jsx)(r.code,{children:"reducer"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"no-transpile",children:"reducer: Reducer\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u4e00\u4e2a\u6807\u51c6\u7684Redux\u5207\u7247reducer\u51fd\u6570\uff0c\u5305\u542b\u66f4\u65b0\u7f13\u5b58\u6570\u636e\u7684\u903b\u8f91\u3002\u4f7f\u7528\u4f60\u63d0\u4f9b\u7684\u6839\u72b6\u6001\u952e\u5c06\u6b64\u6dfb\u52a0\u5230Redux store\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"middleware",children:(0,n.jsx)(r.code,{children:"middleware"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"no-transpile",children:"middleware: Middleware\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684Redux\u4e2d\u95f4\u4ef6\uff0c\u5305\u542b\u7ba1\u7406\u7f13\u5b58\uff0c\u5931\u6548\uff0c\u8ba2\u9605\uff0c\u8f6e\u8be2\u7b49\u903b\u8f91\u3002\u5728\u5176\u4ed6\u4e2d\u95f4\u4ef6\u4e4b\u540e\u5c06\u6b64\u6dfb\u52a0\u5230store\u8bbe\u7f6e\u4e2d\u3002"})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>o});var n=t(6540);const i={},d=n.createContext(i);function c(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);