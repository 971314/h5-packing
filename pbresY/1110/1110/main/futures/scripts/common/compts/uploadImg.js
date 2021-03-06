/**
 * @描述: 观点-公用方法
 * @作者: 60
 */
define(function(require, exports, module) {
	var layerUtils = require("layerUtils");
	var appUtils = require("appUtils");
	var common = require("common");
//	var constans = require("constans");
	var businessUtil = require("businessUtil");
	var gconfig = require("gconfig"), 
	global = gconfig.global;
	
	
	//插件
	require("futures/scripts/common/plugins/imgcompress/scripts/jquery.make-thumb.js");
	require("futures/scripts/common/plugins/form/jquery-form.js");
	
	require("futures/scripts/common/plugins/cropper/canvas-toBlob.js");
	require("futures/scripts/common/plugins/cropper/cropper.min.js");
//	require("ytg/scripts/plugins/async/async.min.js");
	
	var uploadImg = {
		"init": init
	};

	function init() {

	};

	/** ====================================== 上传图片相关 ====================================== */
	/**
	 * 上传图片
	 */
	uploadImg.uploadImg = function (obj, callback){
		var _pageId = businessUtil.getPageId();
		if ($(_pageId + ".my_page_con").attr("status") == "1") {
			layerUtils.iAlert("图片正在上传中...",-1);
			return false;
		}
		//选择图片文件
//			$(_pageId + " #btn1").remove();
//			$(_pageId + " .my_page_con").append('<input type="file" accept="image/*,camera" capture="camera"  id="btn1" style="width:0px;height:0px;position:absolute;top:0;left:0;"/>');
			setTimeout(function() {
				start_init(obj, callback);
			}, 200);
		return true;
	};
	
	function start_init(obj, callback)
	{
		var _pageId = businessUtil.getPageId();
		$(function() {
		    var $file = $(_pageId +"#btn1");
		    $file.makeThumb({
		    	width:500,
		    	height:500,
		        success: function(dataURL, tSize, file, sSize, fEvt) {
		    		// 图片上传至服务器
		    	    var img_data = dataURL.split(",")[1]; //图片的base64编码
					$(_pageId + ".my_page_con").attr("status",1);
					$(_pageId + "#pictureBase64").val(img_data);
			    	layerUtils.iLoading(false);
			    	$(obj).attr("src",dataURL);
			    	uploadMobileImg(callback); //上传手机图像
		        },error:function(obj,state,e){
		        	layerUtils.iLoading(false);
					$(_pageId + ".my_page_con").attr("status",0);
		        	if(state==8){
		        		layerUtils.iAlert("上传文件格式不正确，请重新上传",0,function(){});
		        	}
		        }
		    });
		});
	}
	
	/**
	 * 上传手机图像
	 * */
	function uploadMobileImg(callback){
		var _pageId = businessUtil.getPageId();
		var userId = common.getUserId();
		if(!userId){
			userId= "";
		}
		$(_pageId + "#userID").val("view" + userId+new Date().getTime());
		var form = $("form[name=form1]");
		var options = {
				url : gconfig.global.domain
				+ "/servlet/UploadMobileImage?function=SetUserImage",
				type : 'post',
				success : function(data) {
					var jsondata = eval("("+data+")")[0];
					var realPic = jsondata.Picurl;
					if (jsondata.result == "ture") {
						$(_pageId + ".my_page_con").attr("status",0).attr("imgsrc",realPic);
						if (callback) callback();
					}else {
						layerUtils.iAlert(jsondata.message,-1,function(){
							//图片保存失败要重新上传
						$(_pageId + ".my_page_con").attr("status",0);
						});
					}
				}	
		};
		//异步提交表单
		form.ajaxSubmit(options);
	}
	
	/**
	 * 裁剪上传图片插件
	 */
  uploadImg.uploadImgByCropper = function (inputFileId, displayImgId, callback){
    var _pageId = "#userInfo_setUserInfo ";
    
    var cropperArea = '<div id="cropper_area" style="display:none;"><div class="save_area" style="width:100%;height: 0.44rem;position: absolute;top:0;line-height:0.44rem;background-color:#000;z-index:100;color:#fff;font-size: 0.18rem;padding-left:0.1rem;"> '
      + '<span id="image_save" >保存</span> <span id="image_cancel">取消<span/>'
      + '</div>'
      + '<div class="upload-img" style="width:100%;height: calc(100% - 0.44rem);position: absolute;top:0.44rem;z-index: 1000;"> '
      + '<img src=""/>'
      + '</div></div>'
      $(_pageId).append(cropperArea);
      
      //图片上传
      var $image = $(_pageId + '.upload-img > img');
      $image.cropper({
          viewMode: 1,
//          preview: '.img-preview', //不同尺寸预览区
          aspectRatio: 1, //裁剪比例，NaN-自由选择区域
          autoCropArea: 0.7, //初始裁剪区域占图片比例
          crop: function(data) { //裁剪操作回调
          }
      });
      var fileName; //选择上传的文件名
      $(_pageId + inputFileId).change(function(){
          //提示图片加载中
          layerUtils.iLoading(true);
        
          var file = this.files[0];
          fileName = file.name;
          var reader = new FileReader();
          //reader回调，重新初始裁剪区
          reader.onload = function(){
              //裁剪区域
              $(_pageId + '#cropper_area').show();
            
              // 通过 reader.result 来访问生成的 DataURL
              var url = reader.result;
              //选择图片后重新初始裁剪区
              $image.cropper('reset', true).cropper('replace', url);
              layerUtils.iLoading(false); 
          };
          reader.readAsDataURL(file);
      });

      /*
       * 上传图片
       */
      appUtils.bindEvent(_pageId + '#image_save', function() {
          //裁剪区域隐藏
          $(_pageId + '#cropper_area').hide();
          
          var type = $image.attr('src').split(';')[0].split(':')[1];
          
          var canVas = $image.cropper("getCroppedCanvas", {});
          //将裁剪的图片加载到face_image
          $(_pageId + displayImgId).attr('src', canVas.toDataURL());
          canVas.toBlob(function(blob) {
              var formData = new FormData();
              formData.append("file", blob, fileName);
             
              $.ajax({
                  type: "POST",
                  url: gconfig.global.domain + '/servlet/UploadImage?function=SetUserImage',
                  data: formData,
                  contentType: false, //必须
                  processData: false, //必须
                  dataType: "json",
                  success: function(retJson){
                      //清空上传文件的值
                      $(_pageId + '#btn1').val('');

                      if(retJson && retJson[0].result == 'true') {
                        //上传成功
                        if (callback) {
                          callback(retJson[0].picurl);
                        }
                      } else {
                        layerUtils.iAlert("上传失败", -1);
                      }
                  },
                  error : function() {
                      layerUtils.iAlert("上传失败",0,function(){
                        //清空上传文件的值
                        $(_pageId + '#btn1').val('');
                      });
                      
                  }
              });
          }, type);
      });
      
      //取消
      appUtils.bindEvent(_pageId + "#image_cancel", function() {
        //清空上传文件的值
        $(_pageId + inputFileId).val('');
        
        //裁剪区域
        $(_pageId + '#cropper_area').hide();
      });
    
    return true;
  };
			
	/** ====================================== 上传图片相关 ====================================== */
	
	function bindGlobalEvent() {

	};

	function destroy() {}

	// 暴露对外的接口
	module.exports = uploadImg;
});