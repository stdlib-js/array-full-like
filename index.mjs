// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-full@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";var n=e,m=r,l=t,a=s;var i=function(e,r){var t,s;if(null===(t=n(e)))throw new TypeError("invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `"+e+"`.");return arguments.length>2&&(t=arguments[2]),s="number"==typeof r?"complex128"===t?new l(r,0):"complex64"===t?new a(r,0):r:r,m(e.length,s,t)};export{i as default};
//# sourceMappingURL=index.mjs.map