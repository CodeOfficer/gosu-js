var Entity = Class.extend({
  init: function(ctx) {
    this.ctx = ctx;
    this.x = 0.0;
    this.y = 0.0;
    this.velX = 0.0;
    this.velY = 0.0;
    this.angle = 0.0;
  },

  warp: function(x, y) {
    this.x = x;
    this.y = y;
  },

  turnLeft: function() {
    this.angle += 4.5;
  },

  turnRight: function() {
    this.angle -= 4.5;
  },

  accelerate: function() {
    this.velX += Math.offsetX(this.angle, 0.5);
    this.velY += Math.offsetY(this.angle, 0.5);
  },

  update: function() {
    this.x += this.velX;
    this.y += this.velY;
    this.x %= this.ctx.canvas.width;
    this.y %= this.ctx.canvas.height;
    this.velX *= 0.95;
    this.velY *= 0.95;
  },

  draw: function() {
    // console.log(parseInt(this.x, 10), parseInt(this.y, 10));
    this.ctx.beginPath();
    this.ctx.arc(parseInt(this.x, 10), parseInt(this.y, 10), 10, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  },
});