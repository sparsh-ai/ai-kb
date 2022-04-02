"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[816],{3905:function(e,t,r){r.d(t,{Zo:function(){return b},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(u,i(i({ref:t},b),{},{components:r})):n.createElement(u,i({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74226:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={},l="Word2vec",s={unversionedId:"tutorials/word2vec",id:"tutorials/word2vec",title:"Word2vec",description:"| Description | Notebook |",source:"@site/docs/04-tutorials/word2vec.mdx",sourceDirName:"04-tutorials",slug:"/tutorials/word2vec",permalink:"/ai-kb/docs/tutorials/word2vec",editUrl:"https://github.com/sparsh-ai/ai-kb/docs/04-tutorials/word2vec.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector Search",permalink:"/ai-kb/docs/tutorials/vector-search"},next:{title:"Tools",permalink:"/ai-kb/docs/tools/"}},b={},m=[],p={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"word2vec"},"Word2vec"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Notebook"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Retail Product Recommendations using word2vec"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-04-24-rec-medium-word2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Session-based recommendation using word2vec"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-06-11-recostep-session-based-recommender-using-word2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Amazon Product Recommender"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-07-10-amazon-women-apparel-tfidf-word2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Song Embeddings - Skipgram Recommender"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-07-10-song-recommender-skipgram-word2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"In-session Recommendation in eCommerce"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-07-19-session-based-prod2vec-coveo.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"How to Build a Session-based Recommender using Word2vec"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-07-27-session-based-word2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Training Session-based Product Recommender using Word2vec on Retail data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-12-sess-word2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Behavioral testing and evaluation of the Prod2vec model on Coveo dataset"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-19-prod2vec-beh.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Word2vec Skip-gram model in PyTorch - Simple and with Negative sampling"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-26-word2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Word2vec recsys on ML-1m"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T575724%20%7C%20Word2vec%20RecSys%20on%20ML-1m.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Word2vec on Amazon Electronics"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/recograph-05-word2vec-amazon-electronics.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))))))}d.isMDXComponent=!0}}]);