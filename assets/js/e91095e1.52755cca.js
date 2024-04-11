"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[9250],{8260:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(4848),r=i(8453);const s={id:"conditional-fetching",title:"\u6761\u4ef6\u83b7\u53d6",sidebar_label:"\u6761\u4ef6\u83b7\u53d6",hide_title:!0,description:"RTK Query > Usage > Conditional Fetching: skipping fetching if needed"},o="\u6761\u4ef6\u83b7\u53d6",l={id:"rtk-query/usage/conditional-fetching",title:"\u6761\u4ef6\u83b7\u53d6",description:"RTK Query > Usage > Conditional Fetching: skipping fetching if needed",source:"@site/docs/rtk-query/usage/conditional-fetching.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/conditional-fetching",permalink:"/redux-toolkit-zh/rtk-query/usage/conditional-fetching",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/rtk-query/usage/conditional-fetching.mdx",tags:[],version:"current",frontMatter:{id:"conditional-fetching",title:"\u6761\u4ef6\u83b7\u53d6",sidebar_label:"\u6761\u4ef6\u83b7\u53d6",hide_title:!0,description:"RTK Query > Usage > Conditional Fetching: skipping fetching if needed"},sidebar:"docs",previous:{title:"\u624b\u52a8\u7f13\u5b58\u66f4\u65b0",permalink:"/redux-toolkit-zh/rtk-query/usage/manual-cache-updates"},next:{title:"\u9519\u8bef\u5904\u7406",permalink:"/redux-toolkit-zh/rtk-query/usage/error-handling"}},d={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6761\u4ef6\u83b7\u53d6\u793a\u4f8b",id:"\u6761\u4ef6\u83b7\u53d6\u793a\u4f8b",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\xa0"}),"\n",(0,t.jsx)(n.h1,{id:"\u6761\u4ef6\u83b7\u53d6",children:"\u6761\u4ef6\u83b7\u53d6"}),"\n",(0,t.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u8be2\u94a9\u5b50\u4f1a\u5728\u7ec4\u4ef6\u6302\u8f7d\u540e\u7acb\u5373\u5f00\u59cb\u83b7\u53d6\u6570\u636e\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5728\u67d0\u4e9b\u6761\u4ef6\u53d8\u4e3a\u771f\u65f6\u5ef6\u8fdf\u83b7\u53d6\u6570\u636e\u3002RTK Query \u652f\u6301\u6761\u4ef6\u83b7\u53d6\u4ee5\u5b9e\u73b0\u8fd9\u79cd\u884c\u4e3a\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u963b\u6b62\u67e5\u8be2\u81ea\u52a8\u8fd0\u884c\uff0c\u4f60\u53ef\u4ee5\u5728\u94a9\u5b50\u4e2d\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"skip"})," \u53c2\u6570\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'// \u4ee3\u7801\u5757\u5143\u6570\u636e \u4e0d\u8f6c\u8bd1 \u6807\u9898="Skip \u793a\u4f8b"\nconst Pokemon = ({ name, skip }: { name: string; skip: boolean }) => {\n  const { data, error, status } = useGetPokemonByNameQuery(name, {\n    skip,\n  });\n\n  return (\n    <div>\n      {name} - {status}\n    </div>\n  );\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53 ",(0,t.jsx)(n.code,{children:"skip"})," \u4e3a true\uff08\u6216\u8005 ",(0,t.jsx)(n.code,{children:"arg"})," \u4e2d\u4f20\u5165 ",(0,t.jsx)(n.code,{children:"skipToken"}),"\uff09\u65f6\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5982\u679c\u67e5\u8be2\u6709\u7f13\u5b58\u6570\u636e\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u521d\u59cb\u52a0\u8f7d\u65f6",(0,t.jsx)(n.strong,{children:"\u4e0d\u4f1a\u4f7f\u7528"}),"\u7f13\u5b58\u6570\u636e\uff0c\u5e76\u4e14\u5728 ",(0,t.jsx)(n.code,{children:"skip"})," \u6761\u4ef6\u88ab\u79fb\u9664\u4e4b\u524d\uff0c\u5c06\u5ffd\u7565\u6765\u81ea\u4efb\u4f55\u76f8\u540c\u67e5\u8be2\u7684\u66f4\u65b0"]}),"\n",(0,t.jsxs)(n.li,{children:["\u67e5\u8be2\u7684\u72b6\u6001\u5c06\u4e3a ",(0,t.jsx)(n.code,{children:"uninitialized"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u5728\u521d\u59cb\u52a0\u8f7d\u540e\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"skip: false"}),"\uff0c\u5c06\u4f7f\u7528\u7f13\u5b58\u7ed3\u679c"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5982\u679c\u67e5\u8be2\u6ca1\u6709\u7f13\u5b58\u6570\u636e\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u67e5\u8be2\u7684\u72b6\u6001\u5c06\u4e3a ",(0,t.jsx)(n.code,{children:"uninitialized"})]}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u67e5\u770b\u65f6\uff0c\u67e5\u8be2\u4e0d\u4f1a\u5b58\u5728\u4e8e\u72b6\u6001\u4e2d"}),"\n",(0,t.jsx)(n.li,{children:"\u67e5\u8be2\u4e0d\u4f1a\u5728\u6302\u8f7d\u65f6\u81ea\u52a8\u83b7\u53d6"}),"\n",(0,t.jsx)(n.li,{children:"\u5f53\u6dfb\u52a0\u4e86\u5176\u4ed6\u8fd0\u884c\u76f8\u540c\u67e5\u8be2\u7684\u7ec4\u4ef6\u65f6\uff0c\u67e5\u8be2\u4e0d\u4f1a\u81ea\u52a8\u8fd0\u884c"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Typescript \u7528\u6237\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks#skiptoken",children:(0,t.jsx)(n.code,{children:"skipToken"})})," \u4f5c\u4e3a\u8df3\u8fc7\u8fd0\u884c\u67e5\u8be2\u7684\u66ff\u4ee3\u9009\u9879\uff0c\u540c\u65f6\u4ecd\u4fdd\u6301\u7aef\u70b9\u7c7b\u578b\u7684\u51c6\u786e\u6027\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u6761\u4ef6\u83b7\u53d6\u793a\u4f8b",children:"\u6761\u4ef6\u83b7\u53d6\u793a\u4f8b"}),"\n",(0,t.jsx)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/conditional-fetching?fontsize=12&runonclick=1&hidenavigation=1&module=%2Fsrc%2FPokemon.tsx&moduleview=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"Conditional Fetching Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);