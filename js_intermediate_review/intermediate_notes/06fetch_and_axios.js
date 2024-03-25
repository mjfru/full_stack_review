/*
! Fetch & Axios
XHRs are annoying and there's no keyword for promises/async functions, it's callback hell!
* Fetch solves this for us and allows us to make requests via a function and supports promises!
*/

// Call the function, pass in a URL...already it's easier!
fetch("https://swapi.dev/api/people/1/") // Returns a promise!
  .then((response) => {
    // Usually written as (res)
    console.log("Resolved!", response); // If it's okay, it'll do this
    //? However, when we get our reponse, there's an extra step to actually access the data / content we want from our request:
    return response.json(); // This also returns a promise...!
  })
  .then((data) => {
    console.log(data);
    //? We could then start request other requests here instead of nesting
    return fetch("https://swapi.dev/api/people/2/");
  })
  .then((response) => {
    console.log("This is the second response!");
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error!", error); // If not, it'll do this instead
  });

//! All of this could be even easier with Async functions!
//? Since it's async though, remember we need to wrap it in a try / catch:
const loadStarWarsPeople = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/1/");
    const data = await response.json();
    console.log("Here's your DATA", data);
    const response2 = await fetch("https://swapi.dev/api/people/6/");
    const data2 = await response2.json();
    console.log("Here's your DATA", data2);
  } catch (error) {
    console.log("Error!", error);
  }
};

loadStarWarsPeople();

// Above could be refactored by requiring an ID as a parameter, allowing the user to choose a person.

/*
! Axios
* Better yet is a seperate library that is specifically made for HTTP requests and making them simple and easy (it does use fetch in the background).
*/

// This still returns a promise
axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log(res);
    // The data will already be parsed and ready to use!
  })
  .catch((e) => {
    console.log("Error!", e);
  });

//? As an async:
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};

getStarWarsPerson(4);

// To bypass installing it (for now), include this script:
//   <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>

/*
! Setting Headers with Axios
We're going to want to specify that we only want JSON when making our request.
*/

const getDadJoke = async () => {
  // To do this, we pass in a second argument with configuration information:
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https:/icanhazdadjoke.com/", config);
  console.log(res.data.joke);
};
