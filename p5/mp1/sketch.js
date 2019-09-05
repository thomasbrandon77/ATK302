
let snowflakes = []; // array to hold snowflake objects
function setup(){

  createCanvas(800, 500);
}



  function draw() {
    background(0);
    if (mouseIsPressed) {
      //This is for the pressed code
      //snowman
      


      fill('black');



      background('red');
            fill(255);
          	ellipse(557,241, 200, 200);
          	ellipse(557,241, 150, 150);
          	ellipse(557,241, 100, 100);

            //hat
          	fill(0);
          	rect(557,241, 70, 100);
          	ellipse(557,241, 100, 10);

            //eyes
          	ellipse(557,241, 5, 5);
          	ellipse(557,241, 5, 5);

            //carrot
          	fill(557,241, 0);
          	triangle(557,241, 250, 285, 290, 300);

            //arms
          	stroke(557,241, 19);
          	strokeWeight(5);
          	line(557,241, 100, 350);
          	line(557,241, 400, 350);



            //buttons
          	fill(0);
          	ellipse(557,241, 7, 7);
          	ellipse(557,241, 7, 7);
          	ellipse(557,241, 7, 7);


    }  else {

      //This is for the unpressed code

      background('blue');
        let t = frameCount / 60; // update time

        // create a random number of snowflakes each frame
        for (let i = 0; i < random(5); i++) {
          snowflakes.push(new snowflake()); // append snowflake object
        }

        // loop through snowflakes with a for..of loop
        for (let flake of snowflakes) {
          flake.update(t); // update snowflake position
          flake.display(); // draw snowflake
        }
      }

  fill(255);
	ellipse(250, 500, 200, 200);
	ellipse(250, 375, 150, 150);
	ellipse(250, 275, 100, 100);

	//hat
	fill(0);
	rect(215, 140, 70, 100);
	ellipse(250, 240, 100, 10);

	//eyes
	ellipse(235, 265, 5, 5);
	ellipse(265, 265, 5, 5);

	//carrot
	fill(255, 165, 0);
	triangle(250, 275, 250, 285, 290, 300);

	//arms
	stroke(139, 69, 19);
	strokeWeight(5);
	line(180, 375, 100, 350);
	line(320, 375, 400, 350);

	//scarf
	strokeWeight(0);
	fill('yellow');
	rect(205,300, 90, 20);
	rect(205, 300, 20, 80);

	//buttons
	fill(0);
	ellipse(250, 340, 7, 7);
	ellipse(250, 370, 7, 7);
	ellipse(250, 400, 7, 7);

}



function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };
  fill('white')
  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}


  function mouseReleased(){
    console.log(mouseX + "," + mouseY)}
