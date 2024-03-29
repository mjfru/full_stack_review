const joke = require('give-me-a-joke');
const colors = require("colors");

// To get a random dad joke
joke.getRandomDadJoke (function(joke) {
  console.log(joke.rainbow);
});

