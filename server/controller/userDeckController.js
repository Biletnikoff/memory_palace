var Userdecks = require('Userdecks.js');

// Create our necessary controller methods to perform all needed CRUD actions

exports.createOne = function(req, res) {

  var newDeck = req.body;
  // creates a new character from the request.body
  Userdecks.create(newDeck, function(err, newDeck) {
    // error first callbacks
      if (err) {
        return res.json(err);
      }
      res.json(newDeck);
  });

  // if there is exxtra or bad data on that request, it will not be saved if you don't need it
};

exports.retrieve = function(req, res) {

  // param has any request with key names ':id'
  var query = {};
  Userdecks.find(query, function(err, matchingCharacter) {
    if (err) {
      return res.json(err);
    }
    res.json(matchingCharacter);
  }

};


exports.delete = function(req, res) {
  var query = req.params.deckname
Userdecks.remove(query, function(err, ))
}
