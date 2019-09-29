var song1 ;

function preload() {
  song1 = loadSound('assets/Week5Sound.mp3');
}
function setup() {


}

function draw() {

}

function mouseReleased() {

  if (song1.isPlaying()) {
    song1.pause() ;

  } else {

    song1.play();

  }
}
//if song is playing, pause it
// song1.pause() song1.isPlaying()
