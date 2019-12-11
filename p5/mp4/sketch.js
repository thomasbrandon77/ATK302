// Landscape Example
// Coding for Artists - 2019
// Instructor: Urban Reininger
var myState = 0;
var tree1, tree2; //Chris
var sign1, meme; //Chris
var retroracer; //Chris
var song1; //Chris
var daysunpos = 200;
var nightsunpos = 200;
var cars = [];
var timer = 0;
var carPos;
var loading;
var count = 0;
var fuckedup = 0;
var leftwall = 450;
var rightwall = 1180;
var enemy ;
var arrow ;

function preload() {
  song1 = loadSound("assets/lazerhawk.mp3"); //Chris song1

}

function setup() {


  tree1 = loadImage("assets/treereal.png");
  tree2 = loadImage("assets/treesmall.png");
  sign1 = loadImage("assets/chasesign1.png");
  enemy = loadImage("assets/coin.png");
  retroracer = loadImage("assets/retroracer.png");
  loading = loadImage("assets/startscreen2.png");
  arrow = loadImage("assets/arrow1.png");

  imageMode(CENTER);


  createCanvas(windowWidth, windowHeight);

  // for (var i = 0; i < 5; i++) {
  //
  //   cars.push(new Car());
  //
  // }



  carPos = createVector(820, 700);




} // end setup


function draw() {



  switch (myState) {
    case 0:

      image(loading, width / 2, height / 2, windowWidth, windowHeight);

      break;

    case 1:

          timer++;
          if (timer > 200) {

            myState = 2;
            timer = 0
          }

      push();

      nighttime();

      pop();

      timer++;
      if (timer > 100) {
        cars.push(new Car());
        timer = 0;
      }

        var rev = cars.reverse() ;
      for (var i = 0; i < cars.length; i++) { // Chris DRIVE


        rev[i].display();
        rev[i].drive();

        // if (rev[i].pos.y > height) {
        //     rev.splice(i, 1);
        // }
        if ((rev[i].pos.dist(carPos) < 60) && (rev[i].object == 2)) {
          rev.splice(i, 1);

          if (count > 8) {
            myState = 2 ;
          }
          count++;




        }

        // if ((cars[i].pos.dist(carPos) < 50) && (cars[i].object == 0)) {
        //   cars.splice(i, 1) ;
        //   fuckedup++;
        // }

      }
      image(retroracer, carPos.x, carPos.y, 150 * carPos.y / 600, 100 * carPos.y / 560);
      checkForKeys();
      // textSize(10) ;
      fill(255);
      // text(mouseX + ',' + mouseY, 20, 20);
      textSize(25);
      text("Coins Collected: " + count, 1400, 50) ;
      // text("YOU FUCKED UP: " + fuckedup, 20, 40) ;

      image(arrow, 900, 250, 60, 60) ;
      textSize(40);
      text("Collect Coins!", 930, 225) ;
      break;

    case 2:

      push() ;
      daylight();
      pop() ;



            timer++;
            if (timer > 100) {
              cars.push(new Car());
              timer = 0;
            }

              var rev = cars.reverse() ;
            for (var i = 0; i < cars.length; i++) { // Chris DRIVE


              rev[i].display();
              rev[i].drive();

              // if (rev[i].pos.y > height) {
              //     rev.splice(i, 1);
              // }
              if ((rev[i].pos.dist(carPos) < 40) && (rev[i].object == 2)) {
                rev.splice(i, 1);

                if (count > 18) {
                  myState = 3 ;
              }
                count++;




              }

              // if ((cars[i].pos.dist(carPos) < 50) && (cars[i].object == 0)) {
              //   cars.splice(i, 1) ;
              //   fuckedup++;
              // }

            }
            image(retroracer, carPos.x, carPos.y, 150 * carPos.y / 600, 100 * carPos.y / 560);
            checkForKeys();
            // textSize(10) ;
            fill(255);

            // text(mouseX + ',' + mouseY, 20, 20);
            textSize(25);
            text("Coins Collected: " + count, 1400, 50) ;
            // text("YOU FUCKED UP: " + fuckedup, 20, 40) ;
            image(arrow, 900, 250, 60, 60) ;
            timer++;

            textSize(40);
            text("Collect Coins!", 930, 225) ;

      break;

      case 3:

      push() ;
      daylight();
      pop() ;



            timer++;
            if (timer > 10) {
              cars.push(new Car());
              timer = 0;
            }

              var rev = cars.reverse() ;
            for (var i = 0; i < cars.length; i++) { // Chris DRIVE


              rev[i].display();
              rev[i].drive();

              // if (rev[i].pos.y > height) {
              //     rev.splice(i, 1);
              // }
              if ((rev[i].pos.dist(carPos) < 40) && (rev[i].object == 2)) {
                rev.splice(i, 1);

              //   if (count > 18) {
              //     myState = 1 ;
              // }
                count++;




              }

              // if ((cars[i].pos.dist(carPos) < 50) && (cars[i].object == 0)) {
              //   cars.splice(i, 1) ;
              //   fuckedup++;
              // }

            }
            image(retroracer, carPos.x, carPos.y, 150 * carPos.y / 600, 100 * carPos.y / 560);
            checkForKeys();
            // textSize(10) ;
            fill(255);

            // text(mouseX + ',' + mouseY, 20, 20);
            textSize(25);
            text("Coins Collected: " + count, 1400, 50) ;
            // text("YOU FUCKED UP: " + fuckedup, 20, 40) ;
            image(arrow, 900, 250, 60, 60) ;
            timer++;
            if (timer > 3100) {

              myState = 1;
              timer = 0
            }
            textSize(40);
            text("Collect Coins!", 930, 225) ;

      break;


  }
}



