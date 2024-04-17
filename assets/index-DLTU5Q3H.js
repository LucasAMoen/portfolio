function iv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $p={exports:{}},_l={},qp={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),ov=Symbol.for("react.portal"),sv=Symbol.for("react.fragment"),av=Symbol.for("react.strict_mode"),lv=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),fv=Symbol.for("react.forward_ref"),dv=Symbol.for("react.suspense"),hv=Symbol.for("react.memo"),pv=Symbol.for("react.lazy"),fd=Symbol.iterator;function mv(t){return t===null||typeof t!="object"?null:(t=fd&&t[fd]||t["@@iterator"],typeof t=="function"?t:null)}var Kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,Qp={};function To(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=To.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Kp}var nf=tf.prototype=new Jp;nf.constructor=tf;Zp(nf,To.prototype);nf.isPureReactComponent=!0;var dd=Array.isArray,em=Object.prototype.hasOwnProperty,rf={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)em.call(e,i)&&!tm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Cs,type:t,key:o,ref:s,props:r,_owner:rf.current}}function gv(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function of(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function _v(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hd=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_v(""+t.key):e.toString(36)}function wa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Cs:case ov:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Gl(s,0):i,dd(r)?(n="",t!=null&&(n=t.replace(hd,"$&/")+"/"),wa(r,e,n,"",function(u){return u})):r!=null&&(of(r)&&(r=gv(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(hd,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",dd(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Gl(o,a);s+=wa(o,e,n,l,r)}else if(l=mv(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Gl(o,a++),s+=wa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function zs(t,e,n){if(t==null)return t;var i=[],r=0;return wa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Aa={transition:null},xv={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:rf};Fe.Children={map:zs,forEach:function(t,e,n){zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zs(t,function(){e++}),e},toArray:function(t){return zs(t,function(e){return e})||[]},only:function(t){if(!of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=To;Fe.Fragment=sv;Fe.Profiler=lv;Fe.PureComponent=tf;Fe.StrictMode=av;Fe.Suspense=dv;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zp({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)em.call(e,l)&&!tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Cs,type:t.type,key:r,ref:o,props:i,_owner:s}};Fe.createContext=function(t){return t={$$typeof:cv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uv,_context:t},t.Consumer=t};Fe.createElement=nm;Fe.createFactory=function(t){var e=nm.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:fv,render:t}};Fe.isValidElement=of;Fe.lazy=function(t){return{$$typeof:pv,_payload:{_status:-1,_result:t},_init:vv}};Fe.memo=function(t,e){return{$$typeof:hv,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(t,e){return Vt.current.useCallback(t,e)};Fe.useContext=function(t){return Vt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Vt.current.useEffect(t,e)};Fe.useId=function(){return Vt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Vt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Vt.current.useRef(t)};Fe.useState=function(t){return Vt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Vt.current.useTransition()};Fe.version="18.2.0";qp.exports=Fe;var ce=qp.exports;const im=rv(ce),Sv=iv({__proto__:null,default:im},[ce]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=ce,Mv=Symbol.for("react.element"),Ev=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,wv=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Av={key:!0,ref:!0,__self:!0,__source:!0};function rm(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Tv.call(e,i)&&!Av.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Mv,type:t,key:o,ref:s,props:r,_owner:wv.current}}_l.Fragment=Ev;_l.jsx=rm;_l.jsxs=rm;$p.exports=_l;var et=$p.exports,qu={},om={exports:{}},ln={},sm={exports:{}},am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,V){var G=L.length;L.push(V);e:for(;0<G;){var ne=G-1>>>1,me=L[ne];if(0<r(me,V))L[ne]=V,L[G]=me,G=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var V=L[0],G=L.pop();if(G!==V){L[0]=G;e:for(var ne=0,me=L.length,He=me>>>1;ne<He;){var H=2*(ne+1)-1,ee=L[H],le=H+1,se=L[le];if(0>r(ee,G))le<me&&0>r(se,ee)?(L[ne]=se,L[le]=G,ne=le):(L[ne]=ee,L[H]=G,ne=H);else if(le<me&&0>r(se,G))L[ne]=se,L[le]=G,ne=le;else break e}}return V}function r(L,V){var G=L.sortIndex-V.sortIndex;return G!==0?G:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,h=3,m=!1,x=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=L)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(L){if(v=!1,g(L),!x)if(n(l)!==null)x=!0,Q(P);else{var V=n(u);V!==null&&Z(E,V.startTime-L)}}function P(L,V){x=!1,v&&(v=!1,c(b),b=-1),m=!0;var G=h;try{for(g(V),d=n(l);d!==null&&(!(d.expirationTime>V)||L&&!N());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var me=ne(d.expirationTime<=V);V=t.unstable_now(),typeof me=="function"?d.callback=me:d===n(l)&&i(l),g(V)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var H=n(u);H!==null&&Z(E,H.startTime-V),He=!1}return He}finally{d=null,h=G,m=!1}}var C=!1,w=null,b=-1,T=5,S=-1;function N(){return!(t.unstable_now()-S<T)}function W(){if(w!==null){var L=t.unstable_now();S=L;var V=!0;try{V=w(!0,L)}finally{V?U():(C=!1,w=null)}}else C=!1}var U;if(typeof _=="function")U=function(){_(W)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=W,U=function(){X.postMessage(null)}}else U=function(){p(W,0)};function Q(L){w=L,C||(C=!0,U())}function Z(L,V){b=p(function(){L(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,Q(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var G=h;h=V;try{return L()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=h;h=L;try{return V()}finally{h=G}},t.unstable_scheduleCallback=function(L,V,G){var ne=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ne+G:ne):G=ne,L){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=G+me,L={id:f++,callback:V,priorityLevel:L,startTime:G,expirationTime:me,sortIndex:-1},G>ne?(L.sortIndex=G,e(u,L),n(l)===null&&L===n(u)&&(v?(c(b),b=-1):v=!0,Z(E,G-ne))):(L.sortIndex=me,e(l,L),x||m||(x=!0,Q(P))),L},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(L){var V=h;return function(){var G=h;h=V;try{return L.apply(this,arguments)}finally{h=G}}}})(am);sm.exports=am;var Cv=sm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=ce,an=Cv;function K(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var um=new Set,ss={};function yr(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(ss[t]=e,t=0;t<e.length;t++)um.add(e[t])}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ku=Object.prototype.hasOwnProperty,Rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pd={},md={};function Pv(t){return Ku.call(md,t)?!0:Ku.call(pd,t)?!1:Rv.test(t)?md[t]=!0:(pd[t]=!0,!1)}function Lv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bv(t,e,n,i){if(e===null||typeof e>"u"||Lv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sf=/[\-:]([a-z])/g;function af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sf,af);Lt[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sf,af);Lt[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sf,af);Lt[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,i){var r=Lt.hasOwnProperty(e)?Lt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bv(e,n,r,i)&&(n=null),i||r===null?Pv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ui=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Ju=Symbol.for("react.suspense_list"),ff=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),dm=Symbol.for("react.offscreen"),gd=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=gd&&t[gd]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Wl;function jo(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var Xl=!1;function jl(t,e){if(!t||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function Uv(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=jl(t.type,!1),t;case 11:return t=jl(t.type.render,!1),t;case 1:return t=jl(t.type,!0),t;default:return""}}function ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Wr:return"Portal";case Zu:return"Profiler";case uf:return"StrictMode";case Qu:return"Suspense";case Ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fm:return(t.displayName||"Context")+".Consumer";case cm:return(t._context.displayName||"Context")+".Provider";case cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ff:return e=t.displayName||null,e!==null?e:ec(t.type)||"Memo";case vi:e=t._payload,t=t._init;try{return ec(t(e))}catch{}}return null}function Dv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ec(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nv(t){var e=hm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hs(t){t._valueTracker||(t._valueTracker=Nv(t))}function pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=hm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tc(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _d(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mm(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function nc(t,e){mm(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function io(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(K(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(K(92));if(Yo(n)){if(1<n.length)throw Error(K(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function gm(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function as(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iv=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){Iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function Sm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Fv=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sc(t,e){if(e){if(Fv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(K(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(K(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(K(61))}if(e.style!=null&&typeof e.style!="object")throw Error(K(62))}}function ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lc=null;function df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uc=null,ro=null,oo=null;function yd(t){if(t=Ls(t)){if(typeof uc!="function")throw Error(K(280));var e=t.stateNode;e&&(e=Ml(e),uc(t.stateNode,t.type,e))}}function ym(t){ro?oo?oo.push(t):oo=[t]:ro=t}function Mm(){if(ro){var t=ro,e=oo;if(oo=ro=null,yd(t),e)for(t=0;t<e.length;t++)yd(e[t])}}function Em(t,e){return t(e)}function Tm(){}var Yl=!1;function wm(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return Em(t,e,n)}finally{Yl=!1,(ro!==null||oo!==null)&&(Tm(),Mm())}}function ls(t,e){var n=t.stateNode;if(n===null)return null;var i=Ml(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(K(231,e,typeof n));return n}var cc=!1;if(ri)try{var No={};Object.defineProperty(No,"passive",{get:function(){cc=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{cc=!1}function Ov(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Qo=!1,za=null,Ba=!1,fc=null,kv={onError:function(t){Qo=!0,za=t}};function zv(t,e,n,i,r,o,s,a,l){Qo=!1,za=null,Ov.apply(kv,arguments)}function Bv(t,e,n,i,r,o,s,a,l){if(zv.apply(this,arguments),Qo){if(Qo){var u=za;Qo=!1,za=null}else throw Error(K(198));Ba||(Ba=!0,fc=u)}}function Mr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Am(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Md(t){if(Mr(t)!==t)throw Error(K(188))}function Hv(t){var e=t.alternate;if(!e){if(e=Mr(t),e===null)throw Error(K(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Md(r),t;if(o===i)return Md(r),e;o=o.sibling}throw Error(K(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?t:e}function Cm(t){return t=Hv(t),t!==null?Rm(t):null}function Rm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rm(t);if(e!==null)return e;t=t.sibling}return null}var Pm=an.unstable_scheduleCallback,Ed=an.unstable_cancelCallback,Vv=an.unstable_shouldYield,Gv=an.unstable_requestPaint,ht=an.unstable_now,Wv=an.unstable_getCurrentPriorityLevel,hf=an.unstable_ImmediatePriority,Lm=an.unstable_UserBlockingPriority,Ha=an.unstable_NormalPriority,Xv=an.unstable_LowPriority,bm=an.unstable_IdlePriority,vl=null,Hn=null;function jv(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:qv,Yv=Math.log,$v=Math.LN2;function qv(t){return t>>>=0,t===0?32:31-(Yv(t)/$v|0)|0}var Gs=64,Ws=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Va(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=$o(a):(o&=s,o!==0&&(i=$o(o)))}else s=n&~r,s!==0?i=$o(s):o!==0&&(i=$o(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Rn(e),r=1<<n,i|=t[n],e&=~r;return i}function Kv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Rn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Kv(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Um(){var t=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function Qv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Rn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Rn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Xe=0;function Dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nm,mf,Im,Fm,Om,hc=!1,Xs=[],Ci=null,Ri=null,Pi=null,us=new Map,cs=new Map,Si=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(t,e){switch(t){case"focusin":case"focusout":Ci=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(e.pointerId)}}function Io(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ls(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function e0(t,e,n,i,r){switch(e){case"focusin":return Ci=Io(Ci,t,e,n,i,r),!0;case"dragenter":return Ri=Io(Ri,t,e,n,i,r),!0;case"mouseover":return Pi=Io(Pi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return us.set(o,Io(us.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,cs.set(o,Io(cs.get(o)||null,t,e,n,i,r)),!0}return!1}function km(t){var e=ar(t.target);if(e!==null){var n=Mr(e);if(n!==null){if(e=n.tag,e===13){if(e=Am(n),e!==null){t.blockedOn=e,Om(t.priority,function(){Im(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lc=i,n.target.dispatchEvent(i),lc=null}else return e=Ls(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function wd(t,e,n){Ca(t)&&n.delete(e)}function t0(){hc=!1,Ci!==null&&Ca(Ci)&&(Ci=null),Ri!==null&&Ca(Ri)&&(Ri=null),Pi!==null&&Ca(Pi)&&(Pi=null),us.forEach(wd),cs.forEach(wd)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,hc||(hc=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,t0)))}function fs(t){function e(r){return Fo(r,t)}if(0<Xs.length){Fo(Xs[0],t);for(var n=1;n<Xs.length;n++){var i=Xs[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ci!==null&&Fo(Ci,t),Ri!==null&&Fo(Ri,t),Pi!==null&&Fo(Pi,t),us.forEach(e),cs.forEach(e),n=0;n<Si.length;n++)i=Si[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Si.length&&(n=Si[0],n.blockedOn===null);)km(n),n.blockedOn===null&&Si.shift()}var so=ui.ReactCurrentBatchConfig,Ga=!0;function n0(t,e,n,i){var r=Xe,o=so.transition;so.transition=null;try{Xe=1,gf(t,e,n,i)}finally{Xe=r,so.transition=o}}function i0(t,e,n,i){var r=Xe,o=so.transition;so.transition=null;try{Xe=4,gf(t,e,n,i)}finally{Xe=r,so.transition=o}}function gf(t,e,n,i){if(Ga){var r=pc(t,e,n,i);if(r===null)ru(t,e,i,Wa,n),Td(t,i);else if(e0(r,t,e,n,i))i.stopPropagation();else if(Td(t,i),e&4&&-1<Jv.indexOf(t)){for(;r!==null;){var o=Ls(r);if(o!==null&&Nm(o),o=pc(t,e,n,i),o===null&&ru(t,e,i,Wa,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else ru(t,e,i,null,n)}}var Wa=null;function pc(t,e,n,i){if(Wa=null,t=df(i),t=ar(t),t!==null)if(e=Mr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Am(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wa=t,null}function zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wv()){case hf:return 1;case Lm:return 4;case Ha:case Xv:return 16;case bm:return 536870912;default:return 16}default:return 16}}var Ei=null,_f=null,Ra=null;function Bm(){if(Ra)return Ra;var t,e=_f,n=e.length,i,r="value"in Ei?Ei.value:Ei.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Ra=r.slice(t,1<i?1-i:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function js(){return!0}function Ad(){return!1}function un(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?js:Ad,this.isPropagationStopped=Ad,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=un(wo),Ps=ct({},wo,{view:0,detail:0}),r0=un(Ps),ql,Kl,Oo,xl=ct({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(ql=t.screenX-Oo.screenX,Kl=t.screenY-Oo.screenY):Kl=ql=0,Oo=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),Cd=un(xl),o0=ct({},xl,{dataTransfer:0}),s0=un(o0),a0=ct({},Ps,{relatedTarget:0}),Zl=un(a0),l0=ct({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),u0=un(l0),c0=ct({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=un(c0),d0=ct({},wo,{data:0}),Rd=un(d0),h0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m0[t])?!!e[t]:!1}function xf(){return g0}var _0=ct({},Ps,{key:function(t){if(t.key){var e=h0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v0=un(_0),x0=ct({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=un(x0),S0=ct({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),y0=un(S0),M0=ct({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=un(M0),T0=ct({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=un(T0),A0=[9,13,27,32],Sf=ri&&"CompositionEvent"in window,Jo=null;ri&&"documentMode"in document&&(Jo=document.documentMode);var C0=ri&&"TextEvent"in window&&!Jo,Hm=ri&&(!Sf||Jo&&8<Jo&&11>=Jo),Ld=" ",bd=!1;function Vm(t,e){switch(t){case"keyup":return A0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function R0(t,e){switch(t){case"compositionend":return Gm(e);case"keypress":return e.which!==32?null:(bd=!0,Ld);case"textInput":return t=e.data,t===Ld&&bd?null:t;default:return null}}function P0(t,e){if(jr)return t==="compositionend"||!Sf&&Vm(t,e)?(t=Bm(),Ra=_f=Ei=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hm&&e.locale!=="ko"?null:e.data;default:return null}}var L0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!L0[t.type]:e==="textarea"}function Wm(t,e,n,i){ym(i),e=Xa(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var es=null,ds=null;function b0(t){tg(t,0)}function Sl(t){var e=qr(t);if(pm(e))return t}function U0(t,e){if(t==="change")return e}var Xm=!1;if(ri){var Ql;if(ri){var Jl="oninput"in document;if(!Jl){var Dd=document.createElement("div");Dd.setAttribute("oninput","return;"),Jl=typeof Dd.oninput=="function"}Ql=Jl}else Ql=!1;Xm=Ql&&(!document.documentMode||9<document.documentMode)}function Nd(){es&&(es.detachEvent("onpropertychange",jm),ds=es=null)}function jm(t){if(t.propertyName==="value"&&Sl(ds)){var e=[];Wm(e,ds,t,df(t)),wm(b0,e)}}function D0(t,e,n){t==="focusin"?(Nd(),es=e,ds=n,es.attachEvent("onpropertychange",jm)):t==="focusout"&&Nd()}function N0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ds)}function I0(t,e){if(t==="click")return Sl(e)}function F0(t,e){if(t==="input"||t==="change")return Sl(e)}function O0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:O0;function hs(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ku.call(e,r)||!Ln(t[r],e[r]))return!1}return!0}function Id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fd(t,e){var n=Id(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function Ym(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ym(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $m(){for(var t=window,e=ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ka(t.document)}return e}function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k0(t){var e=$m(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ym(n.ownerDocument.documentElement,n)){if(i!==null&&yf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Fd(n,o);var s=Fd(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z0=ri&&"documentMode"in document&&11>=document.documentMode,Yr=null,mc=null,ts=null,gc=!1;function Od(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||Yr==null||Yr!==ka(i)||(i=Yr,"selectionStart"in i&&yf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ts&&hs(ts,i)||(ts=i,i=Xa(mc,"onSelect"),0<i.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Yr)))}function Ys(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},eu={},qm={};ri&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function yl(t){if(eu[t])return eu[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qm)return eu[t]=e[n];return t}var Km=yl("animationend"),Zm=yl("animationiteration"),Qm=yl("animationstart"),Jm=yl("transitionend"),eg=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){eg.set(t,e),yr(e,[t])}for(var tu=0;tu<kd.length;tu++){var nu=kd[tu],B0=nu.toLowerCase(),H0=nu[0].toUpperCase()+nu.slice(1);Gi(B0,"on"+H0)}Gi(Km,"onAnimationEnd");Gi(Zm,"onAnimationIteration");Gi(Qm,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(Jm,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function zd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Bv(i,e,void 0,t),t.currentTarget=null}function tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;zd(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;zd(r,a,u),o=l}}}if(Ba)throw t=fc,Ba=!1,fc=null,t}function Qe(t,e){var n=e[yc];n===void 0&&(n=e[yc]=new Set);var i=t+"__bubble";n.has(i)||(ng(e,t,2,!1),n.add(i))}function iu(t,e,n){var i=0;e&&(i|=4),ng(n,t,i,e)}var $s="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[$s]){t[$s]=!0,um.forEach(function(n){n!=="selectionchange"&&(V0.has(n)||iu(n,!1,t),iu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$s]||(e[$s]=!0,iu("selectionchange",!1,e))}}function ng(t,e,n,i){switch(zm(e)){case 1:var r=n0;break;case 4:r=i0;break;default:r=gf}n=r.bind(null,e,n,t),r=void 0,!cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ru(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=ar(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}wm(function(){var u=o,f=df(n),d=[];e:{var h=eg.get(t);if(h!==void 0){var m=vf,x=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":m=v0;break;case"focusin":x="focus",m=Zl;break;case"focusout":x="blur",m=Zl;break;case"beforeblur":case"afterblur":m=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=s0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=y0;break;case Km:case Zm:case Qm:m=u0;break;case Jm:m=E0;break;case"scroll":m=r0;break;case"wheel":m=w0;break;case"copy":case"cut":case"paste":m=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Pd}var v=(e&4)!==0,p=!v&&t==="scroll",c=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,g;_!==null;){g=_;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,c!==null&&(E=ls(_,c),E!=null&&v.push(ms(_,E,g)))),p)break;_=_.return}0<v.length&&(h=new m(h,x,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==lc&&(x=n.relatedTarget||n.fromElement)&&(ar(x)||x[oi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?ar(x):null,x!==null&&(p=Mr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(v=Cd,E="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Pd,E="onPointerLeave",c="onPointerEnter",_="pointer"),p=m==null?h:qr(m),g=x==null?h:qr(x),h=new v(E,_+"leave",m,n,f),h.target=p,h.relatedTarget=g,E=null,ar(f)===u&&(v=new v(c,_+"enter",x,n,f),v.target=g,v.relatedTarget=p,E=v),p=E,m&&x)t:{for(v=m,c=x,_=0,g=v;g;g=Ar(g))_++;for(g=0,E=c;E;E=Ar(E))g++;for(;0<_-g;)v=Ar(v),_--;for(;0<g-_;)c=Ar(c),g--;for(;_--;){if(v===c||c!==null&&v===c.alternate)break t;v=Ar(v),c=Ar(c)}v=null}else v=null;m!==null&&Bd(d,h,m,v,!1),x!==null&&p!==null&&Bd(d,p,x,v,!0)}}e:{if(h=u?qr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=U0;else if(Ud(h))if(Xm)P=F0;else{P=N0;var C=D0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=I0);if(P&&(P=P(t,u))){Wm(d,P,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ic(h,"number",h.value)}switch(C=u?qr(u):window,t){case"focusin":(Ud(C)||C.contentEditable==="true")&&(Yr=C,mc=u,ts=null);break;case"focusout":ts=mc=Yr=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Od(d,n,f);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":Od(d,n,f)}var w;if(Sf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else jr?Vm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Hm&&n.locale!=="ko"&&(jr||b!=="onCompositionStart"?b==="onCompositionEnd"&&jr&&(w=Bm()):(Ei=f,_f="value"in Ei?Ei.value:Ei.textContent,jr=!0)),C=Xa(u,b),0<C.length&&(b=new Rd(b,t,null,n,f),d.push({event:b,listeners:C}),w?b.data=w:(w=Gm(n),w!==null&&(b.data=w)))),(w=C0?R0(t,n):P0(t,n))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(f=new Rd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=w))}tg(d,e)})}function ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ls(t,n),o!=null&&i.unshift(ms(t,o,r)),o=ls(t,e),o!=null&&i.push(ms(t,o,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bd(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ls(n,o),l!=null&&s.unshift(ms(n,l,a))):r||(l=ls(n,o),l!=null&&s.push(ms(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var G0=/\r\n?/g,W0=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(G0,`
`).replace(W0,"")}function qs(t,e,n){if(e=Hd(e),Hd(t)!==e&&n)throw Error(K(425))}function ja(){}var _c=null,vc=null;function xc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(t){return Vd.resolve(null).then(t).catch(Y0)}:Sc;function Y0(t){setTimeout(function(){throw t})}function ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fs(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),On="__reactFiber$"+Ao,gs="__reactProps$"+Ao,oi="__reactContainer$"+Ao,yc="__reactEvents$"+Ao,$0="__reactListeners$"+Ao,q0="__reactHandles$"+Ao;function ar(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oi]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gd(t);t!==null;){if(n=t[On])return n;t=Gd(t)}return e}t=n,n=t.parentNode}return null}function Ls(t){return t=t[On]||t[oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(K(33))}function Ml(t){return t[gs]||null}var Mc=[],Kr=-1;function Wi(t){return{current:t}}function tt(t){0>Kr||(t.current=Mc[Kr],Mc[Kr]=null,Kr--)}function Ke(t,e){Kr++,Mc[Kr]=t.current,t.current=e}var Bi={},kt=Wi(Bi),$t=Wi(!1),mr=Bi;function po(t,e){var n=t.type.contextTypes;if(!n)return Bi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function qt(t){return t=t.childContextTypes,t!=null}function Ya(){tt($t),tt(kt)}function Wd(t,e,n){if(kt.current!==Bi)throw Error(K(168));Ke(kt,e),Ke($t,n)}function ig(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(K(108,Dv(t)||"Unknown",r));return ct({},n,i)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,mr=kt.current,Ke(kt,t),Ke($t,$t.current),!0}function Xd(t,e,n){var i=t.stateNode;if(!i)throw Error(K(169));n?(t=ig(t,e,mr),i.__reactInternalMemoizedMergedChildContext=t,tt($t),tt(kt),Ke(kt,t)):tt($t),Ke($t,n)}var Qn=null,El=!1,su=!1;function rg(t){Qn===null?Qn=[t]:Qn.push(t)}function K0(t){El=!0,rg(t)}function Xi(){if(!su&&Qn!==null){su=!0;var t=0,e=Xe;try{var n=Qn;for(Xe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Qn=null,El=!1}catch(r){throw Qn!==null&&(Qn=Qn.slice(t+1)),Pm(hf,Xi),r}finally{Xe=e,su=!1}}return null}var Zr=[],Qr=0,qa=null,Ka=0,dn=[],hn=0,gr=null,ei=1,ti="";function tr(t,e){Zr[Qr++]=Ka,Zr[Qr++]=qa,qa=t,Ka=e}function og(t,e,n){dn[hn++]=ei,dn[hn++]=ti,dn[hn++]=gr,gr=t;var i=ei;t=ti;var r=32-Rn(i)-1;i&=~(1<<r),n+=1;var o=32-Rn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ei=1<<32-Rn(e)+r|n<<r|i,ti=o+t}else ei=1<<o|n<<r|i,ti=t}function Mf(t){t.return!==null&&(tr(t,1),og(t,1,0))}function Ef(t){for(;t===qa;)qa=Zr[--Qr],Zr[Qr]=null,Ka=Zr[--Qr],Zr[Qr]=null;for(;t===gr;)gr=dn[--hn],dn[hn]=null,ti=dn[--hn],dn[hn]=null,ei=dn[--hn],dn[hn]=null}var on=null,rn=null,ot=!1,An=null;function sg(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:ei,overflow:ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(ot){var e=rn;if(e){var n=e;if(!jd(t,e)){if(Ec(t))throw Error(K(418));e=Li(n.nextSibling);var i=on;e&&jd(t,e)?sg(i,n):(t.flags=t.flags&-4097|2,ot=!1,on=t)}}else{if(Ec(t))throw Error(K(418));t.flags=t.flags&-4097|2,ot=!1,on=t}}}function Yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Ks(t){if(t!==on)return!1;if(!ot)return Yd(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xc(t.type,t.memoizedProps)),e&&(e=rn)){if(Ec(t))throw ag(),Error(K(418));for(;e;)sg(t,e),e=Li(e.nextSibling)}if(Yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(K(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?Li(t.stateNode.nextSibling):null;return!0}function ag(){for(var t=rn;t;)t=Li(t.nextSibling)}function mo(){rn=on=null,ot=!1}function Tf(t){An===null?An=[t]:An.push(t)}var Z0=ui.ReactCurrentBatchConfig;function Tn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Za=Wi(null),Qa=null,Jr=null,wf=null;function Af(){wf=Jr=Qa=null}function Cf(t){var e=Za.current;tt(Za),t._currentValue=e}function wc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ao(t,e){Qa=t,wf=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(wf!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(Qa===null)throw Error(K(308));Jr=t,Qa.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var lr=null;function Rf(t){lr===null?lr=[t]:lr.push(t)}function lg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,si(t,i)}function si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xi=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Be&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,si(t,n)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,si(t,n)}function La(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}function $d(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ja(t,e,n,i){var r=t.updateQueue;xi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,f=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(h=e,m=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=ct({},d,h);break e;case 2:xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,l=d):f=f.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);vr|=s,t.lanes=s,t.memoizedState=d}}function qd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(K(191,r));r.call(i)}}}var cg=new lm.Component().refs;function Ac(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Mr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ht(),r=Di(t),o=ii(i,r);o.payload=e,n!=null&&(o.callback=n),e=bi(t,o,r),e!==null&&(Pn(e,t,r,i),La(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ht(),r=Di(t),o=ii(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=bi(t,o,r),e!==null&&(Pn(e,t,r,i),La(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),i=Di(t),r=ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=bi(t,r,i),e!==null&&(Pn(e,t,i,n),La(e,t,i))}};function Kd(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!hs(n,i)||!hs(r,o):!0}function fg(t,e,n){var i=!1,r=Bi,o=e.contextType;return typeof o=="object"&&o!==null?o=vn(o):(r=qt(e)?mr:kt.current,i=e.contextTypes,o=(i=i!=null)?po(t,r):Bi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Zd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Cc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=cg,Pf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=vn(o):(o=qt(e)?mr:kt.current,r.context=po(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ac(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tl.enqueueReplaceState(r,r.state,null),Ja(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var i=n.stateNode}if(!i)throw Error(K(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===cg&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,t))}return t}function Zs(t,e){throw t=Object.prototype.toString.call(e),Error(K(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qd(t){var e=t._init;return e(t._payload)}function dg(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Ni(c,_),c.index=0,c.sibling=null,c}function o(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,E){return _===null||_.tag!==6?(_=hu(g,c.mode,E),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,E){var P=g.type;return P===Xr?f(c,_,g.props.children,E,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vi&&Qd(P)===_.type)?(E=r(_,g.props),E.ref=ko(c,_,g),E.return=c,E):(E=Fa(g.type,g.key,g.props,null,c.mode,E),E.ref=ko(c,_,g),E.return=c,E)}function u(c,_,g,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=pu(g,c.mode,E),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,E,P){return _===null||_.tag!==7?(_=hr(g,c.mode,E,P),_.return=c,_):(_=r(_,g),_.return=c,_)}function d(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=hu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Bs:return g=Fa(_.type,_.key,_.props,null,c.mode,g),g.ref=ko(c,null,_),g.return=c,g;case Wr:return _=pu(_,c.mode,g),_.return=c,_;case vi:var E=_._init;return d(c,E(_._payload),g)}if(Yo(_)||Do(_))return _=hr(_,c.mode,g,null),_.return=c,_;Zs(c,_)}return null}function h(c,_,g,E){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(c,_,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bs:return g.key===P?l(c,_,g,E):null;case Wr:return g.key===P?u(c,_,g,E):null;case vi:return P=g._init,h(c,_,P(g._payload),E)}if(Yo(g)||Do(g))return P!==null?null:f(c,_,g,E,null);Zs(c,g)}return null}function m(c,_,g,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return c=c.get(g)||null,a(_,c,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Bs:return c=c.get(E.key===null?g:E.key)||null,l(_,c,E,P);case Wr:return c=c.get(E.key===null?g:E.key)||null,u(_,c,E,P);case vi:var C=E._init;return m(c,_,g,C(E._payload),P)}if(Yo(E)||Do(E))return c=c.get(g)||null,f(_,c,E,P,null);Zs(_,E)}return null}function x(c,_,g,E){for(var P=null,C=null,w=_,b=_=0,T=null;w!==null&&b<g.length;b++){w.index>b?(T=w,w=null):T=w.sibling;var S=h(c,w,g[b],E);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(c,w),_=o(S,_,b),C===null?P=S:C.sibling=S,C=S,w=T}if(b===g.length)return n(c,w),ot&&tr(c,b),P;if(w===null){for(;b<g.length;b++)w=d(c,g[b],E),w!==null&&(_=o(w,_,b),C===null?P=w:C.sibling=w,C=w);return ot&&tr(c,b),P}for(w=i(c,w);b<g.length;b++)T=m(w,c,b,g[b],E),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?b:T.key),_=o(T,_,b),C===null?P=T:C.sibling=T,C=T);return t&&w.forEach(function(N){return e(c,N)}),ot&&tr(c,b),P}function v(c,_,g,E){var P=Do(g);if(typeof P!="function")throw Error(K(150));if(g=P.call(g),g==null)throw Error(K(151));for(var C=P=null,w=_,b=_=0,T=null,S=g.next();w!==null&&!S.done;b++,S=g.next()){w.index>b?(T=w,w=null):T=w.sibling;var N=h(c,w,S.value,E);if(N===null){w===null&&(w=T);break}t&&w&&N.alternate===null&&e(c,w),_=o(N,_,b),C===null?P=N:C.sibling=N,C=N,w=T}if(S.done)return n(c,w),ot&&tr(c,b),P;if(w===null){for(;!S.done;b++,S=g.next())S=d(c,S.value,E),S!==null&&(_=o(S,_,b),C===null?P=S:C.sibling=S,C=S);return ot&&tr(c,b),P}for(w=i(c,w);!S.done;b++,S=g.next())S=m(w,c,b,S.value,E),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?b:S.key),_=o(S,_,b),C===null?P=S:C.sibling=S,C=S);return t&&w.forEach(function(W){return e(c,W)}),ot&&tr(c,b),P}function p(c,_,g,E){if(typeof g=="object"&&g!==null&&g.type===Xr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Bs:e:{for(var P=g.key,C=_;C!==null;){if(C.key===P){if(P=g.type,P===Xr){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vi&&Qd(P)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=ko(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===Xr?(_=hr(g.props.children,c.mode,E,g.key),_.return=c,c=_):(E=Fa(g.type,g.key,g.props,null,c.mode,E),E.ref=ko(c,_,g),E.return=c,c=E)}return s(c);case Wr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=pu(g,c.mode,E),_.return=c,c=_}return s(c);case vi:return C=g._init,p(c,_,C(g._payload),E)}if(Yo(g))return x(c,_,g,E);if(Do(g))return v(c,_,g,E);Zs(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=hu(g,c.mode,E),_.return=c,c=_),s(c)):n(c,_)}return p}var go=dg(!0),hg=dg(!1),bs={},Vn=Wi(bs),_s=Wi(bs),vs=Wi(bs);function ur(t){if(t===bs)throw Error(K(174));return t}function Lf(t,e){switch(Ke(vs,e),Ke(_s,t),Ke(Vn,bs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}tt(Vn),Ke(Vn,e)}function _o(){tt(Vn),tt(_s),tt(vs)}function pg(t){ur(vs.current);var e=ur(Vn.current),n=oc(e,t.type);e!==n&&(Ke(_s,t),Ke(Vn,n))}function bf(t){_s.current===t&&(tt(Vn),tt(_s))}var lt=Wi(0);function el(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var au=[];function Uf(){for(var t=0;t<au.length;t++)au[t]._workInProgressVersionPrimary=null;au.length=0}var ba=ui.ReactCurrentDispatcher,lu=ui.ReactCurrentBatchConfig,_r=0,ut=null,vt=null,wt=null,tl=!1,ns=!1,xs=0,Q0=0;function Dt(){throw Error(K(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function Nf(t,e,n,i,r,o){if(_r=o,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?nx:ix,t=n(i,r),ns){o=0;do{if(ns=!1,xs=0,25<=o)throw Error(K(301));o+=1,wt=vt=null,e.updateQueue=null,ba.current=rx,t=n(i,r)}while(ns)}if(ba.current=nl,e=vt!==null&&vt.next!==null,_r=0,wt=vt=ut=null,tl=!1,e)throw Error(K(300));return t}function If(){var t=xs!==0;return xs=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ut.memoizedState=wt=t:wt=wt.next=t,wt}function xn(){if(vt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=wt===null?ut.memoizedState:wt.next;if(e!==null)wt=e,vt=t;else{if(t===null)throw Error(K(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},wt===null?ut.memoizedState=wt=t:wt=wt.next=t}return wt}function Ss(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=xn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var i=vt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((_r&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,ut.lanes|=f,vr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Ln(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ut.lanes|=o,vr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cu(t){var e=xn(),n=e.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Ln(o,e.memoizedState)||(Yt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function mg(){}function gg(t,e){var n=ut,i=xn(),r=e(),o=!Ln(i.memoizedState,r);if(o&&(i.memoizedState=r,Yt=!0),i=i.queue,Ff(xg.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,ys(9,vg.bind(null,n,i,r,e),void 0,null),At===null)throw Error(K(349));_r&30||_g(n,e,r)}return r}function _g(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vg(t,e,n,i){e.value=n,e.getSnapshot=i,Sg(e)&&yg(t)}function xg(t,e,n){return n(function(){Sg(e)&&yg(t)})}function Sg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function yg(t){var e=si(t,1);e!==null&&Pn(e,t,1,-1)}function Jd(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},e.queue=t,t=t.dispatch=tx.bind(null,ut,t),[e.memoizedState,t]}function ys(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Mg(){return xn().memoizedState}function Ua(t,e,n,i){var r=Nn();ut.flags|=t,r.memoizedState=ys(1|e,n,void 0,i===void 0?null:i)}function wl(t,e,n,i){var r=xn();i=i===void 0?null:i;var o=void 0;if(vt!==null){var s=vt.memoizedState;if(o=s.destroy,i!==null&&Df(i,s.deps)){r.memoizedState=ys(e,n,o,i);return}}ut.flags|=t,r.memoizedState=ys(1|e,n,o,i)}function eh(t,e){return Ua(8390656,8,t,e)}function Ff(t,e){return wl(2048,8,t,e)}function Eg(t,e){return wl(4,2,t,e)}function Tg(t,e){return wl(4,4,t,e)}function wg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ag(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,wg.bind(null,e,t),n)}function Of(){}function Cg(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rg(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Pg(t,e,n){return _r&21?(Ln(n,e)||(n=Um(),ut.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function J0(t,e){var n=Xe;Xe=n!==0&&4>n?n:4,t(!0);var i=lu.transition;lu.transition={};try{t(!1),e()}finally{Xe=n,lu.transition=i}}function Lg(){return xn().memoizedState}function ex(t,e,n){var i=Di(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},bg(t))Ug(e,n);else if(n=lg(t,e,n,i),n!==null){var r=Ht();Pn(n,t,i,r),Dg(n,e,i)}}function tx(t,e,n){var i=Di(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(bg(t))Ug(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Ln(a,s)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lg(t,e,r,i),n!==null&&(r=Ht(),Pn(n,t,i,r),Dg(n,e,i))}}function bg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Ug(t,e){ns=tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}var nl={readContext:vn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},nx={readContext:vn,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:eh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4194308,4,wg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ua(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ua(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Nn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ex.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:Jd,useDebugValue:Of,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=Jd(!1),e=t[0];return t=J0.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Nn();if(ot){if(n===void 0)throw Error(K(407));n=n()}else{if(n=e(),At===null)throw Error(K(349));_r&30||_g(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,eh(xg.bind(null,i,o,t),[t]),i.flags|=2048,ys(9,vg.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Nn(),e=At.identifierPrefix;if(ot){var n=ti,i=ei;n=(i&~(1<<32-Rn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Q0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ix={readContext:vn,useCallback:Cg,useContext:vn,useEffect:Ff,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Rg,useReducer:uu,useRef:Mg,useState:function(){return uu(Ss)},useDebugValue:Of,useDeferredValue:function(t){var e=xn();return Pg(e,vt.memoizedState,t)},useTransition:function(){var t=uu(Ss)[0],e=xn().memoizedState;return[t,e]},useMutableSource:mg,useSyncExternalStore:gg,useId:Lg,unstable_isNewReconciler:!1},rx={readContext:vn,useCallback:Cg,useContext:vn,useEffect:Ff,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:Tg,useMemo:Rg,useReducer:cu,useRef:Mg,useState:function(){return cu(Ss)},useDebugValue:Of,useDeferredValue:function(t){var e=xn();return vt===null?e.memoizedState=t:Pg(e,vt.memoizedState,t)},useTransition:function(){var t=cu(Ss)[0],e=xn().memoizedState;return[t,e]},useMutableSource:mg,useSyncExternalStore:gg,useId:Lg,unstable_isNewReconciler:!1};function vo(t,e){try{var n="",i=e;do n+=Uv(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function fu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ox=typeof WeakMap=="function"?WeakMap:Map;function Ng(t,e,n){n=ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){rl||(rl=!0,kc=i),Rc(t,e)},n}function Ig(t,e,n){n=ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rc(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Rc(t,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function th(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ox;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=xx.bind(null,t,e,n),e.then(t,t))}function nh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ih(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ii(-1,1),e.tag=2,bi(n,e,1))),n.lanes|=1),t)}var sx=ui.ReactCurrentOwner,Yt=!1;function Bt(t,e,n,i){e.child=t===null?hg(e,null,n,i):go(e,t.child,n,i)}function rh(t,e,n,i,r){n=n.render;var o=e.ref;return ao(e,r),i=Nf(t,e,n,i,o,r),n=If(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ai(t,e,r)):(ot&&n&&Mf(e),e.flags|=1,Bt(t,e,i,r),e.child)}function oh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Xf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Fg(t,e,o,i,r)):(t=Fa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(s,i)&&t.ref===e.ref)return ai(t,e,r)}return e.flags|=1,t=Ni(o,i),t.ref=e.ref,t.return=e,e.child=t}function Fg(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(hs(o,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,ai(t,e,r)}return Pc(t,e,n,i,r)}function Og(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(to,nn),nn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(to,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ke(to,nn),nn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ke(to,nn),nn|=i;return Bt(t,e,r,n),e.child}function kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pc(t,e,n,i,r){var o=qt(n)?mr:kt.current;return o=po(e,o),ao(e,r),n=Nf(t,e,n,i,o,r),i=If(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ai(t,e,r)):(ot&&i&&Mf(e),e.flags|=1,Bt(t,e,n,r),e.child)}function sh(t,e,n,i,r){if(qt(n)){var o=!0;$a(e)}else o=!1;if(ao(e,r),e.stateNode===null)Da(t,e),fg(e,n,i),Cc(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=vn(u):(u=qt(n)?mr:kt.current,u=po(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Zd(e,s,i,u),xi=!1;var h=e.memoizedState;s.state=h,Ja(e,i,s,r),l=e.memoizedState,a!==i||h!==l||$t.current||xi?(typeof f=="function"&&(Ac(e,n,f,i),l=e.memoizedState),(a=xi||Kd(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ug(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Tn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=qt(n)?mr:kt.current,l=po(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Zd(e,s,i,l),xi=!1,h=e.memoizedState,s.state=h,Ja(e,i,s,r);var x=e.memoizedState;a!==d||h!==x||$t.current||xi?(typeof m=="function"&&(Ac(e,n,m,i),x=e.memoizedState),(u=xi||Kd(e,n,u,i,h,x,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Lc(t,e,n,i,o,r)}function Lc(t,e,n,i,r,o){kg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Xd(e,n,!1),ai(t,e,o);i=e.stateNode,sx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=go(e,t.child,null,o),e.child=go(e,null,a,o)):Bt(t,e,a,o),e.memoizedState=i.state,r&&Xd(e,n,!0),e.child}function zg(t){var e=t.stateNode;e.pendingContext?Wd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wd(t,e.context,!1),Lf(t,e.containerInfo)}function ah(t,e,n,i,r){return mo(),Tf(r),e.flags|=256,Bt(t,e,n,i),e.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Uc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bg(t,e,n){var i=e.pendingProps,r=lt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(lt,r&1),t===null)return Tc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Rl(s,i,0,null),t=hr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Uc(n),e.memoizedState=bc,t):kf(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ax(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ni(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Ni(a,o):(o=hr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Uc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=bc,i}return o=t.child,t=o.sibling,i=Ni(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kf(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qs(t,e,n,i){return i!==null&&Tf(i),go(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ax(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=fu(Error(K(422))),Qs(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Rl({mode:"visible",children:i.children},r,0,null),o=hr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&go(e,t.child,null,s),e.child.memoizedState=Uc(s),e.memoizedState=bc,o);if(!(e.mode&1))return Qs(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(K(419)),i=fu(o,i,void 0),Qs(t,e,s,i)}if(a=(s&t.childLanes)!==0,Yt||a){if(i=At,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,si(t,r),Pn(i,t,r,-1))}return Wf(),i=fu(Error(K(421))),Qs(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Sx.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,rn=Li(r.nextSibling),on=e,ot=!0,An=null,t!==null&&(dn[hn++]=ei,dn[hn++]=ti,dn[hn++]=gr,ei=t.id,ti=t.overflow,gr=e),e=kf(e,i.children),e.flags|=4096,e)}function lh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wc(t.return,e,n)}function du(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Hg(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Bt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lh(t,n,e);else if(t.tag===19)lh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&el(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),du(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&el(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}du(e,!0,n,null,o);break;case"together":du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(K(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lx(t,e,n){switch(e.tag){case 3:zg(e),mo();break;case 5:pg(e);break;case 1:qt(e.type)&&$a(e);break;case 4:Lf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(Za,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Bg(t,e,n):(Ke(lt,lt.current&1),t=ai(t,e,n),t!==null?t.sibling:null);Ke(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Og(t,e,n)}return ai(t,e,n)}var Vg,Dc,Gg,Wg;Vg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Dc=function(){};Gg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Vn.current);var o=null;switch(n){case"input":r=tc(t,r),i=tc(t,i),o=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),o=[];break;case"textarea":r=rc(t,r),i=rc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ja)}sc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ss.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ss.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Wg=function(t,e,n,i){n!==i&&(e.flags|=4)};function zo(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ux(t,e,n){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return qt(e.type)&&Ya(),Nt(e),null;case 3:return i=e.stateNode,_o(),tt($t),tt(kt),Uf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ks(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Hc(An),An=null))),Dc(t,e),Nt(e),null;case 5:bf(e);var r=ur(vs.current);if(n=e.type,t!==null&&e.stateNode!=null)Gg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(K(166));return Nt(e),null}if(t=ur(Vn.current),Ks(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[On]=e,i[gs]=o,t=(e.mode&1)!==0,n){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)Qe(qo[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":_d(i,o),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Qe("invalid",i);break;case"textarea":xd(i,o),Qe("invalid",i)}sc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&qs(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&qs(i.textContent,a,t),r=["children",""+a]):ss.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Qe("scroll",i)}switch(n){case"input":Hs(i),vd(i,o,!0);break;case"textarea":Hs(i),Sd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_m(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[On]=e,t[gs]=i,Vg(t,e,!1,!1),e.stateNode=t;e:{switch(s=ac(n,i),n){case"dialog":Qe("cancel",t),Qe("close",t),r=i;break;case"iframe":case"object":case"embed":Qe("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)Qe(qo[r],t);r=i;break;case"source":Qe("error",t),r=i;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),r=i;break;case"details":Qe("toggle",t),r=i;break;case"input":_d(t,i),r=tc(t,i),Qe("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),Qe("invalid",t);break;case"textarea":xd(t,i),r=rc(t,i),Qe("invalid",t);break;default:r=i}sc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Sm(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&as(t,l):typeof l=="number"&&as(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ss.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Qe("scroll",t):l!=null&&lf(t,o,l,s))}switch(n){case"input":Hs(t),vd(t,i,!1);break;case"textarea":Hs(t),Sd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?io(t,!!i.multiple,o,!1):i.defaultValue!=null&&io(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)Wg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(K(166));if(n=ur(vs.current),ur(Vn.current),Ks(e)){if(i=e.stateNode,n=e.memoizedProps,i[On]=e,(o=i.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:qs(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qs(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[On]=e,e.stateNode=i}return Nt(e),null;case 13:if(tt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&rn!==null&&e.mode&1&&!(e.flags&128))ag(),mo(),e.flags|=98560,o=!1;else if(o=Ks(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(K(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(K(317));o[On]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),o=!1}else An!==null&&(Hc(An),An=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?xt===0&&(xt=3):Wf())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return _o(),Dc(t,e),t===null&&ps(e.stateNode.containerInfo),Nt(e),null;case 10:return Cf(e.type._context),Nt(e),null;case 17:return qt(e.type)&&Ya(),Nt(e),null;case 19:if(tt(lt),o=e.memoizedState,o===null)return Nt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)zo(o,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=el(t),s!==null){for(e.flags|=128,zo(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(lt,lt.current&1|2),e.child}t=t.sibling}o.tail!==null&&ht()>xo&&(e.flags|=128,i=!0,zo(o,!1),e.lanes=4194304)}else{if(!i)if(t=el(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ot)return Nt(e),null}else 2*ht()-o.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,i=!0,zo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ht(),e.sibling=null,n=lt.current,Ke(lt,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?nn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(K(156,e.tag))}function cx(t,e){switch(Ef(e),e.tag){case 1:return qt(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),tt($t),tt(kt),Uf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(tt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(K(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(lt),null;case 4:return _o(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var Js=!1,Ot=!1,fx=typeof WeakSet=="function"?WeakSet:Set,ue=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function Nc(t,e,n){try{n()}catch(i){ft(t,e,i)}}var uh=!1;function dx(t,e){if(_c=Ga,t=$m(),yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++f===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:t,selectionRange:n},Ga=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){e=ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,p=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:Tn(e.type,v),p);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(E){ft(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return x=uh,uh=!1,x}function is(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Nc(e,n,o)}r=r.next}while(r!==i)}}function Al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xg(t){var e=t.alternate;e!==null&&(t.alternate=null,Xg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[gs],delete e[yc],delete e[$0],delete e[q0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jg(t){return t.tag===5||t.tag===3||t.tag===4}function ch(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(i!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}function Oc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Oc(t,e,n),t=t.sibling;t!==null;)Oc(t,e,n),t=t.sibling}var Ct=null,wn=!1;function fi(t,e,n){for(n=n.child;n!==null;)Yg(t,e,n),n=n.sibling}function Yg(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:Ot||eo(n,e);case 6:var i=Ct,r=wn;Ct=null,fi(t,e,n),Ct=i,wn=r,Ct!==null&&(wn?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(wn?(t=Ct,n=n.stateNode,t.nodeType===8?ou(t.parentNode,n):t.nodeType===1&&ou(t,n),fs(t)):ou(Ct,n.stateNode));break;case 4:i=Ct,r=wn,Ct=n.stateNode.containerInfo,wn=!0,fi(t,e,n),Ct=i,wn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Nc(n,e,s),r=r.next}while(r!==i)}fi(t,e,n);break;case 1:if(!Ot&&(eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}fi(t,e,n);break;case 21:fi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,fi(t,e,n),Ot=i):fi(t,e,n);break;default:fi(t,e,n)}}function fh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fx),e.forEach(function(i){var r=yx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,wn=!1;break e;case 3:Ct=a.stateNode.containerInfo,wn=!0;break e;case 4:Ct=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(Ct===null)throw Error(K(160));Yg(o,s,r),Ct=null,wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ft(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Dn(t),i&4){try{is(3,t,t.return),Al(3,t)}catch(v){ft(t,t.return,v)}try{is(5,t,t.return)}catch(v){ft(t,t.return,v)}}break;case 1:Sn(e,t),Dn(t),i&512&&n!==null&&eo(n,n.return);break;case 5:if(Sn(e,t),Dn(t),i&512&&n!==null&&eo(n,n.return),t.flags&32){var r=t.stateNode;try{as(r,"")}catch(v){ft(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&mm(r,o),ac(a,s);var u=ac(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?Sm(r,d):f==="dangerouslySetInnerHTML"?vm(r,d):f==="children"?as(r,d):lf(r,f,d,u)}switch(a){case"input":nc(r,o);break;case"textarea":gm(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?io(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?io(r,!!o.multiple,o.defaultValue,!0):io(r,!!o.multiple,o.multiple?[]:"",!1))}r[gs]=o}catch(v){ft(t,t.return,v)}}break;case 6:if(Sn(e,t),Dn(t),i&4){if(t.stateNode===null)throw Error(K(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(v){ft(t,t.return,v)}}break;case 3:if(Sn(e,t),Dn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fs(e.containerInfo)}catch(v){ft(t,t.return,v)}break;case 4:Sn(e,t),Dn(t);break;case 13:Sn(e,t),Dn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Hf=ht())),i&4&&fh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||f,Sn(e,t),Ot=u):Sn(e,t),Dn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ue=t,f=t.child;f!==null;){for(d=ue=f;ue!==null;){switch(h=ue,m=h.child,h.tag){case 0:case 11:case 14:case 15:is(4,h,h.return);break;case 1:eo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){ft(i,n,v)}}break;case 5:eo(h,h.return);break;case 22:if(h.memoizedState!==null){hh(d);continue}}m!==null?(m.return=h,ue=m):hh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xm("display",s))}catch(v){ft(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ft(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Sn(e,t),Dn(t),i&4&&fh(t);break;case 21:break;default:Sn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jg(n)){var i=n;break e}n=n.return}throw Error(K(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(as(r,""),i.flags&=-33);var o=ch(t);Oc(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=ch(t);Fc(t,a,s);break;default:throw Error(K(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hx(t,e,n){ue=t,qg(t)}function qg(t,e,n){for(var i=(t.mode&1)!==0;ue!==null;){var r=ue,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Js;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=Js;var u=Ot;if(Js=s,(Ot=l)&&!u)for(ue=r;ue!==null;)s=ue,l=s.child,s.tag===22&&s.memoizedState!==null?ph(r):l!==null?(l.return=s,ue=l):ph(r);for(;o!==null;)ue=o,qg(o),o=o.sibling;ue=r,Js=a,Ot=u}dh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ue=o):dh(t)}}function dh(t){for(;ue!==null;){var e=ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Al(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&qd(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&fs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}Ot||e.flags&512&&Ic(e)}catch(h){ft(e,e.return,h)}}if(e===t){ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}}function hh(t){for(;ue!==null;){var e=ue;if(e===t){ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ue=n;break}ue=e.return}}function ph(t){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Al(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var o=e.return;try{Ic(e)}catch(l){ft(e,o,l)}break;case 5:var s=e.return;try{Ic(e)}catch(l){ft(e,s,l)}}}catch(l){ft(e,e.return,l)}if(e===t){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var px=Math.ceil,il=ui.ReactCurrentDispatcher,zf=ui.ReactCurrentOwner,_n=ui.ReactCurrentBatchConfig,Be=0,At=null,gt=null,Pt=0,nn=0,to=Wi(0),xt=0,Ms=null,vr=0,Cl=0,Bf=0,rs=null,Xt=null,Hf=0,xo=1/0,Zn=null,rl=!1,kc=null,Ui=null,ea=!1,Ti=null,ol=0,os=0,zc=null,Na=-1,Ia=0;function Ht(){return Be&6?ht():Na!==-1?Na:Na=ht()}function Di(t){return t.mode&1?Be&2&&Pt!==0?Pt&-Pt:Z0.transition!==null?(Ia===0&&(Ia=Um()),Ia):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:zm(t.type)),t):1}function Pn(t,e,n,i){if(50<os)throw os=0,zc=null,Error(K(185));Rs(t,n,i),(!(Be&2)||t!==At)&&(t===At&&(!(Be&2)&&(Cl|=n),xt===4&&yi(t,Pt)),Kt(t,i),n===1&&Be===0&&!(e.mode&1)&&(xo=ht()+500,El&&Xi()))}function Kt(t,e){var n=t.callbackNode;Zv(t,e);var i=Va(t,t===At?Pt:0);if(i===0)n!==null&&Ed(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ed(n),e===1)t.tag===0?K0(mh.bind(null,t)):rg(mh.bind(null,t)),j0(function(){!(Be&6)&&Xi()}),n=null;else{switch(Dm(i)){case 1:n=hf;break;case 4:n=Lm;break;case 16:n=Ha;break;case 536870912:n=bm;break;default:n=Ha}n=i_(n,Kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kg(t,e){if(Na=-1,Ia=0,Be&6)throw Error(K(327));var n=t.callbackNode;if(lo()&&t.callbackNode!==n)return null;var i=Va(t,t===At?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sl(t,i);else{e=i;var r=Be;Be|=2;var o=Qg();(At!==t||Pt!==e)&&(Zn=null,xo=ht()+500,dr(t,e));do try{_x();break}catch(a){Zg(t,a)}while(!0);Af(),il.current=o,Be=r,gt!==null?e=0:(At=null,Pt=0,e=xt)}if(e!==0){if(e===2&&(r=dc(t),r!==0&&(i=r,e=Bc(t,r))),e===1)throw n=Ms,dr(t,0),yi(t,i),Kt(t,ht()),n;if(e===6)yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!mx(r)&&(e=sl(t,i),e===2&&(o=dc(t),o!==0&&(i=o,e=Bc(t,o))),e===1))throw n=Ms,dr(t,0),yi(t,i),Kt(t,ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(K(345));case 2:nr(t,Xt,Zn);break;case 3:if(yi(t,i),(i&130023424)===i&&(e=Hf+500-ht(),10<e)){if(Va(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Ht(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Sc(nr.bind(null,t,Xt,Zn),e);break}nr(t,Xt,Zn);break;case 4:if(yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Rn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*px(i/1960))-i,10<i){t.timeoutHandle=Sc(nr.bind(null,t,Xt,Zn),i);break}nr(t,Xt,Zn);break;case 5:nr(t,Xt,Zn);break;default:throw Error(K(329))}}}return Kt(t,ht()),t.callbackNode===n?Kg.bind(null,t):null}function Bc(t,e){var n=rs;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Hc(e)),t}function Hc(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function mx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Ln(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(t,e){for(e&=~Bf,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),i=1<<n;t[n]=-1,e&=~i}}function mh(t){if(Be&6)throw Error(K(327));lo();var e=Va(t,0);if(!(e&1))return Kt(t,ht()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var i=dc(t);i!==0&&(e=i,n=Bc(t,i))}if(n===1)throw n=Ms,dr(t,0),yi(t,e),Kt(t,ht()),n;if(n===6)throw Error(K(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Xt,Zn),Kt(t,ht()),null}function Vf(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(xo=ht()+500,El&&Xi())}}function xr(t){Ti!==null&&Ti.tag===0&&!(Be&6)&&lo();var e=Be;Be|=1;var n=_n.transition,i=Xe;try{if(_n.transition=null,Xe=1,t)return t()}finally{Xe=i,_n.transition=n,Be=e,!(Be&6)&&Xi()}}function Gf(){nn=to.current,tt(to)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,X0(n)),gt!==null)for(n=gt.return;n!==null;){var i=n;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ya();break;case 3:_o(),tt($t),tt(kt),Uf();break;case 5:bf(i);break;case 4:_o();break;case 13:tt(lt);break;case 19:tt(lt);break;case 10:Cf(i.type._context);break;case 22:case 23:Gf()}n=n.return}if(At=t,gt=t=Ni(t.current,null),Pt=nn=e,xt=0,Ms=null,Bf=Cl=vr=0,Xt=rs=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}lr=null}return t}function Zg(t,e){do{var n=gt;try{if(Af(),ba.current=nl,tl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tl=!1}if(_r=0,wt=vt=ut=null,ns=!1,xs=0,zf.current=null,n===null||n.return===null){xt=1,Ms=e,gt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Pt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=nh(s);if(m!==null){m.flags&=-257,ih(m,s,a,o,e),m.mode&1&&th(o,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){th(o,u,e),Wf();break e}l=Error(K(426))}}else if(ot&&a.mode&1){var p=nh(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ih(p,s,a,o,e),Tf(vo(l,a));break e}}o=l=vo(l,a),xt!==4&&(xt=2),rs===null?rs=[o]:rs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=Ng(o,l,e);$d(o,c);break e;case 1:a=l;var _=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ui===null||!Ui.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=Ig(o,a,e);$d(o,E);break e}}o=o.return}while(o!==null)}e_(n)}catch(P){e=P,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(!0)}function Qg(){var t=il.current;return il.current=nl,t===null?nl:t}function Wf(){(xt===0||xt===3||xt===2)&&(xt=4),At===null||!(vr&268435455)&&!(Cl&268435455)||yi(At,Pt)}function sl(t,e){var n=Be;Be|=2;var i=Qg();(At!==t||Pt!==e)&&(Zn=null,dr(t,e));do try{gx();break}catch(r){Zg(t,r)}while(!0);if(Af(),Be=n,il.current=i,gt!==null)throw Error(K(261));return At=null,Pt=0,xt}function gx(){for(;gt!==null;)Jg(gt)}function _x(){for(;gt!==null&&!Vv();)Jg(gt)}function Jg(t){var e=n_(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?e_(t):gt=e,zf.current=null}function e_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cx(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,gt=null;return}}else if(n=ux(n,e,nn),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);xt===0&&(xt=5)}function nr(t,e,n){var i=Xe,r=_n.transition;try{_n.transition=null,Xe=1,vx(t,e,n,i)}finally{_n.transition=r,Xe=i}return null}function vx(t,e,n,i){do lo();while(Ti!==null);if(Be&6)throw Error(K(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(K(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qv(t,o),t===At&&(gt=At=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ea||(ea=!0,i_(Ha,function(){return lo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=_n.transition,_n.transition=null;var s=Xe;Xe=1;var a=Be;Be|=4,zf.current=null,dx(t,n),$g(n,t),k0(vc),Ga=!!_c,vc=_c=null,t.current=n,hx(n),Gv(),Be=a,Xe=s,_n.transition=o}else t.current=n;if(ea&&(ea=!1,Ti=t,ol=r),o=t.pendingLanes,o===0&&(Ui=null),jv(n.stateNode),Kt(t,ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(rl)throw rl=!1,t=kc,kc=null,t;return ol&1&&t.tag!==0&&lo(),o=t.pendingLanes,o&1?t===zc?os++:(os=0,zc=t):os=0,Xi(),null}function lo(){if(Ti!==null){var t=Dm(ol),e=_n.transition,n=Xe;try{if(_n.transition=null,Xe=16>t?16:t,Ti===null)var i=!1;else{if(t=Ti,Ti=null,ol=0,Be&6)throw Error(K(331));var r=Be;for(Be|=4,ue=t.current;ue!==null;){var o=ue,s=o.child;if(ue.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ue=u;ue!==null;){var f=ue;switch(f.tag){case 0:case 11:case 15:is(8,f,o)}var d=f.child;if(d!==null)d.return=f,ue=d;else for(;ue!==null;){f=ue;var h=f.sibling,m=f.return;if(Xg(f),f===u){ue=null;break}if(h!==null){h.return=m,ue=h;break}ue=m}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}ue=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ue=s;else e:for(;ue!==null;){if(o=ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:is(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,ue=c;break e}ue=o.return}}var _=t.current;for(ue=_;ue!==null;){s=ue;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,ue=g;else e:for(s=_;ue!==null;){if(a=ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Al(9,a)}}catch(P){ft(a,a.return,P)}if(a===s){ue=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,ue=E;break e}ue=a.return}}if(Be=r,Xi(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(vl,t)}catch{}i=!0}return i}finally{Xe=n,_n.transition=e}}return!1}function gh(t,e,n){e=vo(n,e),e=Ng(t,e,1),t=bi(t,e,1),e=Ht(),t!==null&&(Rs(t,1,e),Kt(t,e))}function ft(t,e,n){if(t.tag===3)gh(t,t,n);else for(;e!==null;){if(e.tag===3){gh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){t=vo(n,t),t=Ig(e,t,1),e=bi(e,t,1),t=Ht(),e!==null&&(Rs(e,1,t),Kt(e,t));break}}e=e.return}}function xx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Pt&n)===n&&(xt===4||xt===3&&(Pt&130023424)===Pt&&500>ht()-Hf?dr(t,0):Bf|=n),Kt(t,e)}function t_(t,e){e===0&&(t.mode&1?(e=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):e=1);var n=Ht();t=si(t,e),t!==null&&(Rs(t,e,n),Kt(t,n))}function Sx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),t_(t,n)}function yx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(K(314))}i!==null&&i.delete(e),t_(t,n)}var n_;n_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,lx(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,ot&&e.flags&1048576&&og(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Da(t,e),t=e.pendingProps;var r=po(e,kt.current);ao(e,n),r=Nf(null,e,i,t,r,n);var o=If();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(i)?(o=!0,$a(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=Tl,e.stateNode=r,r._reactInternals=e,Cc(e,i,t,n),e=Lc(null,e,i,!0,o,n)):(e.tag=0,ot&&o&&Mf(e),Bt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ex(i),t=Tn(i,t),r){case 0:e=Pc(null,e,i,t,n);break e;case 1:e=sh(null,e,i,t,n);break e;case 11:e=rh(null,e,i,t,n);break e;case 14:e=oh(null,e,i,Tn(i.type,t),n);break e}throw Error(K(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Pc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),sh(t,e,i,r,n);case 3:e:{if(zg(e),t===null)throw Error(K(387));i=e.pendingProps,o=e.memoizedState,r=o.element,ug(t,e),Ja(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=vo(Error(K(423)),e),e=ah(t,e,i,n,r);break e}else if(i!==r){r=vo(Error(K(424)),e),e=ah(t,e,i,n,r);break e}else for(rn=Li(e.stateNode.containerInfo.firstChild),on=e,ot=!0,An=null,n=hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),i===r){e=ai(t,e,n);break e}Bt(t,e,i,n)}e=e.child}return e;case 5:return pg(e),t===null&&Tc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,xc(i,r)?s=null:o!==null&&xc(i,o)&&(e.flags|=32),kg(t,e),Bt(t,e,s,n),e.child;case 6:return t===null&&Tc(e),null;case 13:return Bg(t,e,n);case 4:return Lf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=go(e,null,i,n):Bt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),rh(t,e,i,r,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Ke(Za,i._currentValue),i._currentValue=s,o!==null)if(Ln(o.value,s)){if(o.children===r.children&&!$t.current){e=ai(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=ii(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wc(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(K(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),wc(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ao(e,n),r=vn(r),i=i(r),e.flags|=1,Bt(t,e,i,n),e.child;case 14:return i=e.type,r=Tn(i,e.pendingProps),r=Tn(i.type,r),oh(t,e,i,r,n);case 15:return Fg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Da(t,e),e.tag=1,qt(i)?(t=!0,$a(e)):t=!1,ao(e,n),fg(e,i,r),Cc(e,i,r,n),Lc(null,e,i,!0,t,n);case 19:return Hg(t,e,n);case 22:return Og(t,e,n)}throw Error(K(156,e.tag))};function i_(t,e){return Pm(t,e)}function Mx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,i){return new Mx(t,e,n,i)}function Xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ex(t){if(typeof t=="function")return Xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cf)return 11;if(t===ff)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Xf(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Xr:return hr(n.children,r,o,e);case uf:s=8,r|=8;break;case Zu:return t=mn(12,n,e,r|2),t.elementType=Zu,t.lanes=o,t;case Qu:return t=mn(13,n,e,r),t.elementType=Qu,t.lanes=o,t;case Ju:return t=mn(19,n,e,r),t.elementType=Ju,t.lanes=o,t;case dm:return Rl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cm:s=10;break e;case fm:s=9;break e;case cf:s=11;break e;case ff:s=14;break e;case vi:s=16,i=null;break e}throw Error(K(130,t==null?t:typeof t,""))}return e=mn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function hr(t,e,n,i){return t=mn(7,t,i,e),t.lanes=n,t}function Rl(t,e,n,i){return t=mn(22,t,i,e),t.elementType=dm,t.lanes=n,t.stateNode={isHidden:!1},t}function hu(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function pu(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jf(t,e,n,i,r,o,s,a,l){return t=new Tx(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=mn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(o),t}function wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function r_(t){if(!t)return Bi;t=t._reactInternals;e:{if(Mr(t)!==t||t.tag!==1)throw Error(K(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(K(171))}if(t.tag===1){var n=t.type;if(qt(n))return ig(t,n,e)}return e}function o_(t,e,n,i,r,o,s,a,l){return t=jf(n,i,!0,t,r,o,s,a,l),t.context=r_(null),n=t.current,i=Ht(),r=Di(n),o=ii(i,r),o.callback=e??null,bi(n,o,r),t.current.lanes=r,Rs(t,r,i),Kt(t,i),t}function Pl(t,e,n,i){var r=e.current,o=Ht(),s=Di(r);return n=r_(n),e.context===null?e.context=n:e.pendingContext=n,e=ii(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=bi(r,e,s),t!==null&&(Pn(t,r,s,o),La(t,r,s)),s}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){_h(t,e),(t=t.alternate)&&_h(t,e)}function Ax(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function $f(t){this._internalRoot=t}Ll.prototype.render=$f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(K(409));Pl(t,e,null,null)};Ll.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Pl(null,t,null,null)}),e[oi]=null}};function Ll(t){this._internalRoot=t}Ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Si.length&&e!==0&&e<Si[n].priority;n++);Si.splice(n,0,t),n===0&&km(t)}};function qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vh(){}function Cx(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=al(s);o.call(u)}}var s=o_(e,i,t,0,null,!1,!1,"",vh);return t._reactRootContainer=s,t[oi]=s.current,ps(t.nodeType===8?t.parentNode:t),xr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=al(l);a.call(u)}}var l=jf(t,0,!1,null,null,!1,!1,"",vh);return t._reactRootContainer=l,t[oi]=l.current,ps(t.nodeType===8?t.parentNode:t),xr(function(){Pl(e,l,n,i)}),l}function Ul(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=al(s);a.call(l)}}Pl(e,s,t,r)}else s=Cx(n,e,t,r,i);return al(s)}Nm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(pf(e,n|1),Kt(e,ht()),!(Be&6)&&(xo=ht()+500,Xi()))}break;case 13:xr(function(){var i=si(t,1);if(i!==null){var r=Ht();Pn(i,t,1,r)}}),Yf(t,1)}};mf=function(t){if(t.tag===13){var e=si(t,134217728);if(e!==null){var n=Ht();Pn(e,t,134217728,n)}Yf(t,134217728)}};Im=function(t){if(t.tag===13){var e=Di(t),n=si(t,e);if(n!==null){var i=Ht();Pn(n,t,e,i)}Yf(t,e)}};Fm=function(){return Xe};Om=function(t,e){var n=Xe;try{return Xe=t,e()}finally{Xe=n}};uc=function(t,e,n){switch(e){case"input":if(nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ml(i);if(!r)throw Error(K(90));pm(i),nc(i,r)}}}break;case"textarea":gm(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};Em=Vf;Tm=xr;var Rx={usingClientEntryPoint:!1,Events:[Ls,qr,Ml,ym,Mm,Vf]},Bo={findFiberByHostInstance:ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Px={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cm(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{vl=ta.inject(Px),Hn=ta}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(e))throw Error(K(200));return wx(t,e,null,n)};ln.createRoot=function(t,e){if(!qf(t))throw Error(K(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jf(t,1,!1,null,null,n,!1,i,r),t[oi]=e.current,ps(t.nodeType===8?t.parentNode:t),new $f(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(K(188)):(t=Object.keys(t).join(","),Error(K(268,t)));return t=Cm(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return xr(t)};ln.hydrate=function(t,e,n){if(!bl(e))throw Error(K(200));return Ul(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!qf(t))throw Error(K(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=o_(e,null,t,1,n??null,r,!1,o,s),t[oi]=e.current,ps(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ll(e)};ln.render=function(t,e,n){if(!bl(e))throw Error(K(200));return Ul(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!bl(t))throw Error(K(40));return t._reactRootContainer?(xr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[oi]=null})}),!0):!1};ln.unstable_batchedUpdates=Vf;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bl(n))throw Error(K(200));if(t==null||t._reactInternals===void 0)throw Error(K(38));return Ul(t,e,n,!1,i)};ln.version="18.2.0-next-9e3b772b8-20220608";function a_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a_)}catch(t){console.error(t)}}a_(),om.exports=ln;var Lx=om.exports,xh=Lx;qu.createRoot=xh.createRoot,qu.hydrateRoot=xh.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Es.apply(this,arguments)}var wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wi||(wi={}));const Sh="popstate";function bx(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return Vc("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ll(r)}return Dx(e,n,null,t)}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function l_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ux(){return Math.random().toString(36).substr(2,8)}function yh(t,e){return{usr:t.state,key:t.key,idx:e}}function Vc(t,e,n,i){return n===void 0&&(n=null),Es({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Co(e):e,{state:n,key:e&&e.key||i||Ux()})}function ll(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Dx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=wi.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(Es({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function d(){a=wi.Pop;let p=f(),c=p==null?null:p-u;u=p,l&&l({action:a,location:v.location,delta:c})}function h(p,c){a=wi.Push;let _=Vc(v.location,p,c);n&&n(_,p),u=f()+1;let g=yh(_,u),E=v.createHref(_);try{s.pushState(g,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(E)}o&&l&&l({action:a,location:v.location,delta:1})}function m(p,c){a=wi.Replace;let _=Vc(v.location,p,c);n&&n(_,p),u=f();let g=yh(_,u),E=v.createHref(_);s.replaceState(g,"",E),o&&l&&l({action:a,location:v.location,delta:0})}function x(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:ll(p);return _=_.replace(/ $/,"%20"),pt(c,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,c)}let v={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Sh,d),l=p,()=>{r.removeEventListener(Sh,d),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let c=x(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(p){return s.go(p)}};return v}var Mh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Mh||(Mh={}));function Nx(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Co(e):e,r=Kf(i.pathname||"/",n);if(r==null)return null;let o=u_(t);Ix(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=jx(r);s=Wx(o[a],l)}return s}function u_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(pt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Ii([i,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(pt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),u_(o.children,e,f,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Vx(u,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of c_(o.path))r(o,s,l)}),e}function c_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=c_(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Ix(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Gx(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Fx=/^:[\w-]+$/,Ox=3,kx=2,zx=1,Bx=10,Hx=-2,Eh=t=>t==="*";function Vx(t,e){let n=t.split("/"),i=n.length;return n.some(Eh)&&(i+=Hx),e&&(i+=kx),n.filter(r=>!Eh(r)).reduce((r,o)=>r+(Fx.test(o)?Ox:o===""?zx:Bx),i)}function Gx(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Wx(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",f=f_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(i,f.params);let d=a.route;o.push({params:i,pathname:Ii([r,f.pathname]),pathnameBase:Kx(Ii([r,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(r=Ii([r,f.pathnameBase]))}return o}function f_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Xx(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,f,d)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let v=a[d]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[d];return m&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Xx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),l_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function jx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return l_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Yx(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Co(t):t;return{pathname:n?n.startsWith("/")?n:$x(n,e):e,search:Zx(i),hash:Qx(r)}}function $x(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function mu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function d_(t,e){let n=qx(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function h_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Co(t):(r=Es({},t),pt(!r.pathname||!r.pathname.includes("?"),mu("?","pathname","search",r)),pt(!r.pathname||!r.pathname.includes("#"),mu("#","pathname","hash",r)),pt(!r.search||!r.search.includes("#"),mu("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let d=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Yx(r,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Ii=t=>t.join("/").replace(/\/\/+/g,"/"),Kx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Zx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Qx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Jx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const p_=["post","put","patch","delete"];new Set(p_);const eS=["get",...p_];new Set(eS);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ts.apply(this,arguments)}const Zf=ce.createContext(null),tS=ce.createContext(null),Er=ce.createContext(null),Dl=ce.createContext(null),Tr=ce.createContext({outlet:null,matches:[],isDataRoute:!1}),m_=ce.createContext(null);function nS(t,e){let{relative:n}=e===void 0?{}:e;Ro()||pt(!1);let{basename:i,navigator:r}=ce.useContext(Er),{hash:o,pathname:s,search:a}=Qf(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Ii([i,s])),r.createHref({pathname:l,search:a,hash:o})}function Ro(){return ce.useContext(Dl)!=null}function Us(){return Ro()||pt(!1),ce.useContext(Dl).location}function iS(t){Ro()||pt(!1);let{pathname:e}=Us();return ce.useMemo(()=>f_(t,e),[e,t])}function g_(t){ce.useContext(Er).static||ce.useLayoutEffect(t)}function rS(){let{isDataRoute:t}=ce.useContext(Tr);return t?_S():oS()}function oS(){Ro()||pt(!1);let t=ce.useContext(Zf),{basename:e,future:n,navigator:i}=ce.useContext(Er),{matches:r}=ce.useContext(Tr),{pathname:o}=Us(),s=JSON.stringify(d_(r,n.v7_relativeSplatPath)),a=ce.useRef(!1);return g_(()=>{a.current=!0}),ce.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let d=h_(u,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ii([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,s,o,t])}function Qf(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ce.useContext(Er),{matches:r}=ce.useContext(Tr),{pathname:o}=Us(),s=JSON.stringify(d_(r,i.v7_relativeSplatPath));return ce.useMemo(()=>h_(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function sS(t,e){return aS(t,e)}function aS(t,e,n,i){Ro()||pt(!1);let{navigator:r}=ce.useContext(Er),{matches:o}=ce.useContext(Tr),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Us(),f;if(e){var d;let p=typeof e=="string"?Co(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||pt(!1),f=p}else f=u;let h=f.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=Nx(t,{pathname:m}),v=dS(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Ii([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Ii([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),o,n,i);return e&&v?ce.createElement(Dl.Provider,{value:{location:Ts({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:wi.Pop}},v):v}function lS(){let t=gS(),e=Jx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),n?ce.createElement("pre",{style:r},n):null,null)}const uS=ce.createElement(lS,null);class cS extends ce.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ce.createElement(Tr.Provider,{value:this.props.routeContext},ce.createElement(m_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fS(t){let{routeContext:e,match:n,children:i}=t,r=ce.useContext(Zf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ce.createElement(Tr.Provider,{value:e},i)}function dS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));f>=0||pt(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<s.length;f++){let d=s[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:h,errors:m}=n,x=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||x){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,d,h)=>{let m,x=!1,v=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||uS,l&&(u<0&&h===0?(vS("route-fallback",!1),x=!0,p=null):u===h&&(x=!0,p=d.route.hydrateFallbackElement||null)));let c=e.concat(s.slice(0,h+1)),_=()=>{let g;return m?g=v:x?g=p:d.route.Component?g=ce.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=f,ce.createElement(fS,{match:d,routeContext:{outlet:f,matches:c,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?ce.createElement(cS,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:_(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):_()},null)}var __=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(__||{}),ul=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ul||{});function hS(t){let e=ce.useContext(Zf);return e||pt(!1),e}function pS(t){let e=ce.useContext(tS);return e||pt(!1),e}function mS(t){let e=ce.useContext(Tr);return e||pt(!1),e}function v_(t){let e=mS(),n=e.matches[e.matches.length-1];return n.route.id||pt(!1),n.route.id}function gS(){var t;let e=ce.useContext(m_),n=pS(ul.UseRouteError),i=v_(ul.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function _S(){let{router:t}=hS(__.UseNavigateStable),e=v_(ul.UseNavigateStable),n=ce.useRef(!1);return g_(()=>{n.current=!0}),ce.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ts({fromRouteId:e},o)))},[t,e])}const Th={};function vS(t,e,n){!e&&!Th[t]&&(Th[t]=!0)}function Gc(t){pt(!1)}function xS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=wi.Pop,navigator:o,static:s=!1,future:a}=t;Ro()&&pt(!1);let l=e.replace(/^\/*/,"/"),u=ce.useMemo(()=>({basename:l,navigator:o,static:s,future:Ts({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=Co(i));let{pathname:f="/",search:d="",hash:h="",state:m=null,key:x="default"}=i,v=ce.useMemo(()=>{let p=Kf(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:x},navigationType:r}},[l,f,d,h,m,x,r]);return v==null?null:ce.createElement(Er.Provider,{value:u},ce.createElement(Dl.Provider,{children:n,value:v}))}function SS(t){let{children:e,location:n}=t;return sS(Wc(e),n)}new Promise(()=>{});function Wc(t,e){e===void 0&&(e=[]);let n=[];return ce.Children.forEach(t,(i,r)=>{if(!ce.isValidElement(i))return;let o=[...e,r];if(i.type===ce.Fragment){n.push.apply(n,Wc(i.props.children,o));return}i.type!==Gc&&pt(!1),!i.props.index||!i.props.children||pt(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Wc(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xc.apply(this,arguments)}function yS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function MS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ES(t,e){return t.button===0&&(!e||e==="_self")&&!MS(t)}const TS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],wS="6";try{window.__reactRouterVersion=wS}catch{}const AS="startTransition",wh=Sv[AS];function CS(t){let{basename:e,children:n,future:i,window:r}=t,o=ce.useRef();o.current==null&&(o.current=bx({window:r,v5Compat:!0}));let s=o.current,[a,l]=ce.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},f=ce.useCallback(d=>{u&&wh?wh(()=>l(d)):l(d)},[l,u]);return ce.useLayoutEffect(()=>s.listen(f),[s,f]),ce.createElement(xS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:i})}const RS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LS=ce.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f,unstable_viewTransition:d}=e,h=yS(e,TS),{basename:m}=ce.useContext(Er),x,v=!1;if(typeof u=="string"&&PS.test(u)&&(x=u,RS))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=Kf(E.pathname,m);E.origin===g.origin&&P!=null?u=P+E.search+E.hash:v=!0}catch{}let p=nS(u,{relative:r}),c=bS(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:r,unstable_viewTransition:d});function _(g){i&&i(g),g.defaultPrevented||c(g)}return ce.createElement("a",Xc({},h,{href:x||p,onClick:v||o?i:_,ref:n,target:l}))});var Ah;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ah||(Ah={}));var Ch;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ch||(Ch={}));function bS(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=rS(),u=Us(),f=Qf(t,{relative:s});return ce.useCallback(d=>{if(ES(d,n)){d.preventDefault();let h=i!==void 0?i:ll(u)===ll(f);l(t,{replace:h,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,f,i,r,n,t,o,s,a])}function Rh({to:t,children:e,...n}){const i=Qf(t),r=iS({path:i.pathname,end:!0});return et.jsx("li",{className:r?"active":"",children:et.jsx(LS,{to:t,...n,children:e})})}function US(){return et.jsxs("div",{className:"nav-container",children:[et.jsxs("nav",{className:"nav",children:[et.jsx("h1",{className:"site-title",children:"Lucas Moen"}),et.jsxs("ul",{children:[et.jsx(Rh,{to:"/portfolio/",children:"Home"}),et.jsx(Rh,{to:"/portfolio/about/",children:"About"})]})]}),et.jsx("hr",{})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="163",DS=0,Ph=1,NS=2,x_=1,IS=2,Kn=3,Hi=0,Zt=1,Jn=2,Fi=0,uo=1,Lh=2,bh=3,Uh=4,FS=5,or=100,OS=101,kS=102,zS=103,BS=104,HS=200,VS=201,GS=202,WS=203,jc=204,Yc=205,XS=206,jS=207,YS=208,$S=209,qS=210,KS=211,ZS=212,QS=213,JS=214,ey=0,ty=1,ny=2,cl=3,iy=4,ry=5,oy=6,sy=7,S_=0,ay=1,ly=2,Oi=0,uy=1,cy=2,fy=3,dy=4,hy=5,py=6,my=7,y_=300,So=301,yo=302,$c=303,qc=304,Nl=306,Kc=1e3,cr=1001,Zc=1002,gn=1003,gy=1004,na=1005,Cn=1006,gu=1007,fr=1008,ki=1009,_y=1010,vy=1011,M_=1012,E_=1013,Mo=1014,Ai=1015,fl=1016,T_=1017,w_=1018,Ds=1020,xy=35902,Sy=1021,yy=1022,zn=1023,My=1024,Ey=1025,co=1026,ws=1027,Ty=1028,A_=1029,wy=1030,C_=1031,R_=1033,_u=33776,vu=33777,xu=33778,Su=33779,Dh=35840,Nh=35841,Ih=35842,Fh=35843,P_=36196,Oh=37492,kh=37496,zh=37808,Bh=37809,Hh=37810,Vh=37811,Gh=37812,Wh=37813,Xh=37814,jh=37815,Yh=37816,$h=37817,qh=37818,Kh=37819,Zh=37820,Qh=37821,yu=36492,Jh=36494,ep=36495,Ay=36283,tp=36284,np=36285,ip=36286,Cy=3200,Ry=3201,Py=0,Ly=1,Mi="",In="srgb",ji="srgb-linear",ed="display-p3",Il="display-p3-linear",dl="linear",Je="srgb",hl="rec709",pl="p3",Cr=7680,rp=519,by=512,Uy=513,Dy=514,L_=515,Ny=516,Iy=517,Fy=518,Oy=519,op=35044,sp="300 es",ni=2e3,ml=2001;class Po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,Qc=180/Math.PI;function Ns(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function ky(t,e){return(t%e+e)%e}function Eu(t,e,n){return(1-n)*t+n*e}function Ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,n,i,r,o,s,a,l,u){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],m=i[5],x=i[8],v=r[0],p=r[3],c=r[6],_=r[1],g=r[4],E=r[7],P=r[2],C=r[5],w=r[8];return o[0]=s*v+a*_+l*P,o[3]=s*p+a*g+l*C,o[6]=s*c+a*E+l*w,o[1]=u*v+f*_+d*P,o[4]=u*p+f*g+d*C,o[7]=u*c+f*E+d*w,o[2]=h*v+m*_+x*P,o[5]=h*p+m*g+x*C,o[8]=h*c+m*E+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*s-a*u,h=a*l-f*o,m=u*o-s*l,x=n*d+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*s)*v,e[3]=h*v,e[4]=(f*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=m*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new De;function b_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zy(){const t=gl("canvas");return t.style.display="block",t}const ap={};function By(t){t in ap||(ap[t]=!0,console.warn(t))}const lp=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),up=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[ji]:{transfer:dl,primaries:hl,toReference:t=>t,fromReference:t=>t},[In]:{transfer:Je,primaries:hl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Il]:{transfer:dl,primaries:pl,toReference:t=>t.applyMatrix3(up),fromReference:t=>t.applyMatrix3(lp)},[ed]:{transfer:Je,primaries:pl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(up),fromReference:t=>t.applyMatrix3(lp).convertLinearToSRGB()}},Hy=new Set([ji,Il]),je={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Hy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ia[e].toReference,r=ia[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ia[t].primaries},getTransfer:function(t){return t===Mi?dl:ia[t].transfer}};function fo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class Vy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=gl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=fo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fo(n[i]/255)*255):n[i]=fo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gy=0;class U_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Au(r[s].image)):o.push(Au(r[s]))}else o=Au(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Au(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wy=0;class Qt extends Po{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=cr,r=cr,o=Cn,s=fr,a=zn,l=ki,u=Qt.DEFAULT_ANISOTROPY,f=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Ns(),this.name="",this.source=new U_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kc:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kc:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=y_;Qt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],m=l[5],x=l[9],v=l[2],p=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,E=(m+1)/2,P=(c+1)/2,C=(f+h)/4,w=(d+v)/4,b=(x+p)/4;return g>E&&g>P?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=C/i,o=w/i):E>P?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=C/r,o=b/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=w/o,r=b/o),this.set(i,r,o,n),this}let _=Math.sqrt((p-x)*(p-x)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-v)/_,this.z=(h-f)/_,this.w=Math.acos((u+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xy extends Po{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const o=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new U_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends Xy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class D_ extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jy extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],x=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(d!==v||l!==h||u!==m||f!==x){let p=1-a;const c=l*h+u*m+f*x+d*v,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const P=Math.sqrt(g),C=Math.atan2(P,c*_);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const E=a*_;if(l=l*p+h*E,u=u*p+m*E,f=f*p+x*E,d=d*p+v*E,p===1-a){const P=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=P,u*=P,f*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=o[s],h=o[s+1],m=o[s+2],x=o[s+3];return e[n]=a*x+f*d+l*m-u*h,e[n+1]=l*x+f*h+u*d-a*m,e[n+2]=u*x+f*m+a*h-l*d,e[n+3]=f*x-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=h*f*d+u*m*x,this._y=u*m*d-h*f*x,this._z=u*f*x+h*m*d,this._w=u*f*d-h*m*x;break;case"YXZ":this._x=h*f*d+u*m*x,this._y=u*m*d-h*f*x,this._z=u*f*x-h*m*d,this._w=u*f*d+h*m*x;break;case"ZXY":this._x=h*f*d-u*m*x,this._y=u*m*d+h*f*x,this._z=u*f*x+h*m*d,this._w=u*f*d-h*m*x;break;case"ZYX":this._x=h*f*d-u*m*x,this._y=u*m*d+h*f*x,this._z=u*f*x-h*m*d,this._w=u*f*d+h*m*x;break;case"YZX":this._x=h*f*d+u*m*x,this._y=u*m*d+h*f*x,this._z=u*f*x-h*m*d,this._w=u*f*d-h*m*x;break;case"XZY":this._x=h*f*d-u*m*x,this._y=u*m*d-h*f*x,this._z=u*f*x+h*m*d,this._w=u*f*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),f=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*f,this.y=i+l*f+a*u-o*d,this.z=r+l*d+o*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new k,cp=new Is;class Fs{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,yn):yn.fromBufferAttribute(o,s),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),oa.subVectors(this.max,Vo),Pr.subVectors(e.a,Vo),Lr.subVectors(e.b,Vo),br.subVectors(e.c,Vo),di.subVectors(Lr,Pr),hi.subVectors(br,Lr),qi.subVectors(Pr,br);let n=[0,-di.z,di.y,0,-hi.z,hi.y,0,-qi.z,qi.y,di.z,0,-di.x,hi.z,0,-hi.x,qi.z,0,-qi.x,-di.y,di.x,0,-hi.y,hi.x,0,-qi.y,qi.x,0];return!Ru(n,Pr,Lr,br,oa)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,Pr,Lr,br,oa))?!1:(sa.crossVectors(di,hi),n=[sa.x,sa.y,sa.z],Ru(n,Pr,Lr,br,oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],yn=new k,ra=new Fs,Pr=new k,Lr=new k,br=new k,di=new k,hi=new k,qi=new k,Vo=new k,oa=new k,sa=new k,Ki=new k;function Ru(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Ki.fromArray(t,o);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),u=n.dot(Ki),f=i.dot(Ki);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Yy=new Fs,Go=new k,Pu=new k;class td{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yy.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Pu)),this.expandByPoint(Go.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new k,Lu=new k,aa=new k,pi=new k,bu=new k,la=new k,Uu=new k;class $y{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Lu.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),pi.copy(this.origin).sub(Lu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(aa),a=pi.dot(this.direction),l=-pi.dot(aa),u=pi.lengthSq(),f=Math.abs(1-s*s);let d,h,m,x;if(f>0)if(d=s*l-a,h=s*a-l,x=o*f,d>=0)if(h>=-x)if(h<=x){const v=1/f;d*=v,h*=v,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lu).addScaledVector(aa,h),m}intersectSphere(e,n){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(o=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(o=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,n,i,r,o){bu.subVectors(n,e),la.subVectors(i,e),Uu.crossVectors(bu,la);let s=this.direction.dot(Uu),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(pi,la));if(l<0)return null;const u=a*this.direction.dot(bu.cross(pi));if(u<0||l+u>s)return null;const f=-a*pi.dot(Uu);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,o,s,a,l,u,f,d,h,m,x,v,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,d,h,m,x,v,p)}set(e,n,i,r,o,s,a,l,u,f,d,h,m,x,v,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=m,c[7]=x,c[11]=v,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),o=1/Ur.setFromMatrixColumn(e,1).length(),s=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*f,m=s*d,x=a*f,v=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=m+x*u,n[5]=h-v*u,n[9]=-a*l,n[2]=v-h*u,n[6]=x+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,x=u*f,v=u*d;n[0]=h+v*a,n[4]=x*a-m,n[8]=s*u,n[1]=s*d,n[5]=s*f,n[9]=-a,n[2]=m*a-x,n[6]=v+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,x=u*f,v=u*d;n[0]=h-v*a,n[4]=-s*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=s*f,n[9]=v-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*f,m=s*d,x=a*f,v=a*d;n[0]=l*f,n[4]=x*u-m,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-h*d,n[8]=x*d+m,n[1]=d,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=m*d+x,n[10]=h-v*d}else if(e.order==="XZY"){const h=s*l,m=s*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+v,n[5]=s*f,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*f,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qy,e,Ky)}lookAt(e,n,i){const r=this.elements;return en.subVectors(e,n),en.lengthSq()===0&&(en.z=1),en.normalize(),mi.crossVectors(i,en),mi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),mi.crossVectors(i,en)),mi.normalize(),ua.crossVectors(en,mi),r[0]=mi.x,r[4]=ua.x,r[8]=en.x,r[1]=mi.y,r[5]=ua.y,r[9]=en.y,r[2]=mi.z,r[6]=ua.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],m=i[13],x=i[2],v=i[6],p=i[10],c=i[14],_=i[3],g=i[7],E=i[11],P=i[15],C=r[0],w=r[4],b=r[8],T=r[12],S=r[1],N=r[5],W=r[9],U=r[13],j=r[2],X=r[6],Q=r[10],Z=r[14],L=r[3],V=r[7],G=r[11],ne=r[15];return o[0]=s*C+a*S+l*j+u*L,o[4]=s*w+a*N+l*X+u*V,o[8]=s*b+a*W+l*Q+u*G,o[12]=s*T+a*U+l*Z+u*ne,o[1]=f*C+d*S+h*j+m*L,o[5]=f*w+d*N+h*X+m*V,o[9]=f*b+d*W+h*Q+m*G,o[13]=f*T+d*U+h*Z+m*ne,o[2]=x*C+v*S+p*j+c*L,o[6]=x*w+v*N+p*X+c*V,o[10]=x*b+v*W+p*Q+c*G,o[14]=x*T+v*U+p*Z+c*ne,o[3]=_*C+g*S+E*j+P*L,o[7]=_*w+g*N+E*X+P*V,o[11]=_*b+g*W+E*Q+P*G,o[15]=_*T+g*U+E*Z+P*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],m=e[14],x=e[3],v=e[7],p=e[11],c=e[15];return x*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*m-i*l*m)+v*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*f-o*l*f)+p*(+n*u*d-n*a*m-o*s*d+i*s*m+o*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*s*d-i*s*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],m=e[11],x=e[12],v=e[13],p=e[14],c=e[15],_=d*p*u-v*h*u+v*l*m-a*p*m-d*l*c+a*h*c,g=x*h*u-f*p*u-x*l*m+s*p*m+f*l*c-s*h*c,E=f*v*u-x*d*u+x*a*m-s*v*m-f*a*c+s*d*c,P=x*d*l-f*v*l-x*a*h+s*v*h+f*a*p-s*d*p,C=n*_+i*g+r*E+o*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(v*h*o-d*p*o-v*r*m+i*p*m+d*r*c-i*h*c)*w,e[2]=(a*p*o-v*l*o+v*r*u-i*p*u-a*r*c+i*l*c)*w,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*p*o-x*h*o+x*r*m-n*p*m-f*r*c+n*h*c)*w,e[6]=(x*l*o-s*p*o-x*r*u+n*p*u+s*r*c-n*l*c)*w,e[7]=(s*h*o-f*l*o+f*r*u-n*h*u-s*r*m+n*l*m)*w,e[8]=E*w,e[9]=(x*d*o-f*v*o-x*i*m+n*v*m+f*i*c-n*d*c)*w,e[10]=(s*v*o-x*a*o+x*i*u-n*v*u-s*i*c+n*a*c)*w,e[11]=(f*a*o-s*d*o-f*i*u+n*d*u+s*i*m-n*a*m)*w,e[12]=P*w,e[13]=(f*v*r-x*d*r+x*i*h-n*v*h-f*i*p+n*d*p)*w,e[14]=(x*a*r-s*v*r-x*i*l+n*v*l+s*i*p-n*a*p)*w,e[15]=(s*d*r-f*a*r+f*i*l-n*d*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,d=a+a,h=o*u,m=o*f,x=o*d,v=s*f,p=s*d,c=a*d,_=l*u,g=l*f,E=l*d,P=i.x,C=i.y,w=i.z;return r[0]=(1-(v+c))*P,r[1]=(m+E)*P,r[2]=(x-g)*P,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(h+c))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(x+g)*w,r[9]=(p-_)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Ur.set(r[0],r[1],r[2]).length();const s=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const u=1/o,f=1/s,d=1/a;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=f,Mn.elements[5]*=f,Mn.elements[6]*=f,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,n.setFromRotationMatrix(Mn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=ni){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===ni)m=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===ml)m=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ni){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(s-o),h=(n+e)*u,m=(i+r)*f;let x,v;if(a===ni)x=(s+o)*d,v=-2*d;else if(a===ml)x=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new k,Mn=new St,qy=new k(0,0,0),Ky=new k(1,1,1),mi=new k,ua=new k,en=new k,fp=new St,dp=new Is;class li{constructor(e=0,n=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class N_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zy=0;const hp=new k,Dr=new Is,Yn=new St,ca=new k,Wo=new k,Qy=new k,Jy=new Is,pp=new k(1,0,0),mp=new k(0,1,0),gp=new k(0,0,1),_p={type:"added"},eM={type:"removed"},Nr={type:"childadded",child:null},Du={type:"childremoved",child:null};class sn extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new k,n=new li,i=new Is,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new De}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,n){return hp.copy(e).applyQuaternion(this.quaternion),this.position.add(hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ca.copy(e):ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Wo,ca,this.up):Yn.lookAt(ca,Wo,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eM),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_p),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new k(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new k,$n=new k,Nu=new k,qn=new k,Ir=new k,Fr=new k,vp=new k,Iu=new k,Fu=new k,Ou=new k;class kn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),En.subVectors(e,n),r.cross(En);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){En.subVectors(r,n),$n.subVectors(i,n),Nu.subVectors(e,n);const s=En.dot(En),a=En.dot($n),l=En.dot(Nu),u=$n.dot($n),f=$n.dot(Nu),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,m=(u*l-a*f)*h,x=(s*f-a*l)*h;return o.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,qn.x),l.addScaledVector(s,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(e,n,i,r){return En.subVectors(i,n),$n.subVectors(e,n),En.cross($n).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Ir.subVectors(r,i),Fr.subVectors(o,i),Iu.subVectors(e,i);const l=Ir.dot(Iu),u=Fr.dot(Iu);if(l<=0&&u<=0)return n.copy(i);Fu.subVectors(e,r);const f=Ir.dot(Fu),d=Fr.dot(Fu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(Ir,s);Ou.subVectors(e,o);const m=Ir.dot(Ou),x=Fr.dot(Ou);if(x>=0&&m<=x)return n.copy(o);const v=m*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Fr,a);const p=f*x-m*d;if(p<=0&&d-f>=0&&m-x>=0)return vp.subVectors(o,r),a=(d-f)/(d-f+(m-x)),n.copy(r).addScaledVector(vp,a);const c=1/(p+v+h);return s=v*c,a=h*c,n.copy(i).addScaledVector(Ir,s).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=ky(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=ku(s,o,e+1/3),this.g=ku(s,o,e),this.b=ku(s,o,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,n=In){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=I_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=wu(e.r),this.g=wu(e.g),this.b=wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return je.fromWorkingColorSpace(Ft.copy(this),e),Math.round(jt(Ft.r*255,0,255))*65536+Math.round(jt(Ft.g*255,0,255))*256+Math.round(jt(Ft.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,o=Ft.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=f<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=je.workingColorSpace){return je.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=In){je.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+n,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(gi),e.getHSL(fa);const i=Eu(gi.h,fa.h,n),r=Eu(gi.s,fa.s,n),o=Eu(gi.l,fa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ye;Ye.NAMES=I_;let tM=0;class Fl extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=uo,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Yc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Yc&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class nd extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new k,da=new Ve;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=op,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return By("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)da.fromBufferAttribute(this,n),da.applyMatrix3(e),this.setXY(n,da.x,da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),o=Wt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==op&&(e.usage=this.usage),e}}class F_ extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class O_ extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pr extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let nM=0;const fn=new St,zu=new sn,Or=new k,tn=new Fs,Xo=new Fs,Tt=new k;class wr extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b_(e)?O_:F_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new De().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,n,i){return fn.makeTranslation(e,n,i),this.applyMatrix4(fn),this}scale(e,n,i){return fn.makeScale(e,n,i),this.applyMatrix4(fn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new td);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(tn.min,Xo.min),tn.expandByPoint(Tt),Tt.addVectors(tn.max,Xo.max),tn.expandByPoint(Tt)):(tn.expandByPoint(Xo.min),tn.expandByPoint(Xo.max))}tn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Tt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Tt.fromBufferAttribute(a,u),l&&(Or.fromBufferAttribute(e,u),Tt.add(Or)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new k,l[b]=new k;const u=new k,f=new k,d=new k,h=new Ve,m=new Ve,x=new Ve,v=new k,p=new k;function c(b,T,S){u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(o,b),m.fromBufferAttribute(o,T),x.fromBufferAttribute(o,S),f.sub(u),d.sub(u),m.sub(h),x.sub(h);const N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(v.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(N),p.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(N),a[b].add(v),a[T].add(v),a[S].add(v),l[b].add(p),l[T].add(p),l[S].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,T=_.length;b<T;++b){const S=_[b],N=S.start,W=S.count;for(let U=N,j=N+W;U<j;U+=3)c(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const g=new k,E=new k,P=new k,C=new k;function w(b){P.fromBufferAttribute(r,b),C.copy(P);const T=a[b];g.copy(T),g.sub(P.multiplyScalar(P.dot(T))).normalize(),E.crossVectors(C,T);const N=E.dot(l[b])<0?-1:1;s.setXYZW(b,g.x,g.y,g.z,N)}for(let b=0,T=_.length;b<T;++b){const S=_[b],N=S.start,W=S.count;for(let U=N,j=N+W;U<j;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,f=new k,d=new k;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,p),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let m=0,x=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let c=0;c<f;c++)h[x++]=u[m++]}return new Gn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],d=o[u];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xp=new St,Zi=new $y,ha=new td,Sp=new k,kr=new k,zr=new k,Br=new k,Bu=new k,pa=new k,ma=new Ve,ga=new Ve,_a=new Ve,yp=new k,Mp=new k,Ep=new k,va=new k,xa=new k;class Bn extends sn{constructor(e=new wr,n=new nd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){pa.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],d=o[l];f!==0&&(Bu.fromBufferAttribute(d,e),s?pa.addScaledVector(Bu,f):pa.addScaledVector(Bu.sub(n),f))}n.add(pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(o),Zi.copy(e.ray).recast(e.near),!(ha.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ha,Sp)===null||Zi.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(xp.copy(o).invert(),Zi.copy(e.ray).applyMatrix4(xp),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,v=h.length;x<v;x++){const p=h[x],c=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=_,P=g;E<P;E+=3){const C=a.getX(E),w=a.getX(E+1),b=a.getX(E+2);r=Sa(this,c,e,i,u,f,d,C,w,b),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=a.getX(p),g=a.getX(p+1),E=a.getX(p+2);r=Sa(this,s,e,i,u,f,d,_,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,v=h.length;x<v;x++){const p=h[x],c=s[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=_,P=g;E<P;E+=3){const C=E,w=E+1,b=E+2;r=Sa(this,c,e,i,u,f,d,C,w,b),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=x,c=v;p<c;p+=3){const _=p,g=p+1,E=p+2;r=Sa(this,s,e,i,u,f,d,_,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function iM(t,e,n,i,r,o,s,a){let l;if(e.side===Zt?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Hi,a),l===null)return null;xa.copy(a),xa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xa);return u<n.near||u>n.far?null:{distance:u,point:xa.clone(),object:t}}function Sa(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,kr),t.getVertexPosition(l,zr),t.getVertexPosition(u,Br);const f=iM(t,e,n,i,kr,zr,Br,va);if(f){r&&(ma.fromBufferAttribute(r,a),ga.fromBufferAttribute(r,l),_a.fromBufferAttribute(r,u),f.uv=kn.getInterpolation(va,kr,zr,Br,ma,ga,_a,new Ve)),o&&(ma.fromBufferAttribute(o,a),ga.fromBufferAttribute(o,l),_a.fromBufferAttribute(o,u),f.uv1=kn.getInterpolation(va,kr,zr,Br,ma,ga,_a,new Ve)),s&&(yp.fromBufferAttribute(s,a),Mp.fromBufferAttribute(s,l),Ep.fromBufferAttribute(s,u),f.normal=kn.getInterpolation(va,kr,zr,Br,yp,Mp,Ep,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new k,materialIndex:0};kn.getNormal(kr,zr,Br,d.normal),f.face=d}return f}class Lo extends wr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new pr(u,3)),this.setAttribute("normal",new pr(f,3)),this.setAttribute("uv",new pr(d,2));function x(v,p,c,_,g,E,P,C,w,b,T){const S=E/w,N=P/b,W=E/2,U=P/2,j=C/2,X=w+1,Q=b+1;let Z=0,L=0;const V=new k;for(let G=0;G<Q;G++){const ne=G*N-U;for(let me=0;me<X;me++){const He=me*S-W;V[v]=He*_,V[p]=ne*g,V[c]=j,u.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[c]=C>0?1:-1,f.push(V.x,V.y,V.z),d.push(me/w),d.push(1-G/b),Z+=1}}for(let G=0;G<b;G++)for(let ne=0;ne<w;ne++){const me=h+ne+X*G,He=h+ne+X*(G+1),H=h+(ne+1)+X*(G+1),ee=h+(ne+1)+X*G;l.push(me,He,ee),l.push(He,H,ee),L+=6}a.addGroup(m,L,T),m+=L,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=Eo(t[n]);for(const r in i)e[r]=i[r]}return e}function rM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function k_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const oM={clone:Eo,merge:zt};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=aM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class z_ extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new k,Tp=new Ve,wp=new Ve;class pn extends z_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,n){return this.getViewBounds(e,Tp,wp),n.subVectors(wp,Tp)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hr=-90,Vr=1;class lM extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Hr,Vr,e,n);r.layers=this.layers,this.add(r);const o=new pn(Hr,Vr,e,n);o.layers=this.layers,this.add(o);const s=new pn(Hr,Vr,e,n);s.layers=this.layers,this.add(s);const a=new pn(Hr,Vr,e,n);a.layers=this.layers,this.add(a);const l=new pn(Hr,Vr,e,n);l.layers=this.layers,this.add(l);const u=new pn(Hr,Vr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class B_ extends Qt{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:So,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uM extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Lo(5,5,5),o=new Vi({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Fi});o.uniforms.tEquirect.value=n;const s=new Bn(r,o),a=n.minFilter;return n.minFilter===fr&&(n.minFilter=Cn),new lM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Hu=new k,cM=new k,fM=new De;class ir{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hu.subVectors(i,n).cross(cM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fM.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new td,ya=new k;class H_{constructor(e=new ir,n=new ir,i=new ir,r=new ir,o=new ir,s=new ir){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ni){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],m=r[8],x=r[9],v=r[10],p=r[11],c=r[12],_=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-o,h-u,p-m,E-c).normalize(),i[1].setComponents(l+o,h+u,p+m,E+c).normalize(),i[2].setComponents(l+s,h+f,p+x,E+_).normalize(),i[3].setComponents(l-s,h-f,p-x,E-_).normalize(),i[4].setComponents(l-a,h-d,p-v,E-g).normalize(),n===ni)i[5].setComponents(l+a,h+d,p+v,E+g).normalize();else if(n===ml)i[5].setComponents(a,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function V_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function dM(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),d.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let m=0,x=h.length;m<x;m++){const v=h[m];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class Ol extends wr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,m=[],x=[],v=[],p=[];for(let c=0;c<f;c++){const _=c*h-s;for(let g=0;g<u;g++){const E=g*d-o;x.push(E,-_,0),v.push(0,0,1),p.push(g/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,E=_+u*(c+1),P=_+1+u*(c+1),C=_+1+u*c;m.push(g,E,C),m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new pr(x,3)),this.setAttribute("normal",new pr(v,3)),this.setAttribute("uv",new pr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,FM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",WM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,XM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_E=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ME=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ST=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:yM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:wM,iridescence_fragment:AM,bumpmap_pars_fragment:CM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:PM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:bM,color_fragment:UM,color_pars_fragment:DM,color_pars_vertex:NM,color_vertex:IM,common:FM,cube_uv_reflection_fragment:OM,defaultnormal_vertex:kM,displacementmap_pars_vertex:zM,displacementmap_vertex:BM,emissivemap_fragment:HM,emissivemap_pars_fragment:VM,colorspace_fragment:GM,colorspace_pars_fragment:WM,envmap_fragment:XM,envmap_common_pars_fragment:jM,envmap_pars_fragment:YM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:sE,envmap_vertex:qM,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:QM,fog_pars_fragment:JM,gradientmap_pars_fragment:eE,lightmap_fragment:tE,lightmap_pars_fragment:nE,lights_lambert_fragment:iE,lights_lambert_pars_fragment:rE,lights_pars_begin:oE,lights_toon_fragment:aE,lights_toon_pars_fragment:lE,lights_phong_fragment:uE,lights_phong_pars_fragment:cE,lights_physical_fragment:fE,lights_physical_pars_fragment:dE,lights_fragment_begin:hE,lights_fragment_maps:pE,lights_fragment_end:mE,logdepthbuf_fragment:gE,logdepthbuf_pars_fragment:_E,logdepthbuf_pars_vertex:vE,logdepthbuf_vertex:xE,map_fragment:SE,map_pars_fragment:yE,map_particle_fragment:ME,map_particle_pars_fragment:EE,metalnessmap_fragment:TE,metalnessmap_pars_fragment:wE,morphinstance_vertex:AE,morphcolor_vertex:CE,morphnormal_vertex:RE,morphtarget_pars_vertex:PE,morphtarget_vertex:LE,normal_fragment_begin:bE,normal_fragment_maps:UE,normal_pars_fragment:DE,normal_pars_vertex:NE,normal_vertex:IE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:kE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:BE,opaque_fragment:HE,packing:VE,premultiplied_alpha_fragment:GE,project_vertex:WE,dithering_fragment:XE,dithering_pars_fragment:jE,roughnessmap_fragment:YE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:KE,shadowmap_vertex:ZE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:rT,tonemapping_fragment:oT,tonemapping_pars_fragment:sT,transmission_fragment:aT,transmission_pars_fragment:lT,uv_pars_fragment:uT,uv_pars_vertex:cT,uv_vertex:fT,worldpos_vertex:dT,background_vert:hT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:_T,cube_frag:vT,depth_vert:xT,depth_frag:ST,distanceRGBA_vert:yT,distanceRGBA_frag:MT,equirect_vert:ET,equirect_frag:TT,linedashed_vert:wT,linedashed_frag:AT,meshbasic_vert:CT,meshbasic_frag:RT,meshlambert_vert:PT,meshlambert_frag:LT,meshmatcap_vert:bT,meshmatcap_frag:UT,meshnormal_vert:DT,meshnormal_frag:NT,meshphong_vert:IT,meshphong_frag:FT,meshphysical_vert:OT,meshphysical_frag:kT,meshtoon_vert:zT,meshtoon_frag:BT,points_vert:HT,points_frag:VT,shadow_vert:GT,shadow_frag:WT,sprite_vert:XT,sprite_frag:jT},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Fn={basic:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Fn.physical={uniforms:zt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ma={r:0,b:0,g:0},Ji=new li,YT=new St;function $T(t,e,n,i,r,o,s){const a=new Ye(0);let l=o===!0?0:1,u,f,d=null,h=0,m=null;function x(p,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Nl)?(f===void 0&&(f=new Bn(new Lo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Eo(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ji.copy(c.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(YT.makeRotationFromEuler(Ji)),f.material.toneMapped=je.getTransfer(g.colorSpace)!==Je,(d!==g||h!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Bn(new Ol(2,2),new Vi({name:"BackgroundMaterial",uniforms:Eo(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=je.getTransfer(g.colorSpace)!==Je,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,c){p.getRGB(Ma,k_(t)),i.buffers.color.setClear(Ma.r,Ma.g,Ma.b,c,s)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:x}}function qT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(S,N,W,U,j){let X=!1;const Q=d(U,W,N);o!==Q&&(o=Q,u(o.object)),X=m(S,U,W,j),X&&x(S,U,W,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,E(S,N,W,U),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function d(S,N,W){const U=W.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let X=j[N.id];X===void 0&&(X={},j[N.id]=X);let Q=X[U];return Q===void 0&&(Q=h(l()),X[U]=Q),Q}function h(S){const N=[],W=[],U=[];for(let j=0;j<n;j++)N[j]=0,W[j]=0,U[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:U,object:S,attributes:{},index:null}}function m(S,N,W,U){const j=o.attributes,X=N.attributes;let Q=0;const Z=W.getAttributes();for(const L in Z)if(Z[L].location>=0){const G=j[L];let ne=X[L];if(ne===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),G===void 0||G.attribute!==ne||ne&&G.data!==ne.data)return!0;Q++}return o.attributesNum!==Q||o.index!==U}function x(S,N,W,U){const j={},X=N.attributes;let Q=0;const Z=W.getAttributes();for(const L in Z)if(Z[L].location>=0){let G=X[L];G===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(G=S.instanceColor));const ne={};ne.attribute=G,G&&G.data&&(ne.data=G.data),j[L]=ne,Q++}o.attributes=j,o.attributesNum=Q,o.index=U}function v(){const S=o.newAttributes;for(let N=0,W=S.length;N<W;N++)S[N]=0}function p(S){c(S,0)}function c(S,N){const W=o.newAttributes,U=o.enabledAttributes,j=o.attributeDivisors;W[S]=1,U[S]===0&&(t.enableVertexAttribArray(S),U[S]=1),j[S]!==N&&(t.vertexAttribDivisor(S,N),j[S]=N)}function _(){const S=o.newAttributes,N=o.enabledAttributes;for(let W=0,U=N.length;W<U;W++)N[W]!==S[W]&&(t.disableVertexAttribArray(W),N[W]=0)}function g(S,N,W,U,j,X,Q){Q===!0?t.vertexAttribIPointer(S,N,W,j,X):t.vertexAttribPointer(S,N,W,U,j,X)}function E(S,N,W,U){v();const j=U.attributes,X=W.getAttributes(),Q=N.defaultAttributeValues;for(const Z in X){const L=X[Z];if(L.location>=0){let V=j[Z];if(V===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const G=V.normalized,ne=V.itemSize,me=e.get(V);if(me===void 0)continue;const He=me.buffer,H=me.type,ee=me.bytesPerElement,le=H===t.INT||H===t.UNSIGNED_INT||V.gpuType===E_;if(V.isInterleavedBufferAttribute){const se=V.data,Le=se.stride,Ne=V.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<L.locationSize;ke++)c(L.location+ke,se.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<L.locationSize;ke++)p(L.location+ke);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ke=0;ke<L.locationSize;ke++)g(L.location+ke,ne/L.locationSize,H,G,Le*ee,(Ne+ne/L.locationSize*ke)*ee,le)}else{if(V.isInstancedBufferAttribute){for(let se=0;se<L.locationSize;se++)c(L.location+se,V.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let se=0;se<L.locationSize;se++)p(L.location+se);t.bindBuffer(t.ARRAY_BUFFER,He);for(let se=0;se<L.locationSize;se++)g(L.location+se,ne/L.locationSize,H,G,ne*ee,ne/L.locationSize*se*ee,le)}}else if(Q!==void 0){const G=Q[Z];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(L.location,G);break;case 3:t.vertexAttrib3fv(L.location,G);break;case 4:t.vertexAttrib4fv(L.location,G);break;default:t.vertexAttrib1fv(L.location,G)}}}}_()}function P(){b();for(const S in i){const N=i[S];for(const W in N){const U=N[W];for(const j in U)f(U[j].object),delete U[j];delete N[W]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const W in N){const U=N[W];for(const j in U)f(U[j].object),delete U[j];delete N[W]}delete i[S.id]}function w(S){for(const N in i){const W=i[N];if(W[S.id]===void 0)continue;const U=W[S.id];for(const j in U)f(U[j].object),delete U[j];delete W[S.id]}}function b(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function KT(t,e,n){let i;function r(l){i=l}function o(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function s(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function a(l,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(l[h],u[h]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,f);let h=0;for(let m=0;m<f;m++)h+=u[m];n.update(h,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function ZT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=n.precision!==void 0?n.precision:"highp";const a=o(s);a!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",a,"instead."),s=a);const l=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),p=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),c=f>0,_=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:p,vertexTextures:c,maxSamples:_}}function QT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ir,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,c=t.get(d);if(!r||x===null||x.length===0||o&&!p)o?f(null):u();else{const _=o?0:i,g=_*4;let E=c.clippingState||null;l.value=E,E=f(x,h,g,m);for(let P=0;P!==g;++P)E[P]=n[P];c.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,x){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,x!==!0||p===null){const c=m+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<c)&&(p=new Float32Array(c));for(let g=0,E=m;g!==v;++g,E+=4)s.copy(d[g]).applyMatrix4(_,a),s.normal.toArray(p,E),p[E+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function JT(t){let e=new WeakMap;function n(s,a){return a===$c?s.mapping=So:a===qc&&(s.mapping=yo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===$c||a===qc)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new uM(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class e1 extends z_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const no=4,Ap=[.125,.215,.35,.446,.526,.582],sr=20,Vu=new e1,Cp=new Ye;let Gu=null,Wu=0,Xu=0,ju=!1;const rr=(1+Math.sqrt(5))/2,Gr=1/rr,Rp=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,rr,Gr),new k(0,rr,-Gr),new k(Gr,0,rr),new k(-Gr,0,rr),new k(rr,Gr,0),new k(-rr,Gr,0)];class Pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gu,Wu,Xu),this._renderer.xr.enabled=ju,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===So||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:fl,format:zn,colorSpace:ji,depthBuffer:!1},r=Lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t1(o)),this._blurMaterial=n1(o,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,Vu)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Cp),f.toneMapping=Oi,f.autoClear=!1;const m=new nd({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),x=new Bn(new Lo,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Cp),v=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Ea(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===So||e.mapping===yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Bn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ea(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Rp[(r-1)%Rp.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Bn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*sr-1),v=o/x,p=isFinite(o)?1+Math.floor(f*v):sr;p>sr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const c=[];let _=0;for(let w=0;w<sr;++w){const b=w/v,T=Math.exp(-b*b/2);c.push(T),w===0?_+=T:w<p&&(_+=2*T)}for(let w=0;w<c.length;w++)c[w]=c[w]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const E=this._sizeLods[r],P=3*E*(r>g-no?r-g+no:0),C=4*(this._cubeSize-E);Ea(n,P,C,3*E,2*E),l.setRenderTarget(n),l.render(d,Vu)}}function t1(t){const e=[],n=[],i=[];let r=t;const o=t-no+1+Ap.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-no?l=Ap[s-t+no-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,x=6,v=3,p=2,c=1,_=new Float32Array(v*x*m),g=new Float32Array(p*x*m),E=new Float32Array(c*x*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,b=C>2?0:-1,T=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(T,v*x*C),g.set(h,p*x*C);const S=[C,C,C,C,C,C];E.set(S,c*x*C)}const P=new wr;P.setAttribute("position",new Gn(_,v)),P.setAttribute("uv",new Gn(g,p)),P.setAttribute("faceIndex",new Gn(E,c)),e.push(P),r>no&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lp(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=Nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function n1(t,e,n){const i=new Float32Array(sr),r=new k(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function bp(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Up(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===$c||l===qc,f=l===So||l===yo;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Pp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return u&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Pp(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function r1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function o1(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let p=0,c=v.length;p<c;p++)e.remove(v[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const v=m[x];for(let p=0,c=v.length;p<c;p++)e.update(v[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,x=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,E=_.length;g<E;g+=3){const P=_[g+0],C=_[g+1],w=_[g+2];h.push(P,C,C,w,w,P)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,E=_.length/3-1;g<E;g+=3){const P=g+0,C=g+1,w=g+2;h.push(P,C,C,w,w,P)}}else return;const p=new(b_(h)?O_:F_)(h,1);p.version=v;const c=o.get(d);c&&e.remove(c),o.set(d,p)}function f(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function s1(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,h){t.drawElements(i,h,o,d*s),n.update(h,i,1)}function u(d,h,m){m!==0&&(t.drawElementsInstanced(i,h,o,d*s,m),n.update(h,i,m))}function f(d,h,m){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<m;v++)this.render(d[v]/s,h[v]);else{x.multiDrawElementsWEBGL(i,h,0,o,d,0,m);let v=0;for(let p=0;p<m;p++)v+=h[p];n.update(v,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function a1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function l1(t,e,n){const i=new WeakMap,r=new Rt;function o(s,a,l){const u=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let E=0;x===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let P=a.attributes.position.count*E,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*C*4*d),b=new D_(w,P,C,d);b.type=Ai,b.needsUpdate=!0;const T=E*4;for(let N=0;N<d;N++){const W=c[N],U=_[N],j=g[N],X=P*C*4*N;for(let Q=0;Q<W.count;Q++){const Z=Q*T;x===!0&&(r.fromBufferAttribute(W,Q),w[X+Z+0]=r.x,w[X+Z+1]=r.y,w[X+Z+2]=r.z,w[X+Z+3]=0),v===!0&&(r.fromBufferAttribute(U,Q),w[X+Z+4]=r.x,w[X+Z+5]=r.y,w[X+Z+6]=r.z,w[X+Z+7]=0),p===!0&&(r.fromBufferAttribute(j,Q),w[X+Z+8]=r.x,w[X+Z+9]=r.y,w[X+Z+10]=r.z,w[X+Z+11]=j.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new Ve(P,C)},i.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let x=0;for(let p=0;p<u.length;p++)x+=u[p];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function u1(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class G_ extends Qt{constructor(e,n,i,r,o,s,a,l,u,f){if(f=f!==void 0?f:co,f!==co&&f!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===co&&(i=Mo),i===void 0&&f===ws&&(i=Ds),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const W_=new Qt,X_=new G_(1,1);X_.compareFunction=L_;const j_=new D_,Y_=new jy,$_=new B_,Dp=[],Np=[],Ip=new Float32Array(16),Fp=new Float32Array(9),Op=new Float32Array(4);function bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Dp[r];if(o===void 0&&(o=new Float32Array(r),Dp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function kl(t,e){let n=Np[e];n===void 0&&(n=new Int32Array(e),Np[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function h1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(yt(n,i))return;Op.set(i),t.uniformMatrix2fv(this.addr,!1,Op),Mt(n,i)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(yt(n,i))return;Fp.set(i),t.uniformMatrix3fv(this.addr,!1,Fp),Mt(n,i)}}function g1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(yt(n,i))return;Ip.set(i),t.uniformMatrix4fv(this.addr,!1,Ip),Mt(n,i)}}function _1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function v1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function w1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?X_:W_;n.setTexture2D(e||o,r)}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Y_,r)}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$_,r)}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||j_,r)}function P1(t){switch(t){case 5126:return c1;case 35664:return f1;case 35665:return d1;case 35666:return h1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return v1;case 35668:case 35672:return x1;case 35669:case 35673:return S1;case 5125:return y1;case 36294:return M1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return R1}}function L1(t,e){t.uniform1fv(this.addr,e)}function b1(t,e){const n=bo(e,this.size,2);t.uniform2fv(this.addr,n)}function U1(t,e){const n=bo(e,this.size,3);t.uniform3fv(this.addr,n)}function D1(t,e){const n=bo(e,this.size,4);t.uniform4fv(this.addr,n)}function N1(t,e){const n=bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I1(t,e){const n=bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function F1(t,e){const n=bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function O1(t,e){t.uniform1iv(this.addr,e)}function k1(t,e){t.uniform2iv(this.addr,e)}function z1(t,e){t.uniform3iv(this.addr,e)}function B1(t,e){t.uniform4iv(this.addr,e)}function H1(t,e){t.uniform1uiv(this.addr,e)}function V1(t,e){t.uniform2uiv(this.addr,e)}function G1(t,e){t.uniform3uiv(this.addr,e)}function W1(t,e){t.uniform4uiv(this.addr,e)}function X1(t,e,n){const i=this.cache,r=e.length,o=kl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),Mt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||W_,o[s])}function j1(t,e,n){const i=this.cache,r=e.length,o=kl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),Mt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Y_,o[s])}function Y1(t,e,n){const i=this.cache,r=e.length,o=kl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),Mt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||$_,o[s])}function $1(t,e,n){const i=this.cache,r=e.length,o=kl(n,r);yt(i,o)||(t.uniform1iv(this.addr,o),Mt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||j_,o[s])}function q1(t){switch(t){case 5126:return L1;case 35664:return b1;case 35665:return U1;case 35666:return D1;case 35674:return N1;case 35675:return I1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return k1;case 35668:case 35672:return z1;case 35669:case 35673:return B1;case 5125:return H1;case 36294:return V1;case 36295:return G1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return $1}}class K1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=P1(n.type)}}class Z1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=q1(n.type)}}class Q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Yu=/(\w+)(\])?(\[|\.)?/g;function kp(t,e){t.seq.push(e),t.map[e.id]=e}function J1(t,e,n){const i=t.name,r=i.length;for(Yu.lastIndex=0;;){const o=Yu.exec(i),s=Yu.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){kp(n,u===void 0?new K1(a,t,e):new Z1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Q1(a),kp(n,d)),n=d}}}class Oa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);J1(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function zp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ew=37297;let tw=0;function nw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function iw(t){const e=je.getPrimaries(je.workingColorSpace),n=je.getPrimaries(t);let i;switch(e===n?i="":e===pl&&n===hl?i="LinearDisplayP3ToLinearSRGB":e===hl&&n===pl&&(i="LinearSRGBToLinearDisplayP3"),t){case ji:case Il:return[i,"LinearTransferOETF"];case In:case ed:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+nw(t.getShaderSource(e),s)}else return r}function rw(t,e){const n=iw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ow(t,e){let n;switch(e){case uy:n="Linear";break;case cy:n="Reinhard";break;case fy:n="OptimizedCineon";break;case dy:n="ACESFilmic";break;case py:n="AgX";break;case my:n="Neutral";break;case hy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function sw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function aw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ko(t){return t!==""}function Hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(t){return t.replace(uw,fw)}const cw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fw(t,e){let n=Ue[e];if(n===void 0){const i=cw.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(n)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(t){return t.replace(dw,hw)}function hw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Wp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===IS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function mw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case So:case yo:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function _w(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case S_:e="ENVMAP_BLENDING_MULTIPLY";break;case ay:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function vw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xw(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=pw(n),u=mw(n),f=gw(n),d=_w(n),h=vw(n),m=sw(n),x=aw(o),v=r.createProgram();let p,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ko).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ko).join(`
`),c.length>0&&(c+=`
`)):(p=[Wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),c=[Wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?Ue.tonemapping_pars_fragment:"",n.toneMapping!==Oi?ow("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,rw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),s=Jc(s),s=Hp(s,n),s=Vp(s,n),a=Jc(a),a=Hp(a,n),a=Vp(a,n),s=Gp(s),a=Gp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+p+s,E=_+c+a,P=zp(r,r.VERTEX_SHADER,g),C=zp(r,r.FRAGMENT_SHADER,E);r.attachShader(v,P),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(N){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),U=r.getShaderInfoLog(P).trim(),j=r.getShaderInfoLog(C).trim();let X=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,C);else{const Z=Bp(r,P,"vertex"),L=Bp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+Z+`
`+L)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||j==="")&&(Q=!1);Q&&(N.diagnostics={runnable:X,programLog:W,vertexShader:{log:U,prefix:p},fragmentShader:{log:j,prefix:c}})}r.deleteShader(P),r.deleteShader(C),b=new Oa(r,v),T=lw(r,v)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,ew)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let Sw=0;class yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Mw(e),n.set(e,i)),i}}class Mw{constructor(e){this.id=Sw++,this.code=e,this.usedTimes=0}}function Ew(t,e,n,i,r,o,s){const a=new N_,l=new yw,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function p(T,S,N,W,U){const j=W.fog,X=U.geometry,Q=T.isMeshStandardMaterial?W.environment:null,Z=(T.isMeshStandardMaterial?n:e).get(T.envMap||Q),L=Z&&Z.mapping===Nl?Z.image.height:null,V=x[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ne=G!==void 0?G.length:0;let me=0;X.morphAttributes.position!==void 0&&(me=1),X.morphAttributes.normal!==void 0&&(me=2),X.morphAttributes.color!==void 0&&(me=3);let He,H,ee,le;if(V){const bt=Fn[V];He=bt.vertexShader,H=bt.fragmentShader}else He=T.vertexShader,H=T.fragmentShader,l.update(T),ee=l.getVertexShaderID(T),le=l.getFragmentShaderID(T);const se=t.getRenderTarget(),Le=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,ke=!!T.map,I=!!T.matcap,Ie=!!Z,Ee=!!T.aoMap,_t=!!T.lightMap,we=!!T.bumpMap,$e=!!T.normalMap,A=!!T.displacementMap,y=!!T.emissiveMap,B=!!T.metalnessMap,Y=!!T.roughnessMap,$=T.anisotropy>0,q=T.clearcoat>0,ye=T.iridescence>0,J=T.sheen>0,ve=T.transmission>0,Me=$&&!!T.anisotropyMap,re=q&&!!T.clearcoatMap,fe=q&&!!T.clearcoatNormalMap,Ae=q&&!!T.clearcoatRoughnessMap,de=ye&&!!T.iridescenceMap,he=ye&&!!T.iridescenceThicknessMap,Oe=J&&!!T.sheenColorMap,ze=J&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ge=!!T.specularColorMap,nt=!!T.specularIntensityMap,ge=ve&&!!T.transmissionMap,R=ve&&!!T.thicknessMap,ie=!!T.gradientMap,te=!!T.alphaMap,_e=T.alphaTest>0,xe=!!T.alphaHash,qe=!!T.extensions;let it=Oi;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(it=t.toneMapping);const st={shaderID:V,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:H,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ne,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ji,alphaToCoverage:!!T.alphaToCoverage,map:ke,matcap:I,envMap:Ie,envMapMode:Ie&&Z.mapping,envMapCubeUVHeight:L,aoMap:Ee,lightMap:_t,bumpMap:we,normalMap:$e,displacementMap:h&&A,emissiveMap:y,normalMapObjectSpace:$e&&T.normalMapType===Ly,normalMapTangentSpace:$e&&T.normalMapType===Py,metalnessMap:B,roughnessMap:Y,anisotropy:$,anisotropyMap:Me,clearcoat:q,clearcoatMap:re,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,iridescence:ye,iridescenceMap:de,iridescenceThicknessMap:he,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:ze,specularMap:We,specularColorMap:Ge,specularIntensityMap:nt,transmission:ve,transmissionMap:ge,thicknessMap:R,gradientMap:ie,opaque:T.transparent===!1&&T.blending===uo&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:xe,combine:T.combine,mapUv:ke&&v(T.map.channel),aoMapUv:Ee&&v(T.aoMap.channel),lightMapUv:_t&&v(T.lightMap.channel),bumpMapUv:we&&v(T.bumpMap.channel),normalMapUv:$e&&v(T.normalMap.channel),displacementMapUv:A&&v(T.displacementMap.channel),emissiveMapUv:y&&v(T.emissiveMap.channel),metalnessMapUv:B&&v(T.metalnessMap.channel),roughnessMapUv:Y&&v(T.roughnessMap.channel),anisotropyMapUv:Me&&v(T.anisotropyMap.channel),clearcoatMapUv:re&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(T.sheenRoughnessMap.channel),specularMapUv:We&&v(T.specularMap.channel),specularColorMapUv:Ge&&v(T.specularColorMap.channel),specularIntensityMapUv:nt&&v(T.specularIntensityMap.channel),transmissionMapUv:ge&&v(T.transmissionMap.channel),thicknessMapUv:R&&v(T.thicknessMap.channel),alphaMapUv:te&&v(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($e||$),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(ke||te),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ke&&T.map.isVideoTexture===!0&&je.getTransfer(T.map.colorSpace)===Je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Jn,flipSided:T.side===Zt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return st.vertexUv1s=u.has(1),st.vertexUv2s=u.has(2),st.vertexUv3s=u.has(3),u.clear(),st}function c(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)S.push(N),S.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(_(S,T),g(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function g(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),T.push(a.mask)}function E(T){const S=x[T.type];let N;if(S){const W=Fn[S];N=oM.clone(W.uniforms)}else N=T.uniforms;return N}function P(T,S){let N;for(let W=0,U=f.length;W<U;W++){const j=f[W];if(j.cacheKey===S){N=j,++N.usedTimes;break}}return N===void 0&&(N=new xw(t,S,T,o),f.push(N)),N}function C(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:E,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:b}}function Tw(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ww(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jp(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,x,v,p){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:v,group:p},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=m,c.groupOrder=x,c.renderOrder=d.renderOrder,c.z=v,c.group=p),e++,c}function a(d,h,m,x,v,p){const c=s(d,h,m,x,v,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(d,h,m,x,v,p){const c=s(d,h,m,x,v,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||ww),i.length>1&&i.sort(h||Xp),r.length>1&&r.sort(h||Xp)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function Aw(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new jp,t.set(i,[s])):r>=o.length?(s=new jp,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ye};break;case"SpotLight":n={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Pw=0;function Lw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bw(t){const e=new Cw,n=Rw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,o=new St,s=new St;function a(u,f){let d=0,h=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let x=0,v=0,p=0,c=0,_=0,g=0,E=0,P=0,C=0,w=0,b=0;u.sort(Lw);const T=f===!0?Math.PI:1;for(let N=0,W=u.length;N<W;N++){const U=u[N],j=U.color,X=U.intensity,Q=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=j.r*X*T,h+=j.g*X*T,m+=j.b*X*T;else if(U.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(U.sh.coefficients[L],X);b++}else if(U.isDirectionalLight){const L=e.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const V=U.shadow,G=n.get(U);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[x]=G,i.directionalShadowMap[x]=Z,i.directionalShadowMatrix[x]=U.shadow.matrix,g++}i.directional[x]=L,x++}else if(U.isSpotLight){const L=e.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(j).multiplyScalar(X*T),L.distance=Q,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,i.spot[p]=L;const V=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,V.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[p]=V.matrix,U.castShadow){const G=n.get(U);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[p]=G,i.spotShadowMap[p]=Z,P++}p++}else if(U.isRectAreaLight){const L=e.get(U);L.color.copy(j).multiplyScalar(X),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),i.rectArea[c]=L,c++}else if(U.isPointLight){const L=e.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity*T),L.distance=U.distance,L.decay=U.decay,U.castShadow){const V=U.shadow,G=n.get(U);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=U.shadow.matrix,E++}i.point[v]=L,v++}else if(U.isHemisphereLight){const L=e.get(U);L.skyColor.copy(U.color).multiplyScalar(X*T),L.groundColor.copy(U.groundColor).multiplyScalar(X*T),i.hemi[_]=L,_++}}c>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=m;const S=i.hash;(S.directionalLength!==x||S.pointLength!==v||S.spotLength!==p||S.rectAreaLength!==c||S.hemiLength!==_||S.numDirectionalShadows!==g||S.numPointShadows!==E||S.numSpotShadows!==P||S.numSpotMaps!==C||S.numLightProbes!==b)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=c,i.point.length=v,i.hemi.length=_,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=P+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,S.directionalLength=x,S.pointLength=v,S.spotLength=p,S.rectAreaLength=c,S.hemiLength=_,S.numDirectionalShadows=g,S.numPointShadows=E,S.numSpotShadows=P,S.numSpotMaps=C,S.numLightProbes=b,i.version=Pw++)}function l(u,f){let d=0,h=0,m=0,x=0,v=0;const p=f.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(g.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(p),s.identity(),o.copy(g.matrixWorld),o.premultiply(p),s.extractRotation(o),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),x++}else if(g.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(p),h++}else if(g.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Yp(t){const e=new bw(t),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function a(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Uw(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Yp(t),e.set(r,[a])):o>=s.length?(a=new Yp(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Dw extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nw extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ow(t,e,n){let i=new H_;const r=new Ve,o=new Ve,s=new Rt,a=new Dw({depthPacking:Ry}),l=new Nw,u={},f=n.maxTextureSize,d={[Hi]:Zt,[Zt]:Hi,[Jn]:Jn},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Iw,fragmentShader:Fw}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new wr;x.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let c=this.type;this.render=function(C,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Fi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const U=c!==Kn&&this.type===Kn,j=c===Kn&&this.type!==Kn;for(let X=0,Q=C.length;X<Q;X++){const Z=C[X],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const V=L.getFrameExtents();if(r.multiply(V),o.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/V.x),r.x=o.x*V.x,L.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/V.y),r.y=o.y*V.y,L.mapSize.y=o.y)),L.map===null||U===!0||j===!0){const ne=this.type!==Kn?{minFilter:gn,magFilter:gn}:{};L.map!==null&&L.map.dispose(),L.map=new Sr(r.x,r.y,ne),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const G=L.getViewportCount();for(let ne=0;ne<G;ne++){const me=L.getViewport(ne);s.set(o.x*me.x,o.y*me.y,o.x*me.z,o.y*me.w),W.viewport(s),L.updateMatrices(Z,ne),i=L.getFrustum(),E(w,b,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===Kn&&_(L,b),L.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(T,S,N)};function _(C,w){const b=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,b,h,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,b,m,v,null)}function g(C,w,b,T){let S=null;const N=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)S=N;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=S.uuid,U=w.uuid;let j=u[W];j===void 0&&(j={},u[W]=j);let X=j[U];X===void 0&&(X=S.clone(),j[U]=X,w.addEventListener("dispose",P)),S=X}if(S.visible=w.visible,S.wireframe=w.wireframe,T===Kn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=b}return S}function E(C,w,b,T,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Kn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const U=e.update(C),j=C.material;if(Array.isArray(j)){const X=U.groups;for(let Q=0,Z=X.length;Q<Z;Q++){const L=X[Q],V=j[L.materialIndex];if(V&&V.visible){const G=g(C,V,T,S);C.onBeforeShadow(t,C,w,b,U,G,L),t.renderBufferDirect(b,null,U,G,C,L),C.onAfterShadow(t,C,w,b,U,G,L)}}}else if(j.visible){const X=g(C,j,T,S);C.onBeforeShadow(t,C,w,b,U,X,null),t.renderBufferDirect(b,null,U,X,C,null),C.onAfterShadow(t,C,w,b,U,X,null)}}const W=C.children;for(let U=0,j=W.length;U<j;U++)E(W[U],w,b,T,S)}function P(C){C.target.removeEventListener("dispose",P);for(const b in u){const T=u[b],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function kw(t){function e(){let R=!1;const ie=new Rt;let te=null;const _e=new Rt(0,0,0,0);return{setMask:function(xe){te!==xe&&!R&&(t.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){R=xe},setClear:function(xe,qe,it,st,bt){bt===!0&&(xe*=st,qe*=st,it*=st),ie.set(xe,qe,it,st),_e.equals(ie)===!1&&(t.clearColor(xe,qe,it,st),_e.copy(ie))},reset:function(){R=!1,te=null,_e.set(-1,0,0,0)}}}function n(){let R=!1,ie=null,te=null,_e=null;return{setTest:function(xe){xe?le(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(xe){ie!==xe&&!R&&(t.depthMask(xe),ie=xe)},setFunc:function(xe){if(te!==xe){switch(xe){case ey:t.depthFunc(t.NEVER);break;case ty:t.depthFunc(t.ALWAYS);break;case ny:t.depthFunc(t.LESS);break;case cl:t.depthFunc(t.LEQUAL);break;case iy:t.depthFunc(t.EQUAL);break;case ry:t.depthFunc(t.GEQUAL);break;case oy:t.depthFunc(t.GREATER);break;case sy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=xe}},setLocked:function(xe){R=xe},setClear:function(xe){_e!==xe&&(t.clearDepth(xe),_e=xe)},reset:function(){R=!1,ie=null,te=null,_e=null}}}function i(){let R=!1,ie=null,te=null,_e=null,xe=null,qe=null,it=null,st=null,bt=null;return{setTest:function(Ze){R||(Ze?le(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!R&&(t.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,bn,Un){(te!==Ze||_e!==bn||xe!==Un)&&(t.stencilFunc(Ze,bn,Un),te=Ze,_e=bn,xe=Un)},setOp:function(Ze,bn,Un){(qe!==Ze||it!==bn||st!==Un)&&(t.stencilOp(Ze,bn,Un),qe=Ze,it=bn,st=Un)},setLocked:function(Ze){R=Ze},setClear:function(Ze){bt!==Ze&&(t.clearStencil(Ze),bt=Ze)},reset:function(){R=!1,ie=null,te=null,_e=null,xe=null,qe=null,it=null,st=null,bt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],m=null,x=!1,v=null,p=null,c=null,_=null,g=null,E=null,P=null,C=new Ye(0,0,0),w=0,b=!1,T=null,S=null,N=null,W=null,U=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=Q>=2);let L=null,V={};const G=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),me=new Rt().fromArray(G),He=new Rt().fromArray(ne);function H(R,ie,te,_e){const xe=new Uint8Array(4),qe=t.createTexture();t.bindTexture(R,qe),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<te;it++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ie+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return qe}const ee={};ee[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(t.DEPTH_TEST),o.setFunc(cl),we(!1),$e(Ph),le(t.CULL_FACE),Ee(Fi);function le(R){u[R]!==!0&&(t.enable(R),u[R]=!0)}function se(R){u[R]!==!1&&(t.disable(R),u[R]=!1)}function Le(R,ie){return f[R]!==ie?(t.bindFramebuffer(R,ie),f[R]=ie,R===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ie),R===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(R,ie){let te=h,_e=!1;if(R){te=d.get(ie),te===void 0&&(te=[],d.set(ie,te));const xe=R.textures;if(te.length!==xe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,it=xe.length;qe<it;qe++)te[qe]=t.COLOR_ATTACHMENT0+qe;te.length=xe.length,_e=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,_e=!0);_e&&t.drawBuffers(te)}function ke(R){return m!==R?(t.useProgram(R),m=R,!0):!1}const I={[or]:t.FUNC_ADD,[OS]:t.FUNC_SUBTRACT,[kS]:t.FUNC_REVERSE_SUBTRACT};I[zS]=t.MIN,I[BS]=t.MAX;const Ie={[HS]:t.ZERO,[VS]:t.ONE,[GS]:t.SRC_COLOR,[jc]:t.SRC_ALPHA,[qS]:t.SRC_ALPHA_SATURATE,[YS]:t.DST_COLOR,[XS]:t.DST_ALPHA,[WS]:t.ONE_MINUS_SRC_COLOR,[Yc]:t.ONE_MINUS_SRC_ALPHA,[$S]:t.ONE_MINUS_DST_COLOR,[jS]:t.ONE_MINUS_DST_ALPHA,[KS]:t.CONSTANT_COLOR,[ZS]:t.ONE_MINUS_CONSTANT_COLOR,[QS]:t.CONSTANT_ALPHA,[JS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ee(R,ie,te,_e,xe,qe,it,st,bt,Ze){if(R===Fi){x===!0&&(se(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),R!==FS){if(R!==v||Ze!==b){if((p!==or||g!==or)&&(t.blendEquation(t.FUNC_ADD),p=or,g=or),Ze)switch(R){case uo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lh:t.blendFunc(t.ONE,t.ONE);break;case bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case uo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}c=null,_=null,E=null,P=null,C.set(0,0,0),w=0,v=R,b=Ze}return}xe=xe||ie,qe=qe||te,it=it||_e,(ie!==p||xe!==g)&&(t.blendEquationSeparate(I[ie],I[xe]),p=ie,g=xe),(te!==c||_e!==_||qe!==E||it!==P)&&(t.blendFuncSeparate(Ie[te],Ie[_e],Ie[qe],Ie[it]),c=te,_=_e,E=qe,P=it),(st.equals(C)===!1||bt!==w)&&(t.blendColor(st.r,st.g,st.b,bt),C.copy(st),w=bt),v=R,b=!1}function _t(R,ie){R.side===Jn?se(t.CULL_FACE):le(t.CULL_FACE);let te=R.side===Zt;ie&&(te=!te),we(te),R.blending===uo&&R.transparent===!1?Ee(Fi):Ee(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const _e=R.stencilWrite;s.setTest(_e),_e&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),y(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(R){T!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),T=R)}function $e(R){R!==DS?(le(t.CULL_FACE),R!==S&&(R===Ph?t.cullFace(t.BACK):R===NS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),S=R}function A(R){R!==N&&(X&&t.lineWidth(R),N=R)}function y(R,ie,te){R?(le(t.POLYGON_OFFSET_FILL),(W!==ie||U!==te)&&(t.polygonOffset(ie,te),W=ie,U=te)):se(t.POLYGON_OFFSET_FILL)}function B(R){R?le(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function Y(R){R===void 0&&(R=t.TEXTURE0+j-1),L!==R&&(t.activeTexture(R),L=R)}function $(R,ie,te){te===void 0&&(L===null?te=t.TEXTURE0+j-1:te=L);let _e=V[te];_e===void 0&&(_e={type:void 0,texture:void 0},V[te]=_e),(_e.type!==R||_e.texture!==ie)&&(L!==te&&(t.activeTexture(te),L=te),t.bindTexture(R,ie||ee[R]),_e.type=R,_e.texture=ie)}function q(){const R=V[L];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(R){me.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),me.copy(R))}function We(R){He.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),He.copy(R))}function Ge(R,ie){let te=l.get(ie);te===void 0&&(te=new WeakMap,l.set(ie,te));let _e=te.get(R);_e===void 0&&(_e=t.getUniformBlockIndex(ie,R.name),te.set(R,_e))}function nt(R,ie){const _e=l.get(ie).get(R);a.get(ie)!==_e&&(t.uniformBlockBinding(ie,_e,R.__bindingPointIndex),a.set(ie,_e))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,V={},f={},d=new WeakMap,h=[],m=null,x=!1,v=null,p=null,c=null,_=null,g=null,E=null,P=null,C=new Ye(0,0,0),w=0,b=!1,T=null,S=null,N=null,W=null,U=null,me.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:le,disable:se,bindFramebuffer:Le,drawBuffers:Ne,useProgram:ke,setBlending:Ee,setMaterial:_t,setFlipSided:we,setCullFace:$e,setLineWidth:A,setPolygonOffset:y,setScissorTest:B,activeTexture:Y,bindTexture:$,unbindTexture:q,compressedTexImage2D:ye,compressedTexImage3D:J,texImage2D:he,texImage3D:Oe,updateUBOMapping:Ge,uniformBlockBinding:nt,texStorage2D:Ae,texStorage3D:de,texSubImage2D:ve,texSubImage3D:Me,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:ze,viewport:We,reset:ge}}function zw(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,y){return m?new OffscreenCanvas(A,y):gl("canvas")}function v(A,y,B){let Y=1;const $=$e(A);if(($.width>B||$.height>B)&&(Y=B/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*$.width),ye=Math.floor(Y*$.height);d===void 0&&(d=x(q,ye));const J=y?x(q,ye):d;return J.width=q,J.height=ye,J.getContext("2d").drawImage(A,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+ye+")."),J}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==gn&&A.minFilter!==Cn}function c(A){t.generateMipmap(A)}function _(A,y,B,Y,$=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=y;if(y===t.RED&&(B===t.FLOAT&&(q=t.R32F),B===t.HALF_FLOAT&&(q=t.R16F),B===t.UNSIGNED_BYTE&&(q=t.R8)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.R8UI),B===t.UNSIGNED_SHORT&&(q=t.R16UI),B===t.UNSIGNED_INT&&(q=t.R32UI),B===t.BYTE&&(q=t.R8I),B===t.SHORT&&(q=t.R16I),B===t.INT&&(q=t.R32I)),y===t.RG&&(B===t.FLOAT&&(q=t.RG32F),B===t.HALF_FLOAT&&(q=t.RG16F),B===t.UNSIGNED_BYTE&&(q=t.RG8)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(q=t.RG8UI),B===t.UNSIGNED_SHORT&&(q=t.RG16UI),B===t.UNSIGNED_INT&&(q=t.RG32UI),B===t.BYTE&&(q=t.RG8I),B===t.SHORT&&(q=t.RG16I),B===t.INT&&(q=t.RG32I)),y===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),y===t.RGBA){const ye=$?dl:je.getTransfer(Y);B===t.FLOAT&&(q=t.RGBA32F),B===t.HALF_FLOAT&&(q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(q=ye===Je?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function E(A){const y=A.target;y.removeEventListener("dispose",E),C(y),y.isVideoTexture&&f.delete(y)}function P(A){const y=A.target;y.removeEventListener("dispose",P),b(y)}function C(A){const y=i.get(A);if(y.__webglInit===void 0)return;const B=A.source,Y=h.get(B);if(Y){const $=Y[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(A),Object.keys(Y).length===0&&h.delete(B)}i.remove(A)}function w(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const B=A.source,Y=h.get(B);delete Y[y.__cacheKey],s.memory.textures--}function b(A){const y=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let $=0;$<y.__webglFramebuffer[Y].length;$++)t.deleteFramebuffer(y.__webglFramebuffer[Y][$]);else t.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)t.deleteFramebuffer(y.__webglFramebuffer[Y]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let Y=0,$=B.length;Y<$;Y++){const q=i.get(B[Y]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(B[Y])}i.remove(A)}let T=0;function S(){T=0}function N(){const A=T;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),T+=1,A}function W(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function U(A,y){const B=i.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(B,A,y);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function j(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){me(B,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function X(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){me(B,A,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function Q(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){He(B,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const Z={[Kc]:t.REPEAT,[cr]:t.CLAMP_TO_EDGE,[Zc]:t.MIRRORED_REPEAT},L={[gn]:t.NEAREST,[gy]:t.NEAREST_MIPMAP_NEAREST,[na]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[gu]:t.LINEAR_MIPMAP_NEAREST,[fr]:t.LINEAR_MIPMAP_LINEAR},V={[by]:t.NEVER,[Oy]:t.ALWAYS,[Uy]:t.LESS,[L_]:t.LEQUAL,[Dy]:t.EQUAL,[Fy]:t.GEQUAL,[Ny]:t.GREATER,[Iy]:t.NOTEQUAL};function G(A,y){if(y.type===Ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===gu||y.magFilter===na||y.magFilter===fr||y.minFilter===Cn||y.minFilter===gu||y.minFilter===na||y.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Z[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,L[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,L[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==na&&y.minFilter!==fr||y.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ne(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",E));const Y=y.source;let $=h.get(Y);$===void 0&&($={},h.set(Y,$));const q=W(y);if(q!==A.__cacheKey){$[q]===void 0&&($[q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),$[q].usedTimes++;const ye=$[A.__cacheKey];ye!==void 0&&($[A.__cacheKey].usedTimes--,ye.usedTimes===0&&w(y)),A.__cacheKey=q,A.__webglTexture=$[q].texture}return B}function me(A,y,B){let Y=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=t.TEXTURE_3D);const $=ne(A,y),q=y.source;n.bindTexture(Y,A.__webglTexture,t.TEXTURE0+B);const ye=i.get(q);if(q.version!==ye.__version||$===!0){n.activeTexture(t.TEXTURE0+B);const J=je.getPrimaries(je.workingColorSpace),ve=y.colorSpace===Mi?null:je.getPrimaries(y.colorSpace),Me=y.colorSpace===Mi||J===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let re=v(y.image,!1,r.maxTextureSize);re=we(y,re);const fe=o.convert(y.format,y.colorSpace),Ae=o.convert(y.type);let de=_(y.internalFormat,fe,Ae,y.colorSpace,y.isVideoTexture);G(Y,y);let he;const Oe=y.mipmaps,ze=y.isVideoTexture!==!0&&de!==P_,We=ye.__version===void 0||$===!0,Ge=q.dataReady,nt=g(y,re);if(y.isDepthTexture)de=t.DEPTH_COMPONENT16,y.type===Ai?de=t.DEPTH_COMPONENT32F:y.type===Mo?de=t.DEPTH_COMPONENT24:y.type===Ds&&(de=t.DEPTH24_STENCIL8),We&&(ze?n.texStorage2D(t.TEXTURE_2D,1,de,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,de,re.width,re.height,0,fe,Ae,null));else if(y.isDataTexture)if(Oe.length>0){ze&&We&&n.texStorage2D(t.TEXTURE_2D,nt,de,Oe[0].width,Oe[0].height);for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],ze?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,fe,Ae,he.data):n.texImage2D(t.TEXTURE_2D,ge,de,he.width,he.height,0,fe,Ae,he.data);y.generateMipmaps=!1}else ze?(We&&n.texStorage2D(t.TEXTURE_2D,nt,de,re.width,re.height),Ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,fe,Ae,re.data)):n.texImage2D(t.TEXTURE_2D,0,de,re.width,re.height,0,fe,Ae,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,de,Oe[0].width,Oe[0].height,re.depth);for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],y.format!==zn?fe!==null?ze?Ge&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,re.depth,fe,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,de,he.width,he.height,re.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,re.depth,fe,Ae,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,de,he.width,he.height,re.depth,0,fe,Ae,he.data)}else{ze&&We&&n.texStorage2D(t.TEXTURE_2D,nt,de,Oe[0].width,Oe[0].height);for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],y.format!==zn?fe!==null?ze?Ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,fe,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,fe,Ae,he.data):n.texImage2D(t.TEXTURE_2D,ge,de,he.width,he.height,0,fe,Ae,he.data)}else if(y.isDataArrayTexture)ze?(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,nt,de,re.width,re.height,re.depth),Ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Ae,re.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,re.width,re.height,re.depth,0,fe,Ae,re.data);else if(y.isData3DTexture)ze?(We&&n.texStorage3D(t.TEXTURE_3D,nt,de,re.width,re.height,re.depth),Ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Ae,re.data)):n.texImage3D(t.TEXTURE_3D,0,de,re.width,re.height,re.depth,0,fe,Ae,re.data);else if(y.isFramebufferTexture){if(We)if(ze)n.texStorage2D(t.TEXTURE_2D,nt,de,re.width,re.height);else{let ge=re.width,R=re.height;for(let ie=0;ie<nt;ie++)n.texImage2D(t.TEXTURE_2D,ie,de,ge,R,0,fe,Ae,null),ge>>=1,R>>=1}}else if(Oe.length>0){if(ze&&We){const ge=$e(Oe[0]);n.texStorage2D(t.TEXTURE_2D,nt,de,ge.width,ge.height)}for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],ze?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,fe,Ae,he):n.texImage2D(t.TEXTURE_2D,ge,de,fe,Ae,he);y.generateMipmaps=!1}else if(ze){if(We){const ge=$e(re);n.texStorage2D(t.TEXTURE_2D,nt,de,ge.width,ge.height)}Ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ae,re)}else n.texImage2D(t.TEXTURE_2D,0,de,fe,Ae,re);p(y)&&c(Y),ye.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function He(A,y,B){if(y.image.length!==6)return;const Y=ne(A,y),$=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const q=i.get($);if($.version!==q.__version||Y===!0){n.activeTexture(t.TEXTURE0+B);const ye=je.getPrimaries(je.workingColorSpace),J=y.colorSpace===Mi?null:je.getPrimaries(y.colorSpace),ve=y.colorSpace===Mi||ye===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,fe=[];for(let R=0;R<6;R++)!Me&&!re?fe[R]=v(y.image[R],!0,r.maxCubemapSize):fe[R]=re?y.image[R].image:y.image[R],fe[R]=we(y,fe[R]);const Ae=fe[0],de=o.convert(y.format,y.colorSpace),he=o.convert(y.type),Oe=_(y.internalFormat,de,he,y.colorSpace),ze=y.isVideoTexture!==!0,We=q.__version===void 0||Y===!0,Ge=$.dataReady;let nt=g(y,Ae);G(t.TEXTURE_CUBE_MAP,y);let ge;if(Me){ze&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,Oe,Ae.width,Ae.height);for(let R=0;R<6;R++){ge=fe[R].mipmaps;for(let ie=0;ie<ge.length;ie++){const te=ge[ie];y.format!==zn?de!==null?ze?Ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie,0,0,te.width,te.height,de,te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie,Oe,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie,0,0,te.width,te.height,de,he,te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie,Oe,te.width,te.height,0,de,he,te.data)}}}else{if(ge=y.mipmaps,ze&&We){ge.length>0&&nt++;const R=$e(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,Oe,R.width,R.height)}for(let R=0;R<6;R++)if(re){ze?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,fe[R].width,fe[R].height,de,he,fe[R].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Oe,fe[R].width,fe[R].height,0,de,he,fe[R].data);for(let ie=0;ie<ge.length;ie++){const _e=ge[ie].image[R].image;ze?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie+1,0,0,_e.width,_e.height,de,he,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie+1,Oe,_e.width,_e.height,0,de,he,_e.data)}}else{ze?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,de,he,fe[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Oe,de,he,fe[R]);for(let ie=0;ie<ge.length;ie++){const te=ge[ie];ze?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie+1,0,0,de,he,te.image[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ie+1,Oe,de,he,te.image[R])}}}p(y)&&c(t.TEXTURE_CUBE_MAP),q.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function H(A,y,B,Y,$,q){const ye=o.convert(B.format,B.colorSpace),J=o.convert(B.type),ve=_(B.internalFormat,ye,J,B.colorSpace);if(!i.get(y).__hasExternalTextures){const re=Math.max(1,y.width>>q),fe=Math.max(1,y.height>>q);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,q,ve,re,fe,y.depth,0,ye,J,null):n.texImage2D($,q,ve,re,fe,0,ye,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ee(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,$,i.get(B).__webglTexture,0,Ie(y)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,$,i.get(B).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(A,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let Y=t.DEPTH_COMPONENT24;if(B||Ee(y)){const $=y.depthTexture;$&&$.isDepthTexture&&($.type===Ai?Y=t.DEPTH_COMPONENT32F:$.type===Mo&&(Y=t.DEPTH_COMPONENT24));const q=Ie(y);Ee(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,Y,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,q,Y,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const Y=Ie(y);B&&Ee(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,y.width,y.height):Ee(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const Y=y.textures;for(let $=0;$<Y.length;$++){const q=Y[$],ye=o.convert(q.format,q.colorSpace),J=o.convert(q.type),ve=_(q.internalFormat,ye,J,q.colorSpace),Me=Ie(y);B&&Ee(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ve,y.width,y.height):Ee(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ve,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ve,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),U(y.depthTexture,0);const Y=i.get(y.depthTexture).__webglTexture,$=Ie(y);if(y.depthTexture.format===co)Ee(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(y.depthTexture.format===ws)Ee(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function se(A){const y=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");le(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]=t.createRenderbuffer(),ee(y.__webglDepthbuffer[Y],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),ee(y.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(A,y,B){const Y=i.get(A);y!==void 0&&H(Y.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&se(A)}function Ne(A){const y=A.texture,B=i.get(A),Y=i.get(y);A.addEventListener("dispose",P);const $=A.textures,q=A.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=y.version,s.memory.textures++),q){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let ve=0;ve<y.mipmaps.length;ve++)B.__webglFramebuffer[J][ve]=t.createFramebuffer()}else B.__webglFramebuffer[J]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)B.__webglFramebuffer[J]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ye)for(let J=0,ve=$.length;J<ve;J++){const Me=i.get($[J]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&Ee(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const ve=$[J];B.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[J]);const Me=o.convert(ve.format,ve.colorSpace),re=o.convert(ve.type),fe=_(ve.internalFormat,Me,re,ve.colorSpace,A.isXRRenderTarget===!0),Ae=Ie(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,fe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,B.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ee(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),G(t.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)H(B.__webglFramebuffer[J][ve],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve);else H(B.__webglFramebuffer[J],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let J=0,ve=$.length;J<ve;J++){const Me=$[J],re=i.get(Me);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),G(t.TEXTURE_2D,Me),H(B.__webglFramebuffer,A,Me,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D,0),p(Me)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,Y.__webglTexture),G(J,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)H(B.__webglFramebuffer[ve],A,y,t.COLOR_ATTACHMENT0,J,ve);else H(B.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,J,0);p(y)&&c(J),n.unbindTexture()}A.depthBuffer&&se(A)}function ke(A){const y=A.textures;for(let B=0,Y=y.length;B<Y;B++){const $=y[B];if(p($)){const q=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get($).__webglTexture;n.bindTexture(q,ye),c(q),n.unbindTexture()}}}function I(A){if(A.samples>0&&Ee(A)===!1){const y=A.textures,B=A.width,Y=A.height;let $=t.COLOR_BUFFER_BIT;const q=[],ye=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=i.get(A),ve=y.length>1;if(ve)for(let Me=0;Me<y.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){q.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&q.push(ye);const re=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(re===!1&&(A.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&J.__isTransmissionRenderTarget!==!0&&($|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,J.__webglColorRenderbuffer[Me]),re===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),ve){const fe=i.get(y[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,B,Y,0,0,B,Y,$,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<y.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);const re=i.get(y[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(r.maxSamples,A.samples)}function Ee(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(A){const y=s.render.frame;f.get(A)!==y&&(f.set(A,y),A.update())}function we(A,y){const B=A.colorSpace,Y=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ji&&B!==Mi&&(je.getTransfer(B)===Je?(Y!==zn||$!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function $e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Le,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ee}function Bw(t,e){function n(i,r=Mi){let o;const s=je.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===T_)return t.UNSIGNED_SHORT_4_4_4_4;if(i===w_)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_y)return t.BYTE;if(i===vy)return t.SHORT;if(i===M_)return t.UNSIGNED_SHORT;if(i===E_)return t.INT;if(i===Mo)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===fl)return t.HALF_FLOAT;if(i===Sy)return t.ALPHA;if(i===yy)return t.RGB;if(i===zn)return t.RGBA;if(i===My)return t.LUMINANCE;if(i===Ey)return t.LUMINANCE_ALPHA;if(i===co)return t.DEPTH_COMPONENT;if(i===ws)return t.DEPTH_STENCIL;if(i===Ty)return t.RED;if(i===A_)return t.RED_INTEGER;if(i===wy)return t.RG;if(i===C_)return t.RG_INTEGER;if(i===R_)return t.RGBA_INTEGER;if(i===_u||i===vu||i===xu||i===Su)if(s===Je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===_u)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===_u)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Su)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dh||i===Nh||i===Ih||i===Fh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===P_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Oh||i===kh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Oh)return s===Je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===kh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh||i===jh||i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===Qh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===zh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$h)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qh)return s===Je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===Jh||i===ep)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===yu)return s===Je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ep)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ay||i===tp||i===np||i===ip)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===yu)return o.COMPRESSED_RED_RGTC1_EXT;if(i===tp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===np)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ip)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Hw extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ta extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),c=this._getHandJoint(u,v);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&h>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ww=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Vi({vertexShader:Gw,fragmentShader:Ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bn(new Ol(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class jw extends Po{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,m=null,x=null;const v=new Xw,p=n.getContextAttributes();let c=null,_=null;const g=[],E=[],P=new Ve;let C=null;const w=new pn;w.layers.enable(1),w.viewport=new Rt;const b=new pn;b.layers.enable(2),b.viewport=new Rt;const T=[w,b],S=new Hw;S.layers.enable(1),S.layers.enable(2);let N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=g[H];return ee===void 0&&(ee=new $u,g[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=g[H];return ee===void 0&&(ee=new $u,g[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=g[H];return ee===void 0&&(ee=new $u,g[H]=ee),ee.getHandSpace()};function U(H){const ee=E.indexOf(H.inputSource);if(ee===-1)return;const le=g[ee];le!==void 0&&(le.update(H.inputSource,H.frame,u||s),le.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let H=0;H<g.length;H++){const ee=E[H];ee!==null&&(E[H]=null,g[H].disconnect(ee))}N=null,W=null,v.reset(),e.setRenderTarget(c),m=null,h=null,d=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Sr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,le=null,se=null;p.depth&&(se=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=p.stencil?ws:co,le=p.stencil?Ds:Mo);const Le={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Sr(h.textureWidth,h.textureHeight,{format:zn,type:ki,depthTexture:new G_(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ne=e.properties.get(_);Ne.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(H){for(let ee=0;ee<H.removed.length;ee++){const le=H.removed[ee],se=E.indexOf(le);se>=0&&(E[se]=null,g[se].disconnect(le))}for(let ee=0;ee<H.added.length;ee++){const le=H.added[ee];let se=E.indexOf(le);if(se===-1){for(let Ne=0;Ne<g.length;Ne++)if(Ne>=E.length){E.push(le),se=Ne;break}else if(E[Ne]===null){E[Ne]=le,se=Ne;break}if(se===-1)break}const Le=g[se];Le&&Le.connect(le)}}const Q=new k,Z=new k;function L(H,ee,le){Q.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const se=Q.distanceTo(Z),Le=ee.projectionMatrix.elements,Ne=le.projectionMatrix.elements,ke=Le[14]/(Le[10]-1),I=Le[14]/(Le[10]+1),Ie=(Le[9]+1)/Le[5],Ee=(Le[9]-1)/Le[5],_t=(Le[8]-1)/Le[0],we=(Ne[8]+1)/Ne[0],$e=ke*_t,A=ke*we,y=se/(-_t+we),B=y*-_t;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(B),H.translateZ(y),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Y=ke+y,$=I+y,q=$e-B,ye=A+(se-B),J=Ie*I/$*Y,ve=Ee*I/$*Y;H.projectionMatrix.makePerspective(q,ye,J,ve,Y,$),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;v.texture!==null&&(H.near=v.depthNear,H.far=v.depthFar),S.near=b.near=w.near=H.near,S.far=b.far=w.far=H.far,(N!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,W=S.far,w.near=N,w.far=W,b.near=N,b.far=W,w.updateProjectionMatrix(),b.updateProjectionMatrix(),H.updateProjectionMatrix());const ee=H.parent,le=S.cameras;V(S,ee);for(let se=0;se<le.length;se++)V(le[se],ee);le.length===2?L(S,w,b):S.projectionMatrix.copy(w.projectionMatrix),G(H,S,ee)};function G(H,ee,le){le===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Qc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null};let ne=null;function me(H,ee){if(f=ee.getViewerPose(u||s),x=ee,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let se=!1;le.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Ne=0;Ne<le.length;Ne++){const ke=le[Ne];let I=null;if(m!==null)I=m.getViewport(ke);else{const Ee=d.getViewSubImage(h,ke);I=Ee.viewport,Ne===0&&(e.setRenderTargetTextures(_,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(_))}let Ie=T[Ne];Ie===void 0&&(Ie=new pn,Ie.layers.enable(Ne),Ie.viewport=new Rt,T[Ne]=Ie),Ie.matrix.fromArray(ke.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ke.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(I.x,I.y,I.width,I.height),Ne===0&&(S.matrix.copy(Ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Ie)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ne=d.getDepthInformation(le[0]);Ne&&Ne.isValid&&Ne.texture&&v.init(e,Ne,r.renderState)}}for(let le=0;le<g.length;le++){const se=E[le],Le=g[le];se!==null&&Le!==void 0&&Le.update(se,ee,u||s)}v.render(e,S),ne&&ne(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),x=null}const He=new V_;He.setAnimationLoop(me),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const er=new li,Yw=new St;function $w(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,k_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,_,g,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(p,c):c.isMeshToonMaterial?(o(p,c),d(p,c)):c.isMeshPhongMaterial?(o(p,c),f(p,c)):c.isMeshStandardMaterial?(o(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,E)):c.isMeshMatcapMaterial?(o(p,c),x(p,c)):c.isMeshDepthMaterial?o(p,c):c.isMeshDistanceMaterial?(o(p,c),v(p,c)):c.isMeshNormalMaterial?o(p,c):c.isLineBasicMaterial?(s(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,_,g):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===Zt&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===Zt&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,E=_.envMapRotation;if(g&&(p.envMap.value=g,er.copy(E),er.x*=-1,er.y*=-1,er.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(er)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const P=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*P,n(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function s(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,_,g){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*_,p.scale.value=g*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function f(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,_){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Zt&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function v(p,c){const _=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qw(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const E=g.program;i.uniformBlockBinding(_,E)}function u(_,g){let E=r[_.id];E===void 0&&(x(_),E=f(_),r[_.id]=E,_.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(_,P);const C=e.render.frame;o[_.id]!==C&&(h(_),o[_.id]=C)}function f(_){const g=d();_.__bindingPointIndex=g;const E=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],E=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=E.length;C<w;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,S=b.length;T<S;T++){const N=b[T];if(m(N,C,T,P)===!0){const W=N.__offset,U=Array.isArray(N.value)?N.value:[N.value];let j=0;for(let X=0;X<U.length;X++){const Q=U[X],Z=v(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,W+j,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,E,P){const C=_.value,w=g+"_"+E;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const b=P[w];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return P[w]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function x(_){const g=_.uniforms;let E=0;const P=16;for(let w=0,b=g.length;w<b;w++){const T=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,N=T.length;S<N;S++){const W=T[S],U=Array.isArray(W.value)?W.value:[W.value];for(let j=0,X=U.length;j<X;j++){const Q=U[j],Z=v(Q),L=E%P;L!==0&&P-L<Z.boundary&&(E+=P-L),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=Z.storage}}}const C=E%P;return C>0&&(E+=P-C),_.__size=E,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const E=s.indexOf(g.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class Kw{constructor(e={}){const{canvas:n=zy(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const m=new Uint32Array(4),x=new Int32Array(4);let v=null,p=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;const g=this;let E=!1,P=0,C=0,w=null,b=-1,T=null;const S=new Rt,N=new Rt;let W=null;const U=new Ye(0);let j=0,X=n.width,Q=n.height,Z=1,L=null,V=null;const G=new Rt(0,0,X,Q),ne=new Rt(0,0,X,Q);let me=!1;const He=new H_;let H=!1,ee=!1;const le=new St,se=new Ve,Le=new k,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return w===null?Z:1}let I=i;function Ie(M,D){const O=n.getContext(M,D);return O!==null?O:null}try{const M={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jf}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",_e,!1),I===null){const D="webgl2";if(I=Ie(D,M),I===null)throw Ie(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ee,_t,we,$e,A,y,B,Y,$,q,ye,J,ve,Me,re,fe,Ae,de,he,Oe,ze,We,Ge,nt;function ge(){Ee=new r1(I),Ee.init(),_t=new ZT(I,Ee,e),We=new Bw(I,Ee),we=new kw(I),$e=new a1(I),A=new Tw,y=new zw(I,Ee,we,A,_t,We,$e),B=new JT(g),Y=new i1(g),$=new dM(I),Ge=new qT(I,$),q=new o1(I,$,$e,Ge),ye=new u1(I,q,$,$e),he=new l1(I,_t,y),fe=new QT(A),J=new Ew(g,B,Y,Ee,_t,Ge,fe),ve=new $w(g,A),Me=new Aw,re=new Uw(Ee),de=new $T(g,B,Y,we,ye,h,l),Ae=new Ow(g,ye,_t),nt=new qw(I,$e,_t,we),Oe=new KT(I,Ee,$e),ze=new s1(I,Ee,$e),$e.programs=J.programs,g.capabilities=_t,g.extensions=Ee,g.properties=A,g.renderLists=Me,g.shadowMap=Ae,g.state=we,g.info=$e}ge();const R=new jw(g,I);this.xr=R,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(X,Q,!1))},this.getSize=function(M){return M.set(X,Q)},this.setSize=function(M,D,O=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Q=D,n.width=Math.floor(M*Z),n.height=Math.floor(D*Z),O===!0&&(n.style.width=M+"px",n.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(X*Z,Q*Z).floor()},this.setDrawingBufferSize=function(M,D,O){X=M,Q=D,Z=O,n.width=Math.floor(M*O),n.height=Math.floor(D*O),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(G)},this.setViewport=function(M,D,O,z){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,D,O,z),we.viewport(S.copy(G).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,D,O,z){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,D,O,z),we.scissor(N.copy(ne).multiplyScalar(Z).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(M){we.setScissorTest(me=M)},this.setOpaqueSort=function(M){L=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(M=!0,D=!0,O=!0){let z=0;if(M){let F=!1;if(w!==null){const ae=w.texture.format;F=ae===R_||ae===C_||ae===A_}if(F){const ae=w.texture.type,pe=ae===ki||ae===Mo||ae===M_||ae===Ds||ae===T_||ae===w_,Se=de.getClearColor(),Te=de.getClearAlpha(),Re=Se.r,Ce=Se.g,Pe=Se.b;pe?(m[0]=Re,m[1]=Ce,m[2]=Pe,m[3]=Te,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Re,x[1]=Ce,x[2]=Pe,x[3]=Te,I.clearBufferiv(I.COLOR,0,x))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),O&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Me.dispose(),re.dispose(),A.dispose(),B.dispose(),Y.dispose(),ye.dispose(),Ge.dispose(),nt.dispose(),J.dispose(),R.dispose(),R.removeEventListener("sessionstart",bn),R.removeEventListener("sessionend",Un),Yi.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=$e.autoReset,D=Ae.enabled,O=Ae.autoUpdate,z=Ae.needsUpdate,F=Ae.type;ge(),$e.autoReset=M,Ae.enabled=D,Ae.autoUpdate=O,Ae.needsUpdate=z,Ae.type=F}function _e(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xe(M){const D=M.target;D.removeEventListener("dispose",xe),qe(D)}function qe(M){it(M),A.remove(M)}function it(M){const D=A.get(M).programs;D!==void 0&&(D.forEach(function(O){J.releaseProgram(O)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,O,z,F,ae){D===null&&(D=Ne);const pe=F.isMesh&&F.matrixWorld.determinant()<0,Se=J_(M,D,O,z,F);we.setMaterial(z,pe);let Te=O.index,Re=1;if(z.wireframe===!0){if(Te=q.getWireframeAttribute(O),Te===void 0)return;Re=2}const Ce=O.drawRange,Pe=O.attributes.position;let dt=Ce.start*Re,Jt=(Ce.start+Ce.count)*Re;ae!==null&&(dt=Math.max(dt,ae.start*Re),Jt=Math.min(Jt,(ae.start+ae.count)*Re)),Te!==null?(dt=Math.max(dt,0),Jt=Math.min(Jt,Te.count)):Pe!=null&&(dt=Math.max(dt,0),Jt=Math.min(Jt,Pe.count));const Et=Jt-dt;if(Et<0||Et===1/0)return;Ge.setup(F,z,Se,O,Te);let Wn,at=Oe;if(Te!==null&&(Wn=$.get(Te),at=ze,at.setIndex(Wn)),F.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*ke()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(F.isLine){let be=z.linewidth;be===void 0&&(be=1),we.setLineWidth(be*ke()),F.isLineSegments?at.setMode(I.LINES):F.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else F.isPoints?at.setMode(I.POINTS):F.isSprite&&at.setMode(I.TRIANGLES);if(F.isBatchedMesh)at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)at.renderInstances(dt,Et,F.count);else if(O.isInstancedBufferGeometry){const be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,zl=Math.min(O.instanceCount,be);at.renderInstances(dt,Et,zl)}else at.render(dt,Et)};function st(M,D,O){M.transparent===!0&&M.side===Jn&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,ks(M,D,O),M.side=Hi,M.needsUpdate=!0,ks(M,D,O),M.side=Jn):ks(M,D,O)}this.compile=function(M,D,O=null){O===null&&(O=M),p=re.get(O),p.init(),_.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==O&&M.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(g._useLegacyLights);const z=new Set;return M.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Se=ae[pe];st(Se,O,F),z.add(Se)}else st(ae,O,F),z.add(ae)}),_.pop(),p=null,z},this.compileAsync=function(M,D,O=null){const z=this.compile(M,D,O);return new Promise(F=>{function ae(){if(z.forEach(function(pe){A.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){F(M);return}setTimeout(ae,10)}Ee.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let bt=null;function Ze(M){bt&&bt(M)}function bn(){Yi.stop()}function Un(){Yi.start()}const Yi=new V_;Yi.setAnimationLoop(Ze),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(M){bt=M,R.setAnimationLoop(M),M===null?Yi.stop():Yi.start()},R.addEventListener("sessionstart",bn),R.addEventListener("sessionend",Un),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(D),D=R.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,D,w),p=re.get(M,_.length),p.init(),_.push(p),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),He.setFromProjectionMatrix(le),ee=this.localClippingEnabled,H=fe.init(this.clippingPlanes,ee),v=Me.get(M,c.length),v.init(),c.push(v),rd(M,D,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(L,V),this.info.render.frame++,H===!0&&fe.beginShadows();const O=p.state.shadowsArray;if(Ae.render(O,M,D),H===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1)&&de.render(v,M),p.setupLights(g._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let F=0,ae=z.length;F<ae;F++){const pe=z[F];od(v,M,pe,pe.viewport)}}else od(v,M,D);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(g,M,D),Ge.resetDefaultState(),b=-1,T=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function rd(M,D,O,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||He.intersectsSprite(M)){z&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);const pe=ye.update(M),Se=M.material;Se.visible&&v.push(M,pe,Se,O,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||He.intersectsObject(M))){const pe=ye.update(M),Se=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Le.copy(pe.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){const Te=pe.groups;for(let Re=0,Ce=Te.length;Re<Ce;Re++){const Pe=Te[Re],dt=Se[Pe.materialIndex];dt&&dt.visible&&v.push(M,pe,dt,O,Le.z,Pe)}}else Se.visible&&v.push(M,pe,Se,O,Le.z,null)}}const ae=M.children;for(let pe=0,Se=ae.length;pe<Se;pe++)rd(ae[pe],D,O,z)}function od(M,D,O,z){const F=M.opaque,ae=M.transmissive,pe=M.transparent;p.setupLightsView(O),H===!0&&fe.setGlobalState(g.clippingPlanes,O),ae.length>0&&Q_(F,ae,D,O),z&&we.viewport(S.copy(z)),F.length>0&&Os(F,D,O),ae.length>0&&Os(ae,D,O),pe.length>0&&Os(pe,D,O),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Q_(M,D,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Sr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?fl:ki,minFilter:fr,samples:4,stencilBuffer:o});const Re=A.get(p.state.transmissionRenderTarget);Re.__isTransmissionRenderTarget=!0}const ae=p.state.transmissionRenderTarget;g.getDrawingBufferSize(se),ae.setSize(se.x,se.y);const pe=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(U),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear();const Se=g.toneMapping;g.toneMapping=Oi,Os(M,O,z),y.updateMultisampleRenderTarget(ae),y.updateRenderTargetMipmap(ae);let Te=!1;for(let Re=0,Ce=D.length;Re<Ce;Re++){const Pe=D[Re],dt=Pe.object,Jt=Pe.geometry,Et=Pe.material,Wn=Pe.group;if(Et.side===Jn&&dt.layers.test(z.layers)){const at=Et.side;Et.side=Zt,Et.needsUpdate=!0,sd(dt,O,z,Jt,Et,Wn),Et.side=at,Et.needsUpdate=!0,Te=!0}}Te===!0&&(y.updateMultisampleRenderTarget(ae),y.updateRenderTargetMipmap(ae)),g.setRenderTarget(pe),g.setClearColor(U,j),g.toneMapping=Se}function Os(M,D,O){const z=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ae=M.length;F<ae;F++){const pe=M[F],Se=pe.object,Te=pe.geometry,Re=z===null?pe.material:z,Ce=pe.group;Se.layers.test(O.layers)&&sd(Se,D,O,Te,Re,Ce)}}function sd(M,D,O,z,F,ae){M.onBeforeRender(g,D,O,z,F,ae),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(g,D,O,z,M,ae),F.transparent===!0&&F.side===Jn&&F.forceSinglePass===!1?(F.side=Zt,F.needsUpdate=!0,g.renderBufferDirect(O,D,z,F,M,ae),F.side=Hi,F.needsUpdate=!0,g.renderBufferDirect(O,D,z,F,M,ae),F.side=Jn):g.renderBufferDirect(O,D,z,F,M,ae),M.onAfterRender(g,D,O,z,F,ae)}function ks(M,D,O){D.isScene!==!0&&(D=Ne);const z=A.get(M),F=p.state.lights,ae=p.state.shadowsArray,pe=F.state.version,Se=J.getParameters(M,F.state,ae,D,O),Te=J.getProgramCacheKey(Se);let Re=z.programs;z.environment=M.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(M.isMeshStandardMaterial?Y:B).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",xe),Re=new Map,z.programs=Re);let Ce=Re.get(Te);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===pe)return ld(M,Se),Ce}else Se.uniforms=J.getUniforms(M),M.onBuild(O,Se,g),M.onBeforeCompile(Se,g),Ce=J.acquireProgram(Se,Te),Re.set(Te,Ce),z.uniforms=Se.uniforms;const Pe=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=fe.uniform),ld(M,Se),z.needsLights=tv(M),z.lightsStateVersion=pe,z.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function ad(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Oa.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function ld(M,D){const O=A.get(M);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function J_(M,D,O,z,F){D.isScene!==!0&&(D=Ne),y.resetTextureUnits();const ae=D.fog,pe=z.isMeshStandardMaterial?D.environment:null,Se=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ji,Te=(z.isMeshStandardMaterial?Y:B).get(z.envMap||pe),Re=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!O.morphAttributes.position,dt=!!O.morphAttributes.normal,Jt=!!O.morphAttributes.color;let Et=Oi;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Et=g.toneMapping);const Wn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,at=Wn!==void 0?Wn.length:0,be=A.get(z),zl=p.state.lights;if(H===!0&&(ee===!0||M!==T)){const cn=M===T&&z.id===b;fe.setState(z,M,cn)}let rt=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==zl.state.version||be.outputColorSpace!==Se||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==Te||z.fog===!0&&be.fog!==ae||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==fe.numPlanes||be.numIntersection!==fe.numIntersection)||be.vertexAlphas!==Re||be.vertexTangents!==Ce||be.morphTargets!==Pe||be.morphNormals!==dt||be.morphColors!==Jt||be.toneMapping!==Et||be.morphTargetsCount!==at)&&(rt=!0):(rt=!0,be.__version=z.version);let $i=be.currentProgram;rt===!0&&($i=ks(z,D,F));let ud=!1,Uo=!1,Bl=!1;const Ut=$i.getUniforms(),ci=be.uniforms;if(we.useProgram($i.program)&&(ud=!0,Uo=!0,Bl=!0),z.id!==b&&(b=z.id,Uo=!0),ud||T!==M){Ut.setValue(I,"projectionMatrix",M.projectionMatrix),Ut.setValue(I,"viewMatrix",M.matrixWorldInverse);const cn=Ut.map.cameraPosition;cn!==void 0&&cn.setValue(I,Le.setFromMatrixPosition(M.matrixWorld)),_t.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Uo=!0,Bl=!0)}if(F.isSkinnedMesh){Ut.setOptional(I,F,"bindMatrix"),Ut.setOptional(I,F,"bindMatrixInverse");const cn=F.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ut.setValue(I,"boneTexture",cn.boneTexture,y))}F.isBatchedMesh&&(Ut.setOptional(I,F,"batchingTexture"),Ut.setValue(I,"batchingTexture",F._matricesTexture,y));const Hl=O.morphAttributes;if((Hl.position!==void 0||Hl.normal!==void 0||Hl.color!==void 0)&&he.update(F,O,$i),(Uo||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,Ut.setValue(I,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ci.envMap.value=Te,ci.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(ci.envMapIntensity.value=D.environmentIntensity),Uo&&(Ut.setValue(I,"toneMappingExposure",g.toneMappingExposure),be.needsLights&&ev(ci,Bl),ae&&z.fog===!0&&ve.refreshFogUniforms(ci,ae),ve.refreshMaterialUniforms(ci,z,Z,Q,p.state.transmissionRenderTarget),Oa.upload(I,ad(be),ci,y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Oa.upload(I,ad(be),ci,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ut.setValue(I,"center",F.center),Ut.setValue(I,"modelViewMatrix",F.modelViewMatrix),Ut.setValue(I,"normalMatrix",F.normalMatrix),Ut.setValue(I,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const cn=z.uniformsGroups;for(let Vl=0,nv=cn.length;Vl<nv;Vl++){const cd=cn[Vl];nt.update(cd,$i),nt.bind(cd,$i)}}return $i}function ev(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function tv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,D,O){A.get(M.texture).__webglTexture=D,A.get(M.depthTexture).__webglTexture=O;const z=A.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const O=A.get(M);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,O=0){w=M,P=D,C=O;let z=!0,F=null,ae=!1,pe=!1;if(M){const Te=A.get(M);Te.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(I.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?y.setupRenderTarget(M):Te.__hasExternalTextures&&y.rebindTextures(M,A.get(M.texture).__webglTexture,A.get(M.depthTexture).__webglTexture);const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(pe=!0);const Ce=A.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?F=Ce[D][O]:F=Ce[D],ae=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?F=A.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?F=Ce[O]:F=Ce,S.copy(M.viewport),N.copy(M.scissor),W=M.scissorTest}else S.copy(G).multiplyScalar(Z).floor(),N.copy(ne).multiplyScalar(Z).floor(),W=me;if(we.bindFramebuffer(I.FRAMEBUFFER,F)&&z&&we.drawBuffers(M,F),we.viewport(S),we.scissor(N),we.setScissorTest(W),ae){const Te=A.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,O)}else if(pe){const Te=A.get(M.texture),Re=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,Re)}b=-1},this.readRenderTargetPixels=function(M,D,O,z,F,ae,pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){we.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Te=M.texture,Re=Te.format,Ce=Te.type;if(Re!==zn&&We.convert(Re)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ce===fl&&(Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float"));if(Ce!==ki&&We.convert(Ce)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&Ce!==Ai&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&O>=0&&O<=M.height-F&&I.readPixels(D,O,z,F,We.convert(Re),We.convert(Ce),ae)}finally{const Te=w!==null?A.get(w).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(M,D,O=0){const z=Math.pow(2,-O),F=Math.floor(D.image.width*z),ae=Math.floor(D.image.height*z);y.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,M.x,M.y,F,ae),we.unbindTexture()},this.copyTextureToTexture=function(M,D,O,z=0){const F=D.image.width,ae=D.image.height,pe=We.convert(O.format),Se=We.convert(O.type);y.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,M.x,M.y,F,ae,pe,Se,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,z,M.x,M.y,pe,Se,D.image),z===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,D,O,z,F=0){const ae=Math.round(M.max.x-M.min.x),pe=Math.round(M.max.y-M.min.y),Se=M.max.z-M.min.z+1,Te=We.convert(z.format),Re=We.convert(z.type);let Ce;if(z.isData3DTexture)y.setTexture3D(z,0),Ce=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)y.setTexture2DArray(z,0),Ce=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Pe=I.getParameter(I.UNPACK_ROW_LENGTH),dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jt=I.getParameter(I.UNPACK_SKIP_PIXELS),Et=I.getParameter(I.UNPACK_SKIP_ROWS),Wn=I.getParameter(I.UNPACK_SKIP_IMAGES),at=O.isCompressedTexture?O.mipmaps[F]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,at.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,M.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,M.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(Ce,F,D.x,D.y,D.z,ae,pe,Se,Te,Re,at.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,F,D.x,D.y,D.z,ae,pe,Se,Te,at.data):I.texSubImage3D(Ce,F,D.x,D.y,D.z,ae,pe,Se,Te,Re,at),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wn),F===0&&z.generateMipmaps&&I.generateMipmap(Ce),we.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,we.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ed?"display-p3":"srgb",n.unpackColorSpace=je.workingColorSpace===Il?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zw extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);const q_=new Zw,K_=new pn(75,window.innerWidth/window.innerHeight,.1,1e3),As=new Kw;As.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(As.domElement);const Qw=new Lo(1,1,1),Jw=new nd({color:65280}),ef=new Bn(Qw,Jw);q_.add(ef);K_.position.z=5;function Z_(){requestAnimationFrame(Z_),ef.rotation.x+=.01,ef.rotation.y+=.01,As.render(q_,K_)}Z_();function eA(t){t?t.insertBefore(As.domElement,t.firstChild):As.domElement.remove()}function tA(){const t=ce.useCallback(eA,[]);return et.jsx("div",{className:"cube-container",ref:t})}function nA(){return et.jsx("div",{children:et.jsx(tA,{})})}function iA(){return et.jsx("div",{children:"Lucas is passionate about growth, being involved in Computer Science projects, and project teams. Lucas has vast experience working with software development teams and working with the structure/process involved with creating software."})}function rA(){return et.jsxs(et.Fragment,{children:[et.jsx(US,{}),et.jsx("div",{className:"page-container",children:et.jsxs(SS,{children:[et.jsx(Gc,{path:"/portfolio/",element:et.jsx(nA,{})}),et.jsx(Gc,{path:"/portfolio/About",element:et.jsx(iA,{})})]})})]})}qu.createRoot(document.getElementById("root")).render(et.jsx(im.StrictMode,{children:et.jsx(CS,{children:et.jsx(rA,{})})}));
