class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    c1 = createSprite(width/2 - 20, height - 150)
    c2 = createSprite(width/2 + 20, height - 150)
    c1.addImage('ci1', car1_img)
    c2.addImage('ci2',car2_img)
    c1.scale=1.45
    c2.scale=1.45
    c1.position.z = 1
    c2.position.z = 1

    cars = [c1, c2]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  update(state){
    database.ref('/').update({
      gameState: state
    })
  }

  play() {
    this.handleElements()
    Player.getPlayersInfo()
    if (allPlayers !== undefined ) {
      image(track, 0, -height*5, width, 6*height)
      drawSprites();

    }
  }
}
