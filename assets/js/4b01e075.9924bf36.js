"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[8171],{524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(4848),o=n(8453);const i={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",hide_title:!0},s="Redux Toolkit Quick Start",a={id:"tutorials/quick-start",title:"Quick Start",description:"&nbsp;",source:"@site/docs/tutorials/quick-start.mdx",sourceDirName:"tutorials",slug:"/tutorials/quick-start",permalink:"/tutorials/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/quick-start.mdx",tags:[],version:"current",frontMatter:{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",hide_title:!0},sidebar:"docs",previous:{title:"Tutorials Overview",permalink:"/tutorials/overview"},next:{title:"TypeScript Quick Start",permalink:"/tutorials/typescript"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to Read This Tutorial",id:"how-to-read-this-tutorial",level:3},{value:"Usage Summary",id:"usage-summary",level:2},{value:"Install Redux Toolkit and React-Redux",id:"install-redux-toolkit-and-react-redux",level:3},{value:"Create a Redux Store",id:"create-a-redux-store",level:3},{value:"Provide the Redux Store to React",id:"provide-the-redux-store-to-react",level:3},{value:"Create a Redux State Slice",id:"create-a-redux-state-slice",level:3},{value:"Add Slice Reducers to the Store",id:"add-slice-reducers-to-the-store",level:3},{value:"Use Redux State and Actions in React Components",id:"use-redux-state-and-actions-in-react-components",level:3},{value:"What You&#39;ve Learned",id:"what-youve-learned",level:2},{value:"Full Counter App Example",id:"full-counter-app-example",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"\xa0"}),"\n",(0,r.jsx)(t.h1,{id:"redux-toolkit-quick-start",children:"Redux Toolkit Quick Start"}),"\n",(0,r.jsx)(t.admonition,{title:"What You'll Learn",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"How to set up and use Redux Toolkit with React-Redux"}),"\n"]})}),"\n",(0,r.jsx)(t.admonition,{title:"Prerequisites",type:"info",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Familiarity with ",(0,r.jsx)(t.a,{href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/",children:"ES6 syntax and features"})]}),"\n",(0,r.jsxs)(t.li,{children:["Knowledge of React terminology: ",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/introducing-jsx.html",children:"JSX"}),", ",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/state-and-lifecycle.html",children:"State"}),", ",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/components-and-props.html",children:"Function Components, Props"}),", and ",(0,r.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:"Hooks"})]}),"\n",(0,r.jsxs)(t.li,{children:["Understanding of ",(0,r.jsx)(t.a,{href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow",children:"Redux terms and concepts"})]}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["Welcome to the Redux Toolkit Quick Start tutorial! ",(0,r.jsx)(t.strong,{children:"This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-read-this-tutorial",children:"How to Read This Tutorial"}),"\n",(0,r.jsxs)(t.p,{children:["This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, ",(0,r.jsx)(t.a,{href:"/tutorials/overview",children:'see the tutorials linked in the "Tutorials Overview" page'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on ",(0,r.jsx)(t.a,{href:"https://create-react-app.dev/docs/folder-structure",children:"a typical Create-React-App folder structure"})," where all the application code is in a ",(0,r.jsx)(t.code,{children:"src"}),", but the patterns can be adapted to whatever project or folder setup you're using."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/reduxjs/redux-templates/tree/master/packages/cra-template-redux",children:"Redux+JS template for Create-React-App"})," comes with this same project setup already configured."]}),"\n",(0,r.jsx)(t.h2,{id:"usage-summary",children:"Usage Summary"}),"\n",(0,r.jsx)(t.h3,{id:"install-redux-toolkit-and-react-redux",children:"Install Redux Toolkit and React-Redux"}),"\n",(0,r.jsx)(t.p,{children:"Add the Redux Toolkit and React-Redux packages to your project:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm install @reduxjs/toolkit react-redux\n"})}),"\n",(0,r.jsx)(t.h3,{id:"create-a-redux-store",children:"Create a Redux Store"}),"\n",(0,r.jsxs)(t.p,{children:["Create a file named ",(0,r.jsx)(t.code,{children:"src/app/store.js"}),". Import the ",(0,r.jsx)(t.code,{children:"configureStore"})," API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="app/store.js"',children:"import { configureStore } from '@reduxjs/toolkit'\n\nexport const store = configureStore({\n  reducer: {},\n})\n\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<typeof store.getState>\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = typeof store.dispatch\n"})}),"\n",(0,r.jsx)(t.p,{children:"This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing."}),"\n",(0,r.jsx)(t.h3,{id:"provide-the-redux-store-to-react",children:"Provide the Redux Store to React"}),"\n",(0,r.jsxs)(t.p,{children:["Once the store is created, we can make it available to our React components by putting a React-Redux ",(0,r.jsx)(t.code,{children:"<Provider>"})," around our application in ",(0,r.jsx)(t.code,{children:"src/index.js"}),". Import the Redux store we just created, put a ",(0,r.jsx)(t.code,{children:"<Provider>"})," around your ",(0,r.jsx)(t.code,{children:"<App>"}),", and pass the store as a prop:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="index.js"',children:"// file: App.tsx noEmit\nimport React from 'react'\nexport default function App() {\n  return <div>...</div>\n}\n\n// file: app/store.ts noEmit\nimport { configureStore } from '@reduxjs/toolkit'\n\nexport const store = configureStore({\n  reducer: {},\n})\n\n// file: index.tsx\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport './index.css'\nimport App from './App'\n// highlight-start\nimport { store } from './app/store'\nimport { Provider } from 'react-redux'\n// highlight-end\n\nReactDOM.render(\n  // highlight-next-line\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"create-a-redux-state-slice",children:"Create a Redux State Slice"}),"\n",(0,r.jsxs)(t.p,{children:["Add a new file named ",(0,r.jsx)(t.code,{children:"src/features/counter/counterSlice.js"}),". In that file, import the ",(0,r.jsx)(t.code,{children:"createSlice"})," API from Redux Toolkit."]}),"\n",(0,r.jsx)(t.p,{children:"Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice."}),"\n",(0,r.jsxs)(t.p,{children:["Redux requires that ",(0,r.jsx)(t.a,{href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#immutability",children:"we write all state updates immutably, by making copies of data and updating the copies"}),". However, Redux Toolkit's ",(0,r.jsx)(t.code,{children:"createSlice"})," and ",(0,r.jsx)(t.code,{children:"createReducer"})," APIs use ",(0,r.jsx)(t.a,{href:"https://immerjs.github.io/immer/",children:"Immer"})," inside to allow us to ",(0,r.jsx)(t.a,{href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer",children:'write "mutating" update logic that becomes correct immutable updates'}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="features/counter/counterSlice.js"',children:"import { createSlice } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\n\nexport interface CounterState {\n  value: number\n}\n\nconst initialState: CounterState = {\n  value: 0,\n}\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    increment: (state) => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    incrementByAmount: (state, action: PayloadAction<number>) => {\n      state.value += action.payload\n    },\n  },\n})\n\n// Action creators are generated for each case reducer function\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\nexport default counterSlice.reducer\n"})}),"\n",(0,r.jsx)(t.h3,{id:"add-slice-reducers-to-the-store",children:"Add Slice Reducers to the Store"}),"\n",(0,r.jsxs)(t.p,{children:["Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the ",(0,r.jsx)(t.code,{children:"reducer"})," parameter, we tell the store to use this slice reducer function to handle all updates to that state."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="app/store.js"',children:"// file: features/counter/counterSlice.ts noEmit\nimport { createSlice } from '@reduxjs/toolkit'\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: {},\n  reducers: {},\n})\n\nexport default counterSlice.reducer\n\n// file: app/store.ts\nimport { configureStore } from '@reduxjs/toolkit'\n// highlight-next-line\nimport counterReducer from '../features/counter/counterSlice'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-next-line\n    counter: counterReducer,\n  },\n})\n\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<typeof store.getState>\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = typeof store.dispatch\n"})}),"\n",(0,r.jsx)(t.h3,{id:"use-redux-state-and-actions-in-react-components",children:"Use Redux State and Actions in React Components"}),"\n",(0,r.jsxs)(t.p,{children:["Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with ",(0,r.jsx)(t.code,{children:"useSelector"}),", and dispatch actions using ",(0,r.jsx)(t.code,{children:"useDispatch"}),". Create a ",(0,r.jsx)(t.code,{children:"src/features/counter/Counter.js"})," file with a ",(0,r.jsx)(t.code,{children:"<Counter>"})," component inside, then import that component into ",(0,r.jsx)(t.code,{children:"App.js"})," and render it inside of ",(0,r.jsx)(t.code,{children:"<App>"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="features/counter/Counter.js"',children:"// file: features/counter/counterSlice.ts noEmit\nimport { createSlice } from '@reduxjs/toolkit'\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0,\n  },\n  reducers: {\n    increment: (state) => {},\n    decrement: (state) => {},\n  },\n})\n\nexport const { increment, decrement } = counterSlice.actions\nexport default counterSlice.reducer\n\n// file: app/store.ts noEmit\nimport { configureStore } from '@reduxjs/toolkit'\nimport counterReducer from '../features/counter/counterSlice'\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer,\n  },\n})\nexport type RootState = ReturnType<typeof store.getState>\n\n// file: index.tsx noEmit\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Counter } from './features/counter/Counter'\nimport { store } from './app/store'\nimport { Provider } from 'react-redux'\n\nReactDOM.render(\n  // highlight-next-line\n  <Provider store={store}>\n    <Counter />\n  </Provider>,\n  document.getElementById('root')\n)\n\n// file: features/counter/Counter.tsx\nimport React from 'react'\nimport type { RootState } from '../../app/store'\nimport { useSelector, useDispatch } from 'react-redux'\nimport { decrement, increment } from './counterSlice'\n\nexport function Counter() {\n  const count = useSelector((state: RootState) => state.counter.value)\n  const dispatch = useDispatch()\n\n  return (\n    <div>\n      <div>\n        <button\n          aria-label=\"Increment value\"\n          onClick={() => dispatch(increment())}\n        >\n          Increment\n        </button>\n        <span>{count}</span>\n        <button\n          aria-label=\"Decrement value\"\n          onClick={() => dispatch(decrement())}\n        >\n          Decrement\n        </button>\n      </div>\n    </div>\n  )\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:'Now, any time you click the "Increment" and "Decrement" buttons:'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The corresponding Redux action will be dispatched to the store"}),"\n",(0,r.jsx)(t.li,{children:"The counter slice reducer will see the actions and update its state"}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"<Counter>"})," component will see the new state value from the store and re-render itself with the new data"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"what-youve-learned",children:"What You've Learned"}),"\n",(0,r.jsx)(t.p,{children:"That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:"}),"\n",(0,r.jsx)(t.admonition,{title:"Summary",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["Create a Redux store with ",(0,r.jsx)(t.code,{children:"configureStore"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"configureStore"})," accepts a ",(0,r.jsx)(t.code,{children:"reducer"})," function as a named argument"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"configureStore"})," automatically sets up the store with good default settings"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Provide the Redux store to the React application components"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Put a React-Redux ",(0,r.jsx)(t.code,{children:"<Provider>"})," component around your ",(0,r.jsx)(t.code,{children:"<App />"})]}),"\n",(0,r.jsxs)(t.li,{children:["Pass the Redux store as ",(0,r.jsx)(t.code,{children:"<Provider store={store}>"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:['Create a Redux "slice" reducer with ',(0,r.jsx)(t.code,{children:"createSlice"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Call ",(0,r.jsx)(t.code,{children:"createSlice"})," with a string name, an initial state, and named reducer functions"]}),"\n",(0,r.jsx)(t.li,{children:'Reducer functions may "mutate" the state using Immer'}),"\n",(0,r.jsx)(t.li,{children:"Export the generated slice reducer and action creators"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["Use the React-Redux ",(0,r.jsx)(t.code,{children:"useSelector/useDispatch"})," hooks in React components"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Read data from the store with the ",(0,r.jsx)(t.code,{children:"useSelector"})," hook"]}),"\n",(0,r.jsxs)(t.li,{children:["Get the ",(0,r.jsx)(t.code,{children:"dispatch"})," function with the ",(0,r.jsx)(t.code,{children:"useDispatch"})," hook, and dispatch actions as needed"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(t.h3,{id:"full-counter-app-example",children:"Full Counter App Example"}),"\n",(0,r.jsx)(t.p,{children:"The counter example app shown here is also the"}),"\n",(0,r.jsx)(t.p,{children:"Here's the complete counter application as a running CodeSandbox:"}),"\n",(0,r.jsx)("iframe",{className:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1",title:"redux-essentials-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend going through ",(0,r.jsx)(t.a,{href:"https://redux.js.org/tutorials/index",children:(0,r.jsx)(t.strong,{children:'the "Redux Essentials" and "Redux Fundamentals" tutorials in the Redux core docs'})}),", which will give you a complete understanding of how Redux works, what Redux Toolkit does, and how to use it correctly."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);