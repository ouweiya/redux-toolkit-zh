"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[182],{8761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),o=n(8453);const r={id:"code-splitting",title:"\u4ee3\u7801\u5206\u5272",sidebar_label:"\u4ee3\u7801\u5206\u5272",hide_title:!0,description:"RTK Query > Usage > Code Splitting: dynamic injection of endpoints"},s="Code Splitting",a={id:"rtk-query/usage/code-splitting",title:"\u4ee3\u7801\u5206\u5272",description:"RTK Query > Usage > Code Splitting: dynamic injection of endpoints",source:"@site/docs/rtk-query/usage/code-splitting.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/code-splitting",permalink:"/redux-toolkit-zh/rtk-query/usage/code-splitting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage/code-splitting.mdx",tags:[],version:"current",frontMatter:{id:"code-splitting",title:"\u4ee3\u7801\u5206\u5272",sidebar_label:"\u4ee3\u7801\u5206\u5272",hide_title:!0,description:"RTK Query > Usage > Code Splitting: dynamic injection of endpoints"},sidebar:"docs",previous:{title:"\u6d41\u5f0f\u66f4\u65b0",permalink:"/redux-toolkit-zh/rtk-query/usage/streaming-updates"},next:{title:"\u4ee3\u7801\u751f\u6210",permalink:"/redux-toolkit-zh/rtk-query/usage/code-generation"}},d={},l=[];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\xa0"}),"\n",(0,i.jsx)(t.h1,{id:"code-splitting",children:"Code Splitting"}),"\n",(0,i.jsxs)(t.p,{children:["RTK Query makes it possible to trim down your initial bundle size by allowing you to inject additional endpoints after you've set up your initial service definition. This can be very beneficial for larger applications that may have ",(0,i.jsx)(t.em,{children:"many"})," endpoints."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"injectEndpoints"})," accepts a collection of endpoints, as well as an optional ",(0,i.jsx)(t.code,{children:"overrideExisting"})," parameter."]}),"\n",(0,i.jsxs)(t.p,{children:["Calling ",(0,i.jsx)(t.code,{children:"injectEndpoints"})," will inject the endpoints into the original API, but also give you that same API with correct types for these endpoints back. (Unfortunately, it cannot modify the types for the original definition.)"]}),"\n",(0,i.jsx)(t.p,{children:"A typical approach would be to have one empty central API slice definition:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="Basic setup"',children:"// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\n// initialize an empty api service that we'll inject endpoints into later as needed\nexport const emptySplitApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: () => ({}),\n})\n"})}),"\n",(0,i.jsx)(t.p,{children:"and then inject the api endpoints in other files and export them from there - that way you will be sure to always import the endpoints in a way that they are definitely injected."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="Injecting & exporting additional endpoints"',children:"// file: emptySplitApi.ts noEmit\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const emptySplitApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: () => ({}),\n})\n\n// file: extendedApi.ts\nimport { emptySplitApi } from './emptySplitApi'\n\nconst extendedApi = emptySplitApi.injectEndpoints({\n  endpoints: (build) => ({\n    example: build.query({\n      query: () => 'test',\n    }),\n  }),\n  overrideExisting: false,\n})\n\nexport const { useExampleQuery } = extendedApi\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you inject an endpoint that already exists and don't explicitly specify ",(0,i.jsx)(t.code,{children:"overrideExisting: true"}),", the endpoint\nwill not be overridden. In development mode, you will get a warning about this if ",(0,i.jsx)(t.code,{children:"overrideExisting"})," is set to ",(0,i.jsx)(t.code,{children:"false"}),",\nand an error will be throw if set to ",(0,i.jsx)(t.code,{children:"'throw'"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);