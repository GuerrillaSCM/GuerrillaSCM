const Schema = require('mongoose').Schema;

module.exports = Schema({ // compile schema to model and export.
  timer: {
    type: Number,
    default: 10000
  } //integer > 0 for timer in ms
});