const mongoose = require('mongoose');
const { Schema }= mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
  .then(() => {
    console.log('Mongo Connection Established')
  })
  .catch(err => {
    console.log('Mongo Connection Error')
    console.log(err);
  })

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Autumn', 'Winter']
  }
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{
    // Usually this is pulled out into its own variable at the top
    // type: mongoose.Schema.Types.ObjectId
    type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//   { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//   { name: 'Sugar Baby Watermelon', price: 5.99, season: 'Summer' },
//   { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ])

const makeFarm = async () => {
  const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
  const melon = await Product.findOne({ name: 'Goddess Melon' });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
}

const addProduct = async () => {
  const farm = await Farm.findOne({ name: 'Full Belly Farms' });
  const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
  farm.products.push(watermelon);
  await farm.save();
  console.log(farm);
}

// addProduct();
// makeFarm();

Farm.findOne({ name: 'Full Belly Farms' })
.populate('products')
.then(farm => console.log(farm));
