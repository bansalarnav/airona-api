const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flights = require("./routes/flights");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB......."))
  .catch(() => console.log(new Error("Could Not Connect to MongoDB-")));

app.use(bodyParser.json());
app.use("/flights", flights);
app.use(function (err, req, res, next) {
  res.send({ error: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening for requests on port " + port));
