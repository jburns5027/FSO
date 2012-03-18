// alert("JavaScript works!");

// String Fallowing a Phone Number below.
var jLib = function() {
       return {

       getNumber: function (first, mid, last ) {
                var validNumber = first + "-" + mid + "-" + last;

            return validNumber;
            },

        getEmail: function (name, atsign, domain ) {
            var validemail = "Valid E-Mail: " + name + atsign + domain;
            return validemail;
        }


       }
}


var lib = jLib();

var checkNumber = lib.getNumber("404", "679", "0100")
var checkEmail = lib.getEmail( "jburns5027", "@", "fullsail.edu" )



console.log( checkNumber );
console.log( checkEmail);
