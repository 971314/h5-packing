define(function(s,n,i){function e(s){function n(s,n){if(s=e.pageId+" "+s,0==$(s).parent().find("."+e.closeClass).length){$(s).after(e.closeHtml);var i=$(s).siblings("."+e.closeClass);$.bindEvent(i,function(){$(s).val(""),$(s).siblings("."+e.closeClass).hide(),"function"==typeof n&&n()},"click"),$.bindEvent(s,function(){$(this).val().length<=0?i.hide():i.show(),window.setTimeout(function(){"function"==typeof n&&n()},200)},"input"),$(s).val()&&(i.show(),"function"==typeof n&&n())}}function i(s){s=e.pageId+" "+s;var n=$(s);if(1==n.parent().find("."+e.hideClass).length){var i=$(s).siblings("."+e.hideClass);n.attr("type","password"),i.removeClass("icon_show").addClass("icon_hidden")}if(0==n.parent().find("."+e.showClass).length){$(n).after(e.showPwdHtml);var t=$(s).siblings("."+e.showClass);$.bindEvent(t,function(){"password"==n.attr("type")?(n.attr("type","text"),t.removeClass("icon_hidden").addClass("icon_show")):(n.attr("type","password"),t.removeClass("icon_show").addClass("icon_hidden"))})}}var e={pageId:"",closeClass:"icon_clear",showClass:"icon_hidden",hideClass:"icon_show",closeHtml:'<a class="icon_clear" style="display:none;"></a>',showPwdHtml:'<a class="icon_hidden"></a>'};$.extend(e,s),this.appendClearBtn=function(s,i){s=0!=s.indexOf("#")?s=" #"+s:s,n(s,i)},this.appendShowPwdBtn=function(s){s=0!=s.indexOf("#")?s=" #"+s:s,i(s)},this.appendBothBtn=function(s,t){s=0!=s.indexOf("#")?s=" #"+s:s,i(s),n(s,t),s=e.pageId+" "+s;var a=$(s).siblings("."+e.showClass),o=$(s).siblings("."+e.closeClass);a.css("width","0.35rem"),o.css("width","0.35rem").css("margin-right","0.35rem")}}i.exports=e});