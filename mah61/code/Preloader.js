Base.Preloader=function(e){this.ready=!1,this.State=0},Base.Preloader.prototype={preload:function(){Base.clear(),Base.firstThings(),this.load.onLoadComplete.add(this.loadComplete,this),this.State=0,this.loadedSave=!1,this.BgImg=null,this.AtlasLoadedFlag=!1,this.GroupBase=this.add.group(),this.Group0=this.make.group(),this.GroupBase.add(this.Group0),this.Group0.scale.set(Base.Scale),this.TimerFunc=function(){this.checkScreenChange(),this.load.isLoading&&sdkHandler.trigger("loading.update",{progressPercentage:this.load.progress},this),!this.AtlasLoadedFlag&&this.game.cache.checkImageKey("loaderatlas")&&(this.AtlasLoadedFlag=!0,this.BgImg=this.make.image(Base.Xc,Base.Yc,"loaderatlas","bgsmall.png"),null!=this.BgImg&&this.BgImg.scale.set(Base.WidthGame/200,Base.HeightGame/200),this.BgImg.anchor.setTo(.5),this.Group0.add(this.BgImg))},this.TimerEvt=this.game.time.events.loop(30,this.TimerFunc,this),this.load.json("language","lang/lang.json"),this.load.bitmapFont("GoldFont","fonts/gold.png","fonts/gold.fnt"),this.game.device.firefox?(this.load.audio("music","audioogg/music.ogg"),this.load.audio("button","audioogg/button.ogg"),this.load.audio("merge0","audioogg/merge0.ogg"),this.load.audio("merge1","audioogg/merge1.ogg"),this.load.audio("merge2","audioogg/merge2.ogg"),this.load.audio("trow","audioogg/trow.ogg"),this.load.audio("attach","audioogg/attach.ogg"),this.load.audio("lose","audioogg/lose.ogg"),this.load.audio("window","audioogg/window_swoosh.ogg"),this.load.audio("win","audioogg/win.ogg"),this.load.audio("coin","audioogg/coin.ogg"),this.load.audio("prize","audioogg/prize.ogg"),this.load.audio("shake","audioogg/shake_boom.ogg"),this.load.audio("frenzy","audioogg/frenzy.ogg"),this.load.audio("count","audioogg/count.ogg")):(this.load.audio("music","audiomp3/music.mp3"),this.load.audio("button","audiomp3/button.mp3"),this.load.audio("merge0","audiomp3/merge0.mp3"),this.load.audio("merge1","audiomp3/merge1.mp3"),this.load.audio("merge2","audiomp3/merge2.mp3"),this.load.audio("trow","audiomp3/trow.mp3"),this.load.audio("attach","audiomp3/attach.mp3"),this.load.audio("lose","audiomp3/lose.mp3"),this.load.audio("window","audiomp3/window_swoosh.mp3"),this.load.audio("win","audiomp3/win.mp3"),this.load.audio("coin","audiomp3/coin.mp3"),this.load.audio("prize","audiomp3/prize.mp3"),this.load.audio("shake","audiomp3/shake_boom.mp3"),this.load.audio("frenzy","audiomp3/frenzy.mp3"),this.load.audio("count","audiomp3/count.mp3")),Base.MobileFlag&&this.load.image("orient","images/rotateDevice.png"),this.load.atlas("gfx","images/gfx.png","images/gfx.json"),this.load.atlas("atlas","images/atlas.png","images/atlas.json"),sdkHandler.trigger("restore",{key:"merge01",callback:function(e,a){e||null==a?(this.loadedSave=!0,Base.Saves={highscore:0,music:!0,sound:!0,coins:0,help:!0},Base.Saves.coins=100):(this.loadedSave=!0,Base.Saves=JSON.parse(a))}},this)},loadComplete:function(){},create:function(){},checkScreenChange:function(){var e=Math.max(window.innerWidth,document.documentElement.clientWidth);Math.max(window.innerHeight,document.documentElement.clientHeight)==Base.HeightWnd&&e==Base.WidthWnd||Base.makeScreenAdjust(this.game)},AdjustSize:function(){},freezeGameGlobal:function(){Base.FreezeFlag||(this.game.input.enabled=!1,Base.FreezeFlag=!0,Base.MusicFlag&&this.MuteMusic(!0))},unFreezeGameGlobal:function(){Base.FreezeFlag&&(Base.sgFreezeFlag||(this.game.input.enabled=!0,Base.FreezeFlag=!1,Base.MusicFlag&&this.MuteMusic(!1)))},freezeGame:function(){Base.sgFreezeFlag=!0,this.freezeGameGlobal()},unfreezeGame:function(){Base.sgFreezeFlag=!1,this.unFreezeGameGlobal()},runGame:function(){},getScore:function(){},update:function(){if(0===this.State)this.loadedSave&&this.cache.isSoundDecoded("button")&&this.cache.isSoundDecoded("merge0")&&this.cache.isSoundDecoded("trow")&&this.cache.isSoundDecoded("attach")&&this.cache.isSoundDecoded("music")&&this.game.cache.checkImageKey("atlas")&&this.game.cache.checkImageKey("gfx")&&this.game.cache.checkBitmapFontKey("GoldFont")&&0==this.ready&&(this.ready=!0,this.State=1,sdkHandler.trigger("loading.completed",{callback:function(e,a){e||(this.game.time.events.remove(this.TimerEvt),Base.TimeStartGame=this.game.time.now,this.state.start("Game"))}},this))}};