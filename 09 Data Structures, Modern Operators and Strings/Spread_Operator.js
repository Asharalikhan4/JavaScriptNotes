/* 
Spread Opearator(...) = it used to expand an array into all its elements. basically it's unpacking all the array elements at one.
*/

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Now using spread opeartor
const newArr = [1, 2, ...arr];    // spread opeartor takes out all the value of the array and put all the elements of the array.
console.log(newArr);