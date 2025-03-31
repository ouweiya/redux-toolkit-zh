"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[6441],{7517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=t(4848),i=t(8453);const o={id:"mutations",title:"\u53d8\u66f4",sidebar_label:"\u53d8\u66f4",hide_title:!0,description:"RTK Query > Usage > Mutations: sending updates to the server"},r="\u53d8\u66f4",d={id:"rtk-query/usage/mutations",title:"\u53d8\u66f4",description:"RTK Query > Usage > Mutations: sending updates to the server",source:"@site/docs/rtk-query/usage/mutations.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/mutations",permalink:"/redux-toolkit-zh/rtk-query/usage/mutations",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/rtk-query/usage/mutations.mdx",tags:[],version:"current",frontMatter:{id:"mutations",title:"\u53d8\u66f4",sidebar_label:"\u53d8\u66f4",hide_title:!0,description:"RTK Query > Usage > Mutations: sending updates to the server"},sidebar:"docs",previous:{title:"\u65e0\u9650\u67e5\u8be2",permalink:"/redux-toolkit-zh/rtk-query/usage/infinite-queries"},next:{title:"\u7f13\u5b58\u884c\u4e3a",permalink:"/redux-toolkit-zh/rtk-query/usage/cache-behavior"}},a={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5b9a\u4e49\u53d8\u66f4\u7aef\u70b9",id:"\u5b9a\u4e49\u53d8\u66f4\u7aef\u70b9",level:2},{value:"\u4f7f\u7528 React \u94a9\u5b50\u6267\u884c\u53d8\u66f4",id:"\u4f7f\u7528-react-\u94a9\u5b50\u6267\u884c\u53d8\u66f4",level:2},{value:"\u53d8\u66f4\u94a9\u5b50\u884c\u4e3a",id:"\u53d8\u66f4\u94a9\u5b50\u884c\u4e3a",level:3},{value:"\u5e38\u7528\u7684 Mutation Hook \u8fd4\u56de\u503c",id:"\u5e38\u7528\u7684-mutation-hook-\u8fd4\u56de\u503c",level:3},{value:"\u5171\u4eab Mutation \u7ed3\u679c",id:"\u5171\u4eab-mutation-\u7ed3\u679c",level:3},{value:"\u6807\u51c6 Mutation \u793a\u4f8b",id:"\u6807\u51c6-mutation-\u793a\u4f8b",level:3},{value:"\u9ad8\u7ea7 Mutations \u4e0e\u91cd\u65b0\u9a8c\u8bc1",id:"\u9ad8\u7ea7-mutations-\u4e0e\u91cd\u65b0\u9a8c\u8bc1",level:2},{value:"\u91cd\u65b0\u9a8c\u8bc1\u793a\u4f8b",id:"\u91cd\u65b0\u9a8c\u8bc1\u793a\u4f8b",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\xa0"}),"\n",(0,s.jsx)(n.h1,{id:"\u53d8\u66f4",children:"\u53d8\u66f4"}),"\n",(0,s.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"\u53d8\u66f4\u7528\u4e8e\u5411\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e\u66f4\u65b0\u5e76\u5c06\u66f4\u6539\u5e94\u7528\u5230\u672c\u5730\u7f13\u5b58\u3002\u53d8\u66f4\u4e5f\u53ef\u4ee5\u4f7f\u7f13\u5b58\u6570\u636e\u5931\u6548\u5e76\u5f3a\u5236\u91cd\u65b0\u83b7\u53d6\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9a\u4e49\u53d8\u66f4\u7aef\u70b9",children:"\u5b9a\u4e49\u53d8\u66f4\u7aef\u70b9"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u5728 ",(0,s.jsx)(n.code,{children:"createApi"})," \u7684 ",(0,s.jsx)(n.code,{children:"endpoints"})," \u90e8\u5206\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"build.mutation()"})," \u65b9\u6cd5\u5b9a\u4e49\u5b57\u6bb5\uff0c\u6765\u5b9a\u4e49\u53d8\u66f4\u7aef\u70b9\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53d8\u66f4\u7aef\u70b9\u5e94\u5b9a\u4e49\u4e00\u4e2a\u6784\u9020 URL\uff08\u5305\u62ec\u4efb\u4f55 URL \u67e5\u8be2\u53c2\u6570\uff09\u7684 ",(0,s.jsx)(n.code,{children:"query"})," \u56de\u8c03\uff0c\u6216\u8005\u4e00\u4e2a\u53ef\u80fd\u6267\u884c\u4efb\u610f\u5f02\u6b65\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u7684 ",(0,s.jsxs)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/customizing-queries#customizing-queries-with-queryfn",children:[(0,s.jsx)(n.code,{children:"queryFn"})," \u56de\u8c03"]}),"\u3002",(0,s.jsx)(n.code,{children:"query"})," \u56de\u8c03\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5305\u542b URL\u3001\u8981\u4f7f\u7528\u7684 HTTP \u65b9\u6cd5\u548c\u8bf7\u6c42\u4f53\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"query"}),' \u56de\u8c03\u9700\u8981\u989d\u5916\u7684\u6570\u636e\u6765\u751f\u6210 URL\uff0c\u5b83\u5e94\u88ab\u7f16\u5199\u4e3a\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\u3002\u5982\u679c\u4f60\u9700\u8981\u4f20\u5165\u591a\u4e2a\u53c2\u6570\uff0c\u5c06\u5b83\u4eec\u683c\u5f0f\u5316\u4e3a\u4e00\u4e2a "options object"\u3002']}),"\n",(0,s.jsx)(n.p,{children:'\u53d8\u66f4\u7aef\u70b9\u4e5f\u53ef\u4ee5\u5728\u7ed3\u679c\u88ab\u7f13\u5b58\u4e4b\u524d\u4fee\u6539\u54cd\u5e94\u5185\u5bb9\uff0c\u5b9a\u4e49 "tags" \u6765\u6807\u8bc6\u7f13\u5b58\u5931\u6548\uff0c\u5e76\u63d0\u4f9b\u7f13\u5b58\u6761\u76ee\u751f\u547d\u5468\u671f\u56de\u8c03\u4ee5\u5728\u7f13\u5b58\u6761\u76ee\u88ab\u6dfb\u52a0\u548c\u5220\u9664\u65f6\u8fd0\u884c\u989d\u5916\u7684\u903b\u8f91\u3002'}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u4e0e TypeScript \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u4f60\u5e94\u8be5\u4e3a\u8fd4\u56de\u7c7b\u578b\u548c\u9884\u671f\u7684\u67e5\u8be2\u53c2\u6570\u63d0\u4f9b\u6cdb\u578b\uff1a",(0,s.jsx)(n.code,{children:"build.mutation<ReturnType, ArgType>"}),"\u3002\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"void"})," \u4f5c\u4e3a\u53c2\u6570\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="\u6240\u6709\u53d8\u66f4\u7aef\u70b9\u9009\u9879\u7684\u793a\u4f8b"',children:"// \u6587\u4ef6: types.ts noEmit\nexport interface Post {\n  id: number\n  name: string\n}\n\n// \u6587\u4ef6: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\nimport type { Post } from './types'\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({\n    baseUrl: '/',\n  }),\n  tagTypes: ['Post'],\n  endpoints: (build) => ({\n    // \u53d8\u66f4\u63a5\u53d7\u4e00\u4e2a `Partial<Post>` \u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a `Post`\n    updatePost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({\n      // highlight-start\n      // \u6ce8\u610f\uff1a\u53ef\u9009\u7684 `queryFn` \u53ef\u4ee5\u4ee3\u66ff `query` \u4f7f\u7528\n      query: ({ id, ...patch }) => ({\n        url: `post/${id}`,\n        method: 'PATCH',\n        body: patch,\n      }),\n      // \u5728\u94a9\u5b50\u6216\u9009\u62e9\u5668\u4e2d\u6311\u9009\u6570\u636e\u5e76\u9632\u6b62\u5d4c\u5957\u5c5e\u6027\n      transformResponse: (response: { data: Post }, meta, arg) => response.data,\n      // \u5728\u94a9\u5b50\u6216\u9009\u62e9\u5668\u4e2d\u6311\u9009\u9519\u8bef\u5e76\u9632\u6b62\u5d4c\u5957\u5c5e\u6027\n      transformErrorResponse: (\n        response: { status: string | number },\n        meta,\n        arg,\n      ) => response.status,\n      invalidatesTags: ['Post'],\n      // onQueryStarted \u5bf9\u4e8e\u4e50\u89c2\u66f4\u65b0\u5f88\u6709\u7528\n      // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u89e3\u6784\u7684 `MutationLifecycleApi`\n      async onQueryStarted(\n        arg,\n        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry },\n      ) {},\n      // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u89e3\u6784\u7684 `MutationCacheLifecycleApi`\n      async onCacheEntryAdded(\n        arg,\n        {\n          dispatch,\n          getState,\n          extra,\n          requestId,\n          cacheEntryRemoved,\n          cacheDataLoaded,\n          getCacheEntry,\n        },\n      ) {},\n      // highlight-end\n    }),\n  }),\n})\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"onQueryStarted"})," \u65b9\u6cd5\u53ef\u4ee5\u7528\u4e8e",(0,s.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/manual-cache-updates#optimistic-updates",children:"\u4e50\u89c2\u66f4\u65b0"})]})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528-react-\u94a9\u5b50\u6267\u884c\u53d8\u66f4",children:"\u4f7f\u7528 React \u94a9\u5b50\u6267\u884c\u53d8\u66f4"}),"\n",(0,s.jsx)(n.h3,{id:"\u53d8\u66f4\u94a9\u5b50\u884c\u4e3a",children:"\u53d8\u66f4\u94a9\u5b50\u884c\u4e3a"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0e ",(0,s.jsx)(n.code,{children:"useQuery"})," \u4e0d\u540c\uff0c",(0,s.jsx)(n.code,{children:"useMutation"}),' \u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\u3002\u5143\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f "\u89e6\u53d1" \u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u5305\u542b ',(0,s.jsx)(n.code,{children:"status"}),"\u3001",(0,s.jsx)(n.code,{children:"error"})," \u548c ",(0,s.jsx)(n.code,{children:"data"})," \u7684\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0e ",(0,s.jsx)(n.code,{children:"useQuery"})," \u94a9\u5b50\u4e0d\u540c\uff0c",(0,s.jsx)(n.code,{children:"useMutation"})," \u94a9\u5b50\u4e0d\u4f1a\u81ea\u52a8\u6267\u884c\u3002\u8981\u8fd0\u884c\u53d8\u66f4\uff0c\u4f60\u5fc5\u987b\u8c03\u7528\u94a9\u5b50\u8fd4\u56de\u7684\u5143\u7ec4\u503c\u4e2d\u7684\u7b2c\u4e00\u4e2a\u89e6\u53d1\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b ",(0,s.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usemutation",children:(0,s.jsx)(n.code,{children:"useMutation"})})," \u4ee5\u83b7\u53d6\u94a9\u5b50\u7b7e\u540d\u548c\u5176\u4ed6\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5e38\u7528\u7684-mutation-hook-\u8fd4\u56de\u503c",children:"\u5e38\u7528\u7684 Mutation Hook \u8fd4\u56de\u503c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useMutation"}),' hook \u8fd4\u56de\u4e00\u4e2a\u5305\u542b "mutation \u89e6\u53d1\u5668" \u51fd\u6570\u7684\u5143\u7ec4\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5305\u542b "mutation \u7ed3\u679c" \u7684\u5c5e\u6027\u7684\u5bf9\u8c61\u3002']}),"\n",(0,s.jsxs)(n.p,{children:['"mutation \u89e6\u53d1\u5668" \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5f53\u88ab\u8c03\u7528\u65f6\uff0c\u5c06\u89e6\u53d1\u8be5\u7aef\u70b9\u7684 mutation \u8bf7\u6c42\u3002\u8c03\u7528 "mutation \u89e6\u53d1\u5668" \u4f1a\u8fd4\u56de\u4e00\u4e2a\u5e26\u6709 ',(0,s.jsx)(n.code,{children:"unwrap"})," \u5c5e\u6027\u7684 promise\uff0c\u8be5\u5c5e\u6027\u53ef\u4ee5\u88ab\u8c03\u7528\u4ee5\u89e3\u5305 mutation \u8c03\u7528\u5e76\u63d0\u4f9b\u539f\u59cb\u54cd\u5e94/\u9519\u8bef\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5728\u8c03\u7528\u7ad9\u70b9\u5185\u90e8\u786e\u5b9a mutation \u662f\u5426\u6210\u529f/\u5931\u8d25\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5f88\u6709\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:['"mutation \u7ed3\u679c" \u662f\u4e00\u4e2a\u5305\u542b\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u5982\u6700\u65b0\u7684 mutation \u8bf7\u6c42\u7684 ',(0,s.jsx)(n.code,{children:"data"}),"\uff0c\u4ee5\u53ca\u5f53\u524d\u8bf7\u6c42\u751f\u547d\u5468\u671f\u72b6\u6001\u7684\u72b6\u6001\u5e03\u5c14\u503c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:['\u4ee5\u4e0b\u662f "mutation \u7ed3\u679c" \u5bf9\u8c61\u4e0a\u6700\u5e38\u7528\u7684\u4e00\u4e9b\u5c5e\u6027\u3002\u8bf7\u53c2\u8003 ',(0,s.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#usemutation",children:(0,s.jsx)(n.code,{children:"useMutation"})})," \u4ee5\u83b7\u53d6\u6240\u6709\u8fd4\u56de\u5c5e\u6027\u7684\u8be6\u7ec6\u5217\u8868\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - \u5982\u679c\u5b58\u5728\uff0c\u8fd4\u56de\u6700\u65b0\u89e6\u53d1\u54cd\u5e94\u7684\u6570\u636e\u3002\u5982\u679c\u4ece\u540c\u4e00 hook \u5b9e\u4f8b\u8c03\u7528\u540e\u7eed\u89e6\u53d1\u5668\uff0c\u6b64\u5c06\u8fd4\u56de undefined\uff0c\u76f4\u5230\u63a5\u6536\u5230\u65b0\u6570\u636e\u3002\u5982\u679c\u9700\u8981\u524d\u4e00\u4e2a\u54cd\u5e94\u6570\u636e\u4ee5\u5e73\u6ed1\u8fc7\u6e21\u5230\u65b0\u6570\u636e\uff0c\u8bf7\u8003\u8651\u7ec4\u4ef6\u7ea7\u7f13\u5b58\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"error"})," - \u5982\u679c\u5b58\u5728\uff0c\u8fd4\u56de\u9519\u8bef\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isUninitialized"})," - \u5f53\u4e3a true \u65f6\uff0c\u8868\u793a mutation \u5c1a\u672a\u89e6\u53d1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isLoading"})," - \u5f53\u4e3a true \u65f6\uff0c\u8868\u793a mutation \u5df2\u89e6\u53d1\u5e76\u6b63\u5728\u7b49\u5f85\u54cd\u5e94\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isSuccess"})," - \u5f53\u4e3a true \u65f6\uff0c\u8868\u793a\u6700\u540e\u89e6\u53d1\u7684 mutation \u6709\u6765\u81ea\u6210\u529f\u8bf7\u6c42\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isError"})," - \u5f53\u4e3a true \u65f6\uff0c\u8868\u793a\u6700\u540e\u89e6\u53d1\u7684 mutation \u5bfc\u81f4\u9519\u8bef\u72b6\u6001\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"reset"})," - \u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u5c06 hook \u91cd\u7f6e\u56de\u5176\u539f\u59cb\u72b6\u6001\u5e76\u4ece\u7f13\u5b58\u4e2d\u5220\u9664\u5f53\u524d\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u5728 RTK Query \u4e2d\uff0cmutation \u4e0d\u5305\u542b 'loading' \u548c 'fetching' \u4e4b\u95f4\u7684\u8bed\u4e49\u533a\u522b\uff0c\u5c31\u50cf ",(0,s.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/queries#frequently-used-query-hook-return-values",children:"query \u4e00\u6837"}),"\u3002\u5bf9\u4e8e mutation\uff0c\u540e\u7eed\u8c03\u7528\u4e0d\u88ab\u5047\u5b9a\u4e3a\u5fc5\u7136\u76f8\u5173\uff0c\u6240\u4ee5 mutation \u8981\u4e48\u662f 'loading'\uff0c\u8981\u4e48\u662f 'not loading'\uff0c\u6ca1\u6709 're-fetching' \u7684\u6982\u5ff5\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u5171\u4eab-mutation-\u7ed3\u679c",children:"\u5171\u4eab Mutation \u7ed3\u679c"}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.code,{children:"useMutation"})," hook \u7684\u5355\u72ec\u5b9e\u4f8b\u5e76\u4e0d\u56fa\u6709\u5730\u76f8\u4e92\u5173\u8054\u3002\n\u89e6\u53d1\u4e00\u4e2a\u5b9e\u4f8b\u4e0d\u4f1a\u5f71\u54cd\u53e6\u4e00\u4e2a\u5b9e\u4f8b\u7684\u7ed3\u679c\u3002\u65e0\u8bba\u8fd9\u4e9b hook \u662f\u5426\u5728\u540c\u4e00\u7ec4\u4ef6\u5185\u8c03\u7528\uff0c\u8fd8\u662f\u5728\u4e0d\u540c\u7684\u7ec4\u4ef6\u5185\u8c03\u7528\uff0c\u90fd\u9002\u7528\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"no-transpile",children:"export const ComponentOne = () => {\n  // \u89e6\u53d1 `updatePostOne` \u5c06\u5f71\u54cd\u6b64\u7ec4\u4ef6\u4e2d\u7684\u7ed3\u679c\uff0c\n  // \u4f46\u4e0d\u4f1a\u5f71\u54cd `ComponentTwo` \u4e2d\u7684\u7ed3\u679c\uff0c\u53cd\u4e4b\u4ea6\u7136\n  const [updatePost, result] = useUpdatePostMutation()\n\n  return <div>...</div>\n}\n\nexport const ComponentTwo = () => {\n  const [updatePost, result] = useUpdatePostMutation()\n\n  return <div>...</div>\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["RTK Query \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9009\u9879\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"fixedCacheKey"})," \u9009\u9879\u5728 mutation hook \u5b9e\u4f8b\u4e4b\u95f4\u5171\u4eab\u7ed3\u679c\u3002\n\u4efb\u4f55\u5177\u6709\u76f8\u540c ",(0,s.jsx)(n.code,{children:"fixedCacheKey"})," \u5b57\u7b26\u4e32\u7684 ",(0,s.jsx)(n.code,{children:"useMutation"})," hook \u5728\u8c03\u7528\u4efb\u4f55\u89e6\u53d1\u51fd\u6570\u65f6\u90fd\u4f1a\u5f7c\u6b64\u5171\u4eab\u7ed3\u679c\u3002\u8fd9\u5e94\u8be5\u662f\u4f60\u5e0c\u671b\u5171\u4eab\u7ed3\u679c\u7684\u6bcf\u4e2a mutation hook \u5b9e\u4f8b\u4e4b\u95f4\u5171\u4eab\u7684\u552f\u4e00\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:"no-transpile",children:"export const ComponentOne = () => {\n  // \u89e6\u53d1 `updatePostOne` \u5c06\u5f71\u54cd\u8fd9\u4e2a\u7ec4\u4ef6\u4e2d\u7684\u7ed3\u679c\uff0c\n  // \u4ee5\u53ca `ComponentTwo` \u4e2d\u7684\u7ed3\u679c\uff0c\u53cd\u4e4b\u4ea6\u7136\n  const [updatePost, result] = useUpdatePostMutation({\n    fixedCacheKey: 'shared-update-post',\n  })\n\n  return <div>...</div>\n}\n\nexport const ComponentTwo = () => {\n  const [updatePost, result] = useUpdatePostMutation({\n    fixedCacheKey: 'shared-update-post',\n  })\n\n  return <div>...</div>\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"fixedCacheKey"})," \u65f6\uff0c",(0,s.jsx)(n.code,{children:"originalArgs"})," \u5c5e\u6027\u65e0\u6cd5\u5171\u4eab\uff0c\u5c06\u59cb\u7ec8\u4e3a ",(0,s.jsx)(n.code,{children:"undefined"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u6807\u51c6-mutation-\u793a\u4f8b",children:"\u6807\u51c6 Mutation \u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u4fee\u6539\u7248\u7684\u5b8c\u6574\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u5728\u9875\u9762\u5e95\u90e8\u770b\u5230\uff0c\u4ee5\u7a81\u51fa ",(0,s.jsx)(n.code,{children:"updatePost"})," mutation\u3002\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"useQuery"})," \u83b7\u53d6\u4e00\u4e2a\u5e16\u5b50\uff0c\u7136\u540e\u6e32\u67d3\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"EditablePostName"})," \u7ec4\u4ef6\uff0c\u5141\u8bb8\u6211\u4eec\u7f16\u8f91\u5e16\u5b50\u7684\u540d\u5b57\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'no-transpile title="src/features/posts/PostDetail.tsx"',children:"export const PostDetail = () => {\n  const { id } = useParams<{ id: any }>()\n\n  const { data: post } = useGetPostQuery(id)\n\n  // highlight-start\n  const [\n    updatePost, // \u8fd9\u662f mutation \u89e6\u53d1\u5668\n    { isLoading: isUpdating }, // \u8fd9\u662f\u89e3\u6784\u7684 mutation \u7ed3\u679c\n  ] = useUpdatePostMutation()\n  // highlight-end\n\n  return (\n    <Box p={4}>\n      <EditablePostName\n        name={post.name}\n        onUpdate={(name) => {\n          // \u5982\u679c\u4f60\u60f3\u7acb\u5373\u8bbf\u95ee mutation \u7684\u7ed3\u679c\uff0c\u4f60\u9700\u8981\u94fe\u5f0f\u8c03\u7528 `.unwrap()`\n          // \u5982\u679c\u4f60\u5b9e\u9645\u4e0a\u60f3\u8981 payload \u6216\u6355\u83b7\u9519\u8bef\u3002\n          // \u793a\u4f8b\uff1a`updatePost().unwrap().then(fulfilled => console.log(fulfilled)).catch(rejected => console.error(rejected))\n\n          return (\n            // highlight-start\n            // \u4f7f\u7528 `id` \u548c\u66f4\u65b0\u7684 `name` \u6267\u884c\u89e6\u53d1\u5668\n            updatePost({ id, name })\n            // highlight-end\n          )\n        }}\n        // highlight-start\n        isLoading={isUpdating}\n        // highlight-end\n      />\n    </Box>\n  )\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u9ad8\u7ea7-mutations-\u4e0e\u91cd\u65b0\u9a8c\u8bc1",children:"\u9ad8\u7ea7 Mutations \u4e0e\u91cd\u65b0\u9a8c\u8bc1"}),"\n",(0,s.jsxs)(n.p,{children:['\u5728\u73b0\u5b9e\u4e16\u754c\u4e2d\uff0c\u5f00\u53d1\u8005\u5728\u6267\u884c mutation \u540e\u5e0c\u671b\u5c06\u672c\u5730\u6570\u636e\u7f13\u5b58\u4e0e\u670d\u52a1\u5668\u91cd\u65b0\u540c\u6b65\uff08\u5373 "\u91cd\u65b0\u9a8c\u8bc1"\uff09\u662f\u975e\u5e38\u5e38\u89c1\u7684\u3002RTK Query \u91c7\u53d6\u4e86\u66f4\u96c6\u4e2d\u7684\u65b9\u6cd5\uff0c\u8981\u6c42\u4f60\u5728 API \u670d\u52a1\u5b9a\u4e49\u4e2d\u914d\u7f6e\u5931\u6548\u884c\u4e3a\u3002\u8bf7\u53c2\u9605 ',(0,s.jsx)(n.a,{href:"./automated-refetching#advanced-invalidation-with-abstract-tag-ids",children:"\u4f7f\u7528\u62bd\u8c61\u6807\u7b7e ID \u7684\u9ad8\u7ea7\u5931\u6548"})," \u4ee5\u83b7\u53d6\u6709\u5173 RTK Query \u7684\u9ad8\u7ea7\u5931\u6548\u5904\u7406\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u91cd\u65b0\u9a8c\u8bc1\u793a\u4f8b",children:"\u91cd\u65b0\u9a8c\u8bc1\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",children:"CRUD\u670d\u52a1"}),"\u7684\u793a\u4f8b\uff0c\u7528\u4e8e\u5904\u7406\u5e16\u5b50\u3002\u5b83\u5b9e\u73b0\u4e86",(0,s.jsx)(n.a,{href:"./automated-refetching#selectively-invalidating-lists",children:"\u9009\u62e9\u6027\u65e0\u6548\u5316\u5217\u8868"}),"\u7b56\u7565\uff0c\u5f88\u53ef\u80fd\u4f1a\u4e3a\u771f\u5b9e\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u826f\u597d\u7684\u57fa\u7840\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="src/app/services/posts.ts"',children:"// \u5982\u679c\u4e0d\u4f7f\u7528\u81ea\u52a8\u751f\u6210\u7684\u94a9\u5b50\uff0c\u53ef\u4ee5\u4ece '@reduxjs/toolkit/query' \u5bfc\u5165\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport interface Post {\n  id: number\n  name: string\n}\n\ntype PostsResponse = Post[]\n\nexport const postApi = createApi({\n  reducerPath: 'postsApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    getPosts: build.query<PostsResponse, void>({\n      query: () => 'posts',\n      // \u63d0\u4f9b\u4e00\u4e2a\u6309 `id` \u5217\u51fa\u7684 `Posts` \u5217\u8868\u3002\n      // \u5982\u679c\u6267\u884c\u4e86\u4efb\u4f55 `invalidate` \u8fd9\u4e9b\u6807\u7b7e\u7684\u53d8\u5f02\uff0c\u8fd9\u4e2a\u67e5\u8be2\u5c06\u91cd\u65b0\u8fd0\u884c\uff0c\u4ee5\u4fdd\u6301\u59cb\u7ec8\u6700\u65b0\u3002\n      // `LIST` id \u662f\u6211\u4eec\u521a\u521a\u7f16\u9020\u7684\u4e00\u4e2a\"\u865a\u62dfid\"\uff0c\u4ee5\u4fbf\u5728\u6dfb\u52a0\u65b0\u7684 `Posts` \u5143\u7d20\u65f6\u7279\u522b\u65e0\u6548\u5316\u8fd9\u4e2a\u67e5\u8be2\u3002\n      providesTags: (result) =>\n        // \u7ed3\u679c\u662f\u5426\u53ef\u7528\uff1f\n        result\n          ? // \u67e5\u8be2\u6210\u529f\n            [\n              ...result.map(({ id }) => ({ type: 'Posts', id }) as const),\n              { type: 'Posts', id: 'LIST' },\n            ]\n          : // \u53d1\u751f\u4e86\u9519\u8bef\uff0c\u4f46\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u5728 `{ type: 'Posts', id: 'LIST' }` \u88ab\u65e0\u6548\u5316\u65f6\u91cd\u65b0\u83b7\u53d6\u8fd9\u4e2a\u67e5\u8be2\n            [{ type: 'Posts', id: 'LIST' }],\n    }),\n    addPost: build.mutation<Post, Partial<Post>>({\n      query(body) {\n        return {\n          url: `post`,\n          method: 'POST',\n          body,\n        }\n      },\n      // \u65e0\u6548\u5316\u6240\u6709\u63d0\u4f9b `LIST` id \u7684 Post \u7c7b\u578b\u67e5\u8be2 - \u6bd5\u7adf\uff0c\u6839\u636e\u6392\u5e8f\u987a\u5e8f\uff0c\n      // \u65b0\u521b\u5efa\u7684\u5e16\u5b50\u53ef\u80fd\u4f1a\u51fa\u73b0\u5728\u4efb\u4f55\u5217\u8868\u4e2d\u3002\n      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],\n    }),\n    getPost: build.query<Post, number>({\n      query: (id) => `post/${id}`,\n      providesTags: (result, error, id) => [{ type: 'Posts', id }],\n    }),\n    updatePost: build.mutation<Post, Partial<Post>>({\n      query(data) {\n        const { id, ...body } = data\n        return {\n          url: `post/${id}`,\n          method: 'PUT',\n          body,\n        }\n      },\n      // \u4ec5\u65e0\u6548\u5316\u8ba2\u9605\u6b64 Post `id` \u7684\u6240\u6709\u67e5\u8be2\u3002\n      // \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c`getPost` \u5c06\u88ab\u91cd\u65b0\u8fd0\u884c\u3002\u5982\u679c\u8fd9\u4e2a id \u5728\u5176\u7ed3\u679c\u4e0b\uff0c`getPosts` *\u53ef\u80fd* \u4f1a\u91cd\u65b0\u8fd0\u884c\u3002\n      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],\n    }),\n    deletePost: build.mutation<{ success: boolean; id: number }, number>({\n      query(id) {\n        return {\n          url: `post/${id}`,\n          method: 'DELETE',\n        }\n      },\n      // \u4ec5\u65e0\u6548\u5316\u8ba2\u9605\u6b64 Post `id` \u7684\u6240\u6709\u67e5\u8be2\u3002\n      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],\n    }),\n  }),\n})\n\nexport const {\n  useGetPostsQuery,\n  useAddPostMutation,\n  useGetPostQuery,\n  useUpdatePostMutation,\n  useDeletePostMutation,\n} = postApi\n"})}),"\n",(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/mutations?fontsize=14&runonclick=1&hidenavigation=1&module=%2Fsrc%2Fapp%2Fservices%2Fposts.ts&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Mutations Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);