montageDefine("cff3264","js/release/catch_filter",{dependencies:["./util","./es5"],factory:function(r,e,t){"use strict";t.exports=function(e){function t(r,t,o){return function(a){var l=o._boundValue();r:for(var u=0;u<r.length;++u){var s=r[u];if(s===Error||null!=s&&s.prototype instanceof Error){if(a instanceof s)return i(t).call(l,a)}else if("function"==typeof s){var v=i(s).call(l,a);if(v===c)return v;if(v)return i(t).call(l,a)}else if(n.isObject(a)){for(var p=f(s),y=0;y<p.length;++y){var h=p[y];if(s[h]!=a[h])continue r}return i(t).call(l,a)}}return e}}var n=r("./util"),f=r("./es5").keys,i=n.tryCatch,c=n.errorObj;return t}}});