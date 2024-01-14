var lifeNum = 0;
var gift_time = 0;
var spin_time = 0;
var gate_time = 0;
var top_level = 0;

var isPauseFlag = false;
var halfN = 0;
var loadNum = 5;
var loadVar = null;
function loadFunc(num) {

}

window.ontouchstart = function (e) {
    e.preventDefault();
};


function setupWebViewJavascriptBridge(callback) {

}

function Bridge_ShowInitialize() {
    Bridge_submitScore(lifeNum, gift_time, spin_time, gate_time, top_level);
    console.log("Native Call - ShowInitialize");
    halfN++;
    if (halfN >= 2) {
        halfN = 0;
        //showInterstitial();
    }
}
function Bridge_submitScore(lifeNum, gift_timeNum, spin_timeNum, gate_timeNum, top_levelNum) {

    console.log("Native Call - submitScore : " + lifeNum + '==' + gift_timeNum + '==' + spin_timeNum + '==' + gate_timeNum + '==' + top_levelNum);
    //FBInstant.setSessionData({life: lifeNum, gift_time: gift_timeNum, spin_time: spin_timeNum, gate_time: gate_timeNum, top_level: top_levelNum});
}

function Bridge_ShowGameCenter() {    //显示最高分
    console.log("Native Call - ShowGameCenter");

}

function Bridge_RemoveBG() {        //
    console.log("Native Call - app_RemoveBG");
    //startGameAsync(true, "352723498639097_352724435305670", true,"352723498639097_352724255305688",function(){setTimeout('createShortcut()',1000)});

}
function Bridge_Share() {
    console.log("share====");
    //shareAsync("SHARE",sharedata,"Share it with you.")

}
function Bridge_More() {      //moregames
    //alert("more");
    console.log("Native Call - app_More");


}
function isHaveAd(reward, reward_fail) {

    console.log("ads_HasRewardedVideo");
    //showRewardedVideo(reward);
    //reward();

    window.PurchanseCallBack = reward;
    window.PurchanseFailCallBack = reward_fail;
    //todo: Raymond
    //DoPurchanse();

}

function showVideoAd(callback) {
    console.log("ads_ShowRewardedVideo");

}
function showWindow(msg) {
    console.log("app_Toast");

}
/////////////promo
var promoXnum = 0;
var promoN = 20;
var promoM = 0;
var promoK = 0;
function onCrosspromoClick() {

}