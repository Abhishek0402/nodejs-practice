const express = require('express');
const router = express.Router(); //routing

//mounting the Router .........GET  a list of ninjas from databsae
router.get('/ninjas', function(req,res) {
  res.send({type:'GET'})
});


//ADD A NEW NINJA TO databsae
router.post('/ninjas', function(req,res) {
  console.log(req.body);
  res.send({
    type:'POST',
    name: req.body.name,
    rank:req.body.rank
  });
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
