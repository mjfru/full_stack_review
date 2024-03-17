/*
! Conditional Exercise #1
I'm asking you to write your code inside a pre-defined function.
You will automatically have access to a variable called num.

If num is an even number, print out "even".
Don't do anything if num is an odd number.
*/

function isEven(num){
  if (num % 2 == 0) {
    console.log("even");
  }
}

isEven(4);