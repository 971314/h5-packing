define(function(e,s,o){$.config={globalExtend:function(){$.modal.prototype.defaults.closePrevious=!1,$.modal.prototype.defaults.modalCloseByOutside=!0,$.modal.prototype.defaults.modalButtonOk="确定",$.modal.prototype.defaults.modalButtonCancel="取消",$.showIndicatorHtml=function(){},$.hideIndicatorHtml=function(){}},documentTitle:"申银万国期货",seaBaseUrl:"/1110/main/",projName:"user",cssPathName:"css",imagesPathName:"images",scriptsPathName:"scripts",viewsPathName:"views",shellScriptPath:"user/shellFunction/msgFunction.js",executeFilter:{executeFilterFunc:function(e){return"-999"!==e.errorNo}},guidePage:{pageCode:"",jsonParam:{}},pAlias:{common:"user/scripts/common/common.js",constants:"user/scripts/common/constants",hIscroll:"2.0.0/js/plugins/iscroll/scripts/hIscroll.js",nativePluginService:"user/shellFunction/nativePluginService.js",validatorUtils:"2.0.0/js/plugins/validator/scripts/validatorUtils.js",stringUtils:"user/scripts/common/stringUtils.js",comOtherData:"user/scripts/common/comOtherData.js",commonExt:"user/scripts/common/commonExt.js",commService:"user/services/commService.js"},loginCheck:{isAsynch:!1,pageFilters:[["user/views/index.html","user/views/index"],["user/*"]],checkFunc:function(e,s,o,t,i,c,n,r,a){return!0}},checkPermission:{moduleAlias:"common",moduleFuncName:"checkPermission"},firstLoadIntf:{moduleAlias:"common",moduleFuncName:"firstLoadFunc",isAsynch:!0},global:{cookieName:"sso_client_info",ssoSignKey:"BDmmrGbedzrcRHI4e2Ri7NEV7W9ETGV8++T+Ba6DuzKfkq9sMVgDpHj/tOr0/1JJY3gzNnCzzDCvKWLInZYHKNT/CkAwfLFl",encryMode:"aes",propUrl:"../../user/scripts/common/plugins/i18n/bundle/",serverPath:"http://124.74.247.149:18080/servlet/json",pictureUrl:"http://124.74.247.149:18080",imagePath:"http://124.74.247.149:18080/servlet/Image"},isDirectExit:!1,ajaxTimeout:{time:30,ajaxTimeoutFunc:function(e,s,o){$.alert("网络超时")},execErrorFunc:function(e,s,o){"abort"===s&&$.alert("服务器错误，或者网络异常!")}},cacheScanInterval:{time:10,cacheFuncNoKey:["funcno","funcNo"],cacheFuncCallbackKey:["errorNo","error_no"]},isDebug:0,isFordHttpReq:0,isMainfest:"0"},o.exports=$.config});