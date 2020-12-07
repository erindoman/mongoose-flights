const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create, 
    index
}

function newFlight(req, res) {
    res.render('flights/new', {title: "Add Flight", err: ""})
}


function create(req, res) {
    req.body.flights = req.body.flights.replace(/\s*,\s*/g, ',');
      if (req.body.flights) req.body.flights = req.body.flights.split(', ')
      Flight.create(req.body, function(err, flight) {
          console.log(flight)
          res.redirect('/flights')
      })
    }

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights})
    })
}

