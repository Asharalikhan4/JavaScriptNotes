console.log("To log anything in the console!\n");
console.log("ashar\n");
console.log(10+20+30);

// Variable is used to store the value.

let catName = "Meow";  // here catName is a variable now we use catName anywhere to print Meow.
console.log(catName);


// in js every value is either object or primitive.

/*
Data Types :-
There are seven primitve datatype that we have in the js.


1. Number
floating point numbers, used for decimals and integers no concept int float and all.
let age = 23;


2. String
Sequence of character, used for text.
let firstName = "Jonas";


3. Boolean
Logical type that can only be true or false, used for taking decision.
let car = true;


4. Undefined
Value taken by a variable that is not yet defined('empty value')
let children;


5. Null
Also means 'empty value'


6. Symbol
Introduced in ES2015. Value that is unique and can't be changed.(Not useful for now)


7. Big Int
Introduced in ES2020, larger integer that the number type can hold.


- Js has a dynamic type which means we don't have to declare the datatype.
*/


console.log(typeof(true));  // typeof is a operator which tell us about the type of the datatype.
console.log(typeof(10));
console.log(typeof("js"));
console.log(typeof(year));


// we can aslo change the value assigned to a variable using dynamic typing.


// now take alook three ways to declare a variable
/*
VAR -
var is the old one while the let and const are new one
we use var to declare variable that we change later.
let age = 30;
age = 31;

CONST -
const variable can't be chnage once asigned.and we can't declare the empty variable using const.
const birth = 1991

VAR -
we should ignore this. but still you can see this in older code bases for legacy reason.

- let is blocked scope and var is the function scope.
*/


// Operators in js
/*
it allow us to transform the values or combine multiple values and do many kind of work with values.
There are many type of operators -
Mathematical Operators and Arithmetic operators
Comparison Operators and assignment operator
Logical Operators
Assignment Operators and many more.
*/

const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah/2, 2 ** 3);

const firstName = "Ashar ";
const lastName = "Ali Khan";
console.log(firstName + lastName);


// Assignment Operator
let x = 10 + 3 * 4;
x += 10;
x++;
x--;
console.log(x);