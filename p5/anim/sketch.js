var x = 0 ;
var y = 0;
function setup() {
  createCanvas(300, 300) ;
}

function draw() {
  background(100) ;
  rect(x, height/2, 10, 10);
  rect(width/2, y, 10, 10);
  x += 5 ; //or x++ = x + 1
  y =+ 3;
  if (x > width) {
    x = 0 ;
  }
  if (y > height) {
    y = 0 ;
  }

}
