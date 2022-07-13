"use strict";

const modal = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);
for(let i = 0; i < btnsOpenModal.length; i++){
    // this is how we select the multiple things with same class name. no we can do anything with this.
    btnsOpenModal[i].addEventListener("click",function(){
        console.log("Button Clicked!");
        modal.classList.remove("hidden"); // here we don't use dot cause we are not selecting anything we are just passing things.
        overlay.classList.remove("hidden");
    });
}