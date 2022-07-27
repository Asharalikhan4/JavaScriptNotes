'use strict';
/*
First class functions in js are treated as first class citizens -> this means that functions are simply values -> functions are just another type of objects -> store function in variable or properties -> pass functios as arguements to other functions -> return function from function -> call methods in functions -> it is just a concept.


Higher order function are those that recieve another function as an argument, that returns a new function, or both -> this is only possible because of the first class function -> function that recieve another function -> function that return another function -. it is in implementation.
*/


// function that accept another function as input

const oneWord = (str) => {
    return str.replace(/ /g,' ').toLowerCase();
}

const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, fn) => {
    // higher order function
    console.log(`Original Strings: ${str}`);
    console.log(`Transformed strings: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}
transformer('JavaScript is the beat!', upperFirstWord);