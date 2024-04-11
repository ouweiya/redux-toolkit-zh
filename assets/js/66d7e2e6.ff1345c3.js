"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[7076],{1285:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(4848),i=n(8453);const s={id:"error-handling",title:"\u9519\u8bef\u5904\u7406",sidebar_label:"\u9519\u8bef\u5904\u7406",hide_title:!0,description:"RTK Query > Usage > Error Handling: dealing with API errors"},o="\u9519\u8bef\u5904\u7406",a={id:"rtk-query/usage/error-handling",title:"\u9519\u8bef\u5904\u7406",description:"RTK Query > Usage > Error Handling: dealing with API errors",source:"@site/docs/rtk-query/usage/error-handling.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/error-handling",permalink:"/redux-toolkit-zh/rtk-query/usage/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/ouweiya/redux-toolkit-zh/tree/master/docs/rtk-query/usage/error-handling.mdx",tags:[],version:"current",frontMatter:{id:"error-handling",title:"\u9519\u8bef\u5904\u7406",sidebar_label:"\u9519\u8bef\u5904\u7406",hide_title:!0,description:"RTK Query > Usage > Error Handling: dealing with API errors"},sidebar:"docs",previous:{title:"\u6761\u4ef6\u83b7\u53d6",permalink:"/redux-toolkit-zh/rtk-query/usage/conditional-fetching"},next:{title:"\u5206\u9875",permalink:"/redux-toolkit-zh/rtk-query/usage/pagination"}},d={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u9519\u8bef\u663e\u793a\u793a\u4f8b",id:"\u9519\u8bef\u663e\u793a\u793a\u4f8b",level:3},{value:"\u81ea\u5b9a\u4e49 <code>baseQuery</code> \u7684\u9519\u8bef",id:"\u81ea\u5b9a\u4e49-basequery-\u7684\u9519\u8bef",level:2},{value:"\u5728\u5b8f\u89c2\u5c42\u9762\u5904\u7406\u9519\u8bef",id:"\u5728\u5b8f\u89c2\u5c42\u9762\u5904\u7406\u9519\u8bef",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\xa0"}),"\n",(0,t.jsx)(r.h1,{id:"\u9519\u8bef\u5904\u7406",children:"\u9519\u8bef\u5904\u7406"}),"\n",(0,t.jsx)(r.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,t.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",(0,t.jsx)(r.a,{href:"../api/fetchBaseQuery",children:"fetchBaseQuery"})," \u7684\u67e5\u8be2\u6216\u53d8\u5f02\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u5b83\u5c06\u5728\u76f8\u5e94\u94a9\u5b50\u7684 ",(0,t.jsx)(r.code,{children:"error"})," \u5c5e\u6027\u4e2d\u8fd4\u56de\u3002\u5f53\u8fd9\u79cd\u60c5\u51b5\u53d1\u751f\u65f6\uff0c\u7ec4\u4ef6\u5c06\u91cd\u65b0\u6e32\u67d3\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9519\u8bef\u6570\u636e\u663e\u793a\u9002\u5f53\u7684\u7528\u6237\u754c\u9762\uff08\u5982\u679c\u9700\u8981\u7684\u8bdd\uff09\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"\u9519\u8bef\u663e\u793a\u793a\u4f8b",children:"\u9519\u8bef\u663e\u793a\u793a\u4f8b"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",metastring:'no-transpile title="\u67e5\u8be2\u9519\u8bef"',children:"function PostsList() {\n  const { data, error } = useGetPostsQuery()\n\n  return (\n    <div>\n      {error.status} {JSON.stringify(error.data)}\n    </div>\n  )\n}\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",metastring:'no-transpile title="\u53d8\u5f02\u9519\u8bef"',children:"function AddPost() {\n  const [addPost, { error }] = useAddPostMutation()\n\n  return (\n    <div>\n      {error.status} {JSON.stringify(error.data)}\n    </div>\n  )\n}\n"})}),"\n",(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u5728\u53d8\u5f02\u540e\u7acb\u5373\u8bbf\u95ee\u9519\u8bef\u6216\u6210\u529f\u7684\u6709\u6548\u8f7d\u8377\uff0c\u4f60\u53ef\u4ee5\u94fe\u5f0f\u8c03\u7528 ",(0,t.jsx)(r.code,{children:".unwrap()"}),"\u3002"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="\u4f7f\u7528 .unwrap" no-transpile',children:"addPost({ id: 1, name: 'Example' })\n  .unwrap()\n  .then((payload) => console.log('fulfilled', payload))\n  .catch((error) => console.error('rejected', error))\n"})})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",metastring:'no-transpile title="\u624b\u52a8\u9009\u62e9\u9519\u8bef"',children:"function PostsList() {\n  const { error } = useSelector(api.endpoints.getPosts.select())\n\n  return (\n    <div>\n      {error.status} {JSON.stringify(error.data)}\n    </div>\n  )\n}\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"\u81ea\u5b9a\u4e49-basequery-\u7684\u9519\u8bef",children:["\u81ea\u5b9a\u4e49 ",(0,t.jsx)(r.code,{children:"baseQuery"})," \u7684\u9519\u8bef"]}),"\n",(0,t.jsxs)(r.p,{children:["\u54cd\u5e94\u662f\u4f5c\u4e3a ",(0,t.jsx)(r.code,{children:"data"})," \u8fd8\u662f ",(0,t.jsx)(r.code,{children:"error"})," \u8fd4\u56de\u7684\uff0c\u53d6\u51b3\u4e8e\u63d0\u4f9b\u7684 ",(0,t.jsx)(r.code,{children:"baseQuery"}),"\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u6700\u7ec8\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4f60\u559c\u6b22\u7684\u4efb\u4f55\u5e93\u4e0e\u4f60\u7684 ",(0,t.jsx)(r.code,{children:"baseQuery"})," \u4e00\u8d77\u4f7f\u7528\uff0c\u4f46\u91cd\u8981\u7684\u662f\u4f60\u8fd4\u56de\u6b63\u786e\u7684\u54cd\u5e94\u683c\u5f0f\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5c1d\u8bd5\u8fc7 ",(0,t.jsx)(r.a,{href:"../api/fetchBaseQuery",children:(0,t.jsx)(r.code,{children:"fetchBaseQuery"})}),"\uff0c\u90a3\u5c31\u7ed9\u5b83\u4e00\u4e2a\u673a\u4f1a\uff01\u5426\u5219\uff0c\u67e5\u770b ",(0,t.jsx)(r.a,{href:"./customizing-queries",children:"\u81ea\u5b9a\u4e49\u67e5\u8be2"})," \u4ee5\u83b7\u53d6\u5982\u4f55\u66f4\u6539\u8fd4\u56de\u9519\u8bef\u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u5728\u5b8f\u89c2\u5c42\u9762\u5904\u7406\u9519\u8bef",children:"\u5728\u5b8f\u89c2\u5c42\u9762\u5904\u7406\u9519\u8bef"}),"\n",(0,t.jsx)(r.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5f88\u591a\u65b9\u5f0f\u6765\u7ba1\u7406\u4f60\u7684\u9519\u8bef\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u4e3a\u4efb\u4f55\u5f02\u6b65\u9519\u8bef\u663e\u793a\u4e00\u4e2a\u901a\u7528\u7684\u5f39\u51fa\u901a\u77e5\u3002\u7531\u4e8e RTK Query \u662f\u57fa\u4e8e Redux \u548c Redux-Toolkit \u6784\u5efa\u7684\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u4e3a\u6b64\u76ee\u7684\u5411\u4f60\u7684\u5b58\u50a8\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u3002"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Redux Toolkit \u6709 ",(0,t.jsx)(r.a,{href:"/redux-toolkit-zh/api/matching-utilities#matching-utilities",children:"\u52a8\u4f5c\u5339\u914d\u5de5\u5177"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u5b83\u4eec\u8fdb\u884c\u989d\u5916\u7684\u81ea\u5b9a\u4e49\u884c\u4e3a\u3002"]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'no-transpile title="\u9519\u8bef\u6355\u83b7\u4e2d\u95f4\u4ef6\u793a\u4f8b"',children:"import { isRejectedWithValue } from '@reduxjs/toolkit'\nimport type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'\nimport { toast } from 'your-cool-library'\n\n/**\n * \u8bb0\u5f55\u8b66\u544a\u5e76\u663e\u793a\u4e00\u4e2a\u5f39\u51fa\u901a\u77e5\uff01\n */\nexport const rtkQueryErrorLogger: Middleware =\n  (api: MiddlewareAPI) => (next) => (action) => {\n    // RTK Query \u5728\u5e95\u5c42\u4f7f\u7528\u4e86 redux-toolkit \u7684 `createAsyncThunk`\uff0c\u6240\u4ee5\u6211\u4eec\u80fd\u591f\u4f7f\u7528\u8fd9\u4e9b\u5339\u914d\u5668\uff01\n    if (isRejectedWithValue(action)) {\n      console.warn('We got a rejected action!')\n      toast.warn({\n        title: '\u5f02\u6b65\u9519\u8bef\uff01',\n        message:\n          'data' in action.error\n            ? (action.error.data as { message: string }).message\n            : action.error.message,\n      })\n    }\n\n    return next(action)\n  }\n"})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(6540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);