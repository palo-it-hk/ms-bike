const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.status(200)
  .send({ status: 'OK', version: '1.0' }));

module.exports = router;
