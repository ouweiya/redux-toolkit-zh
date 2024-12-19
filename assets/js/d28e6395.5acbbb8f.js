"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[3607],{8179:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=t(4848),n=t(8453);const s={title:"\u4f7f\u7528 Saga \u8f85\u52a9\u51fd\u6570",hide_title:!0},c="\u4f7f\u7528 Saga Helpers",i={id:"redux-saga/basics/UsingSagaHelpers",title:"\u4f7f\u7528 Saga \u8f85\u52a9\u51fd\u6570",description:"redux-saga \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5305\u88c5\u5185\u90e8\u51fd\u6570\u7684\u8f85\u52a9\u6548\u679c\uff0c\u5f53\u67d0\u4e9b\u7279\u5b9a\u7684\u52a8\u4f5c\u88ab\u5206\u6d3e\u5230 Store \u65f6\uff0c\u5b83\u4eec\u4f1a\u751f\u6210\u4efb\u52a1\u3002",source:"@site/docs/redux-saga/basics/UsingSagaHelpers.md",sourceDirName:"redux-saga/basics",slug:"/redux-saga/basics/UsingSagaHelpers",permalink:"/redux-toolkit-zh/redux-saga/basics/UsingSagaHelpers",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/redux-saga/basics/UsingSagaHelpers.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Saga \u8f85\u52a9\u51fd\u6570",hide_title:!0},sidebar:"reduxSaga",previous:{title:"\u9519\u8bef\u5904\u7406",permalink:"/redux-toolkit-zh/redux-saga/basics/ErrorHandling"},next:{title:"\u901a\u9053",permalink:"/redux-toolkit-zh/redux-saga/advanced/Channels"}},d={},o=[];function l(e){const r={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"\u4f7f\u7528-saga-helpers",children:"\u4f7f\u7528 Saga Helpers"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"redux-saga"})," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5305\u88c5\u5185\u90e8\u51fd\u6570\u7684\u8f85\u52a9\u6548\u679c\uff0c\u5f53\u67d0\u4e9b\u7279\u5b9a\u7684\u52a8\u4f5c\u88ab\u5206\u6d3e\u5230 Store \u65f6\uff0c\u5b83\u4eec\u4f1a\u751f\u6210\u4efb\u52a1\u3002"]}),"\n",(0,a.jsx)(r.p,{children:"\u8fd9\u4e9b\u8f85\u52a9\u51fd\u6570\u662f\u57fa\u4e8e\u8f83\u4f4e\u7ea7\u522b\u7684 API \u6784\u5efa\u7684\u3002\u5728\u9ad8\u7ea7\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u770b\u5230\u5982\u4f55\u5b9e\u73b0\u8fd9\u4e9b\u51fd\u6570\u3002"}),"\n",(0,a.jsxs)(r.p,{children:["\u7b2c\u4e00\u4e2a\u51fd\u6570\uff0c",(0,a.jsx)(r.code,{children:"takeEvery"})," \u662f\u6700\u719f\u6089\u7684\uff0c\u5e76\u63d0\u4f9b\u4e86\u7c7b\u4f3c\u4e8e ",(0,a.jsx)(r.code,{children:"redux-thunk"})," \u7684\u884c\u4e3a\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u8ba9\u6211\u4eec\u7528\u5e38\u89c1\u7684 AJAX \u793a\u4f8b\u6765\u8bf4\u660e\u3002\u6bcf\u6b21\u70b9\u51fb Fetch \u6309\u94ae\u65f6\uff0c\u6211\u4eec\u90fd\u4f1a\u5206\u6d3e\u4e00\u4e2a ",(0,a.jsx)(r.code,{children:"FETCH_REQUESTED"})," \u52a8\u4f5c\u3002\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u542f\u52a8\u4e00\u4e2a\u4efb\u52a1\u6765\u5904\u7406\u8fd9\u4e2a\u52a8\u4f5c\uff0c\u8be5\u4efb\u52a1\u5c06\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u4e00\u4e9b\u6570\u636e\u3002"]}),"\n",(0,a.jsx)(r.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u5c06\u6267\u884c\u5f02\u6b65\u64cd\u4f5c\u7684\u4efb\u52a1\uff1a"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { call, put } from 'redux-saga/effects'\r\nimport Api from './path/to/api'\r\n\r\nexport function* fetchData(action) {\r\n  try {\r\n    const data = yield call(Api.fetchUser, action.payload.url)\r\n    yield put({ type: 'FETCH_SUCCEEDED', data })\r\n  } catch (error) {\r\n    yield put({ type: 'FETCH_FAILED', error })\r\n  }\r\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u8981\u5728\u6bcf\u4e2a ",(0,a.jsx)(r.code,{children:"FETCH_REQUESTED"})," \u52a8\u4f5c\u4e0a\u542f\u52a8\u4e0a\u8ff0\u4efb\u52a1\uff1a"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { takeEvery } from 'redux-saga/effects'\r\n\r\nfunction* watchFetchData() {\r\n  yield takeEvery('FETCH_REQUESTED', fetchData)\r\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,a.jsx)(r.code,{children:"takeEvery"})," \u5141\u8bb8\u540c\u65f6\u542f\u52a8\u591a\u4e2a ",(0,a.jsx)(r.code,{children:"fetchData"})," \u5b9e\u4f8b\u3002\u5728\u7ed9\u5b9a\u7684\u65f6\u523b\uff0c\u6211\u4eec\u53ef\u4ee5\u542f\u52a8\u4e00\u4e2a\u65b0\u7684 ",(0,a.jsx)(r.code,{children:"fetchData"})," \u4efb\u52a1\uff0c\u800c\u6b64\u65f6\u53ef\u80fd\u4ecd\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u5148\u524d\u7684 ",(0,a.jsx)(r.code,{children:"fetchData"})," \u4efb\u52a1\u5c1a\u672a\u7ed3\u675f\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u5982\u679c\u6211\u4eec\u53ea\u60f3\u83b7\u53d6\u6700\u65b0\u8bf7\u6c42\u7684\u54cd\u5e94\uff08\u4f8b\u5982\uff0c\u603b\u662f\u663e\u793a\u6570\u636e\u7684\u6700\u65b0\u7248\u672c\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(r.code,{children:"takeLatest"})," \u8f85\u52a9\u51fd\u6570\uff1a"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { takeLatest } from 'redux-saga/effects'\r\n\r\nfunction* watchFetchData() {\r\n  yield takeLatest('FETCH_REQUESTED', fetchData)\r\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u4e0e ",(0,a.jsx)(r.code,{children:"takeEvery"})," \u4e0d\u540c\uff0c",(0,a.jsx)(r.code,{children:"takeLatest"})," \u5728\u4efb\u4f55\u65f6\u523b\u53ea\u5141\u8bb8\u8fd0\u884c\u4e00\u4e2a ",(0,a.jsx)(r.code,{children:"fetchData"})," \u4efb\u52a1\u3002\u5e76\u4e14\u5b83\u5c06\u662f\u6700\u65b0\u542f\u52a8\u7684\u4efb\u52a1\u3002\u5982\u679c\u5728\u542f\u52a8\u53e6\u4e00\u4e2a ",(0,a.jsx)(r.code,{children:"fetchData"})," \u4efb\u52a1\u65f6\uff0c\u524d\u4e00\u4e2a\u4efb\u52a1\u4ecd\u5728\u8fd0\u884c\uff0c\u90a3\u4e48\u524d\u4e00\u4e2a\u4efb\u52a1\u5c06\u88ab\u81ea\u52a8\u53d6\u6d88\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u6709\u591a\u4e2a Sagas \u76d1\u89c6\u4e0d\u540c\u7684\u52a8\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u5185\u7f6e\u7684\u8f85\u52a9\u51fd\u6570\u521b\u5efa\u591a\u4e2a\u89c2\u5bdf\u8005\uff0c\u5b83\u4eec\u7684\u884c\u4e3a\u5c31\u50cf\u662f\u4f7f\u7528\u4e86 ",(0,a.jsx)(r.code,{children:"fork"})," \u6765\u751f\u6210\u5b83\u4eec\uff08\u6211\u4eec\u7a0d\u540e\u4f1a\u8c08\u5230 ",(0,a.jsx)(r.code,{children:"fork"}),"\u3002\u73b0\u5728\uff0c\u628a\u5b83\u770b\u4f5c\u662f\u4e00\u4e2a\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u540e\u53f0\u542f\u52a8\u591a\u4e2a sagas \u7684 Effect\uff09\u3002"]}),"\n",(0,a.jsx)(r.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-javascript",children:"import { takeEvery } from 'redux-saga/effects'\r\n\r\n// FETCH_USERS\r\nfunction* fetchUsers(action) { ... }\r\n\r\n// CREATE_USER\r\nfunction* createUser(action) { ... }\r\n\r\n// \u5e76\u884c\u4f7f\u7528\u5b83\u4eec\r\nexport default function* rootSaga() {\r\n  yield takeEvery('FETCH_USERS', fetchUsers)\r\n  yield takeEvery('CREATE_USER', createUser)\r\n}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var a=t(6540);const n={},s=a.createContext(n);function c(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);