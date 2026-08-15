"use strict";var u=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=u(function(l,i){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),s=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),d=require('@stdlib/stats-strided-dvarianceyc/dist').ndarray;function o(a){var r,e;return e=a[0],r=q(a[1]),d(n(e,0),r,c(e),v(e,0),s(e))}i.exports=o
});var f=t();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
