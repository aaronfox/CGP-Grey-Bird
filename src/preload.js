var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        this.game.stage.backgroundColor = '#686868';
        this.loadingText = this.game.add.text(0, this.game.world.centerY - 20, "Loading...", {
            font: "23px Arial",
            fill: "#FFF",
            boundsAlignH: "center"
        });
        this.loadingText.setTextBounds(0, 0, 400, 490);
        var greyHead = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 125, "grey_head");
        greyHead.anchor.setTo(0.5);
        var loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 100,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        this.game.load.image('play_button', 'assets/shrink_play_button.png')
        this.game.load.image('flag1', 'assets/Flaggy_Flag_Fixed.png');
        this.game.load.image('flag2', 'assets/shrink_club_and_claws.png');
        this.game.load.image('flag3', 'assets/shrink_HI_flag.png');
        this.game.load.image('flag4', 'assets/shrink_white_cross_flag.png');

        this.game.load.audio('jump_audio', 'assets/jump_sound.wav');
        this.game.load.audio('hit_audio', 'assets/grey_mad.wav');
        this.game.load.audio('Pim Poy', 'assets/Pim Poy.wav');
        this.game.load.audio('Game Over Pim Poy', 'assets/Pim Poy Pocket.wav');
        this.game.load.audio('background_music', 'assets/Retro Gap loop.wav');
        this.game.load.audio('out_of_bounds_audio', 'assets/Grey_Falling.wav');

        this.game.load.image('background', 'assets/London_Night_Background.png');
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}