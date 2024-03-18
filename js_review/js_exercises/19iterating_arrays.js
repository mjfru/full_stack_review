/*
! Iterating Arrays Exercise
I've provided you with an array of strings called people.
Loop over the people array with a for loop, printing out each name in uppercase letters.
Your result should look something like:

SCOOBY
VELMA
DAPHNE
SHAGGY
FRED
*/

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}