var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('machine', { title: 'Conoce tu Boleto', code: '1234' }); 
  // Send as a view parameter the result of the spin
  // Send the code in the router manager, so the view already knows which code the machine will produce
});

module.exports = router;
