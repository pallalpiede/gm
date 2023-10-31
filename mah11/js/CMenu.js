function CMenu() {
    var _oBg;
    var _oBall;
    var _oBallContainer;
    var _oButPlay;
    var _oButContinue;
    var _oFade;
    var _oAudioToggle;
    var _oMinigolfText;
    var _oWorldText;
    var _oCreditsBut;
    var _oButFullscreen;
    var _oCreditsPanel;
    var _oListenerMouseDown;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    var _pStartPosAudio;
    var _pStartPosPlay;
    var _pStartPosContinue;
    var _pStartPosCredits;
    var _pStartPosFullscreen;

    this._init = function () {
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        var oSprite = s_oSpriteLibrary.getSprite('menu_text_minigolf');
        _oMinigolfText = createBitmap(oSprite);
        _oMinigolfText.regX = oSprite.width/2;
        _oMinigolfText.regY = oSprite.height/2;
        _oMinigolfText.x = CANVAS_WIDTH;
        _oMinigolfText.y = -CANVAS_HEIGHT/2 + 200;
        s_oStage.addChild(_oMinigolfText);

        new createjs.Tween.get(_oMinigolfText).to({x : CANVAS_WIDTH/2 - 270, y: CANVAS_HEIGHT/2 - 100}, 2000, createjs.Ease.cubicOut);

        _oBallContainer = new createjs.Container();
        _oBallContainer.y = CANVAS_HEIGHT/2;
        _oBallContainer.rotation = -30;
        s_oStage.addChild(_oBallContainer);

        var oSprite = s_oSpriteLibrary.getSprite('ball');
        _oBall = createBitmap(oSprite);
        _oBall.regX = oSprite.width/2;
        _oBall.regY = oSprite.height/2;
        _oBallContainer.addChild(_oBall);

        new createjs.Tween.get(_oBall).wait(2000).to({x : CANVAS_WIDTH + 100}, 8000, createjs.Ease.quintOut);
        new createjs.Tween.get(_oBall).wait(2000).to({y : 300}, 1500, createjs.Ease.bounceOut);

        var oSprite = s_oSpriteLibrary.getSprite('menu_text_world');
        _oWorldText = createBitmap(oSprite);
        _oWorldText.regX = oSprite.width/2;
        _oWorldText.regY = oSprite.height/2;
        _oWorldText.x = -CANVAS_WIDTH/2;
        _oWorldText.y = CANVAS_HEIGHT + 400;
        s_oStage.addChild(_oWorldText);

        new createjs.Tween.get(_oWorldText).wait(500).to({x : CANVAS_WIDTH/2 - 40, y: CANVAS_HEIGHT/2 + 30}, 2000, createjs.Ease.cubicOut);

        if(s_oLocalStorage.isDirty()){
            var oSprite = s_oSpriteLibrary.getSprite('but_continue');
            _pStartPosContinue = {x: CANVAS_WIDTH / 2 +450, y: CANVAS_HEIGHT - 80};
            _oButContinue = new CGfxButton(_pStartPosContinue.x, _pStartPosContinue.y, oSprite, s_oStage);
            _oButContinue.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
            _oButContinue.setScalable(false);
            _oButContinue.trembleAnimation();

            var oSprite = s_oSpriteLibrary.getSprite('but_play');
            _pStartPosPlay = {x: CANVAS_WIDTH / 2 +210, y: CANVAS_HEIGHT + 65};
            _oButPlay = new CGfxButton(_pStartPosPlay.x, _pStartPosPlay.y, oSprite, s_oStage);
            _oButPlay.addEventListener(ON_MOUSE_UP, this._onButReset, this);
            _oButPlay.setScalable(false);
        }else {
            var oSprite = s_oSpriteLibrary.getSprite('but_play');
            _pStartPosPlay = {x: CANVAS_WIDTH / 2 +350, y: CANVAS_HEIGHT -10};
            _oButPlay = new CGfxButton(_pStartPosPlay.x, _pStartPosPlay.y, oSprite, s_oStage);
            _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
            _oButPlay.setScalable(false);
            _oButPlay.trembleAnimation();
        }

        var oSprite = s_oSpriteLibrary.getSprite('but_info');
        _pStartPosCredits = {x: (oSprite.height/2) + 10, y: (oSprite.height/2) + 10};            
        _oCreditsBut = new CGfxButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -240,oSprite, s_oStage);
        _oCreditsBut.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height / 2) - 10, y: (oSprite.height / 2) + 10};
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
            _pStartPosFullscreen = {x:_pStartPosCredits.x + oSprite.width/2 + 10,y:oSprite.height/2 + 10};

            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({alpha: 0}, 1000);
        
        
        if(!s_bStorageAvailable){
            new CMsgBox(TEXT_ERR_LS,s_oStage);
        }
        
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    };

    this.refreshButtonPos = function (iNewX, iNewY) {
        _oCreditsBut.setPosition(_pStartPosCredits.x + iNewX,iNewY + _pStartPosCredits.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX, iNewY + _pStartPosAudio.y);
        }
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + iNewX,_pStartPosFullscreen.y + iNewY);
        }
    };

    this.unload = function () {
        _oButPlay.unload();
        _oButPlay = null;

        _oFade.off("mousedown", _oListenerMouseDown);
        
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.unload();
        }

        _oCreditsPanel = null;
        s_oStage.removeAllChildren();

        s_oMenu = null;
    };

    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };

    this._onButPlayRelease = function () {
        var oParent = this;
        _oListenerMouseDown = _oFade.on("mousedown", function(){});
        createjs.Tween.get(_oFade, {override:true}).to({alpha: 1}, 500).call(function () {
            oParent.unload();
            
            $(s_oMain).trigger("start_session");
            s_oMain.gotoLevelMenu();
        });
        
    };
    
    this._onButReset = function () {
        var oSafetyPanel = new CAreYouSurePanel(s_oMenu.removeDataAndContinue);
        oSafetyPanel.changeMessage(TEXT_SAVE_REMOVE);
    };

    this.removeDataAndContinue = function(){
        s_oLocalStorage.resetAllData();
        
        $(s_oMain).trigger("start_session");
        s_oMenu._onButPlayRelease();
    };

    this._onCreditsBut = function(){
        _oCreditsPanel = new CCreditsPanel();
    };
    
    this.resetFullscreenBut = function(){
	_oButFullscreen.setActive(s_bFullscreen);
    };


    this._onFullscreenRelease = function(){
        if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();
    };

    s_oMenu = this;

    this._init();
}

var s_oMenu = null;