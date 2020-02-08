const mongoose = require('mongoose');

var TriggerSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  triggerType: {
    type: String,
    default: 'N/A'
  }, // the type of trigger
  timer: {
    type: Number,
    default: 10000
  } //integer > 0 for timer in ms
}, {
  collection: 'Question',
  discriminatorKey: '_type'
});

// compile schema to model and export.
module.exports = mongoose.model('Trigger', TriggerSchema, 'Trigger');