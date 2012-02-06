/* alert("The story Begins in the morning!!");
console.log(" First I have to decide if today is a good day to run?" +
" Is the weather right today?");

var sunny = true, warm = true, rain = false, cold = false;
// Below: Booleen Logic
if ((warm && cold) || rain) {
    console.log(" It's time to run!!");
}   else {
    console.log("No running today if it's cold, and wet");
}
if (sunny && warm)  {
    console.log("Perfect Day to Run if it's warm, and sunny!!");

// Below: Loops & Strings with escapes.
} else {
    console.log("Maybe today's my off day!!!");
}
console.log("It's time to start a c2,5k training log" + " Week 4, day 3 involves:");

 var warmUp = 5, jog = 6, walk = 2, jogAgain = 6, coolDown = 5;

 while ( warmUp > 0 ) {
    console.log( warmUp + " Minutes for warm up left!");
 warmUp--
 }
 console.log("\"Run Now");

 while ( jog > 0 ) {
    console.log(jog + " minutes left");
 jog--
 }
 console.log("\"Walk now\"");

 while ( walk > 0 ) {
    console.log(walk + " minutes until I jog again.");
 walk--
 }
 console.log("\"Run Now\"");

 while (jogAgain > 0 ) {
    console.log(jogAgain + " Minutes left in my last run!!");
 jogAgain--
 }
 console.log("\"Walk Now\"");

 while (coolDown > 0) {
    console.log( coolDown + " Minutes left in my cool down!!");
 coolDown--
 }
 console.log("\" Workout: DONE !!!\"");

 /*for ( warmUp = 0; warmUp < 5; warmUp++ 1) {
 console.log (warmUp + " Minutes until I Jog.");
 }
 console.log("\"Jog Now.\"");  */

// Below: Arrays

var workOut = [ "upperbody", "off day", "lowerbody", "core", "cardio"],
    workOutCount, lastWorkOutIndex;

workOutCount = workOut.length;
lastWorkOutIndex = workOutCount - 1;


for (var i = 0; i < workOut.length; i++)  {
    console.log("Work Out type: " + workOut[i]);
}
    console.log("Monday: " + workOut[0]);
    console.log("Tuesday: " + workOut[1]);
    console.log("Wedensday: " + workOut[2]);
    console.log("Thursday: " + workOut[1]);
    console.log("Friday: " + workOut[3]);
    console.log("Saterday: " + workOut[1]);
    console.log("Sunday: " + workOut[4]);





/*workOutCount, lastworkOutIndex;

workOutCounts = workOut.length;

lastworkOutIndex = workOutCount -1; */




