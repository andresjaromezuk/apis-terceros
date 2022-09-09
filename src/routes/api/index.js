const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Visitaste el index')
 
});

module.exports = router;
