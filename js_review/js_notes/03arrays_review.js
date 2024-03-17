/*
! Array Review
! Only new or information I would like to reinforce will be included in these notes.

? Arrays - A data structure of ordered collections of values

! Array Methods

* - .push() - adds to the end
* - .pop() - removes from the end
* - .shift() - removes from the start
* - .unshift() - adds to the start

* - .concat() - adds two arrays together to be merged into a new one
* - .includes() - tells us if an array contains a particular value
* - .indexOf() - returns the first index where the desired item is found
* - .reverse() - changes the original array to have the reverse order

* - .slice() - gives us a portion of an array, can take two arguments, the last one is non-inclusive
* - .splice() - changes the contents of an array, can add, remove, and rearrange arrays.
* - .sort() - sorts, by default, converts everything to strings and sorts it by its UTF-16 code

? Arrays -can- be declared with const because it's still the same reference / address to the contents of an array...as long as it remains an array.
(Can't change an array declared with const to say, a string.)
*/

//? .concat()
let cats = ["Blue", "Snickers"];
let dogs = ["Katya", "Gracie"];
let pets = cats.concat(dogs);
console.log(pets);

//? .includes()
pets.includes("Katya"); // true

//? .slice()
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colors.slice(5)); // 'indigo', 'violet'
let coolColors = colors.slice(3);

//? .splice()
colors.splice(5, 1); // index to be changed, how many from there to be deleted
colors.splice(4, 0, "lime", "forest"); // where to insert, no items to delete, what's going in at the specified index

//? .sort()
let scores = [1, 70, 100, 2500, -12, 0, 34];
console.log(scores.sort()); // -12, 0, 1, 100, 2500, 34, 70... 

/*
! Nested Arrays
* Of course, arrays can contain other arrays too!
Take, for example, this classic tic-tac-toe board...
*/

const gameboard = [
  ["X", "O", "X"],
  ["O", null, "X"],
  ["O", "O", "X"]
];

// How would we access the null value?
console.log(gameboard[1]) // "O", null, "X"
console.log(gameboard[1][1]) // null