/*
! Capitalize Exercise
Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).

For example:
capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
*/

function capitalize(word) {
  let firstLetter = word[0].toUpperCase();
  let slicedWord = word.slice(1);
  console.log(slicedWord);
  return `${firstLetter}${slicedWord}`;
}

console.log(capitalize("squid"));