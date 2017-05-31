//// Create our 'main' state that will contain the game
//var mainState = {
//    preload: function () {
//        /*game.load.image('grey_head', 'assets/grey_head.png');
//        game.load.image('flag', 'assets/Flaggy_Flag_Fixed.png');
//        game.load.audio('jump_audio', 'assets/jump_sound.wav');
//        game.load.audio('hit_audio', 'assets/grey_mad.wav');
//        game.load.image('background', 'assets/London_Night_Background.png');*/
//    },
//
//    create: function() {
//        
//        game.add.sprite(0, 0, 'background');
//        // Set betweenTime to be 0 to avoid null error later on
//        this.betweenTime = 0;
//
//        game.stage.backgroundColor = '#71c5cf';
//
//        game.physics.startSystem(Phaser.Physics.ARCADE);
//
//        this.grey_head = game.add.sprite(100, 245, 'grey_head');
//
//        // Scale grey's head
//        this.grey_head.scale.setTo(0.3, 0.3);
//
//        // Add physics to CGP's head
//        game.physics.arcade.enable(this.grey_head);
//
//        // Add gravity to CGP
//        this.grey_head.body.gravity.y = 800;
//
//        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//        spaceKey.onDown.add(this.jump, this);
//
//        this.flags = game.add.group();
//
//        this.timer = game.time.events.loop(1500, this.addFlagColumn, this);
//
//        // Handle score keeping
//        this.score = 0;
//        this.labelScore = game.add.text(20, 20, "0", {
//            font: "30px Arial",
//            fill: "FFFFFF"
//        });
//
//        this.jumpSound = game.add.audio('jump_audio');
//        this.hitSound = game.add.audio('hit_audio');
//
//        // Boolean which checks if Grey is between the flags or not
//        this.isBetween = false;
//    },
//
//    update: function() {
//        this.FLAG_WIDTH = 70;
//        if (this.grey_head.y < 0 || this.grey_head.y > 490) {
//            this.restartGame();
//        }
//
//
//
//        // Increment score if Grey is between the flags
//        if (this.flags.cursor != null) {
//            if (this.grey_head.x > this.flags.cursor.x && this.grey_head.x < this.flags.cursor.x + this.FLAG_WIDTH &&
//                this.betweenTime + 300 < Date.now()) {
//                this.isBetween = true;
//                this.betweenTime = Date.now();
//                this.score++;
//                this.labelScore.text = this.score;
//            }
//
//
//            // This is solely for checking if isBetween the flags is true
//            if (this.grey_head.x > this.flags.cursor.x && this.grey_head.x < this.flags.cursor.x + this.FLAG_WIDTH) {
//                this.isBetween = true;
//            } else {
//                this.isBetween = false;
//            }
//
//            if (this.flags.cursor.x < 100) {
//                this.flags.next();
//            }
//        }
//
//
//        // Check for collisions
//        game.physics.arcade.overlap(this.grey_head, this.flags, this.hitFlags, null, this);
//
//        // For animations
//        if (this.grey_head.angle < 20) {
//            this.grey_head.angle++;
//        }
//
//        // Improves the jumping animation
//        this.grey_head.anchor.setTo(-0.2, 0.5);
//    },
//
//    jump: function() {
//        // Don't want to let CGP jump when he's dead!
//        if (this.grey_head.alive == false) {
//            return;
//        }
//
//        this.jumpSound.play();
//        this.grey_head.body.velocity.y = -350;
//
//        // Jump animation
//        var jumpAnimation = game.add.tween(this.grey_head);
//
//        jumpAnimation.to({
//            angle: -20
//        }, 100);
//
//        jumpAnimation.start();
//    },
//
//    restartGame: function() {
//        game.state.start('main');
//    },
//
//    addOneFlag: function(x, y) {
//        // Create a flag at x, y
//        var flag = game.add.sprite(x, y, 'flag');
//
//        this.flags.add(flag);
//
//        game.physics.arcade.enable(flag);
//
//        flag.body.velocity.x = -200;
//
//        flag.checkWorldBounds = true;
//        flag.outOfBoundsKill = true;
//    },
//
//    addFlagColumn: function() {
//        var openSpace = Math.floor(Math.random() * 5) + 1;
//
//        for (var i = 0; i < 8; i++) {
//            if (i != openSpace && i != openSpace + 1) {
//                this.addOneFlag(400, i * 70);
//            }
//        }
//    },
//
//    hitFlags: function() {
//        // If Grey is not alive, then ignore the hitting of flags
//        if (this.grey_head.alive == false) {
//            return;
//        }
//
//        this.hitSound.play();
//
//        this.grey_head.alive = false;
//
//        // If between flags, fall down differently
//        if (this.isBetween) {
//            this.grey_head.body.velocity.y = 200;
//            this.grey_head.body.velocity.x = -50;
//        } else {
//            this.grey_head.body.velocity.x = -200;
//        }
//        // Stop more flags from coming
//        game.time.events.remove(this.timer);
//
//        // Stop all flag movement
//        this.flags.forEach(function(f) {
//            f.body.velocity.x = 0;
//        }, this);
//    }
//};
//
//// Initialize Phaser, and create a 400px by 490px game
//var game = new Phaser.Game(400, 490, Phaser.AUTO);
//
//// Add the 'mainState' and call it 'main'
//game.state.add('main', mainState);
//
//// Start the state to actually start the game
//game.state.start('main');