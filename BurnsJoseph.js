


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



 // boolean functions.

var chooseLocation = function(temp, weather ) {
    if((temp == "hot") && (weather == "sunny")) {
        console.log("It's hot, and sunny.  Let's go running outside.");
        return true;
    } else {
        console.log(" It's cold, and raining. Looks like the treadmill is in my future.");
        return false;
    }
};


var outside = chooseLocation("hot","sunny");
//console.log(chooseLocation("hot","sunny"));
//console.log(outside);
if (outside === true){
    console.log("Let's take a run outside.");
} else {
    console.log("Looks like the treadmill is in my future.");
}





// While Loop Function Bellow

var getCountDown = function(min, total) {
    var runTime = min;
    while ( min > 0) {

        console.log (min + " Minutes left in my " + total + " minute workout");
        min-=10;
    }

};

getCountDown(60, 60)


// String Function Below.

var getBodySection = function (area) {
    var bodyArea = "Today I'm working out the " + area + " part of my body.";

   return bodyArea ;
}

  var chooseArea =  getBodySection("upper")

    console.log(chooseArea);

// Procedure Below.

var getShoes = function (cost) {
    if ( cost <= 75) {
        console.log("I'm going to buy new sneakers!!");
    } else {
        console.log("Way to expensive for me.");
    }



}

  getShoes(70)