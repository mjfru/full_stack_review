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

/*
! Scope - Variable 'Visibility'
* The location where a variable is defined dictates where we have access to that variable.
? Block refers to content contained in curly braces in loops, conditionals, etc.
? The old 'var' declaration for variables ignores block scope and technically allows a dev / user to access variables inside blocks. Don't do this.

* Lexical scope refers to functions, nested in other functions, have access to variables in the parent function.

! Function Expressions - Refer to storing a function as a variable.
*/

//? Function Expression
const add = function(x, y) {
  return x + y
}

add(3, 4); // 7

/*
! 'this' - 'this' allows us to access other properties on / within the same object
* The value of this depends on the invocation context of the function it is used in.
*/

const dog = {
  name: "Gracie",
  color: "Black and White",
  breed: "Boston Terrier",
  bark() {
    console.log(`${this.name} says 'Bork Bork Bark Bark'.`); // 'this' refers to the 'dog' object.
  }
}

dog.bark(); // 'Gracie says...' this is an invocation of the object, to the left of the '.'
const barking = dog.bark;
barking() // undefined says... this will now refer to...the window!

/*
! Bonus: try & catch - Handling errors and exceptions in JS
* Must be matched together in a pair...try to do this and if you can't, catch it and do something instead.
*/

try {
  hello.toUpperCase(); // will cause an error!
} catch {
  console.log('Error!')
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("Please use a string to use this function.")
  }
}

yell('hello') // no problem but...
yell(2); // causes an error because an interger cannot be uppercased