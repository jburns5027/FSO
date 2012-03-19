// alert("JavaScript works!");

// String Fallowing a Phone Number below.
var jLib = function() {
return {
            getNumber: function validatePhoneNumber(elementValue){
            var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if (phoneNumberPattern.test(elementValue)); {
                    console.log( "Valid Phone Number.");

                return phoneNumberPattern.test(elementValue);
            }






};




var lib = jLib();
var checkNumber = lib.getNumber( "404-679-0100" )
var checkEmail = lib.getEmail( "jburns5027@fullsail.edu" )



console.log( checkNumber );
console.log( checkEmail);


