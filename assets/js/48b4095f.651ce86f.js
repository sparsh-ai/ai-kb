"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7772],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85890:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={},l="Vector Search",c={unversionedId:"tutorials/vector-search",id:"tutorials/vector-search",title:"Vector Search",description:"Faiss",source:"@site/docs/04-tutorials/vector-search.mdx",sourceDirName:"04-tutorials",slug:"/tutorials/vector-search",permalink:"/ai-kb/docs/tutorials/vector-search",editUrl:"https://github.com/sparsh-ai/ai-kb/docs/04-tutorials/vector-search.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unix shell",permalink:"/ai-kb/docs/tutorials/unix-shell-snippets"},next:{title:"Word2vec",permalink:"/ai-kb/docs/tutorials/word2vec"}},d={},p=[{value:"Faiss",id:"faiss",level:2},{value:"Elasticsearch",id:"elasticsearch",level:2},{value:"Annoy",id:"annoy",level:2},{value:"Milvus Redis",id:"milvus-redis",level:2},{value:"Matrix Factorization Recommendation Retrieval",id:"matrix-factorization-recommendation-retrieval",level:2}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vector-search"},"Vector Search"),(0,a.kt)("h2",{id:"faiss"},"Faiss"),(0,a.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-01-23-vector-search.ipynb",alt:""}," ",(0,a.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})),(0,a.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-04-20-dl-retrieval.ipynb",alt:""}," ",(0,a.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import faiss\nfrom vector_engine.utils import vector_search, id2details\n\n# Step 1: Change data type\nembeddings = np.array([embedding for embedding in embeddings]).astype("float32")\n\n# Step 2: Instantiate the index\nindex = faiss.IndexFlatL2(embeddings.shape[1])\n\n# Step 3: Pass the index to IndexIDMap\nindex = faiss.IndexIDMap(index)\n\n# Step 4: Add vectors and their IDs\nindex.add_with_ids(embeddings, df.id.values)\n\nprint(f"Number of vectors in the Faiss index: {index.ntotal}")\n\n# Retrieve the 10 nearest neighbours\nD, I = index.search(np.array([embeddings[5415]]), k=10)\nprint(f\'L2 distance: {D.flatten().tolist()}\\n\\nMAG paper IDs: {I.flatten().tolist()}\')\n\n# Wrap all steps in the vector_search function.\n# It takes four arguments: \n# A query, the sentence-level transformer, the Faiss index and the number of requested results\nD, I = vector_search([user_query], model, index, num_results=10)\nprint(f\'L2 distance: {D.flatten().tolist()}\\n\\nMAG paper IDs: {I.flatten().tolist()}\')\n\n# Serialise index and store it as a pickle\nwith open(f"{project_dir}/models/faiss_index.pickle", "wb") as h:\n    pickle.dump(faiss.serialize_index(index), h)\n')),(0,a.kt)("h2",{id:"elasticsearch"},"Elasticsearch"),(0,a.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-04-20-dl-retrieval.ipynb",alt:""}," ",(0,a.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# download the latest elasticsearch version\n!wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.11.1-linux-x86_64.tar.gz\n!tar -xzvf elasticsearch-7.11.1-linux-x86_64.tar.gz\n!chown -R daemon:daemon elasticsearch-7.11.1\n\n# prep the elasticsearch server\nimport os\nfrom subprocess import Popen, PIPE, STDOUT\nes_subprocess = Popen(['elasticsearch-7.11.1/bin/elasticsearch'], stdout=PIPE, stderr=STDOUT, preexec_fn=lambda : os.setuid(1))\n\n# wait for a few minutes for the local host to start\n!curl -X GET \"localhost:9200/\"\n\n# install elasticsearch python api\n!pip install -q elasticsearch\n\n# check if elasticsearch server is properly running in the background\nfrom elasticsearch import Elasticsearch, helpers\nes_client = Elasticsearch(['localhost'])\nes_client.info()\n")),(0,a.kt)("h2",{id:"annoy"},"Annoy"),(0,a.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-04-27-image-similarity-recommendations.ipynb",alt:""}," ",(0,a.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!pip install -q annoy\n\nfrom annoy import AnnoyIndex\n\n# Defining data structures as empty dict\nfile_index_to_file_name = {}\nfile_index_to_file_vector = {}\nfile_index_to_product_id = {}\n\n# Configuring annoy parameters\ndims = 256\nn_nearest_neighbors = 20\ntrees = 10000\n\n# Reads all file names which stores feature vectors \nallfiles = glob.glob('/content/img_vectors/*.npz')\n\nt = AnnoyIndex(dims, metric='angular')\n\nfor findex, fname in tqdm(enumerate(allfiles)):\n  file_vector = np.loadtxt(fname)\n  file_name = os.path.basename(fname).split('.')[0]\n  file_index_to_file_name[findex] = file_name\n  file_index_to_file_vector[findex] = file_vector\n  try:\n    file_index_to_product_id[findex] = match_id(file_name)\n  except IndexError:\n    pass \n  t.add_item(findex, file_vector)\n\nt.build(trees)\nt.save('t.ann')\n\nfile_path = '/content/drive/MyDrive/ImgSim/'\nt.save(file_path+'indexer.ann')\npickle.dump(file_index_to_file_name, open(file_path+\"file_index_to_file_name.p\", \"wb\"))\npickle.dump(file_index_to_file_vector, open(file_path+\"file_index_to_file_vector.p\", \"wb\"))\npickle.dump(file_index_to_product_id, open(file_path+\"file_index_to_product_id.p\", \"wb\"))\n\npath_dict = {}\nfor path in Path('/content/Fashion_data/categories').rglob('*.jpg'):\n  path_dict[path.name] = path\n\nnns = t.get_nns_by_vector(test_vec, n=topK)\nplt.figure(figsize=(20, 10))\nfor i in range(topK):\n  x = file_index_to_file_name[nns[i]]\n  x = path_dict[x+'.jpg']\n  y = file_index_to_product_id[nns[i]]\n  title = '\\n'.join([str(j) for j in list(styles.loc[y].values[-5:])])\n  plt.subplot(1, topK, i+1)\n  plt.title(title)\n  plt.imshow(mpimg.imread(x))\n  plt.axis('off')\nplt.tight_layout()\n")),(0,a.kt)("h2",{id:"milvus-redis"},"Milvus Redis"),(0,a.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2021-06-23-movielens-milvus-redis-efficient-retrieval.ipynb",alt:""}," ",(0,a.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'!git clone -b 1.1 https://github.com/milvus-io/milvus.git\n% cd /content/milvus/core\n! ./ubuntu_build_deps.sh\n!./build.sh -t Release\n# !./build.sh -t Release -g\n\n% cd /content/milvus/core/milvus\n! echo $LD_LIBRARY_PATH\nimport os\nos.environ[\'LD_LIBRARY_PATH\'] +=":/content/milvus/core/milvus/lib"\n! echo $LD_LIBRARY_PATH\n% cd scripts\n! nohup ./start_server.sh &\n! cat nohup.out\n\nfrom milvus import Milvus, IndexType, MetricType, Status\nimport redis\n\nmilv = Milvus(host = \'127.0.0.1\', port = 19530)\nr = redis.StrictRedis(host="127.0.0.1", port=6379)\n\nCOLLECTION_NAME = \'demo_films\'\nPARTITION_NAME = \'Movie\'\n\n#Dropping collection for clean slate run\nmilv.drop_collection(COLLECTION_NAME)\n\nparam = {\'collection_name\':COLLECTION_NAME, \n         \'dimension\':32, \n         \'index_file_size\':2048, \n         \'metric_type\':MetricType.L2\n        }\n\nmilv.create_collection(param)\n\nstatus = milv.insert(collection_name=COLLECTION_NAME, records=embeddings, ids=ids)\n\nimport numpy as np\nfrom paddle_serving_app.local_predict import LocalPredictor\n\nclass RecallServerServicer(object):\n    def __init__(self):\n        self.uv_client = LocalPredictor()\n        self.uv_client.load_model_config("movie_recommender/user_vector_model/serving_server_dir") \n        \n    def hash2(self, a):\n        return hash(a) % 1000000\n\n    def get_user_vector(self):\n        dic = {"userid": [], "gender": [], "age": [], "occupation": []}\n        lod = [0]\n        dic["userid"].append(self.hash2(\'0\'))\n        dic["gender"].append(self.hash2(\'M\'))\n        dic["age"].append(self.hash2(\'23\'))\n        dic["occupation"].append(self.hash2(\'6\'))\n        lod.append(1)\n\n        dic["userid.lod"] = lod\n        dic["gender.lod"] = lod\n        dic["age.lod"] = lod\n        dic["occupation.lod"] = lod\n        for key in dic:\n            dic[key] = np.array(dic[key]).astype(np.int64).reshape(len(dic[key]),1)\n        fetch_map = self.uv_client.predict(feed=dic, fetch=["save_infer_model/scale_0.tmp_1"], batch=True)\n        return fetch_map["save_infer_model/scale_0.tmp_1"].tolist()[0]\n\nrecall = RecallServerServicer()\nuser_vector = recall.get_user_vector()\n')),(0,a.kt)("h2",{id:"matrix-factorization-recommendation-retrieval"},"Matrix Factorization Recommendation Retrieval"),(0,a.kt)("a",{href:"https://nbviewer.org/github/recohut/nbs/blob/main/2022-01-31-retrieval-preferredai.ipynb",alt:""}," ",(0,a.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg"})))}m.isMDXComponent=!0}}]);