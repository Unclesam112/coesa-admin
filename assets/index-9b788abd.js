(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Xl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ye={},Cr=[],bt=()=>{},Ov=()=>!1,Dv=/^on[^a-z]/,la=t=>Dv.test(t),Jl=t=>t.startsWith("onUpdate:"),Le=Object.assign,Yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nv=Object.prototype.hasOwnProperty,ie=(t,e)=>Nv.call(t,e),z=Array.isArray,kr=t=>yi(t)==="[object Map]",ua=t=>yi(t)==="[object Set]",Wh=t=>yi(t)==="[object Date]",ee=t=>typeof t=="function",xe=t=>typeof t=="string",Hs=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Op=t=>_e(t)&&ee(t.then)&&ee(t.catch),Dp=Object.prototype.toString,yi=t=>Dp.call(t),xv=t=>yi(t).slice(8,-1),Np=t=>yi(t)==="[object Object]",Zl=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,uo=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vv=/-(\w)/g,Qt=ha(t=>t.replace(Vv,(e,n)=>n?n.toUpperCase():"")),Mv=/\B([A-Z])/g,rs=ha(t=>t.replace(Mv,"-$1").toLowerCase()),fa=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=ha(t=>t?`on${fa(t)}`:""),qs=(t,e)=>!Object.is(t,e),ho=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},So=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Co=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gh;const Kc=()=>Gh||(Gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?$v(r):eu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(xe(t))return t;if(_e(t))return t}}const Lv=/;(?![^(]*\))/g,Fv=/:([^]+)/,Uv=/\/\*[^]*?\*\//g;function $v(t){const e={};return t.replace(Uv,"").split(Lv).forEach(n=>{if(n){const r=n.split(Fv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function tu(t){let e="";if(xe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=tu(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jv=Xl(Bv);function xp(t){return!!t||t===""}function Hv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=da(t[r],e[r]);return n}function da(t,e){if(t===e)return!0;let n=Wh(t),r=Wh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Hs(t),r=Hs(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?Hv(t,e):!1;if(n=_e(t),r=_e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!da(t[o],e[o]))return!1}}return String(t)===String(e)}function qv(t,e){return t.findIndex(n=>da(n,e))}const fc=t=>xe(t)?t:t==null?"":z(t)||_e(t)&&(t.toString===Dp||!ee(t.toString))?JSON.stringify(t,Vp,2):String(t),Vp=(t,e)=>e&&e.__v_isRef?Vp(t,e.value):kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ua(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!z(e)&&!Np(e)?String(e):e;let It;class Kv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function zv(t,e=It){e&&e.active&&e.effects.push(t)}function Wv(){return It}const nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mp=t=>(t.w&Dn)>0,Lp=t=>(t.n&Dn)>0,Gv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},Qv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Mp(s)&&!Lp(s)?s.delete(t):e[n++]=s,s.w&=~Dn,s.n&=~Dn}e.length=n}},zc=new WeakMap;let Ts=0,Dn=1;const Wc=30;let wt;const Jn=Symbol(""),Gc=Symbol("");class ru{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zv(this,r)}run(){if(!this.active)return this.fn();let e=wt,n=bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,bn=!0,Dn=1<<++Ts,Ts<=Wc?Gv(this):Qh(this),this.fn()}finally{Ts<=Wc&&Qv(this),Dn=1<<--Ts,wt=this.parent,bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Qh(this),this.onStop&&this.onStop(),this.active=!1)}}function Qh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bn=!0;const Fp=[];function ss(){Fp.push(bn),bn=!1}function is(){const t=Fp.pop();bn=t===void 0?!0:t}function ht(t,e,n){if(bn&&wt){let r=zc.get(t);r||zc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=nu()),Up(s)}}function Up(t,e){let n=!1;Ts<=Wc?Lp(t)||(t.n|=Dn,n=!Mp(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function on(t,e,n,r,s,i){const o=zc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Zl(n)&&a.push(o.get("length")):(a.push(o.get(Jn)),kr(t)&&a.push(o.get(Gc)));break;case"delete":z(t)||(a.push(o.get(Jn)),kr(t)&&a.push(o.get(Gc)));break;case"set":kr(t)&&a.push(o.get(Jn));break}if(a.length===1)a[0]&&Qc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qc(nu(c))}}function Qc(t,e){const n=z(t)?t:[...t];for(const r of n)r.computed&&Xh(r);for(const r of n)r.computed||Xh(r)}function Xh(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Xv=Xl("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hs)),Jv=su(),Yv=su(!1,!0),Zv=su(!0),Jh=eE();function eE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)ht(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ss();const r=le(this)[e].apply(this,n);return is(),r}}),t}function tE(t){const e=le(this);return ht(e,"has",t),e.hasOwnProperty(t)}function su(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?_E:Kp:e?qp:Hp).get(r))return r;const o=z(r);if(!t){if(o&&ie(Jh,s))return Reflect.get(Jh,s,i);if(s==="hasOwnProperty")return tE}const a=Reflect.get(r,s,i);return(Hs(s)?$p.has(s):Xv(s))||(t||ht(r,"get",s),e)?a:Ye(a)?o&&Zl(s)?a:a.value:_e(a)?t?Wp(a):vi(a):a}}const nE=Bp(),rE=Bp(!0);function Bp(t=!1){return function(n,r,s,i){let o=n[r];if(jr(o)&&Ye(o)&&!Ye(s))return!1;if(!t&&(!ko(s)&&!jr(s)&&(o=le(o),s=le(s)),!z(n)&&Ye(o)&&!Ye(s)))return o.value=s,!0;const a=z(n)&&Zl(r)?Number(r)<n.length:ie(n,r),c=Reflect.set(n,r,s,i);return n===le(i)&&(a?qs(s,o)&&on(n,"set",r,s):on(n,"add",r,s)),c}}function sE(t,e){const n=ie(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&on(t,"delete",e,void 0),r}function iE(t,e){const n=Reflect.has(t,e);return(!Hs(e)||!$p.has(e))&&ht(t,"has",e),n}function oE(t){return ht(t,"iterate",z(t)?"length":Jn),Reflect.ownKeys(t)}const jp={get:Jv,set:nE,deleteProperty:sE,has:iE,ownKeys:oE},aE={get:Zv,set(t,e){return!0},deleteProperty(t,e){return!0}},cE=Le({},jp,{get:Yv,set:rE}),iu=t=>t,pa=t=>Reflect.getPrototypeOf(t);function qi(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(e!==i&&ht(s,"get",e),ht(s,"get",i));const{has:o}=pa(s),a=r?iu:n?cu:Ks;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ki(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(t!==s&&ht(r,"has",t),ht(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function zi(t,e=!1){return t=t.__v_raw,!e&&ht(le(t),"iterate",Jn),Reflect.get(t,"size",t)}function Yh(t){t=le(t);const e=le(this);return pa(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function Zh(t,e){e=le(e);const n=le(this),{has:r,get:s}=pa(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?qs(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function ef(t){const e=le(this),{has:n,get:r}=pa(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&on(e,"delete",t,void 0),i}function tf(){const t=le(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Wi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?iu:t?cu:Ks;return!t&&ht(a,"iterate",Jn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Gi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=kr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?iu:e?cu:Ks;return!e&&ht(i,"iterate",c?Gc:Jn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function lE(){const t={get(i){return qi(this,i)},get size(){return zi(this)},has:Ki,add:Yh,set:Zh,delete:ef,clear:tf,forEach:Wi(!1,!1)},e={get(i){return qi(this,i,!1,!0)},get size(){return zi(this)},has:Ki,add:Yh,set:Zh,delete:ef,clear:tf,forEach:Wi(!1,!0)},n={get(i){return qi(this,i,!0)},get size(){return zi(this,!0)},has(i){return Ki.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Wi(!0,!1)},r={get(i){return qi(this,i,!0,!0)},get size(){return zi(this,!0)},has(i){return Ki.call(this,i,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gi(i,!1,!1),n[i]=Gi(i,!0,!1),e[i]=Gi(i,!1,!0),r[i]=Gi(i,!0,!0)}),[t,n,e,r]}const[uE,hE,fE,dE]=lE();function ou(t,e){const n=e?t?dE:fE:t?hE:uE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const pE={get:ou(!1,!1)},gE={get:ou(!1,!0)},mE={get:ou(!0,!1)},Hp=new WeakMap,qp=new WeakMap,Kp=new WeakMap,_E=new WeakMap;function yE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vE(t){return t.__v_skip||!Object.isExtensible(t)?0:yE(xv(t))}function vi(t){return jr(t)?t:au(t,!1,jp,pE,Hp)}function zp(t){return au(t,!1,cE,gE,qp)}function Wp(t){return au(t,!0,aE,mE,Kp)}function au(t,e,n,r,s){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=vE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Or(t){return jr(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function jr(t){return!!(t&&t.__v_isReadonly)}function ko(t){return!!(t&&t.__v_isShallow)}function Gp(t){return Or(t)||jr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Qp(t){return So(t,"__v_skip",!0),t}const Ks=t=>_e(t)?vi(t):t,cu=t=>_e(t)?Wp(t):t;function Xp(t){bn&&wt&&(t=le(t),Up(t.dep||(t.dep=nu())))}function Jp(t,e){t=le(t);const n=t.dep;n&&Qc(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function EE(t){return Yp(t,!1)}function IE(t){return Yp(t,!0)}function Yp(t,e){return Ye(t)?t:new TE(t,e)}class TE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Ks(e)}get value(){return Xp(this),this._value}set value(e){const n=this.__v_isShallow||ko(e)||jr(e);e=n?e:le(e),qs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ks(e),Jp(this))}}function Dr(t){return Ye(t)?t.value:t}const wE={get:(t,e,n)=>Dr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Zp(t){return Or(t)?t:new Proxy(t,wE)}class AE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ru(e,()=>{this._dirty||(this._dirty=!0,Jp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return Xp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function RE(t,e,n=!1){let r,s;const i=ee(t);return i?(r=t,s=bt):(r=t.get,s=t.set),new AE(r,s,i||!s,n)}function Pn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ga(i,e,n)}return s}function Pt(t,e,n,r){if(ee(t)){const i=Pn(t,e,n,r);return i&&Op(i)&&i.catch(o=>{ga(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pt(t[i],e,n,r));return s}function ga(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pn(c,null,10,[t,o,a]);return}}bE(t,n,s,r)}function bE(t,e,n,r=!0){console.error(t)}let zs=!1,Xc=!1;const Xe=[];let Ft=0;const Nr=[];let tn=null,qn=0;const eg=Promise.resolve();let lu=null;function tg(t){const e=lu||eg;return t?e.then(this?t.bind(this):t):e}function PE(t){let e=Ft+1,n=Xe.length;for(;e<n;){const r=e+n>>>1;Ws(Xe[r])<t?e=r+1:n=r}return e}function uu(t){(!Xe.length||!Xe.includes(t,zs&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?Xe.push(t):Xe.splice(PE(t.id),0,t),ng())}function ng(){!zs&&!Xc&&(Xc=!0,lu=eg.then(sg))}function SE(t){const e=Xe.indexOf(t);e>Ft&&Xe.splice(e,1)}function CE(t){z(t)?Nr.push(...t):(!tn||!tn.includes(t,t.allowRecurse?qn+1:qn))&&Nr.push(t),ng()}function nf(t,e=zs?Ft+1:0){for(;e<Xe.length;e++){const n=Xe[e];n&&n.pre&&(Xe.splice(e,1),e--,n())}}function rg(t){if(Nr.length){const e=[...new Set(Nr)];if(Nr.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,r)=>Ws(n)-Ws(r)),qn=0;qn<tn.length;qn++)tn[qn]();tn=null,qn=0}}const Ws=t=>t.id==null?1/0:t.id,kE=(t,e)=>{const n=Ws(t)-Ws(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function sg(t){Xc=!1,zs=!0,Xe.sort(kE);const e=bt;try{for(Ft=0;Ft<Xe.length;Ft++){const n=Xe[Ft];n&&n.active!==!1&&Pn(n,null,14)}}finally{Ft=0,Xe.length=0,rg(),zs=!1,lu=null,(Xe.length||Nr.length)&&sg()}}function OE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ye;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ye;f&&(s=n.map(p=>xe(p)?p.trim():p)),h&&(s=n.map(Co))}let a,c=r[a=hc(e)]||r[a=hc(Qt(e))];!c&&i&&(c=r[a=hc(rs(e))]),c&&Pt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,s)}}function ig(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ee(t)){const c=l=>{const u=ig(l,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(_e(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Le(o,i),_e(t)&&r.set(t,o),o)}function ma(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,rs(e))||ie(t,e))}let yt=null,_a=null;function Oo(t){const e=yt;return yt=t,_a=t&&t.type.__scopeId||null,e}function hu(t){_a=t}function fu(){_a=null}function lt(t,e=yt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&pf(-1);const i=Oo(e);let o;try{o=t(...s)}finally{Oo(i),r._d&&pf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:y,inheritAttrs:v}=t;let _,R;const b=Oo(t);try{if(n.shapeFlag&4){const k=s||r;_=Lt(u.call(k,k,h,i,p,f,y)),R=c}else{const k=e;_=Lt(k.length>1?k(i,{attrs:c,slots:a,emit:l}):k(i,null)),R=e.props?c:DE(c)}}catch(k){Os.length=0,ga(k,t,1),_=Y(Gs)}let O=_;if(R&&v!==!1){const k=Object.keys(R),{shapeFlag:te}=O;k.length&&te&7&&(o&&k.some(Jl)&&(R=NE(R,o)),O=Hr(O,R))}return n.dirs&&(O=Hr(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),_=O,Oo(b),_}const DE=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},NE=(t,e)=>{const n={};for(const r in t)(!Jl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?rf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ma(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?rf(r,o,l):!0:!!o;return!1}function rf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ma(n,i))return!0}return!1}function VE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ME=t=>t.__isSuspense;function LE(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):CE(t)}const Qi={};function xr(t,e,n){return og(t,e,n)}function og(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ye){var a;const c=Wv()===((a=He)==null?void 0:a.scope)?He:null;let l,u=!1,h=!1;if(Ye(t)?(l=()=>t.value,u=ko(t)):Or(t)?(l=()=>t,r=!0):z(t)?(h=!0,u=t.some(k=>Or(k)||ko(k)),l=()=>t.map(k=>{if(Ye(k))return k.value;if(Or(k))return Wn(k);if(ee(k))return Pn(k,c,2)})):ee(t)?e?l=()=>Pn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Pt(t,c,3,[p])}:l=bt,e&&r){const k=l;l=()=>Wn(k())}let f,p=k=>{f=b.onStop=()=>{Pn(k,c,4)}},y;if(Xs)if(p=bt,e?n&&Pt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const k=NI();y=k.__watcherHandles||(k.__watcherHandles=[])}else return bt;let v=h?new Array(t.length).fill(Qi):Qi;const _=()=>{if(b.active)if(e){const k=b.run();(r||u||(h?k.some((te,F)=>qs(te,v[F])):qs(k,v)))&&(f&&f(),Pt(e,c,3,[k,v===Qi?void 0:h&&v[0]===Qi?[]:v,p]),v=k)}else b.run()};_.allowRecurse=!!e;let R;s==="sync"?R=_:s==="post"?R=()=>ct(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),R=()=>uu(_));const b=new ru(l,R);e?n?_():v=b.run():s==="post"?ct(b.run.bind(b),c&&c.suspense):b.run();const O=()=>{b.stop(),c&&c.scope&&Yl(c.scope.effects,b)};return y&&y.push(O),O}function FE(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?ag(r,t):()=>r[t]:t.bind(r,r);let i;ee(e)?i=e:(i=e.handler,n=e);const o=He;qr(this);const a=og(s,i.bind(r),n);return o?qr(o):Zn(),a}function ag(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Wn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))Wn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Wn(t[n],e);else if(ua(t)||kr(t))t.forEach(n=>{Wn(n,e)});else if(Np(t))for(const n in t)Wn(t[n],e);return t}function _N(t,e){const n=yt;if(n===null)return t;const r=Ia(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ye]=e[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Wn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Bn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ss(),Pt(c,n,8,[t.el,a,t,e]),is())}}function du(t,e){return ee(t)?(()=>Le({name:t.name},e,{setup:t}))():t}const fo=t=>!!t.type.__asyncLoader,cg=t=>t.type.__isKeepAlive;function UE(t,e){lg(t,"a",e)}function $E(t,e){lg(t,"da",e)}function lg(t,e,n=He){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ya(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cg(s.parent.vnode)&&BE(r,e,n,s),s=s.parent}}function BE(t,e,n,r){const s=ya(e,t,r,!0);ug(()=>{Yl(r[e],s)},n)}function ya(t,e,n=He,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ss(),qr(n);const a=Pt(e,n,t,o);return Zn(),is(),a});return r?s.unshift(i):s.push(i),i}}const fn=t=>(e,n=He)=>(!Xs||t==="sp")&&ya(t,(...r)=>e(...r),n),jE=fn("bm"),HE=fn("m"),qE=fn("bu"),KE=fn("u"),zE=fn("bum"),ug=fn("um"),WE=fn("sp"),GE=fn("rtg"),QE=fn("rtc");function XE(t,e=He){ya("ec",t,e)}const hg="components";function Yn(t,e){return YE(hg,t,!0,e)||t}const JE=Symbol.for("v-ndc");function YE(t,e,n=!0,r=!1){const s=yt||He;if(s){const i=s.type;if(t===hg){const a=kI(i,!1);if(a&&(a===e||a===Qt(e)||a===fa(Qt(e))))return i}const o=sf(s[t]||i[t],e)||sf(s.appContext[t],e);return!o&&r?i:o}}function sf(t,e){return t&&(t[e]||t[Qt(e)]||t[fa(Qt(e))])}function ZE(t,e,n,r){let s;const i=n&&n[r];if(z(t)||xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Jc=t=>t?Tg(t)?Ia(t)||t.proxy:Jc(t.parent):null,ks=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jc(t.parent),$root:t=>Jc(t.root),$emit:t=>t.emit,$options:t=>pu(t),$forceUpdate:t=>t.f||(t.f=()=>uu(t.update)),$nextTick:t=>t.n||(t.n=tg.bind(t.proxy)),$watch:t=>FE.bind(t)}),pc=(t,e)=>t!==ye&&!t.__isScriptSetup&&ie(t,e),eI={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pc(r,e))return o[e]=1,r[e];if(s!==ye&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==ye&&ie(n,e))return o[e]=4,n[e];Yc&&(o[e]=0)}}const u=ks[e];let h,f;if(u)return e==="$attrs"&&ht(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ye&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pc(s,e)?(s[e]=n,!0):r!==ye&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ye&&ie(t,o)||pc(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(ks,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function of(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yc=!0;function tI(t){const e=pu(t),n=t.proxy,r=t.ctx;Yc=!1,e.beforeCreate&&af(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:y,activated:v,deactivated:_,beforeDestroy:R,beforeUnmount:b,destroyed:O,unmounted:k,render:te,renderTracked:F,renderTriggered:ae,errorCaptured:Ae,serverPrefetch:$e,expose:Te,inheritAttrs:dn,components:$n,directives:Dt,filters:ps}=e;if(l&&nI(l,r,null),o)for(const ge in o){const ue=o[ge];ee(ue)&&(r[ge]=ue.bind(n))}if(s){const ge=s.call(n,n);_e(ge)&&(t.data=vi(ge))}if(Yc=!0,i)for(const ge in i){const ue=i[ge],Zt=ee(ue)?ue.bind(n,n):ee(ue.get)?ue.get.bind(n,n):bt,pn=!ee(ue)&&ee(ue.set)?ue.set.bind(n):bt,Nt=At({get:Zt,set:pn});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:at=>Nt.value=at})}if(a)for(const ge in a)fg(a[ge],r,n,ge);if(c){const ge=ee(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ue=>{po(ue,ge[ue])})}u&&af(u,t,"c");function Ve(ge,ue){z(ue)?ue.forEach(Zt=>ge(Zt.bind(n))):ue&&ge(ue.bind(n))}if(Ve(jE,h),Ve(HE,f),Ve(qE,p),Ve(KE,y),Ve(UE,v),Ve($E,_),Ve(XE,Ae),Ve(QE,F),Ve(GE,ae),Ve(zE,b),Ve(ug,k),Ve(WE,$e),z(Te))if(Te.length){const ge=t.exposed||(t.exposed={});Te.forEach(ue=>{Object.defineProperty(ge,ue,{get:()=>n[ue],set:Zt=>n[ue]=Zt})})}else t.exposed||(t.exposed={});te&&t.render===bt&&(t.render=te),dn!=null&&(t.inheritAttrs=dn),$n&&(t.components=$n),Dt&&(t.directives=Dt)}function nI(t,e,n=bt){z(t)&&(t=Zc(t));for(const r in t){const s=t[r];let i;_e(s)?"default"in s?i=Ht(s.from||r,s.default,!0):i=Ht(s.from||r):i=Ht(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function af(t,e,n){Pt(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fg(t,e,n,r){const s=r.includes(".")?ag(n,r):()=>n[r];if(xe(t)){const i=e[t];ee(i)&&xr(s,i)}else if(ee(t))xr(s,t.bind(n));else if(_e(t))if(z(t))t.forEach(i=>fg(i,e,n,r));else{const i=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(i)&&xr(s,i,t)}}function pu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Do(c,l,o,!0)),Do(c,e,o)),_e(e)&&i.set(e,c),c}function Do(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Do(t,i,n,!0),s&&s.forEach(o=>Do(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=rI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rI={data:cf,props:lf,emits:lf,methods:ws,computed:ws,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:ws,directives:ws,watch:iI,provide:cf,inject:sI};function cf(t,e){return e?t?function(){return Le(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function sI(t,e){return ws(Zc(t),Zc(e))}function Zc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function ws(t,e){return t?Le(Object.create(null),t,e):e}function lf(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Le(Object.create(null),of(t),of(e??{})):e}function iI(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function dg(){return{app:null,config:{isNativeTag:Ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oI=0;function aI(t,e){return function(r,s=null){ee(r)||(r=Le({},r)),s!=null&&!_e(s)&&(s=null);const i=dg(),o=new Set;let a=!1;const c=i.app={_uid:oI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xI,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ee(l.install)?(o.add(l),l.install(c,...u)):ee(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Y(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ia(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){No=c;try{return l()}finally{No=null}}};return c}}let No=null;function po(t,e){if(He){let n=He.provides;const r=He.parent&&He.parent.provides;r===n&&(n=He.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=He||yt;if(r||No){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:No._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ee(e)?e.call(r&&r.proxy):e}}function cI(t,e,n,r=!1){const s={},i={};So(i,Ea,1),t.propsDefaults=Object.create(null),pg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:zp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ma(t.emitsOptions,f))continue;const p=e[f];if(c)if(ie(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const y=Qt(f);s[y]=el(c,a,y,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{pg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=rs(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=el(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&on(t,"set","$attrs")}function pg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(uo(c))continue;const l=e[c];let u;s&&ie(s,u=Qt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ma(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||ye;for(let u=0;u<i.length;u++){const h=i[u];n[h]=el(s,c,h,l[h],t,!ie(l,h))}}return o}function el(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ee(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(qr(s),r=l[n]=c.call(null,e),Zn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===rs(n))&&(r=!0))}return r}function gg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ee(t)){const u=h=>{c=!0;const[f,p]=gg(h,e,!0);Le(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return _e(t)&&r.set(t,Cr),Cr;if(z(i))for(let u=0;u<i.length;u++){const h=Qt(i[u]);uf(h)&&(o[h]=ye)}else if(i)for(const u in i){const h=Qt(u);if(uf(h)){const f=i[u],p=o[h]=z(f)||ee(f)?{type:f}:Le({},f);if(p){const y=df(Boolean,p.type),v=df(String,p.type);p[0]=y>-1,p[1]=v<0||y<v,(y>-1||ie(p,"default"))&&a.push(h)}}}const l=[o,a];return _e(t)&&r.set(t,l),l}function uf(t){return t[0]!=="$"}function hf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ff(t,e){return hf(t)===hf(e)}function df(t,e){return z(e)?e.findIndex(n=>ff(n,t)):ee(e)&&ff(e,t)?0:-1}const mg=t=>t[0]==="_"||t==="$stable",gu=t=>z(t)?t.map(Lt):[Lt(t)],uI=(t,e,n)=>{if(e._n)return e;const r=lt((...s)=>gu(e(...s)),n);return r._c=!1,r},_g=(t,e,n)=>{const r=t._ctx;for(const s in t){if(mg(s))continue;const i=t[s];if(ee(i))e[s]=uI(s,i,r);else if(i!=null){const o=gu(i);e[s]=()=>o}}},yg=(t,e)=>{const n=gu(e);t.slots.default=()=>n},hI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),So(e,"_",n)):_g(e,t.slots={})}else t.slots={},e&&yg(t,e);So(t.slots,Ea,1)},fI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ye;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Le(s,e),!n&&a===1&&delete s._):(i=!e.$stable,_g(e,s)),o=e}else e&&(yg(t,e),o={default:1});if(i)for(const a in s)!mg(a)&&!(a in o)&&delete s[a]};function tl(t,e,n,r,s=!1){if(z(t)){t.forEach((f,p)=>tl(f,e&&(z(e)?e[p]:e),n,r,s));return}if(fo(r)&&!s)return;const i=r.shapeFlag&4?Ia(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ye?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(xe(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Ye(l)&&(l.value=null)),ee(c))Pn(c,a,12,[o,u]);else{const f=xe(c),p=Ye(c);if(f||p){const y=()=>{if(t.f){const v=f?ie(h,c)?h[c]:u[c]:c.value;s?z(v)&&Yl(v,i):z(v)?v.includes(i)||v.push(i):f?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ct(y,n)):y()}}}const ct=LE;function dI(t){return pI(t)}function pI(t,e){const n=Kc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=bt,insertStaticContent:y}=t,v=(d,g,m,E=null,T=null,w=null,M=!1,C=null,N=!!g.dynamicChildren)=>{if(d===g)return;d&&!ms(d,g)&&(E=I(d),at(d,T,w,!0),d=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:P,ref:H,shapeFlag:U}=g;switch(P){case va:_(d,g,m,E);break;case Gs:R(d,g,m,E);break;case go:d==null&&b(g,m,E,M);break;case Tt:$n(d,g,m,E,T,w,M,C,N);break;default:U&1?te(d,g,m,E,T,w,M,C,N):U&6?Dt(d,g,m,E,T,w,M,C,N):(U&64||U&128)&&P.process(d,g,m,E,T,w,M,C,N,x)}H!=null&&T&&tl(H,d&&d.ref,w,g||d,!g)},_=(d,g,m,E)=>{if(d==null)r(g.el=a(g.children),m,E);else{const T=g.el=d.el;g.children!==d.children&&l(T,g.children)}},R=(d,g,m,E)=>{d==null?r(g.el=c(g.children||""),m,E):g.el=d.el},b=(d,g,m,E)=>{[d.el,d.anchor]=y(d.children,g,m,E,d.el,d.anchor)},O=({el:d,anchor:g},m,E)=>{let T;for(;d&&d!==g;)T=f(d),r(d,m,E),d=T;r(g,m,E)},k=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),s(d),d=m;s(g)},te=(d,g,m,E,T,w,M,C,N)=>{M=M||g.type==="svg",d==null?F(g,m,E,T,w,M,C,N):$e(d,g,T,w,M,C,N)},F=(d,g,m,E,T,w,M,C)=>{let N,P;const{type:H,props:U,shapeFlag:q,transition:X,dirs:ne}=d;if(N=d.el=o(d.type,w,U&&U.is,U),q&8?u(N,d.children):q&16&&Ae(d.children,N,null,E,T,w&&H!=="foreignObject",M,C),ne&&Bn(d,null,E,"created"),ae(N,d,d.scopeId,M,E),U){for(const pe in U)pe!=="value"&&!uo(pe)&&i(N,pe,null,U[pe],w,d.children,E,T,Ke);"value"in U&&i(N,"value",null,U.value),(P=U.onVnodeBeforeMount)&&Vt(P,E,d)}ne&&Bn(d,null,E,"beforeMount");const me=(!T||T&&!T.pendingBranch)&&X&&!X.persisted;me&&X.beforeEnter(N),r(N,g,m),((P=U&&U.onVnodeMounted)||me||ne)&&ct(()=>{P&&Vt(P,E,d),me&&X.enter(N),ne&&Bn(d,null,E,"mounted")},T)},ae=(d,g,m,E,T)=>{if(m&&p(d,m),E)for(let w=0;w<E.length;w++)p(d,E[w]);if(T){let w=T.subTree;if(g===w){const M=T.vnode;ae(d,M,M.scopeId,M.slotScopeIds,T.parent)}}},Ae=(d,g,m,E,T,w,M,C,N=0)=>{for(let P=N;P<d.length;P++){const H=d[P]=C?yn(d[P]):Lt(d[P]);v(null,H,g,m,E,T,w,M,C)}},$e=(d,g,m,E,T,w,M)=>{const C=g.el=d.el;let{patchFlag:N,dynamicChildren:P,dirs:H}=g;N|=d.patchFlag&16;const U=d.props||ye,q=g.props||ye;let X;m&&jn(m,!1),(X=q.onVnodeBeforeUpdate)&&Vt(X,m,g,d),H&&Bn(g,d,m,"beforeUpdate"),m&&jn(m,!0);const ne=T&&g.type!=="foreignObject";if(P?Te(d.dynamicChildren,P,C,m,E,ne,w):M||ue(d,g,C,null,m,E,ne,w,!1),N>0){if(N&16)dn(C,g,U,q,m,E,T);else if(N&2&&U.class!==q.class&&i(C,"class",null,q.class,T),N&4&&i(C,"style",U.style,q.style,T),N&8){const me=g.dynamicProps;for(let pe=0;pe<me.length;pe++){const Se=me[pe],Et=U[Se],vr=q[Se];(vr!==Et||Se==="value")&&i(C,Se,Et,vr,T,d.children,m,E,Ke)}}N&1&&d.children!==g.children&&u(C,g.children)}else!M&&P==null&&dn(C,g,U,q,m,E,T);((X=q.onVnodeUpdated)||H)&&ct(()=>{X&&Vt(X,m,g,d),H&&Bn(g,d,m,"updated")},E)},Te=(d,g,m,E,T,w,M)=>{for(let C=0;C<g.length;C++){const N=d[C],P=g[C],H=N.el&&(N.type===Tt||!ms(N,P)||N.shapeFlag&70)?h(N.el):m;v(N,P,H,null,E,T,w,M,!0)}},dn=(d,g,m,E,T,w,M)=>{if(m!==E){if(m!==ye)for(const C in m)!uo(C)&&!(C in E)&&i(d,C,m[C],null,M,g.children,T,w,Ke);for(const C in E){if(uo(C))continue;const N=E[C],P=m[C];N!==P&&C!=="value"&&i(d,C,P,N,M,g.children,T,w,Ke)}"value"in E&&i(d,"value",m.value,E.value)}},$n=(d,g,m,E,T,w,M,C,N)=>{const P=g.el=d?d.el:a(""),H=g.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:X}=g;X&&(C=C?C.concat(X):X),d==null?(r(P,m,E),r(H,m,E),Ae(g.children,m,H,T,w,M,C,N)):U>0&&U&64&&q&&d.dynamicChildren?(Te(d.dynamicChildren,q,m,T,w,M,C),(g.key!=null||T&&g===T.subTree)&&vg(d,g,!0)):ue(d,g,m,H,T,w,M,C,N)},Dt=(d,g,m,E,T,w,M,C,N)=>{g.slotScopeIds=C,d==null?g.shapeFlag&512?T.ctx.activate(g,m,E,M,N):ps(g,m,E,T,w,M,N):mr(d,g,N)},ps=(d,g,m,E,T,w,M)=>{const C=d.component=RI(d,E,T);if(cg(d)&&(C.ctx.renderer=x),bI(C),C.asyncDep){if(T&&T.registerDep(C,Ve),!d.el){const N=C.subTree=Y(Gs);R(null,N,g,m)}return}Ve(C,d,g,m,T,w,M)},mr=(d,g,m)=>{const E=g.component=d.component;if(xE(d,g,m))if(E.asyncDep&&!E.asyncResolved){ge(E,g,m);return}else E.next=g,SE(E.update),E.update();else g.el=d.el,E.vnode=g},Ve=(d,g,m,E,T,w,M)=>{const C=()=>{if(d.isMounted){let{next:H,bu:U,u:q,parent:X,vnode:ne}=d,me=H,pe;jn(d,!1),H?(H.el=ne.el,ge(d,H,M)):H=ne,U&&ho(U),(pe=H.props&&H.props.onVnodeBeforeUpdate)&&Vt(pe,X,H,ne),jn(d,!0);const Se=dc(d),Et=d.subTree;d.subTree=Se,v(Et,Se,h(Et.el),I(Et),d,T,w),H.el=Se.el,me===null&&VE(d,Se.el),q&&ct(q,T),(pe=H.props&&H.props.onVnodeUpdated)&&ct(()=>Vt(pe,X,H,ne),T)}else{let H;const{el:U,props:q}=g,{bm:X,m:ne,parent:me}=d,pe=fo(g);if(jn(d,!1),X&&ho(X),!pe&&(H=q&&q.onVnodeBeforeMount)&&Vt(H,me,g),jn(d,!0),U&&he){const Se=()=>{d.subTree=dc(d),he(U,d.subTree,d,T,null)};pe?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Se()):Se()}else{const Se=d.subTree=dc(d);v(null,Se,m,E,d,T,w),g.el=Se.el}if(ne&&ct(ne,T),!pe&&(H=q&&q.onVnodeMounted)){const Se=g;ct(()=>Vt(H,me,Se),T)}(g.shapeFlag&256||me&&fo(me.vnode)&&me.vnode.shapeFlag&256)&&d.a&&ct(d.a,T),d.isMounted=!0,g=m=E=null}},N=d.effect=new ru(C,()=>uu(P),d.scope),P=d.update=()=>N.run();P.id=d.uid,jn(d,!0),P()},ge=(d,g,m)=>{g.component=d;const E=d.vnode.props;d.vnode=g,d.next=null,lI(d,g.props,E,m),fI(d,g.children,m),ss(),nf(),is()},ue=(d,g,m,E,T,w,M,C,N=!1)=>{const P=d&&d.children,H=d?d.shapeFlag:0,U=g.children,{patchFlag:q,shapeFlag:X}=g;if(q>0){if(q&128){pn(P,U,m,E,T,w,M,C,N);return}else if(q&256){Zt(P,U,m,E,T,w,M,C,N);return}}X&8?(H&16&&Ke(P,T,w),U!==P&&u(m,U)):H&16?X&16?pn(P,U,m,E,T,w,M,C,N):Ke(P,T,w,!0):(H&8&&u(m,""),X&16&&Ae(U,m,E,T,w,M,C,N))},Zt=(d,g,m,E,T,w,M,C,N)=>{d=d||Cr,g=g||Cr;const P=d.length,H=g.length,U=Math.min(P,H);let q;for(q=0;q<U;q++){const X=g[q]=N?yn(g[q]):Lt(g[q]);v(d[q],X,m,null,T,w,M,C,N)}P>H?Ke(d,T,w,!0,!1,U):Ae(g,m,E,T,w,M,C,N,U)},pn=(d,g,m,E,T,w,M,C,N)=>{let P=0;const H=g.length;let U=d.length-1,q=H-1;for(;P<=U&&P<=q;){const X=d[P],ne=g[P]=N?yn(g[P]):Lt(g[P]);if(ms(X,ne))v(X,ne,m,null,T,w,M,C,N);else break;P++}for(;P<=U&&P<=q;){const X=d[U],ne=g[q]=N?yn(g[q]):Lt(g[q]);if(ms(X,ne))v(X,ne,m,null,T,w,M,C,N);else break;U--,q--}if(P>U){if(P<=q){const X=q+1,ne=X<H?g[X].el:E;for(;P<=q;)v(null,g[P]=N?yn(g[P]):Lt(g[P]),m,ne,T,w,M,C,N),P++}}else if(P>q)for(;P<=U;)at(d[P],T,w,!0),P++;else{const X=P,ne=P,me=new Map;for(P=ne;P<=q;P++){const dt=g[P]=N?yn(g[P]):Lt(g[P]);dt.key!=null&&me.set(dt.key,P)}let pe,Se=0;const Et=q-ne+1;let vr=!1,qh=0;const gs=new Array(Et);for(P=0;P<Et;P++)gs[P]=0;for(P=X;P<=U;P++){const dt=d[P];if(Se>=Et){at(dt,T,w,!0);continue}let xt;if(dt.key!=null)xt=me.get(dt.key);else for(pe=ne;pe<=q;pe++)if(gs[pe-ne]===0&&ms(dt,g[pe])){xt=pe;break}xt===void 0?at(dt,T,w,!0):(gs[xt-ne]=P+1,xt>=qh?qh=xt:vr=!0,v(dt,g[xt],m,null,T,w,M,C,N),Se++)}const Kh=vr?gI(gs):Cr;for(pe=Kh.length-1,P=Et-1;P>=0;P--){const dt=ne+P,xt=g[dt],zh=dt+1<H?g[dt+1].el:E;gs[P]===0?v(null,xt,m,zh,T,w,M,C,N):vr&&(pe<0||P!==Kh[pe]?Nt(xt,m,zh,2):pe--)}}},Nt=(d,g,m,E,T=null)=>{const{el:w,type:M,transition:C,children:N,shapeFlag:P}=d;if(P&6){Nt(d.component.subTree,g,m,E);return}if(P&128){d.suspense.move(g,m,E);return}if(P&64){M.move(d,g,m,x);return}if(M===Tt){r(w,g,m);for(let U=0;U<N.length;U++)Nt(N[U],g,m,E);r(d.anchor,g,m);return}if(M===go){O(d,g,m);return}if(E!==2&&P&1&&C)if(E===0)C.beforeEnter(w),r(w,g,m),ct(()=>C.enter(w),T);else{const{leave:U,delayLeave:q,afterLeave:X}=C,ne=()=>r(w,g,m),me=()=>{U(w,()=>{ne(),X&&X()})};q?q(w,ne,me):me()}else r(w,g,m)},at=(d,g,m,E=!1,T=!1)=>{const{type:w,props:M,ref:C,children:N,dynamicChildren:P,shapeFlag:H,patchFlag:U,dirs:q}=d;if(C!=null&&tl(C,null,m,d,!0),H&256){g.ctx.deactivate(d);return}const X=H&1&&q,ne=!fo(d);let me;if(ne&&(me=M&&M.onVnodeBeforeUnmount)&&Vt(me,g,d),H&6)Hi(d.component,m,E);else{if(H&128){d.suspense.unmount(m,E);return}X&&Bn(d,null,g,"beforeUnmount"),H&64?d.type.remove(d,g,m,T,x,E):P&&(w!==Tt||U>0&&U&64)?Ke(P,g,m,!1,!0):(w===Tt&&U&384||!T&&H&16)&&Ke(N,g,m),E&&_r(d)}(ne&&(me=M&&M.onVnodeUnmounted)||X)&&ct(()=>{me&&Vt(me,g,d),X&&Bn(d,null,g,"unmounted")},m)},_r=d=>{const{type:g,el:m,anchor:E,transition:T}=d;if(g===Tt){yr(m,E);return}if(g===go){k(d);return}const w=()=>{s(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:M,delayLeave:C}=T,N=()=>M(m,w);C?C(d.el,w,N):N()}else w()},yr=(d,g)=>{let m;for(;d!==g;)m=f(d),s(d),d=m;s(g)},Hi=(d,g,m)=>{const{bum:E,scope:T,update:w,subTree:M,um:C}=d;E&&ho(E),T.stop(),w&&(w.active=!1,at(M,d,g,m)),C&&ct(C,g),ct(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ke=(d,g,m,E=!1,T=!1,w=0)=>{for(let M=w;M<d.length;M++)at(d[M],g,m,E,T)},I=d=>d.shapeFlag&6?I(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),L=(d,g,m)=>{d==null?g._vnode&&at(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,m),nf(),rg(),g._vnode=d},x={p:v,um:at,m:Nt,r:_r,mt:ps,mc:Ae,pc:ue,pbc:Te,n:I,o:t};let B,he;return e&&([B,he]=e(x)),{render:L,hydrate:B,createApp:aI(L,B)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vg(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yn(s[i]),a.el=o.el),n||vg(o,a)),a.type===va&&(a.el=o.el)}}function gI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mI=t=>t.__isTeleport,Tt=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),Gs=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),Os=[];let Rt=null;function Vr(t=!1){Os.push(Rt=t?null:[])}function _I(){Os.pop(),Rt=Os[Os.length-1]||null}let Qs=1;function pf(t){Qs+=t}function Eg(t){return t.dynamicChildren=Qs>0?Rt||Cr:null,_I(),Qs>0&&Rt&&Rt.push(t),t}function Ds(t,e,n,r,s,i){return Eg(D(t,e,n,r,s,i,!0))}function yI(t,e,n,r,s){return Eg(Y(t,e,n,r,s,!0))}function nl(t){return t?t.__v_isVNode===!0:!1}function ms(t,e){return t.type===e.type&&t.key===e.key}const Ea="__vInternal",Ig=({key:t})=>t??null,mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||Ye(t)||ee(t)?{i:yt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===Tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ig(e),ref:e&&mo(e),scopeId:_a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yt};return a?(mu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),Qs>0&&!o&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const Y=vI;function vI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===JE)&&(t=Gs),nl(t)){const a=Hr(t,e,!0);return n&&mu(a,n),Qs>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(OI(t)&&(t=t.__vccOpts),e){e=EI(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=tu(a)),_e(c)&&(Gp(c)&&!z(c)&&(c=Le({},c)),e.style=eu(c))}const o=xe(t)?1:ME(t)?128:mI(t)?64:_e(t)?4:ee(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function EI(t){return t?Gp(t)||Ea in t?Le({},t):t:null}function Hr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?TI(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ig(a),ref:e&&e.ref?n&&s?z(s)?s.concat(mo(e)):[s,mo(e)]:mo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function We(t=" ",e=0){return Y(va,null,t,e)}function II(t,e){const n=Y(go,null,t);return n.staticCount=e,n}function Lt(t){return t==null||typeof t=="boolean"?Y(Gs):z(t)?Y(Tt,null,t.slice()):typeof t=="object"?yn(t):Y(va,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function mu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ea in e)?e._ctx=yt:s===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[We(e)]):n=8);t.children=e,t.shapeFlag|=n}function TI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=tu([e.class,r.class]));else if(s==="style")e.style=eu([e.style,r.style]);else if(la(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Vt(t,e,n,r=null){Pt(t,e,7,[n,r])}const wI=dg();let AI=0;function RI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wI,i={uid:AI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gg(r,s),emitsOptions:ig(r,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=OE.bind(null,i),t.ce&&t.ce(i),i}let He=null,_u,Er,gf="__VUE_INSTANCE_SETTERS__";(Er=Kc()[gf])||(Er=Kc()[gf]=[]),Er.push(t=>He=t),_u=t=>{Er.length>1?Er.forEach(e=>e(t)):Er[0](t)};const qr=t=>{_u(t),t.scope.on()},Zn=()=>{He&&He.scope.off(),_u(null)};function Tg(t){return t.vnode.shapeFlag&4}let Xs=!1;function bI(t,e=!1){Xs=e;const{props:n,children:r}=t.vnode,s=Tg(t);cI(t,n,s,e),hI(t,r);const i=s?PI(t,e):void 0;return Xs=!1,i}function PI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qp(new Proxy(t.ctx,eI));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?CI(t):null;qr(t),ss();const i=Pn(r,t,0,[t.props,s]);if(is(),Zn(),Op(i)){if(i.then(Zn,Zn),e)return i.then(o=>{mf(t,o,e)}).catch(o=>{ga(o,t,0)});t.asyncDep=i}else mf(t,i,e)}else wg(t,e)}function mf(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Zp(e)),wg(t,n)}let _f;function wg(t,e,n){const r=t.type;if(!t.render){if(!e&&_f&&!r.render){const s=r.template||pu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Le(Le({isCustomElement:i,delimiters:a},o),c);r.render=_f(s,l)}}t.render=r.render||bt}qr(t),ss(),tI(t),is(),Zn()}function SI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ht(t,"get","$attrs"),e[n]}}))}function CI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return SI(t)},slots:t.slots,emit:t.emit,expose:e}}function Ia(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zp(Qp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ks)return ks[n](t)},has(e,n){return n in e||n in ks}}))}function kI(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function OI(t){return ee(t)&&"__vccOpts"in t}const At=(t,e)=>RE(t,e,Xs);function xo(t,e,n){const r=arguments.length;return r===2?_e(e)&&!z(e)?nl(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&nl(n)&&(n=[n]),Y(t,e,n))}const DI=Symbol.for("v-scx"),NI=()=>Ht(DI),xI="3.3.4",VI="http://www.w3.org/2000/svg",Kn=typeof document<"u"?document:null,yf=Kn&&Kn.createElement("template"),MI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Kn.createElementNS(VI,t):Kn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yf.innerHTML=r?`<svg>${t}</svg>`:t;const a=yf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function LI(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function FI(t,e,n){const r=t.style,s=xe(n);if(n&&!s){if(e&&!xe(e))for(const i in e)n[i]==null&&rl(r,i,"");for(const i in n)rl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const vf=/\s*!important$/;function rl(t,e,n){if(z(n))n.forEach(r=>rl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=UI(t,e);vf.test(n)?t.setProperty(rs(r),n.replace(vf,""),"important"):t[r]=n}}const Ef=["Webkit","Moz","ms"],gc={};function UI(t,e){const n=gc[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return gc[e]=r;r=fa(r);for(let s=0;s<Ef.length;s++){const i=Ef[s]+r;if(i in t)return gc[e]=i}return e}const If="http://www.w3.org/1999/xlink";function $I(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(If,e.slice(6,e.length)):t.setAttributeNS(If,e,n);else{const i=jv(e);n==null||i&&!xp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function BI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=xp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function zn(t,e,n,r){t.addEventListener(e,n,r)}function jI(t,e,n,r){t.removeEventListener(e,n,r)}function HI(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=qI(e);if(r){const l=i[e]=WI(r,s);zn(t,a,l,c)}else o&&(jI(t,a,o,c),i[e]=void 0)}}const Tf=/(?:Once|Passive|Capture)$/;function qI(t){let e;if(Tf.test(t)){e={};let r;for(;r=t.match(Tf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let mc=0;const KI=Promise.resolve(),zI=()=>mc||(KI.then(()=>mc=0),mc=Date.now());function WI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(GI(r,n.value),e,5,[r])};return n.value=t,n.attached=zI(),n}function GI(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=/^on[a-z]/,QI=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?LI(t,r,s):e==="style"?FI(t,n,r):la(e)?Jl(e)||HI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):XI(t,e,r,s))?BI(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$I(t,e,r,s))};function XI(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wf.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wf.test(e)&&xe(n)?!1:e in t}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>ho(e,n):e};function JI(t){t.target.composing=!0}function Af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Vo(s);const i=r||s.props&&s.props.type==="number";zn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Co(a)),t._assign(a)}),n&&zn(t,"change",()=>{t.value=t.value.trim()}),e||(zn(t,"compositionstart",JI),zn(t,"compositionend",Af),zn(t,"change",Af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Vo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Co(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vN={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ua(e);zn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Co(Mo(o)):Mo(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Vo(r)},mounted(t,{value:e}){Rf(t,e)},beforeUpdate(t,e,n){t._assign=Vo(n)},updated(t,{value:e}){Rf(t,e)}};function Rf(t,e){const n=t.multiple;if(!(n&&!z(e)&&!ua(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Mo(i);if(n)z(e)?i.selected=qv(e,o)>-1:i.selected=e.has(o);else if(da(Mo(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mo(t){return"_value"in t?t._value:t.value}const YI=["ctrl","shift","alt","meta"],ZI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>YI.some(n=>t[`${n}Key`]&&!e.includes(n))},EN=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=ZI[e[s]];if(i&&i(n,e))return}return t(n,...r)},eT=Le({patchProp:QI},MI);let bf;function tT(){return bf||(bf=dI(eT))}const nT=(...t)=>{const e=tT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rT(r);if(!s)return;const i=e._component;!ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rT(t){return xe(t)?document.querySelector(t):t}function sT(){return Ag().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ag(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const iT=typeof Proxy=="function",oT="devtools-plugin:setup",aT="plugin:settings:set";let Ir,sl;function cT(){var t;return Ir!==void 0||(typeof window<"u"&&window.performance?(Ir=!0,sl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ir=!0,sl=global.perf_hooks.performance):Ir=!1),Ir}function lT(){return cT()?sl.now():Date.now()}class uT{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return lT()}},n&&n.on(aT,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function hT(t,e){const n=t,r=Ag(),s=sT(),i=iT&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(oT,t,e);else{const o=i?new uT(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Rg="store";function IN(t){return t===void 0&&(t=null),Ht(t!==null?t:Rg)}function os(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function fT(t){return t!==null&&typeof t=="object"}function dT(t){return t&&typeof t.then=="function"}function pT(t,e){return function(){return t(e)}}function bg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Pg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ta(t,n,[],t._modules.root,!0),yu(t,n,e)}function yu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};os(s,function(o,a){i[a]=pT(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=vi({data:e}),t.strict&&vT(t),r&&n&&t._withCommit(function(){r.data=null})}function Ta(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=vu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=gT(t,o,n);r.forEachMutation(function(u,h){var f=o+h;mT(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,p=u.handler||u;_T(t,f,p,l)}),r.forEachGetter(function(u,h){var f=o+h;yT(t,f,u,l)}),r.forEachChild(function(u,h){Ta(t,e,n.concat(h),u,s)})}function gT(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Lo(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Lo(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Sg(t,e)}},state:{get:function(){return vu(t.state,n)}}}),s}function Sg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function mT(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function _T(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return dT(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function yT(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function vT(t){xr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function vu(t,e){return e.reduce(function(n,r){return n[r]},t)}function Lo(t,e,n){return fT(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var ET="vuex bindings",Pf="vuex:mutations",_c="vuex:actions",Tr="vuex",IT=0;function TT(t,e){hT({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ET]},function(n){n.addTimelineLayer({id:Pf,label:"Vuex Mutations",color:Sf}),n.addTimelineLayer({id:_c,label:"Vuex Actions",color:Sf}),n.addInspector({id:Tr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Tr)if(r.filter){var s=[];Dg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Og(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Tr){var s=r.nodeId;Sg(e,s),r.state=RT(PT(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Tr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Tr),n.sendInspectorState(Tr),n.addTimelineEvent({layerId:Pf,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=IT++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:_c,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:_c,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Sf=8702998,wT=6710886,AT=16777215,Cg={label:"namespaced",textColor:AT,backgroundColor:wT};function kg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Og(t,e){return{id:e||"root",label:kg(e),tags:t.namespaced?[Cg]:[],children:Object.keys(t._children).map(function(n){return Og(t._children[n],e+n+"/")})}}function Dg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Cg]:[]}),Object.keys(e._children).forEach(function(s){Dg(t,e._children[s],n,r+s+"/")})}function RT(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=bT(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?kg(o):o,editable:!1,value:il(function(){return i[o]})}})}return s}function bT(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=il(function(){return t[n]})}else e[n]=il(function(){return t[n]})}),e}function PT(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function il(t){try{return t()}catch(e){return e}}var Ot=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Ng={namespaced:{configurable:!0}};Ng.namespaced.get=function(){return!!this._rawModule.namespaced};Ot.prototype.addChild=function(e,n){this._children[e]=n};Ot.prototype.removeChild=function(e){delete this._children[e]};Ot.prototype.getChild=function(e){return this._children[e]};Ot.prototype.hasChild=function(e){return e in this._children};Ot.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Ot.prototype.forEachChild=function(e){os(this._children,e)};Ot.prototype.forEachGetter=function(e){this._rawModule.getters&&os(this._rawModule.getters,e)};Ot.prototype.forEachAction=function(e){this._rawModule.actions&&os(this._rawModule.actions,e)};Ot.prototype.forEachMutation=function(e){this._rawModule.mutations&&os(this._rawModule.mutations,e)};Object.defineProperties(Ot.prototype,Ng);var hr=function(e){this.register([],e,!1)};hr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};hr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};hr.prototype.update=function(e){xg([],this.root,e)};hr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Ot(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&os(n.modules,function(a,c){s.register(e.concat(c),a,r)})};hr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};hr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function xg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;xg(t.concat(r),e.getChild(r),n.modules[r])}}function ST(t){return new ft(t)}var ft=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new hr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,p){return c.call(o,f,p)},this.commit=function(f,p,y){return l.call(o,f,p,y)},this.strict=s;var u=this._modules.root.state;Ta(this,u,[],this._modules.root),yu(this,u),r.forEach(function(h){return h(n)})},Eu={state:{configurable:!0}};ft.prototype.install=function(e,n){e.provide(n||Rg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&TT(e,this)};Eu.state.get=function(){return this._state.data};Eu.state.set=function(t){};ft.prototype.commit=function(e,n,r){var s=this,i=Lo(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};ft.prototype.dispatch=function(e,n){var r=this,s=Lo(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,f)})}catch{}h(f)})})}};ft.prototype.subscribe=function(e,n){return bg(e,this._subscribers,n)};ft.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return bg(r,this._actionSubscribers,n)};ft.prototype.watch=function(e,n,r){var s=this;return xr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};ft.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ft.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ta(this,this.state,e,this._modules.get(e),r.preserveState),yu(this,this.state)};ft.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=vu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Pg(this)};ft.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ft.prototype.hotUpdate=function(e){this._modules.update(e),Pg(this,!0)};ft.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ft.prototype,Eu);const CT="modulepreload",kT=function(t){return"/"+t},Cf={},Mt=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=kT(i),i in Cf)return;Cf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":CT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ar=typeof window<"u";function OT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=St(s)?s.map(t):t(s)}return n}const Ns=()=>{},St=Array.isArray,DT=/\/$/,NT=t=>t.replace(DT,"");function vc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=LT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function VT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kr(e.matched[r],n.matched[s])&&Vg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!MT(t[n],e[n]))return!1;return!0}function MT(t,e){return St(t)?Of(t,e):St(e)?Of(e,t):t===e}function Of(t,e){return St(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function LT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Js;(function(t){t.pop="pop",t.push="push"})(Js||(Js={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function FT(t){if(!t)if(Ar){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),NT(t)}const UT=/^[^#]+#/;function $T(t,e){return t.replace(UT,"#")+e}function BT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function jT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=BT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Df(t,e){return(history.state?history.state.position-e:-1)+t}const ol=new Map;function HT(t,e){ol.set(t,e)}function qT(t){const e=ol.get(t);return ol.delete(t),e}let KT=()=>location.protocol+"//"+location.host;function Mg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),kf(c,"")}return kf(n,t)+r+s}function zT(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Mg(t,location),y=n.value,v=e.value;let _=0;if(f){if(n.value=p,e.value=f,o&&o===y){o=null;return}_=v?f.position-v.position:0}else r(p);s.forEach(R=>{R(n.value,y,{delta:_,type:Js.pop,direction:_?_>0?xs.forward:xs.back:xs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(fe({},f.state,{scroll:wa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Nf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wa():null}}function WT(t){const{history:e,location:n}=window,r={value:Mg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:KT()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=fe({},e.state,Nf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:wa()});i(u.current,u,!0);const h=fe({},Nf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function GT(t){t=FT(t);const e=WT(t),n=zT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:$T.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function QT(t){return typeof t=="string"||t&&typeof t=="object"}function Lg(t){return typeof t=="string"||typeof t=="symbol"}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fg=Symbol("");var xf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xf||(xf={}));function zr(t,e){return fe(new Error,{type:t,[Fg]:!0},e)}function en(t,e){return t instanceof Error&&Fg in t&&(e==null||!!(t.type&e))}const Vf="[^/]+?",XT={sensitive:!1,strict:!1,start:!0,end:!0},JT=/[.+*?^${}()[\]/\\]/g;function YT(t,e){const n=fe({},XT,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(JT,"\\$&"),p+=40;else if(f.type===1){const{value:y,repeatable:v,optional:_,regexp:R}=f;i.push({name:y,repeatable:v,optional:_});const b=R||Vf;if(b!==Vf){p+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${y}" (${b}): `+k.message)}}let O=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(O=_&&l.length<2?`(?:/${O})`:"/"+O),_&&(O+="?"),s+=O,p+=20,_&&(p+=-8),v&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",y=i[f-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:v,optional:_}=p,R=y in l?l[y]:"";if(St(R)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const b=St(R)?R.join("/"):R;if(!b)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ZT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ew(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ZT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mf(r))return 1;if(Mf(s))return-1}return s.length-r.length}function Mf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tw={type:0,value:""},nw=/[a-zA-Z0-9_]/;function rw(t){if(!t)return[[]];if(t==="/")return[[tw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:nw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function sw(t,e,n){const r=YT(rw(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function iw(t,e){const n=[],r=new Map;e=Uf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,y=ow(u);y.aliasOf=f&&f.record;const v=Uf(e,u),_=[y];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of O)_.push(fe({},y,{components:f?f.record.components:y.components,path:k,aliasOf:f?f.record:y}))}let R,b;for(const O of _){const{path:k}=O;if(h&&k[0]!=="/"){const te=h.record.path,F=te[te.length-1]==="/"?"":"/";O.path=h.record.path+(k&&F+k)}if(R=sw(O,h,v),f?f.alias.push(R):(b=b||R,b!==R&&b.alias.push(R),p&&u.name&&!Ff(R)&&o(u.name)),y.children){const te=y.children;for(let F=0;F<te.length;F++)i(te[F],R,f&&f.children[F])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return b?()=>{o(b)}:Ns}function o(u){if(Lg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ew(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ug(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ff(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},y,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw zr(1,{location:u});v=f.record.name,p=fe(Lf(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Lf(u.params,f.keys.map(b=>b.name))),y=f.stringify(p)}else if("path"in u)y=u.path,f=n.find(b=>b.re.test(y)),f&&(p=f.parse(y),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw zr(1,{location:u,currentLocation:h});v=f.record.name,p=fe({},h.params,u.params),y=f.stringify(p)}const _=[];let R=f;for(;R;)_.unshift(R.record),R=R.parent;return{name:v,path:y,params:p,matched:_,meta:cw(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Lf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ow(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:aw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function aw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cw(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Uf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ug(t,e){return e.children.some(n=>n===t||Ug(t,n))}const $g=/#/g,lw=/&/g,uw=/\//g,hw=/=/g,fw=/\?/g,Bg=/\+/g,dw=/%5B/g,pw=/%5D/g,jg=/%5E/g,gw=/%60/g,Hg=/%7B/g,mw=/%7C/g,qg=/%7D/g,_w=/%20/g;function Iu(t){return encodeURI(""+t).replace(mw,"|").replace(dw,"[").replace(pw,"]")}function yw(t){return Iu(t).replace(Hg,"{").replace(qg,"}").replace(jg,"^")}function al(t){return Iu(t).replace(Bg,"%2B").replace(_w,"+").replace($g,"%23").replace(lw,"%26").replace(gw,"`").replace(Hg,"{").replace(qg,"}").replace(jg,"^")}function vw(t){return al(t).replace(hw,"%3D")}function Ew(t){return Iu(t).replace($g,"%23").replace(fw,"%3F")}function Iw(t){return t==null?"":Ew(t).replace(uw,"%2F")}function Fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Tw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Bg," "),o=i.indexOf("="),a=Fo(o<0?i:i.slice(0,o)),c=o<0?null:Fo(i.slice(o+1));if(a in e){let l=e[a];St(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function $f(t){let e="";for(let n in t){const r=t[n];if(n=vw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(St(r)?r.map(i=>i&&al(i)):[r&&al(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ww(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=St(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Aw=Symbol(""),Bf=Symbol(""),Tu=Symbol(""),Kg=Symbol(""),cl=Symbol("");function _s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(zr(4,{from:n,to:e})):h instanceof Error?a(h):QT(h)?a(zr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ec(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(vn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=OT(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&vn(f,n,r,i,o)()}))}}return s}function Rw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jf(t){const e=Ht(Tu),n=Ht(Kg),r=At(()=>e.resolve(Dr(t.to))),s=At(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Kr.bind(null,u));if(f>-1)return f;const p=Hf(c[l-2]);return l>1&&Hf(u)===p&&h[h.length-1].path!==p?h.findIndex(Kr.bind(null,c[l-2])):f}),i=At(()=>s.value>-1&&Cw(n.params,r.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&Vg(n.params,r.value.params));function a(c={}){return Sw(c)?e[Dr(t.replace)?"replace":"push"](Dr(t.to)).catch(Ns):Promise.resolve()}return{route:r,href:At(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const bw=du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jf,setup(t,{slots:e}){const n=vi(jf(t)),{options:r}=Ht(Tu),s=At(()=>({[qf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Pw=bw;function Sw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Cw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!St(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,kw=du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(cl),s=At(()=>t.route||r.value),i=Ht(Bf,0),o=At(()=>{let l=Dr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=At(()=>s.value.matched[o.value]);po(Bf,At(()=>o.value+1)),po(Aw,a),po(cl,s);const c=EE();return xr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Kr(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Kf(n.default,{Component:f,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,_=xo(f,fe({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Kf(n.default,{Component:_,route:l})||_}}});function Kf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ow=kw;function Dw(t){const e=iw(t.routes,t),n=t.parseQuery||Tw,r=t.stringifyQuery||$f,s=t.history,i=_s(),o=_s(),a=_s(),c=IE(mn);let l=mn;Ar&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yc.bind(null,I=>""+I),h=yc.bind(null,Iw),f=yc.bind(null,Fo);function p(I,L){let x,B;return Lg(I)?(x=e.getRecordMatcher(I),B=L):B=I,e.addRoute(B,x)}function y(I){const L=e.getRecordMatcher(I);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(I=>I.record)}function _(I){return!!e.getRecordMatcher(I)}function R(I,L){if(L=fe({},L||c.value),typeof I=="string"){const m=vc(n,I,L.path),E=e.resolve({path:m.path},L),T=s.createHref(m.fullPath);return fe(m,E,{params:f(E.params),hash:Fo(m.hash),redirectedFrom:void 0,href:T})}let x;if("path"in I)x=fe({},I,{path:vc(n,I.path,L.path).path});else{const m=fe({},I.params);for(const E in m)m[E]==null&&delete m[E];x=fe({},I,{params:h(m)}),L.params=h(L.params)}const B=e.resolve(x,L),he=I.hash||"";B.params=u(f(B.params));const d=xT(r,fe({},I,{hash:yw(he),path:B.path})),g=s.createHref(d);return fe({fullPath:d,hash:he,query:r===$f?ww(I.query):I.query||{}},B,{redirectedFrom:void 0,href:g})}function b(I){return typeof I=="string"?vc(n,I,c.value.path):fe({},I)}function O(I,L){if(l!==I)return zr(8,{from:L,to:I})}function k(I){return ae(I)}function te(I){return k(fe(b(I),{replace:!0}))}function F(I){const L=I.matched[I.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let B=typeof x=="function"?x(I):x;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=b(B):{path:B},B.params={}),fe({query:I.query,hash:I.hash,params:"path"in B?{}:I.params},B)}}function ae(I,L){const x=l=R(I),B=c.value,he=I.state,d=I.force,g=I.replace===!0,m=F(x);if(m)return ae(fe(b(m),{state:typeof m=="object"?fe({},he,m.state):he,force:d,replace:g}),L||x);const E=x;E.redirectedFrom=L;let T;return!d&&VT(r,B,x)&&(T=zr(16,{to:E,from:B}),Nt(B,B,!0,!1)),(T?Promise.resolve(T):Te(E,B)).catch(w=>en(w)?en(w,2)?w:pn(w):ue(w,E,B)).then(w=>{if(w){if(en(w,2))return ae(fe({replace:g},b(w.to),{state:typeof w.to=="object"?fe({},he,w.to.state):he,force:d}),L||E)}else w=$n(E,B,!0,g,he);return dn(E,B,w),w})}function Ae(I,L){const x=O(I,L);return x?Promise.reject(x):Promise.resolve()}function $e(I){const L=yr.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(I):I()}function Te(I,L){let x;const[B,he,d]=Nw(I,L);x=Ec(B.reverse(),"beforeRouteLeave",I,L);for(const m of B)m.leaveGuards.forEach(E=>{x.push(vn(E,I,L))});const g=Ae.bind(null,I,L);return x.push(g),Ke(x).then(()=>{x=[];for(const m of i.list())x.push(vn(m,I,L));return x.push(g),Ke(x)}).then(()=>{x=Ec(he,"beforeRouteUpdate",I,L);for(const m of he)m.updateGuards.forEach(E=>{x.push(vn(E,I,L))});return x.push(g),Ke(x)}).then(()=>{x=[];for(const m of d)if(m.beforeEnter)if(St(m.beforeEnter))for(const E of m.beforeEnter)x.push(vn(E,I,L));else x.push(vn(m.beforeEnter,I,L));return x.push(g),Ke(x)}).then(()=>(I.matched.forEach(m=>m.enterCallbacks={}),x=Ec(d,"beforeRouteEnter",I,L),x.push(g),Ke(x))).then(()=>{x=[];for(const m of o.list())x.push(vn(m,I,L));return x.push(g),Ke(x)}).catch(m=>en(m,8)?m:Promise.reject(m))}function dn(I,L,x){a.list().forEach(B=>$e(()=>B(I,L,x)))}function $n(I,L,x,B,he){const d=O(I,L);if(d)return d;const g=L===mn,m=Ar?history.state:{};x&&(B||g?s.replace(I.fullPath,fe({scroll:g&&m&&m.scroll},he)):s.push(I.fullPath,he)),c.value=I,Nt(I,L,x,g),pn()}let Dt;function ps(){Dt||(Dt=s.listen((I,L,x)=>{if(!Hi.listening)return;const B=R(I),he=F(B);if(he){ae(fe(he,{replace:!0}),B).catch(Ns);return}l=B;const d=c.value;Ar&&HT(Df(d.fullPath,x.delta),wa()),Te(B,d).catch(g=>en(g,12)?g:en(g,2)?(ae(g.to,B).then(m=>{en(m,20)&&!x.delta&&x.type===Js.pop&&s.go(-1,!1)}).catch(Ns),Promise.reject()):(x.delta&&s.go(-x.delta,!1),ue(g,B,d))).then(g=>{g=g||$n(B,d,!1),g&&(x.delta&&!en(g,8)?s.go(-x.delta,!1):x.type===Js.pop&&en(g,20)&&s.go(-1,!1)),dn(B,d,g)}).catch(Ns)}))}let mr=_s(),Ve=_s(),ge;function ue(I,L,x){pn(I);const B=Ve.list();return B.length?B.forEach(he=>he(I,L,x)):console.error(I),Promise.reject(I)}function Zt(){return ge&&c.value!==mn?Promise.resolve():new Promise((I,L)=>{mr.add([I,L])})}function pn(I){return ge||(ge=!I,ps(),mr.list().forEach(([L,x])=>I?x(I):L()),mr.reset()),I}function Nt(I,L,x,B){const{scrollBehavior:he}=t;if(!Ar||!he)return Promise.resolve();const d=!x&&qT(Df(I.fullPath,0))||(B||!x)&&history.state&&history.state.scroll||null;return tg().then(()=>he(I,L,d)).then(g=>g&&jT(g)).catch(g=>ue(g,I,L))}const at=I=>s.go(I);let _r;const yr=new Set,Hi={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:_,getRoutes:v,resolve:R,options:t,push:k,replace:te,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ve.add,isReady:Zt,install(I){const L=this;I.component("RouterLink",Pw),I.component("RouterView",Ow),I.config.globalProperties.$router=L,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Dr(c)}),Ar&&!_r&&c.value===mn&&(_r=!0,k(s.location).catch(he=>{}));const x={};for(const he in mn)Object.defineProperty(x,he,{get:()=>c.value[he],enumerable:!0});I.provide(Tu,L),I.provide(Kg,zp(x)),I.provide(cl,c);const B=I.unmount;yr.add(I),I.unmount=function(){yr.delete(I),yr.size<1&&(l=mn,Dt&&Dt(),Dt=null,c.value=mn,_r=!1,ge=!1),B()}}};function Ke(I){return I.reduce((L,x)=>L.then(()=>$e(x)),Promise.resolve())}return Hi}function Nw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Kr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Kr(l,c))||s.push(c))}return[n,r,s]}const Vs=/^[a-z0-9]+(-[a-z0-9]+)*$/,Aa=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),c=s.pop(),l={provider:s.length>0?s[0]:r,prefix:c,name:a};return e&&!_o(l)?null:l}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!_o(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!_o(a,n)?null:a}return null},_o=(t,e)=>t?!!((t.provider===""||t.provider.match(Vs))&&(e&&t.prefix===""||t.prefix.match(Vs))&&t.name.match(Vs)):!1,zg=Object.freeze({left:0,top:0,width:16,height:16}),Uo=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Ra=Object.freeze({...zg,...Uo}),ll=Object.freeze({...Ra,body:"",hidden:!1});function xw(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function zf(t,e){const n=xw(t,e);for(const r in ll)r in Uo?r in t&&!(r in n)&&(n[r]=Uo[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function Vw(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,c=a&&i(a);c&&(s[o]=[a].concat(c))}return s[o]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),s}function Mw(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=zf(r[a]||s[a],i)}return o(e),n.forEach(o),zf(t,i)}function Wg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=Vw(t);for(const s in r){const i=r[s];i&&(e(s,Mw(t,s,i)),n.push(s))}return n}const Lw={provider:"",aliases:{},not_found:{},...zg};function Ic(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Gg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Ic(t,Lw))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s.match(Vs)||typeof i.body!="string"||!Ic(i,ll))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s.match(Vs)||typeof o!="string"||!n[o]&&!r[o]||!Ic(i,ll))return null}return e}const Wf=Object.create(null);function Fw(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function rr(t,e){const n=Wf[t]||(Wf[t]=Object.create(null));return n[e]||(n[e]=Fw(t,e))}function wu(t,e){return Gg(e)?Wg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Uw(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Ys=!1;function Qg(t){return typeof t=="boolean"&&(Ys=t),Ys}function $w(t){const e=typeof t=="string"?Aa(t,!0,Ys):t;if(e){const n=rr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Bw(t,e){const n=Aa(t,!0,Ys);if(!n)return!1;const r=rr(n.provider,n.prefix);return Uw(r,n.name,e)}function jw(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Ys&&!e&&!t.prefix){let s=!1;return Gg(t)&&(t.prefix="",Wg(t,(i,o)=>{o&&Bw(i,o)&&(s=!0)})),s}const n=t.prefix;if(!_o({provider:e,prefix:n,name:"a"}))return!1;const r=rr(e,n);return!!wu(r,t)}const Xg=Object.freeze({width:null,height:null}),Jg=Object.freeze({...Xg,...Uo}),Hw=/(-?[0-9.]*[0-9]+[0-9.]*)/g,qw=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Gf(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Hw);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=qw.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}const Kw=t=>t==="unset"||t==="undefined"||t==="none";function zw(t,e){const n={...Ra,...t},r={...Jg,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(y=>{const v=[],_=y.hFlip,R=y.vFlip;let b=y.rotate;_?R?b+=2:(v.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),v.push("scale(-1 1)"),s.top=s.left=0):R&&(v.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),v.push("scale(1 -1)"),s.top=s.left=0);let O;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:O=s.height/2+s.top,v.unshift("rotate(90 "+O.toString()+" "+O.toString()+")");break;case 2:v.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:O=s.width/2+s.left,v.unshift("rotate(-90 "+O.toString()+" "+O.toString()+")");break}b%2===1&&(s.left!==s.top&&(O=s.left,s.left=s.top,s.top=O),s.width!==s.height&&(O=s.width,s.width=s.height,s.height=O)),v.length&&(i='<g transform="'+v.join(" ")+'">'+i+"</g>")});const o=r.width,a=r.height,c=s.width,l=s.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?l:a,u=Gf(h,c/l)):(u=o==="auto"?c:o,h=a===null?Gf(u,l/c):a==="auto"?l:a);const f={},p=(y,v)=>{Kw(v)||(f[y]=v.toString())};return p("width",u),p("height",h),f.viewBox=s.left.toString()+" "+s.top.toString()+" "+c.toString()+" "+l.toString(),{attributes:f,body:i}}const Ww=/\sid="(\S+)"/g,Gw="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Qw=0;function Xw(t,e=Gw){const n=[];let r;for(;r=Ww.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(Qw++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const ul=Object.create(null);function Jw(t,e){ul[t]=e}function hl(t){return ul[t]||ul[""]}function Au(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Ru=Object.create(null),ys=["https://api.simplesvg.com","https://api.unisvg.com"],yo=[];for(;ys.length>0;)ys.length===1||Math.random()>.5?yo.push(ys.shift()):yo.push(ys.pop());Ru[""]=Au({resources:["https://api.iconify.design"].concat(yo)});function Yw(t,e){const n=Au(e);return n===null?!1:(Ru[t]=n,!0)}function bu(t){return Ru[t]}const Zw=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Qf=Zw();function e0(t,e){const n=bu(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function t0(t){return t===404}const n0=(t,e,n)=>{const r=[],s=e0(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,l)=>{a+=c.length+1,a>=s&&l>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),r.push(o),r};function r0(t){if(typeof t=="string"){const e=bu(t);if(e)return e.path}return"/"}const s0=(t,e,n)=>{if(!Qf){n("abort",424);return}let r=r0(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Qf(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(t0(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},i0={prepare:n0,send:s0};function o0(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,c=n[i]||(n[i]=Object.create(null)),l=c[o]||(c[o]=rr(i,o));let u;a in l.icons?u=e.loaded:o===""||l.missing.has(a)?u=e.missing:u=e.pending;const h={provider:i,prefix:o,name:a};u.push(h)}),e}function Yg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function a0(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const l=c.name;if(t.icons[l])o.loaded.push({provider:r,prefix:s,name:l});else if(t.missing.has(l))o.missing.push({provider:r,prefix:s,name:l});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Yg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let c0=0;function l0(t,e,n){const r=c0++,s=Yg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function u0(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Aa(s,e,n):s;i&&r.push(i)}),r}var h0={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function f0(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let F=t.resources.slice(0);for(o=[];F.length>1;){const ae=Math.floor(Math.random()*F.length);o.push(F[ae]),F=F.slice(0,ae).concat(F.slice(ae+1))}o=o.concat(F)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",l=0,u,h=null,f=[],p=[];typeof r=="function"&&p.push(r);function y(){h&&(clearTimeout(h),h=null)}function v(){c==="pending"&&(c="aborted"),y(),f.forEach(F=>{F.status==="pending"&&(F.status="aborted")}),f=[]}function _(F,ae){ae&&(p=[]),typeof F=="function"&&p.push(F)}function R(){return{startTime:a,payload:e,status:c,queriesSent:l,queriesPending:f.length,subscribe:_,abort:v}}function b(){c="failed",p.forEach(F=>{F(void 0,u)})}function O(){f.forEach(F=>{F.status==="pending"&&(F.status="aborted")}),f=[]}function k(F,ae,Ae){const $e=ae!=="success";switch(f=f.filter(Te=>Te!==F),c){case"pending":break;case"failed":if($e||!t.dataAfterTimeout)return;break;default:return}if(ae==="abort"){u=Ae,b();return}if($e){u=Ae,f.length||(o.length?te():b());return}if(y(),O(),!t.random){const Te=t.resources.indexOf(F.resource);Te!==-1&&Te!==t.index&&(t.index=Te)}c="completed",p.forEach(Te=>{Te(Ae)})}function te(){if(c!=="pending")return;y();const F=o.shift();if(F===void 0){if(f.length){h=setTimeout(()=>{y(),c==="pending"&&(O(),b())},t.timeout);return}b();return}const ae={status:"pending",resource:F,callback:(Ae,$e)=>{k(ae,Ae,$e)}};f.push(ae),l++,h=setTimeout(te,t.rotate),n(F,e,ae.callback)}return setTimeout(te),R}function Zg(t){const e={...h0,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,c,l){const u=f0(e,a,c,(h,f)=>{r(),l&&l(h,f)});return n.push(u),u}function i(a){return n.find(c=>a(c))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function Xf(){}const Tc=Object.create(null);function d0(t){if(!Tc[t]){const e=bu(t);if(!e)return;const n=Zg(e),r={config:e,redundancy:n};Tc[t]=r}return Tc[t]}function p0(t,e,n){let r,s;if(typeof t=="string"){const i=hl(t);if(!i)return n(void 0,424),Xf;s=i.send;const o=d0(t);o&&(r=o.redundancy)}else{const i=Au(t);if(i){r=Zg(i);const o=t.resources?t.resources[0]:"",a=hl(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Xf):r.query(e,s,n)().abort}const Jf="iconify2",Zs="iconify",em=Zs+"-count",Yf=Zs+"-version",tm=36e5,g0=168;function fl(t,e){try{return t.getItem(e)}catch{}}function Pu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Zf(t,e){try{t.removeItem(e)}catch{}}function dl(t,e){return Pu(t,em,e.toString())}function pl(t){return parseInt(fl(t,em))||0}const ba={local:!0,session:!0},nm={local:new Set,session:new Set};let Su=!1;function m0(t){Su=t}let Xi=typeof window>"u"?{}:window;function rm(t){const e=t+"Storage";try{if(Xi&&Xi[e]&&typeof Xi[e].length=="number")return Xi[e]}catch{}ba[t]=!1}function sm(t,e){const n=rm(t);if(!n)return;const r=fl(n,Yf);if(r!==Jf){if(r){const a=pl(n);for(let c=0;c<a;c++)Zf(n,Zs+c.toString())}Pu(n,Yf,Jf),dl(n,0);return}const s=Math.floor(Date.now()/tm)-g0,i=a=>{const c=Zs+a.toString(),l=fl(n,c);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>s&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}Zf(n,c)}};let o=pl(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,dl(n,o)):nm[t].add(a))}function im(){if(!Su){m0(!0);for(const t in ba)sm(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=rr(r,s);if(!wu(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function _0(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in ba)sm(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function y0(t,e){Su||im();function n(r){let s;if(!ba[r]||!(s=rm(r)))return;const i=nm[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=pl(s),!dl(s,o+1))return;const a={cached:Math.floor(Date.now()/tm),provider:t.provider,data:e};return Pu(s,Zs+o.toString(),JSON.stringify(a))}e.lastModified&&!_0(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function ed(){}function v0(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,a0(t)}))}function E0(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;delete t.iconsToLoad;let i;if(!s||!(i=hl(n)))return;i.prepare(n,r,s).forEach(a=>{p0(n,a,c=>{if(typeof c!="object")a.icons.forEach(l=>{t.missing.add(l)});else try{const l=wu(t,c);if(!l.length)return;const u=t.pendingIcons;u&&l.forEach(h=>{u.delete(h)}),y0(t,c)}catch(l){console.error(l)}v0(t)})})}))}const I0=(t,e)=>{const n=u0(t,!0,Qg()),r=o0(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,ed)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(c=>{const{provider:l,prefix:u}=c;if(u===a&&l===o)return;o=l,a=u,i.push(rr(l,u));const h=s[l]||(s[l]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(c=>{const{provider:l,prefix:u,name:h}=c,f=rr(l,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(h)||(p.add(h),s[l][u].push(h))}),i.forEach(c=>{const{provider:l,prefix:u}=c;s[l][u].length&&E0(c,s[l][u])}),e?l0(e,r,i):ed};function T0(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Xg?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const w0=/[\s,]+/;function A0(t,e){e.split(w0).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function R0(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function b0(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function P0(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function S0(t){return"data:image/svg+xml,"+P0(t)}function C0(t){return'url("'+S0(t)+'")'}const td={...Jg,inline:!1},k0={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},O0={display:"inline-block"},gl={backgroundColor:"currentColor"},om={backgroundColor:"transparent"},nd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},rd={webkitMask:gl,mask:gl,background:om};for(const t in rd){const e=rd[t];for(const n in nd)e[t+n]=nd[n]}const vo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";vo[t+"-flip"]=e,vo[t.slice(0,1)+"-flip"]=e,vo[t+"Flip"]=e});function sd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const id=(t,e)=>{const n=T0(td,e),r={...k0},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let v in e){const _=e[v];if(_!==void 0)switch(v){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[v]=_===!0||_==="true"||_===1;break;case"flip":typeof _=="string"&&A0(n,_);break;case"color":i.color=_;break;case"rotate":typeof _=="string"?n[v]=R0(_):typeof _=="number"&&(n[v]=_);break;case"ariaHidden":case"aria-hidden":_!==!0&&_!=="true"&&delete r["aria-hidden"];break;default:{const R=vo[v];R?(_===!0||_==="true"||_===1)&&(n[R]=!0):td[v]===void 0&&(r[v]=_)}}}const c=zw(t,n),l=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,l);let v=0,_=e.id;return typeof _=="string"&&(_=_.replace(/-/g,"_")),r.innerHTML=Xw(c.body,_?()=>_+"ID"+v++:"iconifyVue"),xo("svg",r)}const{body:u,width:h,height:f}=t,p=s==="mask"||(s==="bg"?!1:u.indexOf("currentColor")!==-1),y=b0(u,{...l,width:h+"",height:f+""});return r.style={...i,"--svg":C0(y),width:sd(l.width),height:sd(l.height),...O0,...p?gl:om,...a},xo("span",r)};Qg(!0);Jw("",i0);if(typeof document<"u"&&typeof window<"u"){im();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!jw(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;Yw(n,s)||console.error(r)}catch{console.error(r)}}}}const D0={...Ra,body:""},am=du({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Aa(t,!1,!0))===null)return this.abortLoading(),null;const r=$w(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:I0([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return id(D0,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),id({...Ra,...e.data},n)}});const Pa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},N0={components:{Icon:am}},x0=t=>(hu("data-v-394c49cd"),t=t(),fu(),t),V0={class:"navbar navbar-expand-lg bg-black"},M0={class:"container"},L0={class:"navbar-brand",href:"#"},F0={class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"},U0={class:"collapse navbar-collapse",id:"navbarSupportedContent"},$0={class:"navbar-nav ms-auto mb-2 mb-lg-0"},B0={class:"nav-item"},j0={class:"nav-link active","aria-current":"page",href:"#"},H0={class:"nav-item"},q0={class:"nav-link",href:"#"},K0={class:"nav-item mx-3"},z0={class:"nav-link",href:"#"},W0={class:"nav-item"},G0={class:"nav-link",href:"#"},Q0={class:"nav-item"},X0={class:"nav-link",href:"#"},J0={type:"button",class:"btn learn-more mx-3"},Y0={class:"offcanvas bg-dark offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},Z0=x0(()=>D("div",{class:"offcanvas-header"},[D("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"COESA"),D("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),eA={class:"offcanvas-body"},tA={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},nA={class:"nav-item"},rA={class:"nav-link active","aria-current":"page",href:"#"},sA={class:"nav-item"},iA={class:"nav-link",href:"#"},oA={class:"nav-item"},aA={class:"nav-link",href:"#"},cA={class:"nav-item"},lA={class:"nav-link",href:"#"},uA={class:"nav-item"},hA={class:"nav-link",href:"#"},fA={type:"button",class:"btn learn-more"};function dA(t,e,n,r,s,i){const o=Yn("RouterLink"),a=Yn("Icon");return Vr(),Ds(Tt,null,[D("nav",V0,[D("div",M0,[D("a",L0,[Y(o,{to:"/",class:"route"},{default:lt(()=>[We("COESA-EKSU")]),_:1})]),D("button",F0,[Y(a,{icon:"material-symbols:menu",color:"white",width:"30"})]),D("div",U0,[D("ul",$0,[D("li",B0,[D("a",j0,[Y(o,{to:"/",class:"route"},{default:lt(()=>[We("Dashboard")]),_:1})])]),D("li",H0,[D("a",q0,[Y(o,{to:"/all-events",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Events")]),_:1})])]),D("li",K0,[D("a",z0,[Y(o,{to:"/all-course",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Courses")]),_:1})])]),D("li",W0,[D("a",G0,[Y(o,{to:"/edit/front-end",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Front-End")]),_:1})])]),D("li",Q0,[D("a",X0,[Y(a,{icon:"ion:settings-outline",color:"white"})])])]),D("form",null,[D("button",J0,[Y(a,{icon:"ic:sharp-logout",color:"white"})])])])])]),D("div",Y0,[Z0,D("div",eA,[D("ul",tA,[D("li",nA,[D("a",rA,[Y(o,{to:"/",class:"route"},{default:lt(()=>[We("Dashboard")]),_:1})])]),D("li",sA,[D("a",iA,[Y(o,{to:"/all-events",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Events")]),_:1})])]),D("li",oA,[D("a",aA,[Y(o,{to:"/all-course",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Courses")]),_:1})])]),D("li",cA,[D("a",lA,[Y(o,{to:"/edit/front-end",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Front-End")]),_:1})])]),D("li",uA,[D("a",hA,[Y(a,{icon:"ion:settings-outline",color:"white"})])])]),D("form",null,[D("button",fA,[Y(a,{icon:"ic:sharp-logout",color:"white"})])])])])],64)}const pA=Pa(N0,[["render",dA],["__scopeId","data-v-394c49cd"]]);/**
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
 */const cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new mA;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _A=function(t){const e=cm(t);return lm.encodeByteArray(e,!0)},$o=function(t){return _A(t).replace(/\./g,"")},um=function(t){try{return lm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vA=()=>yA().__FIREBASE_DEFAULTS__,EA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&um(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return vA()||EA()||IA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hm=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fm=t=>{const e=hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dm=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config},pm=t=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class TA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$o(JSON.stringify(n)),$o(JSON.stringify(o)),a].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function AA(){var t;const e=(t=Sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PA(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SA(){try{return typeof indexedDB=="object"}catch{return!1}}function CA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const kA="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kA,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yt(s,a,r)}}function OA(t,e){return t.replace(DA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DA=/\{\$([^}]+)}/g;function NA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(od(i)&&od(o)){if(!Bo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function od(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xA(t,e){const n=new VA(t,e);return n.subscribe.bind(n)}class VA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wc),s.error===void 0&&(s.error=wc),s.complete===void 0&&(s.complete=wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wc(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class LA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UA(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FA(t){return t===Hn?void 0:t}function UA(t){return t.instantiationMode==="EAGER"}/**
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
 */class $A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const BA={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},jA=oe.INFO,HA={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},qA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=jA,this._logHandler=qA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const KA=(t,e)=>e.some(n=>t instanceof n);let ad,cd;function zA(){return ad||(ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WA(){return cd||(cd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mm=new WeakMap,ml=new WeakMap,_m=new WeakMap,Ac=new WeakMap,ku=new WeakMap;function GA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mm.set(n,t)}).catch(()=>{}),ku.set(e,t),e}function QA(t){if(ml.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ml.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ml.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_m.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XA(t){_l=t(_l)}function JA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return _m.set(r,e.sort?e.sort():[e]),Sn(r)}:WA().includes(t)?function(...e){return t.apply(Rc(this),e),Sn(mm.get(this))}:function(...e){return Sn(t.apply(Rc(this),e))}}function YA(t){return typeof t=="function"?JA(t):(t instanceof IDBTransaction&&QA(t),KA(t,zA())?new Proxy(t,_l):t)}function Sn(t){if(t instanceof IDBRequest)return GA(t);if(Ac.has(t))return Ac.get(t);const e=YA(t);return e!==t&&(Ac.set(t,e),ku.set(e,t)),e}const Rc=t=>ku.get(t);function ZA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Sn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],bc=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return bc.set(e,i),i}XA(t=>({...t,get:(e,n,r)=>ld(e,n)||t.get(e,n,r),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));/**
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
 */class nR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yl="@firebase/app",ud="0.9.15";/**
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
 */const sr=new Cu("@firebase/app"),sR="@firebase/app-compat",iR="@firebase/analytics-compat",oR="@firebase/analytics",aR="@firebase/app-check-compat",cR="@firebase/app-check",lR="@firebase/auth",uR="@firebase/auth-compat",hR="@firebase/database",fR="@firebase/database-compat",dR="@firebase/functions",pR="@firebase/functions-compat",gR="@firebase/installations",mR="@firebase/installations-compat",_R="@firebase/messaging",yR="@firebase/messaging-compat",vR="@firebase/performance",ER="@firebase/performance-compat",IR="@firebase/remote-config",TR="@firebase/remote-config-compat",wR="@firebase/storage",AR="@firebase/storage-compat",RR="@firebase/firestore",bR="@firebase/firestore-compat",PR="firebase",SR="10.1.0";/**
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
 */const vl="[DEFAULT]",CR={[yl]:"fire-core",[sR]:"fire-core-compat",[oR]:"fire-analytics",[iR]:"fire-analytics-compat",[cR]:"fire-app-check",[aR]:"fire-app-check-compat",[lR]:"fire-auth",[uR]:"fire-auth-compat",[hR]:"fire-rtdb",[fR]:"fire-rtdb-compat",[dR]:"fire-fn",[pR]:"fire-fn-compat",[gR]:"fire-iid",[mR]:"fire-iid-compat",[_R]:"fire-fcm",[yR]:"fire-fcm-compat",[vR]:"fire-perf",[ER]:"fire-perf-compat",[IR]:"fire-rc",[TR]:"fire-rc-compat",[wR]:"fire-gcs",[AR]:"fire-gcs-compat",[RR]:"fire-fst",[bR]:"fire-fst-compat","fire-js":"fire-js",[PR]:"fire-js-all"};/**
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
 */const jo=new Map,El=new Map;function kR(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(El.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,t);for(const n of jo.values())kR(n,t);return!0}function Ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const OR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new Ei("app","Firebase",OR);/**
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
 */class DR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const fr=SR;function ym(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(n||(n=dm()),!n)throw Cn.create("no-options");const i=jo.get(s);if(i){if(Bo(n,i.options)&&Bo(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const o=new $A(s);for(const c of El.values())o.addComponent(c);const a=new DR(n,r,o);return jo.set(s,a),a}function Ou(t=vl){const e=jo.get(t);if(!e&&t===vl&&dm())return ym();if(!e)throw Cn.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=CR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}ir(new Nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const NR="firebase-heartbeat-database",xR=1,ei="firebase-heartbeat-store";let Pc=null;function vm(){return Pc||(Pc=ZA(NR,xR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function VR(t){try{return await(await vm()).transaction(ei).objectStore(ei).get(Em(t))}catch(e){if(e instanceof Yt)sr.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function hd(t,e){try{const r=(await vm()).transaction(ei,"readwrite");await r.objectStore(ei).put(e,Em(t)),await r.done}catch(n){if(n instanceof Yt)sr.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function Em(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MR=1024,LR=30*24*60*60*1e3;class FR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $R(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=LR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fd(),{heartbeatsToSend:n,unsentEntries:r}=UR(this._heartbeatsCache.heartbeats),s=$o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fd(){return new Date().toISOString().substring(0,10)}function UR(t,e=MR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SA()?CA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dd(t){return $o(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BR(t){ir(new Nn("platform-logger",e=>new nR(e),"PRIVATE")),ir(new Nn("heartbeat",e=>new FR(e),"PRIVATE")),qt(yl,ud,t),qt(yl,ud,"esm2017"),qt("fire-js","")}BR("");var jR="firebase",HR="10.1.0";/**
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
 */qt(jR,HR,"app");function Du(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Im(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qR=Im,Tm=new Ei("auth","Firebase",Im());/**
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
 */const Ho=new Cu("@firebase/auth");function KR(t,...e){Ho.logLevel<=oe.WARN&&Ho.warn(`Auth (${fr}): ${t}`,...e)}function Eo(t,...e){Ho.logLevel<=oe.ERROR&&Ho.error(`Auth (${fr}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw Nu(t,...e)}function Kt(t,...e){return Nu(t,...e)}function zR(t,e,n){const r=Object.assign(Object.assign({},qR()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function Nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tm.create(t,...e)}function W(t,e,...n){if(!t)throw Nu(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function an(t,e){t||nn(e)}/**
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
 */function Il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WR(){return pd()==="http:"||pd()==="https:"}function pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WR()||RA()||"connection"in navigator)?navigator.onLine:!0}function QR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=wA()||bA()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class wm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JR=new Ti(3e4,6e4);function wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function as(t,e,n,r,s={}){return Am(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wm.fetch()(Rm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Am(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XR),e);try{const s=new YR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ji(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ji(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ji(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw zR(t,u,l);Ct(t,u)}}catch(s){if(s instanceof Yt)throw s;Ct(t,"network-request-failed",{message:String(s)})}}async function ka(t,e,n,r,s={}){const i=await as(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xu(t.config,s):`${t.config.apiScheme}://${s}`}class YR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),JR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ji(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function ZR(t,e){return as(t,"POST","/v1/accounts:delete",e)}async function eb(t,e){return as(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tb(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),s=Vu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ms(Sc(s.auth_time)),issuedAtTime:Ms(Sc(s.iat)),expirationTime:Ms(Sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Vu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=um(n);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nb(t){const e=Vu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&rb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ti(t,eb(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ab(i.providerUserInfo):[],a=ob(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ib(t){const e=Oe(t);await qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ob(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ab(t){return t.map(e=>{var{providerId:n}=e,r=Du(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cb(t,e){const n=await Am(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ni;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
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
 */function _n(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tb(this,e)}reload(){return ib(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ti(this,ZR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:k,isAnonymous:te,providerData:F,stsTokenManager:ae}=n;W(O&&ae,e,"internal-error");const Ae=ni.fromJSON(this.name,ae);W(typeof O=="string",e,"internal-error"),_n(h,e.name),_n(f,e.name),W(typeof k=="boolean",e,"internal-error"),W(typeof te=="boolean",e,"internal-error"),_n(p,e.name),_n(y,e.name),_n(v,e.name),_n(_,e.name),_n(R,e.name),_n(b,e.name);const $e=new er({uid:O,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:te,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:Ae,createdAt:R,lastLoginAt:b});return F&&Array.isArray(F)&&($e.providerData=F.map(Te=>Object.assign({},Te))),_&&($e._redirectEventId=_),$e}static async _fromIdTokenResponse(e,n,r=!1){const s=new ni;s.updateFromServerResponse(n);const i=new er({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qo(i),i}}/**
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
 */const gd=new Map;function rn(t){an(t instanceof Function,"Expected a class definition");let e=gd.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gd.set(t,e),e)}/**
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
 */class Pm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pm.type="NONE";const md=Pm;/**
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
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mr(rn(md),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rn(md);const o=Io(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=er._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Mr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Mr(i,e,r))}}/**
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
 */function _d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Nm(e))return"Webos";if(Mu(e))return"Safari";if((e.includes("chrome/")||Cm(e))&&!e.includes("edge/"))return"Chrome";if(Om(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sm(t=nt()){return/firefox\//i.test(t)}function Mu(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cm(t=nt()){return/crios\//i.test(t)}function km(t=nt()){return/iemobile/i.test(t)}function Om(t=nt()){return/android/i.test(t)}function Dm(t=nt()){return/blackberry/i.test(t)}function Nm(t=nt()){return/webos/i.test(t)}function Oa(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lb(t=nt()){var e;return Oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ub(){return PA()&&document.documentMode===10}function xm(t=nt()){return Oa(t)||Om(t)||Nm(t)||Dm(t)||/windows phone/i.test(t)||km(t)}function hb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vm(t,e=[]){let n;switch(t){case"Browser":n=_d(nt());break;case"Worker":n=`${_d(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${r}`}async function Mm(t,e){return as(t,"GET","/v2/recaptchaConfig",wi(t,e))}function yd(t){return t!==void 0&&t.enterprise!==void 0}class Lm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function fb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Fm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fb().appendChild(r)})}function db(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pb="https://www.google.com/recaptcha/enterprise.js?render=",gb="recaptcha-enterprise",mb="NO_RECAPTCHA";class Um{constructor(e){this.type=gb,this.auth=Ai(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Mm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Lm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(mb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&yd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Fm(pb+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function vd(t,e,n,r=!1){const s=new Um(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class _b{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class yb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ed(this),this.idTokenSubscription=new Ed(this),this.beforeStateQueue=new _b(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}async initializeRecaptchaConfig(){const e=await Mm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Lm(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Um(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Mr.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ai(t){return Oe(t)}class Ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=xA(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function vb(t,e){const n=Ca(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Bo(i,e??{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function Eb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ib(t,e,n){const r=Ai(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=$m(e),{host:o,port:a}=Tb(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||wb()}function $m(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tb(t){const e=$m(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Id(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Id(o)}}}function Id(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function Ab(t,e){return as(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Cc(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",wi(t,e))}/**
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
 */async function Rb(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}async function bb(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}/**
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
 */class ri extends Lu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await vd(e,r,"signInWithPassword");return Cc(e,s)}else return Cc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await vd(e,r,"signInWithPassword");return Cc(e,i)}else return Promise.reject(s)});case"emailLink":return Rb(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ab(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bb(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Lr(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",wi(t,e))}/**
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
 */const Pb="http://localhost";class or extends Lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Du(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:Pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */function Sb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cb(t){const e=As(Rs(t)).link,n=e?As(Rs(e)).deep_link_id:null,r=As(Rs(t)).deep_link_id;return(r?As(Rs(r)).link:null)||r||n||e||t}class Fu{constructor(e){var n,r,s,i,o,a;const c=As(Rs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Sb((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Cb(e);try{return new Fu(n)}catch{return null}}}/**
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
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fu.parseLink(n);return W(r,"argument-error"),ri._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ri extends Bm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class En extends Ri{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
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
 */class In extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class Tn extends Ri{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class wn extends Ri{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await er._fromIdTokenResponse(e,r,s),o=Td(r);return new Wr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Td(r);return new Wr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ko extends Yt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ko(e,n,r,s)}}function jm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,i,e,r):i})}async function kb(t,e,n=!1){const r=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
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
 */async function Ob(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ti(t,jm(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Vu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Wr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),i}}/**
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
 */async function Hm(t,e,n=!1){const r="signIn",s=await jm(t,r,e),i=await Wr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Db(t,e){return Hm(Ai(t),e)}function Nb(t,e,n){return Db(Oe(t),cs.credential(e,n))}function xb(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function Vb(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function Mb(t){return Oe(t).signOut()}const zo="__sak";/**
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
 */class qm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Lb(){const t=nt();return Mu(t)||Oa(t)}const Fb=1e3,Ub=10;class Km extends qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lb()&&hb(),this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ub()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ub):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Km.type="LOCAL";const $b=Km;/**
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
 */class zm extends qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zm.type="SESSION";const Wm=zm;/**
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
 */function Bb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Bb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
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
 */class jb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Uu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zt(){return window}function Hb(t){zt().location.href=t}/**
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
 */function Gm(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function qb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zb(){return Gm()?self:null}/**
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
 */const Qm="firebaseLocalStorageDb",Wb=1,Wo="firebaseLocalStorage",Xm="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function Gb(){const t=indexedDB.deleteDatabase(Qm);return new bi(t).toPromise()}function Tl(){const t=indexedDB.open(Qm,Wb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wo,{keyPath:Xm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await Gb(),e(await Tl()))})})}async function wd(t,e,n){const r=Na(t,!0).put({[Xm]:e,value:n});return new bi(r).toPromise()}async function Qb(t,e){const n=Na(t,!1).get(e),r=await new bi(n).toPromise();return r===void 0?null:r.value}function Ad(t,e){const n=Na(t,!0).delete(e);return new bi(n).toPromise()}const Xb=800,Jb=3;class Jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(zb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qb(),!this.activeServiceWorker)return;this.sender=new jb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tl();return await wd(e,zo,"1"),await Ad(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Na(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jm.type="LOCAL";const Yb=Jm;new Ti(3e4,6e4);/**
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
 */function Zb(t,e){return e?rn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $u extends Lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eP(t){return Hm(t.auth,new $u(t),t.bypassAuthState)}function tP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),Ob(n,new $u(t),t.bypassAuthState)}async function nP(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),kb(n,new $u(t),t.bypassAuthState)}/**
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
 */class Ym{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eP;case"linkViaPopup":case"linkViaRedirect":return nP;case"reauthViaPopup":case"reauthViaRedirect":return tP;default:Ct(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rP=new Ti(2e3,1e4);class Pr extends Ym{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rP.get())};e()}}Pr.currentPopupAction=null;/**
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
 */const sP="pendingRedirect",To=new Map;class iP extends Ym{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const r=await oP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oP(t,e){const n=lP(e),r=cP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aP(t,e){To.set(t._key(),e)}function cP(t){return rn(t._redirectPersistence)}function lP(t){return Io(sP,t.config.apiKey,t.name)}async function uP(t,e,n=!1){const r=Ai(t),s=Zb(r,e),o=await new iP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hP=10*60*1e3;class fP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rd(e))}saveEventToCache(e){this.cachedEventUids.add(Rd(e)),this.lastProcessedEventTime=Date.now()}}function Rd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zm(t);default:return!1}}/**
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
 */async function pP(t,e={}){return as(t,"GET","/v1/projects",e)}/**
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
 */const gP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mP=/^https?/;async function _P(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pP(t);for(const n of e)try{if(yP(n))return}catch{}Ct(t,"unauthorized-domain")}function yP(t){const e=Il(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mP.test(n))return!1;if(gP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vP=new Ti(3e4,6e4);function bd(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EP(t){return new Promise((e,n)=>{var r,s,i;function o(){bd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bd(),n(Kt(t,"network-request-failed"))},timeout:vP.get()})}if(!((s=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=zt().gapi)===null||i===void 0)&&i.load)o();else{const a=db("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},Fm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw wo=null,e})}let wo=null;function IP(t){return wo=wo||EP(t),wo}/**
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
 */const TP=new Ti(5e3,15e3),wP="__/auth/iframe",AP="emulator/auth/iframe",RP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PP(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xu(e,AP):`https://${t.config.authDomain}/${wP}`,r={apiKey:e.apiKey,appName:t.name,v:fr},s=bP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ii(r).slice(1)}`}async function SP(t){const e=await IP(t),n=zt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:PP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},TP.get());function c(){zt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const CP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kP=500,OP=600,DP="_blank",NP="http://localhost";class Pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xP(t,e,n,r=kP,s=OP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},CP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=nt().toLowerCase();n&&(a=Cm(l)?DP:n),Sm(l)&&(e=e||NP,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(lb(l)&&a!=="_self")return VP(e||"",a),new Pd(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Pd(h)}function VP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MP="__/auth/handler",LP="emulator/auth/handler",FP=encodeURIComponent("fac");async function Sd(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fr,eventId:s};if(e instanceof Bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ri){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${FP}=${encodeURIComponent(c)}`:"";return`${UP(t)}?${Ii(a).slice(1)}${l}`}function UP({config:t}){return t.emulator?xu(t,LP):`https://${t.authDomain}/${MP}`}/**
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
 */const kc="webStorageSupport";class $P{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wm,this._completeRedirectFn=uP,this._overrideRedirectResult=aP}async _openPopup(e,n,r,s){var i;an((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sd(e,n,r,Il(),s);return xP(e,o,Uu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sd(e,n,r,Il(),s);return Hb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(an(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SP(e),r=new fP(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kc,{type:kc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[kc];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_P(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xm()||Mu()||Oa()}}const BP=$P;var Cd="@firebase/auth",kd="1.1.0";/**
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
 */class jP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qP(t){ir(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(t)},l=new yb(r,s,i,c);return Eb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Nn("auth-internal",e=>{const n=Ai(e.getProvider("auth").getImmediate());return(r=>new jP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(Cd,kd,HP(t)),qt(Cd,kd,"esm2017")}/**
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
 */const KP=5*60,zP=pm("authIdTokenMaxAge")||KP;let Od=null;const WP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zP)return;const s=n==null?void 0:n.token;Od!==s&&(Od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function GP(t=Ou()){const e=Ca(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vb(t,{popupRedirectResolver:BP,persistence:[Yb,$b,Wm]}),r=pm("authTokenSyncURL");if(r){const i=WP(r);Vb(n,i,()=>i(n.currentUser)),xb(n,o=>i(o))}const s=hm("auth");return s&&Ib(n,`http://${s}`),n}qP("Browser");var QP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Bu=Bu||{},Q=QP||self;function xa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XP(t){return Object.prototype.hasOwnProperty.call(t,Oc)&&t[Oc]||(t[Oc]=++JP)}var Oc="closure_uid_"+(1e9*Math.random()>>>0),JP=0;function YP(t,e,n){return t.call.apply(t.bind,arguments)}function ZP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=YP:Ze=ZP,Ze.apply(null,arguments)}function Yi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ln(){this.s=this.s,this.o=this.o}var eS=0;Ln.prototype.s=!1;Ln.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),eS!=0)&&XP(this)};Ln.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ju(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Dd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(xa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var tS=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function si(t){return/^[\s\xa0]*$/.test(t)}function Va(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return Va().indexOf(t)!=-1}function Hu(t){return Hu[" "](t),t}Hu[" "]=function(){};function nS(t,e){var n=GS;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var rS=Ut("Opera"),Gr=Ut("Trident")||Ut("MSIE"),t_=Ut("Edge"),wl=t_||Gr,n_=Ut("Gecko")&&!(Va().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),sS=Va().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function r_(){var t=Q.document;return t?t.documentMode:void 0}var Al;e:{var Dc="",Nc=function(){var t=Va();if(n_)return/rv:([^\);]+)(\)|;)/.exec(t);if(t_)return/Edge\/([\d\.]+)/.exec(t);if(Gr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sS)return/WebKit\/(\S+)/.exec(t);if(rS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Dc=Nc?Nc[1]:""),Gr){var xc=r_();if(xc!=null&&xc>parseFloat(Dc)){Al=String(xc);break e}}Al=Dc}var Rl;if(Q.document&&Gr){var Nd=r_();Rl=Nd||parseInt(Al,10)||void 0}else Rl=void 0;var iS=Rl;function ii(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(n_){e:{try{Hu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:oS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ii.$.h.call(this)}}Ue(ii,et);var oS={2:"touch",3:"pen",4:"mouse"};ii.prototype.h=function(){ii.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Si="closure_listenable_"+(1e6*Math.random()|0),aS=0;function cS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++aS,this.fa=this.ia=!1}function Ma(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function s_(t){const e={};for(const n in t)e[n]=t[n];return e}const xd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function i_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<xd.length;i++)n=xd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function La(t){this.src=t,this.g={},this.h=0}La.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Pl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new cS(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function bl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=e_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ma(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ku="closure_lm_"+(1e6*Math.random()|0),Vc={};function o_(t,e,n,r,s){if(r&&r.once)return c_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)o_(t,e[i],n,r,s);return null}return n=Gu(n),t&&t[Si]?t.O(e,n,Pi(r)?!!r.capture:!!r,s):a_(t,e,n,!1,r,s)}function a_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Pi(s)?!!s.capture:!!s,a=Wu(t);if(a||(t[Ku]=a=new La(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=uS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(u_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function uS(){function t(n){return e.call(t.src,t.listener,n)}const e=hS;return t}function c_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)c_(t,e[i],n,r,s);return null}return n=Gu(n),t&&t[Si]?t.P(e,n,Pi(r)?!!r.capture:!!r,s):a_(t,e,n,!0,r,s)}function l_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)l_(t,e[i],n,r,s);else r=Pi(r)?!!r.capture:!!r,n=Gu(n),t&&t[Si]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Pl(i,n,r,s),-1<n&&(Ma(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pl(e,n,r,s)),(n=-1<t?e[t]:null)&&zu(n))}function zu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Si])bl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(u_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wu(e))?(bl(n,t),n.h==0&&(n.src=null,e[Ku]=null)):Ma(t)}}}function u_(t){return t in Vc?Vc[t]:Vc[t]="on"+t}function hS(t,e){if(t.fa)t=!0;else{e=new ii(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zu(t),t=n.call(r,e)}return t}function Wu(t){return t=t[Ku],t instanceof La?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gu(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function Fe(){Ln.call(this),this.i=new La(this),this.S=this,this.J=null}Ue(Fe,Ln);Fe.prototype[Si]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){l_(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var s=e;e=new et(r,t),i_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Zi(o,r,!0,e)&&s}if(o=e.g=t,s=Zi(o,r,!0,e)&&s,s=Zi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Zi(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ma(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Zi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&bl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qu=Q.JSON.stringify;class fS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function dS(){var t=Xu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class pS{constructor(){this.h=this.g=null}add(e,n){const r=h_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var h_=new fS(()=>new gS,t=>t.reset());class gS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _S(t){Q.setTimeout(()=>{throw t},0)}let oi,ai=!1,Xu=new pS,f_=()=>{const t=Q.Promise.resolve(void 0);oi=()=>{t.then(yS)}};var yS=()=>{for(var t;t=dS();){try{t.h.call(t.g)}catch(n){_S(n)}var e=h_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ai=!1};function Fa(t,e){Fe.call(this),this.h=t||1,this.g=e||Q,this.j=Ze(this.qb,this),this.l=Date.now()}Ue(Fa,Fe);V=Fa.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(Ju(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ju(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Fa.$.N.call(this),Ju(this),delete this.g};function Yu(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function d_(t){t.g=Yu(()=>{t.g=null,t.i&&(t.i=!1,d_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vS extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:d_(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(t){Ln.call(this),this.h=t,this.g={}}Ue(ci,Ln);var Vd=[];function p_(t,e,n,r){Array.isArray(n)||(n&&(Vd[0]=n.toString()),n=Vd);for(var s=0;s<n.length;s++){var i=o_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function g_(t){qu(t.g,function(e,n){this.g.hasOwnProperty(n)&&zu(e)},t),t.g={}}ci.prototype.N=function(){ci.$.N.call(this),g_(this)};ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ua(){this.g=!0}Ua.prototype.Ea=function(){this.g=!1};function ES(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function IS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Sr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wS(t,n)+(r?" "+r:"")})}function TS(t,e){t.info(function(){return"TIMEOUT: "+e})}Ua.prototype.info=function(){};function wS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qu(n)}catch{return e}}var dr={},Md=null;function $a(){return Md=Md||new Fe}dr.Ta="serverreachability";function m_(t){et.call(this,dr.Ta,t)}Ue(m_,et);function li(t){const e=$a();qe(e,new m_(e))}dr.STAT_EVENT="statevent";function __(t,e){et.call(this,dr.STAT_EVENT,t),this.stat=e}Ue(__,et);function ot(t){const e=$a();qe(e,new __(e,t))}dr.Ua="timingevent";function y_(t,e){et.call(this,dr.Ua,t),this.size=e}Ue(y_,et);function Ci(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ba={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},v_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zu(){}Zu.prototype.h=null;function Ld(t){return t.h||(t.h=t.i())}function E_(){}var ki={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eh(){et.call(this,"d")}Ue(eh,et);function th(){et.call(this,"c")}Ue(th,et);var Sl;function ja(){}Ue(ja,Zu);ja.prototype.g=function(){return new XMLHttpRequest};ja.prototype.i=function(){return{}};Sl=new ja;function Oi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ci(this),this.P=AS,t=wl?125:void 0,this.V=new Fa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new I_}function I_(){this.i=null,this.g="",this.h=!1}var AS=45e3,Cl={},Go={};V=Oi.prototype;V.setTimeout=function(t){this.P=t};function kl(t,e,n){t.L=1,t.v=qa(cn(e)),t.s=n,t.S=!0,T_(t,null)}function T_(t,e){t.G=Date.now(),Di(t),t.A=cn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),k_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new I_,t.g=J_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new vS(Ze(t.Pa,t,t.g),t.O)),p_(t.U,t.g,"readystatechange",t.nb),e=t.I?s_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),li(),ES(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||wl||this.g&&(this.h.h||this.g.ja()||Bd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?li(3):li(2)),Ha(this);var n=this.g.da();this.ca=n;t:if(w_(this)){var r=Bd(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),Ls(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,IS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!si(a)){var l=a;break t}}l=null}if(n=l)Sr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ol(this,n);else{this.i=!1,this.o=3,ot(12),Gn(this),Ls(this);break e}}this.S?(A_(this,u,o),wl&&this.i&&u==3&&(p_(this.U,this.V,"tick",this.mb),this.V.start())):(Sr(this.j,this.m,o,null),Ol(this,o)),u==4&&Gn(this),this.i&&!this.J&&(u==4?W_(this.l,this):(this.i=!1,Di(this)))}else KS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Gn(this),Ls(this)}}}catch{}finally{}};function w_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function A_(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=RS(t,n),s==Go){e==4&&(t.o=4,ot(14),r=!1),Sr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Cl){t.o=4,ot(15),Sr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Sr(t.j,t.m,s,null),Ol(t,s);w_(t)&&s!=Go&&s!=Cl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ah(e),e.M=!0,ot(11))):(Sr(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),Ls(t))}V.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.C<e.length&&(Ha(this),A_(this,t,e),this.i&&t!=4&&Di(this))}};function RS(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Go:(n=Number(e.substring(n,r)),isNaN(n)?Cl:(r+=1,r+n>e.length?Go:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,Gn(this)};function Di(t){t.Y=Date.now()+t.P,R_(t,t.P)}function R_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ci(Ze(t.lb,t),e)}function Ha(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(TS(this.j,this.A),this.L!=2&&(li(),ot(17)),Gn(this),this.o=2,Ls(this)):R_(this,this.Y-t)};function Ls(t){t.l.H==0||t.J||W_(t.l,t)}function Gn(t){Ha(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ju(t.V),g_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ol(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dl(n.i,t))){if(!t.K&&Dl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jo(n),Wa(n);else break e;oh(n),ot(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ci(Ze(n.ib,n),6e3));if(1>=N_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qn(n,11)}else if((t.K||n.g==t)&&Jo(n),!si(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(nh(i,i.h),i.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ve(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=X_(r,r.J?r.pa:null,r.Y),o.K){x_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Ha(a),Di(a)),r.g=o}else K_(r);0<n.j.length&&Ga(n)}else l[0]!="stop"&&l[0]!="close"||Qn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qn(n,7):ih(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}li(4)}catch{}}function bS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(xa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function PS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(xa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function b_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(xa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=PS(t),r=bS(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var P_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function tr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof tr){this.h=t.h,Qo(this,t.j),this.s=t.s,this.g=t.g,Xo(this,t.m),this.l=t.l;var e=t.i,n=new ui;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fd(this,n),this.o=t.o}else t&&(e=String(t).match(P_))?(this.h=!1,Qo(this,e[1]||"",!0),this.s=bs(e[2]||""),this.g=bs(e[3]||"",!0),Xo(this,e[4]),this.l=bs(e[5]||"",!0),Fd(this,e[6]||"",!0),this.o=bs(e[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,Ud,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ps(e,Ud,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ps(n,n.charAt(0)=="/"?OS:kS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,NS)),t.join("")};function cn(t){return new tr(t)}function Qo(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fd(t,e,n){e instanceof ui?(t.i=e,xS(t.i,t.h)):(n||(e=Ps(e,DS)),t.i=new ui(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function qa(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,CS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function CS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ud=/[#\/\?@]/g,kS=/[#\?:]/g,OS=/[#\?]/g,DS=/[#\?@]/g,NS=/#/g;function ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new Map,t.h=0,t.i&&SS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=ui.prototype;V.add=function(t,e){Fn(this),this.i=null,t=ls(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function S_(t,e){Fn(t),e=ls(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function C_(t,e){return Fn(t),e=ls(t,e),t.g.has(e)}V.forEach=function(t,e){Fn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Fn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Fn(this);let e=[];if(typeof t=="string")C_(this,t)&&(e=e.concat(this.g.get(ls(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Fn(this),this.i=null,t=ls(this,t),C_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function k_(t,e,n){S_(t,e),0<n.length&&(t.i=null,t.g.set(ls(t,e),ju(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ls(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xS(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(S_(this,r),k_(this,s,n))},t)),t.j=e}var VS=class{constructor(t,e){this.g=t,this.map=e}};function O_(t){this.l=t||MS,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MS=10;function D_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function N_(t){return t.h?1:t.g?t.g.size:0}function Dl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nh(t,e){t.g?t.g.add(e):t.h=e}function x_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}O_.prototype.cancel=function(){if(this.i=V_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function V_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ju(t.i)}var LS=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function FS(){this.g=new LS}function US(t,e,n){const r=n||"";try{b_(t,function(s,i){let o=s;Pi(s)&&(o=Qu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function $S(t,e){const n=new Ua;if(Q.Image){const r=new Image;r.onload=Yi(eo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Yi(eo,n,r,"TestLoadImage: error",!1,e),r.onabort=Yi(eo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yi(eo,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function eo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ni(t){this.l=t.fc||null,this.j=t.ob||!1}Ue(Ni,Zu);Ni.prototype.g=function(){return new Ka(this.l,this.j)};Ni.prototype.i=function(t){return function(){return t}}({});function Ka(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Ka,Fe);var rh=0;V=Ka.prototype;V.open=function(t,e){if(this.readyState!=rh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hi(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=rh};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;M_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function M_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xi(this):hi(this),this.readyState==3&&M_(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,xi(this))};V.Ya=function(t){this.g&&(this.response=t,xi(this))};V.ka=function(){this.g&&xi(this)};function xi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hi(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var BS=Q.JSON.parse;function Re(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=L_,this.L=this.M=!1}Ue(Re,Fe);var L_="",jS=/^https?$/i,HS=["POST","PUT"];V=Re.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sl.g(),this.C=this.u?Ld(this.u):Ld(Sl),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){$d(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=e_(HS,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$_(this),0<this.B&&((this.L=qS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=Yu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$d(this,i)}};function qS(t){return Gr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof Bu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function $d(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,F_(t),za(t)}function F_(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),za(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),za(this,!0)),Re.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?U_(this):this.kb())};V.kb=function(){U_(this)};function U_(t){if(t.h&&typeof Bu<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)Yu(t.La,0,t);else if(qe(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(P_)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!jS.test(s?s.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var i=2<$t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",F_(t)}}finally{za(t)}}}}function za(t,e){if(t.g){$_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function $_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),BS(e)}};function Bd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case L_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function KS(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(si(t[r]))continue;var n=mS(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}lS(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function B_(t){let e="";return qu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=B_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ve(t,e,n))}function vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function j_(t){this.Ga=0,this.j=[],this.l=new Ua,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=vs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=vs("baseRetryDelayMs",5e3,t),this.hb=vs("retryDelaySeedMs",1e4,t),this.eb=vs("forwardChannelMaxRetries",2,t),this.xa=vs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new O_(t&&t.concurrentRequestLimit),this.Ja=new FS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=j_.prototype;V.ra=8;V.H=1;function ih(t){if(H_(t),t.H==3){var e=t.W++,n=cn(t.I);if(ve(n,"SID",t.K),ve(n,"RID",e),ve(n,"TYPE","terminate"),Vi(t,n),e=new Oi(t,t.l,e),e.L=2,e.v=qa(cn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=J_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Di(e)}Q_(t)}function Wa(t){t.g&&(ah(t),t.g.cancel(),t.g=null)}function H_(t){Wa(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Jo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Ga(t){if(!D_(t.i)&&!t.m){t.m=!0;var e=t.Na;oi||f_(),ai||(oi(),ai=!0),Xu.add(e,t),t.C=0}}function zS(t,e){return N_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ci(Ze(t.Na,t,e),G_(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Oi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=s_(i),i_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=q_(this,s,e),n=cn(this.I),ve(n,"RID",t),ve(n,"CVER",22),this.F&&ve(n,"X-HTTP-Session-Id",this.F),Vi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(B_(i)))+"&"+e:this.o&&sh(n,this.o,i)),nh(this.i,s),this.bb&&ve(n,"TYPE","init"),this.P?(ve(n,"$req",e),ve(n,"SID","null"),s.aa=!0,kl(s,n,null)):kl(s,n,e),this.H=2}}else this.H==3&&(t?jd(this,t):this.j.length==0||D_(this.i)||jd(this))};function jd(t,e){var n;e?n=e.m:n=t.W++;const r=cn(t.I);ve(r,"SID",t.K),ve(r,"RID",n),ve(r,"AID",t.V),Vi(t,r),t.o&&t.s&&sh(r,t.o,t.s),n=new Oi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=q_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nh(t.i,n),kl(n,r,e)}function Vi(t,e){t.na&&qu(t.na,function(n,r){ve(e,r,n)}),t.h&&b_({},function(n,r){ve(e,r,n)})}function q_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ze(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{US(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function K_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;oi||f_(),ai||(oi(),ai=!0),Xu.add(e,t),t.A=0}}function oh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ci(Ze(t.Ma,t),G_(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,z_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ci(Ze(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Wa(this),z_(this))};function ah(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function z_(t){t.g=new Oi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=cn(t.wa);ve(e,"RID","rpc"),ve(e,"SID",t.K),ve(e,"AID",t.V),ve(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ve(e,"TO",t.qa),ve(e,"TYPE","xmlhttp"),Vi(t,e),t.o&&t.s&&sh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qa(cn(e)),n.s=null,n.S=!0,T_(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Wa(this),oh(this),ot(19))};function Jo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function W_(t,e){var n=null;if(t.g==e){Jo(t),ah(t),t.g=null;var r=2}else if(Dl(t.i,e))n=e.F,x_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=$a(),qe(r,new y_(r,n)),Ga(t)}else K_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&zS(t,e)||r==2&&oh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function G_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ze(t.pb,t);n||(n=new tr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Qo(n,"https"),qa(n)),$S(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),Q_(t),H_(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function Q_(t){if(t.H=0,t.ma=[],t.h){const e=V_(t.i);(e.length!=0||t.j.length!=0)&&(Dd(t.ma,e),Dd(t.ma,t.j),t.i.i.length=0,ju(t.j),t.j.length=0),t.h.ya()}}function X_(t,e,n){var r=n instanceof tr?cn(n):new tr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Xo(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new tr(null);r&&Qo(i,r),e&&(i.g=e),s&&Xo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ve(r,n,e),ve(r,"VER",t.ra),Vi(t,r),r}function J_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Re(new Ni({ob:!0})):new Re(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Y_(){}V=Y_.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Yo(){if(Gr&&!(10<=Number(iS)))throw Error("Environmental error: no available transport.")}Yo.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Fe.call(this),this.g=new j_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!si(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!si(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new us(this)}Ue(mt,Fe);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=X_(t,null,t.Y),Ga(t)};mt.prototype.close=function(){ih(this.g)};mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qu(t),t=n);e.j.push(new VS(e.fb++,t)),e.H==3&&Ga(e)};mt.prototype.N=function(){this.g.h=null,delete this.j,ih(this.g),delete this.g,mt.$.N.call(this)};function Z_(t){eh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(Z_,eh);function ey(){th.call(this),this.status=1}Ue(ey,th);function us(t){this.g=t}Ue(us,Y_);us.prototype.Ba=function(){qe(this.g,"a")};us.prototype.Aa=function(t){qe(this.g,new Z_(t))};us.prototype.za=function(t){qe(this.g,new ey)};us.prototype.ya=function(){qe(this.g,"b")};function WS(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(kt,WS);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Lc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Lc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Lc(this,r),s=0;break}}this.h=s,this.i+=e};kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var GS={};function ch(t){return-128<=t&&128>t?nS(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return Fr;if(0>t)return je(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Nl;return new de(e,0)}function ty(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return je(ty(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=Fr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var Nl=4294967296,Fr=ch(0),xl=ch(1),Hd=ch(16777216);V=de.prototype;V.ea=function(){if(_t(this))return-je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Nl+r)*e,e*=Nl}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sn(this))return"0";if(_t(this))return"-"+je(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=ea(n,e).g;n=Zo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function _t(t){return t.h==-1}V.X=function(t){return t=Zo(this,t),_t(t)?-1:sn(t)?0:1};function je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(xl)}V.abs=function(){return _t(this)?je(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Zo(t,e){return t.add(je(e))}V.R=function(t){if(sn(this)||sn(t))return Fr;if(_t(this))return _t(t)?je(this).R(je(t)):je(je(this).R(t));if(_t(t))return je(this.R(je(t)));if(0>this.X(Hd)&&0>t.X(Hd))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,to(n,2*r+2*s),n[2*r+2*s+1]+=i*c,to(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,to(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,to(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function to(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Es(t,e){this.g=t,this.h=e}function ea(t,e){if(sn(e))throw Error("division by zero");if(sn(t))return new Es(Fr,Fr);if(_t(t))return e=ea(je(t),e),new Es(je(e.g),je(e.h));if(_t(e))return e=ea(t,je(e)),new Es(je(e.g),e.h);if(30<t.g.length){if(_t(t)||_t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=xl,r=e;0>=r.X(t);)n=qd(n),r=qd(r);var s=wr(n,1),i=wr(r,1);for(r=wr(r,2),n=wr(n,2);!sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=wr(r,1),n=wr(n,1)}return e=Zo(t,s.R(e)),new Es(s,e)}for(s=Fr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);_t(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);sn(i)&&(i=xl),s=s.add(i),t=Zo(t,o)}return new Es(s,t)}V.gb=function(t){return ea(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function qd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function wr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(s,t.h)}Yo.prototype.createWebChannel=Yo.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;Ba.NO_ERROR=0;Ba.TIMEOUT=8;Ba.HTTP_ERROR=6;v_.COMPLETE="complete";E_.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Bt;de.fromString=ty;var QS=function(){return new Yo},XS=function(){return $a()},Fc=Ba,JS=v_,YS=dr,Kd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ZS=Ni,no=E_,eC=Re,tC=kt,Ur=de;const zd="@firebase/firestore";/**
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
 */let hs="10.1.0";/**
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
 */const ar=new Cu("@firebase/firestore");function Wd(){return ar.logLevel}function $(t,...e){if(ar.logLevel<=oe.DEBUG){const n=e.map(lh);ar.debug(`Firestore (${hs}): ${t}`,...n)}}function ln(t,...e){if(ar.logLevel<=oe.ERROR){const n=e.map(lh);ar.error(`Firestore (${hs}): ${t}`,...n)}}function Qr(t,...e){if(ar.logLevel<=oe.WARN){const n=e.map(lh);ar.warn(`Firestore (${hs}): ${t}`,...n)}}function lh(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function Ee(t,e){t||G()}function Z(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ny{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class rC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new ny(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Ge(e)}}class iC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new iC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new aC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function lC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ry{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=lC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Xr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ne(0,0))}static max(){return new J(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends fi{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends fi{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ie.fromString(e))}static fromName(e){return new K(Ie.fromString(e).popFirst(5))}static empty(){return new K(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ie(e.slice()))}}function hC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new xn(s,K.empty(),e)}function fC(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(J.min(),K.empty(),-1)}static max(){return new xn(J.max(),K.empty(),-1)}}function dC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const pC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mi(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==pC)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Li(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}uh.ae=-1;function Qa(t){return t==null}function ta(t){return t===0&&1/t==-1/0}function mC(t){return typeof t=="number"&&Number.isInteger(t)&&!ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qd(this.data.getIterator())}getIteratorFrom(e){return new Qd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Qd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class pt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new pt([])}unionWith(e){let n=new tt(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class iy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new iy("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const _C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=_C.exec(t);if(Ee(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */function hh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fh(t){const e=t.mapValue.fields.__previous_value__;return hh(e)?fh(e):e}function di(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class yC{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const so={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hh(t)?4:vC(t)?9007199254740991:10:G()}function Xt(t,e){if(t===e)return!0;const n=lr(t);if(n!==lr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vn(s.timestampValue),a=Vn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return cr(s.bytesValue).isEqual(cr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),a=ke(i.doubleValue);return o===a?ta(o)===ta(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Xr(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Gd(o)!==Gd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Xt(o[c],a[c])))return!1;return!0}(t,e);default:return G()}}function gi(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=lr(t),r=lr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ke(i.integerValue||i.doubleValue),c=ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(di(t),di(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const a=cr(i),c=cr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ce(a[l],c[l]);if(u!==0)return u}return ce(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ce(ke(i.latitude),ke(o.latitude));return a!==0?a:ce(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Jr(a[l],c[l]);if(u)return u}return ce(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===so.mapValue&&o===so.mapValue)return 0;if(i===so.mapValue)return 1;if(o===so.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ce(c[h],u[h]);if(f!==0)return f;const p=Jr(a[c[h]],l[u[h]]);if(p!==0)return p}return ce(c.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Vn(t),r=Vn(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Yr(t){return Vl(t)}function Vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vl(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function Ml(t){return!!t&&"integerValue"in t}function dh(t){return!!t&&"arrayValue"in t}function Jd(t){return!!t&&"nullValue"in t}function Yd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ao(t){return!!t&&"mapValue"in t}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Fs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut(Fs(this.value))}}function oy(t){const e=[];return pr(t.fields,(n,r)=>{const s=new Je([n]);if(Ao(r)){const i=oy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new pt(e)}/**
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
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function Zd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Jr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ep(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Us{constructor(e,n="asc"){this.field=e,this.dir=n}}function EC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ay{}class De extends ay{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TC(e,n,r):n==="array-contains"?new RC(e,r):n==="in"?new bC(e,r):n==="not-in"?new PC(e,r):n==="array-contains-any"?new SC(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wC(e,r):new AC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jr(n,this.value)):n!==null&&lr(this.value)===lr(n)&&this.matchesComparison(Jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends ay{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Jt(e,n)}matches(e){return cy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function cy(t){return t.op==="and"}function ly(t){return IC(t)&&cy(t)}function IC(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Ll(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Yr(t.value);if(ly(t))return t.filters.map(e=>Ll(e)).join(",");{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function uy(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&uy(o,s.filters[a]),!0):!1}(t,e):void G()}function hy(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Yr(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(hy).join(" ,")+"}"}(t):"Filter"}class TC extends De{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class wC extends De{constructor(e,n){super(e,"in",n),this.keys=fy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AC extends De{constructor(e,n){super(e,"not-in",n),this.keys=fy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class RC extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dh(n)&&gi(n.arrayValue,this.value)}}class bC extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class PC extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gi(this.value.arrayValue,n)}}class SC extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gi(this.value.arrayValue,r))}}/**
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
 */class CC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function tp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new CC(t,e,n,r,s,i,o)}function ph(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Yr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Yr(r)).join(",")),e.he=n}return e.he}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ep(t.startAt,e.startAt)&&ep(t.endAt,e.endAt)}function Fl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function kC(t,e,n,r,s,i,o,a){return new Xa(t,e,n,r,s,i,o,a)}function dy(t){return new Xa(t)}function np(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function OC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function DC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function NC(t){return t.collectionGroup!==null}function $r(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=DC(e),r=OC(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Us(n)),e.Pe.push(new Us(Je.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Us(Je.keyField(),i))}}}return e.Pe}function un(t){const e=Z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=tp(e.path,e.collectionGroup,$r(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of $r(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Us(i.field,o))}const r=e.endAt?new na(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new na(e.startAt.position,e.startAt.inclusive):null;e.Ie=tp(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function Ul(t,e,n){return new Xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ja(t,e){return gh(un(t),un(e))&&t.limitType===e.limitType}function py(t){return`${ph(un(t))}|lt:${t.limitType}`}function $l(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>hy(s)).join(", ")}]`),Qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Yr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Yr(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Ya(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of $r(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Zd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,$r(r),s)||r.endAt&&!function(o,a,c){const l=Zd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,$r(r),s))}(t,e)}function xC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gy(t){return(e,n)=>{let r=!1;for(const s of $r(t)){const i=VC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Jr(c,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return sy(this.inner)}size(){return this.innerSize}}/**
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
 */const MC=new we(K.comparator);function hn(){return MC}const my=new we(K.comparator);function Ss(...t){let e=my;for(const n of t)e=e.insert(n.key,n);return e}function _y(t){let e=my;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xn(){return $s()}function yy(){return $s()}function $s(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const LC=new we(K.comparator),FC=new tt(K.comparator);function re(...t){let e=FC;for(const n of t)e=e.add(n);return e}const UC=new tt(ce);function $C(){return UC}/**
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
 */function vy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ta(e)?"-0":e}}function Ey(t){return{integerValue:""+t}}function BC(t,e){return mC(e)?Ey(e):vy(t,e)}/**
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
 */class Za{constructor(){this._=void 0}}function jC(t,e,n){return t instanceof ra?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hh(i)&&(i=fh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof mi?Ty(t,e):t instanceof _i?wy(t,e):function(s,i){const o=Iy(s,i),a=rp(o)+rp(s.Te);return Ml(o)&&Ml(s.Te)?Ey(a):vy(s.serializer,a)}(t,e)}function HC(t,e,n){return t instanceof mi?Ty(t,e):t instanceof _i?wy(t,e):n}function Iy(t,e){return t instanceof sa?function(r){return Ml(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ra extends Za{}class mi extends Za{constructor(e){super(),this.elements=e}}function Ty(t,e){const n=Ay(e);for(const r of t.elements)n.some(s=>Xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class _i extends Za{constructor(e){super(),this.elements=e}}function wy(t,e){let n=Ay(e);for(const r of t.elements)n=n.filter(s=>!Xt(s,r));return{arrayValue:{values:n}}}class sa extends Za{constructor(e,n){super(),this.serializer=e,this.Te=n}}function rp(t){return ke(t.integerValue||t.doubleValue)}function Ay(t){return dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof mi&&s instanceof mi||r instanceof _i&&s instanceof _i?Xr(r.elements,s.elements,Xt):r instanceof sa&&s instanceof sa?Xt(r.Te,s.Te):r instanceof ra&&s instanceof ra}(t.transform,e.transform)}class KC{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function Ry(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Py(t.key,Wt.none()):new Fi(t.key,t.data,Wt.none());{const n=t.data,r=ut.empty();let s=new tt(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Un(t.key,r,new pt(s.toArray()),Wt.none())}}function zC(t,e,n){t instanceof Fi?function(s,i,o){const a=s.value.clone(),c=ip(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Un?function(s,i,o){if(!Ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=ip(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(by(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof Fi?function(i,o,a,c){if(!Ro(i.precondition,o))return a;const l=i.value.clone(),u=op(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Un?function(i,o,a,c){if(!Ro(i.precondition,o))return a;const l=op(i.fieldTransforms,c,o),u=o.data;return u.setAll(by(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function WC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Iy(r.transform,s||null);i!=null&&(n===null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function sp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xr(r,s,(i,o)=>qC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fi extends ec{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Un extends ec{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function by(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ip(t,e,n){const r=new Map;Ee(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,HC(o,a,n[s]))}return r}function op(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jC(i,o,e))}return r}class Py extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GC extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ry(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(n,r)=>sp(n,r))&&Xr(this.baseMutations,e.baseMutations,(n,r)=>sp(n,r))}}class mh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ee(e.mutations.length===r.length);let s=function(){return LC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mh(e,n,r,s)}}/**
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
 */class XC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,se;function YC(t){switch(t){default:return G();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Sy(t){if(t===void 0)return ln("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ce.OK:return A.OK;case Ce.CANCELLED:return A.CANCELLED;case Ce.UNKNOWN:return A.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return A.INTERNAL;case Ce.UNAVAILABLE:return A.UNAVAILABLE;case Ce.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ce.NOT_FOUND:return A.NOT_FOUND;case Ce.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ce.ABORTED:return A.ABORTED;case Ce.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ce.DATA_LOSS:return A.DATA_LOSS;default:return G()}}(se=Ce||(Ce={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _h{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return io}static getOrCreateInstance(){return io===null&&(io=new _h),io}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let io=null;/**
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
 */function ZC(){return new TextEncoder}/**
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
 */const ek=new Ur([4294967295,4294967295],0);function ap(t){const e=ZC().encode(t),n=new tC;return n.update(e),new Uint8Array(n.digest())}function cp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class yh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Cs(`Invalid padding: ${n}`);if(r<0)throw new Cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Cs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ur.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(ek)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=ap(e),[r,s]=cp(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=ap(e),[r,s]=cp(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(J.min(),s,new we(ce),hn(),re())}}class Ui{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ui(r,n,re(),re(),re())}}/**
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
 */class bo{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class Cy{constructor(e,n){this.targetId=e,this.pe=n}}class ky{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class lp{constructor(){this.ye=0,this.we=hp(),this.Se=rt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=re(),n=re(),r=re();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Ui(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=hp()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class tk{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=hn(),this.$e=up(),this.Ue=new we(ce)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(Fl(a))if(i===0){const c=new K(a.path);this.ze(s,c,Qe.newNoDocument(c,J.min()))}else Ee(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(e,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=_h.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,p,y){var v,_,R,b,O,k;const te={localCacheCount:p,existenceFilterCount:y.count},F=y.unchangedNames;return F&&(te.bloomFilter={applied:h===0,hashCount:(v=F==null?void 0:F.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(b=(R=(_=F==null?void 0:F.bits)===null||_===void 0?void 0:_.bitmap)===null||R===void 0?void 0:R.length)!==null&&b!==void 0?b:0,padding:(k=(O=F==null?void 0:F.bits)===null||O===void 0?void 0:O.padding)!==null&&k!==void 0?k:0},f&&(te.bloomFilter.mightContain=f)),te}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=cr(i).toUint8Array()}catch(h){if(h instanceof iy)return Qr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new yh(c,o,a)}catch(h){return Qr(h instanceof Cs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return l.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Fl(a.target)){const c=new K(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Qe.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=re();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new tc(e,n,this.Ue,this.Ke,r);return this.Ke=hn(),this.$e=up(),this.Ue=new we(ce),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new lp,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new tt(ce),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new lp),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function up(){return new we(K.comparator)}function hp(){return new we(K.comparator)}const nk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),sk=(()=>({and:"AND",or:"OR"}))();class ik{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bl(t,e){return t.useProto3Json||Qa(e)?e:{value:e}}function ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ok(t,e){return ia(t,e.toTimestamp())}function Gt(t){return Ee(!!t),J.fromTimestamp(function(n){const r=Vn(n);return new Ne(r.seconds,r.nanos)}(t))}function vh(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Dy(t){const e=Ie.fromString(t);return Ee(My(e)),e}function jl(t,e){return vh(t.databaseId,e.path)}function Uc(t,e){const n=Dy(e);if(n.get(1)!==t.databaseId.projectId)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Ny(n))}function Hl(t,e){return vh(t.databaseId,e)}function ak(t){const e=Dy(t);return e.length===4?Ie.emptyPath():Ny(e)}function ql(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ny(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fp(t,e,n){return{name:jl(t,e),fields:n.value.mapValue.fields}}function ck(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ee(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(Ee(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:Sy(l.code);return new j(u,l.message||"")}(o);n=new ky(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):J.min(),a=new ut({mapValue:{fields:r.document.fields}}),c=Qe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new bo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?Gt(r.readTime):J.min(),o=Qe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new JC(s,i),a=r.targetId;n=new Cy(a,o)}}return n}function lk(t,e){let n;if(e instanceof Fi)n={update:fp(t,e.key,e.value)};else if(e instanceof Py)n={delete:jl(t,e.key)};else if(e instanceof Un)n={update:fp(t,e.key,e.data),updateMask:yk(e.fieldMask)};else{if(!(e instanceof GC))return G();n={verify:jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ok(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function uk(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Gt(s.updateTime):Gt(i);return o.isEqual(J.min())&&(o=Gt(i)),new KC(o,s.transformResults||[])}(n,e))):[]}function hk(t,e){return{documents:[Hl(t,e.path)]}}function fk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Hl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Hl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Vy(Jt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Rr(h.field),direction:gk(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Bl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function dk(t){let e=ak(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ee(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=xy(h);return f instanceof Jt&&ly(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new Us(br(y.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Qa(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new na(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new na(p,f)}(n.endAt)),kC(e,s,o,i,a,"F",c,l)}function pk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=br(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=br(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=br(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=br(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return De.create(br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>xy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function gk(t){return nk[t]}function mk(t){return rk[t]}function _k(t){return sk[t]}function Rr(t){return{fieldPath:t.canonicalString()}}function br(t){return Je.fromServerFormat(t.fieldPath)}function Vy(t){return t instanceof De?function(n){if(n.op==="=="){if(Yd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NAN"}};if(Jd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NAN"}};if(Jd(n.value))return{unaryFilter:{field:Rr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rr(n.field),op:mk(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>Vy(s));return r.length===1?r[0]:{compositeFilter:{op:_k(n.op),filters:r}}}(t):G()}function yk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function My(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Rn{constructor(e,n,r,s,i=J.min(),o=J.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vk{constructor(e){this.ct=e}}function Ek(t){const e=dk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ul(e,e.limit,"L"):e}/**
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
 */class Ik{constructor(){this.sn=new Tk}addToCollectionParentIndex(e,n){return this.sn.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(xn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Tk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Ie.comparator)).toArray()}}/**
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
 */class Zr{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Zr(0)}static On(){return new Zr(-1)}}/**
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
 */class wk{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ak{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Rk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bs(r.mutation,s,pt.empty(),Ne.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=Xn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ss();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hn();const o=$s(),a=function(){return $s()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Un)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Bs(u.mutation,l,u.mutation.getFieldMask(),Ne.now())):o.set(l.key,pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Ak(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=$s();let s=new we((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||pt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=yy();u.forEach(f=>{if(!i.has(f)){const p=Ry(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(Xn());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:_y(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ss();return this.indexManager.getCollectionParents(e,s).next(o=>S.forEach(o,a=>{const c=function(u,h){return new Xa(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Qe.newInvalidDocument(l)))});let o=Ss();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Bs(l.mutation,c,pt.empty(),Ne.now()),Ya(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class bk{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return S.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:Ek(s.bundledQuery),readTime:Gt(s.readTime)}}(n)),S.resolve()}}/**
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
 */class Pk{constructor(){this.overlays=new we(K.comparator),this.cr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xn();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=Xn(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Xn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XC(n,r));let i=this.cr.get(n);i===void 0&&(i=re(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class Eh{constructor(){this.lr=new tt(Me.hr),this.Pr=new tt(Me.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Me(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new K(new Ie([])),r=new Me(n,e),s=new Me(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new K(new Ie([])),r=new Me(n,e),s=new Me(n,e+1);let i=re();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return K.comparator(e.key,n.key)||ce(e.mr,n.mr)}static Ir(e,n){return ce(e.mr,n.mr)||K.comparator(e.key,n.key)}}/**
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
 */class Sk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new tt(Me.hr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Me(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),s=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ce);return n.forEach(s=>{const i=new Me(s,0),o=new Me(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),S.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Me(new K(i),0);let a=new tt(ce);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),S.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ee(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return S.forEach(n.mutations,s=>{const i=new Me(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Me(n,0),s=this.pr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ck{constructor(e){this.Dr=e,this.docs=function(){return new we(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qe.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||dC(fC(u),r)<=0||(s.has(u.key)||Ya(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}vr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kk(this)}getSize(e){return S.resolve(this.size)}}class kk extends wk{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class Ok{constructor(e){this.persistence=e,this.Cr=new fs(n=>ph(n),gh),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Eh,this.targetCount=0,this.Or=Zr.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),S.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Ln(n),S.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Mr.containsKey(n))}}/**
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
 */class Dk{constructor(e,n){this.Nr={},this.overlays={},this.Br=new uh(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Ok(this),this.indexManager=new Ik,this.remoteDocumentCache=function(s){return new Ck(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new vk(n),this.Qr=new bk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Pk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new Sk(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new Nk(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return S.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class Nk extends gC{constructor(e){super(),this.currentSequenceNumber=e}}class Ih{constructor(e){this.persistence=e,this.Wr=new Eh,this.Gr=null}static zr(e){return new Ih(e)}get jr(){if(this.Gr)return this.Gr;throw G()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.jr,r=>{const s=K.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return S.or([()=>S.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class Th{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Th(e,n.fromCache,r,s)}}/**
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
 */class xk{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(np(n))return S.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ul(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(e,Ul(n,null,"F")):this.ji(e,l,n,c)}))})))}Ui(e,n,r,s){return np(n)||s.isEqual(J.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(Wd()<=oe.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$l(n)),this.ji(e,o,n,hC(s,-1)))})}Gi(e,n){let r=new tt(gy(e));return n.forEach((s,i)=>{Ya(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return Wd()<=oe.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",$l(n)),this.Ki.getDocumentsMatchingQuery(e,n,xn.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Vk{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new we(ce),this.Yi=new fs(i=>ph(i),gh),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rk(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Mk(t,e,n,r){return new Vk(t,e,n,r)}async function Ly(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function Lk(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=S.resolve();return f.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(v=>{const _=l.docVersions.get(y);Ee(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Fy(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function Fk(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(rt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(v,_,R){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(f,p,u)&&a.push(n.kr.updateTargetData(i,p))});let c=hn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Uk(i,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(J.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function Uk(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function $k(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bk(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=Z(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Li(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function dp(t,e,n){const r=Z(t);let s=J.min(),i=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=Z(c),f=h.Yi.get(u);return f!==void 0?S.resolve(h.Ji.get(f)):h.kr.getTargetData(l,u)}(r,o,un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:re())).next(a=>(jk(r,xC(e),a),{documents:a,ss:i})))}function jk(t,e,n){let r=t.Zi.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}class pp{constructor(){this.activeTargetIds=$C()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hk{constructor(){this.Hs=new pp,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new pp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qk{Ys(e){}shutdown(){}}/**
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
 */class gp{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oo=null;function $c(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
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
 */const Kk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zk{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const ze="WebChannelConnection";class Wk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=$c(),c=this.mo(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=Kk[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=$c();return new Promise((o,a)=>{const c=new eC;c.setWithCredentials(!0),c.listenOnce(JS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const u=c.getResponseJson();$(ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fc.TIMEOUT:$(ze,`RPC '${e}' ${i} timed out`),a(new j(A.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if($(ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(_){const R=_.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(R)>=0?R:A.UNKNOWN}(p.status);a(new j(y,p.message))}else a(new j(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(A.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(ze,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(e,n,r){const s=$c(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QS(),a=XS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new ZS({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(ze,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const y=new zk({so:_=>{p?$(ze,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||($(ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),$(ze,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,R,b)=>{_.listen(R,O=>{try{b(O)}catch(k){setTimeout(()=>{throw k},0)}})};return v(h,no.EventType.OPEN,()=>{p||$(ze,`RPC '${e}' stream ${s} transport opened.`)}),v(h,no.EventType.CLOSE,()=>{p||(p=!0,$(ze,`RPC '${e}' stream ${s} transport closed`),y.Po())}),v(h,no.EventType.ERROR,_=>{p||(p=!0,Qr(ze,`RPC '${e}' stream ${s} transport errored:`,_),y.Po(new j(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,no.EventType.MESSAGE,_=>{var R;if(!p){const b=_.data[0];Ee(!!b);const O=b,k=O.error||((R=O[0])===null||R===void 0?void 0:R.error);if(k){$(ze,`RPC '${e}' stream ${s} received error:`,k);const te=k.status;let F=function($e){const Te=Ce[$e];if(Te!==void 0)return Sy(Te)}(te),ae=k.message;F===void 0&&(F=A.INTERNAL,ae="Unknown error status: "+te+" with message "+k.message),p=!0,y.Po(new j(F,ae)),h.close()}else $(ze,`RPC '${e}' stream ${s} received:`,b),y.Io(b)}}),v(a,YS.STAT_EVENT,_=>{_.stat===Kd.PROXY?$(ze,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Kd.NOPROXY&&$(ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}function Bc(){return typeof document<"u"?document:null}/**
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
 */function nc(t){return new ik(t,!0)}/**
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
 */class Uy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class $y{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Uy(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new j(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gk extends $y{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=ck(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Gt(o.readTime):J.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=ql(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Fl(c)?{documents:hk(i,c)}:{query:fk(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Oy(i,o.resumeToken);const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ia(i,o.snapshotVersion.toTimestamp());const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=pk(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=ql(this.serializer),n.removeTarget=e,this.Ho(n)}}class Qk extends $y{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=uk(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.u_(r,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=ql(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lk(this.serializer,r))};this.Ho(n)}}/**
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
 */class Xk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(A.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(A.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class Jk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Yk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{gr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.y_.add(4),await $i(l),l.b_.set("Unknown"),l.y_.delete(4),await rc(l)}(this))})}),this.b_=new Jk(r,s)}}async function rc(t){if(gr(t))for(const e of t.w_)await e(!0)}async function $i(t){for(const e of t.w_)await e(!1)}function By(t,e){const n=Z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Rh(n)?Ah(n):ds(n).Uo()&&wh(n,e))}function jy(t,e){const n=Z(t),r=ds(n);n.p_.delete(e),r.Uo()&&Hy(n,e),n.p_.size===0&&(r.Uo()?r.zo():gr(n)&&n.b_.set("Unknown"))}function wh(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).i_(e)}function Hy(t,e){t.D_.Be(e),ds(t).s_(e)}function Ah(t){t.D_=new tk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.b_.A_()}function Rh(t){return gr(t)&&!ds(t).$o()&&t.p_.size>0}function gr(t){return Z(t).y_.size===0}function qy(t){t.D_=void 0}async function Zk(t){t.p_.forEach((e,n)=>{wh(t,e)})}async function e1(t,e){qy(t),Rh(t)?(t.b_.m_(e),Ah(t)):t.b_.set("Unknown")}async function t1(t,e,n){if(t.b_.set("Online"),e instanceof ky&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof bo?t.D_.We(e):e instanceof Cy?t.D_.Ze(e):t.D_.je(e),!n.isEqual(J.min()))try{const r=await Fy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(rt.EMPTY_BYTE_STRING,u.snapshotVersion)),Hy(i,c);const h=new Rn(u.target,c,l,u.sequenceNumber);wh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!Li(e))throw e;t.y_.add(1),await $i(t),t.b_.set("Offline"),n||(n=()=>Fy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await rc(t)})}function Ky(t,e){return e().catch(n=>oa(t,n,e))}async function sc(t){const e=Z(t),n=Mn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;n1(e);)try{const s=await $k(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,r1(e,s)}catch(s){await oa(e,s)}zy(e)&&Wy(e)}function n1(t){return gr(t)&&t.g_.length<10}function r1(t,e){t.g_.push(e);const n=Mn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function zy(t){return gr(t)&&!Mn(t).$o()&&t.g_.length>0}function Wy(t){Mn(t).start()}async function s1(t){Mn(t).l_()}async function i1(t){const e=Mn(t);for(const n of t.g_)e.a_(n.mutations)}async function o1(t,e,n){const r=t.g_.shift(),s=mh.from(r,e,n);await Ky(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sc(t)}async function a1(t,e){e&&Mn(t).__&&await async function(r,s){if(function(o){return YC(o)&&o!==A.ABORTED}(s.code)){const i=r.g_.shift();Mn(r).Go(),await Ky(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sc(r)}}(t,e),zy(t)&&Wy(t)}async function mp(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=gr(n);n.y_.add(3),await $i(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await rc(n)}async function c1(t,e){const n=Z(t);e?(n.y_.delete(2),await rc(n)):e||(n.y_.add(2),await $i(n),n.b_.set("Unknown"))}function ds(t){return t.v_||(t.v_=function(n,r,s){const i=Z(n);return i.P_(),new Gk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:Zk.bind(null,t),uo:e1.bind(null,t),r_:t1.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Rh(t)?Ah(t):t.b_.set("Unknown")):(await t.v_.stop(),qy(t))})),t.v_}function Mn(t){return t.C_||(t.C_=function(n,r,s){const i=Z(n);return i.P_(),new Qk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:s1.bind(null,t),uo:a1.bind(null,t),c_:i1.bind(null,t),u_:o1.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await sc(t)):(await t.C_.stop(),t.g_.length>0&&($("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class bh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new bh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(t,e){if(ln("AsyncQueue",`${e}: ${t}`),Li(t))return new j(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Br{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ss(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Br(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class _p{constructor(){this.F_=new we(K.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):G():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new es(e,n,Br.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class l1{constructor(){this.x_=void 0,this.listeners=[]}}class u1{constructor(){this.queries=new fs(e=>py(e),Ja),this.onlineState="Unknown",this.O_=new Set}}async function h1(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new l1),s)try{i.x_=await n.onListen(r)}catch(o){const a=Ph(o,`Initialization of query '${$l(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&Sh(n)}async function f1(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function d1(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&Sh(n)}function p1(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Sh(t){t.O_.forEach(e=>{e.next()})}class g1{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Gy{constructor(e){this.key=e}}class Qy{constructor(e){this.key=e}}class m1{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=re(),this.mutatedKeys=re(),this.na=gy(e),this.ra=new Br(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new _p,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Ya(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),_=!0):this._a(f,p)||(r.track({type:2,doc:p}),_=!0,(c&&this.na(p,c)>0||l&&this.na(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),_=!0):f&&!p&&(r.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((l,u)=>function(f,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return y(f)-y(p)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new es(this.query,e.ra,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new _p,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=re(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new Qy(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Gy(r))}),n}ha(e){this.X_=e.ss,this.ta=re();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return es.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class _1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class y1{constructor(e){this.key=e,this.Ia=!1}}class v1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new fs(a=>py(a),Ja),this.da=new Map,this.Aa=new Set,this.Ra=new we(K.comparator),this.Va=new Map,this.ma=new Eh,this.fa={},this.ga=new Map,this.pa=Zr.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function E1(t,e){const n=k1(t);let r,s;const i=n.Ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await Bk(n.localStore,un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await I1(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&By(n.remoteStore,o)}return s}async function I1(t,e,n,r,s){t.wa=(h,f,p)=>async function(v,_,R,b){let O=_.view.sa(R);O.zi&&(O=await dp(v.localStore,_.query,!1).then(({documents:F})=>_.view.sa(F,O)));const k=b&&b.targetChanges.get(_.targetId),te=_.view.applyChanges(O,v.isPrimaryClient,k);return vp(v,_.targetId,te.ca),te.snapshot}(t,h,f,p);const i=await dp(t.localStore,e,!0),o=new m1(e,i.ss),a=o.sa(i.documents),c=Ui.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);vp(t,n,l.ca);const u=new _1(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),l.snapshot}async function T1(t,e){const n=Z(t),r=n.Ea.get(e),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!Ja(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),jy(n.remoteStore,r.targetId),zl(n,r.targetId)}).catch(Mi)):(zl(n,r.targetId),await Kl(n.localStore,r.targetId,!0))}async function w1(t,e,n){const r=O1(t);try{const s=await function(o,a){const c=Z(o),l=Ne.now(),u=a.reduce((p,y)=>p.add(y.key),re());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=hn(),v=re();return c.Xi.getEntries(p,u).next(_=>{y=_,y.forEach((R,b)=>{b.isValidDocument()||(v=v.add(R))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(_=>{h=_;const R=[];for(const b of a){const O=WC(b,h.get(b.key).overlayedDocument);O!=null&&R.push(new Un(b.key,O,oy(O.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,R,a)}).next(_=>{f=_;const R=_.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(p,_.batchId,R)})}).then(()=>({batchId:f.batchId,changes:_y(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new we(ce)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Bi(r,s.changes),await sc(r.remoteStore)}catch(s){const i=Ph(s,"Failed to persist write");n.reject(i)}}async function Xy(t,e){const n=Z(t);try{const r=await Fk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Ee(o.Ia):s.removedDocuments.size>0&&(Ee(o.Ia),o.Ia=!1))}),await Bi(n,r,e)}catch(r){await Mi(r)}}function yp(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(l=!0)}),l&&Sh(c)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A1(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new we(K.comparator);o=o.insert(i,Qe.newNoDocument(i,J.min()));const a=re().add(i),c=new tc(J.min(),new Map,new we(ce),o,a);await Xy(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(e),Ch(r)}else await Kl(r.localStore,e,!1).then(()=>zl(r,e,n)).catch(Mi)}async function R1(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await Lk(n.localStore,e);Yy(n,r,null),Jy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bi(n,s)}catch(s){await Mi(s)}}async function b1(t,e,n){const r=Z(t);try{const s=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ee(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Yy(r,e,n),Jy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bi(r,s)}catch(s){await Mi(s)}}function Jy(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function Yy(t,e,n){const r=Z(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||Zy(t,r)})}function Zy(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(jy(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Ch(t))}function vp(t,e,n){for(const r of n)r instanceof Gy?(t.ma.addReference(r.key,e),P1(t,r)):r instanceof Qy?($("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||Zy(t,r.key)):G()}function P1(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||($("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Ch(t))}function Ch(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new K(Ie.fromString(e)),r=t.pa.next();t.Va.set(r,new y1(n)),t.Ra=t.Ra.insert(n,r),By(t.remoteStore,new Rn(un(dy(n.path)),r,"TargetPurposeLimboResolution",uh.ae))}}async function Bi(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Th.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,f=>S.forEach(f.Li,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>S.forEach(f.ki,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Li(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.Ji.get(f),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(f,v)}}}(r.localStore,i))}async function S1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Ly(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new j(A.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bi(n,r.ts)}}function C1(t,e){const n=Z(t),r=n.Va.get(e);if(r&&r.Ia)return re().add(r.key);{let s=re();const i=n.da.get(e);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function k1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A1.bind(null,e),e.Ta.r_=d1.bind(null,e.eventManager),e.Ta.Sa=p1.bind(null,e.eventManager),e}function O1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b1.bind(null,e),e}class Ep{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Mk(this.persistence,new xk,e.initialUser,this.serializer)}createPersistence(e){return new Dk(Ih.zr,this.serializer)}createSharedClientState(e){return new Hk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class D1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=S1.bind(null,this.syncEngine),await c1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new u1}()}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=function(i){return new Wk(i)}(e.databaseInfo);return function(i,o,a,c){return new Xk(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Yk(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yp(this.syncEngine,n,0),function(){return gp.v()?new gp:new qk}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new v1(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);$("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await $i(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class N1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class x1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=ry.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ph(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ly(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await M1(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>mp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>mp(e.remoteStore,i)),t._onlineComponents=e}function V1(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function M1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!V1(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new Ep)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new Ep);return t._offlineComponents}async function ev(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Ip(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Ip(t,new D1))),t._onlineComponents}function L1(t){return ev(t).then(e=>e.syncEngine)}async function F1(t){const e=await ev(t),n=e.eventManager;return n.onListen=E1.bind(null,e.syncEngine),n.onUnlisten=T1.bind(null,e.syncEngine),n}function U1(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new N1({next:f=>{o.enqueueAndForget(()=>f1(i,h)),f.fromCache&&c.source==="server"?l.reject(new j(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new g1(a,u,{includeMetadataChanges:!0,W_:!0});return h1(i,h)}(await F1(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function tv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Tp=new Map;/**
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
 */function nv(t,e,n){if(!n)throw new j(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $1(t,e,n,r){if(e===!0&&r===!0)throw new j(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wp(t){if(!K.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ap(t){if(K.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ts(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kh(t);throw new j(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Rp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ic{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nC;switch(r.type){case"firstParty":return new oC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tp.get(n);r&&($("ComponentProvider","Removing Datastore"),Tp.delete(n),r.terminate())}(this),Promise.resolve()}}function B1(t,e,n,r={}){var s;const i=(t=ts(t,ic))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ge.MOCK_USER;else{a=gm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ge(l)}t._authCredentials=new rC(new ny(a,c))}}/**
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
 */class oc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oc(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class On extends oc{constructor(e,n,r){super(e,n,dy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new K(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function j1(t,e,...n){if(t=Oe(t),nv("collection","path",e),t instanceof ic){const r=Ie.fromString(e,...n);return Ap(r),new On(t,null,r)}{if(!(t instanceof vt||t instanceof On))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Ap(r),new On(t.firestore,null,r)}}function H1(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=ry.V()),nv("doc","path",e),t instanceof ic){const r=Ie.fromString(e,...n);return wp(r),new vt(t,null,new K(r))}{if(!(t instanceof vt||t instanceof On))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return wp(r),new vt(t.firestore,t instanceof On?t.converter:null,new K(r))}}/**
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
 */class q1{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Uy(this,"async_queue_retry"),this.Xa=()=>{const n=Bc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=Bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=Bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new kn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Li(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=bh.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&G()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class ac extends ic{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new q1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sv(this),this._firestoreClient.terminate()}}function K1(t,e){const n=typeof t=="object"?t:Ou(),r=typeof t=="string"?t:e||"(default)",s=Ca(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fm("firestore");i&&B1(s,...i)}return s}function rv(t){return t._firestoreClient||sv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sv(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new yC(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,tv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new x1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(rt.fromBase64String(e))}catch(n){throw new j(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class cc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const z1=/^__.*__$/;class W1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Un(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fi(e,this.data,n,this.fieldTransforms)}}class iv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Un(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ov(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Nh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Nh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return aa(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(ov(this.uu)&&z1.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class G1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}Ru(e,n,r,s=!1){return new Nh({uu:e,methodName:n,Au:r,path:Je.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function av(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new G1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Q1(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);xh("Data must be an object, but it was:",o,r);const a=cv(r,o);let c,l;if(i.merge)c=new pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Wl(e,h,n);if(!o.contains(f))throw new j(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);uv(u,f)||u.push(f)}c=new pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new W1(new ut(a),c,l)}class lc extends Oh{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function X1(t,e,n,r){const s=t.Ru(1,e,n);xh("Data must be an object, but it was:",s,r);const i=[],o=ut.empty();pr(r,(c,l)=>{const u=Vh(e,c,n);l=Oe(l);const h=s.Iu(u);if(l instanceof lc)i.push(u);else{const f=uc(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new pt(i);return new iv(o,a,s.fieldTransforms)}function J1(t,e,n,r,s,i){const o=t.Ru(1,e,n),a=[Wl(e,r,n)],c=[s];if(i.length%2!=0)throw new j(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Wl(e,i[f])),c.push(i[f+1]);const l=[],u=ut.empty();for(let f=a.length-1;f>=0;--f)if(!uv(l,a[f])){const p=a[f];let y=c[f];y=Oe(y);const v=o.Iu(p);if(y instanceof lc)l.push(p);else{const _=uc(y,v);_!=null&&(l.push(p),u.set(p,_))}}const h=new pt(l);return new iv(u,h,o.fieldTransforms)}function uc(t,e){if(lv(t=Oe(t)))return xh("Unsupported field value:",e,t),cv(t,e);if(t instanceof Oh)return function(r,s){if(!ov(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=uc(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:ia(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(s.serializer,i)}}if(r instanceof Dh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:Oy(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${kh(r)}`)}(t,e)}function cv(t,e){const n={};return sy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,(r,s)=>{const i=uc(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Dh||t instanceof ns||t instanceof vt||t instanceof Oh)}function xh(t,e,n){if(!lv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=kh(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Wl(t,e,n){if((e=Oe(e))instanceof cc)return e._internalPath;if(typeof e=="string")return Vh(t,e);throw aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y1=new RegExp("[~\\*/\\[\\]]");function Vh(t,e,n){if(e.search(Y1)>=0)throw aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cc(...e.split("."))._internalPath}catch{throw aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(A.INVALID_ARGUMENT,a+t+c)}function uv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Z1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Z1 extends hv{data(){return super.data()}}function fv(t,e){return typeof e=="string"?Vh(t,e):e instanceof cc?e._internalPath:e._delegate._internalPath}/**
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
 */function eO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tO{convertValue(e,n="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Dh(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Ee(My(r));const s=new pi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function nO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rO extends hv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Po extends rO{data(e={}){return super.data(e)}}class sO{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ao(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Po(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Po(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ao(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Po(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ao(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:iO(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class oO extends tO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function aO(t){t=ts(t,oc);const e=ts(t.firestore,ac),n=rv(e),r=new oO(e);return eO(t._query),U1(n,t._query).then(s=>new sO(e,r,t,s))}function RN(t,e,n,...r){t=ts(t,vt);const s=ts(t.firestore,ac),i=av(s);let o;return o=typeof(e=Oe(e))=="string"||e instanceof cc?J1(i,"updateDoc",t._key,e,n,r):X1(i,"updateDoc",t._key,e),dv(s,[o.toMutation(t._key,Wt.exists(!0))])}function bN(t,e){const n=ts(t.firestore,ac),r=H1(t),s=nO(t.converter,e);return dv(n,[Q1(av(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function dv(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>w1(await L1(r),s,i)),i.promise}(rv(t),e)}(function(e,n=!0){(function(s){hs=s})(fr),ir(new Nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ac(new sC(r.getProvider("auth-internal")),new cC(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),qt(zd,"4.1.0",e),qt(zd,"4.1.0","esm2017")})();/**
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
 */const pv="firebasestorage.googleapis.com",gv="storageBucket",cO=2*60*1e3,lO=10*60*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Hc(t){return"storage/"+t}function Mh(){const t="An unknown error occurred, please check the error payload for server response.";return new Pe(be.UNKNOWN,t)}function uO(t){return new Pe(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function hO(t){return new Pe(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(be.UNAUTHENTICATED,t)}function dO(){return new Pe(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pO(t){return new Pe(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function gO(){return new Pe(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mO(){return new Pe(be.CANCELED,"User canceled the upload/download.")}function _O(t){return new Pe(be.INVALID_URL,"Invalid URL '"+t+"'.")}function yO(t){return new Pe(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vO(){return new Pe(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gv+"' property when initializing the app?")}function EO(){return new Pe(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IO(){return new Pe(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TO(t){return new Pe(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gl(t){return new Pe(be.INVALID_ARGUMENT,t)}function mv(){return new Pe(be.APP_DELETED,"The Firebase app was deleted.")}function wO(t){return new Pe(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function js(t,e){return new Pe(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Is(t){throw new Pe(be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gt.makeFromUrl(e,n)}catch{return new gt(e,"")}if(r.path==="")return r;throw yO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},v=n===pv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",R=new RegExp(`^https?://${v}/${s}/${_}`,"i"),O=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:l},{regex:R,indices:{bucket:1,path:2},postModify:l}];for(let k=0;k<O.length;k++){const te=O[k],F=te.regex.exec(e);if(F){const ae=F[te.indices.bucket];let Ae=F[te.indices.path];Ae||(Ae=""),r=new gt(ae,Ae),te.postModify(r);break}}if(r==null)throw _O(e);return r}}class AO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function RO(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(p,c())},_)}function f(){i&&clearTimeout(i)}function p(_,...R){if(l){f();return}if(_){f(),u.call(null,_,...R);return}if(c()||o){f(),u.call(null,_,...R);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,h(O)}let y=!1;function v(_){y||(y=!0,f(),!l&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function bO(t){t(!1)}/**
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
 */function PO(t){return t!==void 0}function SO(t){return typeof t=="object"&&!Array.isArray(t)}function Lh(t){return typeof t=="string"||t instanceof String}function bp(t){return Fh()&&t instanceof Blob}function Fh(){return typeof Blob<"u"&&!AA()}function Pp(t,e,n,r){if(r<e)throw Gl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Uh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function _v(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(nr||(nr={}));/**
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
 */function CO(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class kO{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===nr.NO_ERROR,c=i.getStatus();if(!a||CO(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===nr.ABORT;r(!1,new co(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new co(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());PO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Mh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?mv():mO();o(c)}else{const c=gO();o(c)}};this.canceled_?n(!1,new co(!1,null,!0)):this.backoffId_=RO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function OO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function DO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function VO(t,e,n,r,s,i,o=!0){const a=_v(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return NO(l,e),OO(l,n),DO(l,i),xO(l,r),new kO(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function MO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function LO(...t){const e=MO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Fh())return new Blob(t);throw new Pe(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function UO(t){if(typeof atob>"u")throw TO("base-64");return atob(t)}/**
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
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qc{constructor(e,n){this.data=e,this.contentType=n||null}}function $O(t,e){switch(t){case jt.RAW:return new qc(yv(e));case jt.BASE64:case jt.BASE64URL:return new qc(vv(t,e));case jt.DATA_URL:return new qc(jO(e),HO(e))}throw Mh()}function yv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function BO(t){let e;try{e=decodeURIComponent(t)}catch{throw js(jt.DATA_URL,"Malformed data URL.")}return yv(e)}function vv(t,e){switch(t){case jt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw js(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw js(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UO(e)}catch(s){throw s.message.includes("polyfill")?s:js(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ev{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw js(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function jO(t){const e=new Ev(t);return e.base64?vv(jt.BASE64,e.rest):BO(e.rest)}function HO(t){return new Ev(t).contentType}function qO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class An{constructor(e,n){let r=0,s="";bp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(bp(this.data_)){const r=this.data_,s=FO(r,e,n);return s===null?null:new An(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new An(r,!0)}}static getBlob(...e){if(Fh()){const n=e.map(r=>r instanceof An?r.data_:r);return new An(LO.apply(null,n))}else{const n=e.map(o=>Lh(o)?$O(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new An(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Iv(t){let e;try{e=JSON.parse(t)}catch{return null}return SO(e)?e:null}/**
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
 */function KO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Tv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function WO(t,e){return e}class st{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||WO}}let lo=null;function GO(t){return!Lh(t)||t.length<2?t:Tv(t)}function wv(){if(lo)return lo;const t=[];t.push(new st("bucket")),t.push(new st("generation")),t.push(new st("metageneration")),t.push(new st("name","fullPath",!0));function e(i,o){return GO(o)}const n=new st("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new st("size");return s.xform=r,t.push(s),t.push(new st("timeCreated")),t.push(new st("updated")),t.push(new st("md5Hash",null,!0)),t.push(new st("cacheControl",null,!0)),t.push(new st("contentDisposition",null,!0)),t.push(new st("contentEncoding",null,!0)),t.push(new st("contentLanguage",null,!0)),t.push(new st("contentType",null,!0)),t.push(new st("metadata","customMetadata",!0)),lo=t,lo}function QO(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function XO(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return QO(r,t),r}function Av(t,e,n){const r=Iv(e);return r===null?null:XO(t,r,n)}function JO(t,e,n,r){const s=Iv(e);if(s===null||!Lh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=Uh(f,n,r),y=_v({alt:"media",token:l});return p+y})[0]}function YO(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Rv{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function bv(t){if(!t)throw Mh()}function ZO(t,e){function n(r,s){const i=Av(t,s,e);return bv(i!==null),i}return n}function eD(t,e){function n(r,s){const i=Av(t,s,e);return bv(i!==null),JO(i,s,t.host,t._protocol)}return n}function Pv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=dO():s=fO():n.getStatus()===402?s=hO(t.bucket):n.getStatus()===403?s=pO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function tD(t){const e=Pv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=uO(t.path)),i.serverResponse=s.serverResponse,i}return n}function nD(t,e,n){const r=e.fullServerUrl(),s=Uh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Rv(s,i,eD(t,n),o);return a.errorHandler=tD(e),a}function rD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function sD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=rD(null,e)),r}function iD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let k=0;k<2;k++)O=O+Math.random().toString().slice(2);return O}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=sD(e,r,s),u=YO(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=An.getBlob(h,r,f);if(p===null)throw EO();const y={name:l.fullPath},v=Uh(i,t.host,t._protocol),_="POST",R=t.maxUploadRetryTime,b=new Rv(v,_,ZO(t,n),R);return b.urlParams=y,b.headers=o,b.body=p.uploadData(),b.errorHandler=Pv(e),b}class oD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Is("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Is("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aD extends oD{initXhr(){this.xhr_.responseType="text"}}function Sv(){return new aD}/**
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
 */class ur{constructor(e,n){this._service=e,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ur(e,n)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tv(this._location.path)}get storage(){return this._service}get parent(){const e=KO(this._location.path);if(e===null)return null;const n=new gt(this._location.bucket,e);return new ur(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wO(e)}}function cD(t,e,n){t._throwIfRoot("uploadBytes");const r=iD(t.storage,t._location,wv(),new An(e,!0),n);return t.storage.makeRequestWithTokens(r,Sv).then(s=>({metadata:s,ref:t}))}function lD(t){t._throwIfRoot("getDownloadURL");const e=nD(t.storage,t._location,wv());return t.storage.makeRequestWithTokens(e,Sv).then(n=>{if(n===null)throw IO();return n})}function uD(t,e){const n=zO(t._location.path,e),r=new gt(t._location.bucket,n);return new ur(t.storage,r)}/**
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
 */function hD(t){return/^[A-Za-z]+:\/\//.test(t)}function fD(t,e){return new ur(t,e)}function Cv(t,e){if(t instanceof $h){const n=t;if(n._bucket==null)throw vO();const r=new ur(n,n._bucket);return e!=null?Cv(r,e):r}else return e!==void 0?uD(t,e):t}function dD(t,e){if(e&&hD(e)){if(t instanceof $h)return fD(t,e);throw Gl("To use ref(service, url), the first argument must be a Storage instance.")}else return Cv(t,e)}function Sp(t,e){const n=e==null?void 0:e[gv];return n==null?null:gt.makeFromBucketSpec(n,t)}function pD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:gm(s,t.app.options.projectId))}class $h{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=pv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cO,this._maxUploadRetryTime=lO,this._requests=new Set,s!=null?this._bucket=gt.makeFromBucketSpec(s,this._host):this._bucket=Sp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=Sp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ur(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new AO(mv());{const o=VO(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Cp="@firebase/storage",kp="0.11.2";/**
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
 */const kv="storage";function PN(t,e,n){return t=Oe(t),cD(t,e,n)}function SN(t){return t=Oe(t),lD(t)}function CN(t,e){return t=Oe(t),dD(t,e)}function gD(t=Ou(),e){t=Oe(t);const r=Ca(t,kv).getImmediate({identifier:e}),s=fm("storage");return s&&mD(r,...s),r}function mD(t,e,n,r={}){pD(t,e,n,r)}function _D(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new $h(n,r,s,e,fr)}function yD(){ir(new Nn(kv,_D,"PUBLIC").setMultipleInstances(!0)),qt(Cp,kp,""),qt(Cp,kp,"esm2017")}yD();const vD={apiKey:"AIzaSyDV86E04pfIBPbQnfyeRoDPFiamVZz1lD4",authDomain:"coesa-dd1ed.firebaseapp.com",projectId:"coesa-dd1ed",storageBucket:"coesa-dd1ed.appspot.com",messagingSenderId:"262690091547",appId:"1:262690091547:web:7d96e73c81ccb843ddbebe",measurementId:"G-T7KRL108F3"},Bh=ym(vD),Ql=GP(Bh),ED=K1(Bh);gD(Bh);const ID={components:{adminNav:pA,Icon:am},data(){return{loading:!0,users:[]}},async created(){try{const t=await aO(j1(ED,"Users"));this.loading=!1,this.users=t.docs.map(e=>({id:e.id,...e.data()}))}catch(t){console.error("Error fetching item list:",t)}},methods:{}},ji=t=>(hu("data-v-cbcacc60"),t=t(),fu(),t),TD={class:"container my-4"},wD={class:"nav nav-underline d-flex mb-3"},AD={class:"nav-item"},RD={class:"nav-link",href:"#"},bD={class:"nav-item"},PD={class:"nav-link",href:"#"},SD={class:"nav-item"},CD={class:"nav-link",href:"#"},kD=ji(()=>D("h1",null,"Admin Dashboard",-1)),OD={class:"container my-5"},DD={class:"row"},ND={class:"col-lg-3 col-md-6 mt-3"},xD={class:"jumbotron shadow py-5"},VD={class:"container"},MD=ji(()=>D("h3",{class:"text-center"},"Users",-1)),LD={class:"text-center"},FD=II('<div class="col-lg-3 col-md-6 mt-3" data-v-cbcacc60><div class="jumbotron shadow py-5" data-v-cbcacc60><div class="container" data-v-cbcacc60><h3 class="text-center" data-v-cbcacc60>Payments</h3><p class="text-center" data-v-cbcacc60>0</p></div></div></div><div class="col-lg-3 col-md-6 mt-3" data-v-cbcacc60><div class="jumbotron shadow py-5" data-v-cbcacc60><div class="container" data-v-cbcacc60><h3 class="text-center" data-v-cbcacc60>Complaints</h3><p class="text-center" data-v-cbcacc60>0</p></div></div></div><div class="col-lg-3 col-md-6 mt-3" data-v-cbcacc60><div class="jumbotron shadow py-5" data-v-cbcacc60><div class="container" data-v-cbcacc60><h3 class="text-center" data-v-cbcacc60>Health</h3><p class="text-center text-success" data-v-cbcacc60>Good</p></div></div></div>',3),UD={class:"mt-5 mb-5"},$D={class:"row"},BD={class:"col-lg-6 col-md-6"},jD=ji(()=>D("h4",{class:"my-3"},"All Users",-1)),HD={class:"list-group-item d-flex justify-content-between align-items-start"},qD={class:"ms-2 me-auto"},KD={class:"fw-bold"},zD={class:"text-success"},WD=ji(()=>D("b",null," Email:",-1)),GD={class:"text-success"},QD={class:"btn"},XD=ji(()=>D("div",{class:"col-lg-6 col-md-6"},[D("h4",{class:"my-3"},"Payment Transactions"),D("p",{class:"d-flex justify-content-center align-item-center mt-5 py-5"},"No Transactions")],-1));function JD(t,e,n,r,s,i){const o=Yn("adminNav"),a=Yn("Icon"),c=Yn("RouterLink");return Vr(),Ds("main",null,[Y(o),D("div",TD,[D("ul",wD,[D("li",AD,[D("a",RD,[Y(c,{to:"/all-events",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Events ")]),_:1})])]),D("li",bD,[D("a",PD,[Y(c,{to:"/all-course",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Courses ")]),_:1})])]),D("li",SD,[D("a",CD,[Y(c,{to:"/edit/front-end",class:"route"},{default:lt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),We(" Front-End ")]),_:1})])])]),kD]),D("div",OD,[D("div",DD,[D("div",ND,[D("div",xD,[D("div",VD,[MD,D("p",LD,fc(s.users.length),1)])])]),FD]),D("div",UD,[D("div",$D,[D("div",BD,[jD,(Vr(!0),Ds(Tt,null,ZE(s.users,l=>(Vr(),Ds("ol",{class:"list-group my-2",key:l.id},[D("li",HD,[D("div",qD,[D("div",KD,[We("Full-Name: "),D("span",zD,fc(l.username),1)]),WD,We(),D("span",GD,fc(l.email),1)]),D("button",QD,[Y(a,{icon:"octicon:trash-24",color:"white"})])])]))),128))]),XD])])])])}const YD=Pa(ID,[["render",JD],["__scopeId","data-v-cbcacc60"]]);const ZD={},jh=t=>(hu("data-v-92baf67e"),t=t(),fu(),t),eN={class:""},tN={class:"page_404 d-flex justify-content-center align-items-center"},nN={class:"container"},rN={class:"row"},sN={class:"col"},iN={class:"col text-center"},oN=jh(()=>D("div",{class:"four_zero_four_bg"},[D("h1",{class:"text-center text-dark"},"404")],-1)),aN={class:"contant_box_404"},cN=jh(()=>D("h3",{class:"h2 text-dark"}," Look like you're lost ",-1)),lN=jh(()=>D("p",{class:"text-dark"},"the page you are looking for not avaible!",-1));function uN(t,e,n,r,s,i){const o=Yn("router-link");return Vr(),Ds("div",eN,[D("section",tN,[D("div",nN,[D("div",rN,[D("div",sN,[D("div",iN,[oN,D("div",aN,[cN,lN,Y(o,{to:"/",class:"link_404"},{default:lt(()=>[We("Go to Home")]),_:1})])])])])])])])}const hN=Pa(ZD,[["render",uN],["__scopeId","data-v-92baf67e"]]),ca=Dw({history:GT("/"),routes:[{path:"/",redirect:"/dashboard",name:"admin",meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>Mt(()=>import("./adminLogin-b2f1b712.js"),["assets/adminLogin-b2f1b712.js","assets/adminLogin-6f80fcb8.css"])},{path:"/:catchAll(.*)",component:hN},{path:"/404",component:()=>Mt(()=>import("./404-117806ce.js"),["assets/404-117806ce.js","assets/404-3e21175c.css"])},{path:"/dashboard",component:YD},{path:"/all-events",name:"admin-events",component:()=>Mt(()=>import("./adminEvent-aa473188.js"),[])},{path:"/edit/front-end",name:"front-end",component:()=>Mt(()=>import("./frontEnd-6e5e1f1e.js"),["assets/frontEnd-6e5e1f1e.js","assets/frontEnd-3b1487ed.css"])},{path:"/create-event",name:"admin-create-events",component:()=>Mt(()=>import("./addEvent-39ae7f90.js"),["assets/addEvent-39ae7f90.js","assets/addEvent-bdb6c0ca.css"])},{path:"/create-course",name:"admin-create-course",component:()=>Mt(()=>import("./addCourse-529c77be.js"),["assets/addCourse-529c77be.js","assets/addCourse-e91ac33a.css"])},{path:"/all-course",name:"admin-all-course",component:()=>Mt(()=>import("./allCourses-0d308493.js"),["assets/allCourses-0d308493.js","assets/fullPageLoader-9373b3c8.js","assets/fullPageLoader-46d0c714.css","assets/allCourses-e859c7db.css"])},{path:"/all-course/:id",name:"CourseDetail",component:()=>Mt(()=>import("./courseDetail-459df2c5.js"),["assets/courseDetail-459df2c5.js","assets/fullPageLoader-9373b3c8.js","assets/fullPageLoader-46d0c714.css","assets/courseDetail-dd2a12ab.css"]),props:!0,beforeEnter:(t,e,n)=>{const r=t.params.id;fN(r)?n():n("/404")}},{path:"/edit-course/:id/edit",name:"edit-course-detail",component:()=>Mt(()=>import("./editCourse-d4cd525e.js"),["assets/editCourse-d4cd525e.js","assets/editCourse-b039b83f.css"]),props:!0},{path:"/edit-event/:id/edit",name:"edit-event-detail",component:()=>Mt(()=>import("./editAdminEvent-5e88927a.js"),["assets/editAdminEvent-5e88927a.js","assets/editAdminEvent-008f1c09.css"]),props:!0}]});function fN(t){return!isNaN(parseInt(t))}ca.beforeEach((t,e,n)=>{t.path==="/dashboard"?Ql.currentUser?n():n("/login"):n()});const dN=ST({state:{user:{id:null,username:null,email:null,password:null}},mutations:{SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user={username:null,email:null,password:null}}},getters:{isAuthenticated:t=>!!t.user,getUserList:t=>t.userList},actions:{async login({commit:t},e){const{email:n,password:r}=e;try{await Nb(Ql,n,r),n==="admin@gmail.com"?(t("SET_USER",{email:n}),ca.push("/")):alert("You are not authorized as an admin.")}catch(s){switch(s.code){case"auth/user-not-founded":alert("user not found");break;case"auth/wrong-password":alert("wrong password");break;default:alert("Something went wrong")}return}},async logout({commit:t}){await Mb(Ql),t("CLEAR_USER"),ca.push("/login")}}}),pN={};function gN(t,e,n,r,s,i){const o=Yn("RouterView");return Vr(),yI(o)}const mN=Pa(pN,[["render",gN]]),Hh=nT(mN);Hh.use(dN);Hh.use(ca);Hh.mount("#app");export{vN as A,yI as B,Tt as F,am as I,Pa as _,D as a,EN as b,Ds as c,fu as d,Y as e,lt as f,We as g,pA as h,aO as i,j1 as j,ED as k,ZE as l,H1 as m,RN as n,Vr as o,hu as p,gD as q,Yn as r,CN as s,fc as t,IN as u,yN as v,_N as w,PN as x,SN as y,bN as z};
