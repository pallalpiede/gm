var BUILD = "debug";
window.mahjong = window.mahjong || {};
(function() {
    function Main() {}
    Main.main = function() {
        var main = new Main;
        if (!window.HTMLCanvasElement) {
            alert("Your browser does not support HTML5 Canvas.");
            return
        } else $().ready(function() {
            main.preload()
        })
    };
    Main.prototype.preload = function() {
        this.queue = new createjs.LoadQueue(true);
        this.queue.installPlugin(createjs.Sound);
        this.queue.on("complete", this.onLoadComplete, this);
        this.queue.on("fileload", this.onFileLoaded, this);
        var manifest = [{
            id: "tausta_01.jpg",
            src: "img/tausta_01.jpg"
        }, {
            id: "paras.jpg",
            src: "img/paras.jpg"
        }, {
            id: "pistelasku.jpg",
            src: "img/pistelasku.jpg"
        }, {
            id: "tausta_02.jpg",
            src: "img/tausta_04.jpg"
        }, {
            id: "logo.png",
            src: "img/logo.png"
        }, {
            id: "logo.png",
            src: "img/logo.png"
        }, {
            id: "game_menu_start.png",
            src: "img/game_menu_start.png"
        }, {
            id: "game_hint_hover.png",
            src: "img/game_hint_hover.png"
        }, {
            id: "game_piece_hover.png",
            src: "img/game_piece_hover.png"
        }, {
            id: "game_piece_hint.png",
            src: "img/game_piece_hint.png"
        }, {
            id: "game_piece_error.png",
            src: "img/game_piece_error.png"
        }, {
            id: "game_hint_arrow.png",
            src: "img/game_hint_arrow.png"
        }, {
            id: "arrow_left.png",
            src: "img/arrow_left.png"
        }, {
            id: "arrow_right.png",
            src: "img/arrow_right.png"
        }, {
            id: "bg_animal_rabbit.png",
            src: "img/bg_animal_rabbit.png"
        }, {
            id: "bg_animal_tiger.png",
            src: "img/bg_animal_tiger.png"
        }, {
            id: "bg_animal_dragon.png",
            src: "img/bg_animal_dragon.png"
        }, {
            id: "bg_animal_rat.png",
            src: "img/bg_animal_rat.png"
        }, {
            id: "bg_animal_monkey.png",
            src: "img/bg_animal_monkey.png"
        }, {
            id: "game_default.png",
            src: "img/game_default.png"
        }, {
            id: "fbinfo.png",
            src: "img/fbinfo.png"
        }, {
            id: "listButton.png",
            src: "img/listButton.png"
        }, {
            id: "game_menu_help.png",
            src: "img/game_menu_help.png"
        }, {
            id: "game_menu_beginning.png",
            src: "img/game_menu_beginning.png"
        }, {
            id: "game_menu_bg.png",
            src: "img/game_menu_bg.png"
        }, {
            id: "game_menu_continue.png",
            src: "img/game_menu_continue.png"
        }, {
            id: "game_menu_end.png",
            src: "img/game_menu_end.png"
        }, {
            id: "game_menu_sfx_on.png",
            src: "img/game_menu_sfx_on.png"
        }, {
            id: "game_menu_sfx_off.png",
            src: "img/game_menu_sfx_off.png"
        }, {
            id: "game_menu_restart.png",
            src: "img/game_menu_restart.png"
        }, {
            id: "game_over.png",
            src: "img/game_over.png"
        }, {
            id: "game_restart.png",
            src: "img/game_restart.png"
        }, {
            id: "game_overlay_dragon.png",
            src: "img/game_overlay_dragon.png"
        }, {
            id: "game_particle.png",
            src: "img/game_particle.png"
        }, {
            id: "game_win.png",
            src: "img/game_win.png"
        }, {
            id: "game_lost.png",
            src: "img/game_lost.png"
        }, {
            id: "game_hintOff.png",
            src: "img/game_hintOff.png"
        }, {
            id: "game_hintOn.png",
            src: "img/game_hintOn.png"
        }, {
            id: "game_pause.png",
            src: "img/game_pause.png"
        }, {
            id: "game_pause_on.png",
            src: "img/game_pause_on.png"
        }, {
            id: "game_timer_bar.png",
            src: "img/game_timer_bar.png"
        }, {
            id: "game_time_bar_bg.png",
            src: "img/game_time_bar_bg.png"
        }, {
            id: "start_button.png",
            src: "img/start_button.png"
        }, {
            id: "start_sound_on.png",
            src: "img/start_sound_on.png"
        }, {
            id: "start_sound_off.png",
            src: "img/start_sound_off.png"
        }, {
            id: "game_next_level_btn.png",
            src: "img/game_next_level_btn.png"
        }, {
            id: "game_levelup_bg.png",
            src: "img/game_levelup_bg.png"
        }, {
            id: "piece_1.png",
            src: "img/pieces/1.png"
        }, {
            id: "piece_2.png",
            src: "img/pieces/2.png"
        }, {
            id: "piece_3.png",
            src: "img/pieces/3.png"
        }, {
            id: "piece_4.png",
            src: "img/pieces/4.png"
        }, {
            id: "piece_5.png",
            src: "img/pieces/5.png"
        }, {
            id: "piece_6.png",
            src: "img/pieces/6.png"
        }, {
            id: "piece_7.png",
            src: "img/pieces/7.png"
        }, {
            id: "piece_8.png",
            src: "img/pieces/8.png"
        }, {
            id: "piece_9.png",
            src: "img/pieces/9.png"
        }, {
            id: "piece_11.png",
            src: "img/pieces/11.png"
        }, {
            id: "piece_12.png",
            src: "img/pieces/12.png"
        }, {
            id: "piece_13.png",
            src: "img/pieces/13.png"
        }, {
            id: "piece_14.png",
            src: "img/pieces/14.png"
        }, {
            id: "piece_15.png",
            src: "img/pieces/15.png"
        }, {
            id: "piece_16.png",
            src: "img/pieces/16.png"
        }, {
            id: "piece_17.png",
            src: "img/pieces/17.png"
        }, {
            id: "piece_18.png",
            src: "img/pieces/18.png"
        }, {
            id: "piece_19.png",
            src: "img/pieces/19.png"
        }, {
            id: "piece_21.png",
            src: "img/pieces/21.png"
        }, {
            id: "piece_22.png",
            src: "img/pieces/22.png"
        }, {
            id: "piece_23.png",
            src: "img/pieces/23.png"
        }, {
            id: "piece_24.png",
            src: "img/pieces/24.png"
        }, {
            id: "piece_25.png",
            src: "img/pieces/25.png"
        }, {
            id: "piece_26.png",
            src: "img/pieces/26.png"
        }, {
            id: "piece_27.png",
            src: "img/pieces/27.png"
        }, {
            id: "piece_28.png",
            src: "img/pieces/28.png"
        }, {
            id: "piece_29.png",
            src: "img/pieces/29.png"
        }, {
            id: "piece_31.png",
            src: "img/pieces/31.png"
        }, {
            id: "piece_32.png",
            src: "img/pieces/32.png"
        }, {
            id: "piece_33.png",
            src: "img/pieces/33.png"
        }, {
            id: "piece_34.png",
            src: "img/pieces/34.png"
        }, {
            id: "piece_35.png",
            src: "img/pieces/35.png"
        }, {
            id: "piece_36.png",
            src: "img/pieces/36.png"
        }, {
            id: "piece_37.png",
            src: "img/pieces/37.png"
        }, {
            id: "piece_41.png",
            src: "img/pieces/41.png"
        }, {
            id: "piece_42.png",
            src: "img/pieces/42.png"
        }, {
            id: "piece_43.png",
            src: "img/pieces/43.png"
        }, {
            id: "piece_44.png",
            src: "img/pieces/44.png"
        }, {
            id: "piece_51.png",
            src: "img/pieces/51.png"
        }, {
            id: "piece_52.png",
            src: "img/pieces/52.png"
        }, {
            id: "piece_53.png",
            src: "img/pieces/53.png"
        }, {
            id: "piece_54.png",
            src: "img/pieces/54.png"
        }];
        this.filesloaded = 0;
        this.totalAmountOfLoadItems = manifest.length;
        this.queue.loadManifest(manifest)
    };
    Main.prototype.onFileLoaded = function() {
        this.filesloaded++;
        $("#loader").text("Loading " + Math.round(this.filesloaded / this.totalAmountOfLoadItems * 100) + "%")
    };
    Main.prototype.onLoadComplete = function() {
        mahjong.BrowserDetect.init();
        mahjong.SoundManager.init();
        $("#loader").remove();
        var result = this.queue.getResult("piece_1.png");
        var bm = new createjs.Bitmap(result);
        this.initialize()
    };
    Main.prototype.initialize = function() {
        var scope = this;
        mahjong.Main.instance = this;
        mahjong.getAsset = function(asset) {
            return scope.queue.getResult(asset)
        };
        this.drawCount = 0;
        this.previousTick = Date.now();
        this.mainCanvas = document.getElementById("mainCanvas");
        this.mainStage = new createjs.Stage(this.mainCanvas);
        this.mainStage.snapToPixelsEnabled = false;
        this.mainStage.enableMouseOver(20);
        createjs.Touch.enable(this.mainStage,
            true, false);
        this.startView = new mahjong.StartView;
        createjs.Ticker.on("tick", mahjong.utils.proxy(this, this.tick));
        createjs.Ticker.useRAF = true;
        createjs.Ticker.setFPS(30);
        this.gameView = new mahjong.GameView;
        this.gameView.returnToMenu = mahjong.utils.proxy(this, this.onReturnToMenu);
        this.mainStage.addChild(this.gameView);
        this.gameView.visible = false;
        this.startView.visible = false;
        this.startView.onStart = mahjong.utils.proxy(this, this.onStartGame);
        this.mainStage.addChild(this.startView);
        this.orientationChange = new mahjong.OrientationChange;
        this.mainStage.addChild(this.orientationChange);
        this.orientationChange.visible = false;
        this.onResize();
        this.refresh = true;
        $("#reset").click(function() {
            window.location = "" + Math.random() * 1E4
        });
        window.addEventListener("resize", mahjong.utils.proxy(this, this.onResize), false);
        window.addEventListener("orientationchange", mahjong.utils.proxy(this, this.onOrientationChange), false);
        this.facebook = new mahjong.Facebook;
        this.facebook.onFbConnectOk =
            mahjong.utils.proxy(this, this.onFbConnect);
        this.facebook.init()
    };
    Main.prototype.onFbConnect = function(name, id) {
        this.username = name;
        this.userid = id;
        this.startView.updateHighscore()
    };
    Main.prototype.onReturnToMenu = function() {
        this.facebook.showFb();
        this.startView.prepare();
        this.gameView.visible = false;
        this.startView.visible = true
    };
    Main.prototype.onResize = function() {
        var s = this;
        setTimeout(function() {
            var viewport = document.querySelector("meta[name=viewport]");
            var size = new createjs.Rectangle(0, 0, window.innerWidth,
                window.innerHeight);
            var scale = size.width / 1024;
            if (scale > size.height / 768) scale = size.height / 768;
            size.width = 1024 * scale;
            size.height = 768 * scale;
            s.orientationChange.x = (size.width - s.orientationChange.bg.image.width * scale) / 2;
            s.orientationChange.y = (size.height - s.orientationChange.bg.image.height * scale) / 2;
            s.orientationChange.scaleX = scale;
            s.orientationChange.scaleY = scale;
            s.mainCanvas.width = size.width;
            s.mainCanvas.height = size.height;
            s.gameView.resize(size);
            s.startView.resize(size);
            $("#mainCanvas").css("display",
                "block");
            $(".fb-login-button").css("transform", "scale(" + scale + "," + scale + ")").css("-webkit-transform", "scale(" + scale + "," + scale + ")").css("-ms-transform", "scale(" + scale + "," + scale + ")").css("top", Math.floor(6 + 25 * (scale - 1)) + "px").css("width", Math.floor(206 * scale) + "px !important");
            s.setRefresh();
            if (!s.startView.visible && !s.gameView.visible) s.startView.visible = true;
            s.onOrientationChange()
        }, 50)
    };
    Main.prototype.onOrientationChange = function() {
        if (window.orientation == 180 || window.orientation == 0) {
            this.gameView.onPauseClick();
            this.orientationChange.visible = true;
            this.orientationChange.title.updateCache()
        } else this.orientationChange.visible = false;
        this.setRefresh(true)
    };
    Main.prototype.onStartGame = function() {
        this.facebook.hideFb();
        this.gameView.prepare();
        this.gameView.startGame();
        this.startView.visible = false;
        this.gameView.visible = true
    };
    Main.prototype.tick = function(event) {
        this.previousTick = Date.now();
        if (this.refresh || createjs.Tween.hasActiveTweens()) this.drawCount = 0;
        if (this.drawCount < 3) {
            this.drawCount++;
            this.refresh = false;
            this.mainStage.update();
            this.gameView.firework.update()
        }
    };
    Main.prototype.setRefresh = function() {
        this.refresh = true;
        if (Date.now() - this.previousTick > 1E3) createjs.Ticker.setFPS(30)
    };
    mahjong.Main = Main
})();
(function() {
    function EndPopup() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_lost.png"));
        this.bgWin = new createjs.Bitmap(mahjong.getAsset("game_win.png"));
        this.bgWin.x = -60;
        var bg = this.bg;
        this.restart = new createjs.Bitmap(mahjong.getAsset("game_menu_restart.png"));
        this.restart.x = 511;
        this.restart.y = 409;
        this.restart.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.restart.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.restart.cursor = "pointer";
        this.backToStart = new createjs.Bitmap(mahjong.getAsset("game_menu_beginning.png"));
        this.backToStart.x = 290;
        this.backToStart.y = 409;
        this.backToStart.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.backToStart.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.backToStart.cursor = "pointer";
        this.addChild(this.bg);
        this.addChild(this.bgWin);
        this.addChild(this.restart);
        this.addChild(this.backToStart);
        this.tilePoints = new createjs.Text("0", "44px mouse_memoirsregular",
            "#FED93E");
        this.timeBonus = new createjs.Text("X", "44px mouse_memoirsregular", "#FED93E");
        this.tilePointsTitle = new createjs.Text("Laattapisteet", "44px mouse_memoirsregular", "#fff");
        this.timeBonusTitle = new createjs.Text("Bonus-Score", "44px mouse_memoirsregular", "#fff");
        this.totalPoints = new createjs.Text("0", "44px mouse_memoirsregular", "#FED93E");
        this.totalPointsTitle = new createjs.Text("Total Score", "44px mouse_memoirsregular", "#fff");
        this.tilePoints.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5,
            5, 0);
        this.timeBonus.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.tilePointsTitle.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.timeBonusTitle.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.totalPoints.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.totalPointsTitle.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.tilePoints.textAlign = "right";
        this.timeBonus.textAlign = "right";
        this.totalPoints.textAlign = "right";
        this.tilePoints.lineWidth = 163;
        this.timeBonus.lineWidth = 163;
        this.totalPoints.lineWidth = 163;
        this.tilePoints.x = 520 + 163;
        this.tilePoints.y = 209;
        this.timeBonus.x = 520 + 163;
        this.timeBonus.y = 269;
        this.tilePointsTitle.x = 350;
        this.tilePointsTitle.y = 209;
        this.timeBonusTitle.x = 350;
        this.timeBonusTitle.y = 269;
        this.totalPoints.x = 520 + 163;
        this.totalPoints.y = 329;
        this.totalPointsTitle.x = 350;
        this.totalPointsTitle.y = 329;
        this.title = new createjs.Text("Game Over!", "72px mouse_memoirsregular", "#FED93E");
        this.title.x = 329 + 372 / 2 - 20;
        this.title.y = 109;
        this.title.lineWidth =
            372 + 100;
        this.title.textAlign = "center";
        this.title.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.addChild(this.tilePoints);
        this.addChild(this.tilePointsTitle);
        this.addChild(this.timeBonus);
        this.addChild(this.timeBonusTitle);
        this.addChild(this.title);
        this.addChild(this.totalPoints);
        this.addChild(this.totalPointsTitle);
        mahjong.TextAlign.align(this.tilePoints);
        mahjong.TextAlign.align(this.tilePointsTitle);
        mahjong.TextAlign.align(this.timeBonus);
        mahjong.TextAlign.align(this.timeBonusTitle);
        mahjong.TextAlign.align(this.title);
        mahjong.TextAlign.align(this.totalPoints);
        mahjong.TextAlign.align(this.totalPointsTitle)
    }
    var p = EndPopup.prototype = new createjs.Container;
    p.prepare = function(tilepoints, levelbonus, timebonus, total, level) {
        if (level < 5 || levelbonus == 0) {
            this.bgWin.visible = false;
            this.bg.visible = true;
            this.title.text = "Oh no, Game Over!"
        } else {
            this.bgWin.visible = true;
            this.bg.visible = false;
            this.title.text = "Game Done! Congrats."
        }
        this.tilePoints.text = tilepoints;
        this.timeBonus.text =
            levelbonus <= 0 ? "-" : levelbonus;
        this.timeBonusAmount = timebonus;
        this.totalPoints.text = total;
        this.levelBonus = levelbonus;
        this.delta = 0;
        this.count = 0;
        this.tilePointsAmount = tilepoints;
        this.timer.prepareLevelEnd();
        if (timebonus > 0) this.lvlUpInterval = setInterval(mahjong.utils.proxy(this, this.timerTick), 40)
    };
    p.timerTick = function() {
        var change = 13;
        this.delta += change;
        if (this.delta > this.timeBonusAmount) {
            change = this.delta - this.timeBonusAmount;
            this.delta = this.timeBonusAmount;
            clearInterval(this.lvlUpInterval)
        }
        this.timeBonus.text =
            this.levelBonus + this.delta;
        this.timer.updateBarLevelEnd(this.delta / this.timeBonusAmount);
        mahjong.Main.instance.gameView.points.addImmediatePoints(change);
        this.totalPoints.text = mahjong.Main.instance.gameView.points.points;
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOver = function(e) {
        e.currentTarget.shadow = new createjs.Shadow("#000", 1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOut = function(e) {
        this.restart.shadow = null;
        this.backToStart.shadow = null;
        mahjong.Main.instance.setRefresh()
    };
    p.clearTimer =
        function() {
            if (this.delta != this.timeBonusAmount) {
                this.delta = this.timeBonusAmount - this.delta;
                mahjong.Main.instance.gameView.points.addImmediatePoints(this.delta)
            }
            clearInterval(this.lvlUpInterval)
        };
    mahjong.EndPopup = EndPopup
})();
(function() {
    function Fireworks() {
        this.initialize();
        this.fwAmount = 4;
        this.particleAmount = 70;
        this.particles = [];
        this.fws = [];
        this.mainCanvas = null;
        this.mainContext = null;
        this.fireworkCanvas = null;
        this.fireworkContext = null;
        this.viewportWidth = 0;
        this.viewportHeight = 0;
        this.visible = false;
        this.initializeControls()
    }
    var p = Fireworks.prototype = new createjs.Container;
    p.initializeControls = function() {
        for (var i = 0; i < this.fwAmount; i++) {
            var fw = new createjs.Container;
            fw.particles = [];
            fw.col = Math.random() * (16777215 - 5263440) +
                5263440;
            for (var j = 0; j < this.particleAmount; j++) {
                var pa = new particle({
                    x: Math.random() * 10 - 5,
                    y: Math.random() * 10 - 5
                }, {
                    x: 100,
                    y: 100
                }, {
                    x: Math.random() * 8 - 3,
                    y: Math.random() * 8 - 3
                }, 0, true, fw.col);
                fw.addChild(pa.graphic);
                fw.particles.push(pa);
                pa.fw = fw;
                pa.alpha = 0;
                pa.graphic.visible = false;
                this.particles.push(pa)
            }
            fw.x = Math.random() * 400;
            fw.y = Math.random() * 400;
            this.fws.push(fw);
            this.addChild(fw)
        }
    };
    p.update = function() {
        if (!this.playing) return;
        for (var j = 0; j < this.fws.length; j++) this.fws[j].done = true;
        var alldone = true;
        for (var i =
                0; i < this.particles.length; i++) {
            var pa = this.particles[i];
            if (pa.fw.playing)
                if (pa.alpha > 0.01) {
                    alldone = false;
                    pa.visible = true;
                    pa.graphic.visible = true;
                    pa.lastPos.x = pa.pos.x;
                    pa.lastPos.y = pa.pos.y;
                    if (pa.usePhysics) {
                        pa.vel.y += pa.GRAVITY;
                        pa.pos.y += pa.vel.y;
                        pa.alpha -= pa.fade
                    } else {
                        var distance = pa.target.y - pa.pos.y;
                        pa.pos.y += distance * (0.03 + pa.easing);
                        pa.alpha = Math.min(distance * distance * 5E-5, 1)
                    }
                    pa.pos.x += pa.vel.x;
                    pa.graphic.x = pa.pos.x;
                    pa.graphic.y = pa.pos.y;
                    pa.graphic.alpha = pa.alpha;
                    pa.fw.done = false
                } else {
                    pa.visible =
                        false;
                    pa.graphic.visible = false
                } else pa.graphic.visible = false
        }
        if (this.playing)
            for (var j = 0; j < this.fws.length; j++)
                if (this.fws[j].done && this.fws[j].playing) this.resetFw(this.fws[j]);
        if (!alldone) mahjong.Main.instance.setRefresh(true)
    };
    p.playEffect = function() {
        this.visible = true;
        this.playing = true;
        var s = this;
        for (var j = 0; j < this.fws.length; j++) setTimeout(function(f) {
            return function() {
                s.resetFw(f)
            }
        }(this.fws[j]), Math.random() * 3E3)
    };
    p.stopEffect = function() {
        this.visible = false;
        for (var j = 0; j < this.fws.length; j++) this.fws[j].playing =
            false;
        this.playing = false
    };
    p.resetFw = function(fw) {
        fw.playing = true;
        fw.col = Math.random() * (16777215 - 5263440) + 5263440;
        for (var i = 0; i < fw.particles.length; i++) {
            var pa = fw.particles[i];
            pa.pos = {
                x: Math.random() * 10 - 5,
                y: Math.random() * 10 - 5
            }, pa.target = {
                x: 100,
                y: 100
            }, pa.vel = {
                x: Math.random() * 7 - 3.5,
                y: Math.random() * 7 - 2.5
            };
            pa.lastPos = {
                x: pa.pos.x,
                y: pa.pos.y
            };
            pa.alpha = 1;
            pa.updateColor(fw.col)
        }
        fw.x = Math.random() < 0.5 ? Math.random() * 200 + 50 : 750 + Math.random() * 200;
        fw.y = Math.random() * 500;
        mahjong.Main.instance.setRefresh(true)
    };
    mahjong.Fireworks = Fireworks;
    var particle = function(pos, target, vel, marker, usePhysics, color) {
        this.GRAVITY = 0.06;
        this.alpha = 1;
        this.easing = Math.random() * 0.02;
        this.fade = Math.random() * 0.1 + 0.02;
        this.gridX = marker % 120;
        this.gridY = Math.floor(marker / 120) * 12;
        this.color = marker;
        this.pos = {
            x: pos.x || 0,
            y: pos.y || 0
        };
        this.vel = {
            x: vel.x || 0,
            y: vel.y || 0
        };
        this.lastPos = {
            x: this.pos.x,
            y: this.pos.y
        };
        this.target = {
            y: target.y || 0
        };
        this.graphic = new createjs.Bitmap(mahjong.getAsset("game_particle.png"));
        var ro = (color & 16711680) >> 16;
        var bo =
            (color & 65280) >> 8;
        var go = color & 255;
        var rm = Math.random() * 0.2 + ro / 255;
        var gm = Math.random() * 0.2 + bo / 255;
        var bm = Math.random() * 0.2 + go / 255;
        ro = 0;
        bo = 0;
        go = 0;
        this.graphic.filters = [new createjs.ColorFilter(rm, gm, bm, 1, ro, bo, go, 0)];
        this.graphic.cache(0, 0, 10, 10);
        this.graphic.scaleX = this.graphic.scaleY = Math.random() * 1.5 + 0.5;
        this.usePhysics = usePhysics || false
    };
    particle.prototype.updateColor = function(color) {
        var ro = (color & 16711680) >> 16;
        var bo = (color & 65280) >> 8;
        var go = color & 255;
        var rm = Math.random() * 0.2 + ro / 255;
        var gm = Math.random() *
            0.2 + bo / 255;
        var bm = Math.random() * 0.2 + go / 255;
        ro = 0;
        bo = 0;
        go = 0;
        this.graphic.filters = [new createjs.ColorFilter(rm, gm, bm, 1, ro, bo, go, 0)];
        this.graphic.cache(0, 0, 10, 10);
        this.graphic.scaleX = this.graphic.scaleY = Math.random() * 1.5 + 0.5
    }
})();
(function() {
    function GameView() {
        this.PIECE_WIDTH = 40;
        this.PIECE_HEIGHT = 60;
        this.initialize();
        this.initializeControls();
        this.buildGrid();
        this.selectedPiece = null
    }
    var p = GameView.prototype = new createjs.Container;
    p.onKeyDown = function(e) {
        if (e.keyCode == 39) {
            this.enabled = false;
            this.timer.stopTimer();
            setTimeout(mahjong.utils.proxy(this, this.levelUp), 200)
        }
    };
    p.initializeControls = function() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("tausta_02.jpg"));
        this.board = new mahjong.Board;
        this.pieceContainer = new createjs.Container;
        this.pieceContainer.x = (1024 - this.PIECE_WIDTH * this.board.GRID_WIDTH) / 2 - 9;
        this.pieceContainer.y = (768 - this.PIECE_HEIGHT * this.board.GRID_HEIGHT) / 2 - 9;
        this.timer = new mahjong.Timer;
        this.timer.x = 209;
        this.timer.y = 8;
        this.timer.timerEnded = mahjong.utils.proxy(this, this.onTimerEnd);
        this.pauseButton = new mahjong.PauseButton;
        this.pauseButton.x = 5;
        this.pauseButton.y = 670;
        this.pauseButton.setPaused(false);
        this.hintButton = new mahjong.HintButton;
        this.hintButton.x = 927;
        this.hintButton.y = 670;
        this.pointText = new createjs.Text("200",
            "30px mouse_memoirsregular", "#F4CF63");
        this.pointText.textAlign = "center";
        this.pointText.textBaseline = "middle";
        this.pointText.shadow = new createjs.Shadow("rgba(10,10,5,1)", 2, 2, 3);
        this.comboText = new createjs.Text("Chain-Bonus 20X", "30px mouse_memoirsregular", "#F4CF63");
        this.comboText.textAlign = "center";
        this.comboText.textBaseline = "middle";
        this.comboText.visible = false;
        this.levelText = new createjs.Text("Level 1", "76px mouse_memoirsregular", "#F4CF63");
        this.levelText.textAlign = "center";
        this.levelText.textBaseline =
            "middle";
        this.levelText.x = 1024 / 2;
        this.levelText.y = 768 / 2;
        this.levelText.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.noMoves = new createjs.Text("EI MAHDOLLISIA SIIRTOJA", "50px mouse_memoirsregular", "#F4CF63");
        this.noMoves.textAlign = "center";
        this.noMoves.textBaseline = "middle";
        this.noMoves.x = 1024 / 2;
        this.noMoves.y = 768 + 100;
        this.noMoves.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        mahjong.TextAlign.cacheText(this.levelText);
        mahjong.TextAlign.cacheText(this.pointText);
        mahjong.TextAlign.cacheText(this.comboText);
        mahjong.TextAlign.cacheText(this.noMoves);
        this.path = new createjs.Shape;
        this.path.x = this.pieceContainer.x;
        this.path.y = this.pieceContainer.y;
        this.endPopup = new mahjong.EndPopup;
        this.endPopup.x = (1024 - this.endPopup.bg.image.width) / 2 - 50;
        this.endPopup.y = (768 - this.endPopup.bg.image.height) / 2 - 10;
        this.storyPopup = new mahjong.StoryPopup;
        this.storyPopup.x = (1024 - this.endPopup.bg.image.width) / 2 - 50;
        this.storyPopup.y = (768 - this.endPopup.bg.image.height) / 2 - 10;
        this.points = new mahjong.Points;
        this.points.x = 1024 / 2;
        this.points.y =
            715;
        this.menu = new mahjong.PauseMenu;
        this.menu.x = (1024 - this.menu.bg.image.width) / 2;
        this.menu.y = (768 - this.menu.bg.image.height) / 2;
        this.levelUpPopup = new mahjong.LevelUpPopup;
        this.levelUpPopup.x = (1024 - this.endPopup.bg.image.width) / 2 - 50;
        this.levelUpPopup.y = (768 - this.endPopup.bg.image.height) / 2 - 10;
        this.disabler = new createjs.Shape;
        this.disabler.graphics.beginFill("#000");
        this.disabler.graphics.drawRect(0, 0, 1024, 768);
        this.disabler.graphics.endFill();
        this.disabler.alpha = 0.3;
        this.disabler.visible = false;
        this.hintArrow1 =
            new createjs.Bitmap(mahjong.getAsset("game_hint_arrow.png"));
        this.hintArrow2 = new createjs.Bitmap(mahjong.getAsset("game_hint_arrow.png"));
        this.hintArrow1.visible = false;
        this.hintArrow2.visible = false;
        this.firework = new mahjong.Fireworks;
        this.helpPopup = new mahjong.HelpPopup;
        this.helpPopup.x = (1024 - this.endPopup.bg.image.width) / 2 - 50;
        this.helpPopup.y = (768 - this.endPopup.bg.image.height) / 2 - 10;
        this.addChild(this.points);
        this.addChild(this.pieceContainer);
        this.addChild(this.timer);
        this.addChild(this.pauseButton);
        this.addChild(this.hintButton);
        this.addChild(this.path);
        this.addChild(this.hintArrow1);
        this.addChild(this.hintArrow2);
        this.addChild(this.levelText);
        this.addChild(this.pointText);
        this.addChild(this.comboText);
        this.addChild(this.noMoves);
        this.addChild(this.disabler);
        this.addChild(this.firework);
        this.addChild(this.endPopup);
        this.addChild(this.levelUpPopup);
        this.addChild(this.storyPopup);
        this.addChild(this.helpPopup);
        this.addChild(this.menu);
        this.helpPopup.visible = false;
        this.menu.help.addEventListener("click",
            mahjong.utils.proxy(this, this.onHelpClick));
        this.helpPopup.close.addEventListener("click", mahjong.utils.proxy(this, this.onHelpClose));
        this.menu.cont.addEventListener("click", mahjong.utils.proxy(this, this.onResumePlay));
        this.menu.backToStart.addEventListener("click", mahjong.utils.proxy(this, this.endGame));
        this.endPopup.backToStart.addEventListener("click", mahjong.utils.proxy(this, this.endGame));
        this.levelUpPopup.backToStart.addEventListener("click", mahjong.utils.proxy(this, this.endGame));
        this.levelUpPopup.nextLevel.addEventListener("click",
            mahjong.utils.proxy(this, this.levelUpPopupCloseComplete));
        this.storyPopup.continueBtn.addEventListener("click", mahjong.utils.proxy(this, this.storyPopupClose));
        this.menu.restart.addEventListener("click", mahjong.utils.proxy(this, this.restart));
        this.endPopup.restart.addEventListener("click", mahjong.utils.proxy(this, this.restart));
        this.pauseButton.addEventListener("click", mahjong.utils.proxy(this, this.onPauseClick));
        this.hintButton.addEventListener("click", mahjong.utils.proxy(this, this.onHintClick));
        this.pointText.visible = false;
        this.comboText.visible = false;
        this.endPopup.timer = this.timer;
        this.levelUpPopup.timer = this.timer
    };
    p.onHelpClick = function() {
        this.menu.visible = false;
        this.helpPopup.visible = true;
        mahjong.Main.instance.setRefresh()
    };
    p.onHelpClose = function() {
        this.helpPopup.visible = false;
        this.onResumePlay();
        mahjong.Main.instance.setRefresh()
    };
    p.restart = function() {
        this.firework.stopEffect();
        this.endPopup.clearTimer();
        this.timer.stopTimer();
        this.enabled = false;
        this.prepare();
        this.startGame()
    };
    p.endGame =
        function() {
            this.firework.stopEffect();
            this.levelUpPopup.clearTimer();
            this.endPopup.clearTimer();
            this.timer.stopTimer();
            this.enabled = false;
            this.returnToMenu()
        };
    p.onResumePlay = function() {
        this.pieceContainer.visible = true;
        this.enabled = true;
        this.menu.visible = false;
        this.disabler.visible = false;
        this.timer.startTimer()
    };
    p.onPauseClick = function() {
        if (this.enabled) {
            this.pieceContainer.visible = false;
            this.enabled = false;
            this.menu.init();
            this.menu.visible = true;
            this.disabler.visible = true;
            this.timer.stopTimer()
        }
    };
     p.onHintClick = function() {
        if (this.enabled && this.hintsUsed < 10) {
            mahjong.SoundManager.playSound(mahjong.SoundManager.HINT);
            this.hintsUsed++;
            this.hintButton.setHintAmount(10 -
                this.hintsUsed);
            var hint = this.board.getHint();
            if (hint[0]) {
                hint[0].blink();
                var ha = this.hintArrow1;
                this.hintArrow1.visible = true;
                this.hintArrow1.alpha = 1;
                this.hintArrow1.x = hint[0].x + this.pieceContainer.x + 5;
                this.hintArrow1.y = hint[0].y + this.pieceContainer.y - 15;
                createjs.Tween.get(this.hintArrow1).to({
                    y: this.hintArrow1.y - 20
                }, 400).to({
                    y: this.hintArrow1.y
                }, 400).to({
                    y: this.hintArrow1.y - 20
                }, 400).to({
                    y: this.hintArrow1.y
                }, 400).to({
                    y: this.hintArrow1.y - 20,
                    alpha: 0
                }, 400).call(function() {
                    ha.visible = false
                })
            }
            if (hint[1]) {
                var ha2 =
                    this.hintArrow2;
                hint[1].blink();
                this.hintArrow2.visible = true;
                this.hintArrow2.alpha = 1;
                this.hintArrow2.x = hint[1].x + this.pieceContainer.x + 5;
                this.hintArrow2.y = hint[1].y + this.pieceContainer.y - 15;
                createjs.Tween.get(this.hintArrow2).to({
                    y: this.hintArrow2.y - 20
                }, 400).to({
                    y: this.hintArrow2.y
                }, 400).to({
                    y: this.hintArrow2.y - 20
                }, 400).to({
                    y: this.hintArrow2.y
                }, 400).to({
                    y: this.hintArrow2.y - 20,
                    alpha: 0
                }, 400).call(function() {
                    ha2.visible = false
                })
            }
        }
    };
    p.prepare = function() {
        this.ending = false;
        this.storyPopup.visible = false;
        $("#mainCanvas").removeClass("level2").removeClass("level3").removeClass("level4").removeClass("level5").addClass("level1");
        this.noMoves.visible = false;
        this.hintsUsed = 0;
        this.pointsPerLevel = [0, 0, 0, 0, 0];
        this.menu.visible = false;
        this.pieceContainer.visible = true;
        this.endPopup.visible = false;
        this.levelUpPopup.visible = false;
        this.disabler.visible = false;
        this.enabled =
            false;
        this.levelText.x = 1024 / 2;
        this.levelText.y = 768 / 2;
        this.level = 1;
        this.pieceContainer.visible = false;
        this.points.reset();
        this.hintButton.setHintAmount(10);
        this.timer.resetTimer(2E5);
        this.lastOpen = 0;
        this.combo = 1;
        this.comboText.y = 768 - 50
    };
    p.startGame = function() {
        mahjong.SoundManager.playSound(mahjong.SoundManager.GAME_START);
        this.storyPopup.prepare(this.level);
        this.storyPopup.visible = true
    };
    p.onStartAnimationComplete = function() {
        this.enabled = true;
        this.timer.startTimer()
    };
    p.buildGrid = function() {
        this.pieces = [];
        var pieces = this.board.pieces;
        for (var i = 0; i < this.board.GRID_WIDTH * this.board.GRID_HEIGHT; i++) {
            var piece = new mahjong.Piece(1);
            piece.gx = i % this.board.GRID_WIDTH;
            piece.gy = Math.floor(i / this.board.GRID_WIDTH);
            piece.x = this.PIECE_WIDTH * piece.gx + piece.gx * 1;
            piece.y = this.PIECE_HEIGHT * piece.gy + piece.gy * 1;
            this.pieceContainer.addChild(piece);
            this.pieces.push(piece);
            piece.addEventListener("click", mahjong.utils.proxy(this, this.onPieceClick))
        }
    };
    p.onPieceClick = function(event) {
        if (!this.enabled) return;
        mahjong.SoundManager.playSound(mahjong.SoundManager.SELECT);
        if (this.selectedPiece == null) {
            this.selectedPiece = event.currentTarget;
            this.selectedPiece.setSelected(true)
        } else if (this.selectedPiece == event.currentTarget) {
            this.selectedPiece.setSelected(false);
            this.selectedPiece = null
        } else {
            var piece2 = event.currentTarget;
            var piece1 = this.selectedPiece;
            this.selectedPiece = null;
            if (piece2.type == piece1.type) {
                var node = this.board.findNode(piece1, piece2, 0, 2);
                if (node != null && node.cost <= 2) {
                    this.board.removePiece(piece1);
                    this.board.removePiece(piece2);
                    this.path.alpha = 1;
                    createjs.Tween.removeTweens(this.path);
                    piece1.setSelected(true);
                    piece2.setSelected(true);
                    mahjong.Main.instance.setRefresh();
                    var combinationsLeft = this.board.countAvailableCombinations(2);
                    this.path.graphics.clear();
                    this.path.graphics.beginStroke("#00FF00");
                    this.path.graphics.setStrokeStyle(3, "round");
                    this.path.graphics.moveTo(node.x * this.PIECE_WIDTH - this.PIECE_WIDTH / 2 + node.x, node.y * this.PIECE_HEIGHT - this.PIECE_HEIGHT / 2 + node.y);
                    var path = this.path;
                    var pieceContainer = this.pieceContainer;
                    window.clearTimeout(this.pathClearIndex);
                    createjs.Tween.removeTweens(piece1);
                    createjs.Tween.removeTweens(piece2);
                    piece1.alpha = 0;
                    piece2.alpha = 0;
                    piece1.visible = false;
                    piece2.visible = false;
                    createjs.Tween.get(this.path).wait(200).to({
                        alpha: 0
                    }, 300);
                    var pPoints = piece1.type < 30 ? 6 : 20;
                    if (this.lastOpen - Date.now() > -5E3) {
                        this.combo++;
                        if (this.combo > 5) this.combo = 5;
                        pPoints *= this.combo
                    } else this.combo = 1;
                    this.pointsPerLevel[this.level - 1] += pPoints;
                    this.points.addPoints(pPoints);
                    var scope = this;
                    this.pathClearIndex = setTimeout(function() {
                        path.graphics.clear()
                    }, 500);
                    this.pointText.text = pPoints;
                    this.pointText.visible =
                        true;
                    this.pointText.alpha = 1;
                    this.pointText.x = piece2.x + this.PIECE_WIDTH / 2 + pieceContainer.x;
                    this.pointText.y = piece2.y + pieceContainer.y - 10;
                    createjs.Tween.removeTweens(this.pointText);
                    createjs.Tween.get(this.pointText).to({
                        alpha: 1,
                        y: this.pointText.y - 15
                    }, 600).to({
                        alpha: 0,
                        y: this.pointText.y - 20
                    }, 250).call(function() {
                        scope.pointText.visible = false
                    });
                    if (this.combo > 1) {
                        this.comboText.text = this.combo > 1 ? "Chain-Bonus " + this.combo + "X\n" : "";
                        this.comboText.visible = true;
                        if (this.combo == 2) this.comboText.alpha = 0;
                        this.comboText.x =
                            1024 / 2;
                        createjs.Tween.removeTweens(this.comboText);
                        createjs.Tween.get(this.comboText).to({
                            alpha: 1,
                            y: 768 - 80
                        }, 600).to({
                            alpha: 1,
                            y: 768 - 70
                        }, 3800).to({
                            alpha: 0,
                            y: 768 - 50
                        }, 600).call(function() {
                            scope.comboText.y = 768 - 50;
                            scope.comboText.visible = false
                        })
                    }
                    if (combinationsLeft) setTimeout(function() {
                        pieceContainer.removeChild(piece2);
                        pieceContainer.removeChild(piece1)
                    }, 500);
                    mahjong.SoundManager.playSound(mahjong.SoundManager.COMBINE);
                    var c = 0;
                    while ((node.x != piece1.gx + 1 || node.y != piece1.gy + 1) && c < 50) {
                        c++;
                        this.path.graphics.lineTo(node.x *
                            this.PIECE_WIDTH - this.PIECE_WIDTH / 2 + node.x, node.y * this.PIECE_HEIGHT - this.PIECE_HEIGHT / 2 + node.y);
                        node = node.from
                    }
                    this.path.graphics.lineTo(node.x * this.PIECE_WIDTH - this.PIECE_WIDTH / 2 + node.x, node.y * this.PIECE_HEIGHT - this.PIECE_HEIGHT / 2 + node.y);
                    this.timer.addTime(1E4);
                    this.lastOpen = Date.now();
                    if (!combinationsLeft && scope.board.isEmpty()) {
                        this.enabled = false;
                        this.timer.stopTimer();
                        setTimeout(mahjong.utils.proxy(this, this.levelUp), 1E3)
                    } else if (!combinationsLeft) {
                        this.enabled = false;
                        this.timer.stopTimer();
                        setTimeout(mahjong.utils.proxy(this,
                            this.boardEmpty), 700)
                    }
                } else {
                    mahjong.SoundManager.playSound(mahjong.SoundManager.ERROR);
                    piece2.setSelected(false);
                    piece1.setSelected(false);
                    piece1.errorBlink();
                    piece2.errorBlink();
                    this.selectedPiece = event.currentTarget;
                    this.selectedPiece.setSelected(true)
                }
            } else {
                mahjong.SoundManager.playSound(mahjong.SoundManager.ERROR);
                piece2.setSelected(false);
                piece1.setSelected(false);
                piece1.errorBlink();
                piece2.errorBlink();
                this.selectedPiece = event.currentTarget;
                this.selectedPiece.setSelected(true)
            }
        }
    };
    p.levelUp =
        function() {
            if (this.level < 5) $("#mainCanvas").removeClass("level1").removeClass("level2").removeClass("level3").removeClass("level4").removeClass("level5").addClass("level" + (this.level + 1));
            this.lastOpen = 0;
            this.combo = 1;
            this.firework.playEffect();
            mahjong.SoundManager.playSound(mahjong.SoundManager.WIN);
            this.enabled = false;
            var timeleft = this.timer.getTimeLeft();
            var levelBonus = this.level * 1E3;
            var timeBonus = 0;
            this.points.addImmediatePoints(levelBonus);
            if (this.level == 5) {
                this.endPopup.prepare(this.pointsPerLevel[this.level -
                    1], levelBonus, timeBonus, this.points.points, this.level);
                this.ending = true;
                this.storyPopup.prepare(this.level, true, false);
                this.storyPopup.visible = true;
                this.onGameEnd()
            } else {
                this.levelUpPopup.prepare(this.pointsPerLevel[this.level - 1], levelBonus, timeBonus, this.points.points, this.level);
                this.level++;
                this.levelUpPopup.visible = true
            }
            this.disabler.visible = true;
            this.hintsUsed = 0;
            this.hintButton.setHintAmount(10)
        };
    p.levelUpPopupCloseComplete = function() {
        this.levelUpPopup.clearTimer();
        this.levelUpPopup.visible = false;
        this.storyPopup.prepare(this.level);
        this.storyPopup.visible = true;
        mahjong.SoundManager.playSound(mahjong.SoundManager.GAME_START)
    };
    p.storyPopupClose = function() {
        this.storyPopup.visible = false;
        if (this.ending) {
            this.storyPopup.visible = false;
            this.endPopup.visible = true
        } else {
            this.timer.resetTimer([6E4, 6E4, 6E4, 6E4, 6E4][this.level - 1]);
            this.disabler.visible = false;
            this.board.init(this.level);
            this.points.level.text = this.level;
            mahjong.SoundManager.playSound(mahjong.SoundManager.LEVEL_START);
            this.updatePieces(true);
            this.board.countAvailableCombinations();
            mahjong.SoundManager.playSound(mahjong.SoundManager.LEVEL_START);
            this.levelText.text = "Level " + this.level;
            this.levelText.alpha = 0;
            createjs.Tween.get(this.levelText).to({
                alpha: 1
            }, 100, createjs.Ease.quadOut).wait(400).to({
                alpha: 0
            }, 300, createjs.Ease.quadIn).wait(1E3).call(mahjong.utils.proxy(this, this.onStartAnimationComplete));
            this.firework.stopEffect()
        }
    };
    p.boardEmpty = function() {
        this.enabled = false;
        this.noMoves.y = 768 + 50;
        this.noMoves.visible = true;
        createjs.Tween.get(this.noMoves).to({
            y: 768 /
                2 - 50
        }, 500, createjs.Ease.quadOut).wait(800).call(mahjong.utils.proxy(this, this.onBoardEmptyAnimationMiddle)).wait(500).call(mahjong.utils.proxy(this, this.updatePieces)).to({
            y: 768 + 50
        }, 500, createjs.Ease.quadIn).call(mahjong.utils.proxy(this, this.onBoardEmptyAnimationComplete))
    };
    p.onBoardEmptyAnimationMiddle = function() {
        this.noMoves.visible = false;
        this.board.shuffle();
        this.updatePieces()
    };
    p.onBoardEmptyAnimationComplete = function() {
        this.enabled = true;
        this.timer.startTimer()
    };
    p.updatePieces = function(build) {
        var pieces =
            this.board.pieces;
        var s = this;
        for (var i = 0; i < this.board.GRID_HEIGHT; i++)
            for (var j = 0; j < this.board.GRID_WIDTH; j++) {
                var piece = this.pieces[i * this.board.GRID_WIDTH + j];
                var node = this.board.grid[i + 1][j + 1];
                if (node) {
                    piece.updateType(node.type);
                    node.piece = piece;
                    if (build) {
                        piece.visible = false;
                        setTimeout(function(p) {
                            return function() {
                                p.visible = true
                            }
                        }(piece), Math.random() * 500 + 500)
                    }
                    this.pieceContainer.addChild(piece)
                } else {
                    piece.updateType(null);
                    if (this.pieceContainer.contains(piece)) this.pieceContainer.removeChild(piece)
                }
            }
        var left =
            this.board.countAvailableCombinations(2);
        if (!left) {
            this.board.shuffle();
            this.updatePieces()
        }
        this.pieceContainer.visible = true
    };
    p.onTimerEnd = function() {
        mahjong.SoundManager.playSound(mahjong.SoundManager.TIMER_END);
        this.menu.visible = false;
        this.pieceContainer.visible = true;
        this.enabled = false;
        var prevPoints = 0;
        for (var i = 0; i < this.level - 1; i++) prevPoints += this.pointsPerLevel[i];
        this.endPopup.prepare(this.pointsPerLevel[this.level - 1], 0, 0, this.points.points);
        this.endPopup.visible = true;
        this.disabler.visible =
            true;
        this.onGameEnd()
    };
    p.onTimerEnd = function() {
        mahjong.SoundManager.playSound(mahjong.SoundManager.TIMER_END);
        this.menu.visible = false;
        this.pieceContainer.visible = true;
        this.enabled = false;
        var prevPoints = 0;
        for (var i = 0; i < this.level - 1; i++) prevPoints += this.pointsPerLevel[i];
        this.storyPopup.prepare(this.level, false, true);
        this.ending = true;
        this.storyPopup.visible = true;
        this.endPopup.prepare(this.pointsPerLevel[this.level - 1], 0, 0, this.points.points);
        this.disabler.visible = true;
        this.onGameEnd()
    };
    p.onGameEnd = function() {
        if (mahjong.Main.instance.userid !=
            null) PelikoneApi.submitHighscore("1000005", "4415d0832e6906c9dd53f848e682bc1e", "mahjongConnect", this.points.currentPoints, mahjong.utils.proxy(this, this.onScoreSubmit), this.points.currentPoints, null, mahjong.Main.instance.username, null, mahjong.Main.instance.userid)
    };
    p.onScoreSubmit = function(scores, pos) {
        mahjong.Main.instance.startView.highscore.onHighscoreLoad(scores)
    };
    p.resize = function(size) {
        var s = size.width / 1024;
        if (s > size.height / 768) s = size.height / 768;
        this.scaleX = this.scaleY = s;
        this.width = this.bg.image.width *
            s;
        this.height = this.bg.image.height * s
    };
    mahjong.GameView = GameView
})();
(function() {
    function HelpPopup() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_default.png"));
        var bg = this.bg;
        this.close = new createjs.Bitmap(mahjong.getAsset("game_menu_continue.png"));
        this.close.x = 290;
        this.close.y = 409;
        this.close.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.close.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.close.cursor = "pointer";
        this.left = new createjs.Bitmap(mahjong.getAsset("arrow_left.png"));
        this.left.x = 330;
        this.left.y =
            402;
        this.left.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.left.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.left.cursor = "pointer";
        this.right = new createjs.Bitmap(mahjong.getAsset("arrow_right.png"));
        this.right.x = 290 + 320 + 10;
        this.right.y = 402;
        this.right.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.right.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.right.cursor = "pointer";
        this.addChild(this.bg);
        this.addChild(this.left);
        this.addChild(this.right);
        this.addChild(this.close);
        this.text = new createjs.Text("Ni Hao! Your mission is easy. Try to find similar tiles which are near to each other and free on 1 side. Not more than 90 degrees off a direct line.", "36px mouse_memoirsregular", "#FED93E");
        this.text.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.text.textAlign = "left";
        this.text.lineWidth = 360;
        this.text.lineHeight =
            40;
        this.text.x = 345;
        this.text.y = 100;
        this.p1 = new mahjong.Piece(41);
        this.p2 = new mahjong.Piece(42);
        this.p3 = new mahjong.Piece(43);
        this.p4 = new mahjong.Piece(44);
        this.p5 = new mahjong.Piece(51);
        this.p6 = new mahjong.Piece(52);
        this.p7 = new mahjong.Piece(53);
        this.p8 = new mahjong.Piece(54);
        this.p1.x = 383;
        this.p1.y = 240;
        this.p2.x = 443;
        this.p2.y = 240;
        this.p3.x = 503;
        this.p3.y = 240;
        this.p4.x = 565;
        this.p4.y = 240;
        this.p5.x = 383;
        this.p5.y = 310;
        this.p6.x = 443;
        this.p6.y = 310;
        this.p7.x = 503;
        this.p7.y = 310;
        this.p8.x = 565;
        this.p8.y = 310;
        this.close.x =
            410;
        this.close.y = 400;
        this.addChild(this.text);
        this.addChild(this.close);
        this.addChild(this.p1);
        this.addChild(this.p2);
        this.addChild(this.p3);
        this.addChild(this.p4);
        this.addChild(this.p5);
        this.addChild(this.p6);
        this.addChild(this.p7);
        this.addChild(this.p8);
        this.p1.visible = false;
        this.p2.visible = false;
        this.p3.visible = false;
        this.p4.visible = false;
        this.p5.visible = false;
        this.p6.visible = false;
        this.p7.visible = false;
        this.p8.visible = false;
        this.left.addEventListener("click", mahjong.utils.proxy(this, this.changePage));
        this.right.addEventListener("click", mahjong.utils.proxy(this, this.changePage));
        mahjong.TextAlign.align(this.text);
        this.page = 0
    }
    var p = HelpPopup.prototype = new createjs.Container;
    p.changePage = function(e) {
        this.page = (this.page + 1) % 2;
        if (this.page == 0) this.text.text = "Ni Hao! Your mission is easy. Try to find similar tiles which are near to each other and free on 1 side. Not more than 90 degrees off a direct line.";
        else this.text.text =
            "A chain-bonus will be given when you match the tiles very fast after another. If you are stuck you can use the hint button 3 times.";
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOver = function(e) {
        e.currentTarget.shadow = new createjs.Shadow("#000", 1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOut = function(e) {
        this.left.shadow = null;
        this.right.shadow = null;
        this.close.shadow = null;
        mahjong.Main.instance.setRefresh()
    };
    mahjong.HelpPopup = HelpPopup
})();
(function() {
    function Highscore() {
        this.bestScore = new createjs.Text("", "32px mouse_memoirsregular", "#FFd300");
        this.bestPlayer = new createjs.Text("", "32px mouse_memoirsregular", "#FFd300");
        this.bestTitle = new createjs.Text("", "32px mouse_memoirsregular", "#FFd300");
        this.bgGraphic = new createjs.Bitmap(mahjong.getAsset("paras.jpg"));
        this.bgGraphic.x = 0;
        this.bgGraphic.y = 0;
        this.listButton = new createjs.Bitmap(mahjong.getAsset("listButton.png"));
        this.listButton.x = 10;
        this.listButton.y = 12;
        this.fbinfo = new createjs.Bitmap(mahjong.getAsset("fbinfo.png"));
        this.fbinfo.x = -8;
        this.fbinfo.y = 65;
        this.addChild(this.bgGraphic);
        this.addChild(this.bestScore);
        this.addChild(this.bestPlayer);
        this.addChild(this.bestTitle);
        this.addChild(this.listButton);
        this.addChild(this.fbinfo);
        this.bestTitle.x = 46;
        this.bestTitle.y = 8;
        this.bestTitle.width = 20;
        this.bestTitle.textAlign = "left";
        this.bestPlayer.x = 75;
        this.bestPlayer.y = 8;
        this.bestPlayer.width = this.bgGraphic.image.width - 60 - 75;
        this.bestPlayer.textAlign = "left";
        this.bestScore.x = this.bgGraphic.image.width - 20;
        this.bestScore.y =
            8;
        this.bestScore.width = 160;
        this.bestScore.textAlign = "right";
        mahjong.TextAlign.align(this.bestScore);
        mahjong.TextAlign.align(this.bestPlayer);
        mahjong.TextAlign.align(this.bestTitle)
    }
    var p = Highscore.prototype = new createjs.Container;
    p.updateScore = function() {
        this.listButton.visible = true;
        this.fbinfo.visible = false;
        PelikoneApi.getHighscores("1000005", "4415d0832e6906c9dd53f848e682bc1e", "mahjongConnect", mahjong.utils.proxy(this, this.onHighscoreLoad))
    };
    p.onHighscoreLoad = function(scores) {
        if (this.interval != null) clearInterval(this.interval);
        this.scores = scores;
        if (scores == null || scores.length == 0) {
            this.bestTitle.text = "";
            this.bestScore.text = "---";
            this.bestPlayer.text = "No highscores"
        } else {
            this.scoreind = 0;
            this.bestTitle.text = "1.";
            this.bestScore.text = scores[0].display;
            this.bestPlayer.text = scores[0].user;
            this.interval = setInterval(mahjong.utils.proxy(this, this.loopScore), 2E3);
            var n = scores.length < 10 ? scores.length : 10;
            var names = "";
            var points = "";
            for (var i = 0; i < n; i++) {
                names += i + 1 + ". " + scores[i % n].user + "\n";
                points += scores[i % n].display + "\n"
            }
            this.list.names.text =
                names;
            this.list.points.text = points
        }
        mahjong.Main.instance.setRefresh()
    };
    p.loopScore = function() {
        this.scoreind = (this.scoreind + 1) % this.scores.length;
        this.bestTitle.text = this.scoreind + 1 + ".";
        this.bestScore.text = this.scores[this.scoreind].display;
        this.bestPlayer.text = this.scores[this.scoreind].user;
        mahjong.Main.instance.setRefresh()
    };
    mahjong.Highscore = Highscore
})();
(function() {
    function HighscoreEnd() {
        this.bestScore = new createjs.Text("9999", "32px ds_mysticoraregular", "#FFd300");
        this.bestPlayer = new createjs.Text("Pelaaja", "32px ds_mysticoraregular", "#FFd300");
        this.bestTitle = new createjs.Text("1.", "32px ds_mysticoraregular", "#FFd300");
        this.bgGraphic = new createjs.Bitmap(mahjong.getAsset("paras.jpg"));
        this.bgGraphic.x = 0;
        this.bgGraphic.y = 30;
        this.addChild(this.bgGraphic);
        this.addChild(this.bestScore);
        this.addChild(this.bestPlayer);
        this.addChild(this.bestTitle);
        this.bestTitle.x =
            125;
        this.bestTitle.y = 0;
        this.bestTitle.width = 250;
        this.bestTitle.textAlign = "center";
        this.bestPlayer.x = 125;
        this.bestPlayer.y = 34;
        this.bestPlayer.width = 250;
        this.bestPlayer.textAlign = "center";
        this.bestScore.x = 125;
        this.bestScore.y = 72;
        this.bestScore.width = 250;
        this.bestScore.textAlign = "center";
        mahjong.TextAlign.align(this.bestScore);
        mahjong.TextAlign.align(this.bestPlayer);
        mahjong.TextAlign.align(this.bestTitle)
    }
    var p = HighscoreEnd.prototype = new createjs.Container;
    p.updateScore = function() {
        PelikoneApi.getHighscores("1000005",
            "4415d0832e6906c9dd53f848e682bc1e", "mahjongConnect", mahjong.utils.proxy(this, this.onHighscoreLoad))
    };
    p.onHighscoreLoad = function(scores) {
        if (scores == null) {
            this.bestScore.text = "---";
            this.bestPlayer.text = "No highscores"
        } else {
            this.bestScore.text = scores[0].display;
            this.bestPlayer.text = scores[0].user
        }
        mahjong.Main.instance.setRefresh()
    };
    mahjong.HighscoreEnd = HighscoreEnd
})();
(function() {
    function HighScorePopup() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_win.png"));
        var bg = this.bg;
        this.bg.x = -60;
        this.disabler = new createjs.Shape;
        this.disabler.graphics.beginFill("#000");
        this.disabler.graphics.drawRect(0, 0, 1024, 768);
        this.disabler.graphics.endFill();
        this.disabler.alpha = 0.6;
        this.disabler.x = -107;
        this.disabler.y = -74;
        this.disabler.addEventListener("click", function() {});
        this.close = new createjs.Bitmap(mahjong.getAsset("game_menu_continue.png"));
        this.close.x = 290;
        this.close.y =
            409;
        this.close.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.close.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.close.cursor = "pointer";
        this.addChild(this.disabler);
        this.addChild(this.bg);
        this.addChild(this.close);
        this.names = new createjs.Text("", "20px mouse_memoirsregular", "#FED93E");
        this.points = new createjs.Text("", "20px mouse_memoirsregular", "#FED93E");
        this.title = new createjs.Text("P\u00c4IV\u00c4N PARHAAT", "72px mouse_memoirsregular",
            "#fff");
        this.names.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.points.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.title.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.names.textAlign = "left";
        this.points.textAlign = "right";
        this.title.textAlign = "center";
        this.names.lineWidth = 230;
        this.points.lineWidth = 100;
        this.title.lineWidth = 420;
        this.title.x = 305 + 420 / 2;
        this.title.y = 100;
        this.names.x = 350;
        this.names.y = 180;
        this.names.lineHeight = 20;
        this.points.x = 577 + 100;
        this.points.y =
            180;
        this.points.lineHeight = 20;
        this.close.x = 410;
        this.close.y = 400;
        this.addChild(this.names);
        this.addChild(this.points);
        this.addChild(this.title);
        this.addChild(this.close);
        mahjong.TextAlign.align(this.names);
        mahjong.TextAlign.align(this.points);
        mahjong.TextAlign.align(this.title)
    }
    var p = HighScorePopup.prototype = new createjs.Container;
    p.onRollOver = function(e) {
        e.currentTarget.shadow = new createjs.Shadow("#000", 1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOut = function(e) {
        this.close.shadow = null;
        mahjong.Main.instance.setRefresh()
    };
    mahjong.HighScorePopup = HighScorePopup
})();
(function() {
    function HintButton() {
        this.initialize();
        this.hintOn = new createjs.Bitmap(mahjong.getAsset("game_hintOn.png"));
        this.hintOff = new createjs.Bitmap(mahjong.getAsset("game_hintOff.png"));
        this.hintHover = new createjs.Bitmap(mahjong.getAsset("game_hint_hover.png"));
        this.hintAmount = new createjs.Text("3", "18px mouse_memoirsregular", "#000");
        this.hintAmount.verticalAlign = "center";
        this.hintAmount.textBaseline = "middle";
        this.hintAmount.x = 58;
        this.hintAmount.y = 30;
        this.hintOn.cursor = "pointer";
        this.hintHover.cursor =
            "pointer";
        this.addChild(this.hintOn);
        this.addChild(this.hintOff);
        this.addChild(this.hintHover);
        this.addChild(this.hintAmount);
        this.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.hintHover.visible = false;
        this.hintOff.visible = false
    }
    var p = HintButton.prototype = new createjs.Container;
    p.setEnabled = function(enabled) {
        this.paused = paused;
        this.pauseBitmap.visible = !paused;
        this.continueBitmap.visible = paused
    };
    p.setHintAmount = function(amount) {
        this.hintOn.visible = amount > 0;
        this.hintOff.visible = amount == 0;
        this.hintAmount.text = amount > 0 ? amount : ""
    };
    p.onRollOut = function() {
        this.hintHover.visible = false;
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOver = function() {
        if (!this.hintOff.visible) this.hintHover.visible = true;
        mahjong.Main.instance.setRefresh()
    };
    mahjong.HintButton = HintButton
})();
(function() {
    function LevelUpPopup() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_win.png"));
        var bg = this.bg;
        this.bg.x = -60;
        this.backToStart = new createjs.Bitmap(mahjong.getAsset("game_menu_end.png"));
        this.backToStart.x = 289;
        this.backToStart.y = 413;
        this.backToStart.cursor = "pointer";
        this.backToStart.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.backToStart.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.nextLevel = new createjs.Bitmap(mahjong.getAsset("game_next_level_btn.png"));
        this.nextLevel.x = 520;
        this.nextLevel.y = 413;
        this.nextLevel.cursor = "pointer";
        this.nextLevel.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.nextLevel.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.addChild(this.bg);
        this.addChild(this.backToStart);
        this.addChild(this.nextLevel);
        this.tilePoints = new createjs.Text("0", "44px mouse_memoirsregular", "#FED93E");
        this.timeBonus = new createjs.Text("-", "44px mouse_memoirsregular", "#FED93E");
        this.tilePointsTitle =
            new createjs.Text("Laattapisteet", "44px mouse_memoirsregular", "#fff");
        this.timeBonusTitle = new createjs.Text("Bonus-Score", "44px mouse_memoirsregular", "#fff");
        this.totalPoints = new createjs.Text("0", "44px mouse_memoirsregular", "#FED93E");
        this.totalPointsTitle = new createjs.Text("Total Score", "44px mouse_memoirsregular", "#fff");
        this.tilePoints.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.timeBonus.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.tilePointsTitle.shadow = new createjs.Shadow("rgba(61,18,9,0.9)",
            5, 5, 0);
        this.timeBonusTitle.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.totalPoints.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.totalPointsTitle.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.tilePoints.textAlign = "right";
        this.timeBonus.textAlign = "right";
        this.totalPoints.textAlign = "right";
        this.tilePoints.lineWidth = 163;
        this.timeBonus.lineWidth = 163;
        this.totalPoints.lineWidth = 163;
        this.tilePoints.x = 520 + 163;
        this.tilePoints.y = 209;
        this.timeBonus.x = 520 + 163;
        this.timeBonus.y =
            269;
        this.tilePointsTitle.x = 350;
        this.tilePointsTitle.y = 209;
        this.timeBonusTitle.x = 350;
        this.timeBonusTitle.y = 269;
        this.totalPoints.x = 520 + 163;
        this.totalPoints.y = 329;
        this.totalPointsTitle.x = 350;
        this.totalPointsTitle.y = 329;
        this.levelText = new createjs.Text("Level 1!", "72px mouse_memoirsregular", "#FED93E");
        this.levelText.x = 329 + 372 / 2 - 20;
        this.levelText.y = 109;
        this.levelText.lineWidth = 372 + 80;
        this.levelText.textAlign = "center";
        this.levelText.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        mahjong.TextAlign.align(this.tilePoints);
        mahjong.TextAlign.align(this.tilePointsTitle);
        mahjong.TextAlign.align(this.timeBonus);
        mahjong.TextAlign.align(this.timeBonusTitle);
        mahjong.TextAlign.align(this.levelText);
        mahjong.TextAlign.align(this.totalPoints);
        mahjong.TextAlign.align(this.totalPointsTitle);
        this.addChild(this.tilePoints);
        this.addChild(this.tilePointsTitle);
        this.addChild(this.timeBonus);
        this.addChild(this.timeBonusTitle);
        this.addChild(this.levelText);
        this.addChild(this.totalPoints);
        this.addChild(this.totalPointsTitle)
    }
    var p = LevelUpPopup.prototype =
        new createjs.Container;
    p.prepare = function(tilepoints, levelbonus, timebonus, total, level) {
        this.levelText.text = "Level " + level + " SELVITETTY!";
        this.tilePoints.text = tilepoints;
        this.timeBonus.text = levelbonus <= 0 ? "-" : levelbonus;
        this.timeBonusAmount = timebonus;
        this.totalPoints.text = total;
        this.levelBonus = levelbonus;
        this.delta = 0;
        this.count = 0;
        this.tilePointsAmount = tilepoints
    };
    p.onRollOver = function(e) {
        e.currentTarget.shadow = new createjs.Shadow("#000", 1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOut = function(e) {
        this.nextLevel.shadow =
            null;
        this.backToStart.shadow = null
    };
    p.timerTick = function() {
        var change = 13;
        this.delta += change;
        if (this.delta > this.timeBonusAmount) {
            change = change + (this.timeBonusAmount - this.delta);
            this.delta = this.timeBonusAmount;
            clearInterval(this.lvlUpInterval)
        }
        this.timeBonus.text = this.levelBonus + this.delta;
        this.timer.updateBarLevelEnd(this.delta / this.timeBonusAmount);
        mahjong.Main.instance.gameView.points.addImmediatePoints(change);
        this.totalPoints.text = mahjong.Main.instance.gameView.points.points;
        mahjong.Main.instance.setRefresh()
    };
    p.clearTimer = function() {
        if (this.delta != this.timeBonusAmount) {
            this.delta = this.timeBonusAmount - this.delta;
            mahjong.Main.instance.gameView.points.addImmediatePoints(this.delta)
        }
        clearInterval(this.lvlUpInterval)
    };
    mahjong.LevelUpPopup = LevelUpPopup
})();
(function() {
    function OrientationChange() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_over.png"));
        var bg = this.bg;
        this.addChild(this.bg);
        this.title = new createjs.Text("Please rotate your device!", "72px mouse_memoirsregular", "#FED93E");
        this.title.x = 329 + 372 / 2;
        this.title.y = 149;
        this.title.lineWidth = 372;
        this.title.textAlign = "center";
        this.title.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.title.lineHeight = 100;
        this.addChild(this.title);
        mahjong.TextAlign.align(this.title)
    }
    var p = OrientationChange.prototype = new createjs.Container;
    mahjong.OrientationChange = OrientationChange
})();
(function() {
    function PauseButton() {
        this.initialize();
        this.pauseBitmap = new createjs.Bitmap(mahjong.getAsset("game_pause.png"));
        this.continueBitmap = new createjs.Bitmap(mahjong.getAsset("game_pause_on.png"));
        this.addChild(this.pauseBitmap);
        this.addChild(this.continueBitmap);
        this.cursor = "pointer";
        this.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut))
    }
    var p = PauseButton.prototype = new createjs.Container;
    p.setPaused =
        function(paused) {
            this.paused = paused;
            this.pauseBitmap.visible = !paused;
            this.continueBitmap.visible = paused
        };
    p.onRollOut = function() {
        this.pauseBitmap.visible = !this.paused;
        this.continueBitmap.visible = this.paused;
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOver = function() {
        if (!this.paused) {
            this.continueBitmap.visible = true;
            this.pauseBitmap.visible = false;
            mahjong.Main.instance.setRefresh()
        }
    };
    mahjong.PauseButton = PauseButton
})();
(function() {
    function PauseMenu() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_menu_bg.png"));
        this.restart = new createjs.Bitmap(mahjong.getAsset("game_menu_restart.png"));
        this.restart.x = 335;
        this.restart.y = 99;
        this.restart.cursor = "pointer";
        this.restart.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.restart.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.backToStart = new createjs.Bitmap(mahjong.getAsset("game_menu_end.png"));
        this.backToStart.x =
            335;
        this.backToStart.y = 180;
        this.backToStart.cursor = "pointer";
        this.backToStart.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.backToStart.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.soundOn = new createjs.Bitmap(mahjong.getAsset("game_menu_sfx_on.png"));
        this.soundOn.x = 335;
        this.soundOn.y = 261;
        this.soundOn.cursor = "pointer";
        this.soundOn.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.soundOn.addEventListener("mouseout",
            mahjong.utils.proxy(this, this.onRollOut));
        this.soundOff = new createjs.Bitmap(mahjong.getAsset("game_menu_sfx_off.png"));
        this.soundOff.x = 335;
        this.soundOff.y = 261;
        this.soundOff.visible = false;
        this.soundOff.cursor = "pointer";
        this.soundOff.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.soundOff.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.cont = new createjs.Bitmap(mahjong.getAsset("game_menu_continue.png"));
        this.cont.x = 335;
        this.cont.y = 424;
        this.cont.cursor =
            "pointer";
        this.cont.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.cont.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.help = new createjs.Bitmap(mahjong.getAsset("game_menu_help.png"));
        this.help.x = 335;
        this.help.y = 343;
        this.help.cursor = "pointer";
        this.help.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.help.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.soundOn.addEventListener("click",
            mahjong.utils.proxy(this, this.onSoundsOnClick));
        this.soundOff.addEventListener("click", mahjong.utils.proxy(this, this.onSoundsOffClick));
        this.addChild(this.bg);
        this.addChild(this.restart);
        this.addChild(this.backToStart);
        this.addChild(this.soundOn);
        this.addChild(this.soundOff);
        this.addChild(this.cont);
        this.addChild(this.help)
    }
    var p = PauseMenu.prototype = new createjs.Container;
    p.onRollOver = function(e) {
        e.currentTarget.shadow = new createjs.Shadow("#000", 1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOut =
        function(e) {
            this.restart.shadow = null;
            this.backToStart.shadow = null;
            this.soundOn.shadow = null;
            this.cont.shadow = null;
            this.soundOff.shadow = null;
            this.help.shadow = null
        };
    p.init = function() {
        this.soundOn.visible = !mahjong.SoundManager.muted;
        this.soundOff.visible = mahjong.SoundManager.muted
    };
    p.onSoundsOffClick = function() {
        this.soundOn.visible = true;
        this.soundOff.visible = false;
        mahjong.SoundManager.unmute();
        mahjong.Main.instance.setRefresh()
    };
    p.onSoundsOnClick = function() {
        this.soundOff.visible = true;
        this.soundOn.visible =
            false;
        mahjong.SoundManager.mute();
        mahjong.Main.instance.setRefresh()
    };
    mahjong.PauseMenu = PauseMenu
})();
(function() {
    function Piece(type) {
        this.initialize();
        this.type = type;
        this.bitmap = new createjs.Bitmap(mahjong.getAsset("piece_" + type + ".png"));
        this.addChild(this.bitmap);
        this.errorShape = new createjs.Bitmap(mahjong.getAsset("game_piece_error.png"));
        this.errorShape.x = 3;
        this.errorShape.y = 3;
        this.hoverShape = new createjs.Bitmap(mahjong.getAsset("game_piece_hover.png"));
        this.hoverShape.x = 3;
        this.hoverShape.y = 3;
        this.hintShape = new createjs.Bitmap(mahjong.getAsset("game_piece_hint.png"));
        this.hintShape.x = 3;
        this.hintShape.y =
            3;
        this.addEventListener("mouseover", mahjong.utils.proxy(this, this.mouseOver));
        this.addEventListener("mouseout", mahjong.utils.proxy(this, this.mouseOut));
        this.locked = false;
        this.gx = 0;
        this.gy = 0;
        this.hoverShape.visible = false;
        this.errorShape.visible = false;
        this.hintShape.visible = false;
        this.errorShape.alpha = 0;
        this.addChild(this.errorShape);
        this.addChild(this.hintShape);
        this.addChild(this.hoverShape)
    }
    var p = Piece.prototype = new createjs.Container;
    p.cacheUp = function() {
        if (this.parent != null && this.parent.cacheInitDone ==
            true) this.parent.updateCache()
    };
    p.updateType = function(type) {
        this.locked = false;
        this.type = type;
        if (this.contains(this.bitmap)) this.removeChild(this.bitmap);
        if (type != null) {
            this.bitmap = new createjs.Bitmap(mahjong.getAsset("piece_" + type + ".png"));
            this.addChild(this.bitmap);
            this.addChild(this.errorShape);
            this.addChild(this.hintShape);
            this.addChild(this.hoverShape);
            this.alpha = 1;
            this.hoverShape.visible = false
        }
    };
    p.blink = function() {
        this.hintShape.visible = true;
        this.hintShape.alpha = 0;
        var s = this;
        createjs.Tween.get(this.hintShape, {
            onChange: function() {
                s.cacheUp()
            }
        }).to({
            alpha: 1
        }, 400).to({
            alpha: 0
        }, 400).to({
            alpha: 1
        }, 400).to({
            alpha: 0
        }, 400).to({
            alpha: 1
        }, 400).to({
            alpha: 0
        }, 400).call(mahjong.utils.proxy(this, this.onHintBlink))
    };
    p.onHintBlink = function() {
        this.hintShape.visible = false
    };
    p.errorBlink = function() {
        this.errorShape.visible = true;
        this.errorShape.alpha = 1;
        var s = this;
        createjs.Tween.get(this.errorShape, {
            onChange: function() {
                s.cacheUp()
            }
        }).to({
            alpha: 0
        }, 400).call(mahjong.utils.proxy(this, this.errorBlinkComplete))
    };
    p.errorBlinkComplete =
        function() {
            this.errorShape.visible = false;
            this.cacheUp()
        };
    p.mouseOver = function(event) {
        if (!this.locked && mahjong.Main.instance.gameView.enabled) {
            this.hoverShape.visible = true;
            this.cacheUp();
            mahjong.Main.instance.setRefresh()
        }
    };
    p.mouseOut = function(event) {
        if (!this.locked && mahjong.Main.instance.gameView.enabled) {
            this.hoverShape.visible = false;
            this.cacheUp();
            mahjong.Main.instance.setRefresh()
        }
    };
    p.setSelected = function(select) {
        this.alpha = 1;
        createjs.Tween.removeTweens(this);
        this.locked = select;
        this.filters = [];
        this.errorShape.visible = false;
        if (select) this.hoverShape.visible = true;
        else this.hoverShape.visible = false;
        this.cacheUp()
    };
    mahjong.Piece = Piece
})();
(function() {
    (function() {
        function Points() {
            this.points = 0;
            this.currentPoints = 0;
            this.delta = 0;
            this.text = new createjs.Text("99999", "32px mouse_memoirsregular", "#FDE37B");
            this.text.textAlign = "right";
            this.text.textWidth = 100;
            this.text.x = 165;
            this.text.y = 8;
            this.pTitle = new createjs.Text("Score", "32px mouse_memoirsregular", "#FFd300");
            this.pTitle.textAlign = "center";
            this.pTitle.textWidth = 100;
            this.pTitle.x = 27;
            this.pTitle.y = 8;
            this.level = new createjs.Text("0", "32px mouse_memoirsregular", "#FDE37B");
            this.level.textAlign =
                "right";
            this.level.textWidth = 100;
            this.level.x = -75;
            this.level.y = 8;
            this.lTitle = new createjs.Text("Level", "32px mouse_memoirsregular", "#FFd300");
            this.lTitle.textAlign = "center";
            this.lTitle.textWidth = 100;
            this.lTitle.x = -143;
            this.lTitle.y = 8;
            mahjong.TextAlign.align(this.text);
            mahjong.TextAlign.align(this.pTitle);
            mahjong.TextAlign.align(this.level);
            mahjong.TextAlign.align(this.lTitle);
            this.addChild(this.text);
            this.addChild(this.pTitle);
            this.addChild(this.level);
            this.addChild(this.lTitle)
        }
        var p = Points.prototype =
            new createjs.Container;
        p.reset = function() {
            this.level.text = "1";
            this.points = 0;
            this.currentPoints = 0;
            this.delta = 0;
            this.text.text = "0"
        };
        p.addImmediatePoints = function(change) {
            this.points += change;
            this.currentPoints += change;
            this.text.text = this.points
        };
        p.addPoints = function(change) {
            this.points += change;
            this.delta = Math.ceil(change / 60);
            this.delta += this.delta % 3;
            if (this.points < 0) this.points = 0;
            clearInterval(this.intervalId);
            this.intervalId = setInterval(mahjong.utils.proxy(this, this.onTick), 40)
        };
        p.onTick = function() {
            this.currentPoints +=
                this.delta;
            if (this.currentPoints >= this.points) {
                this.currentPoints = this.points;
                clearInterval(this.intervalId)
            }
            this.text.text = this.currentPoints
        };
        mahjong.Points = Points
    })()
})();
(function() {
    function StartButton() {
        this.initialize();
        this.start = new createjs.Bitmap(mahjong.getAsset("game_menu_start.png"));
        this.cursor = "pointer";
        this.addChild(this.start);
        this.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut))
    }
    var p = StartButton.prototype = new createjs.Container;
    p.onRollOut = function() {
        this.shadow = null;
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOver = function() {
        this.shadow = new createjs.Shadow("#000",
            1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    mahjong.StartButton = StartButton
})();
(function() {
    function StartView() {
        this.initialize();
        this.bg = new createjs.Bitmap(mahjong.getAsset("tausta_01.jpg"));
        this.startButton = new mahjong.StartButton;
        this.startButton.x = 410;
        this.startButton.y = 580;
        this.highscore = new mahjong.Highscore;
        this.highscore.x = (1024 - this.highscore.bgGraphic.image.width) / 2;
        this.highscore.y = 0;
        this.logo = new createjs.Bitmap(mahjong.getAsset("logo.png"));
        this.logo.x = 227;
        this.logo.y = 207;
        this.soundOn = new createjs.Bitmap(mahjong.getAsset("start_sound_on.png"));
        this.soundOn.x = 376;
        this.soundOn.y = 580;
        this.soundOn.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.soundOn.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.soundOn.cursor = "pointer";
        this.soundOff = new createjs.Bitmap(mahjong.getAsset("start_sound_off.png"));
        this.soundOff.x = 376;
        this.soundOff.y = 580;
        this.soundOff.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.soundOff.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.soundOff.cursor = "pointer";
        this.highscorePopup = new mahjong.HighScorePopup;
        this.highscorePopup.x = (1024 - this.highscorePopup.bg.image.width) / 2;
        this.highscorePopup.y = (768 - this.highscorePopup.bg.image.height) / 2 - 30;
        this.highscorePopup.close.addEventListener("click", mahjong.utils.proxy(this, this.onHighScoreClose));
        this.highscorePopup.visible = false;
        this.highscore.list = this.highscorePopup;
        this.addChild(this.bg);
        this.addChild(this.logo);
        this.addChild(this.highscore);
        this.addChild(this.startButton);
        this.addChild(this.highscorePopup);
        this.soundOff.visible = false;
        this.soundOff.addEventListener("click", mahjong.utils.proxy(this, this.onSoundsOffClick));
        this.soundOn.addEventListener("click", mahjong.utils.proxy(this, this.onSoundsOnClick));
        this.startButton.addEventListener("click", mahjong.utils.proxy(this, this.onStartClick))
    }
    var p = StartView.prototype = new createjs.Container;
    p.onHighScoreClose = function() {
        this.highscorePopup.visible = false;
        mahjong.Main.instance.setRefresh()
    };
    p.onHighScoreOpen = function() {
        this.highscorePopup.visible = true;
        mahjong.Main.instance.setRefresh()
    };
    p.prepare = function() {
        this.soundOn.visible = !mahjong.SoundManager.muted;
        this.soundOff.visible = mahjong.SoundManager.muted
    };
    p.onSoundsOffClick = function() {
        this.soundOn.visible = true;
        this.soundOff.visible = false;
        mahjong.SoundManager.unmute();
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOver = function(e) {
        e.currentTarget.shadow = new createjs.Shadow("#000", 1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOut = function(e) {
        this.soundOn.shadow = null;
        this.soundOff.shadow = null;
        mahjong.Main.instance.setRefresh()
    };
    p.onSoundsOnClick =
        function() {
            this.soundOff.visible = true;
            this.soundOn.visible = false;
            mahjong.SoundManager.mute();
            mahjong.Main.instance.setRefresh()
        };
    p.resize = function(size) {
        var s = size.width / 1024;
        if (s > size.height / 768) s = size.height / 768;
        this.scaleX = this.scaleY = s;
        this.width = this.bg.image.width * s;
        this.height = this.bg.image.height * s
    };
    p.updateHighscore = function() {
        this.highscore.addEventListener("click", mahjong.utils.proxy(this, this.onHighScoreOpen));
        this.highscore.updateScore()
    };
    p.onStartClick = function(event) {
        this.onStart()
    };
    mahjong.StartView = StartView
})();
(function() {
    function StoryPopup() {
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_default.png"));
        var bg = this.bg;
        bg.x = 1;
        this.continueBtn = new createjs.Bitmap(mahjong.getAsset("game_next_level_btn.png"));
        this.continueBtn.x = 380;
        this.continueBtn.y = 409;
        this.continueBtn.addEventListener("mouseover", mahjong.utils.proxy(this, this.onRollOver));
        this.continueBtn.addEventListener("mouseout", mahjong.utils.proxy(this, this.onRollOut));
        this.continueBtn.cursor = "pointer";
        this.addChild(this.bg);
        this.story = new createjs.Text("Lorem ipsum dolor sit amet",
            "40px mouse_memoirsregular", "#FED93E");
        this.story.shadow = new createjs.Shadow("rgba(61,18,9,0.9)", 5, 5, 0);
        this.story.textAlign = "left";
        this.story.lineWidth = 400;
        this.story.lineHeight = 45;
        this.story.textBaseline = "middle";
        this.story.x = 335;
        this.story.y = 100;
        this.addChild(this.story);
        this.addChild(this.continueBtn);
        mahjong.TextAlign.align(this.story)
    }
    var p = StoryPopup.prototype = new createjs.Container;
    p.prepare = function(level, win, lose) {
        if (level == "1") this.story.text = "Ni Hao, upcoming Mahjong Champion! To the way up to be the best you have to take a journey. This will be the first Level to complete.";
        else if (level == "2") this.story.text = "Good Start! But now you need to fight against the Rat in Level 2.";
        else if (level == "3") this.story.text = "You did it! Now you got to face the Monkey. Have fun against him but hurry up it won't be easy.";
        else if (level == "4") this.story.text = "Outstanding! It's getting more dangerous now. His home is the jungle. Prepare for your next enemy: The Tiger!";
        else if (level == "5") this.story.text = "Unbelievable! Now your last enemy will compete with you. The mighty Dragon! Try to beat him in level 5.";
        if (win) this.story.text = "You are truly the champion of Mahjong. Be proud of yourself!";
        else if (lose) this.story.text = ["You did a good job but you lost the Battle. Try again if you feel well for another try.",
            "You Lose! What else to say? One mans loss is another man's gain.", "Well, well, you lost. No time to be sad, you will do better next time.", "Better luck next time! Try to avoid some mistakes you did last time."
        ][Math.floor(Math.random() * 4)];
        var height = this.story.getMeasuredHeight();
        this.story.y = 120 + (300 - height) / 2
    };
    p.onRollOver = function(e) {
        e.currentTarget.shadow = new createjs.Shadow("#000", 1, 1, 20);
        mahjong.Main.instance.setRefresh()
    };
    p.onRollOut = function(e) {
        this.continueBtn.shadow = null;
        mahjong.Main.instance.setRefresh();
        0
    };
    mahjong.StoryPopup = StoryPopup
})();
(function() {
    function Timer() {
        this.initialize();
        this.bg = new createjs.Bitmap(mahjong.getAsset("game_time_bar_bg.png"));
        this.bar = new createjs.Bitmap(mahjong.getAsset("game_timer_bar.png"));
        this.barMask = new createjs.Shape;
        this.barMask.graphics.beginFill("#ff0000");
        this.barMask.graphics.drawRoundRect(0, 0, 531, 49, 8);
        this.addChild(this.bg);
        this.addChild(this.bar);
        this.bar.x = 9;
        this.bar.y = 8;
        this.bar.scaleX = 1;
        this.timeToAdd = 0
    }
    var p = Timer.prototype = new createjs.Container;
    p.clearTimer = function() {
        if (this.timerId !=
            null) window.clearInterval(this.timerId)
    };
    p.startTimer = function() {
        this.startTime = Date.now();
        this.timerId = window.setInterval(mahjong.utils.proxy(this, this.onTick), 8)
    };
    p.stopTimer = function() {
        this.updateTick();
        this.clearTimer()
    };
    p.addTime = function(time) {
        this.timeToAdd += time
    };
    p.resetTimer = function(maxtime) {
        this.timeToAdd = 0;
        this.curtime = 0;
        this.maxtime = maxtime+180000;
		console.log(maxtime);
        this.startTime = Date.now();
        this.updateTick()
    };
	
    p.getTimeLeft = function() {
        return this.maxtime - this.curtime
    };
    p.onTick = function() {
        this.updateTick();
        if (this.curtime >=
            this.maxtime && this.timeToAdd == 0) {
            this.clearTimer();
            this.timerEnded()
        }
    };
    p.updateTick = function() {
        this.curtime += Date.now() - this.startTime;
        var delta = 0;
        if (this.timeToAdd > 0) {
            delta = this.timeToAdd > 5000 ? 5000 : this.timeToAdd;
            this.timeToAdd -= delta;
            if (this.timeToAdd < 0) this.timeToAdd = 0
        }
        this.curtime -= delta;
        if (this.curtime < 0) {
            this.timeToAdd = 0;
            this.curtime = 0
        }
        this.startTime = Date.now();
        var scale = 1 - this.curtime / this.maxtime;
        scale = scale > 1 ? 1 : scale < 0 ? 0 : scale;
        this.bar.scaleX = scale;
        mahjong.Main.instance.setRefresh()
    };
    p.prepareLevelEnd =
        function() {
            this.currentPos = this.bar.scaleX
        };
    p.updateBarLevelEnd = function(delta) {
        this.bar.scaleX = this.currentPos * (1 - delta)
    };
    mahjong.Timer = Timer
})();
(function() {
    function Facebook() {
        console.log("fb built")
    }
    var p = Facebook.prototype;
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "";
        fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "facebook-jssdk");
    window.fbAsyncInit = function() {
        FB.init({
            appId: "",
            xfbml: true,
            cookie: true,
            version: "v2.1"
        });
        FB.Event.subscribe("auth.login", Facebook.loginChange)
    };
    p.init = function() {
        console.log("Calling fb login");
        $(".fb-login-button").css("display", "");
        FB.getLoginStatus(mahjong.utils.proxy(this, this.handleLoginStatus))
    };
    Facebook.loginChange = function(response) {
        console.log("loginChange");
        console.log(response);
        mahjong.Main.instance.facebook.handleLoginStatus(response)
    };
    p.hideFb = function() {
        $(".fb-login-button").css("display", "none")
    };
    p.showFb = function() {
        if (!this.ready) $(".fb-login-button").css("display", "")
    };
    p.handleLoginStatus = function(response) {
        console.log("get login status");
        console.log(response);
        var scope =
            this;
        if (response.status == "connected") {
            $(".fb-login-button").css("display", "none");
            FB.api("/me", function(responseapi) {
                $(".fb-login-button").css("display", "none");
                scope.ready = true;
                console.log(responseapi.first_name);
                console.log(responseapi.id);
                scope.onFbConnectOk(responseapi.first_name, responseapi.id)
            })
        } else console.log("Facebook login not found")
    };
    p.checkLoginState = function() {
        FB.getLoginStatus(mahjong.utils.proxy(this, this.handleLoginStatus))
    };
    window.checkLoginState = p.checkLoginState;
    mahjong.Facebook =
        Facebook
})();
(function() {
    function Board() {
        this.GRID_WIDTH = 20;
        this.GRID_HEIGHT = 9;
        this.level1 = ["xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "                    ", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx"];
        this.level2 = ["xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx ", "xxxx xxxx xxxx xxxx "];
        this.level3 = ["                    ", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx", "xxxxxx xxxxxx xxxxxx"];
        this.level4 = [" xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  ", " xxxxxxxx xxxxxxxx  "];
        this.level5 = ["  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  ",
            "  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  ", "  xxxxxxxxxxxxxxxx  "
        ]
    }
    var p = Board.prototype;
    p.init = function(level) {
        this.level = level;
        var piecegen = new mahjong.PieceGenerator;
        var pieces = piecegen.createPieces(level);
        this.pieces = [];
        this.grid = [];
        this.cacheNode1 = null;
        this.cacheNode2 = null;
        var levelset = [this.level1, this.level2, this.level3, this.level4, this.level5][level - 1];
        var piecepick = 0;
        for (var i =
                0; i < this.GRID_HEIGHT + 2; i++) {
            var ar = [];
            for (var j = 0; j < this.GRID_WIDTH + 2; j++)
                if (i == 0 || i == this.GRID_HEIGHT + 1 || j == 0 || j == this.GRID_WIDTH + 1) ar.push(null);
                else if (levelset[i - 1].charAt(j - 1) != "x") {
                ar.push(null);
                this.pieces.push(null)
            } else if (piecepick >= pieces.length) {
                ar.push(null);
                this.pieces.push(null)
            } else {
                ar.push({
                    type: pieces[piecepick],
                    piece: null
                });
                this.pieces.push(pieces[piecepick]);
                piecepick++
            }
            this.grid[i] = ar
        }
    };
    p.canOpen = function(p1, p2) {
        var node = this.findNode(p1, p2, 0, 2);
        return node
    };
    p.getHint = function() {
        return [this.cacheNode1,
            this.cacheNode2
        ]
    };
    p.removePiece = function(piece) {
        this.pieces[piece.gx + piece.gy * this.GRID_WIDTH] = null;
        this.grid[piece.gy + 1][piece.gx + 1] = null;
        if (this.cacheNode1 == piece) this.cacheNode1 = null;
        if (this.cacheNode2 == piece) this.cacheNode2 = null
    };
    p.findNode = function(startPiece, endPiece, paint, angles) {
        var search = [new Node(startPiece.gx + 1, startPiece.gy + 1, null, 0, paint)];
        var resultNode = null;
        var results = [];
        var first = true;
        var begin = search[0];
        var target = endPiece;
        var opAmount = 0;
        while (search.length > 0) {
            opAmount++;
            var s =
                search.pop();
            var fromDirection = s.from == null ? "" : s.x == s.from.x ? "y" : "x";
            if (s.from == null) s.from = begin;
            s.count = s.from.count + 1;
            var left = s.x - 1 >= 0 ? new Node(s.x - 1, s.y, s, s.cost, 0) : null;
            var right = s.x + 1 < this.GRID_WIDTH + 2 ? new Node(s.x + 1, s.y, s, s.cost, 0) : null;
            var top = s.y - 1 >= 0 ? new Node(s.x, s.y - 1, s, s.cost, 0) : null;
            var bottom = s.y + 1 < this.GRID_HEIGHT + 2 ? new Node(s.x, s.y + 1, s, s.cost, 0) : null;
            if (this.grid[s.y][s.x] != null && this.grid[s.y][s.x].piece == target) results.push(s);
            else {
                if (left != null && left.x != s.from.x && (this.grid[left.y][left.x] ==
                        null || this.grid[left.y][left.x].piece == target)) {
                    if (fromDirection == "y") left.cost++;
                    if (left.cost <= angles) search.push(left)
                }
                if (right != null && right.x != s.from.x && (this.grid[right.y][right.x] == null || this.grid[right.y][right.x].piece == target)) {
                    if (fromDirection == "y") right.cost++;
                    if (right.cost <= angles) search.push(right)
                }
                if (top != null && top.y != s.from.y && (this.grid[top.y][top.x] == null || this.grid[top.y][top.x].piece == target)) {
                    if (fromDirection == "x") top.cost++;
                    if (top.cost <= angles) search.push(top)
                }
                if (bottom != null &&
                    bottom.y != s.from.y && (this.grid[bottom.y][bottom.x] == null || this.grid[bottom.y][bottom.x].piece == target)) {
                    if (fromDirection == "x") bottom.cost++;
                    if (bottom.cost <= angles) search.push(bottom)
                }
            }
        }
        results.sort(function(a, b) {
            return a.cost - b.cost == 0 ? a.count - b.count : a.cost - b.cost
        });
        var resultNode = results.length > 0 ? results[0] : null;
        return resultNode
    };
    p.isEmpty = function() {
        for (var i = 1; i <= this.GRID_HEIGHT; i++)
            for (var j = 1; j <= this.GRID_WIDTH; j++) {
                var node = this.grid[i][j];
                if (node && node.piece) return false
            }
        return true
    };
    p.countAvailableCombinations =
        function(angles) {
            if (this.cacheNode1 != null && this.cacheNode2 != null) return true;
            for (var i = 1; i <= this.GRID_HEIGHT; i++)
                for (var j = 1; j <= this.GRID_WIDTH; j++) {
                    var node = this.grid[i][j];
                    if (node != null && node.piece != null)
                        for (var k = 1; k <= this.GRID_HEIGHT; k++)
                            for (var o = 1; o <= this.GRID_WIDTH; o++) {
                                var compare = this.grid[k][o];
                                if (compare != null && compare.piece != null && compare != node && compare.piece.type == node.piece.type) {
                                    var resultNode = this.findNode(node.piece, compare.piece, 0, angles);
                                    if (resultNode != null) {
                                        this.cacheNode1 = node.piece;
                                        this.cacheNode2 = compare.piece;
                                        return true
                                    }
                                }
                            }
                }
            return false
        };
    p.shuffle = function() {
        this.cacheNode1 = null;
        this.cacheNode2 = null;
        var nextPieces = [];
        var levelset = [this.level1, this.level2, this.level3, this.level4, this.level5][this.level - 1];
        var rndIndexes = [];
        for (var i = 0; i < this.pieces.length; i++)
            if (levelset[Math.floor(i / levelset[0].length)].charAt(i % levelset[0].length) == "x") rndIndexes.push(i);
        for (var i = 1; i <= this.GRID_HEIGHT; i++)
            for (var j = 1; j <= this.GRID_WIDTH; j++)
                if (i == 0 || i == this.GRID_HEIGHT + 1 || j == 0 || j == this.GRID_WIDTH +
                    1);
                else {
                    var node = this.grid[i][j];
                    if (levelset[i - 1].charAt(j - 1) == "x") {
                        var rnd = Math.floor(Math.random() * rndIndexes.length);
                        var index = rndIndexes[rnd];
                        rndIndexes.splice(rnd, 1);
                        if (this.pieces[index] != null) node = {
                            type: this.pieces[index],
                            piece: null
                        };
                        else node = null;
                        this.grid[i][j] = node;
                        nextPieces.push(this.pieces[index])
                    } else nextPieces.push(null)
                }
        this.pieces = nextPieces
    };

    function Node(x, y, from, cost, paint) {
        this.x = x;
        this.y = y;
        this.from = from;
        this.cost = cost;
        this.paint = paint;
        this.count = 0
    }
    mahjong.Board = Board
})();
(function() {
    function PelikoneApi() {}
    var p = PelikoneApi.prototype;
    PelikoneApi.submitHighscore = function(developerId, developerSecret, gameKey, scoreNumeric, onload, scoreDisplay, scoreData, userName, email, fbid) {
        console.log("MD5 TEST " + md5_vm_test());
        var url = window.MAHJONG_CONFIG.host + "/api/game/" + developerId + "/" + gameKey + "/highscore/daily";
        var calcUrl = "/api/game/" + developerId + "/" + gameKey + "/highscore/daily";
        method = "post";
        var xml = '<highscore fbid="' + fbid + '" score="' + scoreNumeric + '" user="' + userName + '" email="' +
            email + '"><display>' + scoreDisplay + "</display><data>" + scoreData + "</data></highscore>";
        console.log("send xml");
        console.log(xml);
        $.ajax({
            url: url,
            data: xml,
            type: "post",
            processData: false,
            contentType: "text/xml",
            beforeSend: function(data) {
                console.log("callin add rest headers");
                PelikoneApi.addRESTHeaders(data, xml, developerId, developerSecret, calcUrl, method)
            }
        }).done(function(data) {
            onload(PelikoneApi.parseHighscoreXML(data), PelikoneApi.parsePositionXML(data))
        }).fail(function(data) {
            onload(null)
        })
    };
    PelikoneApi.parseHighscoreXML =
        function(data) {
            if (data == null) return null;
            if (typeof data === "string") data = $.parseXML(data);
            xml = $(data);
            var highscores = xml.find("highscore");
            var count = highscores.length;
            var scores = [];
            for (var i = 0; i < count; i++) {
                var score = highscores.eq(i);
                scores.push({
                    user: score.attr("user"),
                    score: score.attr("score"),
                    display: score.find("display").text(),
                    data: score.find("data")[0]
                })
            }
            return scores
        };
    PelikoneApi.parsePositionXML = function(data) {
        if (data == null) return null;
        if (typeof data === "string") data = $.parseXML(data);
        xml = $(data);
        console.log(xml);
        var position = xml.find("highscores").attr("position");
        console.log("parse pos " + position);
        if (isNaN(position)) return -1;
        else return position
    };
    PelikoneApi.getHighscores = function(developerId, developerSecret, gameKey, onload) {
        var url = window.MAHJONG_CONFIG.host + "/api/game/" + developerId + "/" + gameKey + "/highscore/daily";
        var calcUrl = "/api/game/" + developerId + "/" + gameKey + "/highscore/daily";
        method = "get";
        var xml = "";
        console.log("send xml");
        console.log(xml);
        $.ajax({
            url: url,
            type: "get",
            beforeSend: function(data) {
                console.log("callin add rest headers");
                PelikoneApi.addRESTHeaders(data, xml, developerId, developerSecret, calcUrl, method)
            }
        }).done(function(data) {
            onload(PelikoneApi.parseHighscoreXML(data))
        }).fail(function(data) {
            onload(null)
        })
    };
    PelikoneApi.addRESTHeaders = function(request, body, developerId, developerSecret, url, method) {
        var md5 = calculate(body);
        var ctype = "text/xml";
        var now = new Date;
        var date = now.getTime();
        var macsrc = method + "\n" + md5 + "\n" + ctype + "\n" + date + "\n" + url;
        var mac = b64_hmac_md5(developerSecret, macsrc);
        request.setRequestHeader("X-PKGA-Method",
            method);
        request.setRequestHeader("X-PKGA-Content-MD5", md5);
        request.setRequestHeader("X-PKGA-Content-Type", ctype);
        request.setRequestHeader("X-PKGA-Date", date);
        request.setRequestHeader("X-PKGA-Authorization", "PKGA " + developerId.toString() + ":" + mac)
    };
    window.PelikoneApi = PelikoneApi;
    var hexcase = 0;
    var b64pad = "=";
    var chrsz = 8;

    function MD5() {}

    function calculate(s) {
        return hex_md5(s)
    }

    function hex_md5(s) {
        return binl2hex(core_md5(str2binl(s), s.length * chrsz))
    }

    function b64_md5(s) {
        return binl2b64(core_md5(str2binl(s),
            s.length * chrsz))
    }

    function str_md5(s) {
        return binl2str(core_md5(str2binl(s), s.length * chrsz))
    }

    function hex_hmac_md5(key, data) {
        return binl2hex(core_hmac_md5(key, data))
    }

    function b64_hmac_md5(key, data) {
        return binl2b64(core_hmac_md5(key, data))
    }

    function str_hmac_md5(key, data) {
        return binl2str(core_hmac_md5(key, data))
    }

    function md5_vm_test() {
        return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
    }

    function core_md5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;
            a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c,
                d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b,
                c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a,
                b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
            d = md5_ii(d,
                a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c =
                md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd)
        }
        return new Array(a, b, c, d)
    }

    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
    }

    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn(b & c | ~b & d, a, b, x, s, t)
    }

    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn(b & d | c & ~d, a, b, x, s, t)
    }

    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t)
    }

    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^
            (b | ~d), a, b, x, s, t)
    }

    function core_hmac_md5(key, data) {
        var bkey = str2binl(key);
        if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
        var ipad = new Array(16),
            opad = new Array(16);
        for (var i = 0; i < 16; i++) {
            ipad[i] = bkey[i] ^ 909522486;
            opad[i] = bkey[i] ^ 1549556828
        }
        var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
        return core_md5(opad.concat(hash), 512 + 128)
    }

    function safe_add(x, y) {
        var lsw = (x & 65535) + (y & 65535);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535
    }

    function bit_rol(num, cnt) {
        return num <<
            cnt | num >>> 32 - cnt
    }

    function str2binl(str) {
        var bin = new Array;
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
        return bin
    }

    function binl2str(bin) {
        var str = "";
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < bin.length * 32; i += chrsz) str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
        return str
    }

    function binl2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) str += hex_tab.charAt(binarray[i >> 2] >> i %
            4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
        return str
    }

    function binl2b64(binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i += 3) {
            var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 255) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 255) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 255;
            for (var j = 0; j < 4; j++)
                if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;
                else str += tab.charAt(triplet >> 6 * (3 - j) & 63)
        }
        return str
    }
})();
(function() {
    function PieceGenerator() {
        this.pieceBaseSet_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 41, 42, 43, 44, 51, 52, 53, 54, 51, 52, 53, 54];
        this.pieceBaseSet_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3,
            4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 41, 42, 43, 44, 51, 52, 53, 54, 51, 52, 53, 54
        ];
        this.pieceBaseSet_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 41, 42, 43, 44, 51, 52, 53, 54, 51, 52, 53, 54
        ];
        this.pieceBaseSet_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 41, 42, 43, 44, 51, 52, 53, 54, 51, 52, 53, 54
        ];
        this.pieceBaseSet_5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 41, 42,
            43, 44, 51, 52, 53, 54, 51, 52, 53, 54
        ]
    }
    var p = PieceGenerator.prototype;
    p.createPieces = function(level) {
        var tiles = [];
        var pairsToAdd = 0;
        var availablePairs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29];
        if (level == 1) {
            pairsToAdd = 3;
            tiles = tiles.concat(this.pieceBaseSet_1)
        } else if (level == 2) {
            pairsToAdd = 3;
            tiles = tiles.concat(this.pieceBaseSet_2)
        } else if (level == 3) {
            pairsToAdd = 3;
            tiles = tiles.concat(this.pieceBaseSet_3)
        } else if (level == 4) {
            pairsToAdd = 3;
            tiles = tiles.concat(this.pieceBaseSet_4)
        } else if (level ==
            5) {
            pairsToAdd = 3;
            tiles = tiles.concat(this.pieceBaseSet_5)
        }
        for (var j = 0; j < pairsToAdd; j++) {
            var rnd = Math.floor(Math.random() * availablePairs.length);
            tiles.push(availablePairs[rnd]);
            tiles.push(availablePairs[rnd]);
            availablePairs.splice(rnd, 1)
        }
        var result = [];
        while (tiles.length > 0) {
            var rnd = Math.floor(Math.random() * tiles.length);
            result.push(tiles[rnd]);
            tiles.splice(rnd, 1)
        }
        return result
    };
    mahjong.PieceGenerator = PieceGenerator
})();
(function() {
    function Class() {}
    var p = Class.prototype;
    mahjong.Class = Class
})();
(function() {
    var BrowserDetect = {};
    var browser;
    var version;
    var OS;
    var versionSearchString;
    var dataBrowser = [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }, {
        prop: navigator.vendor,
        identity: "Opera",
        versionSearch: "Version"
    }];
    var dataOS = [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }];
    BrowserDetect.init = function() {
        browser = searchString(dataBrowser);
        var versionUserAgentResult = searchVersion(navigator.userAgent);
        if (versionUserAgentResult == null) {
            var versionAppResult = searchVersion(navigator.appVersion);
            if (versionAppResult == null) version = "An unkonwn version";
            else version = versionAppResult
        } else version = versionUserAgentResult;
        var dataOsFind = searchString(dataOS);
        OS = dataOsFind == null ? "an unkonwn OS" : dataOsFind;
        BrowserDetect.browser = browser;
        BrowserDetect.version = version;
        BrowserDetect.OS = OS
    };

    function searchString(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            var versionResult = data[i].versionSearch;
            versionSearchString = versionResult == null ? data[i].identity : versionResult;
            if (dataString != null) {
                if (dataString.indexOf(data[i].subString) !=
                    -1) return data[i].identity
            } else if (dataProp != null) return data[i].identity
        }
        return null
    }

    function searchVersion(dataString) {
        var index = dataString.indexOf(versionSearchString);
        if (index == -1) return null;
        return Number(dataString.substring(index + versionSearchString.length + 1))
    }
    mahjong.BrowserDetect = BrowserDetect
})();
(function() {
    function SoundManager() {}
    var p = SoundManager.prototype;
    SoundManager.COMBINE = "combine";
    SoundManager.ERROR = "error";
    SoundManager.HINT = "hint";
    SoundManager.SELECT = "select";
    SoundManager.TIMER_END = "timerEnd";
    SoundManager.WIN = "win";
    SoundManager.GAME_START = "gamestart";
    SoundManager.LEVEL_START = "levelstart";
    SoundManager.init = function() {
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.addEventListener("fileload", mahjong.utils.proxy(SoundManager, this.loadHandler));
        createjs.Sound.registerSound("sounds/pair_correct.ogg",
            SoundManager.COMBINE);
        createjs.Sound.registerSound("sounds/pair_wrong.ogg", SoundManager.ERROR);
        createjs.Sound.registerSound("sounds/hint.ogg", SoundManager.HINT);
        createjs.Sound.registerSound("sounds/click.ogg", SoundManager.SELECT);
        createjs.Sound.registerSound("sounds/level_lost.ogg", SoundManager.TIMER_END);
        createjs.Sound.registerSound("sounds/level_won.ogg", SoundManager.WIN);
        createjs.Sound.registerSound("sounds/level_start.ogg", SoundManager.LEVEL_START);
        createjs.Sound.registerSound("sounds/game_start.ogg",
            SoundManager.GAME_START)
    };
    SoundManager.loadHandler = function() {};
    SoundManager.mute = function() {
        this.muted = true;
        createjs.Sound.setMute(true)
    };
    SoundManager.unmute = function() {
        this.muted = false;
        createjs.Sound.setMute(false)
    };
    SoundManager.playSound = function(id) {
        if (!this.muted) createjs.Sound.play(id)
    };
    mahjong.SoundManager = SoundManager
})();
(function() {
    var TextAlign = {};
    TextAlign.align = function(text, doNotCache) {
        if (mahjong.BrowserDetect.browser == "Firefox") text.y += 6;
        else if (mahjong.BrowserDetect.browser == "Explorer") text.y += 1;
        else if (mahjong.BrowserDetect.browser == "Safari") text.y -= 1;
        if (!doNotCache) TextAlign.cacheText(text)
    };
    TextAlign.cacheText = function(text) {};
    mahjong.TextAlign = TextAlign
})();
window.mahjong = window.mahjong || {};
window.mahjong.utils = window.mahjong.utils || {};
(function() {
    window.mahjong.utils.proxy = function(scope, method) {
        var aArgs = Array.prototype.slice.call(arguments, 2);
        return function() {
            return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs))
        }
    }
})();