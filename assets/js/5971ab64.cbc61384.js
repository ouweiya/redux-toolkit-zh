"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[4830],{6902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(4848),o=r(8453);const i={id:"nextjs",title:"\u5728 Next.js \u4e2d\u8bbe\u7f6e Redux Toolkit",sidebar_label:"\u5728 Next.js \u4e2d\u7684\u8bbe\u7f6e",hide_title:!0},s="Redux Toolkit Setup with Next.js",a={id:"usage/nextjs",title:"\u5728 Next.js \u4e2d\u8bbe\u7f6e Redux Toolkit",description:"&nbsp;",source:"@site/docs/usage/nextjs.mdx",sourceDirName:"usage",slug:"/usage/nextjs",permalink:"/redux-toolkit-zh/usage/nextjs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/nextjs.mdx",tags:[],version:"current",frontMatter:{id:"nextjs",title:"\u5728 Next.js \u4e2d\u8bbe\u7f6e Redux Toolkit",sidebar_label:"\u5728 Next.js \u4e2d\u7684\u8bbe\u7f6e",hide_title:!0},sidebar:"docs",previous:{title:"\u4f7f\u7528 Immer \u7f16\u5199 Reducers",permalink:"/redux-toolkit-zh/usage/immer-reducers"},next:{title:"configureStore",permalink:"/redux-toolkit-zh/api/configureStore"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to Read This Guide",id:"how-to-read-this-guide",level:3},{value:"The App Router Architecture and Redux",id:"the-app-router-architecture-and-redux",level:2},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Creating a Redux Store per Request",id:"creating-a-redux-store-per-request",level:3},{value:"Providing the Store",id:"providing-the-store",level:3},{value:"Loading Initial Data",id:"loading-initial-data",level:3},{value:"Additional Configuration",id:"additional-configuration",level:2},{value:"Per-route state",id:"per-route-state",level:3},{value:"Caching",id:"caching",level:3},{value:"RTK Query",id:"rtk-query",level:3},{value:"Checking Your Work",id:"checking-your-work",level:2},{value:"Overall Recommendations",id:"overall-recommendations",level:2},{value:"What You&#39;ve Learned",id:"what-youve-learned",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\xa0"}),"\n",(0,n.jsx)(t.h1,{id:"redux-toolkit-setup-with-nextjs",children:"Redux Toolkit Setup with Next.js"}),"\n",(0,n.jsx)(t.admonition,{title:"What You'll Learn",type:"tip",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["How to set up and use Redux Toolkit with the ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs",children:"Next.js framework"})]}),"\n"]})}),"\n",(0,n.jsx)(t.admonition,{title:"Prerequisites",type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Familiarity with ",(0,n.jsx)(t.a,{href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/",children:"ES6 syntax and features"})]}),"\n",(0,n.jsxs)(t.li,{children:["Knowledge of React terminology: ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/introducing-jsx.html",children:"JSX"}),", ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/state-and-lifecycle.html",children:"State"}),", ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/components-and-props.html",children:"Function Components, Props"}),", and ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:"Hooks"})]}),"\n",(0,n.jsxs)(t.li,{children:["Understanding of ",(0,n.jsx)(t.a,{href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow",children:"Redux terms and concepts"})]}),"\n",(0,n.jsxs)(t.li,{children:["Working through the ",(0,n.jsx)(t.a,{href:"/redux-toolkit-zh/tutorials/quick-start",children:"Quick Start tutorial"})," and ",(0,n.jsx)(t.a,{href:"/redux-toolkit-zh/tutorials/typescript",children:"TypeScript Quick Start tutorial"})," is recommended, and ideally the full ",(0,n.jsx)(t.a,{href:"https://redux.js.org/tutorials/essentials/part-1-overview-concepts",children:"Redux Essentials"})," tutorial as well"]}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://nextjs.org/docs",children:"Next.js"})," is a popular server side rendering framework for React that presents some unique challenges for using Redux properly. These challenges include:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Per-request safe Redux store creation"}),": A Next.js server can handle multiple requests simultaneously. This means that the Redux store should be created per request and that the store should not be shared across requests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SSR-friendly store hydration"}),': Next.js applications are rendered twice, first on the server and again on the client. Failure to render the same page contents on both the client and the server will result in a "hydration error". So the Redux store will have to be initialized on the server and then re-initialized on the client with the same data in order to avoid hydration issues.']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SPA routing support"}),": Next.js supports a hybrid model for client side routing. A customer's first page load will get an SSR result from the server. Subsequent page navigation will be handled by the client. This means that with a singleton store defined in the layout, route-specific data will need to be selectively reset on route navigation, while non-route-specific data will need to be retained in the store."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Server caching friendly"}),": Recent versions of Next.js (specifically applications using the App Router architecture) support aggressive server caching. The ideal store architecture should be compatible with this caching."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There are two architectures for a Next.js application: the ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts",children:"Pages Router"})," and the ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/routing",children:"App Router"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The Pages Router is the original architecture for Next.js. If you're using the Pages Router, Redux setup is primarily handled by using the ",(0,n.jsxs)(t.a,{href:"https://github.com/kirill-konshin/next-redux-wrapper",children:[(0,n.jsx)(t.code,{children:"next-redux-wrapper"})," library"]}),", which integrates a Redux store with the Pages router data fetching methods like ",(0,n.jsx)(t.code,{children:"getServerSideProps"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"This guide will focus on the App Router architecture"}),", as it is the new default architecture option for Next.js."]}),"\n",(0,n.jsx)(t.h3,{id:"how-to-read-this-guide",children:"How to Read This Guide"}),"\n",(0,n.jsx)(t.p,{children:"This page assumes that you already have an existing Next.js application based on the App Router architecture."}),"\n",(0,n.jsxs)(t.p,{children:["If you want to follow along, you can create a new empty Next project with ",(0,n.jsx)(t.code,{children:"npx create-next-app my-app"})," - the default prompts will set up a new project with the App Router enabled. Then, add ",(0,n.jsx)(t.code,{children:"@reduxjs/toolkit"})," and ",(0,n.jsx)(t.code,{children:"react-redux"})," as dependencies."]}),"\n",(0,n.jsxs)(t.p,{children:["You can also create a new Next+Redux project with ",(0,n.jsx)(t.code,{children:"npx create-next-app --example with-redux my-app"}),", which includes the initial setup pieces described in this page."]}),"\n",(0,n.jsx)(t.h2,{id:"the-app-router-architecture-and-redux",children:"The App Router Architecture and Redux"}),"\n",(0,n.jsxs)(t.p,{children:['The primary new feature of the Next.js App Router is the addition of support for React Server Components (RSCs). RSCs are a special type of React component that only renders on the server, as opposed to "client" components that render on ',(0,n.jsx)(t.strong,{children:"both"})," the client and the server. RSCs can be defined as ",(0,n.jsx)(t.code,{children:"async"})," functions and return promises during rendering as they make async requests for data to render."]}),"\n",(0,n.jsxs)(t.p,{children:["RSCs ability to block for data requests means that with the App Router you no longer have ",(0,n.jsx)(t.code,{children:"getServerSideProps"})," to fetch data for rendering. Any component in the tree can make asychronous requests for data. While this is very convenient it also means thats if you define global variables (like the Redux store) they will be shared across requests. This is a problem because the Redux store could be contaminated with data from other requests."]}),"\n",(0,n.jsx)(t.p,{children:"Based on the architecture of the App Router we have these general recommendations for appropriate use of Redux:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"No global stores"})," - Because the Redux store is shared across requests, it should not be defined as a global variable. Instead, the store should be created per request."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"RSCs should not read or write the Redux store"})," - RSCs cannot use hooks or context. They aren't meant to be stateful. Having an RSC read or write values from a global store violates the architecture of the Next.js App Router."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"The store should only contain mutable data"})," - We recommend that you use your Redux sparingly for data intended to be global and mutable."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These recommendations are specific to applications written with the Next.js App Router. Single Page Applications (SPAs) don't execute on the server and therefore can define stores as global variables. SPAs don't need to worry about RSCs since they don't exist in SPAs. And singleton stores can store whatever data you want."}),"\n",(0,n.jsx)(t.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,n.jsxs)(t.p,{children:["Next apps can be created to have the ",(0,n.jsx)(t.code,{children:"/app"})," folder either at the root, or nested under ",(0,n.jsx)(t.code,{children:"/src/app"}),". Your Redux logic should go in a separate folder, alongside the ",(0,n.jsx)(t.code,{children:"/app"})," folder. It's common to put the Redux logic in a folder named ",(0,n.jsx)(t.code,{children:"/lib"}),", but not required."]}),"\n",(0,n.jsxs)(t.p,{children:["The file and folder structure inside of that ",(0,n.jsx)(t.code,{children:"/lib"})," folder is up to you, but we generally recommend ",(0,n.jsx)(t.a,{href:"https://redux.js.org/style-guide/#structure-files-as-feature-folders-with-single-file-logic",children:'a "feature folder"-based structure'})," for the Redux logic."]}),"\n",(0,n.jsx)(t.p,{children:"A typical example might look like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/app\n  layout.tsx\n  page.tsx\n  StoreProvider.tsx\n/lib\n  store.ts\n  /features\n    /todos\n      todosSlice.ts\n"})}),"\n",(0,n.jsx)(t.p,{children:"We'll use that approach for this guide."}),"\n",(0,n.jsx)(t.h2,{id:"initial-setup",children:"Initial Setup"}),"\n",(0,n.jsxs)(t.p,{children:["Similar to the the ",(0,n.jsx)(t.a,{href:"/redux-toolkit-zh/tutorials/typescript",children:"RTK TypeScript Tutorial"}),", we need to create a file for the Redux store, as well as the inferred ",(0,n.jsx)(t.code,{children:"RootState"})," and ",(0,n.jsx)(t.code,{children:"AppDispatch"})," types."]}),"\n",(0,n.jsx)(t.p,{children:"However, Next's multi-page architecture requires some differences from that single-page app setup."}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-redux-store-per-request",children:"Creating a Redux Store per Request"}),"\n",(0,n.jsxs)(t.p,{children:["The first change is to move from defining store as a global to defining a ",(0,n.jsx)(t.code,{children:"makeStore"})," function that returns a new store for each request:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="lib/store.ts"',children:"import { configureStore } from '@reduxjs/toolkit'\n\nexport const makeStore = () => {\n  return configureStore({\n    reducer: {},\n  })\n}\n\n// Infer the type of makeStore\nexport type AppStore = ReturnType<typeof makeStore>\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<AppStore['getState']>\nexport type AppDispatch = AppStore['dispatch']\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we have a function, ",(0,n.jsx)(t.code,{children:"makeStore"}),", that we can use to create a store instance per-request while retaining the strong type safety (if you choose to use TypeScript) that Redux Toolkit provides."]}),"\n",(0,n.jsxs)(t.p,{children:["We don't have a ",(0,n.jsx)(t.code,{children:"store"})," variable exported, but we can infer the ",(0,n.jsx)(t.code,{children:"RootState"})," and ",(0,n.jsx)(t.code,{children:"AppDispatch"})," types from the return type of ",(0,n.jsx)(t.code,{children:"makeStore"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You'll also want to create and export ",(0,n.jsx)(t.a,{href:"/redux-toolkit-zh/tutorials/typescript#define-typed-hooks",children:"pre-typed versions of the React-Redux hooks as well"}),", to simplify usage later:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="lib/hooks.ts"',children:"// file: lib/store.ts noEmit\nimport { configureStore } from '@reduxjs/toolkit'\n\nexport const makeStore = () => {\n  return configureStore({\n    reducer: {},\n  })\n}\n\n// Infer the type of makeStore\nexport type AppStore = ReturnType<typeof makeStore>\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<AppStore['getState']>\nexport type AppDispatch = AppStore['dispatch']\n\n/* prettier-ignore */\n\n// file: lib/hooks.ts\nimport { useDispatch, useSelector, useStore } from 'react-redux'\nimport type { RootState, AppDispatch, AppStore } from './store'\n\n// highlight-start\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nexport const useAppDispatch = useDispatch.withTypes<AppDispatch>()\nexport const useAppSelector = useSelector.withTypes<RootState>()\nexport const useAppStore = useStore.withTypes<AppStore>()\n// highlight-end\n"})}),"\n",(0,n.jsx)(t.h3,{id:"providing-the-store",children:"Providing the Store"}),"\n",(0,n.jsxs)(t.p,{children:["To use this new ",(0,n.jsx)(t.code,{children:"makeStore"}),' function we need to create a new "client" component that will create the store and share it using the React-Redux ',(0,n.jsx)(t.code,{children:"Provider"})," component."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="app/StoreProvider.tsx"',children:"// file: lib/store.ts noEmit\nimport { configureStore } from '@reduxjs/toolkit'\n\nexport const makeStore = () => {\n  return configureStore({\n    reducer: {},\n  })\n}\n\n// Infer the type of makeStore\nexport type AppStore = ReturnType<typeof makeStore>\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<AppStore['getState']>\nexport type AppDispatch = AppStore['dispatch']\n\n/* prettier-ignore */\n\n// file: app/StoreProvider.tsx\n'use client'\nimport { useRef } from 'react'\nimport { Provider } from 'react-redux'\n// highlight-start\nimport { makeStore, AppStore } from '../lib/store'\n// highlight-end\n\nexport default function StoreProvider({\n  children,\n}: {\n  children: React.ReactNode\n}) {\n  // highlight-start\n  const storeRef = useRef<AppStore>()\n  if (!storeRef.current) {\n    // Create the store instance the first time this renders\n    storeRef.current = makeStore()\n  }\n  // highlight-end\n\n  return <Provider store={storeRef.current}>{children}</Provider>\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"In this example code we are ensuring that this client component is re-render safe by checking the value of the reference to ensure that the store is only created once. This component will only be rendered once per request on the server, but might be re-rendered multiple times on the client if there are stateful client components located above this component in the tree, or if this component also contains other mutable state that causes a re-render."}),"\n",(0,n.jsx)(t.admonition,{title:"Why Client Components?",type:"tip",children:(0,n.jsxs)(t.p,{children:["Any component that interacts with the Redux store (creating it, providing it, reading from it, or writing to it) needs to be a client component. This is because ",(0,n.jsx)(t.strong,{children:"accessing the store requires React context, and context is only available in client components."})]})}),"\n",(0,n.jsxs)(t.p,{children:["The next step is to ",(0,n.jsxs)(t.strong,{children:["include the ",(0,n.jsx)(t.code,{children:"StoreProvider"})," anywhere in the tree above where the store is used"]}),". You can locate the store in the layout component if all the routes using that layout need the store. Or if the store is only used in a specific route you can create and provide the store in that route handler. In all client components further down the tree, you can use the store exactly as you would normally using the hooks provided by ",(0,n.jsx)(t.code,{children:"react-redux"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"loading-initial-data",children:"Loading Initial Data"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to initialize the store with data from the parent component, then define that data as a prop on the client ",(0,n.jsx)(t.code,{children:"StoreProvider"})," component and use a Redux action on the slice to set the data in the store as shown below."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="src/app/StoreProvider.tsx"',children:"// file: lib/features/counter/counterSlice.ts noEmit\nimport { createSlice } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0,\n  },\n  reducers: {\n    initializeCount: (state, action: PayloadAction<number>) => {\n      state.value = action.payload\n    },\n  },\n})\n\nexport const { initializeCount } = counterSlice.actions\nexport default counterSlice.reducer\n\n// file: lib/store.ts noEmit\nimport { configureStore } from '@reduxjs/toolkit'\nimport counterReducer from './features/counter/counterSlice'\n\nexport const makeStore = () =>\n  configureStore({\n    reducer: {\n      counter: counterReducer,\n    },\n  })\n\n// Infer the type of makeStore\nexport type AppStore = ReturnType<typeof makeStore>\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<AppStore['getState']>\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = AppStore['dispatch']\n\n/* prettier-ignore */\n\n// file: app/StoreProvider.tsx\n'use client'\nimport { useRef } from 'react'\nimport { Provider } from 'react-redux'\nimport { makeStore, AppStore } from '../lib/store'\n// highlight-start\nimport { initializeCount } from '../lib/features/counter/counterSlice'\n// highlight-end\n\nexport default function StoreProvider({\n  count,\n  children,\n}: {\n  count: number\n  children: React.ReactNode\n}) {\n  const storeRef = useRef<AppStore | null>(null)\n  if (!storeRef.current) {\n    storeRef.current = makeStore()\n    // highlight-start\n    storeRef.current.dispatch(initializeCount(count))\n    // highlight-end\n  }\n\n  return <Provider store={storeRef.current}>{children}</Provider>\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"additional-configuration",children:"Additional Configuration"}),"\n",(0,n.jsx)(t.h3,{id:"per-route-state",children:"Per-route state"}),"\n",(0,n.jsxs)(t.p,{children:["If you use Next.js's support for client side SPA-style navigation by using ",(0,n.jsx)(t.code,{children:"next/navigation"}),", then when customers navigate from page to page only the route component will be re-rendered. This means that if you have a Redux store created and provided in the layout component it will be preserved across route changes. This is not a problem if you are only using the store for global, mutable data. However, if you are using the store for per-route data then you will need to reset the route-specific data in the store when the route changes."]}),"\n",(0,n.jsxs)(t.p,{children:["Shown below is a ",(0,n.jsx)(t.code,{children:"ProductName"})," example component that uses the Redux store to manage the mutable name of a product. The ",(0,n.jsx)(t.code,{children:"ProductName"})," component part of a product detail route. In order to ensure that we have the correct name in the store we need to set the value in the store any time the ",(0,n.jsx)(t.code,{children:"ProductName"})," component is initially rendered, which happens on any route change to the product detail route."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="app/ProductName.tsx"',children:"// file: lib/features/product/productSlice.ts noEmit\nimport { createSlice } from '@reduxjs/toolkit'\nimport type { PayloadAction } from '@reduxjs/toolkit'\n\nexport interface Product {\n  name: string\n}\n\nconst productSlice = createSlice({\n  name: 'product',\n  initialState: {\n    name: '',\n  },\n  reducers: {\n    initializeProduct: (state, action: PayloadAction<Product>) => {\n      state.name = action.payload.name\n    },\n    setProductName: (state, action: PayloadAction<string>) => {\n      state.name = action.payload\n    },\n  },\n})\n\nexport const { initializeProduct, setProductName } = productSlice.actions\nexport default productSlice.reducer\n\n// file: lib/store.ts noEmit\nimport { configureStore } from '@reduxjs/toolkit'\nimport productReducer from './features/product/productSlice'\n\nexport const makeStore = () =>\n  configureStore({\n    reducer: {\n      product: productReducer,\n    },\n  })\n\n// Infer the type of makeStore\nexport type AppStore = ReturnType<typeof makeStore>\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<AppStore['getState']>\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = AppStore['dispatch']\n\n// file: lib/hooks.ts noEmit\nimport { useDispatch, useSelector, useStore } from 'react-redux'\nimport type { RootState, AppDispatch, AppStore } from './store'\n\n// highlight-start\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nexport const useAppDispatch = useDispatch.withTypes<AppDispatch>()\nexport const useAppSelector = useSelector.withTypes<RootState>()\nexport const useAppStore = useStore.withTypes<AppStore>()\n// highlight-end\n\n/* prettier-ignore */\n\n// file: app/ProductName.tsx\n'use client'\nimport { useRef } from 'react'\nimport { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'\nimport {\n  initializeProduct,\n  setProductName,\n  Product,\n} from '../lib/features/product/productSlice'\n\nexport default function ProductName({ product }: { product: Product }) {\n  // highlight-start\n  // Initialize the store with the product information\n  const store = useAppStore()\n  const initialized = useRef(false)\n  if (!initialized.current) {\n    store.dispatch(initializeProduct(product))\n    initialized.current = true\n  }\n  const name = useAppSelector((state) => state.product.name)\n  const dispatch = useAppDispatch()\n  // highlight-end\n\n  return (\n    <input\n      value={name}\n      onChange={(e) => dispatch(setProductName(e.target.value))}\n    />\n  )\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Here we are using the same intialization pattern as before, of dispatching actions to the store, to set the route-specific data. The ",(0,n.jsx)(t.code,{children:"initialized"})," ref is used to ensure that the store is only initialized once per route change."]}),"\n",(0,n.jsxs)(t.p,{children:["It is worth noting that initializing the store with a ",(0,n.jsx)(t.code,{children:"useEffect"})," would not work because ",(0,n.jsx)(t.code,{children:"useEffect"})," only runs on the client. This would result in hydration errors or flicker because the result from a server side render would not match the result from the client side render."]}),"\n",(0,n.jsx)(t.h3,{id:"caching",children:"Caching"}),"\n",(0,n.jsxs)(t.p,{children:["The App Router has four separate caches including ",(0,n.jsx)(t.code,{children:"fetch"})," request and route caches. The most likely cache to cause issues is the route cache. If you have an application that accepts login you may have routes (e.g. the home route, ",(0,n.jsx)(t.code,{children:"/"}),") that render different data based on the user you will need to disable the route cache by using the ",(0,n.jsxs)(t.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic",children:[(0,n.jsx)(t.code,{children:"dynamic"})," export from the route handler"]}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export const dynamic = 'force-dynamic'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After a mutation you should also invalidate the cache by calling ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/api-reference/functions/revalidatePath",children:(0,n.jsx)(t.code,{children:"revalidatePath"})})," or ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/api-reference/functions/revalidateTag",children:(0,n.jsx)(t.code,{children:"revalidateTag"})})," as appropriate."]}),"\n",(0,n.jsx)(t.h3,{id:"rtk-query",children:"RTK Query"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend using RTK Query for data fetching ",(0,n.jsx)(t.strong,{children:"on the client only"}),". Data fetching on the server should use ",(0,n.jsx)(t.code,{children:"fetch"})," requests from ",(0,n.jsx)(t.code,{children:"async"})," RSCs."]}),"\n",(0,n.jsxs)(t.p,{children:["You can learn more about Redux Toolkit Query in the ",(0,n.jsx)(t.a,{href:"https://redux-toolkit.js.org/tutorials/rtk-query",children:"Redux Toolkit Query tutorial"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"In the future, RTK Query may be able to receive data fetched on the server via React Server Components, but that is a future capability that will require changes to both React and RTK Query."})}),"\n",(0,n.jsx)(t.h2,{id:"checking-your-work",children:"Checking Your Work"}),"\n",(0,n.jsx)(t.p,{children:"There are three key areas that you should check to ensure that you have set up Redux Toolkit correctly:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Server Side Rendering"})," - Check the HTML output of the server to ensure that the data in the Redux store is present in the server side rendered output."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Route Change"})," - Navigate between pages on the same route as well as between different routes to ensure that route-specific data is initialized properly."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Mutations"})," - Check that the store is compatible with the Next.js App Router caches by performing a mutation and then navigating away from the route and back to the original route to ensure that the data is updated."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"overall-recommendations",children:"Overall Recommendations"}),"\n",(0,n.jsx)(t.p,{children:"The App Router presents a dramatically different archtecture for React applications from either the Pages Router or a SPA application. We recommend rethinking your approach to state management in the light of this new architecture. In SPA applications it's not unusual to have a large store that contains all the data, both mutable and immutable, required to drive the application. For App Router applications we recommend that you should:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"only use Redux for globally shared, mutable data"})}),"\n",(0,n.jsx)(t.li,{children:"use a combination of Next.js state (search params, route parameters, form state, etc.), React context and React hooks for all other state management."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-youve-learned",children:"What You've Learned"}),"\n",(0,n.jsx)(t.p,{children:"That was a brief overview of how to set up and use Redux Toolkit with the App Router:"}),"\n",(0,n.jsxs)(t.admonition,{title:"Summary",type:"tip",children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsxs)(t.strong,{children:["Create a Redux store per request by using ",(0,n.jsx)(t.code,{children:"configureStore"})," wrapped in a ",(0,n.jsx)(t.code,{children:"makeStore"})," function"]})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:'Provide the Redux store to the React application components using a "client" component'})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Only interact with the Redux store in client components"})," because only client components have access to React context"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Use the store as you normally would using the hooks provided in React-Redux"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"You need to account for the case where you have per-route state in a global store located in the layout"})}),"\n"]}),(0,n.jsx)(t.h2,{id:"whats-next",children:"What's Next?"}),(0,n.jsxs)(t.p,{children:["We recommend going through ",(0,n.jsx)(t.a,{href:"https://redux.js.org/tutorials/index",children:(0,n.jsx)(t.strong,{children:'the "Redux Essentials" and "Redux Fundamentals" tutorials in the Redux core docs'})}),", which will give you a complete understanding of how Redux works, what Redux Toolkit does, and how to use it correctly."]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(6540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);