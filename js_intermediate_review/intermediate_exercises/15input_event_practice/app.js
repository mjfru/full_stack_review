/*
! Input Event Exercise
It's time to practice working with the input event! 
In the index.html file, you'll find an <h1> and an <input type="text"> element.

In app.js, write code that meets these requirements:

The h1 should start with the text "Enter Your Username".

Whenever an input event is fired on the <input> element, update the <h1> so that it displays "Welcome, " plus the current value from the text input.

If the <input> goes back to being empty, update the <h1> so that it once again says "Enter Your Username"
*/

const h1 = document.querySelector("h1");
const input = document.querySelector("#username");

input.addEventListener("input", () => {
  const name = input.value;
  if (name.trim() === '') {
    h1.innerText = 'Enter Your Username'
  } else {
    h1.innerText = `Welcome, ${name}`;
  }
});
