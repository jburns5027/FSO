// alert("JavaScript works!");

// String Fallowing a Phone Number below.
var jLib = function() {
       return {

            getNumber: function (first, mid, last ) {
                var validNumber = first + "-" + mid + "-" + last;

            return validNumber;
        }


        }
}


var lib = jLib();

var checkNumber = lib.getNumber("404", "679", "0100")
console.log( checkNumber );

