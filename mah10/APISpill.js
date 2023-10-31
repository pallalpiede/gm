// include the following in the head of the index :
/**
	<script type="text/javascript">
		var SpilData = {
			id: 'GAME_ID_HERE'
		};
	</script>
	<script type="text/javascript" src="http://cdn.gameplayer.io/api/js/game.js"></script>
	<script type="text/javascript" src="http://cdn.gameplayer.io/api/js/developer.js"></script>
	<style>
		.spilgames-branding-image{
			display: block;
			left: 50px;
			top: 100px;
			position: absolute;
		}
	</style>
**/

// V10

var IV_blockerDiv;
var IV_isThereABlocker = false;
var checkBody4Blocker = setInterval(function(){
	if(typeof(document) == "undefined") return;
	if(typeof(document.body) == "undefined") return;
	if(typeof(document.body.appendChild) == "undefined") return;
	clearInterval(checkBody4Blocker);
	window.IV_blockerDiv = document.createElement('div');
	window.IV_blockerDiv.innerHTML = '&nbsp;';
	window.IV_blockerDiv.className = 'adsbox';
	document.body.appendChild(window.IV_blockerDiv);
	window.setTimeout(function() {
	  if (window.IV_blockerDiv.offsetHeight === 0) {
		window.IV_isThereABlocker = true;
	  }
	  window.IV_blockerDiv.remove();
	}, 100);
}, 100);
	
(function(){
	var eventToFire = {};
	
	eventToFire.events = {};
	eventToFire.registerEvent = function(eventName, callback, staticArgs){
		if(typeof(eventName) != 'string') return false;
		if(typeof(callback) != 'function' && typeof(callback) != 'string') return false;
		if(typeof(this.events[eventName]) == 'undefined')	this.events[eventName] = [];
		this.events[eventName].push({"func":callback, "staticArgs":staticArgs});
		return true;
	}
	eventToFire.fireEvent = function(eventName,args){
		if(typeof(eventName) != 'string') return false;
		if(typeof(this.events[eventName]) == 'undefined') return false;
		for(var i =0; i < this.events[eventName].length;i++){
				this.events[eventName][i]["func"](args, this.events[eventName][i]["staticArgs"]);
		}
		return true;
	}
	eventToFire.getAllEvent = function(){
		return this.events;
	}

	window.eventToFire = eventToFire;
}());

function c2LayoutChange(){
	if(typeof(eventToFire) != "undefined"){
		eventToFire.fireEvent('c2LayoutChange', arguments);
	}
}

function gameOver(){
	if(typeof(eventToFire) != "undefined"){
		eventToFire.fireEvent('gameOver', arguments);//(totalScore, win, scoreObj)
	}
}

var SpilDebug = true;
var SpilLogo;
var SpilLogoSrc;
 
function showSpilLogo(){ if(typeof(SpilLogo) != "undefined") SpilLogo.style.display = "block"; SpilLogo.src = SpilLogoSrc; }
function hideSpilLogo(){ if(typeof(SpilLogo) != "undefined") SpilLogo.style.display = "none"; SpilLogo.src = "about:blank";}

