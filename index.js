const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB.......'))
  .catch(() => console.log(new Error('Could Not Connect to MongoDB-')));

app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.send('Welcome');
});


const port = process.env.PORT || 3000;
app.listen(port, ( )=> console.log('Listening for requests on port ' + port));