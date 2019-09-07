const express = require('express');
const router = express.Router(); //routing
const Ninja = require('../models/ninja');

//mounting the Router .........GET  a list of ninjas from databsae
router.get('/ninjas', function(req, res) {
  res.send({type:'GET'})
});


//ADD A NEW NINJA TO databsae
router.post('/ninjas', function(req, res) {
  // var ninja = new Ninja(req.body);
  // ninja.save();


  //create new instance of ninja object and save it to database
 Ninja.create(req.body).then(function(ninja) {

  res.send(ninja);

}); //create new instance of ninja object and save it to database

});


//UPDATE A NINJA IN THE DB
router.put('/ninjas/:id', function(req,res) {
  res.send({type:'PUT'})
});


//DELETE A NINJA FROM THE JOB
router.delete('/ninjas/:id', function(req,res) {
  res.send({type:'DELETE'})
});


module.exports = router;
