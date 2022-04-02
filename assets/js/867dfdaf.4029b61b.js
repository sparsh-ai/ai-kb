"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8624],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=p(r),m=n,u=g["".concat(s,".").concat(m)]||g[m]||b[m]||o;return r?a.createElement(u,l(l({ref:e},c),{},{components:r})):a.createElement(u,l({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19232:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return b}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={},s="MLOps",p={unversionedId:"tutorials/mlops",id:"tutorials/mlops",title:"MLOps",description:"| Description | Notebook |",source:"@site/docs/04-tutorials/mlops.mdx",sourceDirName:"04-tutorials",slug:"/tutorials/mlops",permalink:"/ai-kb/docs/tutorials/mlops",editUrl:"https://github.com/sparsh-ai/ai-kb/docs/04-tutorials/mlops.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix Factorizations",permalink:"/ai-kb/docs/tutorials/matrix-factorizations"},next:{title:"Model Optimization",permalink:"/ai-kb/docs/tutorials/model-optimization"}},c={},b=[],g={toc:b};function m(t){var e=t.components,r=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mlops"},"MLOps"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Notebook"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLOps Basics"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-07-30-mlops.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLOps with TFX Pipeline"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-25-mlops-tfx.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLOps Optimus"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-mlops-optimus.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Apache Airflow"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-apache-airflow.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dbt Postgres Data pipeline"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-dbt.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Running Great Expectations Pipeline in Airflow"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-ge-airflow.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Validation with Great Expectations toolkit"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-ge.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLFlow Part 1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-mlflow-part1.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLFlow Part 2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-mlflow-part2.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLFlow Part 3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-mlflow-part3.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLFlow Part 4"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-mlflow-part4.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLFlow Part 5"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-mlflow-part5.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MLFlow Part 6"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-02-01-mlflow-part6.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))))))}m.isMDXComponent=!0}}]);