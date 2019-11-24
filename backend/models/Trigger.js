const mongoose = require('mongoose');

class TriggerSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      triggerType: {
        type: String,
        default: 'N/A'
      }, // the type of trigger
    });
  }
}

// compile schema to model and export.
module.exports = mongoose.model('Trigger', new TriggerSchema(), 'Trigger');