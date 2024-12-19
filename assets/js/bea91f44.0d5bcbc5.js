"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[6595],{9e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(4848),r=t(8453);const s={title:"\u4f7f\u7528 Run Saga",hide_title:!0},d="\u5c06 Sagas \u8fde\u63a5\u5230\u5916\u90e8\u8f93\u5165/\u8f93\u51fa",o={id:"redux-saga/advanced/UsingRunSaga",title:"\u4f7f\u7528 Run Saga",description:"\u6211\u4eec\u770b\u5230 take \u6548\u679c\u662f\u901a\u8fc7\u7b49\u5f85\u5411 Store \u5206\u6d3e\u7684\u64cd\u4f5c\u6765\u89e3\u51b3\u7684\u3002\u800c put \u6548\u679c\u662f\u901a\u8fc7\u5206\u6d3e\u4f5c\u4e3a\u53c2\u6570\u63d0\u4f9b\u7684\u64cd\u4f5c\u6765\u89e3\u51b3\u7684\u3002",source:"@site/docs/redux-saga/advanced/UsingRunSaga.md",sourceDirName:"redux-saga/advanced",slug:"/redux-saga/advanced/UsingRunSaga",permalink:"/redux-toolkit-zh/redux-saga/advanced/UsingRunSaga",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/redux-saga/advanced/UsingRunSaga.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Run Saga",hide_title:!0},sidebar:"reduxSaga",previous:{title:"\u6d4b\u8bd5",permalink:"/redux-toolkit-zh/redux-saga/advanced/Testing"},next:{title:"\u98df\u8c31",permalink:"/redux-toolkit-zh/redux-saga/recipes"}},i={},c=[];function u(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u5c06-sagas-\u8fde\u63a5\u5230\u5916\u90e8\u8f93\u5165\u8f93\u51fa",children:"\u5c06 Sagas \u8fde\u63a5\u5230\u5916\u90e8\u8f93\u5165/\u8f93\u51fa"}),"\n",(0,a.jsxs)(n.p,{children:["\u6211\u4eec\u770b\u5230 ",(0,a.jsx)(n.code,{children:"take"})," \u6548\u679c\u662f\u901a\u8fc7\u7b49\u5f85\u5411 Store \u5206\u6d3e\u7684\u64cd\u4f5c\u6765\u89e3\u51b3\u7684\u3002\u800c ",(0,a.jsx)(n.code,{children:"put"})," \u6548\u679c\u662f\u901a\u8fc7\u5206\u6d3e\u4f5c\u4e3a\u53c2\u6570\u63d0\u4f9b\u7684\u64cd\u4f5c\u6765\u89e3\u51b3\u7684\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53 Saga \u542f\u52a8\uff08\u65e0\u8bba\u662f\u5728\u542f\u52a8\u65f6\u8fd8\u662f\u7a0d\u540e\u52a8\u6001\u542f\u52a8\uff09\u65f6\uff0c\u4e2d\u95f4\u4ef6\u4f1a\u81ea\u52a8\u5c06\u5176 ",(0,a.jsx)(n.code,{children:"take"}),"/",(0,a.jsx)(n.code,{children:"put"})," \u8fde\u63a5\u5230 store\u3002\u8fd9\u4e24\u79cd\u6548\u679c\u53ef\u4ee5\u88ab\u770b\u4f5c\u662f Saga \u7684\u4e00\u79cd\u8f93\u5165/\u8f93\u51fa\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"redux-saga"})," \u63d0\u4f9b\u4e86\u4e00\u79cd\u5728 Redux \u4e2d\u95f4\u4ef6\u73af\u5883\u4e4b\u5916\u8fd0\u884c Saga \u5e76\u5c06\u5176\u8fde\u63a5\u5230\u81ea\u5b9a\u4e49\u8f93\u5165/\u8f93\u51fa\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { runSaga, stdChannel } from \'redux-saga\'\r\n\r\nconst emitter = new EventEmitter()\r\nconst channel = stdChannel()\r\nemitter.on("action", channel.put)\r\n\r\nconst myIO = {\r\n  // \u8fd9\u5c06\u7528\u4e8e\u534f\u8c03 take \u548c put \u6548\u679c\r\n  channel,\r\n  // \u8fd9\u5c06\u7528\u4e8e\u89e3\u51b3 put \u6548\u679c\r\n  dispatch(output) {\r\n    emitter.emit("action", output)\r\n  },\r\n  // \u8fd9\u5c06\u7528\u4e8e\u89e3\u51b3 select \u6548\u679c\r\n  getState() {\r\n    return state\r\n  }\r\n}\r\n\r\nrunSaga(\r\n  myIO,\r\n  function* saga() { ... },\r\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,a.jsx)(n.a,{href:"https://redux-saga.js.org/docs/api/index.html##runsagaoptions-saga-args",children:"API \u6587\u6863"}),"\uff0c",(0,a.jsx)(n.a,{href:"/redux-toolkit-zh/redux-saga/advanced/Channels",children:"Channels"}),"\uff0c",(0,a.jsx)(n.a,{href:"https://codesandbox.io/s/1yq1lx77jq",children:"\u6f14\u793a"}),"\u3002"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function d(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);