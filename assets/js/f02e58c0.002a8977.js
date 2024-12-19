"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[2756],{3667:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var c=s(4848),r=s(8453);const n={title:"\u6548\u679c",hide_title:!0},i="\u4e00\u4e2a\u5e38\u89c1\u7684\u62bd\u8c61\uff1aEffect",o={id:"redux-saga/basics/Effect",title:"\u6548\u679c",description:"\u4e00\u822c\u6765\u8bf4\uff0c\u4eceSaga\u5185\u90e8\u89e6\u53d1\u526f\u4f5c\u7528\u603b\u662f\u901a\u8fc7\u4ea7\u751f\u4e00\u4e9b\u58f0\u660e\u6027\u7684Effect\u6765\u5b8c\u6210\u7684\u3002\uff08\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5yield Promise\uff0c\u4f46\u662f\u8fd9\u4f1a\u4f7f\u6d4b\u8bd5\u53d8\u5f97\u56f0\u96be\uff0c\u6b63\u5982\u6211\u4eec\u5728\u7b2c\u4e00\u90e8\u5206\u770b\u5230\u7684\u3002\uff09",source:"@site/docs/redux-saga/basics/Effect.md",sourceDirName:"redux-saga/basics",slug:"/redux-saga/basics/Effect",permalink:"/redux-toolkit-zh/redux-saga/basics/Effect",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/redux-saga/basics/Effect.md",tags:[],version:"current",frontMatter:{title:"\u6548\u679c",hide_title:!0},sidebar:"reduxSaga",previous:{title:"\u5206\u53d1\u64cd\u4f5c",permalink:"/redux-toolkit-zh/redux-saga/basics/DispatchingActions"},next:{title:"\u9519\u8bef\u5904\u7406",permalink:"/redux-toolkit-zh/redux-saga/basics/ErrorHandling"}},d={},a=[];function l(e){const t={code:"code",h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"\u4e00\u4e2a\u5e38\u89c1\u7684\u62bd\u8c61effect",children:"\u4e00\u4e2a\u5e38\u89c1\u7684\u62bd\u8c61\uff1aEffect"}),"\n",(0,c.jsx)(t.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u4eceSaga\u5185\u90e8\u89e6\u53d1\u526f\u4f5c\u7528\u603b\u662f\u901a\u8fc7\u4ea7\u751f\u4e00\u4e9b\u58f0\u660e\u6027\u7684Effect\u6765\u5b8c\u6210\u7684\u3002\uff08\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5yield Promise\uff0c\u4f46\u662f\u8fd9\u4f1a\u4f7f\u6d4b\u8bd5\u53d8\u5f97\u56f0\u96be\uff0c\u6b63\u5982\u6211\u4eec\u5728\u7b2c\u4e00\u90e8\u5206\u770b\u5230\u7684\u3002\uff09"}),"\n",(0,c.jsxs)(t.p,{children:["Saga\u5b9e\u9645\u4e0a\u505a\u7684\u662f\u5c06\u6240\u6709\u8fd9\u4e9bEffects\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u4ee5\u5b9e\u73b0\u6240\u9700\u7684\u63a7\u5236\u6d41\u3002\u6700\u57fa\u672c\u7684\u4f8b\u5b50\u662f\u901a\u8fc7\u5c06yield\u7684Effects\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5730\u653e\u7f6e\u6765\u5e8f\u5217\u5316\u5b83\u4eec\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u719f\u6089\u7684\u63a7\u5236\u6d41\u64cd\u4f5c\u7b26\uff08",(0,c.jsx)(t.code,{children:"if"}),"\uff0c",(0,c.jsx)(t.code,{children:"while"}),"\uff0c",(0,c.jsx)(t.code,{children:"for"}),"\uff09\u6765\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u63a7\u5236\u6d41\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u6211\u4eec\u770b\u5230\uff0c\u4f7f\u7528\u50cf",(0,c.jsx)(t.code,{children:"call"}),"\u548c",(0,c.jsx)(t.code,{children:"put"}),"\u8fd9\u6837\u7684Effects\uff0c\u7ed3\u5408\u9ad8\u7ea7APIs\u5982",(0,c.jsx)(t.code,{children:"takeEvery"}),"\uff0c\u4f7f\u6211\u4eec\u80fd\u591f\u5b9e\u73b0\u4e0e",(0,c.jsx)(t.code,{children:"redux-thunk"}),"\u76f8\u540c\u7684\u4e8b\u60c5\uff0c\u4f46\u5e26\u6765\u7684\u597d\u5904\u662f\u6613\u4e8e\u6d4b\u8bd5\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u4f46\u662f",(0,c.jsx)(t.code,{children:"redux-saga"}),"\u76f8\u6bd4",(0,c.jsx)(t.code,{children:"redux-thunk"}),"\u8fd8\u6709\u53e6\u4e00\u4e2a\u4f18\u52bf\u3002\u5728\u9ad8\u7ea7\u90e8\u5206\uff0c\u4f60\u4f1a\u9047\u5230\u4e00\u4e9b\u66f4\u5f3a\u5927\u7684Effects\uff0c\u5b83\u4eec\u8ba9\u4f60\u80fd\u591f\u8868\u8fbe\u590d\u6742\u7684\u63a7\u5236\u6d41\uff0c\u540c\u65f6\u4ecd\u7136\u5141\u8bb8\u540c\u6837\u7684\u53ef\u6d4b\u8bd5\u6027\u4f18\u52bf\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var c=s(6540);const r={},n=c.createContext(r);function i(e){const t=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(n.Provider,{value:t},e.children)}}}]);