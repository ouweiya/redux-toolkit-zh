"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[3956],{5096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(4848),i=r(8453);const s={id:"persistence-and-rehydration",title:"Persistence and Rehydration",sidebar_label:"Persistence and Rehydration",hide_title:!0,description:"RTK Query > Usage > Persistence and Rehydration"},a="Persistence and Rehydration",o={id:"rtk-query/usage/persistence-and-rehydration",title:"Persistence and Rehydration",description:"RTK Query > Usage > Persistence and Rehydration",source:"@site/docs/rtk-query/usage/persistence-and-rehydration.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/persistence-and-rehydration",permalink:"/rtk-query/usage/persistence-and-rehydration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage/persistence-and-rehydration.mdx",tags:[],version:"current",frontMatter:{id:"persistence-and-rehydration",title:"Persistence and Rehydration",sidebar_label:"Persistence and Rehydration",hide_title:!0,description:"RTK Query > Usage > Persistence and Rehydration"},sidebar:"docs",previous:{title:"Server Side Rendering",permalink:"/rtk-query/usage/server-side-rendering"},next:{title:"Customizing createApi",permalink:"/rtk-query/usage/customizing-create-api"}},d={},c=[{value:"Redux Persist",id:"redux-persist",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\xa0"}),"\n",(0,n.jsx)(t.h1,{id:"persistence-and-rehydration",children:"Persistence and Rehydration"}),"\n",(0,n.jsxs)(t.p,{children:["RTK Query supports rehydration via the ",(0,n.jsx)(t.a,{href:"/rtk-query/api/createApi#extractrehydrationinfo",children:(0,n.jsx)(t.code,{children:"extractRehydrationInfo"})}),"\noption on ",(0,n.jsx)(t.a,{href:"/rtk-query/api/createApi",children:(0,n.jsx)(t.code,{children:"createApi"})}),". This function is passed every dispatched action,\nand where it returns a value other than ",(0,n.jsx)(t.code,{children:"undefined"}),", that value is used to rehydrate the API state\nfor fulfilled & errored queries."]}),"\n",(0,n.jsxs)(t.p,{children:["See also ",(0,n.jsx)(t.a,{href:"/rtk-query/usage/server-side-rendering",children:"Server Side Rendering"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Generally, persisting API slices is not recommended and instead, mechanisms like\n",(0,n.jsxs)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",children:[(0,n.jsx)(t.code,{children:"Cache-Control"})," Headers"]}),"\nshould be used in browsers to define cache behaviour.\nPersisting and rehydrating an api slice might always leave the user with very stale data if the user\nhas not visited the page for some time.\nNonetheless, in environments like Native Apps, where there is no browser cache to take care of this,\npersistance might still be a viable option."]})}),"\n",(0,n.jsx)(t.h2,{id:"redux-persist",children:"Redux Persist"}),"\n",(0,n.jsxs)(t.p,{children:["API state rehydration can be used in conjunction with ",(0,n.jsx)(t.a,{href:"https://github.com/rt2zz/redux-persist",children:"Redux Persist"}),"\nby leveraging the ",(0,n.jsx)(t.code,{children:"REHYDRATE"})," action type imported from ",(0,n.jsx)(t.code,{children:"redux-persist"}),". This can be used out of the\nbox with the ",(0,n.jsx)(t.code,{children:"autoMergeLevel1"})," or ",(0,n.jsx)(t.code,{children:"autoMergeLevel2"})," ",(0,n.jsx)(t.a,{href:"https://github.com/rt2zz/redux-persist#state-reconciler",children:"state reconcilers"}),"\nwhen persisting the root reducer, or with the ",(0,n.jsx)(t.code,{children:"autoMergeLevel1"})," reconciler when persisting just the api reducer."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="redux-persist rehydration example"',children:"import type { Action } from '@reduxjs/toolkit'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { REHYDRATE } from 'redux-persist'\n\ntype RootState = any // normally inferred from state\n\nfunction isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {\n  key: string\n  payload: RootState\n  err: unknown\n} {\n  return action.type === REHYDRATE\n}\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  // to prevent circular type issues, the return type needs to be annotated as any\n  extractRehydrationInfo(action, { reducerPath }): any {\n    if (isHydrateAction(action)) {\n      // when persisting the api reducer\n      if (action.key === 'key used with redux-persist') {\n        return action.payload\n      }\n\n      // When persisting the root reducer\n      return action.payload[api.reducerPath]\n    }\n  },\n  // highlight-end\n  endpoints: (build) => ({\n    // omitted\n  }),\n})\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);