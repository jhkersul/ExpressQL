// Requires
const express = require('express');

// Setting up environment
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ExpressQL' });
});

module.exports = router;
