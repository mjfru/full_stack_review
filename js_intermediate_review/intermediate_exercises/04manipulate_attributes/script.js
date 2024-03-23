/*
! Manipulating Attributes Practice
Let's get some practice working with DOM element attributes.
I've provided you with some very basic markup.
Please select the image element and:

Change its source to this url: https://devsprouthosting.com/images/chicken.jpg

Change its alt text to be "chicken"
*/

const chicken = document.querySelector("img");
chicken.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
chicken.setAttribute('alt', 'chicken')
