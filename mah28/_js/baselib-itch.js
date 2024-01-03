'use strict';
	
Array.prototype.shuffle = function() {

	for(var i = this.length, x, tmp; i; ) {
		
		x = Math.floor( Math.random() * i-- );
		tmp = this[i];
		this[i] = this[x];
		this[x] = tmp;
  	}
  	 	
}



Array.prototype.clone = function() {
	var arr = this.slice(0);
	for ( var i = 0, len = this.length; i < len; i++ )
		if( this[i].clone ) 
			arr[i] = this[i].clone();
   
	return arr;
}


// Copyright 2018-2022 by Rene Trost, SyncByte Solutions Germany
var b1 = [];
var boardTiles = [];
var moveableTiles = [];
var matches = [];
var removedTiles = [];
var solver = false;

var boardRedraw = false;

var timerIRQ = 0, startTime = 0;

var factor = 1.0;
var baseX, baseY;
var stepX = 96/2 * factor, stepY = 128/2 * factor, stepZ = 16 * factor;
var symbolHeight = 128 * factor;


var app, scene;

const mouse = { x: 0, y:0, bnt1: 0, bnt2: 0, bnt3: 0 };


var msizeX = 110 * factor, msizeY = 142 * factor;
var offsetX = 17 * factor, offsetY = 17 * factor;
var files = { 
	maintexture:	{ url: '_gfx/mahjong-texture.png' },
	click1: 		{ url: '_sfx/click-01.mp3', 	type: 'sfx' },
	click2: 		{ url: '_sfx/click-02.mp3', 	type: 'sfx' },
	remove: 		{ url: '_sfx/remove.mp3', 		type: 'sfx' }
}

var tile1, tile2, symTex;


var opts = {

	bg: { pattern: 'backImage', color: '#669933' }
}



function FirstResponder() {

	app = new PIXI.Application( { width: window.innerWidth, height: window.innerHeight, resolution: window.devicePixelRatio, autoDensity: true, transparent: true, antialias: false, autoStart: false } );	
	app.view.id = 'canvas';
	document.body.appendChild( app.view );
	
	scene = new PIXI.Container();	
	app.stage.addChild(scene);
	
	window.addEventListener( 'resize', ContextResize, false );	
	
	LoadingLoop();
	
}


function LoadingLoop() {

	if( !files.hasOwnProperty('toLoad') ) {
	
		files.toLoad = 0;
		for(var name in files) {
			
			if(files[name].url && ['png','jpg'].indexOf( files[name].url.substr(-3).toLowerCase() ) > -1 && !files[name].image ) {

				files[name].image = new Image();
				files[name].image.id = name;
				files[name].image.addEventListener('load', function(e) {
					 
						this.onload = null; 
						files.toLoad--; 
						if(files[this.id].callback) files[this.id].callback(this); 

				}, false);

				files[name].image.src = files[name].url;
				files.toLoad++;
	
			} else if(audiolib.atx && files[name].url && ['wav','mp3'].indexOf( files[name].url.substr(-3).toLowerCase() ) > -1 && !files[name].load ) {

				files[name].load = true;
				audiolib.load( { uid: name, url: files[name].url, type: files[name].type, callback: (e) => files.toLoad-- });
				files.toLoad++;

			}			
		}
	}



	if(files.toLoad === 0) {

		FirstInit();		
		return true;
			
	} else
		requestAnimationFrame( LoadingLoop );

}



function ContextResize() {
	
	var targetWidth = 1920 * factor, targetHeight = 1080 * factor;	
    var w = window.innerWidth, h = window.innerHeight;


 	app.renderer.resize( w, h );


	scene.pivot.set( targetWidth / 2, targetHeight / 2 );
	scene.position.set( w / 2, h / 2);
	
	var scaleX = w / targetWidth;
	var scaleY = h / targetHeight;
	var scale = Math.min(scaleX, scaleY);
	scene.scale.set( scale, scale );
	
	window.scrollTo(0, 0);
	boardRedraw = true;
	
}



function ToggleFullscreen(obj) {

	if(document.fullscreenElement) 
		document.exitFullscreen();
	else
		obj.requestFullscreen();	
	
}


function FirstInit() {

	ContextResize();
	CreateTileTextures();
	BakeBackground();
	document.body.addEventListener('transitionend', InitBoard );
	document.body.style.transition = 'opacity 1s linear';		
	document.body.style.opacity = 1;

}


