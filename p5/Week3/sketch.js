var score = 0 ;



function setup() {
  // put setup code here
  createCanvas(800, 500);
}

function draw() {
  // put drawing code here
  fill(random(255), 0, 0);
  rect(width/2, height/2, 10, 10);
  textSize(50);
  text(score, 30, 60);
  }

function mouseReleased() {
  background(100);
  // // background(random(255), random(255), random(255));
  // text(score, 30, 60);
  
score++;

}
