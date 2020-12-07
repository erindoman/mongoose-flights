const { models } = require('mongoose')
const Destination = require('../models/destination')
const Flight = require('../models/flight')

module.exports = {
    new: newDestination,
    create,
    show, 
    deleteDestination
}

function newDestination(req, res) {
    Destination.find({}, function(err, destinations) {
        res.render('destinations/new', { title: 'Add Destination', destinations})
    })
}

function create(req, res) {
    Destination.create(req.body, function(err, destinations) {
        res.redirect('/destinations/new')
    })
}

function show(req, res) {
    Destination.findById(req.params.id, function(err, destination){
        res.render('destinations/show', {title: 'Destination Detail', destination})
    })
}

function deleteDestination(req, res) {
    Destination.findByIdAndDelete(req.params.id, function(err, destination){
        res.redirect('/destinations/new')
    })
}