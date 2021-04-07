//setting up the player class
class Player {
  constructor(){
    // creating name for storing the form values
    this.name = null;
    // creating the index for gtting the playerCount
    this.index = null;
    // variable for updating the distance
this.distance = 0;

  }
 
// getting the count of the players
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  // updating count to the database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

// updating the player database with new players  and distance              
  update(){
    var playerIndex = "Players/player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });

  }

//  updating the player database with new players and distance 
  updates(d){
    var playerIndex = "Players/player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      distance:(this.distance + d)
    });
  }

  // function for getting the player information
  static getPlayerInformation(){
    database.ref('Players').on('value',(data) => {
      allPlayersData = data.val();
    },function(err){
      console.log(err)
    })
  }
}

