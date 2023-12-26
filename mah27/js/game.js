var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Consts = /** @class */ (function () {
    function Consts() {
    }
    Consts.DELAY_BETWEEN_EVENTS_TOUCH = 200;
    Consts.DELAY_BETWEEN_EVENTS_DESKTOP = 100;
    Consts.timeToHint = 350;
    return Consts;
}());
var WebFontConfig = {
    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function () {
        console.log("loadgoooglefonts");
        SimpleGame.myGame.time.events.add(Phaser.Timer.SECOND, function () {
            SimpleGame.fontsLoadedFlag = true;
        }, this);
    },
    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
        families: ["Open Sans"]
    }
};
var mouseIsWithinGame;
var SimpleGame = /** @class */ (function () {
    function SimpleGame() {
        // create our phaser game
        // 800 - width
        // 600 - height
        // Phaser.AUTO - determine the renderer automatically (canvas, webgl)
        // 'content' - the name of the container to add our game to
        // { preload:this.preload, create:this.create} - functions to call for our states
        this.mouseMovedWithinGameTicks = 0;
        this.ticks = 0;
        var config = {
            width: 880,
            height: 600,
            renderer: Phaser.CANVAS,
            parent: 'content',
            disableVisibilityChange: true
        };
        this.game = new Phaser.Game(config);
        SimpleGame.myGame = this.game;
        document.body.addEventListener('click', function () {
            var context = new AudioContext();
            // Setup all nodes
            SimpleGame.myGame.sound.context.resume();
        });
        // this.game.stage.disableVisibilityChange = true;
        // this.game.stage.backgroundColor = 0xffffff;
        // SimpleGame.myGame.stage.visible = false;
        if (SimpleGame.isReleaseVersion) {
            console.log = function () { };
        }
        this.boot = new Phaser.State();
        this.game.state.add("Boot", this.boot, true);
        this.gamestate = new Phaser.State();
        this.gamestate.preload = this.preload;
        this.gamestate.create = this.create;
        this.gamestate.update = this.update;
        this.game.state.add("Gamestate", this.gamestate, false);
        var resizeF = function () {
            console.log("resize game");
            var deviceWidth = window.outerWidth;
            var deviceHeight = window.outerHeight;
            if (SimpleGame.myGame.device.desktop == false) {
                var scaleX = deviceWidth / 880;
                var scaleY = deviceHeight / 600;
                var scale = Math.min(scaleX, scaleY);
                SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
                SimpleGame.myGame.scale.setUserScale(scale, scale);
                console.log("set to user scale: " + scale, scaleX, scaleY);
                SimpleGame.myGame.scale.pageAlignHorizontally = true;
            }
            else {
                SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                SimpleGame.myGame.scale.pageAlignVertically = true;
                SimpleGame.myGame.scale.pageAlignHorizontally = true;
            }
            SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            SimpleGame.myGame.scale.pageAlignVertically = true;
            SimpleGame.myGame.scale.pageAlignHorizontally = true;
            SimpleGame.myGame.scale.refresh();
        };
        this.boot.preload = function () {
            SimpleGame.myGame.stage.disableVisibilityChange = true;
            this.game.load.image('logo', "assets/SPLASH.png");
            this.game.stage.backgroundColor = 0xffffff;
            // this.game.scale.pageAlignVertically = true;
            // this.game.scale.pageAlignHorizontally = true;
            // SimpleGame.myGame.input.mspointer.stop()
            window.addEventListener("resize", resizeF);
            SimpleGame.myGame.stage.disableVisibilityChange = true;
            resizeF();
            // console.log("scale mode: " + this.game.scale.scaleMode);
            this.game.time.advancedTiming = true;
            // this.game.scale.setMinMax(0, 0, window.innerWidth, window.innerHeight);
            this.game.scale.refresh();
            console.log("height: " + window.innerHeight + ", " + window.innerWidth + ", " + this.game.height + "," + this.game.scale.sourceAspectRatio);
            // console.log(window.screen.width, window.screen.height)
            // console.log(window.outerWidth, window.outerHeight)
        };
        this.boot.create = function () {
            // SimpleGame.logo = this.game.add.sprite( 0, 0, 'logo' );
            // SimpleGame.logo.visible = true;
            this.game.state.start("Gamestate");
        };
        console.log(Phaser.VERSION);
    }
    SimpleGame.prototype.preload = function () {
        // add our logo image to the assets class under the
        // key 'logo'. We're also setting the background colour
        // so it's the same as the background colour in the image
        SimpleGame.logo = this.game.add.sprite(0, 0, 'logo');
        SimpleGame.logo.visible = false;
        // SimpleGame.logo.visible = true;
        Card.preload();
        this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        this.game.load.image('game_bg', "assets/game_bg_fl_es.png");
        this.game.load.image('TURN', "assets/TURN.png");
        // this.game.load.image('bg', "assets/UI/bg.jpg")
        // this.game.load.image('button_menu', "assets/UI/button_menu.png")
        // this.game.load.image('button_menu_over', "assets/UI/button_menu_over.png")
        // this.game.load.image('logo_solitaire', "assets/UI/logo_solitaire.png")
        // this.game.load.image('logo_spider', "assets/UI/logo_spider.png")
        this.game.load.image('open_menu2', "assets/UI/menu.png");
        this.game.load.image('open_menu2_over', "assets/UI/menu_over.png");
        this.game.load.image('undo', "assets/UI/undo.png");
        this.game.load.image('undo_over', "assets/UI/undo_over.png");
        // this.game.load.image('button_hint', "assets/UI/button_hint.png")
        // this.game.load.image('button_hint_mouseover', "assets/UI/button_hint_mouseover.png")
        // this.game.load.image('bg_menu', 'assets/UI/bg_menu.png')
        // this.game.load.image('bg_first_game', 'assets/UI/bg_first_game.png')
        // this.game.load.image('bg_new_game', 'assets/UI/bg_new_game.png')
        // this.game.load.image('bg_rest', 'assets/UI/bg_rest.png')
        // this.game.load.image('prompt_confirmation', 'assets/UI/prompt_confirmation.png')
        // this.game.load.image('prompt_won_bg', 'assets/UI/prompt_won_bg.png')
        // this.game.load.image('prompt_button', 'assets/UI/prompt_button.png')
        // this.game.load.image('button', 'assets/UI/button.png')
        // this.game.load.image('prompt_button_over', 'assets/UI/prompt_button_over.png')
        // this.game.load.image('button_over', 'assets/UI/button_over.png')
        // this.game.load.image('prompt_columns_bg', 'assets/UI/PROMPT_EMPTYCOLUMN/prompt_columns_bg.png')
        // this.game.load.image('prompt_stats', 'assets/UI/PROMPT_STATS/prompt_stats_bg.png')
        // this.game.load.image('checkbox', 'assets/UI/PROMPT_EMPTYCOLUMN/checkbox.png')
        // this.game.load.image('checkbox_checked', 'assets/UI/PROMPT_EMPTYCOLUMN/checkbox_checked.png')
        this.game.load.image('background_menuandlevels', 'assets/UI/background_menuandlevels.png');
        this.game.load.image('button_background_menulevels', 'assets/UI/button_background_menulevels.png');
        this.game.load.image('button_over_background_menulevels', 'assets/UI/button_over_background_menulevels.png');
        this.game.load.image('background_textboxes', 'assets/UI/PROMPTS_TEXTBOXES/background_textboxes.png');
        this.game.load.image('background_textboxes_won', 'assets/UI/PROMPTS_TEXTBOXES/background_textboxes_won.png');
        this.game.load.image('button_over_textboxes', 'assets/UI/PROMPTS_TEXTBOXES/button_over_textboxes.png');
        this.game.load.image('button_textboxes', 'assets/UI/PROMPTS_TEXTBOXES/button_textboxes.png');
        console.log("load language.xml");
        this.game.load.xml('language', 'assets/language.xml');
        // this.game.load.audio('begin_animation', ['assets/SOUNDS/begin_animation.mp3','assets/SOUNDS/begin_animation.ogg'])
        this.game.load.audio('clearrow', ['assets/SOUNDS/clearrow.mp3', 'assets/SOUNDS/clearrow.ogg']);
        this.game.load.audio('click', ['assets/SOUNDS/click.mp3', 'assets/SOUNDS/click.ogg']);
        this.game.load.audio('fail', ['assets/SOUNDS/fail.mp3', 'assets/SOUNDS/fail.ogg']);
        this.game.load.audio('grabcard', ['assets/SOUNDS/grabcard.mp3', 'assets/SOUNDS/grabcard.ogg']);
        this.game.load.audio('valid', ['assets/SOUNDS/valid.mp3', 'assets/SOUNDS/valid.ogg']);
        this.game.load.audio('won', ['assets/SOUNDS/won.mp3', 'assets/SOUNDS/won.ogg']);
        this.game.load.audio('hint', ['assets/SOUNDS/hint.mp3', 'assets/SOUNDS/hint.ogg']);
        this.game.load.audio('no-more-hints', ['assets/SOUNDS/no-more-hints.mp3', 'assets/SOUNDS/no-more-hints.ogg']);
        this.game.load.audio('deal1card', ['assets/SOUNDS/deal1card.mp3', 'assets/SOUNDS/deal1card.ogg']);
        // this.game.sound.setDecodedCallback([ SoundManager.beginAnimation ], start, this);
    };
    SimpleGame.prototype.create = function () {
        // add the 'logo' sprite to the game, position it in the
        // center of the screen, and set the anchor to the center of
        // the image so it's centered properly. There's a lot of
        // centering in that last sentence
        // SoundManager.beginAnimation = this.game.add.audio('begin_animation')
        SoundManager.clearrow = this.game.add.audio('clearrow');
        SoundManager.click = this.game.add.audio('click');
        SoundManager.click = this.game.add.audio('click');
        SoundManager.fail = this.game.add.audio('fail');
        SoundManager.grabcard = this.game.add.audio('grabcard');
        SoundManager.valid = this.game.add.audio('valid');
        SoundManager.won = this.game.add.audio('won');
        SoundManager.dealcards = this.game.add.audio('deal1card');
        SoundManager.hint = this.game.add.audio('hint');
        SoundManager.noMoreHints = this.game.add.audio('no-more-hints');
        // SoundManager.noMoreHints = this.game.add.audio('deal1card')
        SimpleGame.myGame.scale.forceOrientation(true, false);
        SimpleGame.myGame.scale.enterIncorrectOrientation.add(function () {
            SimpleGame.myGame.time.events.add(1, function () {
                var deviceWidth = window.innerWidth;
                var deviceHeight = window.innerHeight;
                // SimpleGame.myGame.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
                // SimpleGame.myGame.scale.refresh()
                var isIframed = false;
                if (window.self !== window.top) {
                    isIframed = true;
                }
                if (isIframed)
                    return;
                console.log("add turn image");
                // SimpleGame.myGame.scale.setGameSize(window.innerWidth, window.innerHeight)
                // SimpleGame.myGame.scale.currentScaleMode = Phaser.ScaleManager.NO_SCALE
                // SimBpleGame.myGame.renderer.resize(window.innerWidth,window.innerHeight)
                // this.turnImage = SimpleGame.myGame.add.image(SimpleGame.myGame.height/2,SimpleGame.myGame.width/2,'TURN');
                // this.turnImage.anchor.set(0.5,0.5)
                this.turnImage = SimpleGame.myGame.add.image(0, 0, 'TURN');
                this.turnImage.width = 880;
                this.turnImage.height = 600;
                // this.turnImage.scaleX = this.game.height / this.turnImage.width;
                // this.turnImage.scaleY = this.game.width / this.turnImage.height;
                SimpleGame.myGame.input.enabled = false;
                // this.turnImage.rotation = Math.PI/2;
                var splash = document.getElementById('splash');
                if (splash) {
                    splash.parentNode.removeChild(splash);
                }
            }, this);
        }, this);
        SimpleGame.myGame.scale.leaveIncorrectOrientation.add(function () {
            // console.log(window.innerWidth, window.innerHeight, window.outerWidth, window.outerHeight)
            // SimpleGame.myGame.scale.setGameSize(880, 600)
            var deviceWidth = window.outerWidth;
            var deviceHeight = window.outerHeight;
            SimpleGame.myGame.input.enabled = true;
            if (this.turnImage) {
                this.turnImage.destroy();
            }
            if (deviceWidth < deviceHeight) {
            }
            else {
            }
            // this.whitefg.destroy();
        }, this);
        SoundManager.init();
        this.ticks = 0;
        var text = this.game.add.text(870, 32, '', { font: "35px Comic Sans MS", fill: "#ff0000" });
        text.text = "super";
        // this.game.physics.enable(logo, Phaser.Physics.ARCADE);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
        var key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.Z);
        var key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.H);
        var sBind;
        key3.onDown.add(function () {
            // BoardManager.Hint()
        });
        key1.onDown.add(function () {
            sBind = key2.onDown.add(function () {
                BoardManager.Undo();
            }, this);
            // BoardManager.Undo()
        }, this);
        key1.onUp.add(function () {
            sBind.detach();
        });
        text.visible = false;
        SimpleGame.game_bg = this.game.add.sprite(0, 0, 'game_bg');
        SimpleGame.game_bg.visible = false;
        console.log("check assets loaded");
        // checkAssetsLoaded();
        SimpleGame.checkAssetsLoaded();
        SimpleGame.myGame.input.onUp.add(SimpleGame.onPointerUp, this);
        SimpleGame.myGame.input.onDown.add(SimpleGame.onPointerDown, this);
        SimpleGame.myGame.input.mspointer.capture = false;
        document.addEventListener('contextmenu', function (event) { return event.preventDefault(); });
    };
    SimpleGame.onPointerDown = function () {
        SimpleGame.pointerDown = true;
        console.log("input down");
        // if ( SimpleGame.myGame.device.android == true && SimpleGame.myGame.device.desktop == false && SimpleGame.myGame.scale.isFullScreen == false)
        // {
        // 	console.log("start full screen")
        // 	SimpleGame.myGame.scale.startFullScreen(false, false)
        // 	SimpleGame.myGame.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL
        // }
    };
    SimpleGame.onPointerUp = function () {
        SimpleGame.pointerDown = false;
        console.log("input up");
    };
    SimpleGame.checkAssetsLoaded = function () {
        console.log("check assets loaded entered");
        if (SimpleGame.fontsLoadedFlag == false) {
            console.log("call checkAssetsLoaded in 0.05s");
            SimpleGame.myGame.time.events.add(50, function () {
                SimpleGame.checkAssetsLoaded();
            }, this);
        }
        else {
            console.log("add init screen in 1 second");
            // SimpleGame.myGame.time.events.add(1000, SimpleGame.addInitScreen, this);
            SimpleGame.addInitScreen();
        }
    };
    SimpleGame.addInitScreen = function () {
        var splash = document.getElementById('splash');
        if (splash) {
            splash.parentNode.removeChild(splash);
        }
        console.log("add init screen");
        SimpleGame.logo.visible = false;
        Language.initLanguage();
        SimpleGame.myGame.time.events.add(1, function () {
            var initmenu = new InitMenuPrompt();
        }, this);
    };
    SimpleGame.startGame = function (firstGame) {
        if (firstGame) {
            SimpleGame.gameEngineStarted = true;
            SimpleGame.game_bg.visible = true;
            SimpleGame.logo.visible = false;
            Card.Init();
            GameUI.initialize();
            // BoardManager.InitializeBoard();
            console.log("easy game");
            GameUI.promptLayer.removeAll(true);
            BoardManager.InitializeBoard();
            if (SimpleGame.myGame.device.safari == false && SimpleGame.myGame.device.firefox == false && SimpleGame.myGame.input.touch && (SimpleGame.myGame.device.android || SimpleGame.myGame.device.iOS)) {
                SimpleGame.myGame.input.mouse.stop();
            }
            else if (SimpleGame.myGame.device.safari == false && SimpleGame.myGame.device.firefox == false && SimpleGame.myGame.device.ie == false && SimpleGame.myGame.input.touch) {
                SimpleGame.myGame.input.mouse.stop();
            }
        }
        else {
            // GameUI.reinitData()
            BoardManager.InitializeBoard();
        }
        // if (SimpleGame.myGame.device.firefox)
        // {
        // 	SimpleGame.myGame.input.mouse.start()
        // }
    };
    SimpleGame.prototype.update = function () {
        //   console.log( SimpleGame.myGame.input.enabled)
        // if (this.whitefg)
        // {
        // 	this.game.world.bringToTop(this.whitefg)
        // }
        if (this.turnImage) {
            this.turnImage.bringToTop();
        }
        // console.log(SimpleGame.myGame.input.mspointer.capture)
        if (SimpleGame.gameEngineStarted == false)
            return;
        this.ticks++;
        var i = Card.cardArray.length;
        var selectedCardExists = false;
        while (i-- > 0) {
            Card.cardArray[i].update();
            if (Card.cardArray[i].selectedFlag) {
                selectedCardExists = true;
            }
        }
        if (GameUI.promptLayer.countLiving() > 0) {
            //   console.log("prompt exists", this.ticks % 12, this.ticks)
            SimpleGame.myGame.input.mspointer.capture = false;
            if (this.ticks % 12 == 1) {
                SimpleGame.myGame.input.reset();
                // console.log("input reset")
            }
        }
        else {
            SimpleGame.myGame.input.mspointer.capture = false;
        }
        GameUI.update();
        SimpleGame.myGame.input.update();
        BoardManager.update();
        // console.log(this.game.device.touch)
        // SimpleGame.myGame.input.mouse.enabled = !SimpleGame.myGame.device.mspointer;
        // this.game.debug.text("" + this.game.time.fps, 2, 14, "#00ff00"); 
        //  console.log(SimpleGame.myGame.input.activePointer.exists, SimpleGame.myGame.input.activePointer.withinGame, mouseIsWithinGame);
        var mouseIsMovedWithinGame;
        if (this.lastMouseCoordX != SimpleGame.myGame.input.x || this.lastMouseCoordY != SimpleGame.myGame.input.y) {
            mouseIsMovedWithinGame = true;
            this.mouseMovedWithinGameTicks++;
        }
        else {
            mouseIsMovedWithinGame = false;
            this.mouseMovedWithinGameTicks = 0;
        }
        this.lastMouseCoordX = SimpleGame.myGame.input.x;
        this.lastMouseCoordY = SimpleGame.myGame.input.y;
        if (SimpleGame.pointerDown == false && this.mouseMovedWithinGameTicks > 5 && SimpleGame.myGame.input.activePointer.withinGame == false) {
            // SimpleGame.unselectAllCards = true;
        }
        else {
            // SimpleGame.unselectAllCards = false;
        }
        // console.log("mouse moved within game: " + mouseIsMovedWithinGame)
        // console.log("unselect all cards: " + SimpleGame.unselectAllCards)
    };
    SimpleGame.fontsLoadedFlag = false;
    SimpleGame.gameEngineStarted = false;
    SimpleGame.unselectAllCards = false;
    SimpleGame.isReleaseVersion = false;
    SimpleGame.pointerDown = false;
    return SimpleGame;
}());
function onLogoClicked() {
    // console.log("start fullscreen");
    // var card:Card = new Card(1,2);
    // this.game.scale.startFullScreen();
}
// when the page has finished loading, create our game
window.onload = function () {
    var game = new SimpleGame();
};
var GameUI = /** @class */ (function () {
    function GameUI() {
    }
    GameUI.initialize = function () {
        GameUI.uiLayer = SimpleGame.myGame.add.group();
        GameUI.promptLayer = SimpleGame.myGame.add.group();
        GameUI.topLayer = SimpleGame.myGame.add.group();
        GameUI.scoreTxt = SimpleGame.myGame.make.text(640, 25, "0500", { font: "18px Open Sans", fill: "#f1d7cd", fontWeight: "600", align: "Right" });
        GameUI.stepsText = SimpleGame.myGame.make.text(865, 25, "0500", { font: "18px Open Sans", fill: "#f1d7cd", fontWeight: "600", align: "Right" });
        GameUI.timeTxt = SimpleGame.myGame.make.text(753, 25, "0500", { font: "18px Open Sans", fill: "#f1d7cd", fontWeight: "600", align: "Right" });
        //  GameUI.bestScoreTxt = SimpleGame.myGame.make.text(840-2, 30+1, "0500", {font: "19px Open Sans", fill: "#ffd1b9", fontWeight:"700", align:"Right"})
        //  GameUI.timeTxt.x = 155;
        //  GameUI.stepsText.x = 318;
        //  GameUI.scoreTxt.x = 698;
        // GameUI.bestScoreTxt.x = 861;
        //  GameUI.scoreTxt.fontWeight = 'bold'
        GameUI.scoreTxt.anchor.set(1, 0.5);
        GameUI.stepsText.anchor.set(1, 0.5);
        GameUI.timeTxt.anchor.set(1, 0.5);
        // GameUI.bestScoreTxt.anchor.set(1,0.5);
        GameUI.gameboss = SimpleGame.myGame.make.graphics(0, 0);
        GameUI.gameboss.beginFill(0xffffff);
        GameUI.gameboss.drawRect(SimpleGame.myGame.width * 0.5 - 230, SimpleGame.myGame.height - 40, 460, 40);
        // GameUI.gameboss.x = SimpleGame.myGame.width * 0.3 - GameUI.gameboss.width;
        GameUI.gameboss.endFill();
        GameUI.gameboss.inputEnabled = true;
        GameUI.gameboss.events.onInputDown.add(onGamebossDown2, this);
        GameUI.gameboss.events.onInputUp.add(onGamebossUp2);
        GameUI.gameboss.alpha = 0.01;
        GameUI.gameboss.input.useHandCursor = true;
        GameUI.menuButton = SimpleGame.myGame.make.graphics(0, 0);
        GameUI.menuButton.beginFill(0xffffff);
        GameUI.menuButton.drawRect(5, 10, 60, 40);
        GameUI.menuButton.endFill();
        GameUI.menuButton.inputEnabled = true;
        GameUI.menuButton.events.onInputDown.add(GameUI.onMenuButtonPressed, this);
        GameUI.menuButton.alpha = 0.01;
        GameUI.menuButton.input.useHandCursor = true;
        GameUI.uiLayer.add(GameUI.menuButton);
        window.addEventListener("click", onWindowClicked);
        var menuButPlus = new ButtonWithOverState(GameUI.uiLayer, "open_menu2", "open_menu2_over", 0, 600 - 63, function () {
            console.log("menu but plus clicked");
            var mainmenu = new MainMenu();
        });
        var undoButton = new ButtonWithOverState(GameUI.uiLayer, 'undo', "undo_over", 880 - 72, 600 - 63, function () {
            // console.log("undo button clicked")
            BoardManager.Undo();
        });
        undoButton.skipClickSound = true;
        // undoButton.skipMouseOver = true;
        GameUI.undobutton = undoButton;
        //     var hintButton:ButtonWithOverState = new ButtonWithOverState(GameUI.uiLayer, "button_hint", "button_hint_mouseover", 370, 524, function()
        // {
        //     // CardUtil.getFirstTurnedCardIdx(1)
        //     // CardUtil.getByTabIdxAndPos(1,  CardUtil.getFirstTurnedCardIdx(1)).invertFrontColors()
        //     BoardManager.Hint()
        // })
        // GameUI.uiLayer.add(  GameUI.menuTxt)
        GameUI.uiLayer.add(GameUI.scoreTxt);
        GameUI.uiLayer.add(GameUI.timeTxt);
        GameUI.uiLayer.add(GameUI.stepsText);
        // GameUI.uiLayer.add( GameUI.bestScoreTxt)
        // GameUI.uiLayer.add(GameUI.menuButton)
        GameUI.uiLayer.add(GameUI.gameboss);
        SimpleGame.myGame.time.events.loop(1000, GameUI.onSecondTick, this);
        GameUI.reinitData();
        SimpleGame.myGame.time.events.add(3000, function () {
            // var gamewonprompt = new GameWonPrompt()
            // var stats = new StatisticsPrompt()
            // var cannotuncover = new CannotUncoverStock()
        }, this);
    };
    GameUI.resetUI = function () {
        GameUI.reinitData();
    };
    GameUI.onSecondTick = function () {
        // console.log("second ticked")
        if (GameUI.gameStarted && GameUI.promptLayer.children.length <= 0) {
            GameUI.time++;
        }
    };
    GameUI.reinitData = function () {
        GameUI.score = 500;
        GameUI.time = 0;
        GameUI.moves = 0;
        GameUI.scoreTotal = GameUI.score;
    };
    GameUI.update = function () {
        if (BoardManager.undoDisabled) {
            GameUI.undobutton.skipMouseOver = true;
            if (GameUI.undobutton.imgNormal.input != null) {
                GameUI.undobutton.imgNormal.input.useHandCursor = false;
            }
        }
        else {
            GameUI.undobutton.skipMouseOver = false;
            if (GameUI.undobutton.imgNormal.input != null) {
                GameUI.undobutton.imgNormal.input.useHandCursor = true;
            }
        }
        GameUI.scoreTotal = GameUI.score + 100 * CardUtil.getFreeFoundationIdx();
        var bonus = 750 - GameUI.time;
        if (bonus < 0)
            bonus = 0;
        GameUI.bonus = bonus;
        GameUI.timeTxt.text = "" + (bonus).toString();
        GameUI.scoreTxt.text = "" + GameUI.scoreTotal;
        GameUI.stepsText.text = "" + GameUI.moves;
        var bestScore = parseInt(window.localStorage.getItem("bestScore"));
        // console.log(bestScore, window.localStorage.getItem("bestScore"))
        if (isNaN(bestScore)) {
            console.log("set to 0");
            try {
                window.localStorage.setItem("bestScore", "0");
            }
            catch (error) {
                // bestScore = 0;
            }
        }
        // GameUI.bestScoreTxt.text = "" + bestScore;
        // GameUI.scoreTxt.x = 716 - GameUI.scoreTxt.width;
        // GameUI.stepsText.x = 324 - GameUI.stepsText.width;
        // GameUI.bestScoreTxt.x = 883 - GameUI.bestScoreTxt.width; 
    };
    GameUI.onMenuButtonPressed = function () {
        // console.log("menu button is pressed")
        var mainmenu = new MainMenu();
        SoundManager.click.play();
    };
    GameUI.gamebossPressed = false;
    GameUI.gamebossPressed2 = false;
    GameUI.gameStarted = false;
    return GameUI;
}());
function onWindowClicked() {
    console.log("window clicked");
    if (GameUI.gamebossPressed) {
        window.open("http://www.gameboss.com", "_blank");
    }
    else if (GameUI.gamebossPressed2) {
        window.open("https://www.spider-solitaire-game.com/", "_blank");
    }
    // if (InitMenuPrompt.startFullScreen && SimpleGame.myGame.device.desktop == false)
    // {
    //     SimpleGame.myGame.scale.startFullScreen();
    //     SimpleGame.myGame.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL
    // }
    if (SimpleGame.myGame.device.android == true && SimpleGame.myGame.device.desktop == false && SimpleGame.myGame.scale.isFullScreen == false) {
        console.log("start full screen");
        SimpleGame.myGame.scale.startFullScreen(false, false);
        SimpleGame.myGame.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    }
}
function onGamebossDown() {
    console.log("gameboss is pressed");
    GameUI.gamebossPressed = true;
}
function onGamebossUp() {
    console.log("gameboss is unpressed");
    SimpleGame.myGame.time.events.add(350, function () {
        GameUI.gamebossPressed = false;
    });
}
function onGamebossDown2() {
    console.log("gameboss is pressed");
    GameUI.gamebossPressed2 = true;
}
function onGamebossUp2() {
    console.log("gameboss is unpressed");
    SimpleGame.myGame.time.events.add(350, function () {
        GameUI.gamebossPressed2 = false;
    });
}
/**
 * ...
 * @author
 */
