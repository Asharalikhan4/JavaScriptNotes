'use strict';
// added in ES6
// arrow function don't get the this keyword.

const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);


// a liitle complex
const yearUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(1991));


// a little more
const name = (firstName, lastName) => {
    return firstName+lastName;
}

console.log(name("Ashar ","Ali Khan"));



// Function calling another function

const cutFruit = (fruit) => {
    // first function
    return fruit*4;
}

const Mixer = (mango, litchi) => {
    // second function
    const mangoPieces = cutFruit(mango);  // function calling another funciton.
    const litchiPieces = cutFruit(litchi);
}