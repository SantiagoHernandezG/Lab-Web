var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rifa Yakult' }); 
  // Send as a view parameter the result of the spin
});

module.exports = router;
