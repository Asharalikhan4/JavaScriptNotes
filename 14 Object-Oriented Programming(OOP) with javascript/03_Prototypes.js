'use strict';

const Person = function(firstName, birthYear){
    // Instance properties.
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const hamza = new Person("Hamza",2001);
console.log(hamza);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
    console.log(2037-this.birthYear);
}

hamza.calcAge();