if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>i(e,n),o={module:{uri:n},exports:c,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-55b8e625"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Y3Qx1Xek2Em7YRwiMQD7h/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/Y3Qx1Xek2Em7YRwiMQD7h/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/326-31bf272653bc85e9.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/37-e406a5b876ad1ecb.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/456-0e4d9e8ae2f37ad7.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/522-1a3f37a3ad8d3a58.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/540-7f7428c31a8074d1.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/647-2a4a3b9cdc8eaaf0.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/749-139903e7c2477252.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/896-dc92adf181732b81.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/9081a741-da2182ac72d3c334.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/93854f56-97553a3536761610.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/error-33375249f048f038.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/layout-5300e2745d5a14a7.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/not-found-a699bf7532575e3f.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/sw-add-student/page-2477710fb60b3e14.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/sw-details/page-53211f5f98380b5a.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/sw-edit-student/%5BstudentId%5D/page-df7251d6613474eb.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/sw-edit-user/%5Busername%5D/page-8e4601ade22276c6.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(home)/sw-home/page-f802df3277f12628.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(sw-auth)/sw-login-client/page-5ad027d8251785ac.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(sw-auth)/sw-login/page-72d5055761736107.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(sw-auth)/sw-signup-server-actions/page-13bcc2f96b484830.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/(sw-auth)/sw-signup/page-2334579f00483371.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/access-denied/page-4f5d678d68c62b20.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/error-d6d6085890f0d86e.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/layout-3fa24ec48cff32db.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/not-found-446ca8329b7c173c.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/protectedPageClient/page-a518bcacd4942685.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/protectedPageServer/page-622a13d730cea09d.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/temp-route/page-982397b32e874075.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/tictactoe/page-3f2236cbcf3d8092.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/ui-sandbox/error-5413df41eb7ef75b.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/ui-sandbox/layout-09b24fe4b5064158.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/ui-sandbox/page-81f78daf0e839fd1.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/users-client-ext-api/page-a236b1183d333d4d.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/users-client-int-api/page-d0f347b39cad97ea.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/users-server/page-81a49e7de5fb5202.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/app/users-static-and-dynamic/page-1339507dcac34647.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/fd9d1056-800cc2c674c7406b.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/main-18246b5fdea39ebc.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/main-app-a68e60683094590c.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-62cff6287edcafa4.js",revision:"Y3Qx1Xek2Em7YRwiMQD7h"},{url:"/_next/static/css/15a6725a27162ff5.css",revision:"15a6725a27162ff5"},{url:"/_next/static/css/5c345c1f497c890f.css",revision:"5c345c1f497c890f"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
