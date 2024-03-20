/*
! Function Expression Exercise
Define a function that returns the square of a number.
Define the function as a function expression, stored in a variable called square.

square(4) //16
square(3) //9
*/

const square = function (num) {
  return num * num;
};

console.log(square(7));

/*
! Higher Order Functions - Functions that operate on / with other functions.
* They can: accept other functions as arguments and also return a function.
*/

//? Higher Order Function Example:
let rollDie = function () {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
};

function callTwice(func) {
  func();
  func();
}

callTwice(rollDie);

/*
! Returning Functions from Functions
*/

//? Examples of functions returning / generating functions
function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Congrats, I am a good function!");
    };
  } else {
    return function () {
      console.log("Not today, buddy.");
    };
  }
}

const mysteryFunc = makeMysteryFunc();
mysteryFunc();

//? Making a 'factory' function
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

// How we can utilize having made a factory function and passing a value to the function it returns:
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(15)); // true
console.log(isChild(35)); // false

/*
! Methods - Functions added as properties to objects
? Since this is SO common, there is a new shorthand available for us to us as well.
*/

//? Original Way:
const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num * num * num;
  },
};

console.log(myMath.cube(3)); // 27

//? Newer Shortcut:
const newMath = {
  greeting: 'Hi',
  add(x, y) {   //! Note: no function keyword!
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}
console.log(newMath.multiply(8, 5)); // 40