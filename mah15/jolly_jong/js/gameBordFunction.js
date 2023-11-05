function generateBord(){
	Bord = [];
	for (var i = 0;i < Row;i++){
		Bord[i] = [];
		for (var k = 0;k < Cell;k++){
			Bord[i][k] = {empty: true, tileId: "", positionX: k, positionY: i, tileactive: false, innerobject: false};
		}
	}
	return Bord;
}
function clearBord(){
	for (var clearRow in Bord){
		for (var clearCell in Bord[clearRow]){
			if (!Bord[clearRow][clearCell].empty){
				removeTile(Bord[clearRow][clearCell].innerobject);
				//Bord[clearRow][clearCell].innerobject.parent.removeChild(Bord[clearRow][clearCell].innerobject);
				Bord[clearRow][clearCell].innerobject = null;
				Bord[clearRow][clearCell].empty = true;
			}
		}
	}
	/*setTimeout(function(){
		if (isGameStart == false){
			if (tileContainer.children.length>0){
				for (var children in tileContainer.children){
					if (typeof tileContainer.children[children] != "undefined"){
						if (typeof tileContainer.children[children].parent != "undefined"){
							tileContainer.children[children].parent.removeChild(tileContainer.children[children]);
						}
					}
				}
				alert('tileContainer!'+tileContainer.children.length);
			}
			if (tweenContainer.children.length>0){
				for (var children in tweenContainer.children){
					if (typeof tweenContainer.children[children] != "undefined"){
						if (typeof tweenContainer.children[children].parent != "undefined"){
							tweenContainer.children[children].parent.removeChild(tweenContainer.children[children]);
						}
					}
				}
				for (var tween in tweenArray){
					if (typeof tweenArray[tween] != "undefined"){
						if (typeof tweenArray[tween].parent != "undefined"){
							tweenArray[tween].parent.removeChild(tweenArray[tween]);
							delete tweenArray[tweenArray[tween].id];
						}
					}
				}
				setTimeout(function(){
					if (tweenContainer.children.length>0){
						for (var children in tweenContainer.children){
							if (typeof tweenContainer.children[children] != "undefined"){
								if (typeof tweenContainer.children[children].parent != "undefined"){
									tweenContainer.children[children].parent.removeChild(tweenContainer.children[children]);
								}
							}
						}
						setTimeout(function(){
							if (tweenContainer.children.length>0){
								for (var children in tweenContainer.children){
									if (typeof tweenContainer.children[children] != "undefined"){
										if (typeof tweenContainer.children[children].parent != "undefined"){
											tweenContainer.children[children].parent.removeChild(tweenContainer.children[children]);
										}
									}
								}
									//alert('tweenContainer!' + tweenContainer.children.length);
							}
						},300);
					}
				},300);
			}
		}
	},1500);*/
}
function updateBordTile(){
	if (isGameStart){
		if (isUpdateBordStart == false){
			isUpdateBordStart = true;
			compressBord();
			FillBord();
			CheckMatch();
			if (tileContainer.children.length < Cell*Row + 20){
				clearTimeout(checkBordStartTimer);
			}
			checkBordStartTimer = setTimeout(function(){
				if (tileContainer.children.length > Cell*Row){
					var tileContainerArray = {};
					for (var tileChildren in tileContainer.children){
						tileContainerArray[tileContainer.children[tileChildren].id] = tileContainer.children[tileChildren];
					}
					for (var tileRow in Bord){
						for (var tileCell in Bord[tileRow]){
							if (Bord[tileRow][tileCell].empty != true){
								delete tileContainerArray[Bord[tileRow][tileCell].innerobject.id];
							}
						}
					}
					for (var tile in tileContainerArray){
						if (typeof tileContainerArray[tile] != "undefined"){
							if (typeof tileContainerArray[tile].parent != "undefined"){
								tileContainerArray[tile].parent.removeChild(tileContainerArray[tile]);
								delete tileContainerArray[tileContainerArray[tile].id];
							}
						}
					}
				}
				checkBordStartTimer = false;
			},700);
		}
		else{
			clearTimeout(UpdateBordStartTimer);
			UpdateBordStartTimer = setTimeout(function() { updateBordTile(); }, 100);
		}
	}
}
function compressBord(){
	for (var compressRow in Bord){
		for (var compressCell in Bord[compressRow]){
			if (Bord[compressRow][compressCell].empty){
				if (compressRow > 0){
					for (var i = compressRow;i > 0;i--){
						if (!Bord[i-1][compressCell].empty){
							var innerobject = Bord[i-1][compressCell].innerobject;
							Bord[i][compressCell].tileId = Bord[i-1][compressCell].tileId;
							Bord[i-1][compressCell].innerobject = null;
							Bord[i][compressCell].innerobject = innerobject;
							Bord[i-1][compressCell].empty = true;
							Bord[i][compressCell].empty = false;
							animateCompressBordTile(Bord[i][compressCell].innerobject, gamePaddingY + Bord[i][compressCell].positionY*(tileHeight + tileMarginY));
							Bord[i][compressCell].innerobject.row = i;
						}
					}
				}
			}
		}
	}
}
function FillBord(isTutorial){
	for (var FillCell = 0;FillCell < Cell;FillCell++){
		for (var FillRow = Row-1;FillRow >= 0; FillRow--){
			if (Bord[FillRow][FillCell].empty){
				generateTile(FillRow,FillCell);
			}
			else{
				tileContainer.addChild(Bord[FillRow][FillCell].innerobject);
			}
		}
	}
}
function CheckMatch(maxMathes){
	if (!maxMathes){
		maxMathes = 8;
	}
	var CheckMatchArray = {};
	var CMRow, CMCell, CanMatchThisType, StopFindMatchCount, CCR, CCC;
	CheckMatchArray.matchLines = [];
	CheckMatchArray.removingTlies = [];
	for (var CheckRow = 0;CheckRow < Row; CheckRow++){
		for (var CheckCell = 0;CheckCell < Cell;CheckCell++){
			for (var CMType in CMTypes){
				CanMatchThisType = true;
				if (typeof CheckMatchArray.removingTlies[Bord[CheckRow][CheckCell].innerobject.id] != "undefined"){
					if (typeof CheckMatchArray.removingTlies[Bord[CheckRow][CheckCell].innerobject.id][CMType] != "undefined"){
						CanMatchThisType = false;
					}
				}
				if (CanMatchThisType){
					StopFindMatchCount = 0;
					for (var i = 1; i < maxMathes; i++){
						CMRow = CMTypes[CMType].nextRow(CheckRow, i);
						CMCell = CMTypes[CMType].nextCell(CheckCell, i);
						if (CMCell<0){
							continue;
						}
						if ((CMRow < Row) && (CMCell < Cell) && Bord[CMRow][CMCell].tileId == Bord[CheckRow][CheckCell].tileId){
							StopFindMatchCount = i;
						}
						else{
							break;
						}
					}
					if (StopFindMatchCount > 1){
						CheckMatchArray.matchLines.push({
							matchLength:StopFindMatchCount+1,
							x:CMTypes[CMType].getScoreX(StopFindMatchCount+1),
							y:CMTypes[CMType].getScoreY(StopFindMatchCount+1),
							firstTile: Bord[CheckRow][CheckCell].innerobject,
							type:CMType
						});
						for (var i = 0; i <= StopFindMatchCount; i++){
							CCR = CMTypes[CMType].nextRow(CheckRow, i);
							CCC = CMTypes[CMType].nextCell(CheckCell, i);
							if (typeof CheckMatchArray.removingTlies[Bord[CCR][CCC].innerobject.id] == "undefined"){
								CheckMatchArray.removingTlies[Bord[CCR][CCC].innerobject.id] = {};
								CheckMatchArray.removingTlies[Bord[CCR][CCC].innerobject.id].matchLength = StopFindMatchCount+1;
							}
							if (CheckMatchArray.removingTlies[Bord[CCR][CCC].innerobject.id].matchLength < StopFindMatchCount+1){
								CheckMatchArray.removingTlies[Bord[CCR][CCC].innerobject.id].matchLength = StopFindMatchCount+1;
							}
							CheckMatchArray.removingTlies[Bord[CCR][CCC].innerobject.id].innerobject = Bord[CCR][CCC].innerobject;
							CheckMatchArray.removingTlies[Bord[CCR][CCC].innerobject.id][CMType] = true;
						}
					}
				}
			}
		}
	}
	if (CheckMatchArray.removingTlies.length > 0){
		for (var removingTlie in CheckMatchArray.removingTlies){
			var tileMatchType = "tilex4";
			if (CheckMatchArray.removingTlies[removingTlie].matchLength == 3){
				tileMatchType = "tiletime";
			}
			if (CheckMatchArray.removingTlies[removingTlie].matchLength == 4){
				tileMatchType = "tilex2";
			}
			if (CheckMatchArray.removingTlies[removingTlie].matchLength == 5){
				tileMatchType = "tilex3";
			}
			CheckMatchArray.removingTlies[removingTlie].innerobject.alpha = 1;
			CheckMatchArray.removingTlies[removingTlie].innerobject.gotoAndStop(tileMatchType);
			CheckMatchArray.removingTlies[removingTlie].innerobject.tileId = tileMatchType;
		}
		setTimeout(function(){
			if (globalNoSound == false){
				if (Sound.active){
					sounds["x_up"].play(createjs.Sound.INTERRUPT_NONE, 0, 0 , 0, 1);
				}
			}
			for (var matchLine in CheckMatchArray.matchLines){
				scoreBase = scoreBase+5;
				if (CheckMatchArray.matchLines[matchLine].matchLength == 3){
					Time += 5*msTime;
					if (Time > maxTime){
						maxTime = Time;
					}
					timebarscroll.scaleX = timebar.scaleX*(Time/maxTime);
					var addedScore = scoreBase*scoreMuliplicator;
					Score = Score + addedScore;
					changeScore(Score);
					showBonus("time",Math.sqrt(nowBonusAnimateCount)*500);
					nowBonusAnimateCount++;
				}
				if (CheckMatchArray.matchLines[matchLine].matchLength == 4){
					scoreMuliplicator = scoreMuliplicator*2;
					var addedScore = scoreBase*scoreMuliplicator;
					Score = Score + addedScore;
					changeScore(Score);
					showBonus("x2",Math.sqrt(nowBonusAnimateCount)*500);
					nowBonusAnimateCount++;
				}
				if (CheckMatchArray.matchLines[matchLine].matchLength == 5){
					scoreMuliplicator = scoreMuliplicator*3;
					var addedScore = scoreBase*scoreMuliplicator;
					Score = Score + addedScore;
					changeScore(Score);
					showBonus("x3",Math.sqrt(nowBonusAnimateCount)*500);
					nowBonusAnimateCount++;
				}
				if (CheckMatchArray.matchLines[matchLine].matchLength > 5){
					scoreMuliplicator = scoreMuliplicator*4;
					var addedScore = scoreBase*scoreMuliplicator;//(CheckMatchArray.matchLines[matchLine].matchLength*scoreBase)*scoreMuliplicator;
					Score = Score + addedScore;
					changeScore(Score);
					showBonus("x4",Math.sqrt(nowBonusAnimateCount)*500);
					nowBonusAnimateCount++;
				}
				var srtScore = "+" + String(addedScore);
				var outScreenOffset = 0;
				var outScreenOffsetLeft = CheckMatchArray.matchLines[matchLine].x + CheckMatchArray.matchLines[matchLine].firstTile.x - (srtScore.length*numberWidth)/2 + numberMarginX;
				if (outScreenOffsetLeft <= 0){
					outScreenOffset = outScreenOffsetLeft*(-1) + numberWidth;
				}
				if (outScreenOffset == 0){
					var outScreenOffsetRight = CheckMatchArray.matchLines[matchLine].x + CheckMatchArray.matchLines[matchLine].firstTile.x + (srtScore.length - 1)*numberWidth - (srtScore.length*numberWidth)/2 + numberMarginX;
					if ((outScreenOffsetRight + numberWidth) > stage.canvas.width){
						outScreenOffset = ((outScreenOffsetRight + numberWidth*2) - stage.canvas.width)*(-1);
					}
				}
				for (var i = 0; i < srtScore.length;i++){
					var nScore = srtScore[i];
					if (nScore == "+"){
						nScore = "plus";
					}
					var ScoreNumber = new createjs.Sprite(bitmapTiles, "number" + nScore);
					scoreContainer.addChild(ScoreNumber);
					ScoreNumber.x = CheckMatchArray.matchLines[matchLine].x + CheckMatchArray.matchLines[matchLine].firstTile.x + i*numberWidth - (srtScore.length*numberWidth)/2 + numberMarginX + outScreenOffset;
					ScoreNumber.y = CheckMatchArray.matchLines[matchLine].y + CheckMatchArray.matchLines[matchLine].firstTile.y + numberMarginY;
					ScoreNumber.scaleX = ScoreNumber.scaleY = ScoreNumber.scale = 1;
					removeScore(ScoreNumber);
				}
			}
			for (var removingTlie in CheckMatchArray.removingTlies){
				removeTile(CheckMatchArray.removingTlies[removingTlie].innerobject);
			}
			updateBordTile();
		},700);
	}
	isUpdateBordStart = false;
}