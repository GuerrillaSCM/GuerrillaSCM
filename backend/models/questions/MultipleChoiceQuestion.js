const Schema = require('mongoose').Schema;

module.exports = new Schema({ //
  Choices: [{
    type: String,
    default: []
  }]
});