

function setup() {

createCanvas(windowWidth,windowHeight);

}

function draw() {

  background('red');
  noStroke();
  fill(0, 100, 0); // rgb
  rect(0, 350, width, 1000);

  //street
  fill('#6E6C6C');
  quad(660, 350, 740, 350, 1175, 1000, 275, 1000);


}

// define car Brandon
function Car() {
  this.pos = createVector(random(100), 100);
  this.vel = createVector(random(-15, 10), random(-10, 20));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (rwStripes.pos.y > width) rwStripes.pos.y = 0;
    if (rwStripes.pos.y < 0) rwStripes.pos.y = height;
}}
