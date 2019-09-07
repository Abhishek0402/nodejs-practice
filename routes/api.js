const express = require('express');
const router = express.Router(); //routing
const Ninja = require('../models/ninja');

//mounting the Router .........GET  a list of ninjas from databsae
router.get('/ninjas', function(req, res, next) {
/* Ninja.find({}).then(function(ninjas){
  res.send(ninjas);
}); */


});


//ADD A NEW NINJA TO databsae
router.post('/ninjas', function(req, res, next) {
  // var ninja = new Ninja(req.body);
  // ninja.save();

  //create new instance of ninja object and save it to database
 Ninja.create(req.body).then(function(ninja) {

  res.send(ninja);

}).catch(next); //create new instance of ninja object and save it to database

});


//UPDATE A NINJA IN THE DB
router.put('/ninjas/:id', function(req,res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
      Ninja.findOne({_id: req.params.id}).then(function(ninja){
          res.send(ninja);
      });

    });

});


//DELETE A NINJA FROM THE JOB
router.delete('/ninjas/:id', function(req,res, next) {
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){           //_id bcoz it is saved as it is in databsae
    res.send(ninja);
  });
});


module.exports = router;
