const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const routes = require('./routes/api')


//set up express app
const app = express();


//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;



app.use(bodyParser.json()); //1.json object needed also to make the req object to be available with remaining module

//2.using the express app routes
app.use('/api',routes);

//3.error handling middle ware
app.use(function(err, req, res, next) {
res.status(422).send({error: err.message});
});



//listen for request
app.listen(process.env.port||4000,function(){
 console.log("now listening for request");
});
