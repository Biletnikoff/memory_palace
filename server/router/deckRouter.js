var deckRouter = require('express').Router();
var userDeckController = require('../controllers/userDeckController.js');

// Declare routes for our resource endpoints and specify what controller method we're going to use for each


// get()
// delete()
deckRouter.route('/')
               .post(characterController.createDeck) // ======>characterRouter sends a post request to
//createOne method through characterController

deckRouter.route('/decks')
               .get(characterController.retrieve);


module.exports = deckRouter;
