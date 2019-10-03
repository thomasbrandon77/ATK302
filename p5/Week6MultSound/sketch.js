        var song1, song2, song3, song4, song5;
        var myState = 0;
        var myBColor;

        function preload() {
          song1 = loadSound('assets/YDBKhalid.mp3');
          song2 = loadSound('assets/HeavenOnlyKnows.mp3');
          song3 = loadSound('assets/TimefliesPompeii.mp3');
          song4 = loadSound('assets/FreezeTPain.mp3');
          song5 = loadSound('assets/SwimmingPools.mp3');

          // set each song to loop and then immediately pause it so it doesn't play
          song1.loop();
          song1.stop();
          song2.loop();
          song2.stop();
          song3.loop();
          song3.stop();
          song4.loop();
          song4.stop();
          song5.loop();
          song5.stop();

        }

        function setup() {

          createCanvas(800, 800);

        }

        function draw() {
          switch (myState) {

            case 0:
              song1.play();
              text('So youre still thinkin bout me, just like I know you should. I can not give you everything you know I wish I could.', 50, 50);
              textSize(36);
              myState = 1;
              myBColor = color(random(255), random(255), random(255));
              break;

            case 1:
              song2.play();
              myBColor = color(random(255), random(255), random(255));
              text('Thats why I love it, I love it, love it I love it, love it I love it. Thats why I love it, I love it, love it I love it, love it I love it.', 50, 50);

              myState = 2;



              break;
            case 2:
              song3.play();
              text('I was left to my own devices, many days fell away with nothing to show', 50, 50);
              myState = 3;
              myBColor = color(random(255), random(255), random(255));


              break;
            case 3:
              song4.play();
              text('Haha, I get it down on the dance floor watch this, hey you dont even know girl come here', 50, 50);
              myState = 4;
              myBColor = color(random(255), random(255), random(255));



              break;

            case 4:
              song5.play();
              text('Pour up, drank, head shot, drank sit down, drank, stand up, drank pass out, drank, wake up, drank faded, drank, faded, drank', 50, 50);
              myState = 0;
              myBColor = color(random(255), random(255), random(255));
              break;

          }

        }

        function mouseReleased() {
          myState++;


          // pause all the songs
          song1.pause();
          song2.pause();
          song3.pause();
          song4.pause();
          song5.pause();

          if (myState > 5) {
            myState = 0;
          }
        }


        function touchStarted() {
          getAudioContext().resume();
        }
