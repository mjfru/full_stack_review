const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp", {
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

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    min: [0, "Price must be positive."],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String], // An array consisting of strings (very Java!)
  quantity: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

const Product = mongoose.model("Product", productSchema);

// const bikeHelmet = new Product({name: "Bike Helmet", price: 29.99});
// bikeHelmet.save()
// .then(data => {
//   console.log('It worked!');
//   console.log(data);
// })
// .catch(err => {
//   console.log("Error!")
//   console.log(err);
// })

const cyclingShirt = new Product({
  name: "Cycling Jersey",
  price: 28.5,
  categories: ["Cycling"],
  size: "M",
});
cyclingShirt
  .save()
  .then((data) => {
    console.log("It worked!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });

//! Defining our own instance methods:
//? Use traditional functions here; not arrows!
productSchema.methods.greet = function () {
  console.log("Hiiiiiii");
  console.log(`-- from ${this.name}`); // refers to the individual instance
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory('Outdoors');
  console.log(foundProduct);
};

findProduct();

//! Adding Static Methods
productSchema.statics.fireSale = function() {
  return this.updateMany({}, {onSale: true, price: 0});
}

Product.fireSale().then(res => console.log(res));