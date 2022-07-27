'use strict';

/*
it is introduced in ES6 and it is called for-of-loop
*/


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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// looping through above using the for-of-loop
for(const item of menu) console.log(item);
// we can aslo use the break and continue keyword in this.

// to get the index of the item.
// for(const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

// better version of the above line. Using the concept of destructure.
for(const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);