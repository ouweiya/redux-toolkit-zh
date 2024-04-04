"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[2257],{4519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=t(4848),a=t(8453);const s={id:"api-slice-utils",title:"API \u5207\u7247\uff1a\u5de5\u5177",sidebar_label:"API \u5207\u7247\u5de5\u5177",hide_title:!0},r="API Slices: Utilities",d={id:"rtk-query/api/created-api/api-slice-utils",title:"API \u5207\u7247\uff1a\u5de5\u5177",description:"&nbsp;",source:"@site/docs/rtk-query/api/created-api/api-slice-utils.mdx",sourceDirName:"rtk-query/api/created-api",slug:"/rtk-query/api/created-api/api-slice-utils",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/api-slice-utils",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/api/created-api/api-slice-utils.mdx",tags:[],version:"current",frontMatter:{id:"api-slice-utils",title:"API \u5207\u7247\uff1a\u5de5\u5177",sidebar_label:"API \u5207\u7247\u5de5\u5177",hide_title:!0},sidebar:"docs",previous:{title:"\u4ee3\u7801\u5206\u5272",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/code-splitting"},next:{title:"React Hooks",permalink:"/redux-toolkit-zh/rtk-query/api/created-api/hooks"}},c={},l=[{value:"<code>updateQueryData</code>",id:"updatequerydata",level:3},{value:"Signature",id:"signature",level:4},{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"<code>upsertQueryData</code>",id:"upsertquerydata",level:3},{value:"Signature",id:"signature-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Example",id:"example",level:4},{value:"<code>patchQueryData</code>",id:"patchquerydata",level:3},{value:"Signature",id:"signature-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>prefetch</code>",id:"prefetch",level:3},{value:"Signature",id:"signature-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>selectInvalidatedBy</code>",id:"selectinvalidatedby",level:3},{value:"Signature",id:"signature-4",level:4},{value:"Description",id:"description-4",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>invalidateTags</code>",id:"invalidatetags",level:3},{value:"Signature",id:"signature-5",level:4},{value:"Description",id:"description-5",level:4},{value:"Example",id:"example-6",level:4},{value:"<code>selectCachedArgsForQuery</code>",id:"selectcachedargsforquery",level:3},{value:"Signature",id:"signature-6",level:4},{value:"Description",id:"description-6",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>resetApiState</code>",id:"resetapistate",level:3},{value:"Signature",id:"signature-7",level:4},{value:"Description",id:"description-7",level:4},{value:"Example",id:"example-8",level:4},{value:"<code>getRunningQueriesThunk</code> and <code>getRunningMutationsThunk</code>",id:"getrunningqueriesthunk-and-getrunningmutationsthunk",level:2},{value:"Signature",id:"signature-8",level:4},{value:"Description",id:"description-8",level:4},{value:"<code>getRunningQueryThunk</code> and <code>getRunningMutationThunk</code>",id:"getrunningquerythunk-and-getrunningmutationthunk",level:2},{value:"Signature",id:"signature-9",level:4},{value:"Description",id:"description-9",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\xa0"}),"\n",(0,i.jsx)(n.h1,{id:"api-slices-utilities",children:"API Slices: Utilities"}),"\n",(0,i.jsxs)(n.p,{children:["The API slice object includes various utilities that can be used for cache management,\nsuch as implementing ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/manual-cache-updates#optimistic-updates",children:"optimistic updates"}),",\nas well implementing ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/server-side-rendering",children:"server side rendering"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["These are included as ",(0,i.jsx)(n.code,{children:"api.util"})," inside the API object."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Some of the TS types on this page are pseudocode to illustrate intent, as the actual internal types are fairly complex."})}),"\n",(0,i.jsx)(n.h3,{id:"updatequerydata",children:(0,i.jsx)(n.code,{children:"updateQueryData"})}),"\n",(0,i.jsx)(n.h4,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const updateQueryData = (\n  endpointName: string,\n  args: any,\n  updateRecipe: (draft: Draft<CachedState>) => void,\n  updateProvided?: boolean,\n) => ThunkAction<PatchCollection, PartialState, any, AnyAction>\n\ninterface PatchCollection {\n  patches: Patch[]\n  inversePatches: Patch[]\n  undo: () => void\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"endpointName"}),": a string matching an existing endpoint name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"args"}),": an argument matching that used for a previous query call, used to determine which cached dataset needs to be updated"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateRecipe"}),": an Immer ",(0,i.jsx)(n.code,{children:"produce"})," callback that can apply changes to the cached state"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateProvided"}),": a boolean indicating whether the endpoint's provided tags should be re-calculated based on the updated cache. Defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A Redux thunk action creator that, when dispatched, creates and applies a set of JSON diff/patch objects to the current state. This immediately updates the Redux state with those changes."}),"\n",(0,i.jsxs)(n.p,{children:["The thunk action creator accepts three arguments: the name of the endpoint we are updating (such as ",(0,i.jsx)(n.code,{children:"'getPost'"}),"), any relevant query arguments, and a callback function. The callback receives an Immer-wrapped ",(0,i.jsx)(n.code,{children:"draft"})," of the current state, and may modify the draft to match the expected results after the mutation completes successfully."]}),"\n",(0,i.jsxs)(n.p,{children:["The thunk returns an object containing ",(0,i.jsx)(n.code,{children:"{patches: Patch[], inversePatches: Patch[], undo: () => void}"}),". The ",(0,i.jsx)(n.code,{children:"patches"})," and ",(0,i.jsx)(n.code,{children:"inversePatches"})," are generated using Immer's ",(0,i.jsxs)(n.a,{href:"https://immerjs.github.io/immer/patches",children:[(0,i.jsx)(n.code,{children:"produceWithPatches"})," method"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is typically used as the first step in implementing optimistic updates. The generated ",(0,i.jsx)(n.code,{children:"inversePatches"})," can be used to revert the updates by calling ",(0,i.jsx)(n.code,{children:"dispatch(patchQueryData(endpointName, args, inversePatches))"}),". Alternatively, the ",(0,i.jsx)(n.code,{children:"undo"})," method can be called directly to achieve the same effect."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the first two arguments (",(0,i.jsx)(n.code,{children:"endpointName"})," and ",(0,i.jsx)(n.code,{children:"args"}),") are used to determine which existing cache entry to update. If no existing cache entry is found, the ",(0,i.jsx)(n.code,{children:"updateRecipe"})," callback will not run."]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const patchCollection = dispatch(\n  api.util.updateQueryData('getPosts', undefined, (draftPosts) => {\n    draftPosts.push({ id: 1, name: 'Teddy' })\n  }),\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, ",(0,i.jsx)(n.code,{children:"'getPosts'"})," is provided for the ",(0,i.jsx)(n.code,{children:"endpointName"}),", and ",(0,i.jsx)(n.code,{children:"undefined"})," is provided\nfor ",(0,i.jsx)(n.code,{children:"args"}),". This will match a query cache key of ",(0,i.jsx)(n.code,{children:"'getPosts(undefined)'"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"i.e. it will match a cache entry that may have been created via any of the following calls:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"api.endpoints.getPosts.useQuery()\n\nuseGetPostsQuery()\n\nuseGetPostsQuery(undefined, { ...options })\n\ndispatch(api.endpoints.getPosts.initiate())\n\ndispatch(api.endpoints.getPosts.initiate(undefined, { ...options }))\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const patchCollection = dispatch(\n  api.util.updateQueryData('getPostById', 1, (draftPost) => {\n    draftPost.name = 'Lilly'\n  }),\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above, ",(0,i.jsx)(n.code,{children:"'getPostById'"})," is provided for the ",(0,i.jsx)(n.code,{children:"endpointName"}),", and ",(0,i.jsx)(n.code,{children:"1"})," is provided\nfor ",(0,i.jsx)(n.code,{children:"args"}),". This will match a query cache key of ",(0,i.jsx)(n.code,{children:"'getPostById(1)'"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"i.e. it will match a cache entry that may have been created via any of the following calls:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"api.endpoints.getPostById.useQuery(1)\n\nuseGetPostByIdQuery(1)\n\nuseGetPostByIdQuery(1, { ...options })\n\ndispatch(api.endpoints.getPostById.initiate(1))\n\ndispatch(api.endpoints.getPostById.initiate(1, { ...options }))\n"})}),"\n",(0,i.jsx)(n.h3,{id:"upsertquerydata",children:(0,i.jsx)(n.code,{children:"upsertQueryData"})}),"\n",(0,i.jsx)(n.h4,{id:"signature-1",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const upsertQueryData = <T>(endpointName: string, args: any, newEntryData: T) =>\n  ThunkAction<Promise<CacheEntry<T>>, PartialState, any, UnknownAction>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"endpointName"}),": a string matching an existing endpoint name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"args"}),": an argument matching that used for a previous query call, used to determine which cached dataset needs to be updated"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"newEntryValue"}),": the value to be written into the corresponding cache entry's ",(0,i.jsx)(n.code,{children:"data"})," field"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A Redux thunk action creator that, when dispatched, acts as an artificial API request to upsert a value into the cache."}),"\n",(0,i.jsxs)(n.p,{children:["The thunk action creator accepts three arguments: the name of the endpoint we are updating (such as ",(0,i.jsx)(n.code,{children:"'getPost'"}),"), the appropriate query arg values to construct the desired cache key, and the data to upsert."]}),"\n",(0,i.jsxs)(n.p,{children:["If no cache entry for that cache key exists, a cache entry will be created and the data added. If a cache entry already exists, this will ",(0,i.jsx)(n.em,{children:"overwrite"})," the existing cache entry data."]}),"\n",(0,i.jsxs)(n.p,{children:["The thunk executes ",(0,i.jsx)(n.em,{children:"asynchronously"}),", and returns a promise that resolves when the store has been updated."]}),"\n",(0,i.jsx)(n.p,{children:'If dispatched while an actual request is in progress, both the upsert and request will be handled as soon as they resolve, resulting in a "last result wins" update behavior.'}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"await dispatch(\n  api.util.upsertQueryData('getPost', { id: 1 }, { id: 1, text: 'Hello!' }),\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"patchquerydata",children:(0,i.jsx)(n.code,{children:"patchQueryData"})}),"\n",(0,i.jsx)(n.h4,{id:"signature-2",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const patchQueryData = (\n  endpointName: string,\n  args: any\n  patches: Patch[],\n  updateProvided?: boolean\n) => ThunkAction<void, PartialState, any, UnknownAction>;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"endpointName"}),": a string matching an existing endpoint name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"args"}),": a cache key, used to determine which cached dataset needs to be updated"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"patches"}),": an array of patches (or inverse patches) to apply to cached state. These would typically be obtained from the result of dispatching ",(0,i.jsx)(n.a,{href:"#updatequerydata",children:(0,i.jsx)(n.code,{children:"updateQueryData"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateProvided"}),": a boolean indicating whether the endpoint's provided tags should be re-calculated based on the updated cache. Defaults to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A Redux thunk action creator that, when dispatched, applies a JSON diff/patch array to the cached data for a given query result. This immediately updates the Redux state with those changes."}),"\n",(0,i.jsxs)(n.p,{children:["The thunk action creator accepts three arguments: the name of the endpoint we are updating (such as ",(0,i.jsx)(n.code,{children:"'getPost'"}),"), the appropriate query arg values to construct the desired cache key, and a JSON diff/patch array as produced by Immer's ",(0,i.jsx)(n.code,{children:"produceWithPatches"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is typically used as the second step in implementing optimistic updates. If a request fails, the optimistically-applied changes can be reverted by dispatching ",(0,i.jsx)(n.code,{children:"patchQueryData"})," with the ",(0,i.jsx)(n.code,{children:"inversePatches"})," that were generated by ",(0,i.jsx)(n.code,{children:"updateQueryData"})," earlier."]}),"\n",(0,i.jsxs)(n.p,{children:["In cases where it is desired to simply revert the previous changes, it may be preferable to call the ",(0,i.jsx)(n.code,{children:"undo"})," method returned from dispatching ",(0,i.jsx)(n.code,{children:"updateQueryData"})," instead."]}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const patchCollection = dispatch(\n  api.util.updateQueryData('getPosts', undefined, (draftPosts) => {\n    draftPosts.push({ id: 1, name: 'Teddy' })\n  }),\n)\n\n// later\ndispatch(\n  api.util.patchQueryData(\n    'getPosts',\n    undefined,\n    patchCollection.inversePatches,\n  ),\n)\n\n// or\npatchCollection.undo()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prefetch",children:(0,i.jsx)(n.code,{children:"prefetch"})}),"\n",(0,i.jsx)(n.h4,{id:"signature-3",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"type PrefetchOptions = { ifOlderThan?: false | number } | { force?: boolean }\n\nconst prefetch = (endpointName: string, arg: any, options: PrefetchOptions) =>\n  ThunkAction<void, any, any, UnknownAction>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"endpointName"}),": a string matching an existing endpoint name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"args"}),": a cache key, used to determine which cached dataset needs to be updated"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"options"}),": options to determine whether the request should be sent for a given situation:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ifOlderThan"}),": if specified, only runs the query if the difference between ",(0,i.jsx)(n.code,{children:"new Date()"})," and the last",(0,i.jsx)(n.code,{children:"fulfilledTimeStamp"})," is greater than the given value (in seconds)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"force"}),": if ",(0,i.jsx)(n.code,{children:"true"}),", it will ignore the ",(0,i.jsx)(n.code,{children:"ifOlderThan"})," value if it is set and the query will be run even if it exists in the cache."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A Redux thunk action creator that can be used to manually trigger pre-fetching of data."}),"\n",(0,i.jsxs)(n.p,{children:["The thunk action creator accepts three arguments: the name of the endpoint we are updating (such as ",(0,i.jsx)(n.code,{children:"'getPost'"}),"), any relevant query arguments, and a set of options used to determine if the data actually should be re-fetched based on cache staleness."]}),"\n",(0,i.jsxs)(n.p,{children:["React Hooks users will most likely never need to use this directly, as the ",(0,i.jsx)(n.code,{children:"usePrefetch"})," hook will dispatch the thunk action creator result internally as needed when you call the prefetching function supplied by the hook."]}),"\n",(0,i.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"dispatch(api.util.prefetch('getPosts', undefined, { force: true }))\n"})}),"\n",(0,i.jsx)(n.h3,{id:"selectinvalidatedby",children:(0,i.jsx)(n.code,{children:"selectInvalidatedBy"})}),"\n",(0,i.jsx)(n.h4,{id:"signature-4",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"function selectInvalidatedBy(\n  state: RootState,\n  tags: ReadonlyArray<TagDescription<string>>,\n): Array<{\n  endpointName: string\n  originalArgs: any\n  queryCacheKey: QueryCacheKey\n}>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state"}),": the root state"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tags"}),": a readonly array of invalidated tags, where the provided ",(0,i.jsx)(n.code,{children:"TagDescription"})," is one of the strings provided to the ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#tagtypes",children:(0,i.jsx)(n.code,{children:"tagTypes"})})," property of the api. e.g.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"[TagType]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"[{ type: TagType }]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"[{ type: TagType, id: number | string }]"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description-4",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A function that can select query parameters to be invalidated."}),"\n",(0,i.jsx)(n.p,{children:"The function accepts two arguments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the root state and"}),"\n",(0,i.jsx)(n.li,{children:"the cache tags to be invalidated."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It returns an array that contains"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the endpoint name,"}),"\n",(0,i.jsx)(n.li,{children:"the original args and"}),"\n",(0,i.jsx)(n.li,{children:"the queryCacheKey."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const entries = api.util.selectInvalidatedBy(state, ['Post'])\nconst entries = api.util.selectInvalidatedBy(state, [{ type: 'Post', id: 1 }])\nconst entries = api.util.selectInvalidatedBy(state, [\n  { type: 'Post', id: 1 },\n  { type: 'Post', id: 4 },\n])\n"})}),"\n",(0,i.jsx)(n.h3,{id:"invalidatetags",children:(0,i.jsx)(n.code,{children:"invalidateTags"})}),"\n",(0,i.jsx)(n.h4,{id:"signature-5",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const invalidateTags = (\n  tags: Array<TagTypes | FullTagDescription<TagTypes>>,\n) => ({\n  type: string,\n  payload: tags,\n})\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tags"}),": an array of tags to be invalidated, where the provided ",(0,i.jsx)(n.code,{children:"TagType"})," is one of the strings provided to the ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/createApi#tagtypes",children:(0,i.jsx)(n.code,{children:"tagTypes"})})," property of the api. e.g.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"[TagType]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"[{ type: TagType }]"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"[{ type: TagType, id: number | string }]"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description-5",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["A Redux action creator that can be used to manually invalidate cache tags for ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching",children:"automated re-fetching"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The action creator accepts one argument: the cache tags to be invalidated. It returns an action with those tags as a payload, and the corresponding ",(0,i.jsx)(n.code,{children:"invalidateTags"})," action type for the api."]}),"\n",(0,i.jsxs)(n.p,{children:["Dispatching the result of this action creator will ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching#invalidating-cache-data",children:"invalidate"})," the given tags, causing queries to automatically re-fetch if they are subscribed to cache data that ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/usage/automated-refetching#providing-cache-data",children:"provides"})," the corresponding tags."]}),"\n",(0,i.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"dispatch(api.util.invalidateTags(['Post']))\ndispatch(api.util.invalidateTags([{ type: 'Post', id: 1 }]))\ndispatch(\n  api.util.invalidateTags([\n    { type: 'Post', id: 1 },\n    { type: 'Post', id: 'LIST' },\n  ]),\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"selectcachedargsforquery",children:(0,i.jsx)(n.code,{children:"selectCachedArgsForQuery"})}),"\n",(0,i.jsx)(n.h4,{id:"signature-6",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"function selectCachedArgsForQuery(\n  state: RootState,\n  queryName: QueryName,\n): Array<QueryArg>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state"}),": the root state"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"queryName"}),": a string matching an existing query endpoint name"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description-6",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A function that can select arguments for currently cached queries."}),"\n",(0,i.jsx)(n.p,{children:"The function accepts two arguments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"the root state and"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"the name of the query"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It returns an array that contains arguments used for each entry."}),"\n",(0,i.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const args = api.util.selectCachedArgsForQuery(state, 'getPosts')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"resetapistate",children:(0,i.jsx)(n.code,{children:"resetApiState"})}),"\n",(0,i.jsx)(n.h4,{id:"signature-7",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"const resetApiState = () => ({\n  type: string,\n  payload: undefined,\n})\n"})}),"\n",(0,i.jsx)(n.h4,{id:"description-7",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"A Redux action creator that can be dispatched to manually reset the api state completely. This will immediately remove all existing cache entries, and all queries will be considered 'uninitialized'."}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.a,{href:"/redux-toolkit-zh/rtk-query/api/created-api/hooks",children:"hooks"})," also track state in local component state and might not fully be reset by ",(0,i.jsx)(n.code,{children:"resetApiState"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"dispatch(api.util.resetApiState())\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"getrunningqueriesthunk-and-getrunningmutationsthunk",children:[(0,i.jsx)(n.code,{children:"getRunningQueriesThunk"})," and ",(0,i.jsx)(n.code,{children:"getRunningMutationsThunk"})]}),"\n",(0,i.jsx)(n.h4,{id:"signature-8",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"getRunningQueriesThunk(): ThunkWithReturnValue<Array<QueryActionCreatorResult<any>>>\ngetRunningMutationsThunk(): ThunkWithReturnValue<Array<MutationActionCreatorResult<any>>>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"description-8",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Thunks that (if dispatched) return either all running queries or mutations.\nThese returned values can be awaited like promises."}),"\n",(0,i.jsxs)(n.p,{children:["This is useful for SSR scenarios to await all queries (or mutations) triggered in any way, including via hook calls\nor manually dispatching ",(0,i.jsx)(n.code,{children:"initiate"})," actions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'no-transpile title="Awaiting all currently running queries example"',children:"await Promise.all(dispatch(api.util.getRunningQueriesThunk()))\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"getrunningquerythunk-and-getrunningmutationthunk",children:[(0,i.jsx)(n.code,{children:"getRunningQueryThunk"})," and ",(0,i.jsx)(n.code,{children:"getRunningMutationThunk"})]}),"\n",(0,i.jsx)(n.h4,{id:"signature-9",children:"Signature"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"no-transpile",children:"getRunningQueryThunk<EndpointName extends QueryKeys<Definitions>>(\n  endpointName: EndpointName,\n  args: QueryArgFrom<Definitions[EndpointName]>\n): ThunkWithReturnValue<\n  | QueryActionCreatorResult<\n      Definitions[EndpointName] & { type: 'query' }\n    >\n  | undefined\n>\n\ngetRunningMutationThunk<EndpointName extends MutationKeys<Definitions>>(\n  endpointName: EndpointName,\n  fixedCacheKeyOrRequestId: string\n): ThunkWithReturnValue<\n  | MutationActionCreatorResult<\n      Definitions[EndpointName] & { type: 'mutation' }\n    >\n  | undefined\n>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"description-9",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Thunks that (if dispatched) return a single running query (or mutation) for a given\nendpoint name + argument (or requestId/fixedCacheKey) combination, if it is currently running.\nIf it is not currently running, the function returns ",(0,i.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["These thunks are primarily added to add experimental support for suspense in the future.\nThey enable writing custom hooks that look up if RTK Query has already got a running query/mutation\nfor a certain endpoint/argument combination, and retrieving that to ",(0,i.jsx)(n.code,{children:"throw"})," it as a promise."]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);