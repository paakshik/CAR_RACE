//createing the game class
class Game {
  constructor(count) {
    // setting the variable for keeping track of count
    this.count = count;
  }
// get state from the firebase database
  getState() {

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      //inputting the value of the state to the varaible gameState
      gameState = data.val();
    })

  }
// updating the state in the database..
  update(state) {
    database.ref('/').update({
      //riting the gameStateto this state
      gameState: state
    });
  }

  // starting the game
  start() {
    // if condition for keeping the track when gameState is 0
    if (gameState === 0) {
      // creating  aplaye robject
      player = new Player();
      // getting the count of the player
      player.getCount();
      //creating a data entry form
      form = new Form()
      // displaying the form
      form.display();


    }
  
  }

//creating a function for making the play state when gameState === 1
  play() {
    // creating the player sprites
    player1 = createSprite(200, 200, 30, 30);
    player2 = createSprite(300, 200, 30, 30);
    player3 = createSprite(400, 200, 30, 30);
    player4 = createSprite(500, 200, 30, 30);
// creating the array for all players
    playerA = [player1, player2, player3, player4];
    //hidding the form
    form.hide();
    //setting the displayP variable for setting their position
    let displayP = 50;



// getting the playerInformation for the game
    Player.getPlayerInformation();

    //setting up the if condition which contrls when the players data is undefined
    if (allPlayersData !== undefined) {
function1(displayP,playerA)
    }

   

    drawSprites();
  }
}