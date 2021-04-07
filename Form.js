// creating the form class for creating the form 
class Form {
  constructor() {
    // creating the input box forgetting input
    this.input = createInput("Name");;
    //making the h2 title to show on the screen
    this.title = createElement('h2');
    //adding text to the input box
    this.title.html("Car Racing Game");

    // creating the h3 title to show the player name
    this.greeting =createElement('h3');

    // setting the button for submitting the  form
    this.button = createButton('Play');
  }

  display(){
   
   // setting theosition of the title
    this.title.position(520, 0);
  // setting th position of the input box  
  this.input.position(130, 160);
 // setting the position for the input button
    this.button.position(250, 200);

    // adding the mousePresed event to te play button
    this.button.mousePressed(() => {

      // hiding the input box
      this.input.hide();

      // hiding the input button
      this.button.hide();

      // setting the playe name to the value found
       player.name = this.input.value();
      
       // incrementing the player count by 1
      playerCount+=1;

      // setting the player index to the player count
      player.index = playerCount;

      //updating the player name and distance
      player.update()

      // updating the playerCount
      player.updateCount(playerCount);

      //settng the name of the greeting
      this.greeting.html("Hello " + player.name)

      //setting up the position of the greeting
      this.greeting.position(150, 160);
    });


  }
  // hiding all the form elements
  hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    // changing the innerText of the title
this.title.innerText = 'START GAME';
  }

}
