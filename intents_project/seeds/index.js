const mongoose = require("mongoose");
const cities = require("./cities");
const Campground = require("../models/campgrounds");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://127.0.0.1:27017/intents", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB.");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      author: '66194a042459ced629eecfb5',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolorum repellendus architecto. Facere veritatis cumque at, in omnis autem magnam, nulla odit ea, sunt necessitatibus dolor eius fugiat et quos.",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ]
      },
      images: [
        {
          url: 'https://res.cloudinary.com/dggqzxl0l/image/upload/v1713275180/Intents/qm7ee3o72k36p7usawgv.jpg',
          filename: 'Intents/qm7ee3o72k36p7usawgv',
        },
        {
          url: 'https://res.cloudinary.com/dggqzxl0l/image/upload/v1713275182/Intents/vtzz83mm3grsrx9zeyad.jpg',
          filename: 'Intents/vtzz83mm3grsrx9zeyad',
        },
        {
          url: 'https://res.cloudinary.com/dggqzxl0l/image/upload/v1713275182/Intents/hgd16i0ss55hc3l4zc10.jpg',
          filename: 'Intents/hgd16i0ss55hc3l4zc10',
        },
        {
          url: 'https://res.cloudinary.com/dggqzxl0l/image/upload/v1713275184/Intents/tkwrtut7fdktoblc51ga.jpg',
          filename: 'Intents/tkwrtut7fdktoblc51ga',
        }
      ]
    })
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
