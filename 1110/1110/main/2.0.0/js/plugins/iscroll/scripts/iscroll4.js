define("2.0.0/js/plugins/iscroll/scripts/iscroll4.js",function(o,t,r){!function(o,e){function l(o){return""===i?o:(o=o.charAt(0).toUpperCase()+o.substr(1),i+o)}var n=Math,s=e.createElement("div").style,i=function(){for(var o,t="t,webkitT,MozT,msT,OT".split(","),r=0,e=t.length;e>r;r++)if(o=t[r]+"ransform",o in s)return t[r].substr(0,t[r].length-1);return!1}(),a=i?"-"+i.toLowerCase()+"-":"",c=l("transform"),p=l("transitionProperty"),m=l("transitionDuration"),h=l("transformOrigin"),u=l("transitionTimingFunction"),S=l("transitionDelay"),d=/android/gi.test(navigator.appVersion),b=/iphone|ipad/gi.test(navigator.appVersion),f=/hp-tablet/gi.test(navigator.appVersion),x=l("perspective")in s,g="ontouchstart"in o&&!f,y=i!==!1,v=l("transition")in s,Y="onorientationchange"in o?"orientationchange":"resize",T=g?"touchstart":"mousedown",X=g?"touchmove":"mousemove",w=g?"touchend":"mouseup",_=g?"touchcancel":"mouseup",z=function(){if(i===!1)return!1;var o={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return o[i]}(),M=function(){return o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(o){return setTimeout(o,1)}}(),E=function(){return o.cancelRequestAnimationFrame||o.webkitCancelAnimationFrame||o.webkitCancelRequestAnimationFrame||o.mozCancelRequestAnimationFrame||o.oCancelRequestAnimationFrame||o.msCancelRequestAnimationFrame||clearTimeout}(),D=x?" translateZ(0)":"",k=function(t,r){var l,n=this;n.wrapper="object"==typeof t?t:e.getElementById(t),n.wrapper.style.overflow="hidden",n.scroller=n.wrapper.children[0],n.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:d,hideScrollbar:b,fadeScrollbar:b&&x,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(o){o.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(l in r)n.options[l]=r[l];n.x=n.options.x,n.y=n.options.y,n.options.useTransform=y&&n.options.useTransform,n.options.hScrollbar=n.options.hScroll&&n.options.hScrollbar,n.options.vScrollbar=n.options.vScroll&&n.options.vScrollbar,n.options.zoom=n.options.useTransform&&n.options.zoom,n.options.useTransition=v&&n.options.useTransition,n.options.zoom&&d&&(D=""),n.scroller.style[p]=n.options.useTransform?a+"transform":"top left",n.scroller.style[m]="0",n.scroller.style[h]="0 0",n.options.useTransition&&(n.scroller.style[u]="cubic-bezier(0.33,0.66,0.66,1)"),n.options.useTransform?n.scroller.style[c]="translate("+n.x+"px,"+n.y+"px)"+D:n.scroller.style.cssText+=";position:absolute;top:"+n.y+"px;left:"+n.x+"px",n.options.useTransition&&(n.options.fixedScrollbar=!0),n.refresh(),n._bind(Y,o),n._bind(T),g||"none"!=n.options.wheelAction&&(n._bind("DOMMouseScroll"),n._bind("mousewheel")),n.options.checkDOMChanges&&(n.checkDOMTime=setInterval(function(){n._checkDOMChanges()},500))};k.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(o){var t=this;switch(o.type){case T:if(!g&&0!==o.button)return;t._start(o);break;case X:t._move(o);break;case w:case _:t._end(o);break;case Y:t._resize();break;case"DOMMouseScroll":case"mousewheel":t._wheel(o);break;case z:t._transitionEnd(o)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(o){var t,r=this;return r[o+"Scrollbar"]?(r[o+"ScrollbarWrapper"]||(t=e.createElement("div"),r.options.scrollbarClass?t.className=r.options.scrollbarClass+o.toUpperCase():t.style.cssText="position:absolute;z-index:100;"+("h"==o?"height:7px;bottom:1px;left:2px;right:"+(r.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(r.hScrollbar?"7":"2")+"px;top:2px;right:1px"),t.style.cssText+=";pointer-events:none;"+a+"transition-property:opacity;"+a+"transition-duration:"+(r.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(r.options.hideScrollbar?"0":"1"),r.wrapper.appendChild(t),r[o+"ScrollbarWrapper"]=t,t=e.createElement("div"),r.options.scrollbarClass||(t.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+a+"background-clip:padding-box;"+a+"box-sizing:border-box;"+("h"==o?"height:100%":"width:100%")+";"+a+"border-radius:3px;border-radius:3px"),t.style.cssText+=";pointer-events:none;"+a+"transition-property:"+a+"transform;"+a+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+a+"transition-duration:0;"+a+"transform: translate(0,0)"+D,r.options.useTransition&&(t.style.cssText+=";"+a+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),r[o+"ScrollbarWrapper"].appendChild(t),r[o+"ScrollbarIndicator"]=t),"h"==o?(r.hScrollbarSize=r.hScrollbarWrapper.clientWidth,r.hScrollbarIndicatorSize=n.max(n.round(r.hScrollbarSize*r.hScrollbarSize/r.scrollerW),8),r.hScrollbarIndicator.style.width=r.hScrollbarIndicatorSize+"px",r.hScrollbarMaxScroll=r.hScrollbarSize-r.hScrollbarIndicatorSize,r.hScrollbarProp=r.hScrollbarMaxScroll/r.maxScrollX):(r.vScrollbarSize=r.vScrollbarWrapper.clientHeight,r.vScrollbarIndicatorSize=n.max(n.round(r.vScrollbarSize*r.vScrollbarSize/r.scrollerH),8),r.vScrollbarIndicator.style.height=r.vScrollbarIndicatorSize+"px",r.vScrollbarMaxScroll=r.vScrollbarSize-r.vScrollbarIndicatorSize,r.vScrollbarProp=r.vScrollbarMaxScroll/r.maxScrollY),void r._scrollbarPos(o,!0)):void(r[o+"ScrollbarWrapper"]&&(y&&(r[o+"ScrollbarIndicator"].style[c]=""),r[o+"ScrollbarWrapper"].parentNode.removeChild(r[o+"ScrollbarWrapper"]),r[o+"ScrollbarWrapper"]=null,r[o+"ScrollbarIndicator"]=null))},_resize:function(){var o=this;setTimeout(function(){o.refresh()},d?200:0)},_pos:function(o,t){this.zoomed||(o=this.hScroll?o:0,t=this.vScroll?t:0,this.options.useTransform?this.scroller.style[c]="translate("+o+"px,"+t+"px) scale("+this.scale+")"+D:(o=n.round(o),t=n.round(t),this.scroller.style.left=o+"px",this.scroller.style.top=t+"px"),this.x=o,this.y=t,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(o,t){var r,e=this,l="h"==o?e.x:e.y;e[o+"Scrollbar"]&&(l=e[o+"ScrollbarProp"]*l,0>l?(e.options.fixedScrollbar||(r=e[o+"ScrollbarIndicatorSize"]+n.round(3*l),8>r&&(r=8),e[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px"),l=0):l>e[o+"ScrollbarMaxScroll"]&&(e.options.fixedScrollbar?l=e[o+"ScrollbarMaxScroll"]:(r=e[o+"ScrollbarIndicatorSize"]-n.round(3*(l-e[o+"ScrollbarMaxScroll"])),8>r&&(r=8),e[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px",l=e[o+"ScrollbarMaxScroll"]+(e[o+"ScrollbarIndicatorSize"]-r))),e[o+"ScrollbarWrapper"].style[S]="0",e[o+"ScrollbarWrapper"].style.opacity=t&&e.options.hideScrollbar?"0":"1",e[o+"ScrollbarIndicator"].style[c]="translate("+("h"==o?l+"px,0)":"0,"+l+"px)")+D)},_start:function(t){var r,e,l,s,i,a=this,p=g?t.touches[0]:t;a.enabled&&(a.options.onBeforeScrollStart&&a.options.onBeforeScrollStart.call(a,t),(a.options.useTransition||a.options.zoom)&&a._transitionTime(0),a.moved=!1,a.animating=!1,a.zoomed=!1,a.distX=0,a.distY=0,a.absDistX=0,a.absDistY=0,a.dirX=0,a.dirY=0,a.options.zoom&&g&&t.touches.length>1&&(s=n.abs(t.touches[0].pageX-t.touches[1].pageX),i=n.abs(t.touches[0].pageY-t.touches[1].pageY),a.touchesDistStart=n.sqrt(s*s+i*i),a.originX=n.abs(t.touches[0].pageX+t.touches[1].pageX-2*a.wrapperOffsetLeft)/2-a.x,a.originY=n.abs(t.touches[0].pageY+t.touches[1].pageY-2*a.wrapperOffsetTop)/2-a.y,a.options.onZoomStart&&a.options.onZoomStart.call(a,t)),a.options.momentum&&(a.options.useTransform?(r=getComputedStyle(a.scroller,null)[c].replace(/[^0-9\-.,]/g,"").split(","),e=+(r[12]||r[4]),l=+(r[13]||r[5])):(e=+getComputedStyle(a.scroller,null).left.replace(/[^0-9-]/g,""),l=+getComputedStyle(a.scroller,null).top.replace(/[^0-9-]/g,"")),e==a.x&&l==a.y||(a.options.useTransition?a._unbind(z):E(a.aniTime),a.steps=[],a._pos(e,l),a.options.onScrollEnd&&a.options.onScrollEnd.call(a))),a.absStartX=a.x,a.absStartY=a.y,a.startX=a.x,a.startY=a.y,a.pointX=p.pageX,a.pointY=p.pageY,a.startTime=t.timeStamp||Date.now(),a.options.onScrollStart&&a.options.onScrollStart.call(a,t),a._bind(X,o),a._bind(w,o),a._bind(_,o))},_move:function(o){var t,r,e,l=this,s=g?o.touches[0]:o,i=s.pageX-l.pointX,a=s.pageY-l.pointY,p=l.x+i,m=l.y+a,h=o.timeStamp||Date.now();return l.options.onBeforeScrollMove&&l.options.onBeforeScrollMove.call(l,o),l.options.zoom&&g&&o.touches.length>1?(t=n.abs(o.touches[0].pageX-o.touches[1].pageX),r=n.abs(o.touches[0].pageY-o.touches[1].pageY),l.touchesDist=n.sqrt(t*t+r*r),l.zoomed=!0,e=1/l.touchesDistStart*l.touchesDist*this.scale,e<l.options.zoomMin?e=.5*l.options.zoomMin*Math.pow(2,e/l.options.zoomMin):e>l.options.zoomMax&&(e=2*l.options.zoomMax*Math.pow(.5,l.options.zoomMax/e)),l.lastScale=e/this.scale,p=this.originX-this.originX*l.lastScale+this.x,m=this.originY-this.originY*l.lastScale+this.y,this.scroller.style[c]="translate("+p+"px,"+m+"px) scale("+e+")"+D,void(l.options.onZoom&&l.options.onZoom.call(l,o))):(l.pointX=s.pageX,l.pointY=s.pageY,(p>0||p<l.maxScrollX)&&(p=l.options.bounce?l.x+i/2:p>=0||l.maxScrollX>=0?0:l.maxScrollX),(m>l.minScrollY||m<l.maxScrollY)&&(m=l.options.bounce?l.y+a/2:m>=l.minScrollY||l.maxScrollY>=0?l.minScrollY:l.maxScrollY),l.distX+=i,l.distY+=a,l.absDistX=n.abs(l.distX),l.absDistY=n.abs(l.distY),void(l.absDistX<6&&l.absDistY<6||(l.options.lockDirection&&(l.absDistX>l.absDistY+5?(m=l.y,a=0):l.absDistY>l.absDistX+5&&(p=l.x,i=0)),l.moved=!0,l._pos(p,m),l.dirX=i>0?-1:0>i?1:0,l.dirY=a>0?-1:0>a?1:0,h-l.startTime>300&&(l.startTime=h,l.startX=l.x,l.startY=l.y),l.options.onScrollMove&&l.options.onScrollMove.call(l,o))))},_end:function(t){if(!g||0===t.touches.length){var r,l,s,i,a,p,h,u=this,S=g?t.changedTouches[0]:t,d={dist:0,time:0},b={dist:0,time:0},f=(t.timeStamp||Date.now())-u.startTime,x=u.x,y=u.y;if(u._unbind(X,o),u._unbind(w,o),u._unbind(_,o),u.options.onBeforeScrollEnd&&u.options.onBeforeScrollEnd.call(u,t),u.zoomed)return h=u.scale*u.lastScale,h=Math.max(u.options.zoomMin,h),h=Math.min(u.options.zoomMax,h),u.lastScale=h/u.scale,u.scale=h,u.x=u.originX-u.originX*u.lastScale+u.x,u.y=u.originY-u.originY*u.lastScale+u.y,u.scroller.style[m]="200ms",u.scroller.style[c]="translate("+u.x+"px,"+u.y+"px) scale("+u.scale+")"+D,u.zoomed=!1,u.refresh(),void(u.options.onZoomEnd&&u.options.onZoomEnd.call(u,t));if(!u.moved)return g&&(u.doubleTapTimer&&u.options.zoom?(clearTimeout(u.doubleTapTimer),u.doubleTapTimer=null,u.options.onZoomStart&&u.options.onZoomStart.call(u,t),u.zoom(u.pointX,u.pointY,1==u.scale?u.options.doubleTapZoom:1),u.options.onZoomEnd&&setTimeout(function(){u.options.onZoomEnd.call(u,t)},200)):this.options.handleClick&&(u.doubleTapTimer=setTimeout(function(){for(u.doubleTapTimer=null,r=S.target;1!=r.nodeType;)r=r.parentNode;"SELECT"!=r.tagName&&"INPUT"!=r.tagName&&"TEXTAREA"!=r.tagName&&(l=e.createEvent("MouseEvents"),l.initMouseEvent("click",!0,!0,t.view,1,S.screenX,S.screenY,S.clientX,S.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),l._fake=!0,r.dispatchEvent(l))},u.options.zoom?250:0))),u._resetPos(400),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,t));if(300>f&&u.options.momentum&&(d=x?u._momentum(x-u.startX,f,-u.x,u.scrollerW-u.wrapperW+u.x,u.options.bounce?u.wrapperW:0):d,b=y?u._momentum(y-u.startY,f,-u.y,u.maxScrollY<0?u.scrollerH-u.wrapperH+u.y-u.minScrollY:0,u.options.bounce?u.wrapperH:0):b,x=u.x+d.dist,y=u.y+b.dist,(u.x>0&&x>0||u.x<u.maxScrollX&&x<u.maxScrollX)&&(d={dist:0,time:0}),(u.y>u.minScrollY&&y>u.minScrollY||u.y<u.maxScrollY&&y<u.maxScrollY)&&(b={dist:0,time:0})),d.dist||b.dist)return a=n.max(n.max(d.time,b.time),10),u.options.snap&&(s=x-u.absStartX,i=y-u.absStartY,n.abs(s)<u.options.snapThreshold&&n.abs(i)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(p=u._snap(x,y),x=p.x,y=p.y,a=n.max(p.time,a))),u.scrollTo(n.round(x),n.round(y),a),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,t));if(u.options.snap)return s=x-u.absStartX,i=y-u.absStartY,n.abs(s)<u.options.snapThreshold&&n.abs(i)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(p=u._snap(u.x,u.y),p.x==u.x&&p.y==u.y||u.scrollTo(p.x,p.y,p.time)),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,t));u._resetPos(200),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,t)}},_resetPos:function(o){var t=this,r=t.x>=0?0:t.x<t.maxScrollX?t.maxScrollX:t.x,e=t.y>=t.minScrollY||t.maxScrollY>0?t.minScrollY:t.y<t.maxScrollY?t.maxScrollY:t.y;return r==t.x&&e==t.y?(t.moved&&(t.moved=!1,t.options.onScrollEnd&&t.options.onScrollEnd.call(t)),t.hScrollbar&&t.options.hideScrollbar&&("webkit"==i&&(t.hScrollbarWrapper.style[S]="300ms"),t.hScrollbarWrapper.style.opacity="0"),void(t.vScrollbar&&t.options.hideScrollbar&&("webkit"==i&&(t.vScrollbarWrapper.style[S]="300ms"),t.vScrollbarWrapper.style.opacity="0"))):void t.scrollTo(r,e,o||0)},_wheel:function(o){var t,r,e,l,n,s=this;if("wheelDeltaX"in o)t=o.wheelDeltaX/12,r=o.wheelDeltaY/12;else if("wheelDelta"in o)t=r=o.wheelDelta/12;else{if(!("detail"in o))return;t=r=3*-o.detail}return"zoom"==s.options.wheelAction?(n=s.scale*Math.pow(2,1/3*(r?r/Math.abs(r):0)),n<s.options.zoomMin&&(n=s.options.zoomMin),n>s.options.zoomMax&&(n=s.options.zoomMax),void(n!=s.scale&&(!s.wheelZoomCount&&s.options.onZoomStart&&s.options.onZoomStart.call(s,o),s.wheelZoomCount++,s.zoom(o.pageX,o.pageY,n,400),setTimeout(function(){s.wheelZoomCount--,!s.wheelZoomCount&&s.options.onZoomEnd&&s.options.onZoomEnd.call(s,o)},400)))):(e=s.x+t,l=s.y+r,e>0?e=0:e<s.maxScrollX&&(e=s.maxScrollX),l>s.minScrollY?l=s.minScrollY:l<s.maxScrollY&&(l=s.maxScrollY),void(s.maxScrollY<0&&s.scrollTo(e,l,0)))},_transitionEnd:function(o){var t=this;o.target==t.scroller&&(t._unbind(z),t._startAni())},_startAni:function(){var o,t,r,e=this,l=e.x,s=e.y,i=Date.now();if(!e.animating){if(!e.steps.length)return void e._resetPos(400);if(o=e.steps.shift(),o.x==l&&o.y==s&&(o.time=0),e.animating=!0,e.moved=!0,e.options.useTransition)return e._transitionTime(o.time),e._pos(o.x,o.y),e.animating=!1,void(o.time?e._bind(z):e._resetPos(0));(r=function(){var a,c,p=Date.now();return p>=i+o.time?(e._pos(o.x,o.y),e.animating=!1,e.options.onAnimationEnd&&e.options.onAnimationEnd.call(e),void e._startAni()):(p=(p-i)/o.time-1,t=n.sqrt(1-p*p),a=(o.x-l)*t+l,c=(o.y-s)*t+s,e._pos(a,c),void(e.animating&&(e.aniTime=M(r))))})()}},_transitionTime:function(o){o+="ms",this.scroller.style[m]=o,this.hScrollbar&&(this.hScrollbarIndicator.style[m]=o),this.vScrollbar&&(this.vScrollbarIndicator.style[m]=o)},_momentum:function(o,t,r,e,l){var s=6e-4,i=n.abs(o)/t,a=i*i/(2*s),c=0,p=0;return o>0&&a>r?(p=l/(6/(a/i*s)),r+=p,i=i*r/a,a=r):0>o&&a>e&&(p=l/(6/(a/i*s)),e+=p,i=i*e/a,a=e),a*=0>o?-1:1,c=i/s,{dist:a,time:n.round(c)}},_offset:function(o){for(var t=-o.offsetLeft,r=-o.offsetTop;o=o.offsetParent;)t-=o.offsetLeft,r-=o.offsetTop;return o!=this.wrapper&&(t*=this.scale,r*=this.scale),{left:t,top:r}},_snap:function(o,t){var r,e,l,s,i,a,c=this;for(l=c.pagesX.length-1,r=0,e=c.pagesX.length;e>r;r++)if(o>=c.pagesX[r]){l=r;break}for(l==c.currPageX&&l>0&&c.dirX<0&&l--,o=c.pagesX[l],i=n.abs(o-c.pagesX[c.currPageX]),i=i?n.abs(c.x-o)/i*500:0,c.currPageX=l,l=c.pagesY.length-1,r=0;l>r;r++)if(t>=c.pagesY[r]){l=r;break}return l==c.currPageY&&l>0&&c.dirY<0&&l--,t=c.pagesY[l],a=n.abs(t-c.pagesY[c.currPageY]),a=a?n.abs(c.y-t)/a*500:0,c.currPageY=l,s=n.round(n.max(i,a))||200,{x:o,y:t,time:s}},_bind:function(o,t,r){(t||this.scroller).addEventListener(o,this,!!r)},_unbind:function(o,t,r){(t||this.scroller).removeEventListener(o,this,!!r)},destroy:function(){var t=this;t.scroller.style[c]="",t.hScrollbar=!1,t.vScrollbar=!1,t._scrollbar("h"),t._scrollbar("v"),t._unbind(Y,o),t._unbind(T),t._unbind(X,o),t._unbind(w,o),t._unbind(_,o),t.options.hasTouch||(t._unbind("DOMMouseScroll"),t._unbind("mousewheel")),t.options.useTransition&&t._unbind(z),t.options.checkDOMChanges&&clearInterval(t.checkDOMTime),t.options.onDestroy&&t.options.onDestroy.call(t)},refresh:function(){var o,t,r,e,l=this,s=0,i=0;if(l.scale<l.options.zoomMin&&(l.scale=l.options.zoomMin),l.wrapperW=l.wrapper.clientWidth||1,l.wrapperH=l.wrapper.clientHeight||1,l.minScrollY=-l.options.topOffset||0,l.scrollerW=n.round(l.scroller.offsetWidth*l.scale),l.scrollerH=n.round((l.scroller.offsetHeight+l.minScrollY)*l.scale),l.maxScrollX=l.wrapperW-l.scrollerW,l.maxScrollY=l.wrapperH-l.scrollerH+l.minScrollY,l.dirX=0,l.dirY=0,l.options.onRefresh&&l.options.onRefresh.call(l),l.hScroll=l.options.hScroll&&l.maxScrollX<0,l.vScroll=l.options.vScroll&&(!l.options.bounceLock&&!l.hScroll||l.scrollerH>l.wrapperH),l.hScrollbar=l.hScroll&&l.options.hScrollbar,l.vScrollbar=l.vScroll&&l.options.vScrollbar&&l.scrollerH>l.wrapperH,o=l._offset(l.wrapper),l.wrapperOffsetLeft=-o.left,l.wrapperOffsetTop=-o.top,"string"==typeof l.options.snap)for(l.pagesX=[],l.pagesY=[],e=l.scroller.querySelectorAll(l.options.snap),t=0,r=e.length;r>t;t++)s=l._offset(e[t]),s.left+=l.wrapperOffsetLeft,s.top+=l.wrapperOffsetTop,l.pagesX[t]=s.left<l.maxScrollX?l.maxScrollX:s.left*l.scale,l.pagesY[t]=s.top<l.maxScrollY?l.maxScrollY:s.top*l.scale;else if(l.options.snap){for(l.pagesX=[];s>=l.maxScrollX;)l.pagesX[i]=s,s-=l.wrapperW,i++;for(l.maxScrollX%l.wrapperW&&(l.pagesX[l.pagesX.length]=l.maxScrollX-l.pagesX[l.pagesX.length-1]+l.pagesX[l.pagesX.length-1]),s=0,i=0,l.pagesY=[];s>=l.maxScrollY;)l.pagesY[i]=s,s-=l.wrapperH,i++;l.maxScrollY%l.wrapperH&&(l.pagesY[l.pagesY.length]=l.maxScrollY-l.pagesY[l.pagesY.length-1]+l.pagesY[l.pagesY.length-1])}l._scrollbar("h"),l._scrollbar("v"),l.zoomed||(l.scroller.style[m]="0",l._resetPos(400))},scrollTo:function(o,t,r,e){var l,n,s=this,i=o;for(s.stop(),i.length||(i=[{x:o,y:t,time:r,relative:e}]),l=0,n=i.length;n>l;l++)i[l].relative&&(i[l].x=s.x-i[l].x,i[l].y=s.y-i[l].y),s.steps.push({x:i[l].x,y:i[l].y,time:i[l].time||0});s._startAni()},scrollToElement:function(o,t){var r,e=this;o=o.nodeType?o:e.scroller.querySelector(o),o&&(r=e._offset(o),r.left+=e.wrapperOffsetLeft,r.top+=e.wrapperOffsetTop,r.left=r.left>0?0:r.left<e.maxScrollX?e.maxScrollX:r.left,r.top=r.top>e.minScrollY?e.minScrollY:r.top<e.maxScrollY?e.maxScrollY:r.top,t=void 0===t?n.max(2*n.abs(r.left),2*n.abs(r.top)):t,e.scrollTo(r.left,r.top,t))},scrollToPage:function(o,t,r){var e,l,n=this;r=void 0===r?400:r,n.options.onScrollStart&&n.options.onScrollStart.call(n),n.options.snap?(o="next"==o?n.currPageX+1:"prev"==o?n.currPageX-1:o,t="next"==t?n.currPageY+1:"prev"==t?n.currPageY-1:t,o=0>o?0:o>n.pagesX.length-1?n.pagesX.length-1:o,t=0>t?0:t>n.pagesY.length-1?n.pagesY.length-1:t,n.currPageX=o,n.currPageY=t,e=n.pagesX[o],l=n.pagesY[t]):(e=-n.wrapperW*o,l=-n.wrapperH*t,e<n.maxScrollX&&(e=n.maxScrollX),l<n.maxScrollY&&(l=n.maxScrollY)),n.scrollTo(e,l,r)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(X,o),this._unbind(w,o),this._unbind(_,o)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(z):E(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(o,t,r,e){var l=this,n=r/l.scale;l.options.useTransform&&(l.zoomed=!0,e=void 0===e?200:e,o=o-l.wrapperOffsetLeft-l.x,t=t-l.wrapperOffsetTop-l.y,l.x=o-o*n+l.x,l.y=t-t*n+l.y,l.scale=r,l.refresh(),l.x=l.x>0?0:l.x<l.maxScrollX?l.maxScrollX:l.x,l.y=l.y>l.minScrollY?l.minScrollY:l.y<l.maxScrollY?l.maxScrollY:l.y,l.scroller.style[m]=e+"ms",l.scroller.style[c]="translate("+l.x+"px,"+l.y+"px) scale("+r+")"+D,l.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},s=null,"undefined"!=typeof t?r.exports=k:o.iScroll=k}(window,document)});