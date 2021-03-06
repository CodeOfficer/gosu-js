// http://codeutopia.net/blog/2009/08/21/using-canvas-to-do-bitmap-sprite-animation-in-javascript/

var Game = Engine.extend({
  init: function(canvas) {
    this._super(canvas);
    this.sprites = new Array();
    this.player = new Entity(this.ctx);
    this.player.warp(this.ctx.canvas.width/2, this.ctx.canvas.height/2);
    this.sprites.push(this.player);
  },

  buttonDown: function(keyCode) {
  },

  update: function() {
    if (buttonIsDown('up')) {
      this.player.accelerate();
    };
    if (buttonIsDown('left')) {
      this.player.turnLeft();
    };
    if (buttonIsDown('right')) {
      this.player.turnRight();
    };


    $.each(this.sprites, function(index, sprite) {
      sprite.update();
    });
  },

  draw: function() {
    $.each(this.sprites, function(index, sprite) {
      sprite.draw();
    });
  }
});

