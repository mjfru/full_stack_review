/* 
! JS Basics
! Only new or information I would like to reinforce will be included in these notes

! Primitive Types in JS:
  - Number
  - String
  - Boolean
? - Null  - Intentional absence of any value, must be assigned 
    'I don't know!' - JS
? - Undefined - Variables that do not have an assigned value.
? - Symbol
? - BigInt

* Numbers
  - No floats, all numbers (positive and negative) are included.
  - NaN is also included in 'numbers' despite being...not a number!
*/

console.log(typeof NaN); // number

/*

! Variables
* Increment Operators
?   - i++ - This returns the current value of the variable and THEN increments by one.
?   - ++i - The pre-increment operator, increments the variables value by one FIRST and then returns it.

! Strings
* A reminder of some string methods:
  - .toUpperCase();
  - .toLowerCase();
  - .trim(); -- takes off whitespace from the beginning and end of a string.

* String methods taking arguments:
  - indexOf() - Gives us when the argument occurs in the string
    someVariable.indexOf('x'); ---> returns the -first- instance of where this is located in the someVariable string.
  - slice() - Can accept more than one arguments (in the form of an index) and extracts a portion of a string...giving us a new one.
  - replace() - Takes two arguments, what we want to replace and what we want to replace it with.
  - replaceAll() - Same idea, but replaces all instances of the first argument instead of just the first one.
  - repeat() - Takes a number of how many times you want to repeat a given string.
*/

let message = "haha that is so funny!";
console.log(message.slice(5)); // that is so funny!
console.log(message.slice(5, 9)); // that

console.log(message.replace("haha", "hehe")); // hehe that is...

/*
! The Math Object
- Contains properties and methods for mathematical constants and functions.
  - Math.floor() - Chops off the decimal
  - Math.ceil() - Round up no matter what
  - Math.random() - Gives a random decimal number between 0 and 1 (non-inclusive).
    * Typically this is used in conjuction with .floor() and some math.
*/

console.log(Math.PI); // 3.141592653589793
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;
// =
Math.floor(Math.random() * 10) + 1; // The '+ 1' accounts for the last number never being included.