var cars = [];
var bearPos;
var myState = 0;
var timer = 0;
var bearRight, bearLeft;
var fish;
var song1;
function setup() {

  createCanvas(800, 800);

  // spawn cars!!!
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  

  song1 = loadSound('assets/closeUp.mp3');
  fish = loadImage("assets/fish.png");
  bearLeft = loadImage("assets/bearLeft.png");
  bearRight = loadImage("assets/bearRight.png");
  bear = loadImage("assets/bear.png");
  sadbear = loadImage("assets/sadbear.png");
  happybear = loadImage("assets/happyBear.jpg");

  bearPos = createVector(width / 2, height / 2);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {

  switch (myState) {

    case 0: // splash screen
      background('lightblue');
      // textSize(60);
      // text('WELCOME TO \n THE GAME', 100, 100);
      image(bear, width / 2, 500);
      fill('teal');
      textSize(70);
      text('WELCOME! \nEAT ALL THE FISH!', 100, 80);

      break;

    case 1: // the game state
      background('lightblue');
      game();
      timer++;
      if (timer > 600) {

        myState = 3;
        timer = 0;
      }
      break;

    case 2: // the win state
      background('lightblue');
      image(happybear, width / 2, height / 2);
      fill('purple', 100, 100);
      textSize(65);
      text('YOU WON!', 275, 70);

      break;

    case 3: // the lose state
      background(255, 20, 71);
      fill('black');
      image(sadbear, width / 2, height / 2);
      textSize(70);
      text('YOU DONE!', 200, 150);

      break;

  }

}

function mouseReleased() {
  switch (myState) {
    case 0: //splash screen
      myState = 1;
      song1.play();
      break;

      case 1:
      song1.play();
      break;

    case 2: // the win state!
      resetTheGame();
      myState = 0;
      song1.stop();
      break;

    case 3: // the lose state!
      resetTheGame();
      myState = 0;
      song1.stop();
      break;

  }
}
// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  // methods
  this.display = function() {
    // fill(this.r, this.g, this.b);
    // rect(this.pos.x, this.pos.y, 100, 50);
    // ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    // ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    image(fish, this.pos.x, this.pos.y, 100, 100);


    this.timer++;
    if (this.timer > 20) {
      this.fishNum = this.fishNum + 1;
      this.timer = 0;
    }


    if (this.fishNum > fish.length - 1) //could also put > 2
      this.fishNum = 0;
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) bear = bearLeft;
  if (keyCode === RIGHT_ARROW) bear = bearRight;

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) bearPos.x = bearPos.x - 10;
  if (keyIsDown(RIGHT_ARROW)) bearPos.x = bearPos.x + 10;
  if (keyIsDown(UP_ARROW)) bearPos.y = bearPos.y - 10;
  if (keyIsDown(DOWN_ARROW)) bearPos.y = bearPos.y + 10;

}

function resetTheGame() {
  cars = [];
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }
  timer = 0;

}

function game() {
  background('lightblue');
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(bearPos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    myState = 2;
  }

  // draw the bear
  // ellipse(bearPos.x, bearPos.y, 60, 60);
  image(bearRight, bearPos.x, bearPos.y, 150, 150);
  checkForKeys();
}
