var express = require('express');
var router = express.Router();

router.get('/flights', function(req, res, next) {
  res.render('index', { title: 'All Flights' });
});

router.get('/', function(req, res, next) {
  res.redirect('/flights')
})

module.exports = router;
