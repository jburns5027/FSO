// alert("JavaScript works!");

/* var passTest = true, flightsAvalible = true, failTest = false, flightsCanceled = false;

if ((passTest && flightsAvalible) || flightsCanceled) {
    console.log("Failed test. " + "Let's try it again");
}   else {
    console.log("I need to retake test!!");
}
if (passTest && flightsAvalible)  {
    console.log("Second time's the Charm." + " Now I get to Go!!");
}
else {
    console.log("I Finally get To Go!!!");
}
console.log("Flights Booked." + " 2 Weeks left");

var weekDay = 5, weekEnd = 2, weekTwo = 5, lastWeekend = 2;

while ( weekDay > 0 ) {
    console.log( weekDay + " Days left this week!");
    weekDay--
}
console.log("\"One week down!!");

while ( weekEnd > 0 ) {
    console.log(weekEnd + " Day left in the Weekend");
    weekEnd--
}
console.log("\"One weekend down, One more to go");

while ( weekTwo > 0 ) {
    console.log(weekTwo + " Day\'s Left  until the weeks over");
    weekTwo--
}
console.log("\"Almost on my way");

while (lastWeekend > 0 ) {
    console.log(lastWeekend + " Days left in my weekend!!");
    lastWeekend--
}
console.log("Time to Go");

var training = [ "orientation", "classWork", "handsOn", "Farewell", "Home"],
    trainingCount, lastTrainingIndex;

trainingCount = training.length;
lastTrainingIndex = trainingCount - 1;

for (var i = 0; i < training.length; i++)  {
    console.log("Each Day's agenda: " + training[i]);
}
console.log("Monday: " + training[0],
    " Tuesday: " + training[1],
    " Wedensday: " + training[2],
    " Thursday: " + training[1],
    " Friday: " + training[3],
    " Saterday: " + training[5]);
training[3] = "Training!";
console.log( training);
;

var sessionNames = ["intro", "proApp", "workShop"],
    minutesPerSession =[30, 60, 90];
for (var sessionNumber = 0; sessionNumber < sessionNames.length; sessionNumber ++){

    var sessionName = sessionNames[sessionNumber],
        minutesThisSession = minutesPerSession[sessionNumber];

    console.log (" Starting to teach " + sessionName + "for" +
    minutesPerSession + "minutes.");

        for (var minutes = 0; minutes <minutesThisSession; minutes +=5) {
             var minutesRemain = minutesThisSession - minutes;
        console.log(minutes + " Done" + minutesRemain + "to go!!");
    }
    console.log("I'm done with " + sessionName + ".");   */


var joe = {
    name: "Joe Burns",
    Company: "Apple Inc",
    Age: 29,
    appleCerts: [
        "iLife",
        "iWork",
        "Aperture"
    ],
    title:"Creative"

};
console.log( joe );




