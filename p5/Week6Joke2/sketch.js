et state = 0;


function setup() {
  createCanvas(800, 800);
}

function draw() {

  switch (state) {

    case 0:
      background('red');
      text("What's really good?", 100, 100);
      //for joke 2 put timer in here
      break;

    case 1: // punchline
      background('green');
      text("Idk but this code is hard", 100, 100);
      break;

  }

}

function mouseReleased() {

  state = state + 1;
  // if state is greater than one set equal to 0
}
if (state > 1) {
  state = 0;
}
