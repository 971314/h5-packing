var iconInit = {}, content = [], ver = "", verCheck = "", time="";  //iconInit是写入配置文件的对象，content、ver、verCheck、time分别对应contents, version, checkedVer, updateDate字段的内容
ver = "0.09", verCheck = "0.06", time="2016-11-04";
content = [
             {
               "title": "在线开户",
               "checked": "1", //区分已添加和未添加
               "image1": "kaihu.png",
               "image2": "kaihu1.png",
               "url": "pobo:pageId=800006",
               "id": "kaihu"
             },
             {
               "title": "交易助手",
               "checked": "1",
               "image1": "ziguan.png",
               "image2": "ziguan1.png",
               "url": "pobo:http://mp.weixin.qq.com/mp/homepage?__biz=MjM5NjY4NDE2MQ==&hid=7&sn=d489f59cd9224b4164a1ff48e49fdd62#wechat_redirect&pageId=900004&title=交易助手",
               "id": "jiaoyi"
             },
             {
               "title": "特别提示",
               "checked": "1",
               "image1": "zhangting.png",
               "image2": "zhangting1.png",
               "url": "pobo:http://mp.weixin.qq.com/mp/homepage?__biz=MjM5NjY4NDE2MQ==&hid=17&sn=4950b4c59af775541ae72baeacdffd8d#wechat_redirect&pageId=900004&title=特别提示",
               "id": "tishi"
             },
             {
               "title": "重要公告",
               "checked": "1",
               "image1": "gmcaijing.png",
               "image2": "gmcaijing1.png",
               "url": "pobo:info/index-news.html?name=重要公告&groupID=511301&pageId=900005",
               "id": "gonggao"
             },
             {
               "title": "热点解读",
               "checked": "1",
               "image1": "ziguan.png",
               "image2": "ziguan1.png",
               "url": "pobo:http://mp.weixin.qq.com/mp/homepage?__biz=MjM5NjY4NDE2MQ==&hid=14&sn=bf063faa8d59a6f3e6f1526caabe1de9#wechat_redirect&pageId=900004&title=热点解读",
               "id": "redian"
             },
             {
               "title": "周度策略",
               "checked": "1",
               "image1": "yanfa.png",
               "image2": "yanfa1.png",
               "url": "pobo:http://mp.weixin.qq.com/mp/homepage?__biz=MjM5NjY4NDE2MQ==&hid=16&sn=de58a555976a79a9aafb5ba6ac18da4a&ptlang=2052&ADUIN=308361600&ADSESSION=1471567298&ADTAG=CLIENT.QQ.5455_.0&ADPUBNO=26550#wechat_redirect&pageId=900004&title=周度策略",
               "id": "celue"
             },
             {
               "title": "专家讲堂",
               "checked": "1",
               "image1": "celue.png",
               "image2": "celue1.png",
               "url": "pobo:http://mp.weixin.qq.com/mp/homepage?__biz=MjM5NjY4NDE2MQ==&hid=15&sn=4c53a10afd2d1511733223893bdf46f9#wechat_redirect&pageId=900004&title=专家讲堂",
               "id": "zhuajia"
             },
             {
               "title": "在线咨询",
               "checked": "1",
               "image1": "jiaoyi.png",
               "image2": "jiaoyi1.png",
               "url": "pobo:pageId=800007&qq=2780732331",
               "id": "zixun"
             },
             {
               "title": "期货部落",
               "checked": "1",
               "image1": "wenda.png",
               "image2": "wenda1.png",
               "url": "pobo:http://buluo.qq.com/mobile/barindex.html?_lv=40456&bid=228217&scene=personal&_bid=128&from=share_link&_wv=1027#time_redirect=1471585193482&webview=1&pageId=900004&title=期货部落",
               "id": "qihuo"
             },
             {
               "title": "美期资管",
               "checked": "1",
               "image1": "zheng.png",
               "image2": "zheng1.png",
               "url": "pobo:info/index-news.html?name=美期资管&groupID=511302&pageId=900005",
               "id": "ziguan"
             },
             {
               "title": "小美电台",
               "checked": "1",
               "image1": "zhong.png",
               "image2": "zhong1.png",
               "url": "pobo:http://xima.tv/U7GpP8?pageId=900004&title=小美电台",
               "id": "diantai"
               //145->146
             },
			  {
               "title": "火线快评",
               "checked": "1",
               "image1": "xiadan.png",
               "image2": "xiadan1.png",
               "url": "pobo:http://mp.weixin.qq.com/mp/homepage?__biz=MzI5NTE1NzY5OA==&hid=4&sn=1672904ef049b84d4de3d5dc30d23538#wechat_redirect&pageId=900004&title=火线快评",
               "id": "kuaiping"
             },
			  {
               "title": "专题研报",
               "checked": "1",
               "image1": "wai.png",
               "image2": "wai1.png",
               "url": "pobo:http://mp.weixin.qq.com/mp/homepage?__biz=MzI5NTE1NzY5OA==&hid=3&sn=3aa751e1df7a9e9e83b9d99f8b8824bc#wechat_redirect&pageId=900004&title=专题研报",
               "id": "yanbao"
             },
             {
               "title": "主力合约",
               "checked": "1",
               "image1": "zhuli.png",
               "image2": "zhuli1.png",
               "url": "pobo:pageId=801301",
               "id": "zhuli"
             },
			 {
               "title": "自选合约",
               "checked": "0",
               "image1": "zhuli.png",
               "image2": "zhuli1.png",
               "url": "pobo:pageId=803000",
               "id": "zixuan"
             },
			 {
               "title": "外盘行情",  //功能模块的名称
               "checked": "0",  //是否添加
               "image1": "wai.png",
               "image2": "wai1.png",
               "url": "pobo:pageId=801700",
               "id": "wai"
             },
             {
               "title": "期货学院",
               "checked": "0",
               "image1": "da.png",
               "image2": "da1.png",
               "url": "pobo:http://www.lxou.com/index.php?g=Wap&m=Index&a=lists&classid=465&token=hgsmfz1389249726&pageId=900004&title=期货学院",
               "id": "xueyuan"
             },
             {
               "title": "走进小美",
               "checked": "0",
               "image1": "yanfa.png",
               "image2": "yanfa1.png",
               "url": "pobo:info/index-news.html?name=走进小美&groupID=511303&pageId=900005",
               "id": "zoujin"
             },
             {
               "title": "业务合作",
               "checked": "0",
               "image1": "celue.png",
               "image2": "celue1.png",
               "url": "pobo:info/index-news.html?name=业务合作&groupID=511304&pageId=900005",
               "id": "yewu"
             },
             {
               "title": "中金所",
               "checked": "0",
               "image1": "zhong.png",
               "image2": "zhong1.png",
               "url": "pobo:pageId=801302",
               "id": "zhong"
             },
             {
               "title": "上期所",
               "checked": "0",
               "image1": "shang.png",
               "image2": "shang1.png",
               "url": "pobo:pageId=801303",
               "id": "shang"
             },
             {
               "title": "大商所",
               "checked": "0",
               "image1": "da.png",
               "image2": "da1.png",
               "url": "pobo:pageId=801305",
               "id": "da"
             },
             {
               "title": "郑商所",
               "checked": "0",
               "image1": "zheng.png",
               "image2": "zheng1.png",
               "url": "pobo:pageId=801304",
               "id": "zheng"
             },
             {
               "title": "热门资讯",
               "checked": "0",
               "image1": "caijing.png",
               "image2": "caijing1.png",
               "url": "pobo:pageId=904000",
               "id": "xinwen"
             },

          ];

iconInit['contents'] = content;
iconInit['version'] = ver;  //大版本号，图标改动很多、增添模块、删减模块
iconInit['checkedVer'] = verCheck;  //小版本号，图标数目不变，每个模块id不变
iconInit['updateDate'] = time;  //改动日期，作为参考