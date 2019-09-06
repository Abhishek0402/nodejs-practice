const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');



const routes = require('./routes/api')


//set up express app
const app = express();


//connect to mongodb

app.use(bodyParser.json()); //json object needed also to make the req object to be available with remaining module
//using the express app routes
app.use('/api',routes);


//listen for request

app.listen(process.env.port||4000,function(){
 console.log("now listening for request");
});
