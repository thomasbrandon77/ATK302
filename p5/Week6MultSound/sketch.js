        var song1, song2, song3, song4, song5;
        var myState = 0;


        function preload() {
          song1 = loadSound('assets/YDBKhalid.mp3');
          song2 = loadSound('assets/HeavenOnlyKnows.mp3');
          song3 = loadSound('assets/LostInJapan.m4a');
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
              myState = 1;
              break;

            case 1:
              background(0, 255, 0);
              fill('orange');
              textSize(20);
              text('So youre still thinkin bout me, just like I know you should. I can not give you everything you know I wish I could.', 50, 50);
              break;

            case 2:
              song2.play();
              myState = 3;
              break;

            case 3:
              background(255, 0, 0);
              fill('blue');
              textSize(20);
              text('Thats why I love it, I love it, love it I love it, love it I love it. Thats why I love it, I love it, love it I love it, love it I love it.', 50, 50);
              break;

            case 4:
              song3.play();
              myState = 5;
              break;

            case 5:
              background(0, 255, 0);
              fill('red');
              textSize(20);
              text('All it takes is one flight, we be in the same time zone, scrollin down ya timeline, seein all the changes I', 50, 50);
              break;

            case 6:
              song4.play();
              myState = 7;
              break;

            case 7:
              fill('gold');
              background(0, 0, 180);
              textSize(20);
              text('Haha, I get it down on the dance floor watch this, hey you dont even know girl come here', 50, 50);
              break;

            case 8:
              song5.play();
              myState = 9;
              break;

            case 9:
              background(0, 0, 255);
              fill('purple');
              textSize(20);
              text('Pour up, drank, head shot, drank sit down, drank, stand up, drank pass out, drank, wake up, drank faded, drank, faded, drank', 50, 50);
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
