(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{4372:function(e,t,r){Promise.resolve().then(r.bind(r,3917)),Promise.resolve().then(r.bind(r,7163)),Promise.resolve().then(r.bind(r,2386))},2597:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},unstable_getImgProps:function(){return unstable_getImgProps}});let o=r(1024),n=r(3655),i=r(7707),s=r(6964),a=o._(r(5324)),unstable_getImgProps=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=s.Image},3917:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return components_Blogs}});var o=r(7437),n=r(2265),i=r(6691),s=r.n(i),a=r(1396),l=r.n(a),components_BlogCard=e=>{let{blog:t}=e,r=t.attributes.Description.length>80?t.attributes.Description.substring(0,80)+"...":t.attributes.Description,n="http://127.0.0.1:1337"+t.attributes.img.data.attributes.url;return(0,o.jsx)("div",{className:"rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer",children:(0,o.jsxs)(l(),{href:"/blog/".concat(t.id),children:[(0,o.jsx)("div",{className:"relative w-full h-1",style:{paddingBottom:"100%"},children:(0,o.jsx)(s(),{priority:!0,layout:"fill",src:n,alt:"",className:"rounded-t-lg"})}),(0,o.jsxs)("div",{className:"p-2",children:[(0,o.jsx)("h2",{className:"text-xl font-semibold mb-2 overflow-ellipsis",children:t.attributes.Title}),(0,o.jsx)("p",{className:"text-gray-600",children:r})]})]})})},u=r(2386),components_Blogs=e=>{var t;let{blogs:r}=e,{category:i}=(0,n.useContext)(u.CategoryContext),s=null===(t=r.data)||void 0===t?void 0:t.filter(e=>e.attributes.categories.data.some(e=>e.attributes.Title===i));return(0,o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:null==s?void 0:s.map(e=>(0,o.jsx)("div",{children:(0,o.jsx)(components_BlogCard,{blog:e})},e.id))})}},7163:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return components_Categories}});var o=r(7437),n=r(2265),i=r(2386),components_Category=e=>{let{cat:t}=e,{category:r,changeCategory:s}=(0,n.useContext)(i.CategoryContext);return(0,o.jsx)("div",{onClick:()=>s(t.attributes.Title),className:"".concat(t.attributes.Title===r?"bg-[#ffffff] text-black":"bg-[#af8533]","  p-4 rounded-lg shadow-md cursor-pointer"),children:t.attributes.Title})},components_Categories=e=>{var t;let{categories:r}=e,{changeCategory:s}=(0,n.useContext)(i.CategoryContext);return(0,n.useLayoutEffect)(()=>{var e;s(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e[0].attributes.Title)},[]),(0,o.jsx)("div",{className:"flex gap-6 mb-8",children:null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.map(e=>(0,o.jsx)("div",{children:(0,o.jsx)(components_Category,{cat:e})},e.id))})}},2386:function(e,t,r){"use strict";r.r(t),r.d(t,{CategoryContext:function(){return i},CategoryProvider:function(){return CategoryProvider}});var o=r(7437),n=r(2265);let i=(0,n.createContext)(),CategoryProvider=e=>{let{children:t}=e,[r,s]=(0,n.useState)("");return(0,o.jsx)(i.Provider,{value:{category:r,changeCategory:e=>{s(e)}},children:t})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var o,i={},u=null,d=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:n,type:e,key:u,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(2597)},1396:function(e,t,r){e.exports=r(4724)}},function(e){e.O(0,[724,964,971,864,744],function(){return e(e.s=4372)}),_N_E=e.O()}]);