/*
! Reduce
* Executes a reducer function on each element of the array, resulting in a - single value -.
? A reducer function takes two parameters, representing an accumulator (what we're reducing down to), and a currentValue.
*/

//? Example:

//* This will sum up all the values of the array.
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

//? One way to get the totaled prices...
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

let total = 0;
for (let price of prices) {
  total += price;
}
console.log(total);

//? Or we can use the reduce method:
const newTotal = prices.reduce((total, price) => {
  return total + price;
});
console.log(newTotal);

/*
 * However, we're not limited to using .reduce() with only mathematical operators.
 */
//? Let's find the smallest price in the above array:
const minPrice = prices.reduce((minValue, currentValue) => {
  if (currentValue < minValue) {
    return currentValue;
  }
  return minValue;
});
console.log(minPrice); // 1.5

//? Let's find the highest rated movie...
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

const highestRated = movies.reduce((best, currentMovie) => {
  if (currentMovie.score > best.score) {
    return currentMovie;
  }
  return best;
});

console.log(highestRated);

//? A second argument can be added to reduce, not a parameter to the reduce function, to set an initial function.
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100); // 120!

/*
! Arrow functions and the keyword 'this'
*/

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    // With a 'normal' function, no problem! This works.
    return `${this.firstName} ${this.lastName}`;
  },
};

// With person2, two methods are mixed-and-matched.
//? Typically, methods are best defined in the original function syntax.
const person2 = {
  firstName: "Sean",
  lastName: "Austin",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 3000);
  },
};

person2.shoutName();
