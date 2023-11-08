var ThirdParty = {

centerHorizontally: true,
centerVertically: true,
showRotateHint: true,
enableFullscreenToggle: false,
splashScreen: 'img/CoolmathGames-800x480.png', // Coolmath
showShareIcon: false, // Coolmath
showCookieBar: false, // Coolmath

// Called when all assets have been loaded
loadingComplete: function()
{
	 //console.log('API: loadingComplete');
},

// Called when the main menu is showed
mainMenu: function() 
{
	//console.log('API: mainMenu');
},

gameHelp: function() 
{
	//GameAnalytics.hit('GameHelp');
},

// Called when the game (first level) starts
gameStart: function(level) 
{
	// Coolmath:
	try {
		if (level) {
			parent.cmgGameEvent('start', level);
		} 
		else{
			parent.cmgGameEvent('start');
		}
	} catch(e) {};
},

// Called when a level is completed
levelComplete: function(level) 
{
	//GameAnalytics.hit('LevelComplete', level);
},

// Called when game over
gameOver: function() 
{
	//GameAnalytics.hit('GameOver');
},

// Called when game is restarted
restartGame: function() 
{
	// Coolmath:
	try {
		parent.cmgGameEvent('replay', 1); 
	} catch(e) {};
},

// Called when game is completed (all levels completed)
gameComplete: function() 
{
	//GameAnalytics.hit('GameComplete');
},

showLeaderboard: function()
{
	// Coolmath:
	return;
},

// Called when user is ready to submit a score.
submitScore: function(score) 
{
	// Coolmath:
	return;
}

};
