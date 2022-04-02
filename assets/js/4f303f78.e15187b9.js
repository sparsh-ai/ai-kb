"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3221],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69289:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Name & Address Parsing",authors:"sparsh",tags:["app","flask","ner","nlp"]},l=void 0,d={permalink:"/ai-kb/blog/2021/10/01/name-&-address-parsing",source:"@site/blog/2021-10-01-name-&-address-parsing.mdx",title:"Name & Address Parsing",description:"/img/content-blog-raw-blog-name-&-address-parsing-untitled.png",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"app",permalink:"/ai-kb/blog/tags/app"},{label:"flask",permalink:"/ai-kb/blog/tags/flask"},{label:"ner",permalink:"/ai-kb/blog/tags/ner"},{label:"nlp",permalink:"/ai-kb/blog/tags/nlp"}],readingTime:3.8,truncated:!1,authors:[{name:"Sparsh Agarwal",title:"Principal Developer",url:"https://github.com/sparsh-ai",imageURL:"https://avatars.githubusercontent.com/u/62965911?v=4",key:"sparsh"}],frontMatter:{title:"Name & Address Parsing",authors:"sparsh",tags:["app","flask","ner","nlp"]},prevItem:{title:"Insurance Personalization",permalink:"/ai-kb/blog/2021/10/01/insurance-personalization"},nextItem:{title:"Object Detection Hands-on Exercises",permalink:"/ai-kb/blog/2021/10/01/object-detection-hands-on-exercises"}},p={authorsImageUrls:[void 0]},c=[{value:"List of Entities",id:"list-of-entities",level:3},{value:"Endpoint Configuration",id:"endpoint-configuration",level:3},{value:"Process Flow",id:"process-flow",level:3},{value:"API",id:"api",level:3}],u={toc:c};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"/img/content-blog-raw-blog-name-&amp;-address-parsing-untitled.png",src:n(64935).Z,width:"700",height:"342"})),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Create an API that can parse and classify names and addresses given a string. We tried ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datamade/probablepeople"},"probablepeople")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datamade/usaddress"},"usaddress"),". These work well separately but need the functionality of these packages combined, and better accuracy than what probablepeople provides.\nFor the API, I'd like to mimic ",(0,o.kt)("a",{parentName:"p",href:"https://parserator.datamade.us/api-docs/"},"this")," with some minor modifications.\nA few examples: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"KING JOHN A 5643 ROUTH CREEK PKWY #1314 RICHARDSON TEXAS 750820146 UNITED STATES OF AMERICA" would return type: person; first_name: JOHN; last_name: KING; middle: A; street_address: 5643 ROUTH CREEK PKWY #1314; city: RICHARDSON; state: TEXAS; zip: 75082-0146; country: UNITED STATES OF AMERICA.'),(0,o.kt)("li",{parentName:"ul"},'"THRM NGUYEN LIVING TRUST 2720 SUMMERTREE CARROLLTON HOUSTON TEXAS 750062646 UNITED STATES OF AMERICA" would return type: entity; name: THRM NGUYEN LIVING TRUST; street_address: 2720 SUMMERTREE CARROLLTON; state: TEXAS; city: HOUSTON; zip: 75006-2646; country: UNITED STATES OF AMERICA.')),(0,o.kt)("h1",{id:"modeling-approach"},"Modeling Approach"),(0,o.kt)("h3",{id:"list-of-entities"},"List of Entities"),(0,o.kt)("p",null,"List of Entities A - Person, Household, Corporation"),(0,o.kt)("p",null,"List of Entities B - Person First name, Person Middle name, Person Last name, Street address, City, State, Pincode, Country, Company name"),(0,o.kt)("h3",{id:"endpoint-configuration"},"Endpoint Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OOR Endpoint")),(0,o.kt)("p",null,"Input Instance: ANDERSON, EARLINE 1423 NEW YORK AVE FORT WORTH, TX 76104 7522"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Output Tags:-\n<Type> - Person/Household/Corporation\n<GivenName>, <MiddleName>, <Surname> - if Type Person/Household\n<Name> - Full Name - if Type Person \n<Name> - Household - if Type Household\n<Name> - Corporation - If Type Corporation\n<Address> - Full Address\n<StreetAddress>, <City>, <State>, <Zipcode>, <Country>\n~~NameConfidence, AddrConfidence~~\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Name Endpoint")),(0,o.kt)("p",null,"Input Instance: ANDERSON, EARLINE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Output Tags:-\n\n- <Type> - Person/Household/Corporation\n- <GivenName>, <MiddleName>, <Surname> - if Type Person/Household\n- <Name> - Full Name - if Type Person\n- <Name> - Household - if Type Household\n- <Name> - Corporation - If Type Corporation\n- ~~NameConfidence~~\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Address Endpoint")),(0,o.kt)("p",null,"Input Instance: 1423 NEW YORK AVE FORT WORTH, TX 76104 7522"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Output Tags:-\n\n- <Address> - Full Address\n- <StreetAddress>, <City>, <State>, <Zipcode>, <Country>\n- ~~AddrConfidence~~\n")),(0,o.kt)("h3",{id:"process-flow"},"Process Flow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pytorch Flair NER model"),(0,o.kt)("li",{parentName:"ul"},"Pre trained word embeddings"),(0,o.kt)("li",{parentName:"ul"},"Additional parsing models on top of name tags"),(0,o.kt)("li",{parentName:"ul"},"Tagging of 1000+ records to create training data"),(0,o.kt)("li",{parentName:"ul"},"Deployment as REST api with 3 endpoints - name parse, address parse and whole string parse")),(0,o.kt)("h1",{id:"framework"},"Framework"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"/img/content-blog-raw-blog-name-&amp;-address-parsing-untitled-1.png",src:n(6513).Z,width:"1299",height:"447"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"/img/content-blog-raw-blog-name-&amp;-address-parsing-untitled-2.png",src:n(55313).Z,width:"1302",height:"534"})),(0,o.kt)("h1",{id:"tagging-process"},"Tagging process"),(0,o.kt)("p",null,"I used Doccano (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/doccano/doccano"},"https://github.com/doccano/doccano"),") for labeling the dataset. This tool is open-source and free to use. I deployed it with a one-click Heroku service (fig 1). After launching the app, log in with the provided credentials, and create a project (fig 2). Create the labels and upload the dataset (fig 3). Start the annotation process (fig 4). Now after enough annotations (you do not need complete all annotations in one go), go back to projects > edit section and export the data (fig 5). Bring the exported JSON file in python and run the model training code. The whole model will automatically get trained on the new annotations. To make the training faster, you can use Nvidia GPU support."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"fig 1: screenshot taken from Doccano&#39;s github page",src:n(32541).Z,width:"435",height:"323"})),(0,o.kt)("p",null,"fig 1: screenshot taken from Doccano's github page"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"fig 2: Doccano&#39;s deployed app homepage",src:n(66934).Z,width:"1166",height:"675"})),(0,o.kt)("p",null,"fig 2: Doccano's deployed app homepage"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"fig 3: create the labels. I defined these labels for my project",src:n(4634).Z,width:"1349",height:"623"})),(0,o.kt)("p",null,"fig 3: create the labels. I defined these labels for my project"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"fig 5: export the annotations",src:n(87808).Z,width:"1342",height:"260"})),(0,o.kt)("p",null,"fig 5: export the annotations"),(0,o.kt)("h1",{id:"model"},"Model"),(0,o.kt)("p",null,"I first tried the Spacy NER blank model but it was not giving high-quality results. So I moved to the PyTorch Flair NER model. This model was a way faster (5 min training because of GPU compatibility comparing to 1-hour Spacy training time) and also much more accurate. F1 results for all tags were near perfect (score of 1).  This score will increase further with more labeled data. This model is production-ready."),(0,o.kt)("h1",{id:"inference"},"Inference"),(0,o.kt)("p",null,"For OOR, I directly used the model's output for core tagging and created the aggregated tags like recipient (aggregation of name tags) and address (aggregation of address tags like city and state) using simple conditional concatenation. For only Name and only Address inference, I added the dummy address in name text and dummy name in address text. This way, I passed the text in same model and later on filtered the required tags as output. "),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("p",null,"I used Flask REST framework in Python to build the API with 3 endpoints. This API is production-ready."),(0,o.kt)("h1",{id:"results-and-discussion"},"Results and Discussion"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"0.99 F1 score on 6 out of 8 tags & 0.95+ F1 score on other 2 tags"),(0,o.kt)("li",{parentName:"ul"},"API inference time of less than 1 second on single CPU")))}g.isMDXComponent=!0},6513:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-name-&-address-parsing-untitled-1-0c56bfea9f214ccebee859fd1f6d5b33.png"},55313:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-name-&-address-parsing-untitled-2-bf22e8e0a5e1f39628fdb8d05e2e14b7.png"},32541:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-name-&-address-parsing-untitled-3-ad825b4a9077c68bb1069d9c595af800.png"},66934:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-name-&-address-parsing-untitled-4-3b2954d0a30a62e7231f231eeccd0604.png"},4634:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-name-&-address-parsing-untitled-5-c02e457933ab867810fe666c34fb4e76.png"},87808:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-name-&-address-parsing-untitled-6-6de4153eff54d52c35fd5c0bed123a3d.png"},64935:function(e,t,n){t.Z=n.p+"assets/images/content-blog-raw-blog-name-&-address-parsing-untitled-35aab4c126484cf369b9cf212de0564a.png"}}]);