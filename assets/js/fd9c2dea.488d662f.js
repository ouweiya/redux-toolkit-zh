"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[782],{6205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),a=t(8453);const o={id:"overview",title:"Overview",sidebar_label:"API Slice Overview",hide_title:!0},s="Generated API Slices",r={id:"rtk-query/api/created-api/overview",title:"Overview",description:"&nbsp;",source:"@site/docs/rtk-query/api/created-api/overview.mdx",sourceDirName:"rtk-query/api/created-api",slug:"/rtk-query/api/created-api/overview",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/api/created-api/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",sidebar_label:"API Slice Overview",hide_title:!0},sidebar:"docs",previous:{title:"setupListeners",permalink:"/redux-toolkit-zh/rtk-query/api/setupListeners"},next:{title:"Redux Integration",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/redux-integration"}},d={},c=[{value:"API Slice Overview",id:"api-slice-overview",level:2},{value:"Redux Integration",id:"redux-integration",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Code Splitting and Generation",id:"code-splitting-and-generation",level:2},{value:"API Slice Utilities",id:"api-slice-utilities",level:2},{value:"Internal Actions",id:"internal-actions",level:2},{value:"React Hooks",id:"react-hooks",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\xa0"}),"\n",(0,i.jsx)(n.h1,{id:"generated-api-slices",children:"Generated API Slices"}),"\n",(0,i.jsx)(n.h2,{id:"api-slice-overview",children:"API Slice Overview"}),"\n",(0,i.jsxs)(n.p,{children:["When you call ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi",children:(0,i.jsx)(n.code,{children:"createApi"})}),', it automatically generates and returns an API service "slice" object structure containing Redux logic you can use to interact with the endpoints you defined. This slice object includes a reducer to manage cached data, a middleware to manage cache lifetimes and subscriptions, and selectors and thunks for each endpoint. If you imported ',(0,i.jsx)(n.code,{children:"createApi"})," from the React-specific entry point, it also includes auto-generated React hooks for use in your components."]}),"\n",(0,i.jsx)(n.p,{children:"This section documents the contents of that API structure, with the different fields grouped by category. The API types and descriptions are listed on separate pages for each category."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["Typically, you should only have one API slice per base URL that your application needs to communicate with. For example, if your site fetches data from both ",(0,i.jsx)(n.code,{children:"/api/posts"})," and ",(0,i.jsx)(n.code,{children:"/api/users"}),", you would have a single API slice with ",(0,i.jsx)(n.code,{children:"/api/"})," as the base URL, and separate endpoint definitions for ",(0,i.jsx)(n.code,{children:"posts"})," and ",(0,i.jsx)(n.code,{children:"users"}),". This allows you to effectively take advantage of ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching",children:"automated re-fetching"})," by defining ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching#tags",children:"tag"})," relationships across endpoints."]}),(0,i.jsxs)(n.p,{children:["For maintainability purposes, you may wish to split up endpoint definitions across multiple files, while still maintaining a single API slice which includes all of these endpoints. See ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/code-splitting",children:"code splitting"})," for how you can use the ",(0,i.jsx)(n.code,{children:"injectEndpoints"})," property to inject API endpoints from other files into a single API slice definition."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="API Slice Contents" no-transpile',children:"const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (build) => ({\n    // ...\n  }),\n})\n\ntype Api = {\n  // Redux integration\n  reducerPath: string\n  reducer: Reducer\n  middleware: Middleware\n\n  // Endpoint interactions\n  endpoints: Record<string, EndpointDefinition>\n\n  // Code splitting and generation\n  injectEndpoints: (options: InjectEndpointsOptions) => UpdatedApi\n  enhanceEndpoints: (options: EnhanceEndpointsOptions) => UpdatedApi\n\n  // Utilities\n  utils: {\n    updateQueryData: UpdateQueryDataThunk\n    patchQueryData: PatchQueryDataThunk\n    prefetch: PrefetchThunk\n    invalidateTags: ActionCreatorWithPayload<\n      Array<TagTypes | FullTagDescription<TagTypes>>,\n      string\n    >\n    selectInvalidatedBy: (\n      state: FullState,\n      tags: Array<TagTypes | FullTagDescription<TagTypes>>,\n    ) => Array<{\n      endpointName: string\n      originalArgs: any\n      queryCacheKey: string\n    }>\n    selectCachedArgsForQuery: (\n      state: FullState,\n      endpointName: EndpointName,\n    ) => Array<QueryArg>\n    resetApiState: ActionCreator<ResetAction>\n    getRunningQueryThunk(\n      endpointName: EndpointName,\n      args: QueryArg,\n    ): ThunkWithReturnValue<QueryActionCreatorResult | undefined>\n    getRunningMutationThunk(\n      endpointName: EndpointName,\n      fixedCacheKeyOrRequestId: string,\n    ): ThunkWithReturnValue<MutationActionCreatorResult | undefined>\n    getRunningQueriesThunk(): ThunkWithReturnValue<\n      Array<QueryActionCreatorResult<any>>\n    >\n    getRunningMutationsThunk(): ThunkWithReturnValue<\n      Array<MutationActionCreatorResult<any>>\n    >\n  }\n\n  // Internal actions\n  internalActions: InternalActions\n\n  // React hooks (if applicable)\n  [key in GeneratedReactHooks]: GeneratedReactHooks[key]\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"redux-integration",children:"Redux Integration"}),"\n",(0,i.jsxs)(n.p,{children:["Internally, ",(0,i.jsx)(n.code,{children:"createApi"})," will call ",(0,i.jsxs)(n.a,{href:"https://redux-toolkit.js.org/api/createSlice",children:["the Redux Toolkit ",(0,i.jsx)(n.code,{children:"createSlice"})," API"]})," to generate a slice reducer and corresponding action creators with the appropriate logic for caching fetched data. It also automatically generates a custom Redux middleware that manages subscription counts and cache lifetimes."]}),"\n",(0,i.jsxs)(n.p,{children:["The generated slice reducer and the middleware both need to be adding to your Redux store setup in ",(0,i.jsx)(n.code,{children:"configureStore"})," in order to work correctly."]}),"\n",(0,i.jsx)(n.admonition,{title:"API Reference",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/redux-integration",children:"API Slices: Redux Integration"})}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(n.p,{children:["The API slice object will have an ",(0,i.jsx)(n.code,{children:"endpoints"})," field inside. This section maps the endpoint names you provided to ",(0,i.jsx)(n.code,{children:"createApi"})," to the core Redux logic (thunks and selectors) used to trigger data fetches and read cached data for that endpoint. If you're using the React-specific version of ",(0,i.jsx)(n.code,{children:"createApi"}),", each endpoint definition will also contain the auto-generated React hooks for that endpoint."]}),"\n",(0,i.jsx)(n.admonition,{title:"API Reference",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/endpoints",children:"API Slices: Endpoints"})}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"code-splitting-and-generation",children:"Code Splitting and Generation"}),"\n",(0,i.jsxs)(n.p,{children:["Each API slice allows ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/code-splitting",children:"additional endpoint definitions to be injected at runtime"})," after the initial API slice has been defined. This can be beneficial for apps that may have ",(0,i.jsx)(n.em,{children:"many"})," endpoints."]}),"\n",(0,i.jsxs)(n.p,{children:["The individual API slice endpoint definitions can also be split across multiple files. This is primarily useful for working with API slices that were ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/code-generation",children:"code-generated from an API schema file"}),", allowing you to add additional custom behavior and configuration to a set of automatically-generated endpoint definitions."]}),"\n",(0,i.jsxs)(n.p,{children:["Each API slice object has ",(0,i.jsx)(n.code,{children:"injectEndpoints"})," and ",(0,i.jsx)(n.code,{children:"enhanceEndpoints"})," functions to support these use cases."]}),"\n",(0,i.jsx)(n.admonition,{title:"API Reference",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/code-splitting",children:"API Slices: Code Splitting and Generation"})}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"api-slice-utilities",children:"API Slice Utilities"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"util"})," field includes various utility functions that can be used to manage the cache, including\nmanually updating query cache data, triggering pre-fetching of data, manually invalidating tags,\nand manually resetting the api state, as well as other utility functions that can be used in\nvarious scenarios, including SSR."]}),"\n",(0,i.jsx)(n.admonition,{title:"API Reference",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/api-slice-utils",children:"API Slices: Utilities"})}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"internal-actions",children:"Internal Actions"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"internalActions"})," field contains a set of additional thunks that are used for internal behavior, such as managing updates based on focus."]}),"\n",(0,i.jsx)(n.h2,{id:"react-hooks",children:"React Hooks"}),"\n",(0,i.jsxs)(n.p,{children:["The core RTK Query ",(0,i.jsx)(n.code,{children:"createApi"})," method is UI-agnostic, in the same way that the Redux core library and Redux Toolkit are UI-agnostic. They are all plain JS logic that can be used anywhere."]}),"\n",(0,i.jsxs)(n.p,{children:["However, RTK Query also provides the ability to auto-generate React hooks for each of your endpoints. Since this specifically depends on React itself, RTK Query provides an alternate entry point that exposes a customized version of ",(0,i.jsx)(n.code,{children:"createApi"})," that includes that functionality:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { createApi } from '@reduxjs/toolkit/query/react'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you have used the React-specific version of ",(0,i.jsx)(n.code,{children:"createApi"}),", the generated ",(0,i.jsx)(n.code,{children:"Api"})," slice structure will also contain a set of React hooks. These endpoint hooks are available as ",(0,i.jsx)(n.code,{children:"api.endpoints[endpointName].useQuery"})," or ",(0,i.jsx)(n.code,{children:"api.endpoints[endpointName].useMutation"}),", matching how you defined that endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:["The same hooks are also added to the ",(0,i.jsx)(n.code,{children:"Api"})," object itself, and given auto-generated names based on the endpoint name and query/mutation type."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you had endpoints for ",(0,i.jsx)(n.code,{children:"getPosts"})," and ",(0,i.jsx)(n.code,{children:"updatePost"}),", these options would be available:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="Generated React Hook names" no-transpile',children:"// Hooks attached to the endpoint definition\nconst { data } = api.endpoints.getPosts.useQuery()\nconst { data } = api.endpoints.updatePost.useMutation()\n\n// Same hooks, but given unique names and attached to the API slice object\nconst { data } = api.useGetPostsQuery()\nconst [updatePost] = api.useUpdatePostMutation()\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The React-specific version of ",(0,i.jsx)(n.code,{children:"createApi"})," also generates a ",(0,i.jsx)(n.code,{children:"usePrefetch"})," hook, attached to the ",(0,i.jsx)(n.code,{children:"Api"})," object, which can be used to initiate fetching data ahead of time."]}),"\n",(0,i.jsx)(n.admonition,{title:"API Reference",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks",children:"API Slices: React Hooks"})}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);