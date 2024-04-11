"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[6311],{6127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),r=t(8453);const s={id:"code-generation",title:"\u4ee3\u7801\u751f\u6210",sidebar_label:"\u4ee3\u7801\u751f\u6210",hide_title:!0,description:"RTK Query > Usage > Code Generation: automated creation of API code"},o="\u4ee3\u7801\u751f\u6210",a={id:"rtk-query/usage/code-generation",title:"\u4ee3\u7801\u751f\u6210",description:"RTK Query > Usage > Code Generation: automated creation of API code",source:"@site/docs/rtk-query/usage/code-generation.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/code-generation",permalink:"/redux-toolkit-zh/rtk-query/usage/code-generation",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/rtk-query/usage/code-generation.mdx",tags:[],version:"current",frontMatter:{id:"code-generation",title:"\u4ee3\u7801\u751f\u6210",sidebar_label:"\u4ee3\u7801\u751f\u6210",hide_title:!0,description:"RTK Query > Usage > Code Generation: automated creation of API code"},sidebar:"docs",previous:{title:"\u4ee3\u7801\u5206\u5272",permalink:"/redux-toolkit-zh/rtk-query/usage/code-splitting"},next:{title:"\u670d\u52a1\u5668\u7aef\u6e32\u67d3",permalink:"/redux-toolkit-zh/rtk-query/usage/server-side-rendering"}},d={},l=[{value:"GraphQL",id:"graphql",level:2},{value:"OpenAPI",id:"openapi",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u751f\u6210\u6807\u7b7e",id:"\u751f\u6210\u6807\u7b7e",level:4},{value:"\u7a0b\u5e8f\u5316\u4f7f\u7528",id:"\u7a0b\u5e8f\u5316\u4f7f\u7528",level:3},{value:"\u914d\u7f6e\u6587\u4ef6\u9009\u9879",id:"\u914d\u7f6e\u6587\u4ef6\u9009\u9879",level:3},{value:"\u7b80\u5355\u4f7f\u7528",id:"\u7b80\u5355\u4f7f\u7528",level:4},{value:"\u8fc7\u6ee4\u7aef\u70b9",id:"\u8fc7\u6ee4\u7aef\u70b9",level:4},{value:"\u7aef\u70b9\u8986\u76d6",id:"\u7aef\u70b9\u8986\u76d6",level:4},{value:"\u751f\u6210\u94a9\u5b50",id:"\u751f\u6210\u94a9\u5b50",level:4},{value:"\u591a\u4e2a\u8f93\u51fa\u6587\u4ef6",id:"\u591a\u4e2a\u8f93\u51fa\u6587\u4ef6",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\xa0"}),"\n",(0,i.jsx)(n.h1,{id:"\u4ee3\u7801\u751f\u6210",children:"\u4ee3\u7801\u751f\u6210"}),"\n",(0,i.jsx)(n.p,{children:"RTK Query\u7684API\u548c\u67b6\u6784\u662f\u56f4\u7ed5\u9884\u5148\u58f0\u660eAPI\u7aef\u70b9\u8fdb\u884c\u8bbe\u8ba1\u7684\u3002\u8fd9\u975e\u5e38\u9002\u5408\u4ece\u5916\u90e8API\u6a21\u5f0f\u5b9a\u4e49\uff08\u5982OpenAPI\u548cGraphQL\uff09\u81ea\u52a8\u751f\u6210API\u5207\u7247\u5b9a\u4e49\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4ee3\u7801\u751f\u6210\u80fd\u529b\u7684\u65e9\u671f\u9884\u89c8\u4f5c\u4e3a\u5355\u72ec\u7684\u5de5\u5177\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"graphql",children:"GraphQL"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,i.jsx)(n.a,{href:"https://www.graphql-code-generator.com/docs/plugins/typescript-rtk-query",children:"GraphQL Codegen\u7684\u63d2\u4ef6"}),"\u3002\u4f60\u53ef\u4ee5\u5728graphql-codegen\u4e3b\u9875\u4e0a\u627e\u5230\u8be5\u6587\u6863\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u67e5\u770b\u5982\u4f55\u4f7f\u7528\u5b83\u7684\u5b8c\u6574\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b",(0,i.jsx)(n.a,{href:"https://github.com/reduxjs/redux-toolkit/tree/master/examples/query/react/graphql-codegen",children:"\u6b64\u793a\u4f8b\u9879\u76ee"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"openapi",children:"OpenAPI"}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4eceOpenAPI\u6a21\u5f0f\u751f\u6210RTK Query\u4ee3\u7801\u7684\u5305\u3002\u5b83\u88ab\u53d1\u5e03\u4e3a",(0,i.jsx)(n.code,{children:"@rtk-query/codegen-openapi"}),"\uff0c\u4f60\u53ef\u4ee5\u5728",(0,i.jsx)(n.a,{href:"https://github.com/reduxjs/redux-toolkit/tree/master/packages/rtk-query-codegen-openapi",children:(0,i.jsx)(n.code,{children:"packages/rtk-query-codegen-openapi"})}),"\u627e\u5230\u6e90\u4ee3\u7801\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"createApi"}),"\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684api\uff0c\u5982\u4e0b\u6240\u793a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'no-transpile title="src/store/emptyApi.ts"',children:"// \u6216\u8005\u4ece'@reduxjs/toolkit/query'\u5bfc\u5165\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u81ea\u52a8\u751f\u6210\u7684\u94a9\u5b50\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\n// \u521d\u59cb\u5316\u4e00\u4e2a\u7a7a\u7684api\u670d\u52a1\uff0c\u6211\u4eec\u5c06\u5728\u540e\u9762\u6839\u636e\u9700\u8981\u6ce8\u5165\u7aef\u70b9\nexport const emptySplitApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: () => ({}),\n})\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u751f\u6210\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff08json\uff0cjs\u6216ts\uff09\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'no-transpile title="openapi-config.ts"',children:"import type { ConfigFile } from '@rtk-query/codegen-openapi'\n\nconst config: ConfigFile = {\n  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',\n  apiFile: './src/store/emptyApi.ts',\n  apiImport: 'emptySplitApi',\n  outputFile: './src/store/petApi.ts',\n  exportName: 'petApi',\n  hooks: true,\n}\n\nexport default config\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u8c03\u7528\u4ee3\u7801\u751f\u6210\u5668\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx @rtk-query/codegen-openapi openapi-config.ts\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u751f\u6210\u6807\u7b7e",children:"\u751f\u6210\u6807\u7b7e"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684OpenAPI\u89c4\u8303\u4f7f\u7528\u4e86",(0,i.jsx)(n.a,{href:"https://swagger.io/docs/specification/grouping-operations-with-tags/",children:"\u6807\u7b7e"}),"\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a",(0,i.jsx)(n.code,{children:"tag"}),"\u9009\u9879\u7ed9codegen\u3002\u8fd9\u5c06\u5bfc\u81f4\u6240\u6709\u751f\u6210\u7684\u7aef\u70b9\u90fd\u6709",(0,i.jsx)(n.code,{children:"providesTags"}),"/",(0,i.jsx)(n.code,{children:"invalidatesTags"}),"\u58f0\u660e\uff0c\u7528\u4e8e\u4ed6\u4eec\u5404\u81ea\u7684\u64cd\u4f5c\u5b9a\u4e49\u7684",(0,i.jsx)(n.code,{children:"tags"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f\uff0c\u8fd9\u53ea\u4f1a\u5bfc\u81f4\u6ca1\u6709id\u7684\u5b57\u7b26\u4e32\u6807\u7b7e\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fc7\u591a\u7684\u65e0\u6548\u548c\u4e0d\u5fc5\u8981\u7684\u8bf7\u6c42\u5728\u7a81\u53d8\u4e0a\u8fdb\u884c\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4ecd\u7136\u5efa\u8bae\u901a\u8fc7\u5728\u751f\u6210\u7684api\u4e0a\u4f7f\u7528",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/code-splitting",children:(0,i.jsx)(n.code,{children:"enhanceEndpoints"})}),"\u624b\u52a8\u6307\u5b9a\u6807\u7b7e\uff0c\u5e76\u624b\u52a8\u58f0\u660e",(0,i.jsx)(n.code,{children:"providesTags"}),"/",(0,i.jsx)(n.code,{children:"invalidatesTags"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7a0b\u5e8f\u5316\u4f7f\u7528",children:"\u7a0b\u5e8f\u5316\u4f7f\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'no-transpile title="src/store/petApi.ts"',children:"import { generateEndpoints } from '@rtk-query/codegen-openapi'\n\nconst api = await generateEndpoints({\n  apiFile: './fixtures/emptyApi.ts',\n  schemaFile: resolve(__dirname, 'fixtures/petstore.json'),\n  filterEndpoints: ['getPetById', 'addPet'],\n  hooks: true,\n})\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6\u9009\u9879",children:"\u914d\u7f6e\u6587\u4ef6\u9009\u9879"}),"\n",(0,i.jsx)(n.h4,{id:"\u7b80\u5355\u4f7f\u7528",children:"\u7b80\u5355\u4f7f\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"interface SimpleUsage {\n  apiFile: string\n  schemaFile: string\n  apiImport?: string\n  exportName?: string\n  argSuffix?: string\n  responseSuffix?: string\n  hooks?:\n    | boolean\n    | { queries: boolean; lazyQueries: boolean; mutations: boolean }\n  tag?: boolean\n  outputFile: string\n  filterEndpoints?:\n    | string\n    | RegExp\n    | EndpointMatcherFunction\n    | Array<string | RegExp | EndpointMatcherFunction>\n  endpointOverrides?: EndpointOverrides[]\n  flattenArg?: boolean\n}\n\nexport type EndpointMatcherFunction = (\n  operationName: string,\n  operationDefinition: OperationDefinition,\n) => boolean\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u8fc7\u6ee4\u7aef\u70b9",children:"\u8fc7\u6ee4\u7aef\u70b9"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u53ea\u60f3\u5305\u542b\u4e00\u4e9b\u7aef\u70b9\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"filterEndpoints"}),"\u914d\u7f6e\u9009\u9879\u6765\u8fc7\u6ee4\u4f60\u7684\u7aef\u70b9\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'no-transpile title="openapi-config.ts"',children:"const filteredConfig: ConfigFile = {\n  // ...\n  // \u53ea\u5e94\u5305\u542b\u7aef\u70b9loginUser, placeOrder, getOrderById, deleteOrder\n  filterEndpoints: ['loginUser', /Order/],\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u7aef\u70b9\u8986\u76d6",children:"\u7aef\u70b9\u8986\u76d6"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e00\u4e2a\u7aef\u70b9\u88ab\u751f\u6210\u4e3a\u7a81\u53d8\u800c\u4e0d\u662f\u67e5\u8be2\uff0c\u6216\u8005\u53cd\u8fc7\u6765\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6\u5b83\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'no-transpile title="openapi-config.ts"',children:"const withOverride: ConfigFile = {\n  // ...\n  endpointOverrides: [\n    {\n      pattern: 'loginUser',\n      type: 'mutation',\n    },\n  ],\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u751f\u6210\u94a9\u5b50",children:"\u751f\u6210\u94a9\u5b50"}),"\n",(0,i.jsxs)(n.p,{children:["\u8bbe\u7f6e",(0,i.jsx)(n.code,{children:"hooks: true"}),"\u5c06\u751f\u6210",(0,i.jsx)(n.code,{children:"useQuery"}),"\u548c",(0,i.jsx)(n.code,{children:"useMutation"}),"\u94a9\u5b50\u5bfc\u51fa\u3002\u5982\u679c\u4f60\u4e5f\u60f3\u751f\u6210",(0,i.jsx)(n.code,{children:"useLazyQuery"}),"\u94a9\u5b50\u6216\u8005\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u5f62\u72b6\u4e3a\uff1a",(0,i.jsx)(n.code,{children:"{ queries: boolean; lazyQueries: boolean; mutations: boolean }"}),"\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u591a\u4e2a\u8f93\u51fa\u6587\u4ef6",children:"\u591a\u4e2a\u8f93\u51fa\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'no-transpile title="openapi-config.ts"',children:"const config: ConfigFile = {\n  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',\n  apiFile: './src/store/emptyApi.ts',\n  outputFiles: {\n    './src/store/user.ts': {\n      filterEndpoints: [/user/i],\n    },\n    './src/store/order.ts': {\n      filterEndpoints: [/order/i],\n    },\n    './src/store/pet.ts': {\n      filterEndpoints: [/pet/i],\n    },\n  },\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);