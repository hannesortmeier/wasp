"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[50216],{38610:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(44996);const r=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,i.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),i=n(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),i=n(67294),r=n(86010),s=n(12466),l=n(16550),o=n(91980),p=n(67392),u=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function c(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,p]=k({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=o??d;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},s,{className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},i.createElement(y,(0,a.Z)({},e,t)),i.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return i.createElement(v,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(50012);function r(e){let{path:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),s=t.slice(r+1,t.length-1),[l,o]=s.split(","),p=t.slice(0,r);return a.createElement("code",null,p+("js"===n?l:o))}},87587:(e,t,n)=>{n.d(t,{Jp:()=>r,aH:()=>s});var a=n(67294);const i=e=>{let{color:t,children:n}=e;return a.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},n)};function r(){return a.createElement(i,{color:"#0b62f5"},"internal")}function s(){return a.createElement(i,{color:"#f59e0b"},"required")}},48863:(e,t,n)=>{n.d(t,{A:()=>s,v:()=>l});var a=n(67294),i=n(50012),r=n(49875);function s(e){let{children:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(r.Z,null,t)}function l(e){let{children:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(r.Z,null,t)}},5871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var a=n(87462),i=(n(67294),n(3905)),r=n(46300),s=n(85162),l=n(74866),o=n(87587),p=n(48863),u=n(38610);const d={title:"Automatic CRUD"},c=void 0,m={unversionedId:"data-model/crud",id:"version-0.13.1/data-model/crud",title:"Automatic CRUD",description:"If you have a lot of experience writing full-stack apps, you probably ended up doing some of the same things many times: listing data, adding data, editing it, and deleting it.",source:"@site/versioned_docs/version-0.13.1/data-model/crud.md",sourceDirName:"data-model",slug:"/data-model/crud",permalink:"/docs/data-model/crud",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.1/data-model/crud.md",tags:[],version:"0.13.1",frontMatter:{title:"Automatic CRUD"},sidebar:"docs",previous:{title:"Actions",permalink:"/docs/data-model/operations/actions"},next:{title:"Databases",permalink:"/docs/data-model/backends"}},k={},h=[{value:"Overview",id:"overview",level:2},{value:"Example: A Simple TODO App",id:"example-a-simple-todo-app",level:2},{value:"Creating the App",id:"creating-the-app",level:3},{value:"Adding CRUD to the <code>Task</code> Entity \u2728",id:"adding-crud-to-the-task-entity-",level:3},{value:"Our Custom <code>create</code> Operation",id:"our-custom-create-operation",level:3},{value:"Using the Generated CRUD Operations on the Client",id:"using-the-generated-crud-operations-on-the-client",level:3},{value:"Future of CRUD Operations in Wasp",id:"future-of-crud-operations-in-wasp",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Declaring a CRUD With Default Options",id:"declaring-a-crud-with-default-options",level:3},{value:"Declaring a CRUD With All Available Options",id:"declaring-a-crud-with-all-available-options",level:3},{value:"Defining the overrides",id:"defining-the-overrides",level:4},{value:"Using the CRUD operations in client code",id:"using-the-crud-operations-in-client-code",level:4}],g={toc:h},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you have a lot of experience writing full-stack apps, you probably ended up doing some of the same things many times: listing data, adding data, editing it, and deleting it."),(0,i.kt)("p",null,"Wasp makes handling these boring bits easy by offering a higher-level concept called Automatic CRUD."),(0,i.kt)("p",null,"With a single declaration, you can tell Wasp to automatically generate server-side logic (i.e., Queries and Actions) for creating, reading, updating and deleting ",(0,i.kt)("a",{parentName:"p",href:"../data-model/entities"},"Entities"),". As you update definitions for your Entities, Wasp automatically regenerates the backend logic."),(0,i.kt)("admonition",{title:"Early preview",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This feature is currently in early preview and we are actively working on it. Read more about ",(0,i.kt)("a",{parentName:"p",href:"#future-of-crud-operations-in-wasp"},"our plans")," for CRUD operations.")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Imagine we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," entity and we want to enable CRUD operations for it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"entity Task {=psl\n  id          Int @id @default(autoincrement())\n  description String\n  isDone      Boolean\npsl=}\n")),(0,i.kt)("p",null,"We can then define a new ",(0,i.kt)("inlineCode",{parentName:"p"},"crud")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks"),"."),(0,i.kt)("p",null,"We specify to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," entity and we enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," operations (let's say we don't need the ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," operation)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'crud Tasks {\n  entity: Task,\n  operations: {\n    getAll: {\n      isPublic: true, // by default only logged in users can perform operations\n    },\n    get: {},\n    create: {\n      overrideFn: import { createTask } from "@src/tasks.js",\n    },\n    update: {},\n  },\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It uses default implementation for ",(0,i.kt)("inlineCode",{parentName:"li"},"getAll"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"get"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"update"),","),(0,i.kt)("li",{parentName:"ol"},"... while specifying a custom implementation for ",(0,i.kt)("inlineCode",{parentName:"li"},"create"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getAll")," will be public (no auth needed), while the rest of the operations will be private.")),(0,i.kt)("p",null,"Here's what it looks like when visualized:"),(0,i.kt)(u.Z,{alt:"Automatic CRUD with Wasp",source:"img/crud_diagram.png",caption:"Visualization of the Tasks crud declaration",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"We can now use the CRUD queries and actions we just specified in our client code."),(0,i.kt)("p",null,"Keep reading for an example of Automatic CRUD in action, or skip ahead for the ",(0,i.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference")),(0,i.kt)("h2",{id:"example-a-simple-todo-app"},"Example: A Simple TODO App"),(0,i.kt)("p",null,"Let's create a full-app example that uses automatic CRUD. We'll stick to using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," entity from the previous example, but we'll add a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," entity and enable ",(0,i.kt)("a",{parentName:"p",href:"../auth/username-and-pass"},"username and password")," based auth."),(0,i.kt)(u.Z,{alt:"Automatic CRUD with Wasp",source:"img/crud-guide.gif",caption:"We are building a simple tasks app with username based auth",mdxType:"ImgWithCaption"}),(0,i.kt)("h3",{id:"creating-the-app"},"Creating the App"),(0,i.kt)("p",null,"We can start by running ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp new tasksCrudApp")," and then adding the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app tasksCrudApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "Tasks Crud App",\n\n  // We enabled auth and set the auth method to username and password\n  auth: {\n    userEntity: User,\n    methods: {\n      usernameAndPassword: {},\n    },\n    onAuthFailedRedirectTo: "/login",\n  },\n}\n\nentity User {=psl\n  id       Int @id @default(autoincrement())\n  tasks    Task[]\npsl=}\n\n// We defined a Task entity on which we\'ll enable CRUD later on\nentity Task {=psl\n  id          Int @id @default(autoincrement())\n  description String\n  isDone      Boolean\n  userId      Int\n  user        User @relation(fields: [userId], references: [id])\npsl=}\n\n// Tasks app routes\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  component: import { MainPage } from "@src/MainPage.jsx",\n  authRequired: true,\n}\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { LoginPage } from "@src/LoginPage.jsx",\n}\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import { SignupPage } from "@src/SignupPage.jsx",\n}\n')),(0,i.kt)("p",null,"We can then run ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db migrate-dev")," to create the database and run the migrations."),(0,i.kt)("h3",{id:"adding-crud-to-the-task-entity-"},"Adding CRUD to the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Task")," Entity \u2728"),(0,i.kt)("p",null,"Let's add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"crud")," declaration to our ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\ncrud Tasks {\n  entity: Task,\n  operations: {\n    getAll: {},\n    create: {\n      overrideFn: import { createTask } from "@src/tasks.js",\n    },\n  },\n}\n')),(0,i.kt)("p",null,"You'll notice that we enabled only ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," operations. This means that only these operations will be available."),(0,i.kt)("p",null,"We also overrode the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," operation with a custom implementation. This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," operation will not be generated, but instead, the ",(0,i.kt)("inlineCode",{parentName:"p"},"createTask")," function from ",(0,i.kt)("inlineCode",{parentName:"p"},"@src/tasks.js")," will be used."),(0,i.kt)("h3",{id:"our-custom-create-operation"},"Our Custom ",(0,i.kt)("inlineCode",{parentName:"h3"},"create")," Operation"),(0,i.kt)("p",null,"Here's the ",(0,i.kt)(r.Z,{path:"src/tasks.{js,ts}",mdxType:"FileExtSwitcher"})," file:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/tasks.js",title:"src/tasks.js"},"import { HttpError } from 'wasp/server'\n\nexport const createTask = async (args, context) => {\n  if (!context.user) {\n    throw new HttpError(401, 'User not authenticated.')\n  }\n\n  const { description, isDone } = args\n  const { Task } = context.entities\n\n  return await Task.create({\n    data: {\n      description,\n      isDone,\n      // highlight-start\n      // Connect the task to the user that is creating it\n      user: {\n        connect: {\n          id: context.user.id,\n        },\n      },\n      // highlight-end\n    },\n  })\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"import { type Tasks } from 'wasp/server/crud'\nimport { type Task } from 'wasp/entities'\nimport { HttpError } from 'wasp/server'\n\ntype CreateTaskInput = { description: string; isDone: boolean }\n\nexport const createTask: Tasks.CreateAction<CreateTaskInput, Task> = async (\n  args,\n  context\n) => {\n  if (!context.user) {\n    throw new HttpError(401, 'User not authenticated.')\n  }\n\n  const { description, isDone } = args\n  const { Task } = context.entities\n\n  return await Task.create({\n    data: {\n      description,\n      isDone,\n      // highlight-start\n      // Connect the task to the user that is creating it\n      user: {\n        connect: {\n          id: context.user.id,\n        },\n      },\n      // highlight-end\n    },\n  })\n}\n")))),(0,i.kt)("p",null,"We made a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," operation because we want to make sure that the task is connected to the user that is creating it.\nAutomatic CRUD doesn't support this by default (yet!).\nRead more about the default implementations ",(0,i.kt)("a",{parentName:"p",href:"#declaring-a-crud-with-default-options"},"here"),"."),(0,i.kt)("h3",{id:"using-the-generated-crud-operations-on-the-client"},"Using the Generated CRUD Operations on the Client"),(0,i.kt)("p",null,"And let's use the generated operations in our client code:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/MainPage.jsx"',title:'"src/MainPage.jsx"'},"// highlight-next-line\nimport { Tasks } from 'wasp/client/crud'\nimport { useState } from 'react'\n\nexport const MainPage = () => {\n  // highlight-next-line\n  const { data: tasks, isLoading, error } = Tasks.getAll.useQuery()\n  // highlight-next-line\n  const createTask = Tasks.create.useAction()\n  const [taskDescription, setTaskDescription] = useState('')\n\n  function handleCreateTask() {\n    createTask({ description: taskDescription, isDone: false })\n    setTaskDescription('')\n  }\n\n  if (isLoading) return <div>Loading...</div>\n  if (error) return <div>Error: {error.message}</div>\n  return (\n    <div\n      style={{\n        fontSize: '1.5rem',\n        display: 'grid',\n        placeContent: 'center',\n        height: '100vh',\n      }}\n    >\n      <div>\n        <input\n          value={taskDescription}\n          onChange={(e) => setTaskDescription(e.target.value)}\n        />\n        <button onClick={handleCreateTask}>Create task</button>\n      </div>\n      <ul>\n        {tasks.map((task) => (\n          <li key={task.id}>{task.description}</li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"// highlight-next-line\nimport { Tasks } from 'wasp/client/crud'\nimport { useState } from 'react'\n\nexport const MainPage = () => {\n  // highlight-next-line\n  // Thanks to full-stack type safety, all payload types are inferred\n  // highlight-next-line\n  // automatically\n  // highlight-next-line\n  const { data: tasks, isLoading, error } = Tasks.getAll.useQuery()\n  // highlight-next-line\n  const createTask = Tasks.create.useAction()\n  const [taskDescription, setTaskDescription] = useState('')\n\n  function handleCreateTask() {\n    createTask({ description: taskDescription, isDone: false })\n    setTaskDescription('')\n  }\n\n  if (isLoading) return <div>Loading...</div>\n  if (error) return <div>Error: {error.message}</div>\n  return (\n    <div\n      style={{\n        fontSize: '1.5rem',\n        display: 'grid',\n        placeContent: 'center',\n        height: '100vh',\n      }}\n    >\n      <div>\n        <input\n          value={taskDescription}\n          onChange={(e) => setTaskDescription(e.target.value)}\n        />\n        <button onClick={handleCreateTask}>Create task</button>\n      </div>\n      <ul>\n        {tasks.map((task) => (\n          <li key={task.id}>{task.description}</li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n")))),(0,i.kt)("p",null,"And here are the login and signup pages, where we are using Wasp's ",(0,i.kt)("a",{parentName:"p",href:"../auth/ui"},"Auth UI")," components:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/LoginPage.jsx"',title:'"src/LoginPage.jsx"'},"import { LoginForm } from 'wasp/client/auth'\nimport { Link } from 'react-router-dom'\n\nexport function LoginPage() {\n  return (\n    <div\n      style={{\n        display: 'grid',\n        placeContent: 'center',\n      }}\n    >\n      <LoginForm />\n      <div>\n        <Link to=\"/signup\">Create an account</Link>\n      </div>\n    </div>\n  )\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/LoginPage.tsx"',title:'"src/LoginPage.tsx"'},"import { LoginForm } from 'wasp/client/auth'\nimport { Link } from 'react-router-dom'\n\nexport function LoginPage() {\n  return (\n    <div\n      style={{\n        display: 'grid',\n        placeContent: 'center',\n      }}\n    >\n      <LoginForm />\n      <div>\n        <Link to=\"/signup\">Create an account</Link>\n      </div>\n    </div>\n  )\n}\n")))),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/SignupPage.jsx"',title:'"src/SignupPage.jsx"'},"import { SignupForm } from 'wasp/client/auth'\n\nexport function SignupPage() {\n  return (\n    <div\n      style={{\n        display: 'grid',\n        placeContent: 'center',\n      }}\n    >\n      <SignupForm />\n    </div>\n  )\n}\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/SignupPage.tsx"',title:'"src/SignupPage.tsx"'},"import { SignupForm } from 'wasp/client/auth'\n\nexport function SignupPage() {\n  return (\n    <div\n      style={{\n        display: 'grid',\n        placeContent: 'center',\n      }}\n    >\n      <SignupForm />\n    </div>\n  )\n}\n")))),(0,i.kt)("p",null,"That's it. You can now run ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp start")," and see the app in action. \u26a1\ufe0f"),(0,i.kt)("p",null,"You should see a login page and a signup page. After you log in, you should see a page with a list of tasks and a form to create new tasks."),(0,i.kt)("h2",{id:"future-of-crud-operations-in-wasp"},"Future of CRUD Operations in Wasp"),(0,i.kt)("p",null,"CRUD operations currently have a limited set of knowledge about the business logic they are implementing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For example, they don't know that a task should be connected to the user that is creating it. This is why we had to override the ",(0,i.kt)("inlineCode",{parentName:"li"},"create")," operation in the example above."),(0,i.kt)("li",{parentName:"ul"},"Another thing: they are not aware of the authorization rules. For example, they don't know that a user should not be able to create a task for another user. In the future, we will be adding role-based authorization to Wasp, and we plan to make CRUD operations aware of the authorization rules."),(0,i.kt)("li",{parentName:"ul"},"Another issue is input validation and sanitization. For example, we might want to make sure that the task description is not empty.")),(0,i.kt)("p",null,"CRUD operations are a mechanism for getting a backend up and running quickly, but it depends on the information it can get from the Wasp app. The more information that it can pick up from your app, the more powerful it will be out of the box."),(0,i.kt)("p",null,"We plan on supporting CRUD operations and growing them to become the easiest way to create your backend. Follow along on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/1253"},"this GitHub issue")," to see how we are doing."),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"CRUD declaration work on top of existing entity declaration. We'll fully explore the API using two examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A basic CRUD declaration that relies on default options."),(0,i.kt)("li",{parentName:"ol"},"A more involved CRUD declaration that uses extra options and overrides.")),(0,i.kt)("h3",{id:"declaring-a-crud-with-default-options"},"Declaring a CRUD With Default Options"),(0,i.kt)("p",null,"If we create CRUD operations for an entity named ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),", like this:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'crud Tasks { // crud name here is "Tasks"\n  entity: Task,\n  operations: {\n    get: {},\n    getAll: {},\n    create: {},\n    update: {},\n    delete: {},\n  },\n}\n')),(0,i.kt)("p",null,"Wasp will give you the following default implementations:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"get")," - returns one entity based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n// Wasp uses the field marked with `@id` in Prisma schema as the id field.\nreturn Task.findUnique({ where: { id: args.id } })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"getAll")," - returns all entities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n\n// If the operation is not public, Wasp checks if an authenticated user\n// is making the request.\n\nreturn Task.findMany()\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"create")," - creates a new entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ...\nreturn Task.create({ data: args.data })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"update")," - updates an existing entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n// Wasp uses the field marked with `@id` in Prisma schema as the id field.\nreturn Task.update({ where: { id: args.id }, data: args.data })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"delete")," - deletes an existing entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n// Wasp uses the field marked with `@id` in Prisma schema as the id field.\nreturn Task.delete({ where: { id: args.id } })\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'crud Tasks { // crud name here is "Tasks"\n  entity: Task,\n  operations: {\n    get: {},\n    getAll: {},\n    create: {},\n    update: {},\n    delete: {},\n  },\n}\n')),(0,i.kt)("p",null,"Wasp will give you the following default implementations:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"get")," - returns one entity based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n// Wasp uses the field marked with `@id` in Prisma schema as the id field.\nreturn Task.findUnique({ where: { id: args.id } })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"getAll")," - returns all entities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n\n// If the operation is not public, Wasp checks if an authenticated user\n// is making the request.\n\nreturn Task.findMany()\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"create")," - creates a new entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\nreturn Task.create({ data: args.data })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"update")," - updates an existing entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n// Wasp uses the field marked with `@id` in Prisma schema as the id field.\nreturn Task.update({ where: { id: args.id }, data: args.data })\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"delete")," - deletes an existing entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n// Wasp uses the field marked with `@id` in Prisma schema as the id field.\nreturn Task.delete({ where: { id: args.id } })\n")))),(0,i.kt)("admonition",{title:"Current Limitations",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the default ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," implementations, we are saving all of the data that the client sends to the server. This is not always desirable, i.e. in the case when the client should not be able to modify all of the data in the entity."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"#future-of-crud-operations-in-wasp"},"In the future"),", we are planning to add validation of action input, where only the data that the user is allowed to change will be saved."),(0,i.kt)("p",{parentName:"admonition"},"For now, the solution is to provide an override function. You can override the default implementation by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"overrideFn")," option and implementing the validation logic yourself.")),(0,i.kt)("h3",{id:"declaring-a-crud-with-all-available-options"},"Declaring a CRUD With All Available Options"),(0,i.kt)("p",null,"Here's an example of a more complex CRUD declaration:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'crud Tasks { // crud name here is "Tasks"\n  entity: Task,\n  operations: {\n    getAll: {\n      isPublic: true, // optional, defaults to false\n    },\n    get: {},\n    create: {\n      overrideFn: import { createTask } from "@src/tasks.js", // optional\n    },\n    update: {},\n  },\n}\n'))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'crud Tasks { // crud name here is "Tasks"\n  entity: Task,\n  operations: {\n    getAll: {\n      isPublic: true, // optional, defaults to false\n    },\n    get: {},\n    create: {\n      overrideFn: import { createTask } from "@src/tasks.js", // optional\n    },\n    update: {},\n  },\n}\n')))),(0,i.kt)("p",null,"The CRUD declaration features the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"entity: Entity")," ",(0,i.kt)(o.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The entity to which the CRUD operations will be applied.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"operations: { [operationName]: CrudOperationOptions }")," ",(0,i.kt)(o.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The operations to be generated. The key is the name of the operation, and the value is the operation configuration."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The possible values for ",(0,i.kt)("inlineCode",{parentName:"li"},"operationName")," are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getAll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"update")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delete")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CrudOperationOptions")," can have the following fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isPublic: bool")," - Whether the operation is public or not. If it is public, no auth is required to access it. If it is not public, it will be available only to authenticated users. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"overrideFn: ExtImport")," - The import statement of the optional override implementation in Node.js.")))))),(0,i.kt)("h4",{id:"defining-the-overrides"},"Defining the overrides"),(0,i.kt)("p",null,"Like with actions and queries, you can define the implementation in a Javascript/Typescript file. The overrides are functions that take the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"args")),(0,i.kt)("p",{parentName:"li"},"The arguments of the operation i.e. the data sent from the client.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"context")),(0,i.kt)("p",{parentName:"li"},"Context contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," making the request and the ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," object with the entity that's being operated on."))),(0,i.kt)(p.A,{mdxType:"ShowForTs"},(0,i.kt)("p",null,"You can also import types for each of the functions you want to override by importing the ",(0,i.kt)("inlineCode",{parentName:"p"},"{crud name}")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp/server/crud"),". The available types are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{crud name}.GetAllQuery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{crud name}.GetQuery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{crud name}.CreateAction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{crud name}.UpdateAction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{crud name}.DeleteAction"))),(0,i.kt)("p",null,"If you have a CRUD named ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks"),", you would import the types like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { type Tasks } from 'wasp/server/crud'\n\n// Each of the types is a generic type, so you can use it like this:\nexport const getAllOverride: Tasks.GetAllQuery<Input, Output> = async (\n  args,\n  context\n) => {\n  // ...\n}\n"))),(0,i.kt)("p",null,"For a usage example, check the ",(0,i.kt)("a",{parentName:"p",href:"../data-model/crud#adding-crud-to-the-task-entity-"},"example guide"),"."),(0,i.kt)("h4",{id:"using-the-crud-operations-in-client-code"},"Using the CRUD operations in client code"),(0,i.kt)("p",null,"On the client, you import the CRUD operations from ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp/client/crud")," by import the ",(0,i.kt)("inlineCode",{parentName:"p"},"{crud name}")," object. For example, if you have a CRUD called ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks"),", you would import the operations like this:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomePage.jsx"',title:'"SomePage.jsx"'},"import { Tasks } from 'wasp/client/crud'\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="SomePage.tsx"',title:'"SomePage.tsx"'},"import { Tasks } from 'wasp/client/crud'\n")))),(0,i.kt)("p",null,"You can then access the operations like this:"),(0,i.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomePage.jsx"',title:'"SomePage.jsx"'},"const { data } = Tasks.getAll.useQuery()\nconst { data } = Tasks.get.useQuery({ id: 1 })\nconst createAction = Tasks.create.useAction()\nconst updateAction = Tasks.update.useAction()\nconst deleteAction = Tasks.delete.useAction()\n"))),(0,i.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="SomePage.tsx"',title:'"SomePage.tsx"'},"const { data } = Tasks.getAll.useQuery()\nconst { data } = Tasks.get.useQuery({ id: 1 })\nconst createAction = Tasks.create.useAction()\nconst updateAction = Tasks.update.useAction()\nconst deleteAction = Tasks.delete.useAction()\n")))),(0,i.kt)("p",null,"All CRUD operations are implemented with ",(0,i.kt)("a",{parentName:"p",href:"../data-model/operations/overview"},"Queries and Actions")," under the hood, which means they come with all the features you'd expect (e.g., automatic SuperJSON serialization, full-stack type safety when using TypeScript)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Join our ",(0,i.kt)("strong",{parentName:"p"},"community")," on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/rzdnErX"},"Discord"),", where we chat about full-stack web stuff. Join us to see what we are up to, share your opinions or get help with CRUD operations."))}y.isMDXComponent=!0}}]);