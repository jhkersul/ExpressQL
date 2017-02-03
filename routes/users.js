// Requires
const express = require('express');

// Setting up environment
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({ user: 'usuario' });
});

module.exports = router;
