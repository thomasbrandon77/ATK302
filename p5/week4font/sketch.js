var modak;
var x = 0;

function preload() {
  modak = loadFont ("assets/Modak-Regular.ttf");
}

function setup() {
createCanas(1000, 800);
}

function draw() {
  background('black');
  fill('#ED225D')
  textFont(modak);
  textSize(36);
  text('HELLO WORLD', x, 50);

  }
}
