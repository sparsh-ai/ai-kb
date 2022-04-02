"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6492],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||n;return a?i.createElement(g,o(o({ref:t},d),{},{components:a})):i.createElement(g,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},44927:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var i=a(87462),r=a(63366),n=(a(67294),a(3905)),o=["components"],l={title:"Image Similarity System",authors:"sparsh",tags:["aws beanstalk","flask","similarity","vision"]},s="Framework",c={permalink:"/ai-kb/blog/2021/10/01/image-similarity-system",source:"@site/blog/2021-10-01-image-similarity-system.mdx",title:"Image Similarity System",description:"/img/content-blog-raw-blog-image-similarity-system-untitled.png",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"aws beanstalk",permalink:"/ai-kb/blog/tags/aws-beanstalk"},{label:"flask",permalink:"/ai-kb/blog/tags/flask"},{label:"similarity",permalink:"/ai-kb/blog/tags/similarity"},{label:"vision",permalink:"/ai-kb/blog/tags/vision"}],readingTime:3.045,truncated:!1,authors:[{name:"Sparsh Agarwal",title:"Principal Developer",url:"https://github.com/sparsh-ai",imageURL:"https://avatars.githubusercontent.com/u/62965911?v=4",key:"sparsh"}],frontMatter:{title:"Image Similarity System",authors:"sparsh",tags:["aws beanstalk","flask","similarity","vision"]},prevItem:{title:"Fake Voice Detection",permalink:"/ai-kb/blog/2021/10/01/fake-voice-detection"},nextItem:{title:"Insurance Personalization",permalink:"/ai-kb/blog/2021/10/01/insurance-personalization"}},d={authorsImageUrls:[void 0]},m=[{value:"Image Encoder",id:"image-encoder",level:3},{value:"Vector Similarity System",id:"vector-similarity-system",level:3},{value:"Dataset",id:"dataset",level:3},{value:"Step 1: Data Acquisition",id:"step-1-data-acquisition",level:3},{value:"Step 2: Encoder Fine-tuning",id:"step-2-encoder-fine-tuning",level:3},{value:"Step 3: Image Vectorization",id:"step-3-image-vectorization",level:3},{value:"Step 4: Metadata and Indexing",id:"step-4-metadata-and-indexing",level:3},{value:"Step 5: API Call",id:"step-5-api-call",level:3}],p={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"/img/content-blog-raw-blog-image-similarity-system-untitled.png",src:a(86130).Z,width:"1289",height:"545"})),(0,n.kt)("h1",{id:"choice-of-variables"},"Choice of variables"),(0,n.kt)("h3",{id:"image-encoder"},"Image Encoder"),(0,n.kt)("p",null,"We can select any pre-trained image classification model. These models are commonly known as encoders because their job is to encode an image into a feature vector. I analyzed four encoders named 1) MobileNet, 2) EfficientNet, 3) ResNet and 4) ",(0,n.kt)("a",{parentName:"p",href:"https://tfhub.dev/google/bit/m-r152x4/1"},"BiT"),". After basic research, I decided to select BiT model because of its performance and state-of-the-art nature. I selected the BiT-M-50x3 variant of model which is of size 748 MB. More details about this architecture can be found on the official page ",(0,n.kt)("a",{parentName:"p",href:"https://tfhub.dev/google/bit/m-r50x3/1"},"here"),". "),(0,n.kt)("h3",{id:"vector-similarity-system"},"Vector Similarity System"),(0,n.kt)("p",null,"Images are represented in a fixed-length feature vector format. For the given input vector, we need to find the TopK most similar vectors, keeping the memory efficiency and real-time retrival objective in mind. I explored the most popular techniques and listed down five of them: Annoy, Cosine distance, L1 distance, Locally Sensitive Hashing (LSH) and Image Deep Ranking. I selected Annoy because of its fast and efficient nature. More details about Annoy can be found on the official page ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spotify/annoy"},"here"),"."),(0,n.kt)("h3",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"I listed down 3 datasets from Kaggle that were best fitting the criteria of this use case: 1) ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/bhaskar2443053/fashion-small?"},"Fashion Product Images (Small)"),", 2) ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/trolukovich/food11-image-dataset?"},"Food-11 image dataset")," and 3) ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/jessicali9530/caltech256?"},"Caltech 256 Image Dataset"),". I selected Fashion dataset and Foods dataset."),(0,n.kt)("h1",{id:"literature-review"},"Literature review"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Determining Image similarity with Quasi-Euclidean Metric ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2006.14644v1"},"arxiv")),(0,n.kt)("li",{parentName:"ul"},"CatSIM: A Categorical Image Similarity Metric ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.09073v1"},"arxiv")),(0,n.kt)("li",{parentName:"ul"},"Central Similarity Quantization for Efficient Image and Video Retrieval ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1908.00347v5"},"arxiv")),(0,n.kt)("li",{parentName:"ul"},"Improved Deep Hashing with Soft Pairwise Similarity for Multi-label Image Retrieval ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1803.02987v3"},"arxiv")),(0,n.kt)("li",{parentName:"ul"},"Model-based Behavioral Cloning with Future Image Similarity Learning ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1910.03157v1"},"arxiv")),(0,n.kt)("li",{parentName:"ul"},"Why do These Match? Explaining the Behavior of Image Similarity Models ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1905.10797v1"},"arxiv")),(0,n.kt)("li",{parentName:"ul"},"Learning Non-Metric Visual Similarity for Image Retrieval ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1709.01353v2"},"arxiv"))),(0,n.kt)("h1",{id:"process-flow"},"Process Flow"),(0,n.kt)("h3",{id:"step-1-data-acquisition"},"Step 1: Data Acquisition"),(0,n.kt)("p",null,"Download the raw image dataset into a directory. Categorize these images into their respective category directories. Make sure that images are of the same type, JPEG recommended. We will also process the metadata and store it in a serialized file, CSV recommended. "),(0,n.kt)("h3",{id:"step-2-encoder-fine-tuning"},"Step 2: Encoder Fine-tuning"),(0,n.kt)("p",null,"Download the pre-trained image model and add two additional layers on top of that: the first layer is a feature vector layer and the second layer is the classification layer. We will only train these 2 layers on our data and after training, we will select the feature vector layer as the output of our fine-tuned encoder. After fine-tuning the model, we will save the feature extractor for later use."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"Fig: a screenshot of encoder fine-tuning process",src:a(90030).Z,width:"1195",height:"333"})),(0,n.kt)("p",null,"Fig: a screenshot of encoder fine-tuning process"),(0,n.kt)("h3",{id:"step-3-image-vectorization"},"Step 3: Image Vectorization"),(0,n.kt)("p",null,"Now, we will use the encoder (prepared in step 2) to encode the images (prepared in step 1). We will save feature vector of each image as an array in a directory. After processing, we will save these embeddings for later use."),(0,n.kt)("h3",{id:"step-4-metadata-and-indexing"},"Step 4: Metadata and Indexing"),(0,n.kt)("p",null,"We will assign a unique id to each image and create dictionaries to locate information of this image: 1) Image id to Image name dictionary, 2) Image id to image feature vector dictionary, and 3) (optional) Image id to metadata product id dictionary. We will also create an image id to image feature vector indexing. Then we will save these dictionaries and index object for later use."),(0,n.kt)("h3",{id:"step-5-api-call"},"Step 5: API Call"),(0,n.kt)("p",null,"We will receive an image from user, encode it with our image encoder, find TopK similar vectors using Indexing object, and retrieve the image (and metadata) using dictionaries. We send these images (and metadata) back to the user."),(0,n.kt)("h1",{id:"deployment"},"Deployment"),(0,n.kt)("p",null,"The API was deployed on AWS cloud infrastructure using AWS Elastic Beanstalk service."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"/img/content-blog-raw-blog-image-similarity-system-untitled-2.png",src:a(89401).Z,width:"1883",height:"593"})))}u.isMDXComponent=!0},90030:function(e,t,a){t.Z=a.p+"assets/images/content-blog-raw-blog-image-similarity-system-untitled-1-66cd649b6c0e03c173f3e0734b2b3312.png"},89401:function(e,t,a){t.Z=a.p+"assets/images/content-blog-raw-blog-image-similarity-system-untitled-2-ca3d98690fca750590d55d9899c4d862.png"},86130:function(e,t,a){t.Z=a.p+"assets/images/content-blog-raw-blog-image-similarity-system-untitled-59c540a72e9f8afbece0d5a9bd41f513.png"}}]);