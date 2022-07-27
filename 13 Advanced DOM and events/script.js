'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();  // it will prevent all the default things that happen in webpage. here e denotes the event.`
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Selecting, Creating and Deleting element


console.log(document.documentElement);
console.log(document.head);

const header = document.querySelector('.header');  // to select only one element.
const allSections = document.querySelectorAll('.section');   // to select multiple element.
console.log(allSections);


document.getElementById('section--1');   // get all the elements with this id.
const allButtons = document.getElementsByTagName('button');  // get all the elements with this name.
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));  // gets all the elements with this class name.

// All these are selector but the one we are going to use the most is the query selector and query selector all.



// CREATING AND INSERTING ELEMENTS
// insertAdjacentHTML

const message = document.createElement('div');  // it will create a dom element and then store some msg init.
message.classList.add('cookie-message');
message.innerHTML = 'We use cookie for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';  // this will add the text content in this div.
// Now we can select the element in which we want to insert.let add this is header
//header.prepend(message);   // this is added as the first child we can also add it as the last child using append.

header.append(message);

// to make it availble on more then one place we first make to copy it.

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// DELETING AND ELEMENT
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();
  // old syntax - message.parentElement.removeChild(message);
});``