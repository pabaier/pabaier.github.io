import{S as A,v as G,w as K,x as P,y as $,z as y,U as _,A as o,B as L,C as z,D as V,F as Z,G as F,I as J,J as Q,n as B,K as C,L as W,M as X,N as q,O as H,P as k,Q as p,j as Y,R as ee,T as re,l as ne,V as te,W as ie,X as ae}from"./CEDFRN4g.js";import{s as fe,g as ue}from"./Dc4p1z7N.js";function O(r,s=null,d){if(typeof r!="object"||r===null||A in r)return r;const l=Z(r);if(l!==G&&l!==K)return r;var a=new Map,c=F(r),I=P(0);c&&a.set("length",P(r.length));var S;return new Proxy(r,{defineProperty(f,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&V();var i=a.get(e);return i===void 0?(i=P(n.value),a.set(e,i)):o(i,O(n.value,S)),!0},deleteProperty(f,e){var n=a.get(e);if(n===void 0)e in f&&a.set(e,P(_));else{if(c&&typeof e=="string"){var i=a.get("length"),t=Number(e);Number.isInteger(t)&&t<i.v&&o(i,t)}o(n,_),j(I)}return!0},get(f,e,n){var b;if(e===A)return r;var i=a.get(e),t=e in f;if(i===void 0&&(!t||(b=L(f,e))!=null&&b.writable)&&(i=P(O(t?f[e]:_,S)),a.set(e,i)),i!==void 0){var u=y(i);return u===_?void 0:u}return Reflect.get(f,e,n)},getOwnPropertyDescriptor(f,e){var n=Reflect.getOwnPropertyDescriptor(f,e);if(n&&"value"in n){var i=a.get(e);i&&(n.value=y(i))}else if(n===void 0){var t=a.get(e),u=t==null?void 0:t.v;if(t!==void 0&&u!==_)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(f,e){var u;if(e===A)return!0;var n=a.get(e),i=n!==void 0&&n.v!==_||Reflect.has(f,e);if(n!==void 0||z!==null&&(!i||(u=L(f,e))!=null&&u.writable)){n===void 0&&(n=P(i?O(f[e],S):_),a.set(e,n));var t=y(n);if(t===_)return!1}return i},set(f,e,n,i){var m;var t=a.get(e),u=e in f;if(c&&e==="length")for(var b=n;b<t.v;b+=1){var w=a.get(b+"");w!==void 0?o(w,_):b in f&&(w=P(_),a.set(b+"",w))}t===void 0?(!u||(m=L(f,e))!=null&&m.writable)&&(t=P(void 0),o(t,O(n,S)),a.set(e,t)):(u=t.v!==_,o(t,O(n,S)));var g=Reflect.getOwnPropertyDescriptor(f,e);if(g!=null&&g.set&&g.set.call(i,n),!u){if(c&&typeof e=="string"){var N=a.get("length"),D=Number(e);Number.isInteger(D)&&D>=N.v&&o(N,D+1)}j(I)}return!0},ownKeys(f){y(I);var e=Reflect.ownKeys(f).filter(t=>{var u=a.get(t);return u===void 0||u.v!==_});for(var[n,i]of a)i.v!==_&&!(n in f)&&e.push(n);return e},setPrototypeOf(){$()}})}function j(r,s=1){o(r,r.v+s)}let h=!1,U=Symbol();function de(r,s,d){const l=d[s]??(d[s]={store:null,source:C(void 0),unsubscribe:B});if(l.store!==r&&!(U in d))if(l.unsubscribe(),l.store=r??null,r==null)l.source.v=void 0,l.unsubscribe=B;else{var a=!0;l.unsubscribe=fe(r,c=>{a?l.source.v=c:o(l.source,c)}),a=!1}return r&&U in d?ue(r):y(l.source)}function _e(){const r={};function s(){J(()=>{for(var d in r)r[d].unsubscribe();Q(r,U,{enumerable:!1,value:!0})})}return[r,s]}function se(r){var s=h;try{return h=!1,[r(),h]}finally{h=s}}function ce(r,s,d,l){var M;var a=(d&ie)!==0,c=!ne||(d&te)!==0,I=(d&ee)!==0,S=(d&ae)!==0,f=!1,e;I?[e,f]=se(()=>r[s]):e=r[s];var n=A in r||re in r,i=I&&(((M=L(r,s))==null?void 0:M.set)??(n&&s in r&&(v=>r[s]=v)))||void 0,t=l,u=!0,b=!1,w=()=>(b=!0,u&&(u=!1,S?t=Y(l):t=l),t);e===void 0&&l!==void 0&&(i&&c&&W(),e=w(),i&&i(e));var g;if(c)g=()=>{var v=r[s];return v===void 0?w():(u=!0,b=!1,v)};else{var N=(a?q:H)(()=>r[s]);N.f|=X,g=()=>{var v=y(N);return v!==void 0&&(t=void 0),v===void 0?t:v}}if(!(d&k))return g;if(i){var D=r.$$legacy;return function(v,R){return arguments.length>0?((!c||!R||D||f)&&i(R?g():v),v):g()}}var m=!1,x=C(e),E=q(()=>{var v=g(),R=y(x);return m?(m=!1,R):x.v=v});return a||(E.equals=p),function(v,R){if(arguments.length>0){const T=R?y(E):c&&I?O(v):v;return E.equals(T)||(m=!0,o(x,T),b&&t!==void 0&&(t=T),Y(()=>y(E))),v}return y(E)}}export{O as a,de as b,ce as p,_e as s};