GameAPI.loadAPI(function (apiInstance) {
	if (SpilDebug)	console.log('GameAPI version ' + apiInstance.version + ' loaded!');
	//Logo
	var logoData = apiInstance.Branding.getLogo();
	if (logoData.image) {
		SpilLogo = document.createElement('img');
		SpilLogo.src = logoData.image;
		SpilLogoSrc = SpilLogo.src;
		SpilLogo.id = "spilLogoOverTheGame";
		if (SpilLogo.addEventListener) {
			SpilLogo.addEventListener('click', logoData.action);
			SpilLogo.addEventListener('touchend', logoData.action);
		} else if (SpilLogo.attachEvent) {
			SpilLogo.attachEvent('click', logoData.action);
			SpilLogo.attachEvent('touchend', logoData.action);
		}
		SpilLogo.className += " spilgames-branding-image";   
		document.body.appendChild(SpilLogo);
		if(typeof(eventToFire) != "undefined"){
			eventToFire.registerEvent('c2LayoutChange', function(args){ //function c2LayoutChange(state,name,force){
				switch(args[1]){
					case "gameMain":
					case "GameMain":
					case "gamemain":
					//HIDE_ICON_GAMEMAIN
						var hideIcon = true;
						if(typeof SpilData !== "undefined"){
							if(typeof SpilData.HIDE_ICON_GAMEMAIN === "boolean") hideIcon = SpilData.HIDE_ICON_GAMEMAIN;
						}
						if(hideIcon && args[0] == "in") hideSpilLogo();
					break;
					default:
						showSpilLogo();
					break;
				}
			});
		}
	}
	//MoreGame
	window.canClickOnMG = true;
	window.buttonProperties = apiInstance.Branding.getLink('more_games');
	setInterval(function(){
		if(typeof(window.buttonProperties) != "undefined"){
			window.showMG = function(){
				if(canClickOnMG){
					window.buttonProperties.action();
					window.canClickOnMG = false;
					setTimeout(function(){window.canClickOnMG = true}, 1500);
				}
			}
		}
	}, 100);
	//Pause
	if(typeof(eventToFire) != "undefined"){
		eventToFire.registerEvent('c2LayoutChange', function(args){ //function c2LayoutChange(state,name,force){
			switch(args[1]){
				case "gameOver":
				case "GameOver":
				case "gameover":
					if(args[0] == "in"){
						GameAPI.GameBreak.request(function(){
							if(typeof(cr_setSuspended) == "function") cr_setSuspended(true);
						}, function(){
							if(typeof(cr_setSuspended) == "function") cr_setSuspended(false);
						});
					}
				break;
				default:
				break;
			}
		});
	}
	//SCORE 
	window.spil_submitScore = function(scoreToSubmit){
		GameAPI.Score.submit(scoreToSubmit);
		return "1";
	};
	//backward compatibility
	window.spill_submitScore = window.spil_submitScore;
	
	//Custom Ads
	window.spil_gameOver = function(win){
		GameAPI.GameBreak.request(function(){
			if(typeof(cr_setSuspended) == "function") cr_setSuspended(true);
		}, function(){
			if(typeof(cr_setSuspended) == "function") cr_setSuspended(false);
		});
	}
	
	if(typeof(eventToFire) != "undefined"){
		eventToFire.registerEvent('gameOver', function(args){ //(totalScore, win, scoreObj)
			var autoSubmit = true;
			if(typeof SpilData !== "undefined"){
				if(typeof SpilData.SCORE_AUTOSUBMIT === "boolean") autoSubmit = SpilData.SCORE_AUTOSUBMIT;
			}
			if(autoSubmit && typeof(args[2].score) !== "undefined"){
				spil_submitScore(args[2].score);
			}
		});
	}
	
	if(typeof(SpilData["ACTIVE_IV"]) != "boolean") SpilData.ACTIVE_IV = false;
	if(SpilData.ACTIVE_IV && typeof(GameAPI.GameBreak.reward) == "function" && typeof(GameAPI.GameBreak.isAvailable) == "function"){
		window.isPMAvailable = function(C2Callback){
			var rep = "1";
			if(typeof(c2_callFunction) != 'undefined' && typeof(C2Callback) != 'undefined') c2_callFunction(C2Callback, [rep]);
			if (SpilDebug)	console.log("isPMAvailable =>", arguments, " ret FAKED to 1");
			return rep;
		};
		
		window.prepareTJEvent = function (eventName, forceParam, C2cbOnReadyStateTrue, C2cbOnReadyStateFalse, repeat, retry){
			if(SpilDebug)	console.log("prepareTJEvent", arguments);
			if(typeof(eventName) == 'undefined') return;
			if(typeof(forceParam) == 'undefined'){
				window.IV_forceParam = undefined;
			}else if(forceParam == "undefined"){
				window.IV_forceParam = undefined;
			}
			window.IV_eventName = eventName || "";
			window.IV_C2cbOnReadyStateTrue = C2cbOnReadyStateTrue || "";
			window.IV_C2cbOnReadyStateFalse = C2cbOnReadyStateFalse || "";
			window.IV_repeat = repeat || true;
			window.IV_retry = retry || 40;
			
			isTJEventReady(eventName, C2cbOnReadyStateTrue, C2cbOnReadyStateFalse);
		};
		
		window.isTJEventReady = function (eventName, cbC2Yes, cbC2No){
			if(SpilDebug)	console.log("isTJEventReady", arguments);
			window.IV_eventName = eventName || "";
			cbC2Yes = cbC2Yes || "";
			cbC2No = cbC2No || "";
			var _ret = GameAPI.GameBreak.isAvailable();
			if(typeof(c2_callFunction) != 'undefined'){
				if(_ret && cbC2Yes !="") c2_callFunction(cbC2Yes, [eventName, "1"]);
				else if(cbC2No !="") c2_callFunction(cbC2No, [eventName, "0"]);
			}
			return ((_ret === true) ? "1": "0");
		};
		
		window.launchTJEvent = function (eventName, C2cbOnFail, C2cbOnVideoDidAppear, C2cbOnVideoDidDisappear, forceReload, fallBackOnOfferWall){
			if(SpilDebug)	console.log("launchTJEvent", arguments);
			if(typeof(eventName) === "undefined") return false;
			if(window.IV_isThereABlocker){
				if(SpilDebug)	console.log("An ad blocker blocks the ad, no reward");
				if(typeof(c2_callFunction) != 'undefined'){
					c2_callFunction(C2cbOnFail, [eventName, "0"]);
					return;
				}
			}
			window.IV_eventName = eventName;
			window.IV_C2cbOnFail = C2cbOnFail || "";
			window.IV_C2cbOnVideoDidAppear = C2cbOnVideoDidAppear || "";
			window.IV_C2cbOnVideoDidDisappear = C2cbOnVideoDidDisappear || "";
			GameAPI.GameBreak.reward(function(){
				//pause game :
				if(SpilDebug)	console.log("rewarded : Pausing game", arguments);
				if(typeof(cr_setSuspended) == "function") cr_setSuspended(true);
				if(typeof(c2_callFunction) == 'function' && window.IV_C2cbOnVideoDidAppear != "") c2_callFunction(window.IV_C2cbOnVideoDidAppear, [window.IV_eventName, "1"]);
				
			}, function(data){
				//resume game :
				if(SpilDebug)	console.log("rewarded : Resuming game", arguments);
				if (data && data.completed) {
					//document.getElementById("c2canvasdiv").style.display = "none"; //if it's require to hide the game
					if(typeof(c2_callFunction) == 'function' && window.IV_C2cbOnVideoDidDisappear != "") c2_callFunction(window.IV_C2cbOnVideoDidDisappear, [window.IV_eventName, "1"]);
					if(typeof(cr_setSuspended) == "function") cr_setSuspended(false);
					if(SpilDebug)	console.log("rewarded : success => grant reward");
					return true;
				}
				c2_callFunction(window.IV_C2cbOnFail, [eventName, "0"]);
				if(typeof(cr_setSuspended) == "function") cr_setSuspended(false);
				if(SpilDebug)	console.log("rewarded : fail => back to game");
				return false;
			});
		}
	}
	
}, SpilData);

