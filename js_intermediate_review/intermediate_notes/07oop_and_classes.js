/*
! OOP, Classes, and Object Prototypes

! Object Prototypes
? What on earth is the __proto__ we see in our console / dev tools?
* It's a property that references soemthing's prototype!
* These prototypes contains all of the methods associated with the data type, such as arrays, document.body, .
If you look at Array.prototype, you'll see what methods are available to arrays (and even be able to add onto that list as well).
.prototype is the actual object, __proto__ is the reference to that object.
*/

//? Making a new prototype method:
String.prototype.yell = function () {
  console.log(this.toUpperCase());
};
"hello?".yell();

/*
! OOP
* OOP makes our life and code easier by breaking it up into distinct patterns of objects and organizing it.

? Factory functions have fallen out of favor for Constructor functions instead.
* The 'new' keyword, an operator, is essential for constructor functions.
* When we call this color function with 'new', it will create a new, blank, JS object, and sets what we passed in to the new object.
* At the end, it returns 'this'.
Now, anytime we call Color prefixed with 'new', we get a new Color object.
*/

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// const color1 = new Color(255, 40, 100);

/*
! Classes in JavaScript
* An even better way of doing the above is the 'new' Class syntax.
The main benefit here are that we don't have to break up the constructor, deal with the prototype, etc.
*/

class Color {
  // Executes immediately when a new Color is created
  constructor(r, g, b, name) {
    // console.log("Inside Constructor!");
    // console.log(r, g, b);
    //! When inside the constructor, we must access 'this', it will automatically refer to a new object.
    // What is on the left doesn't necessary have to match the parameter name (on the right but it's common convention)
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet() {
    return `Hello from ${this.name}!`;
  }
  innerRGB() {
    // Destructuring here makes using this... not necessary
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
}

//! Must be called with new
const tomato = new Color(255, 67, 89, "tomato");
console.log(tomato.greet());

const white = new Color(255, 255, 255, "white");
console.log(white.hex());
console.log(white.rgb());
console.log(white.rgba());

/*
! Extend & Super Keywords
* In the below example(s), we have two classes with a lot of duplicated functionality in both their constructors and their methods...with one exception.
* To fix this duplication, we can take whatever is repeated and move it into its own class.
? Consider it like a parent-child relationship.
* The 'extends' keyword on the child-like classes inherit all the methods and constructor information from the parent-like class.
* If you want to have some additional information passed into a cat or a dog, something that will be unique and not included in the Pet constructor, use the keyword 'super'.
! Super references the original constructor
*/

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "Meooowww!";
  }
}

const monty = new Cat("monty", 9);
monty.eat();

class Dog extends Pet {
  bark() {
    return "Wooooofff";
  }
  eat() {
    //! This will overwrite what it's extended from.
    return `${this.name} scarfs his food.`;
  }
}

const clarence = new Dog("clarence", 13);
console.log(clarence.eat());
