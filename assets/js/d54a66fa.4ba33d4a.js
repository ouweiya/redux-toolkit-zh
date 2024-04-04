"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7060],{929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(4848),a=t(8453);const s={id:"getDefaultEnhancers",title:"getDefaultEnhancers",sidebar_label:"getDefaultEnhancers",hide_title:!0},c="getDefaultEnhancers",o={id:"api/getDefaultEnhancers",title:"getDefaultEnhancers",description:"&nbsp;",source:"@site/docs/api/getDefaultEnhancers.mdx",sourceDirName:"api",slug:"/api/getDefaultEnhancers",permalink:"/redux-toolkit-zh/api/getDefaultEnhancers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/getDefaultEnhancers.mdx",tags:[],version:"current",frontMatter:{id:"getDefaultEnhancers",title:"getDefaultEnhancers",sidebar_label:"getDefaultEnhancers",hide_title:!0},sidebar:"docs",previous:{title:"createDynamicMiddleware",permalink:"/redux-toolkit-zh/api/createDynamicMiddleware"},next:{title:"autoBatchEnhancer",permalink:"/redux-toolkit-zh/api/autoBatchEnhancer"}},i={},l=[{value:"Intended Usage",id:"intended-usage",level:2},{value:"Included Default Enhancers",id:"included-default-enhancers",level:2},{value:"Customising the Included Enhancers",id:"customising-the-included-enhancers",level:2},{value:"API Reference",id:"api-reference",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\xa0"}),"\n",(0,r.jsx)(n.h1,{id:"getdefaultenhancers",children:(0,r.jsx)(n.code,{children:"getDefaultEnhancers"})}),"\n",(0,r.jsx)(n.p,{children:"Returns an array containing the default list of enhancers."}),"\n",(0,r.jsx)(n.h2,{id:"intended-usage",children:"Intended Usage"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.a,{href:"/redux-toolkit-zh/api/configureStore",children:(0,r.jsx)(n.code,{children:"configureStore"})})," adds some enhancers to the Redux store setup automatically."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const store = configureStore({\n  reducer: rootReducer,\n})\n\n// Store has enhancers added, because the enhancer list was not customized\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you want to customise the list of enhancers, you can supply an array of enhancer functions to ",(0,r.jsx)(n.code,{children:"configureStore"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const store = configureStore({\n  reducer: rootReducer,\n  enhancers: () => new Tuple(offline(offlineConfig)),\n})\n\n// store specifically has the offline enhancer applied\n"})}),"\n",(0,r.jsxs)(n.p,{children:["However, when you supply the ",(0,r.jsx)(n.code,{children:"enhancer"})," option, you are responsible for defining ",(0,r.jsx)(n.em,{children:"all"})," the enhancers you want added\nto the store (with the exception of the ",(0,r.jsx)(n.a,{href:"./configureStore#devtools",children:"devtools"}),"). ",(0,r.jsx)(n.code,{children:"configureStore"})," will not add any extra enhancers beyond what you listed, ",(0,r.jsx)(n.strong,{children:"including the middleware enhancer"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getDefaultEnhancers"})," is useful if you want to add some custom enhancers, but also still want to have the default\nenhancers added as well:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"import { configureStore } from '@reduxjs/toolkit'\nimport { offline } from '@redux-offline/redux-offline'\nimport offlineConfig from '@redux-offline/redux-offline/lib/defaults'\n\nimport rootReducer from './reducer'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers().concat(offline(offlineConfig)),\n})\n\n// Store has all of the default middleware + enhancers added, _plus_ the offline enhancer\n"})}),"\n",(0,r.jsx)(n.h2,{id:"included-default-enhancers",children:"Included Default Enhancers"}),"\n",(0,r.jsxs)(n.p,{children:["The resulting array will always contain the ",(0,r.jsx)(n.code,{children:"applyMiddleware"})," enhancer created based on the ",(0,r.jsx)(n.code,{children:"configureStore"}),"'s ",(0,r.jsx)(n.code,{children:"middleware"})," field."]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, the ",(0,r.jsx)(n.a,{href:"/redux-toolkit-zh/api/autoBatchEnhancer",children:(0,r.jsx)(n.code,{children:"autoBatchEnhancer"})}),' is included, to allow for "batching" of low priority action updates. This is used by ',(0,r.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/overview",children:"RTK Query"})," and should improve performance when using it."]}),"\n",(0,r.jsx)(n.p,{children:"Currently, the return value is"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const enhancers = [applyMiddleware, autoBatchEnhancer]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"customising-the-included-enhancers",children:"Customising the Included Enhancers"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getDefaultEnhancers"})," accepts an options object that allows customizing each enhancer (excluding the middleware enhancer) in two ways:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Each enhancer can be excluded from the result array by passing ",(0,r.jsx)(n.code,{children:"false"})," for its corresponding field"]}),"\n",(0,r.jsx)(n.li,{children:"Each enhancer can have its options customized by passing the matching options object for its corresponding field"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This example shows customising the autoBatch enhancer:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// file: reducer.ts noEmit\n\nexport default function rootReducer(state = {}, action: any) {\n  return state\n}\n\n// file: store.ts\nimport rootReducer from './reducer'\nimport { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers({\n      autoBatch: { type: 'tick' },\n    }),\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:'interface AutoBatchOptions {\n  // see "autoBatchEnhancer" page for options\n}\n\ninterface GetDefaultEnhancersOptions {\n  autoBatch?: boolean | AutoBatchOptions\n}\n\nfunction getDefaultEnhancers<M extends Middlewares<any>>(\n  options: GetDefaultEnhancersOptions = {},\n): EnhancerArray<[StoreEnhancer<{ dispatch: ExtractDispatchExtensions<M> }>]>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);