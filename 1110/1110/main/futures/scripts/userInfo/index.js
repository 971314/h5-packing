define("futures/scripts/userInfo/index.js",function(e,n,i){function o(){b=setInterval(function(){window.reload=function(){t()}},300),window.doShow=function(e){b=setInterval(function(){var e=pbE.SYS().getAppCertifyInfo("PbKey_H5_Home_Auth_Token");$.validatorUtils.isNotEmpty(e)&&t()},1e3)},v&&(d=pbE.HQ(),f=pbE.SYS(),g=pbE.ZX(),l=pbE.INFO()),t()}function t(){if($.validatorUtils.isNotEmpty(pbE.SYS().getAppCertifyInfo("PbKey_H5_Home_Auth_Token"))){var e,n=pbE.SYS().getAppCertifyInfo("PbKey_H5_Home_Auth_LoginName"),i=pbE.SYS().getAppCertifyInfo("PbKey_H5_Home_Auth_Token"),o=pbE.SYS().getAppCertifyInfo("PbKey_H5_Home_Auth_UserId"),t=pbE.SYS().getDeviceJsonInfo();if(t){var s=JSON.parse(t);if(s[71]&&(S=s[71]),s[255]){var r=s[255];"2"==r?h="iOS":"3"==r&&(h="Android")}s[73]&&(y=s[73]),s.jgid&&(e=s.jgid)}var u={poboNumber:I,uid:o,deviceId:S,OS:h,vsersion:y,token:i,address:"",istoken:"1",orgNumber:e,login_mobile:n};_.userLogin(u,function(e){if(0==e.error_no){e.result;$.validatorUtils.isNotEmpty(e.results[0].user_icon)?$(c+" #face_image").attr("src",$.config.global.domain+e.results[0].user_icon):$(c+" #face_image").attr("src","../../images/user_img.png"),$(c+" .cs").text(e.results[0].mobile_phone),$(c+" #loginStart1").css("display","none"),$(c+" #loginStart2").css("display","block"),p.saveSessionUserInfo(e.results)}else $(c+" #loginStart2").css("display","none"),$(c+" #loginStart1").css("display","block")},{isShowWait:!1})}else $(c+" #loginStart2").css("display","none"),$(c+" #loginStart1").css("display","block")}function s(){$.bindEvent($(c+" .login_btn"),function(){window.open("pobo:uncheck=1&pageId=900005&url=main/futures/views/login.html")}),$.bindEvent($(c+" .reg_link"),function(){window.open("pobo:uncheck=1&pageId=900005&url=main/futures/views/register.html")}),$.bindEvent($(c+" .pic, .head_edit"),function(){m.openHref="pobo:uncheck=1&pageId=900005&url=main/futures/views/userInfo/setUserInfo.html",p.isLogin(m)}),$.bindEvent($(c+" #transaction_setting_index"),function(){m.openHref="pobo:uncheck=1&pageId=805006",p.isLogin(m)}),$.bindEvent($(c+" #system_setting_index"),function(){m.openHref="pobo:uncheck=1&pageId=805007",p.isLogin(m)}),$.bindEvent($(c+" #my_collection_index"),function(){m.openHref="pobo:uncheck=1&pageId=900005&url=main/futures/views/userInfo/myCollection.html",p.isLogin(m)}),$.bindEvent($(c+" #message_push_index"),function(){m.openHref="pobo:uncheck=1&pageId=905003",p.isLogin(m)}),$.bindEvent($(c+" #opinoin_feedback_index"),function(){window.open("pobo:uncheck=1&pageId=900005&url=main/futures/views/userInfo/opinoinFeedback.html")}),$.bindEvent($(c+" #about_Us_index"),function(){window.open("pobo:uncheck=1&pageId=900005&url=main/futures/views/aboutUser/index.html")})}function r(){}function u(){}function a(){}var c="#userInfo_index ",p=e("common");e("validatorUtils");var d,f,l,g,b,_=(e("futures/scripts/common/imgloading"),e("futures/services/userService").getInstance()),m={fromPage:"userInfo/index",openHref:""},v="undefined"!=typeof pbE,I="123",S="127.0.0.1",h="Android",y="1.0.0.1",E={init:o,bindPageEvent:s,destroy:r,pageBack:u,load:a,login:t};i.exports=E});