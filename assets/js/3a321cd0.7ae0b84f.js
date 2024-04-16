"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[3936],{4933:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>i});var n=r(4848),s=r(8453);const d={title:"\u6839 Saga",hide_title:!0},c="\u6839 Saga \u6a21\u5f0f",l={id:"redux-saga/advanced/RootSaga",title:"\u6839 Saga",description:"\u6839 Saga \u5c06\u591a\u4e2a Saga \u805a\u5408\u5230\u4e00\u4e2a\u5355\u4e00\u7684\u5165\u53e3\u70b9\uff0c\u4f9b sagaMiddleware \u8fd0\u884c\u3002",source:"@site/docs/redux-saga/advanced/RootSaga.md",sourceDirName:"redux-saga/advanced",slug:"/redux-saga/advanced/RootSaga",permalink:"/redux-toolkit-zh/redux-saga/advanced/RootSaga",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/redux-saga/advanced/RootSaga.md",tags:[],version:"current",frontMatter:{title:"\u6839 Saga",hide_title:!0},sidebar:"reduxSaga",previous:{title:"\u7ade\u6001\u6548\u5e94",permalink:"/redux-toolkit-zh/redux-saga/advanced/RacingEffects"},next:{title:"\u5e76\u884c\u8fd0\u884c\u4efb\u52a1",permalink:"/redux-toolkit-zh/redux-saga/advanced/RunningTasksInParallel"}},o={},i=[{value:"\u975e\u963b\u585e fork \u6548\u679c",id:"\u975e\u963b\u585e-fork-\u6548\u679c",level:2},{value:"\u5728 all \u6548\u679c\u4e2d\u5d4c\u5957 fork \u6548\u679c",id:"\u5728-all-\u6548\u679c\u4e2d\u5d4c\u5957-fork-\u6548\u679c",level:2},{value:"\u907f\u514d\u5728 race \u6548\u679c\u4e2d\u5d4c\u5957 fork \u6548\u679c",id:"\u907f\u514d\u5728-race-\u6548\u679c\u4e2d\u5d4c\u5957-fork-\u6548\u679c",level:2},{value:"\u4fdd\u6301\u6839\u6d3b\u8dc3",id:"\u4fdd\u6301\u6839\u6d3b\u8dc3",level:2},{value:"\u4fdd\u6301\u6240\u6709\u4e8b\u7269\u6d3b\u8dc3",id:"\u4fdd\u6301\u6240\u6709\u4e8b\u7269\u6d3b\u8dc3",level:2}];function t(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"\u6839-saga-\u6a21\u5f0f",children:"\u6839 Saga \u6a21\u5f0f"}),"\n",(0,n.jsx)(a.p,{children:"\u6839 Saga \u5c06\u591a\u4e2a Saga \u805a\u5408\u5230\u4e00\u4e2a\u5355\u4e00\u7684\u5165\u53e3\u70b9\uff0c\u4f9b sagaMiddleware \u8fd0\u884c\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["\u5728",(0,n.jsx)(a.a,{href:"/redux-toolkit-zh/redux-saga/introduction/BeginnerTutorial",children:"\u521d\u7ea7\u6559\u7a0b"}),"\u4e2d\uff0c\u5c55\u793a\u4e86\u4f60\u7684\u6839 saga \u53ef\u80fd\u4f1a\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"export default function* rootSaga() {\r\n  yield all([\r\n    helloSaga(),\r\n    watchIncrementAsync()\r\n  ])\r\n  // all-effect \u4e4b\u540e\u7684\u4ee3\u7801\r\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u8fd9\u662f\u5b9e\u73b0\u6839\u7684\u51e0\u79cd\u65b9\u5f0f\u4e4b\u4e00\u3002\u8fd9\u91cc\uff0c",(0,n.jsx)(a.code,{children:"all"})," \u6548\u679c\u7528\u4e8e\u6570\u7ec4\uff0c\u4f60\u7684 sagas \u5c06\u5e76\u884c\u6267\u884c\u3002\u5176\u4ed6\u6839\u5b9e\u73b0\u53ef\u80fd\u4f1a\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u5904\u7406\u9519\u8bef\u548c\u66f4\u590d\u6742\u7684\u6570\u636e\u6d41\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u975e\u963b\u585e-fork-\u6548\u679c",children:"\u975e\u963b\u585e fork \u6548\u679c"}),"\n",(0,n.jsxs)(a.p,{children:["\u8d21\u732e\u8005 @slorber \u5728 ",(0,n.jsx)(a.a,{href:"https://github.com/redux-saga/redux-saga/issues/760",children:"issue#760"})," \u4e2d\u63d0\u5230\u4e86\u5176\u4ed6\u51e0\u79cd\u5e38\u89c1\u7684\u6839\u5b9e\u73b0\u3002\u9996\u5148\uff0c\u6709\u4e00\u79cd\u6d41\u884c\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5176\u884c\u4e3a\u7c7b\u4f3c\u4e8e\u6559\u7a0b\u4e2d\u7684\u6839 saga \u884c\u4e3a\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"export default function* rootSaga() {\r\n  yield fork(saga1)\r\n  yield fork(saga2)\r\n  yield fork(saga3)\r\n  // fork-effect \u4e4b\u540e\u7684\u4ee3\u7801\r\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u4f7f\u7528\u4e09\u4e2a\u72ec\u7279\u7684 ",(0,n.jsx)(a.code,{children:"yield fork"})," \u5c06\u8fd4\u56de\u4e09\u6b21\u4efb\u52a1\u63cf\u8ff0\u7b26\u3002\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7ed3\u679c\u884c\u4e3a\u662f\u6240\u6709\u7684\u5b50 saga \u90fd\u6309\u7167\u76f8\u540c\u7684\u987a\u5e8f\u5f00\u59cb\u548c\u6267\u884c\u3002\u7531\u4e8e ",(0,n.jsx)(a.code,{children:"fork"})," \u662f\u975e\u963b\u585e\u7684\uff0c",(0,n.jsx)(a.code,{children:"rootSaga"})," \u53ef\u4ee5\u5728\u5b50 saga \u7ee7\u7eed\u8fd0\u884c\u5e76\u88ab\u5176\u5185\u90e8\u6548\u679c\u963b\u585e\u7684\u540c\u65f6\u5b8c\u6210\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u4e00\u4e2a\u5927\u7684 all \u6548\u679c\u548c\u51e0\u4e2a fork \u6548\u679c\u4e4b\u95f4\u7684\u533a\u522b\u662f\uff0c",(0,n.jsx)(a.code,{children:"all"})," \u6548\u679c\u662f\u963b\u585e\u7684\uff0c\u6240\u4ee5 ",(0,n.jsx)(a.em,{children:"all-effect \u4e4b\u540e\u7684\u4ee3\u7801"}),"\uff08\u53c2\u89c1\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca\uff09\u5728\u6240\u6709\u5b50 saga \u5b8c\u6210\u65f6\u6267\u884c\uff0c\u800c ",(0,n.jsx)(a.code,{children:"fork"})," \u6548\u679c\u662f\u975e\u963b\u585e\u7684\uff0c\u6240\u4ee5 ",(0,n.jsx)(a.em,{children:"fork-effect \u4e4b\u540e\u7684\u4ee3\u7801"})," \u5728\u4ea7\u751f fork \u6548\u679c\u540e\u7acb\u5373\u6267\u884c\u3002\u53e6\u4e00\u4e2a\u533a\u522b\u662f\uff0c\u5f53\u4f7f\u7528 fork \u6548\u679c\u65f6\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230\u4efb\u52a1\u63cf\u8ff0\u7b26\uff0c\u6240\u4ee5\u5728\u540e\u7eed\u7684\u4ee3\u7801\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4efb\u52a1\u63cf\u8ff0\u7b26\u53d6\u6d88/\u52a0\u5165 forked \u4efb\u52a1\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u5728-all-\u6548\u679c\u4e2d\u5d4c\u5957-fork-\u6548\u679c",children:"\u5728 all \u6548\u679c\u4e2d\u5d4c\u5957 fork \u6548\u679c"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"const [task1, task2, task3] = yield all([ fork(saga1), fork(saga2), fork(saga3) ])\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u8bbe\u8ba1\u6839 saga \u65f6\u6709\u53e6\u4e00\u79cd\u6d41\u884c\u7684\u6a21\u5f0f\uff1a\u5728 ",(0,n.jsx)(a.code,{children:"all"})," \u6548\u679c\u4e2d\u5d4c\u5957 ",(0,n.jsx)(a.code,{children:"fork"})," \u6548\u679c\u3002\u8fd9\u6837\u505a\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u4efb\u52a1\u63cf\u8ff0\u7b26\u6570\u7ec4\uff0c",(0,n.jsx)(a.code,{children:"all"})," \u6548\u679c\u4e4b\u540e\u7684\u4ee3\u7801\u5c06\u7acb\u5373\u6267\u884c\uff0c\u56e0\u4e3a\u6bcf\u4e2a ",(0,n.jsx)(a.code,{children:"fork"})," \u6548\u679c\u90fd\u662f\u975e\u963b\u585e\u7684\uff0c\u5e76\u540c\u6b65\u8fd4\u56de\u4e00\u4e2a\u4efb\u52a1\u63cf\u8ff0\u7b26\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u5c3d\u7ba1 ",(0,n.jsx)(a.code,{children:"fork"})," \u6548\u679c\u5d4c\u5957\u5728 ",(0,n.jsx)(a.code,{children:"all"})," \u6548\u679c\u4e2d\uff0c\u4f46\u5b83\u4eec\u603b\u662f\u901a\u8fc7\u5e95\u5c42\u7684 forkQueue \u4e0e\u7236\u4efb\u52a1\u8fde\u63a5\u3002\u6765\u81ea forked \u4efb\u52a1\u7684\u672a\u6355\u83b7\u9519\u8bef\u4f1a\u5192\u6ce1\u5230\u7236\u4efb\u52a1\uff0c\u4ece\u800c\u4e2d\u6b62\u5b83\uff08\u53ca\u5176\u6240\u6709\u5b50\u4efb\u52a1\uff09 - \u5b83\u4eec\u4e0d\u80fd\u88ab\u7236\u4efb\u52a1\u6355\u83b7\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u907f\u514d\u5728-race-\u6548\u679c\u4e2d\u5d4c\u5957-fork-\u6548\u679c",children:"\u907f\u514d\u5728 race \u6548\u679c\u4e2d\u5d4c\u5957 fork \u6548\u679c"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"// \u4e0d\u8981\u8fd9\u6837\u505a\u3002fork \u6548\u679c\u603b\u662f\u7acb\u5373\u8d62\u5f97\u6bd4\u8d5b\u3002\r\nyield race([\r\n  fork(someSaga),\r\n  take('SOME-ACTION'),\r\n  somePromise,\r\n])\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u53e6\u4e00\u65b9\u9762\uff0c",(0,n.jsx)(a.code,{children:"race"})," \u6548\u679c\u4e2d\u7684 ",(0,n.jsx)(a.code,{children:"fork"})," \u6548\u679c\u5f88\u53ef\u80fd\u662f\u4e00\u4e2a bug\u3002\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u7531\u4e8e ",(0,n.jsx)(a.code,{children:"fork"})," \u6548\u679c\u662f\u975e\u963b\u585e\u7684\uff0c\u5b83\u4eec\u603b\u662f\u4f1a\u7acb\u5373\u8d62\u5f97\u6bd4\u8d5b\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u4fdd\u6301\u6839\u6d3b\u8dc3",children:"\u4fdd\u6301\u6839\u6d3b\u8dc3"}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u5b9e\u8df5\u4e2d\uff0c\u8fd9\u4e9b\u5b9e\u73b0\u5e76\u4e0d\u5b9e\u7528\uff0c\u56e0\u4e3a\u4f60\u7684 ",(0,n.jsx)(a.code,{children:"rootSaga"})," \u5c06\u5728\u4efb\u4f55\u5355\u4e2a\u5b50\u6548\u679c\u6216 saga \u7684\u7b2c\u4e00\u4e2a\u9519\u8bef\u4e0a\u7ec8\u6b62\uff0c\u5e76\u5d29\u6e83\u4f60\u7684\u6574\u4e2a\u5e94\u7528\uff01\u7279\u522b\u662f Ajax \u8bf7\u6c42\u4f1a\u4f7f\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5b8c\u5168\u4f9d\u8d56\u4e8e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5411\u5176\u53d1\u51fa\u8bf7\u6c42\u7684\u4efb\u4f55\u7aef\u70b9\u7684\u72b6\u6001\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"spawn"})," \u662f\u4e00\u4e2a\u6548\u679c\uff0c\u5b83\u4f1a\u5c06\u4f60\u7684\u5b50 saga \u4e0e\u5176\u7236\u7ea7\u65ad\u5f00\u8fde\u63a5\uff0c\u4f7f\u5176\u53ef\u4ee5\u5728\u4e0d\u5d29\u6e83\u5176\u7236\u7ea7\u7684\u60c5\u51b5\u4e0b\u5931\u8d25\u3002\u663e\u7136\uff0c\u8fd9\u5e76\u4e0d\u80fd\u514d\u9664\u6211\u4eec\u4f5c\u4e3a\u5f00\u53d1\u8005\u5904\u7406\u9519\u8bef\u7684\u8d23\u4efb\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u53ef\u80fd\u4f1a\u4ece\u5f00\u53d1\u8005\u7684\u89c6\u89d2\u63a9\u76d6\u67d0\u4e9b\u5931\u8d25\uff0c\u5bfc\u81f4\u540e\u7eed\u95ee\u9898\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/redux-toolkit-zh/redux-saga/api#spawnfn-args",children:(0,n.jsx)(a.code,{children:"spawn"})})," \u6548\u679c\u53ef\u80fd\u88ab\u8ba4\u4e3a\u7c7b\u4f3c\u4e8e React \u4e2d\u7684 ",(0,n.jsx)(a.a,{href:"https://reactjs.org/docs/error-boundaries.html",children:"Error Boundaries"}),"\uff0c\u5b83\u53ef\u4ee5\u5728 saga \u6811\u7684\u67d0\u4e2a\u7ea7\u522b\u4f5c\u4e3a\u989d\u5916\u7684\u5b89\u5168\u63aa\u65bd\u4f7f\u7528\uff0c\u5207\u65ad\u5931\u8d25\u7684\u529f\u80fd\uff0c\u4e0d\u8ba9\u6574\u4e2a\u5e94\u7528\u5d29\u6e83\u3002\u533a\u522b\u5728\u4e8e\uff0c\u6ca1\u6709\u50cf React Error Boundaries \u90a3\u6837\u7684\u7279\u6b8a\u8bed\u6cd5 ",(0,n.jsx)(a.code,{children:"componentDidCatch"}),"\u3002\u4f60\u4ecd\u7136\u9700\u8981\u7f16\u5199\u81ea\u5df1\u7684\u9519\u8bef\u5904\u7406\u548c\u6062\u590d\u4ee3\u7801\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"export default function* rootSaga() {\r\n  yield spawn(saga1)\r\n  yield spawn(saga2)\r\n  yield spawn(saga3)\r\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u8fd9\u4e2a\u5b9e\u73b0\u4e2d\uff0c\u5373\u4f7f\u4e00\u4e2a saga \u5931\u8d25\uff0c",(0,n.jsx)(a.code,{children:"rootSaga"})," \u548c\u5176\u4ed6 sagas \u4e5f\u4e0d\u4f1a\u88ab\u6740\u6b7b\u3002\u7136\u800c\uff0c\u8fd9\u4e5f\u53ef\u80fd\u662f\u6709\u95ee\u9898\u7684\uff0c\u56e0\u4e3a\u5931\u8d25\u7684 saga \u5728\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u5185\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u4fdd\u6301\u6240\u6709\u4e8b\u7269\u6d3b\u8dc3",children:"\u4fdd\u6301\u6240\u6709\u4e8b\u7269\u6d3b\u8dc3"}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u4f60\u7684 sagas \u80fd\u591f\u5728\u5931\u8d25\u540e\u91cd\u65b0\u542f\u52a8\u3002\u597d\u5904\u662f\u4f60\u7684\u5e94\u7528\u548c sagas \u53ef\u80fd\u5728\u5931\u8d25\u540e\u7ee7\u7eed\u5de5\u4f5c\uff0c\u4f8b\u5982\uff0c\u4e00\u4e2a ",(0,n.jsx)(a.code,{children:"yield takeEvery(myActionType)"})," \u7684 saga\u3002\u4f46\u6211\u4eec\u4e0d\u5efa\u8bae\u8fd9\u4f5c\u4e3a\u4fdd\u6301\u6240\u6709 sagas \u6d3b\u8dc3\u7684\u4e00\u63fd\u5b50\u89e3\u51b3\u65b9\u6848\u3002\u5f88\u53ef\u80fd\u8ba9\u4f60\u7684 saga \u5728\u7406\u667a\u548c\u53ef\u9884\u6d4b\u7684\u60c5\u51b5\u4e0b\u5931\u8d25\uff0c\u5e76\u5904\u7406/\u8bb0\u5f55\u4f60\u7684\u9519\u8bef\u66f4\u6709\u610f\u4e49\u3002"]}),"\n",(0,n.jsx)(a.p,{children:"\u4f8b\u5982\uff0c@ajwhite \u63d0\u4f9b\u4e86\u8fd9\u6837\u4e00\u4e2a\u573a\u666f\uff0c\u4f5c\u4e3a\u4fdd\u6301\u4f60\u7684 saga \u6d3b\u8dc3\u4f1a\u5bfc\u81f4\u66f4\u591a\u95ee\u9898\u7684\u4e00\u4e2a\u6848\u4f8b\uff1a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"function* sagaThatMayCrash () {\r\n  // \u7b49\u5f85\u4e00\u4e9b\u5728\u5e94\u7528\u542f\u52a8\u671f\u95f4\u53d1\u751f\u7684\u4e8b\u60c5\r\n  yield take('APP_INITIALIZED')\r\n\r\n  // \u5047\u8bbe\u5b83\u5728\u8fd9\u91cc\u6b7b\u6389\r\n  yield call(doSomethingThatMayCrash)\r\n}\n"})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"\u5982\u679c sagaThatMayCrash \u91cd\u542f\uff0c\u5b83\u5c06\u91cd\u542f\u5e76\u7b49\u5f85\u4e00\u4e2a\u53ea\u5728\u5e94\u7528\u542f\u52a8\u65f6\u53d1\u751f\u4e00\u6b21\u7684\u52a8\u4f5c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u91cd\u542f\uff0c\u4f46\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u6062\u590d\u3002"}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["\u4f46\u5bf9\u4e8e\u90a3\u4e9b\u4ece\u5f00\u59cb\u5c31\u4f1a\u53d7\u76ca\u7684\u7279\u5b9a\u60c5\u51b5\uff0c\u7528\u6237 @granmoe \u5728 ",(0,n.jsx)(a.a,{href:"https://github.com/redux-saga/redux-saga/issues/570",children:"issue#570"})," \u4e2d\u63d0\u51fa\u4e86\u8fd9\u6837\u7684\u5b9e\u73b0\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",children:"function* rootSaga () {\r\n  const sagas = [\r\n    saga1,\r\n    saga2,\r\n    saga3,\r\n  ];\r\n\r\n  yield all(sagas.map(saga =>\r\n    spawn(function* () {\r\n      while (true) {\r\n        try {\r\n          yield call(saga)\r\n          break\r\n        } catch (e) {\r\n          console.log(e)\r\n        }\r\n      }\r\n    }))\r\n  );\r\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u8fd9\u79cd\u7b56\u7565\u5c06\u6211\u4eec\u7684\u5b50 sagas \u6620\u5c04\u5230\u751f\u6210\u7684\u751f\u6210\u5668\uff08\u5c06\u5b83\u4eec\u4ece\u6839\u7236\u7ea7\u5206\u79bb\uff09\uff0c\u8fd9\u4e9b\u751f\u6210\u5668\u5728 ",(0,n.jsx)(a.code,{children:"try"})," \u5757\u4e2d\u542f\u52a8\u6211\u4eec\u7684 sagas \u4f5c\u4e3a\u5b50\u4efb\u52a1\u3002\u6211\u4eec\u7684 saga \u5c06\u8fd0\u884c\u5230\u7ec8\u6b62\uff0c\u7136\u540e\u81ea\u52a8\u91cd\u542f\u3002",(0,n.jsx)(a.code,{children:"catch"})," \u5757\u65e0\u5bb3\u5730\u5904\u7406\u4e86\u53ef\u80fd\u5df2\u7ecf\u88ab\u629b\u51fa\u5e76\u7ec8\u6b62\u4e86\u6211\u4eec\u7684 saga \u7684\u4efb\u4f55\u9519\u8bef\u3002"]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>l});var n=r(6540);const s={},d=n.createContext(s);function c(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);