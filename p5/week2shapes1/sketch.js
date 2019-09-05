function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400); //size of the background
  background(0, 0, 100);
  noStroke();

  fill('green');
  triangle(18, 18, 18, 360, 81, 360);

  fill('red');
  rect(0, 0, 100, 63);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill('orange');
  ellipse(252, 144, 72, 72);

  fill('green');
  triangle(288, 18, 351, 360, 288, 360);

  fill('yellow');
  arc(479, 300, 280, 280, PI, TWO_PI);
}
