// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return"number"==typeof e}function r(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function t(e,t,n){var i=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+r(o):r(o)+e,i&&(e="-"+e)),e}var n=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function o(r){var o,a,u;switch(r.specifier){case"b":o=2;break;case"o":o=8;break;case"x":case"X":o=16;break;default:o=10}if(a=r.arg,u=parseInt(a,10),!isFinite(u)){if(!e(a))throw new Error("invalid integer. Value: "+a);u=0}return u<0&&("u"===r.specifier||10!==o)&&(u=4294967295+u+1),u<0?(a=(-u).toString(o),r.precision&&(a=t(a,r.precision,r.padRight)),a="-"+a):(a=u.toString(o),u||r.precision?r.precision&&(a=t(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===o&&(r.alternate&&(a="0x"+a),a=r.specifier===i.call(r.specifier)?i.call(a):n.call(a)),8===o&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function a(e){return"string"==typeof e}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,c=String.prototype.replace,s=/e\+(\d)$/,y=/e-(\d)$/,p=/^(\d+)$/,h=/^(\d+)e/,g=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=c.call(n,w,"$1e"),n=c.call(n,m,"e"),n=c.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=c.call(n,s,"e+0$1"),n=c.call(n,y,"e-0$1"),r.alternate&&(n=c.call(n,p,"$1."),n=c.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function d(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function v(e,r,t){var n=r-e.length;return n<0?e:e=t?e+d(n):d(n)+e}var E=String.fromCharCode,A=isNaN,T=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,n,i,u,f,l,c,s,y;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(a(i=e[s]))l+=i;else{if(r=void 0!==i.precision,!(i=_(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),n=i.flags,y=0;y<n.length;y++)switch(u=n.charAt(y)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=n.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,A(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,A(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=o(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!A(i.arg)){if((f=parseInt(i.arg,10))<0||f>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=A(f)?String(i.arg):E(f)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=t(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=v(i.arg,i.width,i.padRight)),l+=i.arg||"",c+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=j.exec(e);n;)(r=e.slice(i,j.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=j.lastIndex,n=j.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function L(e){return"string"==typeof e}function R(e){var r,t,n;if(!L(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=k(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var S,B="function"==typeof Object.defineProperty?Object.defineProperty:null,I=Object.defineProperty,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,P=C.__lookupGetter__,U=C.__lookupSetter__;S=function(){try{return B({},"x",{}),!0}catch(e){return!1}}()?I:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var N=S;function Y(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return W&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&Z.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof z?z.toStringTag:"",q=$()?function(e){var r,t,n;if(null==e)return G.call(e);t=e[J],r=X(e,J);try{e[J]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[J]=t:delete e[J],n}:function(e){return G.call(e)},D=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function H(e){return null!==e&&"object"==typeof e}function K(e){return H(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Q(){return/^\s*function\s*([^(]*)/i}Y(H,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!D(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(H));var ee=/^\s*function\s*([^(]*)/i;function re(e){var r,t,n;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ee.exec(n.toString()))return r[1]}return K(e)?"Buffer":t}Y(Q,"REGEXP",ee);var te={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},ne="function"==typeof Float64Array,ie="function"==typeof Float64Array?Float64Array:null,oe="function"==typeof Float64Array?Float64Array:void 0,ae=function(){var e,r,t;if("function"!=typeof ie)return!1;try{r=new ie([1,3.14,-3.14,NaN]),t=r,e=(ne&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")},ue="function"==typeof Float32Array,fe=Number.POSITIVE_INFINITY,le="function"==typeof Float32Array?Float32Array:null,ce="function"==typeof Float32Array?Float32Array:void 0,se=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le([1,3.14,-3.14,5e40]),t=r,e=(ue&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===fe}catch(r){e=!1}return e}()?ce:function(){throw new Error("not implemented")},ye="function"==typeof Uint32Array,pe="function"==typeof Uint32Array?Uint32Array:null,he="function"==typeof Uint32Array?Uint32Array:void 0,ge=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ye&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?he:function(){throw new Error("not implemented")},me="function"==typeof Int32Array,we="function"==typeof Int32Array?Int32Array:null,be="function"==typeof Int32Array?Int32Array:void 0,de=function(){var e,r,t;if("function"!=typeof we)return!1;try{r=new we([1,3.14,-3.14,2147483648]),t=r,e=(me&&t instanceof Int32Array||"[object Int32Array]"===q(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?be:function(){throw new Error("not implemented")},ve="function"==typeof Uint16Array,Ee="function"==typeof Uint16Array?Uint16Array:null,Ae="function"==typeof Uint16Array?Uint16Array:void 0,Te=function(){var e,r,t;if("function"!=typeof Ee)return!1;try{r=new Ee(r=[1,3.14,-3.14,65536,65537]),t=r,e=(ve&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")},_e="function"==typeof Int16Array,xe="function"==typeof Int16Array?Int16Array:null,je="function"==typeof Int16Array?Int16Array:void 0,Ve=function(){var e,r,t;if("function"!=typeof xe)return!1;try{r=new xe([1,3.14,-3.14,32768]),t=r,e=(_e&&t instanceof Int16Array||"[object Int16Array]"===q(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?je:function(){throw new Error("not implemented")},ke="function"==typeof Uint8Array,Le="function"==typeof Uint8Array?Uint8Array:null,Re="function"==typeof Uint8Array?Uint8Array:void 0,Se=function(){var e,r,t;if("function"!=typeof Le)return!1;try{r=new Le(r=[1,3.14,-3.14,256,257]),t=r,e=(ke&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Re:function(){throw new Error("not implemented")},Be="function"==typeof Uint8ClampedArray,Ie="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Ce="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Fe=function(){var e,r,t;if("function"!=typeof Ie)return!1;try{r=new Ie([-1,0,1,3.14,4.99,255,256]),t=r,e=(Be&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===q(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ce:function(){throw new Error("not implemented")},Oe="function"==typeof Int8Array,Me="function"==typeof Int8Array?Int8Array:null,Pe="function"==typeof Int8Array?Int8Array:void 0,Ue=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me([1,3.14,-3.14,128]),t=r,e=(Oe&&t instanceof Int8Array||"[object Int8Array]"===q(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Pe:function(){throw new Error("not implemented")};function Ne(e){return"number"==typeof e}var Ye=Number,We=Ye.prototype.toString,$e=$();function Ge(e){return"object"==typeof e&&(e instanceof Ye||($e?function(e){try{return We.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Ze(e){return Ne(e)||Ge(e)}Y(Ze,"isPrimitive",Ne),Y(Ze,"isObject",Ge);var Xe=Ye.NEGATIVE_INFINITY,ze=Math.floor;function Je(e){return ze(e)===e}function qe(e){return e<fe&&e>Xe&&Je(e)}function De(e){return Ne(e)&&qe(e)}function He(e){return Ge(e)&&qe(e.valueOf())}function Ke(e){return De(e)||He(e)}function Qe(e){return De(e)&&e>=0}function er(e){return He(e)&&e.valueOf()>=0}function rr(e){return Qe(e)||er(e)}function tr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=4294967295}function nr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=9007199254740991}Y(Ke,"isPrimitive",De),Y(Ke,"isObject",He),Y(rr,"isPrimitive",Qe),Y(rr,"isObject",er);var ir="function"==typeof ArrayBuffer;function or(e){return ir&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===q(e)}function ar(e){return"object"==typeof e&&null!==e&&!D(e)}var ur=/./;function fr(e){return"boolean"==typeof e}var lr=Boolean,cr=Boolean.prototype.toString,sr=$();function yr(e){return"object"==typeof e&&(e instanceof lr||(sr?function(e){try{return cr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function pr(e){return fr(e)||yr(e)}function hr(){return new Function("return this;")()}Y(pr,"isPrimitive",fr),Y(pr,"isObject",yr);var gr="object"==typeof self?self:null,mr="object"==typeof window?window:null,wr="object"==typeof globalThis?globalThis:null,br=function(e){if(arguments.length){if(!fr(e))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return hr()}if(wr)return wr;if(gr)return gr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=br.document&&br.document.childNodes,vr=Int8Array,Er="function"==typeof ur||"object"==typeof vr||"function"==typeof dr?function(e){return re(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?re(e).toLowerCase():r};function Ar(e){return"function"===Er(e)}function Tr(e,r){if(!(this instanceof Tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ne(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ne(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Tr,"BYTES_PER_ELEMENT",8),Y(Tr.prototype,"BYTES_PER_ELEMENT",8),Y(Tr.prototype,"byteLength",16),Y(Tr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Tr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var _r="function"==typeof Math.fround?Math.fround:null,xr=new se(1),jr="function"==typeof _r?_r:function(e){return xr[0]=e,xr[0]};function Vr(e,r){if(!(this instanceof Vr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ne(e))throw new TypeError(R("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ne(r))throw new TypeError(R("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:jr(e)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:jr(r)}),this}function kr(e){return e instanceof Tr||e instanceof Vr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Lr(e){return Je(e/2)}function Rr(){return"function"==typeof z&&"symbol"==typeof z("foo")&&X(z,"iterator")&&"symbol"==typeof z.iterator}Y(Vr,"BYTES_PER_ELEMENT",4),Y(Vr.prototype,"BYTES_PER_ELEMENT",4),Y(Vr.prototype,"byteLength",8),Y(Vr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Vr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Sr=Rr()?Symbol.iterator:null;function Br(e,r,t){N(e,r,{configurable:!1,enumerable:!1,get:t})}function Ir(e){return e.re}function Cr(e){return e.im}function Fr(e,r){return new se(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Or(e,r){return new ae(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Mr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Pr(e){var r=Mr[e];return"function"==typeof r?r:Mr.default}var Ur={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Nr(e){var r=Ur[e];return"function"==typeof r?r:Ur.default}function Yr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(tr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(R("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Ir(n),Cr(n))}return r}function Wr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,tr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ir(o),Cr(o))}return n}function $r(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Ir(n),e[o+1]=Cr(n),o+=2}return e}var Gr=2*se.BYTES_PER_ELEMENT,Zr=Rr();function Xr(e){return e instanceof Dr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function zr(e){return e===Dr||"Complex128Array"===e.name}function Jr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Gr}function qr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Gr}function Dr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Dr))return 0===r?new Dr:1===r?new Dr(arguments[0]):2===r?new Dr(arguments[0],arguments[1]):new Dr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new se(0);else if(1===r)if(Qe(arguments[0]))t=new se(2*arguments[0]);else if(nr(arguments[0]))if((n=(t=arguments[0]).length)&&D(t)&&kr(t[0])){if(null===(t=$r(new se(2*n),t))){if(!Lr(n))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(arguments[0])}}else{if(Jr(t))t=Fr(t,0);else if(qr(t))t=Or(t,0);else if(!Lr(n))throw new RangeError(R("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(t)}else if(or(arguments[0])){if(!Je((t=arguments[0]).byteLength/Gr))throw new RangeError(R("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Gr,t.byteLength));t=new se(t)}else{if(!ar(arguments[0]))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Zr)throw new TypeError(R("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ar(t[Sr]))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ar((t=t[Sr]()).next))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Yr(t))instanceof Error)throw t;t=new se(t)}else{if(!or(t=arguments[0]))throw new TypeError(R("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Qe(e=arguments[1]))throw new TypeError(R("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Je(e/Gr))throw new RangeError(R("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Gr,e));if(2===r){if(!Je((n=t.byteLength-e)/Gr))throw new RangeError(R("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Gr,n));t=new se(t,e)}else{if(!Qe(n=arguments[2]))throw new TypeError(R("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Gr>t.byteLength-e)throw new RangeError(R("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Gr));t=new se(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function Hr(e){return e.re}function Kr(e){return e.im}function Qr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(tr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(R("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Hr(n),Kr(n))}return r}function et(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,tr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Hr(o),Kr(o))}return n}function rt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Hr(n),e[o+1]=Kr(n),o+=2}return e}Y(Dr,"BYTES_PER_ELEMENT",Gr),Y(Dr,"name","Complex64Array"),Y(Dr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ar(n=arguments[1]))throw new TypeError(R("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Xr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[y]=Ir(c),o[y+1]=Cr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(nr(e)){if(n){for(f=e.length,u=e.get&&e.set?Nr("default"):Pr("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Lr(f))throw new RangeError(R("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[y]=Ir(c),o[y+1]=Cr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ar(e)&&Zr&&Ar(e[Sr])){if(!Ar((o=e[Sr]()).next))throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Wr(o,n,r):Yr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(Dr,"of",(function(){var e,r;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Br(Dr.prototype,"buffer",(function(){return this._buffer.buffer})),Br(Dr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Br(Dr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Dr.prototype,"BYTES_PER_ELEMENT",Dr.BYTES_PER_ELEMENT),Y(Dr.prototype,"copyWithin",(function(e,r){if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(Dr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Vr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Sr&&Y(t,Sr,(function(){return r.entries()})),t})),Y(Dr.prototype,"get",(function(e){var r;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(R("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Vr((r=this._buffer)[e*=2],r[e+1])})),Br(Dr.prototype,"length",(function(){return this._length})),Y(Dr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Qe(t=arguments[1]))throw new TypeError(R("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(R("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ir(e),void(n[t+1]=Cr(e))}if(Xr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!nr(e))throw new TypeError(R("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Lr(a))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ir(u),n[t+1]=Cr(u),t+=2}}));var tt=2*ae.BYTES_PER_ELEMENT,nt=Rr();function it(e){return e instanceof ft||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ot(e){return e===ft||"Complex64Array"===e.name}function at(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===tt/2}function ut(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===tt}function ft(){var e,r,t,n;if(r=arguments.length,!(this instanceof ft))return 0===r?new ft:1===r?new ft(arguments[0]):2===r?new ft(arguments[0],arguments[1]):new ft(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ae(0);else if(1===r)if(Qe(arguments[0]))t=new ae(2*arguments[0]);else if(nr(arguments[0]))if((n=(t=arguments[0]).length)&&D(t)&&kr(t[0])){if(null===(t=rt(new ae(2*n),t))){if(!Lr(n))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ae(arguments[0])}}else{if(at(t))t=Fr(t,0);else if(ut(t))t=Or(t,0);else if(!Lr(n))throw new RangeError(R("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ae(t)}else if(or(arguments[0])){if(!Je((t=arguments[0]).byteLength/tt))throw new RangeError(R("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",tt,t.byteLength));t=new ae(t)}else{if(!ar(arguments[0]))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===nt)throw new TypeError(R("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ar(t[Sr]))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ar((t=t[Sr]()).next))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Qr(t))instanceof Error)throw t;t=new ae(t)}else{if(!or(t=arguments[0]))throw new TypeError(R("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Qe(e=arguments[1]))throw new TypeError(R("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Je(e/tt))throw new RangeError(R("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",tt,e));if(2===r){if(!Je((n=t.byteLength-e)/tt))throw new RangeError(R("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",tt,n));t=new ae(t,e)}else{if(!Qe(n=arguments[2]))throw new TypeError(R("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*tt>t.byteLength-e)throw new RangeError(R("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*tt));t=new ae(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ft,"BYTES_PER_ELEMENT",tt),Y(ft,"name","Complex128Array"),Y(ft,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ar(n=arguments[1]))throw new TypeError(R("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(it(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[y]=Hr(c),o[y+1]=Kr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(nr(e)){if(n){for(f=e.length,u=e.get&&e.set?Nr("default"):Pr("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Lr(f))throw new RangeError(R("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[y]=Hr(c),o[y+1]=Kr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ar(e)&&nt&&Ar(e[Sr])){if(!Ar((o=e[Sr]()).next))throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?et(o,n,r):Qr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(ft,"of",(function(){var e,r;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Br(ft.prototype,"buffer",(function(){return this._buffer.buffer})),Br(ft.prototype,"byteLength",(function(){return this._buffer.byteLength})),Br(ft.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ft.prototype,"BYTES_PER_ELEMENT",ft.BYTES_PER_ELEMENT),Y(ft.prototype,"copyWithin",(function(e,r){if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(ft.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Tr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Sr&&Y(t,Sr,(function(){return r.entries()})),t})),Y(ft.prototype,"get",(function(e){var r;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(R("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Tr((r=this._buffer)[e*=2],r[e+1])})),Br(ft.prototype,"length",(function(){return this._length})),Y(ft.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Qe(t=arguments[1]))throw new TypeError(R("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(R("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Hr(e),void(n[t+1]=Kr(e))}if(it(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*tt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ae(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!nr(e))throw new TypeError(R("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Lr(a))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*tt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ae(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Hr(u),n[t+1]=Kr(u),t+=2}}));var lt=[ae,se,de,ge,Ve,Te,Ue,Se,Fe,Dr,ft],ct=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],st=ct.length;function yt(e){var r;if(D(e))return"generic";if(K(e))return null;for(r=0;r<st;r++)if(e instanceof lt[r])return ct[r];return te[re(e)]||null}var pt={float64:ae,float32:se,generic:Array,int16:Ve,int32:de,int8:Ue,uint16:Te,uint32:ge,uint8:Se,uint8c:Fe,complex64:Dr,complex128:ft};function ht(e){return pt[e]||null}function gt(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}var mt="function",wt={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function bt(e){var r=wt[e];return"function"==typeof r?r:wt.default}var dt={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function vt(e){var r=dt[e];return"function"==typeof r?r:dt.default}function Et(e){var r,t=yt(e);return typeof(r=e).get===mt&&typeof r.set===mt?{accessorProtocol:!0,accessors:[Nr(t),vt(t)]}:{accessorProtocol:!1,accessors:[Pr(t),bt(t)]}}function At(e){var r=Et(e);return{data:e,accessorProtocol:r.accessorProtocol,accessors:r.accessors}}function Tt(e,r,t,n,i){var o,a,u,f;for(o=t.data,a=t.accessors[1],u=i,f=0;f<e;f++)a(o,u,r),u+=n;return t}function _t(e,r,t,n){var i,o,a,u;if(e<=0)return t;if((u=At(t)).accessorProtocol)return Tt(e,r,u,n,i=n<0?(1-e)*n:0),u.data;if(1===n){if((a=e%8)>0)for(o=0;o<a;o++)t[o]=r;if(e<8)return t;for(o=a;o<e;o+=8)t[o]=r,t[o+1]=r,t[o+2]=r,t[o+3]=r,t[o+4]=r,t[o+5]=r,t[o+6]=r,t[o+7]=r;return t}for(i=n<0?(1-e)*n:0,o=0;o<e;o++)t[i]=r,i+=n;return t}function xt(e,r){var t,n,i;if(!Qe(e))throw new TypeError(R("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return gt(r,e);if(null===(n=ht(t)))throw new TypeError(R("invalid argument. Third argument must be a recognized data type. Value: `%s`.",t));return _t(e,r,i=new n(e),1),i}return Y(_t,"ndarray",(function(e,r,t,n,i){var o,a,u,f;if(e<=0)return t;if((u=At(t)).accessorProtocol)return Tt(e,r,u,n,i),u.data;if(o=i,1===n){if((a=e%8)>0)for(f=0;f<a;f++)t[o]=r,o+=n;if(e<8)return t;for(f=a;f<e;f+=8)t[o]=r,t[o+1]=r,t[o+2]=r,t[o+3]=r,t[o+4]=r,t[o+5]=r,t[o+6]=r,t[o+7]=r,o+=8;return t}for(f=0;f<e;f++)t[o]=r,o+=n;return t})),function(e,r){var t,n;if(null===(t=yt(e)))throw new TypeError(R("invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.",e));return arguments.length>2&&(t=arguments[2]),n="number"==typeof r?"complex128"===t?new Tr(r,0):"complex64"===t?new Vr(r,0):r:r,xt(e.length,n,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).fullLike=r();
//# sourceMappingURL=browser.js.map
