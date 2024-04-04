"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[6577],{79:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var n=d(4848),s=d(8453);const o={id:"codemods",title:"\u4ee3\u7801\u4fee\u6539",sidebar_label:"\u4ee3\u7801\u4fee\u6539",hide_title:!0},r="Codemods",a={id:"api/codemods",title:"\u4ee3\u7801\u4fee\u6539",description:"&nbsp;",source:"@site/docs/api/codemods.mdx",sourceDirName:"api",slug:"/api/codemods",permalink:"/redux-toolkit-zh/api/codemods",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/codemods.mdx",tags:[],version:"current",frontMatter:{id:"codemods",title:"\u4ee3\u7801\u4fee\u6539",sidebar_label:"\u4ee3\u7801\u4fee\u6539",hide_title:!0},sidebar:"docs",previous:{title:"\u5176\u4ed6\u5bfc\u51fa",permalink:"/redux-toolkit-zh/api/other-exports"},next:{title:"RTK \u67e5\u8be2\u6982\u89c8",permalink:"/redux-toolkit-zh/rtk-query/overview"}},c={},i=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\xa0"}),"\n",(0,n.jsx)(t.h1,{id:"codemods",children:"Codemods"}),"\n",(0,n.jsxs)(t.p,{children:["Per ",(0,n.jsxs)(t.a,{href:"https://github.com/reduxjs/redux-toolkit/releases/tag/v1.9.0",children:["the description in ",(0,n.jsx)(t.code,{children:"1.9.0"})]}),', we have removed the "object" argument from ',(0,n.jsx)(t.code,{children:"createReducer"})," and ",(0,n.jsx)(t.code,{children:"createSlice.extraReducers"})," in the RTK 2.0 major version. We've also added a new optional form of ",(0,n.jsx)(t.code,{children:"createSlice.reducers"})," that uses a callback instead of an object."]}),"\n",(0,n.jsx)(t.p,{children:'To simplify upgrading codebases, we\'ve published a set of codemods that will automatically transform the deprecated "object" syntax into the equivalent "builder" syntax.'}),"\n",(0,n.jsxs)(t.p,{children:["The codemods package is available on NPM as ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@reduxjs/rtk-codemods",children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"@reduxjs/rtk-codemods"})})}),". It currently contains these codemods:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"createReducerBuilder"}),": migrates ",(0,n.jsx)(t.code,{children:"createReducer"})," calls that use the removed object syntax to the builder callback syntax"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"createSliceBuilder"}),": migrates ",(0,n.jsx)(t.code,{children:"createSlice"})," calls that use the removed object syntax for ",(0,n.jsx)(t.code,{children:"extraReducers"})," to the builder callback syntax"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"createSliceReducerBuilder"}),": migrates ",(0,n.jsx)(t.code,{children:"createSlice"})," calls that use the still-standard object syntax for ",(0,n.jsx)(t.code,{children:"reducers"})," to the optional new builder callback syntax, including uses of prepared reducers"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To run the codemods against your codebase, run ",(0,n.jsx)(t.code,{children:"npx @reduxjs/rtk-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Examples:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx @reduxjs/rtk-codemods createReducerBuilder ./src\n\nnpx @reduxjs/rtk-codemods createSliceBuilder ./packages/my-app/**/*.ts\n"})}),"\n",(0,n.jsx)(t.p,{children:"We also recommend re-running Prettier on the codebase before committing the changes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["These codemods ",(0,n.jsx)(t.em,{children:"should"})," work, but we would greatly appreciate testing and feedback on more real-world codebases!"]})}),"\n",(0,n.jsx)(t.p,{children:"Before:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"createReducer(initialState, {\n  [todoAdded1a]: (state, action) => {\n    // stuff\n  },\n  [todoAdded1b]: (state, action) => action.payload,\n})\n\nconst slice1 = createSlice({\n  name: 'a',\n  initialState: {},\n  extraReducers: {\n    [todoAdded1a]: (state, action) => {\n      // stuff\n    },\n    [todoAdded1b]: (state, action) => action.payload,\n  },\n})\n"})}),"\n",(0,n.jsx)(t.p,{children:"After:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"createReducer(initialState, (builder) => {\n  builder.addCase(todoAdded1a, (state, action) => {\n    // stuff\n  })\n\n  builder.addCase(todoAdded1b, (state, action) => action.payload)\n})\n\nconst slice1 = createSlice({\n  name: 'a',\n  initialState: {},\n\n  extraReducers: (builder) => {\n    builder.addCase(todoAdded1a, (state, action) => {\n      // stuff\n    })\n\n    builder.addCase(todoAdded1b, (state, action) => action.payload)\n  },\n})\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>r,x:()=>a});var n=d(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);