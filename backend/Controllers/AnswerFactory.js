const StarAnswer = require('../models/StarAnswer'); //CHANGE THIS IN THE FUTURE. THIS IS NOT WHAT WE WANT, WANT IT TO BE ANSWER INSTEAD

class AnswerFactory {
    constructor(answerObject) {
        var answerType = answerObject.answerType;
        var factory = registeredAnswerFactories[answerObject.answerType];
        console.log(answerType);
        console.log(answerObject);
        console.log(factory);
        return factory(answerObject);
    }
};

// array of different constructors for the different answer types
let registeredAnswerFactories = {};
registeredAnswerFactories['StarRating'] = (answerObject) => {
    return new StarAnswer(answerObject)
};


// NOT YET IMPLEMENTED
// registeredAnswerFactories['CommentBox'] = (answerObject) => {
//     return new CommentAnswer(answerObject)
// };

// registeredAnswerFactories['MultipleChoice'] = (answerObject) => {
//     return new MultipleChoiceAnswer(answerObject)
// };

module.exports = AnswerFactory; //export the factory for use in other modules