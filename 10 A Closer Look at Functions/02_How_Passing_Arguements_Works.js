'use strict';

/*
Value Vs Refrence
- Js does not have passing by refrence it only has the pass by value.
*/

const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 873473578348346
}

const checkIn = (flightNum, passenger) => {
    flightNum = 'OP707',
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 873473578348346){
        console.log('checkIn');
    } else {
        console.log('Wrong');
    }
}

checkIn(flight, jonas)
console.log(flight);
console.log(jonas)