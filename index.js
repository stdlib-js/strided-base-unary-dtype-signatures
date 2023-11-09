// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).signatures=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var c="function"==typeof Symbol?Symbol:void 0,a="function"==typeof c?c.toStringTag:"";var l,f=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[a],n=u(t,a);try{t[a]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[a]=e:delete t[a],r}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var b=Object.defineProperty;function g(t){return"number"==typeof t}function v(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function m(t,n,e){var r=!1,o=n-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+v(o):v(o)+t,r&&(t="-"+t)),t}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!g(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=m(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=m(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):d.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function j(t){return"string"==typeof t}var _=Math.abs,O=String.prototype.toLowerCase,x=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,T=/e-(\d)$/,P=/^(\d+)$/,I=/^(\d+)e/,k=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function F(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!g(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":_(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=S.call(e,V,"$1e"),e=S.call(e,A,"e"),e=S.call(e,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=S.call(e,E,"e+0$1"),e=S.call(e,T,"e-0$1"),t.alternate&&(e=S.call(e,P,"$1."),e=S.call(e,I,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===x.call(t.specifier)?x.call(e):O.call(e)}function N(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function B(t,n,e){var r=n-t.length;return r<0?t:t=e?t+N(r):N(r)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function X(t){var n,e,r,o,i,u,c,a,l;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(j(r=t[a]))u+=r;else{if(n=void 0!==r.precision,!(r=Y(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(o=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,C(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!C(r.arg)){if((i=parseInt(r.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(i)?String(r.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=F(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=B(r.arg,r.width,r.padRight)),u+=r.arg||"",c+=1}return u}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function W(t){var n,e,r,o;for(e=[],o=0,r=M.exec(t);r;)(n=t.slice(o,M.lastIndex-r[0].length)).length&&e.push(n),e.push(R(r)),o=M.lastIndex,r=M.exec(t);return(n=t.slice(o)).length&&e.push(n),e}function $(t){return"string"==typeof t}function H(t){var n,e,r;if(!$(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=W(t),(e=new Array(arguments.length))[0]=n,r=1;r<e.length;r++)e[r]=arguments[r];return X.apply(null,e)}var U,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,J=Z.__defineSetter__,q=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(q.call(t,n)||K.call(t,n)?(r=t.__proto__,t.__proto__=Z,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(t,n,e.get),u&&J&&J.call(t,n,e.set),t};var Q=U;function tt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nt(t){return"string"==typeof t}var et=String.prototype.valueOf;var rt=r();function ot(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function it(t){return nt(t)||ot(t)}function ut(t){return"number"==typeof t}tt(it,"isPrimitive",nt),tt(it,"isObject",ot);var ct=Number,at=ct.prototype.toString;var lt=r();function ft(t){return"object"==typeof t&&(t instanceof ct||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function yt(t){return ut(t)&&st(t)}function bt(t){return ft(t)&&st(t.valueOf())}function gt(t){return yt(t)||bt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(gt,"isPrimitive",yt),tt(gt,"isObject",bt);var vt=Number.POSITIVE_INFINITY,mt=ct.NEGATIVE_INFINITY,dt=Math.floor;function ht(t){return dt(t)===t}function wt(t){return t<vt&&t>mt&&ht(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function Ot(t){return jt(t)||_t(t)}tt(Ot,"isPrimitive",jt),tt(Ot,"isObject",_t);var xt=Object.prototype.propertyIsEnumerable;var St=!xt.call("beep","0");function Et(t,n){var e;return null!=t&&(!(e=xt.call(t,n))&&St&&it(t)?!yt(n=+n)&&jt(n)&&n>=0&&n<t.length:e)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var Pt=s?p:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Et(t,"callee")},It=Array.prototype.slice;function kt(t){return null!==t&&"object"==typeof t}tt(kt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Tt(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(kt));var At=Et((function(){}),"prototype"),Vt=!Et({toString:null},"toString");function Ft(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Nt(t,n,e){var r,o;if(!Ft(t)&&!nt(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!jt(e))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(gt(n)){for(;o<r;o++)if(gt(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=r();function Xt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Mt(t){return Lt(t)||Xt(t)}function Rt(){return new Function("return this;")()}tt(Mt,"isPrimitive",Lt),tt(Mt,"isObject",Xt);var Wt="object"==typeof self?self:null,$t="object"==typeof window?window:null,Ht="object"==typeof global?global:null,Ut="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Rt()}if(Ut)return Ut;if(Wt)return Wt;if($t)return $t;if(Ht)return Ht;throw new Error("unexpected error. Unable to resolve global object.")}(),Dt=Zt.document&&Zt.document.childNodes,zt=Int8Array;function Jt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Kt(t){var n,e,r,o;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=qt.exec(r.toString()))return n[1]}return kt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}tt(Jt,"REGEXP",qt);var Qt="function"==typeof Bt||"object"==typeof zt||"function"==typeof Dt?function(t){return Kt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Kt(t).toLowerCase():n};function tn(t){return t.constructor&&t.constructor.prototype===t}var nn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],en="undefined"==typeof window?void 0:window;var rn=function(){var t;if("undefined"===Qt(en))return!1;for(t in en)try{-1===Nt(nn,t)&&u(en,t)&&null!==en[t]&&"object"===Qt(en[t])&&tn(en[t])}catch(t){return!0}return!1}(),on="undefined"!=typeof window;var un,cn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];un=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return Pt(n)?t(It.call(n)):t(n)}:t:function(t){var n,e,r,o,i,c,a;if(o=[],Pt(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!kt(t))return o;e=At&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(Vt)for(n=function(t){if(!1===on&&!rn)return tn(t);try{return tn(t)}catch(t){return!1}}(t),a=0;a<cn.length;a++)c=cn[a],n&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var an=un;function ln(t){return Object.keys(Object(t))}var fn=void 0!==Object.keys;var pn="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function sn(){return pn&&"symbol"==typeof Symbol.toStringTag}var yn=Object.prototype.toString;var bn=Object.prototype.hasOwnProperty;function gn(t,n){return null!=t&&bn.call(t,n)}var vn="function"==typeof Symbol?Symbol.toStringTag:"";var mn,dn=sn()?function(t){var n,e,r;if(null==t)return yn.call(t);e=t[vn],n=gn(t,vn);try{t[vn]=void 0}catch(n){return yn.call(t)}return r=yn.call(t),n?t[vn]=e:delete t[vn],r}:function(t){return yn.call(t)};function hn(t){return"[object Arguments]"===dn(t)}mn=function(){return hn(arguments)}();var wn=mn,jn="function"==typeof Object.defineProperty?Object.defineProperty:null;var _n,On=Object.defineProperty,xn=Object.prototype,Sn=xn.toString,En=xn.__defineGetter__,Tn=xn.__defineSetter__,Pn=xn.__lookupGetter__,In=xn.__lookupSetter__;_n=function(){try{return jn({},"x",{}),!0}catch(t){return!1}}()?On:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===Sn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Sn.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(Pn.call(t,n)||In.call(t,n)?(r=t.__proto__,t.__proto__=xn,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&En&&En.call(t,n,e.get),u&&Tn&&Tn.call(t,n,e.set),t};var kn=_n;function An(t,n,e){kn(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Vn(t){return"string"==typeof t}var Fn=String.prototype.valueOf;var Nn=sn();function Bn(t){return"object"==typeof t&&(t instanceof String||(Nn?function(t){try{return Fn.call(t),!0}catch(t){return!1}}(t):"[object String]"===dn(t)))}function Ln(t){return Vn(t)||Bn(t)}function Cn(t){return"number"==typeof t}An(Ln,"isPrimitive",Vn),An(Ln,"isObject",Bn);var Gn=Number,Yn=Gn.prototype.toString;var Xn=sn();function Mn(t){return"object"==typeof t&&(t instanceof Gn||(Xn?function(t){try{return Yn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===dn(t)))}function Rn(t){return Cn(t)||Mn(t)}function Wn(t){return t!=t}function $n(t){return Cn(t)&&Wn(t)}function Hn(t){return Mn(t)&&Wn(t.valueOf())}function Un(t){return $n(t)||Hn(t)}An(Rn,"isPrimitive",Cn),An(Rn,"isObject",Mn),An(Un,"isPrimitive",$n),An(Un,"isObject",Hn);var Zn=Number.POSITIVE_INFINITY,Dn=Gn.NEGATIVE_INFINITY,zn=Math.floor;function Jn(t){return zn(t)===t}function qn(t){return t<Zn&&t>Dn&&Jn(t)}function Kn(t){return Cn(t)&&qn(t)}function Qn(t){return Mn(t)&&qn(t.valueOf())}function te(t){return Kn(t)||Qn(t)}An(te,"isPrimitive",Kn),An(te,"isObject",Qn);var ne=Object.prototype.propertyIsEnumerable;var ee=!ne.call("beep","0");function re(t,n){var e;return null!=t&&(!(e=ne.call(t,n))&&ee&&Ln(t)?!$n(n=+n)&&Kn(n)&&n>=0&&n<t.length:e)}var oe=Array.isArray?Array.isArray:function(t){return"[object Array]"===dn(t)};var ie=wn?hn:function(t){return null!==t&&"object"==typeof t&&!oe(t)&&"number"==typeof t.length&&Jn(t.length)&&t.length>=0&&t.length<=4294967295&&gn(t,"callee")&&!re(t,"callee")},ue=Array.prototype.slice;function ce(t){return null!==t&&"object"==typeof t}An(ce,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!oe(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(ce));var ae=re((function(){}),"prototype"),le=!re({toString:null},"toString");function fe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Jn(t.length)&&t.length>=0&&t.length<=9007199254740991}function pe(t,n,e){var r,o;if(!fe(t)&&!Vn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Kn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(Un(n)){for(;o<r;o++)if(Un(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var se=/./,ye="function"==typeof Object.defineProperty?Object.defineProperty:null;var be,ge=Object.defineProperty,ve=Object.prototype,me=ve.toString,de=ve.__defineGetter__,he=ve.__defineSetter__,we=ve.__lookupGetter__,je=ve.__lookupSetter__;be=function(){try{return ye({},"x",{}),!0}catch(t){return!1}}()?ge:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===me.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===me.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(we.call(t,n)||je.call(t,n)?(r=t.__proto__,t.__proto__=ve,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&de&&de.call(t,n,e.get),u&&he&&he.call(t,n,e.set),t};var _e=be;function Oe(t,n,e){_e(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function xe(t){return"boolean"==typeof t}var Se="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Ee(){return Se&&"symbol"==typeof Symbol.toStringTag}var Te=Object.prototype.toString;var Pe=Object.prototype.hasOwnProperty;var Ie="function"==typeof Symbol?Symbol.toStringTag:"";var ke=Ee()?function(t){var n,e,r,o,i;if(null==t)return Te.call(t);e=t[Ie],i=Ie,n=null!=(o=t)&&Pe.call(o,i);try{t[Ie]=void 0}catch(n){return Te.call(t)}return r=Te.call(t),n?t[Ie]=e:delete t[Ie],r}:function(t){return Te.call(t)},Ae=Boolean.prototype.toString;var Ve=Ee();function Fe(t){return"object"==typeof t&&(t instanceof Boolean||(Ve?function(t){try{return Ae.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===ke(t)))}function Ne(t){return xe(t)||Fe(t)}function Be(){return new Function("return this;")()}Oe(Ne,"isPrimitive",xe),Oe(Ne,"isObject",Fe);var Le="object"==typeof self?self:null,Ce="object"==typeof window?window:null,Ge="object"==typeof global?global:null;var Ye=function(t){if(arguments.length){if(!xe(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Be()}if(Le)return Le;if(Ce)return Ce;if(Ge)return Ge;throw new Error("unexpected error. Unable to resolve global object.")}(),Xe=Ye.document&&Ye.document.childNodes,Me=Int8Array;function Re(){return/^\s*function\s*([^(]*)/i}var We=/^\s*function\s*([^(]*)/i;function $e(t){var n,e,r,o;if(("Object"===(e=dn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=We.exec(r.toString()))return n[1]}return ce(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}An(Re,"REGEXP",We);var He="function"==typeof se||"object"==typeof Me||"function"==typeof Xe?function(t){return $e(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?$e(t).toLowerCase():n};function Ue(t){return t.constructor&&t.constructor.prototype===t}var Ze=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],De="undefined"==typeof window?void 0:window;var ze=function(){var t;if("undefined"===He(De))return!1;for(t in De)try{-1===pe(Ze,t)&&gn(De,t)&&null!==De[t]&&"object"===He(De[t])&&Ue(De[t])}catch(t){return!0}return!1}(),Je="undefined"!=typeof window;var qe,Ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];qe=fn?function(){return 2!==(ln(arguments)||"").length}(1,2)?function(t){return ie(t)?ln(ue.call(t)):ln(t)}:ln:function(t){var n,e,r,o,i,u,c;if(o=[],ie(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!gn(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!ce(t))return o;e=ae&&r}for(i in t)e&&"prototype"===i||!gn(t,i)||o.push(String(i));if(le)for(n=function(t){if(!1===Je&&!ze)return Ue(t);try{return Ue(t)}catch(t){return!1}}(t),c=0;c<Ke.length;c++)u=Ke[c],n&&"constructor"===u||!gn(t,u)||o.push(String(u));return o};var Qe=qe;function tr(t){return"function"===He(t)}var nr,er=Object.getPrototypeOf;nr=tr(Object.getPrototypeOf)?er:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===dn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var rr=nr;var or=Object.prototype;function ir(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!oe(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),rr(t))}(t),!n||!gn(t,"constructor")&&gn(n,"constructor")&&tr(n.constructor)&&"[object Function]"===dn(n.constructor)&&gn(n,"isPrototypeOf")&&tr(n.isPrototypeOf)&&(n===or||function(t){var n;for(n in t)if(!gn(t,n))return!1;return!0}(t)))}var ur="function"==typeof Object.defineProperty?Object.defineProperty:null;var cr,ar=Object.defineProperty,lr=Object.prototype,fr=lr.toString,pr=lr.__defineGetter__,sr=lr.__defineSetter__,yr=lr.__lookupGetter__,br=lr.__lookupSetter__;cr=function(){try{return ur({},"x",{}),!0}catch(t){return!1}}()?ar:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===fr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===fr.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(yr.call(t,n)||br.call(t,n)?(r=t.__proto__,t.__proto__=lr,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&pr&&pr.call(t,n,e.get),u&&sr&&sr.call(t,n,e.set),t};var gr=cr;function vr(t,n,e){gr(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var mr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function dr(){return mr.slice()}var hr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function wr(){return hr.slice()}function jr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function _r(t,n,e){gr(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function Or(t){return Object.keys(Object(t))}var xr=void 0!==Object.keys;var Sr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Er(){return Sr&&"symbol"==typeof Symbol.toStringTag}var Tr=Object.prototype.toString;var Pr=Object.prototype.hasOwnProperty;function Ir(t,n){return null!=t&&Pr.call(t,n)}var kr="function"==typeof Symbol?Symbol.toStringTag:"";var Ar,Vr=Er()?function(t){var n,e,r;if(null==t)return Tr.call(t);e=t[kr],n=Ir(t,kr);try{t[kr]=void 0}catch(n){return Tr.call(t)}return r=Tr.call(t),n?t[kr]=e:delete t[kr],r}:function(t){return Tr.call(t)};function Fr(t){return"[object Arguments]"===Vr(t)}Ar=function(){return Fr(arguments)}();var Nr=Ar;function Br(t){return"string"==typeof t}var Lr=String.prototype.valueOf;var Cr=Er();function Gr(t){return"object"==typeof t&&(t instanceof String||(Cr?function(t){try{return Lr.call(t),!0}catch(t){return!1}}(t):"[object String]"===Vr(t)))}function Yr(t){return Br(t)||Gr(t)}function Xr(t){return"number"==typeof t}vr(Yr,"isPrimitive",Br),vr(Yr,"isObject",Gr);var Mr=Number,Rr=Mr.prototype.toString;var Wr=Er();function $r(t){return"object"==typeof t&&(t instanceof Mr||(Wr?function(t){try{return Rr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Vr(t)))}function Hr(t){return Xr(t)||$r(t)}function Ur(t){return t!=t}function Zr(t){return Xr(t)&&Ur(t)}function Dr(t){return $r(t)&&Ur(t.valueOf())}function zr(t){return Zr(t)||Dr(t)}vr(Hr,"isPrimitive",Xr),vr(Hr,"isObject",$r),vr(zr,"isPrimitive",Zr),vr(zr,"isObject",Dr);var Jr=Number.POSITIVE_INFINITY,qr=Mr.NEGATIVE_INFINITY,Kr=Math.floor;function Qr(t){return Kr(t)===t}function to(t){return t<Jr&&t>qr&&Qr(t)}function no(t){return Xr(t)&&to(t)}function eo(t){return $r(t)&&to(t.valueOf())}function ro(t){return no(t)||eo(t)}vr(ro,"isPrimitive",no),vr(ro,"isObject",eo);var oo=Object.prototype.propertyIsEnumerable;var io=!oo.call("beep","0");function uo(t,n){var e;return null!=t&&(!(e=oo.call(t,n))&&io&&Yr(t)?!Zr(n=+n)&&no(n)&&n>=0&&n<t.length:e)}var co=Array.isArray?Array.isArray:function(t){return"[object Array]"===Vr(t)};var ao=Nr?Fr:function(t){return null!==t&&"object"==typeof t&&!co(t)&&"number"==typeof t.length&&Qr(t.length)&&t.length>=0&&t.length<=4294967295&&Ir(t,"callee")&&!uo(t,"callee")},lo=Array.prototype.slice;function fo(t){return null!==t&&"object"==typeof t}vr(fo,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!co(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(fo));var po=uo((function(){}),"prototype"),so=!uo({toString:null},"toString");function yo(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Qr(t.length)&&t.length>=0&&t.length<=9007199254740991}function bo(t,n,e){var r,o;if(!yo(t)&&!Br(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!no(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(zr(n)){for(;o<r;o++)if(zr(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var go=/./;function vo(){return new Function("return this;")()}var mo="object"==typeof self?self:null,ho="object"==typeof window?window:null,wo="object"==typeof global?global:null;var jo=function(t){if(arguments.length){if(!xe(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return vo()}if(mo)return mo;if(ho)return ho;if(wo)return wo;throw new Error("unexpected error. Unable to resolve global object.")}(),_o=jo.document&&jo.document.childNodes,Oo=Int8Array;function xo(){return/^\s*function\s*([^(]*)/i}var So=/^\s*function\s*([^(]*)/i;function Eo(t){var n,e,r,o;if(("Object"===(e=Vr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=So.exec(r.toString()))return n[1]}return fo(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}vr(xo,"REGEXP",So);var To="function"==typeof go||"object"==typeof Oo||"function"==typeof _o?function(t){return Eo(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Eo(t).toLowerCase():n};function Po(t){return t.constructor&&t.constructor.prototype===t}var Io=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ko="undefined"==typeof window?void 0:window;var Ao=function(){var t;if("undefined"===To(ko))return!1;for(t in ko)try{-1===bo(Io,t)&&Ir(ko,t)&&null!==ko[t]&&"object"===To(ko[t])&&Po(ko[t])}catch(t){return!0}return!1}(),Vo="undefined"!=typeof window;var Fo,No=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Fo=xr?function(){return 2!==(Or(arguments)||"").length}(1,2)?function(t){return ao(t)?Or(lo.call(t)):Or(t)}:Or:function(t){var n,e,r,o,i,u,c;if(o=[],ao(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!Ir(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!fo(t))return o;e=po&&r}for(i in t)e&&"prototype"===i||!Ir(t,i)||o.push(String(i));if(so)for(n=function(t){if(!1===Vo&&!Ao)return Po(t);try{return Po(t)}catch(t){return!1}}(t),c=0;c<No.length;c++)u=No[c],n&&"constructor"===u||!Ir(t,u)||o.push(String(u));return o};var Bo=Fo;vr(wr,"enum",jr),function(t,n){var e,r,o;for(e=Bo(n),o=0;o<e.length;o++)_r(t,r=e[o],n[r])}(wr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Lo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Co(){return{bool:Lo.bool,int8:Lo.int8,uint8:Lo.uint8,uint8c:Lo.uint8c,int16:Lo.int16,uint16:Lo.uint16,int32:Lo.int32,uint32:Lo.uint32,int64:Lo.int64,uint64:Lo.uint64,float32:Lo.float32,float64:Lo.float64,complex64:Lo.complex64,complex128:Lo.complex128,binary:Lo.binary,generic:Lo.generic,notype:Lo.notype,userdefined_type:Lo.userdefined_type}}vr(dr,"enum",Co),function(t,n){var e,r,o;for(e=Bo(n),o=0;o<e.length;o++)_r(t,r=e[o],n[r])}(dr,Co());var Go=function(t,n){var e,r,o,i,u,c,a,l=!0;if(!ce(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!ir(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(gn(n,"duplicates")&&!xe(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Qe(t)).length,u={},l)for(a=0;a<r;a++)gn(u,i=t[o=e[a]])?(c=u[i],oe(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(a=0;a<r;a++)u[t[o=e[a]]]=o;return u}(Co(),{duplicates:!1});var Yo={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Xo(){var t;return 0===arguments.length?Yo.all.slice():(t=Yo[arguments[0]])?t.slice():[]}function Mo(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ro(t,n,e){Q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}tt(Xo,"enum",Mo),function(t,n){var e,r,o;for(e=an(n),o=0;o<e.length;o++)Ro(t,r=e[o],n[r])}(Xo,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function $o(t){var n=typeof t;return"string"===n?null===function(t){var n=Wo[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Go[t];return"string"==typeof n?n:null}(t):null}var Ho,Uo={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Zo(){var t,n,e,r,o,i,u,c,a;for(e={},n=(t=an(Uo)).length,a=0;a<n;a++){for(o=t[a],u=Uo[o],r={},c=0;c<n;c++)r[i=t[c]]=u[i];e[o]=r}return e}function Do(){var t,n,e,r,o,i,u,c,a;for(e={},n=(t=an(Uo)).length,a=0;a<n;a++){for(o=t[a],u=Uo[o],r=[],c=0;c<n;c++)1===u[i=t[c]]&&r.push(i);e[o]=r}return e}function zo(t){return 0===arguments.length?Zo():(void 0===Ho&&(Ho=Do()),t=$o(t),u(Ho,t)?Ho[t].slice():null)}function Jo(t){return"function"===Qt(t)}var qo,Ko=Object,Qo=Object.getPrototypeOf;qo=Jo(Object.getPrototypeOf)?Qo:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ti=qo;var ni=Object.prototype;function ei(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Tt(t)}(t)&&(n=function(t){return null==t?null:(t=Ko(t),ti(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Jo(n.constructor)&&"[object Function]"===f(n.constructor)&&u(n,"isPrototypeOf")&&Jo(n.isPrototypeOf)&&(n===ni||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}function ri(t){return"boolean"==typeof t}var oi=Boolean.prototype.toString;var ii=r();function ui(t){return"object"==typeof t&&(t instanceof Ct||(ii?function(t){try{return oi.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function ci(t){return ri(t)||ui(t)}tt(ci,"isPrimitive",ri),tt(ci,"isObject",ui);var ai=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function li(){return ai.slice()}var fi={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function pi(){return{bool:fi.bool,int8:fi.int8,uint8:fi.uint8,uint8c:fi.uint8c,int16:fi.int16,uint16:fi.uint16,int32:fi.int32,uint32:fi.uint32,int64:fi.int64,uint64:fi.uint64,float32:fi.float32,float64:fi.float64,complex64:fi.complex64,complex128:fi.complex128,binary:fi.binary,generic:fi.generic,notype:fi.notype,userdefined_type:fi.userdefined_type}}tt(li,"enum",pi),function(t,n){var e,r,o;for(e=an(n),o=0;o<e.length;o++)Ro(t,r=e[o],n[r])}(li,pi());var si=function(t,n){var e,r,o,i,c,a,l,f=!0;if(!kt(t))throw new TypeError(H("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ei(n))throw new TypeError(H("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!ri(f=n.duplicates))throw new TypeError(H("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(e=an(t)).length,c={},f)for(l=0;l<r;l++)u(c,i=t[o=e[l]])?(a=c[i],Tt(a)?c[i].push(o):c[i]=[a,o]):c[i]=o;else for(l=0;l<r;l++)c[t[o=e[l]]]=o;return c}(pi(),{duplicates:!1});function yi(t){var n=si[t];return"string"==typeof n?n:null}var bi=pi();function gi(t){var n=bi[t];return"number"==typeof n?n:null}function vi(t){var n=typeof t;return"number"===n?yi(t)?t:null:"string"===n?gi(t):null}function mi(){var t,n=arguments,e=n[0],r="https://stdlib.io/e/"+e+"?";for(t=1;t<n.length;t++)r+="&arg[]="+encodeURIComponent(n[t]);return r}function di(t,n){var e,r,o,i,u,c,a;for(r=t.length,o=n.length,e=[],a=0,u=0;u<r&&!(a>=o);u++)for(i=t[u],c=a;c<o;c++)if(i===n[c]){a=c+1,e.push(i);break}return e}function hi(t){var n,e,r,o,i;for(n=[],r=0;r<t.length;r++){if(o=t[r],i=void 0,null===(e="string"===(i=typeof o)?gi(o)?o:null:"number"===i?yi(o):null))return new TypeError(mi("1fVJB",t[r]));n.push(e)}return n}return function(t,n,e){var r,o,i,u,c,a,l,f,p,s;if(o=arguments.length>2?e:{},(c=hi(t))instanceof Error)throw c;if(n===t)a=c;else if((a=hi(n))instanceof Error)throw a;for(a.sort(),f=c.length,u=[],p=0;p<f;p++)if(null!==(r=zo(l=c[p])))for(r=di(a,r.sort()),s=0;s<r.length;s++)u.push(l,r[s]);if(o.enums){for(i=[],p=0;p<u.length;p++)i.push(vi(u[p]));u=i}return u}}));
//# sourceMappingURL=index.js.map
