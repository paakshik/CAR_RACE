function function1(variable,array){
     
      //setting up y  and x variable for etting them from dataase and placung the sprites
      let y = 0;
      let x = 0;
// creating the for loop for getting each element of  allPlayerData
      for (var i in allPlayersData) {

       // assigning the position of each sprite  to y
        y = displayHeight - allPlayersData[i].distance;


        // incremening the display width by 30 points
        variable = variable + 30;
        //incrementing the x variable
        x += 1;

 

 // creating the conditonto make sure that the browser layer is colored
    
 if (i === 'player' + player.index) {
          array[x - 1].shapeColor = 'red';

        } else {

        }
// showing the distnce as well as the player name
        text(`${allPlayersData[i].name}: ${allPlayersData[i].distance}`, 200, variable);

       
      }
       // updating the distance when a key is pressed.
      if (keyDown(UP_ARROW)) {
        player.distance += 50;
        playerA[x - 1].y += 50; 
        player.updates(player.distance);
      }
  
}