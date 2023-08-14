(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Xl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ye={},Nr=[],bt=()=>{},Mv=()=>!1,Lv=/^on[^a-z]/,ua=t=>Lv.test(t),Jl=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fv=Object.prototype.hasOwnProperty,ie=(t,e)=>Fv.call(t,e),z=Array.isArray,xr=t=>Ei(t)==="[object Map]",ha=t=>Ei(t)==="[object Set]",Wh=t=>Ei(t)==="[object Date]",ee=t=>typeof t=="function",Ve=t=>typeof t=="string",Ks=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Vp=t=>_e(t)&&ee(t.then)&&ee(t.catch),Mp=Object.prototype.toString,Ei=t=>Mp.call(t),Uv=t=>Ei(t).slice(8,-1),Lp=t=>Ei(t)==="[object Object]",Zl=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ho=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$v=/-(\w)/g,Qt=fa(t=>t.replace($v,(e,n)=>n?n.toUpperCase():"")),Bv=/\B([A-Z])/g,os=fa(t=>t.replace(Bv,"-$1").toLowerCase()),da=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=fa(t=>t?`on${da(t)}`:""),zs=(t,e)=>!Object.is(t,e),fo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gh;const Kc=()=>Gh||(Gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?Kv(r):eu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ve(t))return t;if(_e(t))return t}}const jv=/;(?![^(]*\))/g,Hv=/:([^]+)/,qv=/\/\*[^]*?\*\//g;function Kv(t){const e={};return t.replace(qv,"").split(jv).forEach(n=>{if(n){const r=n.split(Hv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tu(t){let e="";if(Ve(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=tu(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wv=Xl(zv);function Fp(t){return!!t||t===""}function Gv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=pa(t[r],e[r]);return n}function pa(t,e){if(t===e)return!0;let n=Wh(t),r=Wh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ks(t),r=Ks(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?Gv(t,e):!1;if(n=_e(t),r=_e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!pa(t[o],e[o]))return!1}}return String(t)===String(e)}function Qv(t,e){return t.findIndex(n=>pa(n,e))}const mn=t=>Ve(t)?t:t==null?"":z(t)||_e(t)&&(t.toString===Mp||!ee(t.toString))?JSON.stringify(t,Up,2):String(t),Up=(t,e)=>e&&e.__v_isRef?Up(t,e.value):xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ha(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!z(e)&&!Lp(e)?String(e):e;let It;class Xv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jv(t,e=It){e&&e.active&&e.effects.push(t)}function Yv(){return It}const nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$p=t=>(t.w&Vn)>0,Bp=t=>(t.n&Vn)>0,Zv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vn},eE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];$p(s)&&!Bp(s)?s.delete(t):e[n++]=s,s.w&=~Vn,s.n&=~Vn}e.length=n}},zc=new WeakMap;let Rs=0,Vn=1;const Wc=30;let wt;const tr=Symbol(""),Gc=Symbol("");class ru{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jv(this,r)}run(){if(!this.active)return this.fn();let e=wt,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,Cn=!0,Vn=1<<++Rs,Rs<=Wc?Zv(this):Qh(this),this.fn()}finally{Rs<=Wc&&eE(this),Vn=1<<--Rs,wt=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Qh(this),this.onStop&&this.onStop(),this.active=!1)}}function Qh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const jp=[];function as(){jp.push(Cn),Cn=!1}function cs(){const t=jp.pop();Cn=t===void 0?!0:t}function ht(t,e,n){if(Cn&&wt){let r=zc.get(t);r||zc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=nu()),Hp(s)}}function Hp(t,e){let n=!1;Rs<=Wc?Bp(t)||(t.n|=Vn,n=!$p(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function on(t,e,n,r,s,i){const o=zc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Zl(n)&&a.push(o.get("length")):(a.push(o.get(tr)),xr(t)&&a.push(o.get(Gc)));break;case"delete":z(t)||(a.push(o.get(tr)),xr(t)&&a.push(o.get(Gc)));break;case"set":xr(t)&&a.push(o.get(tr));break}if(a.length===1)a[0]&&Qc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qc(nu(c))}}function Qc(t,e){const n=z(t)?t:[...t];for(const r of n)r.computed&&Xh(r);for(const r of n)r.computed||Xh(r)}function Xh(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const tE=Xl("__proto__,__v_isRef,__isVue"),qp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ks)),nE=su(),rE=su(!1,!0),sE=su(!0),Jh=iE();function iE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)ht(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){as();const r=le(this)[e].apply(this,n);return cs(),r}}),t}function oE(t){const e=le(this);return ht(e,"has",t),e.hasOwnProperty(t)}function su(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?IE:Qp:e?Gp:Wp).get(r))return r;const o=z(r);if(!t){if(o&&ie(Jh,s))return Reflect.get(Jh,s,i);if(s==="hasOwnProperty")return oE}const a=Reflect.get(r,s,i);return(Ks(s)?qp.has(s):tE(s))||(t||ht(r,"get",s),e)?a:Ye(a)?o&&Zl(s)?a:a.value:_e(a)?t?Jp(a):Ti(a):a}}const aE=Kp(),cE=Kp(!0);function Kp(t=!1){return function(n,r,s,i){let o=n[r];if(Kr(o)&&Ye(o)&&!Ye(s))return!1;if(!t&&(!Oo(s)&&!Kr(s)&&(o=le(o),s=le(s)),!z(n)&&Ye(o)&&!Ye(s)))return o.value=s,!0;const a=z(n)&&Zl(r)?Number(r)<n.length:ie(n,r),c=Reflect.set(n,r,s,i);return n===le(i)&&(a?zs(s,o)&&on(n,"set",r,s):on(n,"add",r,s)),c}}function lE(t,e){const n=ie(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&on(t,"delete",e,void 0),r}function uE(t,e){const n=Reflect.has(t,e);return(!Ks(e)||!qp.has(e))&&ht(t,"has",e),n}function hE(t){return ht(t,"iterate",z(t)?"length":tr),Reflect.ownKeys(t)}const zp={get:nE,set:aE,deleteProperty:lE,has:uE,ownKeys:hE},fE={get:sE,set(t,e){return!0},deleteProperty(t,e){return!0}},dE=Fe({},zp,{get:rE,set:cE}),iu=t=>t,ga=t=>Reflect.getPrototypeOf(t);function Ki(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(e!==i&&ht(s,"get",e),ht(s,"get",i));const{has:o}=ga(s),a=r?iu:n?cu:Ws;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(t!==s&&ht(r,"has",t),ht(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Wi(t,e=!1){return t=t.__v_raw,!e&&ht(le(t),"iterate",tr),Reflect.get(t,"size",t)}function Yh(t){t=le(t);const e=le(this);return ga(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function Zh(t,e){e=le(e);const n=le(this),{has:r,get:s}=ga(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?zs(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function ef(t){const e=le(this),{has:n,get:r}=ga(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&on(e,"delete",t,void 0),i}function tf(){const t=le(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Gi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?iu:t?cu:Ws;return!t&&ht(a,"iterate",tr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Qi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=xr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?iu:e?cu:Ws;return!e&&ht(i,"iterate",c?Gc:tr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function _n(t){return function(...e){return t==="delete"?!1:this}}function pE(){const t={get(i){return Ki(this,i)},get size(){return Wi(this)},has:zi,add:Yh,set:Zh,delete:ef,clear:tf,forEach:Gi(!1,!1)},e={get(i){return Ki(this,i,!1,!0)},get size(){return Wi(this)},has:zi,add:Yh,set:Zh,delete:ef,clear:tf,forEach:Gi(!1,!0)},n={get(i){return Ki(this,i,!0)},get size(){return Wi(this,!0)},has(i){return zi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Gi(!0,!1)},r={get(i){return Ki(this,i,!0,!0)},get size(){return Wi(this,!0)},has(i){return zi.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Gi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qi(i,!1,!1),n[i]=Qi(i,!0,!1),e[i]=Qi(i,!1,!0),r[i]=Qi(i,!0,!0)}),[t,n,e,r]}const[gE,mE,_E,yE]=pE();function ou(t,e){const n=e?t?yE:_E:t?mE:gE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const vE={get:ou(!1,!1)},EE={get:ou(!1,!0)},TE={get:ou(!0,!1)},Wp=new WeakMap,Gp=new WeakMap,Qp=new WeakMap,IE=new WeakMap;function wE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function AE(t){return t.__v_skip||!Object.isExtensible(t)?0:wE(Uv(t))}function Ti(t){return Kr(t)?t:au(t,!1,zp,vE,Wp)}function Xp(t){return au(t,!1,dE,EE,Gp)}function Jp(t){return au(t,!0,fE,TE,Qp)}function au(t,e,n,r,s){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=AE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vr(t){return Kr(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Kr(t){return!!(t&&t.__v_isReadonly)}function Oo(t){return!!(t&&t.__v_isShallow)}function Yp(t){return Vr(t)||Kr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Zp(t){return Co(t,"__v_skip",!0),t}const Ws=t=>_e(t)?Ti(t):t,cu=t=>_e(t)?Jp(t):t;function eg(t){Cn&&wt&&(t=le(t),Hp(t.dep||(t.dep=nu())))}function tg(t,e){t=le(t);const n=t.dep;n&&Qc(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function RE(t){return ng(t,!1)}function bE(t){return ng(t,!0)}function ng(t,e){return Ye(t)?t:new PE(t,e)}class PE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Ws(e)}get value(){return eg(this),this._value}set value(e){const n=this.__v_isShallow||Oo(e)||Kr(e);e=n?e:le(e),zs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ws(e),tg(this))}}function Mr(t){return Ye(t)?t.value:t}const SE={get:(t,e,n)=>Mr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rg(t){return Vr(t)?t:new Proxy(t,SE)}class CE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ru(e,()=>{this._dirty||(this._dirty=!0,tg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return eg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kE(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=bt):(r=t.get,s=t.set),new CE(r,s,i||!s,n)}function kn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ma(i,e,n)}return s}function Pt(t,e,n,r){if(ee(t)){const i=kn(t,e,n,r);return i&&Vp(i)&&i.catch(o=>{ma(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pt(t[i],e,n,r));return s}function ma(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kn(c,null,10,[t,o,a]);return}}OE(t,n,s,r)}function OE(t,e,n,r=!0){console.error(t)}let Gs=!1,Xc=!1;const Xe=[];let Ft=0;const Lr=[];let tn=null,Wn=0;const sg=Promise.resolve();let lu=null;function ig(t){const e=lu||sg;return t?e.then(this?t.bind(this):t):e}function DE(t){let e=Ft+1,n=Xe.length;for(;e<n;){const r=e+n>>>1;Qs(Xe[r])<t?e=r+1:n=r}return e}function uu(t){(!Xe.length||!Xe.includes(t,Gs&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?Xe.push(t):Xe.splice(DE(t.id),0,t),og())}function og(){!Gs&&!Xc&&(Xc=!0,lu=sg.then(cg))}function NE(t){const e=Xe.indexOf(t);e>Ft&&Xe.splice(e,1)}function xE(t){z(t)?Lr.push(...t):(!tn||!tn.includes(t,t.allowRecurse?Wn+1:Wn))&&Lr.push(t),og()}function nf(t,e=Gs?Ft+1:0){for(;e<Xe.length;e++){const n=Xe[e];n&&n.pre&&(Xe.splice(e,1),e--,n())}}function ag(t){if(Lr.length){const e=[...new Set(Lr)];if(Lr.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,r)=>Qs(n)-Qs(r)),Wn=0;Wn<tn.length;Wn++)tn[Wn]();tn=null,Wn=0}}const Qs=t=>t.id==null?1/0:t.id,VE=(t,e)=>{const n=Qs(t)-Qs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cg(t){Xc=!1,Gs=!0,Xe.sort(VE);const e=bt;try{for(Ft=0;Ft<Xe.length;Ft++){const n=Xe[Ft];n&&n.active!==!1&&kn(n,null,14)}}finally{Ft=0,Xe.length=0,ag(),Gs=!1,lu=null,(Xe.length||Lr.length)&&cg()}}function ME(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ye;f&&(s=n.map(p=>Ve(p)?p.trim():p)),h&&(s=n.map(ko))}let a,c=r[a=fc(e)]||r[a=fc(Qt(e))];!c&&i&&(c=r[a=fc(os(e))]),c&&Pt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,s)}}function lg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=lg(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(_e(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Fe(o,i),_e(t)&&r.set(t,o),o)}function _a(t,e){return!t||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,os(e))||ie(t,e))}let vt=null,ya=null;function Do(t){const e=vt;return vt=t,ya=t&&t.type.__scopeId||null,e}function hu(t){ya=t}function fu(){ya=null}function lt(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gf(-1);const i=Do(e);let o;try{o=t(...s)}finally{Do(i),r._d&&gf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:y,inheritAttrs:v}=t;let _,b;const P=Do(t);try{if(n.shapeFlag&4){const O=s||r;_=Lt(u.call(O,O,h,i,p,f,y)),b=c}else{const O=e;_=Lt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),b=e.props?c:LE(c)}}catch(O){xs.length=0,ma(O,t,1),_=Y(Xs)}let D=_;if(b&&v!==!1){const O=Object.keys(b),{shapeFlag:te}=D;O.length&&te&7&&(o&&O.some(Jl)&&(b=FE(b,o)),D=zr(D,b))}return n.dirs&&(D=zr(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),_=D,Do(P),_}const LE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},FE=(t,e)=>{const n={};for(const r in t)(!Jl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function UE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?rf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!_a(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?rf(r,o,l):!0:!!o;return!1}function rf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function $E({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const BE=t=>t.__isSuspense;function jE(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):xE(t)}const Xi={};function Fr(t,e,n){return ug(t,e,n)}function ug(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ye){var a;const c=Yv()===((a=qe)==null?void 0:a.scope)?qe:null;let l,u=!1,h=!1;if(Ye(t)?(l=()=>t.value,u=Oo(t)):Vr(t)?(l=()=>t,r=!0):z(t)?(h=!0,u=t.some(O=>Vr(O)||Oo(O)),l=()=>t.map(O=>{if(Ye(O))return O.value;if(Vr(O))return Jn(O);if(ee(O))return kn(O,c,2)})):ee(t)?e?l=()=>kn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Pt(t,c,3,[p])}:l=bt,e&&r){const O=l;l=()=>Jn(O())}let f,p=O=>{f=P.onStop=()=>{kn(O,c,4)}},y;if(Ys)if(p=bt,e?n&&Pt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const O=MT();y=O.__watcherHandles||(O.__watcherHandles=[])}else return bt;let v=h?new Array(t.length).fill(Xi):Xi;const _=()=>{if(P.active)if(e){const O=P.run();(r||u||(h?O.some((te,F)=>zs(te,v[F])):zs(O,v)))&&(f&&f(),Pt(e,c,3,[O,v===Xi?void 0:h&&v[0]===Xi?[]:v,p]),v=O)}else P.run()};_.allowRecurse=!!e;let b;s==="sync"?b=_:s==="post"?b=()=>ct(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),b=()=>uu(_));const P=new ru(l,b);e?n?_():v=P.run():s==="post"?ct(P.run.bind(P),c&&c.suspense):P.run();const D=()=>{P.stop(),c&&c.scope&&Yl(c.scope.effects,P)};return y&&y.push(D),D}function HE(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?hg(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=qe;Wr(this);const a=ug(s,i.bind(r),n);return o?Wr(o):rr(),a}function hg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Jn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))Jn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Jn(t[n],e);else if(ha(t)||xr(t))t.forEach(n=>{Jn(n,e)});else if(Lp(t))for(const n in t)Jn(t[n],e);return t}function NN(t,e){const n=vt;if(n===null)return t;const r=Ia(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ye]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Jn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function qn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(as(),Pt(c,n,8,[t.el,a,t,e]),cs())}}function du(t,e){return ee(t)?(()=>Fe({name:t.name},e,{setup:t}))():t}const po=t=>!!t.type.__asyncLoader,fg=t=>t.type.__isKeepAlive;function qE(t,e){dg(t,"a",e)}function KE(t,e){dg(t,"da",e)}function dg(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fg(s.parent.vnode)&&zE(r,e,n,s),s=s.parent}}function zE(t,e,n,r){const s=va(e,t,r,!0);pg(()=>{Yl(r[e],s)},n)}function va(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;as(),Wr(n);const a=Pt(e,n,t,o);return rr(),cs(),a});return r?s.unshift(i):s.push(i),i}}const fn=t=>(e,n=qe)=>(!Ys||t==="sp")&&va(t,(...r)=>e(...r),n),WE=fn("bm"),GE=fn("m"),QE=fn("bu"),XE=fn("u"),JE=fn("bum"),pg=fn("um"),YE=fn("sp"),ZE=fn("rtg"),eT=fn("rtc");function tT(t,e=qe){va("ec",t,e)}const gg="components";function nr(t,e){return rT(gg,t,!0,e)||t}const nT=Symbol.for("v-ndc");function rT(t,e,n=!0,r=!1){const s=vt||qe;if(s){const i=s.type;if(t===gg){const a=NT(i,!1);if(a&&(a===e||a===Qt(e)||a===da(Qt(e))))return i}const o=sf(s[t]||i[t],e)||sf(s.appContext[t],e);return!o&&r?i:o}}function sf(t,e){return t&&(t[e]||t[Qt(e)]||t[da(Qt(e))])}function of(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Jc=t=>t?Pg(t)?Ia(t)||t.proxy:Jc(t.parent):null,Ns=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jc(t.parent),$root:t=>Jc(t.root),$emit:t=>t.emit,$options:t=>pu(t),$forceUpdate:t=>t.f||(t.f=()=>uu(t.update)),$nextTick:t=>t.n||(t.n=ig.bind(t.proxy)),$watch:t=>HE.bind(t)}),pc=(t,e)=>t!==ye&&!t.__isScriptSetup&&ie(t,e),sT={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pc(r,e))return o[e]=1,r[e];if(s!==ye&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==ye&&ie(n,e))return o[e]=4,n[e];Yc&&(o[e]=0)}}const u=Ns[e];let h,f;if(u)return e==="$attrs"&&ht(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pc(s,e)?(s[e]=n,!0):r!==ye&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&ie(t,o)||pc(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(Ns,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function af(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yc=!0;function iT(t){const e=pu(t),n=t.proxy,r=t.ctx;Yc=!1,e.beforeCreate&&cf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:y,activated:v,deactivated:_,beforeDestroy:b,beforeUnmount:P,destroyed:D,unmounted:O,render:te,renderTracked:F,renderTriggered:ae,errorCaptured:Ae,serverPrefetch:Be,expose:Ie,inheritAttrs:pn,components:Hn,directives:Dt,filters:_s}=e;if(l&&oT(l,r,null),o)for(const ge in o){const ue=o[ge];ee(ue)&&(r[ge]=ue.bind(n))}if(s){const ge=s.call(n,n);_e(ge)&&(t.data=Ti(ge))}if(Yc=!0,i)for(const ge in i){const ue=i[ge],Zt=ee(ue)?ue.bind(n,n):ee(ue.get)?ue.get.bind(n,n):bt,gn=!ee(ue)&&ee(ue.set)?ue.set.bind(n):bt,Nt=At({get:Zt,set:gn});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:at=>Nt.value=at})}if(a)for(const ge in a)mg(a[ge],r,n,ge);if(c){const ge=ee(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ue=>{go(ue,ge[ue])})}u&&cf(u,t,"c");function Me(ge,ue){z(ue)?ue.forEach(Zt=>ge(Zt.bind(n))):ue&&ge(ue.bind(n))}if(Me(WE,h),Me(GE,f),Me(QE,p),Me(XE,y),Me(qE,v),Me(KE,_),Me(tT,Ae),Me(eT,F),Me(ZE,ae),Me(JE,P),Me(pg,O),Me(YE,Be),z(Ie))if(Ie.length){const ge=t.exposed||(t.exposed={});Ie.forEach(ue=>{Object.defineProperty(ge,ue,{get:()=>n[ue],set:Zt=>n[ue]=Zt})})}else t.exposed||(t.exposed={});te&&t.render===bt&&(t.render=te),pn!=null&&(t.inheritAttrs=pn),Hn&&(t.components=Hn),Dt&&(t.directives=Dt)}function oT(t,e,n=bt){z(t)&&(t=Zc(t));for(const r in t){const s=t[r];let i;_e(s)?"default"in s?i=Ht(s.from||r,s.default,!0):i=Ht(s.from||r):i=Ht(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cf(t,e,n){Pt(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mg(t,e,n,r){const s=r.includes(".")?hg(n,r):()=>n[r];if(Ve(t)){const i=e[t];ee(i)&&Fr(s,i)}else if(ee(t))Fr(s,t.bind(n));else if(_e(t))if(z(t))t.forEach(i=>mg(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&Fr(s,i,t)}}function pu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>No(c,l,o,!0)),No(c,e,o)),_e(e)&&i.set(e,c),c}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=aT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const aT={data:lf,props:uf,emits:uf,methods:bs,computed:bs,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:bs,directives:bs,watch:lT,provide:lf,inject:cT};function lf(t,e){return e?t?function(){return Fe(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function cT(t,e){return bs(Zc(t),Zc(e))}function Zc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function bs(t,e){return t?Fe(Object.create(null),t,e):e}function uf(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Fe(Object.create(null),af(t),af(e??{})):e}function lT(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function _g(){return{app:null,config:{isNativeTag:Mv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uT=0;function hT(t,e){return function(r,s=null){ee(r)||(r=Fe({},r)),s!=null&&!_e(s)&&(s=null);const i=_g(),o=new Set;let a=!1;const c=i.app={_uid:uT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:LT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Y(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ia(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){xo=c;try{return l()}finally{xo=null}}};return c}}let xo=null;function go(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=qe||vt;if(r||xo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}function fT(t,e,n,r=!1){const s={},i={};Co(i,Ta,1),t.propsDefaults=Object.create(null),yg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(_a(t.emitsOptions,f))continue;const p=e[f];if(c)if(ie(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const y=Qt(f);s[y]=el(c,a,y,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{yg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=os(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=el(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&on(t,"set","$attrs")}function yg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ho(c))continue;const l=e[c];let u;s&&ie(s,u=Qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:_a(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||ye;for(let u=0;u<i.length;u++){const h=i[u];n[h]=el(s,c,h,l[h],t,!ie(l,h))}}return o}function el(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ee(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Wr(s),r=l[n]=c.call(null,e),rr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===os(n))&&(r=!0))}return r}function vg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[f,p]=vg(h,e,!0);Fe(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return _e(t)&&r.set(t,Nr),Nr;if(z(i))for(let u=0;u<i.length;u++){const h=Qt(i[u]);hf(h)&&(o[h]=ye)}else if(i)for(const u in i){const h=Qt(u);if(hf(h)){const f=i[u],p=o[h]=z(f)||ee(f)?{type:f}:Fe({},f);if(p){const y=pf(Boolean,p.type),v=pf(String,p.type);p[0]=y>-1,p[1]=v<0||y<v,(y>-1||ie(p,"default"))&&a.push(h)}}}const l=[o,a];return _e(t)&&r.set(t,l),l}function hf(t){return t[0]!=="$"}function ff(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function df(t,e){return ff(t)===ff(e)}function pf(t,e){return z(e)?e.findIndex(n=>df(n,t)):ee(e)&&df(e,t)?0:-1}const Eg=t=>t[0]==="_"||t==="$stable",gu=t=>z(t)?t.map(Lt):[Lt(t)],pT=(t,e,n)=>{if(e._n)return e;const r=lt((...s)=>gu(e(...s)),n);return r._c=!1,r},Tg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Eg(s))continue;const i=t[s];if(ee(i))e[s]=pT(s,i,r);else if(i!=null){const o=gu(i);e[s]=()=>o}}},Ig=(t,e)=>{const n=gu(e);t.slots.default=()=>n},gT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Co(e,"_",n)):Tg(e,t.slots={})}else t.slots={},e&&Ig(t,e);Co(t.slots,Ta,1)},mT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ye;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Tg(e,s)),o=e}else e&&(Ig(t,e),o={default:1});if(i)for(const a in s)!Eg(a)&&!(a in o)&&delete s[a]};function tl(t,e,n,r,s=!1){if(z(t)){t.forEach((f,p)=>tl(f,e&&(z(e)?e[p]:e),n,r,s));return}if(po(r)&&!s)return;const i=r.shapeFlag&4?Ia(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Ye(l)&&(l.value=null)),ee(c))kn(c,a,12,[o,u]);else{const f=Ve(c),p=Ye(c);if(f||p){const y=()=>{if(t.f){const v=f?ie(h,c)?h[c]:u[c]:c.value;s?z(v)&&Yl(v,i):z(v)?v.includes(i)||v.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ct(y,n)):y()}}}const ct=jE;function _T(t){return yT(t)}function yT(t,e){const n=Kc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=bt,insertStaticContent:y}=t,v=(d,g,m,E=null,I=null,w=null,M=!1,k=null,N=!!g.dynamicChildren)=>{if(d===g)return;d&&!vs(d,g)&&(E=T(d),at(d,I,w,!0),d=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:S,ref:H,shapeFlag:U}=g;switch(S){case Ea:_(d,g,m,E);break;case Xs:b(d,g,m,E);break;case mo:d==null&&P(g,m,E,M);break;case _t:Hn(d,g,m,E,I,w,M,k,N);break;default:U&1?te(d,g,m,E,I,w,M,k,N):U&6?Dt(d,g,m,E,I,w,M,k,N):(U&64||U&128)&&S.process(d,g,m,E,I,w,M,k,N,x)}H!=null&&I&&tl(H,d&&d.ref,w,g||d,!g)},_=(d,g,m,E)=>{if(d==null)r(g.el=a(g.children),m,E);else{const I=g.el=d.el;g.children!==d.children&&l(I,g.children)}},b=(d,g,m,E)=>{d==null?r(g.el=c(g.children||""),m,E):g.el=d.el},P=(d,g,m,E)=>{[d.el,d.anchor]=y(d.children,g,m,E,d.el,d.anchor)},D=({el:d,anchor:g},m,E)=>{let I;for(;d&&d!==g;)I=f(d),r(d,m,E),d=I;r(g,m,E)},O=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),s(d),d=m;s(g)},te=(d,g,m,E,I,w,M,k,N)=>{M=M||g.type==="svg",d==null?F(g,m,E,I,w,M,k,N):Be(d,g,I,w,M,k,N)},F=(d,g,m,E,I,w,M,k)=>{let N,S;const{type:H,props:U,shapeFlag:q,transition:X,dirs:ne}=d;if(N=d.el=o(d.type,w,U&&U.is,U),q&8?u(N,d.children):q&16&&Ae(d.children,N,null,E,I,w&&H!=="foreignObject",M,k),ne&&qn(d,null,E,"created"),ae(N,d,d.scopeId,M,E),U){for(const pe in U)pe!=="value"&&!ho(pe)&&i(N,pe,null,U[pe],w,d.children,E,I,ze);"value"in U&&i(N,"value",null,U.value),(S=U.onVnodeBeforeMount)&&Vt(S,E,d)}ne&&qn(d,null,E,"beforeMount");const me=(!I||I&&!I.pendingBranch)&&X&&!X.persisted;me&&X.beforeEnter(N),r(N,g,m),((S=U&&U.onVnodeMounted)||me||ne)&&ct(()=>{S&&Vt(S,E,d),me&&X.enter(N),ne&&qn(d,null,E,"mounted")},I)},ae=(d,g,m,E,I)=>{if(m&&p(d,m),E)for(let w=0;w<E.length;w++)p(d,E[w]);if(I){let w=I.subTree;if(g===w){const M=I.vnode;ae(d,M,M.scopeId,M.slotScopeIds,I.parent)}}},Ae=(d,g,m,E,I,w,M,k,N=0)=>{for(let S=N;S<d.length;S++){const H=d[S]=k?En(d[S]):Lt(d[S]);v(null,H,g,m,E,I,w,M,k)}},Be=(d,g,m,E,I,w,M)=>{const k=g.el=d.el;let{patchFlag:N,dynamicChildren:S,dirs:H}=g;N|=d.patchFlag&16;const U=d.props||ye,q=g.props||ye;let X;m&&Kn(m,!1),(X=q.onVnodeBeforeUpdate)&&Vt(X,m,g,d),H&&qn(g,d,m,"beforeUpdate"),m&&Kn(m,!0);const ne=I&&g.type!=="foreignObject";if(S?Ie(d.dynamicChildren,S,k,m,E,ne,w):M||ue(d,g,k,null,m,E,ne,w,!1),N>0){if(N&16)pn(k,g,U,q,m,E,I);else if(N&2&&U.class!==q.class&&i(k,"class",null,q.class,I),N&4&&i(k,"style",U.style,q.style,I),N&8){const me=g.dynamicProps;for(let pe=0;pe<me.length;pe++){const Se=me[pe],Tt=U[Se],wr=q[Se];(wr!==Tt||Se==="value")&&i(k,Se,Tt,wr,I,d.children,m,E,ze)}}N&1&&d.children!==g.children&&u(k,g.children)}else!M&&S==null&&pn(k,g,U,q,m,E,I);((X=q.onVnodeUpdated)||H)&&ct(()=>{X&&Vt(X,m,g,d),H&&qn(g,d,m,"updated")},E)},Ie=(d,g,m,E,I,w,M)=>{for(let k=0;k<g.length;k++){const N=d[k],S=g[k],H=N.el&&(N.type===_t||!vs(N,S)||N.shapeFlag&70)?h(N.el):m;v(N,S,H,null,E,I,w,M,!0)}},pn=(d,g,m,E,I,w,M)=>{if(m!==E){if(m!==ye)for(const k in m)!ho(k)&&!(k in E)&&i(d,k,m[k],null,M,g.children,I,w,ze);for(const k in E){if(ho(k))continue;const N=E[k],S=m[k];N!==S&&k!=="value"&&i(d,k,S,N,M,g.children,I,w,ze)}"value"in E&&i(d,"value",m.value,E.value)}},Hn=(d,g,m,E,I,w,M,k,N)=>{const S=g.el=d?d.el:a(""),H=g.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:X}=g;X&&(k=k?k.concat(X):X),d==null?(r(S,m,E),r(H,m,E),Ae(g.children,m,H,I,w,M,k,N)):U>0&&U&64&&q&&d.dynamicChildren?(Ie(d.dynamicChildren,q,m,I,w,M,k),(g.key!=null||I&&g===I.subTree)&&wg(d,g,!0)):ue(d,g,m,H,I,w,M,k,N)},Dt=(d,g,m,E,I,w,M,k,N)=>{g.slotScopeIds=k,d==null?g.shapeFlag&512?I.ctx.activate(g,m,E,M,N):_s(g,m,E,I,w,M,N):Er(d,g,N)},_s=(d,g,m,E,I,w,M)=>{const k=d.component=ST(d,E,I);if(fg(d)&&(k.ctx.renderer=x),CT(k),k.asyncDep){if(I&&I.registerDep(k,Me),!d.el){const N=k.subTree=Y(Xs);b(null,N,g,m)}return}Me(k,d,g,m,I,w,M)},Er=(d,g,m)=>{const E=g.component=d.component;if(UE(d,g,m))if(E.asyncDep&&!E.asyncResolved){ge(E,g,m);return}else E.next=g,NE(E.update),E.update();else g.el=d.el,E.vnode=g},Me=(d,g,m,E,I,w,M)=>{const k=()=>{if(d.isMounted){let{next:H,bu:U,u:q,parent:X,vnode:ne}=d,me=H,pe;Kn(d,!1),H?(H.el=ne.el,ge(d,H,M)):H=ne,U&&fo(U),(pe=H.props&&H.props.onVnodeBeforeUpdate)&&Vt(pe,X,H,ne),Kn(d,!0);const Se=dc(d),Tt=d.subTree;d.subTree=Se,v(Tt,Se,h(Tt.el),T(Tt),d,I,w),H.el=Se.el,me===null&&$E(d,Se.el),q&&ct(q,I),(pe=H.props&&H.props.onVnodeUpdated)&&ct(()=>Vt(pe,X,H,ne),I)}else{let H;const{el:U,props:q}=g,{bm:X,m:ne,parent:me}=d,pe=po(g);if(Kn(d,!1),X&&fo(X),!pe&&(H=q&&q.onVnodeBeforeMount)&&Vt(H,me,g),Kn(d,!0),U&&he){const Se=()=>{d.subTree=dc(d),he(U,d.subTree,d,I,null)};pe?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=dc(d);v(null,Se,m,E,d,I,w),g.el=Se.el}if(ne&&ct(ne,I),!pe&&(H=q&&q.onVnodeMounted)){const Se=g;ct(()=>Vt(H,me,Se),I)}(g.shapeFlag&256||me&&po(me.vnode)&&me.vnode.shapeFlag&256)&&d.a&&ct(d.a,I),d.isMounted=!0,g=m=E=null}},N=d.effect=new ru(k,()=>uu(S),d.scope),S=d.update=()=>N.run();S.id=d.uid,Kn(d,!0),S()},ge=(d,g,m)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,dT(d,g.props,E,m),mT(d,g.children,m),as(),nf(),cs()},ue=(d,g,m,E,I,w,M,k,N=!1)=>{const S=d&&d.children,H=d?d.shapeFlag:0,U=g.children,{patchFlag:q,shapeFlag:X}=g;if(q>0){if(q&128){gn(S,U,m,E,I,w,M,k,N);return}else if(q&256){Zt(S,U,m,E,I,w,M,k,N);return}}X&8?(H&16&&ze(S,I,w),U!==S&&u(m,U)):H&16?X&16?gn(S,U,m,E,I,w,M,k,N):ze(S,I,w,!0):(H&8&&u(m,""),X&16&&Ae(U,m,E,I,w,M,k,N))},Zt=(d,g,m,E,I,w,M,k,N)=>{d=d||Nr,g=g||Nr;const S=d.length,H=g.length,U=Math.min(S,H);let q;for(q=0;q<U;q++){const X=g[q]=N?En(g[q]):Lt(g[q]);v(d[q],X,m,null,I,w,M,k,N)}S>H?ze(d,I,w,!0,!1,U):Ae(g,m,E,I,w,M,k,N,U)},gn=(d,g,m,E,I,w,M,k,N)=>{let S=0;const H=g.length;let U=d.length-1,q=H-1;for(;S<=U&&S<=q;){const X=d[S],ne=g[S]=N?En(g[S]):Lt(g[S]);if(vs(X,ne))v(X,ne,m,null,I,w,M,k,N);else break;S++}for(;S<=U&&S<=q;){const X=d[U],ne=g[q]=N?En(g[q]):Lt(g[q]);if(vs(X,ne))v(X,ne,m,null,I,w,M,k,N);else break;U--,q--}if(S>U){if(S<=q){const X=q+1,ne=X<H?g[X].el:E;for(;S<=q;)v(null,g[S]=N?En(g[S]):Lt(g[S]),m,ne,I,w,M,k,N),S++}}else if(S>q)for(;S<=U;)at(d[S],I,w,!0),S++;else{const X=S,ne=S,me=new Map;for(S=ne;S<=q;S++){const dt=g[S]=N?En(g[S]):Lt(g[S]);dt.key!=null&&me.set(dt.key,S)}let pe,Se=0;const Tt=q-ne+1;let wr=!1,qh=0;const ys=new Array(Tt);for(S=0;S<Tt;S++)ys[S]=0;for(S=X;S<=U;S++){const dt=d[S];if(Se>=Tt){at(dt,I,w,!0);continue}let xt;if(dt.key!=null)xt=me.get(dt.key);else for(pe=ne;pe<=q;pe++)if(ys[pe-ne]===0&&vs(dt,g[pe])){xt=pe;break}xt===void 0?at(dt,I,w,!0):(ys[xt-ne]=S+1,xt>=qh?qh=xt:wr=!0,v(dt,g[xt],m,null,I,w,M,k,N),Se++)}const Kh=wr?vT(ys):Nr;for(pe=Kh.length-1,S=Tt-1;S>=0;S--){const dt=ne+S,xt=g[dt],zh=dt+1<H?g[dt+1].el:E;ys[S]===0?v(null,xt,m,zh,I,w,M,k,N):wr&&(pe<0||S!==Kh[pe]?Nt(xt,m,zh,2):pe--)}}},Nt=(d,g,m,E,I=null)=>{const{el:w,type:M,transition:k,children:N,shapeFlag:S}=d;if(S&6){Nt(d.component.subTree,g,m,E);return}if(S&128){d.suspense.move(g,m,E);return}if(S&64){M.move(d,g,m,x);return}if(M===_t){r(w,g,m);for(let U=0;U<N.length;U++)Nt(N[U],g,m,E);r(d.anchor,g,m);return}if(M===mo){D(d,g,m);return}if(E!==2&&S&1&&k)if(E===0)k.beforeEnter(w),r(w,g,m),ct(()=>k.enter(w),I);else{const{leave:U,delayLeave:q,afterLeave:X}=k,ne=()=>r(w,g,m),me=()=>{U(w,()=>{ne(),X&&X()})};q?q(w,ne,me):me()}else r(w,g,m)},at=(d,g,m,E=!1,I=!1)=>{const{type:w,props:M,ref:k,children:N,dynamicChildren:S,shapeFlag:H,patchFlag:U,dirs:q}=d;if(k!=null&&tl(k,null,m,d,!0),H&256){g.ctx.deactivate(d);return}const X=H&1&&q,ne=!po(d);let me;if(ne&&(me=M&&M.onVnodeBeforeUnmount)&&Vt(me,g,d),H&6)qi(d.component,m,E);else{if(H&128){d.suspense.unmount(m,E);return}X&&qn(d,null,g,"beforeUnmount"),H&64?d.type.remove(d,g,m,I,x,E):S&&(w!==_t||U>0&&U&64)?ze(S,g,m,!1,!0):(w===_t&&U&384||!I&&H&16)&&ze(N,g,m),E&&Tr(d)}(ne&&(me=M&&M.onVnodeUnmounted)||X)&&ct(()=>{me&&Vt(me,g,d),X&&qn(d,null,g,"unmounted")},m)},Tr=d=>{const{type:g,el:m,anchor:E,transition:I}=d;if(g===_t){Ir(m,E);return}if(g===mo){O(d);return}const w=()=>{s(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:M,delayLeave:k}=I,N=()=>M(m,w);k?k(d.el,w,N):N()}else w()},Ir=(d,g)=>{let m;for(;d!==g;)m=f(d),s(d),d=m;s(g)},qi=(d,g,m)=>{const{bum:E,scope:I,update:w,subTree:M,um:k}=d;E&&fo(E),I.stop(),w&&(w.active=!1,at(M,d,g,m)),k&&ct(k,g),ct(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ze=(d,g,m,E=!1,I=!1,w=0)=>{for(let M=w;M<d.length;M++)at(d[M],g,m,E,I)},T=d=>d.shapeFlag&6?T(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),L=(d,g,m)=>{d==null?g._vnode&&at(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,m),nf(),ag(),g._vnode=d},x={p:v,um:at,m:Nt,r:Tr,mt:_s,mc:Ae,pc:ue,pbc:Ie,n:T,o:t};let B,he;return e&&([B,he]=e(x)),{render:L,hydrate:B,createApp:hT(L,B)}}function Kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wg(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=En(s[i]),a.el=o.el),n||wg(o,a)),a.type===Ea&&(a.el=o.el)}}function vT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ET=t=>t.__isTeleport,_t=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),Xs=Symbol.for("v-cmt"),mo=Symbol.for("v-stc"),xs=[];let Rt=null;function In(t=!1){xs.push(Rt=t?null:[])}function TT(){xs.pop(),Rt=xs[xs.length-1]||null}let Js=1;function gf(t){Js+=t}function Ag(t){return t.dynamicChildren=Js>0?Rt||Nr:null,TT(),Js>0&&Rt&&Rt.push(t),t}function Gn(t,e,n,r,s,i){return Ag(A(t,e,n,r,s,i,!0))}function IT(t,e,n,r,s){return Ag(Y(t,e,n,r,s,!0))}function nl(t){return t?t.__v_isVNode===!0:!1}function vs(t,e){return t.type===e.type&&t.key===e.key}const Ta="__vInternal",Rg=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||Ye(t)||ee(t)?{i:vt,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,r=0,s=null,i=t===_t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rg(e),ref:e&&_o(e),scopeId:ya,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vt};return a?(mu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Js>0&&!o&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const Y=wT;function wT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nT)&&(t=Xs),nl(t)){const a=zr(t,e,!0);return n&&mu(a,n),Js>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(xT(t)&&(t=t.__vccOpts),e){e=AT(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=tu(a)),_e(c)&&(Yp(c)&&!z(c)&&(c=Fe({},c)),e.style=eu(c))}const o=Ve(t)?1:BE(t)?128:ET(t)?64:_e(t)?4:ee(t)?2:0;return A(t,e,n,r,s,o,i,!0)}function AT(t){return t?Yp(t)||Ta in t?Fe({},t):t:null}function zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?RT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rg(a),ref:e&&e.ref?n&&s?z(s)?s.concat(_o(e)):[s,_o(e)]:_o(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function De(t=" ",e=0){return Y(Ea,null,t,e)}function bg(t,e){const n=Y(mo,null,t);return n.staticCount=e,n}function Lt(t){return t==null||typeof t=="boolean"?Y(Xs):z(t)?Y(_t,null,t.slice()):typeof t=="object"?En(t):Y(Ea,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function mu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ta in e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[De(e)]):n=8);t.children=e,t.shapeFlag|=n}function RT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tu([e.class,r.class]));else if(s==="style")e.style=eu([e.style,r.style]);else if(ua(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Vt(t,e,n,r=null){Pt(t,e,7,[n,r])}const bT=_g();let PT=0;function ST(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||bT,i={uid:PT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vg(r,s),emitsOptions:lg(r,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ME.bind(null,i),t.ce&&t.ce(i),i}let qe=null,_u,Ar,mf="__VUE_INSTANCE_SETTERS__";(Ar=Kc()[mf])||(Ar=Kc()[mf]=[]),Ar.push(t=>qe=t),_u=t=>{Ar.length>1?Ar.forEach(e=>e(t)):Ar[0](t)};const Wr=t=>{_u(t),t.scope.on()},rr=()=>{qe&&qe.scope.off(),_u(null)};function Pg(t){return t.vnode.shapeFlag&4}let Ys=!1;function CT(t,e=!1){Ys=e;const{props:n,children:r}=t.vnode,s=Pg(t);fT(t,n,s,e),gT(t,r);const i=s?kT(t,e):void 0;return Ys=!1,i}function kT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zp(new Proxy(t.ctx,sT));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?DT(t):null;Wr(t),as();const i=kn(r,t,0,[t.props,s]);if(cs(),rr(),Vp(i)){if(i.then(rr,rr),e)return i.then(o=>{_f(t,o,e)}).catch(o=>{ma(o,t,0)});t.asyncDep=i}else _f(t,i,e)}else Sg(t,e)}function _f(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=rg(e)),Sg(t,n)}let yf;function Sg(t,e,n){const r=t.type;if(!t.render){if(!e&&yf&&!r.render){const s=r.template||pu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Fe(Fe({isCustomElement:i,delimiters:a},o),c);r.render=yf(s,l)}}t.render=r.render||bt}Wr(t),as(),iT(t),cs(),rr()}function OT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ht(t,"get","$attrs"),e[n]}}))}function DT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return OT(t)},slots:t.slots,emit:t.emit,expose:e}}function Ia(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rg(Zp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ns)return Ns[n](t)},has(e,n){return n in e||n in Ns}}))}function NT(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function xT(t){return ee(t)&&"__vccOpts"in t}const At=(t,e)=>kE(t,e,Ys);function Vo(t,e,n){const r=arguments.length;return r===2?_e(e)&&!z(e)?nl(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nl(n)&&(n=[n]),Y(t,e,n))}const VT=Symbol.for("v-scx"),MT=()=>Ht(VT),LT="3.3.4",FT="http://www.w3.org/2000/svg",Qn=typeof document<"u"?document:null,vf=Qn&&Qn.createElement("template"),UT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Qn.createElementNS(FT,t):Qn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vf.innerHTML=r?`<svg>${t}</svg>`:t;const a=vf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $T(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function BT(t,e,n){const r=t.style,s=Ve(n);if(n&&!s){if(e&&!Ve(e))for(const i in e)n[i]==null&&rl(r,i,"");for(const i in n)rl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ef=/\s*!important$/;function rl(t,e,n){if(z(n))n.forEach(r=>rl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jT(t,e);Ef.test(n)?t.setProperty(os(r),n.replace(Ef,""),"important"):t[r]=n}}const Tf=["Webkit","Moz","ms"],gc={};function jT(t,e){const n=gc[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return gc[e]=r;r=da(r);for(let s=0;s<Tf.length;s++){const i=Tf[s]+r;if(i in t)return gc[e]=i}return e}const If="http://www.w3.org/1999/xlink";function HT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(If,e.slice(6,e.length)):t.setAttributeNS(If,e,n);else{const i=Wv(e);n==null||i&&!Fp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function qT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Fp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Xn(t,e,n,r){t.addEventListener(e,n,r)}function KT(t,e,n,r){t.removeEventListener(e,n,r)}function zT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=WT(e);if(r){const l=i[e]=XT(r,s);Xn(t,a,l,c)}else o&&(KT(t,a,o,c),i[e]=void 0)}}const wf=/(?:Once|Passive|Capture)$/;function WT(t){let e;if(wf.test(t)){e={};let r;for(;r=t.match(wf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let mc=0;const GT=Promise.resolve(),QT=()=>mc||(GT.then(()=>mc=0),mc=Date.now());function XT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(JT(r,n.value),e,5,[r])};return n.value=t,n.attached=QT(),n}function JT(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Af=/^on[a-z]/,YT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?$T(t,r,s):e==="style"?BT(t,n,r):ua(e)?Jl(e)||zT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ZT(t,e,r,s))?qT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),HT(t,e,r,s))};function ZT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Af.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Af.test(e)&&Ve(n)?!1:e in t}const Mo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>fo(e,n):e};function eI(t){t.target.composing=!0}function Rf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Mo(s);const i=r||s.props&&s.props.type==="number";Xn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ko(a)),t._assign(a)}),n&&Xn(t,"change",()=>{t.value=t.value.trim()}),e||(Xn(t,"compositionstart",eI),Xn(t,"compositionend",Rf),Xn(t,"change",Rf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Mo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ko(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},VN={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ha(e);Xn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ko(Lo(o)):Lo(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Mo(r)},mounted(t,{value:e}){bf(t,e)},beforeUpdate(t,e,n){t._assign=Mo(n)},updated(t,{value:e}){bf(t,e)}};function bf(t,e){const n=t.multiple;if(!(n&&!z(e)&&!ha(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Lo(i);if(n)z(e)?i.selected=Qv(e,o)>-1:i.selected=e.has(o);else if(pa(Lo(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lo(t){return"_value"in t?t._value:t.value}const tI=["ctrl","shift","alt","meta"],nI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tI.some(n=>t[`${n}Key`]&&!e.includes(n))},MN=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=nI[e[s]];if(i&&i(n,e))return}return t(n,...r)},rI=Fe({patchProp:YT},UT);let Pf;function sI(){return Pf||(Pf=_T(rI))}const iI=(...t)=>{const e=sI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=oI(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function oI(t){return Ve(t)?document.querySelector(t):t}function aI(){return Cg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Cg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const cI=typeof Proxy=="function",lI="devtools-plugin:setup",uI="plugin:settings:set";let Rr,sl;function hI(){var t;return Rr!==void 0||(typeof window<"u"&&window.performance?(Rr=!0,sl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Rr=!0,sl=global.perf_hooks.performance):Rr=!1),Rr}function fI(){return hI()?sl.now():Date.now()}class dI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return fI()}},n&&n.on(uI,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function pI(t,e){const n=t,r=Cg(),s=aI(),i=cI&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(lI,t,e);else{const o=i?new dI(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var kg="store";function LN(t){return t===void 0&&(t=null),Ht(t!==null?t:kg)}function ls(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function gI(t){return t!==null&&typeof t=="object"}function mI(t){return t&&typeof t.then=="function"}function _I(t,e){return function(){return t(e)}}function Og(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Dg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;wa(t,n,[],t._modules.root,!0),yu(t,n,e)}function yu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};ls(s,function(o,a){i[a]=_I(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Ti({data:e}),t.strict&&II(t),r&&n&&t._withCommit(function(){r.data=null})}function wa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=vu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=yI(t,o,n);r.forEachMutation(function(u,h){var f=o+h;vI(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,p=u.handler||u;EI(t,f,p,l)}),r.forEachGetter(function(u,h){var f=o+h;TI(t,f,u,l)}),r.forEachChild(function(u,h){wa(t,e,n.concat(h),u,s)})}function yI(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Fo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Fo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Ng(t,e)}},state:{get:function(){return vu(t.state,n)}}}),s}function Ng(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function vI(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function EI(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return mI(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function TI(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function II(t){Fr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function vu(t,e){return e.reduce(function(n,r){return n[r]},t)}function Fo(t,e,n){return gI(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var wI="vuex bindings",Sf="vuex:mutations",_c="vuex:actions",br="vuex",AI=0;function RI(t,e){pI({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[wI]},function(n){n.addTimelineLayer({id:Sf,label:"Vuex Mutations",color:Cf}),n.addTimelineLayer({id:_c,label:"Vuex Actions",color:Cf}),n.addInspector({id:br,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===br)if(r.filter){var s=[];Lg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Mg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===br){var s=r.nodeId;Ng(e,s),r.state=SI(kI(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===br){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(br),n.sendInspectorState(br),n.addTimelineEvent({layerId:Sf,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=AI++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:_c,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:_c,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Cf=8702998,bI=6710886,PI=16777215,xg={label:"namespaced",textColor:PI,backgroundColor:bI};function Vg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Mg(t,e){return{id:e||"root",label:Vg(e),tags:t.namespaced?[xg]:[],children:Object.keys(t._children).map(function(n){return Mg(t._children[n],e+n+"/")})}}function Lg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[xg]:[]}),Object.keys(e._children).forEach(function(s){Lg(t,e._children[s],n,r+s+"/")})}function SI(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=CI(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Vg(o):o,editable:!1,value:il(function(){return i[o]})}})}return s}function CI(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=il(function(){return t[n]})}else e[n]=il(function(){return t[n]})}),e}function kI(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function il(t){try{return t()}catch(e){return e}}var Ot=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Fg={namespaced:{configurable:!0}};Fg.namespaced.get=function(){return!!this._rawModule.namespaced};Ot.prototype.addChild=function(e,n){this._children[e]=n};Ot.prototype.removeChild=function(e){delete this._children[e]};Ot.prototype.getChild=function(e){return this._children[e]};Ot.prototype.hasChild=function(e){return e in this._children};Ot.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ot.prototype.forEachChild=function(e){ls(this._children,e)};Ot.prototype.forEachGetter=function(e){this._rawModule.getters&&ls(this._rawModule.getters,e)};Ot.prototype.forEachAction=function(e){this._rawModule.actions&&ls(this._rawModule.actions,e)};Ot.prototype.forEachMutation=function(e){this._rawModule.mutations&&ls(this._rawModule.mutations,e)};Object.defineProperties(Ot.prototype,Fg);var gr=function(e){this.register([],e,!1)};gr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};gr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};gr.prototype.update=function(e){Ug([],this.root,e)};gr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Ot(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ls(n.modules,function(a,c){s.register(e.concat(c),a,r)})};gr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};gr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Ug(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Ug(t.concat(r),e.getChild(r),n.modules[r])}}function OI(t){return new ft(t)}var ft=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new gr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,y){return l.call(o,f,p,y)},this.strict=s;var u=this._modules.root.state;wa(this,u,[],this._modules.root),yu(this,u),r.forEach(function(h){return h(n)})},Eu={state:{configurable:!0}};ft.prototype.install=function(e,n){e.provide(n||kg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&RI(e,this)};Eu.state.get=function(){return this._state.data};Eu.state.set=function(t){};ft.prototype.commit=function(e,n,r){var s=this,i=Fo(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};ft.prototype.dispatch=function(e,n){var r=this,s=Fo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};ft.prototype.subscribe=function(e,n){return Og(e,this._subscribers,n)};ft.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Og(r,this._actionSubscribers,n)};ft.prototype.watch=function(e,n,r){var s=this;return Fr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ft.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ft.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),wa(this,this.state,e,this._modules.get(e),r.preserveState),yu(this,this.state)};ft.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=vu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Dg(this)};ft.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ft.prototype.hotUpdate=function(e){this._modules.update(e),Dg(this,!0)};ft.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ft.prototype,Eu);const DI="modulepreload",NI=function(t){return"/"+t},kf={},Mt=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=NI(i),i in kf)return;kf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":DI,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Sr=typeof window<"u";function xI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=St(s)?s.map(t):t(s)}return n}const Vs=()=>{},St=Array.isArray,VI=/\/$/,MI=t=>t.replace(VI,"");function vc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$I(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function LI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Of(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function FI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gr(e.matched[r],n.matched[s])&&$g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!UI(t[n],e[n]))return!1;return!0}function UI(t,e){return St(t)?Df(t,e):St(e)?Df(e,t):t===e}function Df(t,e){return St(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $I(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Zs;(function(t){t.pop="pop",t.push="push"})(Zs||(Zs={}));var Ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ms||(Ms={}));function BI(t){if(!t)if(Sr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MI(t)}const jI=/^[^#]+#/;function HI(t,e){return t.replace(jI,"#")+e}function qI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function KI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=qI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nf(t,e){return(history.state?history.state.position-e:-1)+t}const ol=new Map;function zI(t,e){ol.set(t,e)}function WI(t){const e=ol.get(t);return ol.delete(t),e}let GI=()=>location.protocol+"//"+location.host;function Bg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Of(c,"")}return Of(n,t)+r+s}function QI(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Bg(t,location),y=n.value,v=e.value;let _=0;if(f){if(n.value=p,e.value=f,o&&o===y){o=null;return}_=v?f.position-v.position:0}else r(p);s.forEach(b=>{b(n.value,y,{delta:_,type:Zs.pop,direction:_?_>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(fe({},f.state,{scroll:Aa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function xf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Aa():null}}function XI(t){const{history:e,location:n}=window,r={value:Bg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:GI()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=fe({},e.state,xf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Aa()});i(u.current,u,!0);const h=fe({},xf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function JI(t){t=BI(t);const e=XI(t),n=QI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:HI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function YI(t){return typeof t=="string"||t&&typeof t=="object"}function jg(t){return typeof t=="string"||typeof t=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hg=Symbol("");var Vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vf||(Vf={}));function Qr(t,e){return fe(new Error,{type:t,[Hg]:!0},e)}function en(t,e){return t instanceof Error&&Hg in t&&(e==null||!!(t.type&e))}const Mf="[^/]+?",ZI={sensitive:!1,strict:!1,start:!0,end:!0},ew=/[.+*?^${}()[\]/\\]/g;function tw(t,e){const n=fe({},ZI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(ew,"\\$&"),p+=40;else if(f.type===1){const{value:y,repeatable:v,optional:_,regexp:b}=f;i.push({name:y,repeatable:v,optional:_});const P=b||Mf;if(P!==Mf){p+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+O.message)}}let D=v?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(D=_&&l.length<2?`(?:/${D})`:"/"+D),_&&(D+="?"),s+=D,p+=20,_&&(p+=-8),v&&(p+=-20),P===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",y=i[f-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:v,optional:_}=p,b=y in l?l[y]:"";if(St(b)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=St(b)?b.join("/"):b;if(!P)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function nw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Lf(r))return 1;if(Lf(s))return-1}return s.length-r.length}function Lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sw={type:0,value:""},iw=/[a-zA-Z0-9_]/;function ow(t){if(!t)return[[]];if(t==="/")return[[sw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:iw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function aw(t,e,n){const r=tw(ow(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cw(t,e){const n=[],r=new Map;e=$f({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,y=lw(u);y.aliasOf=f&&f.record;const v=$f(e,u),_=[y];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of D)_.push(fe({},y,{components:f?f.record.components:y.components,path:O,aliasOf:f?f.record:y}))}let b,P;for(const D of _){const{path:O}=D;if(h&&O[0]!=="/"){const te=h.record.path,F=te[te.length-1]==="/"?"":"/";D.path=h.record.path+(O&&F+O)}if(b=aw(D,h,v),f?f.alias.push(b):(P=P||b,P!==b&&P.alias.push(b),p&&u.name&&!Uf(b)&&o(u.name)),y.children){const te=y.children;for(let F=0;F<te.length;F++)i(te[F],b,f&&f.children[F])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return P?()=>{o(P)}:Vs}function o(u){if(jg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&rw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Uf(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},y,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Qr(1,{location:u});v=f.record.name,p=fe(Ff(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&Ff(u.params,f.keys.map(P=>P.name))),y=f.stringify(p)}else if("path"in u)y=u.path,f=n.find(P=>P.re.test(y)),f&&(p=f.parse(y),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw Qr(1,{location:u,currentLocation:h});v=f.record.name,p=fe({},h.params,u.params),y=f.stringify(p)}const _=[];let b=f;for(;b;)_.unshift(b.record),b=b.parent;return{name:v,path:y,params:p,matched:_,meta:hw(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ff(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Uf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hw(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function $f(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qg(t,e){return e.children.some(n=>n===t||qg(t,n))}const Kg=/#/g,fw=/&/g,dw=/\//g,pw=/=/g,gw=/\?/g,zg=/\+/g,mw=/%5B/g,_w=/%5D/g,Wg=/%5E/g,yw=/%60/g,Gg=/%7B/g,vw=/%7C/g,Qg=/%7D/g,Ew=/%20/g;function Tu(t){return encodeURI(""+t).replace(vw,"|").replace(mw,"[").replace(_w,"]")}function Tw(t){return Tu(t).replace(Gg,"{").replace(Qg,"}").replace(Wg,"^")}function al(t){return Tu(t).replace(zg,"%2B").replace(Ew,"+").replace(Kg,"%23").replace(fw,"%26").replace(yw,"`").replace(Gg,"{").replace(Qg,"}").replace(Wg,"^")}function Iw(t){return al(t).replace(pw,"%3D")}function ww(t){return Tu(t).replace(Kg,"%23").replace(gw,"%3F")}function Aw(t){return t==null?"":ww(t).replace(dw,"%2F")}function Uo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Rw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(zg," "),o=i.indexOf("="),a=Uo(o<0?i:i.slice(0,o)),c=o<0?null:Uo(i.slice(o+1));if(a in e){let l=e[a];St(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Bf(t){let e="";for(let n in t){const r=t[n];if(n=Iw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(St(r)?r.map(i=>i&&al(i)):[r&&al(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=St(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Pw=Symbol(""),jf=Symbol(""),Iu=Symbol(""),Xg=Symbol(""),cl=Symbol("");function Es(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Qr(4,{from:n,to:e})):h instanceof Error?a(h):YI(h)?a(Qr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ec(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Sw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Tn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=xI(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Tn(f,n,r,i,o)()}))}}return s}function Sw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hf(t){const e=Ht(Iu),n=Ht(Xg),r=At(()=>e.resolve(Mr(t.to))),s=At(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Gr.bind(null,u));if(f>-1)return f;const p=qf(c[l-2]);return l>1&&qf(u)===p&&h[h.length-1].path!==p?h.findIndex(Gr.bind(null,c[l-2])):f}),i=At(()=>s.value>-1&&Dw(n.params,r.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&$g(n.params,r.value.params));function a(c={}){return Ow(c)?e[Mr(t.replace)?"replace":"push"](Mr(t.to)).catch(Vs):Promise.resolve()}return{route:r,href:At(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Cw=du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hf,setup(t,{slots:e}){const n=Ti(Hf(t)),{options:r}=Ht(Iu),s=At(()=>({[Kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Vo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kw=Cw;function Ow(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!St(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Kf=(t,e,n)=>t??e??n,Nw=du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(cl),s=At(()=>t.route||r.value),i=Ht(jf,0),o=At(()=>{let l=Mr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=At(()=>s.value.matched[o.value]);go(jf,At(()=>o.value+1)),go(Pw,a),go(cl,s);const c=RE();return Fr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Gr(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return zf(n.default,{Component:f,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,_=Vo(f,fe({},y,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return zf(n.default,{Component:_,route:l})||_}}});function zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xw=Nw;function Vw(t){const e=cw(t.routes,t),n=t.parseQuery||Rw,r=t.stringifyQuery||Bf,s=t.history,i=Es(),o=Es(),a=Es(),c=bE(yn);let l=yn;Sr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yc.bind(null,T=>""+T),h=yc.bind(null,Aw),f=yc.bind(null,Uo);function p(T,L){let x,B;return jg(T)?(x=e.getRecordMatcher(T),B=L):B=T,e.addRoute(B,x)}function y(T){const L=e.getRecordMatcher(T);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(T=>T.record)}function _(T){return!!e.getRecordMatcher(T)}function b(T,L){if(L=fe({},L||c.value),typeof T=="string"){const m=vc(n,T,L.path),E=e.resolve({path:m.path},L),I=s.createHref(m.fullPath);return fe(m,E,{params:f(E.params),hash:Uo(m.hash),redirectedFrom:void 0,href:I})}let x;if("path"in T)x=fe({},T,{path:vc(n,T.path,L.path).path});else{const m=fe({},T.params);for(const E in m)m[E]==null&&delete m[E];x=fe({},T,{params:h(m)}),L.params=h(L.params)}const B=e.resolve(x,L),he=T.hash||"";B.params=u(f(B.params));const d=LI(r,fe({},T,{hash:Tw(he),path:B.path})),g=s.createHref(d);return fe({fullPath:d,hash:he,query:r===Bf?bw(T.query):T.query||{}},B,{redirectedFrom:void 0,href:g})}function P(T){return typeof T=="string"?vc(n,T,c.value.path):fe({},T)}function D(T,L){if(l!==T)return Qr(8,{from:L,to:T})}function O(T){return ae(T)}function te(T){return O(fe(P(T),{replace:!0}))}function F(T){const L=T.matched[T.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let B=typeof x=="function"?x(T):x;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=P(B):{path:B},B.params={}),fe({query:T.query,hash:T.hash,params:"path"in B?{}:T.params},B)}}function ae(T,L){const x=l=b(T),B=c.value,he=T.state,d=T.force,g=T.replace===!0,m=F(x);if(m)return ae(fe(P(m),{state:typeof m=="object"?fe({},he,m.state):he,force:d,replace:g}),L||x);const E=x;E.redirectedFrom=L;let I;return!d&&FI(r,B,x)&&(I=Qr(16,{to:E,from:B}),Nt(B,B,!0,!1)),(I?Promise.resolve(I):Ie(E,B)).catch(w=>en(w)?en(w,2)?w:gn(w):ue(w,E,B)).then(w=>{if(w){if(en(w,2))return ae(fe({replace:g},P(w.to),{state:typeof w.to=="object"?fe({},he,w.to.state):he,force:d}),L||E)}else w=Hn(E,B,!0,g,he);return pn(E,B,w),w})}function Ae(T,L){const x=D(T,L);return x?Promise.reject(x):Promise.resolve()}function Be(T){const L=Ir.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(T):T()}function Ie(T,L){let x;const[B,he,d]=Mw(T,L);x=Ec(B.reverse(),"beforeRouteLeave",T,L);for(const m of B)m.leaveGuards.forEach(E=>{x.push(Tn(E,T,L))});const g=Ae.bind(null,T,L);return x.push(g),ze(x).then(()=>{x=[];for(const m of i.list())x.push(Tn(m,T,L));return x.push(g),ze(x)}).then(()=>{x=Ec(he,"beforeRouteUpdate",T,L);for(const m of he)m.updateGuards.forEach(E=>{x.push(Tn(E,T,L))});return x.push(g),ze(x)}).then(()=>{x=[];for(const m of d)if(m.beforeEnter)if(St(m.beforeEnter))for(const E of m.beforeEnter)x.push(Tn(E,T,L));else x.push(Tn(m.beforeEnter,T,L));return x.push(g),ze(x)}).then(()=>(T.matched.forEach(m=>m.enterCallbacks={}),x=Ec(d,"beforeRouteEnter",T,L),x.push(g),ze(x))).then(()=>{x=[];for(const m of o.list())x.push(Tn(m,T,L));return x.push(g),ze(x)}).catch(m=>en(m,8)?m:Promise.reject(m))}function pn(T,L,x){a.list().forEach(B=>Be(()=>B(T,L,x)))}function Hn(T,L,x,B,he){const d=D(T,L);if(d)return d;const g=L===yn,m=Sr?history.state:{};x&&(B||g?s.replace(T.fullPath,fe({scroll:g&&m&&m.scroll},he)):s.push(T.fullPath,he)),c.value=T,Nt(T,L,x,g),gn()}let Dt;function _s(){Dt||(Dt=s.listen((T,L,x)=>{if(!qi.listening)return;const B=b(T),he=F(B);if(he){ae(fe(he,{replace:!0}),B).catch(Vs);return}l=B;const d=c.value;Sr&&zI(Nf(d.fullPath,x.delta),Aa()),Ie(B,d).catch(g=>en(g,12)?g:en(g,2)?(ae(g.to,B).then(m=>{en(m,20)&&!x.delta&&x.type===Zs.pop&&s.go(-1,!1)}).catch(Vs),Promise.reject()):(x.delta&&s.go(-x.delta,!1),ue(g,B,d))).then(g=>{g=g||Hn(B,d,!1),g&&(x.delta&&!en(g,8)?s.go(-x.delta,!1):x.type===Zs.pop&&en(g,20)&&s.go(-1,!1)),pn(B,d,g)}).catch(Vs)}))}let Er=Es(),Me=Es(),ge;function ue(T,L,x){gn(T);const B=Me.list();return B.length?B.forEach(he=>he(T,L,x)):console.error(T),Promise.reject(T)}function Zt(){return ge&&c.value!==yn?Promise.resolve():new Promise((T,L)=>{Er.add([T,L])})}function gn(T){return ge||(ge=!T,_s(),Er.list().forEach(([L,x])=>T?x(T):L()),Er.reset()),T}function Nt(T,L,x,B){const{scrollBehavior:he}=t;if(!Sr||!he)return Promise.resolve();const d=!x&&WI(Nf(T.fullPath,0))||(B||!x)&&history.state&&history.state.scroll||null;return ig().then(()=>he(T,L,d)).then(g=>g&&KI(g)).catch(g=>ue(g,T,L))}const at=T=>s.go(T);let Tr;const Ir=new Set,qi={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:_,getRoutes:v,resolve:b,options:t,push:O,replace:te,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:Zt,install(T){const L=this;T.component("RouterLink",kw),T.component("RouterView",xw),T.config.globalProperties.$router=L,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Mr(c)}),Sr&&!Tr&&c.value===yn&&(Tr=!0,O(s.location).catch(he=>{}));const x={};for(const he in yn)Object.defineProperty(x,he,{get:()=>c.value[he],enumerable:!0});T.provide(Iu,L),T.provide(Xg,Xp(x)),T.provide(cl,c);const B=T.unmount;Ir.add(T),T.unmount=function(){Ir.delete(T),Ir.size<1&&(l=yn,Dt&&Dt(),Dt=null,c.value=yn,Tr=!1,ge=!1),B()}}};function ze(T){return T.reduce((L,x)=>L.then(()=>Be(x)),Promise.resolve())}return qi}function Mw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Gr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Gr(l,c))||s.push(c))}return[n,r,s]}const Ls=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ra=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),c=s.pop(),l={provider:s.length>0?s[0]:r,prefix:c,name:a};return e&&!yo(l)?null:l}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!yo(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!yo(a,n)?null:a}return null},yo=(t,e)=>t?!!((t.provider===""||t.provider.match(Ls))&&(e&&t.prefix===""||t.prefix.match(Ls))&&t.name.match(Ls)):!1,Jg=Object.freeze({left:0,top:0,width:16,height:16}),$o=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ba=Object.freeze({...Jg,...$o}),ll=Object.freeze({...ba,body:"",hidden:!1});function Lw(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Wf(t,e){const n=Lw(t,e);for(const r in ll)r in $o?r in t&&!(r in n)&&(n[r]=$o[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function Fw(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,c=a&&i(a);c&&(s[o]=[a].concat(c))}return s[o]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),s}function Uw(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=Wf(r[a]||s[a],i)}return o(e),n.forEach(o),Wf(t,i)}function Yg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=Fw(t);for(const s in r){const i=r[s];i&&(e(s,Uw(t,s,i)),n.push(s))}return n}const $w={provider:"",aliases:{},not_found:{},...Jg};function Tc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Zg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Tc(t,$w))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s.match(Ls)||typeof i.body!="string"||!Tc(i,ll))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s.match(Ls)||typeof o!="string"||!n[o]&&!r[o]||!Tc(i,ll))return null}return e}const Gf=Object.create(null);function Bw(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function ar(t,e){const n=Gf[t]||(Gf[t]=Object.create(null));return n[e]||(n[e]=Bw(t,e))}function wu(t,e){return Zg(e)?Yg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function jw(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let ei=!1;function em(t){return typeof t=="boolean"&&(ei=t),ei}function Hw(t){const e=typeof t=="string"?Ra(t,!0,ei):t;if(e){const n=ar(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function qw(t,e){const n=Ra(t,!0,ei);if(!n)return!1;const r=ar(n.provider,n.prefix);return jw(r,n.name,e)}function Kw(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),ei&&!e&&!t.prefix){let s=!1;return Zg(t)&&(t.prefix="",Yg(t,(i,o)=>{o&&qw(i,o)&&(s=!0)})),s}const n=t.prefix;if(!yo({provider:e,prefix:n,name:"a"}))return!1;const r=ar(e,n);return!!wu(r,t)}const tm=Object.freeze({width:null,height:null}),nm=Object.freeze({...tm,...$o}),zw=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ww=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Qf(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(zw);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=Ww.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}const Gw=t=>t==="unset"||t==="undefined"||t==="none";function Qw(t,e){const n={...ba,...t},r={...nm,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(y=>{const v=[],_=y.hFlip,b=y.vFlip;let P=y.rotate;_?b?P+=2:(v.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),v.push("scale(-1 1)"),s.top=s.left=0):b&&(v.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),v.push("scale(1 -1)"),s.top=s.left=0);let D;switch(P<0&&(P-=Math.floor(P/4)*4),P=P%4,P){case 1:D=s.height/2+s.top,v.unshift("rotate(90 "+D.toString()+" "+D.toString()+")");break;case 2:v.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:D=s.width/2+s.left,v.unshift("rotate(-90 "+D.toString()+" "+D.toString()+")");break}P%2===1&&(s.left!==s.top&&(D=s.left,s.left=s.top,s.top=D),s.width!==s.height&&(D=s.width,s.width=s.height,s.height=D)),v.length&&(i='<g transform="'+v.join(" ")+'">'+i+"</g>")});const o=r.width,a=r.height,c=s.width,l=s.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?l:a,u=Qf(h,c/l)):(u=o==="auto"?c:o,h=a===null?Qf(u,l/c):a==="auto"?l:a);const f={},p=(y,v)=>{Gw(v)||(f[y]=v.toString())};return p("width",u),p("height",h),f.viewBox=s.left.toString()+" "+s.top.toString()+" "+c.toString()+" "+l.toString(),{attributes:f,body:i}}const Xw=/\sid="(\S+)"/g,Jw="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Yw=0;function Zw(t,e=Jw){const n=[];let r;for(;r=Xw.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(Yw++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const ul=Object.create(null);function e0(t,e){ul[t]=e}function hl(t){return ul[t]||ul[""]}function Au(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Ru=Object.create(null),Ts=["https://api.simplesvg.com","https://api.unisvg.com"],vo=[];for(;Ts.length>0;)Ts.length===1||Math.random()>.5?vo.push(Ts.shift()):vo.push(Ts.pop());Ru[""]=Au({resources:["https://api.iconify.design"].concat(vo)});function t0(t,e){const n=Au(e);return n===null?!1:(Ru[t]=n,!0)}function bu(t){return Ru[t]}const n0=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Xf=n0();function r0(t,e){const n=bu(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function s0(t){return t===404}const i0=(t,e,n)=>{const r=[],s=r0(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,l)=>{a+=c.length+1,a>=s&&l>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),r.push(o),r};function o0(t){if(typeof t=="string"){const e=bu(t);if(e)return e.path}return"/"}const a0=(t,e,n)=>{if(!Xf){n("abort",424);return}let r=o0(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Xf(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(s0(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},c0={prepare:i0,send:a0};function l0(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,c=n[i]||(n[i]=Object.create(null)),l=c[o]||(c[o]=ar(i,o));let u;a in l.icons?u=e.loaded:o===""||l.missing.has(a)?u=e.missing:u=e.pending;const h={provider:i,prefix:o,name:a};u.push(h)}),e}function rm(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function u0(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const l=c.name;if(t.icons[l])o.loaded.push({provider:r,prefix:s,name:l});else if(t.missing.has(l))o.missing.push({provider:r,prefix:s,name:l});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||rm([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let h0=0;function f0(t,e,n){const r=h0++,s=rm.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function d0(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Ra(s,e,n):s;i&&r.push(i)}),r}var p0={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function g0(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let F=t.resources.slice(0);for(o=[];F.length>1;){const ae=Math.floor(Math.random()*F.length);o.push(F[ae]),F=F.slice(0,ae).concat(F.slice(ae+1))}o=o.concat(F)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",l=0,u,h=null,f=[],p=[];typeof r=="function"&&p.push(r);function y(){h&&(clearTimeout(h),h=null)}function v(){c==="pending"&&(c="aborted"),y(),f.forEach(F=>{F.status==="pending"&&(F.status="aborted")}),f=[]}function _(F,ae){ae&&(p=[]),typeof F=="function"&&p.push(F)}function b(){return{startTime:a,payload:e,status:c,queriesSent:l,queriesPending:f.length,subscribe:_,abort:v}}function P(){c="failed",p.forEach(F=>{F(void 0,u)})}function D(){f.forEach(F=>{F.status==="pending"&&(F.status="aborted")}),f=[]}function O(F,ae,Ae){const Be=ae!=="success";switch(f=f.filter(Ie=>Ie!==F),c){case"pending":break;case"failed":if(Be||!t.dataAfterTimeout)return;break;default:return}if(ae==="abort"){u=Ae,P();return}if(Be){u=Ae,f.length||(o.length?te():P());return}if(y(),D(),!t.random){const Ie=t.resources.indexOf(F.resource);Ie!==-1&&Ie!==t.index&&(t.index=Ie)}c="completed",p.forEach(Ie=>{Ie(Ae)})}function te(){if(c!=="pending")return;y();const F=o.shift();if(F===void 0){if(f.length){h=setTimeout(()=>{y(),c==="pending"&&(D(),P())},t.timeout);return}P();return}const ae={status:"pending",resource:F,callback:(Ae,Be)=>{O(ae,Ae,Be)}};f.push(ae),l++,h=setTimeout(te,t.rotate),n(F,e,ae.callback)}return setTimeout(te),b}function sm(t){const e={...p0,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,c,l){const u=g0(e,a,c,(h,f)=>{r(),l&&l(h,f)});return n.push(u),u}function i(a){return n.find(c=>a(c))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function Jf(){}const Ic=Object.create(null);function m0(t){if(!Ic[t]){const e=bu(t);if(!e)return;const n=sm(e),r={config:e,redundancy:n};Ic[t]=r}return Ic[t]}function _0(t,e,n){let r,s;if(typeof t=="string"){const i=hl(t);if(!i)return n(void 0,424),Jf;s=i.send;const o=m0(t);o&&(r=o.redundancy)}else{const i=Au(t);if(i){r=sm(i);const o=t.resources?t.resources[0]:"",a=hl(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Jf):r.query(e,s,n)().abort}const Yf="iconify2",ti="iconify",im=ti+"-count",Zf=ti+"-version",om=36e5,y0=168;function fl(t,e){try{return t.getItem(e)}catch{}}function Pu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ed(t,e){try{t.removeItem(e)}catch{}}function dl(t,e){return Pu(t,im,e.toString())}function pl(t){return parseInt(fl(t,im))||0}const Pa={local:!0,session:!0},am={local:new Set,session:new Set};let Su=!1;function v0(t){Su=t}let Ji=typeof window>"u"?{}:window;function cm(t){const e=t+"Storage";try{if(Ji&&Ji[e]&&typeof Ji[e].length=="number")return Ji[e]}catch{}Pa[t]=!1}function lm(t,e){const n=cm(t);if(!n)return;const r=fl(n,Zf);if(r!==Yf){if(r){const a=pl(n);for(let c=0;c<a;c++)ed(n,ti+c.toString())}Pu(n,Zf,Yf),dl(n,0);return}const s=Math.floor(Date.now()/om)-y0,i=a=>{const c=ti+a.toString(),l=fl(n,c);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>s&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}ed(n,c)}};let o=pl(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,dl(n,o)):am[t].add(a))}function um(){if(!Su){v0(!0);for(const t in Pa)lm(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=ar(r,s);if(!wu(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function E0(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in Pa)lm(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function T0(t,e){Su||um();function n(r){let s;if(!Pa[r]||!(s=cm(r)))return;const i=am[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=pl(s),!dl(s,o+1))return;const a={cached:Math.floor(Date.now()/om),provider:t.provider,data:e};return Pu(s,ti+o.toString(),JSON.stringify(a))}e.lastModified&&!E0(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function td(){}function I0(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,u0(t)}))}function w0(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;delete t.iconsToLoad;let i;if(!s||!(i=hl(n)))return;i.prepare(n,r,s).forEach(a=>{_0(n,a,c=>{if(typeof c!="object")a.icons.forEach(l=>{t.missing.add(l)});else try{const l=wu(t,c);if(!l.length)return;const u=t.pendingIcons;u&&l.forEach(h=>{u.delete(h)}),T0(t,c)}catch(l){console.error(l)}I0(t)})})}))}const A0=(t,e)=>{const n=d0(t,!0,em()),r=l0(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,td)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(c=>{const{provider:l,prefix:u}=c;if(u===a&&l===o)return;o=l,a=u,i.push(ar(l,u));const h=s[l]||(s[l]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(c=>{const{provider:l,prefix:u,name:h}=c,f=ar(l,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(h)||(p.add(h),s[l][u].push(h))}),i.forEach(c=>{const{provider:l,prefix:u}=c;s[l][u].length&&w0(c,s[l][u])}),e?f0(e,r,i):td};function R0(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in tm?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const b0=/[\s,]+/;function P0(t,e){e.split(b0).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function S0(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function C0(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function k0(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function O0(t){return"data:image/svg+xml,"+k0(t)}function D0(t){return'url("'+O0(t)+'")'}const nd={...nm,inline:!1},N0={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},x0={display:"inline-block"},gl={backgroundColor:"currentColor"},hm={backgroundColor:"transparent"},rd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},sd={webkitMask:gl,mask:gl,background:hm};for(const t in sd){const e=sd[t];for(const n in rd)e[t+n]=rd[n]}const Eo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Eo[t+"-flip"]=e,Eo[t.slice(0,1)+"-flip"]=e,Eo[t+"Flip"]=e});function id(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const od=(t,e)=>{const n=R0(nd,e),r={...N0},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let v in e){const _=e[v];if(_!==void 0)switch(v){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[v]=_===!0||_==="true"||_===1;break;case"flip":typeof _=="string"&&P0(n,_);break;case"color":i.color=_;break;case"rotate":typeof _=="string"?n[v]=S0(_):typeof _=="number"&&(n[v]=_);break;case"ariaHidden":case"aria-hidden":_!==!0&&_!=="true"&&delete r["aria-hidden"];break;default:{const b=Eo[v];b?(_===!0||_==="true"||_===1)&&(n[b]=!0):nd[v]===void 0&&(r[v]=_)}}}const c=Qw(t,n),l=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,l);let v=0,_=e.id;return typeof _=="string"&&(_=_.replace(/-/g,"_")),r.innerHTML=Zw(c.body,_?()=>_+"ID"+v++:"iconifyVue"),Vo("svg",r)}const{body:u,width:h,height:f}=t,p=s==="mask"||(s==="bg"?!1:u.indexOf("currentColor")!==-1),y=C0(u,{...l,width:h+"",height:f+""});return r.style={...i,"--svg":D0(y),width:id(l.width),height:id(l.height),...x0,...p?gl:hm,...a},Vo("span",r)};em(!0);e0("",c0);if(typeof document<"u"&&typeof window<"u"){um();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Kw(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;t0(n,s)||console.error(r)}catch{console.error(r)}}}}const V0={...ba,body:""},fm=du({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Ra(t,!1,!0))===null)return this.abortLoading(),null;const r=Hw(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:A0([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return od(V0,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),od({...ba,...e.data},n)}});const Sa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},M0={components:{Icon:fm}},L0=t=>(hu("data-v-394c49cd"),t=t(),fu(),t),F0={class:"navbar navbar-expand-lg bg-black"},U0={class:"container"},$0={class:"navbar-brand",href:"#"},B0={class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"},j0={class:"collapse navbar-collapse",id:"navbarSupportedContent"},H0={class:"navbar-nav ms-auto mb-2 mb-lg-0"},q0={class:"nav-item"},K0={class:"nav-link active","aria-current":"page",href:"#"},z0={class:"nav-item"},W0={class:"nav-link",href:"#"},G0={class:"nav-item mx-3"},Q0={class:"nav-link",href:"#"},X0={class:"nav-item"},J0={class:"nav-link",href:"#"},Y0={class:"nav-item"},Z0={class:"nav-link",href:"#"},eA={type:"button",class:"btn learn-more mx-3"},tA={class:"offcanvas bg-dark offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},nA=L0(()=>A("div",{class:"offcanvas-header"},[A("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"COESA"),A("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),rA={class:"offcanvas-body"},sA={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},iA={class:"nav-item"},oA={class:"nav-link active","aria-current":"page",href:"#"},aA={class:"nav-item"},cA={class:"nav-link",href:"#"},lA={class:"nav-item"},uA={class:"nav-link",href:"#"},hA={class:"nav-item"},fA={class:"nav-link",href:"#"},dA={class:"nav-item"},pA={class:"nav-link",href:"#"},gA={type:"button",class:"btn learn-more"};function mA(t,e,n,r,s,i){const o=nr("RouterLink"),a=nr("Icon");return In(),Gn(_t,null,[A("nav",F0,[A("div",U0,[A("a",$0,[Y(o,{to:"/",class:"route"},{default:lt(()=>[De("COESA-EKSU")]),_:1})]),A("button",B0,[Y(a,{icon:"material-symbols:menu",color:"white",width:"30"})]),A("div",j0,[A("ul",H0,[A("li",q0,[A("a",K0,[Y(o,{to:"/",class:"route"},{default:lt(()=>[De("Dashboard")]),_:1})])]),A("li",z0,[A("a",W0,[Y(o,{to:"/all-events",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Events")]),_:1})])]),A("li",G0,[A("a",Q0,[Y(o,{to:"/all-course",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Courses")]),_:1})])]),A("li",X0,[A("a",J0,[Y(o,{to:"/edit/front-end",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Front-End")]),_:1})])]),A("li",Y0,[A("a",Z0,[Y(a,{icon:"ion:settings-outline",color:"white"})])])]),A("form",null,[A("button",eA,[Y(a,{icon:"ic:sharp-logout",color:"white"})])])])])]),A("div",tA,[nA,A("div",rA,[A("ul",sA,[A("li",iA,[A("a",oA,[Y(o,{to:"/",class:"route"},{default:lt(()=>[De("Dashboard")]),_:1})])]),A("li",aA,[A("a",cA,[Y(o,{to:"/all-events",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Events")]),_:1})])]),A("li",lA,[A("a",uA,[Y(o,{to:"/all-course",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Courses")]),_:1})])]),A("li",hA,[A("a",fA,[Y(o,{to:"/edit/front-end",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Front-End")]),_:1})])]),A("li",dA,[A("a",pA,[Y(a,{icon:"ion:settings-outline",color:"white"})])])]),A("form",null,[A("button",gA,[Y(a,{icon:"ic:sharp-logout",color:"white"})])])])])],64)}const _A=Sa(M0,[["render",mA],["__scopeId","data-v-394c49cd"]]);/**
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
 */const dm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new vA;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EA=function(t){const e=dm(t);return pm.encodeByteArray(e,!0)},Bo=function(t){return EA(t).replace(/\./g,"")},gm=function(t){try{return pm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IA=()=>TA().__FIREBASE_DEFAULTS__,wA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gm(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return IA()||wA()||AA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mm=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_m=t=>{const e=mm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ym=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config},vm=t=>{var e;return(e=Ca())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class RA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Em(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bo(JSON.stringify(n)),Bo(JSON.stringify(o)),a].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function PA(){var t;const e=(t=Ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kA(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OA(){try{return typeof indexedDB=="object"}catch{return!1}}function DA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const NA="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NA,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yt(s,a,r)}}function xA(t,e){return t.replace(VA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const VA=/\{\$([^}]+)}/g;function MA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ad(i)&&ad(o)){if(!jo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ad(t){return t!==null&&typeof t=="object"}/**
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
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LA(t,e){const n=new FA(t,e);return n.subscribe.bind(n)}class FA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wc),s.error===void 0&&(s.error=wc),s.complete===void 0&&(s.complete=wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wc(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class $A{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jA(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BA(t){return t===zn?void 0:t}function jA(t){return t.instantiationMode==="EAGER"}/**
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
 */class HA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $A(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const qA={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},KA=oe.INFO,zA={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},WA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=KA,this._logHandler=WA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const GA=(t,e)=>e.some(n=>t instanceof n);let cd,ld;function QA(){return cd||(cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XA(){return ld||(ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,ml=new WeakMap,Im=new WeakMap,Ac=new WeakMap,ku=new WeakMap;function JA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(On(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),ku.set(e,t),e}function YA(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZA(t){_l=t(_l)}function eR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return Im.set(r,e.sort?e.sort():[e]),On(r)}:XA().includes(t)?function(...e){return t.apply(Rc(this),e),On(Tm.get(this))}:function(...e){return On(t.apply(Rc(this),e))}}function tR(t){return typeof t=="function"?eR(t):(t instanceof IDBTransaction&&YA(t),GA(t,QA())?new Proxy(t,_l):t)}function On(t){if(t instanceof IDBRequest)return JA(t);if(Ac.has(t))return Ac.get(t);const e=tR(t);return e!==t&&(Ac.set(t,e),ku.set(e,t)),e}const Rc=t=>ku.get(t);function nR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=On(o);return r&&o.addEventListener("upgradeneeded",c=>{r(On(o.result),c.oldVersion,c.newVersion,On(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const rR=["get","getKey","getAll","getAllKeys","count"],sR=["put","add","delete","clear"],bc=new Map;function ud(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return bc.set(e,i),i}ZA(t=>({...t,get:(e,n,r)=>ud(e,n)||t.get(e,n,r),has:(e,n)=>!!ud(e,n)||t.has(e,n)}));/**
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
 */class iR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yl="@firebase/app",hd="0.9.15";/**
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
 */const cr=new Cu("@firebase/app"),aR="@firebase/app-compat",cR="@firebase/analytics-compat",lR="@firebase/analytics",uR="@firebase/app-check-compat",hR="@firebase/app-check",fR="@firebase/auth",dR="@firebase/auth-compat",pR="@firebase/database",gR="@firebase/database-compat",mR="@firebase/functions",_R="@firebase/functions-compat",yR="@firebase/installations",vR="@firebase/installations-compat",ER="@firebase/messaging",TR="@firebase/messaging-compat",IR="@firebase/performance",wR="@firebase/performance-compat",AR="@firebase/remote-config",RR="@firebase/remote-config-compat",bR="@firebase/storage",PR="@firebase/storage-compat",SR="@firebase/firestore",CR="@firebase/firestore-compat",kR="firebase",OR="10.1.0";/**
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
 */const vl="[DEFAULT]",DR={[yl]:"fire-core",[aR]:"fire-core-compat",[lR]:"fire-analytics",[cR]:"fire-analytics-compat",[hR]:"fire-app-check",[uR]:"fire-app-check-compat",[fR]:"fire-auth",[dR]:"fire-auth-compat",[pR]:"fire-rtdb",[gR]:"fire-rtdb-compat",[mR]:"fire-fn",[_R]:"fire-fn-compat",[yR]:"fire-iid",[vR]:"fire-iid-compat",[ER]:"fire-fcm",[TR]:"fire-fcm-compat",[IR]:"fire-perf",[wR]:"fire-perf-compat",[AR]:"fire-rc",[RR]:"fire-rc-compat",[bR]:"fire-gcs",[PR]:"fire-gcs-compat",[SR]:"fire-fst",[CR]:"fire-fst-compat","fire-js":"fire-js",[kR]:"fire-js-all"};/**
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
 */const Ho=new Map,El=new Map;function NR(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lr(t){const e=t.name;if(El.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,t);for(const n of Ho.values())NR(n,t);return!0}function ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new Ii("app","Firebase",xR);/**
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
 */class VR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=OR;function wm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dn.create("bad-app-name",{appName:String(s)});if(n||(n=ym()),!n)throw Dn.create("no-options");const i=Ho.get(s);if(i){if(jo(n,i.options)&&jo(r,i.config))return i;throw Dn.create("duplicate-app",{appName:s})}const o=new HA(s);for(const c of El.values())o.addComponent(c);const a=new VR(n,r,o);return Ho.set(s,a),a}function Ou(t=vl){const e=Ho.get(t);if(!e&&t===vl&&ym())return wm();if(!e)throw Dn.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=DR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}lr(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const MR="firebase-heartbeat-database",LR=1,ni="firebase-heartbeat-store";let Pc=null;function Am(){return Pc||(Pc=nR(MR,LR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function FR(t){try{return await(await Am()).transaction(ni).objectStore(ni).get(Rm(t))}catch(e){if(e instanceof Yt)cr.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function fd(t,e){try{const r=(await Am()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,Rm(t)),await r.done}catch(n){if(n instanceof Yt)cr.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function Rm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UR=1024,$R=30*24*60*60*1e3;class BR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=$R}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dd(),{heartbeatsToSend:n,unsentEntries:r}=jR(this._heartbeatsCache.heartbeats),s=Bo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dd(){return new Date().toISOString().substring(0,10)}function jR(t,e=UR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OA()?DA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await FR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pd(t){return Bo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qR(t){lr(new Mn("platform-logger",e=>new iR(e),"PRIVATE")),lr(new Mn("heartbeat",e=>new BR(e),"PRIVATE")),qt(yl,hd,t),qt(yl,hd,"esm2017"),qt("fire-js","")}qR("");var KR="firebase",zR="10.1.0";/**
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
 */qt(KR,zR,"app");function Du(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WR=bm,Pm=new Ii("auth","Firebase",bm());/**
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
 */const qo=new Cu("@firebase/auth");function GR(t,...e){qo.logLevel<=oe.WARN&&qo.warn(`Auth (${mr}): ${t}`,...e)}function To(t,...e){qo.logLevel<=oe.ERROR&&qo.error(`Auth (${mr}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw Nu(t,...e)}function Kt(t,...e){return Nu(t,...e)}function QR(t,e,n){const r=Object.assign(Object.assign({},WR()),{[e]:n});return new Ii("auth","Firebase",r).create(e,{appName:t.name})}function Nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pm.create(t,...e)}function W(t,e,...n){if(!t)throw Nu(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function an(t,e){t||nn(e)}/**
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
 */function Tl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XR(){return gd()==="http:"||gd()==="https:"}function gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function JR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XR()||SA()||"connection"in navigator)?navigator.onLine:!0}function YR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=bA()||CA()}get(){return JR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xu(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eb=new Ai(3e4,6e4);function Ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function us(t,e,n,r,s={}){return Cm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Sm.fetch()(km(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Cm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZR),e);try{const s=new tb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Yi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw QR(t,u,l);Ct(t,u)}}catch(s){if(s instanceof Yt)throw s;Ct(t,"network-request-failed",{message:String(s)})}}async function Oa(t,e,n,r,s={}){const i=await us(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function km(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xu(t.config,s):`${t.config.apiScheme}://${s}`}class tb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),eb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function nb(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function rb(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sb(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),s=Vu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fs(Sc(s.auth_time)),issuedAtTime:Fs(Sc(s.iat)),expirationTime:Fs(Sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const s=gm(n);return s?JSON.parse(s):(To("Failed to decode base64 JWT payload"),null)}catch(s){return To("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ib(t){const e=Vu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&ob(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Om{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ri(t,rb(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ub(i.providerUserInfo):[],a=lb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Om(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cb(t){const e=Oe(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ub(t){return t.map(e=>{var{providerId:n}=e,r=Du(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hb(t,e){const n=await Cm(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=km(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ib(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new si;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
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
 */function vn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Om(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sb(this,e)}reload(){return cb(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,nb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:O,isAnonymous:te,providerData:F,stsTokenManager:ae}=n;W(D&&ae,e,"internal-error");const Ae=si.fromJSON(this.name,ae);W(typeof D=="string",e,"internal-error"),vn(h,e.name),vn(f,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof te=="boolean",e,"internal-error"),vn(p,e.name),vn(y,e.name),vn(v,e.name),vn(_,e.name),vn(b,e.name),vn(P,e.name);const Be=new sr({uid:D,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:te,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:Ae,createdAt:b,lastLoginAt:P});return F&&Array.isArray(F)&&(Be.providerData=F.map(Ie=>Object.assign({},Ie))),_&&(Be._redirectEventId=_),Be}static async _fromIdTokenResponse(e,n,r=!1){const s=new si;s.updateFromServerResponse(n);const i=new sr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}}/**
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
 */const md=new Map;function rn(t){an(t instanceof Function,"Expected a class definition");let e=md.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,md.set(t,e),e)}/**
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
 */class Dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dm.type="NONE";const _d=Dm;/**
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
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(rn(_d),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rn(_d);const o=Io(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=sr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ur(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ur(i,e,r))}}/**
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
 */function yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lm(e))return"Blackberry";if(Fm(e))return"Webos";if(Mu(e))return"Safari";if((e.includes("chrome/")||xm(e))&&!e.includes("edge/"))return"Chrome";if(Mm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nm(t=nt()){return/firefox\//i.test(t)}function Mu(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xm(t=nt()){return/crios\//i.test(t)}function Vm(t=nt()){return/iemobile/i.test(t)}function Mm(t=nt()){return/android/i.test(t)}function Lm(t=nt()){return/blackberry/i.test(t)}function Fm(t=nt()){return/webos/i.test(t)}function Da(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fb(t=nt()){var e;return Da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function db(){return kA()&&document.documentMode===10}function Um(t=nt()){return Da(t)||Mm(t)||Fm(t)||Lm(t)||/windows phone/i.test(t)||Vm(t)}function pb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $m(t,e=[]){let n;switch(t){case"Browser":n=yd(nt());break;case"Worker":n=`${yd(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}async function Bm(t,e){return us(t,"GET","/v2/recaptchaConfig",Ri(t,e))}function vd(t){return t!==void 0&&t.enterprise!==void 0}class jm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function gb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gb().appendChild(r)})}function mb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _b="https://www.google.com/recaptcha/enterprise.js?render=",yb="recaptcha-enterprise",vb="NO_RECAPTCHA";class qm{constructor(e){this.type=yb,this.auth=bi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Bm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new jm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;vd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(vb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&vd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hm(_b+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ed(t,e,n,r=!1){const s=new qm(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Eb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Tb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Td(this),this.idTokenSubscription=new Td(this),this.beforeStateQueue=new Eb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}async initializeRecaptchaConfig(){const e=await Bm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new jm(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new qm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bi(t){return Oe(t)}class Td{constructor(e){this.auth=e,this.observer=null,this.addObserver=LA(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Ib(t,e){const n=ka(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jo(i,e??{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function wb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ab(t,e,n){const r=bi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Km(e),{host:o,port:a}=Rb(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||bb()}function Km(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rb(t){const e=Km(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Id(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Id(o)}}}function Id(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function Pb(t,e){return us(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Cc(t,e){return Oa(t,"POST","/v1/accounts:signInWithPassword",Ri(t,e))}/**
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
 */async function Sb(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}async function Cb(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Ri(t,e))}/**
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
 */class ii extends Lu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ii(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ii(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ed(e,r,"signInWithPassword");return Cc(e,s)}else return Cc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ed(e,r,"signInWithPassword");return Cc(e,i)}else return Promise.reject(s)});case"emailLink":return Sb(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Pb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cb(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $r(t,e){return Oa(t,"POST","/v1/accounts:signInWithIdp",Ri(t,e))}/**
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
 */const kb="http://localhost";class ur extends Lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Du(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ur(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:kb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */function Ob(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Db(t){const e=Ps(Ss(t)).link,n=e?Ps(Ss(e)).deep_link_id:null,r=Ps(Ss(t)).deep_link_id;return(r?Ps(Ss(r)).link:null)||r||n||e||t}class Fu{constructor(e){var n,r,s,i,o,a;const c=Ps(Ss(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ob((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Db(e);try{return new Fu(n)}catch{return null}}}/**
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
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fu.parseLink(n);return W(r,"argument-error"),ii._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends zm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends Pi{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class An extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class Rn extends Pi{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
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
 */class bn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sr._fromIdTokenResponse(e,r,s),o=wd(r);return new Xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wd(r);return new Xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zo extends Yt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zo(e,n,r,s)}}function Wm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,i,e,r):i})}async function Nb(t,e,n=!1){const r=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
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
 */async function xb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ri(t,Wm(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Vu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Xr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),i}}/**
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
 */async function Gm(t,e,n=!1){const r="signIn",s=await Wm(t,r,e),i=await Xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Vb(t,e){return Gm(bi(t),e)}function Mb(t,e,n){return Vb(Oe(t),hs.credential(e,n))}function Lb(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function Fb(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function Ub(t){return Oe(t).signOut()}const Wo="__sak";/**
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
 */class Qm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $b(){const t=nt();return Mu(t)||Da(t)}const Bb=1e3,jb=10;class Xm extends Qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$b()&&pb(),this.fallbackToPolling=Um(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);db()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xm.type="LOCAL";const Hb=Xm;/**
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
 */class Jm extends Qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jm.type="SESSION";const Ym=Jm;/**
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
 */function qb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await qb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function Uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Uu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zt(){return window}function zb(t){zt().location.href=t}/**
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
 */function Zm(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function Wb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qb(){return Zm()?self:null}/**
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
 */const e_="firebaseLocalStorageDb",Xb=1,Go="firebaseLocalStorage",t_="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function Jb(){const t=indexedDB.deleteDatabase(e_);return new Si(t).toPromise()}function Il(){const t=indexedDB.open(e_,Xb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:t_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await Jb(),e(await Il()))})})}async function Ad(t,e,n){const r=xa(t,!0).put({[t_]:e,value:n});return new Si(r).toPromise()}async function Yb(t,e){const n=xa(t,!1).get(e),r=await new Si(n).toPromise();return r===void 0?null:r.value}function Rd(t,e){const n=xa(t,!0).delete(e);return new Si(n).toPromise()}const Zb=800,eP=3;class n_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>eP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(Qb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wb(),!this.activeServiceWorker)return;this.sender=new Kb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await Ad(e,Wo,"1"),await Rd(e,Wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ad(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xa(s,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}n_.type="LOCAL";const tP=n_;new Ai(3e4,6e4);/**
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
 */function nP(t,e){return e?rn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $u extends Lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rP(t){return Gm(t.auth,new $u(t),t.bypassAuthState)}function sP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),xb(n,new $u(t),t.bypassAuthState)}async function iP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Nb(n,new $u(t),t.bypassAuthState)}/**
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
 */class r_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rP;case"linkViaPopup":case"linkViaRedirect":return iP;case"reauthViaPopup":case"reauthViaRedirect":return sP;default:Ct(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oP=new Ai(2e3,1e4);class Or extends r_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oP.get())};e()}}Or.currentPopupAction=null;/**
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
 */const aP="pendingRedirect",wo=new Map;class cP extends r_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await lP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lP(t,e){const n=fP(e),r=hP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uP(t,e){wo.set(t._key(),e)}function hP(t){return rn(t._redirectPersistence)}function fP(t){return Io(aP,t.config.apiKey,t.name)}async function dP(t,e,n=!1){const r=bi(t),s=nP(r,e),o=await new cP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pP=10*60*1e3;class gP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pP&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(e))}saveEventToCache(e){this.cachedEventUids.add(bd(e)),this.lastProcessedEventTime=Date.now()}}function bd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s_(t);default:return!1}}/**
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
 */async function _P(t,e={}){return us(t,"GET","/v1/projects",e)}/**
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
 */const yP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vP=/^https?/;async function EP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _P(t);for(const n of e)try{if(TP(n))return}catch{}Ct(t,"unauthorized-domain")}function TP(t){const e=Tl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vP.test(n))return!1;if(yP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const IP=new Ai(3e4,6e4);function Pd(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wP(t){return new Promise((e,n)=>{var r,s,i;function o(){Pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pd(),n(Kt(t,"network-request-failed"))},timeout:IP.get()})}if(!((s=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=mb("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},Hm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ao=null,e})}let Ao=null;function AP(t){return Ao=Ao||wP(t),Ao}/**
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
 */const RP=new Ai(5e3,15e3),bP="__/auth/iframe",PP="emulator/auth/iframe",SP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kP(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,PP):`https://${t.config.authDomain}/${bP}`,r={apiKey:e.apiKey,appName:t.name,v:mr},s=CP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function OP(t){const e=await AP(t),n=zt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:kP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},RP.get());function c(){zt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const DP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NP=500,xP=600,VP="_blank",MP="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LP(t,e,n,r=NP,s=xP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=nt().toLowerCase();n&&(a=xm(l)?VP:n),Nm(l)&&(e=e||MP,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(fb(l)&&a!=="_self")return FP(e||"",a),new Sd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Sd(h)}function FP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const UP="__/auth/handler",$P="emulator/auth/handler",BP=encodeURIComponent("fac");async function Cd(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mr,eventId:s};if(e instanceof zm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Pi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${BP}=${encodeURIComponent(c)}`:"";return`${jP(t)}?${wi(a).slice(1)}${l}`}function jP({config:t}){return t.emulator?xu(t,$P):`https://${t.authDomain}/${UP}`}/**
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
 */const kc="webStorageSupport";class HP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=dP,this._overrideRedirectResult=uP}async _openPopup(e,n,r,s){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cd(e,n,r,Tl(),s);return LP(e,o,Uu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cd(e,n,r,Tl(),s);return zb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(an(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OP(e),r=new gP(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kc];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Um()||Mu()||Da()}}const qP=HP;var kd="@firebase/auth",Od="1.1.0";/**
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
 */class KP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WP(t){lr(new Mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$m(t)},l=new Tb(r,s,i,c);return wb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lr(new Mn("auth-internal",e=>{const n=bi(e.getProvider("auth").getImmediate());return(r=>new KP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(kd,Od,zP(t)),qt(kd,Od,"esm2017")}/**
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
 */const GP=5*60,QP=vm("authIdTokenMaxAge")||GP;let Dd=null;const XP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QP)return;const s=n==null?void 0:n.token;Dd!==s&&(Dd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JP(t=Ou()){const e=ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ib(t,{popupRedirectResolver:qP,persistence:[tP,Hb,Ym]}),r=vm("authTokenSyncURL");if(r){const i=XP(r);Fb(n,i,()=>i(n.currentUser)),Lb(n,o=>i(o))}const s=mm("auth");return s&&Ab(n,`http://${s}`),n}WP("Browser");var YP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Bu=Bu||{},Q=YP||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZP(t){return Object.prototype.hasOwnProperty.call(t,Oc)&&t[Oc]||(t[Oc]=++eS)}var Oc="closure_uid_"+(1e9*Math.random()>>>0),eS=0;function tS(t,e,n){return t.call.apply(t.bind,arguments)}function nS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=tS:Ze=nS,Ze.apply(null,arguments)}function Zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function $n(){this.s=this.s,this.o=this.o}var rS=0;$n.prototype.s=!1;$n.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rS!=0)&&ZP(this)};$n.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const i_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ju(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Nd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var sS=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function oi(t){return/^[\s\xa0]*$/.test(t)}function Ma(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return Ma().indexOf(t)!=-1}function Hu(t){return Hu[" "](t),t}Hu[" "]=function(){};function iS(t,e){var n=JS;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oS=Ut("Opera"),Jr=Ut("Trident")||Ut("MSIE"),o_=Ut("Edge"),wl=o_||Jr,a_=Ut("Gecko")&&!(Ma().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),aS=Ma().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function c_(){var t=Q.document;return t?t.documentMode:void 0}var Al;e:{var Dc="",Nc=function(){var t=Ma();if(a_)return/rv:([^\);]+)(\)|;)/.exec(t);if(o_)return/Edge\/([\d\.]+)/.exec(t);if(Jr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aS)return/WebKit\/(\S+)/.exec(t);if(oS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Dc=Nc?Nc[1]:""),Jr){var xc=c_();if(xc!=null&&xc>parseFloat(Dc)){Al=String(xc);break e}}Al=Dc}var Rl;if(Q.document&&Jr){var xd=c_();Rl=xd||parseInt(Al,10)||void 0}else Rl=void 0;var cS=Rl;function ai(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(a_){e:{try{Hu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ai.$.h.call(this)}}$e(ai,et);var lS={2:"touch",3:"pen",4:"mouse"};ai.prototype.h=function(){ai.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),uS=0;function hS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++uS,this.fa=this.ia=!1}function La(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function fS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function l_(t){const e={};for(const n in t)e[n]=t[n];return e}const Vd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function u_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Vd.length;i++)n=Vd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fa(t){this.src=t,this.g={},this.h=0}Fa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Pl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new hS(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function bl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=i_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(La(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),Vc={};function h_(t,e,n,r,s){if(r&&r.once)return d_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)h_(t,e[i],n,r,s);return null}return n=Gu(n),t&&t[ki]?t.O(e,n,Ci(r)?!!r.capture:!!r,s):f_(t,e,n,!1,r,s)}function f_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ci(s)?!!s.capture:!!s,a=Wu(t);if(a||(t[Ku]=a=new Fa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=dS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(g_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dS(){function t(n){return e.call(t.src,t.listener,n)}const e=pS;return t}function d_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)d_(t,e[i],n,r,s);return null}return n=Gu(n),t&&t[ki]?t.P(e,n,Ci(r)?!!r.capture:!!r,s):f_(t,e,n,!0,r,s)}function p_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)p_(t,e[i],n,r,s);else r=Ci(r)?!!r.capture:!!r,n=Gu(n),t&&t[ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Pl(i,n,r,s),-1<n&&(La(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pl(e,n,r,s)),(n=-1<t?e[t]:null)&&zu(n))}function zu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ki])bl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(g_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wu(e))?(bl(n,t),n.h==0&&(n.src=null,e[Ku]=null)):La(t)}}}function g_(t){return t in Vc?Vc[t]:Vc[t]="on"+t}function pS(t,e){if(t.fa)t=!0;else{e=new ai(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zu(t),t=n.call(r,e)}return t}function Wu(t){return t=t[Ku],t instanceof Fa?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gu(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function Ue(){$n.call(this),this.i=new Fa(this),this.S=this,this.J=null}$e(Ue,$n);Ue.prototype[ki]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){p_(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var s=e;e=new et(r,t),u_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=eo(o,r,!0,e)&&s}if(o=e.g=t,s=eo(o,r,!0,e)&&s,s=eo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=eo(o,r,!1,e)&&s}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)La(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&bl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qu=Q.JSON.stringify;class gS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function mS(){var t=Xu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _S{constructor(){this.h=this.g=null}add(e,n){const r=m_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var m_=new gS(()=>new yS,t=>t.reset());class yS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ES(t){Q.setTimeout(()=>{throw t},0)}let ci,li=!1,Xu=new _S,__=()=>{const t=Q.Promise.resolve(void 0);ci=()=>{t.then(TS)}};var TS=()=>{for(var t;t=mS();){try{t.h.call(t.g)}catch(n){ES(n)}var e=m_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}li=!1};function Ua(t,e){Ue.call(this),this.h=t||1,this.g=e||Q,this.j=Ze(this.qb,this),this.l=Date.now()}$e(Ua,Ue);V=Ua.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(Ju(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ju(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Ua.$.N.call(this),Ju(this),delete this.g};function Yu(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function y_(t){t.g=Yu(()=>{t.g=null,t.i&&(t.i=!1,y_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IS extends $n{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:y_(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(t){$n.call(this),this.h=t,this.g={}}$e(ui,$n);var Md=[];function v_(t,e,n,r){Array.isArray(n)||(n&&(Md[0]=n.toString()),n=Md);for(var s=0;s<n.length;s++){var i=h_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function E_(t){qu(t.g,function(e,n){this.g.hasOwnProperty(n)&&zu(e)},t),t.g={}}ui.prototype.N=function(){ui.$.N.call(this),E_(this)};ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $a(){this.g=!0}$a.prototype.Ea=function(){this.g=!1};function wS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function AS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Dr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bS(t,n)+(r?" "+r:"")})}function RS(t,e){t.info(function(){return"TIMEOUT: "+e})}$a.prototype.info=function(){};function bS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qu(n)}catch{return e}}var _r={},Ld=null;function Ba(){return Ld=Ld||new Ue}_r.Ta="serverreachability";function T_(t){et.call(this,_r.Ta,t)}$e(T_,et);function hi(t){const e=Ba();Ke(e,new T_(e))}_r.STAT_EVENT="statevent";function I_(t,e){et.call(this,_r.STAT_EVENT,t),this.stat=e}$e(I_,et);function ot(t){const e=Ba();Ke(e,new I_(e,t))}_r.Ua="timingevent";function w_(t,e){et.call(this,_r.Ua,t),this.size=e}$e(w_,et);function Oi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var ja={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},A_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zu(){}Zu.prototype.h=null;function Fd(t){return t.h||(t.h=t.i())}function R_(){}var Di={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eh(){et.call(this,"d")}$e(eh,et);function th(){et.call(this,"c")}$e(th,et);var Sl;function Ha(){}$e(Ha,Zu);Ha.prototype.g=function(){return new XMLHttpRequest};Ha.prototype.i=function(){return{}};Sl=new Ha;function Ni(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ui(this),this.P=PS,t=wl?125:void 0,this.V=new Ua(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new b_}function b_(){this.i=null,this.g="",this.h=!1}var PS=45e3,Cl={},Qo={};V=Ni.prototype;V.setTimeout=function(t){this.P=t};function kl(t,e,n){t.L=1,t.v=Ka(cn(e)),t.s=n,t.S=!0,P_(t,null)}function P_(t,e){t.G=Date.now(),xi(t),t.A=cn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),V_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new b_,t.g=ny(t.l,n?e:null,!t.s),0<t.O&&(t.M=new IS(Ze(t.Pa,t,t.g),t.O)),v_(t.U,t.g,"readystatechange",t.nb),e=t.I?l_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),hi(),wS(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||wl||this.g&&(this.h.h||this.g.ja()||jd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?hi(3):hi(2)),qa(this);var n=this.g.da();this.ca=n;t:if(S_(this)){var r=jd(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Us(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,AS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oi(a)){var l=a;break t}}l=null}if(n=l)Dr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ol(this,n);else{this.i=!1,this.o=3,ot(12),Yn(this),Us(this);break e}}this.S?(C_(this,u,o),wl&&this.i&&u==3&&(v_(this.U,this.V,"tick",this.mb),this.V.start())):(Dr(this.j,this.m,o,null),Ol(this,o)),u==4&&Yn(this),this.i&&!this.J&&(u==4?Y_(this.l,this):(this.i=!1,xi(this)))}else GS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Yn(this),Us(this)}}}catch{}finally{}};function S_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function C_(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=SS(t,n),s==Qo){e==4&&(t.o=4,ot(14),r=!1),Dr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Cl){t.o=4,ot(15),Dr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Dr(t.j,t.m,s,null),Ol(t,s);S_(t)&&s!=Qo&&s!=Cl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ah(e),e.M=!0,ot(11))):(Dr(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),Us(t))}V.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.C<e.length&&(qa(this),C_(this,t,e),this.i&&t!=4&&xi(this))}};function SS(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Qo:(n=Number(e.substring(n,r)),isNaN(n)?Cl:(r+=1,r+n>e.length?Qo:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,Yn(this)};function xi(t){t.Y=Date.now()+t.P,k_(t,t.P)}function k_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Oi(Ze(t.lb,t),e)}function qa(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(RS(this.j,this.A),this.L!=2&&(hi(),ot(17)),Yn(this),this.o=2,Us(this)):k_(this,this.Y-t)};function Us(t){t.l.H==0||t.J||Y_(t.l,t)}function Yn(t){qa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ju(t.V),E_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ol(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dl(n.i,t))){if(!t.K&&Dl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Yo(n),Ga(n);else break e;oh(n),ot(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Oi(Ze(n.ib,n),6e3));if(1>=F_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zn(n,11)}else if((t.K||n.g==t)&&Yo(n),!oi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(nh(i,i.h),i.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ve(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ty(r,r.J?r.pa:null,r.Y),o.K){U_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(qa(a),xi(a)),r.g=o}else X_(r);0<n.j.length&&Qa(n)}else l[0]!="stop"&&l[0]!="close"||Zn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Zn(n,7):ih(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}hi(4)}catch{}}function CS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function kS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function O_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kS(t),r=CS(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var D_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ir(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ir){this.h=t.h,Xo(this,t.j),this.s=t.s,this.g=t.g,Jo(this,t.m),this.l=t.l;var e=t.i,n=new fi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ud(this,n),this.o=t.o}else t&&(e=String(t).match(D_))?(this.h=!1,Xo(this,e[1]||"",!0),this.s=Cs(e[2]||""),this.g=Cs(e[3]||"",!0),Jo(this,e[4]),this.l=Cs(e[5]||"",!0),Ud(this,e[6]||"",!0),this.o=Cs(e[7]||"")):(this.h=!1,this.i=new fi(null,this.h))}ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,$d,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,$d,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?xS:NS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,MS)),t.join("")};function cn(t){return new ir(t)}function Xo(t,e,n){t.j=n?Cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ud(t,e,n){e instanceof fi?(t.i=e,LS(t.i,t.h)):(n||(e=ks(e,VS)),t.i=new fi(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function Ka(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,DS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function DS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $d=/[#\/\?@]/g,NS=/[#\?:]/g,xS=/[#\?]/g,VS=/[#\?@]/g,MS=/#/g;function fi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bn(t){t.g||(t.g=new Map,t.h=0,t.i&&OS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=fi.prototype;V.add=function(t,e){Bn(this),this.i=null,t=fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function N_(t,e){Bn(t),e=fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function x_(t,e){return Bn(t),e=fs(t,e),t.g.has(e)}V.forEach=function(t,e){Bn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Bn(this);let e=[];if(typeof t=="string")x_(this,t)&&(e=e.concat(this.g.get(fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Bn(this),this.i=null,t=fs(this,t),x_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function V_(t,e,n){N_(t,e),0<n.length&&(t.i=null,t.g.set(fs(t,e),ju(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LS(t,e){e&&!t.j&&(Bn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(N_(this,r),V_(this,s,n))},t)),t.j=e}var FS=class{constructor(t,e){this.g=t,this.map=e}};function M_(t){this.l=t||US,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var US=10;function L_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function F_(t){return t.h?1:t.g?t.g.size:0}function Dl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nh(t,e){t.g?t.g.add(e):t.h=e}function U_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}M_.prototype.cancel=function(){if(this.i=$_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ju(t.i)}var $S=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function BS(){this.g=new $S}function jS(t,e,n){const r=n||"";try{O_(t,function(s,i){let o=s;Ci(s)&&(o=Qu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function HS(t,e){const n=new $a;if(Q.Image){const r=new Image;r.onload=Zi(to,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zi(to,n,r,"TestLoadImage: error",!1,e),r.onabort=Zi(to,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zi(to,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function to(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Vi(t){this.l=t.fc||null,this.j=t.ob||!1}$e(Vi,Zu);Vi.prototype.g=function(){return new za(this.l,this.j)};Vi.prototype.i=function(t){return function(){return t}}({});function za(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(za,Ue);var rh=0;V=za.prototype;V.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=rh};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;B_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function B_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mi(this):di(this),this.readyState==3&&B_(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Mi(this))};V.Ya=function(t){this.g&&(this.response=t,Mi(this))};V.ka=function(){this.g&&Mi(this)};function Mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qS=Q.JSON.parse;function Re(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=j_,this.L=this.M=!1}$e(Re,Ue);var j_="",KS=/^https?$/i,zS=["POST","PUT"];V=Re.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sl.g(),this.C=this.u?Fd(this.u):Fd(Sl),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Bd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=i_(zS,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{K_(this),0<this.B&&((this.L=WS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=Yu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bd(this,i)}};function WS(t){return Jr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Bu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function Bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,H_(t),Wa(t)}function H_(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),Wa(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wa(this,!0)),Re.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?q_(this):this.kb())};V.kb=function(){q_(this)};function q_(t){if(t.h&&typeof Bu<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)Yu(t.La,0,t);else if(Ke(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(D_)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!KS.test(s?s.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var i=2<$t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",H_(t)}}finally{Wa(t)}}}}function Wa(t,e){if(t.g){K_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function K_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qS(e)}};function jd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case j_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function GS(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(oi(t[r]))continue;var n=vS(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}fS(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function z_(t){let e="";return qu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=z_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function W_(t){this.Ga=0,this.j=[],this.l=new $a,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Is("baseRetryDelayMs",5e3,t),this.hb=Is("retryDelaySeedMs",1e4,t),this.eb=Is("forwardChannelMaxRetries",2,t),this.xa=Is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new M_(t&&t.concurrentRequestLimit),this.Ja=new BS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=W_.prototype;V.ra=8;V.H=1;function ih(t){if(G_(t),t.H==3){var e=t.W++,n=cn(t.I);if(ve(n,"SID",t.K),ve(n,"RID",e),ve(n,"TYPE","terminate"),Li(t,n),e=new Ni(t,t.l,e),e.L=2,e.v=Ka(cn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=ny(e.l,null),e.g.ha(e.v)),e.G=Date.now(),xi(e)}ey(t)}function Ga(t){t.g&&(ah(t),t.g.cancel(),t.g=null)}function G_(t){Ga(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Yo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Qa(t){if(!L_(t.i)&&!t.m){t.m=!0;var e=t.Na;ci||__(),li||(ci(),li=!0),Xu.add(e,t),t.C=0}}function QS(t,e){return F_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Oi(Ze(t.Na,t,e),Z_(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ni(this,this.l,t);let i=this.s;if(this.U&&(i?(i=l_(i),u_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Q_(this,s,e),n=cn(this.I),ve(n,"RID",t),ve(n,"CVER",22),this.F&&ve(n,"X-HTTP-Session-Id",this.F),Li(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(z_(i)))+"&"+e:this.o&&sh(n,this.o,i)),nh(this.i,s),this.bb&&ve(n,"TYPE","init"),this.P?(ve(n,"$req",e),ve(n,"SID","null"),s.aa=!0,kl(s,n,null)):kl(s,n,e),this.H=2}}else this.H==3&&(t?Hd(this,t):this.j.length==0||L_(this.i)||Hd(this))};function Hd(t,e){var n;e?n=e.m:n=t.W++;const r=cn(t.I);ve(r,"SID",t.K),ve(r,"RID",n),ve(r,"AID",t.V),Li(t,r),t.o&&t.s&&sh(r,t.o,t.s),n=new Ni(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Q_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nh(t.i,n),kl(n,r,e)}function Li(t,e){t.na&&qu(t.na,function(n,r){ve(e,r,n)}),t.h&&O_({},function(n,r){ve(e,r,n)})}function Q_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ze(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{jS(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function X_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ci||__(),li||(ci(),li=!0),Xu.add(e,t),t.A=0}}function oh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Oi(Ze(t.Ma,t),Z_(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,J_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Oi(Ze(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Ga(this),J_(this))};function ah(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function J_(t){t.g=new Ni(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=cn(t.wa);ve(e,"RID","rpc"),ve(e,"SID",t.K),ve(e,"AID",t.V),ve(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ve(e,"TO",t.qa),ve(e,"TYPE","xmlhttp"),Li(t,e),t.o&&t.s&&sh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ka(cn(e)),n.s=null,n.S=!0,P_(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ga(this),oh(this),ot(19))};function Yo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Y_(t,e){var n=null;if(t.g==e){Yo(t),ah(t),t.g=null;var r=2}else if(Dl(t.i,e))n=e.F,U_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Ba(),Ke(r,new w_(r,n)),Qa(t)}else X_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&QS(t,e)||r==2&&oh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Zn(t,5);break;case 4:Zn(t,10);break;case 3:Zn(t,6);break;default:Zn(t,2)}}}function Z_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ze(t.pb,t);n||(n=new ir("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Xo(n,"https"),Ka(n)),HS(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),ey(t),G_(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function ey(t){if(t.H=0,t.ma=[],t.h){const e=$_(t.i);(e.length!=0||t.j.length!=0)&&(Nd(t.ma,e),Nd(t.ma,t.j),t.i.i.length=0,ju(t.j),t.j.length=0),t.h.ya()}}function ty(t,e,n){var r=n instanceof ir?cn(n):new ir(n);if(r.g!="")e&&(r.g=e+"."+r.g),Jo(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ir(null);r&&Xo(i,r),e&&(i.g=e),s&&Jo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ve(r,n,e),ve(r,"VER",t.ra),Li(t,r),r}function ny(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Re(new Vi({ob:!0})):new Re(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function ry(){}V=ry.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Zo(){if(Jr&&!(10<=Number(cS)))throw Error("Environmental error: no available transport.")}Zo.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Ue.call(this),this.g=new W_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!oi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ds(this)}$e(mt,Ue);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ty(t,null,t.Y),Qa(t)};mt.prototype.close=function(){ih(this.g)};mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qu(t),t=n);e.j.push(new FS(e.fb++,t)),e.H==3&&Qa(e)};mt.prototype.N=function(){this.g.h=null,delete this.j,ih(this.g),delete this.g,mt.$.N.call(this)};function sy(t){eh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(sy,eh);function iy(){th.call(this),this.status=1}$e(iy,th);function ds(t){this.g=t}$e(ds,ry);ds.prototype.Ba=function(){Ke(this.g,"a")};ds.prototype.Aa=function(t){Ke(this.g,new sy(t))};ds.prototype.za=function(t){Ke(this.g,new iy)};ds.prototype.ya=function(){Ke(this.g,"b")};function XS(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(kt,XS);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Lc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Lc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Lc(this,r),s=0;break}}this.h=s,this.i+=e};kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var JS={};function ch(t){return-128<=t&&128>t?iS(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return Br;if(0>t)return He(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nl;return new de(e,0)}function oy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(oy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=Br,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var Nl=4294967296,Br=ch(0),xl=ch(1),qd=ch(16777216);V=de.prototype;V.ea=function(){if(yt(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nl+r)*e,e*=Nl}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sn(this))return"0";if(yt(this))return"-"+He(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=ta(n,e).g;n=ea(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function yt(t){return t.h==-1}V.X=function(t){return t=ea(this,t),yt(t)?-1:sn(t)?0:1};function He(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(xl)}V.abs=function(){return yt(this)?He(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function ea(t,e){return t.add(He(e))}V.R=function(t){if(sn(this)||sn(t))return Br;if(yt(this))return yt(t)?He(this).R(He(t)):He(He(this).R(t));if(yt(t))return He(this.R(He(t)));if(0>this.X(qd)&&0>t.X(qd))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,no(n,2*r+2*s),n[2*r+2*s+1]+=i*c,no(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,no(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,no(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function no(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ws(t,e){this.g=t,this.h=e}function ta(t,e){if(sn(e))throw Error("division by zero");if(sn(t))return new ws(Br,Br);if(yt(t))return e=ta(He(t),e),new ws(He(e.g),He(e.h));if(yt(e))return e=ta(t,He(e)),new ws(He(e.g),e.h);if(30<t.g.length){if(yt(t)||yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=xl,r=e;0>=r.X(t);)n=Kd(n),r=Kd(r);var s=Pr(n,1),i=Pr(r,1);for(r=Pr(r,2),n=Pr(n,2);!sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Pr(r,1),n=Pr(n,1)}return e=ea(t,s.R(e)),new ws(s,e)}for(s=Br;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);yt(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);sn(i)&&(i=xl),s=s.add(i),t=ea(t,o)}return new ws(s,t)}V.gb=function(t){return ta(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function Kd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function Pr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(s,t.h)}Zo.prototype.createWebChannel=Zo.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;ja.NO_ERROR=0;ja.TIMEOUT=8;ja.HTTP_ERROR=6;A_.COMPLETE="complete";R_.EventType=Di;Di.OPEN="a";Di.CLOSE="b";Di.ERROR="c";Di.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Bt;de.fromString=oy;var YS=function(){return new Zo},ZS=function(){return Ba()},Fc=ja,eC=A_,tC=_r,zd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nC=Vi,ro=R_,rC=Re,sC=kt,jr=de;const Wd="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let ps="10.1.0";/**
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
 */const hr=new Cu("@firebase/firestore");function Gd(){return hr.logLevel}function $(t,...e){if(hr.logLevel<=oe.DEBUG){const n=e.map(lh);hr.debug(`Firestore (${ps}): ${t}`,...n)}}function ln(t,...e){if(hr.logLevel<=oe.ERROR){const n=e.map(lh);hr.error(`Firestore (${ps}): ${t}`,...n)}}function Yr(t,...e){if(hr.logLevel<=oe.WARN){const n=e.map(lh);hr.warn(`Firestore (${ps}): ${t}`,...n)}}function lh(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function Ee(t,e){t||G()}function Z(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ay{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class oC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aC{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new ay(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Ge(e)}}class cC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new uC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cy{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=fC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new xe(0,0))}static max(){return new J(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends pi{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends pi{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Te.fromString(e))}static fromName(e){return new K(Te.fromString(e).popFirst(5))}static empty(){return new K(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Te(e.slice()))}}function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Ln(s,K.empty(),e)}function gC(t){return new Ln(t.readTime,t.key,-1)}class Ln{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ln(J.min(),K.empty(),-1)}static max(){return new Ln(J.max(),K.empty(),-1)}}function mC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const _C="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fi(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==_C)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}uh.ae=-1;function Xa(t){return t==null}function na(t){return t===0&&1/t==-1/0}function vC(t){return typeof t=="number"&&Number.isInteger(t)&&!na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ly(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xd(this.data.getIterator())}getIteratorFrom(e){return new Xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new pt([])}unionWith(e){let n=new tt(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class uy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uy("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=EC.exec(t);if(Ee(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function hh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fh(t){const e=t.mapValue.fields.__previous_value__;return hh(e)?fh(e):e}function gi(t){const e=Fn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class TC{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hh(t)?4:IC(t)?9007199254740991:10:G()}function Xt(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gi(t).isEqual(gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Fn(s.timestampValue),a=Fn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fr(s.bytesValue).isEqual(fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),a=ke(i.doubleValue);return o===a?na(o)===na(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Qd(o)!==Qd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Xt(o[c],a[c])))return!1;return!0}(t,e);default:return G()}}function _i(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=dr(t),r=dr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ke(i.integerValue||i.doubleValue),c=ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Jd(t.timestampValue,e.timestampValue);case 4:return Jd(gi(t),gi(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const a=fr(i),c=fr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ce(a[l],c[l]);if(u!==0)return u}return ce(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ce(ke(i.latitude),ke(o.latitude));return a!==0?a:ce(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=es(a[l],c[l]);if(u)return u}return ce(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ce(c[h],u[h]);if(f!==0)return f;const p=es(a[c[h]],l[u[h]]);if(p!==0)return p}return ce(c.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Jd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Fn(t),r=Fn(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function ts(t){return Vl(t)}function Vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vl(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function Ml(t){return!!t&&"integerValue"in t}function dh(t){return!!t&&"arrayValue"in t}function Yd(t){return!!t&&"nullValue"in t}function Zd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ro(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ro(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=$s(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ro(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut($s(this.value))}}function hy(t){const e=[];return yr(t.fields,(n,r)=>{const s=new Je([n]);if(Ro(r)){const i=hy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new pt(e)}/**
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
 */class Qe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,J.min(),J.min(),J.min(),ut.empty(),0)}static newFoundDocument(e,n,r,s){return new Qe(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new Qe(e,2,n,J.min(),J.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,J.min(),J.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ra{constructor(e,n){this.position=e,this.inclusive=n}}function ep(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=es(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function wC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class fy{}class Ne extends fy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RC(e,n,r):n==="array-contains"?new SC(e,r):n==="in"?new CC(e,r):n==="not-in"?new kC(e,r):n==="array-contains-any"?new OC(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bC(e,r):new PC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends fy{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Jt(e,n)}matches(e){return dy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dy(t){return t.op==="and"}function py(t){return AC(t)&&dy(t)}function AC(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Ll(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(py(t))return t.filters.map(e=>Ll(e)).join(",");{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function gy(t,e){return t instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&gy(o,s.filters[a]),!0):!1}(t,e):void G()}function my(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(my).join(" ,")+"}"}(t):"Filter"}class RC extends Ne{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class bC extends Ne{constructor(e,n){super(e,"in",n),this.keys=_y("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PC extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=_y("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _y(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class SC extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dh(n)&&_i(n.arrayValue,this.value)}}class CC extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class kC extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class OC extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class DC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function np(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DC(t,e,n,r,s,i,o)}function ph(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.he=n}return e.he}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tp(t.startAt,e.startAt)&&tp(t.endAt,e.endAt)}function Fl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ja{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function NC(t,e,n,r,s,i,o,a){return new Ja(t,e,n,r,s,i,o,a)}function yy(t){return new Ja(t)}function rp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function VC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function MC(t){return t.collectionGroup!==null}function Hr(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=VC(e),r=xC(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Bs(n)),e.Pe.push(new Bs(Je.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Bs(Je.keyField(),i))}}}return e.Pe}function un(t){const e=Z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=np(e.path,e.collectionGroup,Hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Hr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Bs(i.field,o))}const r=e.endAt?new ra(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ra(e.startAt.position,e.startAt.inclusive):null;e.Ie=np(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function Ul(t,e,n){return new Ja(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ya(t,e){return gh(un(t),un(e))&&t.limitType===e.limitType}function vy(t){return`${ph(un(t))}|lt:${t.limitType}`}function $l(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>my(s)).join(", ")}]`),Xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ts(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ts(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Hr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=ep(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Hr(r),s)||r.endAt&&!function(o,a,c){const l=ep(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Hr(r),s))}(t,e)}function LC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ey(t){return(e,n)=>{let r=!1;for(const s of Hr(t)){const i=FC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?es(c,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ly(this.inner)}size(){return this.innerSize}}/**
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
 */const UC=new we(K.comparator);function hn(){return UC}const Ty=new we(K.comparator);function Os(...t){let e=Ty;for(const n of t)e=e.insert(n.key,n);return e}function Iy(t){let e=Ty;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function er(){return js()}function wy(){return js()}function js(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $C=new we(K.comparator),BC=new tt(K.comparator);function re(...t){let e=BC;for(const n of t)e=e.add(n);return e}const jC=new tt(ce);function HC(){return jC}/**
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
 */function Ay(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:na(e)?"-0":e}}function Ry(t){return{integerValue:""+t}}function qC(t,e){return vC(e)?Ry(e):Ay(t,e)}/**
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
 */class ec{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof sa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hh(i)&&(i=fh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof yi?Py(t,e):t instanceof vi?Sy(t,e):function(s,i){const o=by(s,i),a=sp(o)+sp(s.Te);return Ml(o)&&Ml(s.Te)?Ry(a):Ay(s.serializer,a)}(t,e)}function zC(t,e,n){return t instanceof yi?Py(t,e):t instanceof vi?Sy(t,e):n}function by(t,e){return t instanceof ia?function(r){return Ml(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class sa extends ec{}class yi extends ec{constructor(e){super(),this.elements=e}}function Py(t,e){const n=Cy(e);for(const r of t.elements)n.some(s=>Xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends ec{constructor(e){super(),this.elements=e}}function Sy(t,e){let n=Cy(e);for(const r of t.elements)n=n.filter(s=>!Xt(s,r));return{arrayValue:{values:n}}}class ia extends ec{constructor(e,n){super(),this.serializer=e,this.Te=n}}function sp(t){return ke(t.integerValue||t.doubleValue)}function Cy(t){return dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yi&&s instanceof yi||r instanceof vi&&s instanceof vi?Zr(r.elements,s.elements,Xt):r instanceof ia&&s instanceof ia?Xt(r.Te,s.Te):r instanceof sa&&s instanceof sa}(t.transform,e.transform)}class GC{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tc{}function ky(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dy(t.key,Wt.none()):new $i(t.key,t.data,Wt.none());{const n=t.data,r=ut.empty();let s=new tt(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new jn(t.key,r,new pt(s.toArray()),Wt.none())}}function QC(t,e,n){t instanceof $i?function(s,i,o){const a=s.value.clone(),c=op(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(s,i,o){if(!bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=op(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Oy(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof $i?function(i,o,a,c){if(!bo(i.precondition,o))return a;const l=i.value.clone(),u=ap(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof jn?function(i,o,a,c){if(!bo(i.precondition,o))return a;const l=ap(i.fieldTransforms,c,o),u=o.data;return u.setAll(Oy(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=by(r.transform,s||null);i!=null&&(n===null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(i,o)=>WC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $i extends tc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jn extends tc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Oy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function op(t,e,n){const r=new Map;Ee(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,zC(o,a,n[s]))}return r}function ap(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KC(i,o,e))}return r}class Dy extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JC extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=ky(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(n,r)=>ip(n,r))&&Zr(this.baseMutations,e.baseMutations,(n,r)=>ip(n,r))}}class mh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ee(e.mutations.length===r.length);let s=function(){return $C}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mh(e,n,r,s)}}/**
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
 */class ZC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class e1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,se;function t1(t){switch(t){default:return G();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Ny(t){if(t===void 0)return ln("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ce.OK:return R.OK;case Ce.CANCELLED:return R.CANCELLED;case Ce.UNKNOWN:return R.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return R.INTERNAL;case Ce.UNAVAILABLE:return R.UNAVAILABLE;case Ce.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ce.NOT_FOUND:return R.NOT_FOUND;case Ce.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ce.ABORTED:return R.ABORTED;case Ce.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ce.DATA_LOSS:return R.DATA_LOSS;default:return G()}}(se=Ce||(Ce={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _h{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return oo}static getOrCreateInstance(){return oo===null&&(oo=new _h),oo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let oo=null;/**
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
 */function n1(){return new TextEncoder}/**
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
 */const r1=new jr([4294967295,4294967295],0);function cp(t){const e=n1().encode(t),n=new sC;return n.update(e),new Uint8Array(n.digest())}function lp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class yh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=jr.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(r1)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=cp(e),[r,s]=lp(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=cp(e),[r,s]=lp(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Bi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nc(J.min(),s,new we(ce),hn(),re())}}class Bi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bi(r,n,re(),re(),re())}}/**
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
 */class Po{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class xy{constructor(e,n){this.targetId=e,this.pe=n}}class Vy{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class up{constructor(){this.ye=0,this.we=fp(),this.Se=rt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=re(),n=re(),r=re();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Bi(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=fp()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class s1{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=hn(),this.$e=hp(),this.Ue=new we(ce)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Fl(a))if(i===0){const c=new K(a.path);this.ze(s,c,Qe.newNoDocument(c,J.min()))}else Ee(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(e,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=_h.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,p,y){var v,_,b,P,D,O;const te={localCacheCount:p,existenceFilterCount:y.count},F=y.unchangedNames;return F&&(te.bloomFilter={applied:h===0,hashCount:(v=F==null?void 0:F.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(P=(b=(_=F==null?void 0:F.bits)===null||_===void 0?void 0:_.bitmap)===null||b===void 0?void 0:b.length)!==null&&P!==void 0?P:0,padding:(O=(D=F==null?void 0:F.bits)===null||D===void 0?void 0:D.padding)!==null&&O!==void 0?O:0},f&&(te.bloomFilter.mightContain=f)),te}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=fr(i).toUint8Array()}catch(h){if(h instanceof uy)return Yr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new yh(c,o,a)}catch(h){return Yr(h instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return l.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Fl(a.target)){const c=new K(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Qe.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=re();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new nc(e,n,this.Ue,this.Ke,r);return this.Ke=hn(),this.$e=hp(),this.Ue=new we(ce),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new up,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new tt(ce),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new up),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function hp(){return new we(K.comparator)}function fp(){return new we(K.comparator)}const i1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),o1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),a1=(()=>({and:"AND",or:"OR"}))();class c1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bl(t,e){return t.useProto3Json||Xa(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function My(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function l1(t,e){return oa(t,e.toTimestamp())}function Gt(t){return Ee(!!t),J.fromTimestamp(function(n){const r=Fn(n);return new xe(r.seconds,r.nanos)}(t))}function vh(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Ly(t){const e=Te.fromString(t);return Ee(By(e)),e}function jl(t,e){return vh(t.databaseId,e.path)}function Uc(t,e){const n=Ly(e);if(n.get(1)!==t.databaseId.projectId)throw new j(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Fy(n))}function Hl(t,e){return vh(t.databaseId,e)}function u1(t){const e=Ly(t);return e.length===4?Te.emptyPath():Fy(e)}function ql(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fy(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dp(t,e,n){return{name:jl(t,e),fields:n.value.mapValue.fields}}function h1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ee(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(Ee(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:Ny(l.code);return new j(u,l.message||"")}(o);n=new Vy(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):J.min(),a=new ut({mapValue:{fields:r.document.fields}}),c=Qe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Po(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?Gt(r.readTime):J.min(),o=Qe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Po([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new Po([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new e1(s,i),a=r.targetId;n=new xy(a,o)}}return n}function f1(t,e){let n;if(e instanceof $i)n={update:dp(t,e.key,e.value)};else if(e instanceof Dy)n={delete:jl(t,e.key)};else if(e instanceof jn)n={update:dp(t,e.key,e.data),updateMask:T1(e.fieldMask)};else{if(!(e instanceof JC))return G();n={verify:jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:l1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function d1(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Gt(s.updateTime):Gt(i);return o.isEqual(J.min())&&(o=Gt(i)),new GC(o,s.transformResults||[])}(n,e))):[]}function p1(t,e){return{documents:[Hl(t,e.path)]}}function g1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return $y(Jt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Cr(h.field),direction:y1(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Bl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function m1(t){let e=u1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ee(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Uy(h);return f instanceof Jt&&py(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new Bs(kr(y.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Xa(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new ra(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new ra(p,f)}(n.endAt)),NC(e,s,o,i,a,"F",c,l)}function _1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Uy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=kr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(n.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(n.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kr(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>Uy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function y1(t){return i1[t]}function v1(t){return o1[t]}function E1(t){return a1[t]}function Cr(t){return{fieldPath:t.canonicalString()}}function kr(t){return Je.fromServerFormat(t.fieldPath)}function $y(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Zd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NAN"}};if(Yd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NAN"}};if(Yd(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(n.field),op:v1(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>$y(s));return r.length===1?r[0]:{compositeFilter:{op:E1(n.op),filters:r}}}(t):G()}function T1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function By(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Sn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class I1{constructor(e){this.ct=e}}function w1(t){const e=m1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ul(e,e.limit,"L"):e}/**
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
 */class A1{constructor(){this.sn=new R1}addToCollectionParentIndex(e,n){return this.sn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Ln.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class R1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Te.comparator)).toArray()}}/**
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
 */class ns{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new ns(0)}static On(){return new ns(-1)}}/**
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
 */class b1{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class P1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class S1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hs(r.mutation,s,pt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=er();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Os();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hn();const o=js(),a=function(){return js()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof jn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hs(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new P1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=js();let s=new we((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||pt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=wy();u.forEach(f=>{if(!i.has(f)){const p=ky(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(er());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:Iy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Os();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const c=function(u,h){return new Ja(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Qe.newInvalidDocument(l)))});let o=Os();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Hs(l.mutation,c,pt.empty(),xe.now()),Za(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class C1{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return C.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:w1(s.bundledQuery),readTime:Gt(s.readTime)}}(n)),C.resolve()}}/**
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
 */class k1{constructor(){this.overlays=new we(K.comparator),this.cr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=er();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=er(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=er(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZC(n,r));let i=this.cr.get(n);i===void 0&&(i=re(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class Eh{constructor(){this.lr=new tt(Le.hr),this.Pr=new tt(Le.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Le(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new K(new Te([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new K(new Te([])),r=new Le(n,e),s=new Le(n,e+1);let i=re();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return K.comparator(e.key,n.key)||ce(e.mr,n.mr)}static Ir(e,n){return ce(e.mr,n.mr)||K.comparator(e.key,n.key)}}/**
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
 */class O1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new tt(Le.hr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ce);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),C.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Le(new K(i),0);let a=new tt(ce);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),C.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ee(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return C.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Le(n,0),s=this.pr.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class D1{constructor(e){this.Dr=e,this.docs=function(){return new we(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qe.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||mC(gC(u),r)<=0||(s.has(u.key)||Za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new N1(this)}getSize(e){return C.resolve(this.size)}}class N1 extends b1{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class x1{constructor(e){this.persistence=e,this.Cr=new gs(n=>ph(n),gh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Eh,this.targetCount=0,this.Or=ns.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),C.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new ns(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Ln(n),C.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Mr.containsKey(n))}}/**
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
 */class V1{constructor(e,n){this.Nr={},this.overlays={},this.Br=new uh(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new x1(this),this.indexManager=new A1,this.remoteDocumentCache=function(s){return new D1(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new I1(n),this.Qr=new C1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new k1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new O1(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new M1(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return C.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class M1 extends yC{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.Wr=new Eh,this.Gr=null}static zr(e){return new Th(e)}get jr(){if(this.Gr)return this.Gr;throw G()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.jr,r=>{const s=K.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return C.or([()=>C.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Ih{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ih(e,n.fromCache,r,s)}}/**
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
 */class L1{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(rp(n))return C.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ul(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(e,Ul(n,null,"F")):this.ji(e,l,n,c)}))})))}Ui(e,n,r,s){return rp(n)||s.isEqual(J.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(Gd()<=oe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$l(n)),this.ji(e,o,n,pC(s,-1)))})}Gi(e,n){let r=new tt(Ey(e));return n.forEach((s,i)=>{Za(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return Gd()<=oe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",$l(n)),this.Ki.getDocumentsMatchingQuery(e,n,Ln.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class F1{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new we(ce),this.Yi=new gs(i=>ph(i),gh),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new S1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function U1(t,e,n,r){return new F1(t,e,n,r)}async function jy(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function $1(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=C.resolve();return f.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(v=>{const _=l.docVersions.get(y);Ee(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hy(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function B1(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(v,_,b){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,p,u)&&a.push(n.kr.updateTargetData(i,p))});let c=hn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(j1(i,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(J.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function j1(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function H1(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function q1(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Sn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=Z(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ui(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function pp(t,e,n){const r=Z(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=Z(c),f=h.Yi.get(u);return f!==void 0?C.resolve(h.Ji.get(f)):h.kr.getTargetData(l,u)}(r,o,un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(K1(r,LC(e),a),{documents:a,ss:i})))}function K1(t,e,n){let r=t.Zi.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}class gp{constructor(){this.activeTargetIds=HC()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z1{constructor(){this.Hs=new gp,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new gp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class W1{Ys(e){}shutdown(){}}/**
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
 */class mp{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ao=null;function $c(){return ao===null?ao=function(){return 268435456+Math.round(2147483648*Math.random())}():ao++,"0x"+ao.toString(16)}/**
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
 */const G1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Q1{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const We="WebChannelConnection";class X1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=$c(),c=this.mo(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Yr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=G1[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=$c();return new Promise((o,a)=>{const c=new rC;c.setWithCredentials(!0),c.listenOnce(eC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const u=c.getResponseJson();$(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fc.TIMEOUT:$(We,`RPC '${e}' ${i} timed out`),a(new j(R.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if($(We,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(_){const b=_.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(b)>=0?b:R.UNKNOWN}(p.status);a(new j(y,p.message))}else a(new j(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(R.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(We,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(We,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(e,n,r){const s=$c(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YS(),a=ZS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new nC({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(We,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const y=new Q1({so:_=>{p?$(We,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||($(We,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),$(We,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,b,P)=>{_.listen(b,D=>{try{P(D)}catch(O){setTimeout(()=>{throw O},0)}})};return v(h,ro.EventType.OPEN,()=>{p||$(We,`RPC '${e}' stream ${s} transport opened.`)}),v(h,ro.EventType.CLOSE,()=>{p||(p=!0,$(We,`RPC '${e}' stream ${s} transport closed`),y.Po())}),v(h,ro.EventType.ERROR,_=>{p||(p=!0,Yr(We,`RPC '${e}' stream ${s} transport errored:`,_),y.Po(new j(R.UNAVAILABLE,"The operation could not be completed")))}),v(h,ro.EventType.MESSAGE,_=>{var b;if(!p){const P=_.data[0];Ee(!!P);const D=P,O=D.error||((b=D[0])===null||b===void 0?void 0:b.error);if(O){$(We,`RPC '${e}' stream ${s} received error:`,O);const te=O.status;let F=function(Be){const Ie=Ce[Be];if(Ie!==void 0)return Ny(Ie)}(te),ae=O.message;F===void 0&&(F=R.INTERNAL,ae="Unknown error status: "+te+" with message "+O.message),p=!0,y.Po(new j(F,ae)),h.close()}else $(We,`RPC '${e}' stream ${s} received:`,P),y.Io(P)}}),v(a,tC.STAT_EVENT,_=>{_.stat===zd.PROXY?$(We,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===zd.NOPROXY&&$(We,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function Bc(){return typeof document<"u"?document:null}/**
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
 */function rc(t){return new c1(t,!0)}/**
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
 */class qy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Ky{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new qy(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new j(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J1 extends Ky{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=h1(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Gt(o.readTime):J.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=ql(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Fl(c)?{documents:p1(i,c)}:{query:g1(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=My(i,o.resumeToken);const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=oa(i,o.snapshotVersion.toTimestamp());const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=_1(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=ql(this.serializer),n.removeTarget=e,this.Ho(n)}}class Y1 extends Ky{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=d1(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.u_(r,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=ql(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f1(this.serializer,r))};this.Ho(n)}}/**
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
 */class Z1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new j(R.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(R.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(R.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class ek{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ln(n),this.d_=!1):$("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class tk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{vr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.y_.add(4),await ji(l),l.b_.set("Unknown"),l.y_.delete(4),await sc(l)}(this))})}),this.b_=new ek(r,s)}}async function sc(t){if(vr(t))for(const e of t.w_)await e(!0)}async function ji(t){for(const e of t.w_)await e(!1)}function zy(t,e){const n=Z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Rh(n)?Ah(n):ms(n).Uo()&&wh(n,e))}function Wy(t,e){const n=Z(t),r=ms(n);n.p_.delete(e),r.Uo()&&Gy(n,e),n.p_.size===0&&(r.Uo()?r.zo():vr(n)&&n.b_.set("Unknown"))}function wh(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).i_(e)}function Gy(t,e){t.D_.Be(e),ms(t).s_(e)}function Ah(t){t.D_=new s1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.b_.A_()}function Rh(t){return vr(t)&&!ms(t).$o()&&t.p_.size>0}function vr(t){return Z(t).y_.size===0}function Qy(t){t.D_=void 0}async function nk(t){t.p_.forEach((e,n)=>{wh(t,e)})}async function rk(t,e){Qy(t),Rh(t)?(t.b_.m_(e),Ah(t)):t.b_.set("Unknown")}async function sk(t,e,n){if(t.b_.set("Online"),e instanceof Vy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await aa(t,r)}else if(e instanceof Po?t.D_.We(e):e instanceof xy?t.D_.Ze(e):t.D_.je(e),!n.isEqual(J.min()))try{const r=await Hy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(rt.EMPTY_BYTE_STRING,u.snapshotVersion)),Gy(i,c);const h=new Sn(u.target,c,l,u.sequenceNumber);wh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await aa(t,r)}}async function aa(t,e,n){if(!Ui(e))throw e;t.y_.add(1),await ji(t),t.b_.set("Offline"),n||(n=()=>Hy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await sc(t)})}function Xy(t,e){return e().catch(n=>aa(t,n,e))}async function ic(t){const e=Z(t),n=Un(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;ik(e);)try{const s=await H1(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,ok(e,s)}catch(s){await aa(e,s)}Jy(e)&&Yy(e)}function ik(t){return vr(t)&&t.g_.length<10}function ok(t,e){t.g_.push(e);const n=Un(t);n.Uo()&&n.__&&n.a_(e.mutations)}function Jy(t){return vr(t)&&!Un(t).$o()&&t.g_.length>0}function Yy(t){Un(t).start()}async function ak(t){Un(t).l_()}async function ck(t){const e=Un(t);for(const n of t.g_)e.a_(n.mutations)}async function lk(t,e,n){const r=t.g_.shift(),s=mh.from(r,e,n);await Xy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ic(t)}async function uk(t,e){e&&Un(t).__&&await async function(r,s){if(function(o){return t1(o)&&o!==R.ABORTED}(s.code)){const i=r.g_.shift();Un(r).Go(),await Xy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ic(r)}}(t,e),Jy(t)&&Yy(t)}async function _p(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=vr(n);n.y_.add(3),await ji(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await sc(n)}async function hk(t,e){const n=Z(t);e?(n.y_.delete(2),await sc(n)):e||(n.y_.add(2),await ji(n),n.b_.set("Unknown"))}function ms(t){return t.v_||(t.v_=function(n,r,s){const i=Z(n);return i.P_(),new J1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:nk.bind(null,t),uo:rk.bind(null,t),r_:sk.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Rh(t)?Ah(t):t.b_.set("Unknown")):(await t.v_.stop(),Qy(t))})),t.v_}function Un(t){return t.C_||(t.C_=function(n,r,s){const i=Z(n);return i.P_(),new Y1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:ak.bind(null,t),uo:uk.bind(null,t),c_:ck.bind(null,t),u_:lk.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await ic(t)):(await t.C_.stop(),t.g_.length>0&&($("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class bh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(t,e){if(ln("AsyncQueue",`${e}: ${t}`),Ui(t))return new j(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Os(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class yp{constructor(){this.F_=new we(K.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):G():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class rs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rs(e,n,qr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fk{constructor(){this.x_=void 0,this.listeners=[]}}class dk{constructor(){this.queries=new gs(e=>vy(e),Ya),this.onlineState="Unknown",this.O_=new Set}}async function pk(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new fk),s)try{i.x_=await n.onListen(r)}catch(o){const a=Ph(o,`Initialization of query '${$l(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&Sh(n)}async function gk(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function mk(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&Sh(n)}function _k(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sh(t){t.O_.forEach(e=>{e.next()})}class yk{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Zy{constructor(e){this.key=e}}class ev{constructor(e){this.key=e}}class vk{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=re(),this.mutatedKeys=re(),this.na=Ey(e),this.ra=new qr(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new yp,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Za(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),_=!0):this._a(f,p)||(r.track({type:2,doc:p}),_=!0,(c&&this.na(p,c)>0||l&&this.na(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),_=!0):f&&!p&&(r.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((l,u)=>function(f,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return y(f)-y(p)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new rs(this.query,e.ra,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new yp,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=re(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new ev(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Zy(r))}),n}ha(e){this.X_=e.ss,this.ta=re();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return rs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Ek{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Tk{constructor(e){this.key=e,this.Ia=!1}}class Ik{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new gs(a=>vy(a),Ya),this.da=new Map,this.Aa=new Set,this.Ra=new we(K.comparator),this.Va=new Map,this.ma=new Eh,this.fa={},this.ga=new Map,this.pa=ns.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function wk(t,e){const n=Nk(t);let r,s;const i=n.Ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await q1(n.localStore,un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Ak(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&zy(n.remoteStore,o)}return s}async function Ak(t,e,n,r,s){t.wa=(h,f,p)=>async function(v,_,b,P){let D=_.view.sa(b);D.zi&&(D=await pp(v.localStore,_.query,!1).then(({documents:F})=>_.view.sa(F,D)));const O=P&&P.targetChanges.get(_.targetId),te=_.view.applyChanges(D,v.isPrimaryClient,O);return Ep(v,_.targetId,te.ca),te.snapshot}(t,h,f,p);const i=await pp(t.localStore,e,!0),o=new vk(e,i.ss),a=o.sa(i.documents),c=Bi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Ep(t,n,l.ca);const u=new Ek(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),l.snapshot}async function Rk(t,e){const n=Z(t),r=n.Ea.get(e),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!Ya(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Wy(n.remoteStore,r.targetId),zl(n,r.targetId)}).catch(Fi)):(zl(n,r.targetId),await Kl(n.localStore,r.targetId,!0))}async function bk(t,e,n){const r=xk(t);try{const s=await function(o,a){const c=Z(o),l=xe.now(),u=a.reduce((p,y)=>p.add(y.key),re());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=hn(),v=re();return c.Xi.getEntries(p,u).next(_=>{y=_,y.forEach((b,P)=>{P.isValidDocument()||(v=v.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(_=>{h=_;const b=[];for(const P of a){const D=XC(P,h.get(P.key).overlayedDocument);D!=null&&b.push(new jn(P.key,D,hy(D.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,b,a)}).next(_=>{f=_;const b=_.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(p,_.batchId,b)})}).then(()=>({batchId:f.batchId,changes:Iy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new we(ce)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Hi(r,s.changes),await ic(r.remoteStore)}catch(s){const i=Ph(s,"Failed to persist write");n.reject(i)}}async function tv(t,e){const n=Z(t);try{const r=await B1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Ee(o.Ia):s.removedDocuments.size>0&&(Ee(o.Ia),o.Ia=!1))}),await Hi(n,r,e)}catch(r){await Fi(r)}}function vp(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(l=!0)}),l&&Sh(c)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Pk(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new we(K.comparator);o=o.insert(i,Qe.newNoDocument(i,J.min()));const a=re().add(i),c=new nc(J.min(),new Map,new we(ce),o,a);await tv(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(e),Ch(r)}else await Kl(r.localStore,e,!1).then(()=>zl(r,e,n)).catch(Fi)}async function Sk(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await $1(n.localStore,e);rv(n,r,null),nv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hi(n,s)}catch(s){await Fi(s)}}async function Ck(t,e,n){const r=Z(t);try{const s=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ee(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);rv(r,e,n),nv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hi(r,s)}catch(s){await Fi(s)}}function nv(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function rv(t,e,n){const r=Z(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||sv(t,r)})}function sv(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(Wy(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Ch(t))}function Ep(t,e,n){for(const r of n)r instanceof Zy?(t.ma.addReference(r.key,e),kk(t,r)):r instanceof ev?($("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||sv(t,r.key)):G()}function kk(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||($("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Ch(t))}function Ch(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new K(Te.fromString(e)),r=t.pa.next();t.Va.set(r,new Tk(n)),t.Ra=t.Ra.insert(n,r),zy(t.remoteStore,new Sn(un(yy(n.path)),r,"TargetPurposeLimboResolution",uh.ae))}}async function Hi(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ih.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(l,f=>C.forEach(f.Li,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>C.forEach(f.ki,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Ui(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.Ji.get(f),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(f,v)}}}(r.localStore,i))}async function Ok(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await jy(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new j(R.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hi(n,r.ts)}}function Dk(t,e){const n=Z(t),r=n.Va.get(e);if(r&&r.Ia)return re().add(r.key);{let s=re();const i=n.da.get(e);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function Nk(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pk.bind(null,e),e.Ta.r_=mk.bind(null,e.eventManager),e.Ta.Sa=_k.bind(null,e.eventManager),e}function xk(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ck.bind(null,e),e}class Tp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return U1(this.persistence,new L1,e.initialUser,this.serializer)}createPersistence(e){return new V1(Th.zr,this.serializer)}createSharedClientState(e){return new z1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ok.bind(null,this.syncEngine),await hk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dk}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=function(i){return new X1(i)}(e.databaseInfo);return function(i,o,a,c){return new Z1(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new tk(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>vp(this.syncEngine,n,0),function(){return mp.v()?new mp:new W1}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new Ik(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);$("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await ji(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Mk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Lk{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=cy.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ph(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Uk(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>_p(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>_p(e.remoteStore,i)),t._onlineComponents=e}function Fk(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Uk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Fk(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new Tp)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new Tp);return t._offlineComponents}async function iv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Ip(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Ip(t,new Vk))),t._onlineComponents}function $k(t){return iv(t).then(e=>e.syncEngine)}async function Bk(t){const e=await iv(t),n=e.eventManager;return n.onListen=wk.bind(null,e.syncEngine),n.onUnlisten=Rk.bind(null,e.syncEngine),n}function jk(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Mk({next:f=>{o.enqueueAndForget(()=>gk(i,h)),f.fromCache&&c.source==="server"?l.reject(new j(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new yk(a,u,{includeMetadataChanges:!0,W_:!0});return pk(i,h)}(await Bk(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ov(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wp=new Map;/**
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
 */function av(t,e,n){if(!n)throw new j(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hk(t,e,n,r){if(e===!0&&r===!0)throw new j(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ap(t){if(!K.isDocumentKey(t))throw new j(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rp(t){if(K.isDocumentKey(t))throw new j(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kh(t);throw new j(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class bp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ov((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iC;switch(r.type){case"firstParty":return new lC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wp.get(n);r&&($("ComponentProvider","Removing Datastore"),wp.delete(n),r.terminate())}(this),Promise.resolve()}}function qk(t,e,n,r={}){var s;const i=(t=ss(t,oc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ge.MOCK_USER;else{a=Em(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ge(l)}t._authCredentials=new oC(new ay(a,c))}}/**
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
 */class ac{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ac(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class xn extends ac{constructor(e,n,r){super(e,n,yy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new K(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function Pp(t,e,...n){if(t=Oe(t),av("collection","path",e),t instanceof oc){const r=Te.fromString(e,...n);return Rp(r),new xn(t,null,r)}{if(!(t instanceof Et||t instanceof xn))throw new j(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Rp(r),new xn(t.firestore,null,r)}}function Kk(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=cy.V()),av("doc","path",e),t instanceof oc){const r=Te.fromString(e,...n);return Ap(r),new Et(t,null,new K(r))}{if(!(t instanceof Et||t instanceof xn))throw new j(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Ap(r),new Et(t.firestore,t instanceof xn?t.converter:null,new K(r))}}/**
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
 */class zk{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new qy(this,"async_queue_retry"),this.Xa=()=>{const n=Bc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Nn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Ui(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=bh.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&G()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class cc extends oc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new zk}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lv(this),this._firestoreClient.terminate()}}function Wk(t,e){const n=typeof t=="object"?t:Ou(),r=typeof t=="string"?t:e||"(default)",s=ka(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_m("firestore");i&&qk(s,...i)}return s}function cv(t){return t._firestoreClient||lv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lv(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new TC(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ov(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Lk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(rt.fromBase64String(e))}catch(n){throw new j(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class lc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Oh{constructor(e){this._methodName=e}}/**
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
 */class Dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const Gk=/^__.*__$/;class Qk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new $i(e,this.data,n,this.fieldTransforms)}}class uv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Nh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return ca(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(hv(this.uu)&&Gk.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class Xk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}Ru(e,n,r,s=!1){return new Nh({uu:e,methodName:n,Au:r,path:Je.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fv(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new Xk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jk(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);xh("Data must be an object, but it was:",o,r);const a=dv(r,o);let c,l;if(i.merge)c=new pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Wl(e,h,n);if(!o.contains(f))throw new j(R.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gv(u,f)||u.push(f)}c=new pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Qk(new ut(a),c,l)}class uc extends Oh{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uc}}function Yk(t,e,n,r){const s=t.Ru(1,e,n);xh("Data must be an object, but it was:",s,r);const i=[],o=ut.empty();yr(r,(c,l)=>{const u=Vh(e,c,n);l=Oe(l);const h=s.Iu(u);if(l instanceof uc)i.push(u);else{const f=hc(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new pt(i);return new uv(o,a,s.fieldTransforms)}function Zk(t,e,n,r,s,i){const o=t.Ru(1,e,n),a=[Wl(e,r,n)],c=[s];if(i.length%2!=0)throw new j(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Wl(e,i[f])),c.push(i[f+1]);const l=[],u=ut.empty();for(let f=a.length-1;f>=0;--f)if(!gv(l,a[f])){const p=a[f];let y=c[f];y=Oe(y);const v=o.Iu(p);if(y instanceof uc)l.push(p);else{const _=hc(y,v);_!=null&&(l.push(p),u.set(p,_))}}const h=new pt(l);return new uv(u,h,o.fieldTransforms)}function hc(t,e){if(pv(t=Oe(t)))return xh("Unsupported field value:",e,t),dv(t,e);if(t instanceof Oh)return function(r,s){if(!hv(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=hc(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:oa(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(s.serializer,i)}}if(r instanceof Dh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof is)return{bytesValue:My(s.serializer,r._byteString)};if(r instanceof Et){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${kh(r)}`)}(t,e)}function dv(t,e){const n={};return ly(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=hc(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function pv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof Dh||t instanceof is||t instanceof Et||t instanceof Oh)}function xh(t,e,n){if(!pv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=kh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Wl(t,e,n){if((e=Oe(e))instanceof lc)return e._internalPath;if(typeof e=="string")return Vh(t,e);throw ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const eO=new RegExp("[~\\*/\\[\\]]");function Vh(t,e,n){if(e.search(eO)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lc(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ca(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(R.INVALID_ARGUMENT,a+t+c)}function gv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_v("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tO extends mv{data(){return super.data()}}function _v(t,e){return typeof e=="string"?Vh(t,e):e instanceof lc?e._internalPath:e._delegate._internalPath}/**
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
 */function nO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rO{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Dh(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gi(e));default:return null}}convertTimestamp(e){const n=Fn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Ee(By(r));const s=new mi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function sO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iO extends mv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_v("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class So extends iO{data(e={}){return super.data(e)}}class oO{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new So(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new So(s._firestore,s._userDataWriter,a.doc.key,a.doc,new co(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new So(s._firestore,s._userDataWriter,a.doc.key,a.doc,new co(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:aO(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class cO extends rO{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function Sp(t){t=ss(t,ac);const e=ss(t.firestore,cc),n=cv(e),r=new cO(e);return nO(t._query),jk(n,t._query).then(s=>new oO(e,r,t,s))}function BN(t,e,n,...r){t=ss(t,Et);const s=ss(t.firestore,cc),i=fv(s);let o;return o=typeof(e=Oe(e))=="string"||e instanceof lc?Zk(i,"updateDoc",t._key,e,n,r):Yk(i,"updateDoc",t._key,e),yv(s,[o.toMutation(t._key,Wt.exists(!0))])}function jN(t,e){const n=ss(t.firestore,cc),r=Kk(t),s=sO(t.converter,e);return yv(n,[Jk(fv(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function yv(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>bk(await $k(r),s,i)),i.promise}(cv(t),e)}(function(e,n=!0){(function(s){ps=s})(mr),lr(new Mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new cc(new aC(r.getProvider("auth-internal")),new hC(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),qt(Wd,"4.1.0",e),qt(Wd,"4.1.0","esm2017")})();/**
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
 */const vv="firebasestorage.googleapis.com",Ev="storageBucket",lO=2*60*1e3,uO=10*60*1e3;/**
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
 */class Pe extends Yt{constructor(e,n,r=0){super(Hc(e),`Firebase Storage: ${n} (${Hc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Hc(t){return"storage/"+t}function Mh(){const t="An unknown error occurred, please check the error payload for server response.";return new Pe(be.UNKNOWN,t)}function hO(t){return new Pe(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fO(t){return new Pe(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(be.UNAUTHENTICATED,t)}function pO(){return new Pe(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gO(t){return new Pe(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mO(){return new Pe(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _O(){return new Pe(be.CANCELED,"User canceled the upload/download.")}function yO(t){return new Pe(be.INVALID_URL,"Invalid URL '"+t+"'.")}function vO(t){return new Pe(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function EO(){return new Pe(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ev+"' property when initializing the app?")}function TO(){return new Pe(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IO(){return new Pe(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wO(t){return new Pe(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gl(t){return new Pe(be.INVALID_ARGUMENT,t)}function Tv(){return new Pe(be.APP_DELETED,"The Firebase app was deleted.")}function AO(t){return new Pe(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qs(t,e){return new Pe(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function As(t){throw new Pe(be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gt.makeFromUrl(e,n)}catch{return new gt(e,"")}if(r.path==="")return r;throw vO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},v=n===vv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",b=new RegExp(`^https?://${v}/${s}/${_}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<D.length;O++){const te=D[O],F=te.regex.exec(e);if(F){const ae=F[te.indices.bucket];let Ae=F[te.indices.path];Ae||(Ae=""),r=new gt(ae,Ae),te.postModify(r);break}}if(r==null)throw yO(e);return r}}class RO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bO(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(p,c())},_)}function f(){i&&clearTimeout(i)}function p(_,...b){if(l){f();return}if(_){f(),u.call(null,_,...b);return}if(c()||o){f(),u.call(null,_,...b);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,h(D)}let y=!1;function v(_){y||(y=!0,f(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function PO(t){t(!1)}/**
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
 */function SO(t){return t!==void 0}function CO(t){return typeof t=="object"&&!Array.isArray(t)}function Lh(t){return typeof t=="string"||t instanceof String}function Cp(t){return Fh()&&t instanceof Blob}function Fh(){return typeof Blob<"u"&&!PA()}function kp(t,e,n,r){if(r<e)throw Gl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Uh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Iv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var or;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(or||(or={}));/**
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
 */function kO(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class OO{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new lo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===or.NO_ERROR,c=i.getStatus();if(!a||kO(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===or.ABORT;r(!1,new lo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new lo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());SO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Mh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Tv():_O();o(c)}else{const c=mO();o(c)}};this.canceled_?n(!1,new lo(!1,null,!0)):this.backoffId_=bO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function DO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MO(t,e,n,r,s,i,o=!0){const a=Iv(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return xO(l,e),DO(l,n),NO(l,i),VO(l,r),new OO(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function LO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FO(...t){const e=LO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Fh())return new Blob(t);throw new Pe(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function UO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function $O(t){if(typeof atob>"u")throw wO("base-64");return atob(t)}/**
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
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qc{constructor(e,n){this.data=e,this.contentType=n||null}}function BO(t,e){switch(t){case jt.RAW:return new qc(wv(e));case jt.BASE64:case jt.BASE64URL:return new qc(Av(t,e));case jt.DATA_URL:return new qc(HO(e),qO(e))}throw Mh()}function wv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function jO(t){let e;try{e=decodeURIComponent(t)}catch{throw qs(jt.DATA_URL,"Malformed data URL.")}return wv(e)}function Av(t,e){switch(t){case jt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw qs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw qs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$O(e)}catch(s){throw s.message.includes("polyfill")?s:qs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Rv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qs(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=KO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HO(t){const e=new Rv(t);return e.base64?Av(jt.BASE64,e.rest):jO(e.rest)}function qO(t){return new Rv(t).contentType}function KO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Pn{constructor(e,n){let r=0,s="";Cp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Cp(this.data_)){const r=this.data_,s=UO(r,e,n);return s===null?null:new Pn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pn(r,!0)}}static getBlob(...e){if(Fh()){const n=e.map(r=>r instanceof Pn?r.data_:r);return new Pn(FO.apply(null,n))}else{const n=e.map(o=>Lh(o)?BO(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Pn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function bv(t){let e;try{e=JSON.parse(t)}catch{return null}return CO(e)?e:null}/**
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
 */function zO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Pv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function GO(t,e){return e}class st{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||GO}}let uo=null;function QO(t){return!Lh(t)||t.length<2?t:Pv(t)}function Sv(){if(uo)return uo;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(i,o){return QO(o)}const n=new st("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new st("size");return s.xform=r,t.push(s),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),uo=t,uo}function XO(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function JO(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return XO(r,t),r}function Cv(t,e,n){const r=bv(e);return r===null?null:JO(t,r,n)}function YO(t,e,n,r){const s=bv(e);if(s===null||!Lh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=Uh(f,n,r),y=Iv({alt:"media",token:l});return p+y})[0]}function ZO(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class kv{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ov(t){if(!t)throw Mh()}function eD(t,e){function n(r,s){const i=Cv(t,s,e);return Ov(i!==null),i}return n}function tD(t,e){function n(r,s){const i=Cv(t,s,e);return Ov(i!==null),YO(i,s,t.host,t._protocol)}return n}function Dv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=pO():s=dO():n.getStatus()===402?s=fO(t.bucket):n.getStatus()===403?s=gO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function nD(t){const e=Dv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=hO(t.path)),i.serverResponse=s.serverResponse,i}return n}function rD(t,e,n){const r=e.fullServerUrl(),s=Uh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new kv(s,i,tD(t,n),o);return a.errorHandler=nD(e),a}function sD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function iD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sD(null,e)),r}function oD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let O=0;O<2;O++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=iD(e,r,s),u=ZO(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=Pn.getBlob(h,r,f);if(p===null)throw TO();const y={name:l.fullPath},v=Uh(i,t.host,t._protocol),_="POST",b=t.maxUploadRetryTime,P=new kv(v,_,eD(t,n),b);return P.urlParams=y,P.headers=o,P.body=p.uploadData(),P.errorHandler=Dv(e),P}class aD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw As("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw As("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw As("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw As("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw As("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class cD extends aD{initXhr(){this.xhr_.responseType="text"}}function Nv(){return new cD}/**
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
 */class pr{constructor(e,n){this._service=e,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pr(e,n)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Pv(this._location.path)}get storage(){return this._service}get parent(){const e=zO(this._location.path);if(e===null)return null;const n=new gt(this._location.bucket,e);return new pr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw AO(e)}}function lD(t,e,n){t._throwIfRoot("uploadBytes");const r=oD(t.storage,t._location,Sv(),new Pn(e,!0),n);return t.storage.makeRequestWithTokens(r,Nv).then(s=>({metadata:s,ref:t}))}function uD(t){t._throwIfRoot("getDownloadURL");const e=rD(t.storage,t._location,Sv());return t.storage.makeRequestWithTokens(e,Nv).then(n=>{if(n===null)throw IO();return n})}function hD(t,e){const n=WO(t._location.path,e),r=new gt(t._location.bucket,n);return new pr(t.storage,r)}/**
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
 */function fD(t){return/^[A-Za-z]+:\/\//.test(t)}function dD(t,e){return new pr(t,e)}function xv(t,e){if(t instanceof $h){const n=t;if(n._bucket==null)throw EO();const r=new pr(n,n._bucket);return e!=null?xv(r,e):r}else return e!==void 0?hD(t,e):t}function pD(t,e){if(e&&fD(e)){if(t instanceof $h)return dD(t,e);throw Gl("To use ref(service, url), the first argument must be a Storage instance.")}else return xv(t,e)}function Op(t,e){const n=e==null?void 0:e[Ev];return n==null?null:gt.makeFromBucketSpec(n,t)}function gD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Em(s,t.app.options.projectId))}class $h{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=vv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lO,this._maxUploadRetryTime=uO,this._requests=new Set,s!=null?this._bucket=gt.makeFromBucketSpec(s,this._host):this._bucket=Op(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=Op(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new RO(Tv());{const o=MO(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Dp="@firebase/storage",Np="0.11.2";/**
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
 */const Vv="storage";function HN(t,e,n){return t=Oe(t),lD(t,e,n)}function qN(t){return t=Oe(t),uD(t)}function KN(t,e){return t=Oe(t),pD(t,e)}function mD(t=Ou(),e){t=Oe(t);const r=ka(t,Vv).getImmediate({identifier:e}),s=_m("storage");return s&&_D(r,...s),r}function _D(t,e,n,r={}){gD(t,e,n,r)}function yD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new $h(n,r,s,e,mr)}function vD(){lr(new Mn(Vv,yD,"PUBLIC").setMultipleInstances(!0)),qt(Dp,Np,""),qt(Dp,Np,"esm2017")}vD();const ED={apiKey:"AIzaSyDV86E04pfIBPbQnfyeRoDPFiamVZz1lD4",authDomain:"coesa-dd1ed.firebaseapp.com",projectId:"coesa-dd1ed",storageBucket:"coesa-dd1ed.appspot.com",messagingSenderId:"262690091547",appId:"1:262690091547:web:7d96e73c81ccb843ddbebe",measurementId:"G-T7KRL108F3"},Bh=wm(ED),Ql=JP(Bh),xp=Wk(Bh);mD(Bh);const TD={components:{adminNav:_A,Icon:fm},data(){return{loading:!0,users:[],complaints:[]}},async created(){try{const t=await Sp(Pp(xp,"Users"));this.loading=!1,this.users=t.docs.map(e=>({id:e.id,...e.data()}))}catch(t){console.error("Error fetching item list:",t)}try{const t=await Sp(Pp(xp,"Faq&Complaints"));this.loading=!1,this.complaints=t.docs.map(e=>({id:e.id,timestamp:e.data().timestamp?e.data().timestamp.toDate():null,...e.data()}))}catch(t){console.error("Error fetching item list:",t)}},methods:{formatTimestamp(t){if(!t)return"N/A";const e={year:"numeric",month:"long",day:"numeric"},n={hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},r=new Intl.DateTimeFormat("en-US",e).format(t.toDate()),s=new Intl.DateTimeFormat("en-US",n).format(t.toDate());return`${r} at ${s}`}}},dn=t=>(hu("data-v-7cff3751"),t=t(),fu(),t),ID={class:"container my-4"},wD={class:"nav nav-underline d-flex mb-3"},AD={class:"nav-item"},RD={class:"nav-link",href:"#"},bD={class:"nav-item"},PD={class:"nav-link",href:"#"},SD={class:"nav-item"},CD={class:"nav-link",href:"#"},kD=dn(()=>A("h1",null,"Admin Dashboard",-1)),OD={class:"container my-5"},DD={class:"row"},ND={class:"col-lg-3 col-md-6 mt-3"},xD={class:"jumbotron shadow py-5"},VD={class:"container"},MD=dn(()=>A("h3",{class:"text-center"},"Users",-1)),LD={class:"text-center"},FD=bg('<div class="col-lg-3 col-md-6 mt-3" data-v-7cff3751><div class="jumbotron shadow py-5" data-v-7cff3751><div class="container" data-v-7cff3751><h3 class="text-center" data-v-7cff3751>Payments</h3><p class="text-center" data-v-7cff3751>0</p></div></div></div>',1),UD={class:"col-lg-3 col-md-6 mt-3"},$D={class:"jumbotron shadow py-5"},BD={class:"container"},jD=dn(()=>A("h3",{class:"text-center"},"Complaints",-1)),HD={class:"text-center"},qD=bg('<div class="col-lg-3 col-md-6 mt-3" data-v-7cff3751><div class="jumbotron shadow py-5" data-v-7cff3751><div class="container" data-v-7cff3751><h3 class="text-center" data-v-7cff3751>Health</h3><p class="text-center text-success" data-v-7cff3751>Good</p></div></div></div>',1),KD={class:"mt-5 mb-5"},zD={class:"row"},WD={class:"col-lg-6 col-md-6"},GD=dn(()=>A("h4",{class:"my-3"},"All Users",-1)),QD={class:"list-group-item d-flex justify-content-between align-items-start"},XD={class:"ms-2 me-auto"},JD={class:"fw-bold"},YD={class:"text-success"},ZD=dn(()=>A("b",null," Email:",-1)),eN={class:"text-success"},tN={class:"btn"},nN=dn(()=>A("div",{class:"col-lg-6 col-md-6"},[A("h4",{class:"my-3"},"Payment Transactions"),A("p",{class:"d-flex justify-content-center align-item-center mt-5 py-5"},"No Transactions")],-1)),rN={class:"col-lg-6 col-md-6"},sN=dn(()=>A("h4",{class:"my-3"},"All Messages/ Complaints",-1)),iN={class:"list-group-item d-flex justify-content-between align-items-start"},oN={class:"ms-2 me-auto"},aN=dn(()=>A("strong",null,"User Id:",-1)),cN={class:"fw-bold"},lN={class:"text-warning"},uN=dn(()=>A("b",null," Message",-1)),hN={class:"text-success"},fN={class:"btn"};function dN(t,e,n,r,s,i){const o=nr("adminNav"),a=nr("Icon"),c=nr("RouterLink");return In(),Gn("main",null,[Y(o),A("div",ID,[A("ul",wD,[A("li",AD,[A("a",RD,[Y(c,{to:"/all-events",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Events ")]),_:1})])]),A("li",bD,[A("a",PD,[Y(c,{to:"/all-course",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Courses ")]),_:1})])]),A("li",SD,[A("a",CD,[Y(c,{to:"/edit/front-end",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),De(" Front-End ")]),_:1})])])]),kD]),A("div",OD,[A("div",DD,[A("div",ND,[A("div",xD,[A("div",VD,[MD,A("p",LD,mn(s.users.length),1)])])]),FD,A("div",UD,[A("div",$D,[A("div",BD,[jD,A("p",HD,mn(s.complaints.length),1)])])]),qD]),A("div",KD,[A("div",zD,[A("div",WD,[GD,(In(!0),Gn(_t,null,of(s.users,l=>(In(),Gn("ol",{class:"list-group my-2",key:l.id},[A("li",QD,[A("div",XD,[A("div",JD,[De("Full-Name: "),A("span",YD,mn(l.username),1)]),ZD,De(),A("span",eN,mn(l.email),1)]),A("button",tN,[Y(a,{icon:"octicon:trash-24",color:"white"})])])]))),128))]),nN,A("div",rN,[sN,(In(!0),Gn(_t,null,of(s.complaints,l=>(In(),Gn("ol",{class:"list-group my-2",key:l.id},[A("li",iN,[A("div",oN,[A("span",null,[aN,De(" "+mn(l.id),1)]),A("div",cN,[De("Email: "),A("span",lN,mn(l.email),1)]),uN,De(),A("span",hN,mn(l.message),1)]),A("span",null,[A("i",null,[A("small",null,mn(i.formatTimestamp(l.timeStamp)),1)])]),A("button",fN,[Y(a,{icon:"octicon:trash-24",color:"white"})])])]))),128))])])])])])}const pN=Sa(TD,[["render",dN],["__scopeId","data-v-7cff3751"]]);const gN={},jh=t=>(hu("data-v-92baf67e"),t=t(),fu(),t),mN={class:""},_N={class:"page_404 d-flex justify-content-center align-items-center"},yN={class:"container"},vN={class:"row"},EN={class:"col"},TN={class:"col text-center"},IN=jh(()=>A("div",{class:"four_zero_four_bg"},[A("h1",{class:"text-center text-dark"},"404")],-1)),wN={class:"contant_box_404"},AN=jh(()=>A("h3",{class:"h2 text-dark"}," Look like you're lost ",-1)),RN=jh(()=>A("p",{class:"text-dark"},"the page you are looking for not avaible!",-1));function bN(t,e,n,r,s,i){const o=nr("router-link");return In(),Gn("div",mN,[A("section",_N,[A("div",yN,[A("div",vN,[A("div",EN,[A("div",TN,[IN,A("div",wN,[AN,RN,Y(o,{to:"/",class:"link_404"},{default:lt(()=>[De("Go to Home")]),_:1})])])])])])])])}const PN=Sa(gN,[["render",bN],["__scopeId","data-v-92baf67e"]]),la=Vw({history:JI("/"),routes:[{path:"/",redirect:"/dashboard",name:"admin",meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>Mt(()=>import("./adminLogin-ccf651db.js"),["assets/adminLogin-ccf651db.js","assets/adminLogin-6f80fcb8.css"])},{path:"/:catchAll(.*)",component:PN},{path:"/404",component:()=>Mt(()=>import("./404-3c9d838f.js"),["assets/404-3c9d838f.js","assets/404-3e21175c.css"])},{path:"/dashboard",component:pN},{path:"/all-events",name:"admin-events",component:()=>Mt(()=>import("./adminEvent-9602ae10.js"),[])},{path:"/edit/front-end",name:"front-end",component:()=>Mt(()=>import("./frontEnd-cb43404d.js"),["assets/frontEnd-cb43404d.js","assets/frontEnd-3b1487ed.css"])},{path:"/create-event",name:"admin-create-events",component:()=>Mt(()=>import("./addEvent-73fc129c.js"),["assets/addEvent-73fc129c.js","assets/addEvent-bdb6c0ca.css"])},{path:"/create-course",name:"admin-create-course",component:()=>Mt(()=>import("./addCourse-d4e6f773.js"),["assets/addCourse-d4e6f773.js","assets/addCourse-e91ac33a.css"])},{path:"/all-course",name:"admin-all-course",component:()=>Mt(()=>import("./allCourses-1f479c3d.js"),["assets/allCourses-1f479c3d.js","assets/fullPageLoader-db9189cb.js","assets/fullPageLoader-46d0c714.css","assets/allCourses-e859c7db.css"])},{path:"/all-course/:id",name:"CourseDetail",component:()=>Mt(()=>import("./courseDetail-da3edd98.js"),["assets/courseDetail-da3edd98.js","assets/fullPageLoader-db9189cb.js","assets/fullPageLoader-46d0c714.css","assets/courseDetail-dd2a12ab.css"]),props:!0,beforeEnter:(t,e,n)=>{const r=t.params.id;SN(r)?n():n("/404")}},{path:"/edit-course/:id/edit",name:"edit-course-detail",component:()=>Mt(()=>import("./editCourse-317a7733.js"),["assets/editCourse-317a7733.js","assets/editCourse-b039b83f.css"]),props:!0},{path:"/edit-event/:id/edit",name:"edit-event-detail",component:()=>Mt(()=>import("./editAdminEvent-a8a95123.js"),["assets/editAdminEvent-a8a95123.js","assets/editAdminEvent-008f1c09.css"]),props:!0}]});function SN(t){return!isNaN(parseInt(t))}la.beforeEach((t,e,n)=>{t.path==="/dashboard"?Ql.currentUser?n():n("/login"):n()});const CN=OI({state:{user:{id:null,username:null,email:null,password:null}},mutations:{SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user={username:null,email:null,password:null}}},getters:{isAuthenticated:t=>!!t.user,getUserList:t=>t.userList},actions:{async login({commit:t},e){const{email:n,password:r}=e;try{await Mb(Ql,n,r),n==="admin@gmail.com"?(t("SET_USER",{email:n}),la.push("/")):alert("You are not authorized as an admin.")}catch(s){switch(s.code){case"auth/user-not-founded":alert("user not found");break;case"auth/wrong-password":alert("wrong password");break;default:alert("Something went wrong")}return}},async logout({commit:t}){await Ub(Ql),t("CLEAR_USER"),la.push("/login")}}}),kN={};function ON(t,e,n,r,s,i){const o=nr("RouterView");return In(),IT(o)}const DN=Sa(kN,[["render",ON]]),Hh=iI(DN);Hh.use(CN);Hh.use(la);Hh.mount("#app");export{VN as A,IT as B,_t as F,fm as I,Sa as _,A as a,MN as b,Gn as c,fu as d,Y as e,lt as f,De as g,_A as h,Sp as i,Pp as j,xp as k,of as l,Kk as m,BN as n,In as o,hu as p,mD as q,nr as r,KN as s,mn as t,LN as u,xN as v,NN as w,HN as x,qN as y,jN as z};
