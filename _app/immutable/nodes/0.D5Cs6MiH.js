import{n as X,a as C,t as ie}from"../chunks/Dwpnxg0b.js";import{h as m,a as oe,b as J,z as M,O as le,H as fe,r as L,s as Y,c as $,f as E,ad as ce,d as Q,e as H,p as ue,ah as Z,G as ve,K as pe,x as B,as as W,C as F,at as _e,au as de,av as he,ag as ge,aw as xe,ax as j,ay as we,az as me,ab as ye,E as be,n as ke,aA as Ae,F as Ee,aB as Me,a0 as ee,o as P,q as N,t as S,a2 as q,a3 as te,a1 as Te,aC as G}from"../chunks/CEDFRN4g.js";import{s as Ne,e as K}from"../chunks/BXlLXRzU.js";import{i as Se}from"../chunks/BZfBn5s-.js";import{p as R,s as ae,b as T}from"../chunks/DN0gZhX8.js";import{s as Oe}from"../chunks/CPsr9bsP.js";import{w as O}from"../chunks/Dc4p1z7N.js";function ze(t,e){return e}function Ie(t,e,a,i){for(var r=[],l=e.length,v=0;v<l;v++)he(e[v].e,r,!0);var x=l>0&&r.length===0&&a!==null;if(x){var c=a.parentNode;ge(c),c.append(a),i.clear(),k(t,e[0].prev,e[l-1].next)}xe(r,()=>{for(var g=0;g<l;g++){var s=e[g];x||(i.delete(s.k),k(t,s.prev,s.next)),j(s.e,!x)}})}function $e(t,e,a,i,r,l=null){var v=t,x={flags:e,items:new Map,first:null};m&&oe();var c=null,g=!1,s=le(()=>{var u=a();return ve(u)?u:u==null?[]:Z(u)});J(()=>{var u=M(s),o=u.length;if(g&&o===0)return;g=o===0;let p=!1;if(m){var f=v.data===fe;f!==(o===0)&&(v=L(),Y(v),$(!1),p=!0)}if(m){for(var d=null,h,n=0;n<o;n++){if(E.nodeType===8&&E.data===ce){v=E,p=!0,$(!1);break}var _=u[n],y=i(_,n);h=se(E,x,d,null,_,y,n,r,e,a),x.items.set(y,h),d=h}o>0&&Y(L())}m||We(u,x,v,r,e,i,a),l!==null&&(o===0?c?Q(c):c=H(()=>l(v)):c!==null&&ue(c,()=>{c=null})),p&&$(!0),M(s)}),m&&(v=E)}function We(t,e,a,i,r,l,v){var x=t.length,c=e.items,g=e.first,s=g,u,o=null,p=[],f=[],d,h,n,_;for(_=0;_<x;_+=1){if(d=t[_],h=l(d,_),n=c.get(h),n===void 0){var y=s?s.e.nodes_start:a;o=se(y,e,o,o===null?e.first:o.next,d,h,_,i,r,v),c.set(h,o),p=[],f=[],s=o.next;continue}if(Re(n,d,_),n.e.f&W&&Q(n.e),n!==s){if(u!==void 0&&u.has(n)){if(p.length<f.length){var w=f[0],b;o=w.prev;var D=p[0],z=p[p.length-1];for(b=0;b<p.length;b+=1)U(p[b],w,a);for(b=0;b<f.length;b+=1)u.delete(f[b]);k(e,D.prev,z.next),k(e,o,D),k(e,z,w),s=w,o=z,_-=1,p=[],f=[]}else u.delete(n),U(n,s,a),k(e,n.prev,n.next),k(e,n,o===null?e.first:o.next),k(e,o,n),o=n;continue}for(p=[],f=[];s!==null&&s.k!==h;)s.e.f&W||(u??(u=new Set)).add(s),f.push(s),s=s.next;if(s===null)continue;n=s}p.push(n),o=n,s=n.next}if(s!==null||u!==void 0){for(var I=u===void 0?[]:Z(u);s!==null;)s.e.f&W||I.push(s),s=s.next;var re=I.length;if(re>0){var ne=null;Ie(e,I,ne,c)}}F.first=e.first&&e.first.e,F.last=o&&o.e}function Re(t,e,a,i){de(t.v,e),t.i=a}function se(t,e,a,i,r,l,v,x,c,g){var s=(c&we)!==0,u=(c&me)===0,o=s?u?pe(r):B(r):r,p=c&_e?B(v):v,f={i:p,v:o,k:l,a:null,e:null,prev:a,next:i};try{return f.e=H(()=>x(t,o,p,g),m),f.e.prev=a&&a.e,f.e.next=i&&i.e,a===null?e.first=f:(a.next=f,a.e.next=f.e),i!==null&&(i.prev=f,i.e.prev=f.e),f}finally{}}function U(t,e,a){for(var i=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,l=t.e.nodes_start;l!==i;){var v=ye(l);r.before(l),l=v}}function k(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ce(t,e,...a){var i=t,r=ke,l;J(()=>{r!==(r=e())&&(l&&(j(l),l=null),l=H(()=>r(i,...a)))},be),m&&(i=E)}function A(t,e,a,i){var r=t.__attributes??(t.__attributes={});m&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ae]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Pe(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var V=new Map;function Pe(t){var e=V.get(t.nodeName);if(e)return e;V.set(t.nodeName,e=[]);for(var a,i=t,r=Element.prototype;r!==i;){a=Me(i);for(var l in a)a[l].set&&e.push(l);i=Ee(i)}return e}function He(t,e,a){var i=t.__className,r=De(e);m&&t.getAttribute("class")===r?t.__className=r:(i!==r||m&&t.getAttribute("class")!==r)&&(r===""?t.removeAttribute("class"):t.setAttribute("class",r),t.__className=r)}function De(t,e){return(t??"")+""}const Le=!0,et=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"})),Ye=()=>{const t=Oe;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},Be={subscribe(t){return Ye().page.subscribe(t)}};var Fe=X('<a class="svelte-1axkw1o"><text role="link" class="menu-text svelte-1axkw1o" x="60" text-anchor="middle" font-size="12" cursor="pointer"> </text></a>'),qe=X('<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="59" fill="#1d1b1d" stroke="#a7a5a9" stroke-width="1" class="svelte-1axkw1o"></circle><!><a href="/" class="svelte-1axkw1o"><text role="link" class="menu-text svelte-1axkw1o" x="60" text-anchor="middle" fill="#a7a5a9" font-size="6" cursor="pointer">Home</text></a></svg>');function Ge(t,e){ee(e,!0);const[a,i]=ae(),r=()=>T(Be,"$page",a);let l=R(e,"pageWidth",3,0);R(e,"ratio",3,5);let v=R(e,"isOpen",3,!1),x=[{link:"/about",text:"about",fill:"#0c424b"},{link:"/projects",text:"projects",fill:"#4b3f0c"},{link:"/contact",text:"contact",fill:"#0c4b28"}],c=x.map((f,d)=>35+25*d);function g(f){const _=f/1200;return 200+150*(1/(1+Math.exp(-6*(_-1))))}var s=qe(),u=P(N(s));$e(u,17,()=>x,ze,(f,d,h)=>{var n=Fe(),_=N(n),y=N(_,!0);S(_),S(n),q(()=>{A(n,"href",M(d).link),A(_,"y",c[h]),A(_,"fill",r().url.pathname==M(d).link?M(d).fill:"#a7a5a9"),Ne(y,M(d).text)}),C(f,n)});var o=P(u),p=N(o);S(o),S(s),q((f,d,h)=>{He(s,`menu ${(v()?"animated-grow":"animated-shrink")??""} svelte-1axkw1o`),A(s,"style",`top: ${f??""}px; left: ${d??""}px; position: fixed`),A(s,"width",h),A(s,"height",h),A(p,"y",c[c.length-1]+25)},[()=>e.yPosition-g(l())/2,()=>e.xPosition-g(l())/2,()=>g(l())]),C(t,s),te(),i()}var Ke=ie("<!> <!>",1);function tt(t,e){ee(e,!0);const[a,i]=ae(),r=()=>T(c,"$showMenu",a),l=()=>T(g,"$showMenuOnce",a),v=()=>T(s,"$position",a),x=()=>T(u,"$pageWidth",a);let c=O(!1),g=O(!1),s=O({x:0,y:0}),u=O(window.innerWidth);const o=6,p=w=>{g.set(!0),r()?d():(s.set({x:w.clientX,y:w.clientY}),c.set(!r()))},f=()=>{u.set(window.innerWidth)},d=w=>{r()&&c.set(!1)};var h=Ke();K("resize",G,f),K("click",G,p);var n=Te(h);Ce(n,()=>e.children);var _=P(n,2);{var y=w=>{Ge(w,{get xPosition(){return v().x},get yPosition(){return v().y},get pageWidth(){return x()},get isOpen(){return r()},ratio:o})};Se(_,w=>{l()&&w(y)})}C(t,h),te(),i()}export{tt as component,et as universal};
