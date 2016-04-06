var mongoose = require('mongoose');

// Flesh out our Character schema and register the model with Mongoose
// TODO: add decks into user schema
var deckSchema = new mongoose.Schema({
  deckname: String,
  deck:Array
})
// model is always single
var User = mongoose.model('user', deckSchema);

module.exports = User;
