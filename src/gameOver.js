var gameOver = function(game){}

gameOver.prototype = {

    init: function(score){
		alert("You scored " + score);
	},
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(160,160,"grey_head");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"play_button",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}