'use strict';
// the main d/f b/w the constructor function and the normal function is that we call the constructor function with the new keyword.

// constructor function for a person.
// arrow function does not work as a constructor function because it dosen't have it's own this keyword.

const Person = function(firstName, birthYear){
    // Instance properties.
    this.firstName = firstName;
    this.birthYear = birthYear;

    // just like the properties we can also add the methods
    this.calcAge = function(){
        console.log(2037-this.birthYear);  // we don't create methods like this because when ever we create a perosn copy of this will create and that will make terrible to run our code. we create method using the prototypes and prototypes inheritance.
    }
}

const ashar = new Person("Ashar",2000);
console.log(ashar);
// Behind the scene the four steps are performed that are
// 1. New {} is created.
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const hamza = new Person("Hamza",2001);
console.log(hamza);

// we can create as much we want using this object.
// here hamza and ashar are the isntance of the object.
console.log(ashar instanceof Person);  // this will prove the above line.