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

/*
! Nesting Conditionals
? See Example for refresher:
*/

const password = prompt("Please enter a new password");
// Must be 6+ characters
// Cannot include spaces

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log("Valid Password")
  } else {
    console.log("Password must not contain spaces.")
  }
  // console.log("Password Length: OK") 
} else {
  console.log("Password Length: Insufficient, must be 6 characters or greater.")
}

// if (password.indexOf(' ') === -1) {
//   console.log("No spaces, nice!")
// } else {
//   console.log("Password must not contain spaces.")
// }

/*
! Truthy & Falsy Values
* All JS values have an inherent truthyness or falsyness about them.
? Falsy Values include:
  - false
  - 0
  - "" (empty strings)
  - null
  - undefined
  - NaN
! Everything else is truthy!

! Logical Operators
? Let's refactor that above password validation for some 'AND / &&' review...
*/

const pw = "SecurePassword123"
if (pw.length >= 6 && pw.indexOf(' ') === -1) {
  console.log("Valid Password");
} else {
  console.log("Something went wrong; invalid password.")
}

/*
! Switch Statements Review
* Another control flow option but less common than typical if / else if / else statements.
Slightly awkward syntax and definitely hard to remember.
switch (variable) {
  case 1:
    do something
    break
  case 2:
    ...
}
*/

const day = 2;
switch (day) {
  case 1:   // The day is set to 1
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("?????")
}