"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2},r=void 0,s={unversionedId:"Lexicon",id:"Lexicon",title:"Lexicon",description:"With ECS and other Data Oriented patterns / techniques, an extensive vocabulary is born. As time continues this will be fleshed out and extended upon.",source:"@site/docs/Lexicon.md",sourceDirName:".",slug:"/Lexicon",permalink:"/Stew/docs/Lexicon",draft:!1,editUrl:"https://github.com/solarscuffle-bot/stew/edit/main/docs/Lexicon.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/Stew/docs/intro"},next:{title:"Common Patterns",permalink:"/Stew/docs/Common Patterns"}},c={},l=[{value:"What is an Entity?",id:"what-is-an-entity",level:2},{value:"What is a Component?",id:"what-is-a-component",level:2},{value:"What does it mean to be Dynamic?",id:"what-does-it-mean-to-be-dynamic",level:3},{value:"What does it mean to be during Runtime?",id:"what-does-it-mean-to-be-during-runtime",level:3},{value:"What is a System?",id:"what-is-a-system",level:2},{value:"What is a Transform?",id:"what-is-a-transform",level:3},{value:"What is a World?",id:"what-is-a-world",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With ECS and other Data Oriented patterns / techniques, an extensive vocabulary is born. As time continues this will be fleshed out and extended upon."),(0,i.kt)("h2",{id:"what-is-an-entity"},"What is an Entity?"),(0,i.kt)("p",null,"An entity is a unique identifier used to access components. They represent a single ",(0,i.kt)("em",{parentName:"p"},"thing")," in your world. In lua this is trivial with the efficient implementations of hash maps. Because of this superpower, anything that can be hashed can be used as an entity, and in lua that's basically everything. So in short, entities can be anything as long as they are unique."),(0,i.kt)("h2",{id:"what-is-a-component"},"What is a Component?"),(0,i.kt)("p",null,"A component is a fundamental unit of data. Components are used to represent instantiable state. Each entity will have its own set of components. The combination of components simulates an implicit type that can change at runtime. By creating and deleting components, you can take advantage of dynamic runtime polymorphism. For more information about polymorphism and its usecases, refer to online resources with the context this was first introduced with Object Oriented Design."),(0,i.kt)("h3",{id:"what-does-it-mean-to-be-dynamic"},"What does it mean to be Dynamic?"),(0,i.kt)("p",null,"This means changeable, or not static / constant."),(0,i.kt)("h3",{id:"what-does-it-mean-to-be-during-runtime"},"What does it mean to be during Runtime?"),(0,i.kt)("p",null,"This means as the program runs, not during compilation or before."),(0,i.kt)("h2",{id:"what-is-a-system"},"What is a System?"),(0,i.kt)("p",null,"A system is a transform that operates on a set of entities with certain components."),(0,i.kt)("h3",{id:"what-is-a-transform"},"What is a Transform?"),(0,i.kt)("p",null,"This is a procedure that takes in a certain number of inputs, processes them, and potentially returns a certain number of outputs. More information can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.dataorienteddesign.com/dodbook/node9.html#SECTION00950000000000000000"},"Data Oriented Design")," book by Richard Fabian."),(0,i.kt)("h2",{id:"what-is-a-world"},"What is a World?"),(0,i.kt)("p",null,"A world is an instantiable container for all entities, components, and other state. You create entities and components in worlds, and you can create different components in different worlds. Without worlds, Stew would be a singleton which has serious drawbacks and violates the conditions for transforms."))}u.isMDXComponent=!0}}]);