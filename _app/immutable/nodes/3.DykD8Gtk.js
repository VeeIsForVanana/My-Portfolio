import{d as D,s as N,e as W}from"../chunks/scheduler.DqLnTKXJ.js";import{S as F,i as G,e as m,s as j,t as E,c as h,y as k,f as S,a as w,b as q,d as x,o as _,g as V,h as u,n as I,l as z,m as J,z as A,q as K}from"../chunks/index.DZ0K0Aml.js";import{b as B}from"../chunks/paths.CwnqfLBf.js";function Q(i){const t=i-1;return t*t*t+1}function O(i,{delay:t=0,duration:l=400,easing:a=Q,x:s=0,y:e=0,opacity:o=0}={}){const y=getComputedStyle(i),c=+y.opacity,P=y.transform==="none"?"":y.transform,C=c*(1-o),[g,H]=D(s),[b,p]=D(e);return{delay:t,duration:l,easing:a,css:($,M)=>`
			transform: ${P} translate(${(1-$)*g}${H}, ${(1-$)*b}${p});
			opacity: ${c-C*M}`}}function R({params:i}){return{title:"Home Page"}}const at=Object.freeze(Object.defineProperty({__proto__:null,load:R},Symbol.toStringTag,{value:"Module"}));function U(i){let t,l="Welcome to my portfolio.",a,s;return{c(){t=m("h3"),t.textContent=l,this.h()},l(e){t=h(e,"H3",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-1dklzqg"&&(t.textContent=l),this.h()},h(){_(t,"class","h5 mb-1")},m(e,o){V(e,t,o),s=!0},i(e){s||(e&&W(()=>{s&&(a||(a=A(t,O,{duration:350,y:-50},!0)),a.run(1))}),s=!0)},o(e){e&&(a||(a=A(t,O,{duration:350,y:-50},!1)),a.run(0)),s=!1},d(e){e&&x(t),e&&a&&a.end()}}}function X(i){let t,l='<meta content="Victor&#39;s Portfolio" property="og:title"/> <meta content="Victor&#39;s portfolio of coding projects and development experience" property="og:description"/> <meta content="https://veeisforvanana.github.io/My-Portfolio/" property="og:url"/> <meta content="#43B581" data-react-helmet="true" name="theme-color"/>',a,s,e,o,y,c,P="Victor",C,g,H,b,p,$='I am a student at the University of the Philippines Diliman currently undergoing the <span class="text-secondary-600">Bachelor of Science in Computer Science</span> program (Batch 2021, expected graduation in 2025). This portfolio is intended to showcase my projects, skills, and experience as a developer, along with a few other things.',M,v,L=`<h3 class="h3 mt-2 text-inherit">Navigate using these links!</h3> <ul class="list-none"><li><p><a href="${B+"/about-me"}">About Me</a> for tidbits about me personally, my education, and experience</p></li> <li><p><a href="${B+"/projects"}">My Projects</a> for information about my projects</p></li></ul>`,n=i[0]&&U();return{c(){t=m("head"),t.innerHTML=l,a=j(),s=m("div"),e=m("div"),o=m("h1"),y=E("Hi, I'm "),c=m("span"),c.textContent=P,C=E("!"),H=j(),n&&n.c(),b=j(),p=m("p"),p.innerHTML=$,M=j(),v=m("div"),v.innerHTML=L,this.h()},l(r){t=h(r,"HEAD",{"data-svelte-h":!0}),k(t)!=="svelte-dxso5h"&&(t.innerHTML=l),a=S(r),s=h(r,"DIV",{class:!0});var f=w(s);e=h(f,"DIV",{class:!0});var d=w(e);o=h(d,"H1",{class:!0,style:!0});var T=w(o);y=q(T,"Hi, I'm "),c=h(T,"SPAN",{class:!0,"data-svelte-h":!0}),k(c)!=="svelte-126yepa"&&(c.textContent=P),C=q(T,"!"),T.forEach(x),H=S(d),n&&n.l(d),b=S(d),p=h(d,"P",{"data-svelte-h":!0}),k(p)!=="svelte-1n83009"&&(p.innerHTML=$),M=S(d),v=h(d,"DIV",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-1wunk2c"&&(v.innerHTML=L),d.forEach(x),f.forEach(x),this.h()},h(){_(c,"class","text-secondary-500"),_(o,"class","h1"),_(o,"style",g=i[0]?"margin-bottom:0px":"margin-bottom:68px"),_(v,"class","shadow-md p-4 bg-surface-900/10 rounded-lg text-tertiary-500"),_(e,"class","space-y-5"),_(s,"class","container h-full flex justify-center items-center mx-20 max-w-screen-lg prose dark:prose-invert")},m(r,f){V(r,t,f),V(r,a,f),V(r,s,f),u(s,e),u(e,o),u(o,y),u(o,c),u(o,C),u(e,H),n&&n.m(e,null),u(e,b),u(e,p),u(e,M),u(e,v)},p(r,[f]){f&1&&g!==(g=r[0]?"margin-bottom:0px":"margin-bottom:68px")&&_(o,"style",g),r[0]?n?f&1&&I(n,1):(n=U(),n.c(),I(n,1),n.m(e,b)):n&&(K(),z(n,1,1,()=>{n=null}),J())},i(r){I(n)},o(r){z(n)},d(r){r&&(x(t),x(a),x(s)),n&&n.d()}}}function Y(i,t,l){let a;const s={};return setTimeout(()=>{l(0,a=!0)},200),l(0,a=!1),[a,s]}class nt extends F{constructor(t){super(),G(this,t,Y,X,N,{data:1})}get data(){return this.$$.ctx[1]}}export{nt as component,at as universal};