/*
three new logical assignment operator that are added in ES2021
*/


const rest1 = {
    name: "Capri",
    numGuests: 0,
}

const rest2 = {
    name: "La Piazza",
    owner: "Ashar",
}

// first way of setting the no. of guests using the short circuiting
/*
rest1.numGuests = rest2.numGuests || 10;
rest2.numGuests = rest1.numGuests || 10;
*/

// with the help of this operator we can do the same way with more precisely.
/*
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
*/

// but when we use the zero then it will create a problem so we use the nullish operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);