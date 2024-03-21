/*
! Destructuring
* A short, clean syntax to 'unpack': values from arrays and properties from objects...into distinct variables!

? From Arrays:
? You'll declare a variable with const or let, square [] braces, and IN ORDER place what you'd like your new variables to correspond to in the original array, denoted by an equal sign and the array name.
*/

const scores = [100, 98, 93, 91, 84, 79, 74];

const [gold, silver, bronze] = scores;
console.log(gold, silver, bronze); // 100 98 93

/*
? From Objects:
*/

const user = {
  email: 'mgs@aol.com',
  firstName: 'Michael',
  lastName: 'Scott',
  occupation: 'office manager',
  born: 1972
};

const { email, firstName, lastName, occupation } = user;
console.log(email); // mgs@aol.com

//? If we want to rename something to use later...
const { born: birthYear } = user;
console.log(birthYear);

/*
! Param Destructuring
*/

function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// OR

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const movies = [
  {
    title: "Dune 2",
    score: 98,
    year: 2024,
  },
  {
    title: "Poor Things",
    score: 92,
    year: 2023,
  },
  {
    title: "The Two Towers",
    score: 95,
    year: 2004,
  },
  {
    title: "Jingle All the Way",
    score: 71,
    year: 1996,
  },
];

const movieReview = movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}.`;
});

console.log(movieReview);