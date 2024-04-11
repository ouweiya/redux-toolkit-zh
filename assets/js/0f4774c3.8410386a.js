"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[2049],{7508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(4848),o=n(8453);const i={id:"polling",title:"\u8f6e\u8be2",sidebar_label:"\u8f6e\u8be2",hide_title:!0,description:"RTK Query > Usage > Polling: re-fetching data on a timer"},s="\u8f6e\u8be2",l={id:"rtk-query/usage/polling",title:"\u8f6e\u8be2",description:"RTK Query > Usage > Polling: re-fetching data on a timer",source:"@site/docs/rtk-query/usage/polling.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/polling",permalink:"/redux-toolkit-zh/rtk-query/usage/polling",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/rtk-query/usage/polling.mdx",tags:[],version:"current",frontMatter:{id:"polling",title:"\u8f6e\u8be2",sidebar_label:"\u8f6e\u8be2",hide_title:!0,description:"RTK Query > Usage > Polling: re-fetching data on a timer"},sidebar:"docs",previous:{title:"\u9884\u83b7\u53d6",permalink:"/redux-toolkit-zh/rtk-query/usage/prefetching"},next:{title:"\u6d41\u5f0f\u66f4\u65b0",permalink:"/redux-toolkit-zh/rtk-query/usage/streaming-updates"}},a={},c=[{value:"\u8f6e\u8be2\u6982\u8ff0",id:"\u8f6e\u8be2\u6982\u8ff0",level:2},{value:"\u4e0d\u4f7f\u7528 React Hooks \u7684\u8f6e\u8be2",id:"\u4e0d\u4f7f\u7528-react-hooks-\u7684\u8f6e\u8be2",level:2},{value:"\u8f6e\u8be2\u793a\u4f8b",id:"\u8f6e\u8be2\u793a\u4f8b",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\xa0"}),"\n",(0,r.jsx)(t.h1,{id:"\u8f6e\u8be2",children:"\u8f6e\u8be2"}),"\n",(0,r.jsx)(t.h2,{id:"\u8f6e\u8be2\u6982\u8ff0",children:"\u8f6e\u8be2\u6982\u8ff0"}),"\n",(0,r.jsxs)(t.p,{children:["\u8f6e\u8be2\u4f7f\u4f60\u80fd\u591f\u901a\u8fc7\u4f7f\u67e5\u8be2\u4ee5\u6307\u5b9a\u7684\u95f4\u9694\u8fd0\u884c\u6765\u5b9e\u73b0\u201c\u5b9e\u65f6\u201d\u6548\u679c\u3002\u8981\u4e3a\u67e5\u8be2\u542f\u7528\u8f6e\u8be2\uff0c\u5c06 ",(0,r.jsx)(t.code,{children:"pollingInterval"})," \u4f20\u9012\u7ed9 ",(0,r.jsx)(t.code,{children:"useQuery"})," \u94a9\u5b50\u6216\u52a8\u4f5c\u521b\u5efa\u5668\uff0c\u5e76\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u8bbe\u7f6e\u95f4\u9694\uff1a"]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.p,{children:["\u8f6e\u8be2\u8fd8\u5177\u6709\u5728\u7a97\u53e3\u5931\u53bb\u7126\u70b9\u65f6\u8df3\u8fc7\u53d1\u9001\u8bf7\u6c42\u7684\u80fd\u529b\u3002\u8981\u542f\u7528\u6b64\u884c\u4e3a\uff0c\u5c06 ",(0,r.jsx)(t.code,{children:"skipPollingIfUnfocused: true"})," \u4f20\u9012\u7ed9 ",(0,r.jsx)(t.code,{children:"useQuery"})," \u94a9\u5b50\u6216\u52a8\u4f5c\u521b\u5efa\u5668\u3002"]}),(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["\u6ce8\u610f\uff1a",(0,r.jsx)(t.code,{children:"skipPollingIfUnfocused"})," \u9700\u8981 ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/api/setupListeners",children:(0,r.jsx)(t.code,{children:"setupListeners"})})," \u5df2\u7ecf\u88ab\u8c03\u7528\u3002"]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'no-transpile title="src/Pokemon.tsx" no-transpile',children:"import * as React from 'react'\nimport { useGetPokemonByNameQuery } from './services/pokemon'\n\nexport const Pokemon = ({ name }: { name: string }) => {\n  // \u81ea\u52a8\u6bcf3\u79d2\u91cd\u65b0\u83b7\u53d6\u4e00\u6b21\uff0c\u9664\u975e\u7a97\u53e3\u5931\u53bb\u7126\u70b9\n  const { data, status, error, refetch } = useGetPokemonByNameQuery(name, {\n    pollingInterval: 3000,\n    skipPollingIfUnfocused: true,\n  })\n\n  return <div>{data}</div>\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u6ca1\u6709 React Hooks \u7684\u52a8\u4f5c\u521b\u5efa\u5668\u4e2d\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"const { data, status, error, refetch } = store.dispatch(\n  endpoints.getCountById.initiate(id, {\n    subscriptionOptions: { pollingInterval: 3000 },\n  }),\n)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u4e0d\u4f7f\u7528-react-hooks-\u7684\u8f6e\u8be2",children:"\u4e0d\u4f7f\u7528 React Hooks \u7684\u8f6e\u8be2"}),"\n",(0,r.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u5728\u6ca1\u6709 React Hooks \u7684\u4fbf\u5229\u6027\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u8f6e\u8be2\uff0c\u4f60\u5c06\u9700\u8981\u624b\u52a8\u5728 promise \u5f15\u7528\u4e0a\u8c03\u7528 ",(0,r.jsx)(t.code,{children:"updateSubscriptionOptions"})," \u6765\u66f4\u65b0\u95f4\u9694\u3002\u8fd9\u79cd\u65b9\u6cd5\u56e0\u6846\u67b6\u800c\u5f02\uff0c\u4f46\u5728\u4efb\u4f55\u5730\u65b9\u90fd\u662f\u53ef\u80fd\u7684\u3002\u53c2\u89c1 ",(0,r.jsx)(t.a,{href:"./examples#svelte",children:"Svelte \u793a\u4f8b"})," \u4ee5\u4e86\u89e3\u4e00\u79cd\u53ef\u80fd\u6027\uff0c\u4ee5\u53ca ",(0,r.jsx)(t.a,{href:"/redux-toolkit-zh/rtk-query/usage/usage-without-react-hooks",children:"\u4e0d\u4f7f\u7528 React Hooks \u7684\u4f7f\u7528\u65b9\u6cd5"})," \u9875\u9762\u4ee5\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u624b\u52a8\u5904\u7406\u8ba2\u9605\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"queryRef.updateSubscriptionOptions({ pollingInterval: 0 })\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u8f6e\u8be2\u793a\u4f8b",children:"\u8f6e\u8be2\u793a\u4f8b"}),"\n",(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/polling?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-react-hooks-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);