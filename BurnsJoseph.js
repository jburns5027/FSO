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


var foo = 10;
var bar = 5;
var today = new Date();
var newdate = new Date (2012, 2, 18, 11, 11, 0 );
var today2 = today.getDate();
var today3 = today.getDate(22);



console.log( today);
console.log( newdate );
console.log( newdate - today);
console.log(today2);
console.log(today3);
console.log( foo - bar);