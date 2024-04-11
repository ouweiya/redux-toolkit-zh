"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7060],{929:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=r(4848),o=r(8453);const c={id:"getDefaultEnhancers",title:"\u83b7\u53d6\u9ed8\u8ba4\u589e\u5f3a\u5668",sidebar_label:"\u83b7\u53d6\u9ed8\u8ba4\u589e\u5f3a\u5668",hide_title:!0},i="getDefaultEnhancers",s={id:"api/getDefaultEnhancers",title:"\u83b7\u53d6\u9ed8\u8ba4\u589e\u5f3a\u5668",description:"&nbsp;",source:"@site/docs/api/getDefaultEnhancers.mdx",sourceDirName:"api",slug:"/api/getDefaultEnhancers",permalink:"/redux-toolkit-zh/api/getDefaultEnhancers",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/api/getDefaultEnhancers.mdx",tags:[],version:"current",frontMatter:{id:"getDefaultEnhancers",title:"\u83b7\u53d6\u9ed8\u8ba4\u589e\u5f3a\u5668",sidebar_label:"\u83b7\u53d6\u9ed8\u8ba4\u589e\u5f3a\u5668",hide_title:!0},sidebar:"docs",previous:{title:"\u521b\u5efa\u52a8\u6001\u4e2d\u95f4\u4ef6",permalink:"/redux-toolkit-zh/api/createDynamicMiddleware"},next:{title:"\u81ea\u52a8\u6279\u5904\u7406\u589e\u5f3a\u5668",permalink:"/redux-toolkit-zh/api/autoBatchEnhancer"}},a={},l=[{value:"\u9884\u671f\u7528\u6cd5",id:"\u9884\u671f\u7528\u6cd5",level:2},{value:"\u5305\u542b\u7684\u9ed8\u8ba4\u589e\u5f3a\u5668",id:"\u5305\u542b\u7684\u9ed8\u8ba4\u589e\u5f3a\u5668",level:2},{value:"\u81ea\u5b9a\u4e49\u5305\u542b\u7684\u589e\u5f3a\u5668",id:"\u81ea\u5b9a\u4e49\u5305\u542b\u7684\u589e\u5f3a\u5668",level:2},{value:"API \u53c2\u8003",id:"api-\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\xa0"}),"\n",(0,t.jsx)(n.h1,{id:"getdefaultenhancers",children:(0,t.jsx)(n.code,{children:"getDefaultEnhancers"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u9ed8\u8ba4\u589e\u5f3a\u5668\u5217\u8868\u7684\u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u9884\u671f\u7528\u6cd5",children:"\u9884\u671f\u7528\u6cd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/configureStore",children:(0,t.jsx)(n.code,{children:"configureStore"})})," \u4f1a\u81ea\u52a8\u5411 Redux store \u8bbe\u7f6e\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u589e\u5f3a\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const store = configureStore({\n  reducer: rootReducer,\n})\n\n// Store \u5df2\u6dfb\u52a0\u589e\u5f3a\u5668\uff0c\u56e0\u4e3a\u589e\u5f3a\u5668\u5217\u8868\u672a\u8fdb\u884c\u81ea\u5b9a\u4e49\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u81ea\u5b9a\u4e49\u589e\u5f3a\u5668\u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u5411 ",(0,t.jsx)(n.code,{children:"configureStore"})," \u63d0\u4f9b\u4e00\u4e2a\u589e\u5f3a\u5668\u51fd\u6570\u7684\u6570\u7ec4\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const store = configureStore({\n  reducer: rootReducer,\n  enhancers: () => new Tuple(offline(offlineConfig)),\n})\n\n// store \u7279\u522b\u5e94\u7528\u4e86\u79bb\u7ebf\u589e\u5f3a\u5668\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u5f53\u4f60\u63d0\u4f9b ",(0,t.jsx)(n.code,{children:"enhancer"})," \u9009\u9879\u65f6\uff0c\u4f60\u9700\u8981\u5b9a\u4e49\u4f60\u60f3\u6dfb\u52a0\u5230 store \u7684 ",(0,t.jsx)(n.em,{children:"\u6240\u6709"})," \u589e\u5f3a\u5668\uff08\u9664\u4e86 ",(0,t.jsx)(n.a,{href:"./configureStore#devtools",children:"devtools"}),"\uff09\u3002",(0,t.jsx)(n.code,{children:"configureStore"})," \u4e0d\u4f1a\u6dfb\u52a0\u4f60\u5217\u51fa\u7684\u4efb\u4f55\u989d\u5916\u589e\u5f3a\u5668\uff0c",(0,t.jsx)(n.strong,{children:"\u5305\u62ec\u4e2d\u95f4\u4ef6\u589e\u5f3a\u5668"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u6dfb\u52a0\u4e00\u4e9b\u81ea\u5b9a\u4e49\u589e\u5f3a\u5668\uff0c\u4f46\u4e5f\u4ecd\u7136\u60f3\u6dfb\u52a0\u9ed8\u8ba4\u589e\u5f3a\u5668\uff0c",(0,t.jsx)(n.code,{children:"getDefaultEnhancers"})," \u5c31\u5f88\u6709\u7528\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"import { configureStore } from '@reduxjs/toolkit'\nimport { offline } from '@redux-offline/redux-offline'\nimport offlineConfig from '@redux-offline/redux-offline/lib/defaults'\n\nimport rootReducer from './reducer'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers().concat(offline(offlineConfig)),\n})\n\n// Store \u6dfb\u52a0\u4e86\u6240\u6709\u9ed8\u8ba4\u7684\u4e2d\u95f4\u4ef6 + \u589e\u5f3a\u5668\uff0c_\u4ee5\u53ca_ \u79bb\u7ebf\u589e\u5f3a\u5668\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5305\u542b\u7684\u9ed8\u8ba4\u589e\u5f3a\u5668",children:"\u5305\u542b\u7684\u9ed8\u8ba4\u589e\u5f3a\u5668"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ed3\u679c\u6570\u7ec4\u5c06\u59cb\u7ec8\u5305\u542b\u57fa\u4e8e ",(0,t.jsx)(n.code,{children:"configureStore"})," \u7684 ",(0,t.jsx)(n.code,{children:"middleware"})," \u5b57\u6bb5\u521b\u5efa\u7684 ",(0,t.jsx)(n.code,{children:"applyMiddleware"})," \u589e\u5f3a\u5668\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u8fd8\u5305\u62ec ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/autoBatchEnhancer",children:(0,t.jsx)(n.code,{children:"autoBatchEnhancer"})}),'\uff0c\u4ee5\u5141\u8bb8\u5bf9\u4f4e\u4f18\u5148\u7ea7\u7684\u52a8\u4f5c\u66f4\u65b0\u8fdb\u884c"\u6279\u5904\u7406"\u3002\u8fd9\u88ab ',(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/overview",children:"RTK Query"})," \u4f7f\u7528\uff0c\u5e76\u5e94\u5728\u4f7f\u7528\u65f6\u63d0\u9ad8\u6027\u80fd\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\uff0c\u8fd4\u56de\u503c\u662f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const enhancers = [applyMiddleware, autoBatchEnhancer]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u5305\u542b\u7684\u589e\u5f3a\u5668",children:"\u81ea\u5b9a\u4e49\u5305\u542b\u7684\u589e\u5f3a\u5668"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getDefaultEnhancers"})," \u63a5\u53d7\u4e00\u4e2a\u9009\u9879\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5141\u8bb8\u4ee5\u4e24\u79cd\u65b9\u5f0f\u81ea\u5b9a\u4e49\u6bcf\u4e2a\u589e\u5f3a\u5668\uff08\u4e0d\u5305\u62ec\u4e2d\u95f4\u4ef6\u589e\u5f3a\u5668\uff09\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u901a\u8fc7\u4e3a\u5176\u5bf9\u5e94\u5b57\u6bb5\u4f20\u9012 ",(0,t.jsx)(n.code,{children:"false"}),"\uff0c\u53ef\u4ee5\u4ece\u7ed3\u679c\u6570\u7ec4\u4e2d\u6392\u9664\u6bcf\u4e2a\u589e\u5f3a\u5668"]}),"\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7\u4e3a\u5176\u5bf9\u5e94\u5b57\u6bb5\u4f20\u9012\u5339\u914d\u7684\u9009\u9879\u5bf9\u8c61\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6bcf\u4e2a\u589e\u5f3a\u5668\u7684\u9009\u9879"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u81ea\u5b9a\u4e49 autoBatch \u589e\u5f3a\u5668\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// \u6587\u4ef6: reducer.ts noEmit\n\nexport default function rootReducer(state = {}, action: any) {\n  return state\n}\n\n// \u6587\u4ef6: store.ts\nimport rootReducer from './reducer'\nimport { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers({\n      autoBatch: { type: 'tick' },\n    }),\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api-\u53c2\u8003",children:"API \u53c2\u8003"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:'interface AutoBatchOptions {\n  // \u53c2\u89c1 "autoBatchEnhancer" \u9875\u9762\u7684\u9009\u9879\n}\n\ninterface GetDefaultEnhancersOptions {\n  autoBatch?: boolean | AutoBatchOptions\n}\n\nfunction getDefaultEnhancers<M extends Middlewares<any>>(\n  options: GetDefaultEnhancersOptions = {},\n): EnhancerArray<[StoreEnhancer<{ dispatch: ExtractDispatchExtensions<M> }>]>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(6540);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);