/**
 * Created by pobo on 2016/11/3.
 */
!(function () {
    var root = this;
    var pbApi = function (obj) {
        if (obj instanceof pbApi) return obj;
        if (!(this instanceof pbApi)) return new pbApi(obj);
    };


    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = pbApi;
        }
        exports.pbApi = pbApi;
    } else {
        root.pbApi = pbApi;
    }

    if (typeof define === 'function' && define.amd) {
        define('pbApi', [], function () {
            return pbApi;
        });
    }

    var isPoboApp = typeof pbE != "undefined";

    var pbSYS, pbINFO, pbWT, pbHQ;

    if (isPoboApp) {
        pbSYS = pbE.SYS();
        pbINFO = pbE.INFO();
        pbWT = pbE.WT();
        /* this.pbMSG = pbE.MSG();*/
        pbHQ = pbE.HQ();
    }

    /***********系统类 Begin*************/

    /**
     * 开始加载
     * @returns 开始加载
     */

    pbApi.sys_startLoading = function () {
        if (isPoboApp)
            return pbSYS.startLoading();
    };


    pbApi.sys_stopLoading = function () {
        if (isPoboApp)
            return pbSYS.stopLoading();
    };

    /**
     * 获取app认证信息
     * @return 获取app认证信息
     */
    pbApi.sys_getAppCertifyInfo = function () {
        var AppCertifyInfo = {};
        if (isPoboApp) {
            AppCertifyInfo.Login = this.pbSYS.getAppCertifyInfo('PbKey_H5_Home_Auth_LoginName');
            AppCertifyInfo.Token = this.pbSYS.getAppCertifyInfo('PbKey_H5_Home_Auth_Token');
            AppCertifyInfo.UserId = this.pbSYS.getAppCertifyInfo('PbKey_H5_Home_Auth_UserId');
        }
        return AppCertifyInfo;
    };

    pbApi.sys_storePrivateData = function (key, value) {
        if (isPoboApp) {
            pblog.info("sys_storePrivateData");
            return this.pbSYS.storePrivateData(key, value);
        } else {
            return false;
        }
    };

    pbApi.sys_getPrivateData = function (key) {
        if (isPoboApp) {
            pblog.info("sys_getPrivateData");
            return this.pbSYS.getPrivateData(key);
        } else {
            return null;
        }
    };

    //获取设备信息
    pbApi.sys_getDeviceJsonInfo = function () {
        var deviceJsonInfo = {};
        if (isPoboApp) {
            pblog.info("sys_getDeviceJsonInfo");
            deviceJsonInfo = JSON.parse(this.pbSYS.getDeviceJsonInfo());
        }
        return deviceJsonInfo;
    };

    pbApi.sys_readConfig = function (fileName) {
        if (isPoboApp) {
            pblog.info('sys_readConfig');
            return pbSYS.readConfig(fileName)
        }
    };

    pbApi.sys_privateClear = function () {
        if (isPoboApp) return pbSYS.privateClear();
    };

    pbApi.sys_storePublicData = function (key, value) {//问题
        if (isPoboApp) return pbSYS.storePublicData(key, value);
    };

    pbApi.sys_getPublicData = function (key) {
        if (isPoboApp) return pbSYS.getPublicData(key)
    };

    pbApi.sys_publicClear = function () {
        if (isPoboApp) return pbSYS.publicClear()
    };

    pbApi.sys_writeLocalFile = function (modulename, int, jsonstr) {
        if (isPoboApp) return pbSYS.writeLocalFile(modulename, int, jsonstr)
    };

    pbApi.sys_readLocalFile = function (modulename, int) {
        if (isPoboApp) return pbSYS.readLocalFile(modulename, int)
    };

    pbApi.sys_isHasLocalFile = function (modulename, int) {
        if (isPoboApp) return pbSYS.isHasLocalFile(modulename, int)
    };

    pbApi.sys_sendMessageToNative = function (value) {
        var sendMessageToNative = {}
        if (isPoboApp) {
            sendMessageToNative.LoginName = pbSYS.getAppCertifyInfo('Pbkey_H5_Home_Visitor_Login', value);
            sendMessageToNative.LoginReturn = pbSYS.getAppCertifyInfo('PbKey_H5_Home_Auth_Data', value);
            sendMessageToNative.xd = pbSYS.getAppCertifyInfo('Pbkey_H5_Position_XD_Data', value);
            sendMessageToNative.open = pbSYS.getAppCertifyInfo('Pbkey_H5_Open_Account', value);
            sendMessageToNative.title = pbSYS.getAppCertifyInfo('Pbkey_H5_Tabbar_Title', value);
            sendMessageToNative.CustomerService = pbSYS.getAppCertifyInfo('Pbkey_H5_Customer_Service', value);
        }
        return sendMessageToNative;
    };
    // 期货下单类是否弹提示框
    pbApi.sys_showFutureTradeConfirm = function () {
        if (isPoboApp) return pbSYS.showFutureTradeConfirm()
    };
    // 显示全屏转圈
    pbApi.sys_showCircleView = function (json) {
        var showCircleView = {};
        if (isPoboApp) {
            showCircleView.WTCircle = pbSYS.showCircleView('Pbkey_Trade_WT_Circle', json);
            showCircleView.DefaultCircle = pbSYS.showCircleView('Pbkey_Default_Circle', json);
        }
        return showCircleView;
    };
    // 隐藏全屏转圈
    pbApi.sys_hideCircleView = function (json) {
        var hideCircleView = {};
        if (isPoboApp) {
            hideCircleView.WTCircle = pbSYS.hideCircleView('Pbkey_Trade_WT_Circle', json);
            hideCircleView.DefaultCircle = pbSYS.hideCircleView('Pbkey_Default_Circle', json);
        }
        return hideCircleView;
    };
    // 退出认证登录前清空数据
    pbApi.sys_clearAuthData = function () {
        if (isPoboApp) {
            return pbSYS.clearAuthData();
        }
    };
    // 写入H5log信息
    pbApi.sys_writeH5Log = function (str) {
        if (isPoboApp) {
            return pbSYS.writeH5Log(str);
        }
    };
    // 读取H5log信息
    pbApi.sys_readH5Log = function () {
        if (isPoboApp) {
            return pbSYS.readH5Log();
        }
    };
    // 开始录音
    pbApi.sys_startRecord = function () {
        if (isPoboApp) {
            return pbSYS.startRecord();
        }
    };
    // 结束录音
    pbApi.sys_stopRecord = function () {
        if (isPoboApp) {
            return pbSYS.stopRecord();
        }
    };
    // 取消录音
    pbApi.sys_cancelRecord = function () {
        if (isPoboApp) {
            return pbSYS.cancelRecord();
        }
    };
    // 获取上次录音文件路径
    pbApi.sys_getTheLastRecordPath = function () {
        if (isPoboApp) {
            return pbSYS.getTheLastRecordPath();
        }
    };
    // 删除指定录音
    pbApi.sys_removeRecord = function (pathStr) {
        if (isPoboApp) {
            return pbSYS.removeRecord(pathStr);
        }
    };

    /***********系统类 End*************/


    /***********交易类 Begin*************/

    /**
     * 交易类免掉CID参数，由累框架统一处理
     */

    pbApi.wt_getCurrentConnectionCID = function () {
        if (isPoboApp)
            return pbWT.wtGetCurrentConnectionCID();
        else
            return -1;
    }

    pbApi.wt_generalRequest = function (FunNum, datetime) {
        var CID = pbApi.wt_getCurrentConnectionCID();
        pblog.info("wt_GeneralRequest");
        if (isPoboApp)
            pbWT.wtGeneralRequest(CID, FunNum, datetime)
    }


    pbApi.wt_queryMoney = function (param) {
        var CID = pbApi.wt_getCurrentConnectionCID();
        pblog.info('wt_queryMoney');
        if (isPoboApp) {
            return pbWT.wtQueryMoney(CID, param)
        }
    };

    pbApi.wt_queryMoneyRe = function () {
        var CID = pbApi.wt_getCurrentConnectionCID();
        pblog.info('wt_queryMoneyRe');
        if (isPoboApp) {
            return pbWT.wtQueryMoneyRe(CID)
        }
    };

    pbApi.wt_synFlash = function () {
        var CID = pbApi.wt_getCurrentConnectionCID();
        pblog.info("wt_SynFlash");
        if (isPoboApp)
            pbWT.wtSynFlash(CID)
    };

    pbApi.wt_queryStockRe = function () {
        var CID = pbApi.wt_getCurrentConnectionCID();
        if (isPoboApp)
            return pbWT.wtQueryStockRe(CID)
    };

    pbApi.wt_getHQInfo = function (code, market) {
        if (isPoboApp)
            return pbWT.wtGetHQInfo(code, market);
        else
            return "";
    };

    pbApi.wt_getMSSL = function (code, market) {
        if (isPoboApp)
            return pbWT.wtGetMSSL(code, market);
        else
            return 0;
    };
    // 登录
    pbApi.wt_loginRe = function () {
        var CID = pbApi.wt_getCurrentConnectionCID();
        pblog.info('pbApi.wt_loginRe');
        if (isPoboApp)
            return pbWT.wtLoginRe(CID)
    };

    pbApi.wt_wtLogin = function () {
        var CID = pbApi.wt_getCurrentConnectionCID();
        pblog.info('pbApi.wt_loginRe');
        if (isPoboApp)
            return pbWT.wtLogin(CID)
    };

    pbApi.wt_wtQueryBargainRe = function () {
        var CID = pbApi.wt_getCurrentConnectionCID();
        pblog.info('wt_wtQueryBargainRe');
        if (isPoboApp) return pbEWT.wtQueryBargainRe(CID);
    };

    // 获得组件信息
    pbApi.wt_wtGetModuleInfo = function () {
        if (isPoboApp) pbWT.wtGetModuleInfo()
    };

    // 获取组件状态
    pbApi.wt_wtGetRunStat = function () {
        if (isPoboApp) pbWT.wtGetRunStat()
    };

    // 加密
    pbApi.wt_wtEncrypt = function (str) {
        var CID = pbApi.wt_getCurrentConnectionCID();
        if (isPoboApp) pbWT.wtEncrypt(CID, str)
    };

    // 解密
    pbApi.wt_wtDecrypt = function (str) {
        var CID = pbApi.wt_getCurrentConnectionCID();
        if (isPoboApp) pbWT.wtDecrypt(CID, str)
    };

    // 获取已登录的交易连接
    pbApi.wt_wtGetLoginListt = function () {
        if (isPoboApp) pbWT.wtGetLoginList()
    };

    // 获取交易连接详细信息
    pbApi.wt_wtGetLoginDetailList = function () {
        var CID = pbApi.wt_getCurrentConnectionCID();
        if (isPoboApp) pbWT.wtGetLoginDetailList(CID)
    };
    /***********交易类 End*************/

    /***********行情类 Begin*************/
    pbApi.hq_subscribe = function (type, param) {
        if (isPoboApp)
            pbHQ.hqSubscribe(type, param);
    };

    pbApi.hq_getGroupFlag = function (code, market) {
        if (isPoboApp)
            return pbHQ.hqGetGroupFlag(code, market);
    };

    pbApi.hq_getPriceDecimal = function (code, market) {
        if (isPoboApp)
            return pbHQ.hqGetPriceDecimal(code, market);
    };


    pbApi.hq_getNowPrice = function (code, market) {
        if (isPoboApp)
            return pbHQ.hqGetNowPrice(code, market);
    };

    pbApi.hq_getLastBasePrice = function (code, market) {
        if (isPoboApp)
            return pbHQ.hqGetLastBasePrice(code, market);
    };

    pbApi.hq_getPriceRate = function (code, market) {
        if (isPoboApp)
            return pbHQ.hqGetPriceRate(code, market);
    };

    /***********行情类 End*************/


}.call(window));