function mouseReleased() {
  switch (myState) {
    case 0:
      song1.play();
      myState = 1;
      break;

    case 1:


      myState = 2;
      break;

    case 2:

      myState = 1;
      break;

      myState++;
      daysunpos = 200;
      nightsunpos = 200;
      if (myState > 2) myState = 0;



  }



}

function mouseLocation() {
  fill(255);
  text(("x: " + mouseX), 20, 10);
  text(("y: " + mouseY), 20, 20);
} // end mouseLocation

function Car() {
  //attribute
  //decide tree vs chasesign1
  var chance = random(10);


  if (chance < 2) { //if its greater than 3 then it will be tree
    // this.pos = createVector(random(100, 550), 235);
    // this.velocity = createVector(random(-1, -2), random(1, 1));
    //trees

    this.object = 0; // it's a tree


    if (random(2) > 1) {
      this.pos = createVector(random(100, 550), 280);
      this.velocity = createVector(random(-1, -1), random(1, 1));
    } else {
      this.pos = createVector(random(1000, 1600), 280); //spawn coordinates
      this.velocity = createVector(random(1, 1), random(1, 1)); //affects angle

    }


  } else {
    this.object = 1; //will be sign
    if (random(2) > 1) {
      this.pos = createVector(600, 335);
      this.velocity = createVector(random(-1, -1), random(1, 1));
    } else {
      this.pos = createVector(1075, 335); //spawn coordinates
      this.velocity = createVector(random(1, 1), random(1, 1)); //affects angle

    }

  }

  if (chance > 3) {
    this.object = 2; // it's the coin
    this.pos = createVector(random(690, 900), 280);
    this.velocity = createVector(-.5, 10);


    console.log("spawned an obstacle") ;
  }



  //   if (this.pos.x < 640) {
  //
  // } else {
  //
  //   this.velocity = createVector(random(1, 5), random(1, 5)) ;
  // }



  //methods
  this.display = function() {

    //
    // fill(this.r, this.g, this.b) ;
    // rect(this.pos.x, this.pos.y, 100, 100) ;
    switch (this.object) {
      case 0:
        image(tree1, this.pos.x, this.pos.y, 150 * this.pos.y / 400, 275 * this.pos.y / 400);
        break;

      case 1:
        image(sign1, this.pos.x, this.pos.y, 100 * this.pos.y / 450, 125 * this.pos.y / 450);
        break;

      case 2:
        image(enemy, this.pos.x, this.pos.y, 100 * this.pos.y / 450, 100 * this.pos.y / 450);
        break;
    }

    // pop() ;
  }
  // image(sign1, this.pos.x + 200, this.pos.y + 200, 100 , 125 );






this.drive = function() {
  this.pos.add(this.velocity);
  // if (this.pos.x > width) this.pos.x = 0 ;
  // if (this.pos.x < 0) this.pos.x = width ;
  //if (this.pos.y > height) this.pos.y = 350;

}

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) carPos.x = carPos.x - 10; //velocity arrow value
  if (keyIsDown(RIGHT_ARROW)) carPos.x = carPos.x + 10; //velocity arrow value


  if ((keyIsDown(UP_ARROW)) && (carPos.y > 315)) {
    carPos.y = carPos.y - 6 //velocity arrow value
  }

  if ((keyIsDown(DOWN_ARROW)) && (carPos.y < height - 30)) {
    carPos.y = carPos.y + 5; //velocity arrow value

  }

carPos.x = constrain(carPos.x, leftwall, rightwall) ;




}
