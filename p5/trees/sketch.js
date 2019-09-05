// function setup() {
//   // Sets the screen to be 720 pixels wide and 400 pixels high
//   createCanvas(1000, 400); //size of the background
//
// }
// function draw() {
//   background(0, 0, 100);
//   noStroke();
// }

  fill('green');
  triangle(18, 18, 18, 360, 81, 360);
  //
  // fill('red');
  // rect(0, 0, 100, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill('orange');
  // ellipse(252, 144, 72, 72);
  //
  // fill('green');
  // triangle(288, 18, 351, 360, 288, 360);
  // //
  // fill('yellow');
  // arc(479, 300, 280, 280, PI, TWO_PI);


  function setup() {
    createCanvas(windowWidth, windowHeight);

  }

  function draw() {
    //background with transparancy
    background(0,0,35,25);

    //blinking stars
    var galaxy = {
    locationX : random(width),
    locationY : random(height),
    size : random(1,6)
  }
    ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
    ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);

    // fill('green');
    // triangle(18, 100, 18, 360, 81, 360);

    fill('yellow');
    circle(100, 100, 300, 280, PI, TWO_PI);

    fill('white');
    

  }
