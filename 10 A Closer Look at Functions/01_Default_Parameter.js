'use strict';

const bookings = [];

const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {       // (ES6) way of doing the same thing

    //  using the old way  (ES5)
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',4);
createBooking('LH123',undefined ,1000);  // if you want to leave a agrument then you can use this syntax. added in ES6