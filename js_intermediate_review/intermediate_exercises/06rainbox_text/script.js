/*
! Rainbow Text Exercise
I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter). 

Please write some JavaScript to make them rainbow-colored!

In app.js you'll find an array of color names called colors.
It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.
The first span should be red, the second should be orange, etc. 
*/

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const letters = document.querySelectorAll('span');

let index = 0;
for (const letter of letters) {
  letter.style.color = colors[index];
  index++;
}
