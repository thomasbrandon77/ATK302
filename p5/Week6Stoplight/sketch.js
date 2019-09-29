function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {
  // put drawing code here
  //make a yellow rectangle for the stoplight
  fill('grey');
  rect(width / 2, height / 2, 150, 500);

  fill('red');
  ellipse(width / 2, height / 2 - 150, 100, 100); // the red one
  fill('yellow');
  ellipse(width / 2, height / 2, 100, 100); // center yellow ellipse
  fill('green');
  ellipse(width / 2, height / 2 + 150, 100, 100); // the green one
}
