var mongoose = require('mongoose');

var solderSchema = new mongoose.Schema({
  name: String,
  //articles: [{
  //  type: mongoose.Schema.Types.ObjectId,
  //  ref: 'Article'
  //}],
  picture: String,
  adress: String,
  description: String
});

var Solder = mongoose.model('Solder', solderSchema);
module.exports = Solder;
