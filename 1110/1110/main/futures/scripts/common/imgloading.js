define(function(n,t,o){function i(n,t){a=n;var o=0,i=a.eleImg.find("img");!function n(){if(o>e.length)return t;o++,$.validatorUtils.isNotEmpty(a.parantid);var u=r();u(i[o-1]).always(n)}()}function e(n,t){n.src=t}function r(){function n(){o=setTimeout(function(){r.reject("timeout")},a.lodingtimeout)}function t(){o&&clearTimeout(o)}var o,i=new Image,r=$.Deferred();return i.onload=function(){r.resolve(this.src)},i.onabort=function(){r.reject("aborted")},i.onerror=function(){r.reject("error")},function(o,i){return r.always(function(){t()}).done(function(n){e(o,n)}).fail(function(n){e(o,a.loadFailed)}),n(),r.promise()}}n("validatorUtils");var a,u={imgload:i};o.exports=u});