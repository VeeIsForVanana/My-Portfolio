function k(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function z(){return Object.create(null)}function j(t){t.forEach(E)}function F(t){return typeof t=="function"}function M(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t){let n;return m(t,e=>n=e)(),n}function B(t,n,e){t.$$.on_destroy.push(m(n,e))}function D(t,n,e,o){if(t){const c=y(t,n,e,o);return t[0](c)}}function y(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function P(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],_=Math.max(n.dirty.length,c.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function U(t,n,e,o,c,l){if(c){const _=y(n,e,o,l);t.p(_,c)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function J(t){const n={};for(const e in t)n[e]=!0;return n}let i;function h(t){i=t}function f(){if(!i)throw new Error("Function called outside component initialization");return i}function K(t){f().$$.on_mount.push(t)}function L(t){f().$$.after_update.push(t)}function N(t,n){return f().$$.context.set(t,n),n}function Q(t){return f().$$.context.get(t)}function R(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],g=[];let s=[];const p=[],x=Promise.resolve();let b=!1;function v(){b||(b=!0,x.then(O))}function T(){return v(),x}function C(t){s.push(t)}function V(t){p.push(t)}const d=new Set;let r=0;function O(){if(r!==0)return;const t=i;do{try{for(;r<a.length;){const n=a[r];r++,h(n),q(n.$$)}}catch(n){throw a.length=0,r=0,n}for(h(null),a.length=0,r=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function q(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}function W(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{H as A,N as B,I as C,Q as D,R as E,V as F,L as a,g as b,B as c,z as d,S as e,O as f,C as g,W as h,F as i,i as j,h as k,E as l,a as m,k as n,K as o,v as p,A as q,j as r,M as s,T as t,D as u,U as v,G as w,P as x,J as y,w as z};
