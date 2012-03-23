// alert("JavaScript works!");


var jLib = function() {
return {
    // Validating a Phone Number below
            getNumber: function validatePhoneNumber(elementValue){
            var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  // RegEx statement.  These are used often to validate,
                if (phoneNumberPattern.test(elementValue)); {                    // zip codes, phone numbers, emails, SSN. . .  This phone number RegEx is checking for how many numbers are in the patter,
                    console.log( "Is the phone number valid?"); // console logging before the return.                       //  optional parentheses, both dashes.  If any are not present, it fails/

                return phoneNumberPattern.test(elementValue); // the return get hit last, responding to the var.
                }
            },
    // String Validation an Email pattern.
            getEmail: function validateEmail(elementValue) {
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;      // RegEx statement.  These are used often to validate,
                if (emailPattern.test(elementValue));{                                     // zip codes, phone numbers, emails, SSN. . . This RegEx is checking an email pattern, such if there is an "@" sign, and a ".___" at the end.
                    console.log("Is the email Valid?");     // console logging before the return.
                    return emailPattern.test(elementValue);   // the return get hit last, responding to the var.
                }
            },
    // Validation a URL.
            getUrl: function isUrl( elementValue ) {
                var urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;    // RegEx statement.  These are used often to validate,
                if ( urlPattern.test(elementValue));{                                                                    // zip codes, phone numbers, emails, SSN. . .
                    console.log("Is this a valid URL?"); // console logging before the return.
                    return urlPattern.test( elementValue );     // the return get hit last, responding to the var.
                }                                               // This RegEx, need the classic email patter.  Not only www.________.___, but even the http at the start. Even one of these var missing, and it returns false.


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
                    var strNum = parseInt(x); //parseIn Returns value as a number.
                    return strNum; // responding to the var
             },
    // Changing value of a number.
              smallValue: function (x) {
                  //x = 14.2;
                   myNum = (Math.floor( x ).toFixed(2)+1);  // returns a fixed position after the decimal. In this case, 2 positions.

                  return myNum;  // returns what the var is stating, or asking
              },
    // Upper casing letters.
                upperCase: function (x) {
                    var lowerText= x;
                    console.log(lowerText.toLocaleUpperCase()); // Upper cases the string
                    return lowerText;   // returning what the var is asking, in this case, to capt the letters.
                }
        }
}




var lib = jLib();   // using lib as a var, for jLib( Joe's library) allows for smaller code below.
var checkNumber = lib.getNumber( "404-679-0100" )  // calling the function.  lib._______ alows the var to locate a function within the global function.
    console.log( checkNumber );                    // this is the case for the next 7 or so functions below.

var checkEmail = lib.getEmail( "jburns5027@fullsail.edu" )
    console.log( checkEmail);

var checkURl = lib.getUrl( "http://www.fullsail.edu")
    console.log( checkURl);

var addNum = lib.sumOfNum()
    console.log(addNum);

var getNum = lib.stringToNum( "42" )
    console.log( getNum);

var getVal = lib.smallValue( "9.01")
    console.log( getVal );
var getCases = lib.upperCase("abcdef")
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