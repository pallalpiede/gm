let azAdWrapper;const sgSdk=function(){let e;window.console.log=()=>{};let a=!1,n=!1;function t(e){"pagehide"===e.type||"blur"===e.type?window.game.onBlur.dispatch(e):"pageshow"!==e.type&&"focus"!==e.type||window.game.onFocus.dispatch(e)}function d(){window.game.time.gamePaused(),window.game.sound.setMute()}function s(){window.game.input.reset(),window.game.time.gameResumed(),window.game.sound.unsetMute()}function o(){window.game.onPause.dispatch()}function r(){window.game.onResume.dispatch()}function i(){n=!1,o()}function l(){n=!0,!1===a&&r()}function c(){!function(){let e=document.getElementById("loader");e&&(e.style.display="block")}(),a=!0}function g(){window.focus(),a=!1,n=!0,function(){let e=document.getElementById("loader");e&&(e.style.display="none")}(),r()}function p(e,a){c(),azAdWrapper.once(h5ads.AdEvents.CONTENT_PAUSED,(()=>{o()})),azAdWrapper.once(h5ads.AdEvents.CONTENT_RESUMED,(()=>{azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_PAUSED),azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_RESUMED),e.callback.call(a),g()})),azAdWrapper.showAd(h5ads.AdType.interstitial)}return{initialize:function(a,n,t){e=n;const d={config:{rewarded:{enabled:!0},env:{locale:(e=>{const a=new Proxy(new URLSearchParams(window.location.search),{get:(e,a)=>e.get(a)});if(a.lang)return a.lang;let n=(navigator.language||navigator.userLanguage).substr(0,2);return-1===e.indexOf(n)&&(n="en"),n})(e.supportedLanguages)}}};var s=window._azerionIntegration;window.hasOwnProperty("fbrqSA")&&!0===window.fbrqSA&&(h5branding.Utils.ASSET_LOCATION="assets/"),h5branding.SplashLoader.getInstance({gameId:s.gdId,gameName:document.title,gameTitle:document.title,libs:[],version:"1.0"}).create().then((()=>{azAdWrapper=new h5ads.AdWrapper(s.advType,s.gdId),t(null,d,sgSdk)})).catch((e=>{}))},trigger:function(e,a,r){switch(e){case"restore":!function(e,a){e.callback.call(a,localStorage.getItem(e.key))}(a,r);break;case"loading.completed":!function(e,a){h5branding.SplashLoader.getInstance().setLoadProgress(100),h5branding.SplashLoader.getInstance().setButtonCallback((()=>{h5branding.SplashLoader.getInstance().destroy(),p(e,a)})),n=!0,window.game.stage.disableVisibilityChange=!0,window.game.canvas.oncontextmenu=function(e){e.preventDefault()},Phaser.Stage.prototype.visibilityChange=t,window.game.onBlur.add(i),window.game.onFocus.add(l),window.game.onPause.add(d),window.game.onResume.add(s)}(a,r);break;case"loading.update":!function(e,a){h5branding.SplashLoader.getInstance().setLoadProgress(e.progressPercentage)}(a);break;case"levelStart":case"gameTracking":case"start":case"levelFinish":default:break;case"save":!function(e,a){localStorage.setItem(e.key,e.value),e.callBack&&e.callback.call(a)}(a,r);break;case"gameOver":case"beforePlayButtonDisplay":case"playButtonPressed":!function(e,a){e.callback.call(a)}(a,r);break;case"interstitialAd":p(a,r);break;case"rewardedAd":!function(e,a){c();let n=!1;azAdWrapper.on(h5ads.AdEvents.AD_REWARDED,(()=>{n=!0})),azAdWrapper.on(h5ads.AdEvents.CONTENT_PAUSED,(()=>{o()})),azAdWrapper.on(h5ads.AdEvents.CONTENT_RESUMED,(()=>{azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_PAUSED),azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_RESUMED),azAdWrapper.removeAllListeners(h5ads.AdEvents.AD_REWARDED),azAdWrapper.preloadAd(h5ads.AdType.rewarded),e.callback.call(a,n),g()})),azAdWrapper.showAd(h5ads.AdType.rewarded)}(a,r)}}}}();