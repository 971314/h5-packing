"use strict";define(function(e,s,t){$.config={globalExtend:function(){$.modal.prototype.defaults.closePrevious=!1,$.modal.prototype.defaults.modalCloseByOutside=!0,$.modal.prototype.defaults.modalButtonOk="确定",$.modal.prototype.defaults.modalButtonCancel="取消",$.hideIndicatorHtml=function(){$.hidePreloader()},$.showIndicatorHtml=function(){$.showPreloader(),$(" .modal-title").text("请等待...")}},documentTitle:"申银万国期货",seaBaseUrl:"/1110/main/",projName:"futures",cssPathName:"css",imagesPathName:"images",scriptsPathName:"scripts",viewsPathName:"views",shellScriptPath:"futures/shellFunction/msgFunction.js",executeFilter:{executeFilterFunc:function(e){return"-999"!==e.errorNo}},guidePage:{pageCode:"",jsonParam:{}},pAlias:{common:"futures/scripts/common/common.js",commonExt:"futures/scripts/common/commonExt.js",constants:"futures/scripts/common/constants",nativePluginService:"futures/shellFunction/nativePluginService.js",validatorUtils:"2.0.0/js/plugins/validator/scripts/validatorUtils.js",rsa:"2.0.0/js/plugins/endecrypt/scripts/rsa.js",endecryptUtils:"2.0.0/js/plugins/endecrypt/scripts/endecryptUtils.js",userService:"futures/services/userService.js",commService:"futures/services/commService.js",uploadImg:"futures/scripts/common/compts/uploadImg.js",makeThumb:"futures/scripts/common/plugins/imgcompress/scripts/jquery.make-thumb.js",index:"futures/scripts/userInfo/index.js"},loginCheck:{isAsynch:!1,pageFilters:[["futures/views/index.html","futures/views/index"],["futures/*"]],checkFunc:function(e,s,t,o,i,r,n,c,u){return!0}},checkPermission:{moduleAlias:"common",moduleFuncName:"checkPermission"},firstLoadIntf:{moduleAlias:"common",moduleFuncName:"firstLoadFunc",isAsynch:!0},global:{cookieName:"sso_client_info",ssoSignKey:"BDmmrGbedzrcRHI4e2Ri7NEV7W9ETGV8++T+Ba6DuzKfkq9sMVgDpHj/tOr0/1JJY3gzNnCzzDCvKWLInZYHKNT/CkAwfLFl",encryMode:"aes",propUrl:"../../user/scripts/common/plugins/i18n/bundle/",kf:"400-888-7868",serverPath:"http://124.74.247.149:18080/servlet/json",domain:"http://124.74.247.149:18080",imagePath:"http://124.74.247.149:18080/servlet/Image",UploadImage:"http://124.74.247.149:18080/servlet/UploadImage"},isDirectExit:!1,ajaxTimeout:{time:30,ajaxTimeoutFunc:function(e,s,t){$.alert("网络超时")},execErrorFunc:function(e,s,t){"abort"===s&&$.alert("服务器错误，或者网络异常!")}},cacheScanInterval:{time:10,cacheFuncNoKey:["funcno","funcNo"],cacheFuncCallbackKey:["errorNo","error_no"]},isDebug:0,isFordHttpReq:0,isMainfest:"0"},t.exports=$.config});