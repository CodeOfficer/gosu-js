var Engine = Class.extend({
  init: function(canvas) {
    this.canvas = $(canvas);
    this.ctx = this.canvas[0].getContext('2d');
    this.interval = null;
    this.refreshRate = 1000/33;
  },

	loop: function() {
		this.clearCanvas();
		this.update();
		this.draw();
	},
	
	start: function() {
		console.log("start", new Date().getTime());
		var self = this;
		$(document)
			.bind("keydown.gosu", function(e){
				self.buttonDown(e.keyCode);
			});
		this.interval = setInterval(function() {self.loop();}, this.refreshRate);
	},
	
	stop: function() {
		console.log("stop", new Date().getTime());
		$(document)
			.unbind("keydown.gosu");
	  clearInterval(this.interval);
	},
	
	clearCanvas: function() {
		// probably overridden by child
    this.ctx.clearRect(0, 0, this.canvas.width(), this.canvas.height());
	},

	buttonDown: function(keyCode) {
		// overridden by child
	},
	
	update: function() {
		// overridden by child
	},
	
	draw: function() {
		// overridden by child
	}
});