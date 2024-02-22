CField=function(s,t,i){this.Papa=s,this.Threads=t,this.gameGroup=i,this.gameTopGroup=this.Papa.GameTopGroup,this.ActiveFlag=!1,this.Buttons=[],this.Imgs=[],this.Texts=[],this.Xc=0,this.Yc=0,this.HandImg=null,this.ImgsNum=0,this.TextsNum=0,this.ButtonsNum=0,this.ShiftX=0,this.ShiftY=0,this.DistCellsMax=0,this.Alpha=1,this.Scale=1,this.Pads=[],this.Pushers=[],this.PushersNum=0,this.PusherLinesNum=0,this.ChooseTypes=[],this.CellsNum=[],this.Cells=[],this.Flys=[],this.FlysNum=0,this.FlysDist=0,this.MatchesTemp=[],this.MatchesTempNum=0,this.Matches=[],this.MatchesNums=[],this.MatchesNum=0,this.HardEasy=[{hard:.3,easy:.3},{hard:.2,easy:.2},{hard:0,easy:.5},{hard:.5,easy:0},{hard:.4,easy:.2}],this.HardEasyIndex=0,this.HardEasyCntr=0,this.FishChooseRange=6,this.FishChooseRangeCurr=this.FishChooseRange,this.SpeedUpMax=150,this.SpeedUpFades=[800,400],this.SpeedUps=[150,200],this.Y_top=114,this.Y_pushtop=100,this.Y_end=725,this.Y_coinmax=725-3*Base.CellDiam/2,this.Y_field0=115,this.Y_field1=825,this.DangerDist=1.5*Base.CellDiam,this.X0=Base.CellDiam/2,this.ColsNum=Base.GameCols,this.SpeedDown=15,this.SpeedFlyUp=1e3,this.SpeedDownFlag=!1,this.SpeedUpFlag=!1,this.Y=110,this.gameGroup.y=this.Y,this.Shifts=[],this.ShiftsNum=0,this.Shift=0,this.ShiftSpeed=4,this.ShiftingFlag=!1,this.FishFly={col:0,img:null,dest:null,type:0},this.FishStay={img:null,type:0},this.FishNext={img:null,type:0},this.FlashUpFlag=!1,this.FlashUpSpeed=400,this.FlashUpDist=450,this.Saves=[],this.ScaleFishki=1,this.Fishki=[],this.FishkiNum=0,this.FreenzyFlag=!1,this.MergeAnimCntr=0,this.MergesRowCntr=0,this.HelpTypes=[0,1,0,1,0,0,1,0,2,1,0,2,1],this.HelpTypesIndex=0},CField.prototype.clearFishSaves=function(){for(var s=0;s<this.Saves.length;s++)null!==this.Saves[s].img&&(this.Saves[s].img.visible=!1),null!==this.Saves[s].top&&(this.Saves[s].top.visible=!1)},CField.prototype.getFishSave=function(s,t){for(var i=0;i<this.Saves.length;i++)if(this.Saves[i].type==s&&0==this.Saves[i].img.visible&&this.Saves[i].group===t)return this.Saves[i];var e=this.crateCellObj(s,t);return this.Saves.push(e),e},CField.prototype.crateCellObj=function(s,t){var i={img:null,top:null,type:s};return i.group=t,i.img=this.Papa.game.make.image(0,0,"atlas",Base.FishPads[0]),i.img.anchor.set(.5),t.add(i.img),1==s?(i.top=this.Papa.game.add.group(),t.add(i.top)):(i.top=this.Papa.game.make.image(0,0,"atlas",Base.FishNums[0]),i.top.anchor.set(.5),t.add(i.top)),i},CField.prototype.killFish=function(s,t){null!==s.obj&&(t||(s.obj.img.visible=!1),s.obj.top.visible=!1,s.obj=null)},CField.prototype.init=function(){for(var s=0;s<Base.GameCols;s++)this.Pads[s]={x:Base.Lines[s],y:Base.Y_bott,x0:Base.Lines[s]-Base.CellDiam/2,x1:Base.Lines[s]+Base.CellDiam/2},this.Cells[s]=[],this.CellsNum[s]=0;this.Pads[0].x0=0,this.Pads[Base.GameCols-1].x1=Base.Width,this.FishFly.obj=this.crateCellObj(0,this.gameTopGroup),this.FishFly.obj.img.visible=!1,this.FishFly.obj.top.visible=!1,this.FishStay.x=this.Pads[2].x,this.FishStay.y=this.Pads[2].y,this.FishStay.obj=this.crateCellObj(0,this.gameTopGroup),this.FishStay.obj.img.x=this.FishStay.x,this.FishStay.obj.img.y=this.FishStay.y,this.FishStay.obj.top.x=this.FishStay.x,this.FishStay.obj.top.y=this.FishStay.y,this.FishStay.obj.img.visible=!1,this.FishStay.obj.top.visible=!1,this.FishNext.x=this.Pads[2].x,this.FishNext.y=this.Pads[2].y+108,this.FishNext.obj=this.crateCellObj(0,this.gameTopGroup),this.FishNext.obj.img.x=this.FishNext.x,this.FishNext.obj.img.y=this.FishNext.y,this.FishNext.obj.img.scale.set(.7),this.FishNext.obj.top.x=this.FishNext.x,this.FishNext.obj.top.y=this.FishNext.y,this.FishNext.obj.top.scale.set(.7),this.FishNext.obj.img.visible=!1,this.FishNext.obj.top.visible=!1,this.FreenzyFlag=!1,this.ReplayFlag=!1,this.ActiveFlag=!1},CField.prototype.setHelp=function(){this.HelpFlag||(this.clearFishSaves(),null==this.HandImg&&(this.HandImg=this.Papa.getZeroImg(Base.Width/2,120,"atlas","pointer.png",this.gameGroup,0)),this.HandImg.anchor.set(9/74,9/69),this.HandImg.visible=!1,this.HelpCycleCntr=0,this.HelpAppearCntr=0,this.HelpCycleCntr=0,this.Threads.addThread(this,this.updateHand),this.addFishToField(this.getColBottom(0).y,0,1,!1),this.addFishToField(this.getColBottom(1).y,1,0,!1),this.addFishToField(this.getColBottom(2).y,2,2,!1),this.addFishToField(this.getColBottom(2).y,2,0,!1),this.addFishToField(this.getColBottom(3).y,3,0,!1),this.addFishToField(this.getColBottom(4).y,4,1,!1),this.HelpTypesIndex=0,this.setStayFish(this.FishStay,this.HelpTypes[this.HelpTypesIndex],!1),this.HelpTypesIndex++,this.setStayFish(this.FishNext,this.HelpTypes[this.HelpTypesIndex],!1),this.HelpTypesIndex++,this.setHandScaleIn(this.getColBottom(2)),this.setAllFishScaleIn(),this.HelpFlag=!0)},CField.prototype.HelpCycle=function(){if(this.HelpCycleCntr++,this.HelpAppearCntr>3&&this.AllMatchesCntr>2)return this.StopHelp(),Base.HelpFlag=!1,this.Papa.Papa.saveAll(),void(this.FishFlyCntr=10);if(!(this.Y>570)){var s,t;for(t=1;t<Base.GameCols-1;t++)if(this.CellsNum[t]>0&&this.Cells[t][this.CellsNum[t]-1].y+this.Y<500&&this.Cells[t][this.CellsNum[t]-1].type==this.FishStay.type)return void this.setHandScaleIn(this.Cells[t][this.CellsNum[t]-1]);for(t=0;t<Base.GameCols;t++)if(this.CellsNum[t]>0&&this.Cells[t][this.CellsNum[t]-1].y+this.Y<500&&this.Cells[t][this.CellsNum[t]-1].type==this.FishStay.type)return void this.setHandScaleIn(this.Cells[t][this.CellsNum[t]-1]);for(t=0;t<Base.GameCols;t++){if(t-1>=0&&this.CellsNum[t]<this.CellsNum[t-1]&&this.Cells[t-1][this.CellsNum[t]].type==this.FishStay.type)return void this.setHandScaleIn(this.getColBottom(t));if(t+1<Base.GameCols&&this.CellsNum[t]<this.CellsNum[t+1]&&this.Cells[t+1][this.CellsNum[t]].type==this.FishStay.type)return void this.setHandScaleIn(this.getColBottom(t))}for(t=1;t<Base.GameCols-1;t++)if(this.CellsNum[t]>0&&this.Cells[t][this.CellsNum[t]-1].y+this.Y<500&&this.Cells[t][this.CellsNum[t]-1].type==this.FishStay.type+1)return void this.setHandScaleIn(this.Cells[t][this.CellsNum[t]-1]);for(t=0;t<Base.GameCols;t++)if(this.CellsNum[t]>0&&this.Cells[t][this.CellsNum[t]-1].y+this.Y<500&&this.Cells[t][this.CellsNum[t]-1].type==this.FishStay.type+1)return void this.setHandScaleIn(this.Cells[t][this.CellsNum[t]-1]);for(t=0;t<Base.GameCols;t++)if(this.CellsNum[t]>0&&this.Cells[t][this.CellsNum[t]-1].y+this.Y<500&&this.Cells[t][this.CellsNum[t]-1].type>this.FishStay.type)return void this.setHandScaleIn(this.Cells[t][this.CellsNum[t]-1]);for(t=1;t<Base.GameCols-1;t++)if(0==this.CellsNum[t])return void this.setHandScaleIn(this.Pushers[t]);for(t=0;t<Base.GameCols;t++)if(0==this.CellsNum[t])return void this.setHandScaleIn(this.Pushers[t]);var i=0;for(t=0;t<Base.GameCols;t++)(s=t+1)>=Base.GameCols&&(s-=Base.GameCols),this.CellsNum[s]<this.CellsNum[i]&&(i=s);this.Cells[i][this.CellsNum[i]-1].y+this.Y<500&&this.setHandScaleIn(this.Cells[i][this.CellsNum[i]-1])}},CField.prototype.setHandScaleIn=function(s){this.HandScale=.1,this.HandImg.x=s.x-15,this.HandImg.y=s.y+100,this.HandImg.scale.set(this.HandScale),this.HandScaleSpeed=2,this.HandImg.visible=!0,this.HandScaleDownFlag=!1,this.HandScaleUpFlag=!0,this.HelpAppearCntr++,this.HandFlag=!0},CField.prototype.setHandScaleOut=function(){this.HandFlag&&(this.HandFlag=!1,this.HandScaleDownFlag=!0)},CField.prototype.updateHand=function(){if(this.HandScaleDownFlag)return this.HandScale-=2*Base.RealTimeInt,this.HandScale<.1?(this.HandImg.visible=!1,void(this.HandScaleDownFlag=!1)):void this.HandImg.scale.set(this.HandScale);if(this.HandFlag){if(this.HandImg.y+this.Y>590)return void this.setHandScaleOut();this.HandScale+=this.HandScaleSpeed*Base.RealTimeInt,(this.HandScale>1.05&&this.HandScaleSpeed>0||this.HandScale<.95&&this.HandScaleSpeed<0)&&(this.HandScaleUpFlag&&(this.HandScaleSpeed=.5,this.HandScaleUpFlag=!1),this.HandScaleSpeed=-this.HandScaleSpeed),this.HandImg.scale.set(this.HandScale)}},CField.prototype.StopHelp=function(){this.HelpFlag&&(this.Threads.removeThread(this,this.updateHand),this.HandImg.kill(),this.HandImg=null,this.HandFlag=!1,this.HelpFlag=!1)},CField.prototype.setBeginParams=function(){this.loose=!1,this.LastType=-1,this.FlyFlag=!1,this.ShiftingFlag=!1,this.ShiftsNum=0,this.ClickAllowFlag=!1,this.FlysNum=0,this.FishFlyCntr=0,this.DistCellsMax=0,this.FreezeFlag=!1,this.FlashUpFlag=!1,this.ScaleFishkiFlag=!1,this.SpeedDownFlag=!1,this.SpeedUpFlag=!1,this.FreenzyRateCntr=4,this.FreenzyFlag=!1,this.AllMatchesCntr=0,this.LastType=-1,this.MatchesCntr=0,this.CoinsRateCntr=5,this.CoinsRate=5,this.CoinsRateRnd=3,this.CoinsRateCntr=2,this.JokerRateCntr=5,this.JokerRate=6,this.JokerRateRnd=5,this.JokerRateCntr=10,this.HiScoreBeatFlag=!1,this.MaxFishType=0,this.MaxFishBeatFlag=!1,this.HardEasyIndex=Math.floor(Math.random()*this.HardEasy.length),this.HardEasyCntr=10,this.RowMatchCntr=0,this.MergeAnimCntr=0,this.HelpFlag=!1},CField.prototype.create=function(){if(this.ReplayFlag)this.Replay();else{this.ActiveFlag&&this.Kill();for(var s=0;s<Base.GameCols;s++)this.CellsNum[s]=0;this.Y=115,this.gameGroup.y=this.Y,this.Y_pushtop=100,this.setBeginParams(),this.addPushersLine(),this.makeFishStay(),this.ActiveFlag||this.Threads.addThread(this,this.update),this.ReplayFlag=!0,this.ActiveFlag=!0}},CField.prototype.Replay=function(){this.HelpFlag&&this.StopHelp(),this.Threads.removeThread(this,this.updateShift),this.Threads.removeThread(this,this.updateFish),this.Threads.removeThread(this,this.updateFreeze),this.Threads.removeThread(this,this.updateWaitBooster),this.Threads.removeThread(this,this.updateFlashUp),this.Threads.removeThread(this,this.updateScaleFishOut),this.Threads.removeThread(this,this.updateScaleFishIn),this.setBeginParams(),this.makeFishStay(),Base.HelpFlag?this.setFlashUp(0,this.setHelp,this):this.setFlashUp(0,this.OnReplayStart,this)},CField.prototype.OnReplayStart=function(){this.clearFishSaves()},CField.prototype.OnMergeAnimOver=function(){this.MergeAnimCntr--,0==this.MergeAnimCntr&&(this.setShifting()||this.OnShiftingEnd())},CField.prototype.OffFreenzy=function(){this.FreenzyFlag&&(this.FreenzyFlag=!1)},CField.prototype.StopFreenzy=function(){this.FreenzyFlag&&(this.Papa.StopFreenzy(),this.OffFreenzy())},CField.prototype.setFreenzy=function(){return!!this.Papa.setFreenzy()&&(this.RowMatchCntr=0,this.FreenzyFlag=!0,!0)},CField.prototype.Continue=function(){this.loose=!1,this.setFlashUp(2,null)},CField.prototype.startPlay=function(){this.SpeedDownFlag=!0,this.ClickAllowFlag=!0,this.loose=!1},CField.prototype.OnLoose=function(){!0!==this.loose&&(this.loose=!0,this.Papa.PlaySnd(Base.SndLoose),this.HelpFlag&&this.StopHelp(),Base.Score>Base.HiScore&&(Base.HiScore=Base.Score,this.Papa.Papa.saveAll()),Base.Coins>=Base.PriceContinue?this.Papa.setChoice():this.Papa.setCoinsWnd(),this.FreenzyFlag&&this.StopFreenzy())},CField.prototype.OnClick=function(s,t){if(this.ClickAllowFlag&&!(t<this.Y_field0||t>this.Y_field1)){for(var i=-1,e=0;e<Base.GameCols;e++)if(s>=this.Pads[e].x0&&s<=this.Pads[e].x1){i=e;break}i<0||(this.HelpFlag&&this.setHandScaleOut(),this.ScoreUpFlag=!1,this.makeFishFly(i,this.FishStay.type,this.FishStay.joker),this.makeFishStay())}},CField.prototype.setSpeedUp=function(s){this.SpeedUp=this.SpeedUps[s],this.SpeedUpFade=this.SpeedUpFades[s],this.SpeedUpFlag=!0},CField.prototype.DoScoreUp=function(s){for(var t=2,i=0;i<s;i++)t*=2;return this.FreenzyFlag&&(t*=3),this.ScoreUpFlag=!0,Base.Score+=t,this.Papa.updateScore(),t},CField.prototype.addCoin=function(s){this.Papa.CoinsGame++,Base.Coins+=s,this.Papa.PlaySnd(Base.SndCoin),this.Papa.updateCoins()},CField.prototype.getType=function(){if(this.HelpFlag)return s=this.HelpTypes[this.HelpTypesIndex],this.HelpTypesIndex++,this.HelpTypesIndex>=this.HelpTypes.length&&(this.HelpTypesIndex=0),this.LastType=s,s;this.FishChooseRangeCurr=this.FishChooseRange,this.FishFlyCntr<15&&(this.FishChooseRangeCurr--,this.FishFlyCntr<10&&this.FishChooseRangeCurr--,this.FishFlyCntr<7&&this.FishChooseRangeCurr--);var s,t=this.FishChooseRangeCurr,i=0,e=!1;s=0;for(var h=0;h<Base.GameCols;h++)i+=this.CellsNum[h];if(this.Y+this.DistCellsMax>this.Y_end-this.DangerDist&&(e=!0),s=i<10?this.chooseType(t,this.HardEasy[this.HardEasyIndex].hard,0):e?i>20?this.chooseType(t,0,.4):this.chooseType(t,0,this.HardEasy[this.HardEasyIndex].easy):this.chooseType(t,this.HardEasy[this.HardEasyIndex].hard,this.HardEasy[this.HardEasyIndex].easy),this.HardEasyCntr--,this.HardEasyCntr<0){var l=Math.floor(Math.random()*this.HardEasy.length);l!==this.HardEasyIndex||++l>=this.HardEasy.length&&(l=0),this.HardEasyIndex=l,this.HardEasyCntr=10}return this.FishFlyCntr<15&&s==this.LastType&&--s<0&&(s=t-1),this.LastType=s,s},CField.prototype.chooseType=function(s,t,i){var e=Math.random();if(e>=t+i)return Math.floor(Math.random()*s);for(var h=0;h<s;h++)this.ChooseTypes[h]=0;var l=0;for(h=0;h<Base.GameCols;h++)this.CellsNum[h],this.CellsNum[h]>0&&(l=this.Cells[h][this.CellsNum[h]-1].type)>=0&&l<s&&this.ChooseTypes[l]++,h>0&&this.CellsNum[h-1]>this.CellsNum[h]&&(l=this.Cells[h-1][this.CellsNum[h]].type)>=0&&l<s&&this.ChooseTypes[l]++,h<Base.GameCols-1&&this.CellsNum[h+1]>this.CellsNum[h]&&(l=this.Cells[h+1][this.CellsNum[h]].type)>=0&&l<s&&this.ChooseTypes[l]++;for(h=0;h<s;h++)this.ChooseTypes[h]>0&&0;if(e<t){for(h=0;h<5;h++)if(l=Math.floor(Math.random()*s),0==this.ChooseTypes[l])return l;for(h=0;h<5;h++)if(0==this.ChooseTypes[h])return h;return Math.floor(Math.random()*s)}if(e>t&&e<t+i){for(h=0;h<5;h++)if(l=Math.floor(Math.random()*s),this.ChooseTypes[l]>0)return l;for(h=0;h<5;h++)if(this.ChooseTypes[h]>0)return h;return Math.floor(Math.random()*s)}return Math.floor(Math.random()*s)},CField.prototype.checkForMatches=function(){var s,t;for(this.MatchesNum=0,s=0;s<Base.GameCols;s++)for(t=0;t<this.CellsNum[s];t++)null!==this.Cells[s][t].obj&&(this.Cells[s][t].flag=!1,this.Cells[s][t].index=t,this.Cells[s][t].matches=0,s>0&&void 0!==this.Cells[s-1][t]&&null!=this.Cells[s-1][t].obj&&this.Cells[s-1][t].type==this.Cells[s][t].type&&!this.Cells[s][t].coin&&this.Cells[s][t].matches++,s<Base.GameCols-1&&void 0!==this.Cells[s+1][t]&&null!=this.Cells[s+1][t].obj&&this.Cells[s+1][t].type==this.Cells[s][t].type&&!this.Cells[s][t].coin&&this.Cells[s][t].matches++,t>0&&void 0!==this.Cells[s][t-1]&&null!=this.Cells[s][t-1].obj&&this.Cells[s][t-1].type==this.Cells[s][t].type&&!this.Cells[s][t].coin&&this.Cells[s][t].matches++,t<this.CellsNum[s]-1&&void 0!==this.Cells[s][t+1]&&null!=this.Cells[s][t+1].obj&&this.Cells[s][t+1].type==this.Cells[s][t].type&&!this.Cells[s][t].coin&&this.Cells[s][t].matches++);for(s=0;s<Base.GameCols;s++)for(t=0;t<this.CellsNum[s];t++){if(null!==this.Cells[s][t].obj&&0==this.Cells[s][t].flag&&this.Cells[s][t].matches>0)if(this.Cells[s][t].flag=!0,this.MatchesTempNum=0,this.getMatchesAroundCell(s,t,this.Cells[s][t].type)>0){this.MatchesTemp[this.MatchesTempNum]=this.Cells[s][t],this.MatchesTempNum++,null==this.Matches[this.MatchesNum]&&(this.Matches[this.MatchesNum]=[]);for(var i=0;i<this.MatchesTempNum;i++)this.Matches[this.MatchesNum][i]=this.MatchesTemp[i];this.MatchesNums[this.MatchesNum]=this.MatchesTempNum,this.MatchesNum++}}if(0==this.MatchesNum)return!1;for(s=0;s<this.MatchesNum;s++){var e=-1;for(t=0;t<this.MatchesNums[s];t++)if(this.Matches[s][t].moved){e=t;break}if(e>=0){var h=this.getFly(this.Matches[s][e]);for(t=0;t<this.MatchesNums[s];t++)t!=e&&(this.addToFly(h,this.Matches[s][t]),this.killFish(this.Matches[s][t],!0));h.type=this.Matches[s][e].type+this.MatchesNums[s]-1,h.type>34&&(h.type=35),h.scoreup=this.DoScoreUp(h.type),this.makeFishMergeFX(h),this.MergeAnimCntr++,this.checkMatch(h,this.MatchesNums[s]-1)}}return!0},CField.prototype.makeFishMergeFX=function(s){var t=this.getFishFXType(s.matchesNum,s.type);this.Papa.addFishFX(s.dest.x,s.dest.y,this.gameGroup,t,this.OnMergeAnimOver,this),0==t&&this.Papa.PlaySnd(Base.SndMerge0),1==t&&this.Papa.PlaySnd(Base.SndMerge1),2==t&&this.Papa.PlaySnd(Base.SndMerge2)},CField.prototype.setStayFish=function(s,t,i){s.type=t,s.joker=i,s.obj.img.frameName=Base.FishPads[t],s.obj.top.frameName=Base.FishNums[t]},CField.prototype.applyBooster=function(s){switch(this.Papa.PlaySnd(Base.SndPrize),s){case 0:var t=Math.floor(this.FishChooseRangeCurr*Math.random());return this.FishStay.joker?this.setFishStayJokerOff(t):(t==this.FishStay.type&&t++,t>=this.FishChooseRangeCurr&&(t=0)),this.setStayFish(this.FishStay,t,!1),this.LastType=t,this.BoosterType=0,this.BoosterWaitTimeCntr=.75,this.Threads.addThread(this,this.updateWaitBooster),!0;case 1:return!!this.ClickAllowFlag&&(!!this.makeSomeFishGone()&&(this.BoosterType=1,this.BoosterWaitTimeCntr=.75,this.Threads.addThread(this,this.updateWaitBooster),!0));case 2:return this.FreezeFlag?this.FreezeTime+=5:(this.FreezeTime=5,this.Threads.addThread(this,this.updateFreeze)),this.FreezeFlag=!0,this.SpeedDownFlag=!1,this.BoosterType=2,this.BoosterWaitTimeCntr=.75,this.Threads.addThread(this,this.updateWaitBooster),!0}return!1},CField.prototype.updateWaitBooster=function(){this.BoosterWaitTimeCntr-=Base.RealTimeInt,this.BoosterWaitTimeCntr<0&&(this.Threads.removeThread(this,this.updateWaitBooster),this.Papa.OnBoosterEnd(this.BoosterType))},CField.prototype.updateFreeze=function(){this.FreezeTime-=Base.RealTimeInt,this.FreezeTime<0&&(this.SpeedDownFlag=!0,this.Threads.removeThread(this,this.updateFreeze))},CField.prototype.setFlashUp=function(s,t,i){this.FlashUpFlag||(this.makeDownFishGone(s),this.FlashUpCall=t,this.FlashUpCallContex=i,this.FlashUpFlag=!0,this.ClickAllowFlag=!1,this.SpeedDownFlag=!1,this.Threads.addThread(this,this.updateFlashUp))},CField.prototype.updateFlashUp=function(){this.Y>115&&(this.Y-=this.FlashUpSpeed*Base.RealTimeInt),this.Y<=115&&(this.Y=115),this.Y<=115&&0==this.ScaleFishkiFlag&&(this.Threads.removeThread(this,this.updateFlashUp),this.ClickAllowFlag=!0,this.SpeedDownFlag=!0,this.FlashUpFlag=!1,null!=this.FlashUpCall&&this.FlashUpCall.call(this.FlashUpCallContex))},CField.prototype.updateShift=function(){this.Shift-=this.ShiftSpeed*Base.RealTimeInt,this.Shift<=0&&(this.Shift=0);for(var s=0;s<this.ShiftsNum;s++)null!==this.Shifts[s].obj&&(this.Shifts[s].x=this.Shifts[s].x_dest-(this.Shifts[s].x_dest-this.Shifts[s].x)*this.Shift,this.Shifts[s].y=this.Shifts[s].y_dest-(this.Shifts[s].y_dest-this.Shifts[s].y)*this.Shift,this.Shifts[s].obj.img.x=this.Shifts[s].x,this.Shifts[s].obj.img.y=this.Shifts[s].y,this.Shifts[s].obj.top.x=this.Shifts[s].x,this.Shifts[s].obj.top.y=this.Shifts[s].y);this.Shift<=0&&(this.setShifting()||(this.Threads.removeThread(this,this.updateShift),this.ShiftingFlag=!1,this.OnShiftingEnd()))},CField.prototype.getDistCellsMax=function(){this.DistCellsMax=0*Base.CellDiam;for(var s=0;s<Base.GameCols;s++)if(this.CellsNum[s]>0){if(this.Cells[s][this.CellsNum[s]-1].coin)var t=Base.CellDiam*(this.CellsNum[s]-1)+Base.CellDiam/2;else t=Base.CellDiam*this.CellsNum[s];t>this.DistCellsMax&&(this.DistCellsMax=t)}},CField.prototype.OnShiftingEnd=function(){for(var s=0;s<Base.GameCols;s++){for(var t=0,i=0;i<this.CellsNum[s];i++)null!==this.Cells[s][i].obj&&t++;this.CellsNum[s]=t}this.getDistCellsMax(),this.checkForMatches()||(this.checkForShoutOuts(),this.HelpFlag&&this.HelpCycle(),this.OnAfterMatch(),this.clearFlags(),this.ClickAllowFlag=!0,this.ScoreUpFlag&&(Base.Score>Base.HiScore&&(Base.HiScore=Base.Score,this.Papa.Papa.saveAll()),this.ScoreUpFlag=!1),this.MoveScoreCntr=0,this.MoveMatchesCntr=0)},CField.prototype.checkForShoutOuts=function(){if(this.MaxFishBeatFlag&&(this.MaxFishBeatFlag=!1,this.MaxFishType>9&&this.Papa.makeConfeti(Base.Width/2-40,290)),this.MoveBestMatchNum>3)this.Papa.makeShoutOut(1,!0);else{if(!this.HiScoreBeatFlag&&Base.Score>Base.HiScore&&Base.HiScore>0)return this.Papa.makeConfeti(Base.Width/2-150,280),this.Papa.makeConfeti(Base.Width/2+150,290),this.Papa.makeShoutOutHiScore(),void(this.HiScoreBeatFlag=!0);if(this.MoveMatchesCntr>1||this.MoveScoreCntr>32){if(this.MoveScoreCntr>128)return void(this.MoveScoreCntr>265||this.MoveMatchesCntr>1?this.Papa.makeShoutOut(1,!0):this.Papa.makeShoutOut(1,!1));if(this.MoveMatchesCntr>4)return void(this.MoveMatchesCntr>6?this.Papa.makeShoutOut(1,!0):this.Papa.makeShoutOut(1,!1));(this.MoveMatchesCntr>2||this.MoveScoreCntr>64)&&this.Papa.makeShoutOut(0,!1)}}},CField.prototype.clearFlags=function(){for(var s=0;s<Base.GameCols;s++)for(var t=0;t<this.CellsNum[s];t++)this.Cells[s][t].moved=!1},CField.prototype.setShifting=function(){this.ShiftsNum=0;for(var s=0;s<Base.GameCols;s++)for(var t=0;t<this.CellsNum[s];t++)null==this.Cells[s][t].obj&&t+1<this.CellsNum[s]&&null!==this.Cells[s][t+1].obj&&(this.Cells[s][t].obj=this.Cells[s][t+1].obj,this.Cells[s][t+1].obj=null,this.Cells[s][t].type=this.Cells[s][t+1].type,this.Cells[s][t].empty=this.Cells[s][t+1].empty,this.Cells[s][t].x_dest=this.Cells[s][t].x,this.Cells[s][t].y_dest=this.Cells[s][t].y,this.Cells[s][t].y=this.Cells[s][t+1].y,this.Cells[s][t].coin=this.Cells[s][t+1].coin,this.Cells[s][t].moved=!0,this.Shifts[this.ShiftsNum]=this.Cells[s][t],this.ShiftsNum++);return 0!=this.ShiftsNum&&(0==this.ShiftingFlag&&this.Threads.addThread(this,this.updateShift),this.Shift=1,this.ShiftingFlag=!0,!0)},CField.prototype.setFishStayJokerOff=function(s){this.FishStay.obj.img.frameName=Base.FishPads[s],this.FishStay.obj.top.frameName=Base.FishNums[s],this.FishStay.type=s,this.FishStay.joker=!1,this.FishStay.obj.top.visible=!0},CField.prototype.makeFishStay=function(){this.LastType<0?(t=this.getType(),this.FishStay.obj.img.frameName=Base.FishPads[t],this.FishStay.obj.top.frameName=Base.FishNums[t],this.FishStay.type=t,this.FishStay.joker=!1,this.FishStay.obj.img.visible=!0,this.FishStay.obj.top.visible=!0):this.FishNext.joker?(this.FishStay.obj.img.frameName="joker.png",this.FishStay.type=-1,this.FishStay.joker=!0,this.FishStay.obj.img.visible=!0,this.FishStay.obj.top.visible=!1):(t=this.FishNext.type,this.FishStay.obj.img.frameName=Base.FishPads[t],this.FishStay.obj.top.frameName=Base.FishNums[t],this.FishStay.type=t,this.FishStay.joker=!1,this.FishStay.obj.img.visible=!0,this.FishStay.obj.top.visible=!0);var s=!1;if(0==this.HelpFlag&&this.JokerRateCntr--<=0&&(this.JokerRateCntr=this.JokerRate+this.JokerRateRnd*Math.random(),s=!0),s)this.FishNext.obj.img.frameName="joker.png",this.FishNext.type=-1,this.FishNext.joker=!0,this.FishNext.obj.img.visible=!0,this.FishNext.obj.top.visible=!1;else{var t=this.getType();this.FishNext.obj.img.frameName=Base.FishPads[t],this.FishNext.obj.top.frameName=Base.FishNums[t],this.FishNext.type=t,this.FishNext.joker=!1,this.FishNext.obj.img.visible=!0,this.FishNext.obj.top.visible=!0,this.LastType=t}},CField.prototype.makeOneFishGone=function(s){this.FishkiNum=0,this.ScaleFishki=1,this.Fishki[this.FishkiNum]=s,this.FishkiNum++,this.Threads.addThread(this,this.updateScaleFishOut),this.ScaleFishkiFlag=!0,this.ClickAllowFlag=!1},CField.prototype.makeDownFishGone=function(s){this.FishkiNum=0,this.ScaleFishki=1;for(var t=0,i=0;i<Base.GameCols;i++)for(var e=this.CellsNum[i]-1;e>=s;e--)this.Fishki[this.FishkiNum]=this.Cells[i][e],this.FishkiNum++,t++;t>0&&(this.Threads.addThread(this,this.updateScaleFishOut),this.ScaleFishkiFlag=!0)},CField.prototype.makeSomeFishGone=function(){this.FishkiNum=0,this.ScaleFishki=1;for(var s=0,t=-1,i=0;i<Base.GameCols;i++){for(var e=0;e<this.CellsNum[i];e++)this.Cells[i][e].flag=!1,s++;t<0?this.CellsNum[i]>0&&(t=i):this.CellsNum[t]<this.CellsNum[i]&&(t=i)}if(0==s)return!1;var h=3;for(h>s&&(h=s);h>0;){var l=Math.floor(Math.random()*Base.GameCols),a=Math.floor(Math.random()*this.CellsNum[l]),o=-1,r=-1;for(i=0;i<Base.GameCols;i++){var F=i+l;for(F>=Base.GameCols&&(F-=Base.GameCols),e=0;e<this.CellsNum[F];e++){var n=a+e;if(n>=this.CellsNum[F]&&(n-=this.CellsNum[F]),0==this.Cells[F][n].flag&&(o=n,r=F),o>=0)break}if(o>=0)break}o>=0&&(this.Cells[F][n].flag=!0,this.Fishki[this.FishkiNum]=this.Cells[r][o],this.FishkiNum++),h--}return this.Threads.addThread(this,this.updateScaleFishOut),this.ScaleFishkiFlag=!0,this.ClickAllowFlag=!1,!0},CField.prototype.updateScaleFishOut=function(){if(this.ScaleFishki-=3*Base.RealTimeInt,this.ScaleFishki<0){for(this.ScaleFishki=0,this.Threads.removeThread(this,this.updateScaleFishOut),s=0;s<this.FishkiNum;s++)this.killFish(this.Fishki[s],!1);return this.MoveMatchesCntr=0,this.MoveScoreCntr=0,this.setShifting()||this.OnShiftingEnd(),void(this.ScaleFishkiFlag=!1)}for(var s=0;s<this.FishkiNum;s++)null!==this.Fishki[s].obj&&(this.Fishki[s].obj.img.scale.set(1-(this.ScaleFishki-1)*(this.ScaleFishki-1)),this.Fishki[s].obj.img.alpha=1-(this.ScaleFishki-1)*(this.ScaleFishki-1),this.Fishki[s].obj.top.scale.set(1-(this.ScaleFishki-1)*(this.ScaleFishki-1)),this.Fishki[s].obj.top.alpha=1-(this.ScaleFishki-1)*(this.ScaleFishki-1))},CField.prototype.setAllFishScaleIn=function(){this.FishkiNum=0;for(var s=0;s<Base.GameCols;s++)for(var t=0;t<this.CellsNum[s];t++)void 0!==this.Cells[s][t]&&null!==this.Cells[s][t].obj&&(this.Fishki[this.FishkiNum]=this.Cells[s][t],this.FishkiNum++);this.FishkiNum>0&&(this.Threads.addThread(this,this.updateScaleFishIn),this.scaleFishki(0))},CField.prototype.updateScaleFishIn=function(){this.ScaleFishki+=3*Base.RealTimeInt,this.ScaleFishki>=1&&(this.ScaleFishki=1,this.Threads.removeThread(this,this.updateScaleFishIn),this.ScaleFishkiFlag=!1);for(var s=0;s<this.FishkiNum;s++)null!==this.Fishki[s].obj&&(this.Fishki[s].obj.img.scale.set(1-(this.ScaleFishki-1)*(this.ScaleFishki-1)),this.Fishki[s].obj.img.alpha=1-(this.ScaleFishki-1)*(this.ScaleFishki-1),this.Fishki[s].obj.top.scale.set(1-(this.ScaleFishki-1)*(this.ScaleFishki-1)),this.Fishki[s].obj.top.alpha=1-(this.ScaleFishki-1)*(this.ScaleFishki-1))},CField.prototype.scaleFishki=function(s){this.ScaleFishki=s;for(var t=0;t<this.FishkiNum;t++)null!==this.Fishki[t].obj&&(this.Fishki[t].obj.img.scale.set(1-(this.ScaleFishki-1)*(this.ScaleFishki-1)),this.Fishki[t].obj.img.alpha=1-(this.ScaleFishki-1)*(this.ScaleFishki-1),this.Fishki[t].obj.top.scale.set(1-(this.ScaleFishki-1)*(this.ScaleFishki-1)),this.Fishki[t].obj.top.alpha=1-(this.ScaleFishki-1)*(this.ScaleFishki-1))},CField.prototype.makeFishFly=function(s,t,i){this.FishFly.x=Base.Lines[s],this.FishFly.y=this.FishStay.y,this.FishFly.obj.img.x=this.FishFly.x,this.FishFly.obj.img.y=this.FishFly.y,this.FishFly.obj.top.x=this.FishFly.x,this.FishFly.obj.top.y=this.FishFly.y,i?this.FishFly.obj.img.frameName="joker.png":(this.FishFly.obj.img.frameName=Base.FishPads[t],this.FishFly.obj.top.frameName=Base.FishNums[t]),this.FishFly.obj.img.visible=!1,this.FishFly.obj.top.visible=!1,this.FishFly.type=t,this.FishFly.col=s,this.FishFly.joker=i,this.FishFly.coin=this.checkOnCoin(s),this.FishFly.dest=this.getColBottom(s),this.Threads.addThread(this,this.updateFish),this.FlyFlag=!0,this.ClickAllowFlag=!1,this.FishFlyCntr++,this.MoveMatchesCntr=0,this.MoveScoreCntr=0,this.MoveBestMatchNum=0,this.Papa.PlaySnd(Base.SndTrow)},CField.prototype.updateFish=function(){if(this.FishFly.y-=this.SpeedFlyUp*Base.RealTimeInt,this.FishFly.obj.img.y=this.FishFly.y,this.FishFly.obj.top.y=this.FishFly.y,this.FishFly.obj.img.visible||(this.FishFly.obj.img.visible=!0,this.FishFly.joker||(this.FishFly.obj.top.visible=!0)),this.FishFly.y<this.gameGroup.y+this.FishFly.dest.y+Base.CellDiam){this.FlyFlag=!1,this.FishFly.obj.img.visible=!1,this.FishFly.obj.top.visible=!1,this.Threads.removeThread(this,this.updateFish),this.FishFly.coin&&(this.addCoin(1),this.killCoin(this.FishFly.col));var s=this.addFishToField(this.FishFly.dest.y,this.FishFly.col,this.FishFly.type,this.FishFly.joker);if(this.setSpeedUp(0),this.FishFly.joker){if(this.checkJokerOnMatch(s.col,this.CellsNum[s.col]-1))this.OnMatch();else{if(this.Papa.PlaySnd(Base.SndAttach),this.RowMatchCntr=0,s.y+this.gameGroup.y>this.Y_end)return void this.OnLoose();this.clearFlags()}return}if(this.checkCellOnMatch(s.col,this.CellsNum[s.col]-1,s.type))this.OnMatch(),this.RowMatchCntr>2&&0==this.FreenzyFlag&&0==this.HelpFlag&&this.setFreenzy();else{if(this.Papa.PlaySnd(Base.SndAttach),this.HelpFlag&&this.HelpCycle(),this.RowMatchCntr=0,s.y+this.gameGroup.y>this.Y_end)return void this.OnLoose();this.clearFlags(),this.ClickAllowFlag=!0}}},CField.prototype.OnMatch=function(){this.setSpeedUp(1),this.RowMatchCntr++,this.AllMatchesCntr++},CField.prototype.OnAfterMatch=function(){if(this.MoveMatchesCntr>2&&0==this.HelpFlag&&0==this.FreenzyFlag&&this.setFreenzy(),0==this.HelpFlag&&this.CoinsRateCntr--<0)for(var s=Math.floor(Math.random()*Base.GameCols),t=0;t<Base.GameCols;t++){var i=s+t;if(i>=Base.GameCols&&(i-=Base.GameCols),!this.checkOnCoin(i)){var e=this.Y+Base.CellDiam*this.CellsNum[i];if(this.CellsNum[i]<5&&e<this.Y_coinmax)return this.addCoinToField(i),void(this.CoinsRateCntr=this.CoinsRate+this.CoinsRateRnd*Math.random())}}this.MatchesCntr++},CField.prototype.getFly=function(s){return null==this.Flys[this.FlysNum]&&(this.Flys[this.FlysNum]={matches:[],matchesNum:0,dest:null,type:0}),this.Flys[this.FlysNum].matchesNum=0,this.Flys[this.FlysNum].dest=s,this.Flys[this.FlysNum].type=0,this.FlysNum++,this.FlysDist=1,this.Flys[this.FlysNum-1]},CField.prototype.addToFly=function(s,t){void 0===s.matches[s.matchesNum]&&(s.matches[s.matchesNum]={img:null,x:0,y:0,dx:0,dy:0});var i=s.matches[s.matchesNum];s.matchesNum++,i.img=t.obj.img,i.x=t.x,i.y=t.y,i.dx=t.x-s.dest.x,i.dy=t.y-s.dest.y,i.matchesNum++},CField.prototype.addCoinToField=function(s){var t=this.addFishToField(this.getColBottom(s).y,s,0,!1);return t.obj.img.frameName="coin.png",t.obj.top.visible=!1,t.type=-1,t.coin=!0,t},CField.prototype.addFishToField=function(s,t,i,e){var h=this.Cells[t][this.CellsNum[t]];return void 0===this.Cells[t][this.CellsNum[t]]&&(this.Cells[t][this.CellsNum[t]]={x:Base.Lines[t],y:0,row:this.CellsNum[t],col:t,obj:null,x_dest:0,y_dest:0,flag:!1,index:-1,moved:!1},h=this.Cells[t][this.CellsNum[t]]),h.x=Base.Lines[t],h.y=s+Base.CellDiam,h.obj=this.getFishSave(0,this.gameGroup),e?(h.obj.img.frameName="joker.png",h.obj.img.x=h.x,h.obj.img.y=h.y,h.obj.top.x=h.x,h.obj.top.y=h.y,h.obj.img.alpha=1,h.obj.top.alpha=1,h.obj.img.scale.set(1),h.obj.top.scale.set(1),h.obj.top.frameName=Base.FishNums[0],h.obj.img.alpha=1,h.obj.top.alpha=1,h.obj.img.visible=!0,h.obj.top.visible=!1):(h.obj.img.visible=!0,h.obj.top.visible=!0,h.obj.img.scale.set(1),h.obj.top.scale.set(1),h.obj.img.alpha=1,h.obj.top.alpha=1,h.obj.img.x=h.x,h.obj.img.y=h.y,h.obj.top.x=h.x,h.obj.top.y=h.y,h.obj.img.frameName=Base.FishPads[i],h.obj.top.frameName=Base.FishNums[i]),h.type=i,h.empty=!1,h.fresh=!0,h.col=t,h.moved=!0,h.coin=!1,this.CellsNum[t]++,this.getDistCellsMax(),h},CField.prototype.checkCellOnMatch=function(s,t,i){var e=0,h=null;return s>0&&void 0!==this.Cells[s-1][t]&&null!=this.Cells[s-1][t].obj&&this.Cells[s-1][t].type==i&&(0==e&&(h=this.getFly(this.Cells[s][t])),e++,this.addToFly(h,this.Cells[s-1][t]),this.killFish(this.Cells[s-1][t],!0)),s<Base.GameCols-1&&void 0!==this.Cells[s+1][t]&&null!=this.Cells[s+1][t].obj&&this.Cells[s+1][t].type==i&&(0==e&&(h=this.getFly(this.Cells[s][t])),e++,this.addToFly(h,this.Cells[s+1][t]),this.killFish(this.Cells[s+1][t],!0)),t>0&&void 0!==this.Cells[s][t-1]&&null!=this.Cells[s][t-1].obj&&this.Cells[s][t-1].type==i&&(0==e&&(h=this.getFly(this.Cells[s][t])),e++,this.addToFly(h,this.Cells[s][t-1]),this.killFish(this.Cells[s][t-1],!0)),0!=e&&(h.type=this.Cells[s][t].type+e,h.type>34&&(h.type=35),h.scoreup=this.DoScoreUp(h.type),this.makeFishMergeFX(h),this.MergeAnimCntr++,this.checkMatch(h,e),!0)},CField.prototype.getFishFXType=function(s,t){return this.FreenzyFlag||this.MoveMatchesCntr>1||s>2?2:s>1||this.MoveMatchesCntr>0?1:0},CField.prototype.checkMatch=function(s,t){s.type>this.MaxFishType&&(this.MaxFishType=s.type,this.MaxFishBeatFlag=!0),t>this.MoveBestMatchNum&&(this.MoveBestMatchNum=t)},CField.prototype.getMatchesAroundCell=function(s,t,i){var e=0;return s>0&&void 0!==this.Cells[s-1][t]&&null!=this.Cells[s-1][t].obj&&this.Cells[s-1][t].matches>0&&0==this.Cells[s-1][t].flag&&this.Cells[s-1][t].type==i&&(this.Cells[s-1][t].flag=!0,this.MatchesTemp[this.MatchesTempNum]=this.Cells[s-1][t],this.MatchesTempNum++,e++,e+=this.getMatchesAroundCell(s-1,t,i)),s<Base.GameCols-1&&void 0!==this.Cells[s+1][t]&&null!=this.Cells[s+1][t].obj&&0==this.Cells[s+1][t].flag&&this.Cells[s+1][t].type==i&&this.Cells[s+1][t].matches>0&&(this.Cells[s+1][t].flag=!0,this.MatchesTemp[this.MatchesTempNum]=this.Cells[s+1][t],this.MatchesTempNum++,e++,e+=this.getMatchesAroundCell(s+1,t,i)),t>0&&void 0!==this.Cells[s][t-1]&&null!=this.Cells[s][t-1].obj&&0==this.Cells[s][t-1].flag&&this.Cells[s][t-1].type==i&&this.Cells[s][t-1].matches>0&&(this.Cells[s][t-1].flag=!0,this.MatchesTemp[this.MatchesTempNum]=this.Cells[s][t-1],this.MatchesTempNum++,e++,e+=this.getMatchesAroundCell(s,t-1,i)),t<this.CellsNum[s]-1&&void 0!==this.Cells[s][t+1]&&null!=this.Cells[s][t+1].obj&&0==this.Cells[s][t+1].flag&&this.Cells[s][t+1].type==i&&this.Cells[s][t+1].matches>0&&(this.Cells[s][t+1].flag=!0,this.MatchesTemp[this.MatchesTempNum]=this.Cells[s][t+1],this.MatchesTempNum++,e++,e+=this.getMatchesAroundCell(s,t+1,i)),e},CField.prototype.checkJokerOnMatch=function(s,t){var i=0,e=null,h=-1;return t>0&&void 0!==this.Cells[s][t-1]&&null!=this.Cells[s][t-1].obj&&0==this.Cells[s][t-1].coin&&(0==i&&(e=this.getFly(this.Cells[s][t])),i++,this.addToFly(e,this.Cells[s][t-1]),h=this.Cells[s][t-1].type,this.killFish(this.Cells[s][t-1],!0),s>0&&void 0!==this.Cells[s-1][t]&&null!=this.Cells[s-1][t].obj&&this.Cells[s-1][t].type===h&&0==this.Cells[s-1][t].coin&&(i++,this.addToFly(e,this.Cells[s-1][t]),this.killFish(this.Cells[s-1][t],!0)),s<Base.GameCols-1&&void 0!==this.Cells[s+1][t]&&null!=this.Cells[s+1][t].obj&&this.Cells[s+1][t].type===h&&0==this.Cells[s+1][t].coin&&(i++,this.addToFly(e,this.Cells[s+1][t]),this.killFish(this.Cells[s+1][t],!0))),h<0&&s>0&&void 0!==this.Cells[s-1][t]&&null!=this.Cells[s-1][t].obj&&0==this.Cells[s-1][t].coin&&(0==i&&(e=this.getFly(this.Cells[s][t])),i++,this.addToFly(e,this.Cells[s-1][t]),h=this.Cells[s-1][t].type,this.killFish(this.Cells[s-1][t],!0),s<Base.GameCols-1&&void 0!==this.Cells[s+1][t]&&null!=this.Cells[s+1][t].obj&&this.Cells[s+1][t].type===h&&0==this.Cells[s+1][t].coin&&(i++,this.addToFly(e,this.Cells[s+1][t]),this.killFish(this.Cells[s+1][t],!0))),h<0&&s<Base.GameCols-1&&void 0!==this.Cells[s+1][t]&&null!=this.Cells[s+1][t].obj&&0==this.Cells[s+1][t].coin&&(0==i&&(e=this.getFly(this.Cells[s][t])),i++,this.addToFly(e,this.Cells[s+1][t]),h=this.Cells[s+1][t].type,this.killFish(this.Cells[s+1][t],!0)),h<0?(this.makeOneFishGone(this.Cells[s][t]),!1):0!=i&&(e.type=h+i,e.type>34&&(e.type=35),this.makeFishMergeFX(e),this.MergeAnimCntr++,e.scoreup=this.DoScoreUp(e.type),this.checkMatch(e,i),!0)},CField.prototype.checkOnCoin=function(s){return!!(this.CellsNum[s]>0&&this.Cells[s][this.CellsNum[s]-1].coin)},CField.prototype.killCoin=function(s){if(this.CellsNum[s]>0){var t=this.Cells[s][this.CellsNum[s]-1];this.killFish(t,!1),t.coin=!1,this.CellsNum[s]--,this.getDistCellsMax()}},CField.prototype.getColBottom=function(s){if(this.CellsNum[s]>0){if(!this.Cells[s][this.CellsNum[s]-1].coin)return this.Cells[s][this.CellsNum[s]-1];if(this.CellsNum[s]-2>=0)return this.Cells[s][this.CellsNum[s]-2]}return this.Pushers[s]},CField.prototype.Kill=function(){this.ActiveFlag&&(this.HelpFlag&&this.StopHelp(),this.Threads.removeThread(this,this.update),this.Threads.removeThread(this,this.updateShift),this.Threads.removeThread(this,this.updateFish),this.FreenzyFlag&&this.StopFreenzy(),this.Clear(),this.ActiveFlag=!1)},CField.prototype.Clear=function(){for(var s=0;s<this.PushersNum;s++)this.Pushers[s].img.kill(),this.Pushers[s].img=null;for(this.PushersNum=0,this.PusherLinesNum=0,s=0;s<Base.GameCols;s++){for(var t=0;t<this.CellsNum[s];t++)null!=this.Cells[s][t].obj&&this.killFish(this.Cells[s][t],!1);this.CellsNum[s]=0}},CField.prototype.KillCells=function(){for(var s=0;s<Base.GameCols;s++){for(var t=0;t<this.CellsNum[s];t++)null!=this.Cells[s][t].img&&this.killFish(this.Cells[s][t],!1);this.CellsNum[s]=0}},CField.prototype.addPushersLine=function(){for(var s=-(this.PusherLinesNum*Base.CellDiam+Base.CellDiam/2),t=0;t<this.ColsNum;t++)void 0===this.Pushers[this.PushersNum]&&(this.Pushers[this.PushersNum]={col:0,img:null}),this.Pushers[this.PushersNum].img=this.Papa.getZeroImg(Base.Lines[t],s,"atlas","startpointBlock.png",this.gameGroup,0),this.Pushers[this.PushersNum].col=t,this.Pushers[this.PushersNum].x=Base.Lines[t],this.Pushers[this.PushersNum].y=s,this.Pushers[this.PushersNum].empty=!0,this.PushersNum++;this.Y_pushtop+=Base.CellDiam,this.PusherLinesNum++},CField.prototype.Stop=function(){this.SpeedDownFlag=!1,this.SpeedUpFlag=!1},CField.prototype.checkCellAlive=function(s,t){return null!=this.Cells[t][s]&&null!==this.Cells[t][s].obj},CField.prototype.update=function(){if(this.SpeedDownFlag&&(this.Y+=this.SpeedDown*Base.RealTimeInt,this.Y>this.Y_pushtop&&this.addPushersLine(),this.ClickAllowFlag&&this.Y+this.DistCellsMax>this.Y_end))this.OnLoose();else if(this.SpeedUpFlag&&(this.Y-=this.SpeedUp*Base.RealTimeInt,this.Y<this.Y_top&&(this.Y=this.Y_top),this.SpeedUp-=this.SpeedUpFade*Base.RealTimeInt,this.SpeedUp<0&&(this.SpeedUp=0,this.SpeedUpFlag=!1)),this.gameGroup.y=this.Y,this.FlysNum>0){this.FlysDist-=5*Base.RealTimeInt,this.FlysDist<0&&(this.FlysDist=0);for(var s=0;s<this.FlysNum;s++)for(var t=this.Flys[s].matches,i=0;i<this.Flys[s].matchesNum;i++)t[i].x=this.Flys[s].dest.x+t[i].dx*this.FlysDist*this.FlysDist,t[i].y=this.Flys[s].dest.y+t[i].dy*this.FlysDist*this.FlysDist,t[i].img.x=t[i].x,t[i].img.y=t[i].y,t[i].img.alpha=this.FlysDist;if(this.FlysDist<=0){for(s=0;s<this.FlysNum;s++){if(this.Flys[s].dest.type=this.Flys[s].type,this.Flys[s].dest.obj.img.frameName=Base.FishPads[this.Flys[s].type],this.Flys[s].dest.obj.top.frameName=Base.FishNums[this.Flys[s].type],this.Flys[s].dest.obj.top.visible=!0,this.Flys[s].dest.obj.img.y+this.Y<550&&!1===this.checkCellAlive(this.Flys[s].dest.row+1,this.Flys[s].dest.col)){if(this.FreenzyFlag)var e=this.Papa.addScorePop(this.Flys[s].dest.obj.img.x,this.gameGroup.y+this.Flys[s].dest.obj.img.y+55,2*this.Flys[s].scoreup,this.FreenzyFlag,this.Flys[s].dest.row,this.Flys[s].dest.col);else e=this.Papa.addScorePop(this.Flys[s].dest.obj.img.x,this.gameGroup.y+this.Flys[s].dest.obj.img.y+55,this.Flys[s].scoreup,this.FreenzyFlag,this.Flys[s].dest.row,this.Flys[s].dest.col);null!=e&&e.setRowCol(this.Flys[s].dest.row,this.Flys[s].dest.col)}for(this.MoveScoreCntr+=this.Flys[s].scoreup,this.MoveMatchesCntr++,i=0;i<this.Flys[s].matchesNum;i++)this.Flys[s].matches[i].img.visible=!1}this.FlysNum=0,this.setSpeedUp(1)}}};