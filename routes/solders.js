var express = require('express');
var router = express.Router();
var Solders = require('./../models/Solders');
var cors = require('cors');


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
  console.log('req', JSON.stringify(req.body));
  //console.log('res', res);
  var solderData = new Solders(req.body);
  solderData.save().then(solder => {
    res.send('solder saved to database');
  }).catch(err => {
    res.status(400).send('unable to save to database');
  });
});

module.exports = router;
