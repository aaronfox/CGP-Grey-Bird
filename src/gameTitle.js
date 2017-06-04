var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
		var greyHead = this.game.add.sprite(this.game.world.centerX, 175, "grey_head");
		greyHead.anchor.setTo(0.5);
		var playButton = this.game.add.button(this.game.world.centerX, 350, "play_button", this.playTheGame, this);
		playButton.anchor.setTo(0.5);
    
        this.mKey = this.game.input.keyboard.addKey(Phaser.Keyboard.M);
        this.mKey.onDown.add(this.changeMute, this);
        
        
        this.speakerSheet = this.game.add.button(360, 30, "speakers", this.changeMute, this);
        this.muted = false;
        this.speakerSheet.anchor.setTo(0.5);
        this.game.stage.backgroundColor = '#686868';
        this.pim_poy = this.game.add.audio('Pim Poy');
        this.pim_poy.play("", 0, 1, true, true);

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
    },
    
	playTheGame: function() {
        this.pim_poy.stop();
        // Transfer to the game when the play button is clicked, and transfer this.muted
        // to know if the game should be muted or not
		this.game.state.start("TheGame", true, false, this.muted);
	}
    
}