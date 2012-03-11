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








