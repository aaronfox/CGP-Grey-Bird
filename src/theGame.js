// TODO: Add mute for sounds
// TODO: Add mute for music
// TODO: Use all rebel flags in the flag columns, not just Flaggy Flag

var theGame = function(game) {}

theGame.prototype = {
    create: function() {
        
        this.game.add.sprite(0, 0, 'background');
        // Set betweenTime to be 0 to avoid null error later on
        this.betweenTime = 0;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.grey_head = this.game.add.sprite(100, 245, 'grey_head');

        // Scale grey's head
        this.grey_head.scale.setTo(0.3, 0.3);

        // Add physics to CGP's head
        this.game.physics.arcade.enable(this.grey_head);

        // Add gravity to CGP
        this.grey_head.body.gravity.y = 800;

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);

        this.flags = this.game.add.group();

        this.timer = this.game.time.events.loop(1500, this.addFlagColumn, this);

        // Handle score keeping
        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0", {
            font: "30px Arial",
            fill: "#FFF"
        });

        this.jumpSound = this.game.add.audio('jump_audio');
        this.hitSound = this.game.add.audio('hit_audio');
        this.background_music = this.game.add.audio('background_music');
        this.outOfBoundsSound = this.game.add.audio('out_of_bounds_audio');

        this.background_music.play("", 0, 0.1, true, true);

        // Boolean which checks if Grey is between the flags or not
        this.isBetween = false;
    },

    update: function() {
        this.FLAG_WIDTH = 70;
        if (this.grey_head.y < 0 || this.grey_head.y > 490) {
            if (this.grey_head.alive) {
                this.outOfBoundsSound.play();
            }
            this.restartGame();
        }



        // Increment score if Grey is between the flags
        if (this.flags.cursor != null) {
            if (this.grey_head.x > this.flags.cursor.x && this.grey_head.x < this.flags.cursor.x + this.FLAG_WIDTH &&
                this.betweenTime + 300 < Date.now()) {
                this.isBetween = true;
                this.betweenTime = Date.now();
                this.score++;
                this.labelScore.text = this.score;
            }


            // This is solely for checking if isBetween the flags is true
            if (this.grey_head.x > this.flags.cursor.x && this.grey_head.x < this.flags.cursor.x + this.FLAG_WIDTH) {
                this.isBetween = true;
            } else {
                this.isBetween = false;
            }

            if (this.flags.cursor.x < 100) {
                this.flags.next();
            }
        }


        // Check for collisions
        this.game.physics.arcade.overlap(this.grey_head, this.flags, this.hitFlags, null, this);

        // For animations
        if (this.grey_head.angle < 20) {
            this.grey_head.angle++;
        }

        // Improves the jumping animation
        this.grey_head.anchor.setTo(-0.2, 0.5);
    },

    jump: function() {
        // Don't want to let CGP jump when he's dead!
        if (this.grey_head.alive == false) {
            return;
        }

        this.jumpSound.play();
        this.grey_head.body.velocity.y = -350;

        // Jump animation
        var jumpAnimation = this.game.add.tween(this.grey_head);

        jumpAnimation.to({
            angle: -20
        }, 100);

        jumpAnimation.start();
    },

    restartGame: function() {
        this.background_music.stop();
        this.game.state.start("GameOver", true, false, this.score);
    },

    addOneFlag: function(x, y) {
        // Create a flag at x, y
        var flag = this.game.add.sprite(x, y, 'flag');

        this.flags.add(flag);

        this.game.physics.arcade.enable(flag);

        flag.body.velocity.x = -200;

        flag.checkWorldBounds = true;
        flag.outOfBoundsKill = true;
    },

    addFlagColumn: function() {
        var openSpace = Math.floor(Math.random() * 5) + 1;

        for (var i = 0; i < 8; i++) {
            if (i != openSpace && i != openSpace + 1) {
                this.addOneFlag(400, i * 70);
            }
        }
    },

    hitFlags: function() {
        var firstTime = Date.now();
        // If Grey is not alive, then ignore the hitting of flags
        if (this.grey_head.alive == false) {
            return;
        }
        this.background_music.stop();
        this.hitSound.play();

        this.grey_head.alive = false;

        // If between flags, fall down differently
        if (this.isBetween) {
            this.grey_head.body.velocity.y = 200;
            this.grey_head.body.velocity.x = -50;
        } else {
            this.grey_head.body.velocity.x = -200;
        }
        // Stop more flags from coming
        this.game.time.events.remove(this.timer);

        // Stop all flag movement
        this.flags.forEach(function(f) {
            f.body.velocity.x = 0;
        }, this);
        
        if (Date.now() - firstTime > 5000) {
            this.background_music.stop();
            this.game.state.start("GameOver", true, false, this.score);
        }
    }
}