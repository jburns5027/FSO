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
            },
            getEmail: function validateEmail(elementValue) {
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (emailPattern.test(elementValue));{
                    console.log("Valid Email.");
                    return emailPattern.test(elementValue);
                }  else {
                    console.log
                }



            }



        }



};




var lib = jLib();
var checkNumber = lib.getNumber( "404-679-0100" )
var checkEmail = lib.getEmail( "jburns5027@fullsail.edu" )

console.log( checkNumber );
console.log( checkEmail);

    /*
    getEmail: function validateEmail(elementValue){
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(elementValue)); {
            console.log(" Valid Email.")
        }
        return emailPattern.test(elementValue);
        */