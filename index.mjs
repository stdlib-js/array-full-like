// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-full@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";function n(n,o){var l,d;if(null===(l=e(n)))throw new TypeError(t("00r2f,Mm",n));return arguments.length>2&&(l=arguments[2]),d="number"==typeof o?"complex128"===l?new s(o,0):"complex64"===l?new m(o,0):o:o,r(n.length,d,l)}export{n as default};
//# sourceMappingURL=index.mjs.map