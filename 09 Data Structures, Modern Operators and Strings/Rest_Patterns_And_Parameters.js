/*
Rest patterns look exactly like the spread operator. so it has the same syntax with the three dots but it actually does the opposite of the spread operator.
*/

const arr = [1,2,...[3,4]];   // Spread because dots are on right side of assignment operator.

const [a, b, ...others] = [1,2,3,4,5];   // Rest because it has dots on the left side of the equal sign.
console.log(a,b,others);   // here others takes all the remaining elements and put it into another array.