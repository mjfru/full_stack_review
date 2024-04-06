const express = require("express");
const app = express();
const path = require("path");
// To use Put/Patch/Delete:
const methodOverride = require("method-override");
// UUID is an npm package that assigns our data a randomly generated ID so we no longer have to hardcode it.
const { v4: uuid } = require("uuid");
// This parse the body for us! (See below)
app.use(express.urlencoded({ extended: true }));

// Just in case we end up accepting JSON...
app.use(express.json());

app.use(methodOverride("_method"));

// Implementing EJS:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Let's fake some comments here:
let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "Way too funny!",
  },
  {
    id: uuid(),
    username: "Kelsey",
    comment: "I am definitely being too weird.",
  },
  {
    id: uuid(),
    username: "Scott",
    comment: "Northern New York is totally part of New England.",
  },
  {
    id: uuid(),
    username: "Clarence",
    comment: "Bork?",
  },
];

// Full CRUD 'Comments' Example:
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/comments/:id", (req, res) => {
  // Finding the 'id' parameter:
  const { id } = req.params;
  // id will come back as a string, so we need to change it back to its original integer
  // const comment = comments.find((c) => c.id === parseInt(id));
  // However, uuid does not give us a string
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  // Express gives us a way to redirect users after submitting something
  res.redirect("/comments");
});

// Edit Form:
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

// Update / Edit:
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

// Delete:
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect("/comments");
});

// Tacos Example
app.get("/tacos", (req, res) => {
  res.send("GET /tacos Response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  // We need to tell Express how to parse the body before we can do anything with it.
  const { meat, qty } = req.body;
  res.send(`Ok! Here are your ${qty} ${meat} tacos.`);
});

app.listen(3000, () => {
  console.log("Listening on Port 3000...");
});
