if(!self.define){let e,c={};const s=(s,a)=>(s=new URL(s+".js",a).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let i={};const r=e=>s(e,n),d={module:{uri:n},exports:i,require:r};c[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-55b8e625"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1LIXLYJPc4cEJDa7cdT9A/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/1LIXLYJPc4cEJDa7cdT9A/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2-8912c5dea6d22ca4.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/326-31bf272653bc85e9.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/37-e406a5b876ad1ecb.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/413-876b97865a57ccff.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/452-cb5b26642c5169e6.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/520-b5c6ede39ee52d56.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/522-67e1f01ebe2967b2.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/717-836903c0ab8a7fa4.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/749-010f67fa20a54594.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/865-7ac4bd5ff955ac14.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/896-dc92adf181732b81.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/9081a741-da2182ac72d3c334.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/93854f56-97553a3536761610.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/error-33375249f048f038.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/layout-65fa24b09b4afa40.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/not-found-a699bf7532575e3f.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/sw-add-student/page-4481fd811bed1e58.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/sw-details/page-63322cd616a74837.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/sw-edit-student/%5BstudentId%5D/page-e40fecd6fad50413.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/sw-edit-user/%5Busername%5D/page-1996159cc0355c94.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(home)/sw-home/page-60bf1a815ee348b4.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(sw-auth)/sw-login-client/page-28f2dac8b41fe0b4.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(sw-auth)/sw-login/page-06970dac4b847c2f.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(sw-auth)/sw-signup-server-actions/page-13bcc2f96b484830.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/(sw-auth)/sw-signup/page-ba3571e2c4f619cc.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/access-denied/page-4f5d678d68c62b20.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/error-d6d6085890f0d86e.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/example-uploader/page-63251e225cae380e.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/layout-aca088df0bbabdfd.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/not-found-446ca8329b7c173c.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/protectedPageClient/page-a518bcacd4942685.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/protectedPageServer/page-622a13d730cea09d.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/temp-route/page-5aa0e9272f5a4e29.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/tictactoe/page-3f2236cbcf3d8092.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/ui-sandbox/error-5413df41eb7ef75b.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/ui-sandbox/layout-09b24fe4b5064158.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/ui-sandbox/page-f4568648461aec50.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/users-client-ext-api/page-a236b1183d333d4d.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/users-client-int-api/page-d0f347b39cad97ea.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/users-server/page-81a49e7de5fb5202.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/app/users-static-and-dynamic/page-37650b1735f56196.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/fd9d1056-800cc2c674c7406b.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/main-552fef6fabd9fcf3.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/main-app-a68e60683094590c.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-60cec0a3b6d48736.js",revision:"1LIXLYJPc4cEJDa7cdT9A"},{url:"/_next/static/css/5c345c1f497c890f.css",revision:"5c345c1f497c890f"},{url:"/_next/static/css/defd2775af3d9ffc.css",revision:"defd2775af3d9ffc"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:c}})=>!(!e||c.startsWith("/api/auth/")||!c.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:c},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!c.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:c},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!c.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:c})=>c&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
