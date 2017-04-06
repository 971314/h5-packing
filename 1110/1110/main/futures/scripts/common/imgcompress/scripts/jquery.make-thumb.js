define(function(e,i,t){var a=(e("./binaryajax"),e("./exif"),e("./megapix-image"));!function(e,i,t){"use strict";i.support.filereader=!!(e.File&&e.FileReader&&e.FileList&&e.Blob);var r={width:0,height:0,isDebug:!1,fill:!1,background:"#fff",type:"image/jpeg",size:"contain",mark:{},origin:{},immediate:!1,stretch:!1,success:null,error:null},n=(i("body"),/image.*/);i.fn.makeThumb=function(t){var o={};i.extend(o,r,t);var s=this;return o.isDebug&&alert("您的浏览器支持上传功能?"+(i.support.filereader?"是":"否")),!i.support.filereader&&i.isFunction(o.error)?(o.error.apply(self,[{},1,"系统检测到您手机暂不支持图片上传功能"]),!1):(o.size,void s.change(function(){var t=this,r=t.files;if(!r.length)return void(i.isFunction(o.error)&&o.error.apply(t,[{},-2,""]));var s=r[0];if(o.isDebug&&alert("当前文件类型为："+s.type+",文件大小："+s.size+"B"),o.immediate&&s.lastModifiedDate&&(o.isDebug&&alert("文件最后修改时间："+s.lastModifiedDate.toLocaleDateString()),"object"==typeof s.lastModifiedDate&&s.lastModifiedDate instanceof Date)){var c=(new Date).getTime(),l=s.lastModifiedDate.getTime();if(c>l+2e4&&i.isFunction(o.error))return o.error.apply(t,[{},10,"不能选择相册文件"]),!1}i.isFunction(o.before)?o.before.apply(t,[{}]):$.showIndicator=function(){};var d,g,p,u,f,m=new FileReader,h=i('<canvas id="myCanvas"></canvas>'),b=h[0],v=(b.getContext("2d"),{png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",bmp:"image/bmp"}),y=s.type;if(!y)try{y=v[s.name.match(/\.([^\.]+)$/i)[1]]}catch(e){y=""}n.test(y)?(m.onerror=function(e){i.isFunction(o.error)&&o.error.apply(t,[s,e])},m.onload=function(r){var n=r.target,c=n.result;s.type||(c=c.replace("data:","data:"+y+";")),d=new Image;var l,m=c.replace(/^.*?,/,""),h=atob(m),b=new BinaryFile(h);l=EXIF.readFromBinaryFile(b);var v=l.Orientation,w=new Image,D=e.URL&&e.URL.createObjectURL?e.URL:e.webkitURL&&e.webkitURL.createObjectURL?e.webkitURL:null;w.src=D.createObjectURL(s),w.onload=function(){var e,n,c=w.width,l=w.height;o.origin.iPhone&&o.immediate;var d=o.maxLength||800;c>d||l>d?c>l?(n=d,e=l*(d/c)):(e=d,n=c*(d/l)):(n=c,e=l);var m=a.renderImageToDataURL(w,{width:n,height:e,orientation:v});o.isDebug&&alert("文件最后大小："+m.length),i.isFunction(o.success)&&(p={width:f,height:u},o.success.apply(t,[m,p,s,g,r]))}},m.readAsDataURL(s)):i.isFunction(o.error)&&o.error.apply(t,[{},8,"上传文件格式不正确"])}))}}(window,jQuery)});