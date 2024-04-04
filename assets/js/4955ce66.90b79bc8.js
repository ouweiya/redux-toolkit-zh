"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[9500],{8819:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(4848),s=r(8453);const i={id:"usage-with-typescript",title:"\u4e0e TypeScript \u4e00\u8d77\u4f7f\u7528",sidebar_label:"\u4e0e TypeScript \u4e00\u8d77\u4f7f\u7528",hide_title:!0,description:"RTK Query > TypeScript: Instructions on how to use RTK Query with TypeScript"},o="Usage With TypeScript",a={id:"rtk-query/usage-with-typescript",title:"\u4e0e TypeScript \u4e00\u8d77\u4f7f\u7528",description:"RTK Query > TypeScript: Instructions on how to use RTK Query with TypeScript",source:"@site/docs/rtk-query/usage-with-typescript.mdx",sourceDirName:"rtk-query",slug:"/rtk-query/usage-with-typescript",permalink:"/redux-toolkit-zh/rtk-query/usage-with-typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage-with-typescript.mdx",tags:[],version:"current",frontMatter:{id:"usage-with-typescript",title:"\u4e0e TypeScript \u4e00\u8d77\u4f7f\u7528",sidebar_label:"\u4e0e TypeScript \u4e00\u8d77\u4f7f\u7528",hide_title:!0,description:"RTK Query > TypeScript: Instructions on how to use RTK Query with TypeScript"},sidebar:"docs",previous:{title:"RTK Query \u793a\u4f8b",permalink:"/redux-toolkit-zh/rtk-query/usage/examples"},next:{title:"\u67e5\u8be2",permalink:"/redux-toolkit-zh/rtk-query/usage/queries"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"<code>createApi</code>",id:"createapi",level:2},{value:"Using auto-generated React Hooks",id:"using-auto-generated-react-hooks",level:3},{value:"Typing a <code>baseQuery</code>",id:"typing-a-basequery",level:3},{value:"Typing query and mutation <code>endpoints</code>",id:"typing-query-and-mutation-endpoints",level:3},{value:"Typing a <code>queryFn</code>",id:"typing-a-queryfn",level:3},{value:"Typing <code>dispatch</code> and <code>getState</code>",id:"typing-dispatch-and-getstate",level:3},{value:"Typing <code>providesTags</code>/<code>invalidatesTags</code>",id:"typing-providestagsinvalidatestags",level:3},{value:"Skipping queries with TypeScript using <code>skipToken</code>",id:"skipping-queries-with-typescript-using-skiptoken",level:2},{value:"Type safe error handling",id:"type-safe-error-handling",level:2},{value:"Error result example",id:"error-result-example",level:3},{value:"Inline error handling example",id:"inline-error-handling-example",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\xa0"}),"\n",(0,t.jsx)(n.h1,{id:"usage-with-typescript",children:"Usage With TypeScript"}),"\n",(0,t.jsx)(n.admonition,{title:"What You'll Learn",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Details on how to use various RTK Query APIs with TypeScript"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"As with the rest of the Redux Toolkit package, RTK Query is written in TypeScript, and its API is designed for seamless use in TypeScript applications."}),"\n",(0,t.jsx)(n.p,{children:"This page provides details for using APIs included in RTK Query with TypeScript and how to type them correctly."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"We strongly recommend using TypeScript 4.1+ with RTK Query for best results."})}),(0,t.jsxs)(n.p,{children:["If you encounter any problems with the types that are not described on this page, please ",(0,t.jsx)(n.a,{href:"https://github.com/reduxjs/redux-toolkit/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",children:"open an issue"})," for discussion."]})]}),"\n",(0,t.jsx)(n.h2,{id:"createapi",children:(0,t.jsx)(n.code,{children:"createApi"})}),"\n",(0,t.jsx)(n.h3,{id:"using-auto-generated-react-hooks",children:"Using auto-generated React Hooks"}),"\n",(0,t.jsxs)(n.p,{children:["The React-specific entry point for RTK Query exports a version of ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi",children:(0,t.jsx)(n.code,{children:"createApi"})})," which automatically generates React hooks for each of the defined query & mutation ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#endpoints",children:(0,t.jsx)(n.code,{children:"endpoints"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To use the auto-generated React Hooks as a TypeScript user, ",(0,t.jsx)(n.strong,{children:"you'll need to use TS4.1+"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// file: src/services/types.ts noEmit\nexport type Pokemon = {}\n\n// file: src/services/pokemon.ts\n// Need to use the React-specific entry point to allow generating React hooks\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Pokemon } from './types'\n\n// Define a service using a base URL and expected endpoints\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query<Pokemon, string>({\n      query: (name) => `pokemon/${name}`,\n    }),\n  }),\n})\n\n// highlight-start\n// Export hooks for usage in function components, which are\n// auto-generated based on the defined endpoints\nexport const { useGetPokemonByNameQuery } = pokemonApi\n// highlight-end\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For older versions of TS, you can use ",(0,t.jsx)(n.code,{children:"api.endpoints.[endpointName].useQuery/useMutation"})," to access the same hooks."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Accessing api hooks directly"',children:"// file: src/services/types.ts noEmit\nexport type Pokemon = {}\n\n// file: src/services/pokemon.ts noEmit\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Pokemon } from './types'\n\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query<Pokemon, string>({\n      query: (name) => `pokemon/${name}`,\n    }),\n  }),\n})\n\nexport const { useGetPokemonByNameQuery } = pokemonApi\n\n// file: src/services/manual-query.ts\nimport { pokemonApi } from './pokemon'\n\nconst useGetPokemonByNameQuery = pokemonApi.endpoints.getPokemonByName.useQuery\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"typing-a-basequery",children:["Typing a ",(0,t.jsx)(n.code,{children:"baseQuery"})]}),"\n",(0,t.jsxs)(n.p,{children:["Typing a custom ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#basequery",children:(0,t.jsx)(n.code,{children:"baseQuery"})})," can be done using the ",(0,t.jsx)(n.code,{children:"BaseQueryFn"})," type exported by RTK Query."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Base Query signature" no-transpile',children:"export type BaseQueryFn<\n  Args = any,\n  Result = unknown,\n  Error = unknown,\n  DefinitionExtraOptions = {},\n  Meta = {},\n> = (\n  args: Args,\n  api: BaseQueryApi,\n  extraOptions: DefinitionExtraOptions,\n) => MaybePromise<QueryReturnValue<Result, Error, Meta>>\n\nexport interface BaseQueryApi {\n  signal: AbortSignal\n  dispatch: ThunkDispatch<any, any, any>\n  getState: () => unknown\n}\n\nexport type QueryReturnValue<T = unknown, E = unknown, M = unknown> =\n  | {\n      error: E\n      data?: undefined\n      meta?: M\n    }\n  | {\n      error?: undefined\n      data: T\n      meta?: M\n    }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"BaseQueryFn"})," type accepts the following generics:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Args"})," - The type for the first parameter of the function. The result returned by a ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#query",children:(0,t.jsx)(n.code,{children:"query"})})," property on an endpoint will be passed here."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Result"})," - The type to be returned in the ",(0,t.jsx)(n.code,{children:"data"})," property for the success case. Unless you expect all queries and mutations to return the same type, it is recommended to keep this typed as ",(0,t.jsx)(n.code,{children:"unknown"}),", and specify the types individually as shown ",(0,t.jsx)(n.a,{href:"#typing-query-and-mutation-endpoints",children:"below"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Error"})," - The type to be returned for the ",(0,t.jsx)(n.code,{children:"error"})," property in the error case. This type also applies to all ",(0,t.jsx)(n.a,{href:"#typing-a-queryfn",children:(0,t.jsx)(n.code,{children:"queryFn"})})," functions used in endpoints throughout the API definition."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DefinitionExtraOptions"})," - The type for the third parameter of the function. The value provided to the ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#extraoptions",children:(0,t.jsx)(n.code,{children:"extraOptions"})})," property on an endpoint will be passed here."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Meta"})," - the type of the ",(0,t.jsx)(n.code,{children:"meta"})," property that may be returned from calling the ",(0,t.jsx)(n.code,{children:"baseQuery"}),". The ",(0,t.jsx)(n.code,{children:"meta"})," property is accessible as the second argument to ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#transformresponse",children:(0,t.jsx)(n.code,{children:"transformResponse"})})," and ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#transformerrorresponse",children:(0,t.jsx)(n.code,{children:"transformErrorResponse"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"meta"})," property returned from a ",(0,t.jsx)(n.code,{children:"baseQuery"})," will always be considered as potentially undefined, as a ",(0,t.jsx)(n.code,{children:"throw"})," in the error case may result in it not being provided. When accessing values from the ",(0,t.jsx)(n.code,{children:"meta"})," property, this should be accounted for, e.g. using ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",children:"optional chaining"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Simple baseQuery TypeScript example"',children:"import { createApi } from '@reduxjs/toolkit/query'\nimport type { BaseQueryFn } from '@reduxjs/toolkit/query'\n\nconst simpleBaseQuery: BaseQueryFn<\n  string, // Args\n  unknown, // Result\n  { reason: string }, // Error\n  { shout?: boolean }, // DefinitionExtraOptions\n  { timestamp: number } // Meta\n> = (arg, api, extraOptions) => {\n  // `arg` has the type `string`\n  // `api` has the type `BaseQueryApi` (not configurable)\n  // `extraOptions` has the type `{ shout?: boolean }\n\n  const meta = { timestamp: Date.now() }\n\n  if (arg === 'forceFail') {\n    return {\n      error: {\n        reason: 'Intentionally requested to fail!',\n        meta,\n      },\n    }\n  }\n\n  if (extraOptions.shout) {\n    return { data: 'CONGRATULATIONS', meta }\n  }\n\n  return { data: 'congratulations', meta }\n}\n\nconst api = createApi({\n  baseQuery: simpleBaseQuery,\n  endpoints: (builder) => ({\n    getSupport: builder.query({\n      query: () => 'support me',\n      extraOptions: {\n        shout: true,\n      },\n    }),\n  }),\n})\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"typing-query-and-mutation-endpoints",children:["Typing query and mutation ",(0,t.jsx)(n.code,{children:"endpoints"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"endpoints"})," for an api are defined as an object using the builder syntax. Both ",(0,t.jsx)(n.code,{children:"query"})," and ",(0,t.jsx)(n.code,{children:"mutation"})," endpoints can be typed by providing types to the generics in ",(0,t.jsx)(n.code,{children:"<ResultType, QueryArg>"})," format."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ResultType"})," - The type of the final data returned by the query, factoring an optional ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#transformresponse",children:(0,t.jsx)(n.code,{children:"transformResponse"})}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"transformResponse"})," is not provided, then it is treated as though a successful query will return this type instead."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"transformResponse"})," ",(0,t.jsx)(n.em,{children:"is"})," provided, the input type for ",(0,t.jsx)(n.code,{children:"transformResponse"})," must also be specified, to indicate the type that the initial query returns. The return type for ",(0,t.jsx)(n.code,{children:"transformResponse"})," must match ",(0,t.jsx)(n.code,{children:"ResultType"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"queryFn"})," is used rather than ",(0,t.jsx)(n.code,{children:"query"}),", then it must return the following shape for the success case:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"{\n  data: ResultType\n}\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"QueryArg"})," - The type of the input that will be passed as the only parameter to the ",(0,t.jsx)(n.code,{children:"query"})," property of the endpoint, or the first parameter of a ",(0,t.jsx)(n.code,{children:"queryFn"})," property if used instead.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"query"})," doesn't have a parameter, then ",(0,t.jsx)(n.code,{children:"void"})," type has to be provided explicitly."]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.code,{children:"query"})," has an optional parameter, then a union type with the type of parameter, and ",(0,t.jsx)(n.code,{children:"void"})," has to be provided, e.g. ",(0,t.jsx)(n.code,{children:"number | void"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Defining endpoints with TypeScript"',children:"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\ninterface Post {\n  id: number\n  name: string\n}\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (build) => ({\n    // highlight-start\n    //              ResultType  QueryArg\n    //                    v       v\n    getPost: build.query<Post, number>({\n      // inferred as `number` from the `QueryArg` type\n      //       v\n      query: (id) => `post/${id}`,\n      // An explicit type must be provided to the raw result that the query returns\n      // when using `transformResponse`\n      //                             v\n      transformResponse: (rawResult: { result: { post: Post } }, meta) => {\n        //                                                        ^\n        // The optional `meta` property is available based on the type for the `baseQuery` used\n\n        // The return value for `transformResponse` must match `ResultType`\n        return rawResult.result.post\n      },\n    }),\n    // highlight-end\n  }),\n})\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"queries"})," and ",(0,t.jsx)(n.code,{children:"mutations"})," can also have their return type defined by a ",(0,t.jsx)(n.a,{href:"#typing-a-basequery",children:(0,t.jsx)(n.code,{children:"baseQuery"})})," rather than the method shown above, however, unless you expect all of your queries and mutations to return the same type, it is recommended to leave the return type of the ",(0,t.jsx)(n.code,{children:"baseQuery"})," as ",(0,t.jsx)(n.code,{children:"unknown"}),"."]})}),"\n",(0,t.jsxs)(n.h3,{id:"typing-a-queryfn",children:["Typing a ",(0,t.jsx)(n.code,{children:"queryFn"})]}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned in ",(0,t.jsx)(n.a,{href:"#typing-query-and-mutation-endpoints",children:"Typing query and mutation endpoints"}),", a ",(0,t.jsx)(n.code,{children:"queryFn"})," will receive its result & arg types from the generics provided to the corresponding built endpoint."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// file: randomData.ts noEmit\nexport declare const getRandomName: () => string\n\n// file: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { getRandomName } from './randomData'\n\ninterface Post {\n  id: number\n  name: string\n}\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (build) => ({\n    // highlight-start\n    //              ResultType  QueryArg\n    //                    v       v\n    getPost: build.query<Post, number>({\n      // inferred as `number` from the `QueryArg` type\n      //         v\n      queryFn: (arg, queryApi, extraOptions, baseQuery) => {\n        const post: Post = {\n          id: arg,\n          name: getRandomName(),\n        }\n        // For the success case, the return type for the `data` property\n        // must match `ResultType`\n        //              v\n        return { data: post }\n      },\n    }),\n    // highlight-end\n  }),\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The error type that a ",(0,t.jsx)(n.code,{children:"queryFn"})," must return is determined by the ",(0,t.jsx)(n.a,{href:"#typing-a-basequery",children:(0,t.jsx)(n.code,{children:"baseQuery"})})," provided to ",(0,t.jsx)(n.code,{children:"createApi"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/fetchBaseQuery",children:(0,t.jsx)(n.code,{children:"fetchBaseQuery"})}),", the error type is like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="fetchBaseQuery error shape" no-transpile',children:"{\n  status: number\n  data: any\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["An error case for the example above using ",(0,t.jsx)(n.code,{children:"queryFn"})," and the error type from ",(0,t.jsx)(n.code,{children:"fetchBaseQuery"})," could look like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="queryFn error example with error type from fetchBaseQuery"',children:"// file: randomData.ts noEmit\nexport declare const getRandomName: () => string\n\n// file: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { getRandomName } from './randomData'\n\ninterface Post {\n  id: number\n  name: string\n}\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (build) => ({\n    // highlight-start\n    getPost: build.query<Post, number>({\n      queryFn: (arg, queryApi, extraOptions, baseQuery) => {\n        // highlight-start\n        if (arg <= 0) {\n          return {\n            error: {\n              status: 500,\n              statusText: 'Internal Server Error',\n              data: 'Invalid ID provided.',\n            },\n          }\n        }\n        // highlight-end\n        const post: Post = {\n          id: arg,\n          name: getRandomName(),\n        }\n        return { data: post }\n      },\n    }),\n  }),\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For users who wish to ",(0,t.jsx)(n.em,{children:"only"})," use ",(0,t.jsx)(n.code,{children:"queryFn"})," for each endpoint and not include a ",(0,t.jsx)(n.code,{children:"baseQuery"})," at all, RTK Query provides a ",(0,t.jsx)(n.code,{children:"fakeBaseQuery"})," function that can be used to easily specify the error type each ",(0,t.jsx)(n.code,{children:"queryFn"})," should return."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Excluding baseQuery for all endpoints"',children:"import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query'\n\n// highlight-start\ntype CustomErrorType = { reason: 'too cold' | 'too hot' }\n// highlight-end\n\nconst api = createApi({\n  // highlight-start\n  // This type will be used as the error type for all `queryFn` functions provided\n  //                              v\n  baseQuery: fakeBaseQuery<CustomErrorType>(),\n  // highlight-end\n  endpoints: (build) => ({\n    eatPorridge: build.query<'just right', 1 | 2 | 3>({\n      // highlight-start\n      queryFn(seat) {\n        if (seat === 1) {\n          return { error: { reason: 'too cold' } }\n        }\n\n        if (seat === 2) {\n          return { error: { reason: 'too hot' } }\n        }\n\n        return { data: 'just right' }\n      },\n      // highlight-end\n    }),\n    microwaveHotPocket: build.query<'delicious!', number>({\n      // highlight-start\n      queryFn(duration) {\n        if (duration < 110) {\n          return { error: { reason: 'too cold' } }\n        }\n        if (duration > 140) {\n          return { error: { reason: 'too hot' } }\n        }\n\n        return { data: 'delicious!' }\n      },\n      // highlight-end\n    }),\n  }),\n})\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"typing-dispatch-and-getstate",children:["Typing ",(0,t.jsx)(n.code,{children:"dispatch"})," and ",(0,t.jsx)(n.code,{children:"getState"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"createApi"})," exposes the standard Redux ",(0,t.jsx)(n.code,{children:"dispatch"})," and ",(0,t.jsx)(n.code,{children:"getState"})," methods in several places, such as the ",(0,t.jsx)(n.code,{children:"lifecycleApi"})," argument in lifecycle methods, or the ",(0,t.jsx)(n.code,{children:"baseQueryApi"})," argument passed to ",(0,t.jsx)(n.code,{children:"queryFn"})," methods and base query functions."]}),"\n",(0,t.jsxs)(n.p,{children:["Normally, ",(0,t.jsxs)(n.a,{href:"/redux-toolkit-zh/tutorials/typescript#define-root-state-and-dispatch-types",children:["your application infers ",(0,t.jsx)(n.code,{children:"RootState"})," and ",(0,t.jsx)(n.code,{children:"AppDispatch"})," types from the store setup"]}),". Since ",(0,t.jsx)(n.code,{children:"createApi"})," has to be called prior to creating the Redux store and is used as part of the store setup sequence, it can't directly know or use those types - it would cause a circular type inference error."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"dispatch"})," usages inside of ",(0,t.jsx)(n.code,{children:"createApi"})," will be typed as ",(0,t.jsx)(n.code,{children:"ThunkDispatch"}),", and ",(0,t.jsx)(n.code,{children:"getState"})," usages are typed as ",(0,t.jsx)(n.code,{children:"() => unknown"}),". You will need to assert the type when needed - ",(0,t.jsx)(n.code,{children:"getState() as RootState"}),". You may also include an explicit return type for the function as well, in order to break the circular type inference cycle:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const api = createApi({\n  baseQuery,\n  endpoints: (build) => ({\n    getTodos: build.query<Todo[], void>({\n      async queryFn() {\n        // highlight-start\n        // Cast state as `RootState`\n        const state = getState() as RootState\n        // highlight-end\n        const text = state.todoTexts[queryFnCalls]\n        return { data: [{ id: `${queryFnCalls++}`, text }] }\n      },\n    }),\n  }),\n})\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"typing-providestagsinvalidatestags",children:["Typing ",(0,t.jsx)(n.code,{children:"providesTags"}),"/",(0,t.jsx)(n.code,{children:"invalidatesTags"})]}),"\n",(0,t.jsxs)(n.p,{children:["RTK Query utilizes a cache tag invalidation system in order to provide ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching",children:"automated re-fetching"})," of stale data."]}),"\n",(0,t.jsxs)(n.p,{children:["When using the function notation, both the ",(0,t.jsx)(n.code,{children:"providesTags"})," and ",(0,t.jsx)(n.code,{children:"invalidatesTags"})," properties on endpoints are called with the following arguments:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["result: ",(0,t.jsx)(n.code,{children:"ResultType"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," - The result returned by a successful query. The type corresponds with ",(0,t.jsx)(n.code,{children:"ResultType"})," as ",(0,t.jsx)(n.a,{href:"#typing-query-and-mutation-endpoints",children:"supplied to the built endpoint"}),". In the error case for a query, this will be ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["error: ",(0,t.jsx)(n.code,{children:"ErrorType"})," | ",(0,t.jsx)(n.code,{children:"undefined"})," - The error returned by an errored query. The type corresponds with ",(0,t.jsx)(n.code,{children:"Error"})," as ",(0,t.jsxs)(n.a,{href:"#typing-a-basequery",children:["supplied to the ",(0,t.jsx)(n.code,{children:"baseQuery"})," for the api"]}),". In the success case for a query, this will be ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["arg: ",(0,t.jsx)(n.code,{children:"QueryArg"})," - The argument supplied to the ",(0,t.jsx)(n.code,{children:"query"})," property when the query itself is called. The type corresponds with ",(0,t.jsx)(n.code,{children:"QueryArg"})," as ",(0,t.jsx)(n.a,{href:"#typing-query-and-mutation-endpoints",children:"supplied to the built endpoint"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A recommended use-case with ",(0,t.jsx)(n.code,{children:"providesTags"})," when a query returns a list of items is to provide a tag for each item in the list using the entity ID, as well as a 'LIST' ID tag (see ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching#advanced-invalidation-with-abstract-tag-ids",children:"Advanced Invalidation with abstract tag IDs"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["This is often written by spreading the result of mapping the received data into an array, as well as an additional item in the array for the ",(0,t.jsx)(n.code,{children:"'LIST'"})," ID tag. When spreading the mapped array, by default, TypeScript will broaden the ",(0,t.jsx)(n.code,{children:"type"})," property to ",(0,t.jsx)(n.code,{children:"string"}),". As the tag ",(0,t.jsx)(n.code,{children:"type"})," must correspond to one of the string literals provided to the ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#tagtypes",children:(0,t.jsx)(n.code,{children:"tagTypes"})})," property of the api, the broad ",(0,t.jsx)(n.code,{children:"string"})," type will not satisfy TypeScript. In order to alleviate this, the tag ",(0,t.jsx)(n.code,{children:"type"})," can be cast ",(0,t.jsx)(n.code,{children:"as const"})," to prevent the type being broadened to ",(0,t.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="providesTags TypeScript example"',children:"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\ninterface Post {\n  id: number\n  name: string\n}\ntype PostsResponse = Post[]\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    getPosts: build.query<PostsResponse, void>({\n      query: () => 'posts',\n      providesTags: (result) =>\n        result\n          ? [\n              // highlight-start\n              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),\n              { type: 'Posts', id: 'LIST' },\n              // highlight-end\n            ]\n          : [{ type: 'Posts', id: 'LIST' }],\n    }),\n  }),\n})\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"skipping-queries-with-typescript-using-skiptoken",children:["Skipping queries with TypeScript using ",(0,t.jsx)(n.code,{children:"skipToken"})]}),"\n",(0,t.jsxs)(n.p,{children:["RTK Query provides the ability to conditionally skip queries from automatically running using the ",(0,t.jsx)(n.code,{children:"skip"})," parameter as part of query hook options (see ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/conditional-fetching",children:"Conditional Fetching"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["TypeScript users may find that they encounter invalid type scenarios when a query argument is typed to not be ",(0,t.jsx)(n.code,{children:"undefined"}),", and they attempt to ",(0,t.jsx)(n.code,{children:"skip"})," the query when an argument would not be valid."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="API definition"',children:"// file: types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// file: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Post } from './types'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (build) => ({\n    // Query argument is required to be `number`, and can't be `undefined`\n    //                            V\n    getPost: build.query<Post, number>({\n      query: (id) => `post/${id}`,\n    }),\n  }),\n})\n\nexport const { useGetPostQuery } = api\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'no-transpile title="Using skip in a component"',children:"import { useGetPostQuery } from './api'\n\nfunction MaybePost({ id }: { id?: number }) {\n  // This will produce a typescript error:\n  // Argument of type 'number | undefined' is not assignable to parameter of type 'number | unique symbol'.\n  // Type 'undefined' is not assignable to type 'number | unique symbol'.\n\n  // @ts-expect-error id passed must be a number, but we don't call it when it isn't a number\n  const { data } = useGetPostQuery(id, { skip: !id })\n\n  return <div>...</div>\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["While you might be able to convince yourself that the query won't be called unless the ",(0,t.jsx)(n.code,{children:"id"})," arg is a ",(0,t.jsx)(n.code,{children:"number"})," at the time, TypeScript won't be convinced so easily."]}),"\n",(0,t.jsxs)(n.p,{children:["RTK Query provides a ",(0,t.jsx)(n.code,{children:"skipToken"})," export which can be used as an alternative to the ",(0,t.jsx)(n.code,{children:"skip"})," option in order to skip queries, while remaining type-safe. When ",(0,t.jsx)(n.code,{children:"skipToken"})," is passed as the query argument to ",(0,t.jsx)(n.code,{children:"useQuery"}),", ",(0,t.jsx)(n.code,{children:"useQueryState"})," or ",(0,t.jsx)(n.code,{children:"useQuerySubscription"}),", it provides the same effect as setting ",(0,t.jsx)(n.code,{children:"skip: true"})," in the query options, while also being a valid argument in scenarios where the ",(0,t.jsx)(n.code,{children:"arg"})," might be undefined otherwise."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'no-transpile title="Using skipToken in a component"',children:"import { skipToken } from '@reduxjs/toolkit/query/react'\nimport { useGetPostQuery } from './api'\n\nfunction MaybePost({ id }: { id?: number }) {\n  // When `id` is nullish, we will still skip the query.\n  // TypeScript is also happy that the query will only ever be called with a `number` now\n  const { data } = useGetPostQuery(id ?? skipToken)\n\n  return <div>...</div>\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"type-safe-error-handling",children:"Type safe error handling"}),"\n",(0,t.jsxs)(n.p,{children:["When an error is gracefully provided from a ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#baseQuery",children:(0,t.jsx)(n.code,{children:"base query"})}),", RTK query will provide the error\ndirectly. If an unexpected error is thrown by user code rather than a handled error,\nthat error will be transformed into a ",(0,t.jsx)(n.code,{children:"SerializedError"})," shape. Users should make sure that they are checking which kind of error they are dealing with before attempting to access its properties. This can be done in a type safe manner either\nby using a type guard, e.g. by checking for ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing",children:"discriminated properties"}),",\nor using a ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",children:"type predicate"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/fetchBaseQuery",children:(0,t.jsx)(n.code,{children:"fetchBaseQuery"})}),", as your base query,\nerrors will be of type ",(0,t.jsx)(n.code,{children:"FetchBaseQueryError | SerializedError"}),". The specific shapes of those types can be seen below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="FetchBaseQueryError type"',children:'export type FetchBaseQueryError =\n  | {\n      /**\n       * * `number`:\n       *   HTTP status code\n       */\n      status: number\n      data: unknown\n    }\n  | {\n      /**\n       * * `"FETCH_ERROR"`:\n       *   An error that occurred during execution of `fetch` or the `fetchFn` callback option\n       **/\n      status: \'FETCH_ERROR\'\n      data?: undefined\n      error: string\n    }\n  | {\n      /**\n       * * `"PARSING_ERROR"`:\n       *   An error happened during parsing.\n       *   Most likely a non-JSON-response was returned with the default `responseHandler` "JSON",\n       *   or an error occurred while executing a custom `responseHandler`.\n       **/\n      status: \'PARSING_ERROR\'\n      originalStatus: number\n      data: string\n      error: string\n    }\n  | {\n      /**\n       * * `"CUSTOM_ERROR"`:\n       *   A custom error type that you can return from your `queryFn` where another error might not make sense.\n       **/\n      status: \'CUSTOM_ERROR\'\n      data?: unknown\n      error: string\n    }\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="SerializedError type"',children:"export interface SerializedError {\n  name?: string\n  message?: string\n  stack?: string\n  code?: string\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"error-result-example",children:"Error result example"}),"\n",(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.code,{children:"fetchBaseQuery"}),", the ",(0,t.jsx)(n.code,{children:"error"})," property returned from a hook will have the type ",(0,t.jsx)(n.code,{children:"FetchBaseQueryError | SerializedError | undefined"}),".\nIf an error is present, you can access error properties after narrowing the type to either ",(0,t.jsx)(n.code,{children:"FetchBaseQueryError"})," or ",(0,t.jsx)(n.code,{children:"SerializedError"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:"no-transpile",children:"import { api } from './services/api'\n\nfunction PostDetail() {\n  const { data, error, isLoading } = usePostsQuery()\n\n  if (isLoading) {\n    return <div>Loading...</div>\n  }\n\n  if (error) {\n    if ('status' in error) {\n      // you can access all properties of `FetchBaseQueryError` here\n      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)\n\n      return (\n        <div>\n          <div>An error has occurred:</div>\n          <div>{errMsg}</div>\n        </div>\n      )\n    } else {\n      // you can access all properties of `SerializedError` here\n      return <div>{error.message}</div>\n    }\n  }\n\n  if (data) {\n    return (\n      <div>\n        {data.map((post) => (\n          <div key={post.id}>Name: {post.name}</div>\n        ))}\n      </div>\n    )\n  }\n\n  return null\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"inline-error-handling-example",children:"Inline error handling example"}),"\n",(0,t.jsxs)(n.p,{children:["When handling errors inline after ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/createAsyncThunk#unwrapping-result-actions",children:(0,t.jsx)(n.code,{children:"unwrapping"})})," a mutation call,\na thrown error will have a type of ",(0,t.jsx)(n.code,{children:"any"})," for typescript versions below 4.4,\nor ",(0,t.jsxs)(n.a,{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/#use-unknown-catch-variables",children:[(0,t.jsx)(n.code,{children:"unknown"})," for versions 4.4+"]}),".\nIn order to safely access properties of the error, you must first narrow the type to a known type.\nThis can be done using a ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",children:"type predicate"}),"\nas shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'no-transpile title="services/helpers.ts"',children:"import { FetchBaseQueryError } from '@reduxjs/toolkit/query'\n\n/**\n * Type predicate to narrow an unknown error to `FetchBaseQueryError`\n */\nexport function isFetchBaseQueryError(\n  error: unknown,\n): error is FetchBaseQueryError {\n  return typeof error === 'object' && error != null && 'status' in error\n}\n\n/**\n * Type predicate to narrow an unknown error to an object with a string 'message' property\n */\nexport function isErrorWithMessage(\n  error: unknown,\n): error is { message: string } {\n  return (\n    typeof error === 'object' &&\n    error != null &&\n    'message' in error &&\n    typeof (error as any).message === 'string'\n  )\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'no-transpile title="addPost.tsx"',children:"import { useState } from 'react'\nimport { useSnackbar } from 'notistack'\nimport { api } from './services/api'\nimport { isFetchBaseQueryError, isErrorWithMessage } from './services/helpers'\n\nfunction AddPost() {\n  const { enqueueSnackbar, closeSnackbar } = useSnackbar()\n  const [name, setName] = useState('')\n  const [addPost] = useAddPostMutation()\n\n  async function handleAddPost() {\n    try {\n      await addPost(name).unwrap()\n      setName('')\n    } catch (err) {\n      if (isFetchBaseQueryError(err)) {\n        // you can access all properties of `FetchBaseQueryError` here\n        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data)\n        enqueueSnackbar(errMsg, { variant: 'error' })\n      } else if (isErrorWithMessage(err)) {\n        // you can access a string 'message' property here\n        enqueueSnackbar(err.message, { variant: 'error' })\n      }\n    }\n  }\n\n  return (\n    <div>\n      <input value={name} onChange={(e) => setName(e.target.value)} />\n      <button>Add post</button>\n    </div>\n  )\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);