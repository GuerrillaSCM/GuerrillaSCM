const mongoose = require('mongoose');
const Trigger = require('./Trigger.js').schema; //get the schema of the trigger

class TimerTriggerSchema extends Trigger {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      timer: {
        type: Number,
        default: 10000
      } //integer > 0 for timer in ms
    });
  }
}

// compile schema to model and export.
module.exports = mongoose.model('TimerTrigger', new TimerTriggerSchema(), 'Trigger');