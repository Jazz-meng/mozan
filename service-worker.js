"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/mozan/index.html","df8598d2f4885e8084a3d87fcc4fac7d"],["/mozan/static/css/main.20864118.css","dda9999afa949a846a48a8cb194ad222"],["/mozan/static/js/main.bcf880e8.js","2a66d8b8e647b887c507e928dfde2b13"],["/mozan/static/media/bg2_18.db5ac97e.png","db5ac97edef100f764835071e8b09cfa"],["/mozan/static/media/guanyu.dd6982c0.svg","dd6982c0f7bd71ce7c057f1082234d47"],["/mozan/static/media/link.70ee1e30.svg","70ee1e30627290f5f6f51d4cc1232639"],["/mozan/static/media/mianze.9ea4a8e1.svg","9ea4a8e19b7e5a788effcf4e1b046010"],["/mozan/static/media/pay.54ce587b.svg","54ce587b256bb384748b494ad857bfdb"],["/mozan/static/media/peisong.a1e50342.svg","a1e503423730ed272cd902a25c3a2081"],["/mozan/static/media/phone.207f386a.svg","207f386a052c14ceb1330352071c8ef0"],["/mozan/static/media/pic1_03.01163713.jpg","011637132ad7bcad8db9311fd9238da8"],["/mozan/static/media/pic2_03.c1d684c0.jpg","c1d684c0aa5c39e937a185c1fb18f8b1"],["/mozan/static/media/pic3_03.a4d478cf.jpg","a4d478cf814dd3e80ea84d23e6babedd"],["/mozan/static/media/pic4_09.f7974966.jpg","f79749661a29f55aa144ade87f8352a6"],["/mozan/static/media/pic6_10.dd3089b0.jpg","dd3089b024532f8bb02b432cdfbb8034"],["/mozan/static/media/pic7_11.3b59c105.jpg","3b59c105e86557bd1bfc61a8f3171adc"],["/mozan/static/media/pic8_11.ac958957.jpg","ac9589572b903d8e33d1d7d368f1cf12"],["/mozan/static/media/re.c2be5241.svg","c2be5241c843e15f60b1d272d94a3de5"],["/mozan/static/media/taoer_09.7177adfb.png","7177adfbb563d1b4f1f6d809d1692653"],["/mozan/static/media/weier_11.4ee8489c.png","4ee8489c2afd5fea5b968ee1d0c43fb6"],["/mozan/static/media/wenhao.adc3a093.svg","adc3a093d812fa0a8ee60fe04cba06d6"],["/mozan/static/media/zhinan.7b3f3c43.svg","7b3f3c439576c3c49c9d12c19f770753"],["/mozan/static/media/搜索.6b2b51ef.svg","6b2b51ef09b970b13c058515e42fc773"],["/mozan/static/media/菜单.9ed88dc8.svg","9ed88dc89bca12a0e42fac889e2ce16d"],["/mozan/static/media/购物袋.feefe3a1.svg","feefe3a17029cb124b4c85e802851067"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/mozan/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});