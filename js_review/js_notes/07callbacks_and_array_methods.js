/*
! Callbacks & Array Methods
/*

! Higher Order Functions - Functions that operate on / with other functions.
* They can: accept other functions as arguments and also return a function.
*/

//? Higher Order Function Example:
let rollADie = function () {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
};

function callTwice(func) {
  func();
  func();
}

callTwice(rollADie);

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

/*
! forEach method
* This method accepts a callback function and will call the function once - per element - in the array.
? This was more prevalent before the for...of loop came into existence.
*/

//? forEach Example:
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.forEach(function (n) {
  console.log(n * n);
});

nums.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

const movies = [
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Gladiator",
    score: 89,
  },
  {
    title: "Poor Things",
    score: 84,
  },
];
// Let's print something like Title - Score/100
movies.forEach(function (movie) {
  console.log(`${movie.title} - Score: ${movie.score}/100`);
});

//? Let's add an arrow function for this object now (with implicit return):
// const newRating = movies.map(function(movie) {
//   return `${movie.title} - ${movie.score / 10}`
// })
// console.log(newRating);
const newRating = movies.map(movie => 
  `${movie.title} - ${movie.score / 10}`
)
console.log(newRating);
/*
! Map
* Creates a new array with the results of calling a callback on every element in the array.
? Map is typically used when we need a portion of our data or transform every element in a starting array.
*/

//? Map Examples:
const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (text) {
  // Creates a new array stored under the name 'caps'.
  return text.toUpperCase();
});
console.log(caps);

const titles = movies.map(function (movie) {
  return movie.title;
});
console.log(titles); // Array of movie titles from previous example

/*
! Arrow Functions
* A newer, syntactically compact alternative, to a regular function expression.
? const variableName = (parameter(s)) => { do this }
*/

const add = (x, y) => {
  return x + y;
}
console.log(add(6, 2));

//? For one parameter, the parentheses are optional:
const square = x => {
  return x ** 2;
}
console.log(square(3));

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDie());

/*
! Implicit Returns
* Arrow functions can be shortened even more, removing the need for the 'return' key word.
! They only work if there is only one expression in the body of your function!
*/

const isEven = num => { //? Same as above example with one parameter
  return num % 2 === 0;
}

const isEven2 = num => (  //? Implicit return here, no {} or the keyword 'return' needed.
  num % 2 === 0
)

const isEven3 = num => num % 2 === 0; //? One-line implicit return