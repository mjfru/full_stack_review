const express = require('express');
const router = express.Router();

router.get('/shelters', (req, res) => {
  res.send('All shelters')
});

router.get('/shelters/:id', (req, res) => {
  res.send('Viewing one shelter')
});

router.post('/shelters/:id', (req, res) => {
  res.send('Creating one shelter')
});

router.get('/shelters/:id/edit', (req, res) => {
  res.send('Editing one shelter')
})

module.exports = router;