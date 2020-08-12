const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    iconUrl: {
        type: String, 
        required: true
    },

    flights: {
        type: [{
            from: String,
            to: String,
            date: String,
            duration: String,
            crewCode: String,
            code: String,
            index: Number
        }]
    }
});

const Airline = mongoose.model('Airline', airlineSchema);

module.exports = Airline;