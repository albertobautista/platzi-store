if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/bt_add_to_cart.fb1463ea.svg",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next//static/media/bt_added_to_cart.45632f53.svg",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next//static/media/flechita.1c152575.svg",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next//static/media/icon_close.e791344b.png",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next//static/media/icon_menu.b70fc14a.svg",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next//static/media/icon_shopping_cart.665a6046.svg",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next//static/media/logo_yard_sale.ab5a49e4.svg",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/8Z5P1P4RrSD7IPjHu5KA9/_buildManifest.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/8Z5P1P4RrSD7IPjHu5KA9/_middlewareManifest.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/8Z5P1P4RrSD7IPjHu5KA9/_ssgManifest.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/650-f669b388c266d8b3.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/main-911cae6bf66273c0.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/pages/_app-4615c95ac52b3d1a.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/pages/checkout-c20a6f7e4757491d.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/pages/index-63cb03b2312dacb5.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/chunks/webpack-86a00016dae6b201.js",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/css/02db7a0246a96b62.css",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/css/34f978704c3ec73e.css",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/_next/static/css/7329035d18042d83.css",revision:"8Z5P1P4RrSD7IPjHu5KA9"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"0beb57435a574452d3e097d0c87e5604"},{url:"/icon-256x256.png",revision:"dc79f3befbfc47674a23d317c5c6699e"},{url:"/icon-384x384.png",revision:"091c9e10944b9cc64a93583a4f6b535b"},{url:"/icon-512x512.png",revision:"8a5eaf7724b9c7f5a76db2b29564d548"},{url:"/manifest.json",revision:"5042a68c4ee23b4413bbc7f133674096"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
