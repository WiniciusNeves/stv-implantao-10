(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var _h={exports:{}},$a={},wh={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function kE(){if(Sg)return be;Sg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,B={};function $(O,G,Ie){this.props=O,this.context=G,this.refs=B,this.updater=Ie||L}$.prototype.isReactComponent={},$.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function oe(){}oe.prototype=$.prototype;function de(O,G,Ie){this.props=O,this.context=G,this.refs=B,this.updater=Ie||L}var he=de.prototype=new oe;he.constructor=de,q(he,$.prototype),he.isPureReactComponent=!0;var fe=Array.isArray,Ve=Object.prototype.hasOwnProperty,H={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(O,G,Ie){var we,Ce={},Ne=null,Fe=null;if(G!=null)for(we in G.ref!==void 0&&(Fe=G.ref),G.key!==void 0&&(Ne=""+G.key),G)Ve.call(G,we)&&!N.hasOwnProperty(we)&&(Ce[we]=G[we]);var Re=arguments.length-2;if(Re===1)Ce.children=Ie;else if(1<Re){for(var He=Array(Re),dt=0;dt<Re;dt++)He[dt]=arguments[dt+2];Ce.children=He}if(O&&O.defaultProps)for(we in Re=O.defaultProps,Re)Ce[we]===void 0&&(Ce[we]=Re[we]);return{$$typeof:r,type:O,key:Ne,ref:Fe,props:Ce,_owner:H.current}}function A(O,G){return{$$typeof:r,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function R(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ie){return G[Ie]})}var V=/\/+/g;function S(O,G){return typeof O=="object"&&O!==null&&O.key!=null?R(""+O.key):G.toString(36)}function $e(O,G,Ie,we,Ce){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(Ne){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case r:case e:Fe=!0}}if(Fe)return Fe=O,Ce=Ce(Fe),O=we===""?"."+S(Fe,0):we,fe(Ce)?(Ie="",O!=null&&(Ie=O.replace(V,"$&/")+"/"),$e(Ce,G,Ie,"",function(dt){return dt})):Ce!=null&&(D(Ce)&&(Ce=A(Ce,Ie+(!Ce.key||Fe&&Fe.key===Ce.key?"":(""+Ce.key).replace(V,"$&/")+"/")+O)),G.push(Ce)),1;if(Fe=0,we=we===""?".":we+":",fe(O))for(var Re=0;Re<O.length;Re++){Ne=O[Re];var He=we+S(Ne,Re);Fe+=$e(Ne,G,Ie,He,Ce)}else if(He=C(O),typeof He=="function")for(O=He.call(O),Re=0;!(Ne=O.next()).done;)Ne=Ne.value,He=we+S(Ne,Re++),Fe+=$e(Ne,G,Ie,He,Ce);else if(Ne==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Fe}function ct(O,G,Ie){if(O==null)return O;var we=[],Ce=0;return $e(O,we,"","",function(Ne){return G.call(Ie,Ne,Ce++)}),we}function xt(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(Ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ie)},function(Ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ie)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var Ge={current:null},te={transition:null},me={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:te,ReactCurrentOwner:H};function re(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:ct,forEach:function(O,G,Ie){ct(O,function(){G.apply(this,arguments)},Ie)},count:function(O){var G=0;return ct(O,function(){G++}),G},toArray:function(O){return ct(O,function(G){return G})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},be.Component=$,be.Fragment=t,be.Profiler=o,be.PureComponent=de,be.StrictMode=i,be.Suspense=y,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,be.act=re,be.cloneElement=function(O,G,Ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var we=q({},O.props),Ce=O.key,Ne=O.ref,Fe=O._owner;if(G!=null){if(G.ref!==void 0&&(Ne=G.ref,Fe=H.current),G.key!==void 0&&(Ce=""+G.key),O.type&&O.type.defaultProps)var Re=O.type.defaultProps;for(He in G)Ve.call(G,He)&&!N.hasOwnProperty(He)&&(we[He]=G[He]===void 0&&Re!==void 0?Re[He]:G[He])}var He=arguments.length-2;if(He===1)we.children=Ie;else if(1<He){Re=Array(He);for(var dt=0;dt<He;dt++)Re[dt]=arguments[dt+2];we.children=Re}return{$$typeof:r,type:O.type,key:Ce,ref:Ne,props:we,_owner:Fe}},be.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},be.createElement=I,be.createFactory=function(O){var G=I.bind(null,O);return G.type=O,G},be.createRef=function(){return{current:null}},be.forwardRef=function(O){return{$$typeof:p,render:O}},be.isValidElement=D,be.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:xt}},be.memo=function(O,G){return{$$typeof:v,type:O,compare:G===void 0?null:G}},be.startTransition=function(O){var G=te.transition;te.transition={};try{O()}finally{te.transition=G}},be.unstable_act=re,be.useCallback=function(O,G){return Ge.current.useCallback(O,G)},be.useContext=function(O){return Ge.current.useContext(O)},be.useDebugValue=function(){},be.useDeferredValue=function(O){return Ge.current.useDeferredValue(O)},be.useEffect=function(O,G){return Ge.current.useEffect(O,G)},be.useId=function(){return Ge.current.useId()},be.useImperativeHandle=function(O,G,Ie){return Ge.current.useImperativeHandle(O,G,Ie)},be.useInsertionEffect=function(O,G){return Ge.current.useInsertionEffect(O,G)},be.useLayoutEffect=function(O,G){return Ge.current.useLayoutEffect(O,G)},be.useMemo=function(O,G){return Ge.current.useMemo(O,G)},be.useReducer=function(O,G,Ie){return Ge.current.useReducer(O,G,Ie)},be.useRef=function(O){return Ge.current.useRef(O)},be.useState=function(O){return Ge.current.useState(O)},be.useSyncExternalStore=function(O,G,Ie){return Ge.current.useSyncExternalStore(O,G,Ie)},be.useTransition=function(){return Ge.current.useTransition()},be.version="18.3.1",be}var Ag;function wf(){return Ag||(Ag=1,wh.exports=kE()),wh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function SE(){if(Cg)return $a;Cg=1;var r=wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(p,y,v){var E,T={},C=null,L=null;v!==void 0&&(C=""+v),y.key!==void 0&&(C=""+y.key),y.ref!==void 0&&(L=y.ref);for(E in y)i.call(y,E)&&!l.hasOwnProperty(E)&&(T[E]=y[E]);if(p&&p.defaultProps)for(E in y=p.defaultProps,y)T[E]===void 0&&(T[E]=y[E]);return{$$typeof:e,type:p,key:C,ref:L,props:T,_owner:o.current}}return $a.Fragment=t,$a.jsx=d,$a.jsxs=d,$a}var Ng;function AE(){return Ng||(Ng=1,_h.exports=SE()),_h.exports}var f=AE(),Mu={},Eh={exports:{}},rn={},xh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function CE(){return bg||(bg=1,(function(r){function e(te,me){var re=te.length;te.push(me);e:for(;0<re;){var O=re-1>>>1,G=te[O];if(0<o(G,me))te[O]=me,te[re]=G,re=O;else break e}}function t(te){return te.length===0?null:te[0]}function i(te){if(te.length===0)return null;var me=te[0],re=te.pop();if(re!==me){te[0]=re;e:for(var O=0,G=te.length,Ie=G>>>1;O<Ie;){var we=2*(O+1)-1,Ce=te[we],Ne=we+1,Fe=te[Ne];if(0>o(Ce,re))Ne<G&&0>o(Fe,Ce)?(te[O]=Fe,te[Ne]=re,O=Ne):(te[O]=Ce,te[we]=re,O=we);else if(Ne<G&&0>o(Fe,re))te[O]=Fe,te[Ne]=re,O=Ne;else break e}}return me}function o(te,me){var re=te.sortIndex-me.sortIndex;return re!==0?re:te.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var y=[],v=[],E=1,T=null,C=3,L=!1,q=!1,B=!1,$=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function he(te){for(var me=t(v);me!==null;){if(me.callback===null)i(v);else if(me.startTime<=te)i(v),me.sortIndex=me.expirationTime,e(y,me);else break;me=t(v)}}function fe(te){if(B=!1,he(te),!q)if(t(y)!==null)q=!0,xt(Ve);else{var me=t(v);me!==null&&Ge(fe,me.startTime-te)}}function Ve(te,me){q=!1,B&&(B=!1,oe(I),I=-1),L=!0;var re=C;try{for(he(me),T=t(y);T!==null&&(!(T.expirationTime>me)||te&&!R());){var O=T.callback;if(typeof O=="function"){T.callback=null,C=T.priorityLevel;var G=O(T.expirationTime<=me);me=r.unstable_now(),typeof G=="function"?T.callback=G:T===t(y)&&i(y),he(me)}else i(y);T=t(y)}if(T!==null)var Ie=!0;else{var we=t(v);we!==null&&Ge(fe,we.startTime-me),Ie=!1}return Ie}finally{T=null,C=re,L=!1}}var H=!1,N=null,I=-1,A=5,D=-1;function R(){return!(r.unstable_now()-D<A)}function V(){if(N!==null){var te=r.unstable_now();D=te;var me=!0;try{me=N(!0,te)}finally{me?S():(H=!1,N=null)}}else H=!1}var S;if(typeof de=="function")S=function(){de(V)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,ct=$e.port2;$e.port1.onmessage=V,S=function(){ct.postMessage(null)}}else S=function(){$(V,0)};function xt(te){N=te,H||(H=!0,S())}function Ge(te,me){I=$(function(){te(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){q||L||(q=!0,xt(Ve))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(y)},r.unstable_next=function(te){switch(C){case 1:case 2:case 3:var me=3;break;default:me=C}var re=C;C=me;try{return te()}finally{C=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,me){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var re=C;C=te;try{return me()}finally{C=re}},r.unstable_scheduleCallback=function(te,me,re){var O=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,te){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=re+G,te={id:E++,callback:me,priorityLevel:te,startTime:re,expirationTime:G,sortIndex:-1},re>O?(te.sortIndex=re,e(v,te),t(y)===null&&te===t(v)&&(B?(oe(I),I=-1):B=!0,Ge(fe,re-O))):(te.sortIndex=G,e(y,te),q||L||(q=!0,xt(Ve))),te},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(te){var me=C;return function(){var re=C;C=me;try{return te.apply(this,arguments)}finally{C=re}}}})(Th)),Th}var Rg;function NE(){return Rg||(Rg=1,xh.exports=CE()),xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function bE(){if(Pg)return rn;Pg=1;var r=wf(),e=NE();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,s){d(n,s),d(n+"Capture",s)}function d(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function C(n){return y.call(T,n)?!0:y.call(E,n)?!1:v.test(n)?T[n]=!0:(E[n]=!0,!1)}function L(n,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,s,a,c){if(s===null||typeof s>"u"||L(n,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function B(n,s,a,c,h,m,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=s,this.sanitizeURL=m,this.removeEmptyString=w}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new B(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];$[s]=new B(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new B(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new B(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new B(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new B(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new B(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new B(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new B(n,5,!1,n.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(oe,de);$[s]=new B(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(oe,de);$[s]=new B(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(oe,de);$[s]=new B(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new B(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new B(n,1,!1,n.toLowerCase(),null,!0,!0)});function he(n,s,a,c){var h=$.hasOwnProperty(s)?$[s]:null;(h!==null?h.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(q(s,a,h,c)&&(a=null),c||h===null?C(s)&&(a===null?n.removeAttribute(s):n.setAttribute(s,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,s,a):n.setAttribute(s,a))))}var fe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ve=Symbol.for("react.element"),H=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),R=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Ge=Symbol.for("react.offscreen"),te=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var Ie=!1;function we(n,s){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var c=U}Reflect.construct(n,[],s)}else{try{s.call()}catch(U){c=U}n.call(s.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var h=U.stack.split(`
`),m=c.stack.split(`
`),w=h.length-1,k=m.length-1;1<=w&&0<=k&&h[w]!==m[k];)k--;for(;1<=w&&0<=k;w--,k--)if(h[w]!==m[k]){if(w!==1||k!==1)do if(w--,k--,0>k||h[w]!==m[k]){var b=`
`+h[w].replace(" at new "," at ");return n.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",n.displayName)),b}while(1<=w&&0<=k);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Ce(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case H:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case $e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case R:return(n.displayName||"Context")+".Consumer";case D:return(n._context.displayName||"Context")+".Provider";case V:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ct:return s=n.displayName||null,s!==null?s:Ne(n.type)||"Memo";case xt:s=n._payload,n=n._init;try{return Ne(n(s))}catch{}}return null}function Fe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function dt(n){var s=He(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function ot(n){n._valueTracker||(n._valueTracker=dt(n))}function At(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return n&&(c=He(n)?n.checked?"true":"false":n.value),n=c,n!==a?(s.setValue(n),!0):!1}function Pn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Yr(n,s){var a=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ui(n,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Re(s.value!=null?s.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Xr(n,s){s=s.checked,s!=null&&he(n,"checked",s,!1)}function Ir(n,s){Xr(n,s);var a=Re(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?at(n,s.type,a):s.hasOwnProperty("defaultValue")&&at(n,s.type,Re(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Qs(n,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,a||s===n.value||(n.value=s),n.defaultValue=s}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function at(n,s,a){(s!=="number"||Pn(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var nt=Array.isArray;function J(n,s,a,c){if(n=n.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=s.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),s=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}s!==null||n[h].disabled||(s=n[h])}s!==null&&(s.selected=!0)}}function ge(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ht(n,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(nt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}n._wrapperState={initialValue:Re(a)}}function an(n,s){var a=Re(s.value),c=Re(s.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),s.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function _n(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Jr(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kr(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Jr(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Zr,Il=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(s,a,c,h)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Zr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Ys(n,s){if(s){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=s;return}}n.textContent=s}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kl=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(n){kl.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),es[s]=es[n]})});function ts(n,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||es.hasOwnProperty(n)&&es[n]?(""+s).trim():s+"px"}function zi(n,s){n=n.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=ts(a,s[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ea=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dn(n,s){if(s){if(ea[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Bi(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ns=null;function $i(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sr=null,Ar=null,lt=null;function ta(n){if(n=Ca(n)){if(typeof Sr!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Jl(s),Sr(n.stateNode,n.type,s))}}function rs(n){Ar?lt?lt.push(n):lt=[n]:Ar=n}function ss(){if(Ar){var n=Ar,s=lt;if(lt=Ar=null,ta(n),s)for(n=0;n<s.length;n++)ta(s[n])}}function Sl(n,s){return n(s)}function Al(){}var Kn=!1;function Cl(n,s,a){if(Kn)return n(s,a);Kn=!0;try{return Sl(n,s,a)}finally{Kn=!1,(Ar!==null||lt!==null)&&(Al(),ss())}}function Xs(n,s){var a=n.stateNode;if(a===null)return null;var c=Jl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var is=!1;if(p)try{var os={};Object.defineProperty(os,"passive",{get:function(){is=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{is=!1}function Nl(n,s,a,c,h,m,w,k,b){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(Y){this.onError(Y)}}var Cr=!1,Qn=null,Hi=!1,wn=null,bl={onError:function(n){Cr=!0,Qn=n}};function Rl(n,s,a,c,h,m,w,k,b){Cr=!1,Qn=null,Nl.apply(bl,arguments)}function na(n,s,a,c,h,m,w,k,b){if(Rl.apply(this,arguments),Cr){if(Cr){var U=Qn;Cr=!1,Qn=null}else throw Error(t(198));Hi||(Hi=!0,wn=U)}}function On(n){var s=n,a=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(a=s.return),n=s.return;while(n)}return s.tag===3?a:null}function ra(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Pl(n){if(On(n)!==n)throw Error(t(188))}function Dl(n){var s=n.alternate;if(!s){if(s=On(n),s===null)throw Error(t(188));return s!==n?null:n}for(var a=n,c=s;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return Pl(h),n;if(m===c)return Pl(h),s;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var w=!1,k=h.child;k;){if(k===a){w=!0,a=h,c=m;break}if(k===c){w=!0,c=h,a=m;break}k=k.sibling}if(!w){for(k=m.child;k;){if(k===a){w=!0,a=m,c=h;break}if(k===c){w=!0,c=m,a=h;break}k=k.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:s}function Ol(n){return n=Dl(n),n!==null?Js(n):null}function Js(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Js(n);if(s!==null)return s;n=n.sibling}return null}var sa=e.unstable_scheduleCallback,qi=e.unstable_cancelCallback,Zs=e.unstable_shouldYield,Nr=e.unstable_requestPaint,Ye=e.unstable_now,Yc=e.unstable_getCurrentPriorityLevel,Wi=e.unstable_ImmediatePriority,ia=e.unstable_UserBlockingPriority,ei=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Gi=e.unstable_IdlePriority,ti=null,ln=null;function Vl(n){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(ti,n,void 0,(n.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:ni,Yn=Math.log,En=Math.LN2;function ni(n){return n>>>=0,n===0?32:31-(Yn(n)/En|0)|0}var Xn=64,as=4194304;function Be(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function br(n,s){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var k=w&~h;k!==0?c=Be(k):(m&=w,m!==0&&(c=Be(m)))}else w=a&~h,w!==0?c=Be(w):m!==0&&(c=Be(m));if(c===0)return 0;if(s!==0&&s!==c&&(s&h)===0&&(h=c&-c,m=s&-s,h>=m||h===16&&(m&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)a=31-un(s),h=1<<a,c|=n[a],s&=~h;return c}function ri(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function si(n,s){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-un(m),k=1<<w,b=h[w];b===-1?((k&a)===0||(k&c)!==0)&&(h[w]=ri(k,s)):b<=s&&(n.expiredLanes|=k),m&=~k}}function aa(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function la(){var n=Xn;return Xn<<=1,(Xn&4194240)===0&&(Xn=64),n}function ua(n){for(var s=[],a=0;31>a;a++)s.push(n);return s}function ii(n,s,a){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-un(s),n[s]=a}function Xc(n,s){var a=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-un(a),m=1<<h;s[h]=0,c[h]=-1,n[h]=-1,a&=~m}}function ca(n,s){var a=n.entangledLanes|=s;for(n=n.entanglements;a;){var c=31-un(a),h=1<<c;h&s|n[c]&s&&(n[c]|=s),a&=~h}}var je=0;function Jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var da,Ki,ha,fa,pa,Zn=!1,Qi=[],er=null,tr=null,Pt=null,oi=new Map,Rr=new Map,cn=[],jl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ls(n,s){switch(n){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":oi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(s.pointerId)}}function Vn(n,s,a,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},s!==null&&(s=Ca(s),s!==null&&Ki(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),n)}function Ml(n,s,a,c,h){switch(s){case"focusin":return er=Vn(er,n,s,a,c,h),!0;case"dragenter":return tr=Vn(tr,n,s,a,c,h),!0;case"mouseover":return Pt=Vn(Pt,n,s,a,c,h),!0;case"pointerover":var m=h.pointerId;return oi.set(m,Vn(oi.get(m)||null,n,s,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Rr.set(m,Vn(Rr.get(m)||null,n,s,a,c,h)),!0}return!1}function Yi(n){var s=ci(n.target);if(s!==null){var a=On(s);if(a!==null){if(s=a.tag,s===13){if(s=ra(a),s!==null){n.blockedOn=s,pa(n.priority,function(){ha(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ke(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var a=Xi(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ns=c,a.target.dispatchEvent(c),ns=null}else return s=Ca(a),s!==null&&Ki(s),n.blockedOn=a,!1;s.shift()}return!0}function Ll(n,s,a){Ke(n)&&a.delete(s)}function Jc(){Zn=!1,er!==null&&Ke(er)&&(er=null),tr!==null&&Ke(tr)&&(tr=null),Pt!==null&&Ke(Pt)&&(Pt=null),oi.forEach(Ll),Rr.forEach(Ll)}function us(n,s){n.blockedOn===s&&(n.blockedOn=null,Zn||(Zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jc)))}function cs(n){function s(h){return us(h,n)}if(0<Qi.length){us(Qi[0],n);for(var a=1;a<Qi.length;a++){var c=Qi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(er!==null&&us(er,n),tr!==null&&us(tr,n),Pt!==null&&us(Pt,n),oi.forEach(s),Rr.forEach(s),a=0;a<cn.length;a++)c=cn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<cn.length&&(a=cn[0],a.blockedOn===null);)Yi(a),a.blockedOn===null&&cn.shift()}var Pr=fe.ReactCurrentBatchConfig,Dr=!0;function nr(n,s,a,c){var h=je,m=Pr.transition;Pr.transition=null;try{je=1,ma(n,s,a,c)}finally{je=h,Pr.transition=m}}function Fl(n,s,a,c){var h=je,m=Pr.transition;Pr.transition=null;try{je=4,ma(n,s,a,c)}finally{je=h,Pr.transition=m}}function ma(n,s,a,c){if(Dr){var h=Xi(n,s,a,c);if(h===null)ud(n,s,c,rr,a),ls(n,c);else if(Ml(h,n,s,a,c))c.stopPropagation();else if(ls(n,c),s&4&&-1<jl.indexOf(n)){for(;h!==null;){var m=Ca(h);if(m!==null&&da(m),m=Xi(n,s,a,c),m===null&&ud(n,s,c,rr,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else ud(n,s,c,null,a)}}var rr=null;function Xi(n,s,a,c){if(rr=null,n=$i(c),n=ci(n),n!==null)if(s=On(n),s===null)n=null;else if(a=s.tag,a===13){if(n=ra(s),n!==null)return n;n=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return rr=n,null}function Ji(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Wi:return 1;case ia:return 4;case ei:case oa:return 16;case Gi:return 536870912;default:return 16}default:return 16}}var dn=null,Zi=null,Or=null;function Ul(){if(Or)return Or;var n,s=Zi,a=s.length,c,h="value"in dn?dn.value:dn.textContent,m=h.length;for(n=0;n<a&&s[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&s[a-c]===h[m-c];c++);return Or=h.slice(n,1<c?1-c:void 0)}function ai(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function sr(){return!0}function ga(){return!1}function Ut(n){function s(a,c,h,m,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?sr:ga,this.isPropagationStopped=ga,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=Ut(ir),ds=re({},ir,{view:0,detail:0}),eo=Ut(ds),to,no,hn,ui=re({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Se,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==hn&&(hn&&n.type==="mousemove"?(to=n.screenX-hn.screenX,no=n.screenY-hn.screenY):no=to=0,hn=n),to)},movementY:function(n){return"movementY"in n?n.movementY:no}}),ya=Ut(ui),zl=re({},ui,{dataTransfer:0}),Bl=Ut(zl),ro=re({},ds,{relatedTarget:0}),Dt=Ut(ro),$l=re({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Hl=Ut($l),hs=re({},ir,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Ut(hs),g=re({},ir,{data:0}),_=Ut(g),x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=z[n])?!!s[n]:!1}function Se(){return ee}var ft=re({},ds,{key:function(n){if(n.key){var s=x[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ai(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Se,charCode:function(n){return n.type==="keypress"?ai(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ai(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),We=Ut(ft),yt=re({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fn=Ut(yt),Vr=re({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Se}),or=Ut(Vr),ar=re({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),so=Ut(ar),va=re({},ui,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_w=Ut(va),ww=[9,13,27,32],Zc=p&&"CompositionEvent"in window,_a=null;p&&"documentMode"in document&&(_a=document.documentMode);var Ew=p&&"TextEvent"in window&&!_a,vp=p&&(!Zc||_a&&8<_a&&11>=_a),_p=" ",wp=!1;function Ep(n,s){switch(n){case"keyup":return ww.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var io=!1;function xw(n,s){switch(n){case"compositionend":return xp(s);case"keypress":return s.which!==32?null:(wp=!0,_p);case"textInput":return n=s.data,n===_p&&wp?null:n;default:return null}}function Tw(n,s){if(io)return n==="compositionend"||!Zc&&Ep(n,s)?(n=Ul(),Or=Zi=dn=null,io=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return vp&&s.locale!=="ko"?null:s.data;default:return null}}var Iw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Iw[n.type]:s==="textarea"}function Ip(n,s,a,c){rs(c),s=Ql(s,"onChange"),0<s.length&&(a=new li("onChange","change",null,a,c),n.push({event:a,listeners:s}))}var wa=null,Ea=null;function kw(n){Bp(n,0)}function ql(n){var s=co(n);if(At(s))return n}function Sw(n,s){if(n==="change")return s}var kp=!1;if(p){var ed;if(p){var td="oninput"in document;if(!td){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),td=typeof Sp.oninput=="function"}ed=td}else ed=!1;kp=ed&&(!document.documentMode||9<document.documentMode)}function Ap(){wa&&(wa.detachEvent("onpropertychange",Cp),Ea=wa=null)}function Cp(n){if(n.propertyName==="value"&&ql(Ea)){var s=[];Ip(s,Ea,n,$i(n)),Cl(kw,s)}}function Aw(n,s,a){n==="focusin"?(Ap(),wa=s,Ea=a,wa.attachEvent("onpropertychange",Cp)):n==="focusout"&&Ap()}function Cw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ql(Ea)}function Nw(n,s){if(n==="click")return ql(s)}function bw(n,s){if(n==="input"||n==="change")return ql(s)}function Rw(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var jn=typeof Object.is=="function"?Object.is:Rw;function xa(n,s){if(jn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var a=Object.keys(n),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!y.call(s,h)||!jn(n[h],s[h]))return!1}return!0}function Np(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bp(n,s){var a=Np(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=s&&c>=s)return{node:a,offset:s-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Rp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Rp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Pp(){for(var n=window,s=Pn();s instanceof n.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)n=s.contentWindow;else break;s=Pn(n.document)}return s}function nd(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Pw(n){var s=Pp(),a=n.focusedElem,c=n.selectionRange;if(s!==a&&a&&a.ownerDocument&&Rp(a.ownerDocument.documentElement,a)){if(c!==null&&nd(a)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(n,a.value.length);else if(n=(s=a.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=bp(a,m);var w=bp(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(s),n.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),n.addRange(s)))}}for(s=[],n=a;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)n=s[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Dw=p&&"documentMode"in document&&11>=document.documentMode,oo=null,rd=null,Ta=null,sd=!1;function Dp(n,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sd||oo==null||oo!==Pn(c)||(c=oo,"selectionStart"in c&&nd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&xa(Ta,c)||(Ta=c,c=Ql(rd,"onSelect"),0<c.length&&(s=new li("onSelect","select",null,s,a),n.push({event:s,listeners:c}),s.target=oo)))}function Wl(n,s){var a={};return a[n.toLowerCase()]=s.toLowerCase(),a["Webkit"+n]="webkit"+s,a["Moz"+n]="moz"+s,a}var ao={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},id={},Op={};p&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Gl(n){if(id[n])return id[n];if(!ao[n])return n;var s=ao[n],a;for(a in s)if(s.hasOwnProperty(a)&&a in Op)return id[n]=s[a];return n}var Vp=Gl("animationend"),jp=Gl("animationiteration"),Mp=Gl("animationstart"),Lp=Gl("transitionend"),Fp=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fs(n,s){Fp.set(n,s),l(s,[n])}for(var od=0;od<Up.length;od++){var ad=Up[od],Ow=ad.toLowerCase(),Vw=ad[0].toUpperCase()+ad.slice(1);fs(Ow,"on"+Vw)}fs(Vp,"onAnimationEnd"),fs(jp,"onAnimationIteration"),fs(Mp,"onAnimationStart"),fs("dblclick","onDoubleClick"),fs("focusin","onFocus"),fs("focusout","onBlur"),fs(Lp,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function zp(n,s,a){var c=n.type||"unknown-event";n.currentTarget=a,na(c,s,void 0,n),n.currentTarget=null}function Bp(n,s){s=(s&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var w=c.length-1;0<=w;w--){var k=c[w],b=k.instance,U=k.currentTarget;if(k=k.listener,b!==m&&h.isPropagationStopped())break e;zp(h,k,U),m=b}else for(w=0;w<c.length;w++){if(k=c[w],b=k.instance,U=k.currentTarget,k=k.listener,b!==m&&h.isPropagationStopped())break e;zp(h,k,U),m=b}}}if(Hi)throw n=wn,Hi=!1,wn=null,n}function Xe(n,s){var a=s[md];a===void 0&&(a=s[md]=new Set);var c=n+"__bubble";a.has(c)||($p(s,n,2,!1),a.add(c))}function ld(n,s,a){var c=0;s&&(c|=4),$p(a,n,c,s)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function ka(n){if(!n[Kl]){n[Kl]=!0,i.forEach(function(a){a!=="selectionchange"&&(jw.has(a)||ld(a,!1,n),ld(a,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Kl]||(s[Kl]=!0,ld("selectionchange",!1,s))}}function $p(n,s,a,c){switch(Ji(s)){case 1:var h=nr;break;case 4:h=Fl;break;default:h=ma}a=h.bind(null,s,a,n),h=void 0,!is||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(s,a,{capture:!0,passive:h}):n.addEventListener(s,a,!0):h!==void 0?n.addEventListener(s,a,{passive:h}):n.addEventListener(s,a,!1)}function ud(n,s,a,c,h){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var b=w.tag;if((b===3||b===4)&&(b=w.stateNode.containerInfo,b===h||b.nodeType===8&&b.parentNode===h))return;w=w.return}for(;k!==null;){if(w=ci(k),w===null)return;if(b=w.tag,b===5||b===6){c=m=w;continue e}k=k.parentNode}}c=c.return}Cl(function(){var U=m,Y=$i(a),X=[];e:{var K=Fp.get(n);if(K!==void 0){var se=li,le=n;switch(n){case"keypress":if(ai(a)===0)break e;case"keydown":case"keyup":se=We;break;case"focusin":le="focus",se=Dt;break;case"focusout":le="blur",se=Dt;break;case"beforeblur":case"afterblur":se=Dt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Bl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=or;break;case Vp:case jp:case Mp:se=Hl;break;case Lp:se=so;break;case"scroll":se=eo;break;case"wheel":se=_w;break;case"copy":case"cut":case"paste":se=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=fn}var ue=(s&4)!==0,pt=!ue&&n==="scroll",j=ue?K!==null?K+"Capture":null:K;ue=[];for(var P=U,F;P!==null;){F=P;var Z=F.stateNode;if(F.tag===5&&Z!==null&&(F=Z,j!==null&&(Z=Xs(P,j),Z!=null&&ue.push(Sa(P,Z,F)))),pt)break;P=P.return}0<ue.length&&(K=new se(K,le,null,a,Y),X.push({event:K,listeners:ue}))}}if((s&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",K&&a!==ns&&(le=a.relatedTarget||a.fromElement)&&(ci(le)||le[jr]))break e;if((se||K)&&(K=Y.window===Y?Y:(K=Y.ownerDocument)?K.defaultView||K.parentWindow:window,se?(le=a.relatedTarget||a.toElement,se=U,le=le?ci(le):null,le!==null&&(pt=On(le),le!==pt||le.tag!==5&&le.tag!==6)&&(le=null)):(se=null,le=U),se!==le)){if(ue=ya,Z="onMouseLeave",j="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ue=fn,Z="onPointerLeave",j="onPointerEnter",P="pointer"),pt=se==null?K:co(se),F=le==null?K:co(le),K=new ue(Z,P+"leave",se,a,Y),K.target=pt,K.relatedTarget=F,Z=null,ci(Y)===U&&(ue=new ue(j,P+"enter",le,a,Y),ue.target=F,ue.relatedTarget=pt,Z=ue),pt=Z,se&&le)t:{for(ue=se,j=le,P=0,F=ue;F;F=lo(F))P++;for(F=0,Z=j;Z;Z=lo(Z))F++;for(;0<P-F;)ue=lo(ue),P--;for(;0<F-P;)j=lo(j),F--;for(;P--;){if(ue===j||j!==null&&ue===j.alternate)break t;ue=lo(ue),j=lo(j)}ue=null}else ue=null;se!==null&&Hp(X,K,se,ue,!1),le!==null&&pt!==null&&Hp(X,pt,le,ue,!0)}}e:{if(K=U?co(U):window,se=K.nodeName&&K.nodeName.toLowerCase(),se==="select"||se==="input"&&K.type==="file")var ce=Sw;else if(Tp(K))if(kp)ce=bw;else{ce=Cw;var ve=Aw}else(se=K.nodeName)&&se.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ce=Nw);if(ce&&(ce=ce(n,U))){Ip(X,ce,a,Y);break e}ve&&ve(n,K,U),n==="focusout"&&(ve=K._wrapperState)&&ve.controlled&&K.type==="number"&&at(K,"number",K.value)}switch(ve=U?co(U):window,n){case"focusin":(Tp(ve)||ve.contentEditable==="true")&&(oo=ve,rd=U,Ta=null);break;case"focusout":Ta=rd=oo=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Dp(X,a,Y);break;case"selectionchange":if(Dw)break;case"keydown":case"keyup":Dp(X,a,Y)}var _e;if(Zc)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else io?Ep(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(vp&&a.locale!=="ko"&&(io||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&io&&(_e=Ul()):(dn=Y,Zi="value"in dn?dn.value:dn.textContent,io=!0)),ve=Ql(U,Te),0<ve.length&&(Te=new _(Te,n,null,a,Y),X.push({event:Te,listeners:ve}),_e?Te.data=_e:(_e=xp(a),_e!==null&&(Te.data=_e)))),(_e=Ew?xw(n,a):Tw(n,a))&&(U=Ql(U,"onBeforeInput"),0<U.length&&(Y=new _("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:U}),Y.data=_e))}Bp(X,s)})}function Sa(n,s,a){return{instance:n,listener:s,currentTarget:a}}function Ql(n,s){for(var a=s+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Xs(n,a),m!=null&&c.unshift(Sa(n,m,h)),m=Xs(n,s),m!=null&&c.push(Sa(n,m,h))),n=n.return}return c}function lo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hp(n,s,a,c,h){for(var m=s._reactName,w=[];a!==null&&a!==c;){var k=a,b=k.alternate,U=k.stateNode;if(b!==null&&b===c)break;k.tag===5&&U!==null&&(k=U,h?(b=Xs(a,m),b!=null&&w.unshift(Sa(a,b,k))):h||(b=Xs(a,m),b!=null&&w.push(Sa(a,b,k)))),a=a.return}w.length!==0&&n.push({event:s,listeners:w})}var Mw=/\r\n?/g,Lw=/\u0000|\uFFFD/g;function qp(n){return(typeof n=="string"?n:""+n).replace(Mw,`
`).replace(Lw,"")}function Yl(n,s,a){if(s=qp(s),qp(n)!==s&&a)throw Error(t(425))}function Xl(){}var cd=null,dd=null;function hd(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,Fw=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,Uw=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(n){return Wp.resolve(null).then(n).catch(zw)}:fd;function zw(n){setTimeout(function(){throw n})}function pd(n,s){var a=s,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),cs(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);cs(s)}function ps(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Gp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return n;s--}else a==="/$"&&s++}n=n.previousSibling}return null}var uo=Math.random().toString(36).slice(2),lr="__reactFiber$"+uo,Aa="__reactProps$"+uo,jr="__reactContainer$"+uo,md="__reactEvents$"+uo,Bw="__reactListeners$"+uo,$w="__reactHandles$"+uo;function ci(n){var s=n[lr];if(s)return s;for(var a=n.parentNode;a;){if(s=a[jr]||a[lr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(n=Gp(n);n!==null;){if(a=n[lr])return a;n=Gp(n)}return s}n=a,a=n.parentNode}return null}function Ca(n){return n=n[lr]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function co(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Jl(n){return n[Aa]||null}var gd=[],ho=-1;function ms(n){return{current:n}}function Je(n){0>ho||(n.current=gd[ho],gd[ho]=null,ho--)}function Qe(n,s){ho++,gd[ho]=n.current,n.current=s}var gs={},zt=ms(gs),Jt=ms(!1),di=gs;function fo(n,s){var a=n.type.contextTypes;if(!a)return gs;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=s[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=h),h}function Zt(n){return n=n.childContextTypes,n!=null}function Zl(){Je(Jt),Je(zt)}function Kp(n,s,a){if(zt.current!==gs)throw Error(t(168));Qe(zt,s),Qe(Jt,a)}function Qp(n,s,a){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in s))throw Error(t(108,Fe(n)||"Unknown",h));return re({},a,c)}function eu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gs,di=zt.current,Qe(zt,n),Qe(Jt,Jt.current),!0}function Yp(n,s,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Qp(n,s,di),c.__reactInternalMemoizedMergedChildContext=n,Je(Jt),Je(zt),Qe(zt,n)):Je(Jt),Qe(Jt,a)}var Mr=null,tu=!1,yd=!1;function Xp(n){Mr===null?Mr=[n]:Mr.push(n)}function Hw(n){tu=!0,Xp(n)}function ys(){if(!yd&&Mr!==null){yd=!0;var n=0,s=je;try{var a=Mr;for(je=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Mr=null,tu=!1}catch(h){throw Mr!==null&&(Mr=Mr.slice(n+1)),sa(Wi,ys),h}finally{je=s,yd=!1}}return null}var po=[],mo=0,nu=null,ru=0,xn=[],Tn=0,hi=null,Lr=1,Fr="";function fi(n,s){po[mo++]=ru,po[mo++]=nu,nu=n,ru=s}function Jp(n,s,a){xn[Tn++]=Lr,xn[Tn++]=Fr,xn[Tn++]=hi,hi=n;var c=Lr;n=Fr;var h=32-un(c)-1;c&=~(1<<h),a+=1;var m=32-un(s)+h;if(30<m){var w=h-h%5;m=(c&(1<<w)-1).toString(32),c>>=w,h-=w,Lr=1<<32-un(s)+h|a<<h|c,Fr=m+n}else Lr=1<<m|a<<h|c,Fr=n}function vd(n){n.return!==null&&(fi(n,1),Jp(n,1,0))}function _d(n){for(;n===nu;)nu=po[--mo],po[mo]=null,ru=po[--mo],po[mo]=null;for(;n===hi;)hi=xn[--Tn],xn[Tn]=null,Fr=xn[--Tn],xn[Tn]=null,Lr=xn[--Tn],xn[Tn]=null}var pn=null,mn=null,tt=!1,Mn=null;function Zp(n,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=n,s=n.deletions,s===null?(n.deletions=[a],n.flags|=16):s.push(a)}function em(n,s){switch(n.tag){case 5:var a=n.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,pn=n,mn=ps(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,pn=n,mn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=hi!==null?{id:Lr,overflow:Fr}:null,n.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=n,n.child=a,pn=n,mn=null,!0):!1;default:return!1}}function wd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ed(n){if(tt){var s=mn;if(s){var a=s;if(!em(n,s)){if(wd(n))throw Error(t(418));s=ps(a.nextSibling);var c=pn;s&&em(n,s)?Zp(c,a):(n.flags=n.flags&-4097|2,tt=!1,pn=n)}}else{if(wd(n))throw Error(t(418));n.flags=n.flags&-4097|2,tt=!1,pn=n}}}function tm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pn=n}function su(n){if(n!==pn)return!1;if(!tt)return tm(n),tt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!hd(n.type,n.memoizedProps)),s&&(s=mn)){if(wd(n))throw nm(),Error(t(418));for(;s;)Zp(n,s),s=ps(s.nextSibling)}if(tm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(s===0){mn=ps(n.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}n=n.nextSibling}mn=null}}else mn=pn?ps(n.stateNode.nextSibling):null;return!0}function nm(){for(var n=mn;n;)n=ps(n.nextSibling)}function go(){mn=pn=null,tt=!1}function xd(n){Mn===null?Mn=[n]:Mn.push(n)}var qw=fe.ReactCurrentBatchConfig;function Na(n,s,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(w){var k=h.refs;w===null?delete k[m]:k[m]=w},s._stringRef=m,s)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function iu(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function rm(n){var s=n._init;return s(n._payload)}function sm(n){function s(j,P){if(n){var F=j.deletions;F===null?(j.deletions=[P],j.flags|=16):F.push(P)}}function a(j,P){if(!n)return null;for(;P!==null;)s(j,P),P=P.sibling;return null}function c(j,P){for(j=new Map;P!==null;)P.key!==null?j.set(P.key,P):j.set(P.index,P),P=P.sibling;return j}function h(j,P){return j=ks(j,P),j.index=0,j.sibling=null,j}function m(j,P,F){return j.index=F,n?(F=j.alternate,F!==null?(F=F.index,F<P?(j.flags|=2,P):F):(j.flags|=2,P)):(j.flags|=1048576,P)}function w(j){return n&&j.alternate===null&&(j.flags|=2),j}function k(j,P,F,Z){return P===null||P.tag!==6?(P=fh(F,j.mode,Z),P.return=j,P):(P=h(P,F),P.return=j,P)}function b(j,P,F,Z){var ce=F.type;return ce===N?Y(j,P,F.props.children,Z,F.key):P!==null&&(P.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===xt&&rm(ce)===P.type)?(Z=h(P,F.props),Z.ref=Na(j,P,F),Z.return=j,Z):(Z=Nu(F.type,F.key,F.props,null,j.mode,Z),Z.ref=Na(j,P,F),Z.return=j,Z)}function U(j,P,F,Z){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=ph(F,j.mode,Z),P.return=j,P):(P=h(P,F.children||[]),P.return=j,P)}function Y(j,P,F,Z,ce){return P===null||P.tag!==7?(P=Ei(F,j.mode,Z,ce),P.return=j,P):(P=h(P,F),P.return=j,P)}function X(j,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return P=fh(""+P,j.mode,F),P.return=j,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Ve:return F=Nu(P.type,P.key,P.props,null,j.mode,F),F.ref=Na(j,null,P),F.return=j,F;case H:return P=ph(P,j.mode,F),P.return=j,P;case xt:var Z=P._init;return X(j,Z(P._payload),F)}if(nt(P)||me(P))return P=Ei(P,j.mode,F,null),P.return=j,P;iu(j,P)}return null}function K(j,P,F,Z){var ce=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ce!==null?null:k(j,P,""+F,Z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Ve:return F.key===ce?b(j,P,F,Z):null;case H:return F.key===ce?U(j,P,F,Z):null;case xt:return ce=F._init,K(j,P,ce(F._payload),Z)}if(nt(F)||me(F))return ce!==null?null:Y(j,P,F,Z,null);iu(j,F)}return null}function se(j,P,F,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return j=j.get(F)||null,k(P,j,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ve:return j=j.get(Z.key===null?F:Z.key)||null,b(P,j,Z,ce);case H:return j=j.get(Z.key===null?F:Z.key)||null,U(P,j,Z,ce);case xt:var ve=Z._init;return se(j,P,F,ve(Z._payload),ce)}if(nt(Z)||me(Z))return j=j.get(F)||null,Y(P,j,Z,ce,null);iu(P,Z)}return null}function le(j,P,F,Z){for(var ce=null,ve=null,_e=P,Te=P=0,bt=null;_e!==null&&Te<F.length;Te++){_e.index>Te?(bt=_e,_e=null):bt=_e.sibling;var ze=K(j,_e,F[Te],Z);if(ze===null){_e===null&&(_e=bt);break}n&&_e&&ze.alternate===null&&s(j,_e),P=m(ze,P,Te),ve===null?ce=ze:ve.sibling=ze,ve=ze,_e=bt}if(Te===F.length)return a(j,_e),tt&&fi(j,Te),ce;if(_e===null){for(;Te<F.length;Te++)_e=X(j,F[Te],Z),_e!==null&&(P=m(_e,P,Te),ve===null?ce=_e:ve.sibling=_e,ve=_e);return tt&&fi(j,Te),ce}for(_e=c(j,_e);Te<F.length;Te++)bt=se(_e,j,Te,F[Te],Z),bt!==null&&(n&&bt.alternate!==null&&_e.delete(bt.key===null?Te:bt.key),P=m(bt,P,Te),ve===null?ce=bt:ve.sibling=bt,ve=bt);return n&&_e.forEach(function(Ss){return s(j,Ss)}),tt&&fi(j,Te),ce}function ue(j,P,F,Z){var ce=me(F);if(typeof ce!="function")throw Error(t(150));if(F=ce.call(F),F==null)throw Error(t(151));for(var ve=ce=null,_e=P,Te=P=0,bt=null,ze=F.next();_e!==null&&!ze.done;Te++,ze=F.next()){_e.index>Te?(bt=_e,_e=null):bt=_e.sibling;var Ss=K(j,_e,ze.value,Z);if(Ss===null){_e===null&&(_e=bt);break}n&&_e&&Ss.alternate===null&&s(j,_e),P=m(Ss,P,Te),ve===null?ce=Ss:ve.sibling=Ss,ve=Ss,_e=bt}if(ze.done)return a(j,_e),tt&&fi(j,Te),ce;if(_e===null){for(;!ze.done;Te++,ze=F.next())ze=X(j,ze.value,Z),ze!==null&&(P=m(ze,P,Te),ve===null?ce=ze:ve.sibling=ze,ve=ze);return tt&&fi(j,Te),ce}for(_e=c(j,_e);!ze.done;Te++,ze=F.next())ze=se(_e,j,Te,ze.value,Z),ze!==null&&(n&&ze.alternate!==null&&_e.delete(ze.key===null?Te:ze.key),P=m(ze,P,Te),ve===null?ce=ze:ve.sibling=ze,ve=ze);return n&&_e.forEach(function(IE){return s(j,IE)}),tt&&fi(j,Te),ce}function pt(j,P,F,Z){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Ve:e:{for(var ce=F.key,ve=P;ve!==null;){if(ve.key===ce){if(ce=F.type,ce===N){if(ve.tag===7){a(j,ve.sibling),P=h(ve,F.props.children),P.return=j,j=P;break e}}else if(ve.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===xt&&rm(ce)===ve.type){a(j,ve.sibling),P=h(ve,F.props),P.ref=Na(j,ve,F),P.return=j,j=P;break e}a(j,ve);break}else s(j,ve);ve=ve.sibling}F.type===N?(P=Ei(F.props.children,j.mode,Z,F.key),P.return=j,j=P):(Z=Nu(F.type,F.key,F.props,null,j.mode,Z),Z.ref=Na(j,P,F),Z.return=j,j=Z)}return w(j);case H:e:{for(ve=F.key;P!==null;){if(P.key===ve)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){a(j,P.sibling),P=h(P,F.children||[]),P.return=j,j=P;break e}else{a(j,P);break}else s(j,P);P=P.sibling}P=ph(F,j.mode,Z),P.return=j,j=P}return w(j);case xt:return ve=F._init,pt(j,P,ve(F._payload),Z)}if(nt(F))return le(j,P,F,Z);if(me(F))return ue(j,P,F,Z);iu(j,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,P!==null&&P.tag===6?(a(j,P.sibling),P=h(P,F),P.return=j,j=P):(a(j,P),P=fh(F,j.mode,Z),P.return=j,j=P),w(j)):a(j,P)}return pt}var yo=sm(!0),im=sm(!1),ou=ms(null),au=null,vo=null,Td=null;function Id(){Td=vo=au=null}function kd(n){var s=ou.current;Je(ou),n._currentValue=s}function Sd(n,s,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===a)break;n=n.return}}function _o(n,s){au=n,Td=vo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(en=!0),n.firstContext=null)}function In(n){var s=n._currentValue;if(Td!==n)if(n={context:n,memoizedValue:s,next:null},vo===null){if(au===null)throw Error(t(308));vo=n,au.dependencies={lanes:0,firstContext:n}}else vo=vo.next=n;return s}var pi=null;function Ad(n){pi===null?pi=[n]:pi.push(n)}function om(n,s,a,c){var h=s.interleaved;return h===null?(a.next=a,Ad(s)):(a.next=h.next,h.next=a),s.interleaved=a,Ur(n,c)}function Ur(n,s){n.lanes|=s;var a=n.alternate;for(a!==null&&(a.lanes|=s),a=n,n=n.return;n!==null;)n.childLanes|=s,a=n.alternate,a!==null&&(a.childLanes|=s),a=n,n=n.return;return a.tag===3?a.stateNode:null}var vs=!1;function Cd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function _s(n,s,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ue&2)!==0){var h=c.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s,Ur(n,a)}return h=c.interleaved,h===null?(s.next=s,Ad(c)):(s.next=h.next,h.next=s),c.interleaved=s,Ur(n,a)}function lu(n,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,ca(n,a)}}function lm(n,s){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?h=m=s:m=m.next=s}else h=m=s;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=s:n.next=s,a.lastBaseUpdate=s}function uu(n,s,a,c){var h=n.updateQueue;vs=!1;var m=h.firstBaseUpdate,w=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var b=k,U=b.next;b.next=null,w===null?m=U:w.next=U,w=b;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,k=Y.lastBaseUpdate,k!==w&&(k===null?Y.firstBaseUpdate=U:k.next=U,Y.lastBaseUpdate=b))}if(m!==null){var X=h.baseState;w=0,Y=U=b=null,k=m;do{var K=k.lane,se=k.eventTime;if((c&K)===K){Y!==null&&(Y=Y.next={eventTime:se,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var le=n,ue=k;switch(K=s,se=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){X=le.call(se,X,K);break e}X=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,K=typeof le=="function"?le.call(se,X,K):le,K==null)break e;X=re({},X,K);break e;case 2:vs=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,K=h.effects,K===null?h.effects=[k]:K.push(k))}else se={eventTime:se,lane:K,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Y===null?(U=Y=se,b=X):Y=Y.next=se,w|=K;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;K=k,k=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);if(Y===null&&(b=X),h.baseState=b,h.firstBaseUpdate=U,h.lastBaseUpdate=Y,s=h.shared.interleaved,s!==null){h=s;do w|=h.lane,h=h.next;while(h!==s)}else m===null&&(h.shared.lanes=0);yi|=w,n.lanes=w,n.memoizedState=X}}function um(n,s,a){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ba={},ur=ms(ba),Ra=ms(ba),Pa=ms(ba);function mi(n){if(n===ba)throw Error(t(174));return n}function Nd(n,s){switch(Qe(Pa,s),Qe(Ra,n),Qe(ur,ba),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:kr(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=kr(s,n)}Je(ur),Qe(ur,s)}function wo(){Je(ur),Je(Ra),Je(Pa)}function cm(n){mi(Pa.current);var s=mi(ur.current),a=kr(s,n.type);s!==a&&(Qe(Ra,n),Qe(ur,a))}function bd(n){Ra.current===n&&(Je(ur),Je(Ra))}var rt=ms(0);function cu(n){for(var s=n;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Rd=[];function Pd(){for(var n=0;n<Rd.length;n++)Rd[n]._workInProgressVersionPrimary=null;Rd.length=0}var du=fe.ReactCurrentDispatcher,Dd=fe.ReactCurrentBatchConfig,gi=0,st=null,Tt=null,Ct=null,hu=!1,Da=!1,Oa=0,Ww=0;function Bt(){throw Error(t(321))}function Od(n,s){if(s===null)return!1;for(var a=0;a<s.length&&a<n.length;a++)if(!jn(n[a],s[a]))return!1;return!0}function Vd(n,s,a,c,h,m){if(gi=m,st=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=n===null||n.memoizedState===null?Yw:Xw,n=a(c,h),Da){m=0;do{if(Da=!1,Oa=0,25<=m)throw Error(t(301));m+=1,Ct=Tt=null,s.updateQueue=null,du.current=Jw,n=a(c,h)}while(Da)}if(du.current=mu,s=Tt!==null&&Tt.next!==null,gi=0,Ct=Tt=st=null,hu=!1,s)throw Error(t(300));return n}function jd(){var n=Oa!==0;return Oa=0,n}function cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?st.memoizedState=Ct=n:Ct=Ct.next=n,Ct}function kn(){if(Tt===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var s=Ct===null?st.memoizedState:Ct.next;if(s!==null)Ct=s,Tt=n;else{if(n===null)throw Error(t(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ct===null?st.memoizedState=Ct=n:Ct=Ct.next=n}return Ct}function Va(n,s){return typeof s=="function"?s(n):s}function Md(n){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Tt,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var w=h.next;h.next=m.next,m.next=w}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var k=w=null,b=null,U=m;do{var Y=U.lane;if((gi&Y)===Y)b!==null&&(b=b.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:Y,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};b===null?(k=b=X,w=c):b=b.next=X,st.lanes|=Y,yi|=Y}U=U.next}while(U!==null&&U!==m);b===null?w=c:b.next=k,jn(c,s.memoizedState)||(en=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=b,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do m=h.lane,st.lanes|=m,yi|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Ld(n){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,m=s.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do m=n(m,w.action),w=w.next;while(w!==h);jn(m,s.memoizedState)||(en=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function dm(){}function hm(n,s){var a=st,c=kn(),h=s(),m=!jn(c.memoizedState,h);if(m&&(c.memoizedState=h,en=!0),c=c.queue,Fd(mm.bind(null,a,c,n),[n]),c.getSnapshot!==s||m||Ct!==null&&Ct.memoizedState.tag&1){if(a.flags|=2048,ja(9,pm.bind(null,a,c,h,s),void 0,null),Nt===null)throw Error(t(349));(gi&30)!==0||fm(a,s,h)}return h}function fm(n,s,a){n.flags|=16384,n={getSnapshot:s,value:a},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.stores=[n]):(a=s.stores,a===null?s.stores=[n]:a.push(n))}function pm(n,s,a,c){s.value=a,s.getSnapshot=c,gm(s)&&ym(n)}function mm(n,s,a){return a(function(){gm(s)&&ym(n)})}function gm(n){var s=n.getSnapshot;n=n.value;try{var a=s();return!jn(n,a)}catch{return!0}}function ym(n){var s=Ur(n,1);s!==null&&zn(s,n,1,-1)}function vm(n){var s=cr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},s.queue=n,n=n.dispatch=Qw.bind(null,st,n),[s.memoizedState,n]}function ja(n,s,a,c){return n={tag:n,create:s,destroy:a,deps:c,next:null},s=st.updateQueue,s===null?(s={lastEffect:null,stores:null},st.updateQueue=s,s.lastEffect=n.next=n):(a=s.lastEffect,a===null?s.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,s.lastEffect=n)),n}function _m(){return kn().memoizedState}function fu(n,s,a,c){var h=cr();st.flags|=n,h.memoizedState=ja(1|s,a,void 0,c===void 0?null:c)}function pu(n,s,a,c){var h=kn();c=c===void 0?null:c;var m=void 0;if(Tt!==null){var w=Tt.memoizedState;if(m=w.destroy,c!==null&&Od(c,w.deps)){h.memoizedState=ja(s,a,m,c);return}}st.flags|=n,h.memoizedState=ja(1|s,a,m,c)}function wm(n,s){return fu(8390656,8,n,s)}function Fd(n,s){return pu(2048,8,n,s)}function Em(n,s){return pu(4,2,n,s)}function xm(n,s){return pu(4,4,n,s)}function Tm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Im(n,s,a){return a=a!=null?a.concat([n]):null,pu(4,4,Tm.bind(null,s,n),a)}function Ud(){}function km(n,s){var a=kn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Od(s,c[1])?c[0]:(a.memoizedState=[n,s],n)}function Sm(n,s){var a=kn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Od(s,c[1])?c[0]:(n=n(),a.memoizedState=[n,s],n)}function Am(n,s,a){return(gi&21)===0?(n.baseState&&(n.baseState=!1,en=!0),n.memoizedState=a):(jn(a,s)||(a=la(),st.lanes|=a,yi|=a,n.baseState=!0),s)}function Gw(n,s){var a=je;je=a!==0&&4>a?a:4,n(!0);var c=Dd.transition;Dd.transition={};try{n(!1),s()}finally{je=a,Dd.transition=c}}function Cm(){return kn().memoizedState}function Kw(n,s,a){var c=Ts(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Nm(n))bm(s,a);else if(a=om(n,s,a,c),a!==null){var h=Yt();zn(a,n,c,h),Rm(a,s,c)}}function Qw(n,s,a){var c=Ts(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nm(n))bm(s,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var w=s.lastRenderedState,k=m(w,a);if(h.hasEagerState=!0,h.eagerState=k,jn(k,w)){var b=s.interleaved;b===null?(h.next=h,Ad(s)):(h.next=b.next,b.next=h),s.interleaved=h;return}}catch{}finally{}a=om(n,s,h,c),a!==null&&(h=Yt(),zn(a,n,c,h),Rm(a,s,c))}}function Nm(n){var s=n.alternate;return n===st||s!==null&&s===st}function bm(n,s){Da=hu=!0;var a=n.pending;a===null?s.next=s:(s.next=a.next,a.next=s),n.pending=s}function Rm(n,s,a){if((a&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,a|=c,s.lanes=a,ca(n,a)}}var mu={readContext:In,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Yw={readContext:In,useCallback:function(n,s){return cr().memoizedState=[n,s===void 0?null:s],n},useContext:In,useEffect:wm,useImperativeHandle:function(n,s,a){return a=a!=null?a.concat([n]):null,fu(4194308,4,Tm.bind(null,s,n),a)},useLayoutEffect:function(n,s){return fu(4194308,4,n,s)},useInsertionEffect:function(n,s){return fu(4,2,n,s)},useMemo:function(n,s){var a=cr();return s=s===void 0?null:s,n=n(),a.memoizedState=[n,s],n},useReducer:function(n,s,a){var c=cr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=Kw.bind(null,st,n),[c.memoizedState,n]},useRef:function(n){var s=cr();return n={current:n},s.memoizedState=n},useState:vm,useDebugValue:Ud,useDeferredValue:function(n){return cr().memoizedState=n},useTransition:function(){var n=vm(!1),s=n[0];return n=Gw.bind(null,n[1]),cr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,a){var c=st,h=cr();if(tt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Nt===null)throw Error(t(349));(gi&30)!==0||fm(c,s,a)}h.memoizedState=a;var m={value:a,getSnapshot:s};return h.queue=m,wm(mm.bind(null,c,m,n),[n]),c.flags|=2048,ja(9,pm.bind(null,c,m,a,s),void 0,null),a},useId:function(){var n=cr(),s=Nt.identifierPrefix;if(tt){var a=Fr,c=Lr;a=(c&~(1<<32-un(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Oa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Ww++,s=":"+s+"r"+a.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Xw={readContext:In,useCallback:km,useContext:In,useEffect:Fd,useImperativeHandle:Im,useInsertionEffect:Em,useLayoutEffect:xm,useMemo:Sm,useReducer:Md,useRef:_m,useState:function(){return Md(Va)},useDebugValue:Ud,useDeferredValue:function(n){var s=kn();return Am(s,Tt.memoizedState,n)},useTransition:function(){var n=Md(Va)[0],s=kn().memoizedState;return[n,s]},useMutableSource:dm,useSyncExternalStore:hm,useId:Cm,unstable_isNewReconciler:!1},Jw={readContext:In,useCallback:km,useContext:In,useEffect:Fd,useImperativeHandle:Im,useInsertionEffect:Em,useLayoutEffect:xm,useMemo:Sm,useReducer:Ld,useRef:_m,useState:function(){return Ld(Va)},useDebugValue:Ud,useDeferredValue:function(n){var s=kn();return Tt===null?s.memoizedState=n:Am(s,Tt.memoizedState,n)},useTransition:function(){var n=Ld(Va)[0],s=kn().memoizedState;return[n,s]},useMutableSource:dm,useSyncExternalStore:hm,useId:Cm,unstable_isNewReconciler:!1};function Ln(n,s){if(n&&n.defaultProps){s=re({},s),n=n.defaultProps;for(var a in n)s[a]===void 0&&(s[a]=n[a]);return s}return s}function zd(n,s,a,c){s=n.memoizedState,a=a(c,s),a=a==null?s:re({},s,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var gu={isMounted:function(n){return(n=n._reactInternals)?On(n)===n:!1},enqueueSetState:function(n,s,a){n=n._reactInternals;var c=Yt(),h=Ts(n),m=zr(c,h);m.payload=s,a!=null&&(m.callback=a),s=_s(n,m,h),s!==null&&(zn(s,n,h,c),lu(s,n,h))},enqueueReplaceState:function(n,s,a){n=n._reactInternals;var c=Yt(),h=Ts(n),m=zr(c,h);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=_s(n,m,h),s!==null&&(zn(s,n,h,c),lu(s,n,h))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var a=Yt(),c=Ts(n),h=zr(a,c);h.tag=2,s!=null&&(h.callback=s),s=_s(n,h,c),s!==null&&(zn(s,n,c,a),lu(s,n,c))}};function Pm(n,s,a,c,h,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):s.prototype&&s.prototype.isPureReactComponent?!xa(a,c)||!xa(h,m):!0}function Dm(n,s,a){var c=!1,h=gs,m=s.contextType;return typeof m=="object"&&m!==null?m=In(m):(h=Zt(s)?di:zt.current,c=s.contextTypes,m=(c=c!=null)?fo(n,h):gs),s=new s(a,m),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=gu,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),s}function Om(n,s,a,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==n&&gu.enqueueReplaceState(s,s.state,null)}function Bd(n,s,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Cd(n);var m=s.contextType;typeof m=="object"&&m!==null?h.context=In(m):(m=Zt(s)?di:zt.current,h.context=fo(n,m)),h.state=n.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(zd(n,s,m,a),h.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&gu.enqueueReplaceState(h,h.state,null),uu(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:s,stack:h,digest:null}}function $d(n,s,a){return{value:n,source:null,stack:a??null,digest:s??null}}function Hd(n,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Zw=typeof WeakMap=="function"?WeakMap:Map;function Vm(n,s,a){a=zr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Tu||(Tu=!0,ih=c),Hd(n,s)},a}function jm(n,s,a){a=zr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;a.payload=function(){return c(h)},a.callback=function(){Hd(n,s)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Hd(n,s),typeof c!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Mm(n,s,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Zw;var h=new Set;c.set(s,h)}else h=c.get(s),h===void 0&&(h=new Set,c.set(s,h));h.has(a)||(h.add(a),n=fE.bind(null,n,s,a),s.then(n,n))}function Lm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Fm(n,s,a,c,h){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=zr(-1,1),s.tag=2,_s(a,s,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var eE=fe.ReactCurrentOwner,en=!1;function Qt(n,s,a,c){s.child=n===null?im(s,null,a,c):yo(s,n.child,a,c)}function Um(n,s,a,c,h){a=a.render;var m=s.ref;return _o(s,h),c=Vd(n,s,a,c,m,h),a=jd(),n!==null&&!en?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~h,Br(n,s,h)):(tt&&a&&vd(s),s.flags|=1,Qt(n,s,c,h),s.child)}function zm(n,s,a,c,h){if(n===null){var m=a.type;return typeof m=="function"&&!hh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,Bm(n,s,m,c,h)):(n=Nu(a.type,null,c,s,s.mode,h),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,(n.lanes&h)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(w,c)&&n.ref===s.ref)return Br(n,s,h)}return s.flags|=1,n=ks(m,c),n.ref=s.ref,n.return=s,s.child=n}function Bm(n,s,a,c,h){if(n!==null){var m=n.memoizedProps;if(xa(m,c)&&n.ref===s.ref)if(en=!1,s.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(en=!0);else return s.lanes=n.lanes,Br(n,s,h)}return qd(n,s,a,c,h)}function $m(n,s,a){var c=s.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(To,gn),gn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Qe(To,gn),gn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Qe(To,gn),gn|=c}else m!==null?(c=m.baseLanes|a,s.memoizedState=null):c=a,Qe(To,gn),gn|=c;return Qt(n,s,h,a),s.child}function Hm(n,s){var a=s.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function qd(n,s,a,c,h){var m=Zt(a)?di:zt.current;return m=fo(s,m),_o(s,h),a=Vd(n,s,a,c,m,h),c=jd(),n!==null&&!en?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~h,Br(n,s,h)):(tt&&c&&vd(s),s.flags|=1,Qt(n,s,a,h),s.child)}function qm(n,s,a,c,h){if(Zt(a)){var m=!0;eu(s)}else m=!1;if(_o(s,h),s.stateNode===null)vu(n,s),Dm(s,a,c),Bd(s,a,c,h),c=!0;else if(n===null){var w=s.stateNode,k=s.memoizedProps;w.props=k;var b=w.context,U=a.contextType;typeof U=="object"&&U!==null?U=In(U):(U=Zt(a)?di:zt.current,U=fo(s,U));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==c||b!==U)&&Om(s,w,c,U),vs=!1;var K=s.memoizedState;w.state=K,uu(s,c,w,h),b=s.memoizedState,k!==c||K!==b||Jt.current||vs?(typeof Y=="function"&&(zd(s,a,Y,c),b=s.memoizedState),(k=vs||Pm(s,a,k,c,K,b,U))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=b),w.props=c,w.state=b,w.context=U,c=k):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,am(n,s),k=s.memoizedProps,U=s.type===s.elementType?k:Ln(s.type,k),w.props=U,X=s.pendingProps,K=w.context,b=a.contextType,typeof b=="object"&&b!==null?b=In(b):(b=Zt(a)?di:zt.current,b=fo(s,b));var se=a.getDerivedStateFromProps;(Y=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==X||K!==b)&&Om(s,w,c,b),vs=!1,K=s.memoizedState,w.state=K,uu(s,c,w,h);var le=s.memoizedState;k!==X||K!==le||Jt.current||vs?(typeof se=="function"&&(zd(s,a,se,c),le=s.memoizedState),(U=vs||Pm(s,a,U,c,K,le,b)||!1)?(Y||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,le,b),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,le,b)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),w.props=c,w.state=le,w.context=b,c=U):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&K===n.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&K===n.memoizedState||(s.flags|=1024),c=!1)}return Wd(n,s,a,c,m,h)}function Wd(n,s,a,c,h,m){Hm(n,s);var w=(s.flags&128)!==0;if(!c&&!w)return h&&Yp(s,a,!1),Br(n,s,m);c=s.stateNode,eE.current=s;var k=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&w?(s.child=yo(s,n.child,null,m),s.child=yo(s,null,k,m)):Qt(n,s,k,m),s.memoizedState=c.state,h&&Yp(s,a,!0),s.child}function Wm(n){var s=n.stateNode;s.pendingContext?Kp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Kp(n,s.context,!1),Nd(n,s.containerInfo)}function Gm(n,s,a,c,h){return go(),xd(h),s.flags|=256,Qt(n,s,a,c),s.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Kd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Km(n,s,a){var c=s.pendingProps,h=rt.current,m=!1,w=(s.flags&128)!==0,k;if((k=w)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(m=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Qe(rt,h&1),n===null)return Ed(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=s.mode,m=s.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=bu(w,c,0,null),n=Ei(n,c,a,null),m.return=s,n.return=s,m.sibling=n,s.child=m,s.child.memoizedState=Kd(a),s.memoizedState=Gd,n):Qd(s,w));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return tE(n,s,w,c,k,h,a);if(m){m=c.fallback,w=s.mode,h=n.child,k=h.sibling;var b={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==h?(c=s.child,c.childLanes=0,c.pendingProps=b,s.deletions=null):(c=ks(h,b),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?m=ks(k,m):(m=Ei(m,w,a,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,w=n.child.memoizedState,w=w===null?Kd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,s.memoizedState=Gd,c}return m=n.child,n=m.sibling,c=ks(m,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,n!==null&&(a=s.deletions,a===null?(s.deletions=[n],s.flags|=16):a.push(n)),s.child=c,s.memoizedState=null,c}function Qd(n,s){return s=bu({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function yu(n,s,a,c){return c!==null&&xd(c),yo(s,n.child,null,a),n=Qd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function tE(n,s,a,c,h,m,w){if(a)return s.flags&256?(s.flags&=-257,c=$d(Error(t(422))),yu(n,s,w,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(m=c.fallback,h=s.mode,c=bu({mode:"visible",children:c.children},h,0,null),m=Ei(m,h,w,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,(s.mode&1)!==0&&yo(s,n.child,null,w),s.child.memoizedState=Kd(w),s.memoizedState=Gd,m);if((s.mode&1)===0)return yu(n,s,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=$d(m,c,void 0),yu(n,s,w,c)}if(k=(w&n.childLanes)!==0,en||k){if(c=Nt,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Ur(n,h),zn(c,n,h,-1))}return dh(),c=$d(Error(t(421))),yu(n,s,w,c)}return h.data==="$?"?(s.flags|=128,s.child=n.child,s=pE.bind(null,n),h._reactRetry=s,null):(n=m.treeContext,mn=ps(h.nextSibling),pn=s,tt=!0,Mn=null,n!==null&&(xn[Tn++]=Lr,xn[Tn++]=Fr,xn[Tn++]=hi,Lr=n.id,Fr=n.overflow,hi=s),s=Qd(s,c.children),s.flags|=4096,s)}function Qm(n,s,a){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),Sd(n.return,s,a)}function Yd(n,s,a,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function Ym(n,s,a){var c=s.pendingProps,h=c.revealOrder,m=c.tail;if(Qt(n,s,c.children,a),c=rt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qm(n,a,s);else if(n.tag===19)Qm(n,a,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Qe(rt,c),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)n=a.alternate,n!==null&&cu(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),Yd(s,!1,h,a,m);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(n=h.alternate,n!==null&&cu(n)===null){s.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Yd(s,!0,a,null,m);break;case"together":Yd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Br(n,s,a){if(n!==null&&(s.dependencies=n.dependencies),yi|=s.lanes,(a&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,a=ks(n,n.pendingProps),s.child=a,a.return=s;n.sibling!==null;)n=n.sibling,a=a.sibling=ks(n,n.pendingProps),a.return=s;a.sibling=null}return s.child}function nE(n,s,a){switch(s.tag){case 3:Wm(s),go();break;case 5:cm(s);break;case 1:Zt(s.type)&&eu(s);break;case 4:Nd(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,h=s.memoizedProps.value;Qe(ou,c._currentValue),c._currentValue=h;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Qe(rt,rt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Km(n,s,a):(Qe(rt,rt.current&1),n=Br(n,s,a),n!==null?n.sibling:null);Qe(rt,rt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(n.flags&128)!==0){if(c)return Ym(n,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Qe(rt,rt.current),c)break;return null;case 22:case 23:return s.lanes=0,$m(n,s,a)}return Br(n,s,a)}var Xm,Xd,Jm,Zm;Xm=function(n,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xd=function(){},Jm=function(n,s,a,c){var h=n.memoizedProps;if(h!==c){n=s.stateNode,mi(ur.current);var m=null;switch(a){case"input":h=Yr(n,h),c=Yr(n,c),m=[];break;case"select":h=re({},h,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":h=ge(n,h),c=ge(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Xl)}Dn(a,c);var w;a=null;for(U in h)if(!c.hasOwnProperty(U)&&h.hasOwnProperty(U)&&h[U]!=null)if(U==="style"){var k=h[U];for(w in k)k.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var b=c[U];if(k=h?.[U],c.hasOwnProperty(U)&&b!==k&&(b!=null||k!=null))if(U==="style")if(k){for(w in k)!k.hasOwnProperty(w)||b&&b.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in b)b.hasOwnProperty(w)&&k[w]!==b[w]&&(a||(a={}),a[w]=b[w])}else a||(m||(m=[]),m.push(U,a)),a=b;else U==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,k=k?k.__html:void 0,b!=null&&k!==b&&(m=m||[]).push(U,b)):U==="children"?typeof b!="string"&&typeof b!="number"||(m=m||[]).push(U,""+b):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(b!=null&&U==="onScroll"&&Xe("scroll",n),m||k===b||(m=[])):(m=m||[]).push(U,b))}a&&(m=m||[]).push("style",a);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},Zm=function(n,s,a,c){a!==c&&(s.flags|=4)};function Ma(n,s){if(!tt)switch(n.tailMode){case"hidden":s=n.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $t(n){var s=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(s)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,s}function rE(n,s,a){var c=s.pendingProps;switch(_d(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(s),null;case 1:return Zt(s.type)&&Zl(),$t(s),null;case 3:return c=s.stateNode,wo(),Je(Jt),Je(zt),Pd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(su(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Mn!==null&&(lh(Mn),Mn=null))),Xd(n,s),$t(s),null;case 5:bd(s);var h=mi(Pa.current);if(a=s.type,n!==null&&s.stateNode!=null)Jm(n,s,a,c,h),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return $t(s),null}if(n=mi(ur.current),su(s)){c=s.stateNode,a=s.type;var m=s.memoizedProps;switch(c[lr]=s,c[Aa]=m,n=(s.mode&1)!==0,a){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(h=0;h<Ia.length;h++)Xe(Ia[h],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":Ui(c,m),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Xe("invalid",c);break;case"textarea":ht(c,m),Xe("invalid",c)}Dn(a,m),h=null;for(var w in m)if(m.hasOwnProperty(w)){var k=m[w];w==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Yl(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&Xe("scroll",c)}switch(a){case"input":ot(c),Qs(c,m,!0);break;case"textarea":ot(c),_n(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Xl)}c=h,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Jr(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[lr]=s,n[Aa]=c,Xm(n,s,!1,!1),s.stateNode=n;e:{switch(w=Bi(a,c),a){case"dialog":Xe("cancel",n),Xe("close",n),h=c;break;case"iframe":case"object":case"embed":Xe("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ia.length;h++)Xe(Ia[h],n);h=c;break;case"source":Xe("error",n),h=c;break;case"img":case"image":case"link":Xe("error",n),Xe("load",n),h=c;break;case"details":Xe("toggle",n),h=c;break;case"input":Ui(n,c),h=Yr(n,c),Xe("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=re({},c,{value:void 0}),Xe("invalid",n);break;case"textarea":ht(n,c),h=ge(n,c),Xe("invalid",n);break;default:h=c}Dn(a,h),k=h;for(m in k)if(k.hasOwnProperty(m)){var b=k[m];m==="style"?zi(n,b):m==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Il(n,b)):m==="children"?typeof b=="string"?(a!=="textarea"||b!=="")&&Ys(n,b):typeof b=="number"&&Ys(n,""+b):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?b!=null&&m==="onScroll"&&Xe("scroll",n):b!=null&&he(n,m,b,w))}switch(a){case"input":ot(n),Qs(n,c,!1);break;case"textarea":ot(n),_n(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Re(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?J(n,!!c.multiple,m,!1):c.defaultValue!=null&&J(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Xl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return $t(s),null;case 6:if(n&&s.stateNode!=null)Zm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=mi(Pa.current),mi(ur.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[lr]=s,(m=c.nodeValue!==a)&&(n=pn,n!==null))switch(n.tag){case 3:Yl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yl(c.nodeValue,a,(n.mode&1)!==0)}m&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[lr]=s,s.stateNode=c}return $t(s),null;case 13:if(Je(rt),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tt&&mn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)nm(),go(),s.flags|=98560,m=!1;else if(m=su(s),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[lr]=s}else go(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;$t(s),m=!1}else Mn!==null&&(lh(Mn),Mn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(rt.current&1)!==0?It===0&&(It=3):dh())),s.updateQueue!==null&&(s.flags|=4),$t(s),null);case 4:return wo(),Xd(n,s),n===null&&ka(s.stateNode.containerInfo),$t(s),null;case 10:return kd(s.type._context),$t(s),null;case 17:return Zt(s.type)&&Zl(),$t(s),null;case 19:if(Je(rt),m=s.memoizedState,m===null)return $t(s),null;if(c=(s.flags&128)!==0,w=m.rendering,w===null)if(c)Ma(m,!1);else{if(It!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(w=cu(n),w!==null){for(s.flags|=128,Ma(m,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Qe(rt,rt.current&1|2),s.child}n=n.sibling}m.tail!==null&&Ye()>Io&&(s.flags|=128,c=!0,Ma(m,!1),s.lanes=4194304)}else{if(!c)if(n=cu(w),n!==null){if(s.flags|=128,c=!0,a=n.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ma(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!tt)return $t(s),null}else 2*Ye()-m.renderingStartTime>Io&&a!==1073741824&&(s.flags|=128,c=!0,Ma(m,!1),s.lanes=4194304);m.isBackwards?(w.sibling=s.child,s.child=w):(a=m.last,a!==null?a.sibling=w:s.child=w,m.last=w)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ye(),s.sibling=null,a=rt.current,Qe(rt,c?a&1|2:a&1),s):($t(s),null);case 22:case 23:return ch(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(gn&1073741824)!==0&&($t(s),s.subtreeFlags&6&&(s.flags|=8192)):$t(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function sE(n,s){switch(_d(s),s.tag){case 1:return Zt(s.type)&&Zl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return wo(),Je(Jt),Je(zt),Pd(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return bd(s),null;case 13:if(Je(rt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));go()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Je(rt),null;case 4:return wo(),null;case 10:return kd(s.type._context),null;case 22:case 23:return ch(),null;case 24:return null;default:return null}}var _u=!1,Ht=!1,iE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function xo(n,s){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ut(n,s,c)}else a.current=null}function Jd(n,s,a){try{a()}catch(c){ut(n,s,c)}}var eg=!1;function oE(n,s){if(cd=Dr,n=Pp(),nd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,k=-1,b=-1,U=0,Y=0,X=n,K=null;t:for(;;){for(var se;X!==a||h!==0&&X.nodeType!==3||(k=w+h),X!==m||c!==0&&X.nodeType!==3||(b=w+c),X.nodeType===3&&(w+=X.nodeValue.length),(se=X.firstChild)!==null;)K=X,X=se;for(;;){if(X===n)break t;if(K===a&&++U===h&&(k=w),K===m&&++Y===c&&(b=w),(se=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=se}a=k===-1||b===-1?null:{start:k,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(dd={focusedElem:n,selectionRange:a},Dr=!1,ae=s;ae!==null;)if(s=ae,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,ae=n;else for(;ae!==null;){s=ae;try{var le=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,pt=le.memoizedState,j=s.stateNode,P=j.getSnapshotBeforeUpdate(s.elementType===s.type?ue:Ln(s.type,ue),pt);j.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){ut(s,s.return,Z)}if(n=s.sibling,n!==null){n.return=s.return,ae=n;break}ae=s.return}return le=eg,eg=!1,le}function La(n,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&Jd(s,a,m)}h=h.next}while(h!==c)}}function wu(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Zd(n){var s=n.ref;if(s!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof s=="function"?s(n):s.current=n}}function tg(n){var s=n.alternate;s!==null&&(n.alternate=null,tg(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[lr],delete s[Aa],delete s[md],delete s[Bw],delete s[$w])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ng(n){return n.tag===5||n.tag===3||n.tag===4}function rg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ng(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function eh(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(n,s):a.insertBefore(n,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(n,a)):(s=a,s.appendChild(n)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Xl));else if(c!==4&&(n=n.child,n!==null))for(eh(n,s,a),n=n.sibling;n!==null;)eh(n,s,a),n=n.sibling}function th(n,s,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?a.insertBefore(n,s):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(th(n,s,a),n=n.sibling;n!==null;)th(n,s,a),n=n.sibling}var Ot=null,Fn=!1;function ws(n,s,a){for(a=a.child;a!==null;)sg(n,s,a),a=a.sibling}function sg(n,s,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(ti,a)}catch{}switch(a.tag){case 5:Ht||xo(a,s);case 6:var c=Ot,h=Fn;Ot=null,ws(n,s,a),Ot=c,Fn=h,Ot!==null&&(Fn?(n=Ot,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ot.removeChild(a.stateNode));break;case 18:Ot!==null&&(Fn?(n=Ot,a=a.stateNode,n.nodeType===8?pd(n.parentNode,a):n.nodeType===1&&pd(n,a),cs(n)):pd(Ot,a.stateNode));break;case 4:c=Ot,h=Fn,Ot=a.stateNode.containerInfo,Fn=!0,ws(n,s,a),Ot=c,Fn=h;break;case 0:case 11:case 14:case 15:if(!Ht&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Jd(a,s,w),h=h.next}while(h!==c)}ws(n,s,a);break;case 1:if(!Ht&&(xo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){ut(a,s,k)}ws(n,s,a);break;case 21:ws(n,s,a);break;case 22:a.mode&1?(Ht=(c=Ht)||a.memoizedState!==null,ws(n,s,a),Ht=c):ws(n,s,a);break;default:ws(n,s,a)}}function ig(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new iE),s.forEach(function(c){var h=mE.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Un(n,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=n,w=s,k=w;e:for(;k!==null;){switch(k.tag){case 5:Ot=k.stateNode,Fn=!1;break e;case 3:Ot=k.stateNode.containerInfo,Fn=!0;break e;case 4:Ot=k.stateNode.containerInfo,Fn=!0;break e}k=k.return}if(Ot===null)throw Error(t(160));sg(m,w,h),Ot=null,Fn=!1;var b=h.alternate;b!==null&&(b.return=null),h.return=null}catch(U){ut(h,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)og(s,n),s=s.sibling}function og(n,s){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(s,n),dr(n),c&4){try{La(3,n,n.return),wu(3,n)}catch(ue){ut(n,n.return,ue)}try{La(5,n,n.return)}catch(ue){ut(n,n.return,ue)}}break;case 1:Un(s,n),dr(n),c&512&&a!==null&&xo(a,a.return);break;case 5:if(Un(s,n),dr(n),c&512&&a!==null&&xo(a,a.return),n.flags&32){var h=n.stateNode;try{Ys(h,"")}catch(ue){ut(n,n.return,ue)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,k=n.type,b=n.updateQueue;if(n.updateQueue=null,b!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&Xr(h,m),Bi(k,w);var U=Bi(k,m);for(w=0;w<b.length;w+=2){var Y=b[w],X=b[w+1];Y==="style"?zi(h,X):Y==="dangerouslySetInnerHTML"?Il(h,X):Y==="children"?Ys(h,X):he(h,Y,X,U)}switch(k){case"input":Ir(h,m);break;case"textarea":an(h,m);break;case"select":var K=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var se=m.value;se!=null?J(h,!!m.multiple,se,!1):K!==!!m.multiple&&(m.defaultValue!=null?J(h,!!m.multiple,m.defaultValue,!0):J(h,!!m.multiple,m.multiple?[]:"",!1))}h[Aa]=m}catch(ue){ut(n,n.return,ue)}}break;case 6:if(Un(s,n),dr(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(ue){ut(n,n.return,ue)}}break;case 3:if(Un(s,n),dr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{cs(s.containerInfo)}catch(ue){ut(n,n.return,ue)}break;case 4:Un(s,n),dr(n);break;case 13:Un(s,n),dr(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(sh=Ye())),c&4&&ig(n);break;case 22:if(Y=a!==null&&a.memoizedState!==null,n.mode&1?(Ht=(U=Ht)||Y,Un(s,n),Ht=U):Un(s,n),dr(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!Y&&(n.mode&1)!==0)for(ae=n,Y=n.child;Y!==null;){for(X=ae=Y;ae!==null;){switch(K=ae,se=K.child,K.tag){case 0:case 11:case 14:case 15:La(4,K,K.return);break;case 1:xo(K,K.return);var le=K.stateNode;if(typeof le.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ue){ut(c,a,ue)}}break;case 5:xo(K,K.return);break;case 22:if(K.memoizedState!==null){ug(X);continue}}se!==null?(se.return=K,ae=se):ug(X)}Y=Y.sibling}e:for(Y=null,X=n;;){if(X.tag===5){if(Y===null){Y=X;try{h=X.stateNode,U?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=X.stateNode,b=X.memoizedProps.style,w=b!=null&&b.hasOwnProperty("display")?b.display:null,k.style.display=ts("display",w))}catch(ue){ut(n,n.return,ue)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(ue){ut(n,n.return,ue)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Un(s,n),dr(n),c&4&&ig(n);break;case 21:break;default:Un(s,n),dr(n)}}function dr(n){var s=n.flags;if(s&2){try{e:{for(var a=n.return;a!==null;){if(ng(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ys(h,""),c.flags&=-33);var m=rg(n);th(n,m,h);break;case 3:case 4:var w=c.stateNode.containerInfo,k=rg(n);eh(n,k,w);break;default:throw Error(t(161))}}catch(b){ut(n,n.return,b)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function aE(n,s,a){ae=n,ag(n)}function ag(n,s,a){for(var c=(n.mode&1)!==0;ae!==null;){var h=ae,m=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||_u;if(!w){var k=h.alternate,b=k!==null&&k.memoizedState!==null||Ht;k=_u;var U=Ht;if(_u=w,(Ht=b)&&!U)for(ae=h;ae!==null;)w=ae,b=w.child,w.tag===22&&w.memoizedState!==null?cg(h):b!==null?(b.return=w,ae=b):cg(h);for(;m!==null;)ae=m,ag(m),m=m.sibling;ae=h,_u=k,Ht=U}lg(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,ae=m):lg(n)}}function lg(n){for(;ae!==null;){var s=ae;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ht||wu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ht)if(a===null)c.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:Ln(s.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&um(s,m,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}um(s,w,a)}break;case 5:var k=s.stateNode;if(a===null&&s.flags&4){a=k;var b=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&a.focus();break;case"img":b.src&&(a.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var Y=U.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&cs(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ht||s.flags&512&&Zd(s)}catch(K){ut(s,s.return,K)}}if(s===n){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function ug(n){for(;ae!==null;){var s=ae;if(s===n){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function cg(n){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(b){ut(s,a,b)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var h=s.return;try{c.componentDidMount()}catch(b){ut(s,h,b)}}var m=s.return;try{Zd(s)}catch(b){ut(s,m,b)}break;case 5:var w=s.return;try{Zd(s)}catch(b){ut(s,w,b)}}}catch(b){ut(s,s.return,b)}if(s===n){ae=null;break}var k=s.sibling;if(k!==null){k.return=s.return,ae=k;break}ae=s.return}}var lE=Math.ceil,Eu=fe.ReactCurrentDispatcher,nh=fe.ReactCurrentOwner,Sn=fe.ReactCurrentBatchConfig,Ue=0,Nt=null,vt=null,Vt=0,gn=0,To=ms(0),It=0,Fa=null,yi=0,xu=0,rh=0,Ua=null,tn=null,sh=0,Io=1/0,$r=null,Tu=!1,ih=null,Es=null,Iu=!1,xs=null,ku=0,za=0,oh=null,Su=-1,Au=0;function Yt(){return(Ue&6)!==0?Ye():Su!==-1?Su:Su=Ye()}function Ts(n){return(n.mode&1)===0?1:(Ue&2)!==0&&Vt!==0?Vt&-Vt:qw.transition!==null?(Au===0&&(Au=la()),Au):(n=je,n!==0||(n=window.event,n=n===void 0?16:Ji(n.type)),n)}function zn(n,s,a,c){if(50<za)throw za=0,oh=null,Error(t(185));ii(n,a,c),((Ue&2)===0||n!==Nt)&&(n===Nt&&((Ue&2)===0&&(xu|=a),It===4&&Is(n,Vt)),nn(n,c),a===1&&Ue===0&&(s.mode&1)===0&&(Io=Ye()+500,tu&&ys()))}function nn(n,s){var a=n.callbackNode;si(n,s);var c=br(n,n===Nt?Vt:0);if(c===0)a!==null&&qi(a),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(a!=null&&qi(a),s===1)n.tag===0?Hw(hg.bind(null,n)):Xp(hg.bind(null,n)),Uw(function(){(Ue&6)===0&&ys()}),a=null;else{switch(Jn(c)){case 1:a=Wi;break;case 4:a=ia;break;case 16:a=ei;break;case 536870912:a=Gi;break;default:a=ei}a=wg(a,dg.bind(null,n))}n.callbackPriority=s,n.callbackNode=a}}function dg(n,s){if(Su=-1,Au=0,(Ue&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ko()&&n.callbackNode!==a)return null;var c=br(n,n===Nt?Vt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Cu(n,c);else{s=c;var h=Ue;Ue|=2;var m=pg();(Nt!==n||Vt!==s)&&($r=null,Io=Ye()+500,_i(n,s));do try{dE();break}catch(k){fg(n,k)}while(!0);Id(),Eu.current=m,Ue=h,vt!==null?s=0:(Nt=null,Vt=0,s=It)}if(s!==0){if(s===2&&(h=aa(n),h!==0&&(c=h,s=ah(n,h))),s===1)throw a=Fa,_i(n,0),Is(n,c),nn(n,Ye()),a;if(s===6)Is(n,c);else{if(h=n.current.alternate,(c&30)===0&&!uE(h)&&(s=Cu(n,c),s===2&&(m=aa(n),m!==0&&(c=m,s=ah(n,m))),s===1))throw a=Fa,_i(n,0),Is(n,c),nn(n,Ye()),a;switch(n.finishedWork=h,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:wi(n,tn,$r);break;case 3:if(Is(n,c),(c&130023424)===c&&(s=sh+500-Ye(),10<s)){if(br(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Yt(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=fd(wi.bind(null,n,tn,$r),s);break}wi(n,tn,$r);break;case 4:if(Is(n,c),(c&4194240)===c)break;for(s=n.eventTimes,h=-1;0<c;){var w=31-un(c);m=1<<w,w=s[w],w>h&&(h=w),c&=~m}if(c=h,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*lE(c/1960))-c,10<c){n.timeoutHandle=fd(wi.bind(null,n,tn,$r),c);break}wi(n,tn,$r);break;case 5:wi(n,tn,$r);break;default:throw Error(t(329))}}}return nn(n,Ye()),n.callbackNode===a?dg.bind(null,n):null}function ah(n,s){var a=Ua;return n.current.memoizedState.isDehydrated&&(_i(n,s).flags|=256),n=Cu(n,s),n!==2&&(s=tn,tn=a,s!==null&&lh(s)),n}function lh(n){tn===null?tn=n:tn.push.apply(tn,n)}function uE(n){for(var s=n;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!jn(m(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Is(n,s){for(s&=~rh,s&=~xu,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var a=31-un(s),c=1<<a;n[a]=-1,s&=~c}}function hg(n){if((Ue&6)!==0)throw Error(t(327));ko();var s=br(n,0);if((s&1)===0)return nn(n,Ye()),null;var a=Cu(n,s);if(n.tag!==0&&a===2){var c=aa(n);c!==0&&(s=c,a=ah(n,c))}if(a===1)throw a=Fa,_i(n,0),Is(n,s),nn(n,Ye()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,wi(n,tn,$r),nn(n,Ye()),null}function uh(n,s){var a=Ue;Ue|=1;try{return n(s)}finally{Ue=a,Ue===0&&(Io=Ye()+500,tu&&ys())}}function vi(n){xs!==null&&xs.tag===0&&(Ue&6)===0&&ko();var s=Ue;Ue|=1;var a=Sn.transition,c=je;try{if(Sn.transition=null,je=1,n)return n()}finally{je=c,Sn.transition=a,Ue=s,(Ue&6)===0&&ys()}}function ch(){gn=To.current,Je(To)}function _i(n,s){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Fw(a)),vt!==null)for(a=vt.return;a!==null;){var c=a;switch(_d(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Zl();break;case 3:wo(),Je(Jt),Je(zt),Pd();break;case 5:bd(c);break;case 4:wo();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:kd(c.type._context);break;case 22:case 23:ch()}a=a.return}if(Nt=n,vt=n=ks(n.current,null),Vt=gn=s,It=0,Fa=null,rh=xu=yi=0,tn=Ua=null,pi!==null){for(s=0;s<pi.length;s++)if(a=pi[s],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=h,c.next=w}a.pending=c}pi=null}return n}function fg(n,s){do{var a=vt;try{if(Id(),du.current=mu,hu){for(var c=st.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}hu=!1}if(gi=0,Ct=Tt=st=null,Da=!1,Oa=0,nh.current=null,a===null||a.return===null){It=1,Fa=s,vt=null;break}e:{var m=n,w=a.return,k=a,b=s;if(s=Vt,k.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var U=b,Y=k,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var K=Y.alternate;K?(Y.updateQueue=K.updateQueue,Y.memoizedState=K.memoizedState,Y.lanes=K.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var se=Lm(w);if(se!==null){se.flags&=-257,Fm(se,w,k,m,s),se.mode&1&&Mm(m,U,s),s=se,b=U;var le=s.updateQueue;if(le===null){var ue=new Set;ue.add(b),s.updateQueue=ue}else le.add(b);break e}else{if((s&1)===0){Mm(m,U,s),dh();break e}b=Error(t(426))}}else if(tt&&k.mode&1){var pt=Lm(w);if(pt!==null){(pt.flags&65536)===0&&(pt.flags|=256),Fm(pt,w,k,m,s),xd(Eo(b,k));break e}}m=b=Eo(b,k),It!==4&&(It=2),Ua===null?Ua=[m]:Ua.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var j=Vm(m,b,s);lm(m,j);break e;case 1:k=b;var P=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Es===null||!Es.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var Z=jm(m,k,s);lm(m,Z);break e}}m=m.return}while(m!==null)}gg(a)}catch(ce){s=ce,vt===a&&a!==null&&(vt=a=a.return);continue}break}while(!0)}function pg(){var n=Eu.current;return Eu.current=mu,n===null?mu:n}function dh(){(It===0||It===3||It===2)&&(It=4),Nt===null||(yi&268435455)===0&&(xu&268435455)===0||Is(Nt,Vt)}function Cu(n,s){var a=Ue;Ue|=2;var c=pg();(Nt!==n||Vt!==s)&&($r=null,_i(n,s));do try{cE();break}catch(h){fg(n,h)}while(!0);if(Id(),Ue=a,Eu.current=c,vt!==null)throw Error(t(261));return Nt=null,Vt=0,It}function cE(){for(;vt!==null;)mg(vt)}function dE(){for(;vt!==null&&!Zs();)mg(vt)}function mg(n){var s=_g(n.alternate,n,gn);n.memoizedProps=n.pendingProps,s===null?gg(n):vt=s,nh.current=null}function gg(n){var s=n;do{var a=s.alternate;if(n=s.return,(s.flags&32768)===0){if(a=rE(a,s,gn),a!==null){vt=a;return}}else{if(a=sE(a,s),a!==null){a.flags&=32767,vt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,vt=null;return}}if(s=s.sibling,s!==null){vt=s;return}vt=s=n}while(s!==null);It===0&&(It=5)}function wi(n,s,a){var c=je,h=Sn.transition;try{Sn.transition=null,je=1,hE(n,s,a,c)}finally{Sn.transition=h,je=c}return null}function hE(n,s,a,c){do ko();while(xs!==null);if((Ue&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Xc(n,m),n===Nt&&(vt=Nt=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Iu||(Iu=!0,wg(ei,function(){return ko(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Sn.transition,Sn.transition=null;var w=je;je=1;var k=Ue;Ue|=4,nh.current=null,oE(n,a),og(a,n),Pw(dd),Dr=!!cd,dd=cd=null,n.current=a,aE(a),Nr(),Ue=k,je=w,Sn.transition=m}else n.current=a;if(Iu&&(Iu=!1,xs=n,ku=h),m=n.pendingLanes,m===0&&(Es=null),Vl(a.stateNode),nn(n,Ye()),s!==null)for(c=n.onRecoverableError,a=0;a<s.length;a++)h=s[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Tu)throw Tu=!1,n=ih,ih=null,n;return(ku&1)!==0&&n.tag!==0&&ko(),m=n.pendingLanes,(m&1)!==0?n===oh?za++:(za=0,oh=n):za=0,ys(),null}function ko(){if(xs!==null){var n=Jn(ku),s=Sn.transition,a=je;try{if(Sn.transition=null,je=16>n?16:n,xs===null)var c=!1;else{if(n=xs,xs=null,ku=0,(Ue&6)!==0)throw Error(t(331));var h=Ue;for(Ue|=4,ae=n.current;ae!==null;){var m=ae,w=m.child;if((ae.flags&16)!==0){var k=m.deletions;if(k!==null){for(var b=0;b<k.length;b++){var U=k[b];for(ae=U;ae!==null;){var Y=ae;switch(Y.tag){case 0:case 11:case 15:La(8,Y,m)}var X=Y.child;if(X!==null)X.return=Y,ae=X;else for(;ae!==null;){Y=ae;var K=Y.sibling,se=Y.return;if(tg(Y),Y===U){ae=null;break}if(K!==null){K.return=se,ae=K;break}ae=se}}}var le=m.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var pt=ue.sibling;ue.sibling=null,ue=pt}while(ue!==null)}}ae=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,ae=w;else e:for(;ae!==null;){if(m=ae,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:La(9,m,m.return)}var j=m.sibling;if(j!==null){j.return=m.return,ae=j;break e}ae=m.return}}var P=n.current;for(ae=P;ae!==null;){w=ae;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,ae=F;else e:for(w=P;ae!==null;){if(k=ae,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:wu(9,k)}}catch(ce){ut(k,k.return,ce)}if(k===w){ae=null;break e}var Z=k.sibling;if(Z!==null){Z.return=k.return,ae=Z;break e}ae=k.return}}if(Ue=h,ys(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(ti,n)}catch{}c=!0}return c}finally{je=a,Sn.transition=s}}return!1}function yg(n,s,a){s=Eo(a,s),s=Vm(n,s,1),n=_s(n,s,1),s=Yt(),n!==null&&(ii(n,1,s),nn(n,s))}function ut(n,s,a){if(n.tag===3)yg(n,n,a);else for(;s!==null;){if(s.tag===3){yg(s,n,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Es===null||!Es.has(c))){n=Eo(a,n),n=jm(s,n,1),s=_s(s,n,1),n=Yt(),s!==null&&(ii(s,1,n),nn(s,n));break}}s=s.return}}function fE(n,s,a){var c=n.pingCache;c!==null&&c.delete(s),s=Yt(),n.pingedLanes|=n.suspendedLanes&a,Nt===n&&(Vt&a)===a&&(It===4||It===3&&(Vt&130023424)===Vt&&500>Ye()-sh?_i(n,0):rh|=a),nn(n,s)}function vg(n,s){s===0&&((n.mode&1)===0?s=1:(s=as,as<<=1,(as&130023424)===0&&(as=4194304)));var a=Yt();n=Ur(n,s),n!==null&&(ii(n,s,a),nn(n,a))}function pE(n){var s=n.memoizedState,a=0;s!==null&&(a=s.retryLane),vg(n,a)}function mE(n,s){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),vg(n,a)}var _g;_g=function(n,s,a){if(n!==null)if(n.memoizedProps!==s.pendingProps||Jt.current)en=!0;else{if((n.lanes&a)===0&&(s.flags&128)===0)return en=!1,nE(n,s,a);en=(n.flags&131072)!==0}else en=!1,tt&&(s.flags&1048576)!==0&&Jp(s,ru,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(n,s),n=s.pendingProps;var h=fo(s,zt.current);_o(s,a),h=Vd(null,s,c,n,h,a);var m=jd();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Zt(c)?(m=!0,eu(s)):m=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Cd(s),h.updater=gu,s.stateNode=h,h._reactInternals=s,Bd(s,c,n,a),s=Wd(null,s,c,!0,m,a)):(s.tag=0,tt&&m&&vd(s),Qt(null,s,h,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(n,s),n=s.pendingProps,h=c._init,c=h(c._payload),s.type=c,h=s.tag=yE(c),n=Ln(c,n),h){case 0:s=qd(null,s,c,n,a);break e;case 1:s=qm(null,s,c,n,a);break e;case 11:s=Um(null,s,c,n,a);break e;case 14:s=zm(null,s,c,Ln(c.type,n),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:Ln(c,h),qd(n,s,c,h,a);case 1:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:Ln(c,h),qm(n,s,c,h,a);case 3:e:{if(Wm(s),n===null)throw Error(t(387));c=s.pendingProps,m=s.memoizedState,h=m.element,am(n,s),uu(s,c,null,a);var w=s.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){h=Eo(Error(t(423)),s),s=Gm(n,s,c,a,h);break e}else if(c!==h){h=Eo(Error(t(424)),s),s=Gm(n,s,c,a,h);break e}else for(mn=ps(s.stateNode.containerInfo.firstChild),pn=s,tt=!0,Mn=null,a=im(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(go(),c===h){s=Br(n,s,a);break e}Qt(n,s,c,a)}s=s.child}return s;case 5:return cm(s),n===null&&Ed(s),c=s.type,h=s.pendingProps,m=n!==null?n.memoizedProps:null,w=h.children,hd(c,h)?w=null:m!==null&&hd(c,m)&&(s.flags|=32),Hm(n,s),Qt(n,s,w,a),s.child;case 6:return n===null&&Ed(s),null;case 13:return Km(n,s,a);case 4:return Nd(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=yo(s,null,c,a):Qt(n,s,c,a),s.child;case 11:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:Ln(c,h),Um(n,s,c,h,a);case 7:return Qt(n,s,s.pendingProps,a),s.child;case 8:return Qt(n,s,s.pendingProps.children,a),s.child;case 12:return Qt(n,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,h=s.pendingProps,m=s.memoizedProps,w=h.value,Qe(ou,c._currentValue),c._currentValue=w,m!==null)if(jn(m.value,w)){if(m.children===h.children&&!Jt.current){s=Br(n,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var k=m.dependencies;if(k!==null){w=m.child;for(var b=k.firstContext;b!==null;){if(b.context===c){if(m.tag===1){b=zr(-1,a&-a),b.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var Y=U.pending;Y===null?b.next=b:(b.next=Y.next,Y.next=b),U.pending=b}}m.lanes|=a,b=m.alternate,b!==null&&(b.lanes|=a),Sd(m.return,a,s),k.lanes|=a;break}b=b.next}}else if(m.tag===10)w=m.type===s.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,k=w.alternate,k!==null&&(k.lanes|=a),Sd(w,a,s),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===s){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Qt(n,s,h.children,a),s=s.child}return s;case 9:return h=s.type,c=s.pendingProps.children,_o(s,a),h=In(h),c=c(h),s.flags|=1,Qt(n,s,c,a),s.child;case 14:return c=s.type,h=Ln(c,s.pendingProps),h=Ln(c.type,h),zm(n,s,c,h,a);case 15:return Bm(n,s,s.type,s.pendingProps,a);case 17:return c=s.type,h=s.pendingProps,h=s.elementType===c?h:Ln(c,h),vu(n,s),s.tag=1,Zt(c)?(n=!0,eu(s)):n=!1,_o(s,a),Dm(s,c,h),Bd(s,c,h,a),Wd(null,s,c,!0,n,a);case 19:return Ym(n,s,a);case 22:return $m(n,s,a)}throw Error(t(156,s.tag))};function wg(n,s){return sa(n,s)}function gE(n,s,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,s,a,c){return new gE(n,s,a,c)}function hh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yE(n){if(typeof n=="function")return hh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===ct)return 14}return 2}function ks(n,s){var a=n.alternate;return a===null?(a=An(n.tag,s,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=s,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,s=n.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Nu(n,s,a,c,h,m){var w=2;if(c=n,typeof n=="function")hh(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case N:return Ei(a.children,h,m,s);case I:w=8,h|=8;break;case A:return n=An(12,a,s,h|2),n.elementType=A,n.lanes=m,n;case S:return n=An(13,a,s,h),n.elementType=S,n.lanes=m,n;case $e:return n=An(19,a,s,h),n.elementType=$e,n.lanes=m,n;case Ge:return bu(a,h,m,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D:w=10;break e;case R:w=9;break e;case V:w=11;break e;case ct:w=14;break e;case xt:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=An(w,a,s,h),s.elementType=n,s.type=c,s.lanes=m,s}function Ei(n,s,a,c){return n=An(7,n,c,s),n.lanes=a,n}function bu(n,s,a,c){return n=An(22,n,c,s),n.elementType=Ge,n.lanes=a,n.stateNode={isHidden:!1},n}function fh(n,s,a){return n=An(6,n,null,s),n.lanes=a,n}function ph(n,s,a){return s=An(4,n.children!==null?n.children:[],n.key,s),s.lanes=a,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function vE(n,s,a,c,h){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function mh(n,s,a,c,h,m,w,k,b){return n=new vE(n,s,a,k,b),s===1?(s=1,m===!0&&(s|=8)):s=0,m=An(3,null,null,s),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(m),n}function _E(n,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:c==null?null:""+c,children:n,containerInfo:s,implementation:a}}function Eg(n){if(!n)return gs;n=n._reactInternals;e:{if(On(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Zt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Zt(a))return Qp(n,a,s)}return s}function xg(n,s,a,c,h,m,w,k,b){return n=mh(a,c,!0,n,h,m,w,k,b),n.context=Eg(null),a=n.current,c=Yt(),h=Ts(a),m=zr(c,h),m.callback=s??null,_s(a,m,h),n.current.lanes=h,ii(n,h,c),nn(n,c),n}function Ru(n,s,a,c){var h=s.current,m=Yt(),w=Ts(h);return a=Eg(a),s.context===null?s.context=a:s.pendingContext=a,s=zr(m,w),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=_s(h,s,w),n!==null&&(zn(n,h,w,m),lu(n,h,w)),w}function Pu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<s?a:s}}function gh(n,s){Tg(n,s),(n=n.alternate)&&Tg(n,s)}function wE(){return null}var Ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function yh(n){this._internalRoot=n}Du.prototype.render=yh.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Ru(n,s,null,null)},Du.prototype.unmount=yh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;vi(function(){Ru(null,n,null,null)}),s[jr]=null}};function Du(n){this._internalRoot=n}Du.prototype.unstable_scheduleHydration=function(n){if(n){var s=fa();n={blockedOn:null,target:n,priority:s};for(var a=0;a<cn.length&&s!==0&&s<cn[a].priority;a++);cn.splice(a,0,n),a===0&&Yi(n)}};function vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kg(){}function EE(n,s,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var U=Pu(w);m.call(U)}}var w=xg(s,c,n,0,null,!1,!1,"",kg);return n._reactRootContainer=w,n[jr]=w.current,ka(n.nodeType===8?n.parentNode:n),vi(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var U=Pu(b);k.call(U)}}var b=mh(n,0,!1,null,null,!1,!1,"",kg);return n._reactRootContainer=b,n[jr]=b.current,ka(n.nodeType===8?n.parentNode:n),vi(function(){Ru(s,b,a,c)}),b}function Vu(n,s,a,c,h){var m=a._reactRootContainer;if(m){var w=m;if(typeof h=="function"){var k=h;h=function(){var b=Pu(w);k.call(b)}}Ru(s,w,n,h)}else w=EE(a,s,n,h,c);return Pu(w)}da=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var a=Be(s.pendingLanes);a!==0&&(ca(s,a|1),nn(s,Ye()),(Ue&6)===0&&(Io=Ye()+500,ys()))}break;case 13:vi(function(){var c=Ur(n,1);if(c!==null){var h=Yt();zn(c,n,1,h)}}),gh(n,1)}},Ki=function(n){if(n.tag===13){var s=Ur(n,134217728);if(s!==null){var a=Yt();zn(s,n,134217728,a)}gh(n,134217728)}},ha=function(n){if(n.tag===13){var s=Ts(n),a=Ur(n,s);if(a!==null){var c=Yt();zn(a,n,s,c)}gh(n,s)}},fa=function(){return je},pa=function(n,s){var a=je;try{return je=n,s()}finally{je=a}},Sr=function(n,s,a){switch(s){case"input":if(Ir(n,a),s=a.name,a.type==="radio"&&s!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==n&&c.form===n.form){var h=Jl(c);if(!h)throw Error(t(90));At(c),Ir(c,h)}}}break;case"textarea":an(n,a);break;case"select":s=a.value,s!=null&&J(n,!!a.multiple,s,!1)}},Sl=uh,Al=vi;var xE={usingClientEntryPoint:!1,Events:[Ca,co,Jl,rs,ss,uh]},Ba={findFiberByHostInstance:ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TE={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ol(n),n===null?null:n.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||wE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{ti=ju.inject(TE),ln=ju}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE,rn.createPortal=function(n,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vh(s))throw Error(t(200));return _E(n,s,null,a)},rn.createRoot=function(n,s){if(!vh(n))throw Error(t(299));var a=!1,c="",h=Ig;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=mh(n,1,!1,null,null,a,!1,c,h),n[jr]=s.current,ka(n.nodeType===8?n.parentNode:n),new yh(s)},rn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ol(s),n=n===null?null:n.stateNode,n},rn.flushSync=function(n){return vi(n)},rn.hydrate=function(n,s,a){if(!Ou(s))throw Error(t(200));return Vu(null,n,s,!0,a)},rn.hydrateRoot=function(n,s,a){if(!vh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",w=Ig;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=xg(s,null,n,1,a??null,h,!1,m,w),n[jr]=s.current,ka(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new Du(s)},rn.render=function(n,s,a){if(!Ou(s))throw Error(t(200));return Vu(null,n,s,!1,a)},rn.unmountComponentAtNode=function(n){if(!Ou(n))throw Error(t(40));return n._reactRootContainer?(vi(function(){Vu(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1},rn.unstable_batchedUpdates=uh,rn.unstable_renderSubtreeIntoContainer=function(n,s,a,c){if(!Ou(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Vu(n,s,a,!1,c)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var Dg;function RE(){if(Dg)return Eh.exports;Dg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Eh.exports=bE(),Eh.exports}var Og;function PE(){if(Og)return Mu;Og=1;var r=RE();return Mu.createRoot=r.createRoot,Mu.hydrateRoot=r.hydrateRoot,Mu}var DE=PE(),ne=wf();const OE=()=>{};var Vg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let o=r.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},VE=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const o=r[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],d=r[t++],p=r[t++],y=((o&7)<<18|(l&63)<<12|(d&63)<<6|p&63)-65536;e[i++]=String.fromCharCode(55296+(y>>10)),e[i++]=String.fromCharCode(56320+(y&1023))}else{const l=r[t++],d=r[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|d&63)}}return e.join("")},ky={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<r.length;o+=3){const l=r[o],d=o+1<r.length,p=d?r[o+1]:0,y=o+2<r.length,v=y?r[o+2]:0,E=l>>2,T=(l&3)<<4|p>>4;let C=(p&15)<<2|v>>6,L=v&63;y||(L=64,d||(C=64)),i.push(t[E],t[T],t[C],t[L])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Iy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):VE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||p==null||v==null||T==null)throw new jE;const C=l<<2|p>>4;if(i.push(C),v!==64){const L=p<<4&240|v>>2;if(i.push(L),T!==64){const q=v<<6&192|T;i.push(q)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class jE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ME=function(r){const e=Iy(r);return ky.encodeByteArray(e,!0)},tc=function(r){return ME(r).replace(/\./g,"")},Sy=function(r){try{return ky.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>LE().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof Vg>"u")return;const r=Vg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},zE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Sy(r[1]);return e&&JSON.parse(e)},Ic=()=>{try{return OE()||FE()||UE()||zE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ay=r=>Ic()?.emulatorHosts?.[r],BE=r=>{const e=Ay(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Cy=()=>Ic()?.config,Ny=r=>Ic()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function by(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[tc(JSON.stringify(t)),tc(JSON.stringify(d)),""].join(".")}const Ya={};function qE(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ya))Ya[e]?r.emulator.push(e):r.prod.push(e);return r}function WE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let jg=!1;function Ry(r,e){if(typeof window>"u"||typeof document>"u"||!Wo(window.location.host)||Ya[r]===e||Ya[r]||jg)return;Ya[r]=e;function t(C){return`__firebase__banner__${C}`}const i="__firebase__banner",l=qE().prod.length>0;function d(){const C=document.getElementById(i);C&&C.remove()}function p(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function y(C,L){C.setAttribute("width","24"),C.setAttribute("id",L),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function v(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{jg=!0,d()},C}function E(C,L){C.setAttribute("id",L),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function T(){const C=WE(i),L=t("text"),q=document.getElementById(L)||document.createElement("span"),B=t("learnmore"),$=document.getElementById(B)||document.createElement("a"),oe=t("preprendIcon"),de=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const he=C.element;p(he),E($,B);const fe=v();y(de,oe),he.append(de,q,$,fe),document.body.appendChild(he)}l?(q.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function KE(){const r=Ic()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Py(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function YE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XE(){const r=Kt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function JE(){return!KE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dy(){try{return typeof indexedDB=="object"}catch{return!1}}function Oy(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}function ZE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=e1,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],d=l?t1(l,i):"Error",p=`${this.serviceName}: ${d} (${o}).`;return new Gn(o,p,i)}}function t1(r,e){return r.replace(n1,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const n1=/\{\$([^}]+)}/g;function r1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Fs(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=r[o],d=e[o];if(Mg(l)&&Mg(d)){if(!Fs(l,d))return!1}else if(l!==d)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Mg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ha(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function qa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function s1(r,e){const t=new i1(r,e);return t.subscribe.bind(t)}class i1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");o1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ih),o.error===void 0&&(o.error=Ih),o.complete===void 0&&(o.complete=Ih);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o1(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ih(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=1e3,l1=2,u1=14400*1e3,c1=.5;function Lg(r,e=a1,t=l1){const i=e*Math.pow(t,r),o=Math.round(c1*i*(Math.random()-.5)*2);return Math.min(u1,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(r){return r&&r._delegate?r._delegate:r}class qn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new $E;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f1(e))try{this.getOrInitializeService({instanceIdentifier:xi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xi){return this.instances.has(e)}getOptions(e=xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);i===p&&d.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:h1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=xi){return this.component?this.component.multipleInstances?e:xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h1(r){return r===xi?void 0:r}function f1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new d1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const m1={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},g1=Pe.INFO,y1={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},v1=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),o=y1[e];if(o)console[o](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=g1,this._logHandler=v1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const _1=(r,e)=>e.some(t=>r instanceof t);let Fg,Ug;function w1(){return Fg||(Fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function E1(){return Ug||(Ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,zh=new WeakMap,jy=new WeakMap,kh=new WeakMap,Ef=new WeakMap;function x1(r){const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",d)},l=()=>{t(Ds(r.result)),o()},d=()=>{i(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&Vy.set(t,r)}).catch(()=>{}),Ef.set(e,r),e}function T1(r){if(zh.has(r))return;const e=new Promise((t,i)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",d),r.removeEventListener("abort",d)},l=()=>{t(),o()},d=()=>{i(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",d),r.addEventListener("abort",d)});zh.set(r,e)}let Bh={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return zh.get(r);if(e==="objectStoreNames")return r.objectStoreNames||jy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ds(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function I1(r){Bh=r(Bh)}function k1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(Sh(this),e,...t);return jy.set(i,e.sort?e.sort():[e]),Ds(i)}:E1().includes(r)?function(...e){return r.apply(Sh(this),e),Ds(Vy.get(this))}:function(...e){return Ds(r.apply(Sh(this),e))}}function S1(r){return typeof r=="function"?k1(r):(r instanceof IDBTransaction&&T1(r),_1(r,w1())?new Proxy(r,Bh):r)}function Ds(r){if(r instanceof IDBRequest)return x1(r);if(kh.has(r))return kh.get(r);const e=S1(r);return e!==r&&(kh.set(r,e),Ef.set(e,r)),e}const Sh=r=>Ef.get(r);function My(r,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const d=indexedDB.open(r,e),p=Ds(d);return i&&d.addEventListener("upgradeneeded",y=>{i(Ds(d.result),y.oldVersion,y.newVersion,Ds(d.transaction),y)}),t&&d.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),p.then(y=>{l&&y.addEventListener("close",()=>l()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const A1=["get","getKey","getAll","getAllKeys","count"],C1=["put","add","delete","clear"],Ah=new Map;function zg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=C1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||A1.includes(t)))return;const l=async function(d,...p){const y=this.transaction(d,o?"readwrite":"readonly");let v=y.store;return i&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),o&&y.done]))[0]};return Ah.set(e,l),l}I1(r=>({...r,get:(e,t,i)=>zg(e,t)||r.get(e,t,i),has:(e,t)=>!!zg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(b1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function b1(r){return r.getComponent()?.type==="VERSION"}const $h="@firebase/app",Bg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new kc("@firebase/app"),R1="@firebase/app-compat",P1="@firebase/analytics-compat",D1="@firebase/analytics",O1="@firebase/app-check-compat",V1="@firebase/app-check",j1="@firebase/auth",M1="@firebase/auth-compat",L1="@firebase/database",F1="@firebase/data-connect",U1="@firebase/database-compat",z1="@firebase/functions",B1="@firebase/functions-compat",$1="@firebase/installations",H1="@firebase/installations-compat",q1="@firebase/messaging",W1="@firebase/messaging-compat",G1="@firebase/performance",K1="@firebase/performance-compat",Q1="@firebase/remote-config",Y1="@firebase/remote-config-compat",X1="@firebase/storage",J1="@firebase/storage-compat",Z1="@firebase/firestore",ex="@firebase/ai",tx="@firebase/firestore-compat",nx="firebase",rx="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="[DEFAULT]",sx={[$h]:"fire-core",[R1]:"fire-core-compat",[D1]:"fire-analytics",[P1]:"fire-analytics-compat",[V1]:"fire-app-check",[O1]:"fire-app-check-compat",[j1]:"fire-auth",[M1]:"fire-auth-compat",[L1]:"fire-rtdb",[F1]:"fire-data-connect",[U1]:"fire-rtdb-compat",[z1]:"fire-fn",[B1]:"fire-fn-compat",[$1]:"fire-iid",[H1]:"fire-iid-compat",[q1]:"fire-fcm",[W1]:"fire-fcm-compat",[G1]:"fire-perf",[K1]:"fire-perf-compat",[Q1]:"fire-rc",[Y1]:"fire-rc-compat",[X1]:"fire-gcs",[J1]:"fire-gcs-compat",[Z1]:"fire-fst",[tx]:"fire-fst-compat",[ex]:"fire-vertex","fire-js":"fire-js",[nx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Map,ix=new Map,qh=new Map;function $g(r,e){try{r.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Er(r){const e=r.name;if(qh.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,r);for(const t of nc.values())$g(t,r);for(const t of ix.values())$g(t,r);return!0}function Vi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function $n(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Os=new Oi("app","Firebase",ox);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Os.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=rx;function Ly(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i={name:Hh,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Os.create("bad-app-name",{appName:String(o)});if(t||(t=Cy()),!t)throw Os.create("no-options");const l=nc.get(o);if(l){if(Fs(t,l.options)&&Fs(i,l.config))return l;throw Os.create("duplicate-app",{appName:o})}const d=new p1(o);for(const y of qh.values())d.addComponent(y);const p=new ax(t,i,d);return nc.set(o,p),p}function xf(r=Hh){const e=nc.get(r);if(!e&&r===Hh&&Cy())return Ly();if(!e)throw Os.create("no-app",{appName:r});return e}function bn(r,e,t){let i=sx[r]??r;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const d=[`Unable to register library "${i}" with version "${e}":`];o&&d.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&d.push("and"),l&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(d.join(" "));return}Er(new qn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="firebase-heartbeat-database",ux=1,nl="firebase-heartbeat-store";let Ch=null;function Fy(){return Ch||(Ch=My(lx,ux,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(nl)}catch(t){console.warn(t)}}}}).catch(r=>{throw Os.create("idb-open",{originalErrorMessage:r.message})})),Ch}async function cx(r){try{const t=(await Fy()).transaction(nl),i=await t.objectStore(nl).get(Uy(r));return await t.done,i}catch(e){if(e instanceof Gn)Wr.warn(e.message);else{const t=Os.create("idb-get",{originalErrorMessage:e?.message});Wr.warn(t.message)}}}async function Hg(r,e){try{const i=(await Fy()).transaction(nl,"readwrite");await i.objectStore(nl).put(e,Uy(r)),await i.done}catch(t){if(t instanceof Gn)Wr.warn(t.message);else{const i=Os.create("idb-set",{originalErrorMessage:t?.message});Wr.warn(i.message)}}}function Uy(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=1024,hx=30;class fx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mx(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>hx){const o=gx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Wr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qg(),{heartbeatsToSend:t,unsentEntries:i}=px(this._heartbeatsCache.heartbeats),o=tc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Wr.warn(e),""}}}function qg(){return new Date().toISOString().substring(0,10)}function px(r,e=dx){const t=[];let i=r.slice();for(const o of r){const l=t.find(d=>d.agent===o.agent);if(l){if(l.dates.push(o.date),Wg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Wg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class mx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dy()?Oy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cx(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wg(r){return tc(JSON.stringify({version:2,heartbeats:r})).length}function gx(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let i=1;i<r.length;i++)r[i].date<t&&(t=r[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(r){Er(new qn("platform-logger",e=>new N1(e),"PRIVATE")),Er(new qn("heartbeat",e=>new fx(e),"PRIVATE")),bn($h,Bg,r),bn($h,Bg,"esm2020"),bn("fire-js","")}yx("");function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vx=zy,By=new Oi("auth","Firebase",zy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new kc("@firebase/auth");function _x(r,...e){rc.logLevel<=Pe.WARN&&rc.warn(`Auth (${Go}): ${r}`,...e)}function qu(r,...e){rc.logLevel<=Pe.ERROR&&rc.error(`Auth (${Go}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(r,...e){throw Tf(r,...e)}function pr(r,...e){return Tf(r,...e)}function $y(r,e,t){const i={...vx(),[e]:t};return new Oi("auth","Firebase",i).create(e,{appName:r.name})}function Vs(r){return $y(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tf(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return By.create(r,...e)}function Ee(r,e,...t){if(!r)throw Tf(e,...t)}function Hr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw qu(e),new Error(e)}function Gr(r,e){r||Hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(){return typeof self<"u"&&self.location?.href||""}function wx(){return Gg()==="http:"||Gg()==="https:"}function Gg(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wx()||Py()||"connection"in navigator)?navigator.onLine:!0}function xx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gr(t>e,"Short delay should be less than long delay!"),this.isMobile=GE()||YE()}get(){return Ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(r,e){Gr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kx=new gl(3e4,6e4);function ji(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Ws(r,e,t,i,o={}){return qy(r,o,async()=>{let l={},d={};i&&(e==="GET"?d=i:l={body:JSON.stringify(i)});const p=ml({key:r.config.apiKey,...d}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const v={method:e,headers:y,...l};return QE()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Wo(r.emulatorConfig.host)&&(v.credentials="include"),Hy.fetch()(await Wy(r,r.config.apiHost,t,p),v)})}async function qy(r,e,t){r._canInitEmulator=!1;const i={...Tx,...e};try{const o=new Ax(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const d=await l.json();if("needConfirmation"in d)throw Lu(r,"account-exists-with-different-credential",d);if(l.ok&&!("errorMessage"in d))return d;{const p=l.ok?d.errorMessage:d.error.message,[y,v]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(r,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Lu(r,"email-already-in-use",d);if(y==="USER_DISABLED")throw Lu(r,"user-disabled",d);const E=i[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw $y(r,E,v);Wn(r,E)}}catch(o){if(o instanceof Gn)throw o;Wn(r,"network-request-failed",{message:String(o)})}}async function Sc(r,e,t,i,o={}){const l=await Ws(r,e,t,i,o);return"mfaPendingCredential"in l&&Wn(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Wy(r,e,t,i){const o=`${e}${t}?${i}`,l=r,d=l.config.emulator?If(r.config,o):`${r.config.apiScheme}://${o}`;return Ix.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(d).toString():d}function Sx(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pr(this.auth,"network-request-failed")),kx.get())})}}function Lu(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=pr(r,e,i);return o.customData._tokenResponse=t,o}function Kg(r){return r!==void 0&&r.enterprise!==void 0}class Cx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Sx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Nx(r,e){return Ws(r,"GET","/v2/recaptchaConfig",ji(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(r,e){return Ws(r,"POST","/v1/accounts:delete",e)}async function sc(r,e){return Ws(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rx(r,e=!1){const t=gt(r),i=await t.getIdToken(e),o=kf(i);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,d=l?.sign_in_provider;return{claims:o,token:i,authTime:Xa(Nh(o.auth_time)),issuedAtTime:Xa(Nh(o.iat)),expirationTime:Xa(Nh(o.exp)),signInProvider:d||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Nh(r){return Number(r)*1e3}function kf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Sy(t);return o?JSON.parse(o):(qu("Failed to decode base64 JWT payload"),null)}catch(o){return qu("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Qg(r){const e=kf(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&Px(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function Px({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(r){const e=r.auth,t=await r.getIdToken(),i=await rl(r,sc(e,{idToken:t}));Ee(i?.users.length,e,"internal-error");const o=i.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?Gy(o.providerUserInfo):[],d=Vx(r.providerData,l),p=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!d?.length,v=p?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Gh(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(r,E)}async function Ox(r){const e=gt(r);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vx(r,e){return[...r.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Gy(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(r,e){const t=await qy(r,{},async()=>{const i=ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,d=await Wy(r,o,"/v1/token",`key=${l}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:p,body:i};return r.emulatorConfig&&Wo(r.emulatorConfig.host)&&(y.credentials="include"),Hy.fetch()(d,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mx(r,e){return Ws(r,"POST","/v2/accounts:revokeToken",ji(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Qg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await jx(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,d=new Ro;return i&&(Ee(typeof i=="string","internal-error",{appName:e}),d.refreshToken=i),o&&(Ee(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),d.expirationTime=l),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return Hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new Dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await rl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rx(this,e)}reload(){return Ox(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ic(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($n(this.auth.app))return Promise.reject(Vs(this.auth));const e=await this.getIdToken();return await rl(this,bx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,d=t.photoURL??void 0,p=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:T,emailVerified:C,isAnonymous:L,providerData:q,stsTokenManager:B}=t;Ee(T&&B,e,"internal-error");const $=Ro.fromJSON(this.name,B);Ee(typeof T=="string",e,"internal-error"),As(i,e.name),As(o,e.name),Ee(typeof C=="boolean",e,"internal-error"),Ee(typeof L=="boolean",e,"internal-error"),As(l,e.name),As(d,e.name),As(p,e.name),As(y,e.name),As(v,e.name),As(E,e.name);const oe=new Hn({uid:T,auth:e,email:o,emailVerified:C,displayName:i,isAnonymous:L,photoURL:d,phoneNumber:l,tenantId:p,stsTokenManager:$,createdAt:v,lastLoginAt:E});return q&&Array.isArray(q)&&(oe.providerData=q.map(de=>({...de}))),y&&(oe._redirectEventId=y),oe}static async _fromIdTokenResponse(e,t,i=!1){const o=new Ro;o.updateFromServerResponse(t);const l=new Hn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await ic(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Gy(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!l?.length,p=new Ro;p.updateFromIdToken(i);const y=new Hn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:d}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Gh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map;function qr(r){Gr(r instanceof Function,"Expected a class definition");let e=Yg.get(r);return e?(Gr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Yg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ky.type="NONE";const Xg=Ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(r,e,t){return`firebase:${r}:${e}:${t}`}class Po{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Wu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Wu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sc(this.auth,{idToken:e}).catch(()=>{});return t?Hn._fromGetAccountInfoResponse(this.auth,t,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Po(qr(Xg),e,i);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||qr(Xg);const d=Wu(i,e.config.apiKey,e.name);let p=null;for(const v of t)try{const E=await v._get(d);if(E){let T;if(typeof E=="string"){const C=await sc(e,{idToken:E}).catch(()=>{});if(!C)break;T=await Hn._fromGetAccountInfoResponse(e,C,E)}else T=Hn._fromJSON(e,E);v!==l&&(p=T),l=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!y.length?new Po(l,e,i):(l=y[0],p&&await l._set(d,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(d)}catch{}})),new Po(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(Yy(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(Zy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function Qy(r=Kt()){return/firefox\//i.test(r)}function Yy(r=Kt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(r=Kt()){return/crios\//i.test(r)}function Jy(r=Kt()){return/iemobile/i.test(r)}function Zy(r=Kt()){return/android/i.test(r)}function ev(r=Kt()){return/blackberry/i.test(r)}function tv(r=Kt()){return/webos/i.test(r)}function Sf(r=Kt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Lx(r=Kt()){return Sf(r)&&!!window.navigator?.standalone}function Fx(){return XE()&&document.documentMode===10}function nv(r=Kt()){return Sf(r)||Zy(r)||tv(r)||ev(r)||/windows phone/i.test(r)||Jy(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(r,e=[]){let t;switch(r){case"Browser":t=Jg(Kt());break;case"Worker":t=`${Jg(Kt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Go}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((d,p)=>{try{const y=e(l);d(y)}catch(y){p(y)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx(r,e={}){return Ws(r,"GET","/v2/passwordPolicy",ji(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=6;class $x{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Bx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new Ux(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sc(this,{idToken:e}),i=await Hn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if($n(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(d,d))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,d=i?._redirectEventId,p=await this.tryRedirectSignIn(e);(!l||l===d)&&p?.user&&(i=p.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($n(this.app))return Promise.reject(Vs(this));const t=e?gt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $n(this.app)?Promise.reject(Vs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $n(this.app)?Promise.reject(Vs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zx(this),t=new $x(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Mx(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[qr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(p,this,"internal-error"),p.then(()=>{d||l(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,i,o);return()=>{d=!0,y()}}else{const y=e.addObserver(t);return()=>{d=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if($n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&_x(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ko(r){return gt(r)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=s1(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qx(r){Ac=r}function sv(r){return Ac.loadJS(r)}function Wx(){return Ac.recaptchaEnterpriseScript}function Gx(){return Ac.gapiScript}function Kx(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Qx{constructor(){this.enterprise=new Yx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Yx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Xx="recaptcha-enterprise",iv="NO_RECAPTCHA";class Jx{constructor(e){this.type=Xx,this.auth=Ko(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(d,p)=>{Nx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new Cx(y);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,d(v.siteKey)}}).catch(y=>{p(y)})})}function o(l,d,p){const y=window.grecaptcha;Kg(y)?y.enterprise.ready(()=>{y.enterprise.execute(l,{action:e}).then(v=>{d(v)}).catch(()=>{d(iv)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qx().execute("siteKey",{action:"verify"}):new Promise((l,d)=>{i(this.auth).then(p=>{if(!t&&Kg(window.grecaptcha))o(p,l,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let y=Wx();y.length!==0&&(y+=p),sv(y).then(()=>{o(p,l,d)}).catch(v=>{d(v)})}}).catch(p=>{d(p)})})}}async function e0(r,e,t,i=!1,o=!1){const l=new Jx(r);let d;if(o)d=iv;else try{d=await l.verify(t)}catch{d=await l.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const y=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const y=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return i?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function t0(r,e,t,i,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await e0(r,e,t,t==="getOobCode");return i(r,l)}else return i(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await e0(r,e,t,t==="getOobCode");return i(r,d)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(r,e){const t=Vi(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Fs(l,e??{}))return o;Wn(o,"already-initialized")}return t.initialize({options:e})}function eT(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(qr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function tT(r,e,t){const i=Ko(r);Ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=ov(e),{host:d,port:p}=nT(e),y=p===null?"":`:${p}`,v={url:`${l}//${d}${y}/`},E=Object.freeze({host:d,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Ee(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Ee(Fs(v,i.config.emulator)&&Fs(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=v,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,Wo(d)?(by(`${l}//${d}${y}`),Ry("Auth",!0)):rT()}function ov(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function nT(r){const e=ov(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:n0(i.substr(l.length+1))}}else{const[l,d]=i.split(":");return{host:l,port:n0(d)}}}function n0(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hr("not implemented")}_getIdTokenResponse(e){return Hr("not implemented")}_linkToIdToken(e,t){return Hr("not implemented")}_getReauthenticationResolver(e){return Hr("not implemented")}}async function sT(r,e){return Ws(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(r,e){return Sc(r,"POST","/v1/accounts:signInWithPassword",ji(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(r,e){return Sc(r,"POST","/v1/accounts:signInWithEmailLink",ji(r,e))}async function aT(r,e){return Sc(r,"POST","/v1/accounts:signInWithEmailLink",ji(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Af{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new sl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new sl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return t0(e,t,"signInWithPassword",iT);case"emailLink":return oT(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return t0(e,i,"signUpPassword",sT);case"emailLink":return aT(e,{idToken:t,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(r,e){return Sc(r,"POST","/v1/accounts:signInWithIdp",ji(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="http://localhost";class Ai extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const d=new Ai(i,o);return d.idToken=l.idToken||void 0,d.accessToken=l.accessToken||void 0,d.secret=l.secret,d.nonce=l.nonce,d.pendingToken=l.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return Do(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Do(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Do(e,t)}buildRequest(){const e={requestUri:lT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ml(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cT(r){const e=Ha(qa(r)).link,t=e?Ha(qa(e)).deep_link_id:null,i=Ha(qa(r)).deep_link_id;return(i?Ha(qa(i)).link:null)||i||t||e||r}class Cf{constructor(e){const t=Ha(qa(e)),i=t.apiKey??null,o=t.oobCode??null,l=uT(t.mode??null);Ee(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=cT(e);try{return new Cf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.providerId=Qo.PROVIDER_ID}static credential(e,t){return sl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Cf.parseLink(t);return Ee(i,"argument-error"),sl._fromEmailAndCode(e,i.code,i.tenantId)}}Qo.PROVIDER_ID="password";Qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends av{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends yl{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}}Cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ai._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ns.credential(t,i)}catch{return null}}}Ns.GOOGLE_SIGN_IN_METHOD="google.com";Ns.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends yl{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bs.credential(e.oauthAccessToken)}catch{return null}}}bs.GITHUB_SIGN_IN_METHOD="github.com";bs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends yl{constructor(){super("twitter.com")}static credential(e,t){return Ai._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Rs.credential(t,i)}catch{return null}}}Rs.TWITTER_SIGN_IN_METHOD="twitter.com";Rs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Hn._fromIdTokenResponse(e,i,o),d=r0(i);return new Lo({user:l,providerId:d,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=r0(i);return new Lo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function r0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends Gn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new oc(e,t,i,o)}}function lv(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(r,l,e,i):l})}async function dT(r,e,t=!1){const i=await rl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Lo._forOperation(r,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(r,e,t=!1){const{auth:i}=r;if($n(i.app))return Promise.reject(Vs(i));const o="reauthenticate";try{const l=await rl(r,lv(i,o,e,r),t);Ee(l.idToken,i,"internal-error");const d=kf(l.idToken);Ee(d,i,"internal-error");const{sub:p}=d;return Ee(r.uid===p,i,"user-mismatch"),Lo._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Wn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(r,e,t=!1){if($n(r.app))return Promise.reject(Vs(r));const i="signIn",o=await lv(r,i,e),l=await Lo._fromIdTokenResponse(r,i,o);return t||await r._updateCurrentUser(l.user),l}async function fT(r,e){return uv(Ko(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(r){const e=Ko(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function mT(r,e,t){return $n(r.app)?Promise.reject(Vs(r)):fT(gt(r),Qo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&pT(r),i})}function gT(r,e,t,i){return gt(r).onIdTokenChanged(e,t,i)}function yT(r,e,t){return gt(r).beforeAuthStateChanged(e,t)}function vT(r,e,t,i){return gt(r).onAuthStateChanged(e,t,i)}function _T(r){return gt(r).signOut()}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=1e3,ET=10;class dv extends cv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,p,y)=>{this.notifyListeners(d,y)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(i);!t&&this.localCache[i]===d||this.notifyListeners(i,d)},l=this.storage.getItem(i);Fx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ET):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},wT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dv.type="LOCAL";const xT=dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends cv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hv.type="SESSION";const fv=hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Cc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,d=this.handlersMap[o];if(!d?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const p=Array.from(d).map(async v=>v(t.origin,l)),y=await TT(p);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,d;return new Promise((p,y)=>{const v=Nf("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},i);d={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(C.data.response);break;default:clearTimeout(E),clearTimeout(l),y(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return window}function kT(r){mr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){return typeof mr().WorkerGlobalScope<"u"&&typeof mr().importScripts=="function"}async function ST(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AT(){return navigator?.serviceWorker?.controller||null}function CT(){return pv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="firebaseLocalStorageDb",NT=1,lc="firebaseLocalStorage",gv="fbase_key";class vl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nc(r,e){return r.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function bT(){const r=indexedDB.deleteDatabase(mv);return new vl(r).toPromise()}function Kh(){const r=indexedDB.open(mv,NT);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(lc,{keyPath:gv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(lc)?e(i):(i.close(),await bT(),e(await Kh()))})})}async function s0(r,e,t){const i=Nc(r,!0).put({[gv]:e,value:t});return new vl(i).toPromise()}async function RT(r,e){const t=Nc(r,!1).get(e),i=await new vl(t).toPromise();return i===void 0?null:i.value}function i0(r,e){const t=Nc(r,!0).delete(e);return new vl(t).toPromise()}const PT=800,DT=3;class yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>DT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(CT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ST(),!this.activeServiceWorker)return;this.sender=new IT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kh();return await s0(e,ac,"1"),await i0(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>s0(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>RT(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>i0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Nc(o,!1).getAll();return new vl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yv.type="LOCAL";const OT=yv;new gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(r,e){return e?qr(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Do(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jT(r){return uv(r.auth,new bf(r),r.bypassAuthState)}function MT(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),hT(t,new bf(r),r.bypassAuthState)}async function LT(r){const{auth:e,user:t}=r;return Ee(t,e,"internal-error"),dT(t,new bf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:d,type:p}=e;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jT;case"linkViaPopup":case"linkViaRedirect":return LT;case"reauthViaPopup":case"reauthViaRedirect":return MT;default:Wn(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new gl(2e3,1e4);class bo extends vv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,bo.currentPopupAction&&bo.currentPopupAction.cancel(),bo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(pr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FT.get())};e()}}bo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="pendingRedirect",Gu=new Map;class zT extends vv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Gu.get(this.auth._key());if(!e){try{const i=await BT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Gu.set(this.auth._key(),e)}return this.bypassAuthState||Gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BT(r,e){const t=qT(e),i=HT(r);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function $T(r,e){Gu.set(r._key(),e)}function HT(r){return qr(r._redirectPersistence)}function qT(r){return Wu(UT,r.config.apiKey,r.name)}async function WT(r,e,t=!1){if($n(r.app))return Promise.reject(Vs(r));const i=Ko(r),o=VT(i,e),d=await new zT(i,o,t).execute();return d&&!t&&(delete d.user._redirectEventId,await i._persistUserIfCurrent(d.user),await i._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=600*1e3;class KT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!_v(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(pr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GT&&this.cachedEventUids.clear(),this.cachedEventUids.has(o0(e))}saveEventToCache(e){this.cachedEventUids.add(o0(e)),this.lastProcessedEventTime=Date.now()}}function o0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function _v({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function QT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(r,e={}){return Ws(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JT=/^https?/;async function ZT(r){if(r.config.emulator)return;const{authorizedDomains:e}=await YT(r);for(const t of e)try{if(eI(t))return}catch{}Wn(r,"unauthorized-domain")}function eI(r){const e=Wh(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===i}if(!JT.test(t))return!1;if(XT.test(r))return i===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=new gl(3e4,6e4);function a0(){const r=mr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function nI(r){return new Promise((e,t)=>{function i(){a0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{a0(),t(pr(r,"network-request-failed"))},timeout:tI.get()})}if(mr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(mr().gapi?.load)i();else{const o=Kx("iframefcb");return mr()[o]=()=>{gapi.load?i():t(pr(r,"network-request-failed"))},sv(`${Gx()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Ku=null,e})}let Ku=null;function rI(r){return Ku=Ku||nI(r),Ku}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new gl(5e3,15e3),iI="__/auth/iframe",oI="emulator/auth/iframe",aI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uI(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?If(e,oI):`https://${r.config.authDomain}/${iI}`,i={apiKey:e.apiKey,appName:r.name,v:Go},o=lI.get(r.config.apiHost);o&&(i.eid=o);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${ml(i).slice(1)}`}async function cI(r){const e=await rI(r),t=mr().gapi;return Ee(t,r,"internal-error"),e.open({where:document.body,url:uI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aI,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const d=pr(r,"network-request-failed"),p=mr().setTimeout(()=>{l(d)},sI.get());function y(){mr().clearTimeout(p),o(i)}i.ping(y).then(y,()=>{l(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hI=500,fI=600,pI="_blank",mI="http://localhost";class l0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gI(r,e,t,i=hI,o=fI){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-i)/2,0).toString();let p="";const y={...dI,width:i.toString(),height:o.toString(),top:l,left:d},v=Kt().toLowerCase();t&&(p=Xy(v)?pI:t),Qy(v)&&(e=e||mI,y.scrollbars="yes");const E=Object.entries(y).reduce((C,[L,q])=>`${C}${L}=${q},`,"");if(Lx(v)&&p!=="_self")return yI(e||"",p),new l0(null);const T=window.open(e||"",p,E);Ee(T,r,"popup-blocked");try{T.focus()}catch{}return new l0(T)}function yI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="__/auth/handler",_I="emulator/auth/handler",wI=encodeURIComponent("fac");async function u0(r,e,t,i,o,l){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Go,eventId:o};if(e instanceof av){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",r1(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))d[E]=T}if(e instanceof yl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(d.scopes=E.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const y=await r._getAppCheckToken(),v=y?`#${wI}=${encodeURIComponent(y)}`:"";return`${EI(r)}?${ml(p).slice(1)}${v}`}function EI({config:r}){return r.emulator?If(r,_I):`https://${r.authDomain}/${vI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="webStorageSupport";class xI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fv,this._completeRedirectFn=WT,this._overrideRedirectResult=$T}async _openPopup(e,t,i,o){Gr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await u0(e,t,i,Wh(),o);return gI(e,l,Nf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await u0(e,t,i,Wh(),o);return kT(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Gr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await cI(e),i=new KT(e);return t.register("authEvent",o=>(Ee(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bh,{type:bh},o=>{const l=o?.[0]?.[bh];l!==void 0&&t(!!l),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nv()||Yy()||Sf()}}const TI=xI;var c0="@firebase/auth",d0="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SI(r){Er(new qn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=i.options;Ee(d&&!d.includes(":"),"invalid-api-key",{appName:i.name});const y={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(r)},v=new Hx(i,o,l,y);return eT(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Er(new qn("auth-internal",e=>{const t=Ko(e.getProvider("auth").getImmediate());return(i=>new II(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(c0,d0,kI(r)),bn(c0,d0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=300,CI=Ny("authIdTokenMaxAge")||AI;let h0=null;const NI=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>CI)return;const o=t?.token;h0!==o&&(h0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bI(r=xf()){const e=Vi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Zx(r,{popupRedirectResolver:TI,persistence:[OT,xT,fv]}),i=Ny("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const d=NI(l.toString());yT(t,d,()=>d(t.currentUser)),gT(t,p=>d(p))}}const o=Ay("auth");return o&&tT(t,`http://${o}`),t}function RI(){return document.getElementsByTagName("head")?.[0]??document}qx({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=o=>{const l=pr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",RI().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SI("Browser");var PI="firebase",DI="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(PI,DI,"app");const wv="@firebase/installations",Rf="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=1e4,xv=`w:${Rf}`,Tv="FIS_v2",OI="https://firebaseinstallations.googleapis.com/v1",VI=3600*1e3,jI="installations",MI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ci=new Oi(jI,MI,LI);function Iv(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv({projectId:r}){return`${OI}/projects/${r}/installations`}function Sv(r){return{token:r.token,requestStatus:2,expiresIn:UI(r.expiresIn),creationTime:Date.now()}}async function Av(r,e){const i=(await e.json()).error;return Ci.create("request-failed",{requestName:r,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Cv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function FI(r,{refreshToken:e}){const t=Cv(r);return t.append("Authorization",zI(e)),t}async function Nv(r){const e=await r();return e.status>=500&&e.status<600?r():e}function UI(r){return Number(r.replace("s","000"))}function zI(r){return`${Tv} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const i=kv(r),o=Cv(r),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const d={fid:t,authVersion:Tv,appId:r.appId,sdkVersion:xv},p={method:"POST",headers:o,body:JSON.stringify(d)},y=await Nv(()=>fetch(i,p));if(y.ok){const v=await y.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:Sv(v.authToken)}}else throw await Av("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=/^[cdef][\w-]{21}$/,Qh="";function qI(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=WI(r);return HI.test(t)?t:Qh}catch{return Qh}}function WI(r){return $I(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new Map;function Pv(r,e){const t=bc(r);Dv(t,e),GI(t,e)}function Dv(r,e){const t=Rv.get(r);if(t)for(const i of t)i(e)}function GI(r,e){const t=KI();t&&t.postMessage({key:r,fid:e}),QI()}let Ti=null;function KI(){return!Ti&&"BroadcastChannel"in self&&(Ti=new BroadcastChannel("[Firebase] FID Change"),Ti.onmessage=r=>{Dv(r.data.key,r.data.fid)}),Ti}function QI(){Rv.size===0&&Ti&&(Ti.close(),Ti=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="firebase-installations-database",XI=1,Ni="firebase-installations-store";let Rh=null;function Pf(){return Rh||(Rh=My(YI,XI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ni)}}})),Rh}async function uc(r,e){const t=bc(r),o=(await Pf()).transaction(Ni,"readwrite"),l=o.objectStore(Ni),d=await l.get(t);return await l.put(e,t),await o.done,(!d||d.fid!==e.fid)&&Pv(r,e.fid),e}async function Ov(r){const e=bc(r),i=(await Pf()).transaction(Ni,"readwrite");await i.objectStore(Ni).delete(e),await i.done}async function Rc(r,e){const t=bc(r),o=(await Pf()).transaction(Ni,"readwrite"),l=o.objectStore(Ni),d=await l.get(t),p=e(d);return p===void 0?await l.delete(t):await l.put(p,t),await o.done,p&&(!d||d.fid!==p.fid)&&Pv(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(r){let e;const t=await Rc(r.appConfig,i=>{const o=JI(i),l=ZI(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Qh?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function JI(r){const e=r||{fid:qI(),registrationStatus:0};return Vv(e)}function ZI(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ci.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ek(r,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tk(r)}:{installationEntry:e}}async function ek(r,e){try{const t=await BI(r,e);return uc(r.appConfig,t)}catch(t){throw Iv(t)&&t.customData.serverCode===409?await Ov(r.appConfig):await uc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function tk(r){let e=await f0(r.appConfig);for(;e.registrationStatus===1;)await bv(100),e=await f0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Df(r);return i||t}return e}function f0(r){return Rc(r,e=>{if(!e)throw Ci.create("installation-not-found");return Vv(e)})}function Vv(r){return nk(r)?{fid:r.fid,registrationStatus:0}:r}function nk(r){return r.registrationStatus===1&&r.registrationTime+Ev<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk({appConfig:r,heartbeatServiceProvider:e},t){const i=sk(r,t),o=FI(r,t),l=e.getImmediate({optional:!0});if(l){const v=await l.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const d={installation:{sdkVersion:xv,appId:r.appId}},p={method:"POST",headers:o,body:JSON.stringify(d)},y=await Nv(()=>fetch(i,p));if(y.ok){const v=await y.json();return Sv(v)}else throw await Av("Generate Auth Token",y)}function sk(r,{fid:e}){return`${kv(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Of(r,e=!1){let t;const i=await Rc(r.appConfig,l=>{if(!jv(l))throw Ci.create("not-registered");const d=l.authToken;if(!e&&ak(d))return l;if(d.requestStatus===1)return t=ik(r,e),l;{if(!navigator.onLine)throw Ci.create("app-offline");const p=uk(l);return t=ok(r,p),p}});return t?await t:i.authToken}async function ik(r,e){let t=await p0(r.appConfig);for(;t.authToken.requestStatus===1;)await bv(100),t=await p0(r.appConfig);const i=t.authToken;return i.requestStatus===0?Of(r,e):i}function p0(r){return Rc(r,e=>{if(!jv(e))throw Ci.create("not-registered");const t=e.authToken;return ck(t)?{...e,authToken:{requestStatus:0}}:e})}async function ok(r,e){try{const t=await rk(r,e),i={...e,authToken:t};return await uc(r.appConfig,i),t}catch(t){if(Iv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ov(r.appConfig);else{const i={...e,authToken:{requestStatus:0}};await uc(r.appConfig,i)}throw t}}function jv(r){return r!==void 0&&r.registrationStatus===2}function ak(r){return r.requestStatus===2&&!lk(r)}function lk(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+VI}function uk(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function ck(r){return r.requestStatus===1&&r.requestTime+Ev<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(r){const e=r,{installationEntry:t,registrationPromise:i}=await Df(e);return i?i.catch(console.error):Of(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(r,e=!1){const t=r;return await fk(t),(await Of(t,e)).token}async function fk(r){const{registrationPromise:e}=await Df(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(r){if(!r||!r.options)throw Ph("App Configuration");if(!r.name)throw Ph("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Ph(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Ph(r){return Ci.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="installations",mk="installations-internal",gk=r=>{const e=r.getProvider("app").getImmediate(),t=pk(e),i=Vi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},yk=r=>{const e=r.getProvider("app").getImmediate(),t=Vi(e,Mv).getImmediate();return{getId:()=>dk(t),getToken:o=>hk(t,o)}};function vk(){Er(new qn(Mv,gk,"PUBLIC")),Er(new qn(mk,yk,"PRIVATE"))}vk();bn(wv,Rf);bn(wv,Rf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="analytics",_k="firebase_id",wk="origin",Ek=60*1e3,xk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new kc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vn=new Oi("analytics","Analytics",Tk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(r){if(!r.startsWith(Vf)){const e=vn.create("invalid-gtag-resource",{gtagURL:r});return Xt.warn(e.message),""}return r}function Lv(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function kk(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function Sk(r,e){const t=kk("firebase-js-sdk-policy",{createScriptURL:Ik}),i=document.createElement("script"),o=`${Vf}?l=${r}&id=${e}`;i.src=t?t?.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function Ak(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function Ck(r,e,t,i,o,l){const d=i[o];try{if(d)await e[d];else{const y=(await Lv(t)).find(v=>v.measurementId===o);y&&await e[y.appId]}}catch(p){Xt.error(p)}r("config",o,l)}async function Nk(r,e,t,i,o){try{let l=[];if(o&&o.send_to){let d=o.send_to;Array.isArray(d)||(d=[d]);const p=await Lv(t);for(const y of d){const v=p.find(T=>T.measurementId===y),E=v&&e[v.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",i,o||{})}catch(l){Xt.error(l)}}function bk(r,e,t,i){async function o(l,...d){try{if(l==="event"){const[p,y]=d;await Nk(r,e,t,p,y)}else if(l==="config"){const[p,y]=d;await Ck(r,e,t,i,p,y)}else if(l==="consent"){const[p,y]=d;r("consent",p,y)}else if(l==="get"){const[p,y,v]=d;r("get",p,y,v)}else if(l==="set"){const[p]=d;r("set",p)}else r(l,...d)}catch(p){Xt.error(p)}}return o}function Rk(r,e,t,i,o){let l=function(...d){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=bk(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function Pk(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Vf)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=30,Ok=1e3;class Vk{constructor(e={},t=Ok){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fv=new Vk;function jk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function Mk(r){const{appId:e,apiKey:t}=r,i={method:"GET",headers:jk(t)},o=xk.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let d="";try{const p=await l.json();p.error?.message&&(d=p.error.message)}catch{}throw vn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:d})}return l.json()}async function Lk(r,e=Fv,t){const{appId:i,apiKey:o,measurementId:l}=r.options;if(!i)throw vn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw vn.create("no-api-key")}const d=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new zk;return setTimeout(async()=>{p.abort()},Ek),Uv({appId:i,apiKey:o,measurementId:l},d,p,e)}async function Uv(r,{throttleEndTimeMillis:e,backoffCount:t},i,o=Fv){const{appId:l,measurementId:d}=r;try{await Fk(i,e)}catch(p){if(d)return Xt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:l,measurementId:d};throw p}try{const p=await Mk(r);return o.deleteThrottleMetadata(l),p}catch(p){const y=p;if(!Uk(y)){if(o.deleteThrottleMetadata(l),d)return Xt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:l,measurementId:d};throw p}const v=Number(y?.customData?.httpStatus)===503?Lg(t,o.intervalMillis,Dk):Lg(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return o.setThrottleMetadata(l,E),Xt.debug(`Calling attemptFetch again in ${v} millis`),Uv(r,E,i,o)}}function Fk(r,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),i(vn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Uk(r){if(!(r instanceof Gn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class zk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Bk(r,e,t,i,o){if(o&&o.global){r("event",t,i);return}else{const l=await e,d={...i,send_to:l};r("event",t,d)}}async function $k(r,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return r("set",o),Promise.resolve()}else{const o=await e;r("config",o,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(){if(Dy())try{await Oy()}catch(r){return Xt.warn(vn.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return Xt.warn(vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qk(r,e,t,i,o,l,d){const p=Lk(r);p.then(C=>{t[C.measurementId]=C.appId,r.options.measurementId&&C.measurementId!==r.options.measurementId&&Xt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Xt.error(C)),e.push(p);const y=Hk().then(C=>{if(C)return i.getId()}),[v,E]=await Promise.all([p,y]);Pk(l)||Sk(l,v.measurementId),o("js",new Date);const T=d?.config??{};return T[wk]="firebase",T.update=!0,E!=null&&(T[_k]=E),o("config",v.measurementId,T),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.app=e}_delete(){return delete Oo[this.app.options.appId],Promise.resolve()}}let Oo={},m0=[];const g0={};let Dh="dataLayer",Gk="gtag",y0,jf,v0=!1;function Kk(){const r=[];if(Py()&&r.push("This is a browser extension environment."),ZE()||r.push("Cookies are not available."),r.length>0){const e=r.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=vn.create("invalid-analytics-context",{errorInfo:e});Xt.warn(t.message)}}function Qk(r,e,t){Kk();const i=r.options.appId;if(!i)throw vn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Xt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vn.create("no-api-key");if(Oo[i]!=null)throw vn.create("already-exists",{id:i});if(!v0){Ak(Dh);const{wrappedGtag:l,gtagCore:d}=Rk(Oo,m0,g0,Dh,Gk);jf=l,y0=d,v0=!0}return Oo[i]=qk(r,m0,g0,e,y0,Dh,t),new Wk(r)}function Yk(r=xf()){r=gt(r);const e=Vi(r,cc);return e.isInitialized()?e.getImmediate():Xk(r)}function Xk(r,e={}){const t=Vi(r,cc);if(t.isInitialized()){const o=t.getImmediate();if(Fs(e,t.getOptions()))return o;throw vn.create("already-initialized")}return t.initialize({options:e})}function Jk(r,e,t){r=gt(r),$k(jf,Oo[r.app.options.appId],e,t).catch(i=>Xt.error(i))}function Zk(r,e,t,i){r=gt(r),Bk(jf,Oo[r.app.options.appId],e,t,i).catch(o=>Xt.error(o))}const _0="@firebase/analytics",w0="0.10.19";function eS(){Er(new qn(cc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Qk(i,o,t)},"PUBLIC")),Er(new qn("analytics-internal",r,"PRIVATE")),bn(_0,w0),bn(_0,w0,"esm2020");function r(e){try{const t=e.getProvider(cc).getImmediate();return{logEvent:(i,o,l)=>Zk(t,i,o,l),setUserProperties:(i,o)=>Jk(t,i,o)}}catch(t){throw vn.create("interop-component-reg-failed",{reason:t})}}}eS();var E0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var js,zv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.F=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.D=function(D,R,V){for(var S=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)S[$e-2]=arguments[$e];return I.prototype[R].apply(D,S)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);const D=Array(16);if(typeof I=="string")for(var R=0;R<16;++R)D[R]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(R=0;R<16;++R)D[R]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],R=N.g[2];let V=N.g[3],S;S=I+(V^A&(R^V))+D[0]+3614090360&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(R^I&(A^R))+D[1]+3905402710&4294967295,V=I+(S<<12&4294967295|S>>>20),S=R+(A^V&(I^A))+D[2]+606105819&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(I^R&(V^I))+D[3]+3250441966&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(V^A&(R^V))+D[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(R^I&(A^R))+D[5]+1200080426&4294967295,V=I+(S<<12&4294967295|S>>>20),S=R+(A^V&(I^A))+D[6]+2821735955&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(I^R&(V^I))+D[7]+4249261313&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(V^A&(R^V))+D[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(R^I&(A^R))+D[9]+2336552879&4294967295,V=I+(S<<12&4294967295|S>>>20),S=R+(A^V&(I^A))+D[10]+4294925233&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(I^R&(V^I))+D[11]+2304563134&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(V^A&(R^V))+D[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=V+(R^I&(A^R))+D[13]+4254626195&4294967295,V=I+(S<<12&4294967295|S>>>20),S=R+(A^V&(I^A))+D[14]+2792965006&4294967295,R=V+(S<<17&4294967295|S>>>15),S=A+(I^R&(V^I))+D[15]+1236535329&4294967295,A=R+(S<<22&4294967295|S>>>10),S=I+(R^V&(A^R))+D[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(I^A))+D[6]+3225465664&4294967295,V=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(V^I))+D[11]+643717713&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(R^V))+D[0]+3921069994&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(R^V&(A^R))+D[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(I^A))+D[10]+38016083&4294967295,V=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(V^I))+D[15]+3634488961&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(R^V))+D[4]+3889429448&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(R^V&(A^R))+D[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(I^A))+D[14]+3275163606&4294967295,V=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(V^I))+D[3]+4107603335&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(R^V))+D[8]+1163531501&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(R^V&(A^R))+D[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=V+(A^R&(I^A))+D[2]+4243563512&4294967295,V=I+(S<<9&4294967295|S>>>23),S=R+(I^A&(V^I))+D[7]+1735328473&4294967295,R=V+(S<<14&4294967295|S>>>18),S=A+(V^I&(R^V))+D[12]+2368359562&4294967295,A=R+(S<<20&4294967295|S>>>12),S=I+(A^R^V)+D[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^R)+D[8]+2272392833&4294967295,V=I+(S<<11&4294967295|S>>>21),S=R+(V^I^A)+D[11]+1839030562&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^I)+D[14]+4259657740&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(A^R^V)+D[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^R)+D[4]+1272893353&4294967295,V=I+(S<<11&4294967295|S>>>21),S=R+(V^I^A)+D[7]+4139469664&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^I)+D[10]+3200236656&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(A^R^V)+D[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^R)+D[0]+3936430074&4294967295,V=I+(S<<11&4294967295|S>>>21),S=R+(V^I^A)+D[3]+3572445317&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^I)+D[6]+76029189&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(A^R^V)+D[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=V+(I^A^R)+D[12]+3873151461&4294967295,V=I+(S<<11&4294967295|S>>>21),S=R+(V^I^A)+D[15]+530742520&4294967295,R=V+(S<<16&4294967295|S>>>16),S=A+(R^V^I)+D[2]+3299628645&4294967295,A=R+(S<<23&4294967295|S>>>9),S=I+(R^(A|~V))+D[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~R))+D[7]+1126891415&4294967295,V=I+(S<<10&4294967295|S>>>22),S=R+(I^(V|~A))+D[14]+2878612391&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~I))+D[5]+4237533241&4294967295,A=R+(S<<21&4294967295|S>>>11),S=I+(R^(A|~V))+D[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~R))+D[3]+2399980690&4294967295,V=I+(S<<10&4294967295|S>>>22),S=R+(I^(V|~A))+D[10]+4293915773&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~I))+D[1]+2240044497&4294967295,A=R+(S<<21&4294967295|S>>>11),S=I+(R^(A|~V))+D[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~R))+D[15]+4264355552&4294967295,V=I+(S<<10&4294967295|S>>>22),S=R+(I^(V|~A))+D[6]+2734768916&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~I))+D[13]+1309151649&4294967295,A=R+(S<<21&4294967295|S>>>11),S=I+(R^(A|~V))+D[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=V+(A^(I|~R))+D[11]+3174756917&4294967295,V=I+(S<<10&4294967295|S>>>22),S=R+(I^(V|~A))+D[2]+718787259&4294967295,R=V+(S<<15&4294967295|S>>>17),S=A+(V^(R|~I))+D[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+R&4294967295,N.g[3]=N.g[3]+V&4294967295}i.prototype.v=function(N,I){I===void 0&&(I=N.length);const A=I-this.blockSize,D=this.C;let R=this.h,V=0;for(;V<I;){if(R==0)for(;V<=A;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<I;)if(D[R++]=N.charCodeAt(V++),R==this.blockSize){o(this,D),R=0;break}}else for(;V<I;)if(D[R++]=N[V++],R==this.blockSize){o(this,D),R=0;break}}this.h=R,this.o+=I},i.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;I=this.o*8;for(var A=N.length-8;A<N.length;++A)N[A]=I&255,I/=256;for(this.v(N),N=Array(16),I=0,A=0;A<4;++A)for(let D=0;D<32;D+=8)N[I++]=this.g[A]>>>D&255;return N};function l(N,I){var A=p;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function d(N,I){this.h=I;const A=[];let D=!0;for(let R=N.length-1;R>=0;R--){const V=N[R]|0;D&&V==I||(A[R]=V,D=!1)}this.g=A}var p={};function y(N){return-128<=N&&N<128?l(N,function(I){return new d([I|0],I<0?-1:0)}):new d([N|0],N<0?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return T;if(N<0)return $(v(-N));const I=[];let A=1;for(let D=0;N>=A;D++)I[D]=N/A|0,A*=4294967296;return new d(I,0)}function E(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return $(E(N.substring(1),I));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=v(Math.pow(I,8));let D=T;for(let V=0;V<N.length;V+=8){var R=Math.min(8,N.length-V);const S=parseInt(N.substring(V,V+R),I);R<8?(R=v(Math.pow(I,R)),D=D.j(R).add(v(S))):(D=D.j(A),D=D.add(v(S)))}return D}var T=y(0),C=y(1),L=y(16777216);r=d.prototype,r.m=function(){if(B(this))return-$(this).m();let N=0,I=1;for(let A=0;A<this.g.length;A++){const D=this.i(A);N+=(D>=0?D:4294967296+D)*I,I*=4294967296}return N},r.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(q(this))return"0";if(B(this))return"-"+$(this).toString(N);const I=v(Math.pow(N,6));var A=this;let D="";for(;;){const R=fe(A,I).g;A=oe(A,R.j(I));let V=((A.g.length>0?A.g[0]:A.h)>>>0).toString(N);if(A=R,q(A))return V+D;for(;V.length<6;)V="0"+V;D=V+D}},r.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function q(N){if(N.h!=0)return!1;for(let I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function B(N){return N.h==-1}r.l=function(N){return N=oe(this,N),B(N)?-1:q(N)?0:1};function $(N){const I=N.g.length,A=[];for(let D=0;D<I;D++)A[D]=~N.g[D];return new d(A,~N.h).add(C)}r.abs=function(){return B(this)?$(this):this},r.add=function(N){const I=Math.max(this.g.length,N.g.length),A=[];let D=0;for(let R=0;R<=I;R++){let V=D+(this.i(R)&65535)+(N.i(R)&65535),S=(V>>>16)+(this.i(R)>>>16)+(N.i(R)>>>16);D=S>>>16,V&=65535,S&=65535,A[R]=S<<16|V}return new d(A,A[A.length-1]&-2147483648?-1:0)};function oe(N,I){return N.add($(I))}r.j=function(N){if(q(this)||q(N))return T;if(B(this))return B(N)?$(this).j($(N)):$($(this).j(N));if(B(N))return $(this.j($(N)));if(this.l(L)<0&&N.l(L)<0)return v(this.m()*N.m());const I=this.g.length+N.g.length,A=[];for(var D=0;D<2*I;D++)A[D]=0;for(D=0;D<this.g.length;D++)for(let R=0;R<N.g.length;R++){const V=this.i(D)>>>16,S=this.i(D)&65535,$e=N.i(R)>>>16,ct=N.i(R)&65535;A[2*D+2*R]+=S*ct,de(A,2*D+2*R),A[2*D+2*R+1]+=V*ct,de(A,2*D+2*R+1),A[2*D+2*R+1]+=S*$e,de(A,2*D+2*R+1),A[2*D+2*R+2]+=V*$e,de(A,2*D+2*R+2)}for(N=0;N<I;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=I;N<2*I;N++)A[N]=0;return new d(A,0)};function de(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function he(N,I){this.g=N,this.h=I}function fe(N,I){if(q(I))throw Error("division by zero");if(q(N))return new he(T,T);if(B(N))return I=fe($(N),I),new he($(I.g),$(I.h));if(B(I))return I=fe(N,$(I)),new he($(I.g),I.h);if(N.g.length>30){if(B(N)||B(I))throw Error("slowDivide_ only works with positive integers.");for(var A=C,D=I;D.l(N)<=0;)A=Ve(A),D=Ve(D);var R=H(A,1),V=H(D,1);for(D=H(D,2),A=H(A,2);!q(D);){var S=V.add(D);S.l(N)<=0&&(R=R.add(A),V=S),D=H(D,1),A=H(A,1)}return I=oe(N,R.j(I)),new he(R,I)}for(R=T;N.l(I)>=0;){for(A=Math.max(1,Math.floor(N.m()/I.m())),D=Math.ceil(Math.log(A)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),V=v(A),S=V.j(I);B(S)||S.l(N)>0;)A-=D,V=v(A),S=V.j(I);q(V)&&(V=C),R=R.add(V),N=oe(N,S)}return new he(R,N)}r.B=function(N){return fe(this,N).h},r.and=function(N){const I=Math.max(this.g.length,N.g.length),A=[];for(let D=0;D<I;D++)A[D]=this.i(D)&N.i(D);return new d(A,this.h&N.h)},r.or=function(N){const I=Math.max(this.g.length,N.g.length),A=[];for(let D=0;D<I;D++)A[D]=this.i(D)|N.i(D);return new d(A,this.h|N.h)},r.xor=function(N){const I=Math.max(this.g.length,N.g.length),A=[];for(let D=0;D<I;D++)A[D]=this.i(D)^N.i(D);return new d(A,this.h^N.h)};function Ve(N){const I=N.g.length+1,A=[];for(let D=0;D<I;D++)A[D]=N.i(D)<<1|N.i(D-1)>>>31;return new d(A,N.h)}function H(N,I){const A=I>>5;I%=32;const D=N.g.length-A,R=[];for(let V=0;V<D;V++)R[V]=I>0?N.i(V+A)>>>I|N.i(V+A+1)<<32-I:N.i(V+A);return new d(R,N.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,zv=i,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=E,js=d}).apply(typeof E0<"u"?E0:typeof self<"u"?self:typeof window<"u"?window:{});var Fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv,Wa,$v,Qu,Yh,Hv,qv,Wv;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fu=="object"&&Fu];for(var g=0;g<u.length;++g){var _=u[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,g){if(g)e:{var _=i;u=u.split(".");for(var x=0;x<u.length-1;x++){var M=u[x];if(!(M in _))break e;_=_[M]}u=u[u.length-1],x=_[u],g=g(x),g!=x&&g!=null&&e(_,u,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(g){var _=[],x;for(x in g)Object.prototype.hasOwnProperty.call(g,x)&&_.push([x,g[x]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},d=this||self;function p(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function y(u,g,_){return u.call.apply(u.bind,arguments)}function v(u,g,_){return v=y,v.apply(null,arguments)}function E(u,g){var _=Array.prototype.slice.call(arguments,1);return function(){var x=_.slice();return x.push.apply(x,arguments),u.apply(this,x)}}function T(u,g){function _(){}_.prototype=g.prototype,u.Z=g.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(x,M,z){for(var ee=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)ee[Se-2]=arguments[Se];return g.prototype[M].apply(x,ee)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function L(u){const g=u.length;if(g>0){const _=Array(g);for(let x=0;x<g;x++)_[x]=u[x];return _}return[]}function q(u,g){for(let x=1;x<arguments.length;x++){const M=arguments[x];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const z=M.length||0;u.length=_+z;for(let ee=0;ee<z;ee++)u[_+ee]=M[ee]}else u.push(M)}}class B{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function $(u){d.setTimeout(()=>{throw u},0)}function oe(){var u=N;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class de{constructor(){this.h=this.g=null}add(g,_){const x=he.get();x.set(g,_),this.h?this.h.next=x:this.g=x,this.h=x}}var he=new B(()=>new fe,u=>u.reset());class fe{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,H=!1,N=new de,I=()=>{const u=Promise.resolve(void 0);Ve=()=>{u.then(A)}};function A(){for(var u;u=oe();){try{u.h.call(u.g)}catch(_){$(_)}var g=he;g.j(u),g.h<100&&(g.h++,u.next=g.g,g.g=u)}H=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,g),d.removeEventListener("test",_,g)}catch{}return u})();function S(u){return/^[\s\xa0]*$/.test(u)}function $e(u,g){R.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,g)}T($e,R),$e.prototype.init=function(u,g){const _=this.type=u.type,x=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget,g||(_=="mouseover"?g=u.fromElement:_=="mouseout"&&(g=u.toElement)),this.relatedTarget=g,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ct="closure_listenable_"+(Math.random()*1e6|0),xt=0;function Ge(u,g,_,x,M){this.listener=u,this.proxy=null,this.src=g,this.type=_,this.capture=!!x,this.ha=M,this.key=++xt,this.da=this.fa=!1}function te(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function me(u,g,_){for(const x in u)g.call(_,u[x],x,u)}function re(u,g){for(const _ in u)g.call(void 0,u[_],_,u)}function O(u){const g={};for(const _ in u)g[_]=u[_];return g}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(u,g){let _,x;for(let M=1;M<arguments.length;M++){x=arguments[M];for(_ in x)u[_]=x[_];for(let z=0;z<G.length;z++)_=G[z],Object.prototype.hasOwnProperty.call(x,_)&&(u[_]=x[_])}}function we(u){this.src=u,this.g={},this.h=0}we.prototype.add=function(u,g,_,x,M){const z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);const ee=Ne(u,g,x,M);return ee>-1?(g=u[ee],_||(g.fa=!1)):(g=new Ge(g,this.src,z,!!x,M),g.fa=_,u.push(g)),g};function Ce(u,g){const _=g.type;if(_ in u.g){var x=u.g[_],M=Array.prototype.indexOf.call(x,g,void 0),z;(z=M>=0)&&Array.prototype.splice.call(x,M,1),z&&(te(g),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Ne(u,g,_,x){for(let M=0;M<u.length;++M){const z=u[M];if(!z.da&&z.listener==g&&z.capture==!!_&&z.ha==x)return M}return-1}var Fe="closure_lm_"+(Math.random()*1e6|0),Re={};function He(u,g,_,x,M){if(Array.isArray(g)){for(let z=0;z<g.length;z++)He(u,g[z],_,x,M);return null}return _=Qs(_),u&&u[ct]?u.J(g,_,p(x)?!!x.capture:!1,M):dt(u,g,_,!1,x,M)}function dt(u,g,_,x,M,z){if(!g)throw Error("Invalid event type");const ee=p(M)?!!M.capture:!!M;let Se=Xr(u);if(Se||(u[Fe]=Se=new we(u)),_=Se.add(g,_,x,ee,z),_.proxy)return _;if(x=ot(),_.proxy=x,x.src=u,x.listener=_,u.addEventListener)V||(M=ee),M===void 0&&(M=!1),u.addEventListener(g.toString(),x,M);else if(u.attachEvent)u.attachEvent(Yr(g.toString()),x);else if(u.addListener&&u.removeListener)u.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ot(){function u(_){return g.call(u.src,u.listener,_)}const g=Ui;return u}function At(u,g,_,x,M){if(Array.isArray(g))for(var z=0;z<g.length;z++)At(u,g[z],_,x,M);else x=p(x)?!!x.capture:!!x,_=Qs(_),u&&u[ct]?(u=u.i,z=String(g).toString(),z in u.g&&(g=u.g[z],_=Ne(g,_,x,M),_>-1&&(te(g[_]),Array.prototype.splice.call(g,_,1),g.length==0&&(delete u.g[z],u.h--)))):u&&(u=Xr(u))&&(g=u.g[g.toString()],u=-1,g&&(u=Ne(g,_,x,M)),(_=u>-1?g[u]:null)&&Pn(_))}function Pn(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[ct])Ce(g.i,u);else{var _=u.type,x=u.proxy;g.removeEventListener?g.removeEventListener(_,x,u.capture):g.detachEvent?g.detachEvent(Yr(_),x):g.addListener&&g.removeListener&&g.removeListener(x),(_=Xr(g))?(Ce(_,u),_.h==0&&(_.src=null,g[Fe]=null)):te(u)}}}function Yr(u){return u in Re?Re[u]:Re[u]="on"+u}function Ui(u,g){if(u.da)u=!0;else{g=new $e(g,this);const _=u.listener,x=u.ha||u.src;u.fa&&Pn(u),u=_.call(x,g)}return u}function Xr(u){return u=u[Fe],u instanceof we?u:null}var Ir="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qs(u){return typeof u=="function"?u:(u[Ir]||(u[Ir]=function(g){return u.handleEvent(g)}),u[Ir])}function at(){D.call(this),this.i=new we(this),this.M=this,this.G=null}T(at,D),at.prototype[ct]=!0,at.prototype.removeEventListener=function(u,g,_,x){At(this,u,g,_,x)};function nt(u,g){var _,x=u.G;if(x)for(_=[];x;x=x.G)_.push(x);if(u=u.M,x=g.type||g,typeof g=="string")g=new R(g,u);else if(g instanceof R)g.target=g.target||u;else{var M=g;g=new R(x,u),Ie(g,M)}M=!0;let z,ee;if(_)for(ee=_.length-1;ee>=0;ee--)z=g.g=_[ee],M=J(z,x,!0,g)&&M;if(z=g.g=u,M=J(z,x,!0,g)&&M,M=J(z,x,!1,g)&&M,_)for(ee=0;ee<_.length;ee++)z=g.g=_[ee],M=J(z,x,!1,g)&&M}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var u=this.i;for(const g in u.g){const _=u.g[g];for(let x=0;x<_.length;x++)te(_[x]);delete u.g[g],u.h--}}this.G=null},at.prototype.J=function(u,g,_,x){return this.i.add(String(u),g,!1,_,x)},at.prototype.K=function(u,g,_,x){return this.i.add(String(u),g,!0,_,x)};function J(u,g,_,x){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();let M=!0;for(let z=0;z<g.length;++z){const ee=g[z];if(ee&&!ee.da&&ee.capture==_){const Se=ee.listener,ft=ee.ha||ee.src;ee.fa&&Ce(u.i,ee),M=Se.call(ft,x)!==!1&&M}}return M&&!x.defaultPrevented}function ge(u,g){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=v(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:d.setTimeout(u,g||0)}function ht(u){u.g=ge(()=>{u.g=null,u.i&&(u.i=!1,ht(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class an extends D{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(u){D.call(this),this.h=u,this.g={}}T(_n,D);var Jr=[];function kr(u){me(u.g,function(g,_){this.g.hasOwnProperty(_)&&Pn(g)},u),u.g={}}_n.prototype.N=function(){_n.Z.N.call(this),kr(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zr=d.JSON.stringify,Il=d.JSON.parse,Ys=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function es(){}function kl(){}var ts={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zi(){R.call(this,"d")}T(zi,R);function ea(){R.call(this,"c")}T(ea,R);var Dn={},Bi=null;function ns(){return Bi=Bi||new at}Dn.Ia="serverreachability";function $i(u){R.call(this,Dn.Ia,u)}T($i,R);function Sr(u){const g=ns();nt(g,new $i(g))}Dn.STAT_EVENT="statevent";function Ar(u,g){R.call(this,Dn.STAT_EVENT,u),this.stat=g}T(Ar,R);function lt(u){const g=ns();nt(g,new Ar(g,u))}Dn.Ja="timingevent";function ta(u,g){R.call(this,Dn.Ja,u),this.size=g}T(ta,R);function rs(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},g)}function ss(){this.g=!0}ss.prototype.ua=function(){this.g=!1};function Sl(u,g,_,x,M,z){u.info(function(){if(u.g)if(z){var ee="",Se=z.split("&");for(let We=0;We<Se.length;We++){var ft=Se[We].split("=");if(ft.length>1){const yt=ft[0];ft=ft[1];const fn=yt.split("_");ee=fn.length>=2&&fn[1]=="type"?ee+(yt+"="+ft+"&"):ee+(yt+"=redacted&")}}}else ee=null;else ee=z;return"XMLHTTP REQ ("+x+") [attempt "+M+"]: "+g+`
`+_+`
`+ee})}function Al(u,g,_,x,M,z,ee){u.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+M+"]: "+g+`
`+_+`
`+z+" "+ee})}function Kn(u,g,_,x){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Xs(u,_)+(x?" "+x:"")})}function Cl(u,g){u.info(function(){return"TIMEOUT: "+g})}ss.prototype.info=function(){};function Xs(u,g){if(!u.g)return g;if(!g)return null;try{const z=JSON.parse(g);if(z){for(u=0;u<z.length;u++)if(Array.isArray(z[u])){var _=z[u];if(!(_.length<2)){var x=_[1];if(Array.isArray(x)&&!(x.length<1)){var M=x[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ee=1;ee<x.length;ee++)x[ee]=""}}}}return Zr(z)}catch{return g}}var is={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},os={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Nl;function Cr(){}T(Cr,es),Cr.prototype.g=function(){return new XMLHttpRequest},Nl=new Cr;function Qn(u){return encodeURIComponent(String(u))}function Hi(u){var g=1;u=u.split(":");const _=[];for(;g>0&&u.length;)_.push(u.shift()),g--;return u.length&&_.push(u.join(":")),_}function wn(u,g,_,x){this.j=u,this.i=g,this.l=_,this.S=x||1,this.V=new _n(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var Rl={},na={};function On(u,g,_){u.M=1,u.A=br(En(g)),u.u=_,u.R=!0,ra(u,null)}function ra(u,g){u.F=Date.now(),Js(u),u.B=En(u.A);var _=u.B,x=u.S;Array.isArray(x)||(x=[String(x)]),fa(_.i,"t",x),u.C=0,_=u.j.L,u.h=new bl,u.g=zl(u.j,_?g:null,!u.u),u.P>0&&(u.O=new an(v(u.Y,u,u.g),u.P)),g=u.V,_=u.g,x=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(Jr[0]=M.toString()),M=Jr);for(let z=0;z<M.length;z++){const ee=He(_,M[z],x||g.handleEvent,!1,g.h||g);if(!ee)break;g.g[ee.key]=ee}g=u.J?O(u.J):{},u.u?(u.v||(u.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,g)):(u.v="GET",u.g.ea(u.B,u.v,null,g)),Sr(),Sl(u.i,u.v,u.B,u.l,u.S,u.u)}wn.prototype.ba=function(u){u=u.target;const g=this.O;g&&nr(u)==3?g.j():this.Y(u)},wn.prototype.Y=function(u){try{if(u==this.g)e:{const Se=nr(this.g),ft=this.g.ya(),We=this.g.ca();if(!(Se<3)&&(Se!=3||this.g&&(this.h.h||this.g.la()||Fl(this.g)))){this.K||Se!=4||ft==7||(ft==8||We<=0?Sr(3):Sr(2)),qi(this);var g=this.g.ca();this.X=g;var _=Pl(this);if(this.o=g==200,Al(this.i,this.v,this.B,this.l,this.S,Se,g),this.o){if(this.U&&!this.L){t:{if(this.g){var x,M=this.g;if((x=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(x)){var z=x;break t}}z=null}if(u=z)Kn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ye(this,u);else{this.o=!1,this.m=3,lt(12),Nr(this),Zs(this);break e}}if(this.R){u=!0;let yt;for(;!this.K&&this.C<_.length;)if(yt=Ol(this,_),yt==na){Se==4&&(this.m=4,lt(14),u=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==Rl){this.m=4,lt(15),Kn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Kn(this.i,this.l,yt,null),Ye(this,yt);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||_.length!=0||this.h.h||(this.m=1,lt(16),u=!1),this.o=this.o&&u,!u)Kn(this.i,this.l,_,"[Invalid Chunked Response]"),Nr(this),Zs(this);else if(_.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),li(ee),ee.P=!0,lt(11))}}else Kn(this.i,this.l,_,null),Ye(this,_);Se==4&&Nr(this),this.o&&!this.K&&(Se==4?to(this.j,this):(this.o=!1,Js(this)))}else ma(this.g),g==400&&_.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),Nr(this),Zs(this)}}}catch{}finally{}};function Pl(u){if(!Dl(u))return u.g.la();const g=Fl(u.g);if(g==="")return"";let _="";const x=g.length,M=nr(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return Nr(u),Zs(u),"";u.h.i=new d.TextDecoder}for(let z=0;z<x;z++)u.h.h=!0,_+=u.h.i.decode(g[z],{stream:!(M&&z==x-1)});return g.length=0,u.h.g+=_,u.C=0,u.h.g}function Dl(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Ol(u,g){var _=u.C,x=g.indexOf(`
`,_);return x==-1?na:(_=Number(g.substring(_,x)),isNaN(_)?Rl:(x+=1,x+_>g.length?na:(g=g.slice(x,x+_),u.C=x+_,g)))}wn.prototype.cancel=function(){this.K=!0,Nr(this)};function Js(u){u.T=Date.now()+u.H,sa(u,u.H)}function sa(u,g){if(u.D!=null)throw Error("WatchDog timer not null");u.D=rs(v(u.aa,u),g)}function qi(u){u.D&&(d.clearTimeout(u.D),u.D=null)}wn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Cl(this.i,this.B),this.M!=2&&(Sr(),lt(17)),Nr(this),this.m=2,Zs(this)):sa(this,this.T-u)};function Zs(u){u.j.I==0||u.K||to(u.j,u)}function Nr(u){qi(u);var g=u.O;g&&typeof g.dispose=="function"&&g.dispose(),u.O=null,kr(u.V),u.g&&(g=u.g,u.g=null,g.abort(),g.dispose())}function Ye(u,g){try{var _=u.j;if(_.I!=0&&(_.g==u||oa(_.h,u))){if(!u.L&&oa(_.h,u)&&_.I==3){try{var x=_.Ba.g.parse(g)}catch{x=null}if(Array.isArray(x)&&x.length==3){var M=x;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)eo(_),dn(_);else break e;ir(_),lt(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=rs(v(_.Va,_),6e3));ei(_.h)<=1&&_.ta&&(_.ta=void 0)}else hn(_,11)}else if((u.L||_.g==u)&&eo(_),!S(g))for(M=_.Ba.g.parse(g),g=0;g<M.length;g++){let We=M[g];const yt=We[0];if(!(yt<=_.K))if(_.K=yt,We=We[1],_.I==2)if(We[0]=="c"){_.M=We[1],_.ba=We[2];const fn=We[3];fn!=null&&(_.ka=fn,_.j.info("VER="+_.ka));const Vr=We[4];Vr!=null&&(_.za=Vr,_.j.info("SVER="+_.za));const or=We[5];or!=null&&typeof or=="number"&&or>0&&(x=1.5*or,_.O=x,_.j.info("backChannelRequestTimeoutMs_="+x)),x=_;const ar=u.g;if(ar){const so=ar.g?ar.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var z=x.h;z.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Gi(z,z.h),z.h=null))}if(x.G){const va=ar.g?ar.g.getResponseHeader("X-HTTP-Session-Id"):null;va&&(x.wa=va,Be(x.J,x.G,va))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),x=_;var ee=u;if(x.na=ya(x,x.L?x.ba:null,x.W),ee.L){ti(x.h,ee);var Se=ee,ft=x.O;ft&&(Se.H=ft),Se.D&&(qi(Se),Js(Se)),x.g=ee}else Ut(x);_.i.length>0&&Or(_)}else We[0]!="stop"&&We[0]!="close"||hn(_,7);else _.I==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?hn(_,7):Ji(_):We[0]!="noop"&&_.l&&_.l.qa(We),_.A=0)}}Sr(4)}catch{}}var Yc=class{constructor(u,g){this.g=u,this.map=g}};function Wi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ia(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ei(u){return u.h?1:u.g?u.g.size:0}function oa(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function Gi(u,g){u.g?u.g.add(g):u.h=g}function ti(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}Wi.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ln(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const _ of u.g.values())g=g.concat(_.G);return g}return L(u.i)}var Vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function un(u,g){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const x=u[_].indexOf("=");let M,z=null;x>=0?(M=u[_].substring(0,x),z=u[_].substring(x+1)):M=u[_],g(M,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Yn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;u instanceof Yn?(this.l=u.l,ni(this,u.j),this.o=u.o,this.g=u.g,Xn(this,u.u),this.h=u.h,as(this,pa(u.i)),this.m=u.m):u&&(g=String(u).match(Vl))?(this.l=!1,ni(this,g[1]||"",!0),this.o=ri(g[2]||""),this.g=ri(g[3]||"",!0),Xn(this,g[4]),this.h=ri(g[5]||"",!0),as(this,g[6]||"",!0),this.m=ri(g[7]||"")):(this.l=!1,this.i=new je(null,this.l))}Yn.prototype.toString=function(){const u=[];var g=this.j;g&&u.push(si(g,la,!0),":");var _=this.g;return(_||g=="file")&&(u.push("//"),(g=this.o)&&u.push(si(g,la,!0),"@"),u.push(Qn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(si(_,_.charAt(0)=="/"?ii:ua,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",si(_,ca)),u.join("")},Yn.prototype.resolve=function(u){const g=En(this);let _=!!u.j;_?ni(g,u.j):_=!!u.o,_?g.o=u.o:_=!!u.g,_?g.g=u.g:_=u.u!=null;var x=u.h;if(_)Xn(g,u.u);else if(_=!!u.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var M=g.h.lastIndexOf("/");M!=-1&&(x=g.h.slice(0,M+1)+x)}if(M=x,M==".."||M==".")x="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){x=M.lastIndexOf("/",0)==0,M=M.split("/");const z=[];for(let ee=0;ee<M.length;){const Se=M[ee++];Se=="."?x&&ee==M.length&&z.push(""):Se==".."?((z.length>1||z.length==1&&z[0]!="")&&z.pop(),x&&ee==M.length&&z.push("")):(z.push(Se),x=!0)}x=z.join("/")}else x=M}return _?g.h=x:_=u.i.toString()!=="",_?as(g,pa(u.i)):_=!!u.m,_&&(g.m=u.m),g};function En(u){return new Yn(u)}function ni(u,g,_){u.j=_?ri(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function Xn(u,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);u.u=g}else u.u=null}function as(u,g,_){g instanceof je?(u.i=g,Qi(u.i,u.l)):(_||(g=si(g,Xc)),u.i=new je(g,u.l))}function Be(u,g,_){u.i.set(g,_)}function br(u){return Be(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ri(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function si(u,g,_){return typeof u=="string"?(u=encodeURI(u).replace(g,aa),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function aa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var la=/[#\/\?@]/g,ua=/[#\?:]/g,ii=/[#\?]/g,Xc=/[#\?@]/g,ca=/#/g;function je(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Jn(u){u.g||(u.g=new Map,u.h=0,u.i&&un(u.i,function(g,_){u.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=je.prototype,r.add=function(u,g){Jn(this),this.i=null,u=Zn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(g),this.h+=1,this};function da(u,g){Jn(u),g=Zn(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Ki(u,g){return Jn(u),g=Zn(u,g),u.g.has(g)}r.forEach=function(u,g){Jn(this),this.g.forEach(function(_,x){_.forEach(function(M){u.call(g,M,x,this)},this)},this)};function ha(u,g){Jn(u);let _=[];if(typeof g=="string")Ki(u,g)&&(_=_.concat(u.g.get(Zn(u,g))));else for(u=Array.from(u.g.values()),g=0;g<u.length;g++)_=_.concat(u[g]);return _}r.set=function(u,g){return Jn(this),this.i=null,u=Zn(this,u),Ki(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=ha(this,u),u.length>0?String(u[0]):g):g};function fa(u,g,_){da(u,g),_.length>0&&(u.i=null,u.g.set(Zn(u,g),L(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(let x=0;x<g.length;x++){var _=g[x];const M=Qn(_);_=ha(this,_);for(let z=0;z<_.length;z++){let ee=M;_[z]!==""&&(ee+="="+Qn(_[z])),u.push(ee)}}return this.i=u.join("&")};function pa(u){const g=new je;return g.i=u.i,u.g&&(g.g=new Map(u.g),g.h=u.h),g}function Zn(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function Qi(u,g){g&&!u.j&&(Jn(u),u.i=null,u.g.forEach(function(_,x){const M=x.toLowerCase();x!=M&&(da(this,x),fa(this,M,_))},u)),u.j=g}function er(u,g){const _=new ss;if(d.Image){const x=new Image;x.onload=E(Pt,_,"TestLoadImage: loaded",!0,g,x),x.onerror=E(Pt,_,"TestLoadImage: error",!1,g,x),x.onabort=E(Pt,_,"TestLoadImage: abort",!1,g,x),x.ontimeout=E(Pt,_,"TestLoadImage: timeout",!1,g,x),d.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=u}else g(!1)}function tr(u,g){const _=new ss,x=new AbortController,M=setTimeout(()=>{x.abort(),Pt(_,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:x.signal}).then(z=>{clearTimeout(M),z.ok?Pt(_,"TestPingServer: ok",!0,g):Pt(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(M),Pt(_,"TestPingServer: error",!1,g)})}function Pt(u,g,_,x,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),x(_)}catch{}}function oi(){this.g=new Ys}function Rr(u){this.i=u.Sb||null,this.h=u.ab||!1}T(Rr,es),Rr.prototype.g=function(){return new cn(this.i,this.h)};function cn(u,g){at.call(this),this.H=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(cn,at),r=cn.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=g,this.readyState=1,Vn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(g.body=u),(this.H||d).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jl(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function jl(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?ls(this):Vn(this),this.readyState==3&&jl(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,ls(this))},r.Na=function(u){this.g&&(this.response=u,ls(this))},r.ga=function(){this.g&&ls(this)};function ls(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Vn(u)}r.setRequestHeader=function(u,g){this.A.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=g.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ml(u){let g="";return me(u,function(_,x){g+=x,g+=":",g+=_,g+=`\r
`}),g}function Yi(u,g,_){e:{for(x in _){var x=!1;break e}x=!0}x||(_=Ml(_),typeof u=="string"?_!=null&&Qn(_):Be(u,g,_))}function Ke(u){at.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(Ke,at);var Ll=/^https?$/i,Jc=["POST","PUT"];r=Ke.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,g,_,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Nl.g(),this.g.onreadystatechange=C(v(this.Ca,this));try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(z){us(this,z);return}if(u=_||"",_=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var M in x)_.set(M,x[M]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const z of x.keys())_.set(z,x.get(z));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(_.keys()).find(z=>z.toLowerCase()=="content-type"),M=d.FormData&&u instanceof d.FormData,!(Array.prototype.indexOf.call(Jc,g,void 0)>=0)||x||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ee]of _)this.g.setRequestHeader(z,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(z){us(this,z)}};function us(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.o=5,cs(u),Dr(u)}function cs(u){u.A||(u.A=!0,nt(u,"complete"),nt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,nt(this,"complete"),nt(this,"abort"),Dr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dr(this,!0)),Ke.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Pr(this):this.Xa())},r.Xa=function(){Pr(this)};function Pr(u){if(u.h&&typeof l<"u"){if(u.v&&nr(u)==4)setTimeout(u.Ca.bind(u),0);else if(nt(u,"readystatechange"),nr(u)==4){u.h=!1;try{const z=u.ca();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var x;if(x=z===0){let ee=String(u.D).match(Vl)[1]||null;!ee&&d.self&&d.self.location&&(ee=d.self.location.protocol.slice(0,-1)),x=!Ll.test(ee?ee.toLowerCase():"")}_=x}if(_)nt(u,"complete"),nt(u,"success");else{u.o=6;try{var M=nr(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",cs(u)}}finally{Dr(u)}}}}function Dr(u,g){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,g||nt(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function nr(u){return u.g?u.g.readyState:0}r.ca=function(){try{return nr(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Il(g)}};function Fl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ma(u){const g={};u=(u.g&&nr(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<u.length;x++){if(S(u[x]))continue;var _=Hi(u[x]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const z=g[M]||[];g[M]=z,z.push(_)}re(g,function(x){return x.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(u,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||g}function Xi(u){this.za=0,this.i=[],this.j=new ss,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=rr("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=rr("baseRetryDelayMs",5e3,u),this.Za=rr("retryDelaySeedMs",1e4,u),this.Ta=rr("forwardChannelMaxRetries",2,u),this.va=rr("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Wi(u&&u.concurrentRequestLimit),this.Ba=new oi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Xi.prototype,r.ka=8,r.I=1,r.connect=function(u,g,_,x){lt(0),this.W=u,this.H=g||{},_&&x!==void 0&&(this.H.OSID=_,this.H.OAID=x),this.F=this.X,this.J=ya(this,null,this.W),Or(this)};function Ji(u){if(Zi(u),u.I==3){var g=u.V++,_=En(u.J);if(Be(_,"SID",u.M),Be(_,"RID",g),Be(_,"TYPE","terminate"),sr(u,_),g=new wn(u,u.j,g),g.M=2,g.A=br(En(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(g.A.toString(),"")}catch{}!_&&d.Image&&(new Image().src=g.A,_=!0),_||(g.g=zl(g.j,null),g.g.ea(g.A)),g.F=Date.now(),Js(g)}ui(u)}function dn(u){u.g&&(li(u),u.g.cancel(),u.g=null)}function Zi(u){dn(u),u.v&&(d.clearTimeout(u.v),u.v=null),eo(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&d.clearTimeout(u.m),u.m=null)}function Or(u){if(!ia(u.h)&&!u.m){u.m=!0;var g=u.Ea;Ve||I(),H||(Ve(),H=!0),N.add(g,u),u.D=0}}function Ul(u,g){return ei(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=g.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=rs(v(u.Ea,u,g),no(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new wn(this,this.j,u);let z=this.o;if(this.U&&(z?(z=O(z),Ie(z,this.U)):z=this.U),this.u!==null||this.R||(M.J=z,z=null),this.S)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var x=this.i[_];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(g+=x,g>4096){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=ga(this,M,g),_=En(this.J),Be(_,"RID",u),Be(_,"CVER",22),this.G&&Be(_,"X-HTTP-Session-Id",this.G),sr(this,_),z&&(this.R?g="headers="+Qn(Ml(z))+"&"+g:this.u&&Yi(_,this.u,z)),Gi(this.h,M),this.Ra&&Be(_,"TYPE","init"),this.S?(Be(_,"$req",g),Be(_,"SID","null"),M.U=!0,On(M,_,null)):On(M,_,g),this.I=2}}else this.I==3&&(u?ai(this,u):this.i.length==0||ia(this.h)||ai(this))};function ai(u,g){var _;g?_=g.l:_=u.V++;const x=En(u.J);Be(x,"SID",u.M),Be(x,"RID",_),Be(x,"AID",u.K),sr(u,x),u.u&&u.o&&Yi(x,u.u,u.o),_=new wn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),g&&(u.i=g.G.concat(u.i)),g=ga(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Gi(u.h,_),On(_,x,g)}function sr(u,g){u.H&&me(u.H,function(_,x){Be(g,x,_)}),u.l&&me({},function(_,x){Be(g,x,_)})}function ga(u,g,_){_=Math.min(u.i.length,_);const x=u.l?v(u.l.Ka,u.l,u):null;e:{var M=u.i;let Se=-1;for(;;){const ft=["count="+_];Se==-1?_>0?(Se=M[0].g,ft.push("ofs="+Se)):Se=0:ft.push("ofs="+Se);let We=!0;for(let yt=0;yt<_;yt++){var z=M[yt].g;const fn=M[yt].map;if(z-=Se,z<0)Se=Math.max(0,M[yt].g-100),We=!1;else try{z="req"+z+"_"||"";try{var ee=fn instanceof Map?fn:Object.entries(fn);for(const[Vr,or]of ee){let ar=or;p(or)&&(ar=Zr(or)),ft.push(z+Vr+"="+encodeURIComponent(ar))}}catch(Vr){throw ft.push(z+"type="+encodeURIComponent("_badmap")),Vr}}catch{x&&x(fn)}}if(We){ee=ft.join("&");break e}}ee=void 0}return u=u.i.splice(0,_),g.G=u,ee}function Ut(u){if(!u.g&&!u.v){u.Y=1;var g=u.Da;Ve||I(),H||(Ve(),H=!0),N.add(g,u),u.A=0}}function ir(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=rs(v(u.Da,u),no(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ds(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=rs(v(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),dn(this),ds(this))};function li(u){u.B!=null&&(d.clearTimeout(u.B),u.B=null)}function ds(u){u.g=new wn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var g=En(u.na);Be(g,"RID","rpc"),Be(g,"SID",u.M),Be(g,"AID",u.K),Be(g,"CI",u.F?"0":"1"),!u.F&&u.ia&&Be(g,"TO",u.ia),Be(g,"TYPE","xmlhttp"),sr(u,g),u.u&&u.o&&Yi(g,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=br(En(g)),_.u=null,_.R=!0,ra(_,u)}r.Va=function(){this.C!=null&&(this.C=null,dn(this),ir(this),lt(19))};function eo(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function to(u,g){var _=null;if(u.g==g){eo(u),li(u),u.g=null;var x=2}else if(oa(u.h,g))_=g.G,ti(u.h,g),x=1;else return;if(u.I!=0){if(g.o)if(x==1){_=g.u?g.u.length:0,g=Date.now()-g.F;var M=u.D;x=ns(),nt(x,new ta(x,_)),Or(u)}else Ut(u);else if(M=g.m,M==3||M==0&&g.X>0||!(x==1&&Ul(u,g)||x==2&&ir(u)))switch(_&&_.length>0&&(g=u.h,g.i=g.i.concat(_)),M){case 1:hn(u,5);break;case 4:hn(u,10);break;case 3:hn(u,6);break;default:hn(u,2)}}}function no(u,g){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*g}function hn(u,g){if(u.j.info("Error code "+g),g==2){var _=v(u.bb,u),x=u.Ua;const M=!x;x=new Yn(x||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ni(x,"https"),br(x),M?er(x.toString(),_):tr(x.toString(),_)}else lt(2);u.I=0,u.l&&u.l.pa(g),ui(u),Zi(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function ui(u){if(u.I=0,u.ja=[],u.l){const g=ln(u.h);(g.length!=0||u.i.length!=0)&&(q(u.ja,g),q(u.ja,u.i),u.h.i.length=0,L(u.i),u.i.length=0),u.l.oa()}}function ya(u,g,_){var x=_ instanceof Yn?En(_):new Yn(_);if(x.g!="")g&&(x.g=g+"."+x.g),Xn(x,x.u);else{var M=d.location;x=M.protocol,g=g?g+"."+M.hostname:M.hostname,M=+M.port;const z=new Yn(null);x&&ni(z,x),g&&(z.g=g),M&&Xn(z,M),_&&(z.h=_),x=z}return _=u.G,g=u.wa,_&&g&&Be(x,_,g),Be(x,"VER",u.ka),sr(u,x),x}function zl(u,g,_){if(g&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Aa&&!u.ma?new Ke(new Rr({ab:_})):new Ke(u.ma),g.Fa(u.L),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bl(){}r=Bl.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function ro(){}ro.prototype.g=function(u,g){return new Dt(u,g)};function Dt(u,g){at.call(this),this.g=new Xi(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(u?u["X-WebChannel-Client-Profile"]=g.sa:u={"X-WebChannel-Client-Profile":g.sa}),this.g.U=u,(u=g&&g.Qb)&&!S(u)&&(this.g.u=u),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!S(g)&&(this.g.G=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new hs(this)}T(Dt,at),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Ji(this.g)},Dt.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=Zr(u),u=_);g.i.push(new Yc(g.Ya++,u)),g.I==3&&Or(g)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Ji(this.g),delete this.g,Dt.Z.N.call(this)};function $l(u){zi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const _ in g){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}T($l,zi);function Hl(){ea.call(this),this.status=1}T(Hl,ea);function hs(u){this.g=u}T(hs,Bl),hs.prototype.ra=function(){nt(this.g,"a")},hs.prototype.qa=function(u){nt(this.g,new $l(u))},hs.prototype.pa=function(u){nt(this.g,new Hl)},hs.prototype.oa=function(){nt(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Wv=function(){return new ro},qv=function(){return ns()},Hv=Dn,Yh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},is.NO_ERROR=0,is.TIMEOUT=8,is.HTTP_ERROR=6,Qu=is,os.COMPLETE="complete",$v=os,kl.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",at.prototype.listen=at.prototype.J,Wa=kl,Ke.prototype.listenOnce=Ke.prototype.K,Ke.prototype.getLastError=Ke.prototype.Ha,Ke.prototype.getLastErrorCode=Ke.prototype.ya,Ke.prototype.getStatus=Ke.prototype.ca,Ke.prototype.getResponseJson=Ke.prototype.La,Ke.prototype.getResponseText=Ke.prototype.la,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Fa,Bv=Ke}).apply(typeof Fu<"u"?Fu:typeof self<"u"?self:typeof window<"u"?window:{});const x0="@firebase/firestore",T0="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new kc("@firebase/firestore");function So(){return bi.logLevel}function ie(r,...e){if(bi.logLevel<=Pe.DEBUG){const t=e.map(Mf);bi.debug(`Firestore (${Yo}): ${r}`,...t)}}function Kr(r,...e){if(bi.logLevel<=Pe.ERROR){const t=e.map(Mf);bi.error(`Firestore (${Yo}): ${r}`,...t)}}function Fo(r,...e){if(bi.logLevel<=Pe.WARN){const t=e.map(Mf);bi.warn(`Firestore (${Yo}): ${r}`,...t)}}function Mf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(r,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Gv(r,i,t)}function Gv(r,e,t){let i=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Kr(i),new Error(i)}function qe(r,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,r||Gv(e,o,i)}function Ae(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Wt.UNAUTHENTICATED)))}shutdown(){}}class nS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rS{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0,42304);let i=this.i;const o=y=>this.i!==i?(i=this.i,t(y)):Promise.resolve();let l=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ki,e.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const y=l;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},p=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((y=>p(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ki)}}),0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string",31837,{l:i}),new Kv(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class sS{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iS{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new sS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class I0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){qe(this.o===void 0,3512);const i=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const d=l.token!==this.m;return this.m=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new I0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new I0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=aS(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function De(r,e){return r<e?-1:r>e?1:0}function Xh(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const o=r.charAt(i),l=e.charAt(i);if(o!==l)return Oh(o)===Oh(l)?De(o,l):Oh(o)?1:-1}return De(r.length,e.length)}const lS=55296,uS=57343;function Oh(r){const e=r.charCodeAt(0);return e>=lS&&e<=uS}function Uo(r,e,t){return r.length===e.length&&r.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="__name__";class hr{constructor(e,t,i){t===void 0?t=0:t>e.length&&xe(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&xe(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=hr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return De(e.length,t.length)}static compareSegments(e,t){const i=hr.isNumericId(e),o=hr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?hr.extractNumericId(e).compare(hr.extractNumericId(t)):Xh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return js.fromString(e.substring(4,e.length-2))}}class Ze extends hr{construct(e,t,i){return new Ze(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new pe(Q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ze(t)}static emptyPath(){return new Ze([])}}const cS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends hr{construct(e,t,i){return new Lt(e,t,i)}static isValidIdentifier(e){return cS.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===k0}static keyField(){return new Lt([k0])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new pe(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let d=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new pe(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new pe(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=y,o+=2}else p==="`"?(d=!d,o++):p!=="."||d?(i+=p,o++):(l(),o++)}if(l(),d)throw new pe(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(t)}static emptyPath(){return new Lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ze.fromString(e))}static fromName(e){return new ye(Ze.fromString(e).popFirst(5))}static empty(){return new ye(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(r,e,t){if(!t)throw new pe(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function dS(r,e,t,i){if(e===!0&&i===!0)throw new pe(Q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function S0(r){if(!ye.isDocumentKey(r))throw new pe(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function A0(r){if(ye.isDocumentKey(r))throw new pe(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Yv(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ff(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":xe(12329,{type:typeof r})}function gr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new pe(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ff(r);throw new pe(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(r,e){const t={typeString:r};return e&&(t.value=e),t}function _l(r,e){if(!Yv(r))throw new pe(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in r)){t=`JSON missing required field: '${i}'`;break}const d=r[i];if(o&&typeof d!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&d!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new pe(Q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=-62135596800,N0=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*N0);return new et(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<C0)throw new pe(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/N0}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_l(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-C0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:wt("string",et._jsonSchemaVersion),seconds:wt("number"),nanoseconds:wt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new et(0,0))}static max(){return new ke(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=-1;function hS(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,o=ke.fromTimestamp(i===1e9?new et(t+1,0):new et(t,i));return new Us(o,ye.empty(),e)}function fS(r){return new Us(r.readTime,r.key,il)}class Us{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Us(ke.min(),ye.empty(),il)}static max(){return new Us(ke.max(),ye.empty(),il)}}function pS(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:De(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==mS)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,i)=>{t(e)}))}static reject(e){return new W(((t,i)=>{i(e)}))}static waitFor(e){return new W(((t,i)=>{let o=0,l=0,d=!1;e.forEach((p=>{++o,p.next((()=>{++l,d&&l===o&&t()}),(y=>i(y)))})),d=!0,l===o&&t()}))}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next((o=>o?W.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new W(((i,o)=>{const l=e.length,d=new Array(l);let p=0;for(let y=0;y<l;y++){const v=y;t(e[v]).next((E=>{d[v]=E,++p,p===l&&i(d)}),(E=>o(E)))}}))}static doWhile(e,t){return new W(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function yS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Pc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=-1;function Dc(r){return r==null}function dc(r){return r===0&&1/r==-1/0}function vS(r){return typeof r=="number"&&Number.isInteger(r)&&!dc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="";function _S(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=b0(e)),e=wS(r.get(t),e);return b0(e)}function wS(r,e){let t=e;const i=r.length;for(let o=0;o<i;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Xv:t+="";break;default:t+=l}}return t}function b0(r){return r+Xv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Gs(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Jv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||jt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uu(this.root,e,this.comparator,!0)}}class Uu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??jt.RED,this.left=o??jt.EMPTY,this.right=l??jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new jt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return jt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw xe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw xe(27949);return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw xe(57766)}get value(){throw xe(16141)}get color(){throw xe(16727)}get left(){throw xe(29726)}get right(){throw xe(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new P0(this.data.getIterator())}getIteratorFrom(e){return new P0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class P0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new St(Lt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Zv("Invalid base64 string: "+l):l}})(e);return new Ft(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let d=0;d<o.length;++d)l+=String.fromCharCode(o[d]);return l})(e);return new Ft(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const ES=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zs(r){if(qe(!!r,39018),typeof r=="string"){let e=0;const t=ES.exec(r);if(qe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:mt(r.seconds),nanos:mt(r.nanos)}}function mt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Bs(r){return typeof r=="string"?Ft.fromBase64String(r):Ft.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="server_timestamp",t_="__type__",n_="__previous_value__",r_="__local_write_time__";function zf(r){return(r?.mapValue?.fields||{})[t_]?.stringValue===e_}function Oc(r){const e=r.mapValue.fields[n_];return zf(e)?Oc(e):e}function ol(r){const e=zs(r.mapValue.fields[r_].timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,t,i,o,l,d,p,y,v,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=E}}const hc="(default)";class al{constructor(e,t){this.projectId=e,this.database=t||hc}static empty(){return new al("","")}get isDefaultDatabase(){return this.database===hc}isEqual(e){return e instanceof al&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="__type__",TS="__max__",zu={mapValue:{}},i_="__vector__",fc="value";function $s(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zf(r)?4:kS(r)?9007199254740991:IS(r)?10:11:xe(28295,{value:r})}function xr(r,e){if(r===e)return!0;const t=$s(r);if(t!==$s(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ol(r).isEqual(ol(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const d=zs(o.timestampValue),p=zs(l.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Bs(o.bytesValue).isEqual(Bs(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return mt(o.geoPointValue.latitude)===mt(l.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return mt(o.integerValue)===mt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const d=mt(o.doubleValue),p=mt(l.doubleValue);return d===p?dc(d)===dc(p):isNaN(d)&&isNaN(p)}return!1})(r,e);case 9:return Uo(r.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:case 11:return(function(o,l){const d=o.mapValue.fields||{},p=l.mapValue.fields||{};if(R0(d)!==R0(p))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(p[y]===void 0||!xr(d[y],p[y])))return!1;return!0})(r,e);default:return xe(52216,{left:r})}}function ll(r,e){return(r.values||[]).find((t=>xr(t,e)))!==void 0}function zo(r,e){if(r===e)return 0;const t=$s(r),i=$s(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(r.booleanValue,e.booleanValue);case 2:return(function(l,d){const p=mt(l.integerValue||l.doubleValue),y=mt(d.integerValue||d.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1})(r,e);case 3:return D0(r.timestampValue,e.timestampValue);case 4:return D0(ol(r),ol(e));case 5:return Xh(r.stringValue,e.stringValue);case 6:return(function(l,d){const p=Bs(l),y=Bs(d);return p.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(l,d){const p=l.split("/"),y=d.split("/");for(let v=0;v<p.length&&v<y.length;v++){const E=De(p[v],y[v]);if(E!==0)return E}return De(p.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,d){const p=De(mt(l.latitude),mt(d.latitude));return p!==0?p:De(mt(l.longitude),mt(d.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return O0(r.arrayValue,e.arrayValue);case 10:return(function(l,d){const p=l.fields||{},y=d.fields||{},v=p[fc]?.arrayValue,E=y[fc]?.arrayValue,T=De(v?.values?.length||0,E?.values?.length||0);return T!==0?T:O0(v,E)})(r.mapValue,e.mapValue);case 11:return(function(l,d){if(l===zu.mapValue&&d===zu.mapValue)return 0;if(l===zu.mapValue)return 1;if(d===zu.mapValue)return-1;const p=l.fields||{},y=Object.keys(p),v=d.fields||{},E=Object.keys(v);y.sort(),E.sort();for(let T=0;T<y.length&&T<E.length;++T){const C=Xh(y[T],E[T]);if(C!==0)return C;const L=zo(p[y[T]],v[E[T]]);if(L!==0)return L}return De(y.length,E.length)})(r.mapValue,e.mapValue);default:throw xe(23264,{he:t})}}function D0(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return De(r,e);const t=zs(r),i=zs(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function O0(r,e){const t=r.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=zo(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Bo(r){return Jh(r)}function Jh(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=zs(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Bs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ye.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Jh(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const d of i)l?l=!1:o+=",",o+=`${d}:${Jh(t.fields[d])}`;return o+"}"})(r.mapValue):xe(61005,{value:r})}function Yu(r){switch($s(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(r);return e?16+Yu(e):16;case 5:return 2*r.stringValue.length;case 6:return Bs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+Yu(l)),0)})(r.arrayValue);case 10:case 11:return(function(i){let o=0;return Gs(i.fields,((l,d)=>{o+=l.length+Yu(d)})),o})(r.mapValue);default:throw xe(13486,{value:r})}}function Zh(r){return!!r&&"integerValue"in r}function Bf(r){return!!r&&"arrayValue"in r}function V0(r){return!!r&&"nullValue"in r}function j0(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xu(r){return!!r&&"mapValue"in r}function IS(r){return(r?.mapValue?.fields||{})[s_]?.stringValue===i_}function Ja(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Gs(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Ja(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ja(r.arrayValue.values[t]);return e}return{...r}}function kS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===TS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Xu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(t)}setAll(e){let t=Lt.emptyPath(),i={},o=[];e.forEach(((d,p)=>{if(!t.isImmediateParentOf(p)){const y=this.getFieldsMap(t);this.applyChanges(y,i,o),i={},o=[],t=p.popLast()}d?i[p.lastSegment()]=Ja(d):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Xu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Xu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Gs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new on(Ja(this.value))}}function o_(r){const e=[];return Gs(r.fields,((t,i)=>{const o=new Lt([t]);if(Xu(i)){const l=o_(i.mapValue).fields;if(l.length===0)e.push(o);else for(const d of l)e.push(o.child(d))}else e.push(o)})),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,i,o,l,d,p){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=d,this.documentState=p}static newInvalidDocument(e){return new Gt(e,0,ke.min(),ke.min(),ke.min(),on.empty(),0)}static newFoundDocument(e,t,i,o){return new Gt(e,1,t,ke.min(),i,o,0)}static newNoDocument(e,t){return new Gt(e,2,t,ke.min(),ke.min(),on.empty(),0)}static newUnknownDocument(e,t){return new Gt(e,3,t,ke.min(),ke.min(),on.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.position=e,this.inclusive=t}}function M0(r,e,t){let i=0;for(let o=0;o<r.position.length;o++){const l=e[o],d=r.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(d.referenceValue),t.key):i=zo(d,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function L0(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!xr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t="asc"){this.field=e,this.dir=t}}function SS(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{}class kt extends a_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new CS(e,t,i):t==="array-contains"?new RS(e,i):t==="in"?new PS(e,i):t==="not-in"?new DS(e,i):t==="array-contains-any"?new OS(e,i):new kt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new NS(e,i):new bS(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&$s(this.value)===$s(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tr extends a_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Tr(e,t)}matches(e){return l_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function l_(r){return r.op==="and"}function u_(r){return AS(r)&&l_(r)}function AS(r){for(const e of r.filters)if(e instanceof Tr)return!1;return!0}function ef(r){if(r instanceof kt)return r.field.canonicalString()+r.op.toString()+Bo(r.value);if(u_(r))return r.filters.map((e=>ef(e))).join(",");{const e=r.filters.map((t=>ef(t))).join(",");return`${r.op}(${e})`}}function c_(r,e){return r instanceof kt?(function(i,o){return o instanceof kt&&i.op===o.op&&i.field.isEqual(o.field)&&xr(i.value,o.value)})(r,e):r instanceof Tr?(function(i,o){return o instanceof Tr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,d,p)=>l&&c_(d,o.filters[p])),!0):!1})(r,e):void xe(19439)}function d_(r){return r instanceof kt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`})(r):r instanceof Tr?(function(t){return t.op.toString()+" {"+t.getFilters().map(d_).join(" ,")+"}"})(r):"Filter"}class CS extends kt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class NS extends kt{constructor(e,t){super(e,"in",t),this.keys=h_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class bS extends kt{constructor(e,t){super(e,"not-in",t),this.keys=h_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function h_(r,e){return(e.arrayValue?.values||[]).map((t=>ye.fromName(t.referenceValue)))}class RS extends kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bf(t)&&ll(t.arrayValue,this.value)}}class PS extends kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ll(this.value.arrayValue,t)}}class DS extends kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ll(this.value.arrayValue,t)}}class OS extends kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>ll(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t=null,i=[],o=[],l=null,d=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=d,this.endAt=p,this.Te=null}}function F0(r,e=null,t=[],i=[],o=null,l=null,d=null){return new VS(r,e,t,i,o,l,d)}function $f(r){const e=Ae(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>ef(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Bo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Bo(i))).join(",")),e.Te=t}return e.Te}function Hf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!SS(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!c_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!L0(r.startAt,e.startAt)&&L0(r.endAt,e.endAt)}function tf(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t=null,i=[],o=[],l=null,d="F",p=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=d,this.startAt=p,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function jS(r,e,t,i,o,l,d,p){return new Vc(r,e,t,i,o,l,d,p)}function qf(r){return new Vc(r)}function U0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function MS(r){return r.collectionGroup!==null}function Za(r){const e=Ae(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new St(Lt.comparator);return d.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new mc(l,i))})),t.has(Lt.keyField().canonicalString())||e.Ie.push(new mc(Lt.keyField(),i))}return e.Ie}function yr(r){const e=Ae(r);return e.Ee||(e.Ee=LS(e,Za(r))),e.Ee}function LS(r,e){if(r.limitType==="F")return F0(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new mc(o.field,l)}));const t=r.endAt?new pc(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new pc(r.startAt.position,r.startAt.inclusive):null;return F0(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function nf(r,e,t){return new Vc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function jc(r,e){return Hf(yr(r),yr(e))&&r.limitType===e.limitType}function f_(r){return`${$f(yr(r))}|lt:${r.limitType}`}function Ao(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>d_(o))).join(", ")}]`),Dc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Bo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Bo(o))).join(",")),`Target(${i})`})(yr(r))}; limitType=${r.limitType})`}function Mc(r,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,o){for(const l of Za(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(i,o){return!(i.startAt&&!(function(d,p,y){const v=M0(d,p,y);return d.inclusive?v<=0:v<0})(i.startAt,Za(i),o)||i.endAt&&!(function(d,p,y){const v=M0(d,p,y);return d.inclusive?v>=0:v>0})(i.endAt,Za(i),o))})(r,e)}function FS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function p_(r){return(e,t)=>{let i=!1;for(const o of Za(r)){const l=US(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function US(r,e,t){const i=r.field.isKeyField()?ye.comparator(e.key,t.key):(function(l,d,p){const y=d.data.field(l),v=p.data.field(l);return y!==null&&v!==null?zo(y,v):xe(42886)})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return xe(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return Jv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new it(ye.comparator);function Qr(){return zS}const m_=new it(ye.comparator);function Ga(...r){let e=m_;for(const t of r)e=e.insert(t.key,t);return e}function g_(r){let e=m_;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ii(){return el()}function y_(){return el()}function el(){return new Mi((r=>r.toString()),((r,e)=>r.isEqual(e)))}const BS=new it(ye.comparator),$S=new St(ye.comparator);function Oe(...r){let e=$S;for(const t of r)e=e.add(t);return e}const HS=new St(De);function qS(){return HS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function v_(r){return{integerValue:""+r}}function WS(r,e){return vS(e)?v_(e):Wf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this._=void 0}}function GS(r,e,t){return r instanceof gc?(function(o,l){const d={fields:{[t_]:{stringValue:e_},[r_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&zf(l)&&(l=Oc(l)),l&&(d.fields[n_]=l),{mapValue:d}})(t,e):r instanceof ul?w_(r,e):r instanceof cl?E_(r,e):(function(o,l){const d=__(o,l),p=z0(d)+z0(o.Ae);return Zh(d)&&Zh(o.Ae)?v_(p):Wf(o.serializer,p)})(r,e)}function KS(r,e,t){return r instanceof ul?w_(r,e):r instanceof cl?E_(r,e):t}function __(r,e){return r instanceof yc?(function(i){return Zh(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class gc extends Lc{}class ul extends Lc{constructor(e){super(),this.elements=e}}function w_(r,e){const t=x_(e);for(const i of r.elements)t.some((o=>xr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class cl extends Lc{constructor(e){super(),this.elements=e}}function E_(r,e){let t=x_(e);for(const i of r.elements)t=t.filter((o=>!xr(o,i)));return{arrayValue:{values:t}}}class yc extends Lc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function z0(r){return mt(r.integerValue||r.doubleValue)}function x_(r){return Bf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function QS(r,e){return r.field.isEqual(e.field)&&(function(i,o){return i instanceof ul&&o instanceof ul||i instanceof cl&&o instanceof cl?Uo(i.elements,o.elements,xr):i instanceof yc&&o instanceof yc?xr(i.Ae,o.Ae):i instanceof gc&&o instanceof gc})(r.transform,e.transform)}class YS{constructor(e,t){this.version=e,this.transformResults=t}}class Rn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Fc{}function T_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Gf(r.key,Rn.none()):new wl(r.key,r.data,Rn.none());{const t=r.data,i=on.empty();let o=new St(Lt.comparator);for(let l of e.fields)if(!o.has(l)){let d=t.field(l);d===null&&l.length>1&&(l=l.popLast(),d=t.field(l)),d===null?i.delete(l):i.set(l,d),o=o.add(l)}return new Ks(r.key,i,new yn(o.toArray()),Rn.none())}}function XS(r,e,t){r instanceof wl?(function(o,l,d){const p=o.value.clone(),y=$0(o.fieldTransforms,l,d.transformResults);p.setAll(y),l.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(r,e,t):r instanceof Ks?(function(o,l,d){if(!Ju(o.precondition,l))return void l.convertToUnknownDocument(d.version);const p=$0(o.fieldTransforms,l,d.transformResults),y=l.data;y.setAll(I_(o)),y.setAll(p),l.convertToFoundDocument(d.version,y).setHasCommittedMutations()})(r,e,t):(function(o,l,d){l.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,t)}function tl(r,e,t,i){return r instanceof wl?(function(l,d,p,y){if(!Ju(l.precondition,d))return p;const v=l.value.clone(),E=H0(l.fieldTransforms,y,d);return v.setAll(E),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null})(r,e,t,i):r instanceof Ks?(function(l,d,p,y){if(!Ju(l.precondition,d))return p;const v=H0(l.fieldTransforms,y,d),E=d.data;return E.setAll(I_(l)),E.setAll(v),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,d,p){return Ju(l.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(r,e,t)}function JS(r,e){let t=null;for(const i of r.fieldTransforms){const o=e.data.field(i.field),l=__(i.transform,o||null);l!=null&&(t===null&&(t=on.empty()),t.set(i.field,l))}return t||null}function B0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Uo(i,o,((l,d)=>QS(l,d)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class wl extends Fc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ks extends Fc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function I_(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function $0(r,e,t){const i=new Map;qe(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let o=0;o<t.length;o++){const l=r[o],d=l.transform,p=e.data.field(l.field);i.set(l.field,KS(d,p,t[o]))}return i}function H0(r,e,t){const i=new Map;for(const o of r){const l=o.transform,d=t.data.field(o.field);i.set(o.field,GS(l,d,e))}return i}class Gf extends Fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZS extends Fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&XS(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=y_();return this.mutations.forEach((o=>{const l=e.get(o.key),d=l.overlayedDocument;let p=this.applyToLocalView(d,l.mutatedFields);p=t.has(o.key)?null:p;const y=T_(d,p);y!==null&&i.set(o.key,y),d.isValidDocument()||d.convertToNoDocument(ke.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,((t,i)=>B0(t,i)))&&Uo(this.baseMutations,e.baseMutations,((t,i)=>B0(t,i)))}}class Kf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){qe(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return BS})();const l=e.mutations;for(let d=0;d<l.length;d++)o=o.insert(l[d].key,i[d].version);return new Kf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,Le;function rA(r){switch(r){case Q.OK:return xe(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return xe(15467,{code:r})}}function k_(r){if(r===void 0)return Kr("GRPC error has no .code"),Q.UNKNOWN;switch(r){case _t.OK:return Q.OK;case _t.CANCELLED:return Q.CANCELLED;case _t.UNKNOWN:return Q.UNKNOWN;case _t.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case _t.INTERNAL:return Q.INTERNAL;case _t.UNAVAILABLE:return Q.UNAVAILABLE;case _t.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case _t.NOT_FOUND:return Q.NOT_FOUND;case _t.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case _t.ABORTED:return Q.ABORTED;case _t.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case _t.DATA_LOSS:return Q.DATA_LOSS;default:return xe(39323,{code:r})}}(Le=_t||(_t={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new js([4294967295,4294967295],0);function q0(r){const e=sA().encode(r),t=new zv;return t.update(e),new Uint8Array(t.digest())}function W0(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new js([t,i],0),new js([o,l],0)]}class Qf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ka(`Invalid padding: ${t}`);if(i<0)throw new Ka(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=js.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(js.fromNumber(i)));return o.compare(iA)===1&&(o=new js([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=q0(e),[i,o]=W0(t);for(let l=0;l<this.hashCount;l++){const d=this.ye(i,o,l);if(!this.we(d))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),d=new Qf(l,o,t);return i.forEach((p=>d.insert(p))),d}insert(e){if(this.ge===0)return;const t=q0(e),[i,o]=W0(t);for(let l=0;l<this.hashCount;l++){const d=this.ye(i,o,l);this.Se(d)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Uc(ke.min(),o,new it(De),Qr(),Oe())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class S_{constructor(e,t){this.targetId=e,this.Ce=t}}class A_{constructor(e,t,i=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class G0{constructor(){this.ve=0,this.Fe=K0(),this.Me=Ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),i=Oe();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:xe(38017,{changeType:l})}})),new El(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=K0()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class oA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qr(),this.Je=Bu(),this.He=Bu(),this.Ye=new it(De)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:xe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(tf(l))if(i===0){const d=new ye(l.path);this.et(t,d,Gt.newNoDocument(d,ke.min()))}else qe(i===1,20013,{expectedCount:i});else{const d=this._t(t);if(d!==i){const p=this.ut(e),y=p?this.ct(p,e,d):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let d,p;try{d=Bs(i).toUint8Array()}catch(y){if(y instanceof Zv)return Fo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new Qf(d,o,l)}catch(y){return Fo(y instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.ge===0?null:p}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const d=this.Ge.ht(),p=`projects/${d.projectId}/databases/${d.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,d)=>{const p=this.ot(d);if(p){if(l.current&&tf(p.target)){const y=new ye(p.target.path);this.It(y).has(d)||this.Et(d,y)||this.et(d,y,Gt.newNoDocument(y,e))}l.Be&&(t.set(d,l.ke()),l.qe())}}));let i=Oe();this.He.forEach(((l,d)=>{let p=!0;d.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(i=i.add(l))})),this.je.forEach(((l,d)=>d.setReadTime(e)));const o=new Uc(e,t,this.Ye,this.je,i);return this.je=Qr(),this.Je=Bu(),this.He=Bu(),this.Ye=new it(De),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new G0,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new St(De),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new St(De),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new G0),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Bu(){return new it(ye.comparator)}function K0(){return new it(ye.comparator)}const aA={asc:"ASCENDING",desc:"DESCENDING"},lA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uA={and:"AND",or:"OR"};class cA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rf(r,e){return r.useProto3Json||Dc(e)?e:{value:e}}function vc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function dA(r,e){return vc(r,e.toTimestamp())}function vr(r){return qe(!!r,49232),ke.fromTimestamp((function(t){const i=zs(t);return new et(i.seconds,i.nanos)})(r))}function Yf(r,e){return sf(r,e).canonicalString()}function sf(r,e){const t=(function(o){return new Ze(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function N_(r){const e=Ze.fromString(r);return qe(O_(e),10190,{key:e.toString()}),e}function of(r,e){return Yf(r.databaseId,e.path)}function Vh(r,e){const t=N_(e);if(t.get(1)!==r.databaseId.projectId)throw new pe(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new pe(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(R_(t))}function b_(r,e){return Yf(r.databaseId,e)}function hA(r){const e=N_(r);return e.length===4?Ze.emptyPath():R_(e)}function af(r){return new Ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function R_(r){return qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Q0(r,e,t){return{name:of(r,e),fields:t.value.mapValue.fields}}function fA(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:xe(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,E){return v.useProto3Json?(qe(E===void 0||typeof E=="string",58123),Ft.fromBase64String(E||"")):(qe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ft.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),d=e.targetChange.cause,p=d&&(function(v){const E=v.code===void 0?Q.UNKNOWN:k_(v.code);return new pe(E,v.message||"")})(d);t=new A_(i,o,l,p||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Vh(r,i.document.name),l=vr(i.document.updateTime),d=i.document.createTime?vr(i.document.createTime):ke.min(),p=new on({mapValue:{fields:i.document.fields}}),y=Gt.newFoundDocument(o,l,d,p),v=i.targetIds||[],E=i.removedTargetIds||[];t=new Zu(v,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Vh(r,i.document),l=i.readTime?vr(i.readTime):ke.min(),d=Gt.newNoDocument(o,l),p=i.removedTargetIds||[];t=new Zu([],p,d.key,d)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Vh(r,i.document),l=i.removedTargetIds||[];t=new Zu([],l,o,null)}else{if(!("filter"in e))return xe(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,d=new nA(o,l),p=i.targetId;t=new S_(p,d)}}return t}function pA(r,e){let t;if(e instanceof wl)t={update:Q0(r,e.key,e.value)};else if(e instanceof Gf)t={delete:of(r,e.key)};else if(e instanceof Ks)t={update:Q0(r,e.key,e.data),updateMask:TA(e.fieldMask)};else{if(!(e instanceof ZS))return xe(16599,{Vt:e.type});t={verify:of(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,d){const p=d.transform;if(p instanceof gc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ul)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof cl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof yc)return{fieldPath:d.field.canonicalString(),increment:p.Ae};throw xe(20930,{transform:d.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:dA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:xe(27497)})(r,e.precondition)),t}function mA(r,e){return r&&r.length>0?(qe(e!==void 0,14353),r.map((t=>(function(o,l){let d=o.updateTime?vr(o.updateTime):vr(l);return d.isEqual(ke.min())&&(d=vr(l)),new YS(d,o.transformResults||[])})(t,e)))):[]}function gA(r,e){return{documents:[b_(r,e.path)]}}function yA(r,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=b_(r,o);const l=(function(v){if(v.length!==0)return D_(Tr.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const d=(function(v){if(v.length!==0)return v.map((E=>(function(C){return{field:Co(C.field),direction:wA(C.dir)}})(E)))})(e.orderBy);d&&(t.structuredQuery.orderBy=d);const p=rf(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function vA(r){let e=hA(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){qe(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const C=P_(T);return C instanceof Tr&&u_(C)?C.getFilters():[C]})(t.where));let d=[];t.orderBy&&(d=(function(T){return T.map((C=>(function(q){return new mc(No(q.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(C)))})(t.orderBy));let p=null;t.limit&&(p=(function(T){let C;return C=typeof T=="object"?T.value:T,Dc(C)?null:C})(t.limit));let y=null;t.startAt&&(y=(function(T){const C=!!T.before,L=T.values||[];return new pc(L,C)})(t.startAt));let v=null;return t.endAt&&(v=(function(T){const C=!T.before,L=T.values||[];return new pc(L,C)})(t.endAt)),jS(e,o,d,l,p,"F",y,v)}function _A(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function P_(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=No(t.unaryFilter.field);return kt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return kt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(t.unaryFilter.field);return kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=No(t.unaryFilter.field);return kt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return xe(61313);default:return xe(60726)}})(r):r.fieldFilter!==void 0?(function(t){return kt.create(No(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return xe(58110);default:return xe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Tr.create(t.compositeFilter.filters.map((i=>P_(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return xe(1026)}})(t.compositeFilter.op))})(r):xe(30097,{filter:r})}function wA(r){return aA[r]}function EA(r){return lA[r]}function xA(r){return uA[r]}function Co(r){return{fieldPath:r.canonicalString()}}function No(r){return Lt.fromServerFormat(r.fieldPath)}function D_(r){return r instanceof kt?(function(t){if(t.op==="=="){if(j0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NAN"}};if(V0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(j0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NAN"}};if(V0(t.value))return{unaryFilter:{field:Co(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(t.field),op:EA(t.op),value:t.value}}})(r):r instanceof Tr?(function(t){const i=t.getFilters().map((o=>D_(o)));return i.length===1?i[0]:{compositeFilter:{op:xA(t.op),filters:i}}})(r):xe(54877,{filter:r})}function TA(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function O_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,i,o,l=ke.min(),d=ke.min(),p=Ft.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(e){return new Ps(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ps(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.yt=e}}function kA(r){const e=vA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?nf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.Cn=new AA}addToCollectionParentIndex(e,t){return this.Cn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Us.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Us.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class AA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new St(Ze.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new St(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},V_=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(V_,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new $o(0)}static cr(){return new $o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="LruGarbageCollector",CA=1048576;function J0([r,e],[t,i]){const o=De(r,t);return o===0?De(e,i):o}class NA{constructor(e){this.Ir=e,this.buffer=new St(J0),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();J0(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class bA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(X0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jo(t)?ie(X0,"Ignoring IndexedDB error during garbage collection: ",t):await Xo(t)}await this.Vr(3e5)}))}}class RA{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Pc.ce);const i=new NA(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Y0)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Y0):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,d,p,y,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,d=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(i=T,p=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,y=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(v=Date.now(),So()<=Pe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-E}ms
	Determined least recently used ${o} in `+(p-d)+`ms
	Removed ${l} targets in `+(y-p)+`ms
	Removed ${T} documents in `+(v-y)+`ms
Total Duration: ${v-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function PA(r,e){return new RA(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.changes=new Mi((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&tl(i.mutation,o,yn.empty(),et.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Oe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Oe()){const o=Ii();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let d=Ga();return l.forEach(((p,y)=>{d=d.insert(p,y.overlayedDocument)})),d}))))}getOverlayedDocuments(e,t){const i=Ii();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Oe())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((d,p)=>{t.set(d,p)}))}))}computeViews(e,t,i,o){let l=Qr();const d=el(),p=(function(){return el()})();return t.forEach(((y,v)=>{const E=i.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof Ks)?l=l.insert(v.key,v):E!==void 0?(d.set(v.key,E.mutation.getFieldMask()),tl(E.mutation,v,E.mutation.getFieldMask(),et.now())):d.set(v.key,yn.empty())})),this.recalculateAndSaveOverlays(e,l).next((y=>(y.forEach(((v,E)=>d.set(v,E))),t.forEach(((v,E)=>p.set(v,new OA(E,d.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const i=el();let o=new it(((d,p)=>d-p)),l=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((d=>{for(const p of d)p.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let E=i.get(y)||yn.empty();E=p.applyToLocalView(v,E),i.set(y,E);const T=(o.get(p.batchId)||Oe()).add(y);o=o.insert(p.batchId,T)}))})).next((()=>{const d=[],p=o.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),v=y.key,E=y.value,T=y_();E.forEach((C=>{if(!l.has(C)){const L=T_(t.get(C),i.get(C));L!==null&&T.set(C,L),l=l.add(C)}})),d.push(this.documentOverlayCache.saveOverlays(e,v,T))}return W.waitFor(d)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(d){return ye.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):MS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const d=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(Ii());let p=il,y=l;return d.next((v=>W.forEach(v,((E,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next((C=>{y=y.insert(E,C)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,y,v,Oe()))).next((E=>({batchId:p,changes:g_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next((i=>{let o=Ga();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let d=Ga();return this.indexManager.getCollectionParents(e,l).next((p=>W.forEach(p,(y=>{const v=(function(T,C){return new Vc(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,y.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,i,o).next((E=>{E.forEach(((T,C)=>{d=d.insert(T,C)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((d=>(l=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((d=>{l.forEach(((y,v)=>{const E=v.getKey();d.get(E)===null&&(d=d.insert(E,Gt.newInvalidDocument(E)))}));let p=Ga();return d.forEach(((y,v)=>{const E=l.get(y);E!==void 0&&tl(E.mutation,v,yn.empty(),et.now()),Mc(t,v)&&(p=p.insert(y,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return W.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:vr(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:kA(o.bundledQuery),readTime:vr(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.overlays=new it(ye.comparator),this.qr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ii();return W.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=Ii(),l=t.length+1,d=new ye(t.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const y=p.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&y.largestBatchId>i&&o.set(y.getKey(),y)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it(((v,E)=>v-E));const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>i){let E=l.get(v.largestBatchId);E===null&&(E=Ii(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const p=Ii(),y=l.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,E)=>p.set(v,E))),!(p.size()>=o)););return W.resolve(p)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const d=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(i.key,new tA(t,i));let l=this.qr.get(t);l===void 0&&(l=Oe(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.Qr=new St(Rt.$r),this.Ur=new St(Rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new Rt(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new ye(new Ze([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(d=>{this.Gr(d),l.push(d.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ye(new Ze([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=Oe();return this.Ur.forEachInRange([i,o],(d=>{l=l.add(d.key)})),l}containsKey(e){const t=new Rt(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ye.comparator(e.key,t.key)||De(e.Yr,t.Yr)}static Kr(e,t){return De(e.Yr,t.Yr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new St(Rt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new eA(l,t,i,o);this.mutationQueue.push(d);for(const p of o)this.Zr=this.Zr.add(new Rt(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return W.resolve(d)}lookupMutationBatch(e,t){return W.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Uf:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(d=>{const p=this.Xr(d.Yr);l.push(p)})),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new St(De);return t.forEach((o=>{const l=new Rt(o,0),d=new Rt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,d],(p=>{i=i.add(p.Yr)}))})),W.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const d=new Rt(new ye(l),0);let p=new St(De);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!i.isPrefixOf(v)&&(v.length===o&&(p=p.add(y.Yr)),!0)}),d),W.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){qe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return W.forEach(t.mutations,(o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new Rt(t,0),o=this.Zr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.ri=e,this.docs=(function(){return new it(ye.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,d=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:d}),this.size+=d-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():Gt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Gt.newInvalidDocument(o))})),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const d=t.path,p=new ye(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:v,value:{document:E}}=y.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||pS(fS(E),i)<=0||(o.has(E.key)||Mc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){xe(9500)}ii(e,t){return W.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new zA(this)}getSize(e){return W.resolve(this.size)}}class zA extends DA{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),W.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.persistence=e,this.si=new Mi((t=>$f(t)),Hf),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.oi=0,this._i=new Xf,this.targetCount=0,this.ai=$o.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),W.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Pr(t),W.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((d,p)=>{p.sequenceNumber<=t&&i.get(p.targetId)===null&&(this.si.delete(d),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),W.waitFor(l).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((d=>{l.push(o.markPotentiallyOrphaned(e,d))})),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.ui={},this.overlays={},this.ci=new Pc(0),this.li=!1,this.li=!0,this.hi=new LA,this.referenceDelegate=e(this),this.Pi=new BA(this),this.indexManager=new SA,this.remoteDocumentCache=(function(o){return new UA(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new IA(t),this.Ii=new jA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new FA(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ie("MemoryPersistence","Starting transaction:",e);const o=new $A(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return W.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class $A extends gS{constructor(e){super(),this.currentSequenceNumber=e}}class Jf{constructor(e){this.persistence=e,this.Ri=new Xf,this.Vi=null}static mi(e){return new Jf(e)}get fi(){if(this.Vi)return this.Vi;throw xe(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,(i=>{const o=ye.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,ke.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class _c{constructor(e,t){this.persistence=e,this.pi=new Mi((i=>_S(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=PA(this,t)}static mi(e,t){return new _c(e,t)}Ei(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return W.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?W.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(d=>this.br(e,d,t).next((p=>{p||(i++,l.removeEntry(d,ke.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),W.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yu(e.data.value)),t}br(e,t,i){return W.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Oe(),o=Oe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Zf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return JE()?8:yS(Kt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((d=>{l.result=d})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((d=>{l.result=d}))})).next((()=>{if(l.result)return;const d=new HA;return this.Ss(e,t,d).next((p=>{if(l.result=p,this.Vs)return this.bs(e,t,d,p.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(So()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ao(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(So()<=Pe.DEBUG&&ie("QueryEngine","Query:",Ao(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(So()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ao(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(t))):W.resolve())}ys(e,t){if(U0(t))return W.resolve(null);let i=yr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=nf(t,null,"F"),i=yr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const d=Oe(...l);return this.ps.getDocuments(e,d).next((p=>this.indexManager.getMinOffset(e,i).next((y=>{const v=this.Ds(t,p);return this.Cs(t,v,d,y.readTime)?this.ys(e,nf(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,i,o){return U0(t)||o.isEqual(ke.min())?W.resolve(null):this.ps.getDocuments(e,i).next((l=>{const d=this.Ds(t,l);return this.Cs(t,d,i,o)?W.resolve(null):(So()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ao(t)),this.vs(e,d,t,hS(o,il)).next((p=>p)))}))}Ds(e,t){let i=new St(p_(e));return t.forEach(((o,l)=>{Mc(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return So()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ao(t)),this.ps.getDocumentsMatchingQuery(e,t,Us.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((d=>{l=l.insert(d.key,d)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="LocalStore",WA=3e8;class GA{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new it(De),this.xs=new Mi((l=>$f(l)),Hf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function KA(r,e,t,i){return new GA(r,e,t,i)}async function M_(r,e){const t=Ae(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const d=[],p=[];let y=Oe();for(const v of o){d.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}for(const v of l){p.push(v.batchId);for(const E of v.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(i,y).next((v=>({Ls:v,removedBatchIds:d,addedBatchIds:p})))}))}))}function QA(r,e){const t=Ae(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,y,v,E){const T=v.batch,C=T.keys();let L=W.resolve();return C.forEach((q=>{L=L.next((()=>E.getEntry(y,q))).next((B=>{const $=v.docVersions.get(q);qe($!==null,48541),B.version.compareTo($)<0&&(T.applyToRemoteDocument(B,v),B.isValidDocument()&&(B.setReadTime(v.commitVersion),E.addEntry(B)))}))})),L.next((()=>p.mutationQueue.removeMutationBatch(y,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(p){let y=Oe();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(y=y.add(p.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function L_(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function YA(r,e){const t=Ae(r),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const d=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const p=[];e.targetChanges.forEach(((E,T)=>{const C=o.get(T);if(!C)return;p.push(t.Pi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.Pi.addMatchingKeys(l,E.addedDocuments,T))));let L=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?L=L.withResumeToken(Ft.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,i)),o=o.insert(T,L),(function(B,$,oe){return B.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=WA?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0})(C,L,E)&&p.push(t.Pi.updateTargetData(l,L))}));let y=Qr(),v=Oe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),p.push(XA(l,d,e.documentUpdates).next((E=>{y=E.ks,v=E.qs}))),!i.isEqual(ke.min())){const E=t.Pi.getLastRemoteSnapshotVersion(l).next((T=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));p.push(E)}return W.waitFor(p).next((()=>d.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,y,v))).next((()=>y))})).then((l=>(t.Ms=o,l)))}function XA(r,e,t){let i=Oe(),o=Oe();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let d=Qr();return t.forEach(((p,y)=>{const v=l.get(p);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(p)),y.isNoDocument()&&y.version.isEqual(ke.min())?(e.removeEntry(p,y.readTime),d=d.insert(p,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),d=d.insert(p,y)):ie(ep,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",y.version)})),{ks:d,qs:o}}))}function JA(r,e){const t=Ae(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Uf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function ZA(r,e){const t=Ae(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,W.resolve(o)):t.Pi.allocateTargetId(i).next((d=>(o=new Ps(e,d,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function lf(r,e,t){const i=Ae(r),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(d=>i.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!Jo(d))throw d;ie(ep,`Failed to update sequence numbers for target ${e}: ${d}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function Z0(r,e,t){const i=Ae(r);let o=ke.min(),l=Oe();return i.persistence.runTransaction("Execute query","readwrite",(d=>(function(y,v,E){const T=Ae(y),C=T.xs.get(E);return C!==void 0?W.resolve(T.Ms.get(C)):T.Pi.getTargetData(v,E)})(i,d,yr(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(d,p.targetId).next((y=>{l=y}))})).next((()=>i.Fs.getDocumentsMatchingQuery(d,e,t?o:ke.min(),t?l:Oe()))).next((p=>(eC(i,FS(e),p),{documents:p,Qs:l})))))}function eC(r,e,t){let i=r.Os.get(e)||ke.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.Os.set(e,i)}class ey{constructor(){this.activeTargetIds=qS()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tC{constructor(){this.Mo=new ey,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ey,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="ConnectivityMonitor";class ny{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(ty,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(ty,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u=null;function uf(){return $u===null?$u=(function(){return 268435456+Math.round(2147483648*Math.random())})():$u++,"0x"+$u.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="RestConnection",rC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===hc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const d=uf(),p=this.zo(e,t.toUriEncodedString());ie(jh,`Sending RPC '${e}' ${d}:`,p,i);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,l);const{host:v}=new URL(p),E=Wo(v);return this.Jo(e,p,y,i,E).then((T=>(ie(jh,`Received RPC '${e}' ${d}: `,T),T)),(T=>{throw Fo(jh,`RPC '${e}' ${d} failed with error: `,T,"url: ",p,"request:",i),T}))}Ho(e,t,i,o,l,d){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Yo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=rC[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class oC extends sC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const d=uf();return new Promise(((p,y)=>{const v=new Bv;v.setWithCredentials(!0),v.listenOnce($v.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Qu.NO_ERROR:const T=v.getResponseJson();ie(qt,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(T)),p(T);break;case Qu.TIMEOUT:ie(qt,`RPC '${e}' ${d} timed out`),y(new pe(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const C=v.getStatus();if(ie(qt,`RPC '${e}' ${d} failed with status:`,C,"response text:",v.getResponseText()),C>0){let L=v.getResponseJson();Array.isArray(L)&&(L=L[0]);const q=L?.error;if(q&&q.status&&q.message){const B=(function(oe){const de=oe.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(de)>=0?de:Q.UNKNOWN})(q.status);y(new pe(B,q.message))}else y(new pe(Q.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new pe(Q.UNAVAILABLE,"Connection failed."));break;default:xe(9055,{l_:e,streamId:d,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ie(qt,`RPC '${e}' ${d} completed.`)}}));const E=JSON.stringify(o);ie(qt,`RPC '${e}' ${d} sending request:`,o),v.send(t,"POST",E,i,15)}))}T_(e,t,i){const o=uf(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=Wv(),p=qv(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,i),y.encodeInitMessageHeaders=!0;const E=l.join("");ie(qt,`Creating RPC '${e}' stream ${o}: ${E}`,y);const T=d.createWebChannel(E,y);this.I_(T);let C=!1,L=!1;const q=new iC({Yo:$=>{L?ie(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(C||(ie(qt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),C=!0),ie(qt,`RPC '${e}' stream ${o} sending:`,$),T.send($))},Zo:()=>T.close()}),B=($,oe,de)=>{$.listen(oe,(he=>{try{de(he)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return B(T,Wa.EventType.OPEN,(()=>{L||(ie(qt,`RPC '${e}' stream ${o} transport opened.`),q.o_())})),B(T,Wa.EventType.CLOSE,(()=>{L||(L=!0,ie(qt,`RPC '${e}' stream ${o} transport closed`),q.a_(),this.E_(T))})),B(T,Wa.EventType.ERROR,($=>{L||(L=!0,Fo(qt,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),q.a_(new pe(Q.UNAVAILABLE,"The operation could not be completed")))})),B(T,Wa.EventType.MESSAGE,($=>{if(!L){const oe=$.data[0];qe(!!oe,16349);const de=oe,he=de?.error||de[0]?.error;if(he){ie(qt,`RPC '${e}' stream ${o} received error:`,he);const fe=he.status;let Ve=(function(I){const A=_t[I];if(A!==void 0)return k_(A)})(fe),H=he.message;Ve===void 0&&(Ve=Q.INTERNAL,H="Unknown error status: "+fe+" with message "+he.message),L=!0,q.a_(new pe(Ve,H)),T.close()}else ie(qt,`RPC '${e}' stream ${o} received:`,oe),q.u_(oe)}})),B(p,Hv.STAT_EVENT,($=>{$.stat===Yh.PROXY?ie(qt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Yh.NOPROXY&&ie(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.__()}),0),q}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(r){return new cA(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="PersistentStream";class U_{constructor(e,t,i,o,l,d,p,y){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new F_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Kr(t.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new pe(Q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class aC extends U_{constructor(e,t,i,o,l,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=fA(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ke.min();const d=l.targetChange;return d.targetIds&&d.targetIds.length?ke.min():d.readTime?vr(d.readTime):ke.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=af(this.serializer),t.addTarget=(function(l,d){let p;const y=d.target;if(p=tf(y)?{documents:gA(l,y)}:{query:yA(l,y).ft},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=C_(l,d.resumeToken);const v=rf(l,d.expectedCount);v!==null&&(p.expectedCount=v)}else if(d.snapshotVersion.compareTo(ke.min())>0){p.readTime=vc(l,d.snapshotVersion.toTimestamp());const v=rf(l,d.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const i=_A(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=af(this.serializer),t.removeTarget=e,this.q_(t)}}class lC extends U_{constructor(e,t,i,o,l,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,d),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=mA(e.writeResults,e.commitTime),i=vr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=af(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>pA(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{}class cC extends uC{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new pe(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,d])=>this.connection.Go(e,sf(t,i),o,l,d))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(Q.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Ho(e,sf(t,i),o,d,p,l))).catch((d=>{throw d.name==="FirebaseError"?(d.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new pe(Q.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class dC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Kr(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="RemoteStore";class hC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((d=>{i.enqueueAndForget((async()=>{Li(this)&&(ie(Ri,"Restarting streams for network reachability change."),await(async function(y){const v=Ae(y);v.Ea.add(4),await xl(v),v.Ra.set("Unknown"),v.Ea.delete(4),await Bc(v)})(this))}))})),this.Ra=new dC(i,o)}}async function Bc(r){if(Li(r))for(const e of r.da)await e(!0)}async function xl(r){for(const e of r.da)await e(!1)}function z_(r,e){const t=Ae(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),sp(t)?rp(t):Zo(t).O_()&&np(t,e))}function tp(r,e){const t=Ae(r),i=Zo(t);t.Ia.delete(e),i.O_()&&B_(t,e),t.Ia.size===0&&(i.O_()?i.L_():Li(t)&&t.Ra.set("Unknown"))}function np(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zo(r).Y_(e)}function B_(r,e){r.Va.Ue(e),Zo(r).Z_(e)}function rp(r){r.Va=new oA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Zo(r).start(),r.Ra.ua()}function sp(r){return Li(r)&&!Zo(r).x_()&&r.Ia.size>0}function Li(r){return Ae(r).Ea.size===0}function $_(r){r.Va=void 0}async function fC(r){r.Ra.set("Online")}async function pC(r){r.Ia.forEach(((e,t)=>{np(r,e)}))}async function mC(r,e){$_(r),sp(r)?(r.Ra.ha(e),rp(r)):r.Ra.set("Unknown")}async function gC(r,e,t){if(r.Ra.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await(async function(o,l){const d=l.cause;for(const p of l.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,d),o.Ia.delete(p),o.Va.removeTarget(p))})(r,e)}catch(i){ie(Ri,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wc(r,i)}else if(e instanceof Zu?r.Va.Ze(e):e instanceof S_?r.Va.st(e):r.Va.tt(e),!t.isEqual(ke.min()))try{const i=await L_(r.localStore);t.compareTo(i)>=0&&await(function(l,d){const p=l.Va.Tt(d);return p.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const E=l.Ia.get(v);E&&l.Ia.set(v,E.withResumeToken(y.resumeToken,d))}})),p.targetMismatches.forEach(((y,v)=>{const E=l.Ia.get(y);if(!E)return;l.Ia.set(y,E.withResumeToken(Ft.EMPTY_BYTE_STRING,E.snapshotVersion)),B_(l,y);const T=new Ps(E.target,y,v,E.sequenceNumber);np(l,T)})),l.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(i){ie(Ri,"Failed to raise snapshot:",i),await wc(r,i)}}async function wc(r,e,t){if(!Jo(e))throw e;r.Ea.add(1),await xl(r),r.Ra.set("Offline"),t||(t=()=>L_(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ie(Ri,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Bc(r)}))}function H_(r,e){return e().catch((t=>wc(r,t,e)))}async function $c(r){const e=Ae(r),t=Hs(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Uf;for(;yC(e);)try{const o=await JA(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,vC(e,o)}catch(o){await wc(e,o)}q_(e)&&W_(e)}function yC(r){return Li(r)&&r.Ta.length<10}function vC(r,e){r.Ta.push(e);const t=Hs(r);t.O_()&&t.X_&&t.ea(e.mutations)}function q_(r){return Li(r)&&!Hs(r).x_()&&r.Ta.length>0}function W_(r){Hs(r).start()}async function _C(r){Hs(r).ra()}async function wC(r){const e=Hs(r);for(const t of r.Ta)e.ea(t.mutations)}async function EC(r,e,t){const i=r.Ta.shift(),o=Kf.from(i,e,t);await H_(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await $c(r)}async function xC(r,e){e&&Hs(r).X_&&await(async function(i,o){if((function(d){return rA(d)&&d!==Q.ABORTED})(o.code)){const l=i.Ta.shift();Hs(i).B_(),await H_(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await $c(i)}})(r,e),q_(r)&&W_(r)}async function sy(r,e){const t=Ae(r);t.asyncQueue.verifyOperationInProgress(),ie(Ri,"RemoteStore received new credentials");const i=Li(t);t.Ea.add(3),await xl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Bc(t)}async function TC(r,e){const t=Ae(r);e?(t.Ea.delete(2),await Bc(t)):e||(t.Ea.add(2),await xl(t),t.Ra.set("Unknown"))}function Zo(r){return r.ma||(r.ma=(function(t,i,o){const l=Ae(t);return l.sa(),new aC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:fC.bind(null,r),t_:pC.bind(null,r),r_:mC.bind(null,r),H_:gC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),sp(r)?rp(r):r.Ra.set("Unknown")):(await r.ma.stop(),$_(r))}))),r.ma}function Hs(r){return r.fa||(r.fa=(function(t,i,o){const l=Ae(t);return l.sa(),new lC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:_C.bind(null,r),r_:xC.bind(null,r),ta:wC.bind(null,r),na:EC.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await $c(r)):(await r.fa.stop(),r.Ta.length>0&&(ie(Ri,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const d=Date.now()+i,p=new ip(e,t,d,o,l);return p.start(i),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(r,e){if(Kr("AsyncQueue",`${e}: ${r}`),Jo(r))return new pe(Q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=Ga(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.ga=new it(ye.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):xe(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ho{constructor(e,t,i,o,l,d,p,y,v){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,i,o,l){const d=[];return t.forEach((p=>{d.push({type:0,doc:p})})),new Ho(e,t,Vo.emptySet(t),d,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class kC{constructor(){this.queries=oy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ae(t),l=o.queries;o.queries=oy(),l.forEach(((d,p)=>{for(const y of p.Sa)y.onError(i)}))})(this,new pe(Q.ABORTED,"Firestore shutting down"))}}function oy(){return new Mi((r=>f_(r)),jc)}async function SC(r,e){const t=Ae(r);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new IC,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(d){const p=op(d,`Initialization of query '${Ao(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&ap(t)}async function AC(r,e){const t=Ae(r),i=e.query;let o=3;const l=t.queries.get(i);if(l){const d=l.Sa.indexOf(e);d>=0&&(l.Sa.splice(d,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function CC(r,e){const t=Ae(r);let i=!1;for(const o of e){const l=o.query,d=t.queries.get(l);if(d){for(const p of d.Sa)p.Fa(o)&&(i=!0);d.wa=o}}i&&ap(t)}function NC(r,e,t){const i=Ae(r),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function ap(r){r.Ca.forEach((e=>{e.next()}))}var cf,ay;(ay=cf||(cf={})).Ma="default",ay.Cache="cache";class bC{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Ho(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==cf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.key=e}}class K_{constructor(e){this.key=e}}class RC{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Oe(),this.mutatedKeys=Oe(),this.eu=p_(e),this.tu=new Vo(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new iy,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,d=o,p=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const C=o.get(E),L=Mc(this.query,T)?T:null,q=!!C&&this.mutatedKeys.has(C.key),B=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let $=!1;C&&L?C.data.isEqual(L.data)?q!==B&&(i.track({type:3,doc:L}),$=!0):this.su(C,L)||(i.track({type:2,doc:L}),$=!0,(y&&this.eu(L,y)>0||v&&this.eu(L,v)<0)&&(p=!0)):!C&&L?(i.track({type:0,doc:L}),$=!0):C&&!L&&(i.track({type:1,doc:C}),$=!0,(y||v)&&(p=!0)),$&&(L?(d=d.add(L),l=B?l.add(E):l.delete(E)):(d=d.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const E=this.query.limitType==="F"?d.last():d.first();d=d.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{tu:d,iu:i,Cs:p,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const d=e.iu.ya();d.sort(((E,T)=>(function(L,q){const B=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe(20277,{Rt:$})}};return B(L)-B(q)})(E.type,T.type)||this.eu(E.doc,T.doc))),this.ou(i),o=o??!1;const p=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,v=y!==this.Za;return this.Za=y,d.length!==0||v?{snapshot:new Ho(this.query,e.tu,l,d,e.mutatedKeys,y===0,v,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Oe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new K_(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new G_(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ho.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const lp="SyncEngine";class PC{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class DC{constructor(e){this.key=e,this.hu=!1}}class OC{constructor(e,t,i,o,l,d){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new Mi((p=>f_(p)),jc),this.Iu=new Map,this.Eu=new Set,this.du=new it(ye.comparator),this.Au=new Map,this.Ru=new Xf,this.Vu={},this.mu=new Map,this.fu=$o.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VC(r,e,t=!0){const i=ew(r);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await Q_(i,e,t,!0),o}async function jC(r,e){const t=ew(r);await Q_(t,e,!0,!1)}async function Q_(r,e,t,i){const o=await ZA(r.localStore,yr(e)),l=o.targetId,d=r.sharedClientState.addLocalQueryTarget(l,t);let p;return i&&(p=await MC(r,e,l,d==="current",o.resumeToken)),r.isPrimaryClient&&t&&z_(r.remoteStore,o),p}async function MC(r,e,t,i,o){r.pu=(T,C,L)=>(async function(B,$,oe,de){let he=$.view.ru(oe);he.Cs&&(he=await Z0(B.localStore,$.query,!1).then((({documents:N})=>$.view.ru(N,he))));const fe=de&&de.targetChanges.get($.targetId),Ve=de&&de.targetMismatches.get($.targetId)!=null,H=$.view.applyChanges(he,B.isPrimaryClient,fe,Ve);return uy(B,$.targetId,H.au),H.snapshot})(r,T,C,L);const l=await Z0(r.localStore,e,!0),d=new RC(e,l.Qs),p=d.ru(l.documents),y=El.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",o),v=d.applyChanges(p,r.isPrimaryClient,y);uy(r,t,v.au);const E=new PC(e,t,d);return r.Tu.set(e,E),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),v.snapshot}async function LC(r,e,t){const i=Ae(r),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((d=>!jc(d,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await lf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&tp(i.remoteStore,o.targetId),df(i,o.targetId)})).catch(Xo)):(df(i,o.targetId),await lf(i.localStore,o.targetId,!0))}async function FC(r,e){const t=Ae(r),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),tp(t.remoteStore,i.targetId))}async function UC(r,e,t){const i=GC(r);try{const o=await(function(d,p){const y=Ae(d),v=et.now(),E=p.reduce(((L,q)=>L.add(q.key)),Oe());let T,C;return y.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let q=Qr(),B=Oe();return y.Ns.getEntries(L,E).next(($=>{q=$,q.forEach(((oe,de)=>{de.isValidDocument()||(B=B.add(oe))}))})).next((()=>y.localDocuments.getOverlayedDocuments(L,q))).next(($=>{T=$;const oe=[];for(const de of p){const he=JS(de,T.get(de.key).overlayedDocument);he!=null&&oe.push(new Ks(de.key,he,o_(he.value.mapValue),Rn.exists(!0)))}return y.mutationQueue.addMutationBatch(L,v,oe,p)})).next(($=>{C=$;const oe=$.applyToLocalDocumentSet(T,B);return y.documentOverlayCache.saveOverlays(L,$.batchId,oe)}))})).then((()=>({batchId:C.batchId,changes:g_(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(d,p,y){let v=d.Vu[d.currentUser.toKey()];v||(v=new it(De)),v=v.insert(p,y),d.Vu[d.currentUser.toKey()]=v})(i,o.batchId,t),await Tl(i,o.changes),await $c(i.remoteStore)}catch(o){const l=op(o,"Failed to persist write");t.reject(l)}}async function Y_(r,e){const t=Ae(r);try{const i=await YA(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const d=t.Au.get(l);d&&(qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?qe(d.hu,14607):o.removedDocuments.size>0&&(qe(d.hu,42227),d.hu=!1))})),await Tl(t,i,e)}catch(i){await Xo(i)}}function ly(r,e,t){const i=Ae(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,d)=>{const p=d.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(d,p){const y=Ae(d);y.onlineState=p;let v=!1;y.queries.forEach(((E,T)=>{for(const C of T.Sa)C.va(p)&&(v=!0)})),v&&ap(y)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function zC(r,e,t){const i=Ae(r);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let d=new it(ye.comparator);d=d.insert(l,Gt.newNoDocument(l,ke.min()));const p=Oe().add(l),y=new Uc(ke.min(),new Map,new it(De),d,p);await Y_(i,y),i.du=i.du.remove(l),i.Au.delete(e),up(i)}else await lf(i.localStore,e,!1).then((()=>df(i,e,t))).catch(Xo)}async function BC(r,e){const t=Ae(r),i=e.batch.batchId;try{const o=await QA(t.localStore,e);J_(t,i,null),X_(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Tl(t,o)}catch(o){await Xo(o)}}async function $C(r,e,t){const i=Ae(r);try{const o=await(function(d,p){const y=Ae(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return y.mutationQueue.lookupMutationBatch(v,p).next((T=>(qe(T!==null,37113),E=T.keys(),y.mutationQueue.removeMutationBatch(v,T)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,E,p))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>y.localDocuments.getDocuments(v,E)))}))})(i.localStore,e);J_(i,e,t),X_(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Tl(i,o)}catch(o){await Xo(o)}}function X_(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function J_(r,e,t){const i=Ae(r);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function df(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Iu.get(e))r.Tu.delete(i),t&&r.Pu.yu(i,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((i=>{r.Ru.containsKey(i)||Z_(r,i)}))}function Z_(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(tp(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),up(r))}function uy(r,e,t){for(const i of t)i instanceof G_?(r.Ru.addReference(i.key,e),HC(r,i)):i instanceof K_?(ie(lp,"Document no longer in limbo: "+i.key),r.Ru.removeReference(i.key,e),r.Ru.containsKey(i.key)||Z_(r,i.key)):xe(19791,{wu:i})}function HC(r,e){const t=e.key,i=t.path.canonicalString();r.du.get(t)||r.Eu.has(i)||(ie(lp,"New document in limbo: "+t),r.Eu.add(i),up(r))}function up(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new ye(Ze.fromString(e)),i=r.fu.next();r.Au.set(i,new DC(t)),r.du=r.du.insert(t,i),z_(r.remoteStore,new Ps(yr(qf(t.path)),i,"TargetPurposeLimboResolution",Pc.ce))}}async function Tl(r,e,t){const i=Ae(r),o=[],l=[],d=[];i.Tu.isEmpty()||(i.Tu.forEach(((p,y)=>{d.push(i.pu(y,e,t).then((v=>{if((v||t)&&i.isPrimaryClient){const E=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;i.sharedClientState.updateQueryState(y.targetId,E?"current":"not-current")}if(v){o.push(v);const E=Zf.As(y.targetId,v);l.push(E)}})))})),await Promise.all(d),i.Pu.H_(o),await(async function(y,v){const E=Ae(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(v,(C=>W.forEach(C.Es,(L=>E.persistence.referenceDelegate.addReference(T,C.targetId,L))).next((()=>W.forEach(C.ds,(L=>E.persistence.referenceDelegate.removeReference(T,C.targetId,L)))))))))}catch(T){if(!Jo(T))throw T;ie(ep,"Failed to update sequence numbers: "+T)}for(const T of v){const C=T.targetId;if(!T.fromCache){const L=E.Ms.get(C),q=L.snapshotVersion,B=L.withLastLimboFreeSnapshotVersion(q);E.Ms=E.Ms.insert(C,B)}}})(i.localStore,l))}async function qC(r,e){const t=Ae(r);if(!t.currentUser.isEqual(e)){ie(lp,"User change. New user:",e.toKey());const i=await M_(t.localStore,e);t.currentUser=e,(function(l,d){l.mu.forEach((p=>{p.forEach((y=>{y.reject(new pe(Q.CANCELLED,d))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Tl(t,i.Ls)}}function WC(r,e){const t=Ae(r),i=t.Au.get(e);if(i&&i.hu)return Oe().add(i.key);{let o=Oe();const l=t.Iu.get(e);if(!l)return o;for(const d of l){const p=t.Tu.get(d);o=o.unionWith(p.view.nu)}return o}}function ew(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zC.bind(null,e),e.Pu.H_=CC.bind(null,e.eventManager),e.Pu.yu=NC.bind(null,e.eventManager),e}function GC(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$C.bind(null,e),e}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return KA(this.persistence,new qA,e.initialUser,this.serializer)}Cu(e){return new j_(Jf.mi,this.serializer)}Du(e){return new tC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class KC extends Ec{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){qe(this.persistence.referenceDelegate instanceof _c,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new bA(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new j_((i=>_c.mi(i,t)),this.serializer)}}class hf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ly(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=qC.bind(null,this.syncEngine),await TC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kC})()}createDatastore(e){const t=zc(e.databaseInfo.databaseId),i=(function(l){return new oC(l)})(e.databaseInfo);return(function(l,d,p,y){return new cC(l,d,p,y)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,d,p){return new hC(i,o,l,d,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>ly(this.syncEngine,t,0)),(function(){return ny.v()?new ny:new nC})())}createSyncEngine(e,t){return(function(o,l,d,p,y,v,E){const T=new OC(o,l,d,p,y,v);return E&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const i=Ae(t);ie(Ri,"RemoteStore shutting down."),i.Ea.add(5),await xl(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}hf.provider={build:()=>new hf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Kr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="FirestoreClient";class YC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=Lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async d=>{ie(qs,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(i,(d=>(ie(qs,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=op(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Lh(r,e){r.asyncQueue.verifyOperationInProgress(),ie(qs,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async o=>{i.isEqual(o)||(await M_(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function cy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await XC(r);ie(qs,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>sy(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,o)=>sy(e.remoteStore,o))),r._onlineComponents=e}async function XC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie(qs,"Using user provided OfflineComponentProvider");try{await Lh(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Fo("Error using user provided cache. Falling back to memory cache: "+t),await Lh(r,new Ec)}}else ie(qs,"Using default OfflineComponentProvider"),await Lh(r,new KC(void 0));return r._offlineComponents}async function tw(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie(qs,"Using user provided OnlineComponentProvider"),await cy(r,r._uninitializedComponentsProvider._online)):(ie(qs,"Using default OnlineComponentProvider"),await cy(r,new hf))),r._onlineComponents}function JC(r){return tw(r).then((e=>e.syncEngine))}async function dy(r){const e=await tw(r),t=e.eventManager;return t.onListen=VC.bind(null,e.syncEngine),t.onUnlisten=LC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FC.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firestore.googleapis.com",fy=!0;class py{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new pe(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rw,this.ssl=fy}else this.host=e.host,this.ssl=e.ssl??fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=V_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CA)throw new pe(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nw(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new pe(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new pe(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new pe(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new tS;switch(i.type){case"firstParty":return new iS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new pe(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=hy.get(t);i&&(ie("ComponentProvider","Removing Datastore"),hy.delete(t),i.terminate())})(this),Promise.resolve()}}function ZC(r,e,t,i={}){r=gr(r,Hc);const o=Wo(e),l=r._getSettings(),d={...l,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(by(`https://${p}`),Ry("Firestore",!0)),l.host!==rw&&l.host!==p&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...l,host:p,ssl:o,emulatorOptions:i};if(!Fs(y,d)&&(r._setSettings(y),i.mockUserToken)){let v,E;if(typeof i.mockUserToken=="string")v=i.mockUserToken,E=Wt.MOCK_USER;else{v=HE(i.mockUserToken,r._app?.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new pe(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Wt(T)}r._authCredentials=new nS(new Kv(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new qc(this.firestore,e,this._query)}}class Et{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}toJSON(){return{type:Et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(_l(t,Et._jsonSchema))return new Et(e,i||null,new ye(Ze.fromString(t.referencePath)))}}Et._jsonSchemaVersion="firestore/documentReference/1.0",Et._jsonSchema={type:wt("string",Et._jsonSchemaVersion),referencePath:wt("string")};class Ms extends qc{constructor(e,t,i){super(e,t,qf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new ye(e))}withConverter(e){return new Ms(this.firestore,e,this._path)}}function Cn(r,e,...t){if(r=gt(r),Qv("collection","path",e),r instanceof Hc){const i=Ze.fromString(e,...t);return A0(i),new Ms(r,null,i)}{if(!(r instanceof Et||r instanceof Ms))throw new pe(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ze.fromString(e,...t));return A0(i),new Ms(r.firestore,null,i)}}function jo(r,e,...t){if(r=gt(r),arguments.length===1&&(e=Lf.newId()),Qv("doc","path",e),r instanceof Hc){const i=Ze.fromString(e,...t);return S0(i),new Et(r,null,new ye(i))}{if(!(r instanceof Et||r instanceof Ms))throw new pe(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ze.fromString(e,...t));return S0(i),new Et(r.firestore,r instanceof Ms?r.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="AsyncQueue";class gy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new F_(this,"async_queue_retry"),this._c=()=>{const i=Mh();i&&ie(my,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Mh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Mh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ki;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Jo(e))throw e;ie(my,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Kr("INTERNAL UNHANDLED ERROR: ",yy(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=ip.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&xe(47125,{Pc:yy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Pi extends Hc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new gy,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gy(e),this._firestoreClient=void 0,await e}}}function eN(r,e){const t=typeof r=="object"?r:xf(),i=typeof r=="string"?r:hc,o=Vi(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=BE("firestore");l&&ZC(o,...l)}return o}function sw(r){if(r._terminated)throw new pe(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||tN(r),r._firestoreClient}function tN(r){const e=r._freezeSettings(),t=(function(o,l,d,p){return new xS(o,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,nw(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new YC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Ft.fromBase64String(e))}catch(t){throw new pe(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_l(e,Nn._jsonSchema))return Nn.fromBase64String(e.bytes)}}Nn._jsonSchemaVersion="firestore/bytes/1.0",Nn._jsonSchema={type:wt("string",Nn._jsonSchemaVersion),bytes:wt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_r._jsonSchemaVersion}}static fromJSON(e){if(_l(e,_r._jsonSchema))return new _r(e.latitude,e.longitude)}}_r._jsonSchemaVersion="firestore/geoPoint/1.0",_r._jsonSchema={type:wt("string",_r._jsonSchemaVersion),latitude:wt("number"),longitude:wt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_l(e,wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wr(e.vectorValues);throw new pe(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wr._jsonSchemaVersion="firestore/vectorValue/1.0",wr._jsonSchema={type:wt("string",wr._jsonSchemaVersion),vectorValues:wt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=/^__.*__$/;class rN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ks(e,this.data,this.fieldMask,t,this.fieldTransforms):new wl(e,this.data,t,this.fieldTransforms)}}class iw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ks(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ow(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe(40011,{Ac:r})}}class dp{constructor(e,t,i,o,l,d){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new dp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){const t=this.path?.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return xc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ow(this.Ac)&&nN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||zc(e)}Cc(e,t,i,o=!1){return new dp({Ac:e,methodName:t,Dc:i,path:Lt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hp(r){const e=r._freezeSettings(),t=zc(r._databaseId);return new sN(r._databaseId,!!e.ignoreUndefinedProperties,t)}function aw(r,e,t,i,o,l={}){const d=r.Cc(l.merge||l.mergeFields?2:0,e,t,o);fp("Data must be an object, but it was:",d,i);const p=lw(i,d);let y,v;if(l.merge)y=new yn(d.fieldMask),v=d.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const C=ff(e,T,t);if(!d.contains(C))throw new pe(Q.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);cw(E,C)||E.push(C)}y=new yn(E),v=d.fieldTransforms.filter((T=>y.covers(T.field)))}else y=null,v=d.fieldTransforms;return new rN(new on(p),y,v)}class Gc extends cp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}function iN(r,e,t,i){const o=r.Cc(1,e,t);fp("Data must be an object, but it was:",o,i);const l=[],d=on.empty();Gs(i,((y,v)=>{const E=pp(e,y,t);v=gt(v);const T=o.yc(E);if(v instanceof Gc)l.push(E);else{const C=Kc(v,T);C!=null&&(l.push(E),d.set(E,C))}}));const p=new yn(l);return new iw(d,p,o.fieldTransforms)}function oN(r,e,t,i,o,l){const d=r.Cc(1,e,t),p=[ff(e,i,t)],y=[o];if(l.length%2!=0)throw new pe(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)p.push(ff(e,l[C])),y.push(l[C+1]);const v=[],E=on.empty();for(let C=p.length-1;C>=0;--C)if(!cw(v,p[C])){const L=p[C];let q=y[C];q=gt(q);const B=d.yc(L);if(q instanceof Gc)v.push(L);else{const $=Kc(q,B);$!=null&&(v.push(L),E.set(L,$))}}const T=new yn(v);return new iw(E,T,d.fieldTransforms)}function Kc(r,e){if(uw(r=gt(r)))return fp("Unsupported field value:",e,r),lw(r,e);if(r instanceof cp)return(function(i,o){if(!ow(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let d=0;for(const p of i){let y=Kc(p,o.wc(d));y==null&&(y={nullValue:"NULL_VALUE"}),l.push(y),d++}return{arrayValue:{values:l}}})(r,e)}return(function(i,o){if((i=gt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return WS(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=et.fromDate(i);return{timestampValue:vc(o.serializer,l)}}if(i instanceof et){const l=new et(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vc(o.serializer,l)}}if(i instanceof _r)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Nn)return{bytesValue:C_(o.serializer,i._byteString)};if(i instanceof Et){const l=o.databaseId,d=i.firestore._databaseId;if(!d.isEqual(l))throw o.Sc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Yf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof wr)return(function(d,p){return{mapValue:{fields:{[s_]:{stringValue:i_},[fc]:{arrayValue:{values:d.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return Wf(p.serializer,v)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${Ff(i)}`)})(r,e)}function lw(r,e){const t={};return Jv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(r,((i,o)=>{const l=Kc(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function uw(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof _r||r instanceof Nn||r instanceof Et||r instanceof cp||r instanceof wr)}function fp(r,e,t){if(!uw(t)||!Yv(t)){const i=Ff(t);throw i==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+i)}}function ff(r,e,t){if((e=gt(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return pp(r,e);throw xc("Field path arguments must be of type string or ",r,!1,void 0,t)}const aN=new RegExp("[~\\*/\\[\\]]");function pp(r,e,t){if(e.search(aN)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Wc(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function xc(r,e,t,i,o){const l=i&&!i.isEmpty(),d=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(l||d)&&(y+=" (found",l&&(y+=` in field ${i}`),d&&(y+=` in document ${o}`),y+=")"),new pe(Q.INVALID_ARGUMENT,p+r+y)}function cw(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lN extends dw{data(){return super.data()}}function hw(r,e){return typeof e=="string"?pp(r,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pe(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cN{convertValue(e,t="none"){switch($s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw xe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Gs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){const t=e.fields?.[fc].arrayValue?.values?.map((i=>mt(i.doubleValue)));return new wr(t)}convertGeoPoint(e){return new _r(mt(e.latitude),mt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Oc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ol(e));default:return null}}convertTimestamp(e){const t=zs(e);return new et(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ze.fromString(e);qe(O_(i),9688,{name:e});const o=new al(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Kr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Si extends dw{constructor(e,t,i,o,l,d){super(e,t,i,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(hw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Si._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Si._jsonSchemaVersion="firestore/documentSnapshot/1.0",Si._jsonSchema={type:wt("string",Si._jsonSchemaVersion),bundleSource:wt("string","DocumentSnapshot"),bundleName:wt("string"),bundle:wt("string")};class ec extends Si{data(e={}){return super.data(e)}}class Mo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Qa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new ec(this._firestore,this._userDataWriter,i.key,i,new Qa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((p=>{const y=new ec(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Qa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const y=new ec(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Qa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return p.type!==0&&(v=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),E=d.indexOf(p.doc.key)),{type:dN(p.type),doc:y,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new pe(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dN(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe(61501,{type:r})}}Mo._jsonSchemaVersion="firestore/querySnapshot/1.0",Mo._jsonSchema={type:wt("string",Mo._jsonSchemaVersion),bundleSource:wt("string","QuerySnapshot"),bundleName:wt("string"),bundle:wt("string")};class pw extends cN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,t)}}function hN(r,e,t){r=gr(r,Et);const i=gr(r.firestore,Pi),o=fw(r.converter,e,t);return Qc(i,[aw(hp(i),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Rn.none())])}function fN(r,e,t,...i){r=gr(r,Et);const o=gr(r.firestore,Pi),l=hp(o);let d;return d=typeof(e=gt(e))=="string"||e instanceof Wc?oN(l,"updateDoc",r._key,e,t,i):iN(l,"updateDoc",r._key,e),Qc(o,[d.toMutation(r._key,Rn.exists(!0))])}function mp(r){return Qc(gr(r.firestore,Pi),[new Gf(r._key,Rn.none())])}function Hu(r,e){const t=gr(r.firestore,Pi),i=jo(r),o=fw(r.converter,e);return Qc(t,[aw(hp(r.firestore),"addDoc",i._key,o,r.converter!==null,{}).toMutation(i._key,Rn.exists(!1))]).then((()=>i))}function Ls(r,...e){r=gt(r);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||vy(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(vy(e[i])){const y=e[i];e[i]=y.next?.bind(y),e[i+1]=y.error?.bind(y),e[i+2]=y.complete?.bind(y)}let l,d,p;if(r instanceof Et)d=gr(r.firestore,Pi),p=qf(r._key.path),l={next:y=>{e[i]&&e[i](pN(d,r,y))},error:e[i+1],complete:e[i+2]};else{const y=gr(r,qc);d=gr(y.firestore,Pi),p=y._query;const v=new pw(d);l={next:E=>{e[i]&&e[i](new Mo(d,v,y,E))},error:e[i+1],complete:e[i+2]},uN(r._query)}return(function(v,E,T,C){const L=new QC(C),q=new bC(E,L,T);return v.asyncQueue.enqueueAndForget((async()=>SC(await dy(v),q))),()=>{L.Nu(),v.asyncQueue.enqueueAndForget((async()=>AC(await dy(v),q)))}})(sw(d),p,o,l)}function Qc(r,e){return(function(i,o){const l=new ki;return i.asyncQueue.enqueueAndForget((async()=>UC(await JC(i),o,l))),l.promise})(sw(r),e)}function pN(r,e,t){const i=t.docs.get(e._key),o=new pw(r);return new Si(r,o,e._key,i,new Qa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Yo=o})(Go),Er(new qn("firestore",((i,{instanceIdentifier:o,options:l})=>{const d=i.getProvider("app").getImmediate(),p=new Pi(new rS(i.getProvider("auth-internal")),new oS(d,i.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new pe(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new al(v.options.projectId,E)})(d,o),d);return l={useFetchStreams:t,...l},p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),bn(x0,T0,e),bn(x0,T0,"esm2020")})();const mN={apiKey:"AIzaSyCWiFzXahZtLp7z7Ez-0TgVyNUO8xyx2B0",authDomain:"stvimplantacao.firebaseapp.com",projectId:"stvimplantacao",storageBucket:"stvimplantacao.firebasestorage.app",messagingSenderId:"507383458204",appId:"1:507383458204:web:279cadf39a3934f9ef8059",measurementId:"G-M5F9YWBTVP"},gp=Ly(mN);let gN;try{gN=Yk(gp)}catch{console.log("Firebase Analytics not available")}const Fh=bI(gp),Mt=eN(gp),mw=ne.createContext(void 0);function yN({children:r}){const[e,t]=ne.useState(null),[i,o]=ne.useState(!0);ne.useEffect(()=>{const p=vT(Fh,async y=>{if(y){const v=await y.getIdTokenResult(!0),E={uid:y.uid,email:y.email,displayName:y.displayName||void 0,role:v.claims.role||"USER"};t(E)}else t(null);o(!1)});return()=>p()},[]);const l=async(p,y)=>{await mT(Fh,p,y)},d=()=>{_T(Fh)};return f.jsx(mw.Provider,{value:{user:e,loading:i,login:l,logout:d},children:!i&&r})}function Fi(){const r=ne.useContext(mw);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_N=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),_y=r=>{const e=_N(r);return e.charAt(0).toUpperCase()+e.slice(1)},gw=(...r)=>r.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=ne.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:d,...p},y)=>ne.createElement("svg",{ref:y,...wN,width:e,height:e,stroke:r,strokeWidth:i?Number(t)*24/Number(e):t,className:gw("lucide",o),...p},[...d.map(([v,E])=>ne.createElement(v,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=(r,e)=>{const t=ne.forwardRef(({className:i,...o},l)=>ne.createElement(EN,{ref:l,iconNode:e,className:gw(`lucide-${vN(_y(r))}`,`lucide-${r}`,i),...o}));return t.displayName=_y(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],yp=Me("arrow-left",xN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],qo=Me("building-2",TN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],dl=Me("calendar",IN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],SN=Me("car",kN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],pf=Me("circle-alert",AN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Uh=Me("circle-check-big",CN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],bN=Me("circle-check",NN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],PN=Me("circle-x",RN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ON=Me("circle",DN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],wy=Me("clipboard-check",VN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],mf=Me("clock",jN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],hl=Me("database",MN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],gf=Me("download",LN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],UN=Me("external-link",FN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],yw=Me("eye",zN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],$N=Me("file-text",BN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],fl=Me("history",HN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],WN=Me("layout-dashboard",qN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],KN=Me("list",GN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],YN=Me("lock",QN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Ey=Me("log-out",XN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ZN=Me("mail",JN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],tb=Me("map-pin",eb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],rb=Me("pen",nb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],yf=Me("plus",sb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],ob=Me("radio",ib);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],lb=Me("save",ab);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],cb=Me("scan",ub);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Di=Me("search",db);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vf=Me("settings",hb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],pl=Me("trash-2",fb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],xy=Me("trending-up",pb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],gb=Me("upload",mb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Tc=Me("user",yb);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_b=Me("x",vb),_f="/assets/logo-DLhrngOv.png";function wb(){const[r,e]=ne.useState(""),[t,i]=ne.useState(""),[o,l]=ne.useState(""),{login:d}=Fi(),p=async y=>{if(y.preventDefault(),l(""),!r||!t){l("Por favor, preencha todos os campos");return}try{await d(r,t)}catch(v){l("Email ou senha inválidos. Por favor, tente novamente."),console.error("Login error:",v)}};return f.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-[#004d32] dark:from-gray-900 dark:via-[#0a6c45] dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-0 w-96 h-96 bg-[#7BD955] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"}),f.jsx("div",{className:"absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"}),f.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"}),f.jsxs("div",{className:"w-full max-w-md relative z-10",children:[f.jsxs("div",{className:"text-center mb-8 md:mb-12",children:[f.jsx("div",{className:"bg-white dark:bg-gray-800/50 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-sm mb-6",children:f.jsx("img",{src:_f,alt:"STV Implantação",className:"w-full max-w-sm mx-auto"})}),f.jsx("p",{className:"text-white dark:text-gray-100 text-lg md:text-xl drop-shadow-lg",children:"Faça login para continuar"})]}),f.jsx("div",{className:"bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20 dark:border-gray-700/50",children:f.jsxs("form",{onSubmit:p,className:"space-y-5 md:space-y-6",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"email",className:"block text-gray-700 dark:text-gray-200 mb-2 ml-1",children:"Email"}),f.jsxs("div",{className:"relative group",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all group-focus-within:scale-110",children:f.jsx(ZN,{className:"h-5 w-5 text-[#7BD955] dark:text-[#7BD955]"})}),f.jsx("input",{id:"email",type:"email",value:r,onChange:y=>e(y.target.value),className:"w-full pl-12 pr-4 py-3.5 md:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7BD955] focus:border-[#7BD955] transition-all bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400",placeholder:"Digite seu email"})]})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"password",className:"block text-gray-700 dark:text-gray-200 mb-2 ml-1",children:"Senha"}),f.jsxs("div",{className:"relative group",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all group-focus-within:scale-110",children:f.jsx(YN,{className:"h-5 w-5 text-[#7BD955] dark:text-[#7BD955]"})}),f.jsx("input",{id:"password",type:"password",value:t,onChange:y=>i(y.target.value),className:"w-full pl-12 pr-4 py-3.5 md:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7BD955] focus:border-[#7BD955] transition-all bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400",placeholder:"Digite sua senha"})]})]}),o&&f.jsxs("div",{className:"flex items-center gap-2 p-3.5 bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-2xl text-red-700 dark:text-red-300 shadow-lg",children:[f.jsx(pf,{className:"h-5 w-5 flex-shrink-0"}),f.jsx("span",{children:o})]}),f.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-[#7BD955] via-[#0a6c45] to-[#004d32] text-white py-4 md:py-4.5 rounded-2xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl border border-white/20",children:f.jsx("span",{className:"drop-shadow-md",children:"Entrar"})})]})})]})]})}function fr({roles:r,children:e}){const{user:t}=Fi();return!t||!r.includes(t.role)?null:f.jsx(f.Fragment,{children:e})}const Ty=[{id:"dashboard",icon:WN,label:"Dashboard",view:"dashboard",roles:["ADM","MONITORAMENTO","TECNICO","ANALISADOR"]},{id:"list",icon:KN,label:"Condomínios",view:"list",roles:["ADM","MONITORAMENTO","TECNICO","ANALISADOR"]},{id:"historico",icon:fl,label:"Histórico",view:"historico",roles:["ADM","MONITORAMENTO"]},{id:"backup",icon:hl,label:"Backups",view:"backup",roles:["ADM"]}],Bn={label:"Config",desktopLabel:"Configurações",view:"configuracoes",roles:["ADM"]};function Eb({currentView:r,onViewChange:e,onAddCondominio:t}){const{user:i,logout:o}=Fi(),l=d=>{switch(d){case"ADM":return"bg-[#0a6c45]";case"MONITORAMENTO":return"bg-blue-600";case"TECNICO":return"bg-orange-600";case"ANALISADOR":return"bg-gray-600";default:return"bg-gray-600"}};return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:"hidden lg:block bg-white dark:bg-gray-900 border-b border-emerald-100 dark:border-gray-700 shadow-lg",children:f.jsxs("div",{className:"px-6 py-3 bg-gradient-to-r from-white via-emerald-50/30 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border-b-2 border-white dark:border-gray-700 shadow-lg relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#7BD955]/5 via-transparent to-yellow-300/5 pointer-events-none"}),f.jsxs("div",{className:"flex items-center justify-center gap-3 relative z-10",children:[f.jsx("div",{className:"flex items-center",children:f.jsx("div",{className:"relative group",children:f.jsx("img",{src:_f,alt:"STV Implantação",className:"h-11 relative z-10 drop-shadow-lg transition-transform group-hover:scale-105"})})}),f.jsxs("nav",{className:"flex items-center gap-3",children:[Ty.map(d=>{const p=d.icon;return f.jsx(fr,{roles:d.roles,children:f.jsxs("button",{onClick:()=>e(d.view),className:`flex items-center gap-2 px-4 h-11 rounded-xl transition-all backdrop-blur-sm group ${r===d.view?"bg-white dark:bg-gray-700 shadow-lg scale-105 border-2 border-[#7BD955]":"bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:scale-105 border border-emerald-100/50 dark:border-gray-600/50"}`,children:[f.jsx(p,{className:`w-5 h-5 transition-transform ${r===d.view?"text-[#7BD955] drop-shadow-md":"group-hover:scale-110"}`}),f.jsx("span",{className:`${r===d.view?"text-gray-900 dark:text-gray-100":""}`,children:d.label})]})},d.id)}),f.jsx(fr,{roles:["ADM","TECNICO"],children:f.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 h-11 rounded-xl text-white bg-gradient-to-r from-[#7BD955] via-[#0a6c45] to-emerald-700 hover:from-[#6BC845] hover:via-[#095c35] hover:to-emerald-800 transition-all shadow-xl shadow-[#0a6c45]/40 hover:shadow-2xl hover:scale-105 active:scale-95 border border-white/20 group",children:[f.jsx(yf,{className:"w-5 h-5 drop-shadow-md group-hover:rotate-90 transition-transform"}),f.jsx("span",{className:"drop-shadow-sm",children:"Novo Condomínio"})]})}),f.jsx(fr,{roles:Bn.roles,children:f.jsx("button",{onClick:()=>e(Bn.view),className:`flex items-center justify-center w-11 h-11 rounded-xl transition-all backdrop-blur-sm group ${r===Bn.view?"bg-white dark:bg-gray-700 shadow-lg scale-105 border-2 border-gray-400":"bg-white/60 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:scale-105 border border-gray-200/50 dark:border-gray-600/50"}`,title:Bn.desktopLabel,children:f.jsx(vf,{className:`w-5 h-5 transition-transform ${r===Bn.view?"rotate-90 text-gray-600 dark:text-gray-300":"group-hover:rotate-90"}`})})}),f.jsx("button",{onClick:o,className:"flex items-center justify-center w-11 h-11 rounded-xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:shadow-lg hover:scale-105 transition-all border border-red-200/50 dark:border-red-800/50 group",title:"Sair",children:f.jsx(Ey,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})}),f.jsxs("div",{className:"flex items-center gap-2 px-3 h-11 bg-white/80 dark:bg-gray-700/80 backdrop-blur-xl rounded-xl border-2 border-[#7BD955]/30 dark:border-[#7BD955]/40 shadow-lg hover:shadow-xl transition-all",children:[f.jsx("div",{className:"w-7 h-7 bg-gradient-to-br from-[#7BD955] to-[#0a6c45] rounded-full flex items-center justify-center shadow-md",children:f.jsx(Tc,{className:"w-4 h-4 text-white drop-shadow-sm"})}),f.jsx("span",{className:"text-gray-900 dark:text-gray-100 text-sm",children:i?.email}),f.jsx("span",{className:`px-2.5 py-1 ${l(i?.role||"")} text-white rounded-lg text-xs shadow-md backdrop-blur-sm`,children:i?.role})]})]})]})]})}),f.jsx("nav",{className:"lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#0a6c45]/20 shadow-2xl z-50",children:f.jsxs("div",{className:"w-full flex items-center justify-center py-4 gap-3 bg-gradient-to-t from-emerald-50 via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#7BD955]/10 via-transparent to-transparent pointer-events-none"}),[...Ty].map(d=>{const p=d.icon,y=r===d.view;return f.jsx(fr,{roles:d.roles,children:f.jsxs("button",{onClick:()=>e(d.view),className:`flex flex-col items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl transition-all w-20 relative z-10 group ${y?"bg-gradient-to-br from-[#7BD955] to-[#0a6c45] text-white shadow-lg shadow-[#0a6c45]/30 scale-105":"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-[#0a6c45] dark:text-[#7BD955] hover:bg-emerald-50 dark:hover:bg-gray-700 hover:scale-105 border border-emerald-200/50 dark:border-gray-600/50"}`,children:[f.jsx(p,{className:`w-5 h-5 transition-transform ${y?"drop-shadow-md scale-110":"group-hover:scale-110"}`}),f.jsx("span",{className:`text-[10px] whitespace-nowrap ${y?"drop-shadow-sm":""}`,children:d.label})]})},d.id)}),f.jsx(fr,{roles:["ADM","TECNICO"],children:f.jsxs("div",{className:"relative -translate-y-3 z-20",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#7BD955] via-yellow-400 to-[#0a6c45] rounded-full blur-xl opacity-60 animate-pulse scale-110"}),f.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/50 dark:border-gray-800/50 animate-ping opacity-75"}),f.jsx("div",{className:"relative bg-white dark:bg-gray-900 rounded-full p-1.5 shadow-2xl",children:f.jsxs("button",{onClick:t,className:"flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-full text-white bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 hover:from-[#6BC845] hover:via-[#095c35] hover:to-emerald-800 shadow-2xl shadow-[#0a6c45]/50 hover:shadow-[#0a6c45]/70 transition-all hover:scale-110 active:scale-95 w-20 h-20 group relative overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"}),f.jsx(yf,{className:"w-8 h-8 drop-shadow-lg group-hover:rotate-90 transition-transform relative z-10"}),f.jsx("span",{className:"text-xs drop-shadow-md relative z-10",children:"Novo"})]})})]})}),f.jsx(fr,{roles:Bn.roles,children:f.jsxs("button",{onClick:()=>e(Bn.view),className:`flex flex-col items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl transition-all w-20 relative z-10 group ${r===Bn.view?"bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-lg shadow-gray-500/30 scale-105":"bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 border border-gray-200/50 dark:border-gray-600/50"}`,children:[f.jsx(vf,{className:`w-5 h-5 transition-transform ${r===Bn.view?"rotate-90 drop-shadow-md":"group-hover:rotate-90"}`}),f.jsx("span",{className:`text-[10px] whitespace-nowrap ${r===Bn.view?"drop-shadow-sm":""}`,children:Bn.label})]})}),f.jsxs("button",{onClick:o,className:"flex flex-col items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl transition-all w-20 relative z-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:scale-105 border border-red-200/50 dark:border-red-800/50 group",children:[f.jsx(Ey,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"}),f.jsx("span",{className:"text-[10px] whitespace-nowrap",children:"Sair"})]})]})}),f.jsxs("header",{className:"lg:hidden bg-gradient-to-r from-[#7BD955] via-[#0a6c45] to-emerald-700 border-b-2 border-white/20 shadow-2xl px-6 py-4 relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-2xl opacity-30 animate-pulse"}),f.jsx("div",{className:"absolute bottom-0 right-0 w-32 h-32 bg-emerald-300 rounded-full mix-blend-overlay filter blur-2xl opacity-30 animate-pulse delay-700"}),f.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[f.jsx("div",{className:"flex-1"}),f.jsx("div",{className:"flex items-center justify-center",children:f.jsx("div",{className:"bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg",children:f.jsx("img",{src:_f,alt:"STV",className:"h-10 w-auto drop-shadow-lg"})})}),f.jsx("div",{className:"flex-1 flex justify-end",children:f.jsxs("div",{className:"flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-white/30",children:[f.jsx("div",{className:"w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md",children:f.jsx(Tc,{className:"w-4 h-4 text-[#0a6c45]"})}),f.jsx("span",{className:`px-3 py-1.5 ${l(i?.role||"")} text-white rounded-xl text-xs shadow-md`,children:i?.role})]})})]})]})]})}function xb({condominios:r}){const[e,t]=ne.useState(null),i=r.length,o=r.filter(H=>H.status==="CONCLUÍDA").length,l=r.filter(H=>H.status==="EM ANDAMENTO").length,d=r.filter(H=>H.status==="NÃO INICIADA").length,p=r.filter(H=>H.vistorias==="CONCLUÍDA").length,y=r.filter(H=>H.vistorias==="EM ANDAMENTO").length,v=r.filter(H=>H.vistorias==="NÃO INICIADA").length,E=r.filter(H=>H.cftv==="CONCLUÍDO").length,T=r.filter(H=>H.cftv==="EM ANDAMENTO").length,C=r.filter(H=>H.cftv==="AGUARDANDO TÉCNICA").length,L=r.filter(H=>H.instalacao==="CONCLUÍDA").length,q=r.filter(H=>H.instalacao==="EM ANDAMENTO").length,B=new Date,$=new Date;$.setDate(B.getDate()+30);const oe=r.filter(H=>{if(!H.dataImplantacao)return!1;const N=new Date(H.dataImplantacao);return N>=B&&N<=$}).length,de=()=>{switch(e){case"all":return{condominios:r,title:"Todos os Condomínios"};case"concluidos":return{condominios:r.filter(H=>H.status==="CONCLUÍDA"),title:"Condomínios Concluídos"};case"emAndamento":return{condominios:r.filter(H=>H.status==="EM ANDAMENTO"),title:"Condomínios em Andamento"};case"naoIniciados":return{condominios:r.filter(H=>H.status==="NÃO INICIADA"),title:"Condomínios Não Iniciados"};case"vistoriasConcluidas":return{condominios:r.filter(H=>H.vistorias==="CONCLUÍDA"),title:"Vistorias Concluídas"};case"vistoriasEmAndamento":return{condominios:r.filter(H=>H.vistorias==="EM ANDAMENTO"),title:"Vistorias em Andamento"};case"vistoriasNaoIniciadas":return{condominios:r.filter(H=>H.vistorias==="NÃO INICIADA"),title:"Vistorias Não Iniciadas"};case"cftvConcluido":return{condominios:r.filter(H=>H.cftv==="CONCLUÍDO"),title:"CFTV Concluído"};case"cftvEmAndamento":return{condominios:r.filter(H=>H.cftv==="EM ANDAMENTO"),title:"CFTV em Andamento"};case"cftvAguardando":return{condominios:r.filter(H=>H.cftv==="AGUARDANDO TÉCNICA"),title:"CFTV Aguardando Técnica"};case"instalacaoConcluida":return{condominios:r.filter(H=>H.instalacao==="CONCLUÍDA"),title:"Instalações Concluídas"};case"instalacaoEmAndamento":return{condominios:r.filter(H=>H.instalacao==="EM ANDAMENTO"),title:"Instalações em Andamento"};case"proximasImplantacoes":return{condominios:r.filter(H=>{if(!H.dataImplantacao)return!1;const N=new Date(H.dataImplantacao);return N>=B&&N<=$}),title:"Próximas Implantações (30 dias)"};default:return{condominios:[],title:""}}};if(e){const{condominios:H,title:N}=de();return f.jsx("div",{className:"p-8",children:f.jsxs("div",{className:"max-w-7xl mx-auto",children:[f.jsxs("div",{className:"mb-8",children:[f.jsxs("button",{onClick:()=>t(null),className:"flex items-center gap-2 mb-4 px-4 py-2 bg-white dark:bg-gray-800 border border-[#0a6c45]/20 dark:border-gray-700 rounded-xl text-[#0a6c45] dark:text-[#0a6c45]/80 hover:bg-[#0a6c45]/5 dark:hover:bg-[#0a6c45]/20 transition-all",children:[f.jsx(yp,{className:"w-5 h-5"}),f.jsx("span",{children:"Voltar ao Dashboard"})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-12 h-12 bg-[#0a6c45] rounded-xl flex items-center justify-center shadow-lg",children:f.jsx(tb,{className:"w-6 h-6 text-white"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-gray-900 dark:text-gray-100",children:N}),f.jsxs("p",{className:"text-[#0a6c45] dark:text-gray-400",children:[H.length," condomínio(s) encontrado(s)"]})]})]})]}),H.length===0?f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center",children:[f.jsx(pf,{className:"w-16 h-16 text-gray-400 mx-auto mb-4"}),f.jsx("h3",{className:"text-gray-700 dark:text-gray-300 mb-2",children:"Nenhum condomínio encontrado"}),f.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Não há condomínios que correspondam a este filtro."})]}):f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:H.map(I=>f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all",children:[f.jsxs("div",{className:"mb-4 pb-4 border-b border-[#0a6c45]/20 dark:border-gray-700",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[f.jsx(qo,{className:"w-5 h-5 text-[#0a6c45] dark:text-[#0a6c45]/80"}),f.jsx("h3",{className:"text-gray-900 dark:text-gray-100 flex-1",children:I.nomeCondominio})]}),f.jsx("div",{className:"flex flex-wrap gap-2",children:f.jsx("span",{className:`px-3 py-1 rounded-lg text-sm ${I.status==="CONCLUÍDA"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400":I.status==="EM ANDAMENTO"?"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:I.status})})]}),f.jsxs("div",{className:"space-y-3 text-sm",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-emerald-600 dark:text-gray-400",children:"CFTV:"}),f.jsx("span",{className:`px-2 py-1 rounded text-xs ${I.cftv==="CONCLUÍDO"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400":I.cftv==="EM ANDAMENTO"?"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400":"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"}`,children:I.cftv})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-emerald-600 dark:text-gray-400",children:"Vistorias:"}),f.jsx("span",{className:`px-2 py-1 rounded text-xs ${I.vistorias==="CONCLUÍDA"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400":I.vistorias==="EM ANDAMENTO"?"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:I.vistorias})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-emerald-600 dark:text-gray-400",children:"Instalação:"}),f.jsx("span",{className:`px-2 py-1 rounded text-xs ${I.instalacao==="CONCLUÍDA"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400":I.instalacao==="EM ANDAMENTO"?"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:I.instalacao})]}),I.dataImplantacao&&f.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-emerald-100 dark:border-gray-700",children:[f.jsx("span",{className:"text-emerald-600 dark:text-gray-400",children:"Implantação:"}),f.jsx("span",{className:"text-emerald-700 dark:text-gray-300",children:new Date(I.dataImplantacao).toLocaleDateString("pt-BR")})]}),I.licencas&&f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-emerald-600 dark:text-gray-400",children:"Licenças:"}),f.jsx("span",{className:"text-emerald-700 dark:text-gray-300",children:I.licencas})]})]})]},I.id))})]})})}const he=[{title:"Total de Condomínios",value:i,icon:qo,color:"from-emerald-500 to-teal-600",bgColor:"bg-emerald-50",iconColor:"text-emerald-600",filter:"all"},{title:"Concluídos",value:o,icon:Uh,color:"from-green-500 to-green-600",bgColor:"bg-green-50",iconColor:"text-green-600",percentage:i>0?Math.round(o/i*100):0,filter:"concluidos"},{title:"Em Andamento",value:l,icon:mf,color:"from-blue-500 to-blue-600",bgColor:"bg-blue-50",iconColor:"text-blue-600",percentage:i>0?Math.round(l/i*100):0,filter:"emAndamento"},{title:"Não Iniciados",value:d,icon:pf,color:"from-gray-500 to-gray-600",bgColor:"bg-gray-50",iconColor:"text-gray-600",percentage:i>0?Math.round(d/i*100):0,filter:"naoIniciados"}],fe=[{title:"Vistorias Concluídas",value:p,icon:Uh,color:"text-green-600",bgColor:"bg-green-50",borderColor:"border-green-200",filter:"vistoriasConcluidas"},{title:"Vistorias em Andamento",value:y,icon:mf,color:"text-blue-600",bgColor:"bg-blue-50",borderColor:"border-blue-200",filter:"vistoriasEmAndamento"},{title:"Vistorias Não Iniciadas",value:v,icon:PN,color:"text-gray-600",bgColor:"bg-gray-50",borderColor:"border-gray-200",filter:"vistoriasNaoIniciadas"}],Ve=[{title:"CFTV Concluído",value:E,subtitle:`${T} em andamento, ${C} aguardando`,icon:Uh,color:"text-emerald-600",filter:"cftvConcluido"},{title:"Instalações Concluídas",value:L,subtitle:`${q} em andamento`,icon:wy,color:"text-teal-600",filter:"instalacaoConcluida"},{title:"Próximas Implantações",value:oe,subtitle:"Próximos 30 dias",icon:dl,color:"text-purple-600",filter:"proximasImplantacoes"}];return f.jsxs("div",{className:"p-4 md:p-8 min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#7BD955] rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse"}),f.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse delay-700"}),f.jsx("div",{className:"absolute top-1/2 right-1/3 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse delay-1000"}),f.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[f.jsx("div",{className:"mb-8",children:f.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[f.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform",children:f.jsx(xy,{className:"w-7 h-7 text-white drop-shadow-md"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-gray-900 dark:text-gray-100 drop-shadow-sm",children:"Dashboard"}),f.jsx("p",{className:"text-[#0a6c45] dark:text-[#7BD955]",children:"Visão geral dos condomínios cadastrados"})]})]})}),f.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8",children:he.map((H,N)=>{const I=H.icon;return f.jsxs("button",{onClick:()=>t(H.filter),className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-white dark:border-gray-700 p-4 md:p-6 hover:shadow-2xl hover:scale-105 hover:border-[#7BD955] dark:hover:border-[#7BD955] transition-all text-left cursor-pointer group",children:[f.jsxs("div",{className:"flex items-start justify-between mb-4",children:[f.jsx("div",{className:`w-12 h-12 md:w-14 md:h-14 ${H.bgColor} dark:bg-opacity-30 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`,children:f.jsx(I,{className:`w-6 h-6 md:w-7 md:h-7 ${H.iconColor} dark:opacity-90`})}),H.percentage!==void 0&&f.jsxs("div",{className:`px-2.5 md:px-3 py-1 rounded-xl ${H.bgColor} dark:bg-opacity-30 ${H.iconColor} shadow-md`,children:[H.percentage,"%"]})]}),f.jsx("h3",{className:"text-gray-900 dark:text-gray-100 mb-1",children:H.value}),f.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:H.title})]},N)})}),f.jsxs("div",{className:"mb-8",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg",children:f.jsx(wy,{className:"w-5 h-5 text-white"})}),f.jsx("h2",{className:"text-gray-900 dark:text-gray-100",children:"Status das Vistorias"})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",children:fe.map((H,N)=>{const I=H.icon;return f.jsxs("button",{onClick:()=>t(H.filter),className:`bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 ${H.borderColor} dark:border-gray-700 p-5 md:p-6 hover:shadow-2xl hover:scale-105 transition-all text-left cursor-pointer group relative overflow-hidden`,children:[f.jsx("div",{className:`absolute inset-0 ${H.bgColor} opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity`}),f.jsxs("div",{className:"flex items-center gap-4 relative z-10",children:[f.jsx("div",{className:`w-12 h-12 md:w-14 md:h-14 ${H.bgColor} dark:bg-opacity-30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`,children:f.jsx(I,{className:`w-6 h-6 md:w-7 md:h-7 ${H.color} dark:opacity-90`})}),f.jsx("h3",{className:`${H.color} dark:opacity-90 w-8 text-center flex-shrink-0 drop-shadow-sm`,children:H.value}),f.jsx("p",{className:"text-gray-700 dark:text-gray-300 flex-1",children:H.title})]})]},N)})})]}),f.jsxs("div",{className:"mb-8",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg",children:f.jsx(dl,{className:"w-5 h-5 text-white"})}),f.jsx("h2",{className:"text-gray-900 dark:text-gray-100",children:"Detalhes Adicionais"})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",children:Ve.map((H,N)=>{const I=H.icon,A=["from-[#7BD955] to-[#0a6c45]","from-amber-500 to-orange-600","from-cyan-500 to-blue-600"];return f.jsx("button",{onClick:()=>t(H.filter),className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-white dark:border-gray-700 p-5 md:p-6 hover:shadow-2xl hover:scale-105 hover:border-[#7BD955] dark:hover:border-[#7BD955] transition-all text-left cursor-pointer group",children:f.jsxs("div",{className:"flex items-start gap-4",children:[f.jsx("div",{className:`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${A[N]} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`,children:f.jsx(I,{className:"w-6 h-6 md:w-7 md:h-7 text-white"})}),f.jsxs("div",{className:"flex-1",children:[f.jsx("h3",{className:"text-gray-900 dark:text-gray-100 mb-1",children:H.value}),f.jsx("p",{className:`${H.color} dark:opacity-90 mb-1`,children:H.title}),f.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:H.subtitle})]})]})},N)})})]}),f.jsxs("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-white dark:border-gray-700 p-6 md:p-8",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[f.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg",children:f.jsx(xy,{className:"w-5 h-5 text-white"})}),f.jsx("h2",{className:"text-gray-900 dark:text-gray-100",children:"Progresso Geral"})]}),f.jsxs("div",{className:"space-y-6 md:space-y-8",children:[f.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl p-4 md:p-5 border border-emerald-200 dark:border-emerald-800/30",children:[f.jsxs("div",{className:"flex justify-between items-center mb-3",children:[f.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:"Status Geral dos Condomínios"}),f.jsxs("span",{className:"text-[#0a6c45] dark:text-[#7BD955] px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm",children:[i>0?Math.round(o/i*100):0,"% Concluído"]})]}),f.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner",children:f.jsxs("div",{className:"h-full flex",children:[f.jsx("div",{className:"bg-gradient-to-r from-green-500 to-green-600 transition-all shadow-sm",style:{width:`${i>0?o/i*100:0}%`}}),f.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-blue-600 transition-all shadow-sm",style:{width:`${i>0?l/i*100:0}%`}}),f.jsx("div",{className:"bg-gradient-to-r from-gray-400 to-gray-500 transition-all shadow-sm",style:{width:`${i>0?d/i*100:0}%`}})]})}),f.jsxs("div",{className:"flex flex-wrap gap-4 mt-3",children:[f.jsxs("div",{className:"flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm",children:[f.jsx("div",{className:"w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-sm"}),f.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Concluídos (",o,")"]})]}),f.jsxs("div",{className:"flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm",children:[f.jsx("div",{className:"w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"}),f.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Em Andamento (",l,")"]})]}),f.jsxs("div",{className:"flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm",children:[f.jsx("div",{className:"w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow-sm"}),f.jsxs("span",{className:"text-gray-700 dark:text-gray-300",children:["Não Iniciados (",d,")"]})]})]})]}),f.jsxs("div",{className:"bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10 rounded-2xl p-4 md:p-5 border border-teal-200 dark:border-teal-800/30",children:[f.jsxs("div",{className:"flex justify-between items-center mb-3",children:[f.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:"Progresso de Vistorias"}),f.jsxs("span",{className:"text-teal-700 dark:text-teal-400 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm",children:[i>0?Math.round(p/i*100):0,"% Concluído"]})]}),f.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-teal-600 transition-all shadow-sm",style:{width:`${i>0?p/i*100:0}%`}})})]}),f.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-4 md:p-5 border border-blue-200 dark:border-blue-800/30",children:[f.jsxs("div",{className:"flex justify-between items-center mb-3",children:[f.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:"Progresso de CFTV"}),f.jsxs("span",{className:"text-blue-700 dark:text-blue-400 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm",children:[i>0?Math.round(E/i*100):0,"% Concluído"]})]}),f.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-cyan-600 transition-all shadow-sm",style:{width:`${i>0?E/i*100:0}%`}})})]}),f.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl p-4 md:p-5 border border-purple-200 dark:border-purple-800/30",children:[f.jsxs("div",{className:"flex justify-between items-center mb-3",children:[f.jsx("span",{className:"text-gray-800 dark:text-gray-200",children:"Progresso de Instalações"}),f.jsxs("span",{className:"text-purple-700 dark:text-purple-400 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm",children:[i>0?Math.round(L/i*100):0,"% Concluído"]})]}),f.jsx("div",{className:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner",children:f.jsx("div",{className:"h-full bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 transition-all shadow-sm",style:{width:`${i>0?L/i*100:0}%`}})})]})]})]})]})]})}function Tb({condominios:r,onEdit:e,onDelete:t}){const{user:i}=Fi(),[o,l]=ne.useState(""),[d,p]=ne.useState("TODOS"),y=i?.role==="ADM",v=i?.role==="ANALISADOR",E=y||i?.role==="MONITORAMENTO"||i?.role==="TECNICO",T=y,C=r.filter(B=>{const $=B.nomeCondominio.toLowerCase().includes(o.toLowerCase()),oe=d==="TODOS"||B.status===d;return $&&oe}),L=B=>{switch(B){case"CONCLUÍDA":return"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700";case"EM ANDAMENTO":return"bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700";case"NÃO INICIADA":return"bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600";default:return"bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600"}},q=(B,$)=>{window.confirm(`Tem certeza que deseja excluir o condomínio "${$}"?`)&&t(B)};return f.jsx("div",{className:"p-8",children:f.jsxs("div",{className:"max-w-7xl mx-auto",children:[f.jsxs("div",{className:"mb-8",children:[f.jsx("h1",{className:"text-emerald-900 dark:text-emerald-100 mb-2",children:"Lista de Condomínios"}),f.jsxs("p",{className:"text-emerald-600 dark:text-emerald-400",children:[C.length," condomínio",C.length!==1?"s":""," encontrado",C.length!==1?"s":""]})]}),f.jsxs("div",{className:"mb-6 flex gap-4 flex-wrap",children:[f.jsxs("div",{className:"flex-1 min-w-[300px] relative",children:[f.jsx(Di,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0a6c45] dark:text-[#7BD955] w-5 h-5"}),f.jsx("input",{type:"text",placeholder:"Buscar condomínio...",value:o,onChange:B=>l(B.target.value),className:"w-full pl-12 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-gray-700 dark:text-gray-100"})]}),f.jsxs("select",{value:d,onChange:B=>p(B.target.value),className:"px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-700 dark:text-gray-100",children:[f.jsx("option",{value:"TODOS",children:"Todos os Status"}),f.jsx("option",{value:"NÃO INICIADA",children:"Não Iniciada"}),f.jsx("option",{value:"EM ANDAMENTO",children:"Em Andamento"}),f.jsx("option",{value:"CONCLUÍDA",children:"Concluída"})]})]}),C.length===0?f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center",children:[f.jsx(qo,{className:"w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4"}),f.jsx("h3",{className:"text-emerald-900 dark:text-emerald-100 mb-2",children:"Nenhum condomínio encontrado"}),f.jsx("p",{className:"text-emerald-600 dark:text-emerald-400",children:r.length===0?"Adicione seu primeiro condomínio para começar.":"Tente ajustar os filtros de busca."})]}):f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:C.map(B=>f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all flex flex-col",children:[f.jsxs("div",{className:"text-center mb-4",children:[f.jsx("div",{className:"w-16 h-16 bg-[#0a6c45] dark:bg-[#7BD955]/20 dark:border dark:border-[#7BD955] rounded-xl flex items-center justify-center shadow-md mx-auto mb-3",children:f.jsx(qo,{className:"w-8 h-8 text-white dark:text-[#7BD955]"})}),f.jsx("h3",{className:"text-gray-900 dark:text-gray-100 mb-1",children:B.nomeCondominio}),f.jsxs("p",{className:"text-[#0a6c45] dark:text-[#7BD955]",children:["Conta: ",B.contaSituator||"N/A"]})]}),f.jsxs("div",{className:"mb-4 flex-1",children:[f.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-[#0a6c45] dark:text-[#7BD955] mb-1 text-xs text-center",children:"Status Geral"}),f.jsx("span",{className:`inline-block px-1 py-1 rounded-lg text-xs border w-full text-center leading-tight ${L(B.status)}`,children:B.status==="CONCLUÍDA"?"✓ OK":B.status==="EM ANDAMENTO"?"Em And.":"Não Inic."})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-[#0a6c45] dark:text-[#7BD955] mb-1 text-xs text-center",children:"CFTV"}),f.jsx("span",{className:`inline-block px-1 py-1 rounded-lg text-xs border w-full text-center leading-tight ${L(B.cftv)}`,children:B.cftv==="CONCLUÍDO"?"✓ OK":B.cftv==="EM ANDAMENTO"?"Em And.":B.cftv==="AGUARDANDO TÉCNICA"?"Aguard.":"Não Inic."})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-[#0a6c45] dark:text-[#7BD955] mb-1 text-xs text-center",children:"Vistorias"}),f.jsx("span",{className:`inline-block px-1 py-1 rounded-lg text-xs border w-full text-center leading-tight ${L(B.vistorias)}`,children:B.vistorias==="CONCLUÍDA"?"✓ OK":B.vistorias==="EM ANDAMENTO"?"Em And.":"Não Inic."})]})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-[#0a6c45] dark:text-[#7BD955] mb-1 text-sm",children:"Data Implantação"}),f.jsx("p",{className:"text-gray-900 dark:text-gray-100 text-center",children:B.dataImplantacao?new Date(B.dataImplantacao).toLocaleDateString("pt-BR"):"N/A"})]})]}),B.linkCadastro&&f.jsxs("a",{href:B.linkCadastro,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors mb-4 text-sm",children:[f.jsx(UN,{className:"w-4 h-4"}),f.jsx("span",{children:"Link de Cadastro"})]}),f.jsxs("div",{className:"flex gap-2 pt-4 border-t border-emerald-100 dark:border-gray-700",children:[E&&f.jsxs("button",{onClick:()=>e(B),className:"flex-1 p-3 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-xl transition-all flex items-center justify-center gap-2",title:"Editar",children:[f.jsx(rb,{className:"w-4 h-4"}),f.jsx("span",{children:v?"Visualizar":"Editar"})]}),T&&f.jsx("button",{onClick:()=>q(B.id,B.nomeCondominio),className:"p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all",title:"Excluir",children:f.jsx(pl,{className:"w-5 h-5"})})]})]},B.id))})]})})}function Ib({condominio:r,onSave:e,onCancel:t}){const{user:i}=Fi(),[o,l]=ne.useState("monitoramento"),[d,p]=ne.useState(null),[y,v]=ne.useState(""),[E,T]=ne.useState(""),[C,L]=ne.useState("NÃO INICIADA"),[q,B]=ne.useState([""]),[$,oe]=ne.useState("EM ANDAMENTO"),[de,he]=ne.useState(""),[fe,Ve]=ne.useState("EM ANDAMENTO"),[H,N]=ne.useState("SOLICITADAS"),[I,A]=ne.useState("EM ANDAMENTO"),[D,R]=ne.useState(""),[V,S]=ne.useState([]),[$e,ct]=ne.useState(""),[xt,Ge]=ne.useState("NÃO INICIADA"),[te,me]=ne.useState("A FAZER"),[re,O]=ne.useState("EM ANDAMENTO"),[G,Ie]=ne.useState("EM ANDAMENTO"),[we,Ce]=ne.useState([]);ne.useEffect(()=>{if(r){const J={...r,entregaInstrucao:r.entregaInstrucao||[]};p(J),v(J.nomeCondominio),T(J.linkCadastro),L(J.status),B(J.ramais.length>0?J.ramais:[""]),oe(J.cftv),he(J.contaSituator),Ve(J.configuracaoSituator),N(J.licencas),A(J.appStv),R(J.dataImplantacao),S(J.dispositivosAcesso),ct(J.observacoes),Ge(J.vistorias),me(J.parametrizacao),O(J.instalacao),Ie(J.testesTecnico),Ce(J.entregaInstrucao)}},[r]);const Ne=i?.role==="ADM",Fe=i?.role==="MONITORAMENTO",Re=i?.role==="TECNICO",He=i?.role==="ANALISADOR",dt=Ne,ot=Ne||Fe,At=Ne||Re,Pn=!He,Yr=()=>B([...q,""]),Ui=J=>B(q.filter((ge,ht)=>ht!==J)),Xr=(J,ge)=>{const ht=[...q];ht[J]=ge,B(ht)},Ir=J=>{const ge=J.target.files;if(ge&&i){const ht=Array.from(ge).map(an=>({id:`file-${Date.now()}-${Math.random()}`,name:an.name,url:URL.createObjectURL(an),uploadedAt:new Date().toISOString(),uploadedBy:i.displayName||i.email||"Desconhecido"}));Ce([...we,...ht])}},Qs=J=>Ce(we.filter(ge=>ge.id!==J)),at=()=>{if(!d)return[];const J=[],ge=(ht,an,_n)=>{const Jr=Array.isArray(an)?an.join(", "):String(an||""),kr=Array.isArray(_n)?_n.join(", "):String(_n||"");Jr!==kr&&J.push({campo:ht,valorAnterior:Jr,valorNovo:kr})};return dt&&(ge("Nome do Condomínio",d.nomeCondominio,y),ge("Link de Cadastro",d.linkCadastro,E),ge("Status Geral",d.status,C)),ot&&(ge("Ramais",d.ramais,q.filter(ht=>ht.trim())),ge("CFTV",d.cftv,$),ge("Conta Situator",d.contaSituator,de),ge("Configuração Situator",d.configuracaoSituator,fe),ge("Licenças",d.licencas,H),ge("App STV",d.appStv,I),ge("Data Implantação",d.dataImplantacao,D),ge("Dispositivos de Acesso",d.dispositivosAcesso,V),ge("Observações",d.observacoes,$e)),At&&(ge("Vistorias",d.vistorias,xt),ge("Parametrização",d.parametrizacao,te),ge("Instalação",d.instalacao,re),ge("Testes Técnico",d.testesTecnico,G)),J},nt=J=>{if(J.preventDefault(),!Pn)return;if(!y.trim()){alert("Por favor, preencha o nome do condomínio");return}const ge={id:r?.id||`cond-${Date.now()}`,nomeCondominio:y,linkCadastro:E,status:C,ramais:q.filter(an=>an.trim()),cftv:$,contaSituator:de,configuracaoSituator:fe,licencas:H,appStv:I,dataImplantacao:D,dispositivosAcesso:V,observacoes:$e,vistorias:xt,parametrizacao:te,instalacao:re,testesTecnico:G,entregaInstrucao:we||[],criadoEm:r?.criadoEm||new Date().toISOString(),atualizadoEm:new Date().toISOString(),criadoPor:r?.criadoPor||i?.displayName||i?.email||""},ht=r?at():void 0;e(ge,ht)};return f.jsx("div",{className:"p-8",children:f.jsx("div",{className:"max-w-5xl mx-auto",children:f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-emerald-100 dark:border-gray-700 overflow-hidden",children:[f.jsxs("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 p-6 flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("h2",{className:"text-white",children:r?"Editar Condomínio":"Novo Condomínio"}),He&&f.jsx("p",{className:"text-emerald-100 text-sm mt-1",children:"Modo de visualização. Nenhuma alteração é permitida."}),Fe&&o==="tecnica"&&f.jsx("p",{className:"text-emerald-100 text-sm mt-1",children:"Visualização apenas. Para editar, vá para a aba Monitoramento."}),Re&&o==="monitoramento"&&f.jsx("p",{className:"text-emerald-100 text-sm mt-1",children:"Visualização apenas. Para editar, vá para a aba Técnica."})]}),f.jsx("button",{onClick:t,className:"p-2 text-white hover:bg-white/20 rounded-lg transition-all",children:f.jsx(_b,{className:"w-6 h-6"})})]}),f.jsx("div",{className:"border-b border-emerald-100 dark:border-gray-700 bg-emerald-50 dark:bg-gray-700/50",children:f.jsxs("div",{className:"flex",children:[f.jsx("button",{onClick:()=>l("monitoramento"),className:`flex-1 px-6 py-4 transition-all ${o==="monitoramento"?"bg-white dark:bg-gray-800 text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-500 dark:border-emerald-400":"text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-gray-600"}`,children:"Monitoramento"}),f.jsx("button",{onClick:()=>l("tecnica"),className:`flex-1 px-6 py-4 transition-all ${o==="tecnica"?"bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400":"text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600"}`,children:"Técnica"})]})}),f.jsxs("form",{onSubmit:nt,children:[f.jsxs("div",{className:"p-6 max-h-[calc(100vh-300px)] overflow-y-auto",children:[o==="monitoramento"&&f.jsx("div",{className:"space-y-6",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f.jsxs("div",{className:"md:col-span-2",children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-2",children:"Nome do Condomínio *"}),f.jsx("input",{type:"text",value:y,onChange:J=>v(J.target.value),disabled:!dt,className:"w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 dark:disabled:bg-gray-700/50 dark:bg-gray-700",required:!0})]}),f.jsxs("div",{className:"md:col-span-2",children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-2",children:"Link de Cadastro"}),f.jsx("input",{type:"url",value:E,onChange:J=>T(J.target.value),disabled:!dt,placeholder:"https://...",className:"w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 dark:disabled:bg-gray-700/50 dark:bg-gray-700"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-3",children:"Status Geral"}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{value:"NÃO INICIADA",label:"Não Iniciada",icon:ON},{value:"EM ANDAMENTO",label:"Em Andamento",icon:mf},{value:"CONCLUÍDA",label:"Concluída",icon:bN}].map(({value:J,label:ge,icon:ht})=>f.jsx("button",{type:"button",onClick:()=>dt&&L(J),disabled:!dt,className:"..."},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-2",children:"Conta do Situator"}),f.jsx("input",{type:"text",value:de,onChange:J=>he(J.target.value),disabled:!ot,className:"w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 dark:disabled:bg-gray-700/50 dark:bg-gray-700"})]}),f.jsxs("div",{className:"md:col-span-2",children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-2",children:"Ramais"}),q.map((J,ge)=>f.jsxs("div",{className:"flex gap-2 mb-2",children:[f.jsx("input",{type:"text",value:J,onChange:ht=>Xr(ge,ht.target.value),disabled:!ot,className:"...",placeholder:`Ramal ${ge+1}`}),f.jsx("button",{type:"button",onClick:()=>Ui(ge),className:"...",children:f.jsx(pl,{})})]},ge)),ot&&f.jsxs("button",{type:"button",onClick:Yr,className:"...",children:[f.jsx(yf,{})," Adicionar Ramal"]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-3",children:"CFTV"}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{value:"CONCLUÍDO",label:"Concluído"},{value:"EM ANDAMENTO",label:"Em Andamento"},{value:"AGUARDANDO TÉCNICA",label:"Aguard. Técnica"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>ot&&oe(J),disabled:!ot,className:"...",children:ge},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-3",children:"Configuração do Situator"}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{value:"CONCLUÍDO",label:"Concluído"},{value:"EM ANDAMENTO",label:"Em Andamento"},{value:"AGUARDANDO TÉCNICA",label:"Aguard. Técnica"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>ot&&Ve(J),disabled:!ot,className:"...",children:ge},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-3",children:"Licenças"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"CONCLUÍDO",label:"Concluído"},{value:"SOLICITADAS",label:"Solicitadas"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>ot&&N(J),disabled:!ot,className:"...",children:ge},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-3",children:"App STV"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"CONCLUÍDO",label:"Concluído"},{value:"EM ANDAMENTO",label:"Em Andamento"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>ot&&A(J),disabled:!ot,className:"...",children:ge},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-2",children:"Data para Implantação"}),f.jsx("input",{type:"date",value:D,onChange:J=>R(J.target.value),disabled:!ot,className:"w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 dark:disabled:bg-gray-700/50 dark:bg-gray-700"})]}),f.jsxs("div",{className:"md:col-span-2",children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-3",children:"Dispositivos de Acesso"}),f.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[{name:"Tag veicular",icon:SN},{name:"Tag pedestre",icon:Tc},{name:"Controles",icon:ob},{name:"Facial",icon:cb}].map(({name:J,icon:ge})=>f.jsxs("label",{className:"...",children:[f.jsx("input",{type:"checkbox",disabled:!ot,className:"sr-only"})," ",f.jsx(ge,{})," ",J," "]},J))})]}),f.jsxs("div",{className:"md:col-span-2",children:[f.jsx("label",{className:"block text-emerald-900 dark:text-emerald-100 mb-2",children:"Observações"}),f.jsx("textarea",{value:$e,onChange:J=>ct(J.target.value),disabled:!ot,rows:4,className:"w-full px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 dark:disabled:bg-gray-700/50 dark:bg-gray-700",placeholder:"Informações adicionais..."})]})]})}),o==="tecnica"&&f.jsx("div",{className:"space-y-6",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-blue-900 dark:text-blue-100 mb-3",children:"Vistorias"}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{value:"NÃO INICIADA",label:"Não Iniciada"},{value:"EM ANDAMENTO",label:"Em Andamento"},{value:"CONCLUÍDA",label:"Concluída"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>At&&Ge(J),disabled:!At,className:"...",children:ge},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-blue-900 dark:text-blue-100 mb-3",children:"Parametrização"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"CONCLUÍDO",label:"Concluído"},{value:"A FAZER",label:"A Fazer"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>At&&me(J),disabled:!At,className:"...",children:ge},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-blue-900 dark:text-blue-100 mb-3",children:"Instalação"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"CONCLUÍDA",label:"Concluída"},{value:"EM ANDAMENTO",label:"Em Andamento"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>At&&O(J),disabled:!At,className:"...",children:ge},J))})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-blue-900 dark:text-blue-100 mb-3",children:"Testes Técnico"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:"CONCLUÍDO",label:"Concluído"},{value:"EM ANDAMENTO",label:"Em Andamento"}].map(({value:J,label:ge})=>f.jsx("button",{type:"button",onClick:()=>At&&Ie(J),disabled:!At,className:"...",children:ge},J))})]}),f.jsxs("div",{className:"md:col-span-2",children:[f.jsx("label",{className:"block text-blue-900 dark:text-blue-100 mb-2",children:"Entrega de Instrução dos Equipamentos"}),we.length>0&&f.jsx("div",{children:we.map(J=>f.jsxs("div",{children:[f.jsx("p",{children:J.name}),At&&f.jsx("button",{type:"button",onClick:()=>Qs(J.id),children:f.jsx(pl,{})})]},J.id))}),!At&&we.length===0&&f.jsx("p",{children:"Nenhum arquivo."}),At&&f.jsxs("label",{children:[f.jsx(gb,{}),f.jsx("span",{children:"Adicionar arquivos"}),f.jsx("input",{type:"file",multiple:!0,onChange:Ir,className:"hidden"})]})]})]})})]}),f.jsxs("div",{className:"border-t border-emerald-100 dark:border-gray-700 p-6 bg-emerald-50 dark:bg-gray-700/50 flex justify-end gap-4",children:[f.jsx("button",{type:"button",onClick:t,className:"px-6 py-3 border border-emerald-300 dark:border-gray-600 text-emerald-700 dark:text-emerald-300 rounded-xl hover:bg-emerald-100 dark:hover:bg-gray-600 transition-all",children:"Cancelar"}),Pn&&f.jsxs("button",{type:"submit",className:"px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg flex items-center gap-2",children:[f.jsx(lb,{className:"w-5 h-5"}),f.jsx("span",{children:"Salvar"})]})]})]})]})})})}function kb(){const[r,e]=ne.useState([]),[t,i]=ne.useState(""),[o,l]=ne.useState("TODAS");ne.useEffect(()=>{const v=Ls(Cn(Mt,"historico"),E=>{const C=E.docs.map(L=>({id:L.id,...L.data()})).sort((L,q)=>new Date(q.dataHora).getTime()-new Date(L.dataHora).getTime());e(C)});return()=>v()},[]);const d=r.filter(v=>{const E=v.condominioNome.toLowerCase().includes(t.toLowerCase())||v.usuario.toLowerCase().includes(t.toLowerCase())||v.campo.toLowerCase().includes(t.toLowerCase()),T=o==="TODAS"||v.acao===o;return E&&T}),p=v=>{switch(v){case"CRIAÇÃO":return"bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700";case"EDIÇÃO":return"bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700";case"EXCLUSÃO":return"bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700";default:return"bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600"}},y=v=>{const E=new Date(v);return{date:E.toLocaleDateString("pt-BR"),time:E.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}};return f.jsx("div",{className:"p-8",children:f.jsxs("div",{className:"max-w-7xl mx-auto",children:[f.jsx("div",{className:"mb-8",children:f.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[f.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg",children:f.jsx(fl,{className:"w-6 h-6 text-white"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-emerald-900 dark:text-emerald-100",children:"Histórico de Modificações"}),f.jsxs("p",{className:"text-emerald-600 dark:text-emerald-400",children:[d.length," registro",d.length!==1?"s":""," encontrado",d.length!==1?"s":""]})]})]})}),f.jsxs("div",{className:"mb-6 flex gap-4 flex-wrap",children:[f.jsxs("div",{className:"flex-1 min-w-[300px] relative",children:[f.jsx(Di,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0a6c45] dark:text-[#7BD955] w-5 h-5"}),f.jsx("input",{type:"text",placeholder:"Buscar no histórico...",value:t,onChange:v=>i(v.target.value),className:"w-full pl-12 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-gray-700 dark:text-gray-100"})]}),f.jsxs("select",{value:o,onChange:v=>l(v.target.value),className:"px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-700 dark:text-gray-100",children:[f.jsx("option",{value:"TODAS",children:"Todas as Ações"}),f.jsx("option",{value:"CRIAÇÃO",children:"Criação"}),f.jsx("option",{value:"EDIÇÃO",children:"Edição"}),f.jsx("option",{value:"EXCLUSÃO",children:"Exclusão"})]})]}),d.length===0?f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center",children:[f.jsx(fl,{className:"w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4"}),f.jsx("h3",{className:"text-emerald-900 dark:text-emerald-100 mb-2",children:"Nenhum registro encontrado"}),f.jsx("p",{className:"text-emerald-600 dark:text-emerald-400",children:r.length===0?"O histórico de modificações aparecerá aqui.":"Tente ajustar os filtros de busca."})]}):f.jsx("div",{className:"space-y-4",children:d.map(v=>{const{date:E,time:T}=y(v.dataHora);return f.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all",children:f.jsx("div",{className:"flex items-start justify-between gap-4 mb-4",children:f.jsxs("div",{className:"flex-1",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[f.jsx("span",{className:`inline-block px-3 py-1 rounded-lg text-sm border ${p(v.acao)}`,children:v.acao}),f.jsx("h3",{className:"text-emerald-900 dark:text-emerald-100",children:v.condominioNome})]}),f.jsxs("div",{className:"flex items-center gap-4 text-emerald-600 dark:text-emerald-400 mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Tc,{className:"w-4 h-4"}),f.jsx("span",{children:v.usuario})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(dl,{className:"w-4 h-4"}),f.jsxs("span",{children:[E," às ",T]})]})]}),f.jsxs("div",{className:"flex items-start gap-2",children:[f.jsx($N,{className:"w-4 h-4 text-emerald-400 dark:text-emerald-500 mt-1 flex-shrink-0"}),f.jsxs("div",{className:"flex-1",children:[f.jsxs("p",{className:"text-emerald-700 dark:text-emerald-300 mb-1",children:[f.jsx("strong",{children:"Campo:"})," ",v.campo]}),v.acao==="EDIÇÃO"&&f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-2",children:[f.jsxs("div",{className:"p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl",children:[f.jsx("p",{className:"text-red-700 dark:text-red-400 mb-1",children:"Valor Anterior:"}),f.jsx("p",{className:"text-red-900 dark:text-red-200",children:v.valorAnterior||"(vazio)"})]}),f.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl",children:[f.jsx("p",{className:"text-green-700 dark:text-green-400 mb-1",children:"Valor Novo:"}),f.jsx("p",{className:"text-green-900 dark:text-green-200",children:v.valorNovo||"(vazio)"})]})]}),(v.acao==="CRIAÇÃO"||v.acao==="EXCLUSÃO")&&f.jsx("div",{className:`p-3 rounded-xl mt-2 ${v.acao==="CRIAÇÃO"?"bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700":"bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700"}`,children:f.jsx("p",{className:`${v.acao==="CRIAÇÃO"?"text-green-900 dark:text-green-200":"text-red-900 dark:text-red-200"}`,children:v.valorNovo})})]})]})]})})},v.id)})})]})})}function Sb({onViewBackup:r}){const[e,t]=ne.useState([]),[i,o]=ne.useState("");ne.useEffect(()=>{const v=Ls(Cn(Mt,"backups"),E=>{const C=E.docs.map(L=>({id:L.id,...L.data()})).sort((L,q)=>new Date(q.atualizadoEm).getTime()-new Date(L.atualizadoEm).getTime());t(C)});return()=>v()},[]);const l=e.filter(v=>v.nomeCondominio.toLowerCase().includes(i.toLowerCase())),d=async(v,E)=>{window.confirm(`Tem certeza que deseja excluir o backup do condomínio "${E}"?`)&&await mp(jo(Mt,"backups",v))},p=()=>{const v=JSON.stringify(e,null,2),E=new Blob([v],{type:"application/json"}),T=URL.createObjectURL(E),C=document.createElement("a");C.href=T,C.download=`backup-condominios-${new Date().toISOString().split("T")[0]}.json`,C.click(),URL.revokeObjectURL(T)},y=(v="")=>{v=v||"N/A";const E="inline-block px-2 py-1 rounded-lg text-sm border w-full text-center";switch(v){case"CONCLUÍDA":case"CONCLUÍDO":return`${E} bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700`;case"EM ANDAMENTO":return`${E} bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700`;case"NÃO INICIADA":case"A FAZER":return`${E} bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600`;case"AGUARDANDO TÉCNICA":return`${E} bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-700`;case"SOLICITADAS":return`${E} bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700`;default:return`${E} bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600`}};return f.jsx("div",{className:"p-8",children:f.jsxs("div",{className:"max-w-7xl mx-auto",children:[f.jsxs("div",{className:"mb-8",children:[f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4 mb-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg",children:f.jsx(hl,{className:"w-6 h-6 text-white"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-emerald-900 dark:text-emerald-100",children:"Backup de Condomínios"}),f.jsxs("p",{className:"text-emerald-600 dark:text-emerald-400",children:[l.length," condomínio",l.length!==1?"s":""," concluído",l.length!==1?"s":""," arquivado",l.length!==1?"s":""]})]})]}),e.length>0&&f.jsxs("button",{onClick:p,className:"flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl",children:[f.jsx(gf,{className:"w-5 h-5"}),f.jsx("span",{children:"Exportar Backup"})]})]}),f.jsx("div",{className:"bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-xl p-4",children:f.jsxs("p",{className:"text-purple-900 dark:text-purple-200",children:[f.jsx("strong",{children:"💡 Info:"}),' Esta aba armazena automaticamente todos os condomínios que atingem o status "CONCLUÍDA". Os dados são preservados mesmo se o condomínio original for editado ou excluído.']})})]}),f.jsx("div",{className:"mb-6",children:f.jsxs("div",{className:"relative",children:[f.jsx(Di,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5"}),f.jsx("input",{type:"text",placeholder:"Buscar no backup...",value:i,onChange:v=>o(v.target.value),className:"w-full pl-12 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100"})]})}),l.length===0?f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center",children:[f.jsx(hl,{className:"w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4"}),f.jsx("h3",{className:"text-emerald-900 dark:text-emerald-100 mb-2",children:"Nenhum backup encontrado"}),f.jsx("p",{className:"text-emerald-600 dark:text-emerald-400",children:e.length===0?'Os condomínios com status "CONCLUÍDA" serão automaticamente arquivados aqui.':"Tente ajustar o termo de busca."})]}):f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:l.map(v=>f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-purple-200 dark:border-purple-700 p-6 hover:shadow-xl transition-all flex flex-col",children:[f.jsxs("div",{className:"text-center mb-4",children:[f.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-3",children:f.jsx(qo,{className:"w-8 h-8 text-white"})}),f.jsx("h3",{className:"text-emerald-900 dark:text-emerald-100 mb-1",children:v.nomeCondominio}),f.jsxs("p",{className:"text-emerald-600 dark:text-emerald-400",children:["Conta: ",v.contaSituator||"N/A"]})]}),f.jsxs("div",{className:"space-y-3 mb-4 flex-1",children:[f.jsxs("p",{className:y(v.status),children:["Status: ",v.status||"N/A"]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsxs("p",{className:y(v.cftv),children:["CFTV: ",v.cftv||"N/A"]}),f.jsxs("p",{className:y(v.vistorias),children:["Vistorias: ",v.vistorias||"N/A"]}),f.jsxs("p",{className:y(v.instalacao),children:["Instalação: ",v.instalacao||"N/A"]}),f.jsxs("p",{className:y(v.licencas),children:["Licenças: ",v.licencas||"N/A"]})]}),f.jsx("div",{className:"pt-3 border-t border-purple-100 dark:border-purple-700",children:f.jsxs("div",{className:"flex items-center gap-2 text-purple-600 dark:text-purple-300 text-sm",children:[f.jsx(dl,{className:"w-4 h-4"}),f.jsxs("span",{children:["Arquivado em: ",new Date(v.atualizadoEm).toLocaleDateString("pt-BR")]})]})})]}),f.jsxs("div",{className:"flex gap-2 pt-4 border-t border-purple-100 dark:border-purple-700",children:[f.jsxs("button",{onClick:()=>r(v),className:"flex-1 p-3 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-xl transition-all flex items-center justify-center gap-2",title:"Visualizar",children:[f.jsx(yw,{className:"w-4 h-4"})," ",f.jsx("span",{children:"Ver"})]}),f.jsx("button",{onClick:()=>d(v.id,v.nomeCondominio),className:"p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all",title:"Excluir do Backup",children:f.jsx(pl,{className:"w-5 h-5"})})]})]},v.id))})]})})}const vw=ne.createContext(null);function Ab({children:r}){const[e,t]=ne.useState(()=>localStorage.getItem("densidade")||"normal"),[i,o]=ne.useState(()=>localStorage.getItem("tamanhoFonte")||"medio"),[l,d]=ne.useState(()=>localStorage.getItem("modoEscuro")==="true"),p=E=>{t(E),localStorage.setItem("densidade",E)},y=E=>{o(E),localStorage.setItem("tamanhoFonte",E)},v=E=>{d(E),localStorage.setItem("modoEscuro",String(E))};return ne.useEffect(()=>{const E=document.documentElement;E.setAttribute("data-densidade",e);const T={"extra-pequeno":"12px",pequeno:"14px",medio:"16px",grande:"18px"};E.style.fontSize=T[i],l?E.classList.add("dark"):E.classList.remove("dark")},[e,i,l]),f.jsx(vw.Provider,{value:{densidade:e,tamanhoFonte:i,modoEscuro:l,setDensidade:p,setTamanhoFonte:y,setModoEscuro:v},children:r})}function Cb(){const r=ne.useContext(vw);if(!r)throw new Error("useConfiguracoes must be used within ConfiguracoesProvider");return r}function Nb({onClose:r}){const[e,t]=ne.useState([]),[i,o]=ne.useState([]),[l,d]=ne.useState(""),[p,y]=ne.useState("todos"),[v,E]=ne.useState([]);return ne.useEffect(()=>{const T=Ls(Cn(Mt,"historico"),C=>{const L=C.docs.map($=>({id:$.id,...$.data()})),q=L.sort(($,oe)=>new Date(oe.dataHora).getTime()-new Date($.dataHora).getTime());t(q),o(q);const B=Array.from(new Set(L.map($=>$.usuario)));E(B)});return()=>T()},[]),ne.useEffect(()=>{let T=e;if(p!=="todos"&&(T=T.filter(C=>C.usuario===p)),l){const C=l.toLowerCase();T=T.filter(L=>L.condominioNome.toLowerCase().includes(C)||L.campo.toLowerCase().includes(C)||L.valorAnterior&&L.valorAnterior.toLowerCase().includes(C)||L.valorNovo&&L.valorNovo.toLowerCase().includes(C))}o(T)},[l,p,e]),f.jsx("div",{className:"fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto",children:f.jsx("div",{className:"p-4 lg:p-8",children:f.jsxs("div",{className:"max-w-4xl mx-auto",children:[f.jsx("div",{className:"mb-8",children:f.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[f.jsx("button",{onClick:r,className:"w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all",children:f.jsx(yp,{className:"w-6 h-6 text-white"})}),f.jsxs("div",{className:"flex-1",children:[f.jsx("h1",{className:"text-emerald-900 dark:text-gray-100",children:"Histórico de Alterações"}),f.jsxs("p",{className:"text-emerald-600 dark:text-gray-400",children:[i.length," ",i.length===1?"alteração encontrada":"alterações encontradas"]})]})]})}),f.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 mb-6",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[f.jsxs("div",{className:"relative",children:[f.jsx(Di,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 dark:text-gray-500"}),f.jsx("input",{type:"text",value:l,onChange:T=>d(T.target.value),placeholder:"Buscar por condomínio ou campo...",className:"w-full pl-10 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-gray-100"})]}),f.jsxs("select",{value:p,onChange:T=>y(T.target.value),className:"px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-gray-100",children:[f.jsx("option",{value:"todos",children:"Todos os usuários"}),v.map(T=>f.jsx("option",{value:T,children:T},T))]})]})}),f.jsx("div",{className:"space-y-4",children:i.length===0?f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center",children:[f.jsx(fl,{className:"w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4"}),f.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Nenhuma alteração encontrada"}),(l||p!=="todos")&&f.jsx("button",{onClick:()=>{d(""),y("todos")},className:"mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all",children:"Limpar filtros"})]}):i.map(T=>f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6",children:[f.jsxs("div",{className:"flex items-start justify-between mb-4",children:[f.jsxs("div",{className:"flex-1",children:[f.jsx("h4",{className:"text-emerald-900 dark:text-gray-100 mb-1",children:T.condominioNome}),f.jsxs("p",{className:"text-emerald-600 dark:text-gray-400",children:[f.jsx("span",{className:"font-medium",children:T.campo})," alterado"]})]}),f.jsxs("div",{className:"text-right",children:[f.jsx("p",{className:"text-emerald-700 dark:text-gray-300",children:new Date(T.dataHora).toLocaleDateString("pt-BR")}),f.jsx("p",{className:"text-emerald-600 dark:text-gray-400",children:new Date(T.dataHora).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})})]})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-emerald-50 dark:bg-gray-700/50 rounded-xl",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-emerald-600 dark:text-gray-400 mb-1",children:"Valor Anterior:"}),f.jsx("p",{className:"text-emerald-900 dark:text-gray-100",children:T.valorAnterior||"-"})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-emerald-600 dark:text-gray-400 mb-1",children:"Valor Novo:"}),f.jsx("p",{className:"text-emerald-900 dark:text-gray-100",children:T.valorNovo||"-"})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"px-3 py-1 bg-emerald-600 text-white rounded-lg",children:T.usuario}),f.jsx("span",{className:"text-emerald-600 dark:text-gray-400",children:T.acao})]})]},T.id))})]})})})}function bb({onViewBackup:r,onDeleteBackup:e,onClose:t}){const[i,o]=ne.useState([]),[l,d]=ne.useState([]),[p,y]=ne.useState("");return ne.useEffect(()=>{const v=Ls(Cn(Mt,"backups"),E=>{const C=E.docs.map(L=>({id:L.id,...L.data()})).sort((L,q)=>new Date(q.atualizadoEm||0).getTime()-new Date(L.atualizadoEm||0).getTime());o(C)});return()=>v()},[]),ne.useEffect(()=>{let v=i;if(p){const E=p.toLowerCase();v=v.filter(T=>T.nomeCondominio.toLowerCase().includes(E))}d(v)},[p,i]),f.jsx("div",{className:"fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto",children:f.jsx("div",{className:"p-4 lg:p-8",children:f.jsxs("div",{className:"max-w-4xl mx-auto",children:[f.jsx("div",{className:"mb-8",children:f.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[f.jsx("button",{onClick:t,className:"w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center shadow-lg hover:from-gray-600 hover:to-gray-800 transition-all",children:f.jsx(yp,{className:"w-6 h-6 text-white"})}),f.jsxs("div",{className:"flex-1",children:[f.jsx("h1",{className:"text-emerald-900 dark:text-gray-100",children:"Backups"}),f.jsxs("p",{className:"text-emerald-600 dark:text-gray-400",children:[l.length," ",l.length===1?"backup encontrado":"backups encontrados"]})]})]})}),f.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 mb-6",children:f.jsxs("div",{className:"relative",children:[f.jsx(Di,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 dark:text-gray-500"}),f.jsx("input",{type:"text",value:p,onChange:v=>y(v.target.value),placeholder:"Buscar por condomínio...",className:"w-full pl-10 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-gray-100"})]})}),f.jsx("div",{className:"space-y-4",children:l.length===0?f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center",children:[f.jsx(hl,{className:"w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4"}),f.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Nenhum backup encontrado"}),p&&f.jsx("button",{onClick:()=>y(""),className:"mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all",children:"Limpar busca"})]}):l.map(v=>f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6",children:[f.jsxs("div",{className:"flex items-start justify-between mb-4",children:[f.jsxs("div",{className:"flex-1",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[f.jsx(qo,{className:"w-5 h-5 text-emerald-600 dark:text-emerald-400"}),f.jsx("h4",{className:"text-emerald-900 dark:text-gray-100",children:v.nomeCondominio})]}),f.jsx("p",{className:"text-emerald-600 dark:text-gray-400",children:"Backup do condomínio concluído"})]}),f.jsxs("div",{className:"text-right",children:[f.jsxs("div",{className:"flex items-center gap-2 justify-end mb-1",children:[f.jsx(dl,{className:"w-4 h-4 text-emerald-600 dark:text-emerald-400"}),f.jsx("p",{className:"text-emerald-700 dark:text-gray-300",children:new Date(v.atualizadoEm||"").toLocaleDateString("pt-BR")})]}),f.jsx("p",{className:"text-emerald-600 dark:text-gray-400",children:new Date(v.atualizadoEm||"").toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:()=>{r(v),t()},className:"flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md hover:shadow-lg",children:[f.jsx(yw,{className:"w-4 h-4"}),f.jsx("span",{children:"Visualizar"})]}),f.jsxs("button",{onClick:()=>e(v.id),className:"flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all shadow-md hover:shadow-lg",children:[f.jsx(pl,{className:"w-4 h-4"}),f.jsx("span",{children:"Excluir"})]})]})]},v.id))})]})})})}function Rb({onViewBackup:r}){const{setDensidade:e,setTamanhoFonte:t,setModoEscuro:i}=Cb(),[o,l]=ne.useState([]),[d,p]=ne.useState([]),[y,v]=ne.useState([]),[E,T]=ne.useState(!1),[C,L]=ne.useState(!1);ne.useEffect(()=>{const $=Ls(Cn(Mt,"condominios"),he=>{l(he.docs.map(fe=>({id:fe.id,...fe.data()})))}),oe=Ls(Cn(Mt,"historico"),he=>{p(he.docs.map(fe=>({id:fe.id,...fe.data()})))}),de=Ls(Cn(Mt,"backups"),he=>{v(he.docs.map(fe=>({id:fe.id,...fe.data()})))});return()=>{$(),oe(),de()}},[]);const q=async $=>{window.confirm("Tem certeza que deseja excluir este backup? Esta ação não pode ser desfeita.")&&await mp(jo(Mt,"backups",$))},B=()=>{const $=["Nome","Link Cadastro","Status","Ramais","CFTV","Conta Situator","Configuração Situator","Licenças","App STV","Data Implantação","Observações","Vistorias","Parametrização","Instalação","Testes Técnico"],oe=o.map(H=>[H.nomeCondominio,H.linkCadastro||"",H.status,H.ramais.join(", "),H.cftv,H.contaSituator||"",H.configuracaoSituator||"",H.licencas,H.appStv||"",H.dataImplantacao||"",H.observacoes||"",H.vistorias,H.parametrizacao||"",H.instalacao,H.testesTecnico||""].map(N=>`"${String(N).replace(/"/g,'""')}"`)),de=[$.join(","),...oe.map(H=>H.join(","))].join(`
`),he=new Blob(["\uFEFF"+de],{type:"text/csv;charset=utf-8;"}),fe=document.createElement("a"),Ve=URL.createObjectURL(he);fe.setAttribute("href",Ve),fe.setAttribute("download",`condominios_${new Date().toISOString().split("T")[0]}.csv`),fe.style.visibility="hidden",document.body.appendChild(fe),fe.click(),document.body.removeChild(fe)};return f.jsxs(f.Fragment,{children:[E&&f.jsx(Nb,{onClose:()=>T(!1)}),C&&f.jsx(bb,{onViewBackup:r,onDeleteBackup:q,onClose:()=>L(!1)}),f.jsx("div",{className:"p-4 lg:p-8",children:f.jsxs("div",{className:"max-w-4xl mx-auto",children:[f.jsx("div",{className:"mb-8",children:f.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[f.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg",children:f.jsx(vf,{className:"w-6 h-6 text-white"})}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-emerald-900 dark:text-gray-100",children:"Configurações"}),f.jsx("p",{className:"text-emerald-600 dark:text-gray-400",children:"Personalize sua experiência e gerencie os dados"})]})]})}),f.jsxs("div",{className:"space-y-6",children:[f.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center",children:f.jsx(fl,{className:"w-5 h-5 text-amber-600 dark:text-amber-400"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-emerald-900 dark:text-gray-100",children:"Histórico de Alterações"}),f.jsxs("p",{className:"text-emerald-600 dark:text-gray-400",children:[d.length," ",d.length===1?"alteração registrada":"alterações registradas"]})]})]}),f.jsxs("button",{onClick:()=>T(!0),className:"px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2",children:[f.jsx(Di,{className:"w-5 h-5"}),f.jsx("span",{children:"Buscar"})]})]})}),f.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-10 h-10 bg-gray-500 dark:bg-gray-700 rounded-xl flex items-center justify-center",children:f.jsx(hl,{className:"w-5 h-5 text-white"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-emerald-900 dark:text-gray-100",children:"Backups"}),f.jsxs("p",{className:"text-emerald-600 dark:text-gray-400",children:[y.length," ",y.length===1?"backup":"backups"]})]})]}),f.jsxs("button",{onClick:()=>L(!0),className:"px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-xl hover:from-gray-600 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2",children:[f.jsx(Di,{className:"w-5 h-5"}),f.jsx("span",{children:"Buscar"})]})]})}),f.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6",children:[f.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[f.jsx("div",{className:"w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center",children:f.jsx(gf,{className:"w-5 h-5 text-green-600 dark:text-green-400"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-emerald-900 dark:text-gray-100",children:"Exportar Dados"}),f.jsx("p",{className:"text-emerald-600 dark:text-gray-400",children:"Baixe os dados dos condomínios em formato CSV"})]})]}),f.jsxs("button",{onClick:B,className:"w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl",children:[f.jsx(gf,{className:"w-5 h-5"}),f.jsx("span",{children:"Exportar Condomínios (CSV)"})]})]})]})]})})]})}function Pb(){const{user:r}=Fi(),[e,t]=ne.useState("dashboard"),[i,o]=ne.useState([]),[l,d]=ne.useState(null);ne.useEffect(()=>{const q=Ls(Cn(Mt,"condominios"),B=>{const $=B.docs.map(oe=>({id:oe.id,...oe.data()}));o($)});return()=>q()},[]);const p=async q=>{if(q.status==="CONCLUÍDA"){const B=jo(Mt,"backups",q.id);await hN(B,q,{merge:!0})}},y=()=>{d(null),t("form")},v=q=>{d(q),t("form")},E=async(q,B)=>{const $=new Date().toISOString();if(q.id){const oe={...q,atualizadoEm:$},de=jo(Mt,"condominios",q.id);if(await fN(de,oe),await p(oe),B&&B.length>0&&r){const he=B.map(fe=>{const Ve={condominioId:q.id,condominioNome:q.nomeCondominio,usuario:r.displayName||r.email||"System",acao:"EDIÇÃO",campo:fe.campo,valorAnterior:fe.valorAnterior,valorNovo:fe.valorNovo,dataHora:$};return Hu(Cn(Mt,"historico"),Ve)});await Promise.all(he)}}else{const oe={...q,criadoEm:$,atualizadoEm:$,criadoPor:r?.displayName||r?.email||""},de=await Hu(Cn(Mt,"condominios"),oe),he={...oe,id:de.id};if(await p(he),r){const fe={condominioId:de.id,condominioNome:q.nomeCondominio,usuario:r.displayName||r.email||"System",acao:"CRIAÇÃO",campo:"Condomínio",valorAnterior:"",valorNovo:"Novo condomínio criado",dataHora:$};await Hu(Cn(Mt,"historico"),fe)}}t("list"),d(null)},T=()=>{t("list"),d(null)},C=async q=>{const B=i.find($=>$.id===q);if(B&&r){await mp(jo(Mt,"condominios",q));const $={condominioId:q,condominioNome:B.nomeCondominio,usuario:r.displayName||r.email||"System",acao:"EXCLUSÃO",campo:"Condomínio",valorAnterior:B.nomeCondominio,valorNovo:"Condomínio excluído",dataHora:new Date().toISOString()};await Hu(Cn(Mt,"historico"),$)}},L=q=>{d(q),t("form")};return f.jsxs("div",{className:"flex flex-col h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",children:[f.jsx(Eb,{currentView:e,onViewChange:t,onAddCondominio:y}),f.jsxs("main",{className:"flex-1 overflow-auto pb-20 lg:pb-0",children:[e==="dashboard"&&f.jsx(xb,{condominios:i}),e==="list"&&f.jsx(Tb,{condominios:i,onEdit:v,onDelete:C}),f.jsx(fr,{roles:["ADM","MONITORAMENTO","TECNICO","ANALISADOR"],children:e==="form"&&f.jsx(Ib,{condominio:l,onSave:E,onCancel:T})}),f.jsx(fr,{roles:["ADM","MONITORAMENTO"],children:e==="historico"&&f.jsx(kb,{})}),f.jsx(fr,{roles:["ADM"],children:e==="backup"&&f.jsx(Sb,{onViewBackup:L})}),f.jsx(fr,{roles:["ADM"],children:e==="configuracoes"&&f.jsx(Rb,{onViewBackup:L})})]})]})}function Db(){const{user:r}=Fi();return r?f.jsx(Pb,{}):f.jsx(wb,{})}function Ob(){return f.jsx(yN,{children:f.jsx(Ab,{children:f.jsx(Db,{})})})}DE.createRoot(document.getElementById("root")).render(f.jsx(Ob,{}));
