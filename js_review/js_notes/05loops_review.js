/*
! Loops Review
! Only new or information I would like to reinforce will be included in these notes.

! Looping / Iterating Over Arrays
* Tradionally, a for loop such as (let i = 0; i < arr.length; i++) {doSomethingEachTime} would be sufficient, these have largely been replaced by a more modern syntax.
? (More on this later if needed.)

! Nesting Loops
? See Examples

! While Loops
* Continue to run WHILE the test condition remains true.
? let variable = 0;
? while (variable < 10) {
?   variable++
?   console.log(variable)  
? }
* These are more useful when we're not sure of the endpoint or have a definitive amount of times we want to do something.

! Break
* The break keyword exits a loop immediately after meeting the correct conditions.

! For...Of Loops
* A simpler way to make a for loop:
? for (let variable of iterable) {
?  statement
? }

! Looping Over Objects
* We can use the 'for...in' loop to iterate over objects.
? for (let variable/key in object)  {
?   statement
? }
* There is also Object.keys(objectName) that will give us the keys of the object as an array.
*/

//? Nested Loop Examples:
let string = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log("Outer:", i);
  for (let j = 0; j < string.length; j++) {
    console.log("   Inner:", string[j]);
  }
}

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Jeff", "Juanita", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erica"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

//? For of examples
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}

for (let letter of "hello world") {
  console.log(letter);
}

//? While Loop Example:
const secret = "superSecret";
let guess = prompt("Enter the secret code:");
while (guess !== secret) {
  guess = prompt("Enter the secret code:");
}
console.log("Welcome back, member!");
