var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1qOK8oXlt8je_dXZ-SjM_LexGBXaSC2WCpVMmyvCmS5U'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].favoriteHoliday, data[i].Age));
  }

}


function draw() {
  background('red');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(favoriteHoliday, myAge) {
  this.pos = createVector(random(width), random(height));
  this.favoriteHoliday = favoriteHoliday;
  this.Age = myAge
  // this.shape = myShape;

  this.display = function() {

    if (this.shape == "Circle") {
      // put an ellipse here
      ellipse(this.pos.x, this.pos.y, 100, 100);

      text(this.favoriteHoliday, this.pos.x, this.pos.y);
    } else {
      rect(this.pos.x, this.pos.y, 100, 100);
    }
      text(this.Age, this.pos.x, this.pos.y);
  }

}
