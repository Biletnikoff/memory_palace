var mongoose = require('mongoose');

// Flesh out our Character schema and register the model with Mongoose

var user = new mongoose.Schema({
  username:{
  type:  String,
  unique: true
},
  nickname: String,
  house: String,
  imageUrl: String
})
// model is always single
var User = mongoose.model('user', characterSchema);

module.exports = UserDecks;


UserDecks = {
  id: String,
  deckname: 'test',
  cards:  [
     {front: String, back: String},
   ];
})
