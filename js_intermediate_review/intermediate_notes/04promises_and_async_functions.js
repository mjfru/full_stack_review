/*
! More on Promises

*/
// Expects a function with two parameters, typically called resolve / reject
// new Promise((resolve, reject) => {
//   resolve();
// });

const fakeRequest = (url) => {
  new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random());
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      }
      reject("Request error!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then(() => {
    console.log("Done with request");
    console.log("Data is:", data);
  })
  .catch((err) => {
    console.log("Oh no!", err);
  });

/*
! Async Functions
* A newer and cleaner syntax for working with async code; syntax 'makeup' for promises.
We're making promises 'prettier' with a slightly different syntax.

! The 'Async' (Asynchronous) Keyword
  - Async functions ALWAYS returns a promise--automatically!
  ! If the function returns a value, the promise will be resolved with that value.
  - If the functions throws an exception, the promise will be rejected.
*/

// OG Functions
async function hello() {
  // automatically gives us a promise, even with nothing declared!
}

// Arrow Functions
const sing = async () => {
  return "La la la"; // The promise will be resolved with this value
};

// sing()
//   .then((data) => {
//     console.log("Promise resolved with", data); // Promise resolved with La la la
//   })
//   .catch((err) => {
//     console.log("Oh no, promise rejected!")
//     console.log(err);
//   });

const login = async (username, password) => {
  // Not an instant process, need to check credentials, hook into a DB, etc., so logging a user in is a good use-case for an async function.
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgisarecute") return "Welcome!";
  throw "Invalid Password";
};

login("dofksofk", "corgisarecute")
  .then((msg) => {
    console.log("Logged in!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });

/*
! The 'Await' Keyword
* We can ONLY use the await keyword inside of functions declared with async; it needs to be paired together.
* Await will pause the execution of the function, -waiting- for a promise to be resolved.
*/

async function rainbow() {
  await delayedColorChange('red', 1000); // This will wait for a promise to be resolved, both return promises so it will wait for a second to pass before resolving the next one in the sequence.
  delayedColorChange('orange', 1000);
  return "All done!" 
}

/*
! Handling Errors in Async Functions
* If a promise is rejected, the code below will not run...so what can we do?
* We can use good old try and catch!
*/

async function makeTwoRequests() {
  try{
    let data1 = await fakeRequest('/page1'); // If this failed, we'd never see the console.log
    let data2 = await fakeRequest('page/2');
  } catch (err) {
    console.log('Caught an error!', err); // Whatever the promise is rejected with, we can access it with whatever parameter is in our catch
  }
}

// try {
//   nonsense.log('skmfkwedmf');
// } catch (err) {
//   console.log("It's all good, we caught that!", err)
// }