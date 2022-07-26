'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Itlay',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

// Destructuring is an ES6 feature and it's way of unpacking values from an array or an object into seprate variable.

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


const [first, second] = restaurant.categories;
const [pahela, , teesra] = restaurant.categories;  // this will skip the second element.
console.log(first, second, teesra);

// swapping the value of variable
// [first, second] = [second, first];

console.log(restaurant.order(2,0));

// Now we are going to destructure this
const [starter, main] = restaurant.order(2,0);  // this is how we destructure the array.
console.log(starter, main);

// destructuring the nested array
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

// destructuring inside the destructuring.
const[i, ,[j,k]] = nested;
console.log(i,j,k);

// we use the down technique when we use the API
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


