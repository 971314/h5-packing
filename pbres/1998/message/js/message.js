function sync(){var e=config.categories[0].id;if(syncCount=e.length,0==syncCount)return void loading(!1);syncCode={};for(var t=0;t<e.length;t++)syncCode[pbMSG.ytzHandleMsgHistoryQuery(e[t]-0,"")]=1;syncTm=setTimeout(function(){syncCount>0&&(syncCode={},loading(!1),loadData(appVue.cat))},18e4)}function callback(e){var e=JSON.parse(e);90007==e.moduleId&&111==e.functionNO&&e.requestNO in syncCode&&--syncCount<=0&&(clearTimeout(syncTm),loading(!1),loadData(appVue.cat))}function loadData(e){var t,a=0,n=config.categories[e].id,i="",o=config.categories[e].data;if(o.length>0&&(i=o[o.length-1].msgid),""==i){if(0==e)a=pbMSG.ytzGetUnReadMsgCount();else for(var s=0;s<n.length;s++)a+=pbMSG.ytzGetUnReadMsgCountByType(n[s]-0);config.categories[e].unread=a}t=0==e?pbMSG.ytzLoadProFileMsg(10,i):1==n.length?pbMSG.ytzLoadProfileTypeMsg(n[0]-0,10,i):pbMSG.ytzLoadProfileTypesMsg(JSON.stringify({maxmsgcount:"10",latestid:i})),t=JSON.parse(t).Messages;for(var s=0;s<t.length;s++){var c=t[s];config.types[c.typeid]||(config.types[c.typeid]={listTemplate:"UNKNOWN",noDetail:!0}),config.types[c.typeid].noDetail&&0==c.readed&&updateUnread(e,c,!1),o.push(c)}}function updateUnread(e,t,a){pbMSG.ytzUpdateReaded(t.msgid),t.readed=1,--config.categories[e].unread;for(var n=0;n<config.categories.length;n++)if(n!=e&&config.categories[n].id.indexOf(t.typeid)!=-1){config.categories[n].data.length>0&&(a?config.categories[n].data=[]:--config.categories[n].unread);break}}function init(e){config=e,e.categories=[];for(var t in TEMPLATES.LIST)TEMPLATES.LIST[t].props=["item"],TEMPLATES.LIST[t]=Vue.extend(TEMPLATES.LIST[t]);isReady(function(){for(var t,a=[],n=[],i=0,o=location.search.substr(1),s=getMsgTypes(!0),c=0;c<s.length;c++)t=s[c].typeid,n.push(t),e.types[t]=$.extend({listTemplate:"DEFAULT",noDetail:!1},e.types[t]),s[c].other?a.push(t):(e.categories.push({name:s[c].types,id:[t],unread:0,data:[]}),o==t&&(i=c+1));e.categories.push({name:"其他消息",id:a,unread:0,data:[]}),e.categories.unshift({name:"全部消息",id:n,unread:0,data:[]}),$("#app").show(),new Vue({el:"#app",data:function(){return appVue=this,this.$options.components=TEMPLATES.LIST,{cats:e.categories,cat:i,types:e.types}},mounted:function(){var t=$(document),a=Math.floor(t.width()/4),n=$("#app .cats");n.children().css("width",a*this.cats.length).children().css("width",a),new iScroll(n[0],{vScroll:!1,bounce:!1,hScrollbar:!1});var i=t.height()-$("#navbar").height()-41;$("#app .list").each(function(t){$(this).css("height",i+"px"),this.children[0].style.minHeight=i+"px",new iScroll(this,{hScroll:!1,vScrollbar:!1,checkDOMChanges:!0,onRefresh:function(){console.log("refresh")},onTouchEnd:function(){this.y<this.maxScrollY?this.loadType=1:this.y>100?this.loadType=2:this.loadType=0},onScrollEnd:function(){if(1==this.loadType)loadData(t);else if(2==this.loadType){loading(!0);for(var a=0;a<e.categories.length;a++)e.categories[a].data=[];sync()}}})}),sync()},methods:{changeCat:function(e){this.cat!=e&&(this.cat=e,0==this.cats[e].data.length&&loadData(e))},read:function(e){0==e.readed&&updateUnread(this.cat,e,!0)}}})})}loading(!0);var config,syncCode,syncCount,appVue,syncTm;Vue.filter("msgTime",function(e){var t=new Date,a=""+t.getFullYear()+(t.getMonth()+1)+t.getDate();t.setTime(t.getTime()-864e5);var n=""+t.getFullYear()+(t.getMonth()+1)+t.getDate();try{return 0==e.indexOf(a)?e.substr(8,2)+":"+e.substr(10,2):0==e.indexOf(n)?"昨天":e.substr(0,4)+"-"+e.substr(4,2)+"-"+e.substr(6,2)}catch(e){}return e}),getConf("",init);