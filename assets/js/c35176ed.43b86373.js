"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2180],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,u=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},33105:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},s="Model Retraining",c={unversionedId:"concepts/model-retraining",id:"concepts/model-retraining",title:"Model Retraining",description:"Concept Drift",source:"@site/docs/03-concepts/model-retraining.mdx",sourceDirName:"03-concepts",slug:"/concepts/model-retraining",permalink:"/ai-kb/docs/concepts/model-retraining",editUrl:"https://github.com/sparsh-ai/ai-kb/docs/03-concepts/model-retraining.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model Deployment",permalink:"/ai-kb/docs/concepts/model-deployment"},next:{title:"Models",permalink:"/ai-kb/docs/concepts/models"}},d={},m=[{value:"Concept Drift",id:"concept-drift",level:2},{value:"<strong>How to monitor data drift in production</strong>",id:"how-to-monitor-data-drift-in-production",level:3},{value:"<strong>Data drift vs concept drift</strong>",id:"data-drift-vs-concept-drift",level:3},{value:"A spectrum of model freshness",id:"a-spectrum-of-model-freshness",level:2},{value:"Scikit warm-start",id:"scikit-warm-start",level:2},{value:"Scaling with instances using out-of-core learning",id:"scaling-with-instances-using-out-of-core-learning",level:3},{value:"Streaming instances",id:"streaming-instances",level:3},{value:"Extracting features",id:"extracting-features",level:3},{value:"Incremental learning",id:"incremental-learning",level:3},{value:"References",id:"references",level:2}],p={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"model-retraining"},"Model Retraining"),(0,i.kt)("h2",{id:"concept-drift"},"Concept Drift"),(0,i.kt)("p",null,"Model Drift refers to a model\u2019s predictive performance degrading over time due to a change in the environment that violates the model\u2019s assumptions. Predictive performance will degrade, it will degrade over some period of time and at some rate, and this degradation will be due to changes in the environment that violate the modeling assumptions. Each of these variables should be taken into account when determining how to diagnose model drift and how to correct it through model retraining."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Model drift is a bit of a misnomer because it\u2019s not the model that is changing, but rather the environment in which the model is operating. For that reason, the term\xa0",(0,i.kt)("a",{parentName:"p",href:"https://machinelearningmastery.com/gentle-introduction-concept-drift-machine-learning/"},"concept drift"),"\xa0may actually be a better name, but both terms describe the same phenomenon."))),(0,i.kt)("p",null,"As soon as you deploy your machine learning model in production, the performance of your model degrades. This is because your model is sensitive to changes in the real world, and user behaviour keeps changing with time. Although all machine learning models decay, the speed of decay varies with time. This is mostly caused by data drift, concept drift, or both."),(0,i.kt)("p",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:"https://github.com/recohut/incremental-learning/raw/a6fdcde2e8af7ebfd9f5efd278c487e0e9560cb3/docs/_images/L194114_1.png"}))),(0,i.kt)("p",null,"Data drift (covariate shift) is a change in the statistical distribution of production data from the baseline data used to train or build the model. Data from real-time serving can drift from the baseline data due to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Changes in the real world,"),(0,i.kt)("li",{parentName:"ul"},"Training data not being a representation of the population,"),(0,i.kt)("li",{parentName:"ul"},"Data quality issues like outliers in the dataset.")),(0,i.kt)("p",null,"For example, if you built a model with temperature data collected from a sensor in Celsius degrees, but the unit changed to Fahrenheit \u2013 it means there\u2019s been a change in your input data, so the data has drifted."),(0,i.kt)("h3",{id:"how-to-monitor-data-drift-in-production"},(0,i.kt)("strong",{parentName:"h3"},"How to monitor data drift in production")),(0,i.kt)("p",null,"The best approach to handling data drift is to continuously monitor your data with advanced MLOps tools instead of using traditional rule-based methods. Rule based methods, like calculating the data range or comparing data attributes to detect alien values, can be time-consuming and are susceptible to error."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps you can take to detect data drift:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Take advantage of the\xa0",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence"},"JS-Divergence algorithm"),"\xa0to identify prediction drift in real-time model output and compare it with training data."),(0,i.kt)("li",{parentName:"ol"},"Compare the data distribution from both upstream and downstream data to view the actual difference.")),(0,i.kt)("p",null,"As mentioned above, you can also take advantage of the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.fiddler.ai/"},"Fiddler AI"),"\xa0platform to monitor data drift in production."),(0,i.kt)("h3",{id:"data-drift-vs-concept-drift"},(0,i.kt)("strong",{parentName:"h3"},"Data drift vs concept drift")),(0,i.kt)("p",null,"It\u2019s an obvious fact that data is generated at every moment in the world. As data is collected from multiple sources, data itself is changing. This change can be due to the dynamic nature of the data, or it can be caused by changes in the real world."),(0,i.kt)("p",null,"If the input distribution changes but the true labels don\u2019t (the probability of the model\u2019s input changes but the probability of the target class given the probability of the model input doesn\u2019t change), then this kind of change is considered as data drift."),(0,i.kt)("p",null,"Meanwhile, if there\u2019s a change in the labels or target classes of your model, that is the probability of the target class changes given the probability of the input data. This means we\u2019re detecting the effect of concept drift. Both data drift and concept drift cause model decay and should both be addressed separately."),(0,i.kt)("h2",{id:"a-spectrum-of-model-freshness"},"A spectrum of model freshness"),(0,i.kt)("p",null,"We can think of model retraining approaches as a hierarchy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level 0:"),"\xa0Train the model once and never retrain it. This is appropriate for \u201cstationary\u201d problems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level 1 (\u201ccold-start retraining\u201d):"),"\xa0Periodically retrain the whole model on a batch dataset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level 2 (\u201cwarm-start retraining\u201d):"),"\xa0In addition to Level 1, if the model has personalized per-key components, retrain just these in bulk on data specific to each key (e.g., all impressions of an advertiser's ads), once enough data has accumulated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level 3 (\u201cnearline retraining\u201d):"),"\xa0In addition to Level 2, retrain per-key components individually and asynchronously nearline on streaming data.")),(0,i.kt)("p",null,"These levels build upon each other. Depending on how fresh a model needs to be to perform well at its task, we may elect to stay at Level 0 for a stationary problem, all the way through to Level 3 for problems where incorporating new data within seconds makes a difference."),(0,i.kt)("figure",null,(0,i.kt)("p",null,(0,i.kt)("center",null,(0,i.kt)("img",{src:"https://github.com/recohut/incremental-learning/raw/a6fdcde2e8af7ebfd9f5efd278c487e0e9560cb3/docs/_images/L241645_1.png"}),(0,i.kt)("figcaption",null,"*A hierarchy of model retraining.*")))),(0,i.kt)("p",null,"If we arrange all of the model updates in Level 3 on a timeline, as depicted in the above, we\u2019ll see three types of model update occurring. Occasionally, a Level 1 update will reset the whole model (both global model and all per-key components); this will be a batch offline update using a large accumulated dataset. More frequently, Level 2 updates will reset just the per-key components; this again will be an offline batch update, but won\u2019t touch the large global model. Finally, \u201clightweight\u201d Level 3 updates will occur almost continuously; any individual per-key component is tuned as soon as there is enough data to do so."),(0,i.kt)("h2",{id:"scikit-warm-start"},"Scikit warm-start"),(0,i.kt)("p",null,"For some applications the amount of examples, features (or both) and/or the speed at which they need to be processed are challenging for traditional approaches. In these cases scikit-learn has a number of options you can consider to make your system scale."),(0,i.kt)("h3",{id:"scaling-with-instances-using-out-of-core-learning"},"Scaling with instances using out-of-core learning"),(0,i.kt)("p",null,"Out-of-core (or \u201cexternal memory\u201d) learning is a technique used to learn from data that cannot fit in a computer\u2019s main memory (RAM)."),(0,i.kt)("p",null,"Here is sketch of a system designed to achieve this goal:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a way to stream instances"),(0,i.kt)("li",{parentName:"ol"},"a way to extract features from instances"),(0,i.kt)("li",{parentName:"ol"},"an incremental algorithm")),(0,i.kt)("h3",{id:"streaming-instances"},"Streaming instances"),(0,i.kt)("p",null,"Basically, (1. a way to stream instances) may be a reader that yields instances from files on a hard drive, a database, from a network stream etc. However, details on how to achieve this are beyond the scope of this documentation."),(0,i.kt)("h3",{id:"extracting-features"},"Extracting features"),(0,i.kt)("p",null,"(2. a way to extract features from instances) could be any relevant way to extract features among the different\xa0",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://scikit-learn.org/0.15/modules/feature_extraction.html#feature-extraction"},"feature extraction")),"\xa0methods supported by scikit-learn. However, when working with data that needs vectorization and where the set of features or values is not known in advance one should take explicit care. A good example is text classification where unknown terms are likely to be found during training. It is possible to use a stateful vectorizer if making multiple passes over the data is reasonable from an application point of view. Otherwise, one can turn up the difficulty by using a stateless feature extractor. Currently the preferred way to do this is to use the so-called\xa0",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://scikit-learn.org/0.15/modules/feature_extraction.html#feature-hashing"},"hashing trick")),"\xa0as implemented by\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://scikit-learn.org/0.15/modules/generated/sklearn.feature_extraction.FeatureHasher.html#sklearn.feature_extraction.FeatureHasher"},"sklearn.feature_extraction.FeatureHasher")),"\xa0for datasets with categorical variables represented as list of Python dicts or\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://scikit-learn.org/0.15/modules/generated/sklearn.feature_extraction.text.HashingVectorizer.html#sklearn.feature_extraction.text.HashingVectorizer"},"sklearn.feature_extraction.text.HashingVectorizer")),"\xa0for text documents."),(0,i.kt)("h3",{id:"incremental-learning"},"Incremental learning"),(0,i.kt)("p",null,"Finally, for (3. an incremental algorithm), we have a number of options inside scikit-learn. Although all algorithms cannot learn incrementally (i.e. without seeing all the instances at once), all estimators implementing the\xa0partial_fit\xa0API are candidates. Actually, the ability to learn incrementally from a mini-batch of instances (sometimes called \u201conline learning\u201d) is key to out-of-core learning as it guarantees that at any given time there will be only a small amount of instances in the main memory. Choosing a good size for the mini-batch that balances relevancy and memory footprint could involve some tuning."),(0,i.kt)("p",null,"For classification, a somewhat important thing to note is that although a stateless feature extraction routine may be able to cope with new/unseen attributes, the incremental learner itself may be unable to cope with new/unseen targets classes. In this case you have to pass all the possible classes to the first\xa0partial_fit\xa0call using the\xa0classes=\xa0parameter."),(0,i.kt)("p",null,"Another aspect to consider when choosing a proper algorithm is that all of them don\u2019t put the same importance on each example over time. Namely, the\xa0Perceptron\xa0is still sensitive to badly labeled examples even after many examples whereas the\xa0SGD",(0,i.kt)("em",{parentName:"p"},"\xa0and\xa0PassiveAggressive"),"\xa0families are more robust to this kind of artifacts. Conversely, the later also tend to give less importance to remarkably different, yet properly labeled examples when they come late in the stream as their learning rate decreases over time."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pdfs.semanticscholar.org/4ccc/553d7774748be878002381877d70932b2717.pdf"},"Learning in the Presence of Concept Drift and Hidden Contexts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www-ai.cs.uni-dortmund.de/LEHRE/FACHPROJEKT/SS12/paper/concept-drift/tsymbal2004.pdf"},"The problem of concept drift: definitions and related work")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1504.01044"},"Concept Drift Detection for Streaming Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1010.4784"},"Learning under Concept Drift: an Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.win.tue.nl/~mpechen/publications/pubs/CD_applications15.pdf"},"An overview of concept drift applications")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://link.springer.com/chapter/10.1007/978-3-642-16438-5_17"},"What Is Concept Drift and How to Measure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1704.00362"},"Understanding Concept Drift")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://machinelearningmastery.com/gentle-introduction-concept-drift-machine-learning/"},"https://machinelearningmastery.com/gentle-introduction-concept-drift-machine-learning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Concept_drift"},"Concept drift on Wikipedia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/6042653/"},"Handling Concept Drift: Importance, Challenges and Solutions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mlinproduction.com/model-retraining/"},"https://mlinproduction.com/model-retraining")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/machine-learning/latest/dg/retraining-models-on-new-data.html"},"Retraining Models on New Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.quora.com/Should-a-machine-learning-model-be-retrained-each-time-new-observations-are-available"},"Should a machine learning model be retrained each time new observations are available?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.inawisdom.com/machine-learning/machine-learning-automated-model-retraining-sagemaker/"},"MACHINE LEARNING AND AUTOMATED MODEL RETRAINING WITH SAGEMAKER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://machinelearningmastery.com/gentle-introduction-concept-drift-machine-learning/"},"A Gentle Introduction to Concept Drift in Machine Learning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oreilly.com/ideas/lessons-learned-turning-machine-learning-models-into-real-products-and-services"},"Lessons learned turning machine learning models into real products and services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45742.pdf"},"What\u2019s your ML Test Score? A rubric for ML production systems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/pub-tools-public-publication-data/pdf/43146.pdf"},"Machine Learning: The High-Interest Credit Card of Technical Debt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oreilly.com/ideas/lessons-learned-turning-machine-learning-models-into-real-products-and-services"},"Lessons learned turning machine learning models into real products and services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://neptune.ai/blog/retraining-model-during-deployment-continuous-training-continuous-testing"},"Machine learning models get stale with time"))))}h.isMDXComponent=!0}}]);