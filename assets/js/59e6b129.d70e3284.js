"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[4680],{7358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=t(4848),c=t(8453);const s={title:"\u7ade\u6001\u6548\u5e94",hide_title:!0},a=void 0,d={id:"redux-saga/advanced/RacingEffects",title:"\u7ade\u6001\u6548\u5e94",description:"\u5728\u591a\u4e2a Effects \u4e4b\u95f4\u5f00\u59cb\u4e00\u573a\u7ade\u8d5b",source:"@site/docs/redux-saga/advanced/RacingEffects.md",sourceDirName:"redux-saga/advanced",slug:"/redux-saga/advanced/RacingEffects",permalink:"/redux-toolkit-zh/redux-saga/advanced/RacingEffects",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/redux-saga/advanced/RacingEffects.md",tags:[],version:"current",frontMatter:{title:"\u7ade\u6001\u6548\u5e94",hide_title:!0},sidebar:"reduxSaga",previous:{title:"\u975e\u963b\u585e\u8c03\u7528",permalink:"/redux-toolkit-zh/redux-saga/advanced/NonBlockingCalls"},next:{title:"\u6839 Saga",permalink:"/redux-toolkit-zh/redux-saga/advanced/RootSaga"}},i={},o=[{value:"\u5728\u591a\u4e2a Effects \u4e4b\u95f4\u5f00\u59cb\u4e00\u573a\u7ade\u8d5b",id:"\u5728\u591a\u4e2a-effects-\u4e4b\u95f4\u5f00\u59cb\u4e00\u573a\u7ade\u8d5b",level:2}];function l(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5728\u591a\u4e2a-effects-\u4e4b\u95f4\u5f00\u59cb\u4e00\u573a\u7ade\u8d5b",children:"\u5728\u591a\u4e2a Effects \u4e4b\u95f4\u5f00\u59cb\u4e00\u573a\u7ade\u8d5b"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u65f6\u6211\u4eec\u5e76\u884c\u542f\u52a8\u591a\u4e2a\u4efb\u52a1\uff0c\u4f46\u6211\u4eec\u4e0d\u60f3\u7b49\u5f85\u6240\u6709\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5f97\u5230",(0,r.jsx)(n.em,{children:"\u8d62\u5bb6"}),"\uff1a\u7b2c\u4e00\u4e2a\u89e3\u51b3\uff08\u6216\u62d2\u7edd\uff09\u7684\u4efb\u52a1\u3002",(0,r.jsx)(n.code,{children:"race"})," Effect \u63d0\u4f9b\u4e86\u4e00\u79cd\u89e6\u53d1\u591a\u4e2a Effects \u4e4b\u95f4\u7ade\u8d5b\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u4e00\u4e2a\u89e6\u53d1\u8fdc\u7a0b\u83b7\u53d6\u8bf7\u6c42\u7684\u4efb\u52a1\uff0c\u5e76\u5728 1 \u79d2\u5185\u9650\u5236\u54cd\u5e94\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { race, call, put, delay } from 'redux-saga/effects'\r\n\r\nfunction* fetchPostsWithTimeout() {\r\n  const {posts, timeout} = yield race({\r\n    posts: call(fetchApi, '/posts'),\r\n    timeout: delay(1000)\r\n  })\r\n\r\n  if (posts)\r\n    yield put({type: 'POSTS_RECEIVED', posts})\r\n  else\r\n    yield put({type: 'TIMEOUT_ERROR'})\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"race"})," \u7684\u53e6\u4e00\u4e2a\u6709\u7528\u7279\u6027\u662f\u5b83\u4f1a\u81ea\u52a8\u53d6\u6d88\u8f93\u6389\u7ade\u8d5b\u7684 Effects\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u6709\u4e24\u4e2a UI \u6309\u94ae\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7b2c\u4e00\u4e2a\u5728\u540e\u53f0\u542f\u52a8\u4e00\u4e2a\u4efb\u52a1\uff0c\u8be5\u4efb\u52a1\u5728\u4e00\u4e2a\u65e0\u9650\u5faa\u73af ",(0,r.jsx)(n.code,{children:"while (true)"})," \u4e2d\u8fd0\u884c\uff08\u4f8b\u5982\uff0c\u6bcf\u9694 x \u79d2\u4e0e\u670d\u52a1\u5668\u540c\u6b65\u4e00\u4e9b\u6570\u636e\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e00\u65e6\u540e\u53f0\u4efb\u52a1\u5f00\u59cb\uff0c\u6211\u4eec\u5c31\u542f\u7528\u7b2c\u4e8c\u4e2a\u6309\u94ae\uff0c\u8be5\u6309\u94ae\u5c06\u53d6\u6d88\u4efb\u52a1"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { race, take, call } from 'redux-saga/effects'\r\n\r\nfunction* backgroundTask() {\r\n  while (true) { ... }\r\n}\r\n\r\nfunction* watchStartBackgroundTask() {\r\n  while (true) {\r\n    yield take('START_BACKGROUND_TASK')\r\n    yield race({\r\n      task: call(backgroundTask),\r\n      cancel: take('CANCEL_TASK')\r\n    })\r\n  }\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5206\u6d3e ",(0,r.jsx)(n.code,{children:"CANCEL_TASK"})," \u64cd\u4f5c\u7684\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.code,{children:"race"})," Effect \u5c06\u81ea\u52a8\u53d6\u6d88 ",(0,r.jsx)(n.code,{children:"backgroundTask"}),"\uff0c\u5728\u5176\u4e2d\u629b\u51fa\u4e00\u4e2a\u53d6\u6d88\u9519\u8bef\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(6540);const c={},s=r.createContext(c);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);