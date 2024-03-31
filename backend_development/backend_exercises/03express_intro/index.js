const express = require("express");
// Execute express (it's a function) and save it in a variable:
const app = express();

// The goal here is to get a server up and running

// This is making it so that anytime there's a request, anywhere, will post a console.log().
// In order to respond with actual, meaningful content, we need to take advantage of two parameters in the .use function that are automatically passed in.
// Typically named req and res.
// app.use((req, res) => {
//   console.log("We got a new request!");
//   res.send("Hello, we got your request and this is our automated response.");
// });

// Let's get started with routing since the above works for an example but is not very practical otherwise!
// app.get() expects two things: the path we are matching and a callback function.
//! Remember: Request(req) is an object created by Express based upon the incoming HTTP request. Response(res) is an object made by Express containing the response we want to send back.
app.get("/", (req, res) => {
  res.send("This is the homepage!!");
});

app.get("/cats", (req, res) => {
  console.log("Cat request!");
  res.send("Meow!");
});

app.get("/dogs", (req, res) => {
  console.log("Dog request!");
  res.send("Woof!");
});

app.post("/cats", (req, res) => {
  res.send("Post request to /cats! This is totally different.");
});

// So far, we've seen very strict rules for paths but that's not how a lot of pages work.
// Think about reddit with the thousands of subreddits, they aren't hard-coded like this!
//? Instead, path variables are used as follows:
//! The variable will be marked with a colon :
app.get("/r/:subreddit", (req, res) => {
  // The request object has a property called 'params'
  console.log(req.params); // { subreddit: 'whatever you type in here' }
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit.<h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  console.log(req.params);
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing post #${postId} on the ${subreddit} subreddit.<h1>`);
});

// The request object also has a particular property called 'query'
// Within it, we'll find key-value pairs based on the query string.
app.get("/search", (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  if(!q) {
    res.send('Nothing found if nothing searched...')
  } else {
    res.send(`<h1>Search results for: ${q}.</h1>`);
  }
});

//! This is a catch-all if any different get route is entered; important to put at the end of the list.
app.get("*", (req, res) => {
  res.send("I don't know that get request!");
});
// There is a particular method that comes with 'app' from Express called app.listen
// .listen needs a port number and a callback function
app.listen(3000, () => {
  console.log("Listening on Port 3000...");
});
