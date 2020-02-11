/* TriggerFactory
this file acts like a factory for creating question types for the database.
When new question types are added, they will need to have their schemas compiled to a model here for the app to understand how to create that new instance
*/
const mongoose = require('mongoose');
const TriggerSchema = require('./triggers/Trigger');
const TimerTriggerSchema = require('./triggers/TimerTrigger');

var Trigger = mongoose.model('Trigger', TriggerSchema, 'Trigger');
var TimerTrigger = Trigger.discriminator('TimerTrigger', TimerTriggerSchema);

module.exports = Trigger; //export the root model, this can be used to save all Answers, as well as identify them