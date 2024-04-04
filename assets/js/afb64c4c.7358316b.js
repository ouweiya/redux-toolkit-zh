"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[3826],{8931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var r=n(4848),i=n(8453);const s={id:"cache-behavior",title:"\u7f13\u5b58\u884c\u4e3a",sidebar_label:"\u7f13\u5b58\u884c\u4e3a",hide_title:!0,description:"RTK Query > Usage > Cache Behavior: defaults, cache lifetimes, and tradeoffs"},o="Cache Behavior",a={id:"rtk-query/usage/cache-behavior",title:"\u7f13\u5b58\u884c\u4e3a",description:"RTK Query > Usage > Cache Behavior: defaults, cache lifetimes, and tradeoffs",source:"@site/docs/rtk-query/usage/cache-behavior.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/cache-behavior",permalink:"/redux-toolkit-zh/rtk-query/usage/cache-behavior",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage/cache-behavior.mdx",tags:[],version:"current",frontMatter:{id:"cache-behavior",title:"\u7f13\u5b58\u884c\u4e3a",sidebar_label:"\u7f13\u5b58\u884c\u4e3a",hide_title:!0,description:"RTK Query > Usage > Cache Behavior: defaults, cache lifetimes, and tradeoffs"},sidebar:"docs",previous:{title:"\u53d8\u66f4",permalink:"/redux-toolkit-zh/rtk-query/usage/mutations"},next:{title:"\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6",permalink:"/redux-toolkit-zh/rtk-query/usage/automated-refetching"}},c={},h=[{value:"Default Cache Behavior",id:"default-cache-behavior",level:2},{value:"Cache lifetime &amp; subscription example",id:"cache-lifetime--subscription-example",level:3},{value:"Manipulating Cache Behavior",id:"manipulating-cache-behavior",level:2},{value:"Reducing subscription time with <code>keepUnusedDataFor</code>",id:"reducing-subscription-time-with-keepunuseddatafor",level:3},{value:"Re-fetching on demand with <code>refetch</code>/<code>initiate</code>",id:"re-fetching-on-demand-with-refetchinitiate",level:3},{value:"Encouraging re-fetching with <code>refetchOnMountOrArgChange</code>",id:"encouraging-re-fetching-with-refetchonmountorargchange",level:3},{value:"Re-fetching on window focus with <code>refetchOnFocus</code>",id:"re-fetching-on-window-focus-with-refetchonfocus",level:3},{value:"Re-fetching on network reconnection with <code>refetchOnReconnect</code>",id:"re-fetching-on-network-reconnection-with-refetchonreconnect",level:3},{value:"Re-fetching after mutations by invalidating cache tags",id:"re-fetching-after-mutations-by-invalidating-cache-tags",level:3},{value:"Tradeoffs",id:"tradeoffs",level:2},{value:"No Normalized or De-duplicated Cache",id:"no-normalized-or-de-duplicated-cache",level:3},{value:"Further information",id:"further-information",level:3},{value:"Examples",id:"examples",level:2},{value:"Cache Subscription Lifetime Demo",id:"cache-subscription-lifetime-demo",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\xa0"}),"\n",(0,r.jsx)(t.h1,{id:"cache-behavior",children:"Cache Behavior"}),"\n",(0,r.jsx)(t.p,{children:"A key feature of RTK Query is its management of cached data. When data is fetched from the server, RTK Query will store the data in the Redux store as a 'cache'. When an additional request is performed for the same data, RTK Query will provide the existing cached data rather than sending an additional request to the server."}),"\n",(0,r.jsx)(t.p,{children:"RTK Query provides a number of concepts and tools to manipulate the cache behaviour and adjust it to your needs."}),"\n",(0,r.jsx)(t.h2,{id:"default-cache-behavior",children:"Default Cache Behavior"}),"\n",(0,r.jsx)(t.p,{children:"With RTK Query, caching is based on:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"API endpoint definitions"}),"\n",(0,r.jsx)(t.li,{children:"The serialized query parameters used when components subscribe to data from an endpoint"}),"\n",(0,r.jsx)(t.li,{children:"Active subscription reference counts"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When a subscription is started, the parameters used with the endpoint are serialized and stored internally as a ",(0,r.jsx)(t.code,{children:"queryCacheKey"})," for the request. Any future request that produces the same ",(0,r.jsx)(t.code,{children:"queryCacheKey"})," (i.e. called with the same parameters, factoring serialization) will be de-duped against the original, and will share the same data and updates. i.e. two separate components performing the same request will use the same cached data."]}),"\n",(0,r.jsx)(t.p,{children:"When a request is attempted, if the data already exists in the cache, then that data is served and no new request is sent to the server. Otherwise, if the data does not exist in the cache, then a new request is sent, and the returned response is stored in the cache."}),"\n",(0,r.jsxs)(t.p,{children:["Subscriptions are reference-counted. Additional subscriptions that ask for the same endpoint+params increment the reference count. As long as there is an active 'subscription' to the data (e.g. if a component is mounted that calls a ",(0,r.jsx)(t.code,{children:"useQuery"})," hook for the endpoint), then the data will remain in the cache. Once the subscription is removed (e.g. when last component subscribed to the data unmounts), after an amount of time (default 60 seconds), the data will be removed from the cache. The expiration time can be configured with the ",(0,r.jsx)(t.code,{children:"keepUnusedDataFor"})," property for the ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#keepunuseddatafor",children:"API definition as a whole"}),", as well as on a ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#keepunuseddatafor-1",children:"per-endpoint"})," basis."]}),"\n",(0,r.jsx)(t.h3,{id:"cache-lifetime--subscription-example",children:"Cache lifetime & subscription example"}),"\n",(0,r.jsxs)(t.p,{children:["Imagine an endpoint that expects an ",(0,r.jsx)(t.code,{children:"id"})," as the query param, and 4 components mounted which are requesting data from this same endpoint:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"import { useGetUserQuery } from './api.ts'\n\nfunction ComponentOne() {\n  // component subscribes to the data\n  const { data } = useGetUserQuery(1)\n\n  return <div>...</div>\n}\n\nfunction ComponentTwo() {\n  // component subscribes to the data\n  const { data } = useGetUserQuery(2)\n\n  return <div>...</div>\n}\n\nfunction ComponentThree() {\n  // component subscribes to the data\n  const { data } = useGetUserQuery(3)\n\n  return <div>...</div>\n}\n\nfunction ComponentFour() {\n  // component subscribes to the *same* data as ComponentThree,\n  // as it has the same query parameters\n  const { data } = useGetUserQuery(3)\n\n  return <div>...</div>\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["While four components are subscribed to the endpoint, there are only three distinct combinations of endpoint + query parameters. Query parameters ",(0,r.jsx)(t.code,{children:"1"})," and ",(0,r.jsx)(t.code,{children:"2"})," will each have a single subscriber, while query parameter ",(0,r.jsx)(t.code,{children:"3"})," has two subscribers. RTK Query will make three distinct fetches; one for each unique set of query parameters per endpoint."]}),"\n",(0,r.jsxs)(t.p,{children:["Data is kept in the cache as long as at least one active subscriber is interested in that endpoint + parameter combination. When the subscriber reference count reaches zero, a timer is set, and if there are no new subscriptions to that data by the time the timer expires, the cached data will be removed. The default expiration is 60 seconds, which can be configured both for the ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#keepunuseddatafor",children:"API definition as a whole"}),", as well as on a ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#keepunuseddatafor-1",children:"per-endpoint"})," basis."]}),"\n",(0,r.jsxs)(t.p,{children:["If 'ComponentThree' is unmounted in the example above, regardless of how much time passes, the data will remain in the cache due to 'ComponentFour' still being subscribed to the same data, and the subscribe reference count will be ",(0,r.jsx)(t.code,{children:"1"}),". However, once 'ComponentFour' unmounts, the subscriber reference count will be ",(0,r.jsx)(t.code,{children:"0"}),". The data will remain in the cache for the remainder of the expiration time. If no new subscription has been created before the timer expires, the cached data will finally be removed."]}),"\n",(0,r.jsx)(t.h2,{id:"manipulating-cache-behavior",children:"Manipulating Cache Behavior"}),"\n",(0,r.jsx)(t.p,{children:"On top of the default behaviour, RTK Query provides a number of methods to re-fetch data earlier in scenarios where it should be considered invalid, or is otherwise deemed suitable to be 'refreshed'."}),"\n",(0,r.jsxs)(t.h3,{id:"reducing-subscription-time-with-keepunuseddatafor",children:["Reducing subscription time with ",(0,r.jsx)(t.code,{children:"keepUnusedDataFor"})]}),"\n",(0,r.jsxs)(t.p,{children:["As mentioned above under ",(0,r.jsx)(t.a,{href:"#default-cache-behavior",children:"Default Cache Behavior"})," and ",(0,r.jsx)(t.a,{href:"#cache-lifetime--subscription-example",children:"Cache lifetime & subscription example"}),", by default, data will remain in the cache for 60 seconds after the subscriber reference count hits zero."]}),"\n",(0,r.jsxs)(t.p,{children:["This value can be configured using the ",(0,r.jsx)(t.code,{children:"keepUnusedDataFor"})," option for both the API definition, as well as per-endpoint. Note that the per-endpoint version, if provided, will overrule a setting on the API definition."]}),"\n",(0,r.jsxs)(t.p,{children:["Providing a value to ",(0,r.jsx)(t.code,{children:"keepUnusedDataFor"})," as a number in seconds specifies how long the data should be kept in the cache after the subscriber reference count reaches zero."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="keepUnusedDataFor configuration"',children:"// file: types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// file: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Post } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  // global configuration for the api\n  keepUnusedDataFor: 30,\n  // highlight-end\n  endpoints: (builder) => ({\n    getPosts: builder.query<Post[], number>({\n      query: () => `posts`,\n      // highlight-start\n      // configuration for an individual endpoint, overriding the api setting\n      keepUnusedDataFor: 5,\n      // highlight-end\n    }),\n  }),\n})\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"re-fetching-on-demand-with-refetchinitiate",children:["Re-fetching on demand with ",(0,r.jsx)(t.code,{children:"refetch"}),"/",(0,r.jsx)(t.code,{children:"initiate"})]}),"\n",(0,r.jsxs)(t.p,{children:["In order to achieve complete granular control over re-fetching data, you can use the ",(0,r.jsx)(t.code,{children:"refetch"})," function returned as a result property from a ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usequery",children:(0,r.jsx)(t.code,{children:"useQuery"})})," or ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usequerysubscription",children:(0,r.jsx)(t.code,{children:"useQuerySubscription"})})," hook."]}),"\n",(0,r.jsxs)(t.p,{children:["Calling the ",(0,r.jsx)(t.code,{children:"refetch"})," function will force refetch the associated query."]}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, you can dispatch the ",(0,r.jsx)(t.code,{children:"initiate"})," thunk action for an endpoint, passing the option ",(0,r.jsx)(t.code,{children:"forceRefetch: true"})," to the thunk action creator for the same effect."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'no-transpile title="Force refetch example"',children:"import { useDispatch } from 'react-redux'\nimport { useGetPostsQuery } from './api'\n\nconst Component = () => {\n  const dispatch = useDispatch()\n  const { data, refetch } = useGetPostsQuery({ count: 5 })\n\n  function handleRefetchOne() {\n    // force re-fetches the data\n    refetch()\n  }\n\n  function handleRefetchTwo() {\n    // has the same effect as `refetch` for the associated query\n    dispatch(\n      api.endpoints.getPosts.initiate(\n        { count: 5 },\n        { subscribe: false, forceRefetch: true },\n      ),\n    )\n  }\n\n  return (\n    <div>\n      <button onClick={handleRefetchOne}>Force re-fetch 1</button>\n      <button onClick={handleRefetchTwo}>Force re-fetch 2</button>\n    </div>\n  )\n}\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"encouraging-re-fetching-with-refetchonmountorargchange",children:["Encouraging re-fetching with ",(0,r.jsx)(t.code,{children:"refetchOnMountOrArgChange"})]}),"\n",(0,r.jsxs)(t.p,{children:["Queries can be encouraged to re-fetch more frequently than usual via the ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#refetchonmountorargchange",children:(0,r.jsx)(t.code,{children:"refetchOnMountOrArgChange"})})," property. This can be passed to the endpoint as a whole, to individual hook calls, or when dispatching the ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/endpoints#initiate",children:(0,r.jsx)(t.code,{children:"initiate"})})," action (the name of the action creator's option is ",(0,r.jsx)(t.code,{children:"forceRefetch"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"refetchOnMountOrArgChange"})," is used to encourage re-fetching in additional situations where the default behavior would instead serve cached data."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"refetchOnMountOrArgChange"})," accepts either a boolean value, or a number as time in seconds."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing ",(0,r.jsx)(t.code,{children:"false"})," (the default value) for this property will use the default behavior ",(0,r.jsx)(t.a,{href:"#default-cache-behavior",children:"described above"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing ",(0,r.jsx)(t.code,{children:"true"})," for this property will cause the endpoint to always refetch when a new subscriber to the query is added. If passed to an individual hook call and not the api definition itself, then this applies only to that hook call. I.e., when the component calling the hook mounts, or the argument changes, it will always refetch, regardless of whether cached data for the endpoint + arg combination already exists."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing a ",(0,r.jsx)(t.code,{children:"number"})," as a value in seconds will use the following behavior:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["At the time a query subscription is created:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"if there is an existing query in the cache, it will compare the current time vs the last fulfilled timestamp for that query,"}),"\n",(0,r.jsx)(t.li,{children:"It will refetch if the provided amount of time in seconds has elapsed."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"If there is no query, it will fetch the data."}),"\n",(0,r.jsx)(t.li,{children:"If there is an existing query, but the amount of time specified since the last query has not elapsed, it will serve the existing cached data."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="Configuring re-fetching on subscription if data exceeds a given time"',children:"// file: types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// file: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Post } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  // global configuration for the api\n  refetchOnMountOrArgChange: 30,\n  // highlight-end\n  endpoints: (builder) => ({\n    getPosts: builder.query<Post[], number>({\n      query: () => `posts`,\n    }),\n  }),\n})\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'no-transpile title="Forcing refetch on component mount"',children:"import { useGetPostsQuery } from './api'\n\nconst Component = () => {\n  const { data } = useGetPostsQuery(\n    { count: 5 },\n    // highlight-start\n    // this overrules the api definition setting,\n    // forcing the query to always fetch when this component is mounted\n    { refetchOnMountOrArgChange: true },\n    // highlight-end\n  )\n\n  return <div>...</div>\n}\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"re-fetching-on-window-focus-with-refetchonfocus",children:["Re-fetching on window focus with ",(0,r.jsx)(t.code,{children:"refetchOnFocus"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#refetchonfocus",children:(0,r.jsx)(t.code,{children:"refetchOnFocus"})})," option allows you to control whether RTK Query will try to refetch all subscribed queries after the application window regains focus."]}),"\n",(0,r.jsxs)(t.p,{children:["If you specify this option alongside ",(0,r.jsx)(t.code,{children:"skip: true"}),", this will not be evaluated until skip is false."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that this requires ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/setupListeners",children:(0,r.jsx)(t.code,{children:"setupListeners"})})," to have been called."]}),"\n",(0,r.jsxs)(t.p,{children:["This option is available on both the api definition with ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi",children:(0,r.jsx)(t.code,{children:"createApi"})}),", as well as on the ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usequery",children:(0,r.jsx)(t.code,{children:"useQuery"})}),", ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usequerysubscription",children:(0,r.jsx)(t.code,{children:"useQuerySubscription"})}),", ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#uselazyquery",children:(0,r.jsx)(t.code,{children:"useLazyQuery"})}),", and ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#uselazyquerysubscription",children:(0,r.jsx)(t.code,{children:"useLazyQuerySubscription"})})," hooks."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/services/api.ts"',children:"// file: src/services/types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// file: src/services/api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Post } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  // global configuration for the api\n  refetchOnFocus: true,\n  // highlight-end\n  endpoints: (builder) => ({\n    getPosts: builder.query<Post[], number>({\n      query: () => `posts`,\n    }),\n  }),\n})\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/store.ts"',children:"// file: src/services/types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// file: src/services/api.ts noEmit\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Post } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  // global configuration for the api\n  refetchOnFocus: true,\n  // highlight-end\n  endpoints: (builder) => ({\n    getPosts: builder.query<Post[], number>({\n      query: () => `posts`,\n    }),\n  }),\n})\n\n// file: src/store.ts\nimport { configureStore } from '@reduxjs/toolkit'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { api } from './services/api'\n\nexport const store = configureStore({\n  reducer: {\n    [api.reducerPath]: api.reducer,\n  },\n  middleware: (gDM) => gDM().concat(api.middleware),\n})\n\n// highlight-start\n// enable listener behavior for the store\nsetupListeners(store.dispatch)\n// highlight-end\n\nexport type RootState = ReturnType<typeof store.getState>\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"re-fetching-on-network-reconnection-with-refetchonreconnect",children:["Re-fetching on network reconnection with ",(0,r.jsx)(t.code,{children:"refetchOnReconnect"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#refetchonreconnect",children:(0,r.jsx)(t.code,{children:"refetchOnReconnect"})})," option on ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi",children:(0,r.jsx)(t.code,{children:"createApi"})})," allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection."]}),"\n",(0,r.jsxs)(t.p,{children:["If you specify this option alongside ",(0,r.jsx)(t.code,{children:"skip: true"}),", this ",(0,r.jsx)(t.strong,{children:"will not be evaluated"})," until ",(0,r.jsx)(t.code,{children:"skip"})," is false."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that this requires ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/setupListeners",children:(0,r.jsx)(t.code,{children:"setupListeners"})})," to have been called."]}),"\n",(0,r.jsxs)(t.p,{children:["This option is available on both the api definition with ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi",children:(0,r.jsx)(t.code,{children:"createApi"})}),", as well as on the ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usequery",children:(0,r.jsx)(t.code,{children:"useQuery"})}),", ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usequerysubscription",children:(0,r.jsx)(t.code,{children:"useQuerySubscription"})}),", ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#uselazyquery",children:(0,r.jsx)(t.code,{children:"useLazyQuery"})}),", and ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#uselazyquerysubscription",children:(0,r.jsx)(t.code,{children:"useLazyQuerySubscription"})})," hooks."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/services/api.ts"',children:"// file: src/services/types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// file: src/services/api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Post } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  // global configuration for the api\n  refetchOnReconnect: true,\n  // highlight-end\n  endpoints: (builder) => ({\n    getPosts: builder.query<Post[], number>({\n      query: () => `posts`,\n    }),\n  }),\n})\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="src/store.ts"',children:"// file: src/services/types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// file: src/services/api.ts noEmit\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Post } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  // highlight-start\n  // global configuration for the api\n  refetchOnReconnect: true,\n  // highlight-end\n  endpoints: (builder) => ({\n    getPosts: builder.query<Post[], number>({\n      query: () => `posts`,\n    }),\n  }),\n})\n\n// file: src/store.ts\nimport { configureStore } from '@reduxjs/toolkit'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { api } from './services/api'\n\nexport const store = configureStore({\n  reducer: {\n    [api.reducerPath]: api.reducer,\n  },\n  middleware: (gDM) => gDM().concat(api.middleware),\n})\n\n// highlight-start\n// enable listener behavior for the store\nsetupListeners(store.dispatch)\n// highlight-end\n\nexport type RootState = ReturnType<typeof store.getState>\n"})}),"\n",(0,r.jsx)(t.h3,{id:"re-fetching-after-mutations-by-invalidating-cache-tags",children:"Re-fetching after mutations by invalidating cache tags"}),"\n",(0,r.jsxs)(t.p,{children:["RTK Query uses an optional ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching#cache-tags",children:"cache tag"})," system to automate re-fetching for query endpoints that have data affected by mutation endpoints."]}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching",children:"Automated Re-fetching"})," for full details on this concept."]}),"\n",(0,r.jsx)(t.h2,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,r.jsx)(t.h3,{id:"no-normalized-or-de-duplicated-cache",children:"No Normalized or De-duplicated Cache"}),"\n",(0,r.jsxs)(t.p,{children:["RTK Query deliberately ",(0,r.jsxs)(t.strong,{children:["does ",(0,r.jsx)(t.em,{children:"not"})," implement a cache that would deduplicate identical items across multiple requests"]}),". There are several reasons for this:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A fully normalized shared-across-queries cache is a ",(0,r.jsx)(t.em,{children:"hard"})," problem to solve"]}),"\n",(0,r.jsx)(t.li,{children:"We don't have the time, resources, or interest in trying to solve that right now"}),"\n",(0,r.jsx)(t.li,{children:"In many cases, simply re-fetching data when it's invalidated works well and is easier to understand"}),"\n",(0,r.jsx)(t.li,{children:'At a minimum, RTKQ can help solve the general use case of "fetch some data", which is a big pain point for a lot of people'}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["As an example, say that we have an API slice with ",(0,r.jsx)(t.code,{children:"getTodos"})," and ",(0,r.jsx)(t.code,{children:"getTodo"})," endpoints, and our components make the following queries:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"getTodos()"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"getTodos({filter: 'odd'})"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"getTodo({id: 1})"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Each of these query results would include a Todo object that looks like ",(0,r.jsx)(t.code,{children:"{id: 1}"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In a fully normalized de-duplicating cache, only a single copy of this Todo object would be stored. However, RTK Query saves each query result independently in the cache. So, this would result in three separate copies of this Todo being cached in the Redux store. However, if all the endpoints are consistently providing the same tags (such as ",(0,r.jsx)(t.code,{children:"{type: 'Todo', id: 1}"}),"), then invalidating that tag will force all the matching endpoints to refetch their data for consistency."]}),"\n",(0,r.jsxs)(t.p,{children:["The Redux docs have always recommended ",(0,r.jsx)(t.a,{href:"https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape",children:"keeping data in a normalized lookup table"})," to enable easily finding items by ID and updating them in the store, and ",(0,r.jsxs)(t.a,{href:"/redux-toolkit-zh/api/createEntityAdapter",children:["RTK's ",(0,r.jsx)(t.code,{children:"createEntityAdapter"})]})," was designed to help manage normalized state. Those concepts are still valuable and don't go away. However, if you're using RTK Query to manage caching data, there's less need to manipulate the data that way yourself."]}),"\n",(0,r.jsx)(t.p,{children:"There are a couple additional points that can help here:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The generated query hooks have ",(0,r.jsxs)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#selectfromresult",children:["a ",(0,r.jsx)(t.code,{children:"selectFromResult"})," option"]})," that allow components to read individual pieces of data from a query result. As an example, a ",(0,r.jsx)(t.code,{children:"<TodoList>"})," component might call ",(0,r.jsx)(t.code,{children:"useTodosQuery()"}),", and each individual ",(0,r.jsx)(t.code,{children:"<TodoListItem>"})," could use the same query hook but select from the result to get the right todo object."]}),"\n",(0,r.jsxs)(t.li,{children:["You can use the ",(0,r.jsxs)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#transformresponse",children:[(0,r.jsx)(t.code,{children:"transformResponse"})," endpoint option"]})," to modify the fetched data so that it's ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformresponse",children:"stored in a different shape"}),", such as using ",(0,r.jsx)(t.code,{children:"createEntityAdapter"})," to normalize the data ",(0,r.jsx)(t.em,{children:"for this one response"})," before it's inserted into the cache."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"further-information",children:"Further information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.reddit.com/r/reactjs/comments/my9vrq/redux_toolkit_v16_alpha1_rtk_query_apis/gvxi5t7/",children:"Reddit: discussion of why RTKQ doesn't have a normalized cache, and tradeoffs"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h3,{id:"cache-subscription-lifetime-demo",children:"Cache Subscription Lifetime Demo"}),"\n",(0,r.jsxs)(t.p,{children:["This example is a live demo of how the subscriber reference count and the value of ",(0,r.jsx)(t.code,{children:"keepUnusedDataFor"})," interact with each other. The ",(0,r.jsx)(t.code,{children:"Subscriptions"})," and ",(0,r.jsx)(t.code,{children:"Queries"})," (including the cached data) are shown in the demo for you to visualize (note that this can also be viewed in the ",(0,r.jsx)(t.a,{href:"https://github.com/reduxjs/redux-devtools",children:"Redux Devtools Extension"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["Two components are mounted, each with the same endpoints query (",(0,r.jsx)(t.code,{children:"useGetUsersQuery(2)"}),"). You will be able to observe that when toggling off the components, the subscriber reference count will be reduced. After toggling off both components such that the subscriber reference count reaches zero, you will observe the cached data under the ",(0,r.jsx)(t.code,{children:"Queries"})," section will persist for 5 seconds (the value of ",(0,r.jsx)(t.code,{children:"keepUnusedDataFor"})," provided for the endpoint in this demo). If the subscriber reference count remains at 0 for the full duration, the cached data will then be removed from the store."]}),"\n",(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/rtk-query-cache-subscription-lifetime-example-77tn4?fontsize=12&runonclick=1&hidenavigation=1&theme=dark&module=%2Fsrc%2Fservice%2Findex.ts",style:{width:"100%",height:"800px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-cache-subscription-lifetime-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);