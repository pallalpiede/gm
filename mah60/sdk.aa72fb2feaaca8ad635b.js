"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[630],{6649:function(n,e,t){var r=t(33938),o=t(41819),s=t(30222),i=t.n(s),c=t(6226),u=t.n(c),a=function(){function n(){this.player=void 0,this.context=void 0,this.graphApi=void 0,this.tournament=void 0,this.payments=void 0}var e=n.prototype;return e.getLocale=function(){return null},e.getPlatform=function(){return null},e.getSDKVersion=function(){return"0.0"},e.getSupportedAPIs=function(){return[]},e.getEntryPointData=function(){return null},e.getEntryPointAsync=function(){return new(u())((function(n){n("")}))},e.canCreateShortcutAsync=function(){return new(u())((function(n,e){e(new Error("Not implemented"))}))},e.quit=function(){},e.performHapticFeedbackAsync=function(){return u().resolve()},n}(),d=function(){function n(){}var e=n.prototype;return e.getID=function(){return null},e.getType=function(){return"SOLO"},n}(),l=function(n){function e(e){var t;return(t=n.call(this)||this).sdk=void 0,t.sdk=e,t}(0,o.Z)(e,n);var t=e.prototype;return t.getID=function(){return this.sdk.getID()},t.getType=function(){return this.sdk.getType()},t.isSizeBetween=function(n,e){return this.sdk.isSizeBetween(n,e)},t.switchAsync=function(n){return this.sdk.switchAsync(n)},t.chooseAsync=function(n){return this.sdk.chooseAsync(n)},t.createAsync=function(n){return this.sdk.createAsync(n)},t.getPlayersAsync=function(){return this.sdk.getPlayersAsync()},e}(d),y=l,f=function(){},p=function(n){function e(e){var t;return(t=n.call(this)||this).sdk=void 0,t.sdk=e,t}(0,o.Z)(e,n);var t=e.prototype;return t.getID=function(){return this.sdk.getID()},t.getASIDAsync=function(){return this.sdk.getASIDAsync()},t.getSignedASIDAsync=function(){return this.sdk.getSignedASIDAsync()},t.getName=function(){return this.sdk.getName()},t.getPhoto=function(){return this.sdk.getPhoto()},t.getDataAsync=function(n){return this.sdk.getDataAsync(n)},t.setDataAsync=function(n){return this.sdk.setDataAsync(n)},t.flushDataAsync=function(){return this.sdk.flushDataAsync()},t.getSignedPlayerInfoAsync=function(n){return this.sdk.getSignedPlayerInfoAsync(n)},t.canSubscribeBotAsync=function(){return this.sdk.canSubscribeBotAsync()},t.subscribeBotAsync=function(){return this.sdk.subscribeBotAsync()},t.getConnectedPlayersAsync=function(){return this.sdk.getConnectedPlayersAsync()},t.isGuest=function(){return!1},e}(f),h=p,g=function(n){function e(e){var t;return(t=n.call(this)||this).sdk=void 0,t.player=void 0,t.context=void 0,t.graphApi=void 0,t.tournament=void 0,t.sdk=e,t.player=new h(e.player),t.context=new y(e.context),t}(0,o.Z)(e,n);var t=e.prototype;return t.getLocale=function(){return this.sdk.getLocale()},t.getPlatform=function(){return this.sdk.getPlatform()},t.getSDKVersion=function(){return this.sdk.getSDKVersion()},t.initializeAsync=function(){return this.sdk.initializeAsync()},t.setLoadingProgress=function(n){this.sdk.setLoadingProgress(n)},t.getSupportedAPIs=function(){return this.sdk.getSupportedAPIs()},t.getEntryPointData=function(){return this.sdk.getEntryPointData()},t.getEntryPointAsync=function(){return this.sdk.getEntryPointAsync()},t.setSessionData=function(n){this.sdk.setSessionData(n)},t.startGameAsync=function(){return this.sdk.startGameAsync()},t.shareAsync=function(n){return this.sdk.shareAsync(n)},t.updateAsync=function(n){return this.sdk.updateAsync(n)},t.switchGameAsync=function(n,e){return this.sdk.switchGameAsync(n,e)},t.canCreateShortcutAsync=function(){return this.sdk.canCreateShortcutAsync()},t.createShortcutAsync=function(){return this.sdk.createShortcutAsync()},t.quit=function(){this.sdk.quit()},t.logEvent=function(n,e,t){return this.sdk.logEvent(n,e,t)},t.onPause=function(n){this.sdk.onPause(n)},t.getInterstitialAdAsync=function(n){return this.sdk.getInterstitialAdAsync(n)},t.getRewardedVideoAsync=function(n){return this.sdk.getRewardedVideoAsync(n)},t.matchPlayerAsync=function(n,e,t){return this.sdk.matchPlayerAsync(n,e,t)},t.checkCanPlayerMatchAsync=function(){return this.sdk.checkCanPlayerMatchAsync()},t.getLeaderboardAsync=function(n){return this.sdk.getLeaderboardAsync(n)},t.postSessionScoreAsync=function(n){return this.sdk.postSessionScoreAsync(n)},t.loadBannerAdAsync=function(n){return this.sdk.loadBannerAdAsync(n)},t.updateSizeBannerAds=function(){},t.hideBannerAdAsync=function(){return this.sdk.hideBannerAdAsync()},t.showGameRating=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().reject(new Error("CLIENT_UNSUPPORTED_OPERATION")));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),t.getTournamentAsync=function(){return this.sdk.getTournamentAsync()},t.inviteAsync=function(n){return this.sdk.inviteAsync(n)},t.shareLinkAsync=function(n){return this.sdk.shareLinkAsync(n)},e}(a),A=g,m=t(25110),v=t.n(m),w=function(n){this.sdk=void 0,this.sdk=n},k={createAsync:function(){return u().reject(new Error("Unsupported"))},shareAsync:function(){return u().reject(new Error("Unsupported"))},joinAsync:function(){return u().reject(new Error("Unsupported"))},postScoreAsync:function(){return u().reject(new Error("Unsupported"))},getTournamentsAsync:function(){return u().reject(new Error("Unsupported"))}},S=function(n){function e(){return n.call(this,k)||this}(0,o.Z)(e,n);var t=e.prototype;return t.createAsync=function(n){return u().reject(new Error("Unsupported"))},t.shareAsync=function(n){return u().reject(new Error("Unsupported"))},t.joinAsync=function(n){return u().reject(new Error("Unsupported"))},t.postScoreAsync=function(n){return u().reject(new Error("Unsupported"))},t.getTournamentsAsync=function(){return u().reject(new Error("Unsupported"))},e}(w),I=function(n){function e(){return n.call(this)||this}(0,o.Z)(e,n);var t=e.prototype;return t.getID=function(){return null},t.getType=function(){return"SOLO"},t.isSizeBetween=function(n,e){return null},t.switchAsync=function(n){return u().reject(new Error("Unsupported"))},t.chooseAsync=function(){return u().reject(new Error("Unsupported"))},t.createAsync=function(n){return u().reject(new Error("Unsupported"))},t.getPlayersAsync=function(){return u().reject(new Error("Unsupported"))},e}(d),E=t(24278),P=t.n(E),b=t(33733),D=t.n(b),B=t(19389),U=t.n(B),j=t(28222),T=t.n(j),x=t(87339);function C(n,e){var t="undefined"!==typeof D()&&U()(n)||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,e){var t;if(!n)return;if("string"===typeof n)return L(n,e);var r=P()(t=Object.prototype.toString.call(n)).call(t,8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return v()(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var F="playerInfo",G="playerData",M=function(n){function e(){var e;return(e=n.call(this)||this).randomMockId=void 0,e.randomMockId=Math.random().toString(36).substring(7),e}(0,o.Z)(e,n);var t=e.prototype;return t.initPlayerAsync=function(){var n=(0,x.Th)(F)||{},e=(""+Math.floor(99999999*Math.random()+1e8)).substring(0,8),t="Guest_"+this.randomMockId,r="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light";n.playerId&&"string"===typeof n.playerId&&(e=n.playerId),n.playerName&&"string"===typeof n.playerName&&(t=n.playerName),n.playerPhoto&&"string"===typeof n.playerPhoto&&(r=n.playerPhoto);var o={playerId:e,playerName:t,playerPhoto:r};return(0,x.vk)(F,o),u().resolve()},t.getID=function(){var n=(0,x.Th)(F)||{};return n.playerId&&"string"===typeof n.playerId?n.playerId:"12345678"},t.getASIDAsync=function(){return u().resolve(this.getID())},t.getSignedASIDAsync=function(){var n=this;return u().resolve({getASID:function(){var e;return null!=(e=n.getID())?e:""},getSignature:function(){return"default_token"}})},t.getName=function(){var n=(0,x.Th)(F)||{};return n.playerName&&"string"===typeof n.playerName?n.playerName:null},t.getPhoto=function(){var n=(0,x.Th)(F)||{};return n.playerPhoto&&"string"===typeof n.playerPhoto?n.playerPhoto:null},t.getDataAsync=function(n){for(var e,t=(0,x.Th)(G)||{},r={},o=C(n);!(e=o()).done;){var s=e.value;s!=G?t[s]&&(r[s]=t[s]):r[s]=t}return u().resolve(r)},t.setDataAsync=function(n){return(0,x.vk)(G,n),u().resolve()},t.flushDataAsync=function(){return u().resolve()},t.getSignedPlayerInfoAsync=function(n){var e=this,t={getPlayerID:function(){return e.getID()},getSignature:function(){return"default_token"}};return u().resolve(t)},t.canSubscribeBotAsync=function(){return u().resolve(!1)},t.subscribeBotAsync=function(){return u().reject(new Error("Unsupported"))},t.getStatsAsync=function(n){return u().reject(new Error("Unsupported"))},t.setStatsAsync=function(n){return u().reject(new Error("Unsupported"))},t.incrementStatsAsync=function(n){var e=this,t=T()(n),r={};try{this.getStatsAsync(t).then((function(o){for(var s,i=C(t);!(s=i()).done;){var c=s.value;o[c]||(o[c]=n[c]);var u=n[c];r[c]=o[c]+u}e.setStatsAsync(r)}))}catch(o){return u().reject(o)}return u().resolve(r)},t.getConnectedPlayersAsync=function(){return u().reject(new Error("Unsupported"))},t.isGuest=function(){return!0},e}(f),N=function(n){function e(e,t){var r;return(r=n.call(this)||this).sdk=void 0,r.type=void 0,r.sdk=t,r.type=e,r}(0,o.Z)(e,n);var t=e.prototype;return t.getPlacementID=function(){return this.type},t.loadAsync=function(){var n=this;return new(u())((function(e,t){"mid-roll"===n.type?n.sdk.preloadAd(n.sdk.AdType.Midroll).then(e).catch(t):"pre-roll"===n.type?n.sdk.preloadAd(n.sdk.AdType.Preroll).then(e).catch(t):"rewarded"===n.type?n.sdk.preloadAd(n.sdk.AdType.Rewarded).then(e).catch(t):t(new Error("Unknown ad type"))}))},t.showAsync=function(){var n=this;return new(u())((function(e,t){if("mid-roll"===n.type)n.sdk.showAd(n.sdk.AdType.Midroll).then(e).catch(t);else if("pre-roll"===n.type)n.sdk.showAd(n.sdk.AdType.Preroll).then(e).catch(t);else if("rewarded"===n.type){var r=!1;window.rewardedWatchCompleted=function(){r=!0},n.sdk.showAd(n.sdk.AdType.Rewarded).then((function(){r?e():t({code:"USER_INPUT"})})).catch(t)}else t(new Error("Unknown ad type"))}))},e}((function(){})),O=N,z=function(n){function e(){return n.apply(this,arguments)||this}(0,o.Z)(e,n);var t=e.prototype;return t.requestAsync=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().reject(new Error("Unsupported")));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),t.initPlatformAsync=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().reject(new Error("Unsupported")));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),t.getPlayerASIDAsync=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().reject(new Error("Unsupported")));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e}((function(){})),R=z,Z=function(n){function e(e){var t;return(t=n.call(this)||this).sdk=void 0,t.player=void 0,t.context=void 0,t.graphApi=void 0,t.tournament=void 0,t.midAdInstance=void 0,t.preRollAdInstance=void 0,t.rewardedAdInstance=void 0,t.currentPercentLoading=0,t.isFullScreen=!1,t.bannerAdsConfigs=[],t.initSDKAsync=function(){return new(u())((function(n){t.player=new M,t.context=new I,t.graphApi=new R,t.tournament=new S,t.midAdInstance=new O("mid-roll",t.sdk),t.preRollAdInstance=new O("pre-roll",t.sdk),t.rewardedAdInstance=new O("rewarded",t.sdk),t.player.initPlayerAsync().finally(n)}))},t.addFullScreenButton=function(){var n=window.document.createElement("div");n.className="button-fullscreen",n.id="button-fullscreen",n.innerHTML='<img\n            id="fullscreen-icon"\n            class=""\n            src="./assets/svgs/fullscreen.svg"\n            alt="fullscreen"\n            style="width: 100%; height: 100%"\n        /> <img\n            id="minimize-icon"\n            class=""\n            src="./assets/svgs/minimize.svg"\n            alt="minimize"\n            style="width: 100%; height: 100%"\n            hidden=true\n        />',n.addEventListener("click",t.handleClickFullScreenButton),document.body.appendChild(n),document.body.addEventListener("fullscreenchange",(function(n){var e=window.document.getElementById("fullscreen-icon"),r=window.document.getElementById("minimize-icon");document.fullscreenElement?(t.isFullScreen=!0,e.hidden=!0,r.hidden=!1):(t.isFullScreen=!1,e.hidden=!1,r.hidden=!0)}))},t.listenEventToFullScreen=function(){window.addEventListener("pointerdown",(function n(){t.isFullScreen||t.handleClickFullScreenButton(),window.removeEventListener("pointerdown",n)}))},t.handleClickFullScreenButton=function(){t.isFullScreen?t.exitFullScreen():t.requestFullScreen()},t.isSupportFullScreen=function(){return void 0!=document.body.requestFullscreen},t.requestFullScreen=function(){t.isSupportFullScreen()&&document.body.requestFullscreen()},t.exitFullScreen=function(){void 0!=document.exitFullscreen&&document.exitFullscreen()},t.updateSizeBannerAds=function(){for(var n=0;n<t.bannerAdsConfigs.length;n++){var e=t.bannerAdsConfigs[n],r=e.placementId,o=e.position,s=e.bannerWidth,i=void 0===s?0:s,c=e.bannerHeight,u=void 0===c?0:c;if(!r)return;var a=document.getElementById("Banner-"+e.placementId);a.style.top="auto",a.style.left="auto",a.style.right="auto",a.style.bottom="auto",a.style.width=i+"px",a.style.height=u+"px",a.style.display="flex";var d=window.game.canvas,l=d.offsetWidth,y=(d.offsetHeight,window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),f=(y-l)/2,p=Math.min(f,120);switch(o){case"top":a.style.left="50%",a.style.right="50%",a.style.top="0px",a.style.width="728px",a.style.height="90px",a.style.transformOrigin="top center",a.style.transform="translate(-50%, 0%) scale("+Math.min(u/90,y/728)+")";break;case"left":a.style.top="50%",a.style.bottom="50%",a.style.right="0px",a.style.height="600px",a.style.width="120px",a.style.transformOrigin="center left",a.style.transform="translate(0%, -50%) scale("+p/120+")";break;case"right":a.style.top="50%",a.style.bottom="50%",a.style.right="0px",a.style.height="600px",a.style.width="120px",a.style.transformOrigin="center right",a.style.transform="translate(0%, -50%) scale("+p/120+")";break;case"bottom":a.style.left="50%",a.style.right="50%",a.style.bottom="0px",a.style.width="728px",a.style.height="90px",a.style.transformOrigin="bottom center",a.style.transform="translate(-50%, 0%) scale("+Math.min(u/90,y/728)+")"}}},t.sdk=e,t}(0,o.Z)(e,n);var t=e.prototype;return t.getLocale=function(){return"en"},t.getSDKVersion=function(){return"1.29.77"},t.getSupportedAPIs=function(){return["getLocale","getSDKVersion","initializeAsync","startGameAsync","setLoadingProgress","getInterstitialAdAsync","getRewardedVideoAsync","getPlatform"]},t.initializeAsync=function(){var n=this;return new(u())((function(e,t){var r=document.getElementById("lds-content");if(r)r.hidden=!1;else{var o='<div id="lds-content"><div id="lds-dual-ring"></div><div id="lds-text"><span id="lds-percent">0</span>% loaded</div></div>';"complete"===document.readyState?n.appendHtml(document.body,o):window.addEventListener("load",(function(){n.appendHtml(document.body,o)}))}n.initSDKAsync().then(e).catch(t)}))},t.startGameAsync=function(){var n;return this.setLoadingProgress(100),null==(n=document.getElementById("lds-content"))||n.remove(),u().resolve()},t.setLoadingProgress=function(n){var e=document.getElementById("lds-percent");e&&(this.currentPercentLoading=Math.round(Math.max(Math.min(n,100),this.currentPercentLoading)),e.innerHTML=""+this.currentPercentLoading,this.currentPercentLoading=n)},t.setSessionData=function(n){},t.shareAsync=function(n){return u().reject(new Error("Unsupported"))},t.updateAsync=function(n){return u().reject(new Error("Unsupported"))},t.switchGameAsync=function(n){return u().reject(new Error("Unsupported"))},t.canCreateShortcutAsync=function(){return u().reject(!1)},t.createShortcutAsync=function(){return u().reject(new Error("Unsupported"))},t.logEvent=function(n){return this.sdk.sendEvent(n),null},t.onPause=function(n){},t.getInterstitialAdAsync=function(n){var e=this;return new(u())((function(t){"mid-roll"===n?t(e.midAdInstance):"pre-roll"===n&&t(e.preRollAdInstance)}))},t.getRewardedVideoAsync=function(n){var e=this;return new(u())((function(n){n(e.rewardedAdInstance)}))},t.matchPlayerAsync=function(n){return u().reject(new Error("Unsupported"))},t.checkCanPlayerMatchAsync=function(){return new(u())((function(n,e){e(!1)}))},t.getLeaderboardAsync=function(n){return u().reject(new Error("Unsupported"))},t.postSessionScore=function(n){return u().reject(new Error("Unsupported"))},t.postSessionScoreAsync=function(n){return u().reject(new Error("Unsupported"))},t.appendHtml=function(n,e){var t=document.createElement("div");for(t.innerHTML=e;t.children.length>0;)n.appendChild(t.children[0])},t.getPlatform=function(){var n=navigator.userAgent||navigator.vendor;return/android/i.test(n)?"ANDROID":/iPad|iPhone|iPod/.test(n)&&!window.MSStream?"IOS":"WEB"},t.inviteAsync=function(n){return u().reject(new Error("Unsupported"))},t.getTournamentAsync=function(){return u().reject(new Error("Unsupported"))},t.shareLinkAsync=function(n){return u().reject(new Error("Unsupported"))},t.loadBannerAdAsync=function(n,e){var t=this;return new(u())((function(r,o){n?(t.createBannerAdElement(e),t.sdk.showAd(t.sdk.AdType.Display,{containerId:"Banner-"+e.placementId}).finally((function(){r()}))):o(new Error("Placement ID is required"))}))},t.createBannerAdElement=function(n){var e=n.placementId;n.position,n.bannerWidth,n.bannerHeight;if(e){var t=document.getElementById("Banner-"+n.placementId);t||(this.bannerAdsConfigs.push(n),(t=document.createElement("div")).id="Banner-"+n.placementId,t.className="GameDistributions_banner",t.style.display="flex",t.style.position="fixed",t.style.alignItems="center",t.style.justifyContent="center",t.style.zIndex="98",t.style.position="fixed",t.style.overflow="hidden",document.body.appendChild(t)),this.updateSizeBannerAds()}},t.hideBannerAdAsync=function(n){return new(u())((function(e){if(void 0==n)for(var t=v()(document.getElementsByClassName("GameDistributions_banner")),r=0;r<t.length;r++)t[r].style.display="none";else{var o=document.getElementById("Banner-"+n);o&&(o.style.display="none")}e()}))},t.happyTime=function(){},t.showGameRating=function(){return u().reject(new Error("Unsupported"))},e}(a),H=Z;"FBInstant"in window&&(window.GameSDK=new A(window.FBInstant)),"gdsdk"in window&&(window.GameSDK=new H(window.gdsdk)),window.FBInstant=window.GameSDK},87339:function(n,e,t){t.d(e,{Th:function(){return s},vk:function(){return i}});var r=t(15177),o="Wood Dice Merge",s=function(n,e){void 0===e&&(e=!0);try{var t=e?o+"_"+n:n,r=localStorage.getItem(t);return null===r?null:GameCore.Utils.Json.decode(r)}catch(s){return null}},i=function(n,e){try{var t=o+"_"+n,i=s(t,!1),c={};GameCore.Utils.Valid.isObject(i)&&(c=i);var u=GameCore.Utils.Json.clone(e);if(!GameCore.Utils.Valid.isObject(u))return!1;var a=GameCore.Utils.Object.clear(u),d=(0,r.TS)(c,a),l=GameCore.Utils.Json.encode(d);return localStorage.setItem(t,l),!0}catch(y){return!1}}}}]);