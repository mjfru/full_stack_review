/*
! Map Practice
It's time to get practice with the map method!

Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

e.g.,

console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']


Please note:

The fullNames array is an array of objects with each object containing properties for the first and last names of each character.
You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.
*/

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(person) {
  return person.first;
});

console.log(firstNames);