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












