// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-str@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function n(r,e){var t,s,n,o,i,f,d;for(s=r.length,n=e.length,t=[],d=0,i=0;i<s&&!(d>=n);i++)for(o=r[i],f=d;f<n;f++)if(o===e[f]){d=f+1,t.push(o);break}return t}function o(r){var e,n,o;for(e=[],o=0;o<r.length;o++){if(null===(n=t(r[o])))return new TypeError(s("1fVJB",r[o]));e.push(n)}return e}function i(t,s,i){var f,d,l,h,m,p,u,a,v,g;if(d=arguments.length>2?i:{},(m=o(t))instanceof Error)throw m;if(s===t)p=m;else if((p=o(s))instanceof Error)throw p;for(p.sort(),a=m.length,h=[],v=0;v<a;v++)if(u=m[v],null!==(f=r(u)))for(f=n(p,f.sort()),g=0;g<f.length;g++)h.push(u,f[g]);if(d.enums){for(l=[],v=0;v<h.length;v++)l.push(e(h[v]));h=l}return h}export{i as default};
//# sourceMappingURL=index.mjs.map
