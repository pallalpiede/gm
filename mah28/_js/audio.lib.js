// Copyright 2018-2022 by Rene Trost, SyncByte Solutions Germany

var audiolib = new function() {
	"use strict";
	
	const atx = (window.AudioContext) ? new AudioContext() : (window.webkitAudioContext) ? new webkitAudioContext() : false;

	if(!atx) { if(console) console.log("AudioContext unavailable. Audio disabled!"); }

	//TODO - volume should be set via setter	
	this.volume = { main: 1.0, sfx: 1.0, mus: 1.0, amb: 1.0 };
	this.maxChannels = 32;	
	this.numChannels = 0;
	this.samples = [];
	this.atx = atx;
	
	
	this.setCustomAttributes = function(xhr, args) {
		
		xhr.uid =	(args && args.uid)  ? args.uid  : (Math.floor(Math.random() * 100) + Date.now()).toString();
		xhr.type = 	(args && args.type) ? args.type : 'main';
		xhr.loop = 	(args && args.loop) ? args.loop : false;		
		xhr.callback = (args && args.callback) ? args.callback : null;
	}

	//
	// load audio file
	// args = url or obj with optional attributes: uniqu-id/-name, url, audio type (mus,sfx, amb), loop   
	this.load = function( args ) {
		
		if(!atx || !args) return false;
		
		const xhr = new XMLHttpRequest();
		xhr.url = 	(args.url)  ? args.url : args;
		this.setCustomAttributes(xhr, args);
		xhr.responseType = "arraybuffer";
		xhr.open( "GET", xhr.url, true );	
		xhr.onreadystatechange = (e) => { 
			if (e.target.readyState == 4 && e.target.status == 200) 
				this.decodeAudio(e.target);
		}
		xhr.send(null);

	}



	//
	// decode audio into buffer
	//
	this.decodeAudio = function(xhr) {
		
		if(!atx || !xhr.response) return false;
		
		if(!xhr.uid) this.setCustomAttributes(xhr);
						
		atx.decodeAudioData( xhr.response, function(decodedData) {
			
			const idx = audiolib.getIndexByName( xhr.uid, audiolib.samples );
			
			if(idx == -1) 
				audiolib.samples.push( { uid: xhr.uid, url: xhr.url, type: xhr.type, buffer: decodedData } );
			else 
				audiolib.samples[idx].buffer = decodedData;		
							
			if(xhr.callback && typeof xhr.callback == 'function') xhr.callback(xhr.uid);
			
		}, function(e) { if(console) console.log("ERROR: atx.decodingAudioData for file \"%s\" failed.", xhr.url); });
			
	}
	


	//
	// connect source sidx = sample index in samples-array
	//
	this.connect = function( sidx ) {
		
		if(!atx) return false;
		
		const snd = this.samples[sidx];
		const source = atx.createBufferSource();
		source.buffer = snd.buffer;
//		source.gain.value *= this.volume[snd.type];
		source.connect( atx.destination );
		this.numChannels++;
		
		source.onended = (e) => {
			audiolib.numChannels--;		
			e.target.disconnect();
		}; 
		return source;		
	}
	
	
	
	this.play = function( snd ) {
		
		if(!atx || this.numChannels == this.maxChannels) return false;
		
		if(atx.state == 'suspended')
			atx.resume();
		
		const sidx = this.getIndexByName( snd, this.samples );
		if(sidx === false) return false;
						
		const source = this.connect( sidx );
		source.start( atx.currentTime );

	}



	this.stop = function(snd, secs) {
		
		if(!atx) return false;
		var idx = (typeof snd == 'number') ? snd : this.getIndexByName(snd, channels);
		
		if(idx < 0) return false;
		
		if(channels[idx].playing) {
			
			secs = secs || 0;
			channels[idx].playing = false;
			channels[idx].source.stop( atx.currentTime + secs );
			
		}
				
	}


	this.fadeIn = function(snd, secs) {
		
		if(!atx) return false;
		var idx = (typeof snd == 'number') ? snd : this.getIndexByName(snd, channels);
		secs = secs || 1;

		if(idx < 0) {
			idx = cidx;
			this.connect( snd, function(i) { audiolib.fadeIn( i, secs ) }); 
			return idx; 
		}
		
		var t = atx.currentTime;
		var val = channels[idx].volume.gain.value || 1;
		channels[idx].volume.gain.value = 0;
		channels[idx].volume.gain.linearRampToValueAtTime( 0, t );
		channels[idx].volume.gain.linearRampToValueAtTime( val, t + secs );
		if(!channels[idx].playing) this.play(idx);
			
		return true;
		
	}
	


	this.fadeOut = function(snd, secs, delay) {
		
		if(!atx) return false;
		var idx = (typeof snd == 'number') ? snd : this.getIndexByName( snd, channels );
		if(idx < 0) return false;
		
		secs = secs || 1;
		delay = delay || 0;
		
		var t = atx.currentTime + delay;
		channels[idx].volume.gain.linearRampToValueAtTime( channels[idx].volume.gain.value, t );
		channels[idx].volume.gain.linearRampToValueAtTime( 0, t + secs );
		this.stop( idx, secs+delay );
		
	}


	this.crossFade = function(snd1, snd2, secs) {
		
		if(!atx) return false;
		
		var idx1 = (typeof snd1 == 'number') ? snd1 : this.getIndexByName( snd1, channels );
		var idx2 = (typeof snd2 == 'number') ? snd2 : this.getIndexByName( snd2, channels );
		if(idx1 < 0) {
			idx1 = cidx;
			this.connect( snd1, function() { audiolib.crossFade( idx1, snd2, secs ); } );
			return false; 
		}
		if(idx2 < 0) {
			idx2 = cidx;
			this.connect( snd2, function() { audiolib.crossFade( idx1, idx2, secs ); } ); 
			return false; 
		}
		
		secs = secs || 1;
		var t = atx.currentTime;
		var v = channels[idx1].volume.gain.value || 1.0;
		channels[idx1].volume.gain.linearRampToValueAtTime( v, t );
		channels[idx1].volume.gain.linearRampToValueAtTime( 0.0, t+secs );
		if(!channels[idx1].playing) this.play( idx1 );
				
		v = channels[idx2].volume.gain.value || 1.0;		
		channels[idx2].volume.gain.linearRampToValueAtTime( 0.0, t );
		channels[idx2].volume.gain.linearRampToValueAtTime( v, t+secs );
		if(!channels[idx2].playing) this.play( idx2 );
				
		this.stop( idx1, secs );
		return true;
	}


	this.waitLoading = function(smpidx, callback, srcidx) {
		
		if(this.samples[smpidx].loading)
			setTimeout( function(){ audiolib.waitLoading( smpidx, callback, srcidx ) }, 1000/30 );
		else 
			this.connect(smpidx, callback, srcidx);
		
	}


	this.getIndexByName = function(uid, arr) {
		
		return arr.findIndex( (e) => { e = e.source || e; return (e.uid == uid); } );
	}

	this.getFreeAudioChannelIndex = function(arr) {
		
		return arr.findIndex( (e) => { return !e.source } );
	}
	

};

