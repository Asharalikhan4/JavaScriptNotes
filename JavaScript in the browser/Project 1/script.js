"use strict"; // help us to read the error in the console log.

/*

// Selecting an element in the javascript.
// here we write . before the message cause it is a class if it was a Id then we will type #.
console.log(document.querySelector(".message").textContent);  // this will get the element of this class and textContent is the operator that is going to help you to read the text.

console.log(document.querySelector(".message").textContent = "Correct Number!🎉");  // this will change the content of that class.

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 14;


document.querySelector(".guess").value = 10;  // this is how we can set the value.


console.log(document.querySelector(".guess").value);  // this will get the input value that we provide at the front end.

*/

// Handling click events
// console.log(document.querySelector(".btn").textContent);

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


// to excute a event when the click happens.
document.querySelector(".check").addEventListener("click", function () {
  // here this function is an event handler.
  const guess = Number(document.querySelector(".guess").value); // this will get the value whenever we click the button. Here input will be in the form of the string so we have to convert it to the number.
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number ❌";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";   // this is how we change the css with dom manipulation.
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if(score > highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function(){
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
*/



// Now we gonna use the code refracting means reconstruct the code but without changing how it works

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if(!guess){
        displayMessage("No number");
    } else if(guess === secretNumber){
        displayMessage("Correct Answer");
        document.querySelector(".number").textContent = 
        secretNumber;

        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";

        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if(guess != secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? "Too high" : "Too Low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost the game!");
            document.querySelector(".score").textContent = 0;
        }
    }
})


document.querySelector(".again").addEventListener("click", function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
