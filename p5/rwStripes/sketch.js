var rwStripes;
var car =[];
var car;


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

  fill('red');
  quad(636,386,606,440,575,434,612,384);

  quad(569,503,531,564,501,552,535,495);

  quad(639,387,621,416,592,418,613,384);

  quad(763,381,784,413,821,407,796,376);

  quad(814,461,856,523,890,508,850,449);

  quad(897,583,936,641,962,631,930,576);

  quad(491,633,434,727,377,714,438,621);

  fill('white');
  quad(657,352, 639,384, 612,383, 638,352);

  quad(606,441,570,500,532,494,578,437);

  quad(530,564,490,626,461,601,501,552);

  quad(741,351,761,380,796,376,766,351);

  quad(784,414,812,458,849,446,822,407);

  quad(857,524,896,581,929,574,890,510);

  quad(937,642,995,728,1025,720,962,633);

  quad(660, 350, 740, 350, 1175, 1000, 275, 1000);
  fill(10);
  text(mouseX + "," + mouseY, 20, 20);
}


function mouseReleased(){
  console.log(mouseX + "," + mouseY);
}


// define car Brandon
// function Car() {
//   this.pos = createVector(random(100), 100);
//   this.vel = createVector(random(-15, 10), random(-10, 20));
//   this.r = random(255);
//   this.g = random(255);
//   this.b = random(255);
//   // methods
//   this.display = function() {
//     fill(this.r, this.g, this.b);
//     rect(this.pos.x, this.pos.y, 100, 50);
//   }
//
//   this.drive = function() {
//     this.pos.add(this.vel);
//     if (rwStripes.pos.y > width) rwStripes.pos.y = 0;
//     if (rwStripes.pos.y < 0) rwStripes.pos.y = height;
// }}
