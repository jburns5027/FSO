/*
// alert("JavaScript works!");

// Arrays w/ loops and numbers.
 var mins = [120, 60, 120, 60, 30],
     minsCount;

minsCount =  mins.length;


for  ( i = 0 ; mins < 100; mins++){
      console.log( mins + " minutes remaining");

}   console.log( minsCount);


// String  Function
var pi  = 5;
var radius = 0;

var getArea = function (r, name) {
    var area = r * r * pi;
    console.log( area, name );


 }

getArea(20, name);
getArea(5);
getArea(10);
getArea(radius);

*/

// Array Functions Bellow.
var workOuts = [" Upper Body", "Lower Body", "Core"],
    minutesPerWorkOut = [ 60, 60, 30 ];

var workOutOneArea = function( workOut, minutesThisWorkOut){

        console.log("Starting to work out the" + workOut + " for "
        + minutesThisWorkOut  + " minutes. ");

    for (var minutes = 0; minutes < minutesThisWorkOut; minutes+= 10) {
        var minutesRamain = minutesThisWorkOut - minutes;
        console.log( minutes + " done, " + minutesRamain + " to Go!!");

    }
    console.log( "I'm done working out the " + workOuts + "!!");

};

var workOutAll = function( workOuts, minutesPerWorkOut) {
    for ( var workOutNumber = 0; workOutNumber < workOuts.length; workOutNumber++) {
        var workOut = workOuts[workOutNumber],
            minutesThisWorkOut = minutesPerWorkOut[workOutNumber];
        workOutOneArea( workOut, minutesThisWorkOut );

    }

}

 workOutAll( workOuts, minutesPerWorkOut);
