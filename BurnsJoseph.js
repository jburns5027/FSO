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



//console.log( shoes[ "color" ] );

shoes.getShoes(70);




















