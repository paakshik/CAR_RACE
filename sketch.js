var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayersData;
var database;

var form, player, game;
var player1,player2,player3,player4;
var playerA = [];


function setup(){
  //for creatng the canvas
  canvas = createCanvas(displayWidth,displayHeight);
// created th firebase database
  database = firebase.database();

  //creating the game object
  game = new Game();

  //gettign the state of the game
  game.getState();

  //starting the game
  game.start();

}


function draw(){
  background(255);
  
  //set the playerlimit to the game
  if (playerCount === 4){
    // updating the game state in te database
    game.update(1);
} 
  
// setting up a if condition that keeps track when our gae state sets to 1
if (gameState === 1){
  // we are clearing the canvas
clear();
//setting the game to play
game.play();
}
//drawing the sprites
  drawSprites();
}


