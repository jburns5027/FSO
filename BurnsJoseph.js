// alert("JavaScript works!");

// String Fallowing a Phone Number below.
var jLib = function() {
return {
            getNumber: function validatePhoneNumber(elementValue){
            var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if (phoneNumberPattern.test(elementValue)); {
                    console.log( "Is the phone number valid?");

                return phoneNumberPattern.test(elementValue);
                }
            },
            getEmail: function validateEmail(elementValue) {
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (emailPattern.test(elementValue));{
                    console.log("Is the email Valid?");
                    return emailPattern.test(elementValue);
                }
            },
            getUrl: function isUrl( elementValue ) {
                var urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if ( urlPattern.test(elementValue));{
                    console.log("Is this a valid URL?");
                    return urlPattern.test( elementValue );
                }


            },

             sumOfNum: function ( ['a',1,'b',2,'c',3,'d',4]) {
                 var sum = 0;
                 for (var i=0; i<sum.length; i++) {
                     if (!isNaN(parseInt(arr[i]))) { sum += [i]; }
                 }
                 alert(sum);
             }















        }



};




var lib = jLib();
var checkNumber = lib.getNumber( "404-679-0100" )
console.log( checkNumber );

var checkEmail = lib.getEmail( "jburns5027@fullsail.edu" )
console.log( checkEmail);

var checkURl = lib.getUrl( "http://www.fullsail.edu")
console.log( checkURl);

    /*

     minValue = function (array) {
     mn = array[0];
     for (i=0; i<array.length; i++) {
     if (array[i]<mn) {
     mn = array[i];
     }
     }
     return mn;
     };
        */