(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ku(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ee={},jr=[],Nt=()=>{},GE=()=>!1,QE=/^on[^a-z]/,Ca=t=>QE.test(t),Ou=t=>t.startsWith("onUpdate:"),je=Object.assign,Nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},JE=Object.prototype.hasOwnProperty,oe=(t,e)=>JE.call(t,e),W=Array.isArray,$r=t=>Ni(t)==="[object Map]",ka=t=>Ni(t)==="[object Set]",Df=t=>Ni(t)==="[object Date]",te=t=>typeof t=="function",Le=t=>typeof t=="string",ni=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",Cm=t=>ve(t)&&te(t.then)&&te(t.catch),km=Object.prototype.toString,Ni=t=>km.call(t),XE=t=>Ni(t).slice(8,-1),Om=t=>Ni(t)==="[object Object]",Du=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bo=ku(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},YE=/-(\w)/g,rn=Oa(t=>t.replace(YE,(e,n)=>n?n.toUpperCase():"")),ZE=/\B([A-Z])/g,ms=Oa(t=>t.replace(ZE,"-$1").toLowerCase()),Na=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lc=Oa(t=>t?`on${Na(t)}`:""),ri=(t,e)=>!Object.is(t,e),So=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Go=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xf;const wl=()=>xf||(xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xu(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?rw(r):xu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Le(t))return t;if(ve(t))return t}}const ew=/;(?![^(]*\))/g,tw=/:([^]+)/,nw=/\/\*[^]*?\*\//g;function rw(t){const e={};return t.replace(nw,"").split(ew).forEach(n=>{if(n){const r=n.split(tw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vu(t){let e="";if(Le(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=Vu(t[n]);r&&(e+=r+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iw=ku(sw);function Nm(t){return!!t||t===""}function ow(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Da(t[r],e[r]);return n}function Da(t,e){if(t===e)return!0;let n=Df(t),r=Df(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ni(t),r=ni(e),n||r)return t===e;if(n=W(t),r=W(e),n||r)return n&&r?ow(t,e):!1;if(n=ve(t),r=ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Da(t[o],e[o]))return!1}}return String(t)===String(e)}function aw(t,e){return t.findIndex(n=>Da(n,e))}const at=t=>Le(t)?t:t==null?"":W(t)||ve(t)&&(t.toString===km||!te(t.toString))?JSON.stringify(t,Dm,2):String(t),Dm=(t,e)=>e&&e.__v_isRef?Dm(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ka(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!W(e)&&!Om(e)?String(e):e;let Pt;class cw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lw(t,e=Pt){e&&e.active&&e.effects.push(t)}function uw(){return Pt}const Mu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xm=t=>(t.w&qn)>0,Vm=t=>(t.n&qn)>0,hw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qn},fw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];xm(s)&&!Vm(s)?s.delete(t):e[n++]=s,s.w&=~qn,s.n&=~qn}e.length=n}},Tl=new WeakMap;let Ms=0,qn=1;const Il=30;let Ct;const lr=Symbol(""),Al=Symbol("");class Lu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lw(this,r)}run(){if(!this.active)return this.fn();let e=Ct,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,Fn=!0,qn=1<<++Ms,Ms<=Il?hw(this):Vf(this),this.fn()}finally{Ms<=Il&&fw(this),qn=1<<--Ms,Ct=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Vf(this),this.onStop&&this.onStop(),this.active=!1)}}function Vf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const Mm=[];function gs(){Mm.push(Fn),Fn=!1}function _s(){const t=Mm.pop();Fn=t===void 0?!0:t}function mt(t,e,n){if(Fn&&Ct){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Mu()),Lm(s)}}function Lm(t,e){let n=!1;Ms<=Il?Vm(t)||(t.n|=qn,n=!xm(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function _n(t,e,n,r,s,i){const o=Tl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Du(n)&&a.push(o.get("length")):(a.push(o.get(lr)),$r(t)&&a.push(o.get(Al)));break;case"delete":W(t)||(a.push(o.get(lr)),$r(t)&&a.push(o.get(Al)));break;case"set":$r(t)&&a.push(o.get(lr));break}if(a.length===1)a[0]&&Rl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Rl(Mu(c))}}function Rl(t,e){const n=W(t)?t:[...t];for(const r of n)r.computed&&Mf(r);for(const r of n)r.computed||Mf(r)}function Mf(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const dw=ku("__proto__,__v_isRef,__isVue"),Fm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ni)),pw=Fu(),mw=Fu(!1,!0),gw=Fu(!0),Lf=_w();function _w(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=he(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(he)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gs();const r=he(this)[e].apply(this,n);return _s(),r}}),t}function yw(t){const e=he(this);return mt(e,"has",t),e.hasOwnProperty(t)}function Fu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?xw:Hm:e?$m:jm).get(r))return r;const o=W(r);if(!t){if(o&&oe(Lf,s))return Reflect.get(Lf,s,i);if(s==="hasOwnProperty")return yw}const a=Reflect.get(r,s,i);return(ni(s)?Fm.has(s):dw(s))||(t||mt(r,"get",s),e)?a:tt(a)?o&&Du(s)?a:a.value:ve(a)?t?zm(a):Di(a):a}}const vw=Um(),Ew=Um(!0);function Um(t=!1){return function(n,r,s,i){let o=n[r];if(Zr(o)&&tt(o)&&!tt(s))return!1;if(!t&&(!Qo(s)&&!Zr(s)&&(o=he(o),s=he(s)),!W(n)&&tt(o)&&!tt(s)))return o.value=s,!0;const a=W(n)&&Du(r)?Number(r)<n.length:oe(n,r),c=Reflect.set(n,r,s,i);return n===he(i)&&(a?ri(s,o)&&_n(n,"set",r,s):_n(n,"add",r,s)),c}}function ww(t,e){const n=oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&_n(t,"delete",e,void 0),r}function Tw(t,e){const n=Reflect.has(t,e);return(!ni(e)||!Fm.has(e))&&mt(t,"has",e),n}function Iw(t){return mt(t,"iterate",W(t)?"length":lr),Reflect.ownKeys(t)}const Bm={get:pw,set:vw,deleteProperty:ww,has:Tw,ownKeys:Iw},Aw={get:gw,set(t,e){return!0},deleteProperty(t,e){return!0}},Rw=je({},Bm,{get:mw,set:Ew}),Uu=t=>t,xa=t=>Reflect.getPrototypeOf(t);function io(t,e,n=!1,r=!1){t=t.__v_raw;const s=he(t),i=he(e);n||(e!==i&&mt(s,"get",e),mt(s,"get",i));const{has:o}=xa(s),a=r?Uu:n?$u:si;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function oo(t,e=!1){const n=this.__v_raw,r=he(n),s=he(t);return e||(t!==s&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ao(t,e=!1){return t=t.__v_raw,!e&&mt(he(t),"iterate",lr),Reflect.get(t,"size",t)}function Ff(t){t=he(t);const e=he(this);return xa(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function Uf(t,e){e=he(e);const n=he(this),{has:r,get:s}=xa(n);let i=r.call(n,t);i||(t=he(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ri(e,o)&&_n(n,"set",t,e):_n(n,"add",t,e),this}function Bf(t){const e=he(this),{has:n,get:r}=xa(e);let s=n.call(e,t);s||(t=he(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&_n(e,"delete",t,void 0),i}function jf(){const t=he(this),e=t.size!==0,n=t.clear();return e&&_n(t,"clear",void 0,void 0),n}function co(t,e){return function(r,s){const i=this,o=i.__v_raw,a=he(o),c=e?Uu:t?$u:si;return!t&&mt(a,"iterate",lr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function lo(t,e,n){return function(...r){const s=this.__v_raw,i=he(s),o=$r(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Uu:e?$u:si;return!e&&mt(i,"iterate",c?Al:lr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function bw(){const t={get(i){return io(this,i)},get size(){return ao(this)},has:oo,add:Ff,set:Uf,delete:Bf,clear:jf,forEach:co(!1,!1)},e={get(i){return io(this,i,!1,!0)},get size(){return ao(this)},has:oo,add:Ff,set:Uf,delete:Bf,clear:jf,forEach:co(!1,!0)},n={get(i){return io(this,i,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:co(!0,!1)},r={get(i){return io(this,i,!0,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=lo(i,!1,!1),n[i]=lo(i,!0,!1),e[i]=lo(i,!1,!0),r[i]=lo(i,!0,!0)}),[t,n,e,r]}const[Sw,Pw,Cw,kw]=bw();function Bu(t,e){const n=e?t?kw:Cw:t?Pw:Sw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(oe(n,s)&&s in r?n:r,s,i)}const Ow={get:Bu(!1,!1)},Nw={get:Bu(!1,!0)},Dw={get:Bu(!0,!1)},jm=new WeakMap,$m=new WeakMap,Hm=new WeakMap,xw=new WeakMap;function Vw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mw(t){return t.__v_skip||!Object.isExtensible(t)?0:Vw(XE(t))}function Di(t){return Zr(t)?t:ju(t,!1,Bm,Ow,jm)}function qm(t){return ju(t,!1,Rw,Nw,$m)}function zm(t){return ju(t,!0,Aw,Dw,Hm)}function ju(t,e,n,r,s){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Mw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Hr(t){return Zr(t)?Hr(t.__v_raw):!!(t&&t.__v_isReactive)}function Zr(t){return!!(t&&t.__v_isReadonly)}function Qo(t){return!!(t&&t.__v_isShallow)}function Km(t){return Hr(t)||Zr(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function Wm(t){return Wo(t,"__v_skip",!0),t}const si=t=>ve(t)?Di(t):t,$u=t=>ve(t)?zm(t):t;function Gm(t){Fn&&Ct&&(t=he(t),Lm(t.dep||(t.dep=Mu())))}function Qm(t,e){t=he(t);const n=t.dep;n&&Rl(n)}function tt(t){return!!(t&&t.__v_isRef===!0)}function Lw(t){return Jm(t,!1)}function Fw(t){return Jm(t,!0)}function Jm(t,e){return tt(t)?t:new Uw(t,e)}class Uw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:si(e)}get value(){return Gm(this),this._value}set value(e){const n=this.__v_isShallow||Qo(e)||Zr(e);e=n?e:he(e),ri(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:si(e),Qm(this))}}function qr(t){return tt(t)?t.value:t}const Bw={get:(t,e,n)=>qr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xm(t){return Hr(t)?t:new Proxy(t,Bw)}class jw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Lu(e,()=>{this._dirty||(this._dirty=!0,Qm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=he(this);return Gm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $w(t,e,n=!1){let r,s;const i=te(t);return i?(r=t,s=Nt):(r=t.get,s=t.set),new jw(r,s,i||!s,n)}function Un(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Va(i,e,n)}return s}function Dt(t,e,n,r){if(te(t)){const i=Un(t,e,n,r);return i&&Cm(i)&&i.catch(o=>{Va(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}function Va(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Un(c,null,10,[t,o,a]);return}}Hw(t,n,s,r)}function Hw(t,e,n,r=!0){console.error(t)}let ii=!1,bl=!1;const Ze=[];let zt=0;const zr=[];let hn=null,nr=0;const Ym=Promise.resolve();let Hu=null;function Zm(t){const e=Hu||Ym;return t?e.then(this?t.bind(this):t):e}function qw(t){let e=zt+1,n=Ze.length;for(;e<n;){const r=e+n>>>1;oi(Ze[r])<t?e=r+1:n=r}return e}function qu(t){(!Ze.length||!Ze.includes(t,ii&&t.allowRecurse?zt+1:zt))&&(t.id==null?Ze.push(t):Ze.splice(qw(t.id),0,t),eg())}function eg(){!ii&&!bl&&(bl=!0,Hu=Ym.then(ng))}function zw(t){const e=Ze.indexOf(t);e>zt&&Ze.splice(e,1)}function Kw(t){W(t)?zr.push(...t):(!hn||!hn.includes(t,t.allowRecurse?nr+1:nr))&&zr.push(t),eg()}function $f(t,e=ii?zt+1:0){for(;e<Ze.length;e++){const n=Ze[e];n&&n.pre&&(Ze.splice(e,1),e--,n())}}function tg(t){if(zr.length){const e=[...new Set(zr)];if(zr.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((n,r)=>oi(n)-oi(r)),nr=0;nr<hn.length;nr++)hn[nr]();hn=null,nr=0}}const oi=t=>t.id==null?1/0:t.id,Ww=(t,e)=>{const n=oi(t)-oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ng(t){bl=!1,ii=!0,Ze.sort(Ww);const e=Nt;try{for(zt=0;zt<Ze.length;zt++){const n=Ze[zt];n&&n.active!==!1&&Un(n,null,14)}}finally{zt=0,Ze.length=0,tg(),ii=!1,Hu=null,(Ze.length||zr.length)&&ng()}}function Gw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Ee;f&&(s=n.map(d=>Le(d)?d.trim():d)),h&&(s=n.map(Go))}let a,c=r[a=Lc(e)]||r[a=Lc(rn(e))];!c&&i&&(c=r[a=Lc(ms(e))]),c&&Dt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(l,t,6,s)}}function rg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=rg(l,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ve(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):je(o,i),ve(t)&&r.set(t,o),o)}function Ma(t,e){return!t||!Ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,ms(e))||oe(t,e))}let At=null,La=null;function Jo(t){const e=At;return At=t,La=t&&t.type.__scopeId||null,e}function zu(t){La=t}function Ku(){La=null}function dt(t,e=At,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Zf(-1);const i=Jo(e);let o;try{o=t(...s)}finally{Jo(i),r._d&&Zf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=t;let v,A;const b=Jo(t);try{if(n.shapeFlag&4){const O=s||r;v=qt(u.call(O,O,h,i,d,f,g)),A=c}else{const O=e;v=qt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),A=e.props?c:Qw(c)}}catch(O){zs.length=0,Va(O,t,1),v=Y(ai)}let D=v;if(A&&_!==!1){const O=Object.keys(A),{shapeFlag:ne}=D;O.length&&ne&7&&(o&&O.some(Ou)&&(A=Jw(A,o)),D=es(D,A))}return n.dirs&&(D=es(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),v=D,Jo(b),v}const Qw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ca(n))&&((e||(e={}))[n]=t[n]);return e},Jw=(t,e)=>{const n={};for(const r in t)(!Ou(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ma(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Hf(r,o,l):!0:!!o;return!1}function Hf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function Yw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Zw=t=>t.__isSuspense;function eT(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Kw(t)}const uo={};function Kr(t,e,n){return sg(t,e,n)}function sg(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ee){var a;const c=uw()===((a=We)==null?void 0:a.scope)?We:null;let l,u=!1,h=!1;if(tt(t)?(l=()=>t.value,u=Qo(t)):Hr(t)?(l=()=>t,r=!0):W(t)?(h=!0,u=t.some(O=>Hr(O)||Qo(O)),l=()=>t.map(O=>{if(tt(O))return O.value;if(Hr(O))return ir(O);if(te(O))return Un(O,c,2)})):te(t)?e?l=()=>Un(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Dt(t,c,3,[d])}:l=Nt,e&&r){const O=l;l=()=>ir(O())}let f,d=O=>{f=b.onStop=()=>{Un(O,c,4)}},g;if(li)if(d=Nt,e?n&&Dt(e,c,3,[l(),h?[]:void 0,d]):l(),s==="sync"){const O=QT();g=O.__watcherHandles||(O.__watcherHandles=[])}else return Nt;let _=h?new Array(t.length).fill(uo):uo;const v=()=>{if(b.active)if(e){const O=b.run();(r||u||(h?O.some((ne,U)=>ri(ne,_[U])):ri(O,_)))&&(f&&f(),Dt(e,c,3,[O,_===uo?void 0:h&&_[0]===uo?[]:_,d]),_=O)}else b.run()};v.allowRecurse=!!e;let A;s==="sync"?A=v:s==="post"?A=()=>ft(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),A=()=>qu(v));const b=new Lu(l,A);e?n?v():_=b.run():s==="post"?ft(b.run.bind(b),c&&c.suspense):b.run();const D=()=>{b.stop(),c&&c.scope&&Nu(c.scope.effects,b)};return g&&g.push(D),D}function tT(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?ig(r,t):()=>r[t]:t.bind(r,r);let i;te(e)?i=e:(i=e.handler,n=e);const o=We;ts(this);const a=sg(s,i.bind(r),n);return o?ts(o):hr(),a}function ig(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))ir(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(ka(t)||$r(t))t.forEach(n=>{ir(n,e)});else if(Om(t))for(const n in t)ir(t[n],e);return t}function AM(t,e){const n=At;if(n===null)return t;const r=ja(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ee]=e[i];o&&(te(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Zn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(gs(),Dt(c,n,8,[t.el,a,t,e]),_s())}}function Wu(t,e){return te(t)?(()=>je({name:t.name},e,{setup:t}))():t}const Po=t=>!!t.type.__asyncLoader,og=t=>t.type.__isKeepAlive;function nT(t,e){ag(t,"a",e)}function rT(t,e){ag(t,"da",e)}function ag(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)og(s.parent.vnode)&&sT(r,e,n,s),s=s.parent}}function sT(t,e,n,r){const s=Fa(e,t,r,!0);cg(()=>{Nu(r[e],s)},n)}function Fa(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gs(),ts(n);const a=Dt(e,n,t,o);return hr(),_s(),a});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=We)=>(!li||t==="sp")&&Fa(t,(...r)=>e(...r),n),iT=In("bm"),oT=In("m"),aT=In("bu"),cT=In("u"),lT=In("bum"),cg=In("um"),uT=In("sp"),hT=In("rtg"),fT=In("rtc");function dT(t,e=We){Fa("ec",t,e)}const lg="components";function ur(t,e){return mT(lg,t,!0,e)||t}const pT=Symbol.for("v-ndc");function mT(t,e,n=!0,r=!1){const s=At||We;if(s){const i=s.type;if(t===lg){const a=KT(i,!1);if(a&&(a===e||a===rn(e)||a===Na(rn(e))))return i}const o=qf(s[t]||i[t],e)||qf(s.appContext[t],e);return!o&&r?i:o}}function qf(t,e){return t&&(t[e]||t[rn(e)]||t[Na(rn(e))])}function Uc(t,e,n,r){let s;const i=n&&n[r];if(W(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Sl=t=>t?Eg(t)?ja(t)||t.proxy:Sl(t.parent):null,qs=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$emit:t=>t.emit,$options:t=>Gu(t),$forceUpdate:t=>t.f||(t.f=()=>qu(t.update)),$nextTick:t=>t.n||(t.n=Zm.bind(t.proxy)),$watch:t=>tT.bind(t)}),Bc=(t,e)=>t!==Ee&&!t.__isScriptSetup&&oe(t,e),gT={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Bc(r,e))return o[e]=1,r[e];if(s!==Ee&&oe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==Ee&&oe(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const u=qs[e];let h,f;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&oe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,oe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Bc(s,e)?(s[e]=n,!0):r!==Ee&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&oe(t,o)||Bc(e,o)||(a=i[0])&&oe(a,o)||oe(r,o)||oe(qs,o)||oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zf(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pl=!0;function _T(t){const e=Gu(t),n=t.proxy,r=t.ctx;Pl=!1,e.beforeCreate&&Kf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:v,beforeDestroy:A,beforeUnmount:b,destroyed:D,unmounted:O,render:ne,renderTracked:U,renderTriggered:le,errorCaptured:Se,serverPrefetch:qe,expose:Ae,inheritAttrs:An,components:Yn,directives:Ft,filters:Ss}=e;if(l&&yT(l,r,null),o)for(const _e in o){const fe=o[_e];te(fe)&&(r[_e]=fe.bind(n))}if(s){const _e=s.call(n,n);ve(_e)&&(t.data=Di(_e))}if(Pl=!0,i)for(const _e in i){const fe=i[_e],ln=te(fe)?fe.bind(n,n):te(fe.get)?fe.get.bind(n,n):Nt,Rn=!te(fe)&&te(fe.set)?fe.set.bind(n):Nt,Ut=kt({get:ln,set:Rn});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:ht=>Ut.value=ht})}if(a)for(const _e in a)ug(a[_e],r,n,_e);if(c){const _e=te(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(fe=>{Co(fe,_e[fe])})}u&&Kf(u,t,"c");function Ue(_e,fe){W(fe)?fe.forEach(ln=>_e(ln.bind(n))):fe&&_e(fe.bind(n))}if(Ue(iT,h),Ue(oT,f),Ue(aT,d),Ue(cT,g),Ue(nT,_),Ue(rT,v),Ue(dT,Se),Ue(fT,U),Ue(hT,le),Ue(lT,b),Ue(cg,O),Ue(uT,qe),W(Ae))if(Ae.length){const _e=t.exposed||(t.exposed={});Ae.forEach(fe=>{Object.defineProperty(_e,fe,{get:()=>n[fe],set:ln=>n[fe]=ln})})}else t.exposed||(t.exposed={});ne&&t.render===Nt&&(t.render=ne),An!=null&&(t.inheritAttrs=An),Yn&&(t.components=Yn),Ft&&(t.directives=Ft)}function yT(t,e,n=Nt){W(t)&&(t=Cl(t));for(const r in t){const s=t[r];let i;ve(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Kf(t,e,n){Dt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ug(t,e,n,r){const s=r.includes(".")?ig(n,r):()=>n[r];if(Le(t)){const i=e[t];te(i)&&Kr(s,i)}else if(te(t))Kr(s,t.bind(n));else if(ve(t))if(W(t))t.forEach(i=>ug(i,e,n,r));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&Kr(s,i,t)}}function Gu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Xo(c,l,o,!0)),Xo(c,e,o)),ve(e)&&i.set(e,c),c}function Xo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xo(t,i,n,!0),s&&s.forEach(o=>Xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vT={data:Wf,props:Gf,emits:Gf,methods:Ls,computed:Ls,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Ls,directives:Ls,watch:wT,provide:Wf,inject:ET};function Wf(t,e){return e?t?function(){return je(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function ET(t,e){return Ls(Cl(t),Cl(e))}function Cl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ls(t,e){return t?je(Object.create(null),t,e):e}function Gf(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:je(Object.create(null),zf(t),zf(e??{})):e}function wT(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function hg(){return{app:null,config:{isNativeTag:GE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let TT=0;function IT(t,e){return function(r,s=null){te(r)||(r=je({},r)),s!=null&&!ve(s)&&(s=null);const i=hg(),o=new Set;let a=!1;const c=i.app={_uid:TT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:JT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Y(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,ja(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Yo=c;try{return l()}finally{Yo=null}}};return c}}let Yo=null;function Co(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=We||At;if(r||Yo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&te(e)?e.call(r&&r.proxy):e}}function AT(t,e,n,r=!1){const s={},i={};Wo(i,Ba,1),t.propsDefaults=Object.create(null),fg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function RT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=he(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ma(t.emitsOptions,f))continue;const d=e[f];if(c)if(oe(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const g=rn(f);s[g]=kl(c,a,g,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{fg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=ms(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=kl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&_n(t,"set","$attrs")}function fg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(bo(c))continue;const l=e[c];let u;s&&oe(s,u=rn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ma(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=he(n),l=a||Ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=kl(s,c,h,l[h],t,!oe(l,h))}}return o}function kl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&te(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ts(s),r=l[n]=c.call(null,e),hr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ms(n))&&(r=!0))}return r}function dg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[f,d]=dg(h,e,!0);je(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ve(t)&&r.set(t,jr),jr;if(W(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);Qf(h)&&(o[h]=Ee)}else if(i)for(const u in i){const h=rn(u);if(Qf(h)){const f=i[u],d=o[h]=W(f)||te(f)?{type:f}:je({},f);if(d){const g=Yf(Boolean,d.type),_=Yf(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||oe(d,"default"))&&a.push(h)}}}const l=[o,a];return ve(t)&&r.set(t,l),l}function Qf(t){return t[0]!=="$"}function Jf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xf(t,e){return Jf(t)===Jf(e)}function Yf(t,e){return W(e)?e.findIndex(n=>Xf(n,t)):te(e)&&Xf(e,t)?0:-1}const pg=t=>t[0]==="_"||t==="$stable",Qu=t=>W(t)?t.map(qt):[qt(t)],bT=(t,e,n)=>{if(e._n)return e;const r=dt((...s)=>Qu(e(...s)),n);return r._c=!1,r},mg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pg(s))continue;const i=t[s];if(te(i))e[s]=bT(s,i,r);else if(i!=null){const o=Qu(i);e[s]=()=>o}}},gg=(t,e)=>{const n=Qu(e);t.slots.default=()=>n},ST=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Wo(e,"_",n)):mg(e,t.slots={})}else t.slots={},e&&gg(t,e);Wo(t.slots,Ba,1)},PT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,mg(e,s)),o=e}else e&&(gg(t,e),o={default:1});if(i)for(const a in s)!pg(a)&&!(a in o)&&delete s[a]};function Ol(t,e,n,r,s=!1){if(W(t)){t.forEach((f,d)=>Ol(f,e&&(W(e)?e[d]:e),n,r,s));return}if(Po(r)&&!s)return;const i=r.shapeFlag&4?ja(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):tt(l)&&(l.value=null)),te(c))Un(c,a,12,[o,u]);else{const f=Le(c),d=tt(c);if(f||d){const g=()=>{if(t.f){const _=f?oe(h,c)?h[c]:u[c]:c.value;s?W(_)&&Nu(_,i):W(_)?_.includes(i)||_.push(i):f?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,oe(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,ft(g,n)):g()}}}const ft=eT;function CT(t){return kT(t)}function kT(t,e){const n=wl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Nt,insertStaticContent:g}=t,_=(p,m,y,E=null,R=null,S=null,L=!1,N=null,x=!!m.dynamicChildren)=>{if(p===m)return;p&&!Cs(p,m)&&(E=I(p),ht(p,R,S,!0),p=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:C,ref:q,shapeFlag:B}=m;switch(C){case Ua:v(p,m,y,E);break;case ai:A(p,m,y,E);break;case ko:p==null&&b(m,y,E,L);break;case yt:Yn(p,m,y,E,R,S,L,N,x);break;default:B&1?ne(p,m,y,E,R,S,L,N,x):B&6?Ft(p,m,y,E,R,S,L,N,x):(B&64||B&128)&&C.process(p,m,y,E,R,S,L,N,x,V)}q!=null&&R&&Ol(q,p&&p.ref,S,m||p,!m)},v=(p,m,y,E)=>{if(p==null)r(m.el=a(m.children),y,E);else{const R=m.el=p.el;m.children!==p.children&&l(R,m.children)}},A=(p,m,y,E)=>{p==null?r(m.el=c(m.children||""),y,E):m.el=p.el},b=(p,m,y,E)=>{[p.el,p.anchor]=g(p.children,m,y,E,p.el,p.anchor)},D=({el:p,anchor:m},y,E)=>{let R;for(;p&&p!==m;)R=f(p),r(p,y,E),p=R;r(m,y,E)},O=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=f(p),s(p),p=y;s(m)},ne=(p,m,y,E,R,S,L,N,x)=>{L=L||m.type==="svg",p==null?U(m,y,E,R,S,L,N,x):qe(p,m,R,S,L,N,x)},U=(p,m,y,E,R,S,L,N)=>{let x,C;const{type:q,props:B,shapeFlag:z,transition:X,dirs:re}=p;if(x=p.el=o(p.type,S,B&&B.is,B),z&8?u(x,p.children):z&16&&Se(p.children,x,null,E,R,S&&q!=="foreignObject",L,N),re&&Zn(p,null,E,"created"),le(x,p,p.scopeId,L,E),B){for(const ge in B)ge!=="value"&&!bo(ge)&&i(x,ge,null,B[ge],S,p.children,E,R,Qe);"value"in B&&i(x,"value",null,B.value),(C=B.onVnodeBeforeMount)&&jt(C,E,p)}re&&Zn(p,null,E,"beforeMount");const ye=(!R||R&&!R.pendingBranch)&&X&&!X.persisted;ye&&X.beforeEnter(x),r(x,m,y),((C=B&&B.onVnodeMounted)||ye||re)&&ft(()=>{C&&jt(C,E,p),ye&&X.enter(x),re&&Zn(p,null,E,"mounted")},R)},le=(p,m,y,E,R)=>{if(y&&d(p,y),E)for(let S=0;S<E.length;S++)d(p,E[S]);if(R){let S=R.subTree;if(m===S){const L=R.vnode;le(p,L,L.scopeId,L.slotScopeIds,R.parent)}}},Se=(p,m,y,E,R,S,L,N,x=0)=>{for(let C=x;C<p.length;C++){const q=p[C]=N?kn(p[C]):qt(p[C]);_(null,q,m,y,E,R,S,L,N)}},qe=(p,m,y,E,R,S,L)=>{const N=m.el=p.el;let{patchFlag:x,dynamicChildren:C,dirs:q}=m;x|=p.patchFlag&16;const B=p.props||Ee,z=m.props||Ee;let X;y&&er(y,!1),(X=z.onVnodeBeforeUpdate)&&jt(X,y,m,p),q&&Zn(m,p,y,"beforeUpdate"),y&&er(y,!0);const re=R&&m.type!=="foreignObject";if(C?Ae(p.dynamicChildren,C,N,y,E,re,S):L||fe(p,m,N,null,y,E,re,S,!1),x>0){if(x&16)An(N,m,B,z,y,E,R);else if(x&2&&B.class!==z.class&&i(N,"class",null,z.class,R),x&4&&i(N,"style",B.style,z.style,R),x&8){const ye=m.dynamicProps;for(let ge=0;ge<ye.length;ge++){const Oe=ye[ge],St=B[Oe],Or=z[Oe];(Or!==St||Oe==="value")&&i(N,Oe,St,Or,R,p.children,y,E,Qe)}}x&1&&p.children!==m.children&&u(N,m.children)}else!L&&C==null&&An(N,m,B,z,y,E,R);((X=z.onVnodeUpdated)||q)&&ft(()=>{X&&jt(X,y,m,p),q&&Zn(m,p,y,"updated")},E)},Ae=(p,m,y,E,R,S,L)=>{for(let N=0;N<m.length;N++){const x=p[N],C=m[N],q=x.el&&(x.type===yt||!Cs(x,C)||x.shapeFlag&70)?h(x.el):y;_(x,C,q,null,E,R,S,L,!0)}},An=(p,m,y,E,R,S,L)=>{if(y!==E){if(y!==Ee)for(const N in y)!bo(N)&&!(N in E)&&i(p,N,y[N],null,L,m.children,R,S,Qe);for(const N in E){if(bo(N))continue;const x=E[N],C=y[N];x!==C&&N!=="value"&&i(p,N,C,x,L,m.children,R,S,Qe)}"value"in E&&i(p,"value",y.value,E.value)}},Yn=(p,m,y,E,R,S,L,N,x)=>{const C=m.el=p?p.el:a(""),q=m.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:z,slotScopeIds:X}=m;X&&(N=N?N.concat(X):X),p==null?(r(C,y,E),r(q,y,E),Se(m.children,y,q,R,S,L,N,x)):B>0&&B&64&&z&&p.dynamicChildren?(Ae(p.dynamicChildren,z,y,R,S,L,N),(m.key!=null||R&&m===R.subTree)&&_g(p,m,!0)):fe(p,m,y,q,R,S,L,N,x)},Ft=(p,m,y,E,R,S,L,N,x)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?R.ctx.activate(m,y,E,L,x):Ss(m,y,E,R,S,L,x):Pr(p,m,x)},Ss=(p,m,y,E,R,S,L)=>{const N=p.component=jT(p,E,R);if(og(p)&&(N.ctx.renderer=V),$T(N),N.asyncDep){if(R&&R.registerDep(N,Ue),!p.el){const x=N.subTree=Y(ai);A(null,x,m,y)}return}Ue(N,p,m,y,R,S,L)},Pr=(p,m,y)=>{const E=m.component=p.component;if(Xw(p,m,y))if(E.asyncDep&&!E.asyncResolved){_e(E,m,y);return}else E.next=m,zw(E.update),E.update();else m.el=p.el,E.vnode=m},Ue=(p,m,y,E,R,S,L)=>{const N=()=>{if(p.isMounted){let{next:q,bu:B,u:z,parent:X,vnode:re}=p,ye=q,ge;er(p,!1),q?(q.el=re.el,_e(p,q,L)):q=re,B&&So(B),(ge=q.props&&q.props.onVnodeBeforeUpdate)&&jt(ge,X,q,re),er(p,!0);const Oe=Fc(p),St=p.subTree;p.subTree=Oe,_(St,Oe,h(St.el),I(St),p,R,S),q.el=Oe.el,ye===null&&Yw(p,Oe.el),z&&ft(z,R),(ge=q.props&&q.props.onVnodeUpdated)&&ft(()=>jt(ge,X,q,re),R)}else{let q;const{el:B,props:z}=m,{bm:X,m:re,parent:ye}=p,ge=Po(m);if(er(p,!1),X&&So(X),!ge&&(q=z&&z.onVnodeBeforeMount)&&jt(q,ye,m),er(p,!0),B&&de){const Oe=()=>{p.subTree=Fc(p),de(B,p.subTree,p,R,null)};ge?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Oe()):Oe()}else{const Oe=p.subTree=Fc(p);_(null,Oe,y,E,p,R,S),m.el=Oe.el}if(re&&ft(re,R),!ge&&(q=z&&z.onVnodeMounted)){const Oe=m;ft(()=>jt(q,ye,Oe),R)}(m.shapeFlag&256||ye&&Po(ye.vnode)&&ye.vnode.shapeFlag&256)&&p.a&&ft(p.a,R),p.isMounted=!0,m=y=E=null}},x=p.effect=new Lu(N,()=>qu(C),p.scope),C=p.update=()=>x.run();C.id=p.uid,er(p,!0),C()},_e=(p,m,y)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,RT(p,m.props,E,y),PT(p,m.children,y),gs(),$f(),_s()},fe=(p,m,y,E,R,S,L,N,x=!1)=>{const C=p&&p.children,q=p?p.shapeFlag:0,B=m.children,{patchFlag:z,shapeFlag:X}=m;if(z>0){if(z&128){Rn(C,B,y,E,R,S,L,N,x);return}else if(z&256){ln(C,B,y,E,R,S,L,N,x);return}}X&8?(q&16&&Qe(C,R,S),B!==C&&u(y,B)):q&16?X&16?Rn(C,B,y,E,R,S,L,N,x):Qe(C,R,S,!0):(q&8&&u(y,""),X&16&&Se(B,y,E,R,S,L,N,x))},ln=(p,m,y,E,R,S,L,N,x)=>{p=p||jr,m=m||jr;const C=p.length,q=m.length,B=Math.min(C,q);let z;for(z=0;z<B;z++){const X=m[z]=x?kn(m[z]):qt(m[z]);_(p[z],X,y,null,R,S,L,N,x)}C>q?Qe(p,R,S,!0,!1,B):Se(m,y,E,R,S,L,N,x,B)},Rn=(p,m,y,E,R,S,L,N,x)=>{let C=0;const q=m.length;let B=p.length-1,z=q-1;for(;C<=B&&C<=z;){const X=p[C],re=m[C]=x?kn(m[C]):qt(m[C]);if(Cs(X,re))_(X,re,y,null,R,S,L,N,x);else break;C++}for(;C<=B&&C<=z;){const X=p[B],re=m[z]=x?kn(m[z]):qt(m[z]);if(Cs(X,re))_(X,re,y,null,R,S,L,N,x);else break;B--,z--}if(C>B){if(C<=z){const X=z+1,re=X<q?m[X].el:E;for(;C<=z;)_(null,m[C]=x?kn(m[C]):qt(m[C]),y,re,R,S,L,N,x),C++}}else if(C>z)for(;C<=B;)ht(p[C],R,S,!0),C++;else{const X=C,re=C,ye=new Map;for(C=re;C<=z;C++){const _t=m[C]=x?kn(m[C]):qt(m[C]);_t.key!=null&&ye.set(_t.key,C)}let ge,Oe=0;const St=z-re+1;let Or=!1,kf=0;const Ps=new Array(St);for(C=0;C<St;C++)Ps[C]=0;for(C=X;C<=B;C++){const _t=p[C];if(Oe>=St){ht(_t,R,S,!0);continue}let Bt;if(_t.key!=null)Bt=ye.get(_t.key);else for(ge=re;ge<=z;ge++)if(Ps[ge-re]===0&&Cs(_t,m[ge])){Bt=ge;break}Bt===void 0?ht(_t,R,S,!0):(Ps[Bt-re]=C+1,Bt>=kf?kf=Bt:Or=!0,_(_t,m[Bt],y,null,R,S,L,N,x),Oe++)}const Of=Or?OT(Ps):jr;for(ge=Of.length-1,C=St-1;C>=0;C--){const _t=re+C,Bt=m[_t],Nf=_t+1<q?m[_t+1].el:E;Ps[C]===0?_(null,Bt,y,Nf,R,S,L,N,x):Or&&(ge<0||C!==Of[ge]?Ut(Bt,y,Nf,2):ge--)}}},Ut=(p,m,y,E,R=null)=>{const{el:S,type:L,transition:N,children:x,shapeFlag:C}=p;if(C&6){Ut(p.component.subTree,m,y,E);return}if(C&128){p.suspense.move(m,y,E);return}if(C&64){L.move(p,m,y,V);return}if(L===yt){r(S,m,y);for(let B=0;B<x.length;B++)Ut(x[B],m,y,E);r(p.anchor,m,y);return}if(L===ko){D(p,m,y);return}if(E!==2&&C&1&&N)if(E===0)N.beforeEnter(S),r(S,m,y),ft(()=>N.enter(S),R);else{const{leave:B,delayLeave:z,afterLeave:X}=N,re=()=>r(S,m,y),ye=()=>{B(S,()=>{re(),X&&X()})};z?z(S,re,ye):ye()}else r(S,m,y)},ht=(p,m,y,E=!1,R=!1)=>{const{type:S,props:L,ref:N,children:x,dynamicChildren:C,shapeFlag:q,patchFlag:B,dirs:z}=p;if(N!=null&&Ol(N,null,y,p,!0),q&256){m.ctx.deactivate(p);return}const X=q&1&&z,re=!Po(p);let ye;if(re&&(ye=L&&L.onVnodeBeforeUnmount)&&jt(ye,m,p),q&6)so(p.component,y,E);else{if(q&128){p.suspense.unmount(y,E);return}X&&Zn(p,null,m,"beforeUnmount"),q&64?p.type.remove(p,m,y,R,V,E):C&&(S!==yt||B>0&&B&64)?Qe(C,m,y,!1,!0):(S===yt&&B&384||!R&&q&16)&&Qe(x,m,y),E&&Cr(p)}(re&&(ye=L&&L.onVnodeUnmounted)||X)&&ft(()=>{ye&&jt(ye,m,p),X&&Zn(p,null,m,"unmounted")},y)},Cr=p=>{const{type:m,el:y,anchor:E,transition:R}=p;if(m===yt){kr(y,E);return}if(m===ko){O(p);return}const S=()=>{s(y),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:L,delayLeave:N}=R,x=()=>L(y,S);N?N(p.el,S,x):x()}else S()},kr=(p,m)=>{let y;for(;p!==m;)y=f(p),s(p),p=y;s(m)},so=(p,m,y)=>{const{bum:E,scope:R,update:S,subTree:L,um:N}=p;E&&So(E),R.stop(),S&&(S.active=!1,ht(L,p,m,y)),N&&ft(N,m),ft(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Qe=(p,m,y,E=!1,R=!1,S=0)=>{for(let L=S;L<p.length;L++)ht(p[L],m,y,E,R)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),F=(p,m,y)=>{p==null?m._vnode&&ht(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,y),$f(),tg(),m._vnode=p},V={p:_,um:ht,m:Ut,r:Cr,mt:Ss,mc:Se,pc:fe,pbc:Ae,n:I,o:t};let $,de;return e&&([$,de]=e(V)),{render:F,hydrate:$,createApp:IT(F,$)}}function er({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _g(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=kn(s[i]),a.el=o.el),n||_g(o,a)),a.type===Ua&&(a.el=o.el)}}function OT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const NT=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),Ua=Symbol.for("v-txt"),ai=Symbol.for("v-cmt"),ko=Symbol.for("v-stc"),zs=[];let Ot=null;function Ht(t=!1){zs.push(Ot=t?null:[])}function DT(){zs.pop(),Ot=zs[zs.length-1]||null}let ci=1;function Zf(t){ci+=t}function yg(t){return t.dynamicChildren=ci>0?Ot||jr:null,DT(),ci>0&&Ot&&Ot.push(t),t}function fn(t,e,n,r,s,i){return yg(w(t,e,n,r,s,i,!0))}function xT(t,e,n,r,s){return yg(Y(t,e,n,r,s,!0))}function Nl(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Ba="__vInternal",vg=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||tt(t)||te(t)?{i:At,r:t,k:e,f:!!n}:t:null);function w(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vg(e),ref:e&&Oo(e),scopeId:La,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:At};return a?(Ju(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),ci>0&&!o&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const Y=VT;function VT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===pT)&&(t=ai),Nl(t)){const a=es(t,e,!0);return n&&Ju(a,n),ci>0&&!i&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(t)]=a:Ot.push(a)),a.patchFlag|=-2,a}if(WT(t)&&(t=t.__vccOpts),e){e=MT(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Vu(a)),ve(c)&&(Km(c)&&!W(c)&&(c=je({},c)),e.style=xu(c))}const o=Le(t)?1:Zw(t)?128:NT(t)?64:ve(t)?4:te(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function MT(t){return t?Km(t)||Ba in t?je({},t):t:null}function es(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?FT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vg(a),ref:e&&e.ref?n&&s?W(s)?s.concat(Oo(e)):[s,Oo(e)]:Oo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&es(t.ssContent),ssFallback:t.ssFallback&&es(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Re(t=" ",e=0){return Y(Ua,null,t,e)}function LT(t,e){const n=Y(ko,null,t);return n.staticCount=e,n}function qt(t){return t==null||typeof t=="boolean"?Y(ai):W(t)?Y(yt,null,t.slice()):typeof t=="object"?kn(t):Y(Ua,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:es(t)}function Ju(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ju(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ba in e)?e._ctx=At:s===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[Re(e)]):n=8);t.children=e,t.shapeFlag|=n}function FT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Vu([e.class,r.class]));else if(s==="style")e.style=xu([e.style,r.style]);else if(Ca(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function jt(t,e,n,r=null){Dt(t,e,7,[n,r])}const UT=hg();let BT=0;function jT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||UT,i={uid:BT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new cw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dg(r,s),emitsOptions:rg(r,s),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:r.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gw.bind(null,i),t.ce&&t.ce(i),i}let We=null,Xu,Nr,ed="__VUE_INSTANCE_SETTERS__";(Nr=wl()[ed])||(Nr=wl()[ed]=[]),Nr.push(t=>We=t),Xu=t=>{Nr.length>1?Nr.forEach(e=>e(t)):Nr[0](t)};const ts=t=>{Xu(t),t.scope.on()},hr=()=>{We&&We.scope.off(),Xu(null)};function Eg(t){return t.vnode.shapeFlag&4}let li=!1;function $T(t,e=!1){li=e;const{props:n,children:r}=t.vnode,s=Eg(t);AT(t,n,s,e),ST(t,r);const i=s?HT(t,e):void 0;return li=!1,i}function HT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wm(new Proxy(t.ctx,gT));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?zT(t):null;ts(t),gs();const i=Un(r,t,0,[t.props,s]);if(_s(),hr(),Cm(i)){if(i.then(hr,hr),e)return i.then(o=>{td(t,o,e)}).catch(o=>{Va(o,t,0)});t.asyncDep=i}else td(t,i,e)}else wg(t,e)}function td(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Xm(e)),wg(t,n)}let nd;function wg(t,e,n){const r=t.type;if(!t.render){if(!e&&nd&&!r.render){const s=r.template||Gu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=je(je({isCustomElement:i,delimiters:a},o),c);r.render=nd(s,l)}}t.render=r.render||Nt}ts(t),gs(),_T(t),_s(),hr()}function qT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function zT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return qT(t)},slots:t.slots,emit:t.emit,expose:e}}function ja(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xm(Wm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function KT(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function WT(t){return te(t)&&"__vccOpts"in t}const kt=(t,e)=>$w(t,e,li);function Zo(t,e,n){const r=arguments.length;return r===2?ve(e)&&!W(e)?Nl(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nl(n)&&(n=[n]),Y(t,e,n))}const GT=Symbol.for("v-scx"),QT=()=>Xt(GT),JT="3.3.4",XT="http://www.w3.org/2000/svg",rr=typeof document<"u"?document:null,rd=rr&&rr.createElement("template"),YT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?rr.createElementNS(XT,t):rr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rr.createTextNode(t),createComment:t=>rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{rd.innerHTML=r?`<svg>${t}</svg>`:t;const a=rd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ZT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function eI(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&Dl(r,i,"");for(const i in n)Dl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const sd=/\s*!important$/;function Dl(t,e,n){if(W(n))n.forEach(r=>Dl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=tI(t,e);sd.test(n)?t.setProperty(ms(r),n.replace(sd,""),"important"):t[r]=n}}const id=["Webkit","Moz","ms"],jc={};function tI(t,e){const n=jc[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return jc[e]=r;r=Na(r);for(let s=0;s<id.length;s++){const i=id[s]+r;if(i in t)return jc[e]=i}return e}const od="http://www.w3.org/1999/xlink";function nI(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n);else{const i=iw(e);n==null||i&&!Nm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function rI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Nm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function sr(t,e,n,r){t.addEventListener(e,n,r)}function sI(t,e,n,r){t.removeEventListener(e,n,r)}function iI(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=oI(e);if(r){const l=i[e]=lI(r,s);sr(t,a,l,c)}else o&&(sI(t,a,o,c),i[e]=void 0)}}const ad=/(?:Once|Passive|Capture)$/;function oI(t){let e;if(ad.test(t)){e={};let r;for(;r=t.match(ad);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ms(t.slice(2)),e]}let $c=0;const aI=Promise.resolve(),cI=()=>$c||(aI.then(()=>$c=0),$c=Date.now());function lI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(uI(r,n.value),e,5,[r])};return n.value=t,n.attached=cI(),n}function uI(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const cd=/^on[a-z]/,hI=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ZT(t,r,s):e==="style"?eI(t,n,r):Ca(e)?Ou(e)||iI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fI(t,e,r,s))?rI(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),nI(t,e,r,s))};function fI(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&cd.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||cd.test(e)&&Le(n)?!1:e in t}const ea=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>So(e,n):e};function dI(t){t.target.composing=!0}function ld(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const RM={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ea(s);const i=r||s.props&&s.props.type==="number";sr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Go(a)),t._assign(a)}),n&&sr(t,"change",()=>{t.value=t.value.trim()}),e||(sr(t,"compositionstart",dI),sr(t,"compositionend",ld),sr(t,"change",ld))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ea(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Go(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},bM={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ka(e);sr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Go(ta(o)):ta(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=ea(r)},mounted(t,{value:e}){ud(t,e)},beforeUpdate(t,e,n){t._assign=ea(n)},updated(t,{value:e}){ud(t,e)}};function ud(t,e){const n=t.multiple;if(!(n&&!W(e)&&!ka(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ta(i);if(n)W(e)?i.selected=aw(e,o)>-1:i.selected=e.has(o);else if(Da(ta(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ta(t){return"_value"in t?t._value:t.value}const pI=["ctrl","shift","alt","meta"],mI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pI.some(n=>t[`${n}Key`]&&!e.includes(n))},SM=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=mI[e[s]];if(i&&i(n,e))return}return t(n,...r)},gI=je({patchProp:hI},YT);let hd;function _I(){return hd||(hd=CT(gI))}const yI=(...t)=>{const e=_I().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vI(r);if(!s)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vI(t){return Le(t)?document.querySelector(t):t}function EI(){return Tg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Tg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const wI=typeof Proxy=="function",TI="devtools-plugin:setup",II="plugin:settings:set";let Dr,xl;function AI(){var t;return Dr!==void 0||(typeof window<"u"&&window.performance?(Dr=!0,xl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Dr=!0,xl=global.perf_hooks.performance):Dr=!1),Dr}function RI(){return AI()?xl.now():Date.now()}class bI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return RI()}},n&&n.on(II,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function SI(t,e){const n=t,r=Tg(),s=EI(),i=wI&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(TI,t,e);else{const o=i?new bI(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Ig="store";function PM(t){return t===void 0&&(t=null),Xt(t!==null?t:Ig)}function ys(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function PI(t){return t!==null&&typeof t=="object"}function CI(t){return t&&typeof t.then=="function"}function kI(t,e){return function(){return t(e)}}function Ag(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Rg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;$a(t,n,[],t._modules.root,!0),Yu(t,n,e)}function Yu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};ys(s,function(o,a){i[a]=kI(o,t),Object.defineProperty(t.getters,a,{get:function(){return i[a]()},enumerable:!0})}),t._state=Di({data:e}),t.strict&&VI(t),r&&n&&t._withCommit(function(){r.data=null})}function $a(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Zu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=OI(t,o,n);r.forEachMutation(function(u,h){var f=o+h;NI(t,f,u,l)}),r.forEachAction(function(u,h){var f=u.root?h:o+h,d=u.handler||u;DI(t,f,d,l)}),r.forEachGetter(function(u,h){var f=o+h;xI(t,f,u,l)}),r.forEachChild(function(u,h){$a(t,e,n.concat(h),u,s)})}function OI(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=na(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=na(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return bg(t,e)}},state:{get:function(){return Zu(t.state,n)}}}),s}function bg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function NI(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function DI(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return CI(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function xI(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function VI(t){Kr(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Zu(t,e){return e.reduce(function(n,r){return n[r]},t)}function na(t,e,n){return PI(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var MI="vuex bindings",fd="vuex:mutations",Hc="vuex:actions",xr="vuex",LI=0;function FI(t,e){SI({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[MI]},function(n){n.addTimelineLayer({id:fd,label:"Vuex Mutations",color:dd}),n.addTimelineLayer({id:Hc,label:"Vuex Actions",color:dd}),n.addInspector({id:xr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===xr)if(r.filter){var s=[];kg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Cg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===xr){var s=r.nodeId;bg(e,s),r.state=jI(HI(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===xr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(xr),n.sendInspectorState(xr),n.addTimelineEvent({layerId:fd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=LI++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Hc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Hc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var dd=8702998,UI=6710886,BI=16777215,Sg={label:"namespaced",textColor:BI,backgroundColor:UI};function Pg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Cg(t,e){return{id:e||"root",label:Pg(e),tags:t.namespaced?[Sg]:[],children:Object.keys(t._children).map(function(n){return Cg(t._children[n],e+n+"/")})}}function kg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Sg]:[]}),Object.keys(e._children).forEach(function(s){kg(t,e._children[s],n,r+s+"/")})}function jI(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=$I(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Pg(o):o,editable:!1,value:Vl(function(){return i[o]})}})}return s}function $I(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Vl(function(){return t[n]})}else e[n]=Vl(function(){return t[n]})}),e}function HI(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Vl(t){try{return t()}catch(e){return e}}var Lt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},Og={namespaced:{configurable:!0}};Og.namespaced.get=function(){return!!this._rawModule.namespaced};Lt.prototype.addChild=function(e,n){this._children[e]=n};Lt.prototype.removeChild=function(e){delete this._children[e]};Lt.prototype.getChild=function(e){return this._children[e]};Lt.prototype.hasChild=function(e){return e in this._children};Lt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Lt.prototype.forEachChild=function(e){ys(this._children,e)};Lt.prototype.forEachGetter=function(e){this._rawModule.getters&&ys(this._rawModule.getters,e)};Lt.prototype.forEachAction=function(e){this._rawModule.actions&&ys(this._rawModule.actions,e)};Lt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ys(this._rawModule.mutations,e)};Object.defineProperties(Lt.prototype,Og);var Ir=function(e){this.register([],e,!1)};Ir.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Ir.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Ir.prototype.update=function(e){Ng([],this.root,e)};Ir.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Lt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ys(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Ir.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Ir.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Ng(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Ng(t.concat(r),e.getChild(r),n.modules[r])}}function qI(t){return new gt(t)}var gt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ir(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(f,d){return c.call(o,f,d)},this.commit=function(f,d,g){return l.call(o,f,d,g)},this.strict=s;var u=this._modules.root.state;$a(this,u,[],this._modules.root),Yu(this,u),r.forEach(function(h){return h(n)})},eh={state:{configurable:!0}};gt.prototype.install=function(e,n){e.provide(n||Ig,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&FI(e,this)};eh.state.get=function(){return this._state.data};eh.state.set=function(t){};gt.prototype.commit=function(e,n,r){var s=this,i=na(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};gt.prototype.dispatch=function(e,n){var r=this,s=na(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(f){try{r._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,r.state,f)})}catch{}h(f)})})}};gt.prototype.subscribe=function(e,n){return Ag(e,this._subscribers,n)};gt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Ag(r,this._actionSubscribers,n)};gt.prototype.watch=function(e,n,r){var s=this;return Kr(function(){return e(s.state,s.getters)},n,Object.assign({},r))};gt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};gt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),$a(this,this.state,e,this._modules.get(e),r.preserveState),Yu(this,this.state)};gt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Zu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Rg(this)};gt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};gt.prototype.hotUpdate=function(e){this._modules.update(e),Rg(this,!0)};gt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(gt.prototype,eh);const zI="modulepreload",KI=function(t){return"/"+t},pd={},$t=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=KI(i),i in pd)return;pd[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":zI,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof window<"u";function WI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function qc(t,e){const n={};for(const r in e){const s=e[r];n[r]=xt(s)?s.map(t):t(s)}return n}const Ks=()=>{},xt=Array.isArray,GI=/\/$/,QI=t=>t.replace(GI,"");function zc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ZI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function JI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ns(e.matched[r],n.matched[s])&&Dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!YI(t[n],e[n]))return!1;return!0}function YI(t,e){return xt(t)?gd(t,e):xt(e)?gd(e,t):t===e}function gd(t,e){return xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function e0(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QI(t)}const t0=/^[^#]+#/;function n0(t,e){return t.replace(t0,"#")+e}function r0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ha=()=>({left:window.pageXOffset,top:window.pageYOffset});function s0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=r0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function i0(t,e){Ml.set(t,e)}function o0(t){const e=Ml.get(t);return Ml.delete(t),e}let a0=()=>location.protocol+"//"+location.host;function xg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),md(c,"")}return md(n,t)+r+s}function c0(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=xg(t,location),g=n.value,_=e.value;let v=0;if(f){if(n.value=d,e.value=f,o&&o===g){o=null;return}v=_?f.position-_.position:0}else r(d);s.forEach(A=>{A(n.value,g,{delta:v,type:ui.pop,direction:v?v>0?Ws.forward:Ws.back:Ws.unknown})})};function c(){o=n.value}function l(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:Ha()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function yd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ha():null}}function l0(t){const{history:e,location:n}=window,r={value:xg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:a0()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,yd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=pe({},s.value,e.state,{forward:c,scroll:Ha()});i(u.current,u,!0);const h=pe({},yd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function u0(t){t=e0(t);const e=l0(t),n=c0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=pe({location:"",base:t,go:r,createHref:n0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function h0(t){return typeof t=="string"||t&&typeof t=="object"}function Vg(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mg=Symbol("");var vd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vd||(vd={}));function rs(t,e){return pe(new Error,{type:t,[Mg]:!0},e)}function un(t,e){return t instanceof Error&&Mg in t&&(e==null||!!(t.type&e))}const Ed="[^/]+?",f0={sensitive:!1,strict:!1,start:!0,end:!0},d0=/[.+*?^${}()[\]/\\]/g;function p0(t,e){const n=pe({},f0,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(d0,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:v,regexp:A}=f;i.push({name:g,repeatable:_,optional:v});const b=A||Ed;if(b!==Ed){d+=10;try{new RegExp(`(${b})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+O.message)}}let D=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(D=v&&l.length<2?`(?:/${D})`:"/"+D),v&&(D+="?"),s+=D,d+=20,v&&(d+=-8),_&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=i[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:v}=d,A=g in l?l[g]:"";if(xt(A)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=xt(A)?A.join("/"):A;if(!b)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function m0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function g0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=m0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(wd(r))return 1;if(wd(s))return-1}return s.length-r.length}function wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _0={type:0,value:""},y0=/[a-zA-Z0-9_]/;function v0(t){if(!t)return[[]];if(t==="/")return[[_0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:y0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function E0(t,e,n){const r=p0(v0(t.path),n),s=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function w0(t,e){const n=[],r=new Map;e=Ad({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,g=T0(u);g.aliasOf=f&&f.record;const _=Ad(e,u),v=[g];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of D)v.push(pe({},g,{components:f?f.record.components:g.components,path:O,aliasOf:f?f.record:g}))}let A,b;for(const D of v){const{path:O}=D;if(h&&O[0]!=="/"){const ne=h.record.path,U=ne[ne.length-1]==="/"?"":"/";D.path=h.record.path+(O&&U+O)}if(A=E0(D,h,_),f?f.alias.push(A):(b=b||A,b!==A&&b.alias.push(A),d&&u.name&&!Id(A)&&o(u.name)),g.children){const ne=g.children;for(let U=0;U<ne.length;U++)i(ne[U],A,f&&f.children[U])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return b?()=>{o(b)}:Ks}function o(u){if(Vg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&g0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Lg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Id(u)&&r.set(u.record.name,u)}function l(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw rs(1,{location:u});_=f.record.name,d=pe(Td(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Td(u.params,f.keys.map(b=>b.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=n.find(b=>b.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw rs(1,{location:u,currentLocation:h});_=f.record.name,d=pe({},h.params,u.params),g=f.stringify(d)}const v=[];let A=f;for(;A;)v.unshift(A.record),A=A.parent;return{name:_,path:g,params:d,matched:v,meta:A0(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Td(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function T0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:I0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function I0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Id(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function A0(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Ad(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Lg(t,e){return e.children.some(n=>n===t||Lg(t,n))}const Fg=/#/g,R0=/&/g,b0=/\//g,S0=/=/g,P0=/\?/g,Ug=/\+/g,C0=/%5B/g,k0=/%5D/g,Bg=/%5E/g,O0=/%60/g,jg=/%7B/g,N0=/%7C/g,$g=/%7D/g,D0=/%20/g;function th(t){return encodeURI(""+t).replace(N0,"|").replace(C0,"[").replace(k0,"]")}function x0(t){return th(t).replace(jg,"{").replace($g,"}").replace(Bg,"^")}function Ll(t){return th(t).replace(Ug,"%2B").replace(D0,"+").replace(Fg,"%23").replace(R0,"%26").replace(O0,"`").replace(jg,"{").replace($g,"}").replace(Bg,"^")}function V0(t){return Ll(t).replace(S0,"%3D")}function M0(t){return th(t).replace(Fg,"%23").replace(P0,"%3F")}function L0(t){return t==null?"":M0(t).replace(b0,"%2F")}function ra(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function F0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ug," "),o=i.indexOf("="),a=ra(o<0?i:i.slice(0,o)),c=o<0?null:ra(i.slice(o+1));if(a in e){let l=e[a];xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Rd(t){let e="";for(let n in t){const r=t[n];if(n=V0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(xt(r)?r.map(i=>i&&Ll(i)):[r&&Ll(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function U0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const B0=Symbol(""),bd=Symbol(""),nh=Symbol(""),Hg=Symbol(""),Fl=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(rs(4,{from:n,to:e})):h instanceof Error?a(h):h0(h)?a(rs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Kc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(j0(a)){const l=(a.__vccOpts||a)[e];l&&s.push(On(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=WI(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&On(f,n,r,i,o)()}))}}return s}function j0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sd(t){const e=Xt(nh),n=Xt(Hg),r=kt(()=>e.resolve(qr(t.to))),s=kt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ns.bind(null,u));if(f>-1)return f;const d=Pd(c[l-2]);return l>1&&Pd(u)===d&&h[h.length-1].path!==d?h.findIndex(ns.bind(null,c[l-2])):f}),i=kt(()=>s.value>-1&&z0(n.params,r.value.params)),o=kt(()=>s.value>-1&&s.value===n.matched.length-1&&Dg(n.params,r.value.params));function a(c={}){return q0(c)?e[qr(t.replace)?"replace":"push"](qr(t.to)).catch(Ks):Promise.resolve()}return{route:r,href:kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const $0=Wu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sd,setup(t,{slots:e}){const n=Di(Sd(t)),{options:r}=Xt(nh),s=kt(()=>({[Cd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Zo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),H0=$0;function q0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function z0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cd=(t,e,n)=>t??e??n,K0=Wu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(Fl),s=kt(()=>t.route||r.value),i=Xt(bd,0),o=kt(()=>{let l=qr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=kt(()=>s.value.matched[o.value]);Co(bd,kt(()=>o.value+1)),Co(B0,a),Co(Fl,s);const c=Lw();return Kr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,g])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!ns(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return kd(n.default,{Component:f,route:l});const d=h.props[u],g=d?d===!0?l.params:typeof d=="function"?d(l):d:null,v=Zo(f,pe({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return kd(n.default,{Component:v,route:l})||v}}});function kd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const W0=K0;function G0(t){const e=w0(t.routes,t),n=t.parseQuery||F0,r=t.stringifyQuery||Rd,s=t.history,i=ks(),o=ks(),a=ks(),c=Fw(Sn);let l=Sn;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qc.bind(null,I=>""+I),h=qc.bind(null,L0),f=qc.bind(null,ra);function d(I,F){let V,$;return Vg(I)?(V=e.getRecordMatcher(I),$=F):$=I,e.addRoute($,V)}function g(I){const F=e.getRecordMatcher(I);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(I=>I.record)}function v(I){return!!e.getRecordMatcher(I)}function A(I,F){if(F=pe({},F||c.value),typeof I=="string"){const y=zc(n,I,F.path),E=e.resolve({path:y.path},F),R=s.createHref(y.fullPath);return pe(y,E,{params:f(E.params),hash:ra(y.hash),redirectedFrom:void 0,href:R})}let V;if("path"in I)V=pe({},I,{path:zc(n,I.path,F.path).path});else{const y=pe({},I.params);for(const E in y)y[E]==null&&delete y[E];V=pe({},I,{params:h(y)}),F.params=h(F.params)}const $=e.resolve(V,F),de=I.hash||"";$.params=u(f($.params));const p=JI(r,pe({},I,{hash:x0(de),path:$.path})),m=s.createHref(p);return pe({fullPath:p,hash:de,query:r===Rd?U0(I.query):I.query||{}},$,{redirectedFrom:void 0,href:m})}function b(I){return typeof I=="string"?zc(n,I,c.value.path):pe({},I)}function D(I,F){if(l!==I)return rs(8,{from:F,to:I})}function O(I){return le(I)}function ne(I){return O(pe(b(I),{replace:!0}))}function U(I){const F=I.matched[I.matched.length-1];if(F&&F.redirect){const{redirect:V}=F;let $=typeof V=="function"?V(I):V;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=b($):{path:$},$.params={}),pe({query:I.query,hash:I.hash,params:"path"in $?{}:I.params},$)}}function le(I,F){const V=l=A(I),$=c.value,de=I.state,p=I.force,m=I.replace===!0,y=U(V);if(y)return le(pe(b(y),{state:typeof y=="object"?pe({},de,y.state):de,force:p,replace:m}),F||V);const E=V;E.redirectedFrom=F;let R;return!p&&XI(r,$,V)&&(R=rs(16,{to:E,from:$}),Ut($,$,!0,!1)),(R?Promise.resolve(R):Ae(E,$)).catch(S=>un(S)?un(S,2)?S:Rn(S):fe(S,E,$)).then(S=>{if(S){if(un(S,2))return le(pe({replace:m},b(S.to),{state:typeof S.to=="object"?pe({},de,S.to.state):de,force:p}),F||E)}else S=Yn(E,$,!0,m,de);return An(E,$,S),S})}function Se(I,F){const V=D(I,F);return V?Promise.reject(V):Promise.resolve()}function qe(I){const F=kr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(I):I()}function Ae(I,F){let V;const[$,de,p]=Q0(I,F);V=Kc($.reverse(),"beforeRouteLeave",I,F);for(const y of $)y.leaveGuards.forEach(E=>{V.push(On(E,I,F))});const m=Se.bind(null,I,F);return V.push(m),Qe(V).then(()=>{V=[];for(const y of i.list())V.push(On(y,I,F));return V.push(m),Qe(V)}).then(()=>{V=Kc(de,"beforeRouteUpdate",I,F);for(const y of de)y.updateGuards.forEach(E=>{V.push(On(E,I,F))});return V.push(m),Qe(V)}).then(()=>{V=[];for(const y of p)if(y.beforeEnter)if(xt(y.beforeEnter))for(const E of y.beforeEnter)V.push(On(E,I,F));else V.push(On(y.beforeEnter,I,F));return V.push(m),Qe(V)}).then(()=>(I.matched.forEach(y=>y.enterCallbacks={}),V=Kc(p,"beforeRouteEnter",I,F),V.push(m),Qe(V))).then(()=>{V=[];for(const y of o.list())V.push(On(y,I,F));return V.push(m),Qe(V)}).catch(y=>un(y,8)?y:Promise.reject(y))}function An(I,F,V){a.list().forEach($=>qe(()=>$(I,F,V)))}function Yn(I,F,V,$,de){const p=D(I,F);if(p)return p;const m=F===Sn,y=Mr?history.state:{};V&&($||m?s.replace(I.fullPath,pe({scroll:m&&y&&y.scroll},de)):s.push(I.fullPath,de)),c.value=I,Ut(I,F,V,m),Rn()}let Ft;function Ss(){Ft||(Ft=s.listen((I,F,V)=>{if(!so.listening)return;const $=A(I),de=U($);if(de){le(pe(de,{replace:!0}),$).catch(Ks);return}l=$;const p=c.value;Mr&&i0(_d(p.fullPath,V.delta),Ha()),Ae($,p).catch(m=>un(m,12)?m:un(m,2)?(le(m.to,$).then(y=>{un(y,20)&&!V.delta&&V.type===ui.pop&&s.go(-1,!1)}).catch(Ks),Promise.reject()):(V.delta&&s.go(-V.delta,!1),fe(m,$,p))).then(m=>{m=m||Yn($,p,!1),m&&(V.delta&&!un(m,8)?s.go(-V.delta,!1):V.type===ui.pop&&un(m,20)&&s.go(-1,!1)),An($,p,m)}).catch(Ks)}))}let Pr=ks(),Ue=ks(),_e;function fe(I,F,V){Rn(I);const $=Ue.list();return $.length?$.forEach(de=>de(I,F,V)):console.error(I),Promise.reject(I)}function ln(){return _e&&c.value!==Sn?Promise.resolve():new Promise((I,F)=>{Pr.add([I,F])})}function Rn(I){return _e||(_e=!I,Ss(),Pr.list().forEach(([F,V])=>I?V(I):F()),Pr.reset()),I}function Ut(I,F,V,$){const{scrollBehavior:de}=t;if(!Mr||!de)return Promise.resolve();const p=!V&&o0(_d(I.fullPath,0))||($||!V)&&history.state&&history.state.scroll||null;return Zm().then(()=>de(I,F,p)).then(m=>m&&s0(m)).catch(m=>fe(m,I,F))}const ht=I=>s.go(I);let Cr;const kr=new Set,so={currentRoute:c,listening:!0,addRoute:d,removeRoute:g,hasRoute:v,getRoutes:_,resolve:A,options:t,push:O,replace:ne,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:ln,install(I){const F=this;I.component("RouterLink",H0),I.component("RouterView",W0),I.config.globalProperties.$router=F,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>qr(c)}),Mr&&!Cr&&c.value===Sn&&(Cr=!0,O(s.location).catch(de=>{}));const V={};for(const de in Sn)Object.defineProperty(V,de,{get:()=>c.value[de],enumerable:!0});I.provide(nh,F),I.provide(Hg,qm(V)),I.provide(Fl,c);const $=I.unmount;kr.add(I),I.unmount=function(){kr.delete(I),kr.size<1&&(l=Sn,Ft&&Ft(),Ft=null,c.value=Sn,Cr=!1,_e=!1),$()}}};function Qe(I){return I.reduce((F,V)=>F.then(()=>qe(V)),Promise.resolve())}return so}function Q0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ns(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ns(l,c))||s.push(c))}return[n,r,s]}const Gs=/^[a-z0-9]+(-[a-z0-9]+)*$/,qa=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),c=s.pop(),l={provider:s.length>0?s[0]:r,prefix:c,name:a};return e&&!No(l)?null:l}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!No(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!No(a,n)?null:a}return null},No=(t,e)=>t?!!((t.provider===""||t.provider.match(Gs))&&(e&&t.prefix===""||t.prefix.match(Gs))&&t.name.match(Gs)):!1,qg=Object.freeze({left:0,top:0,width:16,height:16}),sa=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),za=Object.freeze({...qg,...sa}),Ul=Object.freeze({...za,body:"",hidden:!1});function J0(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Od(t,e){const n=J0(t,e);for(const r in Ul)r in sa?r in t&&!(r in n)&&(n[r]=sa[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function X0(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,c=a&&i(a);c&&(s[o]=[a].concat(c))}return s[o]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),s}function Y0(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=Od(r[a]||s[a],i)}return o(e),n.forEach(o),Od(t,i)}function zg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=X0(t);for(const s in r){const i=r[s];i&&(e(s,Y0(t,s,i)),n.push(s))}return n}const Z0={provider:"",aliases:{},not_found:{},...qg};function Wc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Kg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Wc(t,Z0))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s.match(Gs)||typeof i.body!="string"||!Wc(i,Ul))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s.match(Gs)||typeof o!="string"||!n[o]&&!r[o]||!Wc(i,Ul))return null}return e}const Nd=Object.create(null);function eA(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function mr(t,e){const n=Nd[t]||(Nd[t]=Object.create(null));return n[e]||(n[e]=eA(t,e))}function rh(t,e){return Kg(e)?zg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function tA(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let hi=!1;function Wg(t){return typeof t=="boolean"&&(hi=t),hi}function nA(t){const e=typeof t=="string"?qa(t,!0,hi):t;if(e){const n=mr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function rA(t,e){const n=qa(t,!0,hi);if(!n)return!1;const r=mr(n.provider,n.prefix);return tA(r,n.name,e)}function sA(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),hi&&!e&&!t.prefix){let s=!1;return Kg(t)&&(t.prefix="",zg(t,(i,o)=>{o&&rA(i,o)&&(s=!0)})),s}const n=t.prefix;if(!No({provider:e,prefix:n,name:"a"}))return!1;const r=mr(e,n);return!!rh(r,t)}const Gg=Object.freeze({width:null,height:null}),Qg=Object.freeze({...Gg,...sa}),iA=/(-?[0-9.]*[0-9]+[0-9.]*)/g,oA=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Dd(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(iA);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=oA.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}const aA=t=>t==="unset"||t==="undefined"||t==="none";function cA(t,e){const n={...za,...t},r={...Qg,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(g=>{const _=[],v=g.hFlip,A=g.vFlip;let b=g.rotate;v?A?b+=2:(_.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),_.push("scale(-1 1)"),s.top=s.left=0):A&&(_.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),_.push("scale(1 -1)"),s.top=s.left=0);let D;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:D=s.height/2+s.top,_.unshift("rotate(90 "+D.toString()+" "+D.toString()+")");break;case 2:_.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:D=s.width/2+s.left,_.unshift("rotate(-90 "+D.toString()+" "+D.toString()+")");break}b%2===1&&(s.left!==s.top&&(D=s.left,s.left=s.top,s.top=D),s.width!==s.height&&(D=s.width,s.width=s.height,s.height=D)),_.length&&(i='<g transform="'+_.join(" ")+'">'+i+"</g>")});const o=r.width,a=r.height,c=s.width,l=s.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?l:a,u=Dd(h,c/l)):(u=o==="auto"?c:o,h=a===null?Dd(u,l/c):a==="auto"?l:a);const f={},d=(g,_)=>{aA(_)||(f[g]=_.toString())};return d("width",u),d("height",h),f.viewBox=s.left.toString()+" "+s.top.toString()+" "+c.toString()+" "+l.toString(),{attributes:f,body:i}}const lA=/\sid="(\S+)"/g,uA="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let hA=0;function fA(t,e=uA){const n=[];let r;for(;r=lA.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(hA++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Bl=Object.create(null);function dA(t,e){Bl[t]=e}function jl(t){return Bl[t]||Bl[""]}function sh(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ih=Object.create(null),Os=["https://api.simplesvg.com","https://api.unisvg.com"],Do=[];for(;Os.length>0;)Os.length===1||Math.random()>.5?Do.push(Os.shift()):Do.push(Os.pop());ih[""]=sh({resources:["https://api.iconify.design"].concat(Do)});function pA(t,e){const n=sh(e);return n===null?!1:(ih[t]=n,!0)}function oh(t){return ih[t]}const mA=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let xd=mA();function gA(t,e){const n=oh(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function _A(t){return t===404}const yA=(t,e,n)=>{const r=[],s=gA(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,l)=>{a+=c.length+1,a>=s&&l>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),r.push(o),r};function vA(t){if(typeof t=="string"){const e=oh(t);if(e)return e.path}return"/"}const EA=(t,e,n)=>{if(!xd){n("abort",424);return}let r=vA(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;xd(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(_A(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},wA={prepare:yA,send:EA};function TA(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,c=n[i]||(n[i]=Object.create(null)),l=c[o]||(c[o]=mr(i,o));let u;a in l.icons?u=e.loaded:o===""||l.missing.has(a)?u=e.missing:u=e.pending;const h={provider:i,prefix:o,name:a};u.push(h)}),e}function Jg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function IA(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const l=c.name;if(t.icons[l])o.loaded.push({provider:r,prefix:s,name:l});else if(t.missing.has(l))o.missing.push({provider:r,prefix:s,name:l});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Jg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let AA=0;function RA(t,e,n){const r=AA++,s=Jg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function bA(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?qa(s,e,n):s;i&&r.push(i)}),r}var SA={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function PA(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const le=Math.floor(Math.random()*U.length);o.push(U[le]),U=U.slice(0,le).concat(U.slice(le+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",l=0,u,h=null,f=[],d=[];typeof r=="function"&&d.push(r);function g(){h&&(clearTimeout(h),h=null)}function _(){c==="pending"&&(c="aborted"),g(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function v(U,le){le&&(d=[]),typeof U=="function"&&d.push(U)}function A(){return{startTime:a,payload:e,status:c,queriesSent:l,queriesPending:f.length,subscribe:v,abort:_}}function b(){c="failed",d.forEach(U=>{U(void 0,u)})}function D(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function O(U,le,Se){const qe=le!=="success";switch(f=f.filter(Ae=>Ae!==U),c){case"pending":break;case"failed":if(qe||!t.dataAfterTimeout)return;break;default:return}if(le==="abort"){u=Se,b();return}if(qe){u=Se,f.length||(o.length?ne():b());return}if(g(),D(),!t.random){const Ae=t.resources.indexOf(U.resource);Ae!==-1&&Ae!==t.index&&(t.index=Ae)}c="completed",d.forEach(Ae=>{Ae(Se)})}function ne(){if(c!=="pending")return;g();const U=o.shift();if(U===void 0){if(f.length){h=setTimeout(()=>{g(),c==="pending"&&(D(),b())},t.timeout);return}b();return}const le={status:"pending",resource:U,callback:(Se,qe)=>{O(le,Se,qe)}};f.push(le),l++,h=setTimeout(ne,t.rotate),n(U,e,le.callback)}return setTimeout(ne),A}function Xg(t){const e={...SA,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,c,l){const u=PA(e,a,c,(h,f)=>{r(),l&&l(h,f)});return n.push(u),u}function i(a){return n.find(c=>a(c))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function Vd(){}const Gc=Object.create(null);function CA(t){if(!Gc[t]){const e=oh(t);if(!e)return;const n=Xg(e),r={config:e,redundancy:n};Gc[t]=r}return Gc[t]}function kA(t,e,n){let r,s;if(typeof t=="string"){const i=jl(t);if(!i)return n(void 0,424),Vd;s=i.send;const o=CA(t);o&&(r=o.redundancy)}else{const i=sh(t);if(i){r=Xg(i);const o=t.resources?t.resources[0]:"",a=jl(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Vd):r.query(e,s,n)().abort}const Md="iconify2",fi="iconify",Yg=fi+"-count",Ld=fi+"-version",Zg=36e5,OA=168;function $l(t,e){try{return t.getItem(e)}catch{}}function ah(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Fd(t,e){try{t.removeItem(e)}catch{}}function Hl(t,e){return ah(t,Yg,e.toString())}function ql(t){return parseInt($l(t,Yg))||0}const Ka={local:!0,session:!0},e_={local:new Set,session:new Set};let ch=!1;function NA(t){ch=t}let ho=typeof window>"u"?{}:window;function t_(t){const e=t+"Storage";try{if(ho&&ho[e]&&typeof ho[e].length=="number")return ho[e]}catch{}Ka[t]=!1}function n_(t,e){const n=t_(t);if(!n)return;const r=$l(n,Ld);if(r!==Md){if(r){const a=ql(n);for(let c=0;c<a;c++)Fd(n,fi+c.toString())}ah(n,Ld,Md),Hl(n,0);return}const s=Math.floor(Date.now()/Zg)-OA,i=a=>{const c=fi+a.toString(),l=$l(n,c);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>s&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}Fd(n,c)}};let o=ql(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,Hl(n,o)):e_[t].add(a))}function r_(){if(!ch){NA(!0);for(const t in Ka)n_(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=mr(r,s);if(!rh(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function DA(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in Ka)n_(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function xA(t,e){ch||r_();function n(r){let s;if(!Ka[r]||!(s=t_(r)))return;const i=e_[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=ql(s),!Hl(s,o+1))return;const a={cached:Math.floor(Date.now()/Zg),provider:t.provider,data:e};return ah(s,fi+o.toString(),JSON.stringify(a))}e.lastModified&&!DA(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Ud(){}function VA(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,IA(t)}))}function MA(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;delete t.iconsToLoad;let i;if(!s||!(i=jl(n)))return;i.prepare(n,r,s).forEach(a=>{kA(n,a,c=>{if(typeof c!="object")a.icons.forEach(l=>{t.missing.add(l)});else try{const l=rh(t,c);if(!l.length)return;const u=t.pendingIcons;u&&l.forEach(h=>{u.delete(h)}),xA(t,c)}catch(l){console.error(l)}VA(t)})})}))}const LA=(t,e)=>{const n=bA(t,!0,Wg()),r=TA(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,Ud)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(c=>{const{provider:l,prefix:u}=c;if(u===a&&l===o)return;o=l,a=u,i.push(mr(l,u));const h=s[l]||(s[l]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(c=>{const{provider:l,prefix:u,name:h}=c,f=mr(l,u),d=f.pendingIcons||(f.pendingIcons=new Set);d.has(h)||(d.add(h),s[l][u].push(h))}),i.forEach(c=>{const{provider:l,prefix:u}=c;s[l][u].length&&MA(c,s[l][u])}),e?RA(e,r,i):Ud};function FA(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Gg?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const UA=/[\s,]+/;function BA(t,e){e.split(UA).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function jA(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function $A(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function HA(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function qA(t){return"data:image/svg+xml,"+HA(t)}function zA(t){return'url("'+qA(t)+'")'}const Bd={...Qg,inline:!1},KA={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},WA={display:"inline-block"},zl={backgroundColor:"currentColor"},s_={backgroundColor:"transparent"},jd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},$d={webkitMask:zl,mask:zl,background:s_};for(const t in $d){const e=$d[t];for(const n in jd)e[t+n]=jd[n]}const xo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";xo[t+"-flip"]=e,xo[t.slice(0,1)+"-flip"]=e,xo[t+"Flip"]=e});function Hd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const qd=(t,e)=>{const n=FA(Bd,e),r={...KA},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const v=e[_];if(v!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=v===!0||v==="true"||v===1;break;case"flip":typeof v=="string"&&BA(n,v);break;case"color":i.color=v;break;case"rotate":typeof v=="string"?n[_]=jA(v):typeof v=="number"&&(n[_]=v);break;case"ariaHidden":case"aria-hidden":v!==!0&&v!=="true"&&delete r["aria-hidden"];break;default:{const A=xo[_];A?(v===!0||v==="true"||v===1)&&(n[A]=!0):Bd[_]===void 0&&(r[_]=v)}}}const c=cA(t,n),l=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,l);let _=0,v=e.id;return typeof v=="string"&&(v=v.replace(/-/g,"_")),r.innerHTML=fA(c.body,v?()=>v+"ID"+_++:"iconifyVue"),Zo("svg",r)}const{body:u,width:h,height:f}=t,d=s==="mask"||(s==="bg"?!1:u.indexOf("currentColor")!==-1),g=$A(u,{...l,width:h+"",height:f+""});return r.style={...i,"--svg":zA(g),width:Hd(l.width),height:Hd(l.height),...WA,...d?zl:s_,...a},Zo("span",r)};Wg(!0);dA("",wA);if(typeof document<"u"&&typeof window<"u"){r_();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!sA(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;pA(n,s)||console.error(r)}catch{console.error(r)}}}}const GA={...za,body:""},i_=Wu({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=qa(t,!1,!0))===null)return this.abortLoading(),null;const r=nA(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:LA([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return qd(GA,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),qd({...za,...e.data},n)}});const Wa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},QA={components:{Icon:i_}},JA=t=>(zu("data-v-394c49cd"),t=t(),Ku(),t),XA={class:"navbar navbar-expand-lg bg-black"},YA={class:"container"},ZA={class:"navbar-brand",href:"#"},eR={class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"},tR={class:"collapse navbar-collapse",id:"navbarSupportedContent"},nR={class:"navbar-nav ms-auto mb-2 mb-lg-0"},rR={class:"nav-item"},sR={class:"nav-link active","aria-current":"page",href:"#"},iR={class:"nav-item"},oR={class:"nav-link",href:"#"},aR={class:"nav-item mx-3"},cR={class:"nav-link",href:"#"},lR={class:"nav-item"},uR={class:"nav-link",href:"#"},hR={class:"nav-item"},fR={class:"nav-link",href:"#"},dR={type:"button",class:"btn learn-more mx-3"},pR={class:"offcanvas bg-dark offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},mR=JA(()=>w("div",{class:"offcanvas-header"},[w("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"COESA"),w("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),gR={class:"offcanvas-body"},_R={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},yR={class:"nav-item"},vR={class:"nav-link active","aria-current":"page",href:"#"},ER={class:"nav-item"},wR={class:"nav-link",href:"#"},TR={class:"nav-item"},IR={class:"nav-link",href:"#"},AR={class:"nav-item"},RR={class:"nav-link",href:"#"},bR={class:"nav-item"},SR={class:"nav-link",href:"#"},PR={type:"button",class:"btn learn-more"};function CR(t,e,n,r,s,i){const o=ur("RouterLink"),a=ur("Icon");return Ht(),fn(yt,null,[w("nav",XA,[w("div",YA,[w("a",ZA,[Y(o,{to:"/",class:"route"},{default:dt(()=>[Re("COESA-EKSU")]),_:1})]),w("button",eR,[Y(a,{icon:"material-symbols:menu",color:"white",width:"30"})]),w("div",tR,[w("ul",nR,[w("li",rR,[w("a",sR,[Y(o,{to:"/",class:"route"},{default:dt(()=>[Re("Dashboard")]),_:1})])]),w("li",iR,[w("a",oR,[Y(o,{to:"/all-events",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Events")]),_:1})])]),w("li",aR,[w("a",cR,[Y(o,{to:"/all-course",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Courses")]),_:1})])]),w("li",lR,[w("a",uR,[Y(o,{to:"/edit/front-end",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Front-End")]),_:1})])]),w("li",hR,[w("a",fR,[Y(a,{icon:"ion:settings-outline",color:"white"})])])]),w("form",null,[w("button",dR,[Y(a,{icon:"ic:sharp-logout",color:"white"})])])])])]),w("div",pR,[mR,w("div",gR,[w("ul",_R,[w("li",yR,[w("a",vR,[Y(o,{to:"/",class:"route"},{default:dt(()=>[Re("Dashboard")]),_:1})])]),w("li",ER,[w("a",wR,[Y(o,{to:"/all-events",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Events")]),_:1})])]),w("li",TR,[w("a",IR,[Y(o,{to:"/all-course",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Courses")]),_:1})])]),w("li",AR,[w("a",RR,[Y(o,{to:"/edit/front-end",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Front-End")]),_:1})])]),w("li",bR,[w("a",SR,[Y(a,{icon:"ion:settings-outline",color:"white"})])])]),w("form",null,[w("button",PR,[Y(a,{icon:"ic:sharp-logout",color:"white"})])])])])],64)}const kR=Wa(QA,[["render",CR],["__scopeId","data-v-394c49cd"]]);/**
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
 */const o_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},a_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new NR;const f=i<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DR=function(t){const e=o_(t);return a_.encodeByteArray(e,!0)},ia=function(t){return DR(t).replace(/\./g,"")},c_=function(t){try{return a_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VR=()=>xR().__FIREBASE_DEFAULTS__,MR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&c_(t[1]);return e&&JSON.parse(e)},Ga=()=>{try{return VR()||MR()||LR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l_=t=>{var e,n;return(n=(e=Ga())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u_=t=>{const e=l_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h_=()=>{var t;return(t=Ga())===null||t===void 0?void 0:t.config},f_=t=>{var e;return(e=Ga())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class FR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function d_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ia(JSON.stringify(n)),ia(JSON.stringify(o)),a].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function BR(){var t;const e=(t=Ga())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $R(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HR(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qR(){try{return typeof indexedDB=="object"}catch{return!1}}function zR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const KR="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KR,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?WR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new an(s,a,r)}}function WR(t,e){return t.replace(GR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const GR=/\{\$([^}]+)}/g;function QR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zd(i)&&zd(o)){if(!oa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zd(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JR(t,e){const n=new XR(t,e);return n.subscribe.bind(n)}class XR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qc),s.error===void 0&&(s.error=Qc),s.complete===void 0&&(s.complete=Qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class ZR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tb(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eb(t){return t===tr?void 0:t}function tb(t){return t.instantiationMode==="EAGER"}/**
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
 */class nb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const rb={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},sb=ce.INFO,ib={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},ob=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ib[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lh{constructor(e){this.name=e,this._logLevel=sb,this._logHandler=ob,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const ab=(t,e)=>e.some(n=>t instanceof n);let Kd,Wd;function cb(){return Kd||(Kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lb(){return Wd||(Wd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p_=new WeakMap,Kl=new WeakMap,m_=new WeakMap,Jc=new WeakMap,uh=new WeakMap;function ub(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&p_.set(n,t)}).catch(()=>{}),uh.set(e,t),e}function hb(t){if(Kl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kl.set(t,e)}let Wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||m_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fb(t){Wl=t(Wl)}function db(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xc(this),e,...n);return m_.set(r,e.sort?e.sort():[e]),Bn(r)}:lb().includes(t)?function(...e){return t.apply(Xc(this),e),Bn(p_.get(this))}:function(...e){return Bn(t.apply(Xc(this),e))}}function pb(t){return typeof t=="function"?db(t):(t instanceof IDBTransaction&&hb(t),ab(t,cb())?new Proxy(t,Wl):t)}function Bn(t){if(t instanceof IDBRequest)return ub(t);if(Jc.has(t))return Jc.get(t);const e=pb(t);return e!==t&&(Jc.set(t,e),uh.set(e,t)),e}const Xc=t=>uh.get(t);function mb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bn(o.result),c.oldVersion,c.newVersion,Bn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const gb=["get","getKey","getAll","getAllKeys","count"],_b=["put","add","delete","clear"],Yc=new Map;function Gd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Yc.set(e,i),i}fb(t=>({...t,get:(e,n,r)=>Gd(e,n)||t.get(e,n,r),has:(e,n)=>!!Gd(e,n)||t.has(e,n)}));/**
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
 */class yb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gl="@firebase/app",Qd="0.9.15";/**
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
 */const gr=new lh("@firebase/app"),Eb="@firebase/app-compat",wb="@firebase/analytics-compat",Tb="@firebase/analytics",Ib="@firebase/app-check-compat",Ab="@firebase/app-check",Rb="@firebase/auth",bb="@firebase/auth-compat",Sb="@firebase/database",Pb="@firebase/database-compat",Cb="@firebase/functions",kb="@firebase/functions-compat",Ob="@firebase/installations",Nb="@firebase/installations-compat",Db="@firebase/messaging",xb="@firebase/messaging-compat",Vb="@firebase/performance",Mb="@firebase/performance-compat",Lb="@firebase/remote-config",Fb="@firebase/remote-config-compat",Ub="@firebase/storage",Bb="@firebase/storage-compat",jb="@firebase/firestore",$b="@firebase/firestore-compat",Hb="firebase",qb="10.1.0";/**
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
 */const Ql="[DEFAULT]",zb={[Gl]:"fire-core",[Eb]:"fire-core-compat",[Tb]:"fire-analytics",[wb]:"fire-analytics-compat",[Ab]:"fire-app-check",[Ib]:"fire-app-check-compat",[Rb]:"fire-auth",[bb]:"fire-auth-compat",[Sb]:"fire-rtdb",[Pb]:"fire-rtdb-compat",[Cb]:"fire-fn",[kb]:"fire-fn-compat",[Ob]:"fire-iid",[Nb]:"fire-iid-compat",[Db]:"fire-fcm",[xb]:"fire-fcm-compat",[Vb]:"fire-perf",[Mb]:"fire-perf-compat",[Lb]:"fire-rc",[Fb]:"fire-rc-compat",[Ub]:"fire-gcs",[Bb]:"fire-gcs-compat",[jb]:"fire-fst",[$b]:"fire-fst-compat","fire-js":"fire-js",[Hb]:"fire-js-all"};/**
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
 */const aa=new Map,Jl=new Map;function Kb(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _r(t){const e=t.name;if(Jl.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,t);for(const n of aa.values())Kb(n,t);return!0}function Qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Wb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new xi("app","Firebase",Wb);/**
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
 */class Gb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ar=qb;function g_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ql,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=h_()),!n)throw jn.create("no-options");const i=aa.get(s);if(i){if(oa(n,i.options)&&oa(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new nb(s);for(const c of Jl.values())o.addComponent(c);const a=new Gb(n,r,o);return aa.set(s,a),a}function hh(t=Ql){const e=aa.get(t);if(!e&&t===Ql&&h_())return g_();if(!e)throw jn.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=zb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}_r(new zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Qb="firebase-heartbeat-database",Jb=1,di="firebase-heartbeat-store";let Zc=null;function __(){return Zc||(Zc=mb(Qb,Jb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Zc}async function Xb(t){try{return await(await __()).transaction(di).objectStore(di).get(y_(t))}catch(e){if(e instanceof an)gr.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function Jd(t,e){try{const r=(await __()).transaction(di,"readwrite");await r.objectStore(di).put(e,y_(t)),await r.done}catch(n){if(n instanceof an)gr.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function y_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yb=1024,Zb=30*24*60*60*1e3;class eS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Zb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xd(),{heartbeatsToSend:n,unsentEntries:r}=tS(this._heartbeatsCache.heartbeats),s=ia(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xd(){return new Date().toISOString().substring(0,10)}function tS(t,e=Yb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qR()?zR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yd(t){return ia(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rS(t){_r(new zn("platform-logger",e=>new yb(e),"PRIVATE")),_r(new zn("heartbeat",e=>new eS(e),"PRIVATE")),Yt(Gl,Qd,t),Yt(Gl,Qd,"esm2017"),Yt("fire-js","")}rS("");var sS="firebase",iS="10.1.0";/**
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
 */Yt(sS,iS,"app");function fh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function v_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oS=v_,E_=new xi("auth","Firebase",v_());/**
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
 */const ca=new lh("@firebase/auth");function aS(t,...e){ca.logLevel<=ce.WARN&&ca.warn(`Auth (${Ar}): ${t}`,...e)}function Vo(t,...e){ca.logLevel<=ce.ERROR&&ca.error(`Auth (${Ar}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw dh(t,...e)}function Zt(t,...e){return dh(t,...e)}function cS(t,e,n){const r=Object.assign(Object.assign({},oS()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return E_.create(t,...e)}function G(t,e,...n){if(!t)throw dh(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function yn(t,e){t||dn(e)}/**
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
 */function Xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lS(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lS()||jR()||"connection"in navigator)?navigator.onLine:!0}function hS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=UR()||$R()}get(){return uS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ph(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class w_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dS=new Mi(3e4,6e4);function Li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vs(t,e,n,r,s={}){return T_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),w_.fetch()(I_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function T_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fS),e);try{const s=new pS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cS(t,u,l);Vt(t,u)}}catch(s){if(s instanceof an)throw s;Vt(t,"network-request-failed",{message:String(s)})}}async function Ja(t,e,n,r,s={}){const i=await vs(t,e,n,r,s);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function I_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ph(t.config,s):`${t.config.apiScheme}://${s}`}class pS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),dS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function mS(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function gS(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _S(t,e=!1){const n=xe(t),r=await n.getIdToken(e),s=mh(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qs(el(s.auth_time)),issuedAtTime:Qs(el(s.iat)),expirationTime:Qs(el(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function el(t){return Number(t)*1e3}function mh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=c_(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yS(t){const e=mh(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&vS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ES{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class A_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pi(t,gS(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?IS(i.providerUserInfo):[],a=TS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new A_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function wS(t){const e=xe(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function IS(t){return t.map(e=>{var{providerId:n}=e,r=fh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AS(t,e){const n=await T_(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=I_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",w_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await AS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Pn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ES(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new A_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _S(this,e)}reload(){return wS(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pi(this,mS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:O,isAnonymous:ne,providerData:U,stsTokenManager:le}=n;G(D&&le,e,"internal-error");const Se=mi.fromJSON(this.name,le);G(typeof D=="string",e,"internal-error"),Pn(h,e.name),Pn(f,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof ne=="boolean",e,"internal-error"),Pn(d,e.name),Pn(g,e.name),Pn(_,e.name),Pn(v,e.name),Pn(A,e.name),Pn(b,e.name);const qe=new fr({uid:D,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:ne,photoURL:g,phoneNumber:d,tenantId:_,stsTokenManager:Se,createdAt:A,lastLoginAt:b});return U&&Array.isArray(U)&&(qe.providerData=U.map(Ae=>Object.assign({},Ae))),v&&(qe._redirectEventId=v),qe}static async _fromIdTokenResponse(e,n,r=!1){const s=new mi;s.updateFromServerResponse(n);const i=new fr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await la(i),i}}/**
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
 */const ep=new Map;function pn(t){yn(t instanceof Function,"Expected a class definition");let e=ep.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ep.set(t,e),e)}/**
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
 */class R_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}R_.type="NONE";const tp=R_;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(pn(tp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pn(tp);const o=Mo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=fr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wr(i,e,r))}}/**
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
 */function np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k_(e))return"Blackberry";if(O_(e))return"Webos";if(gh(e))return"Safari";if((e.includes("chrome/")||S_(e))&&!e.includes("edge/"))return"Chrome";if(C_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function b_(t=it()){return/firefox\//i.test(t)}function gh(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S_(t=it()){return/crios\//i.test(t)}function P_(t=it()){return/iemobile/i.test(t)}function C_(t=it()){return/android/i.test(t)}function k_(t=it()){return/blackberry/i.test(t)}function O_(t=it()){return/webos/i.test(t)}function Xa(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RS(t=it()){var e;return Xa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bS(){return HR()&&document.documentMode===10}function N_(t=it()){return Xa(t)||C_(t)||O_(t)||k_(t)||/windows phone/i.test(t)||P_(t)}function SS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function D_(t,e=[]){let n;switch(t){case"Browser":n=np(it());break;case"Worker":n=`${np(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${r}`}async function x_(t,e){return vs(t,"GET","/v2/recaptchaConfig",Li(t,e))}function rp(t){return t!==void 0&&t.enterprise!==void 0}class V_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function PS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function M_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",PS().appendChild(r)})}function CS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kS="https://www.google.com/recaptcha/enterprise.js?render=",OS="recaptcha-enterprise",NS="NO_RECAPTCHA";class L_{constructor(e){this.type=OS,this.auth=Fi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{x_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new V_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;rp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(NS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&rp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}M_(kS+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sp(t,e,n,r=!1){const s=new L_(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class DS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class xS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ip(this),this.idTokenSubscription=new ip(this),this.beforeStateQueue=new DS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}async initializeRecaptchaConfig(){const e=await x_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new V_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new L_(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(t){return xe(t)}class ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=JR(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function VS(t,e){const n=Qa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oa(i,e??{}))return s;Vt(s,"already-initialized")}return n.initialize({options:e})}function MS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function LS(t,e,n){const r=Fi(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=F_(e),{host:o,port:a}=FS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||US()}function F_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FS(t){const e=F_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:op(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:op(o)}}}function op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function US(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function BS(t,e){return vs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function tl(t,e){return Ja(t,"POST","/v1/accounts:signInWithPassword",Li(t,e))}/**
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
 */async function jS(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}async function $S(t,e){return Ja(t,"POST","/v1/accounts:signInWithEmailLink",Li(t,e))}/**
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
 */class gi extends _h{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new gi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await sp(e,r,"signInWithPassword");return tl(e,s)}else return tl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await sp(e,r,"signInWithPassword");return tl(e,i)}else return Promise.reject(s)});case"emailLink":return jS(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return BS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $S(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return Ja(t,"POST","/v1/accounts:signInWithIdp",Li(t,e))}/**
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
 */const HS="http://localhost";class yr extends _h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:HS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */function qS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zS(t){const e=Fs(Us(t)).link,n=e?Fs(Us(e)).deep_link_id:null,r=Fs(Us(t)).deep_link_id;return(r?Fs(Us(r)).link:null)||r||n||e||t}class yh{constructor(e){var n,r,s,i,o,a;const c=Fs(Us(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=qS((s=c.mode)!==null&&s!==void 0?s:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zS(e);try{return new yh(n)}catch{return null}}}/**
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
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yh.parseLink(n);return G(r,"argument-error"),gi._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class U_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ui extends U_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends Ui{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Dn extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
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
 */class xn extends Ui{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
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
 */class Vn extends Ui{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fr._fromIdTokenResponse(e,r,s),o=ap(r);return new ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ap(r);return new ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ua extends an{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ua(e,n,r,s)}}function B_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(t,i,e,r):i})}async function KS(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
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
 */async function WS(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await pi(t,B_(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=mh(i.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
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
 */async function j_(t,e,n=!1){const r="signIn",s=await B_(t,r,e),i=await ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function GS(t,e){return j_(Fi(t),e)}function QS(t,e,n){return GS(xe(t),Es.credential(e,n))}function JS(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function XS(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function YS(t){return xe(t).signOut()}const ha="__sak";/**
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
 */class $_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ZS(){const t=it();return gh(t)||Xa(t)}const eP=1e3,tP=10;class H_ extends $_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZS()&&SS(),this.fallbackToPolling=N_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);bS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}H_.type="LOCAL";const nP=H_;/**
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
 */class q_ extends $_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q_.type="SESSION";const z_=q_;/**
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
 */function rP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await rP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ya.receivers=[];/**
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
 */function vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=vh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function iP(t){en().location.href=t}/**
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
 */function K_(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function oP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cP(){return K_()?self:null}/**
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
 */const W_="firebaseLocalStorageDb",lP=1,fa="firebaseLocalStorage",G_="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Za(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function uP(){const t=indexedDB.deleteDatabase(W_);return new Bi(t).toPromise()}function Yl(){const t=indexedDB.open(W_,lP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fa,{keyPath:G_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await uP(),e(await Yl()))})})}async function cp(t,e,n){const r=Za(t,!0).put({[G_]:e,value:n});return new Bi(r).toPromise()}async function hP(t,e){const n=Za(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function lp(t,e){const n=Za(t,!0).delete(e);return new Bi(n).toPromise()}const fP=800,dP=3;class Q_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return K_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ya._getInstance(cP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oP(),!this.activeServiceWorker)return;this.sender=new sP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yl();return await cp(e,ha,"1"),await lp(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Za(s,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Q_.type="LOCAL";const pP=Q_;new Mi(3e4,6e4);/**
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
 */function mP(t,e){return e?pn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Eh extends _h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gP(t){return j_(t.auth,new Eh(t),t.bypassAuthState)}function _P(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),WS(n,new Eh(t),t.bypassAuthState)}async function yP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),KS(n,new Eh(t),t.bypassAuthState)}/**
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
 */class J_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gP;case"linkViaPopup":case"linkViaRedirect":return yP;case"reauthViaPopup":case"reauthViaRedirect":return _P;default:Vt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vP=new Mi(2e3,1e4);class Ur extends J_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vP.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const EP="pendingRedirect",Lo=new Map;class wP extends J_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await TP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TP(t,e){const n=RP(e),r=AP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function IP(t,e){Lo.set(t._key(),e)}function AP(t){return pn(t._redirectPersistence)}function RP(t){return Mo(EP,t.config.apiKey,t.name)}async function bP(t,e,n=!1){const r=Fi(t),s=mP(r,e),o=await new wP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SP=10*60*1e3;class PP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!X_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SP&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function X_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return X_(t);default:return!1}}/**
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
 */async function kP(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
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
 */const OP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NP=/^https?/;async function DP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kP(t);for(const n of e)try{if(xP(n))return}catch{}Vt(t,"unauthorized-domain")}function xP(t){const e=Xl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NP.test(n))return!1;if(OP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const VP=new Mi(3e4,6e4);function hp(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MP(t){return new Promise((e,n)=>{var r,s,i;function o(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(Zt(t,"network-request-failed"))},timeout:VP.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=CS("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},M_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function LP(t){return Fo=Fo||MP(t),Fo}/**
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
 */const FP=new Mi(5e3,15e3),UP="__/auth/iframe",BP="emulator/auth/iframe",jP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$P=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ph(e,BP):`https://${t.config.authDomain}/${UP}`,r={apiKey:e.apiKey,appName:t.name,v:Ar},s=$P.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vi(r).slice(1)}`}async function qP(t){const e=await LP(t),n=en().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:HP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},FP.get());function c(){en().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const zP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KP=500,WP=600,GP="_blank",QP="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JP(t,e,n,r=KP,s=WP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=it().toLowerCase();n&&(a=S_(l)?GP:n),b_(l)&&(e=e||QP,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(RS(l)&&a!=="_self")return XP(e||"",a),new fp(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new fp(h)}function XP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YP="__/auth/handler",ZP="emulator/auth/handler",eC=encodeURIComponent("fac");async function dp(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ar,eventId:s};if(e instanceof U_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ui){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${eC}=${encodeURIComponent(c)}`:"";return`${tC(t)}?${Vi(a).slice(1)}${l}`}function tC({config:t}){return t.emulator?ph(t,ZP):`https://${t.authDomain}/${YP}`}/**
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
 */const nl="webStorageSupport";class nC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z_,this._completeRedirectFn=bP,this._overrideRedirectResult=IP}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dp(e,n,r,Xl(),s);return JP(e,o,vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dp(e,n,r,Xl(),s);return iP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qP(e),r=new PP(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nl,{type:nl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nl];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N_()||gh()||Xa()}}const rC=nC;var pp="@firebase/auth",mp="1.1.0";/**
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
 */class sC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oC(t){_r(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D_(t)},l=new xS(r,s,i,c);return MS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_r(new zn("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new sC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(pp,mp,iC(t)),Yt(pp,mp,"esm2017")}/**
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
 */const aC=5*60,cC=f_("authIdTokenMaxAge")||aC;let gp=null;const lC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cC)return;const s=n==null?void 0:n.token;gp!==s&&(gp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uC(t=hh()){const e=Qa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VS(t,{popupRedirectResolver:rC,persistence:[pP,nP,z_]}),r=f_("authTokenSyncURL");if(r){const i=lC(r);XS(n,i,()=>i(n.currentUser)),JS(n,o=>i(o))}const s=l_("auth");return s&&LS(n,`http://${s}`),n}oC("Browser");var hC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,wh=wh||{},J=hC||self;function ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ji(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fC(t){return Object.prototype.hasOwnProperty.call(t,rl)&&t[rl]||(t[rl]=++dC)}var rl="closure_uid_"+(1e9*Math.random()>>>0),dC=0;function pC(t,e,n){return t.call.apply(t.bind,arguments)}function mC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=pC:nt=mC,nt.apply(null,arguments)}function po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Qn(){this.s=this.s,this.o=this.o}var gC=0;Qn.prototype.s=!1;Qn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),gC!=0)&&fC(this)};Qn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Y_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Th(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _p(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ec(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var _C=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function _i(t){return/^[\s\xa0]*$/.test(t)}function tc(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return tc().indexOf(t)!=-1}function Ih(t){return Ih[" "](t),t}Ih[" "]=function(){};function yC(t,e){var n=u1;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var vC=Kt("Opera"),is=Kt("Trident")||Kt("MSIE"),Z_=Kt("Edge"),Zl=Z_||is,ey=Kt("Gecko")&&!(tc().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),EC=tc().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function ty(){var t=J.document;return t?t.documentMode:void 0}var eu;e:{var sl="",il=function(){var t=tc();if(ey)return/rv:([^\);]+)(\)|;)/.exec(t);if(Z_)return/Edge\/([\d\.]+)/.exec(t);if(is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(EC)return/WebKit\/(\S+)/.exec(t);if(vC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(il&&(sl=il?il[1]:""),is){var ol=ty();if(ol!=null&&ol>parseFloat(sl)){eu=String(ol);break e}}eu=sl}var tu;if(J.document&&is){var yp=ty();tu=yp||parseInt(eu,10)||void 0}else tu=void 0;var wC=tu;function yi(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ey){e:{try{Ih(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yi.$.h.call(this)}}He(yi,rt);var TC={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $i="closure_listenable_"+(1e6*Math.random()|0),IC=0;function AC(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++IC,this.fa=this.ia=!1}function nc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ah(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function RC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ny(t){const e={};for(const n in t)e[n]=t[n];return e}const vp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ry(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<vp.length;i++)n=vp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rc(t){this.src=t,this.g={},this.h=0}rc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ru(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new AC(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function nu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Y_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(nc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ru(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Rh="closure_lm_"+(1e6*Math.random()|0),al={};function sy(t,e,n,r,s){if(r&&r.once)return oy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)sy(t,e[i],n,r,s);return null}return n=Ph(n),t&&t[$i]?t.O(e,n,ji(r)?!!r.capture:!!r,s):iy(t,e,n,!1,r,s)}function iy(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ji(s)?!!s.capture:!!s,a=Sh(t);if(a||(t[Rh]=a=new rc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=bC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)_C||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(cy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bC(){function t(n){return e.call(t.src,t.listener,n)}const e=SC;return t}function oy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)oy(t,e[i],n,r,s);return null}return n=Ph(n),t&&t[$i]?t.P(e,n,ji(r)?!!r.capture:!!r,s):iy(t,e,n,!0,r,s)}function ay(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ay(t,e[i],n,r,s);else r=ji(r)?!!r.capture:!!r,n=Ph(n),t&&t[$i]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ru(i,n,r,s),-1<n&&(nc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ru(e,n,r,s)),(n=-1<t?e[t]:null)&&bh(n))}function bh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$i])nu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sh(e))?(nu(n,t),n.h==0&&(n.src=null,e[Rh]=null)):nc(t)}}}function cy(t){return t in al?al[t]:al[t]="on"+t}function SC(t,e){if(t.fa)t=!0;else{e=new yi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&bh(t),t=n.call(r,e)}return t}function Sh(t){return t=t[Rh],t instanceof rc?t:null}var cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ph(t){return typeof t=="function"?t:(t[cl]||(t[cl]=function(e){return t.handleEvent(e)}),t[cl])}function $e(){Qn.call(this),this.i=new rc(this),this.S=this,this.J=null}He($e,Qn);$e.prototype[$i]=!0;$e.prototype.removeEventListener=function(t,e,n,r){ay(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),ry(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=mo(o,r,!0,e)&&s}if(o=e.g=t,s=mo(o,r,!0,e)&&s,s=mo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=mo(o,r,!1,e)&&s}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nc(n[r]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function mo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&nu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ch=J.JSON.stringify;class PC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function CC(){var t=kh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kC{constructor(){this.h=this.g=null}add(e,n){const r=ly.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ly=new PC(()=>new OC,t=>t.reset());class OC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function DC(t){J.setTimeout(()=>{throw t},0)}let vi,Ei=!1,kh=new kC,uy=()=>{const t=J.Promise.resolve(void 0);vi=()=>{t.then(xC)}};var xC=()=>{for(var t;t=CC();){try{t.h.call(t.g)}catch(n){DC(n)}var e=ly;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ei=!1};function sc(t,e){$e.call(this),this.h=t||1,this.g=e||J,this.j=nt(this.qb,this),this.l=Date.now()}He(sc,$e);M=sc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(Oh(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Oh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){sc.$.N.call(this),Oh(this),delete this.g};function Nh(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function hy(t){t.g=Nh(()=>{t.g=null,t.i&&(t.i=!1,hy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VC extends Qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hy(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wi(t){Qn.call(this),this.h=t,this.g={}}He(wi,Qn);var Ep=[];function fy(t,e,n,r){Array.isArray(n)||(n&&(Ep[0]=n.toString()),n=Ep);for(var s=0;s<n.length;s++){var i=sy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function dy(t){Ah(t.g,function(e,n){this.g.hasOwnProperty(n)&&bh(e)},t),t.g={}}wi.prototype.N=function(){wi.$.N.call(this),dy(this)};wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ic(){this.g=!0}ic.prototype.Ea=function(){this.g=!1};function MC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function LC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UC(t,n)+(r?" "+r:"")})}function FC(t,e){t.info(function(){return"TIMEOUT: "+e})}ic.prototype.info=function(){};function UC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ch(n)}catch{return e}}var Rr={},wp=null;function oc(){return wp=wp||new $e}Rr.Ta="serverreachability";function py(t){rt.call(this,Rr.Ta,t)}He(py,rt);function Ti(t){const e=oc();Ge(e,new py(e))}Rr.STAT_EVENT="statevent";function my(t,e){rt.call(this,Rr.STAT_EVENT,t),this.stat=e}He(my,rt);function ut(t){const e=oc();Ge(e,new my(e,t))}Rr.Ua="timingevent";function gy(t,e){rt.call(this,Rr.Ua,t),this.size=e}He(gy,rt);function Hi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_y={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Dh(){}Dh.prototype.h=null;function Tp(t){return t.h||(t.h=t.i())}function yy(){}var qi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xh(){rt.call(this,"d")}He(xh,rt);function Vh(){rt.call(this,"c")}He(Vh,rt);var su;function cc(){}He(cc,Dh);cc.prototype.g=function(){return new XMLHttpRequest};cc.prototype.i=function(){return{}};su=new cc;function zi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wi(this),this.P=BC,t=Zl?125:void 0,this.V=new sc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vy}function vy(){this.i=null,this.g="",this.h=!1}var BC=45e3,iu={},da={};M=zi.prototype;M.setTimeout=function(t){this.P=t};function ou(t,e,n){t.L=1,t.v=uc(vn(e)),t.s=n,t.S=!0,Ey(t,null)}function Ey(t,e){t.G=Date.now(),Ki(t),t.A=vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Py(n.i,"t",r),t.C=0,n=t.l.J,t.h=new vy,t.g=Qy(t.l,n?e:null,!t.s),0<t.O&&(t.M=new VC(nt(t.Pa,t,t.g),t.O)),fy(t.U,t.g,"readystatechange",t.nb),e=t.I?ny(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ti(),MC(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&Wt(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=Wt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zl||this.g&&(this.h.h||this.g.ja()||bp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ti(3):Ti(2)),lc(this);var n=this.g.da();this.ca=n;t:if(wy(this)){var r=bp(this.g);t="";var s=r.length,i=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Js(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LC(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_i(a)){var l=a;break t}}l=null}if(n=l)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,au(this,n);else{this.i=!1,this.o=3,ut(12),or(this),Js(this);break e}}this.S?(Ty(this,u,o),Zl&&this.i&&u==3&&(fy(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),au(this,o)),u==4&&or(this),this.i&&!this.J&&(u==4?zy(this.l,this):(this.i=!1,Ki(this)))}else a1(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),or(this),Js(this)}}}catch{}finally{}};function wy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ty(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=jC(t,n),s==da){e==4&&(t.o=4,ut(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==iu){t.o=4,ut(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),au(t,s);wy(t)&&s!=da&&s!=iu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),jh(e),e.M=!0,ut(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),Js(t))}M.mb=function(){if(this.g){var t=Wt(this.g),e=this.g.ja();this.C<e.length&&(lc(this),Ty(this,t,e),this.i&&t!=4&&Ki(this))}};function jC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?da:(n=Number(e.substring(n,r)),isNaN(n)?iu:(r+=1,r+n>e.length?da:(e=e.slice(r,r+n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,or(this)};function Ki(t){t.Y=Date.now()+t.P,Iy(t,t.P)}function Iy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hi(nt(t.lb,t),e)}function lc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FC(this.j,this.A),this.L!=2&&(Ti(),ut(17)),or(this),this.o=2,Js(this)):Iy(this,this.Y-t)};function Js(t){t.l.H==0||t.J||zy(t.l,t)}function or(t){lc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Oh(t.V),dy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function au(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cu(n.i,t))){if(!t.K&&cu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ga(n),dc(n);else break e;Bh(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Hi(nt(n.ib,n),6e3));if(1>=Oy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ar(n,11)}else if((t.K||n.g==t)&&ga(n),!_i(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Mh(i,i.h),i.h=null))}if(r.F){const _=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,we(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Gy(r,r.J?r.pa:null,r.Y),o.K){Ny(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(lc(a),Ki(a)),r.g=o}else Hy(r);0<n.j.length&&pc(n)}else l[0]!="stop"&&l[0]!="close"||ar(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ar(n,7):Uh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ti(4)}catch{}}function $C(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ec(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function HC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ec(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ay(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ec(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HC(t),r=$C(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Ry=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function dr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof dr){this.h=t.h,pa(this,t.j),this.s=t.s,this.g=t.g,ma(this,t.m),this.l=t.l;var e=t.i,n=new Ii;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ip(this,n),this.o=t.o}else t&&(e=String(t).match(Ry))?(this.h=!1,pa(this,e[1]||"",!0),this.s=Bs(e[2]||""),this.g=Bs(e[3]||"",!0),ma(this,e[4]),this.l=Bs(e[5]||"",!0),Ip(this,e[6]||"",!0),this.o=Bs(e[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}dr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Ap,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Ap,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?WC:KC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,QC)),t.join("")};function vn(t){return new dr(t)}function pa(t,e,n){t.j=n?Bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ma(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ip(t,e,n){e instanceof Ii?(t.i=e,JC(t.i,t.h)):(n||(e=js(e,GC)),t.i=new Ii(e,t.h))}function we(t,e,n){t.i.set(e,n)}function uc(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ap=/[#\/\?@]/g,KC=/[#\?:]/g,WC=/[#\?]/g,GC=/[#\?@]/g,QC=/#/g;function Ii(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jn(t){t.g||(t.g=new Map,t.h=0,t.i&&qC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ii.prototype;M.add=function(t,e){Jn(this),this.i=null,t=ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function by(t,e){Jn(t),e=ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sy(t,e){return Jn(t),e=ws(t,e),t.g.has(e)}M.forEach=function(t,e){Jn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};M.ta=function(){Jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};M.Z=function(t){Jn(this);let e=[];if(typeof t=="string")Sy(this,t)&&(e=e.concat(this.g.get(ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Jn(this),this.i=null,t=ws(this,t),Sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Py(t,e,n){by(t,e),0<n.length&&(t.i=null,t.g.set(ws(t,e),Th(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JC(t,e){e&&!t.j&&(Jn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(by(this,r),Py(this,s,n))},t)),t.j=e}var XC=class{constructor(t,e){this.g=t,this.map=e}};function Cy(t){this.l=t||YC,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YC=10;function ky(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Oy(t){return t.h?1:t.g?t.g.size:0}function cu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mh(t,e){t.g?t.g.add(e):t.h=e}function Ny(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Cy.prototype.cancel=function(){if(this.i=Dy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Th(t.i)}var ZC=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function e1(){this.g=new ZC}function t1(t,e,n){const r=n||"";try{Ay(t,function(s,i){let o=s;ji(s)&&(o=Ch(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function n1(t,e){const n=new ic;if(J.Image){const r=new Image;r.onload=po(go,n,r,"TestLoadImage: loaded",!0,e),r.onerror=po(go,n,r,"TestLoadImage: error",!1,e),r.onabort=po(go,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=po(go,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function go(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wi(t){this.l=t.fc||null,this.j=t.ob||!1}He(Wi,Dh);Wi.prototype.g=function(){return new hc(this.l,this.j)};Wi.prototype.i=function(t){return function(){return t}}({});function hc(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(hc,$e);var Lh=0;M=hc.prototype;M.open=function(t,e){if(this.readyState!=Lh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ai(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gi(this)),this.readyState=Lh};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ai(this)),this.g&&(this.readyState=3,Ai(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gi(this):Ai(this),this.readyState==3&&xy(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Gi(this))};M.Ya=function(t){this.g&&(this.response=t,Gi(this))};M.ka=function(){this.g&&Gi(this)};function Gi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ai(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var r1=J.JSON.parse;function Pe(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vy,this.L=this.M=!1}He(Pe,$e);var Vy="",s1=/^https?$/i,i1=["POST","PUT"];M=Pe.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():su.g(),this.C=this.u?Tp(this.u):Tp(su),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Rp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=Y_(i1,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fy(this),0<this.B&&((this.L=o1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=Nh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Rp(this,i)}};function o1(t){return is&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof wh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Rp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,My(t),fc(t)}function My(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),fc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fc(this,!0)),Pe.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?Ly(this):this.kb())};M.kb=function(){Ly(this)};function Ly(t){if(t.h&&typeof wh<"u"&&(!t.C[1]||Wt(t)!=4||t.da()!=2)){if(t.v&&Wt(t)==4)Nh(t.La,0,t);else if(Ge(t,"readystatechange"),Wt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Ry)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!s1.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<Wt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",My(t)}}finally{fc(t)}}}}function fc(t,e){if(t.g){Fy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function Fy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function Wt(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),r1(e)}};function bp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Vy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function a1(t){const e={};t=(t.g&&2<=Wt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(_i(t[r]))continue;var n=NC(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}RC(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uy(t){let e="";return Ah(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Uy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function By(t){this.Ga=0,this.j=[],this.l=new ic,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ns("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ns("baseRetryDelayMs",5e3,t),this.hb=Ns("retryDelaySeedMs",1e4,t),this.eb=Ns("forwardChannelMaxRetries",2,t),this.xa=Ns("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Cy(t&&t.concurrentRequestLimit),this.Ja=new e1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=By.prototype;M.ra=8;M.H=1;function Uh(t){if(jy(t),t.H==3){var e=t.W++,n=vn(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),Qi(t,n),e=new zi(t,t.l,e),e.L=2,e.v=uc(vn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qy(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ki(e)}Wy(t)}function dc(t){t.g&&(jh(t),t.g.cancel(),t.g=null)}function jy(t){dc(t),t.u&&(J.clearTimeout(t.u),t.u=null),ga(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function pc(t){if(!ky(t.i)&&!t.m){t.m=!0;var e=t.Na;vi||uy(),Ei||(vi(),Ei=!0),kh.add(e,t),t.C=0}}function c1(t,e){return Oy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Hi(nt(t.Na,t,e),Ky(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new zi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=ny(i),ry(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$y(this,s,e),n=vn(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),Qi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Uy(i)))+"&"+e:this.o&&Fh(n,this.o,i)),Mh(this.i,s),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),s.aa=!0,ou(s,n,null)):ou(s,n,e),this.H=2}}else this.H==3&&(t?Sp(this,t):this.j.length==0||ky(this.i)||Sp(this))};function Sp(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),Qi(t,r),t.o&&t.s&&Fh(r,t.o,t.s),n=new zi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$y(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Mh(t.i,n),ou(n,r,e)}function Qi(t,e){t.na&&Ah(t.na,function(n,r){we(e,r,n)}),t.h&&Ay({},function(n,r){we(e,r,n)})}function $y(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{t1(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Hy(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;vi||uy(),Ei||(vi(),Ei=!0),kh.add(e,t),t.A=0}}function Bh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Hi(nt(t.Ma,t),Ky(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,qy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Hi(nt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),dc(this),qy(this))};function jh(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function qy(t){t.g=new zi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),Qi(t,e),t.o&&t.s&&Fh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=uc(vn(e)),n.s=null,n.S=!0,Ey(n,t)}M.ib=function(){this.v!=null&&(this.v=null,dc(this),Bh(this),ut(19))};function ga(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function zy(t,e){var n=null;if(t.g==e){ga(t),jh(t),t.g=null;var r=2}else if(cu(t.i,e))n=e.F,Ny(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=oc(),Ge(r,new gy(r,n)),pc(t)}else Hy(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&c1(t,e)||r==2&&Bh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function Ky(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ar(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=nt(t.pb,t);n||(n=new dr("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||pa(n,"https"),uc(n)),n1(n.toString(),r)}else ut(2);t.H=0,t.h&&t.h.za(e),Wy(t),jy(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function Wy(t){if(t.H=0,t.ma=[],t.h){const e=Dy(t.i);(e.length!=0||t.j.length!=0)&&(_p(t.ma,e),_p(t.ma,t.j),t.i.i.length=0,Th(t.j),t.j.length=0),t.h.ya()}}function Gy(t,e,n){var r=n instanceof dr?vn(n):new dr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ma(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new dr(null);r&&pa(i,r),e&&(i.g=e),s&&ma(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),Qi(t,r),r}function Qy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new Wi({ob:!0})):new Pe(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function Jy(){}M=Jy.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function _a(){if(is&&!(10<=Number(wC)))throw Error("Environmental error: no available transport.")}_a.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){$e.call(this),this.g=new By(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!_i(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_i(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ts(this)}He(wt,$e);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Gy(t,null,t.Y),pc(t)};wt.prototype.close=function(){Uh(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ch(t),t=n);e.j.push(new XC(e.fb++,t)),e.H==3&&pc(e)};wt.prototype.N=function(){this.g.h=null,delete this.j,Uh(this.g),delete this.g,wt.$.N.call(this)};function Xy(t){xh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(Xy,xh);function Yy(){Vh.call(this),this.status=1}He(Yy,Vh);function Ts(t){this.g=t}He(Ts,Jy);Ts.prototype.Ba=function(){Ge(this.g,"a")};Ts.prototype.Aa=function(t){Ge(this.g,new Xy(t))};Ts.prototype.za=function(t){Ge(this.g,new Yy)};Ts.prototype.ya=function(){Ge(this.g,"b")};function l1(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(Mt,l1);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ll(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ll(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ll(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ll(this,r),s=0;break}}this.h=s,this.i+=e};Mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var u1={};function $h(t){return-128<=t&&128>t?yC(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Gt(t){if(isNaN(t)||!isFinite(t))return Qr;if(0>t)return Ke(Gt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=lu;return new me(e,0)}function Zy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(Zy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gt(Math.pow(e,8)),r=Qr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Gt(Math.pow(e,i)),r=r.R(i).add(Gt(o))):(r=r.R(n),r=r.add(Gt(o)))}return r}var lu=4294967296,Qr=$h(0),uu=$h(1),Pp=$h(16777216);M=me.prototype;M.ea=function(){if(It(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:lu+r)*e,e*=lu}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mn(this))return"0";if(It(this))return"-"+Ke(this).toString(t);for(var e=Gt(Math.pow(t,6)),n=this,r="";;){var s=va(n,e).g;n=ya(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,mn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}M.X=function(t){return t=ya(this,t),It(t)?-1:mn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(uu)}M.abs=function(){return It(this)?Ke(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function ya(t,e){return t.add(Ke(e))}M.R=function(t){if(mn(this)||mn(t))return Qr;if(It(this))return It(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(It(t))return Ke(this.R(Ke(t)));if(0>this.X(Pp)&&0>t.X(Pp))return Gt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,_o(n,2*r+2*s),n[2*r+2*s+1]+=i*c,_o(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,_o(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,_o(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function _o(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ds(t,e){this.g=t,this.h=e}function va(t,e){if(mn(e))throw Error("division by zero");if(mn(t))return new Ds(Qr,Qr);if(It(t))return e=va(Ke(t),e),new Ds(Ke(e.g),Ke(e.h));if(It(e))return e=va(t,Ke(e)),new Ds(Ke(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=uu,r=e;0>=r.X(t);)n=Cp(n),r=Cp(r);var s=Vr(n,1),i=Vr(r,1);for(r=Vr(r,2),n=Vr(n,2);!mn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Vr(r,1),n=Vr(n,1)}return e=ya(t,s.R(e)),new Ds(s,e)}for(s=Qr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Gt(n),o=i.R(e);It(o)||0<o.X(t);)n-=r,i=Gt(n),o=i.R(e);mn(i)&&(i=uu),s=s.add(i),t=ya(t,o)}return new Ds(s,t)}M.gb=function(t){return va(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function Cp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Vr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(s,t.h)}_a.prototype.createWebChannel=_a.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;ac.NO_ERROR=0;ac.TIMEOUT=8;ac.HTTP_ERROR=6;_y.COMPLETE="complete";yy.EventType=qi;qi.OPEN="a";qi.CLOSE="b";qi.ERROR="c";qi.MESSAGE="d";$e.prototype.listen=$e.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Gt;me.fromString=Zy;var h1=function(){return new _a},f1=function(){return oc()},ul=ac,d1=_y,p1=Rr,kp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},m1=Wi,yo=yy,g1=Pe,_1=Mt,Jr=me;const Op="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Is="10.1.0";/**
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
 */const vr=new lh("@firebase/firestore");function Np(){return vr.logLevel}function j(t,...e){if(vr.logLevel<=ce.DEBUG){const n=e.map(Hh);vr.debug(`Firestore (${Is}): ${t}`,...n)}}function En(t,...e){if(vr.logLevel<=ce.ERROR){const n=e.map(Hh);vr.error(`Firestore (${Is}): ${t}`,...n)}}function os(t,...e){if(vr.logLevel<=ce.WARN){const n=e.map(Hh);vr.warn(`Firestore (${Is}): ${t}`,...n)}}function Hh(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw En(e),new Error(e)}function Te(t,e){t||Q()}function ee(t,e){return t}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ev{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class v1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class E1{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new ev(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Xe(e)}}class w1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class T1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new w1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new I1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function R1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tv{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=R1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Me(0,0))}static max(){return new Z(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Ri{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const b1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ri{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return b1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new H(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ie.fromString(e))}static fromName(e){return new K(Ie.fromString(e).popFirst(5))}static empty(){return new K(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ie(e.slice()))}}function S1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Kn(s,K.empty(),e)}function P1(t){return new Kn(t.readTime,t.key,-1)}class Kn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kn(Z.min(),K.empty(),-1)}static max(){return new Kn(Z.max(),K.empty(),-1)}}function C1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const k1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ji(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==k1)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new k((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new k((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}qh.ae=-1;function mc(t){return t==null}function Ea(t){return t===0&&1/t==-1/0}function N1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xp(this.data.getIterator())}getIteratorFrom(e){return new xp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class xp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new vt([])}unionWith(e){let n=new st(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rv("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const D1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=D1.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function zh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kh(t){const e=t.mapValue.fields.__previous_value__;return zh(e)?Kh(e):e}function bi(t){const e=Wn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class x1{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Si{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zh(t)?4:V1(t)?9007199254740991:10:Q()}function sn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Wn(s.timestampValue),a=Wn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),a=De(i.doubleValue);return o===a?Ea(o)===Ea(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Dp(o)!==Dp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!sn(o[c],a[c])))return!1;return!0}(t,e);default:return Q()}}function Pi(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=De(i.integerValue||i.doubleValue),c=De(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Vp(t.timestampValue,e.timestampValue);case 4:return Vp(bi(t),bi(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Er(i),c=Er(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ue(a[l],c[l]);if(u!==0)return u}return ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(De(i.latitude),De(o.latitude));return a!==0?a:ue(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=cs(a[l],c[l]);if(u)return u}return ue(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Eo.mapValue&&o===Eo.mapValue)return 0;if(i===Eo.mapValue)return 1;if(o===Eo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ue(c[h],u[h]);if(f!==0)return f;const d=cs(a[c[h]],l[u[h]]);if(d!==0)return d}return ue(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Vp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Wn(t),r=Wn(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function ls(t){return hu(t)}function hu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hu(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function fu(t){return!!t&&"integerValue"in t}function Wh(t){return!!t&&"arrayValue"in t}function Mp(t){return!!t&&"nullValue"in t}function Lp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function Xs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function V1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(Xs(this.value))}}function sv(t){const e=[];return br(t.fields,(n,r)=>{const s=new et([n]);if(Uo(r)){const i=sv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new vt(e)}/**
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
 */class Ye{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,Z.min(),Z.min(),Z.min(),pt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ye(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new Ye(e,2,n,Z.min(),Z.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,Z.min(),Z.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wa{constructor(e,n){this.position=e,this.inclusive=n}}function Fp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Up(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function M1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iv{}class Ve extends iv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F1(e,n,r):n==="array-contains"?new j1(e,r):n==="in"?new $1(e,r):n==="not-in"?new H1(e,r):n==="array-contains-any"?new q1(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U1(e,r):new B1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cs(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class on extends iv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new on(e,n)}matches(e){return ov(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ov(t){return t.op==="and"}function av(t){return L1(t)&&ov(t)}function L1(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function du(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(av(t))return t.filters.map(e=>du(e)).join(",");{const e=t.filters.map(n=>du(n)).join(",");return`${t.op}(${e})`}}function cv(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(t,e):t instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&cv(o,s.filters[a]),!0):!1}(t,e):void Q()}function lv(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(lv).join(" ,")+"}"}(t):"Filter"}class F1 extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class U1 extends Ve{constructor(e,n){super(e,"in",n),this.keys=uv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class B1 extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=uv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class j1 extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wh(n)&&Pi(n.arrayValue,this.value)}}class $1 extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pi(this.value.arrayValue,n)}}class H1 extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pi(this.value.arrayValue,n)}}class q1 extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pi(this.value.arrayValue,r))}}/**
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
 */class z1{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Bp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new z1(t,e,n,r,s,i,o)}function Gh(t){const e=ee(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>du(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.he=n}return e.he}function Qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Up(t.startAt,e.startAt)&&Up(t.endAt,e.endAt)}function pu(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class gc{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function K1(t,e,n,r,s,i,o,a){return new gc(t,e,n,r,s,i,o,a)}function hv(t){return new gc(t)}function jp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function W1(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function G1(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Q1(t){return t.collectionGroup!==null}function Xr(t){const e=ee(t);if(e.Pe===null){e.Pe=[];const n=G1(e),r=W1(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ys(n)),e.Pe.push(new Ys(et.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ys(et.keyField(),i))}}}return e.Pe}function wn(t){const e=ee(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Bp(e.path,e.collectionGroup,Xr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Xr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ys(i.field,o))}const r=e.endAt?new wa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new wa(e.startAt.position,e.startAt.inclusive):null;e.Ie=Bp(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.Ie}function mu(t,e,n){return new gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _c(t,e){return Qh(wn(t),wn(e))&&t.limitType===e.limitType}function fv(t){return`${Gh(wn(t))}|lt:${t.limitType}`}function gu(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>lv(s)).join(", ")}]`),mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ls(s)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function yc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Fp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Xr(r),s)||r.endAt&&!function(o,a,c){const l=Fp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Xr(r),s))}(t,e)}function J1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dv(t){return(e,n)=>{let r=!1;for(const s of Xr(t)){const i=X1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function X1(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?cs(c,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return nv(this.inner)}size(){return this.innerSize}}/**
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
 */const Y1=new be(K.comparator);function Tn(){return Y1}const pv=new be(K.comparator);function $s(...t){let e=pv;for(const n of t)e=e.insert(n.key,n);return e}function mv(t){let e=pv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Zs()}function gv(){return Zs()}function Zs(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z1=new be(K.comparator),ek=new st(K.comparator);function se(...t){let e=ek;for(const n of t)e=e.add(n);return e}const tk=new st(ue);function nk(){return tk}/**
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
 */function _v(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ea(e)?"-0":e}}function yv(t){return{integerValue:""+t}}function rk(t,e){return N1(e)?yv(e):_v(t,e)}/**
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
 */class vc{constructor(){this._=void 0}}function sk(t,e,n){return t instanceof Ta?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zh(i)&&(i=Kh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ci?Ev(t,e):t instanceof ki?wv(t,e):function(s,i){const o=vv(s,i),a=$p(o)+$p(s.Te);return fu(o)&&fu(s.Te)?yv(a):_v(s.serializer,a)}(t,e)}function ik(t,e,n){return t instanceof Ci?Ev(t,e):t instanceof ki?wv(t,e):n}function vv(t,e){return t instanceof Ia?function(r){return fu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ta extends vc{}class Ci extends vc{constructor(e){super(),this.elements=e}}function Ev(t,e){const n=Tv(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ki extends vc{constructor(e){super(),this.elements=e}}function wv(t,e){let n=Tv(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class Ia extends vc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function $p(t){return De(t.integerValue||t.doubleValue)}function Tv(t){return Wh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ok(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ci&&s instanceof Ci||r instanceof ki&&s instanceof ki?as(r.elements,s.elements,sn):r instanceof Ia&&s instanceof Ia?sn(r.Te,s.Te):r instanceof Ta&&s instanceof Ta}(t.transform,e.transform)}class ak{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ec{}function Iv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Rv(t.key,tn.none()):new Yi(t.key,t.data,tn.none());{const n=t.data,r=pt.empty();let s=new st(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xn(t.key,r,new vt(s.toArray()),tn.none())}}function ck(t,e,n){t instanceof Yi?function(s,i,o){const a=s.value.clone(),c=qp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xn?function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=qp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Av(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ei(t,e,n,r){return t instanceof Yi?function(i,o,a,c){if(!Bo(i.precondition,o))return a;const l=i.value.clone(),u=zp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xn?function(i,o,a,c){if(!Bo(i.precondition,o))return a;const l=zp(i.fieldTransforms,c,o),u=o.data;return u.setAll(Av(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function lk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=vv(r.transform,s||null);i!=null&&(n===null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function Hp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,(i,o)=>ok(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends Ec{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends Ec{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Av(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qp(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ik(o,a,n[s]))}return r}function zp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sk(i,o,e))}return r}class Rv extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uk extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ck(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Iv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Hp(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Hp(n,r))}}class Jh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return Z1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jh(e,n,r,s)}}/**
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
 */class fk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,ie;function pk(t){switch(t){default:return Q();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function bv(t){if(t===void 0)return En("GRPC error has no .code"),P.UNKNOWN;switch(t){case Ne.OK:return P.OK;case Ne.CANCELLED:return P.CANCELLED;case Ne.UNKNOWN:return P.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return P.INTERNAL;case Ne.UNAVAILABLE:return P.UNAVAILABLE;case Ne.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ne.NOT_FOUND:return P.NOT_FOUND;case Ne.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ne.ABORTED:return P.ABORTED;case Ne.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ne.DATA_LOSS:return P.DATA_LOSS;default:return Q()}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Xh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return wo}static getOrCreateInstance(){return wo===null&&(wo=new Xh),wo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let wo=null;/**
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
 */function mk(){return new TextEncoder}/**
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
 */const gk=new Jr([4294967295,4294967295],0);function Kp(t){const e=mk().encode(t),n=new _1;return n.update(e),new Uint8Array(n.digest())}function Wp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class Yh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Jr.fromNumber(this.de)}Re(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(gk)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Kp(e),[r,s]=Wp(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Yh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Kp(e),[r,s]=Wp(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wc(Z.min(),s,new be(ue),Tn(),se())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,se(),se(),se())}}/**
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
 */class jo{constructor(e,n,r,s){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=s}}class Sv{constructor(e,n){this.targetId=e,this.pe=n}}class Pv{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gp{constructor(){this.ye=0,this.we=Jp(),this.Se=ot.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=se(),n=se(),r=se();return this.we.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new Zi(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Jp()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class _k{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Tn(),this.$e=Qp(),this.Ue=new be(ue)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){var n,r;const s=e.targetId,i=e.pe.count,o=this.Xe(s);if(o){const a=o.target;if(pu(a))if(i===0){const c=new K(a.path);this.ze(s,c,Ye.newNoDocument(c,Z.min()))}else Te(i===1);else{const c=this.et(s);if(c!==i){const l=this.tt(e,c);if(l.status!==0){this.Ye(s);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,u)}(n=Xh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,f,d,g){var _,v,A,b,D,O;const ne={localCacheCount:d,existenceFilterCount:g.count},U=g.unchangedNames;return U&&(ne.bloomFilter={applied:h===0,hashCount:(_=U==null?void 0:U.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(b=(A=(v=U==null?void 0:U.bits)===null||v===void 0?void 0:v.bitmap)===null||A===void 0?void 0:A.length)!==null&&b!==void 0?b:0,padding:(O=(D=U==null?void 0:U.bits)===null||D===void 0?void 0:D.padding)!==null&&O!==void 0?O:0},f&&(ne.bloomFilter.mightContain=f)),ne}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:s}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=Er(i).toUint8Array()}catch(h){if(h instanceof rv)return os("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new Yh(c,o,a)}catch(h){return os(h instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const f=this.qe.rt();return l.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${h}`)};return l.de===0?{status:1}:{status:s===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(e,i,null),s++)}),s}st(e){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&pu(a.target)){const c=new K(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,Ye.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=se();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(e));const s=new wc(e,n,this.Ue,this.Ke,r);return this.Ke=Tn(),this.$e=Qp(),this.Ue=new be(ue),s}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ot(e,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Gp,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new st(ue),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Gp),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Qp(){return new be(K.comparator)}function Jp(){return new be(K.comparator)}const yk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ek=(()=>({and:"AND",or:"OR"}))();class wk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _u(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function Aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tk(t,e){return Aa(t,e.toTimestamp())}function nn(t){return Te(!!t),Z.fromTimestamp(function(n){const r=Wn(n);return new Me(r.seconds,r.nanos)}(t))}function Zh(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function kv(t){const e=Ie.fromString(t);return Te(xv(e)),e}function yu(t,e){return Zh(t.databaseId,e.path)}function hl(t,e){const n=kv(e);if(n.get(1)!==t.databaseId.projectId)throw new H(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Ov(n))}function vu(t,e){return Zh(t.databaseId,e)}function Ik(t){const e=kv(t);return e.length===4?Ie.emptyPath():Ov(e)}function Eu(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ov(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xp(t,e,n){return{name:yu(t,e),fields:n.value.mapValue.fields}}function Ak(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Te(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?P.UNKNOWN:bv(l.code);return new H(u,l.message||"")}(o);n=new Pv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hl(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):Z.min(),a=new pt({mapValue:{fields:r.document.fields}}),c=Ye.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new jo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hl(t,r.document),i=r.readTime?nn(r.readTime):Z.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hl(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dk(s,i),a=r.targetId;n=new Sv(a,o)}}return n}function Rk(t,e){let n;if(e instanceof Yi)n={update:Xp(t,e.key,e.value)};else if(e instanceof Rv)n={delete:yu(t,e.key)};else if(e instanceof Xn)n={update:Xp(t,e.key,e.data),updateMask:xk(e.fieldMask)};else{if(!(e instanceof uk))return Q();n={verify:yu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Tk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function bk(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(Z.min())&&(o=nn(i)),new ak(o,s.transformResults||[])}(n,e))):[]}function Sk(t,e){return{documents:[vu(t,e.path)]}}function Pk(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=vu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Dv(on.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Lr(h.field),direction:Ok(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=_u(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Ck(t){let e=Ik(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Nv(h);return f instanceof on&&av(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(g){return new Ys(Fr(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,mc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,d=h.values||[];return new wa(d,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,d=h.values||[];return new wa(d,f)}(n.endAt)),K1(e,s,o,i,a,"F",c,l)}function kk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>Nv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Ok(t){return yk[t]}function Nk(t){return vk[t]}function Dk(t){return Ek[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return et.fromServerFormat(t.fieldPath)}function Dv(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Lp(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(Mp(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lp(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(Mp(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:Nk(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(s=>Dv(s));return r.length===1?r[0]:{compositeFilter:{op:Dk(n.op),filters:r}}}(t):Q()}function xk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ln{constructor(e,n,r,s,i=Z.min(),o=Z.min(),a=ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vk{constructor(e){this.ct=e}}function Mk(t){const e=Ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mu(e,e.limit,"L"):e}/**
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
 */class Lk{constructor(){this.sn=new Fk}addToCollectionParentIndex(e,n){return this.sn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Kn.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class Fk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ie.comparator)).toArray()}}/**
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
 */class us{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new us(0)}static On(){return new us(-1)}}/**
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
 */class Uk{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ei(r.mutation,s,vt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$s();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tn();const o=Zs(),a=function(){return Zs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Xn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ei(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Bk(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new be((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||vt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=gv();u.forEach(f=>{if(!i.has(f)){const d=Iv(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Q1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(cr());let a=-1,c=i;return o.next(l=>k.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:mv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=$s();return this.indexManager.getCollectionParents(e,s).next(o=>k.forEach(o,a=>{const c=function(u,h){return new gc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ye.newInvalidDocument(l)))});let o=$s();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&ei(l.mutation,c,vt.empty(),Me.now()),yc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class $k{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return k.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(s){return{name:s.name,query:Mk(s.bundledQuery),readTime:nn(s.readTime)}}(n)),k.resolve()}}/**
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
 */class Hk{constructor(){this.overlays=new be(K.comparator),this.cr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return k.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=cr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return k.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fk(n,r));let i=this.cr.get(n);i===void 0&&(i=se(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
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
 */class ef{constructor(){this.lr=new st(Be.hr),this.Pr=new st(Be.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Be(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new K(new Ie([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new K(new Ie([])),r=new Be(n,e),s=new Be(n,e+1);let i=se();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return K.comparator(e.key,n.key)||ue(e.mr,n.mr)}static Ir(e,n){return ue(e.mr,n.mr)||K.comparator(e.key,n.key)}}/**
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
 */class qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new st(Be.hr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hk(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(ue);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),k.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Be(new K(i),0);let a=new st(ue);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.mr)),!0)},o),k.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return k.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Be(n,0),s=this.pr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zk{constructor(e){this.Dr=e,this.docs=function(){return new be(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||C1(P1(u),r)<=0||(s.has(u.key)||yc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}vr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kk(this)}getSize(e){return k.resolve(this.size)}}class Kk extends Uk{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(e,s)):this.sr.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
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
 */class Wk{constructor(e){this.persistence=e,this.Cr=new As(n=>Gh(n),Qh),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new ef,this.targetCount=0,this.Or=us.xn()}forEachTarget(e,n){return this.Cr.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),k.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Ln(n),k.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Mr.containsKey(n))}}/**
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
 */class Gk{constructor(e,n){this.Nr={},this.overlays={},this.Br=new qh(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Wk(this),this.indexManager=new Lk,this.remoteDocumentCache=function(s){return new zk(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Vk(n),this.Qr=new $k(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new qk(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new Qk(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(e,n){return k.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class Qk extends O1{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.Wr=new ef,this.Gr=null}static zr(e){return new tf(e)}get jr(){if(this.Gr)return this.Gr;throw Q()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.jr,r=>{const s=K.fromPath(r);return this.Hr(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return k.or([()=>k.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
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
 */class nf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=s}static qi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nf(e,n.fromCache,r,s)}}/**
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
 */class Jk{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.$i(e,n).next(i=>i||this.Ui(e,n,s,r)).next(i=>i||this.Wi(e,n))}$i(e,n){if(jp(n))return k.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=mu(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(e,mu(n,null,"F")):this.ji(e,l,n,c)}))})))}Ui(e,n,r,s){return jp(n)||s.isEqual(Z.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(e,n):(Np()<=ce.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gu(n)),this.ji(e,o,n,S1(s,-1)))})}Gi(e,n){let r=new st(dv(e));return n.forEach((s,i)=>{yc(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(e,n){return Np()<=ce.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",gu(n)),this.Ki.getDocumentsMatchingQuery(e,n,Kn.min())}ji(e,n,r,s){return this.Ki.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Xk{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new be(ue),this.Yi=new As(i=>Gh(i),Qh),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jk(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Yk(t,e,n,r){return new Xk(t,e,n,r)}async function Vv(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zk(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let d=k.resolve();return f.forEach(g=>{d=d.next(()=>u.getEntry(c,g)).next(_=>{const v=l.docVersions.get(g);Te(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=se();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Mv(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function eO(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(ot.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(_,v,A){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(f,d,u)&&a.push(n.kr.updateTargetData(i,d))});let c=Tn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(tO(i,o,e.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(Z.min())){const u=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=s,i))}function tO(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:s}})}function nO(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rO(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new Ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function wu(t,e,n){const r=ee(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Yp(t,e,n){const r=ee(t);let s=Z.min(),i=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=ee(c),f=h.Yi.get(u);return f!==void 0?k.resolve(h.Ji.get(f)):h.kr.getTargetData(l,u)}(r,o,wn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:se())).next(a=>(sO(r,J1(e),a),{documents:a,ss:i})))}function sO(t,e,n){let r=t.Zi.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Zi.set(e,r)}class Zp{constructor(){this.activeTargetIds=nk()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iO{constructor(){this.Hs=new Zp,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Zp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class oO{Ys(e){}shutdown(){}}/**
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
 */class em{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let To=null;function fl(){return To===null?To=function(){return 268435456+Math.round(2147483648*Math.random())}():To++,"0x"+To.toString(16)}/**
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
 */const aO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cO{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
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
 */const Je="WebChannelConnection";class lO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=fl(),c=this.mo(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,i,o),this.po(n,c,l,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw os("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=aO[n];return`${this.To}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,s){const i=fl();return new Promise((o,a)=>{const c=new g1;c.setWithCredentials(!0),c.listenOnce(d1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ul.NO_ERROR:const u=c.getResponseJson();j(Je,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ul.TIMEOUT:j(Je,`RPC '${e}' ${i} timed out`),a(new H(P.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const h=c.getStatus();if(j(Je,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(A)>=0?A:P.UNKNOWN}(d.status);a(new H(g,d.message))}else a(new H(P.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new H(P.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{j(Je,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);j(Je,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}wo(e,n,r){const s=fl(),i=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=h1(),a=f1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new m1({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");j(Je,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const g=new cO({so:v=>{d?j(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(f||(j(Je,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(Je,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),_=(v,A,b)=>{v.listen(A,D=>{try{b(D)}catch(O){setTimeout(()=>{throw O},0)}})};return _(h,yo.EventType.OPEN,()=>{d||j(Je,`RPC '${e}' stream ${s} transport opened.`)}),_(h,yo.EventType.CLOSE,()=>{d||(d=!0,j(Je,`RPC '${e}' stream ${s} transport closed`),g.Po())}),_(h,yo.EventType.ERROR,v=>{d||(d=!0,os(Je,`RPC '${e}' stream ${s} transport errored:`,v),g.Po(new H(P.UNAVAILABLE,"The operation could not be completed")))}),_(h,yo.EventType.MESSAGE,v=>{var A;if(!d){const b=v.data[0];Te(!!b);const D=b,O=D.error||((A=D[0])===null||A===void 0?void 0:A.error);if(O){j(Je,`RPC '${e}' stream ${s} received error:`,O);const ne=O.status;let U=function(qe){const Ae=Ne[qe];if(Ae!==void 0)return bv(Ae)}(ne),le=O.message;U===void 0&&(U=P.INTERNAL,le="Unknown error status: "+ne+" with message "+O.message),d=!0,g.Po(new H(U,le)),h.close()}else j(Je,`RPC '${e}' stream ${s} received:`,b),g.Io(b)}}),_(a,p1.STAT_EVENT,v=>{v.stat===kp.PROXY?j(Je,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===kp.NOPROXY&&j(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.ho()},0),g}}function dl(){return typeof document<"u"?document:null}/**
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
 */function Tc(t){return new wk(t,!0)}/**
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
 */class Lv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Fv{constructor(e,n,r,s,i,o,a,c){this.ii=e,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Lv(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(En(n.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{e(()=>{const s=new H(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uO extends Fv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=Ak(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?nn(o.readTime):Z.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=Eu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=pu(c)?{documents:Sk(i,c)}:{query:Pk(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Cv(i,o.resumeToken);const l=_u(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Aa(i,o.snapshotVersion.toTimestamp());const l=_u(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=kk(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=Eu(this.serializer),n.removeTarget=e,this.Ho(n)}}class hO extends Fv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=bk(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.u_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Eu(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rk(this.serializer,r))};this.Ho(n)}}/**
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
 */class fO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new H(P.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(P.UNKNOWN,s.toString())})}yo(e,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(P.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class dO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(En(n),this.d_=!1):j("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class pO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ee(c);l.y_.add(4),await eo(l),l.b_.set("Unknown"),l.y_.delete(4),await Ic(l)}(this))})}),this.b_=new dO(r,s)}}async function Ic(t){if(Sr(t))for(const e of t.w_)await e(!0)}async function eo(t){for(const e of t.w_)await e(!1)}function Uv(t,e){const n=ee(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),of(n)?sf(n):Rs(n).Uo()&&rf(n,e))}function Bv(t,e){const n=ee(t),r=Rs(n);n.p_.delete(e),r.Uo()&&jv(n,e),n.p_.size===0&&(r.Uo()?r.zo():Sr(n)&&n.b_.set("Unknown"))}function rf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).i_(e)}function jv(t,e){t.D_.Be(e),Rs(t).s_(e)}function sf(t){t.D_=new _k({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.b_.A_()}function of(t){return Sr(t)&&!Rs(t).$o()&&t.p_.size>0}function Sr(t){return ee(t).y_.size===0}function $v(t){t.D_=void 0}async function mO(t){t.p_.forEach((e,n)=>{rf(t,e)})}async function gO(t,e){$v(t),of(t)?(t.b_.m_(e),sf(t)):t.b_.set("Unknown")}async function _O(t,e,n){if(t.b_.set("Online"),e instanceof Pv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ra(t,r)}else if(e instanceof jo?t.D_.We(e):e instanceof Sv?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Z.min()))try{const r=await Mv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.p_.get(l);u&&i.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.p_.get(c);if(!u)return;i.p_.set(c,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),jv(i,c);const h=new Ln(u.target,c,l,u.sequenceNumber);rf(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Ra(t,r)}}async function Ra(t,e,n){if(!Xi(e))throw e;t.y_.add(1),await eo(t),t.b_.set("Offline"),n||(n=()=>Mv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Ic(t)})}function Hv(t,e){return e().catch(n=>Ra(t,n,e))}async function Ac(t){const e=ee(t),n=Gn(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;yO(e);)try{const s=await nO(e.localStore,r);if(s===null){e.g_.length===0&&n.zo();break}r=s.batchId,vO(e,s)}catch(s){await Ra(e,s)}qv(e)&&zv(e)}function yO(t){return Sr(t)&&t.g_.length<10}function vO(t,e){t.g_.push(e);const n=Gn(t);n.Uo()&&n.__&&n.a_(e.mutations)}function qv(t){return Sr(t)&&!Gn(t).$o()&&t.g_.length>0}function zv(t){Gn(t).start()}async function EO(t){Gn(t).l_()}async function wO(t){const e=Gn(t);for(const n of t.g_)e.a_(n.mutations)}async function TO(t,e,n){const r=t.g_.shift(),s=Jh.from(r,e,n);await Hv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ac(t)}async function IO(t,e){e&&Gn(t).__&&await async function(r,s){if(function(o){return pk(o)&&o!==P.ABORTED}(s.code)){const i=r.g_.shift();Gn(r).Go(),await Hv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ac(r)}}(t,e),qv(t)&&zv(t)}async function tm(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.y_.add(3),await eo(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Ic(n)}async function AO(t,e){const n=ee(t);e?(n.y_.delete(2),await Ic(n)):e||(n.y_.add(2),await eo(n),n.b_.set("Unknown"))}function Rs(t){return t.v_||(t.v_=function(n,r,s){const i=ee(n);return i.P_(),new uO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:mO.bind(null,t),uo:gO.bind(null,t),r_:_O.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),of(t)?sf(t):t.b_.set("Unknown")):(await t.v_.stop(),$v(t))})),t.v_}function Gn(t){return t.C_||(t.C_=function(n,r,s){const i=ee(n);return i.P_(),new hO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{_o:EO.bind(null,t),uo:IO.bind(null,t),c_:wO.bind(null,t),u_:TO.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ac(t)):(await t.C_.stop(),t.g_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
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
 */class af{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new af(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(t,e){if(En("AsyncQueue",`${e}: ${t}`),Xi(t))return new H(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Yr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Yr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class nm{constructor(){this.F_=new be(K.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):Q():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hs(e,n,Yr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class RO{constructor(){this.x_=void 0,this.listeners=[]}}class bO{constructor(){this.queries=new As(e=>fv(e),_c),this.onlineState="Unknown",this.O_=new Set}}async function SO(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new RO),s)try{i.x_=await n.onListen(r)}catch(o){const a=cf(o,`Initialization of query '${gu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.N_(n.onlineState),i.x_&&e.B_(i.x_)&&lf(n)}async function PO(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function CO(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&lf(n)}function kO(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function lf(t){t.O_.forEach(e=>{e.next()})}class OO{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
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
 */class Kv{constructor(e){this.key=e}}class Wv{constructor(e){this.key=e}}class NO{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=se(),this.mutatedKeys=se(),this.na=dv(e),this.ra=new Yr(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new nm,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=yc(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),_=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?g!==_&&(r.track({type:3,doc:d}),v=!0):this._a(f,d)||(r.track({type:2,doc:d}),v=!0,(c&&this.na(d,c)>0||l&&this.na(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),v=!0):f&&!d&&(r.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(d?(o=o.add(d),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const i=e.oa.M_();i.sort((l,u)=>function(f,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(f)-g(d)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,i.length!==0||c?{snapshot:new hs(this.query,e.ra,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new nm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=se(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new Wv(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new Kv(r))}),n}ha(e){this.X_=e.ss,this.ta=se();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return hs.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class DO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xO{constructor(e){this.key=e,this.Ia=!1}}class VO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new As(a=>fv(a),_c),this.da=new Map,this.Aa=new Set,this.Ra=new be(K.comparator),this.Va=new Map,this.ma=new ef,this.fa={},this.ga=new Map,this.pa=us.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function MO(t,e){const n=KO(t);let r,s;const i=n.Ea.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await rO(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await LO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Uv(n.remoteStore,o)}return s}async function LO(t,e,n,r,s){t.wa=(h,f,d)=>async function(_,v,A,b){let D=v.view.sa(A);D.zi&&(D=await Yp(_.localStore,v.query,!1).then(({documents:U})=>v.view.sa(U,D)));const O=b&&b.targetChanges.get(v.targetId),ne=v.view.applyChanges(D,_.isPrimaryClient,O);return sm(_,v.targetId,ne.ca),ne.snapshot}(t,h,f,d);const i=await Yp(t.localStore,e,!0),o=new NO(e,i.ss),a=o.sa(i.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);sm(t,n,l.ca);const u=new DO(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),l.snapshot}async function FO(t,e){const n=ee(t),r=n.Ea.get(e),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!_c(i,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Bv(n.remoteStore,r.targetId),Tu(n,r.targetId)}).catch(Ji)):(Tu(n,r.targetId),await wu(n.localStore,r.targetId,!0))}async function UO(t,e,n){const r=WO(t);try{const s=await function(o,a){const c=ee(o),l=Me.now(),u=a.reduce((d,g)=>d.add(g.key),se());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Tn(),_=se();return c.Xi.getEntries(d,u).next(v=>{g=v,g.forEach((A,b)=>{b.isValidDocument()||(_=_.add(A))})}).next(()=>c.localDocuments.getOverlayedDocuments(d,g)).next(v=>{h=v;const A=[];for(const b of a){const D=lk(b,h.get(b.key).overlayedDocument);D!=null&&A.push(new Xn(b.key,D,sv(D.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(d,l,A,a)}).next(v=>{f=v;const A=v.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(d,v.batchId,A)})}).then(()=>({batchId:f.batchId,changes:mv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new be(ue)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await to(r,s.changes),await Ac(r.remoteStore)}catch(s){const i=cf(s,"Failed to persist write");n.reject(i)}}async function Gv(t,e){const n=ee(t);try{const r=await eO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?Te(o.Ia):s.removedDocuments.size>0&&(Te(o.Ia),o.Ia=!1))}),await to(n,r,e)}catch(r){await Ji(r)}}function rm(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ee(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.N_(a)&&(l=!0)}),l&&lf(c)}(r.eventManager,e),s.length&&r.Ta.r_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BO(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Va.get(e),i=s&&s.key;if(i){let o=new be(K.comparator);o=o.insert(i,Ye.newNoDocument(i,Z.min()));const a=se().add(i),c=new wc(Z.min(),new Map,new be(ue),o,a);await Gv(r,c),r.Ra=r.Ra.remove(i),r.Va.delete(e),uf(r)}else await wu(r.localStore,e,!1).then(()=>Tu(r,e,n)).catch(Ji)}async function jO(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await Zk(n.localStore,e);Jv(n,r,null),Qv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Ji(s)}}async function $O(t,e,n){const r=ee(t);try{const s=await function(o,a){const c=ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Te(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Jv(r,e,n),Qv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Ji(s)}}function Qv(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function Jv(t,e,n){const r=ee(t);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.fa[r.currentUser.toKey()]=s}}function Tu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||Xv(t,r)})}function Xv(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(Bv(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),uf(t))}function sm(t,e,n){for(const r of n)r instanceof Kv?(t.ma.addReference(r.key,e),HO(t,r)):r instanceof Wv?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||Xv(t,r.key)):Q()}function HO(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(j("SyncEngine","New document in limbo: "+n),t.Aa.add(r),uf(t))}function uf(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new K(Ie.fromString(e)),r=t.pa.next();t.Va.set(r,new xO(n)),t.Ra=t.Ra.insert(n,r),Uv(t.remoteStore,new Ln(wn(hv(n.path)),r,"TargetPurposeLimboResolution",qh.ae))}}async function to(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=nf.qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(c,l){const u=ee(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(l,f=>k.forEach(f.Li,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>k.forEach(f.ki,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Xi(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const d=u.Ji.get(f),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(f,_)}}}(r.localStore,i))}async function qO(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Vv(n.localStore,e);n.currentUser=e,function(i,o){i.ga.forEach(a=>{a.forEach(c=>{c.reject(new H(P.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r.ts)}}function zO(t,e){const n=ee(t),r=n.Va.get(e);if(r&&r.Ia)return se().add(r.key);{let s=se();const i=n.da.get(e);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function KO(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BO.bind(null,e),e.Ta.r_=CO.bind(null,e.eventManager),e.Ta.Sa=kO.bind(null,e.eventManager),e}function WO(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$O.bind(null,e),e}class im{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Yk(this.persistence,new Jk,e.initialUser,this.serializer)}createPersistence(e){return new Gk(tf.zr,this.serializer)}createSharedClientState(e){return new iO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qO.bind(null,this.syncEngine),await AO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bO}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(i){return new lO(i)}(e.databaseInfo);return function(i,o,a,c){return new fO(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new pO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>rm(this.syncEngine,n,0),function(){return em.v()?new em:new oO}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new VO(s,i,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ee(n);j("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await eo(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class QO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class JO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=tv.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pl(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function om(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YO(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>tm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>tm(e.remoteStore,i)),t._onlineComponents=e}function XO(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function YO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await pl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XO(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await pl(t,new im)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await pl(t,new im);return t._offlineComponents}async function Yv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await om(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await om(t,new GO))),t._onlineComponents}function ZO(t){return Yv(t).then(e=>e.syncEngine)}async function eN(t){const e=await Yv(t),n=e.eventManager;return n.onListen=MO.bind(null,e.syncEngine),n.onUnlisten=FO.bind(null,e.syncEngine),n}function tN(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new QO({next:f=>{o.enqueueAndForget(()=>PO(i,h)),f.fromCache&&c.source==="server"?l.reject(new H(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new OO(a,u,{includeMetadataChanges:!0,W_:!0});return SO(i,h)}(await eN(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Zv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const am=new Map;/**
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
 */function eE(t,e,n){if(!n)throw new H(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nN(t,e,n,r){if(e===!0&&r===!0)throw new H(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cm(t){if(!K.isDocumentKey(t))throw new H(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lm(t){if(K.isDocumentKey(t))throw new H(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function fs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hf(t);throw new H(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class um{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new um({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new um(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new y1;switch(r.type){case"firstParty":return new T1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=am.get(n);r&&(j("ComponentProvider","Removing Datastore"),am.delete(n),r.terminate())}(this),Promise.resolve()}}function rN(t,e,n,r={}){var s;const i=(t=fs(t,Rc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Xe.MOCK_USER;else{a=d_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Xe(l)}t._authCredentials=new v1(new ev(a,c))}}/**
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
 */class bc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bc(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class Hn extends bc{constructor(e,n,r){super(e,n,hv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new K(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function hm(t,e,...n){if(t=xe(t),eE("collection","path",e),t instanceof Rc){const r=Ie.fromString(e,...n);return lm(r),new Hn(t,null,r)}{if(!(t instanceof Rt||t instanceof Hn))throw new H(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return lm(r),new Hn(t.firestore,null,r)}}function sN(t,e,...n){if(t=xe(t),arguments.length===1&&(e=tv.V()),eE("doc","path",e),t instanceof Rc){const r=Ie.fromString(e,...n);return cm(r),new Rt(t,null,new K(r))}{if(!(t instanceof Rt||t instanceof Hn))throw new H(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return cm(r),new Rt(t.firestore,t instanceof Hn?t.converter:null,new K(r))}}/**
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
 */class iN{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Lv(this,"async_queue_retry"),this.Xa=()=>{const n=dl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=dl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new $n;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Xi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw En("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const s=af.createAndSchedule(this,e,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&Q()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class Sc extends Rc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new iN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nE(this),this._firestoreClient.terminate()}}function oN(t,e){const n=typeof t=="object"?t:hh(),r=typeof t=="string"?t:e||"(default)",s=Qa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=u_("firestore");i&&rN(s,...i)}return s}function tE(t){return t._firestoreClient||nE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nE(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new x1(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Zv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new JO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(ot.fromBase64String(e))}catch(n){throw new H(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ff{constructor(e){this._methodName=e}}/**
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
 */class df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */const aN=/^__.*__$/;class cN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class rE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class pf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.Pu(e),s}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return ba(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(sE(this.uu)&&aN.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class lN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}Ru(e,n,r,s=!1){return new pf({uu:e,methodName:n,Au:r,path:et.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iE(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new lN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uN(t,e,n,r,s,i={}){const o=t.Ru(i.merge||i.mergeFields?2:0,e,n,s);mf("Data must be an object, but it was:",o,r);const a=oE(r,o);let c,l;if(i.merge)c=new vt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Iu(e,h,n);if(!o.contains(f))throw new H(P.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);cE(u,f)||u.push(f)}c=new vt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cN(new pt(a),c,l)}class Cc extends ff{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cc}}function hN(t,e,n,r){const s=t.Ru(1,e,n);mf("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();br(r,(c,l)=>{const u=gf(e,c,n);l=xe(l);const h=s.Iu(u);if(l instanceof Cc)i.push(u);else{const f=kc(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new vt(i);return new rE(o,a,s.fieldTransforms)}function fN(t,e,n,r,s,i){const o=t.Ru(1,e,n),a=[Iu(e,r,n)],c=[s];if(i.length%2!=0)throw new H(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Iu(e,i[f])),c.push(i[f+1]);const l=[],u=pt.empty();for(let f=a.length-1;f>=0;--f)if(!cE(l,a[f])){const d=a[f];let g=c[f];g=xe(g);const _=o.Iu(d);if(g instanceof Cc)l.push(d);else{const v=kc(g,_);v!=null&&(l.push(d),u.set(d,v))}}const h=new vt(l);return new rE(u,h,o.fieldTransforms)}function kc(t,e){if(aE(t=xe(t)))return mf("Unsupported field value:",e,t),oE(t,e);if(t instanceof ff)return function(r,s){if(!sE(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=kc(a,s.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Aa(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Aa(s.serializer,i)}}if(r instanceof df)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:Cv(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${hf(r)}`)}(t,e)}function oE(t,e){const n={};return nv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,s)=>{const i=kc(s,e.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function aE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof df||t instanceof ds||t instanceof Rt||t instanceof ff)}function mf(t,e,n){if(!aE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=hf(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Iu(t,e,n){if((e=xe(e))instanceof Pc)return e._internalPath;if(typeof e=="string")return gf(t,e);throw ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const dN=new RegExp("[~\\*/\\[\\]]");function gf(t,e,n){if(e.search(dN)>=0)throw ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pc(...e.split("."))._internalPath}catch{throw ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ba(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new H(P.INVALID_ARGUMENT,a+t+c)}function cE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class lE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pN extends lE{data(){return super.data()}}function uE(t,e){return typeof e=="string"?gf(t,e):e instanceof Pc?e._internalPath:e._delegate._internalPath}/**
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
 */function mN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gN{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new df(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=Wn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Te(xv(r));const s=new Si(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||En(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function _N(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yN extends lE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $o extends yN{data(e={}){return super.data(e)}}class vN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Io(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $o(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new $o(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Io(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new $o(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Io(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:EN(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class wN extends gN{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function fm(t){t=fs(t,bc);const e=fs(t.firestore,Sc),n=tE(e),r=new wN(e);return mN(t._query),tN(n,t._query).then(s=>new vN(e,r,t,s))}function NM(t,e,n,...r){t=fs(t,Rt);const s=fs(t.firestore,Sc),i=iE(s);let o;return o=typeof(e=xe(e))=="string"||e instanceof Pc?fN(i,"updateDoc",t._key,e,n,r):hN(i,"updateDoc",t._key,e),hE(s,[o.toMutation(t._key,tn.exists(!0))])}function DM(t,e){const n=fs(t.firestore,Sc),r=sN(t),s=_N(t.converter,e);return hE(n,[uN(iE(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function hE(t,e){return function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget(async()=>UO(await ZO(r),s,i)),i.promise}(tE(t),e)}(function(e,n=!0){(function(s){Is=s})(Ar),_r(new zn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Sc(new E1(r.getProvider("auth-internal")),new A1(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new H(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Yt(Op,"4.1.0",e),Yt(Op,"4.1.0","esm2017")})();/**
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
 */const fE="firebasestorage.googleapis.com",dE="storageBucket",TN=2*60*1e3,IN=10*60*1e3;/**
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
 */class ke extends an{constructor(e,n,r=0){super(ml(e),`Firebase Storage: ${n} (${ml(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ml(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function ml(t){return"storage/"+t}function _f(){const t="An unknown error occurred, please check the error payload for server response.";return new ke(Ce.UNKNOWN,t)}function AN(t){return new ke(Ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RN(t){return new ke(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Ce.UNAUTHENTICATED,t)}function SN(){return new ke(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PN(t){return new ke(Ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CN(){return new ke(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kN(){return new ke(Ce.CANCELED,"User canceled the upload/download.")}function ON(t){return new ke(Ce.INVALID_URL,"Invalid URL '"+t+"'.")}function NN(t){return new ke(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DN(){return new ke(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dE+"' property when initializing the app?")}function xN(){return new ke(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VN(){return new ke(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MN(t){return new ke(Ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Au(t){return new ke(Ce.INVALID_ARGUMENT,t)}function pE(){return new ke(Ce.APP_DELETED,"The Firebase app was deleted.")}function LN(t){return new ke(Ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ti(t,e){return new ke(Ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function xs(t){throw new ke(Ce.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw NN(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},_=n===fE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${_}/${s}/${v}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:d,indices:g,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<D.length;O++){const ne=D[O],U=ne.regex.exec(e);if(U){const le=U[ne.indices.bucket];let Se=U[ne.indices.path];Se||(Se=""),r=new Et(le,Se),ne.postModify(r);break}}if(r==null)throw ON(e);return r}}class FN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function UN(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(d,c())},v)}function f(){i&&clearTimeout(i)}function d(v,...A){if(l){f();return}if(v){f(),u.call(null,v,...A);return}if(c()||o){f(),u.call(null,v,...A);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,h(D)}let g=!1;function _(v){g||(g=!0,f(),!l&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function BN(t){t(!1)}/**
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
 */function jN(t){return t!==void 0}function $N(t){return typeof t=="object"&&!Array.isArray(t)}function yf(t){return typeof t=="string"||t instanceof String}function dm(t){return vf()&&t instanceof Blob}function vf(){return typeof Blob<"u"&&!BR()}function pm(t,e,n,r){if(r<e)throw Au(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Au(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ef(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function mE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var pr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pr||(pr={}));/**
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
 */function HN(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class qN{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ao(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===pr.NO_ERROR,c=i.getStatus();if(!a||HN(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===pr.ABORT;r(!1,new Ao(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Ao(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());jN(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=_f();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?pE():kN();o(c)}else{const c=CN();o(c)}};this.canceled_?n(!1,new Ao(!1,null,!0)):this.backoffId_=UN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ao{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function WN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QN(t,e,n,r,s,i,o=!0){const a=mE(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return WN(l,e),zN(l,n),KN(l,i),GN(l,r),new qN(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function JN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XN(...t){const e=JN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vf())return new Blob(t);throw new ke(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function YN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ZN(t){if(typeof atob>"u")throw MN("base-64");return atob(t)}/**
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
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gl{constructor(e,n){this.data=e,this.contentType=n||null}}function eD(t,e){switch(t){case Qt.RAW:return new gl(gE(e));case Qt.BASE64:case Qt.BASE64URL:return new gl(_E(t,e));case Qt.DATA_URL:return new gl(nD(e),rD(e))}throw _f()}function gE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tD(t){let e;try{e=decodeURIComponent(t)}catch{throw ti(Qt.DATA_URL,"Malformed data URL.")}return gE(e)}function _E(t,e){switch(t){case Qt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ti(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ti(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZN(e)}catch(s){throw s.message.includes("polyfill")?s:ti(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class yE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ti(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nD(t){const e=new yE(t);return e.base64?_E(Qt.BASE64,e.rest):tD(e.rest)}function rD(t){return new yE(t).contentType}function sD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Mn{constructor(e,n){let r=0,s="";dm(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(dm(this.data_)){const r=this.data_,s=YN(r,e,n);return s===null?null:new Mn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mn(r,!0)}}static getBlob(...e){if(vf()){const n=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(XN.apply(null,n))}else{const n=e.map(o=>yf(o)?eD(Qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Mn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function vE(t){let e;try{e=JSON.parse(t)}catch{return null}return $N(e)?e:null}/**
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
 */function iD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function EE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function aD(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||aD}}let Ro=null;function cD(t){return!yf(t)||t.length<2?t:EE(t)}function wE(){if(Ro)return Ro;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return cD(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),Ro=t,Ro}function lD(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Et(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function uD(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return lD(r,t),r}function TE(t,e,n){const r=vE(e);return r===null?null:uD(t,r,n)}function hD(t,e,n,r){const s=vE(e);if(s===null||!yf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=Ef(f,n,r),g=mE({alt:"media",token:l});return d+g})[0]}function fD(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class IE{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function AE(t){if(!t)throw _f()}function dD(t,e){function n(r,s){const i=TE(t,s,e);return AE(i!==null),i}return n}function pD(t,e){function n(r,s){const i=TE(t,s,e);return AE(i!==null),hD(i,s,t.host,t._protocol)}return n}function RE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=SN():s=bN():n.getStatus()===402?s=RN(t.bucket):n.getStatus()===403?s=PN(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function mD(t){const e=RE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=AN(t.path)),i.serverResponse=s.serverResponse,i}return n}function gD(t,e,n){const r=e.fullServerUrl(),s=Ef(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new IE(s,i,pD(t,n),o);return a.errorHandler=mD(e),a}function _D(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_D(null,e)),r}function vD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let O=0;O<2;O++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=yD(e,r,s),u=fD(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",d=Mn.getBlob(h,r,f);if(d===null)throw xN();const g={name:l.fullPath},_=Ef(i,t.host,t._protocol),v="POST",A=t.maxUploadRetryTime,b=new IE(_,v,dD(t,n),A);return b.urlParams=g,b.headers=o,b.body=d.uploadData(),b.errorHandler=RE(e),b}class ED{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wD extends ED{initXhr(){this.xhr_.responseType="text"}}function bE(){return new wD}/**
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
 */class Tr{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Tr(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return EE(this._location.path)}get storage(){return this._service}get parent(){const e=iD(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new Tr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LN(e)}}function TD(t,e,n){t._throwIfRoot("uploadBytes");const r=vD(t.storage,t._location,wE(),new Mn(e,!0),n);return t.storage.makeRequestWithTokens(r,bE).then(s=>({metadata:s,ref:t}))}function ID(t){t._throwIfRoot("getDownloadURL");const e=gD(t.storage,t._location,wE());return t.storage.makeRequestWithTokens(e,bE).then(n=>{if(n===null)throw VN();return n})}function AD(t,e){const n=oD(t._location.path,e),r=new Et(t._location.bucket,n);return new Tr(t.storage,r)}/**
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
 */function RD(t){return/^[A-Za-z]+:\/\//.test(t)}function bD(t,e){return new Tr(t,e)}function SE(t,e){if(t instanceof wf){const n=t;if(n._bucket==null)throw DN();const r=new Tr(n,n._bucket);return e!=null?SE(r,e):r}else return e!==void 0?AD(t,e):t}function SD(t,e){if(e&&RD(e)){if(t instanceof wf)return bD(t,e);throw Au("To use ref(service, url), the first argument must be a Storage instance.")}else return SE(t,e)}function mm(t,e){const n=e==null?void 0:e[dE];return n==null?null:Et.makeFromBucketSpec(n,t)}function PD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:d_(s,t.app.options.projectId))}class wf{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=fE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TN,this._maxUploadRetryTime=IN,this._requests=new Set,s!=null?this._bucket=Et.makeFromBucketSpec(s,this._host):this._bucket=mm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=mm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Tr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new FN(pE());{const o=QN(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const gm="@firebase/storage",_m="0.11.2";/**
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
 */const PE="storage";function xM(t,e,n){return t=xe(t),TD(t,e,n)}function VM(t){return t=xe(t),ID(t)}function MM(t,e){return t=xe(t),SD(t,e)}function CD(t=hh(),e){t=xe(t);const r=Qa(t,PE).getImmediate({identifier:e}),s=u_("storage");return s&&kD(r,...s),r}function kD(t,e,n,r={}){PD(t,e,n,r)}function OD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new wf(n,r,s,e,Ar)}function ND(){_r(new zn(PE,OD,"PUBLIC").setMultipleInstances(!0)),Yt(gm,_m,""),Yt(gm,_m,"esm2017")}ND();const DD={apiKey:"AIzaSyDV86E04pfIBPbQnfyeRoDPFiamVZz1lD4",authDomain:"coesa-dd1ed.firebaseapp.com",projectId:"coesa-dd1ed",storageBucket:"coesa-dd1ed.appspot.com",messagingSenderId:"262690091547",appId:"1:262690091547:web:7d96e73c81ccb843ddbebe",measurementId:"G-T7KRL108F3"},Tf=g_(DD),Ru=uC(Tf),ym=oN(Tf);CD(Tf);function CE(t,e){return function(){return t.apply(e,arguments)}}const{toString:xD}=Object.prototype,{getPrototypeOf:If}=Object,Oc=(t=>e=>{const n=xD.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),cn=t=>(t=t.toLowerCase(),e=>Oc(e)===t),Nc=t=>e=>typeof e===t,{isArray:bs}=Array,Oi=Nc("undefined");function VD(t){return t!==null&&!Oi(t)&&t.constructor!==null&&!Oi(t.constructor)&&bt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const kE=cn("ArrayBuffer");function MD(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&kE(t.buffer),e}const LD=Nc("string"),bt=Nc("function"),OE=Nc("number"),Dc=t=>t!==null&&typeof t=="object",FD=t=>t===!0||t===!1,Ho=t=>{if(Oc(t)!=="object")return!1;const e=If(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},UD=cn("Date"),BD=cn("File"),jD=cn("Blob"),$D=cn("FileList"),HD=t=>Dc(t)&&bt(t.pipe),qD=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bt(t.append)&&((e=Oc(t))==="formdata"||e==="object"&&bt(t.toString)&&t.toString()==="[object FormData]"))},zD=cn("URLSearchParams"),KD=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function no(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),bs(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function NE(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const DE=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xE=t=>!Oi(t)&&t!==DE;function bu(){const{caseless:t}=xE(this)&&this||{},e={},n=(r,s)=>{const i=t&&NE(e,s)||s;Ho(e[i])&&Ho(r)?e[i]=bu(e[i],r):Ho(r)?e[i]=bu({},r):bs(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&no(arguments[r],n);return e}const WD=(t,e,n,{allOwnKeys:r}={})=>(no(e,(s,i)=>{n&&bt(s)?t[i]=CE(s,n):t[i]=s},{allOwnKeys:r}),t),GD=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),QD=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},JD=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&If(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},XD=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},YD=t=>{if(!t)return null;if(bs(t))return t;let e=t.length;if(!OE(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},ZD=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&If(Uint8Array)),ex=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},tx=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},nx=cn("HTMLFormElement"),rx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),vm=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),sx=cn("RegExp"),VE=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};no(n,(s,i)=>{e(s,i,t)!==!1&&(r[i]=s)}),Object.defineProperties(t,r)},ix=t=>{VE(t,(e,n)=>{if(bt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(bt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ox=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return bs(t)?r(t):r(String(t).split(e)),n},ax=()=>{},cx=(t,e)=>(t=+t,Number.isFinite(t)?t:e),_l="abcdefghijklmnopqrstuvwxyz",Em="0123456789",ME={DIGIT:Em,ALPHA:_l,ALPHA_DIGIT:_l+_l.toUpperCase()+Em},lx=(t=16,e=ME.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function ux(t){return!!(t&&bt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const hx=t=>{const e=new Array(10),n=(r,s)=>{if(Dc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=bs(r)?[]:{};return no(r,(o,a)=>{const c=n(o,s+1);!Oi(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},fx=cn("AsyncFunction"),dx=t=>t&&(Dc(t)||bt(t))&&bt(t.then)&&bt(t.catch),T={isArray:bs,isArrayBuffer:kE,isBuffer:VD,isFormData:qD,isArrayBufferView:MD,isString:LD,isNumber:OE,isBoolean:FD,isObject:Dc,isPlainObject:Ho,isUndefined:Oi,isDate:UD,isFile:BD,isBlob:jD,isRegExp:sx,isFunction:bt,isStream:HD,isURLSearchParams:zD,isTypedArray:ZD,isFileList:$D,forEach:no,merge:bu,extend:WD,trim:KD,stripBOM:GD,inherits:QD,toFlatObject:JD,kindOf:Oc,kindOfTest:cn,endsWith:XD,toArray:YD,forEachEntry:ex,matchAll:tx,isHTMLForm:nx,hasOwnProperty:vm,hasOwnProp:vm,reduceDescriptors:VE,freezeMethods:ix,toObjectSet:ox,toCamelCase:rx,noop:ax,toFiniteNumber:cx,findKey:NE,global:DE,isContextDefined:xE,ALPHABET:ME,generateString:lx,isSpecCompliantForm:ux,toJSONObject:hx,isAsyncFn:fx,isThenable:dx};function ae(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}T.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const LE=ae.prototype,FE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{FE[t]={value:t}});Object.defineProperties(ae,FE);Object.defineProperty(LE,"isAxiosError",{value:!0});ae.from=(t,e,n,r,s,i)=>{const o=Object.create(LE);return T.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ae.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const px=null;function Su(t){return T.isPlainObject(t)||T.isArray(t)}function UE(t){return T.endsWith(t,"[]")?t.slice(0,-2):t}function wm(t,e,n){return t?t.concat(e).map(function(s,i){return s=UE(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function mx(t){return T.isArray(t)&&!t.some(Su)}const gx=T.toFlatObject(T,{},null,function(e){return/^is[A-Z]/.test(e)});function xc(t,e,n){if(!T.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,v){return!T.isUndefined(v[_])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(e);if(!T.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(T.isDate(g))return g.toISOString();if(!c&&T.isBlob(g))throw new ae("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(g)||T.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,v){let A=g;if(g&&!v&&typeof g=="object"){if(T.endsWith(_,"{}"))_=r?_:_.slice(0,-2),g=JSON.stringify(g);else if(T.isArray(g)&&mx(g)||(T.isFileList(g)||T.endsWith(_,"[]"))&&(A=T.toArray(g)))return _=UE(_),A.forEach(function(D,O){!(T.isUndefined(D)||D===null)&&e.append(o===!0?wm([_],O,i):o===null?_:_+"[]",l(D))}),!1}return Su(g)?!0:(e.append(wm(v,_,i),l(g)),!1)}const h=[],f=Object.assign(gx,{defaultVisitor:u,convertValue:l,isVisitable:Su});function d(g,_){if(!T.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(g),T.forEach(g,function(A,b){(!(T.isUndefined(A)||A===null)&&s.call(e,A,T.isString(b)?b.trim():b,_,f))===!0&&d(A,_?_.concat(b):[b])}),h.pop()}}if(!T.isObject(t))throw new TypeError("data must be an object");return d(t),e}function Tm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Af(t,e){this._pairs=[],t&&xc(t,this,e)}const BE=Af.prototype;BE.append=function(e,n){this._pairs.push([e,n])};BE.toString=function(e){const n=e?function(r){return e.call(this,r,Tm)}:Tm;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _x(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jE(t,e,n){if(!e)return t;const r=n&&n.encode||_x,s=n&&n.serialize;let i;if(s?i=s(e,n):i=T.isURLSearchParams(e)?e.toString():new Af(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class yx{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){T.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Im=yx,$E={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vx=typeof URLSearchParams<"u"?URLSearchParams:Af,Ex=typeof FormData<"u"?FormData:null,wx=typeof Blob<"u"?Blob:null,Tx=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ix=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Jt={isBrowser:!0,classes:{URLSearchParams:vx,FormData:Ex,Blob:wx},isStandardBrowserEnv:Tx,isStandardBrowserWebWorkerEnv:Ix,protocols:["http","https","file","blob","url","data"]};function Ax(t,e){return xc(t,new Jt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Jt.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Rx(t){return T.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function bx(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function HE(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&T.isArray(s)?s.length:o,c?(T.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!T.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&T.isArray(s[o])&&(s[o]=bx(s[o])),!a)}if(T.isFormData(t)&&T.isFunction(t.entries)){const n={};return T.forEachEntry(t,(r,s)=>{e(Rx(r),s,n,0)}),n}return null}const Sx={"Content-Type":void 0};function Px(t,e,n){if(T.isString(t))try{return(e||JSON.parse)(t),T.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Vc={transitional:$E,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=T.isObject(e);if(i&&T.isHTMLForm(e)&&(e=new FormData(e)),T.isFormData(e))return s&&s?JSON.stringify(HE(e)):e;if(T.isArrayBuffer(e)||T.isBuffer(e)||T.isStream(e)||T.isFile(e)||T.isBlob(e))return e;if(T.isArrayBufferView(e))return e.buffer;if(T.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ax(e,this.formSerializer).toString();if((a=T.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return xc(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Px(e)):e}],transformResponse:[function(e){const n=this.transitional||Vc.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&T.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ae.from(a,ae.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jt.classes.FormData,Blob:Jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};T.forEach(["delete","get","head"],function(e){Vc.headers[e]={}});T.forEach(["post","put","patch"],function(e){Vc.headers[e]=T.merge(Sx)});const Rf=Vc,Cx=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kx=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Cx[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Am=Symbol("internals");function Vs(t){return t&&String(t).trim().toLowerCase()}function qo(t){return t===!1||t==null?t:T.isArray(t)?t.map(qo):String(t)}function Ox(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Nx=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yl(t,e,n,r,s){if(T.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!T.isString(e)){if(T.isString(r))return e.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(e)}}function Dx(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function xx(t,e){const n=T.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Mc{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Vs(c);if(!u)throw new Error("header name must be a non-empty string");const h=T.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||c]=qo(a))}const o=(a,c)=>T.forEach(a,(l,u)=>i(l,u,c));return T.isPlainObject(e)||e instanceof this.constructor?o(e,n):T.isString(e)&&(e=e.trim())&&!Nx(e)?o(kx(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Vs(e),e){const r=T.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ox(s);if(T.isFunction(n))return n.call(this,s,r);if(T.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Vs(e),e){const r=T.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||yl(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Vs(o),o){const a=T.findKey(r,o);a&&(!n||yl(r,r[a],a,n))&&(delete r[a],s=!0)}}return T.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||yl(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return T.forEach(this,(s,i)=>{const o=T.findKey(r,i);if(o){n[o]=qo(s),delete n[i];return}const a=e?Dx(i):String(i).trim();a!==i&&delete n[i],n[a]=qo(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return T.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Am]=this[Am]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Vs(o);r[a]||(xx(s,o),r[a]=!0)}return T.isArray(e)?e.forEach(i):i(e),this}}Mc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.freezeMethods(Mc.prototype);T.freezeMethods(Mc);const gn=Mc;function vl(t,e){const n=this||Rf,r=e||n,s=gn.from(r.headers);let i=r.data;return T.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function qE(t){return!!(t&&t.__CANCEL__)}function ro(t,e,n){ae.call(this,t??"canceled",ae.ERR_CANCELED,e,n),this.name="CanceledError"}T.inherits(ro,ae,{__CANCEL__:!0});function Vx(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ae("Request failed with status code "+n.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Mx=Jt.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),T.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),T.isString(i)&&c.push("path="+i),T.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Lx(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Fx(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function zE(t,e){return t&&!Lx(e)?Fx(t,e):e}const Ux=Jt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=T.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Bx(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function jx(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let h=i,f=0;for(;h!==s;)f+=n[h++],h=h%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const d=u&&l-u;return d?Math.round(f*1e3/d):void 0}}function Rm(t,e){let n=0;const r=jx(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const $x=typeof XMLHttpRequest<"u",Hx=$x&&function(t){return new Promise(function(n,r){let s=t.data;const i=gn.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}T.isFormData(s)&&(Jt.isStandardBrowserEnv||Jt.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(t.auth){const d=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(d+":"+g))}const u=zE(t.baseURL,t.url);l.open(t.method.toUpperCase(),jE(u,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const d=gn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),_={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:t,request:l};Vx(function(A){n(A),c()},function(A){r(A),c()},_),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new ae("Request aborted",ae.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new ae("Network Error",ae.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const _=t.transitional||$E;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),r(new ae(g,_.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,t,l)),l=null},Jt.isStandardBrowserEnv){const d=(t.withCredentials||Ux(u))&&t.xsrfCookieName&&Mx.read(t.xsrfCookieName);d&&i.set(t.xsrfHeaderName,d)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&T.forEach(i.toJSON(),function(g,_){l.setRequestHeader(_,g)}),T.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",Rm(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Rm(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=d=>{l&&(r(!d||d.type?new ro(null,t,l):d),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const f=Bx(u);if(f&&Jt.protocols.indexOf(f)===-1){r(new ae("Unsupported protocol "+f+":",ae.ERR_BAD_REQUEST,t));return}l.send(s||null)})},zo={http:px,xhr:Hx};T.forEach(zo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const qx={getAdapter:t=>{t=T.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=T.isString(n)?zo[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new ae(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(T.hasOwnProp(zo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!T.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:zo};function El(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ro(null,t)}function bm(t){return El(t),t.headers=gn.from(t.headers),t.data=vl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),qx.getAdapter(t.adapter||Rf.adapter)(t).then(function(r){return El(t),r.data=vl.call(t,t.transformResponse,r),r.headers=gn.from(r.headers),r},function(r){return qE(r)||(El(t),r&&r.response&&(r.response.data=vl.call(t,t.transformResponse,r.response),r.response.headers=gn.from(r.response.headers))),Promise.reject(r)})}const Sm=t=>t instanceof gn?t.toJSON():t;function ps(t,e){e=e||{};const n={};function r(l,u,h){return T.isPlainObject(l)&&T.isPlainObject(u)?T.merge.call({caseless:h},l,u):T.isPlainObject(u)?T.merge({},u):T.isArray(u)?u.slice():u}function s(l,u,h){if(T.isUndefined(u)){if(!T.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function i(l,u){if(!T.isUndefined(u))return r(void 0,u)}function o(l,u){if(T.isUndefined(u)){if(!T.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in e)return r(l,u);if(h in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Sm(l),Sm(u),!0)};return T.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=c[u]||s,f=h(t[u],e[u],u);T.isUndefined(f)&&h!==a||(n[u]=f)}),n}const KE="1.4.0",bf={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{bf[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Pm={};bf.transitional=function(e,n,r){function s(i,o){return"[Axios v"+KE+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new ae(s(o," has been removed"+(n?" in "+n:"")),ae.ERR_DEPRECATED);return n&&!Pm[o]&&(Pm[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function zx(t,e,n){if(typeof t!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new ae("option "+i+" must be "+c,ae.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ae("Unknown option "+i,ae.ERR_BAD_OPTION)}}const Pu={assertOptions:zx,validators:bf},Cn=Pu.validators;class Sa{constructor(e){this.defaults=e,this.interceptors={request:new Im,response:new Im}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ps(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Pu.assertOptions(r,{silentJSONParsing:Cn.transitional(Cn.boolean),forcedJSONParsing:Cn.transitional(Cn.boolean),clarifyTimeoutError:Cn.transitional(Cn.boolean)},!1),s!=null&&(T.isFunction(s)?n.paramsSerializer={serialize:s}:Pu.assertOptions(s,{encode:Cn.function,serialize:Cn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&T.merge(i.common,i[n.method]),o&&T.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=gn.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(c=c&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,h=0,f;if(!c){const g=[bm.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),f=g.length,u=Promise.resolve(n);h<f;)u=u.then(g[h++],g[h++]);return u}f=a.length;let d=n;for(h=0;h<f;){const g=a[h++],_=a[h++];try{d=g(d)}catch(v){_.call(this,v);break}}try{u=bm.call(this,d)}catch(g){return Promise.reject(g)}for(h=0,f=l.length;h<f;)u=u.then(l[h++],l[h++]);return u}getUri(e){e=ps(this.defaults,e);const n=zE(e.baseURL,e.url);return jE(n,e.params,e.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(e){Sa.prototype[e]=function(n,r){return this.request(ps(r||{},{method:e,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(ps(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Sa.prototype[e]=n(),Sa.prototype[e+"Form"]=n(!0)});const Ko=Sa;class Sf{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ro(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Sf(function(s){e=s}),cancel:e}}}const Kx=Sf;function Wx(t){return function(n){return t.apply(null,n)}}function Gx(t){return T.isObject(t)&&t.isAxiosError===!0}const Cu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cu).forEach(([t,e])=>{Cu[e]=t});const Qx=Cu;function WE(t){const e=new Ko(t),n=CE(Ko.prototype.request,e);return T.extend(n,Ko.prototype,e,{allOwnKeys:!0}),T.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return WE(ps(t,s))},n}const Fe=WE(Rf);Fe.Axios=Ko;Fe.CanceledError=ro;Fe.CancelToken=Kx;Fe.isCancel=qE;Fe.VERSION=KE;Fe.toFormData=xc;Fe.AxiosError=ae;Fe.Cancel=Fe.CanceledError;Fe.all=function(e){return Promise.all(e)};Fe.spread=Wx;Fe.isAxiosError=Gx;Fe.mergeConfig=ps;Fe.AxiosHeaders=gn;Fe.formToJSON=t=>HE(T.isHTMLForm(t)?new FormData(t):t);Fe.HttpStatusCode=Qx;Fe.default=Fe;const Jx=Fe;const Xx={components:{adminNav:kR,Icon:i_},data(){return{loading:!0,users:[],complaints:[],payments:[]}},async created(){try{const t=await fm(hm(ym,"Users"));this.loading=!1,this.users=t.docs.map(e=>({id:e.id,...e.data()}))}catch(t){console.error("Error fetching item list:",t)}try{const t=await fm(hm(ym,"Faq&Complaints"));this.loading=!1,this.complaints=t.docs.map(e=>({id:e.id,timestamp:e.data().timestamp?e.data().timestamp.toDate():null,...e.data()}))}catch(t){console.error("Error fetching item list:",t)}},mounted(){this.getTransaction()},methods:{getTransaction(){Jx.get("https://coesa-dd1ed-default-rtdb.firebaseio.com/payment-response.json").then(t=>{if(t.data){for(const e in t.data)t.data.hasOwnProperty(e)&&this.payments.push(t.data[e]);console.log("Number of payment responses:",this.payments.length)}}).catch(t=>{console.error("Error fetching payment responses:",t)})},formatTimestamp(t){if(!t)return"N/A";const e={year:"numeric",month:"long",day:"numeric"},n={hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},r=new Intl.DateTimeFormat("en-US",e).format(t.toDate()),s=new Intl.DateTimeFormat("en-US",n).format(t.toDate());return`${r} at ${s}`}}},Tt=t=>(zu("data-v-5b9c2946"),t=t(),Ku(),t),Yx={class:"container my-4"},Zx={class:"nav nav-underline d-flex mb-3"},eV={class:"nav-item"},tV={class:"nav-link",href:"#"},nV={class:"nav-item"},rV={class:"nav-link",href:"#"},sV={class:"nav-item"},iV={class:"nav-link",href:"#"},oV=Tt(()=>w("h1",null,"Admin Dashboard",-1)),aV={class:"container my-5"},cV={class:"row"},lV={class:"col-lg-3 col-md-6 mt-3"},uV={class:"jumbotron shadow py-5"},hV={class:"container"},fV=Tt(()=>w("h3",{class:"text-center"},"Users",-1)),dV={class:"text-center"},pV={class:"col-lg-3 col-md-6 mt-3"},mV={class:"jumbotron shadow py-5"},gV={class:"container"},_V=Tt(()=>w("h3",{class:"text-center"},"Payments",-1)),yV={class:"text-center"},vV={class:"col-lg-3 col-md-6 mt-3"},EV={class:"jumbotron shadow py-5"},wV={class:"container"},TV=Tt(()=>w("h3",{class:"text-center"},"Complaints",-1)),IV={class:"text-center"},AV=LT('<div class="col-lg-3 col-md-6 mt-3" data-v-5b9c2946><div class="jumbotron shadow py-5" data-v-5b9c2946><div class="container" data-v-5b9c2946><h3 class="text-center" data-v-5b9c2946>Health</h3><p class="text-center text-success" data-v-5b9c2946>Good</p></div></div></div>',1),RV={class:"mt-5 mb-5"},bV={class:"row"},SV={class:"col-lg-6 col-md-6 my-3"},PV=Tt(()=>w("h4",{class:"my-3"},"New Users",-1)),CV={class:"list-group-item d-flex justify-content-between align-items-start"},kV={class:"ms-2 me-auto"},OV={class:"fw-bold"},NV={class:"text-success"},DV=Tt(()=>w("b",null," Email:",-1)),xV={class:"text-success"},VV={class:"btn"},MV={class:"col-lg-6 col-md-6 my-3"},LV=Tt(()=>w("h4",{class:"my-3"},"Latest Transactions",-1)),FV={class:"list-group-item"},UV={class:"ms-2 me-auto"},BV=Tt(()=>w("strong",null,"User Id:",-1)),jV={class:"fw-bold"},$V={class:"text-warning"},HV=Tt(()=>w("b",null,"Amount",-1)),qV={class:"text-success"},zV=Tt(()=>w("b",null,"Reference Id: ",-1)),KV={class:"text-success"},WV={class:"btn"},GV={class:"col-lg-6 col-md-6 my-3"},QV=Tt(()=>w("h4",{class:"my-3"},"FAQs",-1)),JV={class:"list-group-item d-flex justify-content-between align-items-start"},XV={class:"ms-2 me-auto"},YV=Tt(()=>w("strong",null,"User Id:",-1)),ZV={class:"fw-bold"},eM={class:"text-warning"},tM=Tt(()=>w("b",null," Message",-1)),nM={class:"text-success"},rM={class:"btn"};function sM(t,e,n,r,s,i){const o=ur("adminNav"),a=ur("Icon"),c=ur("RouterLink");return Ht(),fn("main",null,[Y(o),w("div",Yx,[w("ul",Zx,[w("li",eV,[w("a",tV,[Y(c,{to:"/all-events",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Events ")]),_:1})])]),w("li",nV,[w("a",rV,[Y(c,{to:"/all-course",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Courses ")]),_:1})])]),w("li",sV,[w("a",iV,[Y(c,{to:"/edit/front-end",class:"route"},{default:dt(()=>[Y(a,{icon:"tabler:pencil",color:"white"}),Re(" Front-End ")]),_:1})])])]),oV]),w("div",aV,[w("div",cV,[w("div",lV,[w("div",uV,[w("div",hV,[fV,w("p",dV,at(s.users.length),1)])])]),w("div",pV,[w("div",mV,[w("div",gV,[_V,w("p",yV,at(s.payments.length),1)])])]),w("div",vV,[w("div",EV,[w("div",wV,[TV,w("p",IV,at(s.complaints.length),1)])])]),AV]),w("div",RV,[w("div",bV,[w("div",SV,[PV,(Ht(!0),fn(yt,null,Uc(s.users,l=>(Ht(),fn("ol",{class:"list-group my-2",key:l.id},[w("li",CV,[w("div",kV,[w("div",OV,[Re("Full-Name: "),w("span",NV,at(l.username),1)]),DV,Re(),w("span",xV,at(l.email),1)]),w("button",VV,[Y(a,{icon:"octicon:trash-24",color:"white"})])])]))),128))]),w("div",MV,[LV,(Ht(!0),fn(yt,null,Uc(s.payments,l=>(Ht(),fn("ol",{class:"list-group my-2",key:l.id},[w("li",FV,[w("div",UV,[w("span",null,[BV,Re(" "+at(l.id),1)]),w("div",jV,[Re("FullName: "),w("span",$V,at(l.firstName)+" "+at(l.lastName),1)]),w("div",null,[HV,Re(),w("span",qV," N"+at(l.amount),1)]),w("div",null,[zV,Re(),w("span",KV,at(l.reference),1)])]),w("span",null,[w("i",null,[w("small",null,"Paid: "+at(l.paid),1)])]),w("button",WV,[Y(a,{icon:"octicon:trash-24",color:"white"})])])]))),128))]),w("div",GV,[QV,(Ht(!0),fn(yt,null,Uc(s.complaints,l=>(Ht(),fn("ol",{class:"list-group my-2",key:l.id},[w("li",JV,[w("div",XV,[w("span",null,[YV,Re(" "+at(l.id),1)]),w("div",ZV,[Re("Email: "),w("span",eM,at(l.email),1)]),tM,Re(),w("span",nM,at(l.message),1)]),w("span",null,[w("i",null,[w("small",null,at(i.formatTimestamp(l.timeStamp)),1)])]),w("button",rM,[Y(a,{icon:"octicon:trash-24",color:"white"})])])]))),128))])])])])])}const iM=Wa(Xx,[["render",sM],["__scopeId","data-v-5b9c2946"]]);const oM={},Pf=t=>(zu("data-v-92baf67e"),t=t(),Ku(),t),aM={class:""},cM={class:"page_404 d-flex justify-content-center align-items-center"},lM={class:"container"},uM={class:"row"},hM={class:"col"},fM={class:"col text-center"},dM=Pf(()=>w("div",{class:"four_zero_four_bg"},[w("h1",{class:"text-center text-dark"},"404")],-1)),pM={class:"contant_box_404"},mM=Pf(()=>w("h3",{class:"h2 text-dark"}," Look like you're lost ",-1)),gM=Pf(()=>w("p",{class:"text-dark"},"the page you are looking for not avaible!",-1));function _M(t,e,n,r,s,i){const o=ur("router-link");return Ht(),fn("div",aM,[w("section",cM,[w("div",lM,[w("div",uM,[w("div",hM,[w("div",fM,[dM,w("div",pM,[mM,gM,Y(o,{to:"/",class:"link_404"},{default:dt(()=>[Re("Go to Home")]),_:1})])])])])])])])}const yM=Wa(oM,[["render",_M],["__scopeId","data-v-92baf67e"]]),Pa=G0({history:u0("/"),routes:[{path:"/",redirect:"/dashboard",name:"admin",meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>$t(()=>import("./adminLogin-4292b59d.js"),["assets/adminLogin-4292b59d.js","assets/adminLogin-6f80fcb8.css"])},{path:"/:catchAll(.*)",component:yM},{path:"/404",component:()=>$t(()=>import("./404-2e4d2547.js"),["assets/404-2e4d2547.js","assets/404-3e21175c.css"])},{path:"/dashboard",component:iM},{path:"/all-events",name:"admin-events",component:()=>$t(()=>import("./adminEvent-420d7c46.js"),[])},{path:"/edit/front-end",name:"front-end",component:()=>$t(()=>import("./frontEnd-72fb85e7.js"),["assets/frontEnd-72fb85e7.js","assets/frontEnd-3b1487ed.css"])},{path:"/create-event",name:"admin-create-events",component:()=>$t(()=>import("./addEvent-f52f45d0.js"),["assets/addEvent-f52f45d0.js","assets/addEvent-bdb6c0ca.css"])},{path:"/create-course",name:"admin-create-course",component:()=>$t(()=>import("./addCourse-6346514d.js"),["assets/addCourse-6346514d.js","assets/addCourse-e91ac33a.css"])},{path:"/all-course",name:"admin-all-course",component:()=>$t(()=>import("./allCourses-a9bb8da2.js"),["assets/allCourses-a9bb8da2.js","assets/fullPageLoader-9716651b.js","assets/fullPageLoader-46d0c714.css","assets/allCourses-e859c7db.css"])},{path:"/all-course/:id",name:"CourseDetail",component:()=>$t(()=>import("./courseDetail-19820266.js"),["assets/courseDetail-19820266.js","assets/fullPageLoader-9716651b.js","assets/fullPageLoader-46d0c714.css","assets/courseDetail-dd2a12ab.css"]),props:!0,beforeEnter:(t,e,n)=>{const r=t.params.id;vM(r)?n():n("/404")}},{path:"/edit-course/:id/edit",name:"edit-course-detail",component:()=>$t(()=>import("./editCourse-e9bbab1e.js"),["assets/editCourse-e9bbab1e.js","assets/editCourse-b039b83f.css"]),props:!0},{path:"/edit-event/:id/edit",name:"edit-event-detail",component:()=>$t(()=>import("./editAdminEvent-be916bdd.js"),["assets/editAdminEvent-be916bdd.js","assets/editAdminEvent-008f1c09.css"]),props:!0}]});function vM(t){return!isNaN(parseInt(t))}Pa.beforeEach((t,e,n)=>{t.path==="/dashboard"?Ru.currentUser?n():n("/login"):n()});const EM=qI({state:{user:{id:null,username:null,email:null,password:null}},mutations:{SET_USER(t,e){t.user=e},CLEAR_USER(t){t.user={username:null,email:null,password:null}}},getters:{isAuthenticated:t=>!!t.user,getUserList:t=>t.userList},actions:{async login({commit:t},e){const{email:n,password:r}=e;try{await QS(Ru,n,r),n==="admin@gmail.com"?(t("SET_USER",{email:n}),Pa.push("/")):alert("You are not authorized as an admin.")}catch(s){switch(s.code){case"auth/user-not-founded":alert("user not found");break;case"auth/wrong-password":alert("wrong password");break;default:alert("Something went wrong")}return}},async logout({commit:t}){await YS(Ru),t("CLEAR_USER"),Pa.push("/login")}}}),wM={};function TM(t,e,n,r,s,i){const o=ur("RouterView");return Ht(),xT(o)}const IM=Wa(wM,[["render",TM]]),Cf=yI(IM);Cf.use(EM);Cf.use(Pa);Cf.mount("#app");export{bM as A,xT as B,yt as F,i_ as I,Wa as _,w as a,SM as b,fn as c,Ku as d,Y as e,dt as f,Re as g,kR as h,fm as i,hm as j,ym as k,Uc as l,sN as m,NM as n,Ht as o,zu as p,CD as q,ur as r,MM as s,at as t,PM as u,RM as v,AM as w,xM as x,VM as y,DM as z};
