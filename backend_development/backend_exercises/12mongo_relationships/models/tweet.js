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

const userSchema = new Schema({
  username: String,
  age: Number
})

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//   // const user = new User({ usernam: 'Chickenman99', age: 57 });
//   const user = await User.findOne({ username: 'Chickenman99' })
//   // const tweet1 = new Tweet({ text: 'omg I love my chickens', likes: 0 });
//   const tweet2 = new Tweet({ text: 'My chickens go brrrrrrrr', likes: 235 })
//   tweet2.user = user;
//   // user.save();
//   tweet2.save();
// }

// makeTweets();

const findTweet = async () => {
  const t = await Tweet.find({}).populate('user');
  console.log(t);
}

findTweet();