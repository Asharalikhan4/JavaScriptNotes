# Overview of js -


1. High Level - 
In low level language developer has to manage resources manually(ex - c) more optimized and more fast. while in high level language developer does not have to worry, every thing happen automatically.

2. Garbage Collected -
it takes memory management away from us. it is an algorithem inside the js engine

3. Multi-paradigm -
this make js very popular. it is an approach and mindset of structuring code, which will direct your coding style and technique.
- Procedural Programming.
- object-oriented programming.
- functional programming.
js allow all of it.

4. First class function -
In a language with first-class function,functions are simply treated as variable. We can pass them into other functions, and return them from function.

5. It is a dynamically typed language.

6. Concurrency model - 
how the js engine handles multiple tasks happening at the same time. We need this because js run in one single thread, so it can only do one thing at a time.So what about a long-running task. Sounds like it would block the single thread. However, we want non-blocking behavior! How do we achieve that . we use an event loop. takes long running task. executes them in the background, and puts them back in the main thread once they are finished.


---------------------------------------------------------------------------------------------------------------

# Js engine -
- program that execute the js code. example V8 engine(chrome).
- a js engine contain call stack and heap.
- In call stack our program is executed using execution context.
- In heap there are objects and objects in memory.


---------------------------------------------------------------------------------------------------------------
# Scoping and scope in js.
- Scoping : How our program's variable are organised and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"

# Lexical scoping: 
Scoping is controlled by placement of function and blocks in the code.

---------------------------------------------------------------------------------------------------------------
# Hoisting:
Makes some types of variable accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope." -> but behind the scene -> before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object. -> Hoisting dosen't work same for all the variable

---------------------------------------------------------------------------------------------------------------
# this keyword/variable:
- Special variable that is created for every execution context(every function). Take the value of(point to) the "owner" of the function in which the this keyword is used.
- this is NOT static. it depends on how the function is called , and its value is only assigned when the function is actually called.

-- function calling as a method
const jonas = {
    name: "Jonas",
    year: 1989,
    calcAge: function(){
        return 2037 - this.year;  // this.year value will be 1989.
    }
};
jonas.calcAge();

-- calling function simply
undefined in strict mode! otherwise window(in the browser)

-- in arrow function
don't get own this keyword(lexical this keyword)

-- Event listener
Dom element that the handler is attached to

- this does not point to the function itself, and also not the it's variable environment.

# How to use the this keyword
console.log(this)

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991);


const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991);