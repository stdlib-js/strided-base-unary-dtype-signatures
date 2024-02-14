// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-safe-casts@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-str@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(e,r){var t,s,n,i,o,d,l;for(s=e.length,n=r.length,t=[],l=0,o=0;o<s&&!(l>=n);o++)for(i=e[o],d=l;d<n;d++)if(i===r[d]){l=d+1,t.push(i);break}return t}function i(e){var r,n,i;for(r=[],i=0;i<e.length;i++){if(null===(n=t(e[i])))return new TypeError(s("invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.",e[i]));r.push(n)}return r}function o(t,s,o){var d,l,f,a,h,m,p,u,v,g;if(l=arguments.length>2?o:{},(h=i(t))instanceof Error)throw h;if(s===t)m=h;else if((m=i(s))instanceof Error)throw m;for(m.sort(),u=h.length,a=[],v=0;v<u;v++)if(p=h[v],null!==(d=e(p)))for(d=n(m,d.sort()),g=0;g<d.length;g++)a.push(p,d[g]);if(l.enums){for(f=[],v=0;v<a.length;v++)f.push(r(a[v]));a=f}return a}export{o as default};
//# sourceMappingURL=index.mjs.map
