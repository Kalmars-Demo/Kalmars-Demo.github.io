(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=t(2265),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var a,i={},u=null,c=null;for(a in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,a)&&!l.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:s,type:e,key:u,ref:c,props:i,_owner:r.current}}n.Fragment=i,n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)},3553:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},251:function(e,n,t){"use strict";let a;t.d(n,{$G:function(){return useTranslation_useTranslation}});var s=t(2265);t(3553),Object.create(null);let i={};function utils_warnOnce(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];utils_isString(n[0])&&i[n[0]]||(utils_isString(n[0])&&(i[n[0]]=new Date),function(){if(console&&console.warn){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];utils_isString(n[0])&&(n[0]=`react-i18next:: ${n[0]}`),console.warn(...n)}}(...n))}let loadedClb=(e,n)=>()=>{if(e.isInitialized)n();else{let initialized=()=>{setTimeout(()=>{e.off("initialized",initialized)},0),n()};e.on("initialized",initialized)}},loadNamespaces=(e,n,t)=>{e.loadNamespaces(n,loadedClb(e,t))},loadLanguages=(e,n,t,a)=>{utils_isString(t)&&(t=[t]),t.forEach(n=>{0>e.options.ns.indexOf(n)&&e.options.ns.push(n)}),e.loadLanguages(n,loadedClb(e,a))},oldI18nextHasLoadedNamespace=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.languages[0],s=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===a.toLowerCase())return!0;let loadNotPending=(e,t)=>{let a=n.services.backendConnector.state[`${e}|${t}`];return -1===a||2===a};return(!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1)||!n.services.backendConnector.backend||!n.isLanguageChangingTo||!!loadNotPending(n.isLanguageChangingTo,e))&&!!(n.hasResourceBundle(a,e)||!n.services.backendConnector.backend||n.options.resources&&!n.options.partialBundledLanguages||loadNotPending(a,e)&&(!s||loadNotPending(i,e)))},hasLoadedNamespace=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return utils_warnOnce("i18n.languages were undefined or empty",n.languages),!0;let a=void 0!==n.options.ignoreJSONStructure;return a?n.hasLoadedNamespace(e,{lng:t.lng,precheck:(n,a)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))return!1}}):oldI18nextHasLoadedNamespace(e,n,t)},utils_isString=e=>"string"==typeof e,utils_isObject=e=>"object"==typeof e&&null!==e,o=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,r={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=e=>r[e],l={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(o,unescapeHtmlEntity)},defaults_getDefaults=()=>l,i18nInstance_getI18n=()=>a,u=(0,s.createContext)();let ReportNamespaces=class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces=()=>Object.keys(this.usedNamespaces)};let usePrevious=(e,n)=>{let t=(0,s.useRef)();return(0,s.useEffect)(()=>{t.current=n?t.current:e},[e,n]),t.current},alwaysNewT=(e,n,t,a)=>e.getFixedT(n,t,a),useMemoizedT=(e,n,t,a)=>(0,s.useCallback)(alwaysNewT(e,n,t,a),[e,n,t,a]),useTranslation_useTranslation=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{i18n:t}=n,{i18n:a,defaultNS:i}=(0,s.useContext)(u)||{},o=t||a||i18nInstance_getI18n();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new ReportNamespaces),!o){utils_warnOnce("You will need to pass in an i18next instance by using initReactI18next");let notReadyT=(e,n)=>utils_isString(n)?n:utils_isObject(n)&&utils_isString(n.defaultValue)?n.defaultValue:Array.isArray(e)?e[e.length-1]:e,e=[notReadyT,{},!1];return e.t=notReadyT,e.i18n={},e.ready=!1,e}o.options.react&&void 0!==o.options.react.wait&&utils_warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let r={...defaults_getDefaults(),...o.options.react,...n},{useSuspense:l,keyPrefix:c}=r,d=e||i||o.options&&o.options.defaultNS;d=utils_isString(d)?[d]:d||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(d);let g=(o.isInitialized||o.initializedStoreOnce)&&d.every(e=>hasLoadedNamespace(e,o,r)),p=useMemoizedT(o,n.lng||null,"fallback"===r.nsMode?d:d[0],c),getT=()=>p,getNewT=()=>alwaysNewT(o,n.lng||null,"fallback"===r.nsMode?d:d[0],c),[f,m]=(0,s.useState)(getT),N=d.join();n.lng&&(N=`${n.lng}${N}`);let b=usePrevious(N),h=(0,s.useRef)(!0);(0,s.useEffect)(()=>{let{bindI18n:e,bindI18nStore:t}=r;h.current=!0,g||l||(n.lng?loadLanguages(o,n.lng,d,()=>{h.current&&m(getNewT)}):loadNamespaces(o,d,()=>{h.current&&m(getNewT)})),g&&b&&b!==N&&h.current&&m(getNewT);let boundReset=()=>{h.current&&m(getNewT)};return e&&o&&o.on(e,boundReset),t&&o&&o.store.on(t,boundReset),()=>{h.current=!1,e&&o&&e.split(" ").forEach(e=>o.off(e,boundReset)),t&&o&&t.split(" ").forEach(e=>o.store.off(e,boundReset))}},[o,N]),(0,s.useEffect)(()=>{h.current&&g&&m(getT)},[o,c,g]);let _=[f,o,g];if(_.t=f,_.i18n=o,_.ready=g,g||!g&&!l)return _;throw new Promise(e=>{n.lng?loadLanguages(o,n.lng,d,()=>e()):loadNamespaces(o,d,()=>e())})}}}]);