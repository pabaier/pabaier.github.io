import{a4 as b,a5 as E,a6 as I,C as R,I as H,a7 as M,J as P,G as W,a8 as S,a9 as Y,aa as j,ab as q,ac as m,c as w,s as A,a as B,f as p,ad as $,ae as G,af as J,ag as z,ah as F,ai as K,aj as Q,e as U,a0 as X,i as Z,h as L,a3 as x}from"./CEDFRN4g.js";import{b as rr}from"./Dwpnxg0b.js";const tr=["touchstart","touchmove"];function ar(r){return tr.includes(r)}function er(r){var t=I,e=R;b(null),E(null);try{return r()}finally{b(t),E(e)}}const ir=new Set,D=new Set;function sr(r,t,e,o={}){function s(a){if(o.capture||y.call(t,a),!a.cancelBubble)return er(()=>e==null?void 0:e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?M(()=>{t.addEventListener(r,s,o)}):t.addEventListener(r,s,o),s}function fr(r,t,e,o,s){var a={capture:o,passive:s},u=sr(r,t,e,a);(t===document.body||t===window||t===document)&&H(()=>{t.removeEventListener(r,u,a)})}function y(r){var O;var t=this,e=t.ownerDocument,o=r.type,s=((O=r.composedPath)==null?void 0:O.call(r))||[],a=s[0]||r.target,u=0,_=r.__root;if(_){var l=s.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=s.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(a=s[u]||r.target,a!==t){P(r,"currentTarget",{configurable:!0,get(){return a||e}});var T=I,f=R;b(null),E(null);try{for(var i,n=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+o];if(d!==void 0&&(!a.disabled||r.target===a))if(W(d)){var[V,...C]=d;V.apply(a,[r,...C])}else d.call(a,r)}catch(g){i?n.push(g):i=g}if(r.cancelBubble||c===t||c===null)break;a=c}if(i){for(let g of n)queueMicrotask(()=>{throw g});throw i}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}function cr(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e+"")}function nr(r,t){return k(r,t)}function lr(r,t){S(),t.intro=t.intro??!1;const e=t.target,o=L,s=p;try{for(var a=Y(e);a&&(a.nodeType!==8||a.data!==j);)a=q(a);if(!a)throw m;w(!0),A(a),B();const u=k(r,{...t,anchor:a});if(p===null||p.nodeType!==8||p.data!==$)throw G(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&J(),S(),z(e),w(!1),nr(r,t);throw u}finally{w(o),A(s)}}const v=new Map;function k(r,{target:t,anchor:e,props:o={},events:s,context:a,intro:u=!0}){S();var _=new Set,l=f=>{for(var i=0;i<f.length;i++){var n=f[i];if(!_.has(n)){_.add(n);var c=ar(n);t.addEventListener(n,y,{passive:c});var d=v.get(n);d===void 0?(document.addEventListener(n,y,{passive:c}),v.set(n,1)):v.set(n,d+1)}}};l(F(ir)),D.add(l);var h=void 0,T=K(()=>{var f=e??t.appendChild(Q());return U(()=>{if(a){X({});var i=Z;i.c=a}s&&(o.$$events=s),L&&rr(f,null),h=r(f,o)||{},L&&(R.nodes_end=p),a&&x()}),()=>{var c;for(var i of _){t.removeEventListener(i,y);var n=v.get(i);--n===0?(document.removeEventListener(i,y),v.delete(i)):v.set(i,n)}D.delete(l),f!==e&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(h,T),h}let N=new WeakMap;function dr(r,t){const e=N.get(r);return e?(N.delete(r),e(t)):Promise.resolve()}export{fr as e,lr as h,nr as m,cr as s,dr as u};
