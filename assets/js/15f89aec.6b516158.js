"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7343],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19007:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={title:"Web Scraping using Scrapy, BS4, and Selenium",authors:"sparsh",tags:["scraping"]},p=void 0,c={permalink:"/ai-kb/blog/2021/10/01/web-scraping-using-scrapy-bs4-and-selenium",source:"@site/blog/2021-10-01-web-scraping-using-scrapy-bs4-and-selenium.mdx",title:"Web Scraping using Scrapy, BS4, and Selenium",description:"1. Handling single request & response by extracting a city\u2019s weather from a weather site using Scrapy",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"scraping",permalink:"/ai-kb/blog/tags/scraping"}],readingTime:3.78,truncated:!1,authors:[{name:"Sparsh Agarwal",title:"Principal Developer",url:"https://github.com/sparsh-ai",imageURL:"https://avatars.githubusercontent.com/u/62965911?v=4",key:"sparsh"}],frontMatter:{title:"Web Scraping using Scrapy, BS4, and Selenium",authors:"sparsh",tags:["scraping"]},prevItem:{title:"Vehicle Suggestions",permalink:"/ai-kb/blog/2021/10/01/vehicle-suggestions"},nextItem:{title:"Web Scraping with Gazpacho",permalink:"/ai-kb/blog/2021/10/01/web-scraping-with-gazpacho"}},l={authorsImageUrls:[void 0]},m=[{value:"Project tree",id:"project-tree",level:2}],u={toc:m};function d(e){var n=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Handling single request & response by extracting a city\u2019s weather from a weather site using Scrapy"),(0,i.kt)("li",{parentName:"ol"},"Handling multiple request & response by extracting book details from a dummy online book store using Scrapy"),(0,i.kt)("li",{parentName:"ol"},"Scrape the cover images of all the books from the website ",(0,i.kt)("a",{parentName:"li",href:"http://books.toscrape.com/"},"books.toscrape.com")," using Scrapy"),(0,i.kt)("li",{parentName:"ol"},"Logging into Facebook using Selenium"),(0,i.kt)("li",{parentName:"ol"},"Extract PM2.5 data from ",(0,i.kt)("a",{parentName:"li",href:"http://openaq.org"},"openaq.org")," using Selenium"),(0,i.kt)("li",{parentName:"ol"},"Extract PM2.5 data from ",(0,i.kt)("a",{parentName:"li",href:"http://openaq.org"},"openaq.org")," using Selenium Scrapy")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Scrapy vs. Selenium")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Selenium is an automation tool for testing web applications. It uses a webdriver as an interface to control webpages through programming languages. So, this gives Selenium the capability to handle dynamic webpages effectively. Selenium is capable of extracting data on its own. It is true, but it has its caveats. Selenium cannot handle large data, but Scrapy can handle large data with ease. Also, Selenium is much slower when compared to Scrapy. So, the smart choice would be to use Selenium with Scrapy to scrape dynamic webpages containing large data, consuming less time. Combining Selenium with Scrapy is a simpler process. All that needs to be done is let Selenium render the webpage and once it is done, pass the webpage\u2019s source to create a Scrapy Selector object. And from here on, Scrapy can crawl the page with ease and effectively extract a large amount of data."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# SKELETON FOR COMBINING SELENIUM WITH SCRAPY\nfrom scrapy import Selector\n# Other Selenium and Scrapy imports\n...\ndriver = webdriver.Chrome()\n# Selenium tasks and actions to render the webpage with required content\nselenium_response_text = driver.page_source\nnew_selector = Selector(text=selenium_response_text)\n# Scrapy tasks to extract data from Selector\n")),(0,i.kt)("h2",{id:"project-tree"},"Project tree"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},".\n\u251c\u2500\u2500 airQuality\n\u2502   \u251c\u2500\u2500 countries_list.json\n\u2502   \u251c\u2500\u2500 get_countries.py\n\u2502   \u251c\u2500\u2500 get_pm_data.py\n\u2502   \u251c\u2500\u2500 get_urls.py\n\u2502   \u251c\u2500\u2500 openaq_data.json\n\u2502   \u251c\u2500\u2500 openaq_scraper.py\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 urls.json\n\u251c\u2500\u2500 airQualityScrapy\n\u2502   \u251c\u2500\u2500 LICENSE\n\u2502   \u251c\u2500\u2500 openaq\n\u2502   \u2502   \u251c\u2500\u2500 countries_list.json\n\u2502   \u2502   \u251c\u2500\u2500 openaq\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 items.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 middlewares.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pipelines.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 spiders\n\u2502   \u2502   \u251c\u2500\u2500 output.json\n\u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u251c\u2500\u2500 scrapy.cfg\n\u2502   \u2502   \u2514\u2500\u2500 urls.json\n\u2502   \u251c\u2500\u2500 performance_comparison\n\u2502   \u2502   \u251c\u2500\u2500 performance_comparison\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 items.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 middlewares.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 pipelines.py\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 spiders\n\u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u251c\u2500\u2500 scrapy.cfg\n\u2502   \u2502   \u251c\u2500\u2500 scrapy_output.json\n\u2502   \u2502   \u2514\u2500\u2500 selenium_scraper\n\u2502   \u2502       \u251c\u2500\u2500 bts_scraper.py\n\u2502   \u2502       \u251c\u2500\u2500 selenium_output.json\n\u2502   \u2502       \u2514\u2500\u2500 urls.json\n\u2502   \u2514\u2500\u2500 README.md\n\u251c\u2500\u2500 books\n\u2502   \u251c\u2500\u2500 books\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 items.py\n\u2502   \u2502   \u251c\u2500\u2500 middlewares.py\n\u2502   \u2502   \u251c\u2500\u2500 pipelines.py\n\u2502   \u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2502   \u2514\u2500\u2500 spiders\n\u2502   \u2502       \u251c\u2500\u2500 book_spider.py\n\u2502   \u2502       \u251c\u2500\u2500 crawl_spider.py\n\u2502   \u2502       \u2514\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 crawl_spider_output.json\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 scrapy.cfg\n\u251c\u2500\u2500 booksCoverImage\n\u2502   \u251c\u2500\u2500 booksCoverImage\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 items.py\n\u2502   \u2502   \u251c\u2500\u2500 middlewares.py\n\u2502   \u2502   \u251c\u2500\u2500 pipelines.py\n\u2502   \u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2502   \u2514\u2500\u2500 spiders\n\u2502   \u2502       \u251c\u2500\u2500 image_crawl_spider.py\n\u2502   \u2502       \u2514\u2500\u2500 __init__.py\n\u2502   \u251c\u2500\u2500 output.json\n\u2502   \u251c\u2500\u2500 path\n\u2502   \u2502   \u2514\u2500\u2500 to\n\u2502   \u2502       \u2514\u2500\u2500 store\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2514\u2500\u2500 scrapy.cfg\n\u251c\u2500\u2500 etc\n\u2502   \u2514\u2500\u2500 Selenium\n\u2502       \u251c\u2500\u2500 chromedriver.exe\n\u2502       \u251c\u2500\u2500 chromedriver_v87.exe\n\u2502       \u2514\u2500\u2500 install.sh\n\u251c\u2500\u2500 facebook\n\u2502   \u2514\u2500\u2500 login.py\n\u251c\u2500\u2500 gazpacho1\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502   \u251c\u2500\u2500 media.html\n\u2502   \u2502   \u251c\u2500\u2500 ocr.html\n\u2502   \u2502   \u251c\u2500\u2500 page.html\n\u2502   \u2502   \u251c\u2500\u2500 static\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 stheno.mp4\n\u2502   \u2502   \u2514\u2500\u2500 table.html\n\u2502   \u251c\u2500\u2500 media\n\u2502   \u2502   \u251c\u2500\u2500 euryale.png\n\u2502   \u2502   \u251c\u2500\u2500 medusa.mp3\n\u2502   \u2502   \u251c\u2500\u2500 medusa.png\n\u2502   \u2502   \u251c\u2500\u2500 stheno.mp4\n\u2502   \u2502   \u2514\u2500\u2500 test.png\n\u2502   \u251c\u2500\u2500 scrap_login.py\n\u2502   \u251c\u2500\u2500 scrap_media.py\n\u2502   \u251c\u2500\u2500 scrap_ocr.py\n\u2502   \u251c\u2500\u2500 scrap_page.py\n\u2502   \u2514\u2500\u2500 scrap_table.py\n\u251c\u2500\u2500 houzzdotcom\n\u2502   \u251c\u2500\u2500 houzzdotcom\n\u2502   \u2502   \u251c\u2500\u2500 __init__.py\n\u2502   \u2502   \u251c\u2500\u2500 items.py\n\u2502   \u2502   \u251c\u2500\u2500 middlewares.py\n\u2502   \u2502   \u251c\u2500\u2500 pipelines.py\n\u2502   \u2502   \u251c\u2500\u2500 settings.py\n\u2502   \u2502   \u2514\u2500\u2500 spiders\n\u2502   \u2502       \u251c\u2500\u2500 crawl_spider.py\n\u2502   \u2502       \u2514\u2500\u2500 __init__.py\n\u2502   \u2514\u2500\u2500 scrapy.cfg\n\u251c\u2500\u2500 media\n\u2502   \u2514\u2500\u2500 test.png\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 scrapyPractice\n\u2502   \u251c\u2500\u2500 scrapy.cfg\n\u2502   \u2514\u2500\u2500 scrapyPractice\n\u2502       \u251c\u2500\u2500 __init__.py\n\u2502       \u251c\u2500\u2500 items.py\n\u2502       \u251c\u2500\u2500 middlewares.py\n\u2502       \u251c\u2500\u2500 pipelines.py\n\u2502       \u251c\u2500\u2500 settings.py\n\u2502       \u2514\u2500\u2500 spiders\n\u2502           \u2514\u2500\u2500 __init__.py\n\u2514\u2500\u2500 weather\n    \u251c\u2500\u2500 output.json\n    \u251c\u2500\u2500 README.md\n    \u251c\u2500\u2500 scrapy.cfg\n    \u2514\u2500\u2500 weather\n        \u251c\u2500\u2500 __init__.py\n        \u251c\u2500\u2500 items.py\n        \u251c\u2500\u2500 middlewares.py\n        \u251c\u2500\u2500 pipelines.py\n        \u251c\u2500\u2500 settings.py\n        \u2514\u2500\u2500 spiders\n            \u251c\u2500\u2500 __init__.py\n            \u2514\u2500\u2500 weather_spider.py\n\n35 directories, 98 files\n")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"For code, drop me a message on mail or LinkedIn.",src:t(65870).Z,width:"1292",height:"619"})),(0,i.kt)("p",null,"For code, drop me a message on mail or LinkedIn."))}d.isMDXComponent=!0},65870:function(e,n,t){n.Z=t.p+"assets/images/content-blog-raw-blog-web-scraping-using-scrapy-bs4-and-selenium-untitled-f6a60dc9084f918baca047c531a5849e.png"}}]);