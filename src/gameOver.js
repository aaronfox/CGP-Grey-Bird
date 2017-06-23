var gameOver = function(game){}

gameOver.prototype = {

    init: function(score, isMuted){
		this.endScore = score;
        this.muted = isMuted;
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
        this.pim_poy.play("", 0, 1.0, true, true);
        
        // HANDLE THE MUTING STUFF
        // Set M key to mute here
        this.mKey = this.game.input.keyboard.addKey(Phaser.Keyboard.M);
        this.mKey.onDown.add(this.changeMute, this);
        
        // Mute/unmute buttons NOTE: access the mute variable with this.muted
        this.speakerSheet = this.game.add.button(360, 30, "speakers", this.changeMute, this);
        
        if (this.muted) {
            this.speakerSheet.frame = 1;
            this.game.sound.mute = true;
        }
	},
	playTheGame: function(){
        this.pim_poy.stop();
		this.game.state.start("TheGame", true, false, this.muted);
	},
    
    changeMute: function() {
        if (this.muted) {
            this.speakerSheet.frame = 0;
            this.muted = false;
            this.game.sound.mute = false;
        }
        else {
            this.speakerSheet.frame = 1;
            this.muted = true;
            this.game.sound.mute = true;
        }
    }
}