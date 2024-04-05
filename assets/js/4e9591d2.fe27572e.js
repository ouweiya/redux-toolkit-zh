"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7848],{3873:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(4848),t=n(8453);const s={id:"server-side-rendering",title:"\u670d\u52a1\u5668\u7aef\u6e32\u67d3",sidebar_label:"\u670d\u52a1\u5668\u7aef\u6e32\u67d3",hide_title:!0,description:"RTK Query > Usage > Server Side Rendering"},o="Server Side Rendering",a={id:"rtk-query/usage/server-side-rendering",title:"\u670d\u52a1\u5668\u7aef\u6e32\u67d3",description:"RTK Query > Usage > Server Side Rendering",source:"@site/docs/rtk-query/usage/server-side-rendering.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/server-side-rendering",permalink:"/redux-toolkit-zh/rtk-query/usage/server-side-rendering",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage/server-side-rendering.mdx",tags:[],version:"current",frontMatter:{id:"server-side-rendering",title:"\u670d\u52a1\u5668\u7aef\u6e32\u67d3",sidebar_label:"\u670d\u52a1\u5668\u7aef\u6e32\u67d3",hide_title:!0,description:"RTK Query > Usage > Server Side Rendering"},sidebar:"docs",previous:{title:"\u4ee3\u7801\u751f\u6210",permalink:"/redux-toolkit-zh/rtk-query/usage/code-generation"},next:{title:"\u6301\u4e45\u5316\u548c\u91cd\u65b0\u6ce8\u5165",permalink:"/redux-toolkit-zh/rtk-query/usage/persistence-and-rehydration"}},d={},c=[{value:"Server Side Rendering with Next.js",id:"server-side-rendering-with-nextjs",level:2},{value:"Server Side Rendering elsewhere",id:"server-side-rendering-elsewhere",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"\xa0"}),"\n",(0,i.jsx)(r.h1,{id:"server-side-rendering",children:"Server Side Rendering"}),"\n",(0,i.jsx)(r.h2,{id:"server-side-rendering-with-nextjs",children:"Server Side Rendering with Next.js"}),"\n",(0,i.jsxs)(r.p,{children:["RTK Query supports Server Side Rendering (SSR) with ",(0,i.jsx)(r.a,{href:"https://nextjs.org/",children:"Next.js"})," via\n",(0,i.jsx)(r.a,{href:"/redux-toolkit-zh/rtk-query/usage/persistence-and-rehydration",children:"rehydration"})," in combination with\n",(0,i.jsx)(r.a,{href:"https://github.com/kirill-konshin/next-redux-wrapper",children:"next-redux-wrapper"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The workflow is as follows:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Set up ",(0,i.jsx)(r.code,{children:"next-redux-wrapper"})]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["In ",(0,i.jsx)(r.code,{children:"getStaticProps"})," or ",(0,i.jsx)(r.code,{children:"getServerSideProps"}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Pre-fetch all queries via the ",(0,i.jsx)(r.code,{children:"initiate"})," actions, e.g. ",(0,i.jsx)(r.code,{children:"store.dispatch(api.endpoints.getPokemonByName.initiate(name))"})]}),"\n",(0,i.jsxs)(r.li,{children:["Wait for each query to finish using ",(0,i.jsx)(r.code,{children:"await Promise.all(dispatch(api.util.getRunningQueriesThunk()))"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["In your ",(0,i.jsx)(r.code,{children:"createApi"})," call, configure rehydration using the ",(0,i.jsx)(r.code,{children:"extractRehydrationInfo"})," option:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"// \u4ee3\u7801\u5757\u5143\u6570\u636e \u6807\u9898=\"next-redux-wrapper \u91cd\u65b0\u586b\u5145\u793a\u4f8b\"\nimport type { Action, PayloadAction } from '@reduxjs/toolkit'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { HYDRATE } from 'next-redux-wrapper'\n\ntype RootState = any; // \u901a\u5e38\u4ece\u72b6\u6001\u63a8\u65ad\n\nfunction isHydrateAction(action: Action): action is PayloadAction<RootState> {\n  return action.type === HYDRATE\n}\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // \u9ad8\u4eae\u5f00\u59cb\n  extractRehydrationInfo(action, { reducerPath }): any {\n    if (isHydrateAction(action)) {\n      return action.payload[reducerPath]\n    }\n  },\n  // \u9ad8\u4eae\u7ed3\u675f\n  endpoints: (build) => ({\n    // \u7701\u7565\n  }),\n})\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["An example repo using ",(0,i.jsx)(r.code,{children:"next.js"})," is available ",(0,i.jsx)(r.a,{href:"https://github.com/phryneas/ssr-experiments/tree/main/nextjs-blog",children:"here"}),"."]}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["While memory leaks are not anticipated, once a render is sent to the client and the store is being\nremoved from memory, you may wish to also call ",(0,i.jsx)(r.code,{children:"store.dispatch(api.util.resetApiState())"})," to\nensure that no rogue timers are left running."]})}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["In order to avoid providing stale data with Static Site Generation (SSG), you may wish to set\n",(0,i.jsx)(r.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#refetchonmountorargchange",children:(0,i.jsx)(r.code,{children:"refetchOnMountOrArgChange"})})," to a reasonable value\nsuch as 900 (seconds) in order to allow data to be re-fetched when accessed if it has been that\nlong since the page was generated."]})}),"\n",(0,i.jsx)(r.h2,{id:"server-side-rendering-elsewhere",children:"Server Side Rendering elsewhere"}),"\n",(0,i.jsxs)(r.p,{children:["If you are not using ",(0,i.jsx)(r.code,{children:"next.js"}),", and the example above cannot be adapted to your SSR framework,\nan ",(0,i.jsx)(r.code,{children:"unstable__"})," marked approach is available to support SSR scenarios where you need to execute\nasync code during render and not safely in an effect.\nThis is a similar approach to using ",(0,i.jsx)(r.a,{href:"https://www.apollographql.com/docs/react/performance/server-side-rendering/#executing-queries-with-getdatafromtree",children:(0,i.jsx)(r.code,{children:"getDataFromTree"})}),"\nwith ",(0,i.jsx)(r.a,{href:"https://www.apollographql.com/docs/",children:"Apollo"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The workflow is as follows:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Create a version of ",(0,i.jsx)(r.code,{children:"createApi"})," that performs asynchronous work during render:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"import {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule\n} from '@reduxjs/toolkit/query/react'\n\nconst createApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({ unstable__sideEffectsInRender: true })\n)\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Use your custom ",(0,i.jsx)(r.code,{children:"createApi"})," when calling ",(0,i.jsx)(r.code,{children:"const api = createApi({...})"})]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Wait for all queries to finish using ",(0,i.jsx)(r.code,{children:"await Promise.all(dispatch(api.util.getRunningQueriesThunk()))"})," before performing the next render cycle"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var i=n(6540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);