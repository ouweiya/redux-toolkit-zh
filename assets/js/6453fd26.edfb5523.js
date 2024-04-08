"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[2339],{3296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var c=r(4848),n=r(8453);const s={id:"createSelector",title:"\u521b\u5efa\u9009\u62e9\u5668",sidebar_label:"\u521b\u5efa\u9009\u62e9\u5668",hide_title:!0},o="createSelector",a={id:"api/createSelector",title:"\u521b\u5efa\u9009\u62e9\u5668",description:"&nbsp;",source:"@site/docs/api/createSelector.mdx",sourceDirName:"api",slug:"/api/createSelector",permalink:"/redux-toolkit-zh/api/createSelector",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/createSelector.mdx",tags:[],version:"current",frontMatter:{id:"createSelector",title:"\u521b\u5efa\u9009\u62e9\u5668",sidebar_label:"\u521b\u5efa\u9009\u62e9\u5668",hide_title:!0},sidebar:"docs",previous:{title:"\u7ec4\u5408\u5207\u7247",permalink:"/redux-toolkit-zh/api/combineSlices"},next:{title:"\u5339\u914d\u5de5\u5177",permalink:"/redux-toolkit-zh/api/matching-utilities"}},l={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"<code>createDraftSafeSelector</code>",id:"createdraftsafeselector",level:2},{value:"\u5b9a\u4e49\u9884\u7c7b\u578b\u7684 <code>createDraftSelector</code>",id:"\u5b9a\u4e49\u9884\u7c7b\u578b\u7684-createdraftselector",level:3}];function i(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"\xa0"}),"\n",(0,c.jsx)(t.h1,{id:"createselector",children:(0,c.jsx)(t.code,{children:"createSelector"})}),"\n",(0,c.jsx)(t.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"createSelector"})," \u662f ",(0,c.jsx)(t.a,{href:"https://github.com/reduxjs/reselect",children:"Reselect \u5e93"}),"\u7684\u5b9e\u7528\u5de5\u5177\uff0c\u4e3a\u4e86\u65b9\u4fbf\u4f7f\u7528\u800c\u91cd\u65b0\u5bfc\u51fa\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"createSelector"})," \u7684\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u89c1\uff1a"]}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"https://github.com/reduxjs/reselect",children:"Reselect API \u6587\u6863"})}),"\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"https://react-cn.redux.js.org/next/api/hooks#using-memoizing-selectors",children:"React-Redux \u6587\u6863\uff1aHooks API - \u4f7f\u7528\u8bb0\u5fc6\u9009\u62e9\u5668"})}),"\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/",children:"\u60ef\u7528 Redux\uff1a\u4f7f\u7528 Reselect \u9009\u62e9\u5668\u8fdb\u884c\u5c01\u88c5\u548c\u6027\u80fd\u4f18\u5316"})}),"\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:"https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md",children:"React/Redux \u94fe\u63a5\uff1aReducers \u548c Selectors"})}),"\n"]}),"\n",(0,c.jsx)(t.admonition,{type:"note",children:(0,c.jsxs)(t.p,{children:["\u5728 v0.7 \u4e4b\u524d\uff0cRTK \u4ece ",(0,c.jsx)(t.a,{href:"https://github.com/planttheidea/selectorator",children:(0,c.jsx)(t.code,{children:"selectorator"})})," \u91cd\u65b0\u5bfc\u51fa\u4e86 ",(0,c.jsx)(t.code,{children:"createSelector"}),"\uff0c\u8fd9\u5141\u8bb8\u4f7f\u7528\u5b57\u7b26\u4e32\u952e\u8def\u5f84\u4f5c\u4e3a\u8f93\u5165\u9009\u62e9\u5668\u3002\u8fd9\u88ab\u79fb\u9664\u4e86\uff0c\u56e0\u4e3a\u5b83\u6700\u7ec8\u6ca1\u6709\u63d0\u4f9b\u8db3\u591f\u7684\u597d\u5904\uff0c\u800c\u4e14\u5b57\u7b26\u4e32\u952e\u8def\u5f84\u4f7f\u5f97\u9009\u62e9\u5668\u7684\u9759\u6001\u7c7b\u578b\u5316\u53d8\u5f97\u56f0\u96be\u3002"]})}),"\n",(0,c.jsx)(t.h2,{id:"createdraftsafeselector",children:(0,c.jsx)(t.code,{children:"createDraftSafeSelector"})}),"\n",(0,c.jsx)(t.p,{children:"\u901a\u5e38\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u5728 reducers \u4e2d\u4f7f\u7528\u9009\u62e9\u5668\uff1a"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u9009\u62e9\u5668\u901a\u5e38\u671f\u671b\u6574\u4e2a Redux \u72b6\u6001\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\uff0c\u800c\u5207\u7247 reducers \u53ea\u80fd\u8bbf\u95ee\u6574\u4e2a Redux \u72b6\u6001\u7684\u7279\u5b9a\u5b50\u96c6"}),"\n",(0,c.jsxs)(t.li,{children:["Reselect \u7684 ",(0,c.jsx)(t.code,{children:"createSelector"})," \u4f9d\u8d56\u4e8e\u5f15\u7528\u6bd4\u8f83\u6765\u786e\u5b9a\u8f93\u5165\u662f\u5426\u5df2\u66f4\u6539\uff0c\u5982\u679c\u5c06 Immer Proxy \u5305\u88c5\u7684\u8349\u7a3f\u503c\u4f20\u9012\u7ed9\u9009\u62e9\u5668\uff0c\u9009\u62e9\u5668\u53ef\u80fd\u4f1a\u770b\u5230\u76f8\u540c\u7684\u5f15\u7528\u5e76\u8ba4\u4e3a\u6ca1\u6709\u4efb\u4f55\u6539\u53d8\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(t.p,{children:["\u7136\u800c\uff0c\u4e00\u4e9b\u7528\u6237\u8bf7\u6c42\u521b\u5efa\u80fd\u5728 Immer-powered reducers \u4e2d\u6b63\u786e\u5de5\u4f5c\u7684\u9009\u62e9\u5668\u3002\u8fd9\u6837\u7684\u4e00\u4e2a\u7528\u4f8b\u53ef\u80fd\u662f\u5f53\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"createEntityAdapter"})," \u6536\u96c6\u6709\u5e8f\u7684\u9879\u76ee\u96c6\u65f6\uff0c\u4f8b\u5982 ",(0,c.jsx)(t.code,{children:"const orderedTodos = todosSelectors.selectAll(todosState)"}),"\uff0c\u7136\u540e\u5728\u5269\u4f59\u7684 reducer \u903b\u8f91\u4e2d\u4f7f\u7528 ",(0,c.jsx)(t.code,{children:"orderedTodos"}),"\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u9664\u4e86\u91cd\u65b0\u5bfc\u51fa ",(0,c.jsx)(t.code,{children:"createSelector"}),"\uff0cRTK \u8fd8\u5bfc\u51fa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,c.jsx)(t.code,{children:"createDraftSafeSelector"})," \u7684 ",(0,c.jsx)(t.code,{children:"createSelector"})," \u5305\u88c5\u7248\u672c\uff0c\u5141\u8bb8\u4f60\u521b\u5efa\u53ef\u4ee5\u5b89\u5168\u5730\u5728 ",(0,c.jsx)(t.code,{children:"createReducer"})," \u548c ",(0,c.jsx)(t.code,{children:"createSlice"})," reducers \u4e2d\u4f7f\u7528\u7684\u9009\u62e9\u5668\uff0c\u8fd9\u4e9b reducer \u4f7f\u7528 Immer-powered \u53ef\u53d8\u903b\u8f91\u3002\u5f53\u4e0e\u666e\u901a\u72b6\u6001\u503c\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u9009\u62e9\u5668\u5c06\u6839\u636e\u8f93\u5165\u6b63\u5e38\u5730\u8fdb\u884c\u8bb0\u5fc6\u5316\u3002\u4f46\u662f\uff0c\u5f53\u4e0e Immer \u8349\u7a3f\u503c\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u9009\u62e9\u5668\u5c06\u503e\u5411\u4e8e\u91cd\u65b0\u8ba1\u7b97\u7ed3\u679c\uff0c\u4ee5\u786e\u4fdd\u5b89\u5168\u3002"]}),"\n",(0,c.jsxs)(t.p,{children:["\u6240\u6709\u7531 ",(0,c.jsx)(t.code,{children:"entityAdapter.getSelectors"}),' \u521b\u5efa\u7684\u9009\u62e9\u5668\u9ed8\u8ba4\u90fd\u662f "draft safe" \u9009\u62e9\u5668\u3002']}),"\n",(0,c.jsx)(t.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"const selectSelf = (state: State) => state\nconst unsafeSelector = createSelector(selectSelf, (state) => state.value)\nconst draftSafeSelector = createDraftSafeSelector(\n  selectSelf,\n  (state) => state.value,\n)\n\n// \u5728\u4f60\u7684 reducer \u4e2d\uff1a\n\nstate.value = 1\n\nconst unsafe1 = unsafeSelector(state)\nconst safe1 = draftSafeSelector(state)\n\nstate.value = 2\n\nconst unsafe2 = unsafeSelector(state)\nconst safe2 = draftSafeSelector(state)\n"})}),"\n",(0,c.jsxs)(t.p,{children:["\u6267\u884c\u540e\uff0c",(0,c.jsx)(t.code,{children:"unsafe1"})," \u548c ",(0,c.jsx)(t.code,{children:"unsafe2"})," \u5c06\u5177\u6709\u76f8\u540c\u7684\u503c\uff0c\u56e0\u4e3a\u8bb0\u5fc6\u5316\u7684\u9009\u62e9\u5668\u5728\u540c\u4e00\u5bf9\u8c61\u4e0a\u6267\u884c - \u4f46 ",(0,c.jsx)(t.code,{children:"safe2"})," \u5b9e\u9645\u4e0a\u4f1a\u4e0e ",(0,c.jsx)(t.code,{children:"safe1"})," \u4e0d\u540c\uff08\u66f4\u65b0\u503c\u4e3a ",(0,c.jsx)(t.code,{children:"2"}),"\uff09\uff0c\u56e0\u4e3a\u5b89\u5168\u9009\u62e9\u5668\u68c0\u6d4b\u5230\u5b83\u5728 Immer \u8349\u7a3f\u5bf9\u8c61\u4e0a\u6267\u884c\u5e76\u4f7f\u7528\u5f53\u524d\u503c\u91cd\u65b0\u8ba1\u7b97\uff0c\u800c\u4e0d\u662f\u8fd4\u56de\u7f13\u5b58\u503c\u3002"]}),"\n",(0,c.jsxs)(t.admonition,{type:"tip",children:[(0,c.jsx)(t.mdxAdmonitionTitle,{children:(0,c.jsx)(t.code,{children:"createDraftSafeSelectorCreator"})}),(0,c.jsxs)(t.p,{children:["RTK \u8fd8\u5bfc\u51fa\u4e86\u4e00\u4e2a ",(0,c.jsx)(t.code,{children:"createDraftSafeSelectorCreator"})," \u51fd\u6570\uff0c\u8fd9\u662f ",(0,c.jsx)(t.a,{href:"https://github.com/reduxjs/reselect#createselectorcreatormemoize-memoizeoptions",children:(0,c.jsx)(t.code,{children:"createSelectorCreator"})}),' \u7684 "draft safe" \u7b49\u4ef7\u7269\u3002']}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"import {\n  createDraftSafeSelectorCreator,\n  weakMapMemoize,\n} from '@reduxjs/toolkit'\n\nconst createWeakMapDraftSafeSelector =\n  createDraftSafeSelectorCreator(weakMapMemoize)\n\nconst selectSelf = (state: State) => state\nconst draftSafeSelector = createWeakMapDraftSafeSelector(\n  selectSelf,\n  (state) => state.value,\n)\n"})})]}),"\n",(0,c.jsxs)(t.h3,{id:"\u5b9a\u4e49\u9884\u7c7b\u578b\u7684-createdraftselector",children:["\u5b9a\u4e49\u9884\u7c7b\u578b\u7684 ",(0,c.jsx)(t.code,{children:"createDraftSelector"})]}),"\n",(0,c.jsxs)(t.p,{children:['\u4ece RTK 2.1 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a "\u9884\u7c7b\u578b" \u7684 ',(0,c.jsx)(t.code,{children:"createDraftSafeSelector"}),"\uff0c\u53ef\u4ee5\u5185\u7f6e ",(0,c.jsx)(t.code,{children:"state"})," \u7684\u7c7b\u578b\u3002\u8fd9\u8ba9\u4f60\u53ef\u4ee5\u4e00\u6b21\u8bbe\u7f6e\u8fd9\u4e9b\u7c7b\u578b\uff0c\u6240\u4ee5\u4f60\u4e0d\u5fc5\u6bcf\u6b21\u8c03\u7528 ",(0,c.jsx)(t.code,{children:"createDraftSafeSelector"})," \u65f6\u90fd\u91cd\u590d\u5b83\u4eec\u3002"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"const createTypedDraftSafeSelector =\n  createDraftSafeSelector.withTypes<RootState>()\n"})}),"\n",(0,c.jsxs)(t.p,{children:["\u5bfc\u5165\u5e76\u4f7f\u7528\u9884\u7c7b\u578b\u7684 ",(0,c.jsx)(t.code,{children:"createTypedDraftSafeSelector"})," \u51fd\u6570\uff0c\u5b83\u5c06\u81ea\u52a8\u77e5\u9053 ",(0,c.jsx)(t.code,{children:"state"})," \u53c2\u6570\u7684\u7c7b\u578b\u662f ",(0,c.jsx)(t.code,{children:"RootState"}),"\u3002"]}),"\n",(0,c.jsxs)(t.admonition,{title:"\u5df2\u77e5\u7684\u9650\u5236",type:"warning",children:[(0,c.jsx)(t.p,{children:"\u76ee\u524d\u8fd9\u79cd\u65b9\u6cd5\u53ea\u5728\u8f93\u5165\u9009\u62e9\u5668\u4f5c\u4e3a\u5355\u4e2a\u6570\u7ec4\u63d0\u4f9b\u65f6\u6709\u6548\u3002"}),(0,c.jsx)(t.p,{children:"\u5982\u679c\u4f60\u5c06\u8f93\u5165\u9009\u62e9\u5668\u4f5c\u4e3a\u5355\u72ec\u7684\u5185\u8054\u53c2\u6570\u4f20\u9012\uff0c\u7ed3\u679c\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u5c06\u4e0d\u4f1a\u88ab\u63a8\u65ad\u3002\u4f5c\u4e3a\u89e3\u51b3\u65b9\u6848\uff0c\u4f60\u53ef\u4ee5"}),(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsx)(t.li,{children:"\u5c06\u4f60\u7684\u8f93\u5165\u9009\u62e9\u5668\u5305\u88c5\u5728\u4e00\u4e2a\u6570\u7ec4\u4e2d"}),"\n",(0,c.jsx)(t.li,{children:"\u4f60\u53ef\u4ee5\u6ce8\u89e3\u7ed3\u679c\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff1a"}),"\n"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"import { createSelector } from 'reselect'\n\ninterface Todo {\n  id: number\n  completed: boolean\n}\n\ninterface Alert {\n  id: number\n  read: boolean\n}\n\nexport interface RootState {\n  todos: Todo[]\n  alerts: Alert[]\n}\n\nexport const createTypedDraftSafeSelector =\n  createDraftSafeSelector.withTypes<RootState>()\n\nconst selectTodoIds = createTypedDraftSafeSelector(\n  // `state` \u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a `RootState`\uff0c\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u7c7b\u578b\n  (state) => state.todos,\n  // \u274c \u5df2\u77e5\u7684\u9650\u5236\uff1a\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53c2\u6570\u7c7b\u578b\u4e0d\u4f1a\u88ab\u63a8\u65ad\n  // \u6240\u4ee5\u4f60\u5c06\u4e0d\u5f97\u4e0d\u624b\u52a8\u6ce8\u89e3\u5b83\u4eec\u3002\n  (todos: Todo[]) => todos.map(({ id }) => id),\n)\n"})})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var c=r(6540);const n={},s=c.createContext(n);function o(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);