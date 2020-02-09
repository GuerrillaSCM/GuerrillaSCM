import React from 'react';
import MultipleChoiceType from './multipleChoiceType';
import StarRatingType from './starRatingType'

export default function QuestionFactory(props) {

    const returnType = (type) => {
        switch(type) {
            case "MultipleChoice":
                return <MultipleChoiceType/>;
            case "StarRating":
                return <StarRatingType/>;
            default: return <div/>
        }
    }

    return (<div>
        {returnType(props.type)}
    </div>);


}