define("futures/scripts/userInfo/updateApp.js",function(n,o,t){function i(){e()}function c(){$.bindEvent($(p+" .icon_back"),function(){window.location.href="goBack"}),$.bindEvent($(p+" #opinion_btn"),function(){var n={opinion:$(p+" #opinion").val(),contact:$(p+" #contact").val()};console.log(n)})}function e(){}function a(){}function u(){}function f(){}var p="#userInfo_updateApp ";n("commService").getInstance();n("validatorUtils");var r={init:i,bindPageEvent:c,destroy:a,pageBack:u,load:f};t.exports=r});