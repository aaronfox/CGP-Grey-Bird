var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(this.game.world.centerX, 175, "grey_head");
		gameTitle.anchor.setTo(0.5);
		var playButton = this.game.add.button(this.game.world.centerX, 350, "play_button", this.playTheGame, this);
		playButton.anchor.setTo(0.5);
        this.game.stage.backgroundColor = '#686868';
        this.pim_poy = this.game.add.audio('Pim Poy');
        this.pim_poy.play("", 0, 1, true, true);

	},
	playTheGame: function(){
        this.pim_poy.stop();
		this.game.state.start("TheGame");
	}
}