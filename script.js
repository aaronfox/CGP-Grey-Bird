var game = new Phaser.Game(400, 490, Phaser.AUTO, "game");

game.state.add("Boot", boot);
game.state.add("Preload", preload);
game.state.add("GameTitle", gameTitle);
game.state.add("TheGame", theGame);
game.state.add("GameOver", gameOver);

game.state.start("Boot");
