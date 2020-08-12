const router = require("express").Router();
const Airline = require("../models/airline");

router.get("/", (req, res) => {
  Airline.find({}).then((airlines) => {
    res.send(airlines);
  });
  console.log("flights given");
});

router.post("/", (req, res) => {
  Airline.create(req.body)
    .then(function (airline) {
      res.send(airline);
    })
    .catch(console.error());
});

router.delete("/:airline/:index", (req, res) => {
  Airline.findByIdAndRemove({ index: req.params.index }).then((flight) => {
    res.send(flight);
  });
  console.log("flight deleted");
});

router.post("/:airline", (req, res) => {
  //push the given flight data to then end of the
  // array in flights property of given airline
});

module.exports = router;
