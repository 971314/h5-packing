Vue.component("my-deal",{template:'<div><div class="row content" v-for="con in arr"><div class="col-my-11 text-left"><p class="a1 name-row"><span class="display-table-cell">{{con.contract}}</span></p><p class="d1 time-row"><span class="display-table-cell">{{con.data116}}</span></p></div><div class="col-my-13 text-right"><p class="lh55" v-bind:class="{b3:con.dirclass.isb3,b4:con.dirclass.isb4}">{{con.direction}}</p></div><div class="col-my-11 text-right"><p class="b1 lh55">{{con.price}}</p></div><div class="col-my-13 text-right"><p class="b1 lh55">{{con.num}}</p></div></div></div>',data:function(){for(var a,s=null,i=null,t=[],d={},c=0;c<dataHis.length;c++){var l=floatToFixed(dataHis[c][114],2),n=floatToFixed(dataHis[c][113],0),o=dataHis[c][116];0==dataHis[c][112]&&0==dataHis[c][117]?(s="买开",a={isb3:!0,isb4:!1}):1==dataHis[c][112]&&1==dataHis[c][117]?(s="卖平",a={isb3:!1,isb4:!0}):0==dataHis[c][112]&&1==dataHis[c][117]?(s="买平",a={isb3:!0,isb4:!1}):1==dataHis[c][112]&&0==dataHis[c][117]?(s="卖开",a={isb3:!1,isb4:!0}):0==dataHis[c][112]&&2==dataHis[c][117]?(s="买平今",a={isb3:!0,isb4:!1}):1==dataHis[c][112]&&2==dataHis[c][117]&&(s="卖平今",a={isb3:!1,isb4:!0}),i=dataHis[c].name?dataHis[c].name:dataHis[c][64]?dataHis[c][64]:dataHis[c][63],d={contract:i,direction:s,price:l,num:n,data116:o,dirclass:a},t.push(d)}return{arr:t}}});