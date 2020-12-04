const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema ({
    airline: {type: String, enum: ['American', 'Southwest', 'United']}, 
    airport: {string: String, enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'], default: 'DEN'},
    flightNo: {type: Number, require: true, min: 10, max: 9999},
    departs: {type: Date}
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)
