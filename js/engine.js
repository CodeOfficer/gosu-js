var Gosu;

Gosu = function(canvas) {
	this.canvas = $(canvas)[0].getContext('2d');
	this.interval = null;
};

$.extend(Gosu.prototype, {
	// debug: function() {
	// 	console.log("object " + new Date());
	// }
	loop: function() {
		console.log("object");

	},
	show: function() {
		this.interval = setInterval(this.loop, 1000);
	}
});