var Userdecks = require('../models/Userdecks.js');

// Create our necessary controller methods to perform all needed CRUD actions

exports.createOne = function(req, res) {

  var newCharacter = req.body;
  // creates a new character from the request.body
  Userdecks.create(newCharacter, function(err, newCharacter) {
    // error first callbacks
      if (err) {
        return res.json(err);
      }
      res.json(newCharacter);
  });

  // if there is exxtra or bad data on that request, it will not be saved if you don't need it
};

exports.retrieve = function(req, res) {

  // param has any request with key names ':id'
  var query = { _id: req.params.id};
  Userdecks.findOne(query, function(err, matchingCharacter) {
    if (err) {
      return res.json(err);
    }
    res.json(matchingCharacter);
  }

};


exports.delete = function(req, res) {
  var query = req.params.id
Userdecks.remove(query, function(err, ))
}
