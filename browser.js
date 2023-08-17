// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fullLike=e()}(this,(function(){"use strict";function r(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,f=i.__lookupGetter__,l=i.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,e,t.get),s&&u&&u.call(r,e,t.set),r};var c=t;function y(r,e,t){c(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var b=h()?function(r){var e,t,n;if(null==r)return m.call(r);t=r[w],e=g(r,w);try{r[w]=void 0}catch(e){return m.call(r)}return n=m.call(r),e?r[w]=t:delete r[w],n}:function(r){return m.call(r)};var v=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};function d(r){return null!==r&&"object"==typeof r}function E(r){return d(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function A(){return/^\s*function\s*([^(]*)/i}y(d,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!v(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(d));var _=/^\s*function\s*([^(]*)/i;function T(r){var e,t,n;if(("Object"===(t=b(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=_.exec(n.toString()))return e[1]}return E(r)?"Buffer":t}y(A,"REGEXP",_);var j={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},x="function"==typeof Float64Array;var L="function"==typeof Float64Array?Float64Array:null;var B="function"==typeof Float64Array?Float64Array:void 0;var V=function(){var r,e,t;if("function"!=typeof L)return!1;try{e=new L([1,3.14,-3.14,NaN]),t=e,r=(x&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")},R="function"==typeof Float32Array;var S=Number.POSITIVE_INFINITY,k="function"==typeof Float32Array?Float32Array:null;var I="function"==typeof Float32Array?Float32Array:void 0;var C=function(){var r,e,t;if("function"!=typeof k)return!1;try{e=new k([1,3.14,-3.14,5e40]),t=e,r=(R&&t instanceof Float32Array||"[object Float32Array]"===b(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===S}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")},M="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null;var U="function"==typeof Uint32Array?Uint32Array:void 0;var F=function(){var r,e,t;if("function"!=typeof O)return!1;try{e=new O(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(M&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")},N="function"==typeof Int32Array;var P="function"==typeof Int32Array?Int32Array:null;var Y="function"==typeof Int32Array?Int32Array:void 0;var W=function(){var r,e,t;if("function"!=typeof P)return!1;try{e=new P([1,3.14,-3.14,2147483648]),t=e,r=(N&&t instanceof Int32Array||"[object Int32Array]"===b(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Y:function(){throw new Error("not implemented")},G="function"==typeof Uint16Array;var J="function"==typeof Uint16Array?Uint16Array:null;var z="function"==typeof Uint16Array?Uint16Array:void 0;var X=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,65536,65537]),t=e,r=(G&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?z:function(){throw new Error("not implemented")},q="function"==typeof Int16Array;var D="function"==typeof Int16Array?Int16Array:null;var H="function"==typeof Int16Array?Int16Array:void 0;var K=function(){var r,e,t;if("function"!=typeof D)return!1;try{e=new D([1,3.14,-3.14,32768]),t=e,r=(q&&t instanceof Int16Array||"[object Int16Array]"===b(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")},Q="function"==typeof Uint8Array;var Z="function"==typeof Uint8Array?Uint8Array:null;var $="function"==typeof Uint8Array?Uint8Array:void 0;var rr=function(){var r,e,t;if("function"!=typeof Z)return!1;try{e=new Z(e=[1,3.14,-3.14,256,257]),t=e,r=(Q&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$:function(){throw new Error("not implemented")},er="function"==typeof Uint8ClampedArray;var tr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ir=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr([-1,0,1,3.14,4.99,255,256]),t=e,r=(er&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===b(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")},or="function"==typeof Int8Array;var ar="function"==typeof Int8Array?Int8Array:null;var ur="function"==typeof Int8Array?Int8Array:void 0;var fr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,128]),t=e,r=(or&&t instanceof Int8Array||"[object Int8Array]"===b(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};function lr(r){return"number"==typeof r}var cr=Number,yr=cr.prototype.toString;var sr=h();function hr(r){return"object"==typeof r&&(r instanceof cr||(sr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function mr(r){return lr(r)||hr(r)}y(mr,"isPrimitive",lr),y(mr,"isObject",hr);var pr=cr.NEGATIVE_INFINITY,gr=Math.floor;function wr(r){return gr(r)===r}function br(r){return r<S&&r>pr&&wr(r)}function vr(r){return lr(r)&&br(r)}function dr(r){return hr(r)&&br(r.valueOf())}function Er(r){return vr(r)||dr(r)}function Ar(r){return vr(r)&&r>=0}function _r(r){return dr(r)&&r.valueOf()>=0}function Tr(r){return Ar(r)||_r(r)}y(Er,"isPrimitive",vr),y(Er,"isObject",dr),y(Tr,"isPrimitive",Ar),y(Tr,"isObject",_r);function jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=4294967295}function xr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=9007199254740991}var Lr="function"==typeof ArrayBuffer;function Br(r){return Lr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===b(r)}function Vr(r){return"object"==typeof r&&null!==r&&!v(r)}var Rr=/./;function Sr(r){return"boolean"==typeof r}var kr=Boolean.prototype.toString;var Ir=h();function Cr(r){return"object"==typeof r&&(r instanceof Boolean||(Ir?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function Mr(r){return Sr(r)||Cr(r)}function Or(){return new Function("return this;")()}y(Mr,"isPrimitive",Sr),y(Mr,"isObject",Cr);var Ur="object"==typeof self?self:null,Fr="object"==typeof window?window:null,Nr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Pr="object"==typeof Nr?Nr:null;var Yr=function(r){if(arguments.length){if(!Sr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Or()}if(Ur)return Ur;if(Fr)return Fr;if(Pr)return Pr;throw new Error("unexpected error. Unable to resolve global object.")}(),Wr=Yr.document&&Yr.document.childNodes,Gr=Int8Array;var Jr="function"==typeof Rr||"object"==typeof Gr||"function"==typeof Wr?function(r){return T(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?T(r).toLowerCase():e};function zr(r){return"function"===Jr(r)}function Xr(r,e){if(!(this instanceof Xr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!lr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}y(Xr,"BYTES_PER_ELEMENT",8),y(Xr.prototype,"BYTES_PER_ELEMENT",8),y(Xr.prototype,"byteLength",16),y(Xr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),y(Xr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var qr="function"==typeof Math.fround?Math.fround:null,Dr=new C(1);var Hr="function"==typeof qr?qr:function(r){return Dr[0]=r,Dr[0]};function Kr(r,e){if(!(this instanceof Kr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!lr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Hr(r)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Hr(e)}),this}function Qr(r){return r instanceof Xr||r instanceof Kr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Zr(r){return wr(r/2)}function $r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}y(Kr,"BYTES_PER_ELEMENT",4),y(Kr.prototype,"BYTES_PER_ELEMENT",4),y(Kr.prototype,"byteLength",8),y(Kr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),y(Kr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var re=$r()?Symbol.iterator:null;function ee(r,e,t){c(r,e,{configurable:!1,enumerable:!1,get:t})}function te(r){return r.re}function ne(r){return r.im}function ie(r,e){return new C(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function oe(r,e){return new V(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ae(r,e){return r[e]}function ue(r,e){return r.get(e)}function fe(r,e,t){r[e]=t}function le(r,e,t){r.set(t,e)}function ce(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ue:ae,setter:e?le:fe}}function ye(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(jr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Qr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(te(n),ne(n))}return e}function se(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,jr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(te(o),ne(o))}return n}function he(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Qr(n=e[i]))return null;r[o]=te(n),r[o+1]=ne(n),o+=2}return r}var me=2*C.BYTES_PER_ELEMENT,pe=$r();function ge(r){return r instanceof de||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function we(r){return r===de||"Complex128Array"===r.name}function be(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===me}function ve(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*me}function de(){var r,e,t,n;if(e=arguments.length,!(this instanceof de))return 0===e?new de:1===e?new de(arguments[0]):2===e?new de(arguments[0],arguments[1]):new de(arguments[0],arguments[1],arguments[2]);if(0===e)t=new C(0);else if(1===e)if(Ar(arguments[0]))t=new C(2*arguments[0]);else if(xr(arguments[0]))if((n=(t=arguments[0]).length)&&v(t)&&Qr(t[0])){if(null===(t=he(new C(2*n),t))){if(!Zr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new C(arguments[0])}}else{if(be(t))t=ie(t,0);else if(ve(t))t=oe(t,0);else if(!Zr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new C(t)}else if(Br(arguments[0])){if(!wr((t=arguments[0]).byteLength/me))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+me+". Byte length: `"+t.byteLength+"`.");t=new C(t)}else{if(!Vr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===pe)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!zr(t[re]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!zr((t=t[re]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ye(t))instanceof Error)throw t;t=new C(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ar(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!wr(r/me))throw new RangeError("invalid argument. Byte offset must be a multiple of "+me+". Value: `"+r+"`.");if(2===e){if(!wr((n=t.byteLength-r)/me))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+me+". View byte length: `"+n+"`.");t=new C(t,r)}else{if(!Ar(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*me>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*me+"`.");t=new C(t,r,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}function Ee(r){return r.re}function Ae(r){return r.im}function _e(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(jr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Qr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Ee(n),Ae(n))}return e}function Te(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,jr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Ee(o),Ae(o))}return n}function je(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Qr(n=e[i]))return null;r[o]=Ee(n),r[o+1]=Ae(n),o+=2}return r}y(de,"BYTES_PER_ELEMENT",me),y(de,"name","Complex64Array"),y(de,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!we(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!zr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(ge(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qr(l=n.call(e,r.get(c),c)))o[y]=te(l),o[y+1]=ne(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(xr(r)){if(n){for(u=r.length,a=ce(r),c=0;c<u;c++)if(!Qr(a.getter(r,c))){f=!0;break}if(f){if(!Zr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qr(l=n.call(e,a.getter(r,c),c)))o[y]=te(l),o[y+1]=ne(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Vr(r)&&pe&&zr(r[re])){if(!zr((o=r[re]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?se(o,n,e):ye(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),y(de,"of",(function(){var r,e;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!we(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ee(de.prototype,"buffer",(function(){return this._buffer.buffer})),ee(de.prototype,"byteLength",(function(){return this._buffer.byteLength})),ee(de.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(de.prototype,"BYTES_PER_ELEMENT",de.BYTES_PER_ELEMENT),y(de.prototype,"copyWithin",(function(r,e){if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),y(de.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Kr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),re&&y(t,re,(function(){return e.entries()})),t})),y(de.prototype,"get",(function(r){var e;if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ar(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Kr((e=this._buffer)[r*=2],e[r+1])})),ee(de.prototype,"length",(function(){return this._length})),y(de.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ge(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ar(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Qr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=te(r),void(n[t+1]=ne(r))}if(ge(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*me,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new C(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!xr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Qr(r[f])){o=!0;break}if(o){if(!Zr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*me,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new C(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=te(u),n[t+1]=ne(u),t+=2}}));var xe=2*V.BYTES_PER_ELEMENT,Le=$r();function Be(r){return r instanceof ke||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ve(r){return r===ke||"Complex64Array"===r.name}function Re(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===xe/2}function Se(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===xe}function ke(){var r,e,t,n;if(e=arguments.length,!(this instanceof ke))return 0===e?new ke:1===e?new ke(arguments[0]):2===e?new ke(arguments[0],arguments[1]):new ke(arguments[0],arguments[1],arguments[2]);if(0===e)t=new V(0);else if(1===e)if(Ar(arguments[0]))t=new V(2*arguments[0]);else if(xr(arguments[0]))if((n=(t=arguments[0]).length)&&v(t)&&Qr(t[0])){if(null===(t=je(new V(2*n),t))){if(!Zr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(arguments[0])}}else{if(Re(t))t=ie(t,0);else if(Se(t))t=oe(t,0);else if(!Zr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new V(t)}else if(Br(arguments[0])){if(!wr((t=arguments[0]).byteLength/xe))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+xe+". Byte length: `"+t.byteLength+"`.");t=new V(t)}else{if(!Vr(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Le)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!zr(t[re]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!zr((t=t[re]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=_e(t))instanceof Error)throw t;t=new V(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ar(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!wr(r/xe))throw new RangeError("invalid argument. Byte offset must be a multiple of "+xe+". Value: `"+r+"`.");if(2===e){if(!wr((n=t.byteLength-r)/xe))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+xe+". View byte length: `"+n+"`.");t=new V(t,r)}else{if(!Ar(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*xe>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*xe+"`.");t=new V(t,r,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}y(ke,"BYTES_PER_ELEMENT",xe),y(ke,"name","Complex128Array"),y(ke,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!zr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Be(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qr(l=n.call(e,r.get(c),c)))o[y]=Ee(l),o[y+1]=Ae(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(xr(r)){if(n){for(u=r.length,a=ce(r),c=0;c<u;c++)if(!Qr(a.getter(r,c))){f=!0;break}if(f){if(!Zr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(Qr(l=n.call(e,a.getter(r,c),c)))o[y]=Ee(l),o[y+1]=Ae(l);else{if(!(jr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(r)}if(Vr(r)&&Le&&zr(r[re])){if(!zr((o=r[re]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Te(o,n,e):_e(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),y(ke,"of",(function(){var r,e;if(!zr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),ee(ke.prototype,"buffer",(function(){return this._buffer.buffer})),ee(ke.prototype,"byteLength",(function(){return this._buffer.byteLength})),ee(ke.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(ke.prototype,"BYTES_PER_ELEMENT",ke.BYTES_PER_ELEMENT),y(ke.prototype,"copyWithin",(function(r,e){if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),y(ke.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Xr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),re&&y(t,re,(function(){return e.entries()})),t})),y(ke.prototype,"get",(function(r){var e;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ar(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Xr((e=this._buffer)[r*=2],e[r+1])})),ee(ke.prototype,"length",(function(){return this._length})),y(ke.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ar(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Qr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ee(r),void(n[t+1]=Ae(r))}if(Be(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new V(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!xr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!Qr(r[f])){o=!0;break}if(o){if(!Zr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new V(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ee(u),n[t+1]=Ae(u),t+=2}}));var Ie=[V,C,W,F,K,X,fr,rr,ir,de,ke],Ce=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Me=Ce.length;function Oe(r){var e;if(v(r))return"generic";if(E(r))return null;for(e=0;e<Me;e++)if(r instanceof Ie[e])return Ce[e];return j[T(r)]||null}var Ue={float64:V,float32:C,generic:Array,int16:K,int32:W,int8:fr,uint16:X,uint32:F,uint8:rr,uint8c:ir,complex64:de,complex128:ke};function Fe(r){return Ue[r]||null}function Ne(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}function Pe(r,e,t,n,i){var o,a,u,f;for(o=t.data,a=t.setter,u=i,f=0;f<r;f++)a(o,u,e),u+=n;return t}function Ye(r,e,t,n){var i,o,a,u;if(r<=0)return t;if((u=ce(t)).accessors)return Pe(r,e,u,n,i=n<0?(1-r)*n:0),u.data;if(1===n){if((a=r%8)>0)for(o=0;o<a;o++)t[o]=e;if(r<8)return t;for(o=a;o<r;o+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e;return t}for(i=n<0?(1-r)*n:0,o=0;o<r;o++)t[i]=e,i+=n;return t}function We(r,e){var t,n,i;if(!Ar(r))throw new TypeError("invalid argument. First argument must be a nonnegative integer. Value: `"+r+"`.");if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return Ne(e,r);if(null===(n=Fe(t)))throw new TypeError("invalid argument. Third argument must be a recognized data type. Value: `"+t+"`.");return Ye(r,e,i=new n(r),1),i}return y(Ye,"ndarray",(function(r,e,t,n,i){var o,a,u,f;if(r<=0)return t;if((u=ce(t)).accessors)return Pe(r,e,u,n,i),u.data;if(o=i,1===n){if((a=r%8)>0)for(f=0;f<a;f++)t[o]=e,o+=n;if(r<8)return t;for(f=a;f<r;f+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e,o+=8;return t}for(f=0;f<r;f++)t[o]=e,o+=n;return t})),function(e,t){var n,i;if(null===(n=Oe(e)))throw new TypeError(r("00r2f,Mm",e));return arguments.length>2&&(n=arguments[2]),i="number"==typeof t?"complex128"===n?new Xr(t,0):"complex64"===n?new Kr(t,0):t:t,We(e.length,i,n)}}));
//# sourceMappingURL=browser.js.map
