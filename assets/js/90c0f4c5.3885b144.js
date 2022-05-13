"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4590],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45360:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),o=n(39960),i=n(63725),c=n(86010),a="cardContainer_woeA",u="cardContainerLink_iOSj",s="cardTitle_pNjP",l="cardDescription_qC_k",m=n(13919),p=n(95999);function d(e){var t=e.href,n=e.children,i=(0,c.Z)("card margin-bottom--lg padding--lg",a,t&&u);return t?r.createElement(o.Z,{href:t,className:i},n):r.createElement("div",{className:i},n)}function f(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",s),title:o},n," ",o),r.createElement("div",{className:(0,c.Z)("text--truncate",l),title:i},i))}function y(e){var t=e.item,n=(0,i.Wl)(t);return r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function b(e){var t,n=e.item,o=(0,m.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:o,title:n.label,description:null==c?void 0:c.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(b,{item:t});case"category":return r.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items;return r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6"},r.createElement(h,{item:e}))})))}},44552:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=n(45360),a=n(63725),u=["components"],s={},l="Documentation",m={unversionedId:"best-practices/documentation/documentation",id:"best-practices/documentation/documentation",title:"Documentation",description:"In the following sections, we will more systematically introduce the following items:",source:"@site/docs/07-best-practices/documentation/documentation.md",sourceDirName:"07-best-practices/documentation",slug:"/best-practices/documentation/",permalink:"/ai-kb/docs/best-practices/documentation/",editUrl:"https://github.com/sparsh-ai/ai-kb/docs/07-best-practices/documentation/documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FastAPI Localhost",permalink:"/ai-kb/docs/best-practices/api/fastapi-localhost"},next:{title:"Docusaurus",permalink:"/ai-kb/docs/best-practices/documentation/docusaurus"}},p={},d=[],f={toc:d};function y(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"In the following sections, we will more systematically introduce the following items:"),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);