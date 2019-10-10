var myState = 0 ; // assume this is at the top of the program, before the setup



function draw() {

switch(myState) {

   case 0:
   console.log("Hello!") ;
   myState = 2 ;
   break ;

   case 1:
   console.log("Goodbye") ;
   break ;

   case 2:
   console.log("Maybe") ;
   break ;

}

}
