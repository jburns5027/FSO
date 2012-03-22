// alert("JavaScript works!");


var jLib = function() {
return {
    // Validating a Phone Number below
            getNumber: function validatePhoneNumber(elementValue){
            var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                if (phoneNumberPattern.test(elementValue)); {
                    console.log( "Is the phone number valid?");

                return phoneNumberPattern.test(elementValue);
                }
            },
    // String Validation an Email pattern.
            getEmail: function validateEmail(elementValue) {
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (emailPattern.test(elementValue));{
                    console.log("Is the email Valid?");
                    return emailPattern.test(elementValue);
                }
            },
    // Validation a URL.
            getUrl: function isUrl( elementValue ) {
                var urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                if ( urlPattern.test(elementValue));{
                    console.log("Is this a valid URL?");
                    return urlPattern.test( elementValue );
                }


            },
     // Number
             sumOfNum: function () {
                var numval =  [,1,2,3,4];


                 numval.sort();

                //for (i=0; i<=numval.length; i++){
                    //numval += numval[i]
                 return numval

                },
    // Turning a string to a number.
                stringToNum: function (x) {
                    var strNum = parseInt(x);
                    return strNum;
             },
    // Changing value of a number.
              smallValue: function (x) {
                  //x = 14.2;
                   myNum = (Math.floor( x )+1.100);

                  return myNum;
              },
    // Upper casing letters.
                upperCase: function (x) {
                    var lowerText= x;
                    console.log(lowerText.toLocaleUpperCase());
                    return lowerText;
                }
        }
}




var lib = jLib();
var checkNumber = lib.getNumber( "404-679-0100" )
    console.log( checkNumber );

var checkEmail = lib.getEmail( "jburns5027@fullsail.edu" )
    console.log( checkEmail);

var checkURl = lib.getUrl( "http://www.fullsail.edu")
    console.log( checkURl);

var addNum = lib.sumOfNum()
    console.log(addNum);

var getNum = lib.stringToNum( "42" )
    console.log( getNum);

var getVal = lib.smallValue( "9.10")
    console.log( getVal );
var getCases = lib.upperCase(" abcdef")
    console.log( getCases );

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