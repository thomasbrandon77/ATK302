var myState = 0 ;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  switch(myState) {
    case 0:
    background(255, 0, 0);
    text("case 0", 100, 100);
    break ;

    case 1:
    background(0, 255, 0);
    text("case 1", 100, 100);
    break ;

    case 2:
    background(0, 0, 255);
    text("case 2", 100, 100);
    break ;
  }
}

  function mouseReleased() {
    //add one to myState
    // if myState got past 2, reset to 0

      myState++;

if (myState > 2){
    myState = 0 ;
    //OR myState = (myState + 1) % 3 ;
    }
    }
