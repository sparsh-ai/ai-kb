"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3758],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=l,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),l=n(63366),i=(n(67294),n(3905)),o=["components"],a={},s="Unix shell",c={unversionedId:"best-practices/unix-shell-snippets",id:"best-practices/unix-shell-snippets",title:"Unix shell",description:"Replace file extension of all files in a folder",source:"@site/docs/07-best-practices/unix-shell-snippets.mdx",sourceDirName:"07-best-practices",slug:"/best-practices/unix-shell-snippets",permalink:"/ai-kb/docs/best-practices/unix-shell-snippets",editUrl:"https://github.com/sparsh-ai/ai-kb/docs/07-best-practices/unix-shell-snippets.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python code",permalink:"/ai-kb/docs/best-practices/python-snippets"}},p={},u=[{value:"Replace file extension of all files in a folder",id:"replace-file-extension-of-all-files-in-a-folder",level:2},{value:"Wget download all files from html index",id:"wget-download-all-files-from-html-index",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unix-shell"},"Unix shell"),(0,i.kt)("h2",{id:"replace-file-extension-of-all-files-in-a-folder"},"Replace file extension of all files in a folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'for file in *.html\ndo\n  mv "$file" "${file%.html}.txt"\ndone\n')),(0,i.kt)("h2",{id:"wget-download-all-files-from-html-index"},"Wget download all files from html index"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget -r -np -nH --cut-dirs=3 -R index.html <url>\n")))}d.isMDXComponent=!0}}]);