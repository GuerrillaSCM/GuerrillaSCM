const mongoose = require('mongoose');

class TriggerSchema extends mongoose.Schema {
  constructor(obj, options) {
    super(obj, options);
    this.add({
      type: String, // the type of trigger
    });
  }
}

// compile schema to model and export.
module.exports = mongoose.model('Trigger', new TriggerSchema(), 'Trigger');