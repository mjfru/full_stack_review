const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
})

app.use('/dogs', (req, res, next) => { 
  console.log("I love dogs!");
  next();
})

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  throw new AppError('Password required', 401);
}

app.get('/', (req, res) => {
  console.log(`Request Date: ${req.requestTime}`)
  res.send('Homepage!')
})

app.get('/dogs', (req, res) => {
  console.log(`Request Date: ${req.requestTime}`)
  res.send('Woooooof!')
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send("I often pretend I'm on the phone to avoid conversation.")
})

app.get('/admin', (req, res) => {
  throw new AppError('You are not an admin!', 403);
})

app.use((req, res) => {
  res.status(404).send('404 Not Found, Sorry!')
})

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  const { message = 'Something went wrong' } = err;
  res.status(status).send(message)
})

app.listen(3000, () => {
  console.log('App is up and running on Port 3000...')
})