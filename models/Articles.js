var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  name: String,
  picture: String,
  description: String,
  price: String
});

// articleSchema.virtual('solders',{
//   ref: 'Solder',
//   localField: '_id',
//   foreignField: 'articles'
// });

var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
