function changeScore(Score){
	for (var scoreObj in scoreArray){
		scoreArray[scoreObj].parent.removeChild(scoreArray[scoreObj]);
	}
	scoreArray.splice(0,scoreArray.length);
	var srtScore = String(Score);
	for (var i = 0; i < srtScore.length;i++){
		var nScore = srtScore[i];
		var ScoreNumber = new createjs.Sprite(bitmapTiles, "number"+nScore);
		container.addChild(ScoreNumber);
		ScoreNumber.x = 260 + i*numberWidth + numberMarginX;
		ScoreNumber.y = 37 + numberMarginY;
		ScoreNumber.scaleX = ScoreNumber.scaleY = ScoreNumber.scale = 1;
		scoreArray.push(ScoreNumber);
	}
}
function removeScore(Score){
	setTimeout(function(){
		animateRemovingScore(Score);
	},500);
}
function animateRemovingScore(Score){
	var thisTile = Score;
	thisTile.removeAllEventListeners();
	createjs.Tween.get(thisTile, {override:true}).to({y:thisTile.y-40}, 700, Ease.cubicOut).call(function(){
		createjs.Tween.get(thisTile, {override:true}).to({alpha:0, visible:false}, 100, Ease.linear).call(function(){
			if (typeof thisTile != "undefined"){
				if (typeof thisTile.parent != "undefined"){
					thisTile.parent.removeChild(thisTile);
				}
			}
		});
	});
}
function showBonus(bonusType){
	var bonus = new createjs.Sprite(bitmapWords, bonusType);
	bonusContainer.addChild(bonus);
	bonus.x = gamePaddingX - (tileWidth + tileMarginX)/2 + (Cell/2)*(tileWidth + tileMarginX);
	bonus.y = gamePaddingY - (tileHeight + tileMarginY)/2 + (Row/2)*(tileHeight + tileMarginY);
	bonus.scale = 0.5;
	bonus.scaleX = 0.5;
	bonus.scaleY = 0.5;
	bonus.alpha = 0;
	bonus.visible = false;
	if (nowBonusAnimate != false){
		bonusContainer.removeChild(nowBonusAnimate);
	}
	nowBonusAnimate = bonus;
	bonus.alpha = 1;
	bonus.visible = true;
	createjs.Tween.get(bonus, {override:true}).to({scaleX:1,scaleY:1}, 1000, Ease.cubicOut).call(function(){
		createjs.Tween.get(bonus, {override:true}).to({alpha:0, visible:false}, 100, Ease.linear).call(function(){
			if (typeof bonus != "undefined" && bonus != null){
				if (typeof bonus.parent != "undefined" && bonus.parent != null){
					bonus.parent.removeChild(bonus);
				}
			}
			nowBonusAnimate = false;
		});
	});
}