/*
! String Methods Pt. 2
I've provided you with a word variable, set to "skateboard".
Your goal is to use string methods on word, so that you end up with the string "beard".

Use a string method to extract the "board" part of "skateboard"  (using the slice method)

Replace the "o" in board with an "e" (using the replace method)

Save the result in a variable called facialHair
*/

const word = "skateboard";

const facialHair = word.slice(5).replace('o', 'e');

console.log(facialHair);