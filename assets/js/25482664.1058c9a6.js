"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7154],{5587:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>x,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var c=r(4848),l=r(8453);const s={title:"\u4efb\u52a1\u53d6\u6d88",hide_title:!0},t="\u4efb\u52a1\u53d6\u6d88",a={id:"redux-saga/advanced/TaskCancellation",title:"\u4efb\u52a1\u53d6\u6d88",description:"\u6211\u4eec\u5df2\u7ecf\u5728\u975e\u963b\u585e\u8c03\u7528\u90e8\u5206\u770b\u5230\u4e86\u53d6\u6d88\u7684\u4f8b\u5b50\u3002\u5728\u8fd9\u4e2a\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u66f4\u8be6\u7ec6\u5730\u56de\u987e\u53d6\u6d88\u3002",source:"@site/docs/redux-saga/advanced/TaskCancellation.md",sourceDirName:"redux-saga/advanced",slug:"/redux-saga/advanced/TaskCancellation",permalink:"/redux-toolkit-zh/redux-saga/advanced/TaskCancellation",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/redux-saga/advanced/TaskCancellation.md",tags:[],version:"current",frontMatter:{title:"\u4efb\u52a1\u53d6\u6d88",hide_title:!0},sidebar:"reduxSaga",previous:{title:"\u5e76\u884c\u8fd0\u884c\u4efb\u52a1",permalink:"/redux-toolkit-zh/redux-saga/advanced/RunningTasksInParallel"},next:{title:"\u6d4b\u8bd5",permalink:"/redux-toolkit-zh/redux-saga/advanced/Testing"}},d={},i=[{value:"\u6d4b\u8bd5\u5e26\u6709 fork \u6548\u679c\u7684\u751f\u6210\u5668",id:"\u6d4b\u8bd5\u5e26\u6709-fork-\u6548\u679c\u7684\u751f\u6210\u5668",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3},{value:"\u81ea\u52a8\u53d6\u6d88",id:"\u81ea\u52a8\u53d6\u6d88",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u4efb\u52a1\u53d6\u6d88",children:"\u4efb\u52a1\u53d6\u6d88"}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u5df2\u7ecf\u5728",(0,c.jsx)(n.a,{href:"/redux-toolkit-zh/redux-saga/advanced/NonBlockingCalls",children:"\u975e\u963b\u585e\u8c03\u7528"}),"\u90e8\u5206\u770b\u5230\u4e86\u53d6\u6d88\u7684\u4f8b\u5b50\u3002\u5728\u8fd9\u4e2a\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u66f4\u8be6\u7ec6\u5730\u56de\u987e\u53d6\u6d88\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e00\u65e6\u4e00\u4e2a\u4efb\u52a1\u88ab\u5206\u53c9\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"yield cancel(task)"})," \u6765\u4e2d\u6b62\u5b83\u7684\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u770b\u5230\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u8ba9\u6211\u4eec\u8003\u8651\u4e00\u4e2a\u57fa\u672c\u7684\u4f8b\u5b50\uff1a\u4e00\u4e2a\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9bUI\u547d\u4ee4\u542f\u52a8/\u505c\u6b62\u7684\u540e\u53f0\u540c\u6b65\u3002\u5728\u63a5\u6536\u5230 ",(0,c.jsx)(n.code,{children:"START_BACKGROUND_SYNC"})," \u52a8\u4f5c\u540e\uff0c\u6211\u4eec\u5206\u53c9\u4e00\u4e2a\u540e\u53f0\u4efb\u52a1\uff0c\u8be5\u4efb\u52a1\u5c06\u5b9a\u671f\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u540c\u6b65\u4e00\u4e9b\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u4efb\u52a1\u5c06\u4e00\u76f4\u6267\u884c\uff0c\u76f4\u5230\u89e6\u53d1 ",(0,c.jsx)(n.code,{children:"STOP_BACKGROUND_SYNC"})," \u52a8\u4f5c\u3002\u7136\u540e\u6211\u4eec\u53d6\u6d88\u540e\u53f0\u4efb\u52a1\uff0c\u5e76\u518d\u6b21\u7b49\u5f85\u4e0b\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"START_BACKGROUND_SYNC"})," \u52a8\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"import { take, put, call, fork, cancel, cancelled, delay } from 'redux-saga/effects'\r\nimport { someApi, actions } from 'somewhere'\r\n\r\nfunction* bgSync() {\r\n  try {\r\n    while (true) {\r\n      yield put(actions.requestStart())\r\n      const result = yield call(someApi)\r\n      yield put(actions.requestSuccess(result))\r\n      yield delay(5000)\r\n    }\r\n  } finally {\r\n    if (yield cancelled())\r\n      yield put(actions.requestFailure('\u540c\u6b65\u53d6\u6d88\uff01'))\r\n  }\r\n}\r\n\r\nfunction* main() {\r\n  while ( yield take('START_BACKGROUND_SYNC') ) {\r\n    // \u5728\u540e\u53f0\u542f\u52a8\u4efb\u52a1\r\n    const bgSyncTask = yield fork(bgSync)\r\n\r\n    // \u7b49\u5f85\u7528\u6237\u505c\u6b62\u52a8\u4f5c\r\n    yield take('STOP_BACKGROUND_SYNC')\r\n    // \u7528\u6237\u70b9\u51fb\u505c\u6b62\u3002\u53d6\u6d88\u540e\u53f0\u4efb\u52a1\r\n    // \u8fd9\u5c06\u5bfc\u81f4\u5206\u53c9\u7684 bgSync \u4efb\u52a1\u8df3\u5165\u5176 finally \u5757\r\n    yield cancel(bgSyncTask)\r\n  }\r\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"bgSyncTask"})," \u7684\u53d6\u6d88\u5c06\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return",children:"Generator.prototype.return"})," \u4f7f\u751f\u6210\u5668\u76f4\u63a5\u8df3\u5230 finally \u5757\u3002\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"yield cancelled()"})," \u6765\u68c0\u67e5\u751f\u6210\u5668\u662f\u5426\u5df2\u88ab\u53d6\u6d88\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u53d6\u6d88\u6b63\u5728\u8fd0\u884c\u7684\u4efb\u52a1\u4e5f\u5c06\u53d6\u6d88\u4efb\u52a1\u5728\u53d6\u6d88\u65f6\u523b\u88ab\u963b\u585e\u7684\u5f53\u524d\u6548\u679c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5047\u8bbe\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u67d0\u4e2a\u751f\u547d\u5468\u671f\u70b9\uff0c\u6211\u4eec\u6709\u8fd9\u4e2a\u5f85\u5904\u7406\u7684\u8c03\u7528\u94fe\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"function* main() {\r\n  const task = yield fork(subtask)\r\n  ...\r\n  // later\r\n  yield cancel(task)\r\n}\r\n\r\nfunction* subtask() {\r\n  ...\r\n  yield call(subtask2) // currently blocked on this call\r\n  ...\r\n}\r\n\r\nfunction* subtask2() {\r\n  ...\r\n  yield call(someApi) // currently blocked on this call\r\n  ...\r\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"yield cancel(task)"})," \u89e6\u53d1\u4e86\u5bf9 ",(0,c.jsx)(n.code,{children:"subtask"})," \u7684\u53d6\u6d88\uff0c\u8fd9\u53cd\u8fc7\u6765\u53c8\u89e6\u53d1\u4e86\u5bf9 ",(0,c.jsx)(n.code,{children:"subtask2"})," \u7684\u53d6\u6d88\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u4ee5\u6211\u4eec\u770b\u5230\u53d6\u6d88\u662f\u5411\u4e0b\u4f20\u64ad\u7684\uff08\u4e0e\u8fd4\u56de\u503c\u548c\u672a\u6355\u83b7\u7684\u9519\u8bef\u5411\u4e0a\u4f20\u64ad\u5f62\u6210\u5bf9\u6bd4\uff09\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u770b\u4f5c\u662f\u8c03\u7528\u8005\uff08\u8c03\u7528\u5f02\u6b65\u64cd\u4f5c\u7684\u4eba\uff09\u548c\u88ab\u8c03\u7528\u8005\uff08\u88ab\u8c03\u7528\u7684\u64cd\u4f5c\uff09\u4e4b\u95f4\u7684",(0,c.jsx)(n.em,{children:"\u5951\u7ea6"}),"\u3002\u88ab\u8c03\u7528\u8005\u8d1f\u8d23\u6267\u884c\u64cd\u4f5c\u3002\u5982\u679c\u5b83\u5df2\u7ecf\u5b8c\u6210\uff08\u65e0\u8bba\u662f\u6210\u529f\u8fd8\u662f\u9519\u8bef\uff09\uff0c\u7ed3\u679c\u5c06\u5411\u4e0a\u4f20\u64ad\u5230\u5b83\u7684\u8c03\u7528\u8005\uff0c\u6700\u7ec8\u4f20\u64ad\u5230\u8c03\u7528\u8005\u7684\u8c03\u7528\u8005\u7b49\u7b49\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u88ab\u8c03\u7528\u8005\u8d1f\u8d23",(0,c.jsx)(n.em,{children:"\u5b8c\u6210\u6d41\u7a0b"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u5982\u679c\u88ab\u8c03\u7528\u8005\u4ecd\u7136\u5728\u7b49\u5f85\uff0c\u800c\u8c03\u7528\u8005\u51b3\u5b9a\u53d6\u6d88\u64cd\u4f5c\uff0c\u5b83\u4f1a\u89e6\u53d1\u4e00\u79cd\u4fe1\u53f7\uff0c\u8fd9\u79cd\u4fe1\u53f7\u4f1a\u5411\u4e0b\u4f20\u64ad\u5230\u88ab\u8c03\u7528\u8005\uff08\u53ef\u80fd\u8fd8\u6709\u88ab\u8c03\u7528\u8005\u81ea\u5df1\u8c03\u7528\u7684\u4efb\u4f55\u6df1\u5c42\u64cd\u4f5c\uff09\u3002\u6240\u6709\u6df1\u5c42\u7b49\u5f85\u7684\u64cd\u4f5c\u90fd\u5c06\u88ab\u53d6\u6d88\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u53d6\u6d88\u8fd8\u6709\u53e6\u4e00\u4e2a\u65b9\u5411\u53ef\u4ee5\u4f20\u64ad\uff1a\u4efb\u52a1\u7684 joiners\uff08\u90a3\u4e9b\u5728 ",(0,c.jsx)(n.code,{children:"yield join(task)"})," \u4e0a\u88ab\u963b\u585e\u7684\u4eba\uff09\u5982\u679c\u88ab join \u7684\u4efb\u52a1\u88ab\u53d6\u6d88\uff0c\u4ed6\u4eec\u4e5f\u4f1a\u88ab\u53d6\u6d88\u3002\u540c\u6837\uff0c\u90a3\u4e9b joiners \u7684\u4efb\u4f55\u6f5c\u5728\u8c03\u7528\u8005\u4e5f\u5c06\u88ab\u53d6\u6d88\uff08\u56e0\u4e3a\u4ed6\u4eec\u88ab\u963b\u585e\u5728\u4e00\u4e2a\u5df2\u7ecf\u4ece\u5916\u90e8\u88ab\u53d6\u6d88\u7684\u64cd\u4f5c\u4e0a\uff09\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6d4b\u8bd5\u5e26\u6709-fork-\u6548\u679c\u7684\u751f\u6210\u5668",children:"\u6d4b\u8bd5\u5e26\u6709 fork \u6548\u679c\u7684\u751f\u6210\u5668"}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"fork"})," \u65f6\uff0c\u5b83\u4f1a\u5728\u540e\u53f0\u542f\u52a8\u4efb\u52a1\uff0c\u5e76\u8fd4\u56de\u4efb\u52a1\u5bf9\u8c61\uff0c\u5c31\u50cf\u6211\u4eec\u4e4b\u524d\u5b66\u8fc7\u7684\u90a3\u6837\u3002\u5728\u6d4b\u8bd5\u8fd9\u4e2a\u65f6\uff0c\u6211\u4eec\u5fc5\u987b\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"createMockTask"})," \u5b9e\u7528\u51fd\u6570\u3002\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u7684\u5bf9\u8c61\u5e94\u8be5\u5728 fork \u6d4b\u8bd5\u540e\u7684\u4e0b\u4e00\u4e2a ",(0,c.jsx)(n.code,{children:"next"})," \u8c03\u7528\u4e2d\u4f20\u9012\u3002\u7136\u540e\u53ef\u4ee5\u5c06\u6a21\u62df\u4efb\u52a1\u4f20\u9012\u7ed9 ",(0,c.jsx)(n.code,{children:"cancel"}),"\u3002\u8fd9\u662f\u5bf9\u672c\u9875\u9876\u90e8\u7684 ",(0,c.jsx)(n.code,{children:"main"})," \u751f\u6210\u5668\u7684\u6d4b\u8bd5\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"import { createMockTask } from '@redux-saga/testing-utils';\r\n\r\ndescribe('main', () => {\r\n  const generator = main();\r\n\r\n  it('waits for start action', () => {\r\n    const expectedYield = take('START_BACKGROUND_SYNC');\r\n    expect(generator.next().value).to.deep.equal(expectedYield);\r\n  });\r\n\r\n  it('forks the service', () => {\r\n    const expectedYield = fork(bgSync);\r\n    const mockedAction = { type: 'START_BACKGROUND_SYNC' };\r\n    expect(generator.next(mockedAction).value).to.deep.equal(expectedYield);\r\n  });\r\n\r\n  it('waits for stop action and then cancels the service', () => {\r\n    const mockTask = createMockTask();\r\n\r\n    const expectedTakeYield = take('STOP_BACKGROUND_SYNC');\r\n    expect(generator.next(mockTask).value).to.deep.equal(expectedTakeYield);\r\n\r\n    const expectedCancelYield = cancel(mockTask);\r\n    expect(generator.next().value).to.deep.equal(expectedCancelYield);\r\n  });\r\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528\u6a21\u62df\u4efb\u52a1\u7684 ",(0,c.jsx)(n.code,{children:"setResult"}),"\uff0c",(0,c.jsx)(n.code,{children:"setError"})," \u548c ",(0,c.jsx)(n.code,{children:"cancel"})," \u65b9\u6cd5\u6765\u63a7\u5236\u5b83\u7684\u72b6\u6001\u3002\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"mockTask.setResult(42)"})," \u5c06\u8bbe\u7f6e\u5176\u5185\u90e8\u72b6\u6001\u4e3a Done\uff0c\u4efb\u4f55\u7ed9\u5b9a\u8be5\u4efb\u52a1\u7684 ",(0,c.jsx)(n.code,{children:"join"})," \u6548\u679c\u5c06\u8fd4\u56de ",(0,c.jsx)(n.code,{children:"42"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5df2\u7ecf\u8c03\u7528\u4e86\u5176\u4e2d\u4e00\u4e2a\u4e4b\u540e\uff0c\u518d\u6b21\u8c03\u7528 ",(0,c.jsx)(n.code,{children:"setResult"}),"\uff0c",(0,c.jsx)(n.code,{children:"setError"})," \u6216 ",(0,c.jsx)(n.code,{children:"cancel"})," \u6765\u5c1d\u8bd5\u7b2c\u4e8c\u6b21\u6539\u53d8\u5176\u72b6\u6001\uff0c\u5c06\u629b\u51fa\u9519\u8bef\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,c.jsxs)(n.p,{children:["\u91cd\u8981\u7684\u662f\u8981\u8bb0\u4f4f\uff0c",(0,c.jsx)(n.code,{children:"yield cancel(task)"})," \u4e0d\u4f1a\u7b49\u5f85\u88ab\u53d6\u6d88\u7684\u4efb\u52a1\u5b8c\u6210\uff08\u5373\u6267\u884c\u5176 finally \u5757\uff09\u3002\u53d6\u6d88\u6548\u679c\u7684\u884c\u4e3a\u5c31\u50cf fork \u4e00\u6837\u3002\u5b83\u4f1a\u5728\u53d6\u6d88\u5f00\u59cb\u540e\u7acb\u5373\u8fd4\u56de\u3002\u4e00\u65e6\u88ab\u53d6\u6d88\uff0c\u4efb\u52a1\u901a\u5e38\u5e94\u8be5\u5728\u5b8c\u6210\u5176\u6e05\u7406\u903b\u8f91\u540e\u5c3d\u5feb\u8fd4\u56de\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u81ea\u52a8\u53d6\u6d88",children:"\u81ea\u52a8\u53d6\u6d88"}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4e86\u624b\u52a8\u53d6\u6d88\uff0c\u8fd8\u6709\u4e00\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u89e6\u53d1\u53d6\u6d88"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"race"})," \u6548\u679c\u4e2d\u3002\u6240\u6709\u7684 race \u7ade\u4e89\u8005\uff0c\u9664\u4e86\u8d62\u5bb6\uff0c\u90fd\u4f1a\u88ab\u81ea\u52a8\u53d6\u6d88\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5728\u5e76\u884c\u6548\u679c\u4e2d\uff08",(0,c.jsx)(n.code,{children:"yield all([...])"}),"\uff09\u3002\u4e00\u65e6\u5176\u4e2d\u4e00\u4e2a\u5b50\u6548\u679c\u88ab\u62d2\u7edd\uff08\u5982 ",(0,c.jsx)(n.code,{children:"Promise.all"})," \u6240\u793a\uff09\uff0c\u5e76\u884c\u6548\u679c\u5c31\u4f1a\u88ab\u62d2\u7edd\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u5176\u4ed6\u7684\u5b50\u6548\u679c\u90fd\u4f1a\u88ab\u81ea\u52a8\u53d6\u6d88\u3002"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var c=r(6540);const l={},s=c.createContext(l);function t(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);