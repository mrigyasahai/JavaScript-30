let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard];//ordered list of items
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;

let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//another way(more dynamic) of getting an HTML element from it's selector --
//let sumEl = document.querySelector("#sum-el");//here we have to write '#' to specify that it is an Id,similarly '.' for a class selector

function startGame() {
    renderGame();
}

function renderGame() {
sumEl.textContent = "Sum: " + sum; 
//render out firstCard and secondCard
cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
//render out all the cards we have

if(sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
   message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}


// console.log(hasBlackjack);
// console.log(isAlive);
//console.log(message);
messageEl.textContent = message;
}

function newCard() {
    let card = 3;
    sum += card;
    startGame();
}

//---ROUGH 
let message4 = [
    "Hi there, I'm good!",
    "Hey folks",
    "The stream is starting"
]

let newText = "Yes, yes!";
message4.push(newText);
console.log(message4);
// to remove the last item -- recently added item in an array -- pop() function

message4.pop();
console.log(message4);