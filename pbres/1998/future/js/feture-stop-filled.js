new Vue({el:"#stopOfFiled",data:{initImg:!0,stopFiledNoTuch:!0,stopFiledIsTuch:!0,stopFiledIsList:"",stopListContextObj:{},isTouchObj:{},conNoneTouchObj:{conditionID:"",clientFlag:"",serverFlag:""}},created:function(){var o=this;o.noneTouchList(),$.ajax({url:conditionUrl,method:"post",dataType:"json",contentType:"application/json;charest=utf-8",data:JSON.stringify({func:isConTouch,token:testToken,id:id,userID:10001,begin:1,total:100,type:stopFiledType}),success:function(t){if(0==t.status){console.log(t);var n=[];$.each(t.data,function(o,t){var e=JSON.parse(t.conditionValue);n.push({hyName:t.HYDM,createTime:t.createTime,StopLossCheckPriceType:e.ConditionList[0].PositionStop.StopLossPrice,StopProfitCheckPriceType:e.ConditionList[0].PositionStop.StopProfitPrice,Volume:e.AttachObject[0].Volume})}),o.isTouchObj.contextValue=n}},error:function(){console.log("服务器异常！")}})},methods:{conNoneClick:function(o,t,n){console.log(o,t,n),this.conNoneTouchObj={conditionID:o,clientFlag:t,serverFlag:n},console.log(this.conNoneTouchObj)},noneTouchList:function(){var o=this;$.ajax({url:conditionUrl,method:"post",dataType:"json",async:!0,contentType:"application/json;charest=utf-8",data:JSON.stringify({func:noneConTouch,token:testToken,id:id,userID:10001,begin:1,total:100,type:stopFiledType}),success:function(t){if(console.log(t),0==t.status){var n=[];$.each(t.data,function(o,t){var e=JSON.parse(t.conditionValue);n.push({conditionID:t.conditionID,flag1:t.flag1,flag3:t.flag3,hyName:t.HYDM,market:e.Contracts[0].ExchangeCode,code:e.Contracts[0].ContractCode,StopLossCheckPriceType:e.ConditionList[0].PositionStop.StopLossPrice,StopProfitCheckPriceType:e.ConditionList[0].PositionStop.StopProfitPrice,Volume:e.AttachObject[0].Volume})}),o.stopListContextObj.contextValue=n,console.log(o.stopListContextObj)}},error:function(){console.log("服务器异常！")}})},stopFiledClick:function(o){var t=this;0==o&&(t.stopFiledNoTuch=!0,t.stopFiledIsTuch=!0),1==o&&(t.stopFiledNoTuch=!1,t.stopFiledIsTuch=!1)},conStopOrOnClick:function(o){var t=this;1!=o&&2!=o||$.ajax({url:conditionUrl,method:"post",dataType:"json",contentType:"application/json;charest=utf-8",data:JSON.stringify({func:conStopOrOn,token:testToken,id:id,type:o,conditionID:t.conNoneTouchObj.conditionID}),success:function(n){0==n.status&&(t.noneTouchList(),1==o&&console.log("暂停成功！"),2==o&&console.log("运行成功！"))},error:function(){console.log("服务器异常！")}}),3==o&&$.ajax({url:conditionUrl,method:"post",dataType:"json",contentType:"application/json;charest=utf-8",data:JSON.stringify({func:conIdQuery,token:testToken,id:id,userID:10001,type:stopFiledType,data:[t.conNoneTouchObj.conditionID]}),success:function(o){saveStorageInfo(o),console.log(o)},error:function(){}}),4==o&&$.ajax({url:conditionUrl,method:"post",dataType:"json",contentType:"application/json;charest=utf-8",data:JSON.stringify({func:delCon,token:testToken,id:id,type:stopFiledType,data:[t.conNoneTouchObj.conditionID]}),success:function(o){0==o.status&&(t.noneTouchList(),console.log("删除成功！"))},error:function(){console.log("服务器异常！")}}),5==o&&(console.log(t.noneTouchConID),$.ajax({url:conditionUrl,method:"post",dataType:"json",contentType:"application/json;charest=utf-8",data:JSON.stringify({func:delCon,token:testToken,id:id,type:stopFiledType,data:[t.conNoneTouchObj.conditionID]}),success:function(o){0==o.status&&(t.noneTouchList(),console.log("删除成功！"))},error:function(){console.log("服务器异常！")}}))}}});