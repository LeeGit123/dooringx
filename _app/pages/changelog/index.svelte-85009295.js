import{S as e,i as t,s as n,e as s,k as a,j as o,M as c,c as r,d as i,n as l,m as f,b as u,J as d,f as m,o as h,x as p,u as v,v as y,D as $}from"../../chunks/vendor-fc93f41b.js";import{b as g}from"../../chunks/paths-45dac81d.js";import{D as w}from"../../chunks/index-0a7f12f8.js";function b(e){let t,n,$,g,b,j;return b=new w({props:{active:A,sections:e[0]}}),{c(){t=s("meta"),n=s("meta"),$=s("meta"),g=a(),o(b.$$.fragment),this.h()},l(e){const s=c('[data-svelte="svelte-d60o3t"]',document.head);t=r(s,"META",{name:!0,content:!0}),n=r(s,"META",{name:!0,content:!0}),$=r(s,"META",{name:!0,content:!0}),s.forEach(i),g=l(e),f(b.$$.fragment,e),this.h()},h(){document.title="API Docs • Svelte",u(t,"name","twitter:title"),u(t,"content","Svelte API docs"),u(n,"name","twitter:description"),u(n,"content","Cybernetically enhanced web apps"),u($,"name","Description"),u($,"content","Cybernetically enhanced web apps")},m(e,s){d(document.head,t),d(document.head,n),d(document.head,$),m(e,g,s),h(b,e,s),j=!0},p(e,[t]){const n={};1&t&&(n.sections=e[0]),b.$set(n)},i(e){j||(p(b.$$.fragment,e),j=!0)},o(e){v(b.$$.fragment,e),j=!1},d(e){i(t),i(n),i($),e&&i(g),y(b,e)}}}var j=function(e,t,n,s){return new(n||(n=Promise))((function(a,o){function c(e){try{i(s.next(e))}catch(t){o(t)}}function r(e){try{i(s.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,r)}i((s=s.apply(e,t||[])).next())}))};const x=({fetch:e})=>j(void 0,void 0,void 0,(function*(){const t=`${g}/api.json?name=changelog`,n=yield e(t);if(n.ok){return{props:{files:yield n.json()}}}const{message:s}=yield n.json();return{error:new Error(s)}}));let A="";function E(e,t,n){let{files:s}=t;const a=$("lang");let o=new Map;return a.subscribe((e=>{n(0,o=new Map),s.filter((t=>{const n=t.file.split(".");return Array.isArray(n)&&n.length>1&&"EN"===n[n.length-2]?"en"===e:"cn"===e})).forEach((e=>{const t=e.sTitle||"default",n=o.get(t);n?n.push(e):o.set(t,[e])}))})),e.$$set=e=>{"files"in e&&n(1,s=e.files)},[o,s]}export default class extends e{constructor(e){super(),t(this,e,E,b,n,{files:1})}}export{x as load};