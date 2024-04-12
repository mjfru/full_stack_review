const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny');

//? Utilizing Morgan
// app.use(morgan('tiny'));

//? Making a possibly useful Middleware:
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
})

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  res.send("Password is needed to access this page.")
}

//? Only runs on paths of /dogs
app.use('/dogs', (req, res, next) => { 
  console.log("I love dogs!");
  next();
})

//? Runs on every request; next() allows it to continue to further matching requests.
// app.use((req, res, next) => {
//   console.log("Creating Middleware, yaaaay");
//   next();
// })
// app.use((req, res, next) => {
//   console.log("Part 2!");
//   return next();  // Return will ensure that this is the last step.
// })


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

app.use((req, res) => {
  res.status(404).send('404 Not Found, Sorry!')
  // Could send back a polished template for a professional use-case.
})

//! Custom Error Handler:
app.use((err, req, res, next) => {
  console.log("****************************")
  console.log("**********ERROR*************")
  console.log("****************************")
  console.log(err);
  next(err);
})

app.listen(3000, () => {
  console.log('App is up and running on Port 3000...')
})