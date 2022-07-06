'use strict';

// Function is a piece of code that we can reuse over and over again in our code.

function logger(){
    console.log("Hey I am Ashar");
}

// now we can call it anywhere in our program

logger();   // calling the function.
logger();
logger();



// we can also pass the data to the function.
// these are called function with parameters.
function foodProcessors(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;  // this will return the value that we have to store at some variable
}

const appleJuice = foodProcessors(5,0);
console.log(appleJuice);  // we can also do the same thing console.log(fruitProcessors(5,0));


