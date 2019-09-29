var x = 0 ;

function setup() {
  createCanvas(200, 200);
}

function draw() {

  background(100);
  text("VOTE",x, 40);
  x += 5 ;

  if(x > 200) {
    {
      x = 0 ;
    }
  }


}
