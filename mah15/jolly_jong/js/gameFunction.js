function moveHand(thisHand){
	var first = Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject;
	var second = Bord[TutorialStep[TutorialstepCount].second.row][TutorialStep[TutorialstepCount].second.cell].innerobject;
	var firstX = first.x + 20;
	var firstY = first.y + 20;
	var secondX = second.x + 20;
	var secondY = second.y + 20;
	if (!first.active){
		first.gotoAndStop(first.tileIdActive);
	}
	HandTween = createjs.Tween.get(thisHand, {override:true}).to({scaleX: 0.9,scaleY:0.9,x: thisHand.x - 4, y: thisHand.y - 4}, 100, Ease.linear).call(function(){
		HandTween = createjs.Tween.get(thisHand, {override:true}).to({scaleX: 1,scaleY:1,x: thisHand.x + 4, y: thisHand.y + 4}, 100, Ease.linear).call(function(){
			if (!first.active){
				first.gotoAndStop(first.tileId);
			}
			HandTween = createjs.Tween.get(thisHand, {override:true}).to({x:secondX,y:secondY}, 700, Ease.linear).call(function(){
				if (!second.active){
					second.gotoAndStop(second.tileIdActive);
				}
				HandTween = createjs.Tween.get(thisHand, {override:true}).to({scaleX: 0.9,scaleY:0.9,x: thisHand.x - 4, y: thisHand.y - 4}, 100, Ease.linear).call(function(){
					HandTween = createjs.Tween.get(thisHand, {override:true}).to({scaleX: 1,scaleY:1,x: thisHand.x + 4, y: thisHand.y + 4}, 100, Ease.linear).call(function(){
						if (!second.active){
							second.gotoAndStop(second.tileId);
						}
						HandTween = createjs.Tween.get(thisHand, {override:true}).to({x:firstX,y:firstY}, 700, Ease.linear).call(function(){
							moveHand(thisHand);
						});
					});
				});
			});
		});
	});
}
function StartGame(){
	generateBord();
	if (globalNoMusic == false){
		createjs.Tween.get(sounds["menuMusic"], {override:true}).to({volume:0}, 500, Ease.quintOut).call(function(){
			sounds["menuMusic"].setMute(true);
		});
	}
	createjs.Tween.get(timeBarContainer, {override:true}).to({y: 0}, 300, Ease.circOut);
	createjs.Tween.get(scoreWord, {override:true}).to({y: 27}, 300, Ease.circOut).call(function(){
		Score = 0;
		changeScore(Score);
	});
	clearBord();
	FillBord(isTutorial);
	isTutorialBordFill = false;
	if (isTutorial){
		TutorialImg = new createjs.Bitmap(loader.getResult(TutorialStep[TutorialstepCount].image));
		TutorialImg.x = gamePaddingX - tileWidth - tileMarginX + 16;
		TutorialImg.y = gamePaddingY - tileHeight - tileMarginY + 12;
		TutorialImg.alpha = 0;
		tweenContainer.addChild(TutorialImg);
		createjs.Tween.get(TutorialImg, {override:true}).wait(500).to({alpha:1}, 500, Ease.linear);
		Hand.alpha = 1;
		Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.mouseEnabled = true;
		Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.alpha = 1;
		Bord[TutorialStep[TutorialstepCount].second.row][TutorialStep[TutorialstepCount].second.cell].innerobject.mouseEnabled = true;
		Bord[TutorialStep[TutorialstepCount].second.row][TutorialStep[TutorialstepCount].second.cell].innerobject.alpha = 1;
		setTimeout(function(){
			Hand.x = Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.x + 20;
			Hand.y = Bord[TutorialStep[TutorialstepCount].first.row][TutorialStep[TutorialstepCount].first.cell].innerobject.y + 20;
			bonusContainer.addChild(Hand);
			moveHand(Hand);
		}, 200);
	}
	scoreMuliplicator = 1;
	scoreBase = 10;
	Time = baseTime;
	maxTime = baseTime;
	timebarscroll.scaleX = timebar.scaleX;
	setTimeout(function(){
		if (!isTutorial){
			var go = new createjs.Sprite(bitmapWords, "go");
			bonusContainer.addChild(go);
			go.x = gamePaddingX - (tileWidth + tileMarginX)/2 + (Cell/2)*(tileWidth + tileMarginX);
			go.y = gamePaddingY - (tileHeight + tileMarginY)/2 + (Row/2)*(tileHeight + tileMarginY);
			go.scale = 1;
			go.scaleX = 1;
			go.scaleY = 1;
			removeGoTimeup(go);
			if (globalNoSound == false){
				if (Sound.active){
					sounds["go"].play(createjs.Sound.INTERRUPT_NONE, 0, 0 , 0);
				}
			}
		}
		/*clearInterval(TimeIntervalId);
		TimeIntervalId = setInterval(function(){
			
		},1000/msTime);*/
		setTimeout(function(){
			isGamePause = false;
			isGameStart = true;
			updateBordTile();
		},0);
	},450);
}
function ExitGame(){
	PauseGame();
	for (var scoreObj in scoreArray){
		createjs.Tween.get(scoreArray[scoreObj], {override:true}).to({y: -1000}, 250, Ease.circIn);
	}
	createjs.Tween.get(scoreWord, {override:true}).to({y: -1000}, 250, Ease.circIn);
	createjs.Tween.get(Exit, {override:true}).to({y: 1000}, 250, Ease.circIn);
	//createjs.Tween.get(Submit, {override:true}).to({y: 1000}, 250, Ease.circIn);
	createjs.Tween.get(Restart, {override:true}).to({y: 1000}, 250, Ease.circIn).call(function(){
		createjs.Tween.get(Info, {override:true}).to({y: 600}, 250, Ease.circOut);
	});
	if (isGameStart){
		isGameStart = false;
		clearBord();
		if (HandTween){
			HandTween.setPaused(true);
		}
		if (Hand.parent != null){
			Hand.parent.removeChild(Hand);
		}
		if (TutorialImg.parent != null){
			createjs.Tween.get(TutorialImg, {override:true}).to({alpha:0}, 500, Ease.linear).call(function(){
				if (TutorialImg.parent != null){
					TutorialImg.parent.removeChild(TutorialImg);
				}
			});
		}
		isTutorial = false;
		createjs.Tween.get(timeBarContainer, {override:true}).to({y: -1000}, 500, Ease.circIn);
	}
}
function PauseGame(){
	if (isTutorial){
		if (HandTween){
			HandTween.setPaused(true);
		}
	}
	gameContainer.mouseEnabled = false;
	createjs.Tween.get(gameContainer, {override:true}).to({alpha: 0.1}, 150, Ease.circInOut).call(function(){
		createjs.Tween.get(Sound, {override:true}).to({y: 70}, 250, Ease.circOut);
		createjs.Tween.get(Music, {override:true}).to({y: 70}, 250, Ease.circOut);
		createjs.Tween.get(Logo, {override:true}).to({y: 250}, 250, Ease.circOut);
		createjs.Tween.get(Start, {override:true}).to({y: 430}, 250, Ease.circOut);
		if (isGameStart){
			createjs.Tween.get(Restart, {override:true}).to({y: 600}, 250, Ease.circOut);
			createjs.Tween.get(Exit, {override:true}).to({y: 600}, 250, Ease.circOut);
		}
	});
}
function ContinueGame(){
	if (isTutorial){
		if (HandTween){
			HandTween.setPaused(false);
		}
	}
	if (globalNoMusic == false){
		createjs.Tween.get(sounds["menuMusic"], {override:true}).to({volume:0}, 500, Ease.quintOut).call(function(){
			sounds["menuMusic"].setMute(true);
		});
	}
	createjs.Tween.get(Sound, {override:true}).to({y: -1000}, 250, Ease.circIn);
	createjs.Tween.get(Music, {override:true}).to({y: -1000}, 250, Ease.circIn);
	createjs.Tween.get(Logo, {override:true}).to({y: -1000}, 250, Ease.circIn);
	createjs.Tween.get(Info, {override:true}).to({y: 1000}, 250, Ease.circIn);
	createjs.Tween.get(Restart, {override:true}).to({y: 1000}, 250, Ease.circIn);
	//createjs.Tween.get(Submit, {override:true}).to({y: 1000}, 250, Ease.circIn);
	createjs.Tween.get(Exit, {override:true}).to({y: 1000}, 250, Ease.circIn);
	createjs.Tween.get(Start, {override:true}).to({y: 1000}, 250, Ease.circIn).call(function(){
		createjs.Tween.get(gameContainer, {override:true}).to({alpha: 1}, 150, Ease.circInOut).call(function(){
			isGamePause = false;
			gameContainer.mouseEnabled = true;
			if (isGameStart == false){
				StartGame();
			}
		});
	});
}
function StopGame(){
	if (globalNoMusic == false){
		sounds["gameMusic"].setMute(true);
		sounds["menuMusic"].setVolume(0);
		if (Music.active){
			sounds["menuMusic"].play(createjs.Sound.INTERRUPT_NONE, 0, 0 , -1);
		}
		sounds["menuMusic"].setMute(false);
		createjs.Tween.get(sounds["menuMusic"], {override:true}).to({volume:1}, 1000, Ease.quintIn);
	}
	isGameStart = false;
	timeup = new createjs.Sprite(bitmapWords, "timeup");
	bonusContainer.addChild(timeup);
	timeup.x = gamePaddingX - (tileWidth + tileMarginX)/2 + (Cell/2)*(tileWidth + tileMarginX);
	timeup.y = gamePaddingY - (tileHeight + tileMarginY)/2 + (Row/2)*(tileHeight + tileMarginY);
	timeup.scale = 1;
	timeup.scaleX = 1;
	timeup.scaleY = 1;
	timeup.cursor = "pointer";
	removeGoTimeup(timeup);
	if (globalNoSound == false){
		if (Sound.active){
			sounds["s1"].play(createjs.Sound.INTERRUPT_NONE, 0, 0 , 0);
		}
	}
	clearBord();
	setTimeout(function(){
		createjs.Tween.get(timeBarContainer, {override:true}).to({y: -1000}, 500, Ease.circIn).call(function(){
		
		});
		createjs.Tween.get(scoreWord, {override:true}).to({y: scoreWord.y + 350}, 500, Ease.circOut).call(function(){
			createjs.Tween.get(Sound, {override:true}).to({y: 70}, 250, Ease.circOut);
			createjs.Tween.get(Music, {override:true}).to({y: 70}, 250, Ease.circOut);
			createjs.Tween.get(Logo, {override:true}).to({y: 250}, 250, Ease.circOut);
			createjs.Tween.get(Restart, {override:true}).to({y: 600}, 350, Ease.circOut);
			createjs.Tween.get(Exit, {override:true}).to({y: 600}, 350, Ease.circOut);
			//createjs.Tween.get(Submit, {override:true}).to({y: 480}, 350, Ease.circOut);
		});
		var difScoreTime = 0;
		for (var scoreObj in scoreArray){
			difScoreTime += 50;
			createjs.Tween.get(scoreArray[scoreObj], {override:true}).to({y: scoreArray[scoreObj].y + 350}, 600 + difScoreTime, Ease.circOut).call(function(){
				
			});
		}
		/*var newscore = new NScore().init();
        newscore.setValue(Score);
		nuggetaPlug.submitScoreWithPlayerNameRequest("AnonymousPlayerName", newscore, "Highscores", function (submitScoreResponse){
			document.getElementById("test").innerHTML = "Score of " + Score + " submitted<br>";
		});*/
	},1200);
}
function removeGoTimeup(linkword){
	var word = linkword;
	//createjs.Tween.get(word, {override:true}).to({y:word.y}, 200, Ease.cubicOut).call(function(){
		createjs.Tween.get(word, {override:true}).to({y:word.y-40}, 700, Ease.cubicOut).call(function(){
			createjs.Tween.get(word, {override:true}).to({alpha:0, visible:false}, 100, Ease.linear).call(function(){
				word.parent.removeChild(word);
			});
		});
	//});
}
function RestartGame(){
	if (isTutorial){
		if (HandTween){
			HandTween.setPaused(true);
		}
		Hand.parent.removeChild(Hand);
		createjs.Tween.get(TutorialImg, {override:true}).to({alpha:0}, 500, Ease.linear).call(function(){
			TutorialImg.parent.removeChild(TutorialImg);
		});
	}
	isTutorial = false;
	if (isGameStart == true){
		isGameStart == false;
		clearBord();
		createjs.Tween.get(Start, {override:true}).to({y: 1000}, 250, Ease.circIn).call(function(){
			createjs.Tween.get(gameContainer, {override:true}).to({alpha: 1}, 150, Ease.circInOut).call(function(){
				gameContainer.mouseEnabled = true;
			});
		});
	}
	createjs.Tween.get(Sound, {override:true}).to({y: -1000}, 250, Ease.circIn);
	createjs.Tween.get(Music, {override:true}).to({y: -1000}, 250, Ease.circIn);
	createjs.Tween.get(Exit, {override:true}).to({y: 1000}, 250, Ease.circOut);
	createjs.Tween.get(Restart, {override:true}).to({y: 1000}, 250, Ease.circOut);
	//createjs.Tween.get(Submit, {override:true}).to({y: 1000}, 250, Ease.circIn);
	createjs.Tween.get(Logo, {override:true}).to({y: -1000}, 250, Ease.circIn).call(function(){
		createjs.Tween.get(scoreWord, {override:true}).to({y: 27}, 500, Ease.circOut).call(function(){
			setTimeout(function(){
				StartGame();
			},500);
		});
		var difScoreTime = 0;
		for (var scoreObj in scoreArray){
			difScoreTime += 50;
			createjs.Tween.get(scoreArray[scoreObj], {override:true}).to({y: 37 + numberMarginY}, 600 + difScoreTime, Ease.circOut);
		}
	});
}
function resizeCanvas(){
	var x,y;
	var canvasHolder = document.getElementById("canvasHolder");
	var Canvas = document.getElementById("Canvas");
	if (document.documentElement && document.documentElement.clientHeight) {
	  x = document.documentElement.clientWidth;
	  y = document.documentElement.clientHeight;
   }
   else if (self.innerHeight) {
	  x = self.innerWidth;
	  y = self.innerHeight;
   } else if (document.body) {
	  x = document.body.clientWidth;
	  y = document.body.clientHeight;
   }
   if (y/CanvasHeight < x/CanvasWidth){
		canvasHolder.style.height = y + 'px';
		canvasHolder.style.width = (y/CanvasHeight)*CanvasWidth + 'px';
		canvasHolder.style.left = (x - (y/CanvasHeight)*CanvasWidth)/2 + 'px';
		canvasHolder.style.top = 0 + 'px';
		Canvas.style.height = y + 'px';
		Canvas.style.width = (y/CanvasHeight)*CanvasWidth + 'px';
	   
   }
   else{
		canvasHolder.style.height = (x/CanvasWidth)*CanvasHeight + 'px';
		canvasHolder.style.width = x + 'px';
		canvasHolder.style.left = 0 + 'px';
		canvasHolder.style.top = (y - (x/CanvasWidth)*CanvasHeight)/2 + 'px';
		Canvas.style.height = (x/CanvasWidth)*CanvasHeight + 'px';
		Canvas.style.width = x + 'px';
   }
}
//document.getElementById("test").innerHTML = allProperties(obj, objName, full);
function allProperties(obj, objName, full){
	var result = "";
	for (var i in obj) //на каждом шаге обращаемся к свойствам объекта по индексу
		if (typeof obj[i] == 'object'){
			if (full){
				result += "<br />\n" + objName + "." + i + " = " + allProperties(obj[i], i);
			}
			else{
				result += "<br />\n" + objName + "." + i + " = " + obj[i];
			}
		}
		else{
			result += "<br />\n" + objName + "." + i + " = " + obj[i];
		}
	return result;
}