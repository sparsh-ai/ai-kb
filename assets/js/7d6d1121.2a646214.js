"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5024],{3905:function(t,e,a){a.d(e,{Zo:function(){return g},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),b=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},g=function(t){var e=b(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,g=s(t,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||c[d]||o;return a?r.createElement(m,l(l({ref:e},g),{},{components:a})):r.createElement(m,l({ref:e},g))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var b=2;b<o;b++)l[b]=a[b];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},34643:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],s={},i="Graph-based Modeling",b={unversionedId:"tutorials/graph",id:"tutorials/graph",title:"Graph-based Modeling",description:"General",source:"@site/docs/04-tutorials/graph.mdx",sourceDirName:"04-tutorials",slug:"/tutorials/graph",permalink:"/ai-kb/docs/tutorials/graph",editUrl:"https://github.com/sparsh-ai/ai-kb/docs/04-tutorials/graph.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email Classification",permalink:"/ai-kb/docs/tutorials/email-classification"},next:{title:"Kubernetes",permalink:"/ai-kb/docs/tutorials/kubernetes"}},g={},c=[{value:"General",id:"general",level:2},{value:"Node2vec",id:"node2vec",level:2}],p={toc:c};function d(t){var e=t.components,a=(0,n.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graph-based-modeling"},"Graph-based Modeling"),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Notebook"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PinSAGE"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-06-23-pinsage-graph-movielens-1m.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graph Benchmarks"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-21-graph-benchmarks.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graph embeddings using SDNE"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-22-graph-sdne.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graph Embeddings using Autoencoder"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-30-graph-ae.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graph Embeddings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-30-graph-embedding.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graph Properties"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-30-graph-properties.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contextualized Knowledge Graph Embedding"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T403235%20%7C%20Contextualized%20Knowledge%20Graph%20Embedding.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"KHGT knowledge graph embeddings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T457098%20%7C%20KHGT%20knowledge%20graph%20embeddings.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Learn Embeddings using Graph Networks"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T516490%20%7C%20Learn%20embeddings%20using%20Graph%20Networks.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Learning Graph Embeddings of Gowalla Dataset using HMLET Model"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T611269%20%7C%20Learning%20Graph%20Embeddings%20of%20Gowalla%20Dataset%20using%20HMLET%20Model.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graph ML Embeddings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T674201%20%7C%20Graph%20embeddings.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Graph embeddings using Convnet Stellargraph"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T873032%20%7C%20Graph%20embeddings%20using%20Convnet%20Stellargraph.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2vec, Edge2vec, and Graph2vec"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T926278%20%7C%20Node2vec%2C%20Edge2vec%2C%20and%20Graph2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))))),(0,o.kt)("h2",{id:"node2vec"},"Node2vec"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Notebook"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2vec from scratch"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-22-node2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Recommender System with Node2vec Graph Embeddings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-04-24-Recommendation-Node2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2Vec TF2.0"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-23-node2vec-tf.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2vec in PyTorch Geometric on CORA dataset"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T611050%20%7C%20Node2vec%20in%20PyTorch%20Geometric%20on%20CORA%20dataset.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2vec on Karateclub"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T815556%20%7C%20Node2vec%20on%20Karateclub.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2vec on ML-latest in Keras"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T894941%20%7C%20Node2vec%20on%20ML-latest%20in%20Keras.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2vec, Edge2vec, and Graph2vec"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/T926278%20%7C%20Node2vec%2C%20Edge2vec%2C%20and%20Graph2vec.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node2vec ML-100k"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/recograph-04-node2vec-movielens-100k.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Learn embeddings using Graph Networks"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-06-25-graph-network-learn-embeddings.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grocery Recommendation using Graph Network"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-07-23-grocery-recommendation-using-graph-network.ipynb",alt:""}," ",(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))))))}d.isMDXComponent=!0}}]);