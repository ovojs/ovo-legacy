var xe=Object.defineProperty;var Ee=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var Se=(l,e,t)=>e in l?xe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,De=(l,e)=>{for(var t in e||(e={}))et.call(e,t)&&Se(l,t,e[t]);if(Ee)for(var t of Ee(e))tt.call(e,t)&&Se(l,t,e[t]);return l};import{S as le,i as ne,s as se,c as lt,e as g,t as D,a as O,b as m,d as oe,f as M,g as u,l as Y,h as B,u as nt,j as st,k as ot,m as C,n as H,o as L,r as _e,p as A,q as X,v as $,w as x,x as de,y as it,z as rt,A as fe,B as Me,C as Le,D as pe,E as Ce,F as ie,G as ct,H as ge,I as Te,J as Ie,K as ve,L as we,M as at,N as ut,O as ft,P as mt,Q as ht,R as Ne,T as _t,U as dt}from"./vendor.94e89ba6.js";const pt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};pt();function gt(l){let e,t,s,n,o,i,a,c;const r=l[3].default,f=lt(r,l,l[2],null);return{c(){e=g("div"),t=g("div"),s=D(l[1]),n=O(),o=g("div"),f&&f.c(),m(t,"class","ovo-btn"),m(t,"data-active",l[0]),m(o,"class","details ovo-bg ovo-bdr svelte-ikycck"),oe(o,"open",l[0]),m(e,"class","drop svelte-ikycck"),m(e,"tabindex","0")},m(h,d){M(h,e,d),u(e,t),u(t,s),u(e,n),u(e,o),f&&f.m(o,null),i=!0,a||(c=[Y(t,"click",l[4]),Y(e,"blur",l[5])],a=!0)},p(h,[d]){(!i||d&2)&&B(s,h[1]),(!i||d&1)&&m(t,"data-active",h[0]),f&&f.p&&(!i||d&4)&&nt(f,r,h,h[2],i?ot(r,h[2],d,null):st(h[2]),null),d&1&&oe(o,"open",h[0])},i(h){i||(C(f,h),i=!0)},o(h){H(f,h),i=!1},d(h){h&&L(e),f&&f.d(h),a=!1,_e(c)}}}function vt(l,e,t){let{$$slots:s={},$$scope:n}=e,{title:o=""}=e,{open:i=!1}=e;const a=()=>t(0,i=!i),c=()=>t(0,i=!1);return l.$$set=r=>{"title"in r&&t(1,o=r.title),"open"in r&&t(0,i=r.open),"$$scope"in r&&t(2,n=r.$$scope)},[i,o,n,s,a,c]}class Re extends le{constructor(e){super();ne(this,e,vt,gt,se,{title:1,open:0})}}function wt(l){let e;return{c(){e=g("div"),e.textContent="\u52A0\u8F7D\u4E2D",m(e,"class","svelte-q18c5f")},m(t,s){M(t,e,s)},p:A,i:A,o:A,d(t){t&&L(e)}}}class bt extends le{constructor(e){super();ne(this,e,null,wt,se,{})}}function He(l,e,t){const s=l.slice();return s[7]=e[t],s}function kt(l){return{c:A,m:A,p:A,i:A,o:A,d:A}}function Ot(l){let e,t=l[6].temoji,s=[];for(let n=0;n<t.length;n+=1)s[n]=ze(He(l,t,n));return{c(){e=g("ul");for(let n=0;n<s.length;n+=1)s[n].c();m(e,"class","ovo-ul svelte-1b0ew32")},m(n,o){M(n,e,o);for(let i=0;i<s.length;i+=1)s[i].m(e,null)},p(n,o){if(o&6){t=n[6].temoji;let i;for(i=0;i<t.length;i+=1){const a=He(n,t,i);s[i]?s[i].p(a,o):(s[i]=ze(a),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},i:A,o:A,d(n){n&&L(e),fe(s,n)}}}function ze(l){let e,t=l[7].text+"",s,n,o,i;function a(){return l[4](l[7])}return{c(){e=g("li"),s=D(t),m(e,"title",n=l[7].title),m(e,"class","svelte-1b0ew32")},m(c,r){M(c,e,r),u(e,s),o||(i=Y(e,"click",a),o=!0)},p(c,r){l=c},d(c){c&&L(e),o=!1,i()}}}function jt(l){let e,t;return e=new bt({}),{c(){X(e.$$.fragment)},m(s,n){$(e,s,n),t=!0},p:A,i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function yt(l){let e,t,s={ctx:l,current:null,token:null,hasCatch:!1,pending:jt,then:Ot,catch:kt,value:6,blocks:[,,,]};return it(l[2],s),{c(){e=g("div"),s.block.c(),m(e,"class","emoji svelte-1b0ew32")},m(n,o){M(n,e,o),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,t=!0},p(n,o){l=n,rt(s,l,o)},i(n){t||(C(s.block),t=!0)},o(n){for(let o=0;o<3;o+=1){const i=s.blocks[o];H(i)}t=!1},d(n){n&&L(e),s.block.d(),s.token=null,s=null}}}function Et(l){let e,t;return e=new Re({props:{title:l[0].editor.faces,$$slots:{default:[yt]},$$scope:{ctx:l}}}),{c(){X(e.$$.fragment)},m(s,n){$(e,s,n),t=!0},p(s,[n]){const o={};n&1&&(o.title=s[0].editor.faces),n&1024&&(o.$$scope={dirty:n,ctx:s}),e.$set(o)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}async function St(l){if(!l)throw new Error("no emoji source provided");const e=await fetch(l);try{if(e.ok)return await e.json()}catch(t){throw t}}function Dt(l,e,t){let{emoji:s=""}=e,{locale:n}=e;const o=de();function i(r){o("change",r)}const a=St(s),c=r=>i(r);return l.$$set=r=>{"emoji"in r&&t(3,s=r.emoji),"locale"in r&&t(0,n=r.locale)},[n,i,a,s,c]}class Mt extends le{constructor(e){super();ne(this,e,Dt,Et,se,{emoji:3,locale:0})}}const be=Me(null),ke=Me(null);function Ae(l,e,t){const s=l.slice();return s[5]=e[t],s}function Lt(l){let e;return{c(){e=g("div"),e.textContent="\u6CA1\u6709\u53EF\u4EE5 @ \u7684\u4EBA\u5462",m(e,"class","svelte-zxn7hw")},m(t,s){M(t,e,s)},p:A,d(t){t&&L(e)}}}function Ct(l){let e,t=l[0],s=[];for(let n=0;n<t.length;n+=1)s[n]=Pe(Ae(l,t,n));return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=pe()},m(n,o){for(let i=0;i<s.length;i+=1)s[i].m(n,o);M(n,e,o)},p(n,o){if(o&3){t=n[0];let i;for(i=0;i<t.length;i+=1){const a=Ae(n,t,i);s[i]?s[i].p(a,o):(s[i]=Pe(a),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},d(n){fe(s,n),n&&L(e)}}}function Pe(l){let e,t=l[5].issuer+"",s,n,o=l[5].issuer_website+"",i,a,c,r;function f(){return l[3](l[5])}return{c(){e=g("li"),s=D(t),n=D(" ("),i=D(o),a=D(`)
        `),m(e,"class","ovo-li ovo-ptr")},m(h,d){M(h,e,d),u(e,s),u(e,n),u(e,i),u(e,a),c||(r=Y(e,"click",f),c=!0)},p(h,d){l=h,d&1&&t!==(t=l[5].issuer+"")&&B(s,t),d&1&&o!==(o=l[5].issuer_website+"")&&B(i,o)},d(h){h&&L(e),c=!1,r()}}}function Tt(l){let e;function t(o,i){return o[0].length?Ct:Lt}let s=t(l),n=s(l);return{c(){e=g("ul"),n.c(),m(e,"class","ovo-ul svelte-zxn7hw")},m(o,i){M(o,e,i),n.m(e,null)},p(o,i){s===(s=t(o))&&n?n.p(o,i):(n.d(1),n=s(o),n&&(n.c(),n.m(e,null)))},d(o){o&&L(e),n.d()}}}function It(l){let e,t;return e=new Re({props:{title:"@",$$slots:{default:[Tt]},$$scope:{ctx:l}}}),{c(){X(e.$$.fragment)},m(s,n){$(e,s,n),t=!0},p(s,[n]){const o={};n&257&&(o.$$scope={dirty:n,ctx:s}),e.$set(o)},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function Nt(l,e,t){let s;Le(l,ke,c=>t(2,s=c));let n=[];const o=de();function i(c){o("change",c)}const a=c=>i(c);return l.$$.update=()=>{l.$$.dirty&5&&s&&(t(0,n=[]),s.forEach(c=>n.push(c)))},[n,i,s,a]}class Rt extends le{constructor(e){super();ne(this,e,Nt,It,se,{})}}const Ht=/[a-zA-Z0-9_\u0392-\u03c9\u00c0-\u00ff\u0600-\u06ff\u0400-\u04ff]+|[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;function zt(l){const e=l.match(Ht);let t=0;if(!e)return 0;for(let s=0;s<e.length;s++)e[s].charCodeAt(0)>=19968?t+=e[s].length:t+=1;return t}let qe;ke.subscribe(l=>qe=l);Ce.use({renderer:{paragraph:l=>{let e=!1,t=l;return t=t.replace(/@([\u4e00-\u9fa5]|\w)+ /g,s=>{e=!0;const n=qe.get(s.slice(1).trim());return`<a href="${(n==null?void 0:n.issuer_website)||""}">${s}</a> `}),t=t.replace(/#(\d+|[a-z,0-9]{7}) /g,s=>(e=!0,`<a href="#ovo-${s.slice(1).trim()}">${s}</a>`)),e?"<p>"+t+"</p>":!1}}});function Fe(l){return Ce(l)}class me{static init(e){this.server=e.server,this.timeout=e.timeout}static async postComment(e){const t=new Blob([JSON.stringify(e)],{type:"application/json"}),s=await Oe(`${this.server}/comment`,this.timeout,{method:"POST",credentials:"omit",body:t});try{if(!s.ok)throw new Error("error posting comment "+e);const n=await s.json();if(n==null?void 0:n.errmsg)throw new Error(n.errmsg)}catch(n){throw n}}static async postReply(e){const t=new Blob([JSON.stringify(e)],{type:"application/json"}),s=await Oe(`${this.server}/reply`,this.timeout,{method:"POST",credentials:"omit",body:t});try{if(!s.ok)throw new Error("error posting comment "+e);const n=await s.json();if(n==null?void 0:n.errmsg)throw new Error(n.errmsg)}catch(n){throw n}}static async getComments(e){const t=new URLSearchParams;t.set("domain",encodeURIComponent(e.domain)),t.set("path",encodeURIComponent(e.path)),t.set("page",String(e.page));const s=await Oe(`${this.server}/comment?${t.toString()}`,this.timeout);try{if(!s.ok)throw new Error("error getting comments "+e);const n=await s.json();if(n==null?void 0:n.errmsg)throw new Error(n.errmsg);return n}catch(n){throw n}}}async function Oe(l,e,t){let s=null;const n=new AbortController;s=setTimeout(function(){throw s&&(clearTimeout(s),s=null),new Error("timeout")},e);const o=await fetch(l,De({signal:n.signal},t));return clearTimeout(s),s=null,o}class ae{static init(){this.store=new Map}static on(e,t){this.store||this.init(),this.store.has(e)||this.store.set(e,new Set),this.store.get(e).add(t)}static off(e,t){if(!this.store)throw new Error("nothing to remove");this.store.get(e).delete(t)}static emit(e,...t){if(!this.store)throw new Error("nothing to emit");const s=this.store.get(e);!s||s.forEach(function(n){n(...t)})}}function At(l){let e,t,s,n,o,i,a,c,r,f,h,d,v,y,I,k,w,J,N,T,P,q=l[4].editor.preview+"",F,Z,Q,ee,V,W,_,p,S,G,te,E,K,re=(l[9]?`${l[4].editor.waiting}`:`${l[4].editor.submit}`)+"",z,U,ce,ue;return w=new Mt({props:{emoji:l[5],locale:l[4]}}),w.$on("change",l[13]),N=new Rt({}),N.$on("change",l[14]),{c(){e=g("form"),t=g("div"),s=g("input"),o=O(),i=g("input"),c=O(),r=g("input"),h=O(),d=g("textarea"),v=O(),y=g("div"),I=O(),k=g("div"),X(w.$$.fragment),J=O(),X(N.$$.fragment),T=O(),P=g("div"),F=D(q),Z=O(),Q=g("div"),ee=D(l[10]),V=O(),W=g("div"),_=O(),p=g("div"),S=D(l[12]),G=D(" / "),te=D(Pt),E=O(),K=g("button"),z=D(re),m(s,"type","text"),m(s,"placeholder",n=l[4].editor.name),s.required=!0,m(s,"class","svelte-1o8ler7"),m(i,"type","email"),m(i,"placeholder",a=l[4].editor.email),i.required=!0,m(i,"class","svelte-1o8ler7"),m(r,"type","url"),m(r,"placeholder",f=l[4].editor.website),r.required=!0,m(r,"class","svelte-1o8ler7"),m(t,"class","info svelte-1o8ler7"),m(d,"placeholder",l[0]),d.required=!0,m(d,"class","svelte-1o8ler7"),m(y,"class","preview svelte-1o8ler7"),oe(y,"open",l[7]),m(P,"class","ovo-btn"),m(P,"data-active",l[7]),m(Q,"class","ovo-oa-x"),m(p,"class","ovo-oa-x"),m(K,"class","ovo-btn"),m(K,"type","submit"),m(K,"data-disabled",l[9]),m(k,"class","action svelte-1o8ler7"),m(e,"class","svelte-1o8ler7")},m(b,j){M(b,e,j),u(e,t),u(t,s),ie(s,l[1]),u(t,o),u(t,i),ie(i,l[2]),u(t,c),u(t,r),ie(r,l[3]),u(e,h),u(e,d),l[20](d),ie(d,l[8]),u(e,v),u(e,y),y.innerHTML=l[11],u(e,I),u(e,k),$(w,k,null),u(k,J),$(N,k,null),u(k,T),u(k,P),u(P,F),u(k,Z),u(k,Q),u(Q,ee),u(k,V),u(k,W),u(k,_),u(k,p),u(p,S),u(p,G),u(p,te),u(k,E),u(k,K),u(K,z),U=!0,ce||(ue=[Y(s,"input",l[17]),Y(i,"input",l[18]),Y(r,"input",l[19]),Y(d,"input",l[21]),Y(P,"click",l[22]),Y(e,"submit",ct(l[15]))],ce=!0)},p(b,[j]){(!U||j&16&&n!==(n=b[4].editor.name))&&m(s,"placeholder",n),j&2&&s.value!==b[1]&&ie(s,b[1]),(!U||j&16&&a!==(a=b[4].editor.email))&&m(i,"placeholder",a),j&4&&i.value!==b[2]&&ie(i,b[2]),(!U||j&16&&f!==(f=b[4].editor.website))&&m(r,"placeholder",f),j&8&&ie(r,b[3]),(!U||j&1)&&m(d,"placeholder",b[0]),j&256&&ie(d,b[8]),(!U||j&2048)&&(y.innerHTML=b[11]),j&128&&oe(y,"open",b[7]);const R={};j&32&&(R.emoji=b[5]),j&16&&(R.locale=b[4]),w.$set(R),(!U||j&16)&&q!==(q=b[4].editor.preview+"")&&B(F,q),(!U||j&128)&&m(P,"data-active",b[7]),(!U||j&1024)&&B(ee,b[10]),(!U||j&4096)&&B(S,b[12]),(!U||j&528)&&re!==(re=(b[9]?`${b[4].editor.waiting}`:`${b[4].editor.submit}`)+"")&&B(z,re),(!U||j&512)&&m(K,"data-disabled",b[9])},i(b){U||(C(w.$$.fragment,b),C(N.$$.fragment,b),U=!0)},o(b){H(w.$$.fragment,b),H(N.$$.fragment,b),U=!1},d(b){b&&L(e),l[20](null),x(w),x(N),ce=!1,_e(ue)}}}const Pt=400;function qt(l,e,t){let s,n;Le(l,be,_=>t(16,n=_));let{locale:o}=e,{placeholder:i=o.editor.placeholder}=e,{emoji:a=""}=e,c,r=!1,f=!1,h="",d="",v="",{issuer:y="",issuer_email:I="",issuer_website:k=""}=e;function w(_){const p=c.selectionStart,S=c.selectionEnd;t(8,d=d.substring(0,p)+_+d.substring(S,d.length)),t(6,c.selectionStart=p+a.length,c),t(6,c.selectionEnd=p+a.length,c),c.focus()}function J(_){const p=_.detail.text;w(p)}function N(_){const p=`@${_.detail.issuer} `;w(p)}function T(_){const p=`#${_} `;w(p)}function P(){be.update(()=>null),t(0,i=o.editor.placeholder),t(8,d=""),t(11,v=""),t(10,h=""),t(7,r=!1)}ae.on("refresh",P),ae.on("ref",T);async function q(){if(f)return;t(9,f=!0),t(11,v=v||Fe(d));const _={};if(n){const{cid:S,id:G}=n;_.cid=S||G,_.rid=S?G:""}else _.domain=encodeURIComponent(location.host),_.path=encodeURIComponent(location.pathname);const p={issuer:y,issuer_email:I,issuer_website:k};_.issuer=y,_.issuer_website=k,_.issuer_email=I,_.content=v,localStorage.issuer=JSON.stringify(p);try{n?await me.postReply(_):await me.postComment(_)}catch(S){alert(S.message);return}finally{t(9,f=!1)}alert(o.editor.success),ae.emit("refresh")}function F(){y=this.value,t(1,y)}function Z(){I=this.value,t(2,I)}function Q(){k=this.value,t(3,k)}function ee(_){ge[_?"unshift":"push"](()=>{c=_,t(6,c)})}function V(){d=this.value,t(8,d)}const W=()=>t(7,r=!r);return l.$$set=_=>{"locale"in _&&t(4,o=_.locale),"placeholder"in _&&t(0,i=_.placeholder),"emoji"in _&&t(5,a=_.emoji),"issuer"in _&&t(1,y=_.issuer),"issuer_email"in _&&t(2,I=_.issuer_email),"issuer_website"in _&&t(3,k=_.issuer_website)},l.$$.update=()=>{l.$$.dirty&256&&t(12,s=zt(d)),l.$$.dirty&384&&r&&t(11,v=Fe(d)),l.$$.dirty&65617&&n&&(t(0,i=`${o.comment.reply}#${n.id}`),t(10,h=i),c&&c.focus())},[i,y,I,k,o,a,c,r,d,f,h,v,s,J,N,q,n,F,Z,Q,ee,V,W]}class Ft extends le{constructor(e){super();ne(this,e,qt,At,se,{locale:4,placeholder:0,emoji:5,issuer:1,issuer_email:2,issuer_website:3})}}function Ue(l,e){if(!!l)for(let t=0;t<l.length;t++)e(l[t]),Ue(l[t].replies,e)}function Ut(l){let e,t=(l[1]?`${l[0].sentinal.eol}`:`${l[0].sentinal.loading}`)+"",s;return{c(){e=g("div"),s=D(t),m(e,"class","ovo-s svelte-1l5g19d")},m(n,o){M(n,e,o),u(e,s),l[3](e)},p(n,[o]){o&3&&t!==(t=(n[1]?`${n[0].sentinal.eol}`:`${n[0].sentinal.loading}`)+"")&&B(s,t)},i:A,o:A,d(n){n&&L(e),l[3](null)}}}function Bt(l,e,t){let{locale:s}=e,{done:n=!1}=e,o;const i=de(),a=new IntersectionObserver(function(r){r[0].intersectionRatio<=.8||i("visiable",r[0])},{threshold:[.8]});Te(function(){a.observe(o)}),Ie(function(){a.disconnect()});function c(r){ge[r?"unshift":"push"](()=>{o=r,t(2,o)})}return l.$$set=r=>{"locale"in r&&t(0,s=r.locale),"done"in r&&t(1,n=r.done)},[s,n,o,c]}class Jt extends le{constructor(e){super();ne(this,e,Bt,Ut,se,{locale:0,done:1})}}const Wt=1e3,Be=1e3*60,Je=1e3*60*60,Yt=1e3*60*60*24;function We(l,e=!1){l=l.replace("Z","8");const t=new Date(l),s=new Date().getTime(),n=s-t.getTime();if(n<Be)return`${Math.ceil(n/Wt)} \u79D2\u524D`;if(n<Je)return`${Math.ceil(n/Be)} \u5206\u949F\u524D`;if(n<Yt)return`${Math.ceil(n/Je)} \u5C0F\u65F6\u524D`;let o=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`;return e&&(o+=` ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`),o}function Ye(l,e,t){const s=l.slice();return s[10]=e[t],s[12]=t,s}function Ge(l){let e,t,s=l[0],n=[];for(let i=0;i<s.length;i+=1)n[i]=Ze(Ye(l,s,i));const o=i=>H(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=pe()},m(i,a){for(let c=0;c<n.length;c+=1)n[c].m(i,a);M(i,e,a),t=!0},p(i,a){if(a&111){s=i[0];let c;for(c=0;c<s.length;c+=1){const r=Ye(i,s,c);n[c]?(n[c].p(r,a),C(n[c],1)):(n[c]=Ze(r),n[c].c(),C(n[c],1),n[c].m(e.parentNode,e))}for(ve(),c=s.length;c<n.length;c+=1)o(c);we()}},i(i){if(!t){for(let a=0;a<s.length;a+=1)C(n[a]);t=!0}},o(i){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)H(n[a]);t=!1},d(i){fe(n,i),i&&L(e)}}}function Ke(l){var i;let e=((i=l[10].replies)==null?void 0:i.length)+"",t,s,n=l[1].comment.comment+"",o;return{c(){t=D(e),s=O(),o=D(n)},m(a,c){M(a,t,c),M(a,s,c),M(a,o,c)},p(a,c){var r;c&1&&e!==(e=((r=a[10].replies)==null?void 0:r.length)+"")&&B(t,e),c&2&&n!==(n=a[1].comment.comment+"")&&B(o,n)},d(a){a&&L(t),a&&L(s),a&&L(o)}}}function Ze(l){var b;let e,t,s,n,o=l[10].issuer+"",i,a,c,r,f=We(l[10].ctime)+"",h,d,v,y,I,k,w,J,N=l[10].id+"",T,P,q,F,Z=l[1].comment.reply+"",Q,ee,V,W=l[10].content+"",_,p,S,G,te,E,K,re,z=((b=l[10].replies)==null?void 0:b.length)&&Ke(l);function U(){return l[7](l[12])}function ce(){return l[8](l[10])}function ue(){return l[9](l[10])}return S=new Qe({props:{comments:l[10].replies,locale:l[1]}}),{c(){e=g("article"),t=g("div"),s=g("span"),n=g("a"),i=D(o),c=O(),r=g("span"),h=D(f),d=O(),v=g("span"),z&&z.c(),y=O(),I=g("span"),k=O(),w=g("span"),J=D("#"),T=D(N),q=O(),F=g("span"),Q=D(Z),ee=O(),V=g("div"),_=O(),p=g("div"),X(S.$$.fragment),G=O(),m(n,"class","ovo-a svelte-ghwfmi"),m(n,"href",a=l[10].issuer_website),m(n,"target","_blank"),m(s,"class","ovo-b svelte-ghwfmi"),m(r,"class","ovo-s svelte-ghwfmi"),m(v,"class","ovo-s ovo-a ovo-ptr svelte-ghwfmi"),m(I,"class","svelte-ghwfmi"),m(w,"class","ovo-s ovo-a ovo-ptr svelte-ghwfmi"),m(w,"title",P=l[1].comment.reference),m(F,"class","ovo-s ovo-a ovo-ptr svelte-ghwfmi"),m(t,"class","info svelte-ghwfmi"),m(V,"class","content svelte-ghwfmi"),m(p,"class","details svelte-ghwfmi"),oe(p,"open",l[3]&1<<l[12]+1),m(e,"id",te="ovo-"+l[10].id),m(e,"class","svelte-ghwfmi"),oe(e,"active",l[2]&&l[2].slice(5)===l[10].id)},m(j,R){M(j,e,R),u(e,t),u(t,s),u(s,n),u(n,i),u(t,c),u(t,r),u(r,h),u(t,d),u(t,v),z&&z.m(v,null),u(t,y),u(t,I),u(t,k),u(t,w),u(w,J),u(w,T),u(t,q),u(t,F),u(F,Q),u(e,ee),u(e,V),V.innerHTML=W,u(e,_),u(e,p),$(S,p,null),u(e,G),E=!0,K||(re=[Y(v,"click",U),Y(w,"click",ce),Y(F,"click",ue)],K=!0)},p(j,R){var ye;l=j,(!E||R&1)&&o!==(o=l[10].issuer+"")&&B(i,o),(!E||R&1&&a!==(a=l[10].issuer_website))&&m(n,"href",a),(!E||R&1)&&f!==(f=We(l[10].ctime)+"")&&B(h,f),((ye=l[10].replies)==null?void 0:ye.length)?z?z.p(l,R):(z=Ke(l),z.c(),z.m(v,null)):z&&(z.d(1),z=null),(!E||R&1)&&N!==(N=l[10].id+"")&&B(T,N),(!E||R&2&&P!==(P=l[1].comment.reference))&&m(w,"title",P),(!E||R&2)&&Z!==(Z=l[1].comment.reply+"")&&B(Q,Z),(!E||R&1)&&W!==(W=l[10].content+"")&&(V.innerHTML=W);const he={};R&1&&(he.comments=l[10].replies),R&2&&(he.locale=l[1]),S.$set(he),R&8&&oe(p,"open",l[3]&1<<l[12]+1),(!E||R&1&&te!==(te="ovo-"+l[10].id))&&m(e,"id",te),R&5&&oe(e,"active",l[2]&&l[2].slice(5)===l[10].id)},i(j){E||(C(S.$$.fragment,j),E=!0)},o(j){H(S.$$.fragment,j),E=!1},d(j){j&&L(e),z&&z.d(),x(S),K=!1,_e(re)}}}function Gt(l){let e,t,s,n,o=l[0]&&Ge(l);return{c(){o&&o.c(),e=pe()},m(i,a){o&&o.m(i,a),M(i,e,a),t=!0,s||(n=Y(window,"hashchange",l[4]),s=!0)},p(i,[a]){i[0]?o?(o.p(i,a),a&1&&C(o,1)):(o=Ge(i),o.c(),C(o,1),o.m(e.parentNode,e)):o&&(ve(),H(o,1,1,()=>{o=null}),we())},i(i){t||(C(o),t=!0)},o(i){H(o),t=!1},d(i){o&&o.d(i),i&&L(e),s=!1,n()}}}function Kt(l,e,t){let{comments:s=[]}=e,{locale:n}=e,o=location.hash;function i(){const v=location.hash;t(2,o=/#ovo-(\d+|[a-z,0-9]{7})/.test(v)?v:"")}function a(v){be.set(v)}let c=0;function r(v){t(3,c^=1<<v)}const f=v=>r(v+1),h=v=>ae.emit("ref",v.id),d=v=>a(v);return l.$$set=v=>{"comments"in v&&t(0,s=v.comments),"locale"in v&&t(1,n=v.locale)},[s,n,o,c,i,a,r,f,h,d]}class Qe extends le{constructor(e){super();ne(this,e,Kt,Gt,se,{comments:0,locale:1})}}const Zt="zh-Hans",Qt={name:"\u6635\u79F0",email:"\u90AE\u7BB1",website:"\u7F51\u5740",faces:"OvO",preview:"\u9884\u89C8",submit:"\u53D1\u5E03",waiting:"\u53D1\u5E03\u4E2D",words:"\u5B57",placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427\uFF5E",success:"\u53D1\u5E03\u6210\u529F \u03C6(\uFFE3\u2207\uFFE3o)"},Vt={title:"\u8BC4\u8BBA",comment:"\u6761\u8BC4\u8BBA",reply:"\u56DE\u590D",reference:"\u5F15\u7528"},Xt={loading:"\u52A0\u8F7D\u4E2D",eol:"\u5230\u5E95\u5566 OvO"};var $t={locale:Zt,editor:Qt,comment:Vt,sentinal:Xt};function Ve(l){let e,t=l[0].comment.title+"",s,n,o,i,a,c;return a=new Qe({props:{comments:l[5],locale:l[0]}}),{c(){e=g("h3"),s=D(t),n=O(),o=D(l[4]),i=O(),X(a.$$.fragment),m(e,"class","svelte-2zuo7e")},m(r,f){M(r,e,f),u(e,s),u(e,n),u(e,o),M(r,i,f),$(a,r,f),c=!0},p(r,f){(!c||f&1)&&t!==(t=r[0].comment.title+"")&&B(s,t),(!c||f&16)&&B(o,r[4]);const h={};f&32&&(h.comments=r[5]),f&1&&(h.locale=r[0]),a.$set(h)},i(r){c||(C(a.$$.fragment,r),c=!0)},o(r){H(a.$$.fragment,r),c=!1},d(r){r&&L(e),r&&L(i),x(a,r)}}}function xt(l){let e,t,s,n,o,i;const a=[{placeholder:l[1]},{emoji:l[2]},{locale:l[0]},l[6]];let c={};for(let f=0;f<a.length;f+=1)c=at(c,a[f]);t=new Ft({props:c});let r=l[5]&&Ve(l);return o=new Jt({props:{done:l[3],locale:l[0]}}),o.$on("visiable",l[7]),{c(){e=g("section"),X(t.$$.fragment),s=O(),r&&r.c(),n=O(),X(o.$$.fragment),m(e,"class","OvO svelte-2zuo7e")},m(f,h){M(f,e,h),$(t,e,null),u(e,s),r&&r.m(e,null),u(e,n),$(o,e,null),i=!0},p(f,[h]){const d=h&71?ut(a,[h&2&&{placeholder:f[1]},h&4&&{emoji:f[2]},h&1&&{locale:f[0]},h&64&&ft(f[6])]):{};t.$set(d),f[5]?r?(r.p(f,h),h&32&&C(r,1)):(r=Ve(f),r.c(),C(r,1),r.m(e,n)):r&&(ve(),H(r,1,1,()=>{r=null}),we());const v={};h&8&&(v.done=f[3]),h&1&&(v.locale=f[0]),o.$set(v)},i(f){i||(C(t.$$.fragment,f),C(r),C(o.$$.fragment,f),i=!0)},o(f){H(t.$$.fragment,f),H(r),H(o.$$.fragment,f),i=!1},d(f){f&&L(e),x(t),r&&r.d(),x(o)}}}function el(l,e,t){let{locale:s=$t}=e,{placeholder:n=s.editor.placeholder}=e,{emoji:o="https://cdn.jsdelivr.net/gh/DejavuMoe/DejavuMoe/emoji.json"}=e,{server:i="https://www.fastmock.site/mock/112f2e694fa5334c4d698ce22a512405/ovo"}=e,{timeout:a=8e3}=e;me.init({server:i,timeout:a});const c=new Map;let r,f,h,d,v,y;k(),Te(function(){const w=localStorage.issuer;w&&t(6,y=JSON.parse(w))}),Ie(function(){console.log("OvO was destroyed")});async function I(w){if(!r){f++;try{v=await me.getComments({domain:location.host,path:location.pathname,page:f})}catch(J){throw f--,t(3,r=!0),J}t(3,r=v.done),t(5,d=[...d,...v.comments]),t(4,h=0),c.clear(),Ue(d,function({issuer:J,issuer_website:N,issuer_email:T}){t(4,h++,h),J&&c.set(J,{issuer:J,issuer_website:N,issuer_email:T})}),ke.set(c)}}function k(){t(5,d=null),t(5,d=[]),f=-1,t(4,h=0),t(3,r=!1),c.clear()}return ae.on("refresh",k),l.$$set=w=>{"locale"in w&&t(0,s=w.locale),"placeholder"in w&&t(1,n=w.placeholder),"emoji"in w&&t(2,o=w.emoji),"server"in w&&t(8,i=w.server),"timeout"in w&&t(9,a=w.timeout)},[s,n,o,r,h,d,y,I,i,a]}class tl extends le{constructor(e){super();ne(this,e,el,xt,se,{locale:0,placeholder:1,emoji:2,server:8,timeout:9})}}function ll(l){let e,t,s;return{c(){e=g("input"),m(e,"type","checkbox"),m(e,"class","svelte-19wt9bf")},m(n,o){M(n,e,o),e.checked=l[0],t||(s=Y(e,"change",l[1]),t=!0)},p(n,[o]){o&1&&(e.checked=n[0])},i:A,o:A,d(n){n&&L(e),t=!1,s()}}}function nl(l,e,t){let{checked:s=!1}=e;function n(){s=this.checked,t(0,s)}return l.$$set=o=>{"checked"in o&&t(0,s=o.checked)},[s,n]}class sl extends le{constructor(e){super();ne(this,e,nl,ll,se,{checked:0})}}const ol="en",il={name:"Nickname",email:"Email",website:"Website",faces:"OvO",preview:"Preview",submit:"Submit",waiting:"Waiting",words:"Words",placeholder:"Leave your comments",success:"Success \u03C6(\uFFE3\u2207\uFFE3o)"},rl={title:"Total",comment:"comments",reply:"reply",reference:"reference"},cl={loading:"Loading comments",eol:"You've reached the End OvO"};var al={locale:ol,editor:il,comment:rl,sentinal:cl};const ul="zh-Hans",fl={name:"\u6635\u79F0",email:"\u90AE\u7BB1",website:"\u7F51\u5740",faces:"OvO",preview:"\u9884\u89C8",submit:"\u53D1\u5E03",waiting:"\u53D1\u5E03\u4E2D",words:"\u5B57",placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427\uFF5E",success:"\u53D1\u5E03\u6210\u529F \u03C6(\uFFE3\u2207\uFFE3o)"},ml={title:"\u8BC4\u8BBA",comment:"\u6761\u8BC4\u8BBA",reply:"\u56DE\u590D",reference:"\u5F15\u7528"},hl={loading:"\u52A0\u8F7D\u4E2D",eol:"\u5230\u5E95\u5566 OvO"};var _l={locale:ul,editor:fl,comment:ml,sentinal:hl},je={\u7B80\u4F53\u4E2D\u6587:_l,English:al};function Xe(l,e,t){const s=l.slice();return s[6]=e[t],s}function $e(l){let e,t=l[6]+"",s,n;return{c(){e=g("option"),s=D(t),e.__value=n=l[6],e.value=e.__value},m(o,i){M(o,e,i),u(e,s)},p:A,d(o){o&&L(e)}}}function dl(l){let e,t,s,n,o,i,a,c,r,f,h=(l[0]?"\u{1F311}":"\u{1F31E}")+"",d,v,y,I,k,w,J,N,T,P,q,F,Z,Q;function ee(p){l[4](p)}let V={};l[0]!==void 0&&(V.checked=l[0]),y=new sl({props:V}),ge.push(()=>mt(y,"checked",ee));let W=Object.keys(je),_=[];for(let p=0;p<W.length;p+=1)_[p]=$e(Xe(l,W,p));return q=new tl({props:{locale:l[2],server:pl}}),{c(){e=g("main"),t=g("h1"),t.textContent="OvO",s=O(),n=g("h2"),n.textContent="An anonymous web component for comments",o=O(),i=g("p"),i.innerHTML=`Inspired by <a href="https://github.com/DIYgod/OwO" class="svelte-7ktcgc">O\u03C9O</a>. Available on
    <a href="https://github.com/ovojs/OvO" class="svelte-7ktcgc">GitHub</a>. Docs in
    <a href="https://github.com/ovojs/OvO/blob/main/README.md" class="svelte-7ktcgc">README</a>`,a=O(),c=g("div"),r=g("div"),f=g("span"),d=D(h),v=O(),X(y.$$.fragment),k=O(),w=g("div"),J=g("span"),N=O(),T=g("select");for(let p=0;p<_.length;p+=1)_[p].c();P=O(),X(q.$$.fragment),m(t,"class","svelte-7ktcgc"),m(i,"class","svelte-7ktcgc"),m(r,"class","svelte-7ktcgc"),m(T,"class","svelte-7ktcgc"),l[1]===void 0&&ht(()=>l[5].call(T)),m(w,"class","svelte-7ktcgc"),m(c,"class","svelte-7ktcgc"),m(e,"class","svelte-7ktcgc")},m(p,S){M(p,e,S),u(e,t),u(e,s),u(e,n),u(e,o),u(e,i),u(e,a),u(e,c),u(c,r),u(r,f),u(f,d),u(r,v),$(y,r,null),u(c,k),u(c,w),u(w,J),u(w,N),u(w,T);for(let G=0;G<_.length;G+=1)_[G].m(T,null);Ne(T,l[1]),u(e,P),$(q,e,null),F=!0,Z||(Q=Y(T,"change",l[5]),Z=!0)},p(p,[S]){(!F||S&1)&&h!==(h=(p[0]?"\u{1F311}":"\u{1F31E}")+"")&&B(d,h);const G={};if(!I&&S&1&&(I=!0,G.checked=p[0],_t(()=>I=!1)),y.$set(G),S&0){W=Object.keys(je);let E;for(E=0;E<W.length;E+=1){const K=Xe(p,W,E);_[E]?_[E].p(K,S):(_[E]=$e(K),_[E].c(),_[E].m(T,null))}for(;E<_.length;E+=1)_[E].d(1);_.length=W.length}S&2&&Ne(T,p[1]);const te={};S&4&&(te.locale=p[2]),q.$set(te)},i(p){F||(C(y.$$.fragment,p),C(q.$$.fragment,p),F=!0)},o(p){H(y.$$.fragment,p),H(q.$$.fragment,p),F=!1},d(p){p&&L(e),x(y),fe(_,p),x(q),Z=!1,Q()}}}const pl="https://ovo.nmslwsnd.com";function gl(l,e,t){let s,n=!1,o="light",i="\u7B80\u4F53\u4E2D\u6587";try{o=localStorage.theme,n=o==="dark"}catch{}function a(r){n=r,t(0,n)}function c(){i=dt(this),t(1,i)}return l.$$.update=()=>{if(l.$$.dirty&2&&t(2,s=je[i]),l.$$.dirty&9){const{classList:r}=document.querySelector("html");r.remove(o),t(3,o=n?"dark":"light"),r.add(o);try{localStorage.theme=o}catch{}}},[n,i,s,o,a,c]}class vl extends le{constructor(e){super();ne(this,e,gl,dl,se,{})}}new vl({target:document.getElementById("app")});