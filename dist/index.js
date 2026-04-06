"use strict";var u=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var n=u(function(g,a){"use strict";var l=require("@stdlib/string-format"),s=require("@stdlib/array-dtype"),m=require("@stdlib/array-full"),o=require("@stdlib/complex-float64-ctor"),p=require("@stdlib/complex-float32-ctor");function f(t,r){var e,i;if(e=s(t),e===null)throw new TypeError(l("invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.",t));return arguments.length>2&&(e=arguments[2]),typeof r=="number"?e==="complex128"?i=new o(r,0):e==="complex64"?i=new p(r,0):i=r:i=r,m(t.length,i,e)}a.exports=f});var y=n();module.exports=y;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
