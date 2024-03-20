/*
! More on Array Methods and Callback Functions

! setTimeout
* Nothing to do with arrays; setTimeout delays execution until a scheduled time.
? setTimeout expects two things: a callback function to fire off and a time in milliseconds to delay said callback function.

! setInterval
* Allows us to repeat something at a specified interval.
* Use clear interval after setting your function to a variable to clear it.
*/

//? setTimeout Examples:
// Callback function with no parameters passed in, 3 seconds as the second argument.
console.log("*********** setTimeout Example ***********");
console.log("Hello!");
setTimeout(() => {
  console.log("...are you still there?");
}, 3000);
console.log("Okay then, goodbye!");

//? setInterval Examples:
// const example = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// clearInterval(example);

/*
! Filter
* Creates a new array with all elements that pass the test implemented by the provided function.
* This does not alter the original array, it simply filters it and makes a new array of what you want filtered out.
? Filter and Map are frequentely used together for greater control over what new array we want to return from data.
*/

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const smallNum = numbers.filter((number) => {
  return number < 10;
});
console.log(smallNum);

const movies = [
  {
    title: "Dune 2",
    score: 100,
    year: 2024,
  },
  {
    title: "Poor Things",
    score: 92,
    year: 2023,
  },
  {
    title: "The Two Towers",
    score: 95,
    year: 2004,
  },
  {
    title: "Jingle All the Way",
    score: 71,
    year: 1996,
  },
];

const excellentMovies = movies.filter((movie) => {
  return movie.score >= 95;
});
//? Using .map() now...
const excellentMovieTitles = excellentMovies.map((movie) => movie.title);
console.log(excellentMovies);
console.log(excellentMovieTitles);

//? Both of them combined:
const goodMovies = movies
  .filter((movie) => movie.score > 85)
  .map((movie) => movie.title);
console.log(goodMovies);

/*
! Some & Every
* Some returns a boolean value if ANY of the array elements pass the test function.
* Similarly, .every() returns a boolean value if ALL elements pass the provided function.
*/

//? Some Example(s)
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

words.some(word => {
  return word.length > 4;
}). // true!

words.some(word => word[0] === 'Z'); // false!
words.some(word => word.includes('cake')); // true!

//? Every Example(s):
words.every(word => {
  return word.length === 3;
}) // false