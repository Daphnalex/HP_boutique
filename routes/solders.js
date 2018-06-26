var express = require('express');
var router = express.Router();
var Solders = require('./../models/Solders');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  Solders.find().then((solders,err) => {
    if (err){
      console.log("erreur", err);
      return next(err);
    }
    console.log("solders", solders);
    res.json(solders);
  })
});

router.post('/', (req,res) =>{//on peut passer un id si oui on edite si non on créait
  var solder = {
    name: req.body.name,
    description: req.body.description,
    adress: req.body.adress,
    picture: req.body.picture
  }
  return solder.save();
})

module.exports = router;