function CreateTileTextures() {
	
	symTex = [];
	
	files.maintexture.texture = new PIXI.BaseTexture.from(files.maintexture.image);
	for(var i = 0; i < 42; i++) {
		var x = (i % 9) * 96 * factor;
		var y = Math.floor(i / 9) * 128 * factor;

		symTex.push( new PIXI.Texture( files.maintexture.texture, new PIXI.Rectangle( x, y, 96 * factor, 128 * factor)) );
	}
	
	
	tile1 = new PIXI.Texture( files.maintexture.texture, new PIXI.Rectangle(96 * 9 * factor, 0, 160 * factor, 192 * factor));
	tile2 = new PIXI.Texture( files.maintexture.texture, new PIXI.Rectangle(96 * 9 * factor, 256 * factor, 160 * factor, 192 * factor));	
	
	
}

function BakeBackground() {

	// Create canvas from texture image for pattern
	var pcan = document.createElement('canvas');
	var pctx = pcan.getContext('2d');
	pcan.width = pcan.height = 384 * factor * (window.devicePixelRatio / 2);
	pctx.drawImage( files.maintexture.image, 384 * factor, 640 * factor, 384 * factor, 384 * factor, 0, 0, pcan.width, pcan.height );
	
	// Create canvas according to screen resolution
	var tcan = document.createElement('canvas');
	var tctx = tcan.getContext('2d');
	var cw = window.innerWidth * window.devicePixelRatio, ch = window.innerHeight * window.devicePixelRatio;
	tcan.width =  cw; tcan.height = ch;	

	var pat = tctx.createPattern( pcan, "repeat" );
	tctx.rect(0, 0, cw, ch);
	tctx.fillStyle = pat;
	tctx.fill();
	
	tctx.globalCompositeOperation = 'multiply';
	tctx.rect(0, 0, cw, ch);
	tctx.fillStyle = opts.bg.color;
	tctx.fill();	

	tctx.globalAlpha = 0.8;
	tctx.drawImage( files.maintexture.image, 0, 640 * factor, 384 * factor, 384 * factor, 0, 0, tcan.width, tcan.height );
	
	app.view.style.backgroundImage = 'url('+tcan.toDataURL('image/png')+')';
	app.view.style.backgroundSize = 'cover';
	app.view.style.backgroundPosition = 'center';

}


function InitBoard() {
		
	b1 = layouts['dragon'];
	baseX = (1920 / 2 * factor) - ((b1[0][0].length * stepX) / 2) - stepZ;	
	baseY = (1080 / 2 * factor) - ((b1[0].length    * stepY) / 2) - stepZ;
	
	solver = true;
		
	LayoutReset();	
	InitTiles();		
	CheckMoves();
	Solver();
	

}

function InitBoardFinal() {

	StopTimer();	
	SetSprites();
	CheckMoves();
	TileMagic( 0 );
	GameLoop();
			
}


function LayoutCountTiles() {

	var numTiles = 0;
	
	for (var z = b1.length-1; z >= 0; z--)
		for (var y = b1[z].length-1; y >= 0; y -= 2)  
			for (var x = b1[z][y].length-1; x >= 0; x -= 2) 
				if (b1[z][y][x] > 0) numTiles++;
				
	return numTiles;
}


function LayoutReset() {
		
	for (var z = b1.length-1; z >= 0; z--)
		for (var y = b1[z].length-1; y >= 0; y--)  
			for (var x = b1[z][y].length-1; x >= 0; x--) 
				if (b1[z][y][x] != 0) b1[z][y][x] = 1;
				
}


function GameLoop() {

	if(boardRedraw) { 
		app.render();
		boardRedraw = false;
		
	}
	
	requestAnimationFrame(GameLoop);
}


function InitTiles() {
	
	boardTiles.length = 0;
	moveableTiles.length = 0;
	matches.length = 0;
	removedTiles.length = 0;
	
	const numPairs = LayoutCountTiles() >> 1;
			
	const texIDs = new Array(72).fill(0);
	texIDs.forEach( (v, i, a) => a[i] = (i % 36) );
	texIDs.shuffle();
	
	const tiles = [];
	
	for(var i = 0; i < numPairs; i++) {
		
		const tileID = (texIDs[i] > 32) ? texIDs[i]+6 : texIDs[i];
		
		switch (tileID) {
			case 31:
				if(!tiles.includes(31)) tiles.push(31,32);
				else tiles.push(33,34)
				break;
			case 32:
				if(!tiles.includes(35)) tiles.push(35,36);
				else tiles.push(37,38)
				break;
			default:
				tiles.push( tileID, tileID );
					
		} 
		
	}

	tiles.shuffle();
	boardTiles.length = 0;
	
	// assign tile ids on board layout
	for( var z = 0, i = 0; z < b1.length; z++ ) {
		for( var y = 0; y < b1[0].length; y++ ) {
			for( var x = 0; x < b1[0][0].length; x++ ) {	
			
				if( b1[z][y][x] !== 1 ) continue;	
								
				// mark as drawn	
				b1[z][y+0][x+0] = 2;
				b1[z][y+0][x+1] = 2;
				b1[z][y+1][x+1] = 2;
				b1[z][y+1][x+0] = 2;
				
				const tidx = tiles[i];
				const pidx = (tidx >= 31 && tidx <= 34) ? 31 : (tidx >= 35 && tidx <= 38) ? 35 : tidx; // map tileID to pairID
				
				// pairID, x, y, z, drawMode [0/1/2], removeable [true/false], textureID, removed order 	
				boardTiles.push( [pidx, x, y, z, 1, false, tidx, -1] );
				
				i++;
			}
		}
	}

	boardTiles.sort( (a, b) => ( ( a[3]*1000 + a[2] + a[1] ) - ( b[3]*1000 + b[2] + b[1] ) )  );
	

			 
}


