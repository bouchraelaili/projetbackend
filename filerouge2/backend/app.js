const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


const port = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())




mongoose.connect('mongodb://localhost:27017/Medical' , {
  useNewUrlParser: true
}).then(() => {
  logWinston.info("Successfully connected to the database");    
}).catch(err => {
  logWinston.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});




// import router 


const admin = require('./routes/admin');



app.use('/admin', admin);


































app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})