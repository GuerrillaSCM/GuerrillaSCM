const mongoose = require('mongoose'),
  extend = require('mongoose-schema-extend');
const Trigger = require('./Trigger.js').schema; //get the schema of the trigger

var TimerTriggerSchema = Trigger.extends({
  timer: {
    type: Number,
    default: 10000
  } //integer > 0 for timer in ms
});


// compile schema to model and export.
module.exports = mongoose.model('TimerTrigger', TimerTriggerSchema, 'Trigger');