function CreateSprites() {
	

	for( var n = 0; n < 144; n++ ) {
		
		const box = new PIXI.Container();
		const sp1 = new PIXI.Sprite( tile1 );
		const sp2 = new PIXI.Sprite( symTex[0] );
		
		box.visible = false;
		sp2.on('pointerdown', HandleClick );
		sp2.position.set( 15 * factor, 14 * factor );
	
		box.addChild( sp1, sp2);
		scene.addChild( box );
	}

}




function SetSprites() {

	const sprs = scene.children;
	
	if(sprs.length == 0) CreateSprites();
		
	for( var n = 0; n < boardTiles.length; n++ ) {
											
		const box = sprs[n];
		const sp1 = sprs[n].children[0];
		const sp2 = sprs[n].children[1];

		const x = boardTiles[n][1];
		const y = boardTiles[n][2];
		const z = boardTiles[n][3];
		const i = boardTiles[n][6];
		
		box.name = n;						 
		box.x = Math.floor( baseX + (stepX * x) - (stepZ * z) );
		box.y = Math.floor( baseY + (stepY * y) - (stepZ * z) );
		box.alpha = 0.0;
		box.visible = true;
									
		sp1.texture = tile1;
		sp1.tint = 0xe0e0e0;
		sp1.alpha = 1.0;	
			
		sp2.texture = symTex[i];
		sp2.tint = 0xffffff;
		sp2.alpha = 0.75;
		sp2.interactive = false;
	
	}
	

	
}


function TileMagic( n ) {

	if( solver ) return;

	n = (n < boardTiles.length) ? n+1 : n;
	
	for(var x = 0, s = 0; x < n; x++) {
		if( scene.children[x].alpha < 1.0 ) {
			scene.children[x].alpha += 1/32;
			s = 1;
		} else if(x == boardTiles.length-1 && s == 0) {
			StartTimer();
			return true;
		}
	}
	
	boardRedraw = true;
	requestAnimationFrame( () => { TileMagic(n); } );
	
}


function HandleClick(evt) {

//	evt.preventDefault();
	evt.stopPropagation();
		
	const n = parseInt(this.parent.name);
	
	boardTiles[n][4] = (boardTiles[n][4] == 2) ? 1 : 2;
	scene.children[n].children[0].texture = ( scene.children[n].children[0].texture == tile1 ) ? tile2 : tile1;
	
	// check for 2nd clicked tile
	const m = boardTiles.findIndex( (v,i) => (i != n && v[4] == 2) );

	if(m < 0) {
	
		audiolib.play('click1');
	
	} else {
		
		audiolib.play('click2');
		const t1 = boardTiles[n][0];	
		const t2 = boardTiles[m][0];
		
		
		if(t1 == t2) {
			audiolib.play('remove');
			TileRemove(n);
			TileRemove(m);

		} else {

			boardTiles[n][4] = 1;
			boardTiles[m][4] = 1;
			scene.children[n].children[0].texture = tile1;
			scene.children[m].children[0].texture = tile1;
						
		}
	}
	
	CheckMoves();	
	boardRedraw = true;	

}


function TileRemove(n) {
	
	const x = boardTiles[n][1];
	const y = boardTiles[n][2];
	const z = boardTiles[n][3];
	boardTiles[n][4] = 0;
	
	b1[z][y+0][x+0] = -1;
	b1[z][y+0][x+1] = -1;
	b1[z][y+1][x+0] = -1;
	b1[z][y+1][x+1] = -1;
	
	removedTiles.push(n);
	
	if( solver ) return;
		
	scene.children[n].visible = false;
	scene.children[n].children[1].interactive = false;
	scene.children[n].children[0].texture = tile1;


	
}


function UndoMove() {
	
	const len = removedTiles.length;
	if(len < 2) return;
	
	TileSet( removedTiles[len-1] );
	TileSet( removedTiles[len-2] );
	removedTiles.splice(-2);

	CheckMoves();

	boardRedraw = true;
}

