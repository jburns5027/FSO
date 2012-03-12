alert("JavaScript works!");

// Procedure Below.

var shoes = {
    brand: "nike",
    color: "black",
    minimualist: "yes",

    getShoes: function (cost) {
        if ( cost <= 75) {
            console.log("I'm going to buy new sneakers!!");
        } else {
            console.log("Way to expensive for me.");
        }

    }

}
console.log( shoes[ "color" ] );
console.log( shoes [ "brand"]);
shoes.getShoes(70);





// String Function Below.

var bodyMuscles = {
    upper: ["shoulders",
            "biceps",
            "triceps"
    ],
    core: ["abdomen",
           "side abs",
            "back"
           ],
    lower: ["thighs",
            "calves",
            "hamstrings"
            ],

    getBodySection: function (area) {
          var bodyArea = "Today I'm working out the " + area + " part of my body.";

        return bodyArea ;
    }
}

var chooseArea = bodyMuscles.getBodySection("upper")
console.log(chooseArea);






// boolean functions.

 var outSideClothes = {
     shirt: ["short Sleeve",
             "dry fit material",
             "white"],
     legwear: [
                "shorts",
                "light cotton",
                 "blue"
              ],
     chooseLocation: function(temp, weather ) {
        if((temp == "hot") && (weather == "sunny")) {
            console.log("It's hot, and sunny.  Let's go running outside.");
            return true;
        } else {
            console.log(" It's cold, and raining. Looks like the treadmill is in my future.");
            return false;
        }
    }

}

 var outside = outSideClothes.chooseLocation("hot","sunny");
//console.log(chooseLocation("hot","sunny"));
//console.log(outside);
if (outside === true){
    console.log("Let's take a run outside.");
} else {
    console.log("Looks like the treadmill is in my future.");
}





// Array Functions Bellow.
var equipment = {
       weight:"25",
       material: "iron",
       type: "dumbell",


 workOutOneArea: function( workOut, minutesThisWorkOut){
   var workOuts = [" Upper Body", "Lower Body", "Core"],
         minutesPerWorkOut = [ 60, 60, 30 ];

    console.log("Starting to work out the" + workOut + " for "
        + minutesThisWorkOut  + " minutes. ");

    for (var minutes = 0; minutes < minutesThisWorkOut; minutes+= 10) {
        var minutesRamain = minutesThisWorkOut - minutes;
        console.log( minutes + " done, " + minutesRamain + " to Go!!");

    }
    console.log( "I'm done working out the " + workOut + "!!");

},
  /*
    workOutAll:function ( workOuts, minutesPerWorkOut) {
    for ( var workOutNumber = 0; workOutNumber < workOuts.length; workOutNumber++) {
        var workOut = workOuts[workOutNumber],
            minutesThisWorkOut = minutesPerWorkOut[workOutNumber];
        workOutOneArea( workOut, minutesThisWorkOut );

    }  */

}
 var key = equipment.weight;
console.log("Using the " + [ key ] + "LB weight.");

equipment.workOutOneArea( " lower body", " 60");
// equipment.workOutAll( " lower body", " 60");





// While Loop Function Bellow
var c25k = {
     platform:"IOS",
     catagory: "fitness",
     durationPerWorkOut:"30mins",
     durationTotal: "9 months",
     getCountDown: function(min, total) {
            var runTime = min;
            while ( min > 0) {

                console.log (min + " Minutes left in my " + total + " minute workout");
                min-=10;
            }

        }
}

c25k.getCountDown(60, 90)








