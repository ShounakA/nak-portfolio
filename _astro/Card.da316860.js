import{c,a as v,o as k,g as s,b as u,i as a,d as p,S as D,t as g,s as y}from"./web.3a417cd0.js";import{M as _,s as l}from"./motion.40c69055.js";const L=g('<a target="_blank"><h2><!#><!/><span>→</span></h2><p>'),M=g("<span>"),w=g('<a target="_blank"><h2><!#><!/><span> ↯</span></h2><p class="company"></p><span></span> - <!#><!/>'),E=g("<span>Current"),N=g("<div><h3></h3><p>");function A(){return navigator.languages!==void 0?(console.log(navigator.languages[0]),navigator.languages[0]):navigator.language}const j=t=>c(_.li,{initial:{opacity:0,y:-20},animate:{opacity:100,y:0},get hover(){return{rotate:2,transition:{easing:l({damping:.25})}}},get transition(){return{delay:.05,easing:l({damping:5})}},get class(){return`link-card ${t.class}`},get children(){const n=s(L),i=n.firstChild,e=i.firstChild,[r,d]=u(e.nextSibling);r.nextSibling;const o=i.nextSibling;return a(i,()=>t.title,r,d),a(o,()=>t.body),p(()=>y(n,"href",t.href)),n}}),q=t=>{const[n,i]=v("default");return k(()=>{i(e=>A())}),c(_.li,{initial:{opacity:0,y:-20},animate:{opacity:100,y:0},get hover(){return{rotate:2,transition:{easing:l({damping:.25})}}},get transition(){return{delay:.05,easing:l({damping:5})}},class:"link-card no-point",get children(){const e=s(w),r=e.firstChild,d=r.firstChild,[o,b]=u(d.nextSibling);o.nextSibling;const h=r.nextSibling,$=h.nextSibling,f=$.nextSibling,S=f.nextSibling,[x,C]=u(S.nextSibling);return a(r,()=>t.title,o,b),a(h,()=>t.company),a($,()=>t.startDate.toLocaleString(n(),{month:"short",year:"numeric"})),a(e,c(D,{get when(){return t.endDate},get fallback(){return s(E)},get children(){const m=s(M);return a(m,()=>t.endDate.toLocaleString(n(),{month:"short",year:"numeric"})),m}}),x,C),p(()=>y(e,"href",t.href)),e}})},z=t=>c(_.li,{initial:{opacity:0,y:-20},animate:{opacity:100,y:0},get hover(){return{rotate:2,transition:{easing:l({damping:.25})}}},get transition(){return{delay:.05,easing:l({damping:5})}},class:"link-card",get children(){const n=s(N),i=n.firstChild,e=i.nextSibling;return a(i,()=>t.title),a(e,()=>t.body),n}});export{j as Card,z as DetailCard,q as XpCard};