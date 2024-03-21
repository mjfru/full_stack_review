/*
! Modern JavaScript Features: Default Params, Spread, & Rest

! Default Param(eters)
* While not a new concept, the way we can declare default parameters has changed.
In the past, we would have to do a conditional check such as (if (parameter === undefined { do this })).
? Now, we can just add an equal sign '=' after a parameter we want to set a default parameter to.
! Be careful of the order in which you pass arguments in while doing this; JS won't know which value belongs to what otherwise.
*/

//? Example:
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie()); // Passing nothing in gives us NaN without a default parameter declared.
//? After setting a default parameter though, it will accept that value unless you or the user overwrites it.

/*
! Spread
* Spread syntax allows an iterable, such as an array, to be -expanded- in places where zero or more arguments (for function calls) or elements (for array literals) are expected or an object expression to be expanded in places where zero or more key-value pairs are expected.
? So, a bit confusing! Let's first look at some examples for this using an array to expand it into a list of arguments
*/

const nums = [3, 5, 8, 2, 88, 52, 21, 1, 67];
Math.max(); // Tells us the maximum  / minimum value of values you pass in.
//? If you pass the above array in directly, it doesn't know what to do / how to read an array.

Math.max(...nums); // This is equal to putting in ALL the numbers in the nums array.
Math.min(...nums);
console.log(nums); // In an array with brackets
console.log(...nums); // No array, seperated by spaces.

//? With Strings:
console.log(..."hello"); // h e l l o

//? Using Spread with Array Literals
const favoriteColors = ["green", "forest green", "seafoam", "black", "grey"];
const colorCopy = [...favoriteColors];

const favoriteFoods = [
  "bulgogi",
  "sushi",
  "oyakodon",
  "tonkotsu ramen",
  "nikuzushi",
];
const favoriteThings = [...favoriteColors, ...favoriteFoods];
console.log(favoriteThings); // both of the arrays! More could be added manually as well.

/*
! Spread with Object Literals
* The spread operator here copies properties from one object to another.
? Why do we do this? - To make copies of something and/or to further customize something coming in from a user.
*/

const feline = { legs: 4, family: "felidae" };
const canine = { legs: 4, family: "caninae" };

const catDog = { ...feline, ...canine };
console.log(catDog); // family is caninae because it comes -last-.

const dataFromForm = {
  email: "jerryBreadStealer@nyu.edu",
  password: "hello_newman97",
  username: "jseinfeld",
};
const newUser = { ...dataFromForm, id: 243, isAdmin: false };

/*
! Rest
* Looks like spread...but it's not!
* Let's recall the arguments object...
  It's available inside every function
  It's an array-like object (but isn't quite a true array!)
    Has a length property
    Does not have array methods like push/pop
  Contains all the arguments passed to the function
  Not available inside of arrow functions!
! The rest parameter collects all remaining arguments into an actual array
* 'Collect the --rest-- of the values.'
*/

// function sum() {
//   console.log(arguments);
// }
// sum(); // [Arguments] {}

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sumAll(42, 46, 12, 546, 14));

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`Gold medal goes to ${gold}`);
  console.log(`Silver medal goes to ${silver}`);
  console.log(`Thanks for participating ${everyoneElse}!`);
}

raceResults('Tom', 'Chris', 'Aly', 'Alex', 'Dean');