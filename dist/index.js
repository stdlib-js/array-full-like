"use strict";var u=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var n=u(function(g,a){
var l=require('@stdlib/error-tools-fmtprodmsg/dist'),s=require('@stdlib/array-dtype/dist'),m=require('@stdlib/array-full/dist'),o=require('@stdlib/complex-float64-ctor/dist'),p=require('@stdlib/complex-float32-ctor/dist');function f(t,r){var e,i;if(e=s(t),e===null)throw new TypeError(l('00r2f',t));return arguments.length>2&&(e=arguments[2]),typeof r=="number"?e==="complex128"?i=new o(r,0):e==="complex64"?i=new p(r,0):i=r:i=r,m(t.length,i,e)}a.exports=f
});var y=n();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
