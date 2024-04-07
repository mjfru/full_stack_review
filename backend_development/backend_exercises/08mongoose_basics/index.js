const mongoose = require("mongoose");
mongoose
  .connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection Established.");
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

// Arguments here are the name of the MODEL and then the schema you're using.
// Model names should be singular and capitalized.
const Movie = mongoose.model('Movie', movieSchema);

// We can now make new instances of a movie and save them to our DB.
// const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"})
// amadeus.save();

// Uncommon way to do things in the real world but let's populate our DB quickly:
Movie.insertMany([
  { title: "Poor Things", year: 2023, score: 9.5, rating: "R"},
  { title: "Gladiator", year: 2001, score: 8.9, rating: "R"},
  { title: "The Two Towers", year: 2002, score: 9.7, rating: "PG-13"},
  { title: "Elf", year: 2003, score: 8.0, rating: "PG"},
  { title: "Wall-E", year: 2008, score: 8.4, rating: "G"}
])
.then(data => {
  console.log("It worked!")
  console.log(data);
})