const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Itlay',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};



/* 
Spread Opearator(...) = it used to expand an array into all its elements. basically it's unpacking all the array elements at one.
*/

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Now using spread opeartor
const newArr = [1, 2, ...arr];    // spread opeartor takes out all the value of the array and put all the elements of the array.
console.log(newArr);

console.log(...newArr);  // this will log the individual elements of the array.

const newMenu = [...restaurant.mainMenu, 'Gnocci'];  // this is how we add a new element in the array. this is a new array we are not doing any addition in existing array.
console.log(newMenu);

// big difference between spread opeartor and destructor is that spread opearator takes all the elements from the array and it also dosen't create a new variable, as it consequence we can only use it in places where we would otherwise write value seprated by the commas.

// TWO IMPORTANT USE CASES OF SPREAD OPERATOR

// 1. CREATE SHALLOW COPIES OF ARRAYS
const mainMenuCopy = [...restaurant.mainMenu];

// 2. TWO MERGE TWO ARRAYS
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];   // we can also add more in this.
console.log(menu);

// spread opeartor work on the iterables. iterables are arrays, strings, maps, sets, but not objects.

const str = "Jonas";
const letters = [...str];
console.log(letters);
console.log(...str);

const ingrediants = [
    prompt("Let's make pasta! Ingrediants 1?"),
    prompt("Ingrediant 2?"),
    prompt("Ingrediant 3?"),
];

console.log(ingrediants);

restaurant.orderPasta(...ingrediants);

// after 2018 the spread opearator also work on the objects.