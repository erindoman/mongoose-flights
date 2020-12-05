var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

router.get('/flights', flightCtrl.new)

module.exports = router;
