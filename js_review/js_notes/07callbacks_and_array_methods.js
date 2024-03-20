/*
! Callbacks & Array Methods

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