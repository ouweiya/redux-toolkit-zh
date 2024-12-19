"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[3496],{3064:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>i,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var A=r(4848),s=r(8453);const t={id:"Troubleshooting",title:"\u6545\u969c\u6392\u9664",hide_title:!0},a="\u6545\u969c\u6392\u67e5",c={id:"redux-saga/Troubleshooting",title:"\u6545\u969c\u6392\u9664",description:"\u6dfb\u52a0 saga \u540e\u5e94\u7528\u51bb\u7ed3",source:"@site/docs/redux-saga/Troubleshooting.md",sourceDirName:"redux-saga",slug:"/redux-saga/Troubleshooting",permalink:"/redux-toolkit-zh/redux-saga/Troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/redux-saga/Troubleshooting.md",tags:[],version:"current",frontMatter:{id:"Troubleshooting",title:"\u6545\u969c\u6392\u9664",hide_title:!0},sidebar:"reduxSaga",previous:{title:"\u5916\u90e8\u8d44\u6e90",permalink:"/redux-toolkit-zh/redux-saga/ExternalResources"},next:{title:"\u672f\u8bed\u8868",permalink:"/redux-toolkit-zh/redux-saga/Glossary"}},d={},o=[{value:"\u6dfb\u52a0 saga \u540e\u5e94\u7528\u51bb\u7ed3",id:"\u6dfb\u52a0-saga-\u540e\u5e94\u7528\u51bb\u7ed3",level:3},{value:"\u6211\u7684 Saga \u7f3a\u5c11\u6d3e\u53d1\u7684\u52a8\u4f5c",id:"\u6211\u7684-saga-\u7f3a\u5c11\u6d3e\u53d1\u7684\u52a8\u4f5c",level:3},{value:"\u9519\u8bef\u5192\u6ce1\u5230\u6839 saga \u7684\u9519\u8bef\u5806\u6808\u4e0d\u53ef\u8bfb",id:"\u9519\u8bef\u5192\u6ce1\u5230\u6839-saga-\u7684\u9519\u8bef\u5806\u6808\u4e0d\u53ef\u8bfb",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.h1,{id:"\u6545\u969c\u6392\u67e5",children:"\u6545\u969c\u6392\u67e5"}),"\n",(0,A.jsx)(n.h3,{id:"\u6dfb\u52a0-saga-\u540e\u5e94\u7528\u51bb\u7ed3",children:"\u6dfb\u52a0 saga \u540e\u5e94\u7528\u51bb\u7ed3"}),"\n",(0,A.jsxs)(n.p,{children:["\u786e\u4fdd\u4f60\u5728\u751f\u6210\u5668\u51fd\u6570\u4e2d ",(0,A.jsx)(n.code,{children:"yield"})," \u4e86\u6548\u679c\u3002"]}),"\n",(0,A.jsx)(n.p,{children:"\u8003\u8651\u4ee5\u4e0b\u793a\u4f8b\uff1a"}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-js",children:"import { take } from 'redux-saga/effects'\r\n\r\nfunction* logActions() {\r\n  while (true) {\r\n    const action = take() // \u9519\u8bef\r\n    console.log(action)\r\n  }\r\n}\n"})}),"\n",(0,A.jsxs)(n.p,{children:["\u5b83\u4f1a\u5c06\u5e94\u7528\u7a0b\u5e8f\u653e\u5165\u65e0\u9650\u5faa\u73af\uff0c\u56e0\u4e3a ",(0,A.jsx)(n.code,{children:"take()"})," \u53ea\u521b\u5efa\u6548\u679c\u7684\u63cf\u8ff0\u3002\u9664\u975e\u4f60\u4e3a\u4e2d\u95f4\u4ef6\u6267\u884c ",(0,A.jsx)(n.code,{children:"yield"}),"\uff0c\u5426\u5219 ",(0,A.jsx)(n.code,{children:"while"})," \u5faa\u73af\u5c06\u50cf\u5e38\u89c4 ",(0,A.jsx)(n.code,{children:"while"})," \u5faa\u73af\u4e00\u6837\u8fd0\u884c\uff0c\u5e76\u51bb\u7ed3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,A.jsxs)(n.p,{children:["\u6dfb\u52a0 ",(0,A.jsx)(n.code,{children:"yield"})," \u5c06\u6682\u505c\u751f\u6210\u5668\u5e76\u5c06\u63a7\u5236\u6743\u8fd4\u56de\u7ed9 Redux Saga \u4e2d\u95f4\u4ef6\uff0c\u8be5\u4e2d\u95f4\u4ef6\u5c06\u6267\u884c\u6548\u679c\u3002\u5728 ",(0,A.jsx)(n.code,{children:"take()"})," \u7684\u60c5\u51b5\u4e0b\uff0cRedux Saga \u5c06\u7b49\u5f85\u4e0b\u4e00\u4e2a\u5339\u914d\u6a21\u5f0f\u7684\u52a8\u4f5c\uff0c\u7136\u540e\u624d\u4f1a\u6062\u590d\u751f\u6210\u5668\u3002"]}),"\n",(0,A.jsxs)(n.p,{children:["\u8981\u4fee\u590d\u4e0a\u9762\u7684\u793a\u4f8b\uff0c",(0,A.jsx)(n.code,{children:"yield"})," \u7531 ",(0,A.jsx)(n.code,{children:"take()"})," \u8fd4\u56de\u7684\u6548\u679c\uff1a"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-js",children:"import { take } from 'redux-saga/effects'\r\n\r\nfunction* logActions() {\r\n  while (true) {\r\n    const action = yield take() // \u6b63\u786e\r\n    console.log(action)\r\n  }\r\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"\u6211\u7684-saga-\u7f3a\u5c11\u6d3e\u53d1\u7684\u52a8\u4f5c",children:"\u6211\u7684 Saga \u7f3a\u5c11\u6d3e\u53d1\u7684\u52a8\u4f5c"}),"\n",(0,A.jsx)(n.p,{children:"\u786e\u4fdd Saga \u6ca1\u6709\u5728\u67d0\u4e9b\u6548\u679c\u4e0a\u88ab\u963b\u585e\u3002\u5f53 Saga \u5728\u7b49\u5f85\u6548\u679c\u89e3\u51b3\u65f6\uff0c\u5b83\u5c06\u65e0\u6cd5\u63a5\u6536\u6d3e\u53d1\u7684\u52a8\u4f5c\uff0c\u76f4\u5230\u6548\u679c\u88ab\u89e3\u51b3\u3002"}),"\n",(0,A.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u8003\u8651\u8fd9\u4e2a\u4f8b\u5b50"}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-javascript",children:"function* watchRequestActions() {\r\n  while (true) {\r\n    const { url, params } = yield take('REQUEST')\r\n    yield call(handleRequestAction, url, params) // Saga \u5c06\u5728\u6b64\u5904\u963b\u585e\r\n  }\r\n}\r\n\r\nfunction* handleRequestAction(url, params) {\r\n  const response = yield call(someRemoteApi, url, params)\r\n  yield put(someAction(response))\r\n}\n"})}),"\n",(0,A.jsxs)(n.p,{children:["\u5f53 ",(0,A.jsx)(n.code,{children:"watchRequestActions"})," \u6267\u884c ",(0,A.jsx)(n.code,{children:"yield call(handleRequestAction, url, params)"})," \u65f6\uff0c\u5b83\u5c06\u7b49\u5f85 ",(0,A.jsx)(n.code,{children:"handleRequestAction"})," \u7ed3\u675f\u5e76\u8fd4\u56de\uff0c\u7136\u540e\u624d\u7ee7\u7eed\u4e0b\u4e00\u4e2a ",(0,A.jsx)(n.code,{children:"yield take"}),"\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u6709\u8fd9\u6837\u7684\u4e8b\u4ef6\u5e8f\u5217"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"UI                     watchRequestActions             handleRequestAction\r\n---------------------------------------------------------------------------\r\n.......................take('REQUEST').......................................\r\ndispatch(REQUEST)......call(handleRequestAction).......call(someRemoteApi)... \u7b49\u5f85\u670d\u52a1\u5668\u54cd\u5e94\r\n.............................................................................\r\n.............................................................................\r\ndispatch(REQUEST)............................................................ \u52a8\u4f5c\u4e22\u5931!!\r\n.............................................................................\r\n.............................................................................\r\n.......................................................put(someAction).......\r\n.......................take('REQUEST')....................................... saga \u6062\u590d\n"})}),"\n",(0,A.jsxs)(n.p,{children:["\u5982\u4e0a\u6240\u793a\uff0c\u5f53 Saga \u5728",(0,A.jsx)(n.strong,{children:"\u963b\u585e\u8c03\u7528"}),"\u4e0a\u88ab\u963b\u585e\u65f6\uff0c\u5b83\u5c06\u9519\u8fc7\u6240\u6709\u5728\u6b64\u671f\u95f4\u6d3e\u53d1\u7684\u52a8\u4f5c\u3002"]}),"\n",(0,A.jsxs)(n.p,{children:["\u4e3a\u4e86\u907f\u514d\u963b\u585e Saga\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,A.jsx)(n.code,{children:"fork"})," \u800c\u4e0d\u662f ",(0,A.jsx)(n.code,{children:"call"})," \u6765\u8fdb\u884c",(0,A.jsx)(n.strong,{children:"\u975e\u963b\u585e\u8c03\u7528"})]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{className:"language-javascript",children:"function* watchRequestActions() {\r\n  while (true) {\r\n    const { url, params } = yield take('REQUEST')\r\n    yield fork(handleRequestAction, url, params) // Saga \u5c06\u7acb\u5373\u6062\u590d\r\n  }\r\n}\n"})}),"\n",(0,A.jsx)(n.h3,{id:"\u9519\u8bef\u5192\u6ce1\u5230\u6839-saga-\u7684\u9519\u8bef\u5806\u6808\u4e0d\u53ef\u8bfb",children:"\u9519\u8bef\u5192\u6ce1\u5230\u6839 saga \u7684\u9519\u8bef\u5806\u6808\u4e0d\u53ef\u8bfb"}),"\n",(0,A.jsxs)(n.p,{children:['saga \u4e2d\u7684\u4efb\u52a1\u672c\u8d28\u4e0a\u662f\u5f02\u6b65\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u5fc5\u987b\u505a\u4e00\u4e9b\u989d\u5916\u7684\u5de5\u4f5c\u6765\u663e\u793a "saga \u5806\u6808"\uff0c\u5c31\u50cf\u5b83\u662f\u4e00\u7cfb\u5217\u540c\u6b65\u8c03\u7528\u7684\u94fe\u3002\u6240\u4ee5\u4ece ',(0,A.jsx)(n.code,{children:"redux-saga@v1"}),' \u5f00\u59cb\uff0c\u5f53\u9519\u8bef\u5192\u6ce1\u5230\u6839 saga \u65f6\uff0c\u5e93\u4f1a\u6784\u5efa\u90a3\u4e2a "saga \u5806\u6808" \u5e76\u5c06\u5176\u4f5c\u4e3a ',(0,A.jsx)(n.code,{children:"onError"})," \u56de\u8c03\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u5c5e\u6027 ",(0,A.jsx)(n.code,{children:"sagaStack: string"})," \u4f20\u9012\uff08\u4e5f\u53c2\u89c1 ",(0,A.jsx)(n.a,{href:"https://redux-saga.js.org/docs/api/index.html#createsagamiddlewareoptions",children:"\u4e2d\u95f4\u4ef6\u9009\u9879"}),"\uff09\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5c06\u5b83\u53d1\u9001\u5230\u4f60\u7684\u9519\u8bef\u8ddf\u8e2a\u7cfb\u7edf\u6216\u505a\u5176\u4ed6\u989d\u5916\u7684\u5de5\u4f5c\u3002"]}),"\n",(0,A.jsx)(n.p,{children:"\u7ed3\u679c\uff0c\u4f60\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u7c7b\u4f3c\u8fd9\u6837\u7684\u5185\u5bb9\u3002"}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"saga-error-stack.png",src:r(9414).A+"",width:"451",height:"213"})}),"\n",(0,A.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5728",(0,A.jsx)(n.strong,{children:"\u5f00\u53d1\u76ee\u7684"}),'\u4e2d\u6709\u90a3\u4e9b\u5e26\u6709\u6587\u4ef6\u540d\u548c\u884c\u53f7\u7684 "saga \u5806\u6808"\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0 ',(0,A.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-redux-saga",children:"babel-plugin"}),"\uff0c\u5b83\u5141\u8bb8\u4f60\u6709\u589e\u5f3a\u7684\u4fe1\u606f\u3002\r\n\u6587\u6863\u53ef\u5728",(0,A.jsx)(n.a,{href:"https://github.com/redux-saga/redux-saga/tree/main/packages/babel-plugin-redux-saga",children:"\u8fd9\u91cc"}),"\u627e\u5230\u3002\r\n\u5173\u4e8e babel-plugin \u4f7f\u7528\u793a\u4f8b\uff0c\u8bf7\u67e5\u770b",(0,A.jsx)(n.a,{href:"https://github.com/redux-saga/redux-saga/tree/main/examples/error-demo",children:"\u6b64\u793a\u4f8b"}),"\u3002"]}),"\n",(0,A.jsxs)(n.p,{children:["\u6dfb\u52a0 ",(0,A.jsx)(n.code,{children:"babel-plugin-redux-saga"})," \u540e\uff0c\u76f8\u540c\u7684\u8f93\u51fa\u770b\u8d77\u6765\u50cf"]}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"saga-error-stack-with-babel-plugin.png",src:r(5060).A+"",width:"595",height:"224"})}),"\n",(0,A.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a",(0,A.jsx)(n.a,{href:"https://github.com/redux-saga/redux-saga/blob/main/examples/error-demo/test/sagas.js",children:"\u5b83\u4e5f\u9002\u7528\u4e8e\u6d4b\u8bd5"}),"\uff0c\u53ea\u9700\u786e\u4fdd\u4f60\uff08\u6216\u4f60\u7684\u8fd0\u884c\u5668\uff09\u901a\u8fc7 ",(0,A.jsx)(n.code,{children:"sagaMiddleware"})," \u8fd0\u884c saga\u3002"]}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"saga-error-stack-node.png",src:r(3597).A+"",width:"764",height:"126"})})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,A.jsx)(n,{...e,children:(0,A.jsx)(l,{...e})}):l(e)}},3597:(e,n,r)=>{r.d(n,{A:()=>A});const A="data:image/png;base64,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"},5060:(e,n,r)=>{r.d(n,{A:()=>A});const A=r.p+"assets/images/saga-error-stack-with-babel-plugin-4b99ed376df0958b8ff7d12532d6d552.png"},9414:(e,n,r)=>{r.d(n,{A:()=>A});const A=r.p+"assets/images/saga-error-stack-28d091caba535307d7fc80064b8bfcdb.png"},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var A=r(6540);const s={},t=A.createContext(s);function a(e){const n=A.useContext(t);return A.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),A.createElement(t.Provider,{value:n},e.children)}}}]);