var Engine = Class.extend({
  init: function(canvas) {
    this.canvas = $(canvas);
    this.ctx = this.canvas[0].getContext('2d');
    this.interval = null;
    this.refreshRate = 1000/33;
  },

	loop: function() {
    // console.log("loop", new Date().getTime());
		this.clearCanvas();
		this.update();
		this.draw();
	},
	
	start: function() {
		console.log("start", new Date().getTime());
		var self = this;
		this.interval = setInterval(function() {self.loop()}, this.refreshRate);
	},
	
	stop: function() {
		console.log("stop", new Date().getTime());
	  clearInterval(this.interval)
		this.interval = null;
	},
	
	clearCanvas: function() {
    // console.log("default clearCanvas", new Date().getTime());
    // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
	},
	
	update: function() {
	},
	
	draw: function() {
	}
});