const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Established.");
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
  console.log("About to save!");
});
personSchema.post("save", async function () {
  console.log("Just saved!");
});

const Person = mongoose.model("Person", personSchema);

const tammy = new Person({ first: "Tammy", last: "Cho" });
tammy.fullName;
tammy.save();
