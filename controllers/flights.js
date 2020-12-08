const Flight = require('../models/flight')
const Destination = require('../models/destination')

module.exports = {
    new: newFlight,
    create, 
    index,
    show, 
    delete: deleteFlight,
    addToDestinations
}

function newFlight(req, res) {
    res.render('flights/new', {title: "New Flight", err: ""}) //titles for partials
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
    if (err){ return res.redirect('/flights/new')} 
    res.redirect(`/flights/${flight._id}`)
    console.log(flight)
  })
}


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: "All Flights", flights})
    })
}

function show(req, res){
    Flight.findById(req.params.id)
    .populate('destination').exec(function(err, flight){
        Destination.find({_id: {$nin: flight.destination}},
            function(err, destinations){
                res.render('flights/show', {title: 'Flight Details', flight, destinations})
            })
    })
}

function deleteFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destination.push(req.body.destination)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function addToDestinations(req, res){
    Flight.findById(req.params.id, function(err, flight) {
        flight.destination.push(req.body.destination);
        flight.save(function(err) {
          res.redirect(`/flights/${flight._id}`);
        });
      });
}