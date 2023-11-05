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