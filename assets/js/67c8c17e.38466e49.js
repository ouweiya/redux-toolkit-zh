"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[5827],{7353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=n(4848),l=n(8453),o=n(1470),s=n(9365),c=n(9760);const i={id:"development-only-stability-checks",title:"\u4ec5\u5f00\u53d1\u73af\u5883\u7a33\u5b9a\u6027\u68c0\u67e5",sidebar_label:"\u4ec5\u5f00\u53d1\u73af\u5883\u7a33\u5b9a\u6027\u68c0\u67e5",sidebar_position:1,hide_title:!0,description:"Development-Only Stability Checks"},a="\u4ec5\u5728\u5f00\u53d1\u73af\u5883\u8fdb\u884c\u7a33\u5b9a\u6027\u68c0\u67e5",d={id:"reselect/api/development-only-stability-checks",title:"\u4ec5\u5f00\u53d1\u73af\u5883\u7a33\u5b9a\u6027\u68c0\u67e5",description:"Development-Only Stability Checks",source:"@site/docs/reselect/api/development-only-stability-checks.mdx",sourceDirName:"reselect/api",slug:"/reselect/api/development-only-stability-checks",permalink:"/redux-toolkit-zh/reselect/api/development-only-stability-checks",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/reselect/api/development-only-stability-checks.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"development-only-stability-checks",title:"\u4ec5\u5f00\u53d1\u73af\u5883\u7a33\u5b9a\u6027\u68c0\u67e5",sidebar_label:"\u4ec5\u5f00\u53d1\u73af\u5883\u7a33\u5b9a\u6027\u68c0\u67e5",sidebar_position:1,hide_title:!0,description:"Development-Only Stability Checks"},sidebar:"reselect",previous:{title:"\u521b\u5efa\u7ed3\u6784\u5316\u9009\u62e9\u5668",permalink:"/redux-toolkit-zh/reselect/api/createStructuredSelector"},next:{title:"LRU\u7f13\u5b58",permalink:"/redux-toolkit-zh/reselect/api/lruMemoize"}},u={},h=[{value:"<code>inputStabilityCheck</code>",id:"inputstabilitycheck",level:2},{value:"1. \u901a\u8fc7<code>setGlobalDevModeChecks</code>\u5168\u5c40\u8bbe\u7f6e\uff1a",id:"1-\u901a\u8fc7setglobaldevmodechecks\u5168\u5c40\u8bbe\u7f6e",level:3},{value:"2. \u901a\u8fc7\u76f4\u63a5\u5411<InternalLinks.CreateSelector><code>createSelector</code></InternalLinks.CreateSelector>\u4f20\u9012<code>inputStabilityCheck</code>\u9009\u9879\uff0c\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u8bbe\u7f6e\uff1a",id:"2-\u901a\u8fc7\u76f4\u63a5\u5411createselector\u4f20\u9012inputstabilitycheck\u9009\u9879\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u8bbe\u7f6e",level:3},{value:"<code>identityFunctionCheck</code>",id:"identityfunctioncheck",level:2},{value:"1. \u901a\u8fc7 <code>setGlobalDevModeChecks</code> \u5168\u5c40\u914d\u7f6e\uff1a",id:"1-\u901a\u8fc7-setglobaldevmodechecks-\u5168\u5c40\u914d\u7f6e",level:3},{value:"2. \u901a\u8fc7\u76f4\u63a5\u5411 <InternalLinks.CreateSelector><code>createSelector</code></InternalLinks.CreateSelector> \u4f20\u9012 <code>identityFunctionCheck</code> \u9009\u9879\u6765\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u914d\u7f6e\uff1a",id:"2-\u901a\u8fc7\u76f4\u63a5\u5411-createselector-\u4f20\u9012-identityfunctioncheck-\u9009\u9879\u6765\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u914d\u7f6e",level:3}];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return c.d||m("InternalLinks",!1),c.d.CascadingMemoization||m("InternalLinks.CascadingMemoization",!0),c.d.CreateSelector||m("InternalLinks.CreateSelector",!0),c.d.InputSelectors||m("InternalLinks.InputSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u4ec5\u5728\u5f00\u53d1\u73af\u5883\u8fdb\u884c\u7a33\u5b9a\u6027\u68c0\u67e5",children:"\u4ec5\u5728\u5f00\u53d1\u73af\u5883\u8fdb\u884c\u7a33\u5b9a\u6027\u68c0\u67e5"}),"\n",(0,r.jsx)(t.p,{children:"Reselect\u5728\u5f00\u53d1\u6a21\u5f0f\u4e2d\u5305\u542b\u989d\u5916\u7684\u68c0\u67e5\uff0c\u4ee5\u5e2e\u52a9\u6355\u83b7\u5e76\u8b66\u544a\u6709\u5173\u9009\u62e9\u5668\u884c\u4e3a\u7684\u9519\u8bef\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"inputstabilitycheck",children:(0,r.jsx)(t.code,{children:"inputStabilityCheck"})}),"\n",(0,r.jsxs)(t.p,{children:["\u7531\u4e8e",(0,r.jsx)(c.d.CascadingMemoization,{}),"\u5728Reselect\u4e2d\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u60a8\u7684",(0,r.jsx)(c.d.InputSelectors,{}),"\u4e0d\u5e94\u5728\u6bcf\u6b21\u8fd0\u884c\u65f6\u8fd4\u56de\u65b0\u7684\u5f15\u7528\u3002\u5982\u679c\u4e00\u4e2a",(0,r.jsx)(c.d.InputSelectors,{text:"\u8f93\u5165\u9009\u62e9\u5668"}),"\u603b\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5f15\u7528\uff0c\u6bd4\u5982"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"state => ({ a: state.a, b: state.b })\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6216\u8005"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"state => state.todos.map(todo => todo.id)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u90a3\u5c06\u5bfc\u81f4\u9009\u62e9\u5668\u6c38\u8fdc\u65e0\u6cd5\u6b63\u786e\u5730\u8fdb\u884c\u8bb0\u5fc6\u5316\u3002\r\n\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u9519\u8bef\uff0c\u6211\u4eec\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5f00\u53d1\u6a21\u5f0f\u68c0\u67e5\u6765\u6355\u83b7\u8fd9\u4e2a\u95ee\u9898\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(c.d.CreateSelector,{}),"\u73b0\u5728\u4f1a\u5728\u9009\u62e9\u5668\u7b2c\u4e00\u6b21\u88ab\u8c03\u7528\u65f6\u8fd0\u884c\u4e24\u6b21",(0,r.jsx)(c.d.InputSelectors,{}),"\u3002\u5982\u679c\u5bf9\u76f8\u540c\u7684\u8c03\u7528\u7ed3\u679c\u770b\u8d77\u6765\u4e0d\u540c\uff0c\u5b83\u5c06\u8bb0\u5f55\u8b66\u544a\uff0c\u5305\u62ec\u53c2\u6570\u548c\u4e24\u4e2a\u4e0d\u540c\u7684\u63d0\u53d6\u8f93\u5165\u503c\u96c6\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type DevModeCheckFrequency = 'always' | 'once' | 'never'\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53ef\u80fd\u7684\u503c"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"once"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u53ea\u5728\u9009\u62e9\u5668\u7b2c\u4e00\u6b21\u88ab\u8c03\u7528\u65f6\u8fd0\u884c\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"always"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u6bcf\u6b21\u9009\u62e9\u5668\u88ab\u8c03\u7528\u65f6\u90fd\u8fd0\u884c\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"never"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u4ece\u4e0d\u8fd0\u884c\u8f93\u5165\u7a33\u5b9a\u6027\u68c0\u67e5\u3002"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"\u8f93\u5165\u7a33\u5b9a\u6027\u68c0\u67e5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u81ea\u52a8\u7981\u7528\u3002"})}),"\n",(0,r.jsx)(t.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u914d\u7f6e\u6b64\u884c\u4e3a\uff1a"}),"\n",(0,r.jsxs)(t.h3,{id:"1-\u901a\u8fc7setglobaldevmodechecks\u5168\u5c40\u8bbe\u7f6e",children:["1. \u901a\u8fc7",(0,r.jsx)(t.code,{children:"setGlobalDevModeChecks"}),"\u5168\u5c40\u8bbe\u7f6e\uff1a"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"setGlobalDevModeChecks"}),"\u51fd\u6570\u4eceReselect\u5bfc\u51fa\uff0c\u5e94\u8be5\u7528\u6240\u9700\u7684\u8bbe\u7f6e\u8c03\u7528\u5b83\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { setGlobalDevModeChecks } from 'reselect'\r\n\r\n// \u53ea\u5728\u9009\u62e9\u5668\u7b2c\u4e00\u6b21\u88ab\u8c03\u7528\u65f6\u8fd0\u884c\u3002 (\u9ed8\u8ba4)\r\nsetGlobalDevModeChecks({ inputStabilityCheck: 'once' })\r\n\r\n// \u6bcf\u6b21\u9009\u62e9\u5668\u88ab\u8c03\u7528\u65f6\u90fd\u8fd0\u884c\u3002\r\nsetGlobalDevModeChecks({ inputStabilityCheck: 'always' })\r\n\r\n// \u4ece\u4e0d\u8fd0\u884c\u8f93\u5165\u7a33\u5b9a\u6027\u68c0\u67e5\u3002\r\nsetGlobalDevModeChecks({ inputStabilityCheck: 'never' })\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"2-\u901a\u8fc7\u76f4\u63a5\u5411createselector\u4f20\u9012inputstabilitycheck\u9009\u9879\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u8bbe\u7f6e",children:["2. \u901a\u8fc7\u76f4\u63a5\u5411",(0,r.jsx)(c.d.CreateSelector,{children:(0,r.jsx)(t.code,{children:"createSelector"})}),"\u4f20\u9012",(0,r.jsx)(t.code,{children:"inputStabilityCheck"}),"\u9009\u9879\uff0c\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u8bbe\u7f6e\uff1a"]}),"\n","\n",(0,r.jsxs)(o.A,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,r.jsx)(s.A,{value:"ts",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="development-only-stability-checks/inputStabilityCheck.ts"',children:"import { createSelector } from 'reselect'\r\n\r\ninterface RootState {\r\n  todos: { id: number; completed: boolean }[]\r\n  alerts: { id: number; read: boolean }[]\r\n}\r\n\r\n// \u521b\u5efa\u4e00\u4e2a\u9009\u62e9\u5668\uff0c\u6bcf\u6b21\u8fd0\u884c\u65f6\u90fd\u4f1a\u5bf9\u8f93\u5165\u9009\u62e9\u5668\u7684\u7ed3\u679c\u8fdb\u884c\u53cc\u91cd\u68c0\u67e5\u3002\r\nconst selectCompletedTodosLength = createSelector(\r\n  [\r\n    // \u274c \u9519\u8bef\u7684\u4f7f\u7528\u6848\u4f8b\uff1a\u6b64\u8f93\u5165\u9009\u62e9\u5668\u5c06\u65e0\u6cd5\r\n    // \u6b63\u786e\u5730\u8fdb\u884c\u8bb0\u5fc6\u5316\uff0c\u56e0\u4e3a\u5b83\u603b\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5f15\u7528\u3002\r\n    (state: RootState) =>\r\n      state.todos.filter(({ completed }) => completed === true)\r\n  ],\r\n  completedTodos => completedTodos.length,\r\n  // \u5c06\u8986\u76d6\u5168\u5c40\u8bbe\u7f6e\u3002\r\n  { devModeChecks: { inputStabilityCheck: 'always' } }\r\n)\n"})})}),(0,r.jsx)(s.A,{value:"js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="development-only-stability-checks/inputStabilityCheck.js"',children:"import { createSelector } from 'reselect'\r\n\r\n// \u521b\u5efa\u4e00\u4e2a\u9009\u62e9\u5668\uff0c\u6bcf\u6b21\u8fd0\u884c\u65f6\u90fd\u4f1a\u5bf9\u8f93\u5165\u9009\u62e9\u5668\u7684\u7ed3\u679c\u8fdb\u884c\u53cc\u91cd\u68c0\u67e5\u3002\r\nconst selectCompletedTodosLength = createSelector(\r\n  [\r\n    // \u274c \u9519\u8bef\u7684\u4f7f\u7528\u6848\u4f8b\uff1a\u6b64\u8f93\u5165\u9009\u62e9\u5668\u5c06\u65e0\u6cd5\r\n    // \u6b63\u786e\u5730\u8fdb\u884c\u8bb0\u5fc6\u5316\uff0c\u56e0\u4e3a\u5b83\u603b\u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5f15\u7528\u3002\r\n    state => state.todos.filter(({ completed }) => completed === true)\r\n  ],\r\n  completedTodos => completedTodos.length,\r\n  // \u5c06\u8986\u76d6\u5168\u5c40\u8bbe\u7f6e\u3002\r\n  { devModeChecks: { inputStabilityCheck: 'always' } }\r\n)\n"})})})]}),"\n","\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u8fd9\u5c06\u8986\u76d6\u901a\u8fc7\u8c03\u7528",(0,r.jsx)(t.code,{children:"setGlobalDevModeChecks"}),"\u8bbe\u7f6e\u7684\u5168\u5c40\u8f93\u5165\u7a33\u5b9a\u6027\u68c0\u67e5\u3002"]})}),"\n",(0,r.jsx)(t.h2,{id:"identityfunctioncheck",children:(0,r.jsx)(t.code,{children:"identityFunctionCheck"})}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u4f7f\u7528 Reselect \u65f6\uff0c\u575a\u6301\u5173\u4e8e\u63d0\u53d6\u903b\u8f91\u548c\u8f6c\u6362\u903b\u8f91\u4e4b\u95f4\u5173\u6ce8\u70b9\u5206\u79bb\u7684\u57fa\u672c\u54f2\u5b66\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u63d0\u53d6\u903b\u8f91"}),"\uff1a\u8fd9\u6307\u7684\u662f\u50cf ",(0,r.jsx)(t.code,{children:"state => state.todos"})," \u8fd9\u6837\u7684\u64cd\u4f5c\uff0c\u5e94\u8be5\u653e\u5728 [\u8f93\u5165\u9009\u62e9\u5668] \u4e2d\u3002\u63d0\u53d6\u903b\u8f91\u8d1f\u8d23\u4ece\u66f4\u5e7f\u6cdb\u7684\u72b6\u6001\u6216\u6570\u636e\u96c6\u4e2d\u68c0\u7d22\u6216'\u9009\u62e9'\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u8f6c\u6362\u903b\u8f91"}),"\uff1a\u76f8\u53cd\uff0c\u8f6c\u6362\u903b\u8f91\uff0c\u5982 ",(0,r.jsx)(t.code,{children:"todos => todos.map(({ id }) => id)"}),"\uff0c\u5e94\u8be5\u653e\u5728 [\u7ed3\u679c\u51fd\u6570] \u4e2d\u3002\u8fd9\u662f\u4f60\u64cd\u4f5c\u3001\u683c\u5f0f\u5316\u6216\u8f6c\u6362\u8f93\u5165\u9009\u62e9\u5668\u63d0\u53d6\u7684\u6570\u636e\u7684\u5730\u65b9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"\u6700\u91cd\u8981\u7684\u662f\uff0cReselect \u4e2d\u6709\u6548\u7684\u8bb0\u5fc6\u5316\u4f9d\u8d56\u4e8e\u9075\u5faa\u8fd9\u4e9b\u6307\u5bfc\u539f\u5219\u3002\u53ea\u6709\u5f53\u63d0\u53d6\u548c\u8f6c\u6362\u903b\u8f91\u6b63\u786e\u5730\u5206\u79bb\u65f6\uff0c\u8bb0\u5fc6\u5316\u624d\u80fd\u6b63\u786e\u5730\u5de5\u4f5c\u3002\u901a\u8fc7\u5c06\u63d0\u53d6\u903b\u8f91\u4fdd\u7559\u5728\u8f93\u5165\u9009\u62e9\u5668\u4e2d\uff0c\u5c06\u8f6c\u6362\u903b\u8f91\u4fdd\u7559\u5728\u7ed3\u679c\u51fd\u6570\u4e2d\uff0cReselect \u53ef\u4ee5\u6709\u6548\u5730\u786e\u5b9a\u4f55\u65f6\u91cd\u7528\u7f13\u5b58\u7ed3\u679c\uff0c\u4f55\u65f6\u91cd\u65b0\u8ba1\u7b97\u5b83\u4eec\u3002\u8fd9\u4e0d\u4ec5\u63d0\u9ad8\u4e86\u6027\u80fd\uff0c\u800c\u4e14\u786e\u4fdd\u4e86\u4f60\u7684\u9009\u62e9\u5668\u7684\u4e00\u81f4\u6027\u548c\u53ef\u9884\u6d4b\u6027\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4e3a\u4e86\u4f7f\u8bb0\u5fc6\u5316\u6309\u9884\u671f\u5de5\u4f5c\uff0c\u5fc5\u987b\u9075\u5faa\u8fd9\u4e24\u4e2a\u6307\u5bfc\u539f\u5219\u3002\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u88ab\u5ffd\u89c6\uff0c\u8bb0\u5fc6\u5316\u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002\u8003\u8651\u4ee5\u4e0b\u4f8b\u5b50\u4ee5\u4fbf\u6e05\u6670\u7406\u89e3\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// \u274c \u9519\u8bef\u7684\u4f7f\u7528\u6848\u4f8b\uff1a\u8fd9\u5c06\u65e0\u6cd5\u6b63\u786e\u5730\u8bb0\u5fc6\u5316\uff0c\u800c\u4e14\u6ca1\u6709\u4efb\u4f55\u7528\u5904\uff01\r\nconst brokenSelector = createSelector(\r\n  // \u2714\ufe0f \u597d\u7684\uff1a\u5305\u542b\u63d0\u53d6\u903b\u8f91\u3002\r\n  [(state: RootState) => state.todos],\r\n  // \u274c \u574f\u7684\uff1a\u4e0d\u5305\u542b\u8f6c\u6362\u903b\u8f91\u3002\r\n  todos => todos\r\n)\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type DevModeCheckFrequency = 'always' | 'once' | 'never'\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u53ef\u80fd\u7684\u503c"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"once"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u53ea\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u9009\u62e9\u5668\u65f6\u8fd0\u884c\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"always"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u6bcf\u6b21\u8c03\u7528\u9009\u62e9\u5668\u65f6\u90fd\u8fd0\u884c\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"never"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"\u4ece\u4e0d\u8fd0\u884c\u8eab\u4efd\u51fd\u6570\u68c0\u67e5\u3002"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"\u8eab\u4efd\u51fd\u6570\u68c0\u67e5\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f1a\u81ea\u52a8\u7981\u7528\u3002"})}),"\n",(0,r.jsx)(t.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u914d\u7f6e\u8fd9\u79cd\u884c\u4e3a\uff1a"}),"\n",(0,r.jsxs)(t.h3,{id:"1-\u901a\u8fc7-setglobaldevmodechecks-\u5168\u5c40\u914d\u7f6e",children:["1. \u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"setGlobalDevModeChecks"})," \u5168\u5c40\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { setGlobalDevModeChecks } from 'reselect'\r\n\r\n// \u53ea\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u9009\u62e9\u5668\u65f6\u8fd0\u884c\u3002 (\u9ed8\u8ba4)\r\nsetGlobalDevModeChecks({ identityFunctionCheck: 'once' })\r\n\r\n// \u6bcf\u6b21\u8c03\u7528\u9009\u62e9\u5668\u65f6\u90fd\u8fd0\u884c\u3002\r\nsetGlobalDevModeChecks({ identityFunctionCheck: 'always' })\r\n\r\n// \u4ece\u4e0d\u8fd0\u884c\u8eab\u4efd\u51fd\u6570\u68c0\u67e5\u3002\r\nsetGlobalDevModeChecks({ identityFunctionCheck: 'never' })\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"2-\u901a\u8fc7\u76f4\u63a5\u5411-createselector-\u4f20\u9012-identityfunctioncheck-\u9009\u9879\u6765\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u914d\u7f6e",children:["2. \u901a\u8fc7\u76f4\u63a5\u5411 ",(0,r.jsx)(c.d.CreateSelector,{children:(0,r.jsx)(t.code,{children:"createSelector"})})," \u4f20\u9012 ",(0,r.jsx)(t.code,{children:"identityFunctionCheck"})," \u9009\u9879\u6765\u5bf9\u6bcf\u4e2a\u9009\u62e9\u5668\u8fdb\u884c\u914d\u7f6e\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { createSelector } from 'reselect'\r\n\r\ninterface RootState {\r\n  todos: { id: number; completed: boolean }[]\r\n  alerts: { id: number; read: boolean }[]\r\n}\r\n\r\n// \u521b\u5efa\u4e00\u4e2a\u9009\u62e9\u5668\uff0c\u68c0\u67e5\u7ed3\u679c\u51fd\u6570\u662f\u5426\u662f\u4e00\u4e2a\u8eab\u4efd\u51fd\u6570\u3002\r\nconst selectTodos = createSelector(\r\n  // \u2714\ufe0f \u597d\u7684\uff1a\u5305\u542b\u63d0\u53d6\u903b\u8f91\u3002\r\n  [(state: RootState) => state.todos],\r\n  // \u274c \u574f\u7684\uff1a\u4e0d\u5305\u542b\u8f6c\u6362\u903b\u8f91\u3002\r\n  todos => todos,\r\n  // \u5c06\u8986\u76d6\u5168\u5c40\u8bbe\u7f6e\u3002\r\n  { devModeChecks: { identityFunctionCheck: 'always' } }\r\n)\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u8fd9\u5c06\u8986\u76d6\u901a\u8fc7\u8c03\u7528 ",(0,r.jsx)(t.code,{children:"setGlobalDevModeChecks"})," \u8bbe\u7f6e\u7684\u5168\u5c40\u8eab\u4efd\u51fd\u6570\u68c0\u67e5\u3002"]})})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const l={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(6540),l=n(4164),o=n(3104),s=n(6347),c=n(205),i=n(7485),a=n(1682),d=n(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[a,u]=x({queryString:n,groupId:l}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,d.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:l}),b=(()=>{const e=a??m;return p({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),j(e)}),[u,j,o]),tabValues:o}}var j=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),l=c[n].value;l!==r&&(a(t),s(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function k(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,y.jsx)(f,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function g(e){const t=(0,j.A)();return(0,y.jsx)(k,{...e,children:u(e.children)},String(t))}},9760:(e,t,n)=>{n.d(t,{d:()=>s});var r=n(8774),l=n(6540),o=n(4848);const s={Selector:(0,l.memo)((e=>{let{text:t="selector"}=e;return(0,o.jsx)(r.A,{to:"/introduction/getting-started#selector-function",title:"Selector Function",children:t})})),InputSelectors:(0,l.memo)((e=>{let{text:t="input selectors"}=e;return(0,o.jsx)(r.A,{to:"/introduction/getting-started#input-selectors",title:"Input Selectors",children:t})})),OutputSelector:(0,l.memo)((e=>{let{text:t="output selector"}=e;return(0,o.jsx)(r.A,{to:"/introduction/getting-started#output-selector",title:"Output Selector",children:t})})),ResultFunction:(0,l.memo)((e=>{let{text:t="result function"}=e;return(0,o.jsx)(r.A,{to:"/introduction/getting-started#result-function",title:"Result Function",children:t})})),Dependencies:(0,l.memo)((e=>{let{text:t="dependencies"}=e;return(0,o.jsx)(r.A,{to:"/introduction/getting-started#dependencies",title:"Dependencies",children:t})})),CascadingMemoization:(0,l.memo)((e=>{let{text:t="Cascading Memoization"}=e;return(0,o.jsxs)(r.A,{to:"/introduction/how-does-reselect-work#cascading-memoization",title:"Cascading Memoization",children:['"',t,'"']})})),OutputSelectorFields:(0,l.memo)((e=>{let{text:t="Output Selector Fields"}=e;return(0,o.jsx)(r.A,{to:"/api/createSelector#output-selector-fields",title:"Output Selector Fields",children:t})})),CreateSelector:(0,l.memo)((()=>(0,o.jsx)(r.A,{to:"/api/createSelector",title:"createSelector",children:(0,o.jsx)("code",{children:"createSelector"})}))),CreateSelectorCreator:(0,l.memo)((()=>(0,o.jsx)(r.A,{to:"/api/createSelectorCreator",title:"createSelectorCreator",children:(0,o.jsx)("code",{children:"createSelectorCreator"})}))),LruMemoize:(0,l.memo)((()=>(0,o.jsx)(r.A,{to:"/api/lruMemoize",title:"lruMemoize",children:(0,o.jsx)("code",{children:"lruMemoize"})}))),WeakMapMemoize:(0,l.memo)((()=>(0,o.jsx)(r.A,{to:"/api/weakMapMemoize",title:"weakMapMemoize",children:(0,o.jsx)("code",{children:"weakMapMemoize"})}))),UnstableAutotrackMemoize:(0,l.memo)((()=>(0,o.jsx)(r.A,{to:"/api/unstable_autotrackMemoize",title:"unstable_autotrackMemoize",children:(0,o.jsx)("code",{children:"unstable_autotrackMemoize"})}))),CreateStructuredSelector:(0,l.memo)((()=>(0,o.jsx)(r.A,{to:"/api/createStructuredSelector",title:"createStructuredSelector",children:(0,o.jsx)("code",{children:"createStructuredSelector"})})))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const l={},o=r.createContext(l);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);