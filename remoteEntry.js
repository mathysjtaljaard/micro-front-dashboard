var dashboard;(()=>{"use strict";var e,r,t,o,n,a,i,u,l,d,s,f,h,p,c={199:(e,r,t)=>{var o={"./App":()=>Promise.all([t.e(950),t.e(712)]).then((()=>()=>t(712))),"./Dashboard":()=>Promise.all([t.e(950),t.e(615)]).then((()=>()=>t(615)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},v={};function m(e){var r=v[e];if(void 0!==r)return r.exports;var t=v[e]={id:e,exports:{}};return c[e](t,t.exports,m),t.exports}m.m=c,m.c=v,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+".js",m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="dashboard:",m.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var s=l[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,m.nc&&i.setAttribute("nonce",m.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[o];var f=(r,o)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{m.S={};var e={},r={};m.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var a=m.S[t],i="dashboard",u=(e,r,t,o)=>{var n=a[e]=a[e]||{},u=n[r];(!u||!u.loaded&&(!o!=!u.eager?o:i>u.from))&&(n[r]={get:t,from:i,eager:!!o})},l=[];return"default"===t&&(u("react-dom","17.0.2",(()=>Promise.all([m.e(935),m.e(950)]).then((()=>()=>m(935))))),u("react","17.0.2",(()=>m.e(294).then((()=>()=>m(294)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),m.p="https://mathysjtaljaard.github.io/micro-front-dashboard/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var i=r[o],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var d,s,f=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(s=(typeof(d=r[i]))[0]))return!l||("u"==f?u>o&&!n:""==f!=n);if("u"==s){if(!l||"u"!=f)return!1}else if(l)if(f==s)if(u<=o){if(d!=e[u])return!1}else{if(n?d>e[u]:d<e[u])return!1;d!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(n||u<=o)return!1;l=!1,u--}else{if(u<=o||s<f!=n)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var h=[],p=h.pop.bind(h);for(i=1;i<e.length;i++){var c=e[i];h.push(1==c?p()|p():2==c?p()&p():c?a(c,r):!p())}return!!p()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},u=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",l=(e,r,t,o)=>{var n=i(e,t);return a(o,n)||"undefined"!=typeof console&&console.warn&&console.warn(u(e,t,n,o)),d(e[t][n])},d=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,o,n){var a=m.I(r);return a&&a.then?a.then(e.bind(e,r,m.S[r],t,o,n)):e(0,m.S[r],t,o,n)})(((e,r,t,o,n)=>r&&m.o(r,t)?l(r,0,t,o):n())),f={},h={950:()=>s("default","react",[1,17,0,2],(()=>m.e(294).then((()=>()=>m(294))))),181:()=>s("default","react-dom",[1,17,0,2],(()=>m.e(935).then((()=>()=>m(935)))))},p={712:[181],950:[950]},m.f.consumes=(e,r)=>{m.o(p,e)&&p[e].forEach((e=>{if(m.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}},o=r=>{delete f[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var n=h[e]();n.then?r.push(f[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}))},(()=>{var e={966:0};m.f.j=(r,t)=>{var o=m.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(950!=r){var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=m.p+m.u(r),i=new Error;m.l(a,(t=>{if(m.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var o,n,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(o in i)m.o(i,o)&&(m.m[o]=i[o]);u&&u(m)}for(r&&r(t);l<a.length;l++)n=a[l],m.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkdashboard=self.webpackChunkdashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),m.nc=void 0;var b=m(199);dashboard=b})();