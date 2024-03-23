/*
! Async JavaScript

! The Call Stack
* The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
In other words, this is how JS 'knows' what function is currently being run and what functions are called from within that function, etc.

? A stack is a data structure in computer science; a 'last-in, first-out...lifo' structure (think of a stack of papers, pancakes, etc. - you remove the most recent item first).

* How it works:
  - When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
  - Any functions that are called by that function are added to the call stack further up and run where their calls are reached.
  - When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

? Consider below:
*/

const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};
isRightTriangle(3, 4, 5);

/*
isRightTriangle() is called, but needs to wait on the results of the square() function...which needs the results of the multiply() function (3 times for our 3 arguments).

When multiply is called, it's removed from the call stack, the square, then we get our result from isRightTriangle() (after all arguments are accounted for, this will happen 3 times.)

! Web APIs & Singled Threaded
'JS is singled threaded'
* What does this mean? - At any given point in time, that single JS thread is running at MOST one line of JS code.
Given, this it might seem like this would be problematic for requests, large transfers, etc.
? So what happens when something takes a long time??
* We have a workaround
*/
console.log("Sending request to server...");
setTimeout(() => {
  // Handed off to the browser to keep track of...
  console.log("Here's your requested data"); // This will be last!
}, 3000);
console.log("End of file.");

/*
? Shoudn't that setTimeout just put everything into a grinding halt until it's finished? -- No!
* The browser does the work for us, JS hands off tasks to the browsers that have web APIs that can do things in the background.
* Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

! Callback ~H~E~L~L~
* When code gets too nested, too deep, to account for delays and JS being single-threaded.
? To make this a little easier, we have promises and async functions to lighten the load.

! Promises
* A promise is -an object(!)- representing the -eventual- completion or failure of an asynchronous operation.
* More specifically, it's a returned object to which you attach callbacks...instead of passing callbacks into a function!
*/

const request = fakeRequestPromise("yelp.com/api/coffee");
request
  .then(() => {
    console.log("Promise Resolved!");
    fakeRequestPromise("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("Promise Resolved! (Pt. 2)");
      })
      .catch(() => {
        console.log("Promise Rejected (Pt.2)");
      });
  })
  .catch(() => {
    console.log("Promise Rejected!");
  });

/*
? The above is still ugly but it's good practice to see how it is structured and to simplify it moving forward.

! The *M*a*g*i*c* of Promises
* The above can be simplified further and truly showcase the convenience of promises.
! The trick to all of this is that we return a promise from within our .then callback, allowing us to chain things on.
* Promises are resolved and rejected with values, the data.
*/

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("It worked!");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then(() => {
    console.log("It worked...again!");
    console.log(data);
    //
  })
  //? Now, one .catch is sufficient for ALL
  .catch(() => {
    console.log("Sadness...an error!");
    console.log(err);
  });