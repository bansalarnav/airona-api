const router = require('express').Router();
const Airline = require('../models/airline');

router.get('/', (req, res) => {
    //return all documents in Airline collection
});

router.delete('/:airline/:index', (req, res) => {
    //delete the given flight for the given airline
});

router.post('/', (req, res) => {
    //make a new document for the airline
});

router.post('/:airline', (req, res) => {
    //push the given flight data to then end of the 
    // array in flights property of given airline
});

module.exports = router;