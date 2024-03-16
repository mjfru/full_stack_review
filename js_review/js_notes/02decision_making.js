/*
! Decision Making in JavaScript
! Only new or information I would like to reinforce will be included in these notes.

! Comparisons
? While it's uncommon, you can indeed compare strings:
  'a' > 'b'; // true
  'A' > 'a'; // false
This is based off of their unicode and the value it has.

! Console, Alert, & Prompt
* promt("...") opens a textbox in the user's browser to receive some kind of input from them; typically stored in variable.
*/

let userInput = prompt("Please enter a number."); // stores a string of the number entered by the user
parseInt(userInput); // changes the string to an integer for our backend use.
