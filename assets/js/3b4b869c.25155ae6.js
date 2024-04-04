"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[58465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),o=n(67294),i=n(86010),r=n(12466),l=n(16550),s=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,p]=m({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??c;return g({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var f=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==l&&(c(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:g,onClick:d},r,{className:(0,i.Z)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=h(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(50012);function i(e){let{path:t}=e;const[n]=(0,o.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),r=t.slice(i+1,t.length-1),[l,s]=r.split(","),p=t.slice(0,i);return a.createElement("code",null,p+("js"===n?l:s))}},16591:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(87462),o=(n(67294),n(3905)),i=(n(46300),n(85162)),r=n(74866);const l={toc:[]},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"userSignupFields")," defines all the extra fields that need to be set on the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," during the sign-up process. For example, if you have ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"phone")," fields on your ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," entity, you can set them by defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSignupFields")," like this:"),(0,o.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/auth.js"',title:'"src/auth.js"'},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n  address: (data) => {\n    if (!data.address) {\n      throw new Error('Address is required')\n    }\n    return data.address\n  }\n  phone: (data) => data.phone,\n})\n"))),(0,o.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/auth.ts"',title:'"src/auth.ts"'},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n  address: (data) => {\n    if (!data.address) {\n      throw new Error('Address is required')\n    }\n    return data.address\n  }\n  phone: (data) => data.phone,\n})\n")))))}p.isMDXComponent=!0},51061:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));n(46300);const i={toc:[]},r="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provider-specific behavior comes down to implementing two functions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configFn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userSignupFields"))),(0,o.kt)("p",null,"The reference shows how to define both."),(0,o.kt)("p",null,"For behavior common to all providers, check the general ",(0,o.kt)("a",{parentName:"p",href:"/docs/auth/overview#api-reference"},"API Reference"),"."))}l.isMDXComponent=!0},61610:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));n(46300);const i={toc:[]},r="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When a user ",(0,o.kt)("strong",{parentName:"p"},"signs in for the first time"),", Wasp creates a new user account and links it to the chosen auth provider account for future logins."))}l.isMDXComponent=!0},59323:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));n(46300);const i={toc:[]},r="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wasp automatically generates the ",(0,o.kt)("inlineCode",{parentName:"p"},"defineUserSignupFields")," function to help you correctly type your ",(0,o.kt)("inlineCode",{parentName:"p"},"userSignupFields")," object."))}l.isMDXComponent=!0},61545:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));n(46300);const i={toc:[]},r="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When a user logs in using a social login provider, the backend receives some data about the user.\nWasp lets you access this data inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSignupFields")," getters."),(0,o.kt)("p",null,"For example, the User entity can include a ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName")," field which you can set based on the details received from the provider."),(0,o.kt)("p",null,"Wasp also lets you customize the configuration of the providers' settings using the ",(0,o.kt)("inlineCode",{parentName:"p"},"configFn")," function."),(0,o.kt)("p",null,"Let's use this example to show both fields in action:"))}l.isMDXComponent=!0},25794:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));n(46300);const i={toc:[]},r="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, Wasp doesn't store any information it receives from the social login provider. It only stores the user's ID specific to the provider."),(0,o.kt)("p",null,"There are two mechanisms used for overriding the default behavior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userSignupFields")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configFn"))),(0,o.kt)("p",null,"Let's explore them in more detail."))}l.isMDXComponent=!0},69213:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));n(46300);const i={toc:[]},r="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To read more about how to set up the logout button and get access to the logged-in user in both client and server code, read the docs on ",(0,o.kt)("a",{parentName:"p",href:"../../auth/overview"},"using auth"),"."))}l.isMDXComponent=!0},70218:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));n(46300);const i={toc:[]},r="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(r,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here's a skeleton of how our ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasp")," should look like after we're done:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"// Configuring the social authentication\napp myApp {\n  auth: { ... }\n}\n\n// Defining entities\nentity User { ... }\n\n// Defining routes and pages\nroute LoginRoute { ... }\npage LoginPage { ... }\n")))}l.isMDXComponent=!0},97326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>x,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var a=n(87462),o=(n(67294),n(3905)),i=n(46300),r=n(85162),l=n(74866),s=(n(44996),n(61610)),p=n(25794),u=n(61545),c=n(69213),d=n(70218),g=n(59323),m=n(51061),h=n(16591);const f={title:"Google"},k=void 0,y={unversionedId:"auth/social-auth/google",id:"version-0.13.1/auth/social-auth/google",title:"Google",description:"Wasp supports Google Authentication out of the box.",source:"@site/versioned_docs/version-0.13.1/auth/social-auth/google.md",sourceDirName:"auth/social-auth",slug:"/auth/social-auth/google",permalink:"/docs/auth/social-auth/google",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.1/auth/social-auth/google.md",tags:[],version:"0.13.1",frontMatter:{title:"Google"},sidebar:"docs",previous:{title:"GitHub",permalink:"/docs/auth/social-auth/github"},next:{title:"Keycloak",permalink:"/docs/auth/social-auth/keycloak"}},v={},b=[{value:"Setting up Google Auth",id:"setting-up-google-auth",level:2},{value:"1. Adding Google Auth to Your Wasp File",id:"1-adding-google-auth-to-your-wasp-file",level:3},{value:"2. Adding the User Entity",id:"2-adding-the-user-entity",level:3},{value:"3. Creating a Google OAuth App",id:"3-creating-a-google-oauth-app",level:3},{value:"4. Adding Environment Variables",id:"4-adding-environment-variables",level:3},{value:"5. Adding the Necessary Routes and Pages",id:"5-adding-the-necessary-routes-and-pages",level:3},{value:"6. Create the Client Pages",id:"6-create-the-client-pages",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Default Behaviour",id:"default-behaviour",level:2},{value:"Overrides",id:"overrides",level:2},{value:"Data Received From Google",id:"data-received-from-google",level:3},{value:"Using the Data Received From Google",id:"using-the-data-received-from-google",level:3},{value:"Using Auth",id:"using-auth",level:2},{value:"API Reference",id:"api-reference",level:2}],w={toc:b},N="wrapper";function x(e){let{components:t,...f}=e;return(0,o.kt)(N,(0,a.Z)({},w,f,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wasp supports Google Authentication out of the box.\nGoogle Auth is arguably the best external auth option, as most users on the web already have Google accounts."),(0,o.kt)("p",null,"Enabling it lets your users log in using their existing Google accounts, greatly simplifying the process and enhancing the user experience."),(0,o.kt)("p",null,"Let's walk through enabling Google authentication, explain some of the default settings, and show how to override them."),(0,o.kt)("h2",{id:"setting-up-google-auth"},"Setting up Google Auth"),(0,o.kt)("p",null,"Enabling Google Authentication comes down to a series of steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enabling Google authentication in the Wasp file."),(0,o.kt)("li",{parentName:"ol"},"Adding the ",(0,o.kt)("inlineCode",{parentName:"li"},"User")," entity."),(0,o.kt)("li",{parentName:"ol"},"Creating a Google OAuth app."),(0,o.kt)("li",{parentName:"ol"},"Adding the necessary Routes and Pages"),(0,o.kt)("li",{parentName:"ol"},"Using Auth UI components in our Pages.")),(0,o.kt)(d.ZP,{mdxType:"WaspFileStructureNote"}),(0,o.kt)("h3",{id:"1-adding-google-auth-to-your-wasp-file"},"1. Adding Google Auth to Your Wasp File"),(0,o.kt)("p",null,"Let's start by properly configuring the Auth object:"),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    // 1. Specify the User entity (we\'ll define it next)\n    // highlight-next-line\n    userEntity: User,\n    methods: {\n      // 2. Enable Google Auth\n      // highlight-next-line\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    // 1. Specify the User entity (we\'ll define it next)\n    // highlight-next-line\n    userEntity: User,\n    methods: {\n      // 2. Enable Google Auth\n      // highlight-next-line\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"userEntity")," is explained in ",(0,o.kt)("a",{parentName:"p",href:"../../auth/social-auth/overview#social-login-entity"},"the social auth overview"),"."),(0,o.kt)("h3",{id:"2-adding-the-user-entity"},"2. Adding the User Entity"),(0,o.kt)("p",null,"Let's now define the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.auth.userEntity")," entity:"),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"// ...\n// 3. Define the User entity\n// highlight-next-line\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    // ...\npsl=}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"// ...\n// 3. Define the User entity\n// highlight-next-line\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    // ...\npsl=}\n")))),(0,o.kt)("h3",{id:"3-creating-a-google-oauth-app"},"3. Creating a Google OAuth App"),(0,o.kt)("p",null,"To use Google as an authentication method, you'll first need to create a Google project and provide Wasp with your client key and secret. Here's how you do it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Google Cloud Platform account if you do not already have one: ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/"},"https://cloud.google.com/")),(0,o.kt)("li",{parentName:"ol"},"Create and configure a new Google project here: ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/home/dashboard"},"https://console.cloud.google.com/home/dashboard"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google Console Screenshot 1",src:n(17460).Z,width:"2868",height:"1432"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google Console Screenshot 2",src:n(14860).Z,width:"2864",height:"1429"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Search for ",(0,o.kt)("strong",{parentName:"li"},"OAuth")," in the top bar, click on ",(0,o.kt)("strong",{parentName:"li"},"OAuth consent screen"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google Console Screenshot 3",src:n(85742).Z,width:"2860",height:"1430"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select what type of app you want, we will go with ",(0,o.kt)("strong",{parentName:"p"},"External"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 4",src:n(71942).Z,width:"2856",height:"1427"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fill out applicable information on Page 1."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 5",src:n(49848).Z,width:"2862",height:"1423"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On Page 2, Scopes, you should select ",(0,o.kt)("inlineCode",{parentName:"p"},"userinfo.profile"),". You can optionally search for other things, like ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 6",src:n(19412).Z,width:"2857",height:"1432"})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 7",src:n(77641).Z,width:"2855",height:"1432"})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 8",src:n(60003).Z,width:"2860",height:"1427"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add any test users you want on Page 3."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 9",src:n(79310).Z,width:"2861",height:"1423"})))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Next, click ",(0,o.kt)("strong",{parentName:"li"},"Credentials"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google Console Screenshot 10",src:n(49631).Z,width:"2861",height:"1430"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Create Credentials"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"OAuth client ID"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 11",src:n(50415).Z,width:"2857",height:"1425"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Complete the form"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 12",src:n(11092).Z,width:"2861",height:"1428"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under Authorized redirect URIs, put in: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/auth/google/callback")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 13",src:n(4731).Z,width:"2851",height:"1423"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Once you know on which URL(s) your API server will be deployed, also add those URL(s).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://your-server-url.com/auth/google/callback")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When you save, you can click the Edit icon and your credentials will be shown."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Console Screenshot 14",src:n(55777).Z,width:"2860",height:"1424"})))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Copy your Client ID and Client secret as you will need them in the next step.")),(0,o.kt)("h3",{id:"4-adding-environment-variables"},"4. Adding Environment Variables"),(0,o.kt)("p",null,"Add these environment variables to the ",(0,o.kt)("inlineCode",{parentName:"p"},".env.server")," file at the root of your project (take their values from the previous step):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env.server"',title:'".env.server"'},"GOOGLE_CLIENT_ID=your-google-client-id\nGOOGLE_CLIENT_SECRET=your-google-client-secret\n")),(0,o.kt)("h3",{id:"5-adding-the-necessary-routes-and-pages"},"5. Adding the Necessary Routes and Pages"),(0,o.kt)("p",null,"Let's define the necessary authentication Routes and Pages."),(0,o.kt)("p",null,"Add the following code to your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasp")," file:"),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\n// 6. Define the routes\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { Login } from "@src/pages/auth.jsx"\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\n// 6. Define the routes\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import { Login } from "@src/pages/auth.tsx"\n}\n')))),(0,o.kt)("p",null,"We'll define the React components for these pages in the ",(0,o.kt)(i.Z,{path:"src/pages/auth.{jsx,tsx}",mdxType:"FileExtSwitcher"})," file below."),(0,o.kt)("h3",{id:"6-create-the-client-pages"},"6. Create the Client Pages"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," to style the pages. Read more about how to add it ",(0,o.kt)("a",{parentName:"p",href:"../../project/css-frameworks"},"here"),".")),(0,o.kt)("p",null,"Let's now create a ",(0,o.kt)(i.Z,{path:"auth.{jsx,tsx}",mdxType:"FileExtSwitcher"})," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages"),".\nIt should have the following code:"),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/auth.jsx"',title:'"src/pages/auth.jsx"'},'import { LoginForm } from \'wasp/client/auth\'\n\nexport function Login() {\n  return (\n    <Layout>\n      <LoginForm />\n    </Layout>\n  )\n}\n\n// A layout component to center the content\nexport function Layout({ children }) {\n  return (\n    <div className="w-full h-full bg-white">\n      <div className="min-w-full min-h-[75vh] flex items-center justify-center">\n        <div className="w-full h-full max-w-sm p-5 bg-white">\n          <div>{children}</div>\n        </div>\n      </div>\n    </div>\n  )\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/auth.tsx"',title:'"src/pages/auth.tsx"'},'import { LoginForm } from \'wasp/client/auth\'\n\nexport function Login() {\n  return (\n    <Layout>\n      <LoginForm />\n    </Layout>\n  )\n}\n\n// A layout component to center the content\nexport function Layout({ children }: { children: React.ReactNode }) {\n  return (\n    <div className="w-full h-full bg-white">\n      <div className="min-w-full min-h-[75vh] flex items-center justify-center">\n        <div className="w-full h-full max-w-sm p-5 bg-white">\n          <div>{children}</div>\n        </div>\n      </div>\n    </div>\n  )\n}\n')))),(0,o.kt)("admonition",{title:"Auth UI",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Our pages use an automatically-generated Auth UI component. Read more about Auth UI components ",(0,o.kt)("a",{parentName:"p",href:"../../auth/ui"},"here"),".")),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Yay, we've successfully set up Google Auth! \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google Auth",src:n(64213).Z,width:"1315",height:"800"})),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp db migrate-dev")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp start")," should now give you a working app with authentication.\nTo see how to protect specific pages (i.e., hide them from non-authenticated users), read the docs on ",(0,o.kt)("a",{parentName:"p",href:"../../auth/overview"},"using auth"),"."),(0,o.kt)("h2",{id:"default-behaviour"},"Default Behaviour"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"google: {}")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.methods")," dictionary to use it with default settings:"),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      // highlight-next-line\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=main.wasp",title:"main.wasp"},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      // highlight-next-line\n      google: {}\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')))),(0,o.kt)(s.ZP,{mdxType:"DefaultBehaviour"}),(0,o.kt)("h2",{id:"overrides"},"Overrides"),(0,o.kt)(p.ZP,{mdxType:"OverrideIntro"}),(0,o.kt)("h3",{id:"data-received-from-google"},"Data Received From Google"),(0,o.kt)("p",null,"We are using Google's API and its ",(0,o.kt)("inlineCode",{parentName:"p"},"/userinfo")," endpoint to fetch the user's data."),(0,o.kt)("p",null,"The data received from Google is an object which can contain the following fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "name",\n  "given_name",\n  "family_name",\n  "email",\n  "email_verified",\n  "aud",\n  "exp",\n  "iat",\n  "iss",\n  "locale",\n  "picture",\n  "sub"\n]\n')),(0,o.kt)("p",null,"The fields you receive depend on the scopes you request. The default scope is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," only. If you want to get the user's email, you need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," scope in the ",(0,o.kt)("inlineCode",{parentName:"p"},"configFn")," function."),(0,o.kt)("small",null,(0,o.kt)("p",null,"For an up to date info about the data received from Google, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/openid-connect/openid-connect#an-id-tokens-payload"},"Google API documentation"),".")),(0,o.kt)("h3",{id:"using-the-data-received-from-google"},"Using the Data Received From Google"),(0,o.kt)(u.ZP,{mdxType:"OverrideExampleIntro"}),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      google: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/google.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\nentity User {=psl\n    id                        Int     @id @default(autoincrement())\n    username                  String  @unique\n    displayName               String\npsl=}\n\n// ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/auth/google.js",title:"src/auth/google.js"},"export const userSignupFields = {\n  username: () => \"hardcoded-username\",\n  displayName: (data) => data.profile.name,\n}\n\nexport function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      google: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/google.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n\nentity User {=psl\n    id                        Int     @id @default(autoincrement())\n    username                  String  @unique\n    displayName               String\npsl=}\n\n// ...\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/auth/google.ts",title:"src/auth/google.ts"},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n  username: () => \"hardcoded-username\",\n  displayName: (data: any) => data.profile.name,\n})\n\nexport function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n")),(0,o.kt)(g.ZP,{mdxType:"GetUserFieldsType"}))),(0,o.kt)("h2",{id:"using-auth"},"Using Auth"),(0,o.kt)(c.ZP,{mdxType:"UsingAuthNote"}),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)(m.ZP,{mdxType:"ApiReferenceIntro"}),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      google: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/google.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  auth: {\n    userEntity: User,\n    methods: {\n      google: {\n        // highlight-next-line\n        configFn: import { getConfig } from "@src/auth/google.js",\n        // highlight-next-line\n        userSignupFields: import { userSignupFields } from "@src/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/login"\n  },\n}\n')))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"google")," dict has the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"configfn-extimport"},(0,o.kt)("inlineCode",{parentName:"h4"},"configFn: ExtImport")),(0,o.kt)("p",{parentName:"li"},"This function must return an object with the scopes for the OAuth provider."),(0,o.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/auth/google.js",title:"src/auth/google.js"},"export function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/auth/google.ts",title:"src/auth/google.ts"},"export function getConfig() {\n  return {\n    scopes: ['profile', 'email'],\n  }\n}\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"usersignupfields-extimport"},(0,o.kt)("inlineCode",{parentName:"h4"},"userSignupFields: ExtImport")),(0,o.kt)(h.ZP,{mdxType:"UserSignupFieldsExplainer"}),(0,o.kt)("p",{parentName:"li"},"Read more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"userSignupFields")," function ",(0,o.kt)("a",{parentName:"p",href:"../overview#1-defining-extra-fields"},"here"),"."))))}x.isMDXComponent=!0},64213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/google-1b331473c46517711eeaa5695f2fcb63.png"},17460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-1-e2b7988470aeea737ce29aeea573fbad.jpg"},49631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-10-fbcac92ce4b2f0eadbbf2b6aed7a8b6b.jpg"},50415:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-11-732ab31edf7887dde031e1db69762a8c.jpg"},11092:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-12-49c63cc46853b594eaf83d1ef918fe7e.jpg"},4731:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-13-e2516dea25af3c8c37475f077ecf7368.jpg"},55777:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-14-ba3f829c32d4e8bd8429662add56a5b6.jpg"},14860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-2-7e4bd9295f260173ea1a0f8a5177ac74.jpg"},85742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-3-19147010e16baf7e68c86e84aebec158.jpg"},71942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-4-7f063b6cbb9da5ebff47a5e34ef602b7.jpg"},49848:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-5-3b7b41e3fd443156065fbf570f255d84.jpg"},19412:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-6-bc415d69af6b171e121a32c181bd1a45.jpg"},77641:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-7-a6f72bb8d3c88ce03c9d14708a6e5334.jpg"},60003:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-8-7dac6d0717e61d3794d22d2d7081ab72.jpg"},79310:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/integrations-google-9-eae399fe308c4661d0d1ab184d72f54c.jpg"}}]);