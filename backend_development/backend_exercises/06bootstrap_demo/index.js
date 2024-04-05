const express = require("express");
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.set("view engine", "ejs");
// app.set('views', path.join(__dirname, '/views'))

app.get("/", (req, res) => {
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
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

app.listen(3000, () => {
  console.log("Listening on Port 3000...");
});
