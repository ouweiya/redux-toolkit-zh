"use strict";(self.webpackChunkredux_toolkit_zh=self.webpackChunkredux_toolkit_zh||[]).push([[9911],{6504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(4848),s=n(8453);const r={id:"streaming-updates",title:"Streaming Updates",sidebar_label:"Streaming Updates",hide_title:!0,description:"RTK Query > Usage > Streaming Updates: updating cache from pushed messages"},i="Streaming Updates",d={id:"rtk-query/usage/streaming-updates",title:"Streaming Updates",description:"RTK Query > Usage > Streaming Updates: updating cache from pushed messages",source:"@site/docs/rtk-query/usage/streaming-updates.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/streaming-updates",permalink:"/redux-toolkit-zh/rtk-query/usage/streaming-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rtk-query/usage/streaming-updates.mdx",tags:[],version:"current",frontMatter:{id:"streaming-updates",title:"Streaming Updates",sidebar_label:"Streaming Updates",hide_title:!0,description:"RTK Query > Usage > Streaming Updates: updating cache from pushed messages"},sidebar:"docs",previous:{title:"Polling",permalink:"/redux-toolkit-zh/rtk-query/usage/polling"},next:{title:"Code Splitting",permalink:"/redux-toolkit-zh/rtk-query/usage/code-splitting"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"When to use streaming updates",id:"when-to-use-streaming-updates",level:2},{value:"Using the <code>onCacheEntryAdded</code> Lifecycle",id:"using-the-oncacheentryadded-lifecycle",level:2},{value:"Streaming Update Examples",id:"streaming-update-examples",level:2},{value:"Websocket Chat API",id:"websocket-chat-api",level:3},{value:"What to expect",id:"what-to-expect",level:4},{value:"Websocket Chat API with a transformed response shape",id:"websocket-chat-api-with-a-transformed-response-shape",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"\xa0"}),"\n",(0,a.jsx)(t.h1,{id:"streaming-updates",children:"Streaming Updates"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["RTK Query gives you the ability to receive ",(0,a.jsx)(t.strong,{children:"streaming updates"})," for persistent queries. This enables a query to establish an ongoing connection to the server (typically using WebSockets), and apply updates to the cached data as additional information is received from the server."]}),"\n",(0,a.jsx)(t.p,{children:"Streaming updates can be used to enable the API to receive real-time updates to the back-end data, such as new entries being created, or important properties being updated."}),"\n",(0,a.jsxs)(t.p,{children:["To enable streaming updates for a query, pass the asynchronous ",(0,a.jsx)(t.code,{children:"onCacheEntryAdded"})," function to the query, including the logic for how to update the query when streamed data is received. See ",(0,a.jsxs)(t.a,{href:"../api/createApi#oncacheentryadded",children:[(0,a.jsx)(t.code,{children:"onCacheEntryAdded"})," API reference"]})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"when-to-use-streaming-updates",children:"When to use streaming updates"}),"\n",(0,a.jsxs)(t.p,{children:["Primarily updates to query data should be done via ",(0,a.jsx)(t.a,{href:"./polling",children:(0,a.jsx)(t.code,{children:"polling"})})," intermittently on an interval, using ",(0,a.jsx)(t.a,{href:"./automated-refetching#advanced-invalidation-with-abstract-tag-ids",children:(0,a.jsx)(t.code,{children:"cache invalidation"})})," to invalidate data based on tags associated with queries & mutations, or with ",(0,a.jsx)(t.a,{href:"../api/createApi#refetchonmountorargchange",children:(0,a.jsx)(t.code,{children:"refetchOnMountOrArgChange"})})," to fetch fresh data when a component using the data mounts."]}),"\n",(0,a.jsx)(t.p,{children:"However, streaming updates is particularly useful for scenarios involving:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"Small, frequent changes to large objects"}),". Rather than repeatedly polling for a large object, the object can be fetched with an initial query, and streaming updates can update individual properties as updates are received."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.em,{children:"External event-driven updates"}),". Where data may be changed by the server or otherwise external users and where real-time updates are expected to be shown to an active user, polling alone would result in periods of stale data in between queries, causing state to easily get out of sync. Streaming updates can update all active clients as the updates occur rather than waiting for the next interval to elapse."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Example use cases that benefit from streaming updates are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"GraphQL subscriptions"}),"\n",(0,a.jsx)(t.li,{children:"Real-time chat applications"}),"\n",(0,a.jsx)(t.li,{children:"Real-time multiplayer games"}),"\n",(0,a.jsx)(t.li,{children:"Collaborative document editing with multiple concurrent users"}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"using-the-oncacheentryadded-lifecycle",children:["Using the ",(0,a.jsx)(t.code,{children:"onCacheEntryAdded"})," Lifecycle"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"onCacheEntryAdded"})," lifecycle callback lets you write arbitrary async logic that will be executed after a new cache entry is added to the RTK Query cache (ie, after a component has created a new subscription to a given endpoint+params combination)."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"onCacheEntryAdded"})," will be called with two arguments: the ",(0,a.jsx)(t.code,{children:"arg"}),' that was passed to the subscription, and an options object containing "lifecycle promises" and utility functions. You can use these to write sequenced logic that waits for data to be added, initiates server connections, applies partial updates, and cleans up the connection when the query subscription is removed.']}),"\n",(0,a.jsxs)(t.p,{children:["Typically, you will ",(0,a.jsx)(t.code,{children:"await cacheDataLoaded"})," to determine when the first data has been fetched, then use the ",(0,a.jsx)(t.code,{children:"updateCacheData"})," utility to apply streaming updates as messages are received. ",(0,a.jsx)(t.code,{children:"updateCacheData"})," is an Immer-powered callback that receives a ",(0,a.jsx)(t.code,{children:"draft"}),' of the current cache value. You may "mutate" the draft value to update it as needed based on the received values. RTK Query will then dispatch an action that applies a diffed patch based on those changes.']}),"\n",(0,a.jsxs)(t.p,{children:["Finally, you can ",(0,a.jsx)(t.code,{children:"await cacheEntryRemoved"})," to know when to clean up any server connections."]}),"\n",(0,a.jsx)(t.h2,{id:"streaming-update-examples",children:"Streaming Update Examples"}),"\n",(0,a.jsx)(t.h3,{id:"websocket-chat-api",children:"Websocket Chat API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// file: schemaValidators.ts noEmit\nimport type { Message } from './api'\n\nexport function isMessage(message: unknown): message is Message {\n  // in real code this would check `message` to ensure it is a `Message`\n  return true\n}\n\n// file: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { isMessage } from './schemaValidators'\n\nexport type Channel = 'redux' | 'general'\n\nexport interface Message {\n  id: number\n  channel: Channel\n  userName: string\n  text: string\n}\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (build) => ({\n    getMessages: build.query<Message[], Channel>({\n      query: (channel) => `messages/${channel}`,\n      // highlight-start\n      async onCacheEntryAdded(\n        arg,\n        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },\n      ) {\n        // create a websocket connection when the cache subscription starts\n        const ws = new WebSocket('ws://localhost:8080')\n        try {\n          // wait for the initial query to resolve before proceeding\n          await cacheDataLoaded\n\n          // when data is received from the socket connection to the server,\n          // if it is a message and for the appropriate channel,\n          // update our query result with the received message\n          const listener = (event: MessageEvent) => {\n            const data = JSON.parse(event.data)\n            if (!isMessage(data) || data.channel !== arg) return\n\n            updateCachedData((draft) => {\n              draft.push(data)\n            })\n          }\n\n          ws.addEventListener('message', listener)\n        } catch {\n          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,\n          // in which case `cacheDataLoaded` will throw\n        }\n        // cacheEntryRemoved will resolve when the cache subscription is no longer active\n        await cacheEntryRemoved\n        // perform cleanup steps once the `cacheEntryRemoved` promise resolves\n        ws.close()\n      },\n      // highlight-end\n    }),\n  }),\n})\n\nexport const { useGetMessagesQuery } = api\n"})}),"\n",(0,a.jsx)(t.h4,{id:"what-to-expect",children:"What to expect"}),"\n",(0,a.jsxs)(t.p,{children:["When the ",(0,a.jsx)(t.code,{children:"getMessages"})," query is triggered (e.g. via a component mounting with the ",(0,a.jsx)(t.code,{children:"useGetMessagesQuery()"})," hook), a ",(0,a.jsx)(t.code,{children:"cache entry"})," will be added based on the serialized arguments for the endpoint. The associated query will be fired off based on the ",(0,a.jsx)(t.code,{children:"query"})," property to fetch the initial data for the cache. Meanwhile, the asynchronous ",(0,a.jsx)(t.code,{children:"onCacheEntryAdded"})," callback will begin, and create a new WebSocket connection. Once the response for the initial query is received, the cache will be populated with the response data, and the ",(0,a.jsx)(t.code,{children:"cacheDataLoaded"})," promise will resolve. After awaiting the ",(0,a.jsx)(t.code,{children:"cacheDataLoaded"})," promise, the ",(0,a.jsx)(t.code,{children:"message"})," event listener will be added to the WebSocket connection, which updates the cache data when an associated message is received."]}),"\n",(0,a.jsxs)(t.p,{children:["When there are no more active subscriptions to the data (e.g. when the subscribed components remain unmounted for a sufficient amount of time), the ",(0,a.jsx)(t.code,{children:"cacheEntryRemoved"})," promise will resolve, allowing the remaining code to run and close the websocket connection. RTK Query will also remove the associated data from the cache."]}),"\n",(0,a.jsx)(t.p,{children:"If a query for the corresponding cache entry runs later, it will overwrite the whole cache entry, and the streaming update listeners will continue to work on the updated data."}),"\n",(0,a.jsx)(t.h3,{id:"websocket-chat-api-with-a-transformed-response-shape",children:"Websocket Chat API with a transformed response shape"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// file: schemaValidators.ts noEmit\nimport type { Message } from './api'\n\nexport function isMessage(message: unknown): message is Message {\n  // in real code this would check `message` to ensure it is a `Message`\n\n  return true\n}\n\n// file: api.ts\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport { createEntityAdapter } from '@reduxjs/toolkit'\nimport type { EntityState } from '@reduxjs/toolkit'\nimport { isMessage } from './schemaValidators'\n\nexport type Channel = 'redux' | 'general'\n\nexport interface Message {\n  id: number\n  channel: Channel\n  userName: string\n  text: string\n}\n\n// highlight-start\nconst messagesAdapter = createEntityAdapter<Message>()\n// highlight-end\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (build) => ({\n    // highlight-start\n    getMessages: build.query<EntityState<Message, number>, Channel>({\n      // highlight-end\n      query: (channel) => `messages/${channel}`,\n      // highlight-start\n      transformResponse(response: Message[]) {\n        return messagesAdapter.addMany(\n          messagesAdapter.getInitialState(),\n          response,\n        )\n      },\n      // highlight-end\n      async onCacheEntryAdded(\n        arg,\n        { updateCachedData, cacheDataLoaded, cacheEntryRemoved },\n      ) {\n        const ws = new WebSocket('ws://localhost:8080')\n        try {\n          await cacheDataLoaded\n\n          const listener = (event: MessageEvent) => {\n            const data = JSON.parse(event.data)\n            if (!isMessage(data) || data.channel !== arg) return\n\n            updateCachedData((draft) => {\n              // highlight-start\n              messagesAdapter.upsertOne(draft, data)\n              // highlight-end\n            })\n          }\n\n          ws.addEventListener('message', listener)\n        } catch {}\n        await cacheEntryRemoved\n        ws.close()\n      },\n    }),\n  }),\n})\n\nexport const { useGetMessagesQuery } = api\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This example demonstrates how the ",(0,a.jsx)(t.a,{href:"#websocket-chat-api",children:"previous example"})," can be altered to allow for transforming the response shape when adding data to the cache."]}),"\n",(0,a.jsx)(t.p,{children:"For example, the data is transformed from this shape:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:"[\n  {\n    id: 0\n    channel: 'redux'\n    userName: 'Mark'\n    text: 'Welcome to #redux!'\n  },\n  {\n    id: 1\n    channel: 'redux'\n    userName: 'Lenz'\n    text: 'Glad to be here!'\n  },\n]\n"})}),"\n",(0,a.jsx)(t.p,{children:"To this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"no-transpile",children:'{\n  // The unique IDs of each item. Must be strings or numbers\n  ids: [0, 1],\n  // A lookup table mapping entity IDs to the corresponding entity objects\n  entities: {\n    0: {\n      id: 0,\n      channel: "redux",\n      userName: "Mark",\n      text: "Welcome to #redux!",\n    },\n    1: {\n      id: 1,\n      channel: "redux",\n      userName: "Lenz",\n      text: "Glad to be here!",\n    },\n  },\n};\n'})}),"\n",(0,a.jsxs)(t.p,{children:["A key point to keep in mind is that updates to the cached data within the ",(0,a.jsx)(t.code,{children:"onCacheEntryAdded"})," callback must respect the transformed data shape which will be present for the cached data. The example shows how ",(0,a.jsx)(t.a,{href:"../../api/createEntityAdapter",children:(0,a.jsx)(t.code,{children:"createEntityAdapter"})})," can be used for the initial ",(0,a.jsx)(t.code,{children:"transformResponse"}),", and again when streamed updates are received to upsert received items into the cached data, while maintaining the normalized state structure."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var a=n(6540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);