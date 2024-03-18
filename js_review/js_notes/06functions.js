/*
! Functions
! Only new or information I would like to reinforce will be included in these notes.

* Reminder: Parameter = Placeholder / Argument = What is passed in when you call the function

*/

//? Basic Example w/ 2 Parameters
function repeat(str, numTimes) {
  let result = '';
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
};