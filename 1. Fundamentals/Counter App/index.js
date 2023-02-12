//-- 1
// initialize the count as 0
// listen for the clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let count = 0;
function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
  //console.log("The button was clicked");
}


//-- 2
//create a function, save(), which logs out the count when it's called
function save() {
  console.log(count);
  printCount();
  document.getElementById("count-el").innerText = 0;
  count = 0;
}
save();


//-- 3 
let name1 = "Mrigya";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name1;
console.log(myGreeting);


//--- 4
let name2 = "Mrigya";
let greeting2 = "Welcome back, ";
let welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = greeting2 + name2;
welcomeEl.innerText += "👋";


//--- 5
//Grab the save-el paragraph store it in a variable called saveEl
//create a variable that contains both the count and the dash separator, i.e. "12-"
//render the variable in the saveEl using innerText
//NB: Make sure not to dete existing content of the paragraph

function printCount() {
let saveEl = document.getElementById("save-el");
let prevEntry = count + " - ";
//saveEl.innerText = prevEntry; //but this solution, deletes the previous entries of <p> with id "save-el"
saveEl.textContent += prevEntry;//correct soln
}
//--- 7
//Render the content to 0 inside <p id="save-el"> when save button is clicked -- done -- line 19*


//---

//local scope, global scope
let lap1 = 11;
let lap2 = 12;
let lap3 = 13;
function logLapTime() {
  let totalLapTime = lap1 + lap2 + lap3;
  //console.log(totalLapTime);
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
//console.log(lapsCompleted);

//---
//another method to increment
let countEl = document.getElementById("count-el1");
//console.log(countEl); //--> logs the HTML element which has the ID "count-el1"
let count1 = 0;
function increment1() {
  count1 = count1 + 1;
  countEl.innerText = count1; // redering the value of count1 
}