var Language = /** @class */ (function () {
    function Language() {
    }
    Language.initLanguage = function () {
        var url = location.href.toString();
        console.log(url);
        var languageStr = url.split("lang=")[1];
        if (languageStr == null) {
            languageStr = "en";
        }
        languageStr = languageStr.toUpperCase();
        console.log("Language str: " + languageStr);
        //  trace(GameContext.pack.getFile("language.xml"));
        // var langXml:Xml = Xml.parse( GameContext.pack.getFile("language.xml").toString() );
        var langXml = SimpleGame.myGame.cache.getXML('language');
        console.log(langXml.getElementsByTagName("language"));
        console.log(langXml);
        Language.LanguageAbbrevations = [];
        Language.HOW_TO_PLAY_FULL = [];
        Language.NEW_GAME = [];
        Language.EASY = [];
        Language.NORMAL = [];
        Language.HARD = [];
        Language.PLAY = [];
        Language.TIME = [];
        Language.SCORE = [];
        Language.MENU = [];
        Language.RESUME = [];
        Language.RESTART = [];
        Language.YES = [];
        Language.NO = [];
        Language.KEEP_PLAYING = [];
        Language.ARE_YOU_SURE_RESTART = [];
        Language.ARE_YOU_SURE_NEW = [];
        Language.ARE_YOU_SURE_SHORT = [];
        Language.THERE_MUST_BE_AT_LEAST = [];
        Language.MORE_GAMES = [];
        Language.SOUND_ON = [];
        Language.SOUND_OFF = [];
        Language.MOVES = [];
        Language.YOUWONGAME = [];
        Language.DONTSHOWAGAIN = [];
        Language.STATISTICS = [];
        Language.SPIDER_SOLITAIRE = [];
        Language.ALLTIMESTATS = [];
        Language.playedgames = [];
        Language.wongames = [];
        Language.lostgames = [];
        Language.win_percentage = [];
        Language.top_score = [];
        Language.best_time = [];
        Language.ok = [];
        Language.with_a_score_of = [];
        Language.minutes_played = [];
        Language.themovesyoumade = [];
        Language.youralltimehigh = [];
        Language.replay = [];
        Language.clear = [];
        Language.level = [];
        Language.select_level = [];
        Language.congrats = [];
        Language.timebonus = [];
        Language.yourscore = [];
        console.log("Language init done");
        for (var i = 0; i < langXml.getElementsByTagName("language").length; i++) {
            console.log("started for loop");
            Language.LanguageAbbrevations.push(langXml.getElementsByTagName("language")[i].attributes[0].nodeValue);
            //  Language.HOW_TO_PLAY_FULL.push( Language.getCorrectTranslation("how_to_play", langXml.getElementsByTagName("language")[i]) );
            Language.NEW_GAME.push(Language.getCorrectTranslation("new_game", langXml.getElementsByTagName("language")[i]));
            Language.EASY.push(Language.getCorrectTranslation("easy", langXml.getElementsByTagName("language")[i]));
            Language.NORMAL.push(Language.getCorrectTranslation("normal", langXml.getElementsByTagName("language")[i]));
            Language.HARD.push(Language.getCorrectTranslation("hard", langXml.getElementsByTagName("language")[i]));
            Language.PLAY.push(Language.getCorrectTranslation("play", langXml.getElementsByTagName("language")[i]));
            Language.TIME.push(Language.getCorrectTranslation("time", langXml.getElementsByTagName("language")[i]));
            Language.SCORE.push(Language.getCorrectTranslation("SCORE", langXml.getElementsByTagName("language")[i]));
            Language.MENU.push(Language.getCorrectTranslation("menu", langXml.getElementsByTagName("language")[i]));
            Language.RESUME.push(Language.getCorrectTranslation("resume", langXml.getElementsByTagName("language")[i]));
            Language.RESTART.push(Language.getCorrectTranslation("restart", langXml.getElementsByTagName("language")[i]));
            Language.YES.push(Language.getCorrectTranslation("yes", langXml.getElementsByTagName("language")[i]));
            Language.NO.push(Language.getCorrectTranslation("no", langXml.getElementsByTagName("language")[i]));
            Language.ARE_YOU_SURE_RESTART.push(Language.getCorrectTranslation("are_you_sure_restart", langXml.getElementsByTagName("language")[i]));
            // Language.ARE_YOU_SURE_NEW.push(Language.getCorrectTranslation("are_you_sure_new", langXml.getElementsByTagName("language")[i]) )
            Language.ARE_YOU_SURE_SHORT.push(Language.getCorrectTranslation("warning", langXml.getElementsByTagName("language")[i]));
            Language.THERE_MUST_BE_AT_LEAST.push(Language.getCorrectTranslation("there_must_be_at_least", langXml.getElementsByTagName("language")[i]));
            Language.MORE_GAMES.push(Language.getCorrectTranslation("MORE_GAMES", langXml.getElementsByTagName("language")[i]));
            Language.SOUND_ON.push(Language.getCorrectTranslation("sound_on", langXml.getElementsByTagName("language")[i]));
            Language.SOUND_OFF.push(Language.getCorrectTranslation("sound_off", langXml.getElementsByTagName("language")[i]));
            Language.MOVES.push(Language.getCorrectTranslation("MOVES", langXml.getElementsByTagName("language")[i]));
            Language.YOUWONGAME.push(Language.getCorrectTranslation("youwongame", langXml.getElementsByTagName("language")[i]));
            Language.KEEP_PLAYING.push(Language.getCorrectTranslation("keep_playing", langXml.getElementsByTagName("language")[i]));
            Language.STATISTICS.push(Language.getCorrectTranslation("stats", langXml.getElementsByTagName("language")[i]));
            Language.ok.push(Language.getCorrectTranslation("ok", langXml.getElementsByTagName("language")[i]));
            Language.minutes_played.push(Language.getCorrectTranslation("minutes_played", langXml.getElementsByTagName("language")[i]));
            Language.themovesyoumade.push(Language.getCorrectTranslation("themovesyoumade", langXml.getElementsByTagName("language")[i]));
            Language.level.push(Language.getCorrectTranslation("level", langXml.getElementsByTagName("language")[i]));
            Language.select_level.push(Language.getCorrectTranslation("select_level", langXml.getElementsByTagName("language")[i]));
            Language.congrats.push(Language.getCorrectTranslation("congrats", langXml.getElementsByTagName("language")[i]));
            Language.timebonus.push(Language.getCorrectTranslation("timebonus", langXml.getElementsByTagName("language")[i]));
            Language.yourscore.push(Language.getCorrectTranslation("yourscore", langXml.getElementsByTagName("language")[i]));
        }
        Language.langIdx = Language.LanguageAbbrevations.indexOf(languageStr.toLowerCase());
    };
    Language.getCorrectTranslation = function (s, o) {
        console.log("get correct translation: " + s);
        return o.getElementsByTagName(s)[0].textContent;
    };
    Language.LanguageAbbrevations = ["EN", "NL", "FR", "DE", "IT", "PL"];
    Language.PLAY_SHORT = ["Play", "STARTEN", "JOUER", "Spielen", "Jugar", "Jucati"];
    Language.HOW_TO_PLAY_FULL = ["The goal in this Solitaire game is to move all the cards to the four empty stacks in order from ace to king. You can choose to deal 1 card at a time or 3."];
    return Language;
}());
var SoundManager = /** @class */ (function () {
    function SoundManager() {
    }
    SoundManager.playClick = function () {
        if (SoundManager.canPlayClick) {
            console.log("play CLICK");
            SoundManager.click.play();
            SoundManager.canPlayClick = false;
            // console.log("cannot play click")
            SimpleGame.myGame.time.events.add(100, function () {
                // console.log("can play click")
                SoundManager.canPlayClick = true;
            }, this);
        }
    };
    SoundManager.init = function () {
        SoundManager.sManager = new Phaser.SoundManager(SimpleGame.myGame);
        SoundManager.dealcards.allowMultiple = true;
        SoundManager.hint.volume = 0.7;
    };
    SoundManager.playGrabCard = function () {
        if (SoundManager.canPlayGrab) {
            //  console.log("play CLICK")
            SoundManager.grabcard.play();
            SoundManager.canPlayGrab = false;
            // console.log("cannot play click")
            SimpleGame.myGame.time.events.add(100, function () {
                // console.log("can play click")
                SoundManager.canPlayGrab = true;
            }, this);
        }
    };
    SoundManager.setMuteFlags = function (muteFlag) {
        // SoundManager.beginAnimation.mute = muteFlag;
        SoundManager.clearrow.mute = muteFlag;
        SoundManager.click.mute = muteFlag;
        SoundManager.fail.mute = muteFlag;
        SoundManager.grabcard.mute = muteFlag;
        SoundManager.valid.mute = muteFlag;
        SoundManager.won.mute = muteFlag;
        SoundManager.dealcards.mute = muteFlag;
        SoundManager.hint.mute = muteFlag;
    };
    SoundManager.playDealRow = function () {
        SoundManager.timesToPlayDealSound = 10;
        SoundManager.playDealRowSound();
    };
    SoundManager.playDealRowSound = function () {
        SoundManager.dealcards.position = 200;
        SoundManager.dealcards.update();
        SoundManager.dealcards.play();
        console.log("play dealcards");
        SoundManager.timesToPlayDealSound--;
        if (SoundManager.timesToPlayDealSound > 0) {
            SimpleGame.myGame.time.events.add(44, function () {
                SoundManager.playDealRowSound();
            });
        }
    };
    SoundManager.timesToPlayDealSound = 10;
    SoundManager.canPlayClick = true;
    SoundManager.canPlayGrab = true;
    return SoundManager;
}());
var Trace = /** @class */ (function () {
    function Trace() {
    }
    Trace.TraceCardByIdxAndPos = function (tableIdx, tablePos) {
        var i = Card.cardArray.length;
        while (i-- > 0) {
            var c = Card.cardArray[i];
            if (c.tableuIdx == tableIdx && c.tableuPosition == tablePos) {
                var name = CardUtil.cardNameArray[c.suitIdx * CardUtil.NUM_CARDS_PER_SUIT + c.cardIdx];
                console.log(name);
            }
        }
    };
    return Trace;
}());
var OpenMenuBut = /** @class */ (function () {
    function OpenMenuBut() {
        SimpleGame.myGame.add.button();
    }
    return OpenMenuBut;
}());
var SoundButton = /** @class */ (function () {
    function SoundButton(parent, imgNormalName, imgOverName, x, y) {
        var soundontxt = SimpleGame.myGame.make.text(0, 0, "" + Language.SOUND_ON[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        this.soundOnBut = new ButtonWithOverAndText(soundontxt, parent, imgNormalName, imgOverName, x, y, this.toggleSoundButton.bind(this));
        this.soundOnBut.setXY(x, y);
        var soundofftxt = SimpleGame.myGame.make.text(0, 0, "" + Language.SOUND_OFF[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        this.soundOffBut = new ButtonWithOverAndText(soundofftxt, parent, imgNormalName, imgOverName, x, y, this.toggleSoundButton.bind(this));
        this.soundOffBut.setXY(x, y);
        this.setCorrectButtonVisible(true);
    }
    SoundButton.prototype.toggleSoundButton = function () {
        SoundButton.soundFlag = !SoundButton.soundFlag;
        // console.log("sound flag: " + SoundButton.soundFlag)
        this.setCorrectButtonVisible();
        SoundManager.setMuteFlags(!SoundButton.soundFlag);
        // console.log("mute flag: " + SoundManager.sManager.mute)
    };
    SoundButton.prototype.setCorrectButtonVisible = function (skipButtonOver) {
        if (skipButtonOver === void 0) { skipButtonOver = false; }
        // console.log("set correct but visible")
        if (SoundButton.soundFlag) {
            this.soundOnBut.setVisible();
            this.soundOffBut.setInvisible();
            if (!skipButtonOver)
                this.soundOnBut.onButtonOver();
        }
        else {
            this.soundOnBut.setInvisible();
            this.soundOffBut.setVisible();
            if (!skipButtonOver)
                this.soundOffBut.onButtonOver();
        }
    };
    SoundButton.soundFlag = true;
    return SoundButton;
}());
var BoardData = /** @class */ (function () {
    function BoardData() {
        this.currentScore = 0;
        //stockPile = new Array();
        //wastePile = new Array();
        this.stockPile = new Array();
        this.foundationPile = new Array();
        this.foundationPile[0] = new Array();
        this.foundationPile[1] = new Array();
        this.foundationPile[2] = new Array();
        this.foundationPile[3] = new Array();
        this.foundationPile[4] = new Array();
        this.foundationPile[5] = new Array();
        this.foundationPile[6] = new Array();
        this.foundationPile[7] = new Array();
        this.tableuPile = new Array();
        this.tableuPile[0] = new Array();
        this.tableuPile[1] = new Array();
        this.tableuPile[2] = new Array();
        this.tableuPile[3] = new Array();
        this.tableuPile[4] = new Array();
        this.tableuPile[5] = new Array();
        this.tableuPile[6] = new Array();
        this.tableuPile[7] = new Array();
        this.tableuPile[8] = new Array();
        this.tableuPile[9] = new Array();
    }
    BoardData.prototype.addToBdata = function (card) {
        var cardData = new CardData(card.suitIdx, card.cardIdx, card.turned, card.deckIdx);
        var stockCards = 0;
        var tabCards = 0;
        if (card.myState == Card.STATE_STOCK) {
            this.stockPile[card.myStockIdx] = cardData;
        }
        else if (card.myState == Card.STATE_TABLEU) {
            this.tableuPile[card.tableuIdx][card.tableuPosition] = cardData;
            // console.log(card.tableuIdx, card.tableuPosition)
        }
        else if (card.myState == Card.STATE_FOUNDATION) {
            this.foundationPile[card.foundationIdx][card.foundationPosition] = cardData;
        }
    };
    BoardData.prototype.fromSnapshotToBoard = function (skiplayerfixes) {
        // console.log("from snapshot to board called")
        this.justUndoedArray = new Array();
        // console.log("tab len: " + this.tableuPile[9].length)
        this.manageStockpile();
        //manageStockPile();
        this.manageTableu();
        //manageWaste();
        this.manageFoundation();
        if (!skiplayerfixes) {
            this.fixPostUndoLayering();
        }
        // MainUI.currentScore = currentScore;
    };
    BoardData.prototype.manageFoundation = function () {
        var i = this.foundationPile.length;
        while (i-- > 0) {
            var arr = this.foundationPile[i];
            var j = arr.length;
            while (j-- > 0) {
                var cData = this.foundationPile[i][j];
                if (cData == undefined)
                    continue;
                var card = CardUtil.getByCardAndSuitIdx(cData.suitIdx, cData.cardIdx, cData.deckIdx);
                if (card.myState == Card.STATE_FOUNDATION && card.foundationIdx == i && card.foundationPosition == j && card.turned == cData.turned) {
                }
                else {
                    this.justUndoedArray.push(card);
                }
                card.myState = Card.STATE_FOUNDATION;
                card.foundationIdx = i;
                card.foundationPosition = j;
                card.turned = cData.turned;
                card.isMoving = false;
                card.selectedFlag = false;
                // GameContext.layerTiles.addChild(card.owner, false);
                // Maybe add on top?
            }
        }
    };
    BoardData.prototype.manageStockpile = function () {
        var i = this.stockPile.length;
        while (i-- > 0) {
            var cdata = this.stockPile[i];
            if (cdata == null)
                continue;
            var card = CardUtil.getByCardAndSuitIdx(cdata.suitIdx, cdata.cardIdx, cdata.deckIdx);
            if (card.myState == Card.STATE_STOCK && card.myStockIdx == i && card.turned == cdata.turned) {
            }
            else {
                this.justUndoedArray.push(card);
            }
            card.myState = Card.STATE_STOCK;
            card.myStockIdx = i;
            card.turned = cdata.turned;
            card.isMoving = false;
            card.selectedFlag = false;
            // GameContext.layerTiles.addChild(card.owner, false);
        }
    };
    BoardData.prototype.manageTableu = function () {
        // console.log("manage tab called")
        var i = this.tableuPile.length;
        while (i-- > 0) {
            var arr = this.tableuPile[i];
            var j = arr.length;
            while (j-- > 0) {
                var cData = this.tableuPile[i][j];
                var card = CardUtil.getByCardAndSuitIdx(cData.suitIdx, cData.cardIdx, cData.deckIdx);
                if (card.myState == Card.STATE_TABLEU && card.tableuIdx == i && card.tableuPosition == j && card.turned == cData.turned) {
                }
                else {
                    this.justUndoedArray.push(card);
                }
                if (card.tableuIdx != i || card.tableuPosition != j) {
                    // console.log("changed card found")
                }
                else {
                    // console.log(i,j)
                }
                card.myState = Card.STATE_TABLEU;
                card.tableuIdx = i;
                card.tableuPosition = j;
                card.turned = cData.turned;
                card.isMoving = false;
                card.selectedFlag = false;
                // GameContext.layerTiles.addChild(card.owner, false);
            }
        }
    };
    BoardData.prototype.fixPostUndoLayering = function () {
        this.justUndoedArray.sort(function (x, y) {
            if (x.foundationPosition > y.foundationPosition) {
                return 1;
            }
            else if (x.foundationPosition == y.foundationPosition) {
                return 0;
            }
            else {
                return -1;
            }
        });
        //justUndoedArray.reverse();
        var i = this.justUndoedArray.length;
        while (i-- > 0) {
            // GameContext.layerTiles.addChild(justUndoedArray[i].owner);
        }
    };
    BoardData.isBdataChanged = function (data1, data2) {
        if (this.isArrayIdentical(data1.foundationPile[0], data2.foundationPile[0]) == false)
            return true;
        if (this.isArrayIdentical(data1.foundationPile[1], data2.foundationPile[1]) == false)
            return true;
        if (this.isArrayIdentical(data1.foundationPile[2], data2.foundationPile[2]) == false)
            return true;
        if (this.isArrayIdentical(data1.foundationPile[3], data2.foundationPile[3]) == false)
            return true;
        if (this.isArrayIdentical(data1.foundationPile[4], data2.foundationPile[4]) == false)
            return true;
        if (this.isArrayIdentical(data1.foundationPile[5], data2.foundationPile[5]) == false)
            return true;
        if (this.isArrayIdentical(data1.foundationPile[6], data2.foundationPile[6]) == false)
            return true;
        if (this.isArrayIdentical(data1.foundationPile[7], data2.foundationPile[7]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[0], data2.tableuPile[0]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[1], data2.tableuPile[1]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[2], data2.tableuPile[2]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[3], data2.tableuPile[3]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[4], data2.tableuPile[4]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[5], data2.tableuPile[5]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[6], data2.tableuPile[6]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[7], data2.tableuPile[7]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[8], data2.tableuPile[8]) == false)
            return true;
        if (this.isArrayIdentical(data1.tableuPile[9], data2.tableuPile[9]) == false)
            return true;
        if (this.isArrayIdentical(data1.stockPile, data2.stockPile) == false) {
            // console.log("identical freecell array, skip change", data1.stockPile, data2.stockPile);
            return true;
        }
        return false;
    };
    BoardData.isFreeCellArrayIdentical = function (arr1, arr2) {
        // trace(arr1.length, arr2.length);
        if (arr1.length != arr2.length)
            return false;
        var retVal = true;
        var i = arr1.length;
        while (i-- > 0) {
            if (arr1[i] == null || arr2[i] == null)
                return false;
            if (arr1[i].cardIdx != arr2[i].cardIdx || arr1[i].suitIdx != arr2[i].suitIdx || arr1[i].turned != arr2[i].turned) {
                return false;
            }
        }
        return true;
    };
    BoardData.isArrayIdentical = function (arr1, arr2) {
        if (arr1.length != arr2.length)
            return false;
        var retVal = true;
        var i = arr1.length;
        while (i-- > 0) {
            if (arr1[i] == null || arr2[i] == null)
                return false;
            if (arr1[i].deckIdx != arr2[i].deckIdx || arr1[i].cardIdx != arr2[i].cardIdx || arr1[i].suitIdx != arr2[i].suitIdx || arr1[i].turned != arr2[i].turned) {
                return false;
            }
        }
        return true;
    };
    BoardData.boardDataIdx = -1;
    return BoardData;
}());
var CardData = /** @class */ (function () {
    function CardData(suitIdx, cardIdx, turned, deckIdx) {
        this.turned = turned;
        this.cardIdx = cardIdx;
        this.suitIdx = suitIdx;
        this.deckIdx = deckIdx;
    }
    return CardData;
}());
var BoardManager = /** @class */ (function () {
    function BoardManager() {
    }
    BoardManager.HintReset = function () {
        BoardManager.hintState = 0;
        BoardManager.currentObservedColumn = -1;
    };
    BoardManager.Hint = function () {
        if (BoardManager.currentObservedColumn == -1) {
            BoardManager.currentObservedColumn = BoardManager.NUM_TABLEU_COLUMNS;
        }
        var isInitialHint = false;
        if (BoardManager.hintState == 0 && BoardManager.currentObservedColumn == BoardManager.NUM_TABLEU_COLUMNS) {
            isInitialHint = true;
        }
        BoardManager.hintSuccess = false;
        var respectSuitIdx = true;
        console.log("is initial: " + isInitialHint);
        console.log("current observed column: ", BoardManager.currentObservedColumn);
        if (BoardManager.hintState == BoardManager.HINT_STATE_TRY_FIRST_CARD_ONLY_HINT) {
            console.log("try first state only, respect suit");
            var i = BoardManager.currentObservedColumn;
            BoardManager.hintSuccess = false;
            while (i-- > 0) {
                BoardManager.TryToHintColumn(i, true, true);
                BoardManager.currentObservedColumn = i;
                if (BoardManager.hintSuccess) {
                    SoundManager.hint.play();
                    console.log("hint successwith first card only, i: " + BoardManager.currentObservedColumn);
                    return;
                }
            }
            BoardManager.hintState++;
            BoardManager.currentObservedColumn = BoardManager.NUM_TABLEU_COLUMNS;
        }
        if (BoardManager.hintState == BoardManager.HINT_STATE_TRY_ANY_CARD_HINT) {
            console.log("try second state, respect suit");
            var i = BoardManager.currentObservedColumn;
            BoardManager.hintSuccess = false;
            while (i-- > 0) {
                BoardManager.TryToHintColumn(i, false, true);
                BoardManager.currentObservedColumn = i;
                if (BoardManager.hintSuccess) {
                    SoundManager.hint.play();
                    return;
                }
            }
            BoardManager.hintState++;
            BoardManager.currentObservedColumn = BoardManager.NUM_TABLEU_COLUMNS;
        }
        if (BoardManager.hintState == BoardManager.HINT_STATE_FIRST_CARD_ONLY_NORESPECT) {
            console.log("try first state only, no respect");
            var i = BoardManager.currentObservedColumn;
            BoardManager.hintSuccess = false;
            while (i-- > 0) {
                BoardManager.TryToHintColumn(i, true);
                BoardManager.currentObservedColumn = i;
                if (BoardManager.hintSuccess) {
                    SoundManager.hint.play();
                    console.log("hint successwith first card only, i: " + BoardManager.currentObservedColumn);
                    return;
                }
            }
            BoardManager.hintState++;
            BoardManager.currentObservedColumn = BoardManager.NUM_TABLEU_COLUMNS;
        }
        if (BoardManager.hintState == BoardManager.HINT_STATE_ANY_CARD_ONLY_NORESPECT) {
            console.log("try second state, no respect");
            var i = BoardManager.currentObservedColumn;
            BoardManager.hintSuccess = false;
            while (i-- > 0) {
                BoardManager.TryToHintColumn(i, false);
                BoardManager.currentObservedColumn = i;
                if (BoardManager.hintSuccess) {
                    SoundManager.hint.play();
                    return;
                }
            }
            BoardManager.hintState++;
            BoardManager.currentObservedColumn = BoardManager.NUM_TABLEU_COLUMNS;
        }
        if (BoardManager.hintState == BoardManager.HINT_STATE_TRY_EMPTY_COLUMN) {
            console.log("try empty column state, currently observed: ", BoardManager.currentObservedColumn);
            var i = BoardManager.currentObservedColumn;
            BoardManager.hintSuccess = false;
            while (i-- > 0) {
                BoardManager.TryToHintToEmptyColumn(i);
                BoardManager.currentObservedColumn = i;
                if (BoardManager.hintSuccess) {
                    SoundManager.hint.play();
                    return;
                }
            }
            BoardManager.hintState = 0;
            BoardManager.currentObservedColumn = BoardManager.NUM_TABLEU_COLUMNS;
        }
        if (BoardManager.hintSuccess) {
            SoundManager.hint.play();
        }
        else {
            if (isInitialHint) {
                SoundManager.noMoreHints.play();
            }
            else {
                console.log("try with initial hint");
                BoardManager.hintState = 0;
                BoardManager.currentObservedColumn = BoardManager.NUM_TABLEU_COLUMNS;
                BoardManager.Hint();
            }
        }
    };
    BoardManager.TryToHintToEmptyColumnBackup = function (tabIdx) {
        var i = BoardManager.NUM_TABLEU_COLUMNS;
        var emptyExists = false;
        var emptyIdx = -1;
        while (i-- > 0) {
            var idx = 9 - i;
            if (CardUtil.checkIfTabEmpty(idx)) {
                emptyIdx = idx;
                emptyExists = true;
                break;
            }
        }
        if (!emptyExists)
            return;
        var cardOnTopOfInitialColumn = CardUtil.getCardOnTop(tabIdx);
        if (cardOnTopOfInitialColumn == null)
            return;
        cardOnTopOfInitialColumn.invertFrontColors();
        BoardManager.hintSuccess = true;
        var hintMarker = SimpleGame.myGame.make.graphics(0, 0);
        hintMarker.beginFill(0x000000);
        hintMarker.drawRoundedRect(Card.CARD_TAB_POS_X_INIT + emptyIdx * Card.CARD_TAB_POS_X_DELTA - 81 / 2, Card.CARD_TAB_POS_Y_INIT - 113 / 2, 81, 113, 4);
        hintMarker.alpha = 0.75;
        hintMarker.endFill();
        SimpleGame.myGame.time.events.add(Consts.timeToHint, function () {
            Card.items.add(hintMarker);
        }, this);
        SimpleGame.myGame.time.events.add(1000, function () {
            Card.items.remove(hintMarker, true);
        }, this);
    };
    BoardManager.TryToHintToEmptyColumn = function (tabIdx) {
        console.log("try to hint empty: ", tabIdx);
        var i = BoardManager.NUM_TABLEU_COLUMNS;
        var emptyExists = false;
        var emptyIdx = -1;
        while (i-- > 0) {
            var idx = 9 - i;
            console.log("check if tab empty: " + idx);
            if (CardUtil.checkIfTabEmpty(idx)) {
                emptyIdx = idx;
                emptyExists = true;
                break;
            }
        }
        if (!emptyExists)
            return;
        var cardOnBotOfInitialColumn = CardUtil.getByTabIdxAndPos(tabIdx, 0);
        if (cardOnBotOfInitialColumn == null)
            return;
        if (CardUtil.isValidMoveStack(cardOnBotOfInitialColumn)) {
            return;
        }
        var c2 = null;
        var deltaPos = 0;
        do {
            deltaPos++;
            c2 = CardUtil.getByTabIdxAndPos(tabIdx, deltaPos);
            if (CardUtil.isValidMoveStack(c2)) {
                break;
            }
        } while (c2 != null);
        if (c2 == null)
            return;
        c2.invertFrontColors();
        BoardManager.hintSuccess = true;
        var hintMarker = SimpleGame.myGame.make.graphics(0, 0);
        hintMarker.beginFill(0x000000);
        hintMarker.drawRoundedRect(Card.CARD_TAB_POS_X_INIT + emptyIdx * Card.CARD_TAB_POS_X_DELTA - 81 / 2, Card.CARD_TAB_POS_Y_INIT - 113 / 2, 81, 113, 4);
        hintMarker.alpha = 0.75;
        hintMarker.endFill();
        SimpleGame.myGame.time.events.add(Consts.timeToHint, function () {
            Card.items.add(hintMarker);
        }, this);
        SimpleGame.myGame.time.events.add(2 * Consts.timeToHint, function () {
            Card.items.remove(hintMarker, true);
        }, this);
    };
    BoardManager.TryToHintToEmptyColumnOld = function (tabIdx) {
        var i = BoardManager.NUM_TABLEU_COLUMNS;
        var emptyExists = false;
        var emptyIdx = -1;
        while (i-- > 0) {
            var idx = 9 - i;
            console.log("check if tab empty: " + idx);
            if (CardUtil.checkIfTabEmpty(idx)) {
                emptyIdx = idx;
                emptyExists = true;
                break;
            }
        }
        if (!emptyExists)
            return;
        var cardOnTopOfInitialColumn = CardUtil.getCardOnTop(tabIdx);
        if (cardOnTopOfInitialColumn == null)
            return;
        var cardOnTopOfInitialMinusOne = CardUtil.getByTabIdxAndPos(tabIdx, cardOnTopOfInitialColumn.tableuPosition - 1);
        if (cardOnTopOfInitialMinusOne == null)
            return;
        if (cardOnTopOfInitialMinusOne.turned == true) {
            if (CardUtil.isCardIdxFollowing(cardOnTopOfInitialMinusOne, cardOnTopOfInitialColumn))
                return;
        }
        cardOnTopOfInitialColumn.invertFrontColors();
        BoardManager.hintSuccess = true;
        var hintMarker = SimpleGame.myGame.make.graphics(0, 0);
        hintMarker.beginFill(0x000000);
        hintMarker.drawRoundedRect(Card.CARD_TAB_POS_X_INIT + emptyIdx * Card.CARD_TAB_POS_X_DELTA - 81 / 2, Card.CARD_TAB_POS_Y_INIT - 113 / 2, 81, 113, 4);
        hintMarker.alpha = 0.75;
        hintMarker.endFill();
        SimpleGame.myGame.time.events.add(Consts.timeToHint, function () {
            Card.items.add(hintMarker);
        }, this);
        SimpleGame.myGame.time.events.add(2 * Consts.timeToHint, function () {
            Card.items.remove(hintMarker, true);
        }, this);
    };
    BoardManager.TryToHintColumn = function (tabIdx, firstCardOnly, respectSuit) {
        if (respectSuit === void 0) { respectSuit = false; }
        // console.log("try to hint column: "+ tabIdx)
        var initPos = CardUtil.getFirstTurnedCardIdx(tabIdx);
        do {
            var cardPlaced = CardUtil.getByTabIdxAndPos(tabIdx, initPos);
            if (cardPlaced == null) {
                // console.log("went over top, exit")
                return;
            }
            if (CardUtil.isValidMoveStack(cardPlaced)) {
                var cardPlacedMinusOne = CardUtil.getByTabIdxAndPos(tabIdx, initPos - 1);
                // console.log("valid move stack found...")
                // Trace.TraceCardByIdxAndPos(cardPlaced.tableuIdx, cardPlaced.tableuPosition)
                var j = BoardManager.NUM_TABLEU_COLUMNS;
                var tabIdxCurrent = cardPlaced.tableuIdx;
                while (j-- > 0) {
                    tabIdxCurrent++;
                    if (tabIdxCurrent % BoardManager.NUM_TABLEU_COLUMNS == tabIdx)
                        continue;
                    //   console.log("get card on top of: " + tabIdxCurrent % BoardManager.NUM_TABLEU_COLUMNS)
                    var cardTableu = CardUtil.getCardOnTop(tabIdxCurrent % BoardManager.NUM_TABLEU_COLUMNS);
                    if (cardTableu == null) {
                        //    console.log("card is null")
                        // tabIdxCurrent++;
                        continue;
                    }
                    if (respectSuit) {
                        if (cardTableu.suitIdx != cardPlaced.suitIdx) {
                            continue;
                        }
                    }
                    //    console.log("check against...")
                    //    Trace.TraceCardByIdxAndPos(cardTableu.tableuIdx, cardTableu.tableuPosition)
                    if (cardTableu.cardIdx != CardUtil.CARD_IDX_A && (cardPlaced.cardIdx == CardUtil.CARD_IDX_A && cardTableu.cardIdx == CardUtil.CARD_IDX_02 || cardPlaced.cardIdx + 1 == cardTableu.cardIdx)) {
                        if (cardPlacedMinusOne != null) {
                            if (cardPlacedMinusOne.turned && cardPlacedMinusOne.cardIdx == cardTableu.cardIdx) {
                                // tabIdxCurrent++;
                                if (cardTableu.suitIdx == cardPlaced.suitIdx && BoardManager.resultsInFullstack(cardTableu) && BoardManager.resultsInFullstackDownwards(cardPlaced)) {
                                    // console.log("FULL STACK FOUND!")
                                    BoardManager.hintSuccess = true;
                                    break;
                                }
                                else {
                                    // console.log("FULL STACK NOT FOUND")
                                    continue;
                                }
                            }
                            else {
                                BoardManager.hintSuccess = true;
                                break;
                            }
                        }
                        else {
                            BoardManager.hintSuccess = true;
                            break;
                        }
                    }
                    //    tabIdxCurrent++;
                }
            }
            if (BoardManager.hintSuccess) {
                // console.log("hint found")
                cardPlaced.invertFrontColors();
                SimpleGame.myGame.time.events.add(Consts.timeToHint, function () {
                    cardTableu.invertFrontColors();
                }, this);
                return;
            }
            if (firstCardOnly) {
                return;
            }
            else {
                initPos++;
            }
        } while (cardPlaced != null);
    };
    BoardManager.resultsInFullstackDownwards = function (cardObserved) {
        // console.log("Card observed: ");
        Trace.TraceCardByIdxAndPos(cardObserved.tableuIdx, cardObserved.tableuPosition);
        if (cardObserved.cardIdx == CardUtil.CARD_IDX_A) {
            return true;
        }
        var cminusone = CardUtil.getByTabIdxAndPos(cardObserved.tableuIdx, cardObserved.tableuPosition + 1);
        if (cminusone == null) {
            return false;
        }
        if (CardUtil.isCardIdxFollowing(cardObserved, cminusone, true) == false) {
            return false;
        }
        return BoardManager.resultsInFullstackDownwards(cminusone);
    };
    BoardManager.resultsInFullstack = function (cardObserved) {
        // console.log("results in full stack called, card observed")
        // Trace.TraceCardByIdxAndPos(cardObserved.tableuIdx, cardObserved.tableuPosition)
        if (cardObserved.cardIdx == CardUtil.CARD_IDX_K) {
            return true;
        }
        var cminusone = CardUtil.getByTabIdxAndPos(cardObserved.tableuIdx, cardObserved.tableuPosition - 1);
        if (cminusone == null) {
            // console.log("cminus one not found")
            return false;
        }
        // console.log("cminus one is")
        // Trace.TraceCardByIdxAndPos(cminusone.tableuIdx, cminusone.tableuPosition)
        if (CardUtil.isCardIdxFollowing(cminusone, cardObserved, true) == false) {
            // console.log("not following")
            return false;
        }
        return BoardManager.resultsInFullstack(cminusone);
    };
    BoardManager.InitializeBoard = function () {
        console.log("initialize board called");
        BoardManager.removeAllCards();
        BoardData.boardDataArray = new Array();
        console.log("generate cards");
        BoardManager.GenerateCards();
        console.log("generate stock");
        BoardManager.GenerateStock();
        console.log("generate tableu");
        BoardManager.GenerateTableu();
        console.log("generate snapshot");
        BoardManager.actuallyGenerateSnapshot();
        console.log("sort");
        BoardManager.sortImmediately();
        console.log("tween initial");
        BoardManager.initialTween();
        GameUI.reinitData();
        var gamesPlayed = Util.getStorage("gamesPlayed");
        gamesPlayed++;
        Util.setStorage("gamesPlayed", gamesPlayed);
    };
    BoardManager.initialTween = function () {
        console.log("initial tween called");
        // SimpleGame.myGame.time.events.add(200, function()
        // {
        //     console.log("init tweens")
        //     SoundManager.beginAnimation.play()
        // }, this);
        var arr = Card.cardArray;
        var i = arr.length;
        var initTweenIdx = 0;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_TABLEU) {
                c.initTween(initTweenIdx++);
            }
        }
    };
    BoardManager.removeAllCards = function () {
        var cArr = Card.cardArray;
        var i = cArr.length;
        while (i-- > 0) {
            var c = Card.cardArray[i];
            c.remove();
        }
    };
    BoardManager.resetBoard = function () {
        var gamesPlayed = Util.getStorage("gamesPlayed");
        gamesPlayed++;
        Util.setStorage("gamesPlayed", gamesPlayed);
        GameUI.resetUI();
        BoardManager.fromSnapshotToBoard(BoardData.boardDataArray[0]);
        BoardData.boardDataArray = new Array();
        BoardManager.actuallyGenerateSnapshot();
    };
    BoardManager.update = function () {
        // if (BoardManager.sortCounter++ % 60 == 1)
        // {
        //      BoardManager.sort();
        // }
        BoardManager.sort();
        if (BoardManager.checkForGameOver() && GameUI.gameStarted) {
            var gamewon = new GameWonPrompt();
        }
        if (BoardData.boardDataArray) {
        }
    };
    BoardManager.checkForGameOver = function () {
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState != Card.STATE_FOUNDATION) {
                return false;
            }
        }
        return true;
    };
    BoardManager.sort = function () {
        SimpleGame.myGame.time.events.add(50, function () {
            BoardManager.sortImmediately();
        });
    };
    BoardManager.sortImmediately = function () {
        // var arr = Card.cardArray
        //   console.log("sort called")
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.selectedFlag || c.myState == Card.STATE_DRAGGED) {
                c.cardImgFront.z = 3000 + c.tableuPosition;
                //  Trace.TraceCardByIdxAndPos(c.tableuIdx, c.tableuPosition)
            }
            else if (c.isMoving) {
                //  console.log("moving card that initiates lookup...")
                //   Trace.TraceCardByIdxAndPos(c.tableuIdx, c.tableuPosition)
                // GameUI.topLayer.add(c.cardImgFront)
                c.cardImgFront.z = 2000 + c.tableuPosition;
                // console.log(c.cardImgFront.z)
                var j = 50;
                while (j-- > 1) {
                    var c1 = CardUtil.getByTabIdxAndPos(c.tableuIdx, c.tableuPosition + j);
                    if (c1 != null) {
                        c1.cardImgFront.z = 2000 + c1.tableuPosition;
                        //   Trace.TraceCardByIdxAndPos(c1.tableuIdx, c1.tableuPosition)
                        //    console.log(c1.cardImgFront.z)
                    }
                }
            }
            else if (c.myState == Card.STATE_TABLEU) {
                // Trace.TraceCardByIdxAndPos(c.tableuIdx, c.tableuPosition)
                //    c.cardImgBack.z = c.cardImgFront.z = 1000 + c.tableuPosition;
                //    console.log("tab: " +c.cardImgBack.z)
            }
            else if (c.myState == Card.STATE_STOCK) {
                c.cardImgBack.z = c.myStockIdx;
                //  console.log("stock: " +c.cardImgBack.z)
            }
        }
        if (BoardManager.areAllCardsStatic()) {
            var arr = Card.cardArray;
            var i = arr.length;
            var totalStockCards = 0;
            while (i-- > 0) {
                var c = arr[i];
                // Card.items.add(c.cardImgFront)
                if (c.myState == Card.STATE_TABLEU) {
                    c.cardImgBack.z = c.cardImgFront.z = c.tableuPosition;
                }
                if (c.myState == Card.STATE_STOCK) {
                    c.cardImgBack.z = c.myStockIdx;
                    totalStockCards++;
                }
                if (c.myState == Card.STATE_FOUNDATION) {
                    c.foundationPosition = 11 - c.cardIdx;
                    if (c.foundationPosition < 0) {
                        c.foundationPosition = 12;
                    }
                    c.cardImgFront.z = 10000 + c.foundationPosition + 13 * c.foundationIdx;
                }
            }
        }
        Card.items.sort();
        Card.stock.sort();
        GameUI.topLayer.sort();
    };
    BoardManager.areAllCardsStatic = function () {
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.isMoving == true || c.myState == Card.STATE_DRAGGED || c.selectedFlag) {
                //   console.log(c.isMoving, c.myState, c.selectedFlag, c.tableuIdx, c.tableuPosition)
                return false;
            }
        }
        return true;
    };
    BoardManager.generateBoardSnapshot = function (skipundoenable) {
        // EntityHelper.delayedCall(0.1, actuallyGenerateSnapshot);
        if (skipundoenable === void 0) { skipundoenable = false; }
        SimpleGame.myGame.time.events.add(100, function () {
            BoardManager.actuallyGenerateSnapshot();
        });
        // BoardManager.actuallyGenerateSnapshot();
        if (skipundoenable == false) {
            // UndoButton.isAvailable = true;
        }
    };
    BoardManager.actuallyGenerateSnapshot = function () {
        if (CardUtil.getCompletedStack() != null)
            return;
        //   console.log("generate board snapshit")
        if (BoardData.boardDataArray == null) {
            BoardData.boardDataArray = new Array();
            BoardData.boardDataIdx = 0;
        }
        var bData = new BoardData();
        var i = Card.cardArray.length;
        while (i-- > 0) {
            bData.addToBdata(Card.cardArray[i]);
        }
        // console.log("stocklen: "+ bData.stockPile.length) 
        // bData.currentScore = MainUI.currentScore;
        //  console.log("tab pile 9 len: " + bData.tableuPile[9].length)
        if (BoardData.boardDataArray.length >= 2) {
            if (BoardManager.isBdataChanged(bData, BoardData.boardDataArray[BoardData.boardDataArray.length - 1])) {
                BoardData.boardDataArray.push(bData);
                BoardData.boardDataIdx = BoardData.boardDataArray.length - 1;
                // MainUI.totalMoves++;
                // console.log("actually generate snapshot, success")
            }
        }
        else {
            BoardData.boardDataArray.push(bData);
            //BoardData.boardDataArray.push(bData);
            BoardData.boardDataIdx = BoardData.boardDataArray.length - 1;
            // MainUI.totalMoves++;
            // console.log("actually generate snapshot, success")
        }
        // if ( ValidMoveUtil.isBoardPlayable() == false)
        // {
        // 	trace("SHOW UNDO MOVE DIALOGUE");
        // 	var nomoremoves:NoMoreMovesPrompt = new NoMoreMovesPrompt();
        // }
        // console.log( "boardatalen: " + BoardData.boardDataArray.length );
        var i = BoardData.boardDataArray.length;
        while (i-- > 0) {
            // console.log(BoardData.boardDataArray[i].tableuPile[9].length)
        }
    };
    BoardManager.isBdataChanged = function (bData, boardData) {
        return BoardData.isBdataChanged(bData, boardData);
    };
    BoardManager.Undo = function () {
        // if (MainUI.gameInProgress==false) return;
        //UndoButton.isAvailable = false;
        //if (BoardData.boardDataIdx == -1) return;
        //BoardData.boardDataIdx--;
        if (this.undoDisabled)
            return;
        SoundManager.playClick();
        //  console.log("undo called and enabled")
        if (BoardData.boardDataArray.length > 1) {
            var bData = BoardData.boardDataArray.pop();
            // console.log("tab len: " + bData.tableuPile[9].length)
            BoardManager.fromSnapshotToBoard(BoardData.boardDataArray[BoardData.boardDataArray.length - 1]);
            // BoardManager.fromSnapshotToBoard(BoardData.boardDataArray[BoardData.boardDataArray.length-1]);
            GameUI.score--;
            GameUI.moves++;
        }
        else {
            BoardManager.fromSnapshotToBoard(BoardData.boardDataArray[0]);
        }
        BoardManager.sort();
        var i = Card.cardArray.length;
        while (i-- > 0) {
            Card.cardArray[i].update();
        }
        BoardManager.sortImmediately();
        this.undoDisabled = true;
    };
    BoardManager.fromSnapshotToBoard = function (bData, skiplayerfixes) {
        if (skiplayerfixes === void 0) { skiplayerfixes = false; }
        bData.fromSnapshotToBoard(skiplayerfixes);
    };
    BoardManager.GenerateCards = function () {
        Card.cardArray = new Array();
        var i = CardUtil.NUM_SUITS;
        while (i-- > 0) {
            var j = CardUtil.NUM_CARDS_PER_SUIT;
            while (j-- > 0) {
                var card = new Card((i % CardUtil.NUM_SUIT_COLORS), j, i);
            }
        }
        Phaser.ArrayUtils.shuffle(Card.cardArray);
    };
    BoardManager.GenerateTableu = function () {
        var totalCards = CardUtil.NUM_SUITS * CardUtil.NUM_CARDS_PER_SUIT;
        var i = totalCards - 50;
        while (i-- > 0) {
            var tableuIdx = i % 10;
            var tableuPosition = Math.floor(i / 10);
            var card = Card.cardArray[i];
            card.tableuIdx = tableuIdx;
            card.tableuPosition = tableuPosition;
            card.setToTableu(true);
            card.setTableuZCoords();
            if (CardUtil.isOnTableuTop(card)) {
                card.cardImgBack.visible = false;
                card.cardImgFront.visible = true;
                card.turned = true;
            }
            else {
                card.cardImgBack.visible = true;
                card.cardImgFront.visible = false;
                card.turned = false;
            }
        }
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_TABLEU) {
                c.setToTableu(true);
            }
        }
        // Card.items.sort();
    };
    BoardManager.GenerateStock = function () {
        var totalCards = CardUtil.NUM_SUITS * CardUtil.NUM_CARDS_PER_SUIT;
        var i = totalCards;
        var stockIdx = 0;
        while (i-- > totalCards - 50) {
            var card = Card.cardArray[i];
            card.setToStock(stockIdx++);
        }
        // Card.items.sort();
    };
    BoardManager.NUM_TABLEU_COLUMNS = 10;
    BoardManager.undoDisabled = false;
    BoardManager.sortCounter = 0;
    BoardManager.hintSuccess = false;
    BoardManager.hintState = 0;
    BoardManager.HINT_STATE_TRY_FIRST_CARD_ONLY_HINT = 0;
    BoardManager.HINT_STATE_TRY_ANY_CARD_HINT = 1;
    BoardManager.HINT_STATE_FIRST_CARD_ONLY_NORESPECT = 2;
    BoardManager.HINT_STATE_ANY_CARD_ONLY_NORESPECT = 3;
    BoardManager.HINT_STATE_TRY_EMPTY_COLUMN = 4;
    BoardManager.HINT_STATE_TRY_EMPTY_BACKUP = 5;
    BoardManager.currentObservedColumn = -1;
    return BoardManager;
}());
var Card = /** @class */ (function () {
    function Card(suitIdx, cardIdx, deckIdx) {
        this.initTweenFlag = false;
        this.completedStackCheckedFlag = false;
        this.selectedFlag = false;
        this.turned = false;
        this.isMoving = false;
        this.stockPosition = -1;
        this.lastFrameWasOutsideOfScreen = false;
        this.banInputDown = false;
        this.colorInvertedFlag = false;
        this.initFoundationTweenFlag = false;
        this.suitIdx = suitIdx;
        this.cardIdx = cardIdx;
        this.deckIdx = deckIdx;
        // console.log("card created: " + suitIdx, cardIdx);
        this.cardImgFront = SimpleGame.myGame.make.sprite(-500, -500, CardUtil.getCardImgName(suitIdx, cardIdx));
        this.cardImgFront.inputEnabled = true;
        this.cardImgFront.events.onInputDown.add(this.onCardImgFrontDown, this, 200);
        this.cardImgFront.events.onInputUp.add(function () {
            this.banInputDown = true;
            this.cardImgFront.game.time.events.add(Consts.DELAY_BETWEEN_EVENTS_TOUCH, function () {
                this.banInputDown = false;
            }, this);
        }, this, 100);
        this.cardimgfrontupsignal = this.cardImgFront.events.onInputUp.add(this.onCardImgFrontUp, this);
        // this.cardImgFront.events.onOutOfBounds.add(this.onCardImgFrontUp, this)
        // this.cardImgFront.bringToTop();
        this.cardImgBack = SimpleGame.myGame.make.sprite(-100, -100, 'backside');
        this.cardImgBack.inputEnabled = true;
        // this.cardImgBack.input.enableDrag();
        this.cardImgBack.events.onInputDown.add(this.onCardImgBackDown, this);
        Card.items.add(this.cardImgFront);
        Card.items.add(this.cardImgBack);
        this.cardImgFront.anchor.set(0.5, 0.5);
        this.cardImgBack.anchor.set(0.5, 0.5);
        SimpleGame.myGame.renderer.renderSession.roundPixels = true;
        // this.invertFrontColors();
        Card.cardArray.push(this);
        SimpleGame.myGame.time.events.add(3000, function () {
            // this.myState = Card.STATE_FOUNDATION
        }, this);
    }
    Card.prototype.createInvertedSprite = function () {
        var bmd = SimpleGame.myGame.make.bitmapData();
        bmd.load(CardUtil.getCardImgName(this.suitIdx, this.cardIdx));
        bmd.processPixelRGB(function (pixel) {
            pixel.r = 255 - pixel.r;
            pixel.g = 255 - pixel.g;
            pixel.b = 255 - pixel.b;
            return pixel;
        }, this);
        // bmd.addToWorld(this.cardImgFront.x, this.cardImgFront.y, 0.5, 0.5)
        this.invertedSprite = SimpleGame.myGame.make.sprite(this.cardImgFront.x, this.cardImgFront.y + 50, bmd);
        this.invertedSprite.z = this.cardImgFront.z;
        this.invertedSprite.visible = false;
        Card.items.add(this.invertedSprite);
    };
    Card.prototype.invertFrontColors = function () {
        if (this.invertedSprite == null) {
            this.createInvertedSprite();
        }
        this.colorInvertedFlag = true;
        this.cardImgFront.visible = false;
        this.invertedSprite.z = this.cardImgFront.z;
        this.invertedSprite.y = 400;
        SimpleGame.myGame.time.events.add(Consts.timeToHint, function () {
            this.colorInvertedFlag = false;
        }, this);
        var nextCard = CardUtil.getByTabIdxAndPos(this.tableuIdx, this.tableuPosition + 1);
        if (nextCard != null) {
            nextCard.invertFrontColors();
        }
    };
    Card.prototype.onCardImgBackDown = function () {
        if (Card.disableSelect == true)
            return;
        if (this.myState != Card.STATE_STOCK)
            return;
        if (CardUtil.canUncoverStock()) {
            CardUtil.uncoverStock(this.stockPosition);
            GameUI.gameStarted = true;
        }
        else {
            var cannotuncoverstock = new CannotUncoverStock();
        }
        SoundManager.playClick();
    };
    Card.prototype.update = function () {
        // console.log(this.cardImgFront.x)
        // console.log("update")
        // this.cardImgBack.position.set(this.cardImgFront.position.x, this.cardImgFront.position.y);
        if (this.selectedFlag) {
            if (Math.abs(this.lastSelectedPosX - this.cardImgFront.x) > 10) {
                this.autoclickEnabled = false;
            }
            this.cardImgFront.x = SimpleGame.myGame.input.activePointer.x - this.dragDeltaX;
            this.cardImgFront.y = SimpleGame.myGame.input.activePointer.y - this.dragDeltaY;
            // console.log(SimpleGame.myGame.device.tridentVersion, SimpleGame.myGame.device.ieVersion)
            if (SimpleGame.myGame.device.tridentVersion > 0 || window.navigator.userAgent.indexOf("Edge") > -1) {
                if (this.cardImgFront.x + this.cardImgFront.width / 2 > SimpleGame.myGame.width) {
                    this.cardImgFront.x = SimpleGame.myGame.width - this.cardImgFront.width / 2;
                }
                if (this.cardImgFront.x < this.cardImgFront.width / 2) {
                    this.cardImgFront.x = this.cardImgFront.width / 2;
                }
            }
            // if (this.cardImgFront.y + this.cardImgFront.height / 2 > SimpleGame.myGame.height)
            // {
            //     this.cardImgFront.y = SimpleGame.myGame.height - this.cardImgFront.height / 2;
            // }
            // if (this.cardImgFront.y < this.cardImgFront.height / 2)
            // {
            //     this.cardImgFront.y = this.cardImgFront.height / 2;
            // }
            var i = Card.cardArray.length;
            while (i-- > 0) {
                var c = Card.cardArray[i];
                if (c.myState == Card.STATE_DRAGGED) {
                    c.update();
                }
            }
            this.lastSelectedPosX = this.cardImgFront.x;
            this.lastSelectedPosY = this.cardImgFront.y;
        }
        this.cardImgFront.alpha = 1;
        if (SimpleGame.myGame.input.activePointer.withinGame == false && (this.selectedFlag)) {
            this.lastFrameWasOutsideOfScreen = true;
            // this.cardImgFront.alpha = 0.0001;
        }
        if (this.selectedFlag) {
            // console.log(SimpleGame.myGame.input.activePointer.target, SimpleGame.myGame.input.activePointer.targetObject, SimpleGame.myGame.input.activePointer.isDown, SimpleGame.myGame.input.activePointer.withinGame, SimpleGame.myGame.input.activePointer.leftButton.isDown)
            // console.log(SimpleGame.myGame.input.worldX, SimpleGame.myGame.input.x, SimpleGame.myGame.input.position, SimpleGame.myGame.input.update());
            // console.log(SimpleGame.myGame.input.mousePointer.withinGame, SimpleGame.pointerDown, SimpleGame.myGame.input.activePointer.withinGame, SimpleGame.myGame.input.activePointer.isUp)
        }
        // if (Math.random() < 0.01 && this.selectedFlag)
        // {
        //     console.log("test: "+ SimpleGame.myGame.input.mousePointer.isUp, SimpleGame.myGame.device.desktop, this.selectedFlag, SimpleGame.pointerDown, ((SimpleGame.myGame.device.tridentVersion != 0 || window.navigator.userAgent.indexOf("Edge") > -1) && SimpleGame.myGame.input.activePointer.targetObject!=null) || SimpleGame.myGame.input.activePointer.withinGame ||  SimpleGame.myGame.input.mousePointer.withinGame)
        //     console.log( SimpleGame.myGame.device.desktop && this.selectedFlag &&  SimpleGame.pointerDown == false && ( ((SimpleGame.myGame.device.tridentVersion != 0 || window.navigator.userAgent.indexOf("Edge") > -1) && SimpleGame.myGame.input.activePointer.targetObject!=null) || SimpleGame.myGame.input.activePointer.withinGame ||  SimpleGame.myGame.input.mousePointer.withinGame) && SimpleGame.myGame.input.mousePointer.isUp)
        // }
        if (this.selectedFlag && SimpleGame.pointerDown == false && (((SimpleGame.myGame.device.tridentVersion != 0 || window.navigator.userAgent.indexOf("Edge") > -1) && SimpleGame.myGame.input.activePointer.targetObject != null) || SimpleGame.myGame.input.activePointer.withinGame || SimpleGame.myGame.input.mousePointer.withinGame) && SimpleGame.myGame.input.activePointer.isUp) 
        // if ( SimpleGame.myGame.device.desktop && this.selectedFlag  && ( ((SimpleGame.myGame.device.tridentVersion != 0 || window.navigator.userAgent.indexOf("Edge") > -1) && SimpleGame.myGame.input.activePointer.targetObject!=null) || SimpleGame.myGame.input.activePointer.withinGame ||  SimpleGame.myGame.input.mousePointer.withinGame) && (SimpleGame.myGame.input.mousePointer.isUp || SimpleGame.myGame.input.activePointer.isUp))
        {
            // console.log("active pointer is up: "+ SimpleGame.myGame.input.activePointer.isUp)
            if (this.cardImgFront.parent) {
                console.log("new card created!");
                this.cardImgFront.parent.removeChild(this.cardImgFront);
                this.cardImgFront = SimpleGame.myGame.make.sprite(-500, -500, CardUtil.getCardImgName(this.suitIdx, this.cardIdx));
                this.cardImgFront.inputEnabled = true;
                this.cardImgFront.events.onInputDown.add(this.onCardImgFrontDown, this, 101);
                this.cardImgFront.events.onInputDown.add(function () {
                    this.banInputDown = true;
                    this.cardImgFront.game.time.events.add(Consts.DELAY_BETWEEN_EVENTS_TOUCH, function () {
                        this.banInputDown = false;
                    }, this);
                }, this, 100);
                this.cardimgfrontupsignal = this.cardImgFront.events.onInputUp.add(this.onCardImgFrontUp, this);
                this.setToTableu(true);
                Card.items.add(this.cardImgFront);
                var arr = Card.cardArray;
                var i = arr.length;
                while (i-- > 0) {
                    var c = arr[i];
                    if (c.myState == Card.STATE_DRAGGED) {
                        Card.items.add(c.cardImgFront);
                        c.setToTableu(true);
                    }
                }
                this.cardImgFront.anchor.set(0.5, 0.5);
            }
            this.onCardImgFrontUp();
        }
        if (this.myState != Card.STATE_STOCK && this.myState != Card.STATE_FOUNDATION && this.cardImgFront.scale.x < 1) {
            this.cardImgFront.scale.x += 0.02;
            this.cardImgFront.scale.y += 0.02;
        }
        else {
            if (this.myState != Card.STATE_FOUNDATION) {
                this.cardImgFront.scale.x = 1;
                this.cardImgFront.scale.y = 1;
            }
        }
        if (this.initTweenFlag) {
            return;
        }
        if (this.myState == Card.STATE_STOCK) {
            this.updateStock();
        }
        if (this.myState == Card.STATE_TABLEU) {
            this.updateTableu();
            this.initFoundationTweenFlag = false;
            // this.cardImgFront.x = Math.round(this.cardImgFront.x)
            // this.cardImgFront.y = Math.round(this.cardImgFront.y)
            // this.cardImgBack.x = Math.floor(this.cardImgBack.x)
            // this.cardImgBack.y = Math.floor(this.cardImgBack.y)           
        }
        if (this.myState == Card.STATE_DRAGGED) {
            this.updateDragged();
        }
        if (this.myState == Card.STATE_STOCK_TO_TAB) {
            return;
        }
        if (this.turned == false) {
            this.cardImgBack.visible = true;
            this.cardImgFront.visible = false;
        }
        else {
            this.cardImgBack.visible = false;
            this.cardImgFront.visible = true;
            if (this.invertedSprite != null) {
                if (this.colorInvertedFlag) {
                    this.cardImgFront.visible = false;
                    this.invertedSprite.position.set(this.cardImgFront.x, this.cardImgFront.y);
                    this.invertedSprite.anchor.set(0.5, 0.5);
                    this.invertedSprite.z = this.cardImgFront.z;
                    this.invertedSprite.visible = true;
                }
                else {
                    this.invertedSprite.visible = false;
                }
            }
        }
        if (this.selectedFlag) {
            this.cardImgFront.x = Math.floor(this.cardImgFront.x);
            this.cardImgFront.y = Math.floor(this.cardImgFront.y);
        }
        if (this.myState == Card.STATE_FOUNDATION) {
            this.updateFoundation();
        }
        this.setIsMovingFlag();
    };
    Card.prototype.updateFoundation = function () {
        if (this.initFoundationTweenFlag == false) {
            this.initFoundationTweenFlag = true;
            // this.isMoving = true;
            this.cardImgFront.z += 10000;
            if (this.cardIdx == CardUtil.CARD_IDX_K) {
                this.cardImgFront.z += 100000;
            }
        }
        else {
            this.cardImgBack.position.set(this.cardImgFront.x, this.cardImgFront.y);
            return;
        }
        var tween3 = SimpleGame.myGame.add.tween(this.cardImgFront.scale).to({
            x: Card.FOUNDATION_SCALE, y: Card.FOUNDATION_SCALE
        }, 200, Phaser.Easing.Default, true);
        var tween1 = SimpleGame.myGame.add.tween(this.cardImgFront).to({ y: Card.CARD_FOUND_POS_Y_INIT }, 200, Phaser.Easing.Default, true);
        var tween2 = SimpleGame.myGame.add.tween(this.cardImgFront).to({ x: Card.CARD_FOUND_POS_X_INIT + Card.CARD_FOUND_POS_X_DELTA * this.foundationIdx }, 200, Phaser.Easing.Default, true);
        tween2.onComplete.add(function () {
            if (this.cardIdx != CardUtil.CARD_IDX_K) {
                this.cardImgFront.y = 1000;
            }
        }, this);
    };
    Card.prototype.updateDragged = function () {
        var c = CardUtil.getSelectedCard();
        if (c != null) {
            this.cardImgFront.x = Math.round(c.cardImgFront.x - this.draggedDeltaX);
            this.cardImgFront.y = Math.round(c.cardImgFront.y - this.draggedDeltaY);
        }
    };
    Card.prototype.updateTableu = function () {
        //   console.log("update tableu")
        // this.cardImgFront.position.set(200,300);
        this.cardImgBack.position.set(this.cardImgFront.x, this.cardImgFront.y);
        if (this.selectedFlag == false) {
            this.setToTableu();
        }
    };
    Card.prototype.updateStock = function () {
        this.cardImgBack.position.set(Card.CARD_STOCK_POSITION_X_INIT + this.stockPosition * Card.CARD_STOCK_POSITION_X_DELTA, Card.CARD_STOCK_POSITION_Y_INIT);
        this.cardImgFront.position.set(this.cardImgBack.x, this.cardImgBack.y);
        this.cardImgBack.scale.set(Card.FOUNDATION_SCALE, Card.FOUNDATION_SCALE);
        this.cardImgFront.scale.set(Card.FOUNDATION_SCALE, Card.FOUNDATION_SCALE);
        // this.cardImgBack.z =this.myStockIdx;
        // Card.stock.add(this.cardImgBack)
        //   console.log("sprite z: " + this.cardImgBack.z + ", " + this.stockPosition)
    };
    Card.prototype.manageInvalidMovingStackSelection = function () {
        this.peekedFlag = true;
    };
    Card.prototype.onCardImgFrontDown = function () {
        //  console.log(CardUtil.isValidMoveStack(this), Card.disableSelect, this.myState)
        BoardManager.HintReset();
        console.log("card is pressed");
        if (CardUtil.checkIfSelectedCardExists())
            return;
        if (Card.disableSelect == true)
            return;
        if (this.myState == Card.STATE_FOUNDATION)
            return;
        // if (this.selectedFlag) return;
        if (this.banInputDown) {
            console.log("input is banned");
            return;
        }
        if (CardUtil.isValidMoveStack(this) == false) {
            this.manageInvalidMovingStackSelection();
            return;
        }
        console.log("card clicked:");
        Trace.TraceCardByIdxAndPos(this.tableuIdx, this.tableuPosition);
        this.banInputDown = true;
        this.cardImgFront.game.time.events.add(Consts.DELAY_BETWEEN_EVENTS_TOUCH, function () {
            this.banInputDown = false;
        }, this);
        SoundManager.playGrabCard();
        GameUI.gameStarted = true;
        // this.cardImgFront.input.enableDrag()
        this.cardImgFront.z = 1000;
        var deltaY = 3;
        this.cardImgFront.y -= deltaY;
        this.dragDeltaX = SimpleGame.myGame.input.activePointer.x - this.cardImgFront.x;
        this.dragDeltaY = SimpleGame.myGame.input.activePointer.y - this.cardImgFront.y;
        this.autoclickEnabled = true;
        //  console.log("autoclickenabled is true")
        // console.log("autoclickenabled is true")
        this.selectedFlag = true;
        this.lastSelectedPosX = this.cardImgFront.x;
        this.lastSelectedPosY = this.cardImgFront.y;
        SimpleGame.myGame.time.events.add(250, function () {
            this.autoclickEnabled = false;
            // console.log("autoclick enabled is false", this.autoclickEnabled)
        }, this);
        GameUI.topLayer.add(this.cardImgFront);
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_TABLEU) {
                if (c.tableuIdx == this.tableuIdx) {
                    if (c.tableuPosition > this.tableuPosition) {
                        c.myState = Card.STATE_DRAGGED;
                        c.draggedDeltaX = this.cardImgFront.x - c.cardImgFront.x;
                        c.draggedDeltaY = -Card.CARD_TAB_POS_Y_DELTA * (c.tableuPosition - this.tableuPosition);
                        c.cardImgFront.z = c.tableuPosition - this.tableuPosition + this.cardImgFront.z;
                        GameUI.topLayer.add(c.cardImgFront);
                    }
                }
            }
        }
        BoardManager.sort();
        BoardManager.sortImmediately();
    };
    Card.prototype.onCardImgFrontUp = function () {
        console.log("card is unpressed");
        if (this.peekedFlag == true) {
            this.peekedFlag = false;
        }
        this.lastFrameWasOutsideOfScreen = false;
        if (this.selectedFlag == false)
            return;
        //  console.log("autoclick enabled: " + this.autoclickEnabled)
        // console.log("card unclicked:" + Trace.TraceCardByIdxAndPos(this.tableuIdx, this.tableuPosition) );
        this.cardImgFront.input.disableDrag();
        // this.setToTableu(true)
        CardUtil.cardDeselected(this);
        if (this.autoclickEnabled == true && CardUtil.droppedOnTableuSuccess == false) {
            console.log("try to autoclick");
            CardUtil.tryToAutoclick(this);
            this.selectedFlag = false;
        }
        else {
            // CardUtil.cardDeselected(this)
        }
        CardUtil.returnUnplacedTabCards();
        CardUtil.tryToPlaceCardsOnFoundation();
        BoardManager.generateBoardSnapshot();
        BoardManager.sort();
        BoardManager.sortImmediately();
    };
    Card.prototype.setIsMovingFlag = function () {
        if (this.myState == Card.STATE_TABLEU) {
            var newX = Card.CARD_TAB_POS_X_INIT + this.tableuIdx * Card.CARD_TAB_POS_X_DELTA;
            if (Math.abs(newX - this.cardImgFront.x) > 3 || Math.abs(this.newY - this.cardImgFront.y) > 3) {
                this.isMoving = true;
            }
            else {
                this.isMoving = false;
            }
        }
        else if (this.myState == Card.STATE_STOCK || this.myState == Card.STATE_FOUNDATION) {
            this.isMoving = false;
        }
    };
    Card.prototype.setToTableu = function (immediately) {
        if (immediately === void 0) { immediately = false; }
        var closedCardsDelta = 16;
        var firstTurnedCardIdx = CardUtil.getFirstTurnedCardIdx(this.tableuIdx);
        var newX = Card.CARD_TAB_POS_X_INIT + this.tableuIdx * Card.CARD_TAB_POS_X_DELTA;
        this.newX = newX;
        if (firstTurnedCardIdx <= this.tableuPosition) {
            var newY = Card.CARD_TAB_POS_Y_INIT + firstTurnedCardIdx * (Card.CARD_TAB_POS_Y_DELTA - closedCardsDelta) + (this.tableuPosition - firstTurnedCardIdx) * Card.CARD_TAB_POS_Y_DELTA;
        }
        else {
            var newY = Card.CARD_TAB_POS_Y_INIT + this.tableuPosition * (Card.CARD_TAB_POS_Y_DELTA - closedCardsDelta);
        }
        //   var newY = Card.CARD_TAB_POS_Y_INIT + this.tableuPosition * (Card.CARD_TAB_POS_Y_DELTA-3);
        if (this.tableuIdx == 0) {
            // console.log(firstTurnedCardIdx, this.tableuPosition, newY)
        }
        if (Math.abs(newX - this.cardImgFront.x) > 5) {
            // console.log("card is moving")
            this.isMoving = true;
            var cMinusOne = CardUtil.getByTabIdxAndPos(this.tableuIdx, this.tableuPosition - 1);
            if (cMinusOne != null) {
                if (cMinusOne.isMoving) {
                    this.isMoving = false;
                }
            }
            // BoardManager.sort()
        }
        else {
            if (this.isMoving == true) {
            }
            this.isMoving = false;
        }
        var peekedPosition = CardUtil.getPeekedPosition(this.tableuIdx);
        var peekDelta = this.tableuPosition - peekedPosition;
        if (peekedPosition < 0) {
            peekDelta = -1;
        }
        var deltaMultiplier = 2.5;
        var deltaReducer = 0.9595;
        // deltaMultiplier = 3;
        // deltaReducer = 1;
        var maxIdx = CardUtil.getMaxTableuPosition(this.tableuIdx);
        if (maxIdx > 10) {
            var delta = maxIdx - 10;
            if (firstTurnedCardIdx <= this.tableuPosition) {
                if (peekDelta > 0) {
                    var newY = Card.CARD_TAB_POS_Y_INIT + firstTurnedCardIdx * (Card.CARD_TAB_POS_Y_DELTA - closedCardsDelta) + (deltaMultiplier * delta * (Math.pow(deltaReducer, delta))) + (this.tableuPosition - firstTurnedCardIdx) * (Card.CARD_TAB_POS_Y_DELTA - deltaMultiplier * delta * (Math.pow(deltaReducer, delta)));
                }
                else {
                    var newY = Card.CARD_TAB_POS_Y_INIT + firstTurnedCardIdx * (Card.CARD_TAB_POS_Y_DELTA - closedCardsDelta) + (this.tableuPosition - firstTurnedCardIdx) * (Card.CARD_TAB_POS_Y_DELTA - deltaMultiplier * delta * (Math.pow(deltaReducer, delta)));
                }
            }
            else {
                var newY = Card.CARD_TAB_POS_Y_INIT + this.tableuPosition * (Card.CARD_TAB_POS_Y_DELTA - closedCardsDelta);
            }
        }
        if (this.selectedFlag || this.myState == Card.STATE_DRAGGED) {
            var newY = Card.CARD_TAB_POS_Y_INIT + this.tableuPosition * (Card.CARD_TAB_POS_Y_DELTA - closedCardsDelta);
        }
        newY = Math.round(newY);
        if (immediately) {
            this.cardImgFront.x = newX;
            this.cardImgFront.y = newY;
        }
        else {
            this.cardImgFront.x += (newX - this.cardImgFront.x) * 0.25;
            this.cardImgFront.y += (newY - this.cardImgFront.y) * 0.25;
        }
        if (Math.abs(newX - this.cardImgFront.x) < 0.3 && Math.abs(newX - this.cardImgFront.x) >= 0) {
            this.cardImgFront.x = Math.round(this.cardImgFront.x);
        }
        if (Math.abs(newY - this.cardImgFront.y) < 0.3 && Math.abs(newY - this.cardImgFront.y) >= 0) {
            this.cardImgFront.y = Math.round(this.cardImgFront.y);
        }
        if (this.turned) {
            this.cardImgBack.visible = false;
            this.cardImgFront.visible = true;
        }
        this.myState = Card.STATE_TABLEU;
    };
    Card.prototype.setFromStockToTabStart = function (myTabIdx) {
        // console.log("setfromstocktotabstart" + this)
        this.myTabIdx = myTabIdx;
        this.cardImgBack.visible = false;
        this.myState = Card.STATE_STOCK_TO_TAB;
        SimpleGame.myGame.time.events.add(myTabIdx * 50, this.setFromStockToTab, this);
    };
    Card.prototype.setFromStockToTab = function () {
        console.log("setfromstocktotab" + this);
        this.tableuPosition = 1 + CardUtil.getMaxTableuPosition(this.myTabIdx);
        this.myState = Card.STATE_TABLEU;
        this.tableuIdx = this.myTabIdx;
        this.flipcard();
        this.cardImgFront.z = 1000;
        Card.items.add(this.cardImgFront);
        // Card.items.sort()   
    };
    Card.prototype.flipcard = function (withAnim) {
        // withAnim = false;
        if (withAnim === void 0) { withAnim = false; }
        if (this.turned)
            return;
        if (withAnim) {
            SimpleGame.myGame.time.events.add(200, function () {
                this.cardImgFront.scale.x = 1;
            }, this);
        }
        this.turned = true;
        this.setToTableu();
        if (withAnim) {
            SimpleGame.myGame.time.events.add(0, function () {
                this.cardImgFront.scale.x = 0.05;
                var scaleTween = SimpleGame.myGame.add.tween(this.cardImgFront.scale).to({
                    x: 1, y: 1
                }, 100, Phaser.Easing.Linear.None);
                // this.cardImgBack.scale.x = 1;
                var scaleTween1 = SimpleGame.myGame.add.tween(this.cardImgBack.scale).to({
                    x: 1, y: 1
                }, 200, Phaser.Easing.Linear.None);
                scaleTween.start();
                scaleTween1.start();
                console.log("tween added");
            }, this);
            if (withAnim) {
                var scaleTween2 = SimpleGame.myGame.add.tween(this.cardImgBack.scale).to({
                    x: 0.05, y: 1
                }, 60);
            }
        }
    };
    Card.prototype.setTableuZCoords = function () {
        this.cardImgBack.z = this.tableuPosition;
        this.cardImgFront.z = this.tableuPosition;
    };
    Card.prototype.setToStock = function (stockIdx) {
        this.myState = Card.STATE_STOCK;
        this.cardImgFront.visible = false;
        this.cardImgBack.visible = true;
        this.myStockIdx = stockIdx;
        this.stockPosition = Math.floor(stockIdx / 10);
        // Card.items.sort("myStockIdx", Phaser.Group.SORT_ASCENDING)
        // Card.items.sort()
        Card.items.add(this.cardImgBack);
        Card.items.add(this.cardImgFront);
        this.cardImgFront.z = stockIdx;
        this.cardImgBack.z = stockIdx;
        // console.log("sorted... stock pos: " + stockIdx + ", " + this.cardImgBack.z + ", " + this.cardImgFront.z);
        this.updateStock();
    };
    Card.prototype.initTween = function (idx) {
        this.initTweenFlag = true;
        this.tweenIdx = idx;
        idx = this.tableuIdx * 6 + this.tableuPosition;
        idx = this.tableuPosition * 10 + this.tableuIdx;
        //  idx = 0;
        this.cardImgBack.x = this.cardImgFront.x;
        this.cardImgBack.y = this.cardImgFront.y;
        this.cardImgBackXOld = this.cardImgFront.x;
        this.cardImgFront.y += 700;
        this.cardImgBack.y += 700;
        this.cardImgBack.x = this.cardImgFront.x = 440;
        SimpleGame.myGame.time.events.add(0 + 16 * idx, function () {
            this.isMoving = true;
            SimpleGame.myGame.time.events.add(50 + idx * 20, function () {
                if (this.tweenIdx % 2 == 0) {
                    //    SoundManager.dealcards.position = 200;
                    SoundManager.dealcards.volume = 0.5;
                    SoundManager.dealcards.update();
                    SoundManager.dealcards.play();
                }
            }, this);
            var tween = SimpleGame.myGame.add.tween(this.cardImgFront).to({ y: this.cardImgFront.y - 700, onComplete: this.tweenComplete.bind(this) }, 200, Phaser.Easing.Cubic.Out, true, idx * 20);
            tween.onComplete.add(this.tweenComplete, this);
            var tween1 = SimpleGame.myGame.add.tween(this.cardImgBack).to({ y: this.cardImgBack.y - 700 }, 200, Phaser.Easing.Cubic.Out, true, idx * 20);
            var tween2 = SimpleGame.myGame.add.tween(this.cardImgFront).to({ x: this.cardImgBackXOld }, 200, Phaser.Easing.Cubic.Out, true, idx * 20);
            var tween3 = SimpleGame.myGame.add.tween(this.cardImgBack).to({ x: this.cardImgBackXOld }, 200, Phaser.Easing.Cubic.Out, true, idx * 20);
        }, this);
        //    this.updateTableu()
        if (CardUtil.isOnTableuTop(this) == false) {
            this.cardImgBack.visible = true;
        }
        // this.tweenComplete()
    };
    Card.prototype.tweenComplete = function () {
        // this.myState = Card.STATE_TABLEU;
        console.log("TWEEN COMPLETE!");
        this.initTweenFlag = false;
        this.isMoving = false;
    };
    Card.prototype.remove = function () {
        Card.items.remove(this.cardImgFront);
        Card.items.remove(this.cardImgBack);
        Card.cardArray.slice(Card.cardArray.indexOf(this, 0), 1);
    };
    Card.Init = function () {
        console.log("static fun");
        Card.cardArray = new Array();
        Card.stock = SimpleGame.myGame.add.group();
        Card.items = SimpleGame.myGame.add.group();
        // Card.items.visible = false;
        // var c1:Card = new Card(1,1);
    };
    Card.preload = function () {
        console.log("card images preload");
        SimpleGame.myGame.load.image('backside', 'assets/CARDS/backside.png');
        var i = CardUtil.NUM_CARDS_PER_SUIT * 4;
        while (i-- > 0) {
            SimpleGame.myGame.load.image(CardUtil.cardNameArray[i], CardUtil.getCardNameURLs()[i]);
            // console.log(CardUtil.cardNameArray[i], CardUtil.getCardNameURLs()[i])
        }
        console.log("card images preloaded done");
    };
    Card.FOUNDATION_SCALE = 0.8;
    Card.CARD_STOCK_POSITION_X_INIT = 40;
    Card.CARD_STOCK_POSITION_Y_INIT = 99;
    Card.CARD_STOCK_POSITION_X_DELTA = 15;
    Card.CARD_TAB_POS_X_INIT = 48;
    Card.CARD_TAB_POS_X_DELTA = 87;
    Card.CARD_TAB_POS_Y_INIT = 216;
    Card.CARD_TAB_POS_Y_DELTA = 30;
    Card.CARD_FOUND_POS_X_INIT = 328;
    Card.CARD_FOUND_POS_X_DELTA = 73;
    Card.CARD_FOUND_POS_Y_INIT = 100;
    Card.STATE_INIT_TWEEN = -1;
    Card.STATE_TABLEU = 0;
    Card.STATE_STOCK = 1;
    Card.STATE_FOUNDATION = 2;
    Card.STATE_DRAGGED = 3;
    Card.STATE_STOCK_TO_TAB = 4;
    Card.disableSelect = false;
    return Card;
}());
var CardUtil = /** @class */ (function () {
    function CardUtil() {
    }
    CardUtil.getByCardAndSuitIdx = function (suitidx, cardidx, deckidx) {
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.suitIdx == suitidx && c.cardIdx == cardidx && c.deckIdx == deckidx) {
                return c;
            }
        }
        return null;
    };
    CardUtil.getFirstTurnedCardIdx = function (tabIdx) {
        var i = -1;
        do {
            i++;
            var c = CardUtil.getByTabIdxAndPos(tabIdx, i);
            if (c == null) {
                break;
            }
        } while (c.turned == false);
        return i;
    };
    CardUtil.cardDeselected = function (card) {
        CardUtil.returnToTableuLayer();
        CardUtil.playInvalidSound = false;
        //  console.log("card deselected,not autoclick")
        CardUtil.droppedOnTableuSuccess = false;
        CardUtil.checkIfDroppedOnTableu(card);
        // console.log("card deselected call")
        if (CardUtil.droppedOnTableuSuccess == false) {
            CardUtil.checkIfDroppedOnEmptyTableu(card);
        }
        if (CardUtil.droppedOnTableuSuccess) {
            GameUI.moves++;
            BoardManager.undoDisabled = false;
            SimpleGame.myGame.time.events.add(150, function () {
                GameUI.score--;
            });
            SoundManager.valid.play();
        }
        else {
            if (CardUtil.playInvalidSound) {
                // SoundManager.fail.play();
            }
            // 
        }
        // CardUtil.returnUnplacedTabCards();
        // CardUtil.tryToPlaceCardsOnFoundation();
        // BoardManager.generateBoardSnapshot()
        // BoardManager.sort()
    };
    CardUtil.returnToTableuLayer = function () {
        // Card.items.add(card.cardImgFront) 
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            if (arr[i].myState == Card.STATE_DRAGGED || arr[i].selectedFlag) {
                // console.log("return to card.items")
                Card.items.add(arr[i].cardImgFront);
            }
        }
    };
    CardUtil.getCardOnTop = function (tabIdx) {
        // console.log("get card on top called")
        var i = -1;
        do {
            i++;
            var c = CardUtil.getByTabIdxAndPos(tabIdx, i);
            if (c == null) {
                // console.log("card is null")
                return null;
            }
            else {
                // console.log("card found")
            }
            // Trace.TraceCardByIdxAndPos(c.tableuIdx, c.tableuPosition)
            if (c.myState != Card.STATE_TABLEU) {
                // console.log("state is not tableu")
                continue;
            }
            if (CardUtil.isOnTableuTop(c)) {
                return c;
            }
        } while (c != null);
        return null;
    };
    CardUtil.tryToAutoclick = function (card) {
        //  console.log("try to autoclick: " + CardUtil.tabIdxCurrent)
        CardUtil.returnToTableuLayer();
        CardUtil.autoclickMode = true;
        var j = 10;
        CardUtil.tabIdxCurrent = card.tableuIdx;
        while (j-- > 0) {
            CardUtil.tabIdxCurrent++;
            if (CardUtil.tabIdxCurrent >= 10) {
                CardUtil.tabIdxCurrent = 0;
            }
            CardUtil.droppedOnTableuSuccess = false;
            var arr = Card.cardArray;
            var i = arr.length;
            while (i-- > 0) {
                var c = arr[i];
                if (CardUtil.isOnTableuTop(c) && c.tableuIdx == CardUtil.tabIdxCurrent && c.suitIdx == card.suitIdx) {
                    if (c.tableuIdx != card.tableuIdx) {
                        CardUtil.droppedOnTableu(card, c);
                    }
                    if (CardUtil.droppedOnTableuSuccess) {
                        break;
                    }
                }
            }
            if (CardUtil.droppedOnTableuSuccess) {
                break;
            }
        }
        if (CardUtil.droppedOnTableuSuccess == false) {
            var j = 10;
            CardUtil.tabIdxCurrent = card.tableuIdx;
            while (j-- > 0) {
                CardUtil.tabIdxCurrent++;
                if (CardUtil.tabIdxCurrent >= 10) {
                    CardUtil.tabIdxCurrent = 0;
                }
                CardUtil.droppedOnTableuSuccess = false;
                var arr = Card.cardArray;
                var i = arr.length;
                while (i-- > 0) {
                    var c = arr[i];
                    if (CardUtil.isOnTableuTop(c) && c.tableuIdx == CardUtil.tabIdxCurrent) {
                        if (c.tableuIdx != card.tableuIdx) {
                            CardUtil.droppedOnTableu(card, c);
                        }
                        if (CardUtil.droppedOnTableuSuccess) {
                            break;
                        }
                    }
                }
                if (CardUtil.droppedOnTableuSuccess) {
                    break;
                }
            }
        }
        if (CardUtil.droppedOnTableuSuccess == false) {
            //if didn't manage to place on non empty tab, place on empty tab
            var i = BoardManager.NUM_TABLEU_COLUMNS;
            while (i-- > 0) {
                var idx = 9 - i;
                if (CardUtil.checkIfTabEmpty(idx) && idx != card.tableuIdx) {
                    CardUtil.dropOnEmptyTableu(card, idx);
                    CardUtil.droppedOnTableuSuccess = true;
                    break;
                }
            }
        }
        if (CardUtil.droppedOnTableuSuccess) {
            GameUI.moves++;
            BoardManager.undoDisabled = false;
            SimpleGame.myGame.time.events.add(150, function () {
                GameUI.score--;
            });
            SoundManager.valid.play();
        }
        CardUtil.autoclickMode = false;
        card.selectedFlag = false;
    };
    CardUtil.returnUnplacedTabCards = function () {
        // console.log("return unplaced tableu cards")
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_DRAGGED) {
                c.myState = Card.STATE_TABLEU;
                // c.setToTableu(true)
            }
        }
    };
    CardUtil.getFreeFoundationIdx = function () {
        var freeFoundPos = 0;
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_FOUNDATION) {
                if (c.foundationIdx >= freeFoundPos) {
                    freeFoundPos = c.foundationIdx + 1;
                }
            }
        }
        return freeFoundPos;
    };
    CardUtil.tryToPlaceCardsOnFoundation = function () {
        SimpleGame.myGame.time.events.add(250, function () {
            var stack = CardUtil.getCompletedStack();
            if (stack == null)
                return;
            GameUI.score++;
            //    console.log("try to place cards on found: " + stack.length)
            var freeFoundPos = CardUtil.getFreeFoundationIdx();
            // console.log("freefoundpos: " +freeFoundPos)
            // 
            // console.log("stacklen: " + stack.length)
            var i = stack.length;
            while (i-- > 0) {
                var c = stack[i];
                // console.log(c.myState, c.tableuIdx, c.tableuPosition)
                c.myState = Card.STATE_FOUNDATION;
                c.foundationIdx = freeFoundPos;
                c.foundationPosition = 11 - c.cardIdx;
                if (c.foundationPosition < 0) {
                    c.foundationPosition = 12;
                }
                //  Trace.TraceCardByIdxAndPos(c.tableuIdx, c.tableuPosition)
                //   console.log(c.foundationPosition, c.myState)
            }
            CardUtil.uncoverTableu(c);
            SoundManager.clearrow.play();
            BoardManager.generateBoardSnapshot();
            BoardManager.sort();
        });
    };
    CardUtil.getCompletedStack = function () {
        // console.log("getCompletedStack()....")
        var arr = Card.cardArray;
        var i = arr.length;
        // console.log("arr len: " + i)
        var retArr = [];
        while (i-- > 0) {
            var c = arr[i];
            // console.log("check card: ", i, c.cardIdx == CardUtil.CARD_IDX_K, c.turned, c.myState, c.tableuIdx, c.tableuPosition)
            if (c.cardIdx == CardUtil.CARD_IDX_K && c.turned && c.myState == Card.STATE_TABLEU) {
                // console.log("king found")
                var j = CardUtil.NUM_CARDS_PER_SUIT;
                retArr = [];
                retArr.push(c);
                do {
                    // console.log("step idx:" + j);
                    var c1 = CardUtil.getByTabIdxAndPos(c.tableuIdx, c.tableuPosition + 1);
                    if (c1 == null || CardUtil.isCardIdxFollowing(c, c1, true) == false) {
                        // console.log("not following or null, break")
                        break;
                    }
                    // console.log("following found!")
                    retArr.push(c1);
                    // Trace.TraceCardByIdxAndPos(c1.tableuIdx, c1.tableuPosition)
                    c = c1;
                } while (j-- > 1);
                if (retArr.length == CardUtil.NUM_CARDS_PER_SUIT) {
                    // console.log("return correct array")
                    return retArr;
                }
            }
        }
        return null;
    };
    CardUtil.isValidMoveStack = function (card) {
        var c = CardUtil.getByTabIdxAndPos(card.tableuIdx, card.tableuPosition + 1);
        if (c != null) {
            if (c.suitIdx != card.suitIdx) {
                // console.log("different suit indexes, not valid")
                return false;
            }
            else if (CardUtil.isCardIdxFollowing(card, c) == false) {
                // console.log("same suit indexes but not following, not valid")
                return false;
            }
            else {
                return CardUtil.isValidMoveStack(c);
            }
        }
        else {
            return true;
        }
    };
    CardUtil.getPeekedPosition = function (tabidx) {
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.tableuIdx == tabidx && c.peekedFlag) {
                return c.tableuPosition;
            }
        }
        return -1;
    };
    CardUtil.isCardIdxFollowing = function (card1, card2, respectSuit) {
        if (respectSuit === void 0) { respectSuit = false; }
        if (respectSuit) {
            if (card1.suitIdx != card2.suitIdx)
                return false;
        }
        // console.log(card1.cardIdx, card2.cardIdx)
        if (card2.cardIdx <= CardUtil.CARD_IDX_Q && card1.cardIdx == card2.cardIdx + 1) {
            // console.log("return following")
            return true;
        }
        else if (card2.cardIdx == CardUtil.CARD_IDX_A && card1.cardIdx == CardUtil.CARD_IDX_02) {
            return true;
        }
        return false;
    };
    CardUtil.getByTabIdxAndPos = function (tabIdx, tabPos) {
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_TABLEU && c.tableuIdx == tabIdx && c.tableuPosition == tabPos) {
                return c;
            }
        }
        return null;
    };
    CardUtil.uncoverStock = function (stockPos) {
        SoundManager.playDealRow();
        // GameUI.moves++;
        GameUI.score--;
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.stockPosition > stockPos && c.myState == Card.STATE_STOCK) {
                stockPos = c.stockPosition;
            }
        }
        var arr = Card.cardArray;
        var i = arr.length;
        var totalCardsOnStock = 0;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_STOCK)
                totalCardsOnStock++;
            if (c.myState == Card.STATE_STOCK && stockPos == c.stockPosition) {
                var myTabIdx = c.myStockIdx % 10;
                c.cardImgFront.y = 60;
                c.cardImgFront.x = 30;
                c.setFromStockToTabStart(myTabIdx);
            }
        }
        // console.log("total cards on stock: " + totalCardsOnStock)
        // Card.items.sort()
        SimpleGame.myGame.time.events.add(500, BoardManager.generateBoardSnapshot, this);
        CardUtil.getMaxTableuPosition(0);
        BoardManager.undoDisabled = true;
        Card.disableSelect = true;
        SimpleGame.myGame.time.events.add(450, function () {
            // BoardManager.undoDisabled = false;
            Card.disableSelect = false;
            CardUtil.tryToPlaceCardsOnFoundation();
        });
    };
    CardUtil.getMaxTableuPosition = function (idx) {
        var arr = Card.cardArray;
        var size = -1;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            //  console.log(c.myState, c.tableuIdx, c.tableuPosition)
            if (c.myState == Card.STATE_TABLEU && c.tableuIdx == idx && c.tableuPosition > size) {
                size = c.tableuPosition;
            }
        }
        return size;
    };
    CardUtil.checkIfDroppedOnEmptyTableu = function (card) {
        var cardimgfrontX = card.cardImgFront.x;
        CardUtil.checkIfDroppedOnEmptyTableuCoords(card);
        if (CardUtil.droppedOnTableuSuccess == false) {
            card.cardImgFront.x += 70;
            CardUtil.checkIfDroppedOnEmptyTableuCoords(card);
        }
        card.cardImgFront.x = cardimgfrontX;
    };
    CardUtil.checkIfDroppedOnEmptyTableuCoords = function (card) {
        var img = card.cardImgFront;
        var myTableuoIdx = Math.ceil((card.cardImgFront.x - card.cardImgFront.width - Card.CARD_TAB_POS_X_INIT) / Card.CARD_TAB_POS_X_DELTA);
        //    console.log(myTableuoIdx)
        if (myTableuoIdx < 0 || myTableuoIdx > 9)
            return;
        if (CardUtil.checkIfTabEmpty(myTableuoIdx)) {
            CardUtil.dropOnEmptyTableu(card, myTableuoIdx);
            CardUtil.droppedOnTableuSuccess = true;
            card.isMoving = true;
            BoardManager.sortImmediately();
        }
    };
    CardUtil.dropOnEmptyTableu = function (card, myTableuoIdx) {
        // console.log("droppped on empty tab: " + card, myTableuoIdx)
        CardUtil.uncoverTableu(card);
        card.tableuIdx = myTableuoIdx;
        card.tableuPosition = 0;
        card.myState = Card.STATE_TABLEU;
        CardUtil.manageDragged(card);
    };
    CardUtil.checkIfTabEmpty = function (idx) {
        var tabEmpty = true;
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.tableuIdx == idx && c.myState == Card.STATE_TABLEU) {
                tabEmpty = false;
            }
        }
        return tabEmpty;
    };
    CardUtil.checkIfDroppedOnTableu = function (card) {
        var arr = Card.cardArray;
        if (card.newX > card.cardImgFront.x) {
            // console.log("moved left")
            arr.sort(function (a, b) {
                if (a.tableuIdx > b.tableuIdx) {
                    return -1;
                }
                else if (a.tableuIdx < b.tableuIdx) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            // console.log("moved right")
            arr.sort(function (a, b) {
                if (a.tableuIdx > b.tableuIdx) {
                    return 1;
                }
                else if (a.tableuIdx < b.tableuIdx) {
                    return -1;
                }
                return 0;
            });
        }
        CardUtil.manageMultipleOverlaps(card);
        var multipleOverlaps = false;
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (CardUtil.overlapping(c.cardImgFront, card.cardImgFront)) {
                // console.log("cards overlapping")
                if (c.myState == Card.STATE_TABLEU) {
                }
            }
        }
    };
    CardUtil.manageMultipleOverlaps = function (card) {
        //  console.log("check by card bounds")
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            // console.log("tab idx: " + c.tableuIdx)
            if (CardUtil.overlapping(c.cardImgFront, card.cardImgFront)) {
                // console.log("cards overlapping")
                if (arr[i].myState == Card.STATE_TABLEU) {
                    // console.log("state tableu")
                    if (CardUtil.droppedOnTableuSuccess == false) {
                        // console.log("drop on tab")
                        CardUtil.droppedOnTableu(card, c);
                    }
                }
            }
            if (CardUtil.droppedOnTableuSuccess) {
                break;
            }
        }
        card.selectedFlag = false;
    };
    CardUtil.overlapsMouse = function (card) {
        if (card.getBounds().contains(SimpleGame.myGame.input.x, SimpleGame.myGame.input.y)) {
            return true;
        }
        return false;
    };
    CardUtil.getSelectedCard = function () {
        var i = Card.cardArray.length;
        while (i-- > 0) {
            if (Card.cardArray[i].selectedFlag) {
                return Card.cardArray[i];
            }
        }
        return null;
    };
    CardUtil.droppedOnTableu = function (cardPlaced, cardTableu) {
        // Trace.TraceCardByIdxAndPos(cardTableu.tableuIdx, cardTableu.tableuPosition)
        if (CardUtil.isOnTableuTop(cardTableu)) {
            //    console.log("is on tab top")
            return CardUtil.tryToPlaceonTableu(cardPlaced, cardTableu);
        }
        else {
            //    console.log("is not on tab top")
        }
    };
    CardUtil.tryToPlaceonTableu = function (cardPlaced, cardTableu) {
        if (cardTableu.cardIdx != CardUtil.CARD_IDX_A && (cardPlaced.cardIdx == CardUtil.CARD_IDX_A && cardTableu.cardIdx == CardUtil.CARD_IDX_02 || cardPlaced.cardIdx + 1 == cardTableu.cardIdx)) {
            return CardUtil.placeOnTableu(cardPlaced, cardTableu);
        }
        else {
            if (CardUtil.droppedOnTableuSuccess == false && CardUtil.autoclickMode == false) {
                CardUtil.playInvalidSound = true;
            }
        }
        return null;
    };
    CardUtil.placeOnTableu = function (cardPlaced, cardTableu) {
        console.log("place on tableu called");
        CardUtil.droppedOnTableuSuccess = true;
        CardUtil.uncoverTableu(cardPlaced);
        cardPlaced.myState = Card.STATE_TABLEU;
        cardPlaced.tableuIdx = cardTableu.tableuIdx;
        cardPlaced.tableuPosition = cardTableu.tableuPosition + 1;
        cardPlaced.selectedFlag = false;
        // console.log(cardPlaced.cardIdx, cardTableu.cardIdx);
        cardPlaced.setToTableu();
        Card.items.add(cardPlaced.cardImgFront);
        // Card.items.sort();
        CardUtil.manageDragged(cardPlaced);
        BoardManager.sort();
    };
    CardUtil.manageDragged = function (cardTableu) {
        var arr = Card.cardArray;
        var i = arr.length;
        var minPos = 999;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_DRAGGED) {
                if (c.tableuPosition < minPos) {
                    minPos = c.tableuPosition;
                }
            }
        }
        // console.log(cardTableu.tableuIdx)
        i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c.myState == Card.STATE_DRAGGED) {
                if (minPos == c.tableuPosition) {
                    CardUtil.placeOnTableu(c, cardTableu);
                }
            }
        }
    };
    CardUtil.uncoverTableu = function (cardPlaced) {
        // console.log("uncover tableu started")
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            if (arr[i].myState == Card.STATE_TABLEU) {
                if (arr[i].tableuIdx == cardPlaced.tableuIdx) {
                    //trace("same idx, " + arr[i].tableouPosition, cardPlaced.tableouPosition);
                    if (arr[i].tableuPosition + 1 == cardPlaced.tableuPosition) {
                        //trace("turned");
                        if (arr[i].flipcard(true)) {
                        }
                    }
                }
            }
        }
    };
    CardUtil.overlapping = function (rect1, rect2) {
        if (rect1 == rect2)
            return false;
        if (rect1.x < rect2.x + rect2.width + 1 && rect1.x + rect1.width + 1 > rect2.x && rect1.y < rect2.y + rect2.height + 1 && rect1.height + 1 + rect1.y > rect2.y) {
            return true;
        }
        return false;
    };
    CardUtil.getCardImgName = function (suitidx, cardidx) {
        return CardUtil.cardNameArray[suitidx * CardUtil.NUM_CARDS_PER_SUIT + cardidx];
    };
    CardUtil.getCardNameURLs = function () {
        CardUtil.cardNameArrayUrl = new Array();
        var i = CardUtil.cardNameArray.length;
        while (i-- > 0) {
            var str = CardUtil.cardNameArray[i];
            var strURL = "assets/CARDS/" + str + ".png";
            CardUtil.cardNameArrayUrl[i] = strURL;
        }
        // console.log(CardUtil.cardNameArray, CardUtil.cardNameArrayUrl)
        return CardUtil.cardNameArrayUrl;
    };
    CardUtil.isOnTableuTop = function (card) {
        if (card.myState != Card.STATE_TABLEU) {
            // console.log("card is not on tableu")
            return false;
        }
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c == card)
                continue;
            if (c.myState == Card.STATE_TABLEU) {
                if (c.tableuIdx == card.tableuIdx) {
                    if (c.tableuPosition > card.tableuPosition) {
                        // console.log("card not on tab top, another card exists higher")
                        return false;
                    }
                }
            }
        }
        return true;
    };
    CardUtil.canUncoverStock = function () {
        var i = 10;
        while (i-- > 0) {
            if (CardUtil.checkIfTabEmpty(i)) {
                return false;
            }
        }
        return true;
    };
    CardUtil.checkIfSelectedCardExists = function () {
        var i = Card.cardArray.length;
        while (i-- > 0) {
            var c = Card.cardArray[i];
            if (c.selectedFlag) {
                return true;
            }
        }
        return false;
    };
    CardUtil.isMovingCardWithSmallestZ = function (card) {
        var arr = Card.cardArray;
        var i = arr.length;
        while (i-- > 0) {
            var c = arr[i];
            if (c != card && c.isMoving) {
                // console.log("moving card: ");
                // Trace.TraceCardByIdxAndPos(c.tableuIdx, c.tableuPosition)
                if (c.tableuPosition < card.tableuPosition) {
                    return false;
                }
            }
        }
        return true;
    };
    CardUtil.cardNameArray = ["spades-2", "spades-3", "spades-4", "spades-5", "spades-6", "spades-7", "spades-8", "spades-9", "spades-10", "spades-jack", "spades-queen", "spades-king", "spades-ace", "hearts-2", "hearts-3", "hearts-4", "hearts-5", "hearts-6", "hearts-7", "hearts-8", "hearts-9", "hearts-10", "hearts-jack", "hearts-queen", "hearts-king", "hearts-ace", "diamonds-2", "diamonds-3", "diamonds-4", "diamonds-5", "diamonds-6", "diamonds-7", "diamonds-8", "diamonds-9", "diamonds-10", "diamonds-jack", "diamonds-queen", "diamonds-king", "diamonds-ace", "clubs-2", "clubs-3", "clubs-4", "clubs-5", "clubs-6", "clubs-7", "clubs-8", "clubs-9", "clubs-10", "clubs-jack", "clubs-queen", "clubs-king", "clubs-ace"];
    CardUtil.NUM_CARDS_PER_SUIT = 13;
    CardUtil.NUM_SUITS = 8;
    CardUtil.NUM_SUIT_COLORS = 1;
    CardUtil.CARD_IDX_02 = 0;
    CardUtil.CARD_IDX_03 = 1;
    CardUtil.CARD_IDX_04 = 2;
    CardUtil.CARD_IDX_05 = 3;
    CardUtil.CARD_IDX_06 = 4;
    CardUtil.CARD_IDX_07 = 5;
    CardUtil.CARD_IDX_08 = 6;
    CardUtil.CARD_IDX_09 = 7;
    CardUtil.CARD_IDX_10 = 8;
    CardUtil.CARD_IDX_J = 9;
    CardUtil.CARD_IDX_Q = 10;
    CardUtil.CARD_IDX_K = 11;
    CardUtil.CARD_IDX_A = 12;
    CardUtil.tabIdxCurrent = -1;
    CardUtil.autoclickMode = false;
    CardUtil.playInvalidSound = false;
    return CardUtil;
}());
var AreYouSurePrompt = /** @class */ (function () {
    function AreYouSurePrompt(startNewFlag) {
        if (startNewFlag === void 0) { startNewFlag = false; }
        this.startNewFlag = startNewFlag;
        this.blackbg = SimpleGame.myGame.make.graphics(0, 0);
        this.blackbg.beginFill(0x000000);
        this.blackbg.drawRect(0, 0, 880, 600);
        this.blackbg.endFill();
        this.blackbg.alpha = 0.85;
        this.blackbg.inputEnabled = true;
        GameUI.promptLayer.add(this.blackbg);
        this.menuBG = SimpleGame.myGame.add.sprite(0, 0, 'background_textboxes');
        this.menuBG.x = (SimpleGame.myGame.width - this.menuBG.width) * 0.5;
        this.menuBG.y = 60;
        GameUI.promptLayer.add(this.menuBG);
        var areyousurestr = Language.ARE_YOU_SURE_SHORT[Language.langIdx];
        this.menuText = SimpleGame.myGame.make.text(0, 0, "" + areyousurestr, {
            font: "28px Open Sans", fill: "#ffffff", fontWeight: "700", align: "Center"
        });
        this.menuText.y = this.menuBG.y + 10;
        GameUI.promptLayer.add(this.menuText);
        this.menuText.wordWrap = true;
        this.menuText.wordWrapWidth = 350;
        this.menuText.x = this.menuBG.x + (this.menuBG.width) * 0.5 - this.menuText.width * 0.5;
        var areyousurfull = Language.ARE_YOU_SURE_RESTART[Language.langIdx];
        var fullText = SimpleGame.myGame.make.text(0, 0, "" + areyousurfull, {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "600", align: "Center"
        });
        fullText.y = this.menuBG.y + 110;
        fullText.wordWrap = true;
        fullText.wordWrapWidth = 440;
        fullText.anchor.set(0.5, 0);
        fullText.x = this.menuBG.x + (this.menuBG.width) * 0.5;
        GameUI.promptLayer.add(fullText);
        var yesText = SimpleGame.myGame.make.text(0, 0, Language.YES[Language.langIdx], {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        if (this.startNewFlag) {
            var yesBut = new ButtonWithOverAndText(yesText, GameUI.promptLayer, "button_textboxes", "button_over_textboxes", 0, 0, function () {
                console.log("yes clicked game");
                console.log(this.startNewFlag);
                GameUI.promptLayer.removeAll(true);
                console.log("start new game");
                BoardManager.removeAllCards();
                //  BoardManager.InitializeBoard()
                // BoardManager.
                var initprompt = new InitMenuPrompt(false);
            });
        }
        else {
            var yesBut = new ButtonWithOverAndText(yesText, GameUI.promptLayer, "button_textboxes", "button_over_textboxes", 0, 0, function () {
                console.log("yes clicked game");
                console.log(this.startNewFlag);
                GameUI.promptLayer.removeAll(true);
                BoardManager.resetBoard();
            });
        }
        yesBut.setXY(this.menuBG.x + (this.menuBG.width - yesBut.imgNormal.width) * 0.21, this.menuBG.y + 290);
        var keepPlayText = SimpleGame.myGame.make.text(0, 0, "" + Language.NO[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var keepPlayBut = new ButtonWithOverAndText(keepPlayText, GameUI.promptLayer, "button_textboxes", "button_over_textboxes", 0, 0, function () {
            console.log("yes clicked game");
            GameUI.promptLayer.removeAll(true);
        });
        keepPlayBut.setXY(this.menuBG.x + (this.menuBG.width - keepPlayBut.imgNormal.width) * 0.81, this.menuBG.y + 290);
    }
    return AreYouSurePrompt;
}());
var CannotUncoverStock = /** @class */ (function () {
    function CannotUncoverStock() {
        if (CannotUncoverStock.shownAlready)
            return;
        // CannotUncoverStock.shownAlready = true;
        this.blackbg = SimpleGame.myGame.make.graphics(0, 0);
        this.blackbg.beginFill(0x000000);
        this.blackbg.drawRect(0, 0, 880, 600);
        this.blackbg.endFill();
        this.blackbg.alpha = 0.85;
        this.blackbg.inputEnabled = true;
        GameUI.promptLayer.add(this.blackbg);
        this.menuBG = SimpleGame.myGame.add.sprite(0, 0, 'background_textboxes');
        this.menuBG.x = (SimpleGame.myGame.width - this.menuBG.width) * 0.5;
        this.menuBG.y = 70;
        GameUI.promptLayer.add(this.menuBG);
        var spidersol = Language.ARE_YOU_SURE_SHORT[Language.langIdx];
        this.menuText = SimpleGame.myGame.make.text(0, 0, "" + spidersol, {
            font: "28px Open Sans", fill: "#ffffff", fontWeight: "700", align: "Center"
        });
        this.menuText.y = this.menuBG.y + 11;
        GameUI.promptLayer.add(this.menuText);
        this.menuText.wordWrap = true;
        this.menuText.wordWrapWidth = 380;
        this.menuText.x = this.menuBG.x + (this.menuBG.width) * 0.5 - this.menuText.width * 0.5;
        // this.xbutton = SimpleGame.myGame.make.graphics(0, 0)
        // this.xbutton.beginFill(0x000000)
        // this.xbutton.drawRect(565, 95, 40, 40)
        // this.xbutton.endFill()
        // this.xbutton.inputEnabled = true;
        // this.xbutton.events.onInputDown.add(function()
        // {
        //   GameUI.promptLayer.removeAll(true);   
        // }, this)
        // this.xbutton.alpha = 0.00001;     
        // GameUI.promptLayer.add(this.xbutton)
        this.menuText = SimpleGame.myGame.make.text(0, 0, "" + Language.THERE_MUST_BE_AT_LEAST[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#FFFFFF", fontWeight: "600", align: "Center"
        });
        this.menuText.y = this.menuBG.y + 112;
        GameUI.promptLayer.add(this.menuText);
        this.menuText.wordWrap = true;
        this.menuText.wordWrapWidth = 360;
        this.menuText.x = this.menuBG.x + (this.menuBG.width) * 0.5 - this.menuText.width * 0.5;
        var yesText = SimpleGame.myGame.make.text(0, 0, "OK", {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var yesBut = new ButtonWithOverAndText(yesText, GameUI.promptLayer, "button_textboxes", "button_over_textboxes", 0, 0, function () {
            console.log("ok clicked game");
            GameUI.promptLayer.removeAll(true);
            // if (CannotUncoverStock.checkBox.isChecked)
            // {
            //     console.log("checkbox is checked!!")
            //     CannotUncoverStock.shownAlready = true;
            // }
        });
        yesBut.setXY(this.menuBG.x + (this.menuBG.width - yesBut.imgNormal.width) * 0.5, this.menuBG.y + 290);
    }
    CannotUncoverStock.shownAlready = false;
    return CannotUncoverStock;
}());
var GameWonPrompt = /** @class */ (function () {
    function GameWonPrompt() {
        SoundManager.won.play();
        GameUI.gameStarted = false;
        this.blackbg = SimpleGame.myGame.make.graphics(0, 0);
        this.blackbg.beginFill(0x000000);
        this.blackbg.drawRect(0, 0, 880, 600);
        this.blackbg.endFill();
        this.blackbg.alpha = 0.85;
        this.blackbg.inputEnabled = true;
        GameUI.promptLayer.add(this.blackbg);
        this.menuBG = SimpleGame.myGame.add.sprite(0, 0, 'background_textboxes_won');
        this.menuBG.x = (SimpleGame.myGame.width - this.menuBG.width) * 0.5;
        this.menuBG.y = 10;
        GameUI.promptLayer.add(this.menuBG);
        this.mainText = SimpleGame.myGame.make.text(0, 0, "" + Language.YOUWONGAME[Language.langIdx], {
            font: "28px Open Sans", fill: "#ffffff", fontWeight: "600", align: "Center"
        });
        this.mainText.y = this.menuBG.y + 71;
        GameUI.promptLayer.add(this.mainText);
        this.mainText.wordWrap = true;
        this.mainText.wordWrapWidth = 350;
        this.mainText.x = this.menuBG.x + (this.menuBG.width) * 0.5 - this.mainText.width * 0.5;
        this.menuText = SimpleGame.myGame.make.text(0, 0, "" + Language.congrats[Language.langIdx], {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "600", align: "Center"
        });
        this.menuText.y = this.menuBG.y + 22 + 130;
        GameUI.promptLayer.add(this.menuText);
        this.menuText.wordWrap = true;
        this.menuText.wordWrapWidth = 350;
        this.menuText.x = this.menuBG.x + (this.menuBG.width) * 0.5 - this.menuText.width * 0.5;
        var timeplayed = Util.convertToHHMMSS(GameUI.time);
        this.timescoreTxt = SimpleGame.myGame.make.text(0, 0, "" + Language.minutes_played[Language.langIdx].toUpperCase() + timeplayed + "\n" + Language.MOVES[Language.langIdx].toUpperCase() + ": " + GameUI.moves + "\n" + Language.timebonus[Language.langIdx] + GameUI.bonus + "\n" + Language.yourscore[Language.langIdx] + (GameUI.scoreTotal + GameUI.bonus), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "600", align: "Center"
        });
        this.timescoreTxt.y = this.menuBG.y + 70 + 130;
        GameUI.promptLayer.add(this.timescoreTxt);
        this.timescoreTxt.wordWrap = true;
        this.timescoreTxt.wordWrapWidth = 420;
        this.timescoreTxt.x = this.menuBG.x + (this.menuBG.width) * 0.5 - this.timescoreTxt.width * 0.5;
        var newGameText = SimpleGame.myGame.make.text(0, 0, Language.NEW_GAME[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "600"
        });
        var newGameBut = new ButtonWithOverAndText(newGameText, GameUI.promptLayer, "button_textboxes", "button_over_textboxes", 0, 0, function () {
            console.log("newgame clicked game");
            GameUI.promptLayer.removeAll(true);
            GameUI.promptLayer.removeAll(true);
            CardUtil.NUM_SUIT_COLORS = 1;
            BoardManager.InitializeBoard();
        });
        newGameBut.setXY(this.menuBG.x + (this.menuBG.width - newGameBut.imgNormal.width) * 0.20, this.menuBG.y + 200 + 150);
        var restartText = SimpleGame.myGame.make.text(0, 0, "" + Language.RESTART[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "600"
        });
        var restartBut = new ButtonWithOverAndText(restartText, GameUI.promptLayer, "button_textboxes", "button_over_textboxes", 0, 0, function () {
            console.log("yes clicked game");
            GameUI.promptLayer.removeAll(true);
            BoardManager.resetBoard();
        });
        restartBut.setXY(this.menuBG.x + (this.menuBG.width - restartBut.imgNormal.width) * 0.82, this.menuBG.y + 200 + 150);
    }
    return GameWonPrompt;
}());
var InitMenuPrompt = /** @class */ (function () {
    function InitMenuPrompt(firstGame) {
        if (firstGame === void 0) { firstGame = true; }
        console.log("init menu added");
        var initmenugroup = SimpleGame.myGame.add.group();
        if (firstGame) {
            SimpleGame.myGame.input.reset();
        }
        this.gamebg = SimpleGame.myGame.add.sprite(0, 0, 'game_bg');
        initmenugroup.add(this.gamebg);
        this.blackbg = SimpleGame.myGame.make.graphics(0, 0);
        this.blackbg.beginFill(0x000000);
        this.blackbg.drawRect(0, 0, 880, 700);
        this.blackbg.endFill();
        this.blackbg.alpha = 0.7;
        this.blackbg.inputEnabled = true;
        SimpleGame.myGame.time.events.add(250, function () {
            this.blackbg.events.onInputUp.add(function () {
                SimpleGame.myGame.input.mspointer.capture = false;
                GameUI.promptLayer.removeAll(true);
                // SimpleGame.myGame.time.events.remove(timerEvent)     
            });
        }, this);
        initmenugroup.add(this.blackbg);
        this.menuBG = SimpleGame.myGame.add.sprite(0, 0, 'background_menuandlevels');
        this.menuBG.x = (SimpleGame.myGame.width - this.menuBG.width) * 0.5;
        this.menuBG.y = 60;
        initmenugroup.add(this.menuBG);
        var leveltxt = SimpleGame.myGame.make.text(0, 0, "" + Language.level[Language.langIdx], {
            font: "28px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        initmenugroup.add(leveltxt);
        leveltxt.anchor.set(0.5);
        leveltxt.x = 440;
        leveltxt.y = 90;
        var selleveltxt = SimpleGame.myGame.make.text(0, 0, "" + Language.select_level[Language.langIdx], {
            font: "22px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        initmenugroup.add(selleveltxt);
        selleveltxt.anchor.set(0.5);
        selleveltxt.x = 440;
        selleveltxt.y = 170;
        var easyText = SimpleGame.myGame.make.text(0, 0, "" + Language.EASY[Language.langIdx], {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var easyButton = new ButtonWithOverAndText(easyText, initmenugroup, 'button_background_menulevels', 'button_over_background_menulevels', 0, 500, function () {
            // SimpleGame.gameEngineStarted = false;
            GameUI.gameStarted = false;
            CardUtil.NUM_SUIT_COLORS = 1;
            initmenugroup.removeAll(true);
            SimpleGame.startGame(firstGame);
            InitMenuPrompt.startFullScreen = true;
            SimpleGame.myGame.time.events.add(350, function () {
                InitMenuPrompt.startFullScreen = false;
            }, this);
            BoardManager.InitializeBoard();
        });
        easyButton.setXY(440 - easyButton.imgNormal.width * 0.5, 210);
        var normalText = SimpleGame.myGame.make.text(0, 0, "" + Language.NORMAL[Language.langIdx], {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var normalButton = new ButtonWithOverAndText(normalText, initmenugroup, 'button_background_menulevels', 'button_over_background_menulevels', 0, 500, function () {
            // SimpleGame.gameEngineStarted = false;
            GameUI.gameStarted = false;
            CardUtil.NUM_SUIT_COLORS = 2;
            initmenugroup.removeAll(true);
            SimpleGame.startGame(firstGame);
            InitMenuPrompt.startFullScreen = true;
            SimpleGame.myGame.time.events.add(350, function () {
                InitMenuPrompt.startFullScreen = false;
            }, this);
        });
        normalButton.setXY(440 - normalButton.imgNormal.width * 0.5, 280);
        var hardText = SimpleGame.myGame.make.text(0, 0, "" + Language.HARD[Language.langIdx], {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var hardButton = new ButtonWithOverAndText(hardText, initmenugroup, 'button_background_menulevels', 'button_over_background_menulevels', 0, 500, function () {
            // SimpleGame.gameEngineStarted = false;
            GameUI.gameStarted = false;
            CardUtil.NUM_SUIT_COLORS = 4;
            initmenugroup.removeAll(true);
            SimpleGame.startGame(firstGame);
            InitMenuPrompt.startFullScreen = true;
            SimpleGame.myGame.time.events.add(350, function () {
                InitMenuPrompt.startFullScreen = false;
            }, this);
        });
        hardButton.setXY(440 - hardButton.imgNormal.width * 0.5, 350);
        // easyButton.y += 300;
        // normalButton.y += 300;
        // hardButton.y += 300;
        // normalButton.y -= 8;
        // hardButton.y -= 16;
        // easyButton.imgNormal.alpha = 0;
        // normalButton.imgNormal.alpha = 0;
        //    easyButton.update()
        //    normalButton.update()
        //    hardButton.update()
        //    var tweenE = SimpleGame.myGame.add.tween(easyButton).to(
        //     { y:easyButton.y-300 }, 300, Phaser.Easing.Circular.Out, true, 500 );
        //  var tweenN = SimpleGame.myGame.add.tween(normalButton).to(
        //     { y:normalButton.y-300 }, 300, Phaser.Easing.Circular.Out, true, 500 );
        // var tweenH = SimpleGame.myGame.add.tween(hardButton).to(
        //     { y:hardButton.y-300 }, 300, Phaser.Easing.Circular.Out, true, 500 );
        //     tweenE.onComplete.add(this.onTweenComplete, this)
        SimpleGame.myGame.renderer.renderSession.roundPixels = true;
    }
    ;
    InitMenuPrompt.prototype.onTweenComplete = function () {
    };
    return InitMenuPrompt;
}());
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        // var timerEvent:Phaser.TimerEvent = SimpleGame.myGame.time.events.loop(200, function()
        // {
        //     console.log("reset input")
        //     SimpleGame.myGame.input.reset()
        // }, this)
        // SimpleGame.myGame.input.mspointer.capture = true;	
        this.blackbg = SimpleGame.myGame.make.graphics(0, 0);
        this.blackbg.beginFill(0x000000);
        this.blackbg.drawRect(0, 0, 880, 700);
        this.blackbg.endFill();
        this.blackbg.alpha = 0.85;
        this.blackbg.inputEnabled = true;
        SimpleGame.myGame.time.events.add(250, function () {
            this.blackbg.events.onInputUp.add(function () {
                SimpleGame.myGame.input.mspointer.capture = false;
                GameUI.promptLayer.removeAll(true);
                // SimpleGame.myGame.time.events.remove(timerEvent)     
            });
        }, this);
        GameUI.promptLayer.add(this.blackbg);
        GameUI.promptLayer.y -= 100;
        SimpleGame.myGame.add.tween(GameUI.promptLayer).to({
            y: GameUI.promptLayer.y + 100
        }, 100, Phaser.Easing.Default, true);
        this.menuBG = SimpleGame.myGame.add.sprite(0, 0, 'background_menuandlevels');
        this.menuBG.x = (SimpleGame.myGame.width - this.menuBG.width) * 0.5;
        this.menuBG.y = 60;
        GameUI.promptLayer.add(this.menuBG);
        this.menuBG.inputEnabled = true;
        // this.xbutton = SimpleGame.myGame.make.graphics(0, 0)
        // this.xbutton.beginFill(0x000000)
        // this.xbutton.drawRect(575, 95, 40, 40)
        // this.xbutton.endFill()
        // this.xbutton.inputEnabled = true;
        // this.xbutton.events.onInputDown.add(function()
        // {
        //     SimpleGame.myGame.input.mspointer.capture = false;	
        //   GameUI.promptLayer.removeAll(true);   
        // //   SimpleGame.myGame.time.events.remove(timerEvent)
        // }, this)
        // this.xbutton.alpha = 0.0001;     
        // GameUI.promptLayer.add(this.xbutton)
        this.menuText = SimpleGame.myGame.make.text(0, 0, "" + Language.MENU[Language.langIdx].toUpperCase(), {
            font: "28px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        this.menuText.anchor.set(0, 0.5);
        this.menuText.x = this.menuBG.x + (this.menuBG.width - this.menuText.width) * 0.5;
        this.menuText.y = this.menuBG.y + 31;
        GameUI.promptLayer.add(this.menuText);
        var resumeText = SimpleGame.myGame.make.text(0, 0, "" + Language.RESUME[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var resumeBut = new ButtonWithOverAndText(resumeText, GameUI.promptLayer, "button_background_menulevels", "button_over_background_menulevels", 0, 0, function () {
            console.log("resume game");
            GameUI.promptLayer.removeAll(true);
            SimpleGame.myGame.input.mspointer.capture = false;
            // SimpleGame.myGame.time.events.remove(timerEvent)
        });
        resumeBut.setXY(this.menuBG.x + (this.menuBG.width - resumeBut.imgNormal.width) * 0.5, this.menuBG.y + 92);
        resumeBut.text.y -= 1;
        var newgametexteasy = SimpleGame.myGame.make.text(0, 0, "" + Language.NEW_GAME[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var newgamebuteasy = new ButtonWithOverAndText(newgametexteasy, GameUI.promptLayer, "button_background_menulevels", "button_over_background_menulevels", 0, 0, function () {
            console.log("new game clicked");
            GameUI.promptLayer.removeAll(true);
            // SimpleGame.myGame.time.events.remove(timerEvent)
            SimpleGame.myGame.input.mspointer.capture = false;
            // GameUI.promptLayer.removeAll(true);
            CardUtil.NUM_SUIT_COLORS = 1;
            // BoardManager.InitializeBoard();
            var areyousureprompt = new AreYouSurePrompt(true);
        });
        newgamebuteasy.setXY(this.menuBG.x + (this.menuBG.width - newgamebuteasy.imgNormal.width) * 0.5, resumeBut.imgNormal.y + 55);
        var resetgametext = SimpleGame.myGame.make.text(0, 0, "" + Language.RESTART[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var resetgamebut = new ButtonWithOverAndText(resetgametext, GameUI.promptLayer, "button_background_menulevels", "button_over_background_menulevels", 0, 0, function () {
            console.log("reset game clicked");
            GameUI.promptLayer.removeAll(true);
            // SimpleGame.myGame.time.events.remove(timerEvent)
            SimpleGame.myGame.input.mspointer.capture = false;
            var areyousureprompt = new AreYouSurePrompt();
        });
        resetgamebut.setXY(this.menuBG.x + (this.menuBG.width - resetgamebut.imgNormal.width) * 0.5, newgamebuteasy.imgNormal.y + 55);
        var soundbutton = new SoundButton(GameUI.promptLayer, "button_background_menulevels", "button_over_background_menulevels", resetgamebut.imgNormal.x, resetgamebut.imgNormal.y + 55);
        soundbutton.soundOnBut.text.y -= 2;
        soundbutton.soundOffBut.text.y -= 2;
        var moregamestext = SimpleGame.myGame.make.text(0, -10, "" + Language.MORE_GAMES[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        // moregamestext.anchor.set(0,0.5)
        var moregamesbut = new ButtonWithOverAndText(moregamestext, GameUI.promptLayer, "button_background_menulevels", "button_over_background_menulevels", 0, 0, function () {
            console.log("more games clicked");
            onGamebossUp();
        });
        moregamesbut.imgNormal.events.onInputDown.add(onGamebossDown, this);
        moregamesbut.imgNormal.events.onInputUp.add(onGamebossUp, this);
        moregamesbut.setXY(this.menuBG.x + (this.menuBG.width - moregamesbut.imgNormal.width) * 0.5, soundbutton.soundOffBut.imgNormal.y + 55);
        console.log(moregamestext.height, newgametexteasy.height);
        // SimpleGame.myGame.input.mspointer.capture = false;
    }
    MainMenu.prototype.remove = function () {
    };
    return MainMenu;
}());
var NewGamePrompt = /** @class */ (function () {
    function NewGamePrompt() {
        this.blackbg = SimpleGame.myGame.make.graphics(0, 0);
        this.blackbg.beginFill(0x000000);
        this.blackbg.drawRect(0, 0, 880, 600);
        this.blackbg.endFill();
        this.blackbg.alpha = 0.85;
        this.blackbg.inputEnabled = true;
        GameUI.promptLayer.add(this.blackbg);
        this.menuBG = SimpleGame.myGame.add.sprite(0, 0, 'bg_new_game');
        this.menuBG.x = (SimpleGame.myGame.width - this.menuBG.width) * 0.5;
        this.menuBG.y = 150;
        GameUI.promptLayer.add(this.menuBG);
        this.xbutton = SimpleGame.myGame.make.graphics(0, 0);
        this.xbutton.beginFill(0x000000);
        this.xbutton.drawRect(565, 145, 40, 40);
        this.xbutton.endFill();
        this.xbutton.inputEnabled = true;
        this.xbutton.events.onInputDown.add(function () {
            GameUI.promptLayer.removeAll(true);
        }, this);
        this.xbutton.alpha = 0.00001;
        GameUI.promptLayer.add(this.xbutton);
        this.menuText = SimpleGame.myGame.make.text(0, 0, Language.NEW_GAME[Language.langIdx], {
            font: "30px Open Sans", fill: "#585858", fontWeight: "600"
        });
        this.menuText.x = this.menuBG.x + (this.menuBG.width - this.menuText.width) * 0.5;
        this.menuText.y = this.menuBG.y + 12;
        GameUI.promptLayer.add(this.menuText);
        var easyText = SimpleGame.myGame.make.text(0, 0, Language.EASY[Language.langIdx], {
            font: "26px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var easyBut = new ButtonWithOverAndText(easyText, GameUI.promptLayer, "prompt_button", "prompt_button_over", 0, 0, function () {
            console.log("easy game");
            GameUI.promptLayer.removeAll(true);
            CardUtil.NUM_SUIT_COLORS = 1;
            BoardManager.InitializeBoard();
        });
        easyBut.setXY(this.menuBG.x + (this.menuBG.width - easyBut.imgNormal.width) * 0.5, this.menuBG.y + 60);
        var normalText = SimpleGame.myGame.make.text(0, 0, Language.NORMAL[Language.langIdx], {
            font: "26px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var normalBut = new ButtonWithOverAndText(normalText, GameUI.promptLayer, "prompt_button", "prompt_button_over", 0, 0, function () {
            console.log("normal game");
            GameUI.promptLayer.removeAll(true);
            CardUtil.NUM_SUIT_COLORS = 2;
            BoardManager.InitializeBoard();
        });
        normalBut.setXY(this.menuBG.x + (this.menuBG.width - normalBut.imgNormal.width) * 0.5, this.menuBG.y + 130);
        var hardText = SimpleGame.myGame.make.text(0, 0, Language.HARD[Language.langIdx], {
            font: "26px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var hardBut = new ButtonWithOverAndText(hardText, GameUI.promptLayer, "prompt_button", "prompt_button_over", 0, 0, function () {
            console.log("hard game");
            GameUI.promptLayer.removeAll(true);
            CardUtil.NUM_SUIT_COLORS = 4;
            BoardManager.InitializeBoard();
        });
        hardBut.setXY(this.menuBG.x + (this.menuBG.width - hardBut.imgNormal.width) * 0.5, this.menuBG.y + 200);
    }
    return NewGamePrompt;
}());
var StatisticsPrompt = /** @class */ (function () {
    function StatisticsPrompt() {
        this.yDelta = 35;
        var gamesPlayedC = Util.getStorage("gamesPlayed") - 1;
        if (gamesPlayedC < 0) {
            gamesPlayedC = 0;
        }
        var gamesWonC = Util.getStorage("gamesWon");
        var gamesLostC = gamesPlayedC - gamesWonC;
        if (gamesLostC < 0) {
            gamesLostC = 0;
        }
        var winPerc = Math.round(gamesWonC / gamesPlayedC * 100);
        if (isNaN(winPerc)) {
            winPerc = 0;
        }
        var topScore = Util.getStorage("bestScore");
        this.blackbg = SimpleGame.myGame.make.graphics(0, 0);
        this.blackbg.beginFill(0x000000);
        this.blackbg.drawRect(0, 0, 880, 600);
        this.blackbg.endFill();
        this.blackbg.alpha = 0.85;
        this.blackbg.inputEnabled = true;
        GameUI.promptLayer.add(this.blackbg);
        this.menuBG = SimpleGame.myGame.add.sprite(0, 0, 'prompt_stats');
        this.menuBG.x = (SimpleGame.myGame.width - this.menuBG.width) * 0.5;
        this.menuBG.y = 60;
        GameUI.promptLayer.add(this.menuBG);
        this.menuText = SimpleGame.myGame.make.text(0, 0, Language.ALLTIMESTATS[Language.langIdx] + "", {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        this.menuText.x = this.menuBG.x + (this.menuBG.width - this.menuText.width) * 0.5;
        this.menuText.y = this.menuBG.y + 28;
        GameUI.promptLayer.add(this.menuText);
        this.playedgamesText = SimpleGame.myGame.make.text(0, 0, Language.playedgames[Language.langIdx], {
            font: "20px Open Sans", fill: "#464646", fontWeight: "500"
        });
        this.playedgamesText.x = this.menuBG.x + (this.menuBG.width - this.playedgamesText.width - 30) * 0.5;
        this.playedgamesText.y = this.menuBG.y + 90;
        GameUI.promptLayer.add(this.playedgamesText);
        this.playedgamesCount = SimpleGame.myGame.make.text(0, 0, "" + gamesPlayedC, {
            font: "20px Open Sans", fill: "#464646", fontWeight: "800"
        });
        this.playedgamesCount.x = this.playedgamesText.x + this.playedgamesText.width + 3;
        this.playedgamesCount.y = this.playedgamesText.y;
        GameUI.promptLayer.add(this.playedgamesCount);
        this.wongamesText = SimpleGame.myGame.make.text(0, 0, Language.wongames[Language.langIdx], {
            font: "20px Open Sans", fill: "#464646", fontWeight: "500"
        });
        this.wongamesText.x = this.menuBG.x + (this.menuBG.width - this.wongamesText.width - 10) * 0.5;
        this.wongamesText.y = this.menuBG.y + 90 + 1 * this.yDelta;
        GameUI.promptLayer.add(this.wongamesText);
        this.wongamesCount = SimpleGame.myGame.make.text(0, 0, "" + gamesWonC, {
            font: "20px Open Sans", fill: "#464646", fontWeight: "700"
        });
        this.wongamesCount.x = this.wongamesText.x + this.wongamesText.width + 3;
        this.wongamesCount.y = this.wongamesText.y;
        GameUI.promptLayer.add(this.wongamesCount);
        this.lostgamesText = SimpleGame.myGame.make.text(0, 0, Language.lostgames[Language.langIdx], {
            font: "20px Open Sans", fill: "#464646", fontWeight: "500"
        });
        this.lostgamesText.x = this.menuBG.x + (this.menuBG.width - this.lostgamesText.width - 20) * 0.5;
        this.lostgamesText.y = this.menuBG.y + 90 + 2 * this.yDelta;
        GameUI.promptLayer.add(this.lostgamesText);
        this.lostgamesCount = SimpleGame.myGame.make.text(0, 0, "" + gamesLostC, {
            font: "20px Open Sans", fill: "#464646", fontWeight: "700"
        });
        this.lostgamesCount.x = this.lostgamesText.x + this.lostgamesText.width + 3;
        this.lostgamesCount.y = this.lostgamesText.y;
        GameUI.promptLayer.add(this.lostgamesCount);
        this.winpercText = SimpleGame.myGame.make.text(0, 0, Language.win_percentage[Language.langIdx], {
            font: "20px Open Sans", fill: "#464646", fontWeight: "500"
        });
        this.winpercText.x = this.menuBG.x + (this.menuBG.width - this.winpercText.width - 40) * 0.5;
        this.winpercText.y = this.menuBG.y + 90 + 3 * this.yDelta;
        GameUI.promptLayer.add(this.winpercText);
        this.winpercCount = SimpleGame.myGame.make.text(0, 0, "" + winPerc + "%", {
            font: "20px Open Sans", fill: "#464646", fontWeight: "700"
        });
        this.winpercCount.x = this.winpercText.x + this.winpercText.width + 3;
        this.winpercCount.y = this.winpercText.y;
        GameUI.promptLayer.add(this.winpercCount);
        this.topscoreText = SimpleGame.myGame.make.text(0, 0, Language.top_score[Language.langIdx], {
            font: "20px Open Sans", fill: "#464646", fontWeight: "500"
        });
        this.topscoreText.x = this.menuBG.x + (this.menuBG.width - this.topscoreText.width - 66) * 0.5 + 6;
        this.topscoreText.y = this.menuBG.y + 90 + 4 * this.yDelta;
        GameUI.promptLayer.add(this.topscoreText);
        this.topscoreCount = SimpleGame.myGame.make.text(0, 0, "" + topScore, {
            font: "20px Open Sans", fill: "#464646", fontWeight: "700"
        });
        this.topscoreCount.x = this.topscoreText.x + this.topscoreText.width + 3;
        this.topscoreCount.y = this.topscoreText.y;
        GameUI.promptLayer.add(this.topscoreCount);
        this.besttimeText = SimpleGame.myGame.make.text(0, 0, Language.best_time[Language.langIdx], {
            font: "20px Open Sans", fill: "#464646", fontWeight: "500"
        });
        this.besttimeText.x = this.menuBG.x + (this.menuBG.width - this.besttimeText.width - 70) * 0.5 - 10;
        this.besttimeText.y = this.menuBG.y + 90 + 5 * this.yDelta;
        GameUI.promptLayer.add(this.besttimeText);
        this.besttimeCount = SimpleGame.myGame.make.text(0, 0, "" + Util.convertToHHMMSS(Util.getStorage("bestTime")), {
            font: "20px Open Sans", fill: "#464646", fontWeight: "700"
        });
        this.besttimeCount.x = this.besttimeText.x + this.besttimeText.width + 3;
        this.besttimeCount.y = this.besttimeText.y;
        GameUI.promptLayer.add(this.besttimeCount);
        var yesText = SimpleGame.myGame.make.text(0, 0, Language.ok[Language.langIdx], {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var yesBut = new ButtonWithOverAndText(yesText, GameUI.promptLayer, "button", "button_over", 0, 0, function () {
            console.log("ok clicked game");
            GameUI.promptLayer.removeAll(true);
        });
        yesBut.setXY(this.menuBG.x + (this.menuBG.width - yesBut.imgNormal.width) * 0.2, this.menuBG.y + 325);
        var clearText = SimpleGame.myGame.make.text(0, 0, Language.clear[Language.langIdx].toUpperCase(), {
            font: "20px Open Sans", fill: "#ffffff", fontWeight: "700"
        });
        var clearBut = new ButtonWithOverAndText(clearText, GameUI.promptLayer, "button", "button_over", 0, 0, function () {
            console.log("ok clicked game");
            GameUI.promptLayer.removeAll(true);
            try {
                window.localStorage.clear();
            }
            catch (error) {
            }
            var stats = new StatisticsPrompt();
        });
        clearBut.setXY(this.menuBG.x + (this.menuBG.width - clearBut.imgNormal.width) * 0.79, this.menuBG.y + 325);
    }
    return StatisticsPrompt;
}());
var ButtonWithOverState = /** @class */ (function () {
    function ButtonWithOverState(parent, imgNormalName, imgOverName, x, y, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        this.onClickExecuted = false;
        this.skipClickSound = false;
        this.skipMouseOver = false;
        this.imgnormalnamestr = imgNormalName;
        this.parent = parent;
        this.imgNormalName = imgNormalName;
        this.imgOverName = imgOverName;
        this.x = x;
        this.y = y;
        this.imgNormal = SimpleGame.myGame.make.sprite(this.x, this.y, imgNormalName);
        this.imgOver = SimpleGame.myGame.make.sprite(this.x, this.y, imgOverName);
        parent.add(this.imgNormal);
        parent.add(this.imgOver);
        this.imgNormal.inputEnabled = this.imgOver.inputEnabled = false;
        this.imgOver.inputEnabled = false;
        this.imgNormal.events.onInputOver.add(this.onButtonOver, this, 0);
        // this.imgOver.events.onInputOver.add(this.onButtonOver, this, 0)
        this.imgNormal.events.onInputUp.add(this.banInput, this, 100);
        this.imgNormal.events.onInputDown.add(this.onButtonClicked, this, 2);
        this.imgNormal.events.onInputOut.add(this.onButtonOut, this, 1);
        this.imgOver.events.onInputOut.add(this.onButtonOut, this, 1);
        // this.imgOver.events.onInputDown.add(this.onButtonClicked, this,3)
        this.imgOver.events.onInputUp.add(this.onButtonOut, this, 4);
        this.imgNormal.events.onInputDown.add(function () {
            console.log("normal image clicked");
        }, this);
        this.imgOver.events.onInputDown.add(function () {
            console.log("over image clicked");
        }, this);
        this.onClickFunction = onClickFunction;
        this.imgOver.visible = false;
        this.loopEvent = SimpleGame.myGame.time.events.loop(100, this.update, this);
        this.loopEvent1 = SimpleGame.myGame.time.events.loop(10, this.update1, this);
        console.log("button created");
        SimpleGame.myGame.time.events.add(150, function () {
            this.imgNormal.inputEnabled = true;
            if (GameUI.promptLayer != null) {
                if (GameUI.promptLayer.countLiving() <= 0) {
                    this.imgNormal.input.useHandCursor = true;
                }
                else {
                    this.imgNormal.input.useHandCursor = false;
                }
            }
            else {
                this.imgNormal.input.useHandCursor = true;
            }
            console.log("input enabled");
        }, this);
        SimpleGame.myGame.input.onTap.add(function () {
            // console.log("mouse tapped")
        });
        this.imgNormal.events.onInputUp.add(function () {
            // console.log("input up")
        });
    }
    ButtonWithOverState.prototype.update = function () {
        //   console.log("update button: " + this.onClickExecuted)
        if (this.imgNormal.input != null) {
            if (this.skipMouseOver) {
                console.log("remove hand cursor");
                this.imgNormal.input.useHandCursor = false;
                this.imgOver.visible = false;
            }
            else {
                // this.imgNormal.input.useHandCursor = true;
            }
        }
        if (this.imgOver.parent) {
            if (!this.imgOver.getBounds().contains(SimpleGame.myGame.input.x, SimpleGame.myGame.input.y)) {
                this.onButtonOut();
                // this.imgNormal.input.useHandCursor = false;
            }
            else {
                //very dirty hack
                if (this.imgnormalnamestr == "open_menu2") {
                    this.imgNormal.input.useHandCursor = true;
                    this.onButtonOver();
                }
            }
        }
        else {
            SimpleGame.myGame.time.events.remove(this.loopEvent);
        }
        this.setXY(this.x, this.y);
    };
    ButtonWithOverState.prototype.update1 = function () {
        //   console.log("update button: " + this.onClickExecuted)
        this.setXY(this.x, this.y);
    };
    ButtonWithOverState.prototype.banInput = function () {
        this.onClickExecuted = true;
        // console.log("button click success")
        SimpleGame.myGame.time.events.add(50, function () {
            // console.log("can click button")
            this.onClickExecuted = false;
        }, this);
    };
    ButtonWithOverState.prototype.onButtonOver = function () {
        console.log("button over");
        if (this.skipMouseOver) {
            this.imgNormal.input.useHandCursor = false;
            return;
        }
        this.imgOver.visible = true;
        // SimpleGame.myGame.canvas.style.cursor = "pointer"
        if (SimpleGame.myGame.device.touch) {
            this.imgOver.visible = false;
        }
    };
    ButtonWithOverState.prototype.onButtonOut = function () {
        if (this.imgnormalnamestr == "open_menu2") {
            console.log("button out");
        }
        this.imgOver.visible = false;
        // this.imgNormal.input.useHandCursor = false;
    };
    ButtonWithOverState.prototype.onButtonClicked = function (evt) {
        //   console.log("button click attempt registered")
        //  var delay = Consts.DELAY_BETWEEN_EVENTS_DESKTOP;
        //  if (SimpleGame.myGame.device.touch)
        //  {
        //     delay = Consts.DELAY_BETWEEN_EVENTS_TOUCH;
        //  }
        if (this.onClickExecuted == false) {
            this.onClickExecuted = true;
            // console.log("button click success")
            SimpleGame.myGame.time.events.add(60, function () {
                // console.log("can click button")
                this.onClickExecuted = false;
            }, this);
            this.onClickFunction();
            if (this.skipClickSound == false)
                SoundManager.playClick();
        }
        else {
            //  console.log("cannot click button")
        }
        SimpleGame.myGame.input.enabled = false;
        SimpleGame.myGame.time.events.add(60, function () {
            SimpleGame.myGame.input.enabled = true;
            SimpleGame.myGame.input.reset();
        });
    };
    ButtonWithOverState.prototype.setXY = function (x, y) {
        this.imgNormal.x = x;
        this.imgOver.x = x;
        this.x = x;
        this.imgNormal.y = y;
        this.imgOver.y = y;
        this.y = y;
    };
    return ButtonWithOverState;
}());
var ButtonWithOverAndText = /** @class */ (function (_super) {
    __extends(ButtonWithOverAndText, _super);
    function ButtonWithOverAndText(text, parent, imgNormalName, imgOverName, x, y, onClickFunction) {
        if (onClickFunction === void 0) { onClickFunction = function () {
        }; }
        var _this = _super.call(this, parent, imgNormalName, imgOverName, x, y, onClickFunction) || this;
        _this.fixedTxtCoords = false;
        _this.fixedTxtX = 0;
        _this.fixedTxtY = 0;
        _this.text = text;
        // this.text.inputEnabled = false;
        // this.text.interactive = false;
        // this.text.input.useHandCursor = true;
        parent.add(text);
        return _this;
    }
    ButtonWithOverAndText.prototype.setXY = function (x, y) {
        _super.prototype.setXY.call(this, x, y);
        if (this.fixedTxtCoords) {
            this.text.x = this.imgNormal.x + this.fixedTxtX;
            this.text.y = this.imgNormal.y + this.fixedTxtY + 1;
        }
        else {
            this.text.x = this.imgNormal.x + 0.5 * (this.imgNormal.width - this.text.width);
            this.text.y = this.imgNormal.y + 0.5 * (this.imgNormal.height - 0.85 * this.text.height) + 2;
        }
    };
    ButtonWithOverAndText.prototype.setVisible = function () {
        console.log("set visible");
        this.parent.add(this.imgNormal);
        this.parent.add(this.imgOver);
        this.parent.add(this.text);
    };
    ButtonWithOverAndText.prototype.setInvisible = function () {
        this.parent.remove(this.imgNormal);
        this.parent.remove(this.imgOver);
        this.parent.remove(this.text);
    };
    return ButtonWithOverAndText;
}(ButtonWithOverState));
var CheckboxControl = /** @class */ (function () {
    function CheckboxControl(parent, uncheckedImageName, checkedImageName, x, y) {
        this.isChecked = false;
        this.x = x;
        this.y = y;
        var uncheckedImage = SimpleGame.myGame.make.sprite(x, y, uncheckedImageName);
        parent.add(uncheckedImage);
        uncheckedImage.inputEnabled = true;
        uncheckedImage.events.onInputDown.add(this.switchState, this);
        var checkedImage = SimpleGame.myGame.make.sprite(x, y, checkedImageName);
        parent.add(checkedImage);
        checkedImage.inputEnabled = true;
        checkedImage.events.onInputDown.add(this.switchState, this);
        this.uncheckedImage = uncheckedImage;
        this.checkedImage = checkedImage;
        this.update();
    }
    CheckboxControl.prototype.update = function () {
        if (this.isChecked) {
            this.uncheckedImage.visible = false;
            this.checkedImage.visible = true;
        }
        else {
            this.uncheckedImage.visible = true;
            this.checkedImage.visible = false;
        }
    };
    CheckboxControl.prototype.switchState = function () {
        this.isChecked = !this.isChecked;
        this.update();
    };
    return CheckboxControl;
}());
var Utils;
(function (Utils) {
    var ScreenMetrics = /** @class */ (function () {
        function ScreenMetrics() {
        }
        return ScreenMetrics;
    }());
    Utils.ScreenMetrics = ScreenMetrics;
    var Orientation;
    (function (Orientation) {
        Orientation[Orientation["PORTRAIT"] = 0] = "PORTRAIT";
        Orientation[Orientation["LANDSCAPE"] = 1] = "LANDSCAPE";
    })(Orientation = Utils.Orientation || (Utils.Orientation = {}));
    ;
    var ScreenUtils = /** @class */ (function () {
        function ScreenUtils() {
        }
        // -------------------------------------------------------------------------
        ScreenUtils.calculateScreenMetrics = function (aDefaultWidth, aDefaultHeight, aOrientation, aMaxGameWidth, aMaxGameHeight) {
            if (aOrientation === void 0) { aOrientation = Orientation.LANDSCAPE; }
            // get dimension of window
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            // swap if window dimensions do not match orientation
            if ((windowWidth < windowHeight && aOrientation === Orientation.LANDSCAPE) ||
                (windowHeight < windowWidth && aOrientation === Orientation.PORTRAIT)) {
                var tmp = windowWidth;
                windowWidth = windowHeight;
                windowHeight = tmp;
            }
            // calculate max game dimension. The bounds are iPad and iPhone 
            if (typeof aMaxGameWidth === "undefined" || typeof aMaxGameHeight === "undefined") {
                if (aOrientation === Orientation.LANDSCAPE) {
                    aMaxGameWidth = Math.round(aDefaultWidth * 1420 / 1280);
                    aMaxGameHeight = Math.round(aDefaultHeight * 960 / 800);
                }
                else {
                    aMaxGameWidth = Math.round(aDefaultWidth * 960 / 800);
                    aMaxGameHeight = Math.round(aDefaultHeight * 1420 / 1280);
                }
            }
            // default aspect and current window aspect
            var defaultAspect = (aOrientation === Orientation.LANDSCAPE) ? 1280 / 800 : 800 / 1280;
            var windowAspect = windowWidth / windowHeight;
            var offsetX = 0;
            var offsetY = 0;
            var gameWidth = 0;
            var gameHeight = 0;
            // if (aOrientation === Orientation.LANDSCAPE) {
            // "iPhone" landscape ... and "iPad" portrait
            if (windowAspect > defaultAspect) {
                gameHeight = aDefaultHeight;
                gameWidth = Math.ceil((gameHeight * windowAspect) / 2.0) * 2;
                gameWidth = Math.min(gameWidth, aMaxGameWidth);
                offsetX = (gameWidth - aDefaultWidth) / 2;
                offsetY = 0;
            }
            else {
                gameWidth = aDefaultWidth;
                gameHeight = Math.ceil((gameWidth / windowAspect) / 2.0) * 2;
                gameHeight = Math.min(gameHeight, aMaxGameHeight);
                offsetX = 0;
                offsetY = (gameHeight - aDefaultHeight) / 2;
            }
            /* } else {    // "iPhone" portrait
                if (windowAspect < defaultAspect) {
                    gameWidth = aDefaultWidth;
                    gameHeight = gameWidth / windowAspect;
                    gameHeight = Math.min(gameHeight, aMaxGameHeight);
                    offsetX = 0;
                    offsetY = (gameHeight - aDefaultHeight) / 2;
                } else {    // "iPad" portrait
                    gameHeight = aDefaultHeight;
                    gameWidth = gameHeight = windowAspect;
                    gameWidth = Math.min(gameWidth, aMaxGameWidth);
                    offsetX = (gameWidth - aDefaultWidth) / 2;
                    offsetY = 0;
                }
            }
            */
            // calculate scale
            var scaleX = windowWidth / gameWidth;
            var scaleY = windowHeight / gameHeight;
            // store values
            this.screenMetrics = new ScreenMetrics();
            this.screenMetrics.windowWidth = windowWidth;
            this.screenMetrics.windowHeight = windowHeight;
            this.screenMetrics.defaultGameWidth = aDefaultWidth;
            this.screenMetrics.defaultGameHeight = aDefaultHeight;
            this.screenMetrics.maxGameWidth = aMaxGameWidth;
            this.screenMetrics.maxGameHeight = aMaxGameHeight;
            this.screenMetrics.gameWidth = gameWidth;
            this.screenMetrics.gameHeight = gameHeight;
            this.screenMetrics.scaleX = scaleX;
            this.screenMetrics.scaleY = scaleY;
            this.screenMetrics.offsetX = offsetX;
            this.screenMetrics.offsetY = offsetY;
            return this.screenMetrics;
        };
        return ScreenUtils;
    }());
    Utils.ScreenUtils = ScreenUtils;
})(Utils || (Utils = {}));
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.convertToHHMMSS = function (seconds) {
        var s = seconds % 60;
        var m = Math.floor((seconds % 3600) / 60);
        var h = Math.floor(seconds / (60 * 60));
        //var hourStr:String = (h == 0) ? "" : doubleDigitFormat(h) + ":";
        var hourStr = (false) ? "" : Util.doubleDigitFormat(h) + ":";
        var minuteStr = Util.doubleDigitFormat(m) + ":";
        var secondsStr = Util.doubleDigitFormat(s);
        return hourStr + minuteStr + secondsStr;
    };
    Util.doubleDigitFormat = function (num) {
        if (num < 10) {
            return ("0" + num);
        }
        return "" + num;
    };
    Util.getStorage = function (s, defaultRetValue) {
        if (defaultRetValue === void 0) { defaultRetValue = 0; }
        var storageData = 0;
        try {
            storageData = parseInt(window.localStorage.getItem(s));
        }
        catch (error) {
            return 0;
        }
        if (isNaN(storageData)) {
            storageData = 0;
            window.localStorage.setItem(s, defaultRetValue.toString());
        }
        return storageData;
    };
    Util.setStorage = function (s, val) {
        try {
            window.localStorage.setItem(s, val.toString());
        }
        catch (error) {
        }
    };
    Util.clearStorage = function (s, defaultVal) {
        if (defaultVal === void 0) { defaultVal = 0; }
    };
    return Util;
}());
