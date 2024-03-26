var Z=Object.defineProperty;var tt=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var p=(t,e,n)=>(tt(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,r as N,i as O,e as j,f as et,g as k,h as nt,j as it,k as st,l as rt,m as q,p as lt,q as ot,u as at}from"./scheduler.DqLnTKXJ.js";const F=typeof window<"u";let ct=F?()=>window.performance.now():()=>Date.now(),R=F?t=>requestAnimationFrame(t):v;const x=new Set;function J(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&R(J)}function ft(t){let e;return x.size===0&&R(J),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let C=!1;function ut(){C=!0}function _t(){C=!1}function dt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&r.push(_)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:dt(1,s,h=>e[n[h]].claim_order,a))-1;i[r]=n[_]+1;const f=_+1;n[f]=r,s=Math.max(f,s)}const c=[],l=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);o>=r;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(l[r],_)}}function mt(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=B("style");return e.textContent="/* empty */",$t(U(t),e),e.sheet}function $t(t,e){return mt(t.head||t,e),e.sheet}function yt(t,e){if(C){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){t.insertBefore(e,n||null)}function xt(t,e,n){C&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function B(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function kt(){return I(" ")}function qt(){return I("")}function zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const wt=["width","height"];function Gt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&wt.indexOf(i)===-1?t[i]=e[i]:W(t,i,e[i])}function Ft(t,e){for(const n in e)W(t,n,e[n])}function Jt(t){return t.dataset.svelteH}function vt(t){return Array.from(t.childNodes)}function K(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Q(t,e,n,i,s=!1){K(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const r=n(o);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const r=n(o);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function X(t,e,n,i){return Q(t,s=>s.nodeName===e,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const o=s.attributes[l];n[o.name]||c.push(o.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(e))}function Ut(t,e,n){return X(t,e,n,B)}function Vt(t,e,n){return X(t,e,n,V)}function Et(t,e){return Q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Wt(t){return Et(t," ")}function z(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Kt(t,e){const n=z(t,"HTML_TAG_START",0),i=z(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new L(e);K(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new L(e);for(const l of c)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(e,c)}function Qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Xt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Yt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Tt{constructor(e=!1){p(this,"is_svg",!1);p(this,"e");p(this,"n");p(this,"t");p(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=V(n.nodeName):this.e=B(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)gt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class L extends Tt{constructor(n=!1,i){super(n);p(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)xt(this.t,this.n[i],n)}}function Zt(t,e){return new t(e)}const b=new Map;let S=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function bt(t,e){const n={stylesheet:pt(e),rules:{}};return b.set(t,n),n}function G(t,e,n,i,s,c,l,o=0){const r=16.666/i;let a=`{
`;for(let d=0;d<=1;d+=r){const g=e+(n-e)*c(d);a+=d*100+`%{${l(g,1-g)}}
`}const _=a+`100% {${l(n,1-n)}}
}`,f=`__svelte_${At(_)}_${o}`,h=U(t),{stylesheet:y,rules:u}=b.get(h)||bt(h,t);u[f]||(u[f]=!0,y.insertRule(`@keyframes ${f} ${_}`,y.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${s}ms 1 both`,S+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),S-=s,S||Ct())}function Ct(){R(()=>{S||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),b.clear())})}let w;function Ht(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function P(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const A=new Set;let $;function te(){$={r:0,c:[],p:$}}function ee(){$.r||N($.c),$=$.p}function Dt(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ne(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),$.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Mt={duration:0};function ie(t,e,n,i){let c=e(t,n,{direction:"both"}),l=i?0:1,o=null,r=null,a=null,_;function f(){a&&St(t,a)}function h(u,m){const d=u.b-l;return m*=Math.abs(d),{a:l,b:u.b,d,duration:m,start:u.start,end:u.start+m,group:u.group}}function y(u){const{delay:m=0,duration:d=300,easing:g=et,tick:H=v,css:D}=c||Mt,M={start:ct()+m,b:u};u||(M.group=$,$.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),o||r?r=M:(D&&(f(),a=G(t,l,u,d,m,g,D)),u&&H(0,1),o=h(M,d),j(()=>P(t,u,"start")),ft(T=>{if(r&&T>r.start&&(o=h(r,d),r=null,P(t,o.b,"start"),D&&(f(),a=G(t,l,o.b,o.duration,0,g,c.css))),o){if(T>=o.end)H(l=o.b,1-l),P(t,o.b,"end"),r||(o.b?f():--o.group.r||N(o.group.c)),o=null;else if(T>=o.start){const Y=T-o.start;l=o.a+o.d*g(Y/o.duration),H(l,1-l)}}return!!(o||r)}))}return{run(u){O(c)?Ht().then(()=>{c=c({direction:u?"in":"out"}),y(u)}):y(u)},end(){f(),o=r=null}}}function se(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function re(t){t&&t.c()}function le(t,e){t&&t.l(e)}function Lt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),j(()=>{const c=t.$$.on_mount.map(lt).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):N(c),t.$$.on_mount=[]}),s.forEach(j)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function jt(t,e){t.$$.dirty[0]===-1&&(ot.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,s,c,l=null,o=[-1]){const r=rt;q(t);const a=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:s,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:k(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...y)=>{const u=y.length?y[0]:h;return a.ctx&&s(a.ctx[f],a.ctx[f]=u)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](u),_&&jt(t,f)),h}):[],a.update(),_=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ut();const f=vt(e.target);a.fragment&&a.fragment.l(f),f.forEach(E)}else a.fragment&&a.fragment.c();e.intro&&Dt(t.$$.fragment),Lt(t,e.target,e.anchor),_t(),nt()}q(r)}class ae{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Pt(this,1),this.$destroy=v}$on(e,n){if(!O(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ot);export{It as A,Kt as B,Gt as C,zt as D,V as E,Vt as F,Ft as G,L as H,Yt as I,se as J,ae as S,vt as a,Et as b,Ut as c,E as d,B as e,Wt as f,xt as g,yt as h,oe as i,Qt as j,qt as k,ne as l,ee as m,Dt as n,W as o,Xt as p,te as q,Zt as r,kt as s,I as t,re as u,le as v,Lt as w,Pt as x,Jt as y,ie as z};