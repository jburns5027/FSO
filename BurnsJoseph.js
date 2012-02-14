alert("JavaScript works!");

var passTest = true, flightsAvalible = true, failTest = false, flightsCanceled = false;

if ((passTest && flightsAvalible) || flightsCanceled) {
    console.log("I can go to Califonia ");
}   else {
    console.log("I need to retake test!!");
}
if (passTest && flightsAvalible)  {
    console.log("Second time's the Charm" + " Now I get to Go!!");
}
else {
    console.log("I Finally get To Go!!!");
}
console.log("Flights Book." + " 2 Weeks left");

var weekDay = 5, weekEnd = 2, weekTwo = 5, lastWeekend = 6;

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



