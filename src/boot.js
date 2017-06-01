var boot = function(game){
	console.log("%cAll Hail the great CGP Grey", "color:white; background:gray");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","assets/loading_bar.png");
          this.game.load.image('grey_head', 'assets/grey_head.png');

	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.updateLayout();
		this.game.state.start("Preload");
	}
}