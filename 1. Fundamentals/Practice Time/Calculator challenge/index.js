let n1 = 2;
let n2 = 4;
document.getElementById("num1-el").textContent = n1;
document.getElementById("num2-el").textContent = n2;

let sumEl = document.getElementById("sum-el");
function addNums() {
let a = n1 + n2;
sumEl.textContent = "Sum: " + a;
}

//this will produce correct results, because if we do the calculation in the line 9, then the numbers being added will be considered as a string -- and will show absurd answer e.g. "Sum: 24"

function subNums() {
    let a = n1 - n2;
sumEl.textContent = "Sum: " + a;
}
function mulNums() {
    let a = n1 * n2;
sumEl.textContent = "Sum: " + a;
}
function divNums() {
    let a = n1 /n2;
sumEl.textContent = "Sum: " + a;
}