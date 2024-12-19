"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[9519],{9209:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=i(4848),s=i(8453);const c={id:"matching-utilities",title:"\u5339\u914d\u5de5\u5177",sidebar_label:"\u5339\u914d\u5de5\u5177",hide_title:!0},r="\u5339\u914d\u5de5\u5177",l={id:"api/matching-utilities",title:"\u5339\u914d\u5de5\u5177",description:"&nbsp;",source:"@site/docs/api/matching-utilities.mdx",sourceDirName:"api",slug:"/api/matching-utilities",permalink:"/redux-toolkit-zh/api/matching-utilities",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/api/matching-utilities.mdx",tags:[],version:"current",frontMatter:{id:"matching-utilities",title:"\u5339\u914d\u5de5\u5177",sidebar_label:"\u5339\u914d\u5de5\u5177",hide_title:!0},sidebar:"docs",previous:{title:"\u521b\u5efa\u9009\u62e9\u5668",permalink:"/redux-toolkit-zh/api/createSelector"},next:{title:"\u5176\u4ed6\u5bfc\u51fa",permalink:"/redux-toolkit-zh/api/other-exports"}},o={},d=[{value:"\u901a\u7528\u76ee\u7684",id:"\u901a\u7528\u76ee\u7684",level:3},{value:"<code>createAsyncThunk</code>-\u7279\u5b9a\u5339\u914d\u5668",id:"createasyncthunk-\u7279\u5b9a\u5339\u914d\u5668",level:3},{value:"<code>isAllOf</code>",id:"isallof",level:2},{value:"<code>isAnyOf</code>",id:"isanyof",level:2},{value:"<code>isAsyncThunkAction</code>",id:"isasyncthunkaction",level:2},{value:"<code>isPending</code>",id:"ispending",level:2},{value:"<code>isFulfilled</code>",id:"isfulfilled",level:2},{value:"<code>isRejected</code>",id:"isrejected",level:2},{value:"<code>isRejectedWithValue</code>",id:"isrejectedwithvalue",level:2},{value:"\u4f7f\u7528\u5339\u914d\u5668\u51cf\u5c11\u4ee3\u7801\u590d\u6742\u6027\u3001\u91cd\u590d\u548c\u6837\u677f\u4ee3\u7801",id:"\u4f7f\u7528\u5339\u914d\u5668\u51cf\u5c11\u4ee3\u7801\u590d\u6742\u6027\u91cd\u590d\u548c\u6837\u677f\u4ee3\u7801",level:2},{value:"\u5c06\u5339\u914d\u5668\u7528\u4f5c TypeScript \u7c7b\u578b\u4fdd\u62a4",id:"\u5c06\u5339\u914d\u5668\u7528\u4f5c-typescript-\u7c7b\u578b\u4fdd\u62a4",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\xa0"}),"\n",(0,t.jsx)(n.h1,{id:"\u5339\u914d\u5de5\u5177",children:"\u5339\u914d\u5de5\u5177"}),"\n",(0,t.jsxs)(n.p,{children:["Redux Toolkit \u5bfc\u51fa\u4e86\u51e0\u4e2a\u7c7b\u578b\u5b89\u5168\u7684\u52a8\u4f5c\u5339\u914d\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u5728\u68c0\u67e5\u7279\u5b9a\u7c7b\u578b\u7684\u52a8\u4f5c\u65f6\u4f7f\u7528\u5b83\u4eec\u3002\u8fd9\u4e9b\u4e3b\u8981\u7528\u4e8e ",(0,t.jsx)(n.code,{children:"createSlice"})," \u548c ",(0,t.jsx)(n.code,{children:"createReducer"})," \u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"builder.addMatcher()"})," \u60c5\u51b5\uff0c\u4ee5\u53ca\u7f16\u5199\u81ea\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u65f6\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u901a\u7528\u76ee\u7684",children:"\u901a\u7528\u76ee\u7684"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#isallof",children:(0,t.jsx)(n.code,{children:"isAllOf"})})," - \u5f53\u6ee1\u8db3",(0,t.jsx)(n.strong,{children:"\u6240\u6709"}),"\u6761\u4ef6\u65f6\u8fd4\u56de true"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#isanyof",children:(0,t.jsx)(n.code,{children:"isAnyOf"})})," - \u5f53\u6ee1\u8db3",(0,t.jsx)(n.strong,{children:"\u81f3\u5c11\u4e00\u4e2a"}),"\u6761\u4ef6\u65f6\u8fd4\u56de true"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"createasyncthunk-\u7279\u5b9a\u5339\u914d\u5668",children:[(0,t.jsx)(n.code,{children:"createAsyncThunk"}),"-\u7279\u5b9a\u5339\u914d\u5668"]}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u6709\u8fd9\u4e9b\u5339\u914d\u5668\u90fd\u53ef\u4ee5\u7528\u4e00\u4e2a\u6216\u591a\u4e2a thunk \u4f5c\u4e3a\u53c2\u6570\u8c03\u7528\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u5c06\u8fd4\u56de\u4e00\u4e2a\u5339\u914d\u5668\u51fd\u6570\uff0c\u7528\u4e8e\u8be5\u6761\u4ef6\u548c thunk\uff0c\u6216\u8005\u7528\u4e00\u4e2a\u52a8\u4f5c\u8c03\u7528\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u5c06\u5339\u914d\u4efb\u4f55\u5177\u6709\u6240\u8ff0\u6761\u4ef6\u7684 thunk \u52a8\u4f5c\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#isasyncthunkaction",children:(0,t.jsx)(n.code,{children:"isAsyncThunkAction"})})," - \u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a\u52a8\u4f5c\u521b\u5efa\u5668\u5e76\u5728\u6240\u6709\u5339\u914d\u65f6\u8fd4\u56de true"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#ispending",children:(0,t.jsx)(n.code,{children:"isPending"})})," - \u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a\u52a8\u4f5c\u521b\u5efa\u5668\u5e76\u5728\u6240\u6709\u5339\u914d\u65f6\u8fd4\u56de true"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#isfulfilled",children:(0,t.jsx)(n.code,{children:"isFulfilled"})})," - \u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a\u52a8\u4f5c\u521b\u5efa\u5668\u5e76\u5728\u6240\u6709\u5339\u914d\u65f6\u8fd4\u56de true"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#isrejected",children:(0,t.jsx)(n.code,{children:"isRejected"})})," - \u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a\u52a8\u4f5c\u521b\u5efa\u5668\u5e76\u5728\u6240\u6709\u5339\u914d\u65f6\u8fd4\u56de true"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#isrejectedwithvalue",children:(0,t.jsx)(n.code,{children:"isRejectedWithValue"})})," - \u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a\u52a8\u4f5c\u521b\u5efa\u5668\u5e76\u5728\u6240\u6709\u5339\u914d\u65f6\u8fd4\u56de true"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"isallof",children:(0,t.jsx)(n.code,{children:"isAllOf"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u63a5\u53d7\u4e00\u4e2a\u6216\u591a\u4e2a\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"redux-toolkit"})," \u52a8\u4f5c\u521b\u5efa\u51fd\u6570\uff0c\u4f8b\u5982\u7531\u4ee5\u4e0b\u4ea7\u751f\u7684\uff1a","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/createAction",children:(0,t.jsx)(n.code,{children:"createAction"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/createSlice#return-value",children:(0,t.jsx)(n.code,{children:"createSlice"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/createAsyncThunk#promise-lifecycle-actions",children:(0,t.jsx)(n.code,{children:"createAsyncThunk"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570"}),"\n",(0,t.jsxs)(n.li,{children:["\u81ea\u5b9a\u4e49\u52a8\u4f5c\u521b\u5efa\u51fd\u6570\uff0c\u5177\u6709 ",(0,t.jsx)(n.code,{children:".match"})," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u662f\u7c7b\u578b\u4fdd\u62a4"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5b83\u5c06\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\uff0c\u5982\u679c\u63d0\u4f9b\u7684\u6240\u6709\u51fd\u6570\u90fd\u5339\u914d\uff0c\u5219\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"isanyof",children:(0,t.jsx)(n.code,{children:"isAnyOf"})}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u53d7\u4e0e ",(0,t.jsx)(n.code,{children:"isAllOf"})," \u76f8\u540c\u7684\u8f93\u5165\uff0c\u5e76\u5c06\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\uff0c\u5982\u679c\u81f3\u5c11\u6709\u4e00\u4e2a\u63d0\u4f9b\u7684\u51fd\u6570\u5339\u914d\uff0c\u5219\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"isasyncthunkaction",children:(0,t.jsx)(n.code,{children:"isAsyncThunkAction"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u52a8\u4f5c\u662f\u5426\u7531 ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/createAsyncThunk",children:(0,t.jsx)(n.code,{children:"createAsyncThunk"})})," \u521b\u5efa\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="isAsyncThunkAction \u4f7f\u7528"',children:"import { isAsyncThunkAction } from '@reduxjs/toolkit'\nimport type { UnknownAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARequestAction = isAsyncThunkAction(requestThunk1, requestThunk2)\n\nfunction handleRequestAction(action: UnknownAction) {\n  if (isARequestAction(action)) {\n    // \u52a8\u4f5c\u662f\u7531 `requestThunk1` \u6216 `requestThunk2` \u5206\u6d3e\u7684\u52a8\u4f5c\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ispending",children:(0,t.jsx)(n.code,{children:"isPending"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u52a8\u4f5c\u662f\u5426\u662f ",(0,t.jsx)(n.code,{children:"createAsyncThunk"})," promise \u751f\u547d\u5468\u671f\u4e2d\u7684 'pending' \u52a8\u4f5c\u521b\u5efa\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="isPending \u4f7f\u7528"',children:"import { isPending } from '@reduxjs/toolkit'\nimport type { UnknownAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isAPendingAction = isPending(requestThunk1, requestThunk2)\n\nfunction handlePendingAction(action: UnknownAction) {\n  if (isAPendingAction(action)) {\n    // \u52a8\u4f5c\u662f\u7531 `requestThunk1` \u6216 `requestThunk2` \u5206\u6d3e\u7684 pending \u52a8\u4f5c\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"isfulfilled",children:(0,t.jsx)(n.code,{children:"isFulfilled"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u52a8\u4f5c\u662f\u5426\u662f ",(0,t.jsx)(n.code,{children:"createAsyncThunk"})," promise \u751f\u547d\u5468\u671f\u4e2d\u7684 'fulfilled' \u52a8\u4f5c\u521b\u5efa\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="isFulfilled \u4f7f\u7528"',children:"import { isFulfilled } from '@reduxjs/toolkit'\nimport type { UnknownAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isAFulfilledAction = isFulfilled(requestThunk1, requestThunk2)\n\nfunction handleFulfilledAction(action: UnknownAction) {\n  if (isAFulfilledAction(action)) {\n    // \u52a8\u4f5c\u662f\u7531 `requestThunk1` \u6216 `requestThunk2` \u5206\u6d3e\u7684 fulfilled \u52a8\u4f5c\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"isrejected",children:(0,t.jsx)(n.code,{children:"isRejected"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u52a8\u4f5c\u662f\u5426\u662f ",(0,t.jsx)(n.code,{children:"createAsyncThunk"})," promise \u751f\u547d\u5468\u671f\u4e2d\u7684 'rejected' \u52a8\u4f5c\u521b\u5efa\u5668\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="isRejected \u4f7f\u7528"',children:"import { isRejected } from '@reduxjs/toolkit'\nimport type { UnknownAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARejectedAction = isRejected(requestThunk1, requestThunk2)\n\nfunction handleRejectedAction(action: UnknownAction) {\n  if (isARejectedAction(action)) {\n    // \u52a8\u4f5c\u662f\u7531 `requestThunk1` \u6216 `requestThunk2` \u5206\u6d3e\u7684 rejected \u52a8\u4f5c\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"isrejectedwithvalue",children:(0,t.jsx)(n.code,{children:"isRejectedWithValue"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u52a8\u4f5c\u662f\u5426\u662f ",(0,t.jsx)(n.code,{children:"createAsyncThunk"})," promise \u751f\u547d\u5468\u671f\u4e2d\u7684 'rejected' \u52a8\u4f5c\u521b\u5efa\u5668\uff0c\u8be5\u52a8\u4f5c\u662f\u7531 ",(0,t.jsx)(n.a,{href:"/redux-toolkit-zh/api/createAsyncThunk#handling-thunk-errors",children:(0,t.jsx)(n.code,{children:"rejectWithValue"})})," \u521b\u5efa\u7684\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="isRejectedWithValue \u4f7f\u7528"',children:"import { isRejectedWithValue } from '@reduxjs/toolkit'\nimport type { UnknownAction } from '@reduxjs/toolkit'\nimport { requestThunk1, requestThunk2 } from '@virtual/matchers'\n\nconst isARejectedWithValueAction = isRejectedWithValue(\n  requestThunk1,\n  requestThunk2,\n)\n\nfunction handleRejectedWithValueAction(action: UnknownAction) {\n  if (isARejectedWithValueAction(action)) {\n    // \u52a8\u4f5c\u662f\u7531 `requestThunk1` \u6216 `requestThunk2` \u5206\u6d3e\u7684 rejected \u52a8\u4f5c\n    // rejectWithValue \u88ab\u4f7f\u7528\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u5339\u914d\u5668\u51cf\u5c11\u4ee3\u7801\u590d\u6742\u6027\u91cd\u590d\u548c\u6837\u677f\u4ee3\u7801",children:"\u4f7f\u7528\u5339\u914d\u5668\u51cf\u5c11\u4ee3\u7801\u590d\u6742\u6027\u3001\u91cd\u590d\u548c\u6837\u677f\u4ee3\u7801"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"builder"})," \u6a21\u5f0f\u6784\u5efa\u4e00\u4e2a reducer \u65f6\uff0c\u6211\u4eec\u4e00\u6b21\u6dfb\u52a0\u4e00\u4e2a case \u6216\u5339\u914d\u5668\u3002\u7136\u800c\uff0c\u901a\u8fc7\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"isAnyOf"})," \u6216 ",(0,t.jsx)(n.code,{children:"isAllOf"}),"\uff0c\u6211\u4eec\u80fd\u591f\u4ee5\u7c7b\u578b\u5b89\u5168\u7684\u65b9\u5f0f\u8f7b\u677e\u5730\u4e3a\u591a\u4e2a case \u4f7f\u7528\u76f8\u540c\u7684\u5339\u914d\u5668\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u4e0d\u5fc5\u8981\u590d\u6742\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="\u672a\u4f7f\u7528\u5339\u914d\u5668\u5b9e\u7528\u7a0b\u5e8f\u7684\u793a\u4f8b"',children:"import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\n\ninterface Data {\n  isInteresting: boolean\n  isSpecial: boolean\n}\n\ninterface Special extends Data {\n  isSpecial: true\n}\n\ninterface Interesting extends Data {\n  isInteresting: true\n}\n\nfunction isSpecial(\n  action: PayloadAction<Data>,\n): action is PayloadAction<Special> {\n  return action.payload.isSpecial\n}\n\nfunction isInteresting(\n  action: PayloadAction<Data>,\n): action is PayloadAction<Interesting> {\n  return action.payload.isInteresting\n}\n\ninterface ExampleState {\n  isSpecial: boolean\n  isInteresting: boolean\n}\n\nconst initialState = {\n  isSpecial: false,\n  isInteresting: false,\n} satisfies ExampleState as ExampleState\n\nexport const isSpecialAndInterestingThunk = createAsyncThunk(\n  'isSpecialAndInterestingThunk',\n  () => {\n    return {\n      isSpecial: true,\n      isInteresting: true,\n    }\n  },\n)\n\n// \u8fd9\u91cc\u6709\u4e0d\u5fc5\u8981\u7684\u590d\u6742\u6027\nconst loadingReducer = createReducer(initialState, (builder) => {\n  builder.addCase(isSpecialAndInterestingThunk.fulfilled, (state, action) => {\n    if (isSpecial(action)) {\n      state.isSpecial = true\n    }\n    if (isInteresting(action)) {\n      state.isInteresting = true\n    }\n  })\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"isAllOf"})," \u6765\u7b80\u5316\u6211\u4eec\u7684\u4ee3\u7801\u5e76\u51cf\u5c11\u4e00\u4e9b\u6837\u677f\u4ee3\u7801\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="\u4f7f\u7528 isAllOf \u91cd\u6784"',children:"import { createReducer, isAllOf } from '@reduxjs/toolkit'\nimport {\n  isSpecialAndInterestingThunk,\n  initialState,\n  isSpecial,\n  isInteresting,\n} from '@virtual/matchers' // \u8fd9\u662f\u4e00\u4e2a\u63d0\u4f9b\u4e0a\u8ff0\u7c7b\u578b\u7684\u865a\u6784\u5305\nimport type { Data } from '@virtual/matchers' // \u8fd9\u662f\u4e00\u4e2a\u63d0\u4f9b\u4e0a\u8ff0\u7c7b\u578b\u7684\u865a\u6784\u5305\n\nconst loadingReducer = createReducer(initialState, (builder) => {\n  builder\n    .addMatcher(\n      isAllOf(isSpecialAndInterestingThunk.fulfilled, isSpecial),\n      (state, action) => {\n        state.isSpecial = true\n      },\n    )\n    .addMatcher(\n      isAllOf(isSpecialAndInterestingThunk.fulfilled, isInteresting),\n      (state, action) => {\n        state.isInteresting = true\n      },\n    )\n})\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5c06\u5339\u914d\u5668\u7528\u4f5c-typescript-\u7c7b\u578b\u4fdd\u62a4",children:"\u5c06\u5339\u914d\u5668\u7528\u4f5c TypeScript \u7c7b\u578b\u4fdd\u62a4"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531 ",(0,t.jsx)(n.code,{children:"isAllOf"})," \u548c ",(0,t.jsx)(n.code,{children:"isAnyOf"})," \u8fd4\u56de\u7684\u51fd\u6570\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u4e0a\u4e0b\u6587\u4e2d\u7528\u4f5c TypeScript \u7c7b\u578b\u4fdd\u62a4\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="\u5c06 isAllOf \u7528\u4f5c\u7c7b\u578b\u4fdd\u62a4"',children:"import { isAllOf } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\nimport { isSpecial, isInteresting } from '@virtual/matchers' // \u8fd9\u662f\u4e00\u4e2a\u63d0\u4f9b\u4e0a\u8ff0\u7c7b\u578b\u7684\u865a\u6784\u5305\nimport type { Data } from '@virtual/matchers' // \u8fd9\u662f\u4e00\u4e2a\u63d0\u4f9b\u4e0a\u8ff0\u7c7b\u578b\u7684\u865a\u6784\u5305\n\nconst isSpecialAndInteresting = isAllOf(isSpecial, isInteresting)\n\nfunction someFunction(action: PayloadAction<Data>) {\n  if (isSpecialAndInteresting(action)) {\n    // \"action\" \u5c06\u88ab\u6b63\u786e\u5730\u7c7b\u578b\u5316\u4e3a\uff1a\n    // `PayloadAction<Special> & PayloadAction<Interesting>`\n  }\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="\u5c06 isAnyOf \u7528\u4f5c\u7c7b\u578b\u4fdd\u62a4"',children:"import { isAnyOf } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\nimport { Data, isSpecial, isInteresting } from '@virtual/matchers' // \u8fd9\u662f\u4e00\u4e2a\u63d0\u4f9b\u4e0a\u8ff0\u7c7b\u578b\u7684\u865a\u6784\u5305\n\nconst isSpecialOrInteresting = isAnyOf(isSpecial, isInteresting)\n\nfunction someFunction(action: PayloadAction<Data>) {\n  if (isSpecialOrInteresting(action)) {\n    // \"action\" \u5c06\u88ab\u6b63\u786e\u5730\u7c7b\u578b\u5316\u4e3a\uff1a\n    // `PayloadAction<Special> | PayloadAction<Interesting>`\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)("iframe",{src:"https://codesandbox.io/embed/redux-toolkit-matchers-example-e765q?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.ts&theme=dark&runonclick=1",style:{width:"100%",height:"500px",border:0,borderRadius:4,overflow:"hidden"},title:"redux-toolkit-matchers-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);