function onTouchSplashPlay(){
	console.log("try fullscreen");
	var theGame = document.getElementById("c2canvas");
	if(typeof(theGame.webkitRequestFullscreen) != "undefined" ) theGame.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	if(typeof(theGame.mozRequestFullScreen) != "undefined" ) theGame.mozRequestFullScreen();
	if(typeof(theGame.msRequestFullscreen) != "undefined" ) theGame.msRequestFullscreen();
	if(typeof(theGame.requestFullscreen) != "undefined" ) theGame.requestFullscreen();
}

//ROTATOR START 
if(typeof(SpilData["ACTIVE_IV"]) !== "boolean") SpilData.ACTIVE_IV = false;
if(typeof(SpilData["ACTIVE_ROTATOR"]) !== "boolean") SpilData.ACTIVE_ROTATOR = true;
if(typeof(SpilData["ORIENTATION"]) === "undefined") SpilData.ORIENTATION = "landscape";
var onMobile, reallyOnMobile; onMobile = reallyOnMobile = (navigator.userAgent.match(/(mobile|android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi));
function checkOrientation(){
	if(!SpilData["ACTIVE_ROTATOR"] || !reallyOnMobile){
		hideRotator();
		return true;
	}
	if (SpilDebug)	console.log("activated and on mobile");
	if((SpilData["ORIENTATION"] !== "landscape") && jQuery(window).width() > jQuery(window).height()){
		displayRotator('portrait');
		return false;
	}
	if(!(SpilData["ORIENTATION"] !== "landscape") && jQuery(window).width() < jQuery(window).height()){
		displayRotator('landscape');
		return false;
	}
	if (SpilDebug)	console.log("No rotator issue");
	hideRotator();
	return true;
}

function displayRotator(orientation){
	var gameElement = document.getElementById("c2canvasdiv");
	var rotatorElement = document.getElementById("rotator");
	// if(gameElement.style.display != "block" || rotatorElement.style.display != "none" || (window["cr_getC2Runtime"]().isSuspended !== false && window["cr_getC2Runtime"]().pi  !== false )) return false;
	if(rotatorElement.style.display != "none") return false;
	cr_setSuspended(true);
	gameElement.style.display = "none";
	rotatorElement.innerHTML = "";
	rotatorElement.innerHTML = '<img id="rotatorLogo" src="./rotate-device-to-' + orientation + '.jpg" />';
	rotatorElement.style.display = "block";
	rotatorElement.style.backgroundColor = "black";
	rotatorElement.style.width = "100%";
	rotatorElement.style.height = "100%";
	window.centerRotatorTimer = setInterval(function(){	centerRotator();	}, 100);
	return true;
}

function centerRotator(){
	var rotatorElement = document.getElementById("rotator");
	rotatorElement.style.paddingLeft = jQuery(window).width() / 2 - jQuery("#rotatorLogo").width() / 2 +"px";
	rotatorElement.style.paddingTop = jQuery(window).height() / 2 - jQuery("#rotatorLogo").height() / 2 +"px";
	rotatorElement.style.paddingBottom = jQuery(window).height() / 2 - jQuery("#rotatorLogo").height() / 2 +"px";
}

function hideRotator(){
	var gameElement = document.getElementById("c2canvasdiv");
	var rotatorElement = document.getElementById("rotator");
	if(rotatorElement.style.display == "none") return false;
	rotatorElement.innerHTML = "";
	rotatorElement.style.display = "none";
	gameElement.style.display = "block";
	// if(window["cr_getC2Runtime"]().isSuspended === true) cr_setSuspended(false);
	cr_setSuspended(false);
	clearInterval(window.centerRotatorTimer);
	return true;
}
//place the icon
function fixIconPlacement(){
	if(typeof(SpilData["ICON_ALIGN"]) === "undefined") SpilData.ICON_ALIGN = 'top-left';
	if(SpilData.ICON_ALIGN.indexOf("right") !== -1)	$('#spilLogoOverTheGame').css('left', $(window).width() - $('#spilLogoOverTheGame').width());
	if(SpilData.ICON_ALIGN.indexOf("bottom") !== -1)	$('#spilLogoOverTheGame').css('top', $(window).height() - $('#spilLogoOverTheGame').height());
}

var waitForJQ = setInterval(function(){
	if(typeof(jQuery) == "undefined") return;
	jQuery(document).ready(function (){
		if(checkOrientation() || !SpilData.ACTIVE_ROTATOR)	hideRotator();
		if(SpilData.ACTIVE_ROTATOR && reallyOnMobile){
			jQuery(window).resize(function(){
				if(checkOrientation())	hideRotator();
			});
		}
	});
	
	//ios fs fix V2
	$(window).resize(function(){
		document.body.scrollTop = 0;
		fixIconPlacement();
	});
	$(window).scroll(function(){
		if (document.activeElement === document.body && window.scrollY > 0) {
			document.body.scrollTop = 0;
		}
	});
	
	$('#spilLogoOverTheGame').load(fixIconPlacement);
	$(window).resize(fixIconPlacement);
	fixIconPlacement();
	
	clearInterval(waitForJQ);
},100);
//ROTATOR END
