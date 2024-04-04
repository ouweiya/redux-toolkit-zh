"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[9469],{9056:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=n(4848),i=n(8453);const o={id:"rtk-query",title:"RTK \u67e5\u8be2",sidebar_label:"RTK \u67e5\u8be2\u5feb\u901f\u5f00\u59cb",hide_title:!0},s="RTK Query \u5feb\u901f\u5165\u95e8",d={id:"tutorials/rtk-query",title:"RTK \u67e5\u8be2",description:"&nbsp;",source:"@site/docs/tutorials/rtk-query.mdx",sourceDirName:"tutorials",slug:"/tutorials/rtk-query",permalink:"/redux-toolkit-zh/tutorials/rtk-query",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/rtk-query.mdx",tags:[],version:"current",frontMatter:{id:"rtk-query",title:"RTK \u67e5\u8be2",sidebar_label:"RTK \u67e5\u8be2\u5feb\u901f\u5f00\u59cb",hide_title:!0},sidebar:"docs",previous:{title:"TypeScript \u5feb\u901f\u5f00\u59cb",permalink:"/redux-toolkit-zh/tutorials/typescript"},next:{title:"\u8fc1\u79fb\u5230\u73b0\u4ee3 Redux",permalink:"/redux-toolkit-zh/usage/migrating-to-modern-redux"}},c={},a=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b",id:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b",level:3},{value:"\u8bbe\u7f6e\u4f60\u7684\u5b58\u50a8\u548c API \u670d\u52a1",id:"\u8bbe\u7f6e\u4f60\u7684\u5b58\u50a8\u548c-api-\u670d\u52a1",level:2},{value:"\u521b\u5efa\u4e00\u4e2a API \u670d\u52a1",id:"\u521b\u5efa\u4e00\u4e2a-api-\u670d\u52a1",level:3},{value:"\u5c06\u670d\u52a1\u6dfb\u52a0\u5230\u4f60\u7684\u5b58\u50a8\u4e2d",id:"\u5c06\u670d\u52a1\u6dfb\u52a0\u5230\u4f60\u7684\u5b58\u50a8\u4e2d",level:3},{value:"\u4f7f\u7528 <code>Provider</code> \u5305\u88f9\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",id:"\u4f7f\u7528-provider-\u5305\u88f9\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u67e5\u8be2",id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u67e5\u8be2",level:2},{value:"\u57fa\u7840\u793a\u4f8b",id:"\u57fa\u7840\u793a\u4f8b",level:4},{value:"\u9ad8\u7ea7\u793a\u4f8b",id:"\u9ad8\u7ea7\u793a\u4f8b",level:4}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\xa0"}),"\n",(0,t.jsx)(r.h1,{id:"rtk-query-\u5feb\u901f\u5165\u95e8",children:"RTK Query \u5feb\u901f\u5165\u95e8"}),"\n",(0,t.jsx)(r.admonition,{title:"\u4f60\u5c06\u5b66\u5230\u4ec0\u4e48",type:"tip",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:'\u5982\u4f55\u8bbe\u7f6e\u548c\u4f7f\u7528 Redux Toolkit \u7684 "RTK Query" \u6570\u636e\u83b7\u53d6\u529f\u80fd'}),"\n"]})}),"\n",(0,t.jsx)(r.admonition,{title:"\u5148\u51b3\u6761\u4ef6",type:"info",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u7406\u89e3 ",(0,t.jsx)(r.a,{href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow",children:"Redux \u672f\u8bed\u548c\u6982\u5ff5"})]}),"\n"]})}),"\n",(0,t.jsx)(r.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(r.p,{children:["\u6b22\u8fce\u6765\u5230 Redux Toolkit Query \u6559\u7a0b\uff01",(0,t.jsx)(r.strong,{children:'\u672c\u6559\u7a0b\u5c06\u7b80\u8981\u4ecb\u7ecd Redux Toolkit \u7684 "RTK Query" \u6570\u636e\u83b7\u53d6\u529f\u80fd\uff0c\u5e76\u6559\u4f60\u5982\u4f55\u6b63\u786e\u5f00\u59cb\u4f7f\u7528\u5b83'}),"\u3002"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["\u5bf9\u4e8e RTK Query \u7684\u66f4\u6df1\u5165\u6559\u7a0b\uff0c\u8bf7\u53c2\u9605 Redux \u6838\u5fc3\u6587\u6863\u7f51\u7ad9\u4e0a\u7684\u5b8c\u6574 ",(0,t.jsx)(r.a,{href:"https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics",children:'"Redux Essentials" \u6559\u7a0b'}),"\u3002"]})}),"\n",(0,t.jsxs)(r.p,{children:["RTK Query \u662f\u4e00\u4e2a\u9ad8\u7ea7\u7684\u6570\u636e\u83b7\u53d6\u548c\u7f13\u5b58\u5de5\u5177\uff0c\u65e8\u5728\u7b80\u5316\u5728 web \u5e94\u7528\u7a0b\u5e8f\u4e2d\u52a0\u8f7d\u6570\u636e\u7684\u5e38\u89c1\u60c5\u51b5\u3002RTK Query \u672c\u8eab\u662f\u5efa\u7acb\u5728 Redux Toolkit \u6838\u5fc3\u4e4b\u4e0a\u7684\uff0c\u5e76\u5229\u7528 RTK \u7684 APIs\uff0c\u5982 ",(0,t.jsx)(r.a,{href:"/redux-toolkit-zh/api/createSlice",children:(0,t.jsx)(r.code,{children:"createSlice"})})," \u548c ",(0,t.jsx)(r.a,{href:"/redux-toolkit-zh/api/createAsyncThunk",children:(0,t.jsx)(r.code,{children:"createAsyncThunk"})})," \u6765\u5b9e\u73b0\u5176\u529f\u80fd\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["RTK Query \u5305\u542b\u5728 ",(0,t.jsx)(r.code,{children:"@reduxjs/toolkit"})," \u5305\u4e2d\u4f5c\u4e3a\u4e00\u4e2a\u989d\u5916\u7684\u63d2\u4ef6\u3002\u5f53\u4f60\u4f7f\u7528 Redux Toolkit \u65f6\uff0c\u4f60\u4e0d\u9700\u8981\u4f7f\u7528 RTK Query APIs\uff0c\u4f46\u6211\u4eec\u8ba4\u4e3a\u8bb8\u591a\u7528\u6237\u5c06\u4ece\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684 RTK Query \u6570\u636e\u83b7\u53d6\u548c\u7f13\u5b58\u4e2d\u53d7\u76ca\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b",children:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b"}),"\n",(0,t.jsxs)(r.p,{children:["\u5bf9\u4e8e\u672c\u6559\u7a0b\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u6b63\u5728\u4f7f\u7528 Redux Toolkit \u4e0e React\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u4e0e\u5176\u4ed6 UI \u5c42\u4e00\u8d77\u4f7f\u7528\u3002\u793a\u4f8b\u57fa\u4e8e ",(0,t.jsx)(r.a,{href:"https://create-react-app.dev/docs/folder-structure",children:"\u5178\u578b\u7684 Create-React-App \u6587\u4ef6\u7ed3\u6784"}),"\uff0c\u5176\u4e2d\u6240\u6709\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u90fd\u5728 ",(0,t.jsx)(r.code,{children:"src"})," \u4e2d\uff0c\u4f46\u8fd9\u4e9b\u6a21\u5f0f\u53ef\u4ee5\u9002\u5e94\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u4efb\u4f55\u9879\u76ee\u6216\u6587\u4ef6\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u8bbe\u7f6e\u4f60\u7684\u5b58\u50a8\u548c-api-\u670d\u52a1",children:"\u8bbe\u7f6e\u4f60\u7684\u5b58\u50a8\u548c API \u670d\u52a1"}),"\n",(0,t.jsx)(r.p,{children:"\u4e3a\u4e86\u770b\u5230 RTK Query \u5982\u4f55\u5de5\u4f5c\uff0c\u8ba9\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u57fa\u672c\u7684\u4f7f\u7528\u793a\u4f8b\u6765\u8fdb\u884c\u6f14\u793a\u3002\u5bf9\u4e8e\u8fd9\u4e2a\u793a\u4f8b\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u6b63\u5728\u4f7f\u7528 React\uff0c\u5e76\u5e0c\u671b\u4f7f\u7528 RTK Query \u81ea\u52a8\u751f\u6210\u7684 React \u94a9\u5b50\u3002"}),"\n",(0,t.jsx)(r.h3,{id:"\u521b\u5efa\u4e00\u4e2a-api-\u670d\u52a1",children:"\u521b\u5efa\u4e00\u4e2a API \u670d\u52a1"}),"\n",(0,t.jsxs)(r.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u67e5\u8be2\u516c\u5f00\u53ef\u7528\u7684 ",(0,t.jsx)(r.a,{href:"https://pokeapi.co/",children:"PokeAPI"})," \u7684\u670d\u52a1\u5b9a\u4e49\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/services/pokemon.ts"',children:"// \u6587\u4ef6: services/types.ts noEmit\nexport type Pokemon = {}\n\n// \u6587\u4ef6: services/pokemon.ts\n// \u9700\u8981\u4f7f\u7528 React-specific \u7684\u5165\u53e3\u70b9\u6765\u5bfc\u5165 createApi\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Pokemon } from './types'\n\n// highlight-start\n// \u4f7f\u7528\u57fa\u7840 URL \u548c\u9884\u671f\u7684\u7aef\u70b9\u5b9a\u4e49\u670d\u52a1\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query<Pokemon, string>({\n      query: (name) => `pokemon/${name}`,\n    }),\n  }),\n})\n//highlight-end\n\n// highlight-start\n// \u5bfc\u51fa\u7528\u4e8e\u5728\u529f\u80fd\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u7684\u94a9\u5b50\uff0c\u8fd9\u4e9b\u94a9\u5b50\u662f\n// \u6839\u636e\u5b9a\u4e49\u7684\u7aef\u70b9\u81ea\u52a8\u751f\u6210\u7684\nexport const { useGetPokemonByNameQuery } = pokemonApi\n// highlight-end\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4f7f\u7528 RTK Query\uff0c\u4f60\u901a\u5e38\u5728\u4e00\u4e2a\u5730\u65b9\u5b9a\u4e49\u4f60\u7684\u6574\u4e2a API \u5b9a\u4e49\u3002\u8fd9\u53ef\u80fd\u4e0e\u4f60\u5728\u5176\u4ed6\u5e93\u5982 ",(0,t.jsx)(r.code,{children:"swr"})," \u6216 ",(0,t.jsx)(r.code,{children:"react-query"})," \u4e2d\u770b\u5230\u7684\u6709\u6240\u4e0d\u540c\uff0c\u6709\u51e0\u4e2a\u539f\u56e0\u3002\u6211\u4eec\u7684\u89c2\u70b9\u662f\uff0c\u4e0e\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u4e0d\u540c\u6587\u4ef6\u4e2d\u6709 X \u6570\u91cf\u7684\u81ea\u5b9a\u4e49\u94a9\u5b50\u76f8\u6bd4\uff0c\u5f53\u5b83\u4eec\u90fd\u5728\u4e00\u4e2a\u4e2d\u5fc3\u4f4d\u7f6e\u65f6\uff0c\u66f4\u5bb9\u6613\u8ddf\u8e2a\u8bf7\u6c42\u3001\u7f13\u5b58\u5931\u6548\u548c\u4e00\u822c\u5e94\u7528\u914d\u7f6e\u7684\u884c\u4e3a\u3002"]}),"\n",(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsxs)(r.p,{children:["\u901a\u5e38\uff0c\u4f60\u5e94\u8be5\u53ea\u6709\u4e00\u4e2a API \u5207\u7247\uff0c\u6bcf\u4e2a\u4f60\u7684\u5e94\u7528\u9700\u8981\u901a\u4fe1\u7684\u57fa\u7840 URL\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u7f51\u7ad9\u4ece ",(0,t.jsx)(r.code,{children:"/api/posts"})," \u548c ",(0,t.jsx)(r.code,{children:"/api/users"})," \u83b7\u53d6\u6570\u636e\uff0c\u4f60\u5c06\u6709\u4e00\u4e2a\u5355\u4e00\u7684 API \u5207\u7247\uff0c\u4ee5 ",(0,t.jsx)(r.code,{children:"/api/"})," \u4f5c\u4e3a\u57fa\u7840 URL\uff0c\u5e76\u4e3a ",(0,t.jsx)(r.code,{children:"posts"})," \u548c ",(0,t.jsx)(r.code,{children:"users"})," \u5b9a\u4e49\u5355\u72ec\u7684\u7aef\u70b9\u3002\u8fd9\u4f7f\u4f60\u80fd\u591f\u6709\u6548\u5730\u5229\u7528 ",(0,t.jsx)(r.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching",children:"\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6"})," \u901a\u8fc7\u5b9a\u4e49\u8de8\u7aef\u70b9\u7684 ",(0,t.jsx)(r.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching#tags",children:"\u6807\u7b7e"})," \u5173\u7cfb\u3002"]}),(0,t.jsxs)(r.p,{children:["\u51fa\u4e8e\u53ef\u7ef4\u62a4\u6027\u7684\u76ee\u7684\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u5206\u5272\u7aef\u70b9\u5b9a\u4e49\uff0c\u540c\u65f6\u4ecd\u7136\u4fdd\u6301\u4e00\u4e2a\u5305\u542b\u6240\u6709\u8fd9\u4e9b\u7aef\u70b9\u7684\u5355\u4e00 API \u5207\u7247\u3002\u8bf7\u53c2\u9605 ",(0,t.jsx)(r.a,{href:"/redux-toolkit-zh/rtk-query/usage/code-splitting",children:"\u4ee3\u7801\u5206\u5272"})," \u4e86\u89e3\u5982\u4f55\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"injectEndpoints"})," \u5c5e\u6027\u5c06\u5176\u4ed6\u6587\u4ef6\u4e2d\u7684 API \u7aef\u70b9\u6ce8\u5165\u5230\u5355\u4e00\u7684 API \u5207\u7247\u5b9a\u4e49\u4e2d\u3002"]})]}),"\n",(0,t.jsx)(r.h3,{id:"\u5c06\u670d\u52a1\u6dfb\u52a0\u5230\u4f60\u7684\u5b58\u50a8\u4e2d",children:"\u5c06\u670d\u52a1\u6dfb\u52a0\u5230\u4f60\u7684\u5b58\u50a8\u4e2d"}),"\n",(0,t.jsx)(r.p,{children:'RTKQ \u670d\u52a1\u751f\u6210\u4e00\u4e2a\u5e94\u8be5\u5305\u542b\u5728 Redux \u6839 reducer \u4e2d\u7684 "slice reducer"\uff0c\u4ee5\u53ca\u5904\u7406\u6570\u636e\u83b7\u53d6\u7684\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u3002\u8fd9\u4e24\u8005\u90fd\u9700\u8981\u6dfb\u52a0\u5230 Redux \u5b58\u50a8\u4e2d\u3002'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/store.ts"',children:"// \u6587\u4ef6: services/pokemon.ts noEmit\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      query: (name: string) => `pokemon/${name}`,\n    }),\n  }),\n})\n\n// \u6587\u4ef6: store.ts\nimport { configureStore } from '@reduxjs/toolkit'\n// \u6216\u8005\u4ece '@reduxjs/toolkit/query/react' \u5bfc\u5165\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-start\n    // \u5c06\u751f\u6210\u7684 reducer \u6dfb\u52a0\u4e3a\u7279\u5b9a\u7684\u9876\u7ea7 slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n    // highlight-end\n  },\n  // highlight-start\n  // \u6dfb\u52a0 api \u4e2d\u95f4\u4ef6\u542f\u7528\u7f13\u5b58\uff0c\u5931\u6548\uff0c\u8f6e\u8be2\uff0c\n  // \u548c\u5176\u4ed6 `rtk-query` \u7684\u6709\u7528\u7279\u6027\u3002\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n  // highlight-end\n})\n\n// \u53ef\u9009\uff0c\u4f46\u5bf9\u4e8e refetchOnFocus/refetchOnReconnect \u884c\u4e3a\u662f\u5fc5\u9700\u7684\n// \u67e5\u770b `setupListeners` \u6587\u6863 - \u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684\u56de\u8c03\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\nsetupListeners(store.dispatch)\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"\u4f7f\u7528-provider-\u5305\u88f9\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f",children:["\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"Provider"})," \u5305\u88f9\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f"]}),"\n",(0,t.jsx)(r.p,{children:"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u8fd9\u6837\u505a\uff0c\u9075\u5faa\u4e3a\u4f60\u7684 React \u5e94\u7528\u7a0b\u5e8f\u7ec4\u4ef6\u6811\u63d0\u4f9b Redux \u5b58\u50a8\u7684\u6807\u51c6\u6a21\u5f0f\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/index.tsx"',children:"// \u6587\u4ef6: App.tsx noEmit\nimport React from 'react'\nexport default function App() {\n  return <div>...</div>\n}\n\n// \u6587\u4ef6: store.ts noEmit\nimport { configureStore } from '@reduxjs/toolkit'\n\nexport const store = configureStore({\n  reducer: {},\n})\n\n// \u6587\u4ef6: index.tsx\nimport * as React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\n\nimport App from './App'\nimport { store } from './store'\n\nconst rootElement = document.getElementById('root')\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u67e5\u8be2",children:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u67e5\u8be2"}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u65e6\u5b9a\u4e49\u4e86\u670d\u52a1\uff0c\u4f60\u5c31\u53ef\u4ee5\u5bfc\u5165\u94a9\u5b50\u6765\u53d1\u8d77\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="src/App.tsx"',children:"// \u6587\u4ef6: services/pokemon.ts noEmit\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      query: (name: string) => `pokemon/${name}`,\n    }),\n  }),\n})\n\nexport const { useGetPokemonByNameQuery } = pokemonApi\n\n// \u6587\u4ef6: App.tsx\nimport * as React from 'react'\n// highlight-next-line\nimport { useGetPokemonByNameQuery } from './services/pokemon'\n\nexport default function App() {\n  // highlight-start\n  // \u4f7f\u7528\u67e5\u8be2\u94a9\u5b50\u81ea\u52a8\u83b7\u53d6\u6570\u636e\u5e76\u8fd4\u56de\u67e5\u8be2\u503c\n  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')\n  // \u4e5f\u53ef\u4ee5\u5728\u751f\u6210\u7684\u7aef\u70b9\u4e0b\u8bbf\u95ee\u5355\u72ec\u7684\u94a9\u5b50\uff1a\n  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')\n  // highlight-end\n\n  return (\n    <div className=\"App\">\n      {error ? (\n        <>\u54e6\uff0c\u51fa\u9519\u4e86</>\n      ) : isLoading ? (\n        <>\u52a0\u8f7d\u4e2d...</>\n      ) : data ? (\n        <>\n          <h3>{data.species.name}</h3>\n          <img src={data.sprites.front_shiny} alt={data.species.name} />\n        </>\n      ) : null}\n    </div>\n  )\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u8ddf\u8e2a\u72b6\u6001\u3002\u4f60\u53ef\u4ee5\u59cb\u7ec8\u68c0\u67e5 ",(0,t.jsx)(r.code,{children:"data"}),"\uff0c",(0,t.jsx)(r.code,{children:"status"})," \u548c ",(0,t.jsx)(r.code,{children:"error"})," \u6765\u786e\u5b9a\u8981\u6e32\u67d3\u7684\u6b63\u786e UI\u3002\u6b64\u5916\uff0c",(0,t.jsx)(r.code,{children:"useQuery"})," \u8fd8\u63d0\u4f9b\u4e86\u50cf ",(0,t.jsx)(r.code,{children:"isLoading"}),"\uff0c",(0,t.jsx)(r.code,{children:"isFetching"}),"\uff0c",(0,t.jsx)(r.code,{children:"isSuccess"})," \u548c ",(0,t.jsx)(r.code,{children:"isError"})," \u8fd9\u6837\u7684\u5b9e\u7528\u5e03\u5c14\u503c\uff0c\u7528\u4e8e\u6700\u65b0\u7684\u8bf7\u6c42\u3002"]}),"\n",(0,t.jsx)(r.h4,{id:"\u57fa\u7840\u793a\u4f8b",children:"\u57fa\u7840\u793a\u4f8b"}),"\n",(0,t.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/basic?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-getting-started-basic",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),"\n",(0,t.jsx)(r.p,{children:"\u597d\u7684\uff0c\u8fd9\u5f88\u6709\u8da3... \u4f46\u662f\u5982\u679c\u4f60\u60f3\u540c\u65f6\u663e\u793a\u591a\u4e2a\u5ba0\u7269\u5c0f\u7cbe\u7075\u600e\u4e48\u529e\uff1f\u5982\u679c\u591a\u4e2a\u7ec4\u4ef6\u52a0\u8f7d\u540c\u4e00\u4e2a\u5ba0\u7269\u5c0f\u7cbe\u7075\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f"}),"\n",(0,t.jsx)(r.h4,{id:"\u9ad8\u7ea7\u793a\u4f8b",children:"\u9ad8\u7ea7\u793a\u4f8b"}),"\n",(0,t.jsxs)(r.p,{children:["RTK Query \u786e\u4fdd\u8ba2\u9605\u540c\u4e00\u67e5\u8be2\u7684\u4efb\u4f55\u7ec4\u4ef6\u90fd\u5c06\u59cb\u7ec8\u4f7f\u7528\u76f8\u540c\u7684\u6570\u636e\u3002RTK Query \u81ea\u52a8\u53bb\u91cd\u8bf7\u6c42\uff0c\u56e0\u6b64\u4f60\u65e0\u9700\u62c5\u5fc3\u68c0\u67e5\u6b63\u5728\u8fdb\u884c\u7684\u8bf7\u6c42\u548c\u4f60\u7aef\u7684\u6027\u80fd\u4f18\u5316\u3002\u8ba9\u6211\u4eec\u8bc4\u4f30\u4e0b\u9762\u7684\u6c99\u7bb1 - \u786e\u4fdd\u68c0\u67e5\u4f60\u6d4f\u89c8\u5668\u7684\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u7684\u7f51\u7edc\u9762\u677f\u3002\u4f60\u4f1a\u770b\u5230 3 \u4e2a\u8bf7\u6c42\uff0c\u5c3d\u7ba1\u6709 4 \u4e2a\u8ba2\u9605\u7684\u7ec4\u4ef6 - ",(0,t.jsx)(r.code,{children:"bulbasaur"})," \u53ea\u53d1\u8d77\u4e00\u4e2a\u8bf7\u6c42\uff0c\u4e24\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u52a0\u8f7d\u72b6\u6001\u662f\u540c\u6b65\u7684\u3002\u4e3a\u4e86\u597d\u73a9\uff0c\u5c1d\u8bd5\u5c06\u4e0b\u62c9\u6846\u7684\u503c\u4ece ",(0,t.jsx)(r.code,{children:"Off"})," \u6539\u4e3a ",(0,t.jsx)(r.code,{children:"1s"}),"\uff0c\u770b\u770b\u5f53\u67e5\u8be2\u91cd\u65b0\u8fd0\u884c\u65f6\u8fd9\u79cd\u884c\u4e3a\u662f\u5426\u7ee7\u7eed\u3002"]}),"\n",(0,t.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/advanced?file=/src/App.tsx?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-getting-started-advanced",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var t=n(6540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);