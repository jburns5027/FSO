alert("JavaScript works!");

var passTest = true, flightsAvalible = true, failTest = false, flightsCanceled = false;
// Below: Booleen Logic
if ((passTest && flightsAvalible) || flightsCanceled) {
    console.log("I can go to Califonia ");
}   else {
    console.log("I need to retake test!!");
}
if (passTest && flightsAvalible)  {
    console.log("I Finally Passed!!" + " Now I get to Go!!");
}
