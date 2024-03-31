const express = require("express");
const app = express();
const path = require('path') // <--- for setting different directories other than views

// Configuring the use of static content (CSS, etc.):
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/public')))
// Look inside the 'public' directory for your style guides

// Configuring express to accept EJS for our templates
// EJS assumes we're going to have a 'views' directory and our templates are going to be there.
app.set("view engine", "ejs");
//? If you want to run this code from other directories:
// app.set('views', path.join(__dirname, '/views'))
// Instead of being the current working directory, use the directory where index.js is.

// Instead of sending a simple string, we can send back a file using render.
app.get("/", (req, res) => {
  // res.send("Success!");
  // The name of our file in our views, .ejs is optional
  res.render("home");
});

app.get("/cats", (req, res) => {
  const cats = [
    "Blue", "Rocket", "Monty", "Steph", "Winston"
  ];
  res.render('cats', { cats });
})

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { random: num });
  // { This is what I'll call it in EJS : This is what it is here }
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
  // { shortcut if both will use the same name }
});

app.listen(3000, () => {
  console.log("Listening on Port 3000...");
});
