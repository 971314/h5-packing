function changeTab(a){if(a!=flag)switch(a){case 0:$(".activate").removeClass("activate"),$("#tab-0").addClass("activate"),data.groupIDs=["10101"],data0?ReactDOM.render(React.createElement(InfoList,{contents:data0,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=0;break;case 1:$(".activate").removeClass("activate"),$("#tab-1").addClass("activate"),data.groupIDs=["10301"],data1?ReactDOM.render(React.createElement(InfoList,{contents:data1,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=1;break;case 2:$(".activate").removeClass("activate"),$("#tab-2").addClass("activate"),data.groupIDs=["40102","40202"],data2?ReactDOM.render(React.createElement(InfoList,{contents:data2,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=2;break;case 3:$(".activate").removeClass("activate"),$("#tab-3").addClass("activate"),data.groupIDs=["40101","40201"],data3?ReactDOM.render(React.createElement(InfoList,{contents:data3,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=3;break;case 4:$(".activate").removeClass("activate"),$("#tab-4").addClass("activate"),data.groupIDs=["40104","40204"],data4?ReactDOM.render(React.createElement(InfoList,{contents:data4,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=4;break;case 5:$(".activate").removeClass("activate"),$("#tab-5").addClass("activate"),data.groupIDs=["40105","40205"],data5?ReactDOM.render(React.createElement(InfoList,{contents:data5,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=5;break;case 6:$(".activate").removeClass("activate"),$("#tab-6").addClass("activate"),data.groupIDs=["40103","40203"],data6?ReactDOM.render(React.createElement(InfoList,{contents:data6,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=6;break;case 7:$(".activate").removeClass("activate"),$("#tab-7").addClass("activate"),data.groupIDs=["30101","30102"],data7?ReactDOM.render(React.createElement(InfoList,{contents:data7,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=7;break;case 8:$(".activate").removeClass("activate"),$("#tab-8").addClass("activate"),data.groupIDs=["30101","30102"],data8?ReactDOM.render(React.createElement(InfoList,{contents:data8,dir:dirStr}),infoListDom):pbEngine.queryInfoListWithJson(JSON.stringify(data)),flag=8}}function callback(a){var t=JSON.parse(a),e=t.jData.Indexes;data.groupIDs.indexOf("10101")>-1?data0=e:data.groupIDs.indexOf("10301")>-1?data1=e:data.groupIDs.indexOf("40102")>-1?data2=e:data.groupIDs.indexOf("40101")>-1?data3=e:data.groupIDs.indexOf("40104")>-1?data4=e:data.groupIDs.indexOf("40105")>-1?data5=e:data.groupIDs.indexOf("40103")>-1?data6=e:data.groupIDs.indexOf("100101")>-1?data7=e:data.groupIDs.indexOf("30101")>-1&&(data8=e),ReactDOM.render(React.createElement(InfoList,{contents:e,dir:dirStr}),infoListDom)}var width=document.documentElement.clientWidth,num=$(".nav-tabs").children("li").length;$(".nav-tabs>li").css("width",width/4),$(".nav-tabs").css("width",width/4*num);var flag=0,data0=null,data1=null,data2=null,data3=null,data4=null,data5=null,data6=null,data7=null,data8=null,data={type:"mu",groupIDs:["10101"],doc:"json",count:"30"},infoListDom=document.getElementById("info-list"),dirStr="pobo:info/";$(".nav-tabs>li").each(function(a,t){$(t).on("tap",function(){changeTab(a)})}),pbEngine.queryInfoListWithJson(JSON.stringify(data)),$(document).ready(function(){new IScroll("#info-nav",{eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1,snap:"li",tap:!0})});