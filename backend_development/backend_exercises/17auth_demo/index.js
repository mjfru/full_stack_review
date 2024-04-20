const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
  .then(() => {
    console.log('Mongo Connection Established')
  })
  .catch(err => {
    console.log('Mongo Connection Error')
    console.log(err);
  })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({secret: 'notagoodsecret'}));

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect('/login')
  }
  next();
}

app.get('/', (req, res) => {
  res.send('This is the homepage!')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', async (req, res) => {
  const { password, username } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash
  })
  await user.save();
  req.session.user_id = user._id;
  res.redirect('/')
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findAndValidate(username, password)
  if (foundUser) {
    req.session.user_id = foundUser._id;
    res.redirect('/secret')
  } else {
    res.redirect('/login')
  }
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.post('/logout', (req, res) => {
  req.session.user_id = null;
  // OR: req.session.destroy();
  res.redirect('/login');
})

app.listen(3000, () => {
  console.log('Listening on Port 3000...')
})