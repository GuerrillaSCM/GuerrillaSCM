const Schema = require('mongoose').Schema;

module.exports = StarQuestion = new Schema({ //
  CharacterLimit: { // Integer number that can be defined for how long the comment box will allow the user to type into.
    type: Number,
    default: null
  }
});