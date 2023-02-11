// initialize the count as 0
// listen for the clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0;
function increment() {

    document.getElementById("count-el").innerText = count;
    count = count + 1;
    console.log("The button was clicked");
}

//---

//local scope, global scope
let lap1 = 11;
let lap2 = 12;
let lap3 = 13;
function logLapTime() {
    let totalLapTime = lap1 + lap2 + lap3;
    console.log(totalLapTime);
}
//console.log(totalLapTime); -->error -- "totalLapTime" is local to the above function

logLapTime();

//---

let lapsCompleted = 0;
//create a fucntion that increments the number of laps completed

function increLap() {
    lapsCompleted += 1;
}
increLap();
increLap();
console.log(lapsCompleted);

//---
//another method to increment
let countEl = document.getElementById("count-el1");
console.log(countEl); //--> logs the HTML element which has the ID "count-el1"
let count1 = 0;
function increment1() {
    count1 = count1 + 1;
    countEl.innerText = count1;
}