function TileSet(n) {
		
	const i = boardTiles[n][0];
	const x = boardTiles[n][1];
	const y = boardTiles[n][2];
	const z = boardTiles[n][3];
	
	boardTiles[n][4] = 1;
	
	b1[z][y+0][x+0] = 2;
	b1[z][y+0][x+1] = 2;
	b1[z][y+1][x+0] = 2;
	b1[z][y+1][x+1] = 2;	

	if( solver ) return;
	 
	scene.children[n].visible = true;

}



function CheckMoves() {

	let numTiles = 0, numMatches = 0;
	moveableTiles.length = 0;
	matches.length = 0;
	matches.numTiles = 0;
	
	for (let n = 0; n < boardTiles.length; n++) {
	
		if(boardTiles[n][4] == 0) continue;
		
		numTiles++;
		
		const x = boardTiles[n][1];
		const y = boardTiles[n][2];
		const z = boardTiles[n][3];
	
		const box = scene.children[n];
			
		if( !TileIsRemoveable(x, y, z) ) {
			
			boardTiles[n][4] = 1;
			boardTiles[n][5] = false;
			
			if( solver ) continue; 
			
			box.children[0].tint = 0xe0e0e0;
			box.children[0].texture = tile1;
			box.children[1].alpha = 0.75;
			box.children[1].interactive = false;
			continue;
		
		}
		
		boardTiles[n][5] = true;

		moveableTiles.push( [n, boardTiles[n][0]] );
		
		if( solver ) continue;
		
		box.children[0].tint = 0xffffff;
		box.children[1].alpha = 1.0;
		box.children[1].interactive = true;
	
	}
	
	moveableTiles.sort( (a,b) => b[1] - a[1] );
	
	matches.numTiles = numTiles;
	
	for(let n = moveableTiles.length-1; n > 0; n--) {
		if( moveableTiles[n][1] == moveableTiles[n-1][1] ) {
			matches.push( [moveableTiles[n][0], moveableTiles[n-1][0] ]);
			numMatches++;
		}
	}
	
	if( solver ) return;
	
	document.getElementById('guimovesval').innerText = numMatches;
	document.getElementById('guitilesval').innerText = numTiles;

	const obj = document.getElementById('guitext');
	
	if(numMatches == 0) {
		
		obj.innerText = (numTiles == 0) ? 'You Have Won!' : 'Game Over';
		document.getElementById('guibanner').style.display = 'block';
		StopTimer();	
	}
	
	if(numMatches > 0 && numTiles > 0 && obj.innerText.length > 0) {
		
		obj.innerText = '';
		document.getElementById('guibanner').style.display = 'none';
	} 
	
}


function ShowMoves() {

	
	ShowMoves.smt = (!ShowMoves.smt || ShowMoves.smt != tile2) ? tile2 : tile1;
	
	for (let n = 0; n < moveableTiles.length-1; n++) {
				
		if (moveableTiles[n+0][1] != moveableTiles[n+1][1]) continue;
		
		scene.children[moveableTiles[n+0][0]].children[0].texture = ShowMoves.smt;
		scene.children[moveableTiles[n+1][0]].children[0].texture = ShowMoves.smt;

		
	}
		
	boardRedraw = true;
	
}






function TileIsRemoveable(x, y, z) {
	
	var remove = true;
	
	// Check left // right
	if (x > 0 && x < b1[z][y].length-1)
		remove = (	(b1[z][y+0][x-1] > 0 || b1[z][y+1][x-1] > 0) &&
					(b1[z][y+0][x+2] > 0 || b1[z][y+1][x+2] > 0) ) ? false : true;

	// Check above
	if (z < b1.length-1 && remove)		
		remove = (	b1[z+1][y+0][x+0] > 0 || b1[z+1][y+0][x+1] > 0 ||
					b1[z+1][y+1][x+0] > 0 || b1[z+1][y+1][x+1] > 0 ) ? false : true;
			
	return remove;
}




function StartTimer( tick ) {
			
	var tick = (tick) ? tick++ : 0;
	
	let mins = Math.floor(tick / 60).toString().padStart( 2, '0');
	let secs = (tick % 60).toString().padStart( 2, '0');

	document.getElementById('guitimerval').innerText = mins + ':' + secs;
	tick++;
	timerIRQ = setTimeout( () => StartTimer(tick), 1000);
}


function StopTimer() {
	
	clearTimeout( timerIRQ );

}



function GetRandomGauss() {
	return (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
	
}



function GetRandom( min, max ) {

	return Math.floor(Math.random() * (max - min + 1) + min);
}



function Solver() {
	
	while (matches.length > 0) {
		
		TileRemove(matches[0][0]);
		TileRemove(matches[0][1]);
		CheckMoves();
		
	}

	
	if( removedTiles.length == boardTiles.length ) {

		while(removedTiles.length > 0) UndoMove();
		solver = false;
		InitBoardFinal();

		
	} else {
		InitBoard();
	}
}


