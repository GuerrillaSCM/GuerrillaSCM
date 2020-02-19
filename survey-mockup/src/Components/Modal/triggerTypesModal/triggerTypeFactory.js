import React from 'react';
import TimerTrigger from './timerBasedTrigger'

export default function TriggerFactory(props) {

    const getType = (type) => {
        switch(type) {
            case "Timer":
                return <TimerTrigger/>;
            case "Scroll":
                return <div/>;
        }
    }

    return (<div>
        {getType(props.type)}
    </div>);
}