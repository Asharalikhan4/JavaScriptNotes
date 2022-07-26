/*
we use and operator and or operator to use the short circuiting.
-- Short Circuiting in the case of the or operator is if the first value is a truthy value, it will immediately return that first value.
-- While in the case of the and operator short circuit when the first value is falsy and then return that value without evaluting the second value.
*/

console.log("---------- OR ----------")

console.log(3 || "Jonas");
console.log(' ' || "Ashar");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || ' ' || 'Hello' || 23 || null);



console.log("---------- AND ----------")

console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "Jonas");