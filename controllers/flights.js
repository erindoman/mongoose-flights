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
    res.render('flights/new', { title: "Add Flight", err: "" }) //titles for partials
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
    if (err){ 
        return res.redirect('/flights/new')
    } 
    res.redirect(`/flights/new/${flight._id}`)
  })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: "All Flights", flights })
    })
}

function show(req, res){
    Flight.findById(req.params.id)
    .populate('destination').exec(function(err, flight){
        Destination.find({_id: {$nin: flight.destination}},
            function(err, destinations){
                res.render('flights/show', { title: 'Flight Details', flight, destinations })
            })
    })
}

function deleteFlight(req, res) {
    Flight.findByIdAndDelete(req.params.id, function(err, flight) {
        res.redirect(`/flights`)
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