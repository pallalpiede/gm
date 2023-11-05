function generateTile(TileRow,TileCell){
	Id = Tiles[Math.floor(Math.random() * (Tiles.length))].id;
	var tileActive = true;
	if (isTutorialBordFill){
		Id = TutorialBord[TileRow][TileCell];
	}
	if (isTutorial){
		tileActive = false;
	}
	var bitmap = new createjs.Sprite(bitmapTiles, Id);
	tileContainer.addChild(bitmap);
	bitmap.x = gamePaddingX + Bord[TileRow][TileCell].positionX*(tileWidth + tileMarginX);
	bitmap.ToX = bitmap.x;
	bitmap.y = -100;
	bitmap.ToY = gamePaddingY + Bord[TileRow][TileCell].positionY*(tileHeight + tileMarginY);
	bitmap.cursor = "pointer";
	bitmap.scale = 1;
	bitmap.scaleX = 1;
	bitmap.scaleY = 1;
	bitmap.active = false;
	bitmap.row = TileRow;
	bitmap.cell = TileCell;
	bitmap.tileId = Id;
	bitmap.tileIdActive = Id + "active";
	bitmap.mouseEnabled = tileActive;
	if (!tileActive){
		bitmap.alpha = 1;
	}
	moveToRow(bitmap);
	if (typeof Bord[TileRow][TileCell].innerobject != "undefined"){
		if (Bord[TileRow][TileCell].innerobject != null){
			if (typeof Bord[TileRow][TileCell].innerobject.parent != "undefined"){
				Bord[TileRow][TileCell].innerobject.parent.removeChild(Bord[TileRow][TileCell].innerobject);
			}
		}
	}
	Bord[TileRow][TileCell].innerobject = bitmap;
	Bord[TileRow][TileCell].tileId = Id;
	Bord[TileRow][TileCell].empty = false;
	bitmap.on("mousedown", function(evt) {
		if (globalNoSound == false){
			if (Sound.active){
				sounds["fishka_click"].play(createjs.Sound.INTERRUPT_NONE, 0, 0 , 0, 0.5);
			}
		}
		if (isGameStart){
			//Поворот строки
			/*
			var thisrow = this.row;
			for (var k = 0;k < Cell/2;k++){
				if (Bord[thisrow][k].innerobject.id != Bord[thisrow][Cell - k - 1].innerobject.id){
					var tmpCell = Bord[thisrow][k];
					Bord[thisrow][k] = Bord[thisrow][Cell - k - 1];
					Bord[thisrow][k].positionX = k;
					Bord[thisrow][Cell - k - 1] = tmpCell;
					Bord[thisrow][Cell - k - 1].positionX = Cell - k - 1;
					Bord[thisrow][k].innerobject.ToX = gamePaddingX + Bord[thisrow][k].positionX*(tileWidth + tileMarginX);
					Bord[thisrow][Cell - k - 1].innerobject.ToX = gamePaddingX + Bord[thisrow][Cell - k - 1].positionX*(tileWidth + tileMarginX);
					Bord[thisrow][k].innerobject.cell = k;
					Bord[thisrow][Cell - k - 1].innerobject.cell = Cell - k - 1;
					moveToCell(Bord[thisrow][k].innerobject);
					moveToCell(Bord[thisrow][Cell - k - 1].innerobject, true);
				}
			}
			FillBord();
			updateBordTile();
			*/
			//Поворот строки
			//Схлопывание двух фишек
			if (this.active){
				this.active = false;
				this.gotoAndStop(this.tileId);
				activetileId = null;
				activeTile = null;
				updateBordTile();
			}
			else{
				if (activetileId == this.tileId){
					scoreBase = scoreBase+5;
					var addedScore = scoreBase*scoreMuliplicator;
					Score = Score + addedScore;
					changeScore(Score);
					var srtScore = "+" + String(addedScore);
					var outScreenOffset = 0;
					var outScreenOffsetLeft = this.x - (srtScore.length*numberWidth)/2 + numberMarginX + outScreenOffset;
					if (outScreenOffsetLeft <= 0){
						outScreenOffset = outScreenOffsetLeft*(-1) + numberWidth;
					}
					if (outScreenOffset == 0){
						var outScreenOffsetRight = this.x + (srtScore.length - 1)*numberWidth - (srtScore.length*numberWidth)/2 + numberMarginX + outScreenOffset;
						if ((outScreenOffsetRight + numberWidth) > stage.canvas.width){
							outScreenOffset = ((outScreenOffsetRight + numberWidth*2) - stage.canvas.width)*(-1);
						}
					}
					for (var i = 0; i < srtScore.length;i++){
						var nScore = srtScore[i];
						if (nScore == "+"){
							nScore = "plus";
						}
						var ScoreNumber = new createjs.Sprite(bitmapTiles, "number"+nScore);
						scoreContainer.addChild(ScoreNumber);
						ScoreNumber.x = this.x + i*numberWidth - (srtScore.length*numberWidth)/2 + numberMarginX + outScreenOffset;
						ScoreNumber.y = this.y + numberMarginY;
						ScoreNumber.scaleX = ScoreNumber.scaleY = ScoreNumber.scale = 1;
						removeScore(ScoreNumber);
					}
					removeTile(this);
					removeTile(activeTile);
					delete activeTile;
					activetileId = '';
					updateBordTile();
					if (isTutorial){
						TutorialstepCount++;
						if (TutorialstepCount < TutorialStep.length){
							if (HandTween){
								HandTween.setPaused(true);
							}
							Hand.parent.removeChild(Hand);
							createjs.Tween.get(TutorialImg, {override:true}).to({alpha:0}, 500, Ease.linear).call(function(){
								TutorialImg.parent.removeChild(TutorialImg);
								TutorialImg = new createjs.Bitmap(loader.getResult(TutorialStep[TutorialstepCount].image));
								TutorialImg.x = gamePaddingX - tileWidth - tileMarginX + 16;
								TutorialImg.y = gamePaddingY - tileHeight - tileMarginY + 12;
								TutorialImg.alpha = 0; 
								tweenContainer.addChild(TutorialImg);
								createjs.Tween.get(TutorialImg, {override:true}).wait(500).to({alpha:1}, 1000, Ease.linear);
							});
							Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.mouseEnabled = true;
							Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.alpha = 1;
							Bord[TutorialStep[TutorialstepCount].second.row][TutorialStep[TutorialstepCount].second.cell].innerobject.mouseEnabled = true;
							Bord[TutorialStep[TutorialstepCount].second.row][TutorialStep[TutorialstepCount].second.cell].innerobject.alpha = 1;
							setTimeout(function(){
								Hand.x = Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.x + 20;
								Hand.y = Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.y + 20;
								bonusContainer.addChild(Hand);
								moveHand(Hand);
							},1200);
						}
						else{
							if (HandTween){
								HandTween.setPaused(true);
							}
							Hand.parent.removeChild(Hand);
							createjs.Tween.get(TutorialImg, {override:true}).to({alpha:0}, 500, Ease.linear).call(function(){
								TutorialImg.parent.removeChild(TutorialImg);
							});
							
							setTimeout(function(){
								for (var activateRow in Bord){
									for (var activateCell in Bord[activateRow]){
										Bord[activateRow][activateCell].innerobject.mouseEnabled = true;
										Bord[activateRow][activateCell].innerobject.alpha = 1;
									}
								}
							},1000);
							setTimeout(function(){
								isTutorial = false;
								var go = new createjs.Sprite(bitmapWords, "go");
								bonusContainer.addChild(go);
								go.x = gamePaddingX - (tileWidth + tileMarginX)/2 + (Cell/2)*(tileWidth + tileMarginX);
								go.y = gamePaddingY - (tileHeight + tileMarginY)/2 + (Row/2)*(tileHeight + tileMarginY);
								go.scale = 1;
								go.scaleX = 1;
								go.scaleY = 1;
								removeGoTimeup(go);
								if (globalNoSound == false){
									sounds["go"].play(createjs.Sound.INTERRUPT_NONE, 0, 0 , 0);
								}
							},1450);
						}
					}
				}
				else{
					if (activeTile){
						activeTile.gotoAndStop(activeTile.tileId);
						activeTile.active = false;
					}
					activetileId = this.tileId;
					activeTile = this;
					this.active = true;
					//FillBord();
					this.gotoAndStop(this.tileIdActive);
				}
			}
			//Схлопывание двух фишек
		}
	});
}
function removeTile(thisTile){
	Bord[thisTile.row][thisTile.cell].empty = true;
	Bord[thisTile.row][thisTile.cell].innerobject = null;
	animateRemovingTile(thisTile);
}
function animateRemovingTile(thisTile){
	tweenContainer.addChild(thisTile);
	thisTile.removeAllEventListeners();
	//tweenArray[thisTile.id] = thisTile;
	var thisintervalid = {};
	thisintervalid.difY = stage.canvas.height - thisTile.y;
	thisintervalid.tweenTime = 250 + thisintervalid.difY
	thisintervalid.minoffsetX = Math.floor(15*Math.sqrt(thisintervalid.difY/100) + Math.floor(Math.random()*15));
	thisintervalid.difSpeed = 1 + (Math.random() * 0.5);
	thisintervalid.way = Math.floor(Math.random()*2);
	if (thisintervalid.way == 0){
		thisintervalid.minoffsetX = thisintervalid.minoffsetX * (-1);
	}
	thisTile.gotoAndStop(thisTile.tileId);
	createjs.Tween.get(thisTile, {override:true}).to({x:thisTile.x+(thisintervalid.minoffsetX)*thisintervalid.difSpeed, y:stage.canvas.height+100}, thisintervalid.tweenTime, Ease.getBackIn(1.5*thisintervalid.difSpeed)).call(function(){
		if (typeof thisTile != "undefined" && thisTile != null){
			if (typeof thisTile.parent != "undefined" && thisTile.parent != null){
				thisTile.parent.removeChild(thisTile);
				//delete tweenArray[thisTile.id];
			}
		}
	});
	/*setTimeout(function(){
		for (var tween in tweenArray){
			if (typeof tweenArray[tween] != "undefined"){
				if (typeof tweenArray[tween].parent != "undefined"){
					tweenArray[tween].parent.removeChild(tweenArray[tween]);
					delete tweenArray[tweenArray[tween].id];
				}
			}
		}
	},1500);*/
}
function moveToCell(Tile, direct){
	var thisTile = Tile;
	createjs.Tween.get(thisTile, {override:true}).to({x:thisTile.ToX}, 200, Ease.circInOut).call(function(){
		booooinc_inv(thisTile, direct);
	});
}
function moveToRow(Tile){
	var thisTile = Tile;
	createjs.Tween.get(thisTile, {override:true}).to({y:thisTile.ToY}, 200, Ease.circInOut).call(function(){
		booooinc(thisTile);
	});
}
function booooinc_inv(Tile, direct){
	var thisTile = Tile;
	if (direct){
		createjs.Tween.get(thisTile, {override:true}).to({scaleX: 0.9,scaleY:1.1,x:thisTile.x+8}, 70, Ease.elasticInOut ()).call(function(){
			createjs.Tween.get(thisTile, {override:true}).to({scaleX: 1,scaleY:1,x:thisTile.x-8}, 70, Ease.elasticInOut ());
		});
	}
	else{
		createjs.Tween.get(thisTile, {override:true}).to({scaleX: 0.9,scaleY:1.1,x:thisTile.x-8}, 70, Ease.elasticInOut ()).call(function(){
			createjs.Tween.get(thisTile, {override:true}).to({scaleX: 1,scaleY:1,x:thisTile.x+8}, 70, Ease.elasticInOut ());
		});
	}
}
function booooinc(Tile){
	var thisTile = Tile;
	createjs.Tween.get(thisTile, {override:true}).to({scaleX: 1.1,scaleY:0.9,y:thisTile.y+8}, 70, Ease.elasticInOut ()).call(function(){
		createjs.Tween.get(thisTile, {override:true}).to({scaleX: 1,scaleY:1,y:thisTile.y-8}, 70, Ease.elasticInOut ());
	});
}
function animateCompressBordTile(Tile, ToY){
	var thisTile = Tile;
	createjs.Tween.get(thisTile, {override:true}).to({y:ToY}, 200, Ease.circInOut).call(function(){
		booooinc(thisTile);
	});
}