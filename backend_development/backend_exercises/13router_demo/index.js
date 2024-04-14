const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');


//? Prefix all these routes with nothing:
app.use('/', shelterRoutes);

//? Need to start with /dogs
app.use('/dogs', dogRoutes);

app.use('/admin', adminRoutes);

app.listen(3000, () => {
  console.log('Listening on Port 3000...')
});