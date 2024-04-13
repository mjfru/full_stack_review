const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
  .then(() => {
    console.log('Mongo Connection Established')
  })
  .catch(err => {
    console.log('Mongo Connection Error')
    console.log(err);
  })

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { _id: false },
      street: String,
      city: String,
      state: String,
      country: {
        type: String,
        required: true
      }
    }
  ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Potter',
  })
  u.addresses.push({
    street: '123 Sesame Street',
    city: 'New York',
    state: 'NY',
    country: 'USA'
  })
  const res = await u.save();
  console.log(res)
}

makeUser();

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push(
    {
      street: '99 3rd St.',
      city: 'New York',
      state: 'NY',
      country: 'USA'
    }
  )
  const res = await user.save();
  console.log(res);
}

addAddress('6611e690d0dea007ea9b1039')