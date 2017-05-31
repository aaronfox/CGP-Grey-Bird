var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
		this.game.load.image('grey_head', 'assets/grey_head.png');
        this.game.load.image('play_button', 'assets/play_button.png')
        this.game.load.image('flag', 'assets/Flaggy_Flag_Fixed.png');
        this.game.load.audio('jump_audio', 'assets/jump_sound.wav');
        this.game.load.audio('hit_audio', 'assets/grey_mad.wav');
        this.game.load.image('background', 'assets/London_Night_Background.png');
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}