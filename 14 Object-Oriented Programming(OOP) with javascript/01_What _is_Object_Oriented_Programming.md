# Object-oriented Programming
- Object-oriented programming(OOP) is a programming paradigm based on the concept of objects.
- we use objects to model(describe) real-world or abstract features.
- Objects may contain data(properties) and code(methods). By using objects, we pack data and the corresponding behaviour into one block.
- Objects are building blocks of applications, and interact with one another.
- Interaction happen through a public interface (API): methods that the code outside of the project of the object can access and use to communicate with the object.
- OOP was developed with the goal of the organizing code, to make it more flexible and easier to maintain(avoid "spaghetti code").

# The four fundamental of OOP principles
- Abstraction
-- Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.
- Encapsulation
-- Keeping properties and methods private inside the class, so they are not accessible from outside of the class. Some methods can be exposed as a public interface(API.
- Inheritence
-- Making all properties and methods of a certain class availble to a child class, forming a hierarchical relationship between classes. This allow us to reuse common logic and to model real-world relationships.
- Polymorphism
-- A child class can overwrite a method it inherited from a parent class [it's more complex then that, but enough for our purpose].

# 3 ways of implementing prototypal inheritance in javascript.
1. Constructor functions
- Technique to create objects from a function.
- This is how built-in objects like Arrays, Maps or Sets are actually implemented.

2. ES6 classes
- Modern alternative to constructor function syntax.
- "Syntactic sugar": behind the scenes. ES6 classes work exactly like constructor functions.
- ES6 classes do NOT behave like classes in "Classical OOP".(Above pic)

3. Object.create()
- The easiest and most straightforward way of linking an object to a prototype object.