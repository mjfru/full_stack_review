const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
  const { name = 'User' } = req.cookies;
  // console.log(req.cookies)
  res.send(`Hey there ${name}!`)
})

app.get('/setName', (req, res) => {
  res.cookie('name', 'Stewie');
  //? How can we access this name now? - in request.cookies! (after installing cookie-parser)
  res.send('Ok, sent a cookie!');
})

app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true })
  res.send('Ok, signed your cookie!')
})

app.get('/verifyfruit', (req, res) => {
  res.send(req.signedCookies);
})

app.listen(3000, () => {
  console.log('Listening on Port 3000...')
})