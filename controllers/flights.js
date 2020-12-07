const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res) {
    res.render('flights/new', {title: "Add Flight", err: ""})
}


function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) {
            console.log(err)
            return res.render('flights/new', (err))
        }
        console.log(flight)
        res.redirect(`/flights/${flight._id}`)
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: "All Flights", flights})
    })
}

