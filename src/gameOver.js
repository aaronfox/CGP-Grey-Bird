var gameOver = function(game){}

gameOver.prototype = {

    init: function(score){
		this.endScore = score;
	},
  	create: function(){
        this.finalScore = this.game.add.text(0, 80, "0", {
            font: "23px Arial",
            fill: "#FFF",
            boundsAlignH: "center"
        });
        this.finalScore.setTextBounds(0, 0, 400, 490);
        this.finalScore.setText("You got through " + this.endScore + " Rebel Flags")
        this.playAgain = this.game.add.text(0, 250, "Again?", {
            font: "23px Arial",
            fill: "#FFF",
            boundsAlignH: "center"
        });
        this.playAgain.setTextBounds(0, 0, 400, 490);
		var playButton = this.game.add.button(this.game.world.centerX, 350, "play_button", this.playTheGame, this);
		playButton.anchor.setTo(0.5);
        this.pim_poy = this.game.add.audio('Game Over Pim Poy');
        this.pim_poy.play("", 0, 1, true, true);
	},
	playTheGame: function(){
        this.pim_poy.stop();
		this.game.state.start("TheGame");
	}
}