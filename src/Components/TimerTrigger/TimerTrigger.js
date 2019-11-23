const React = require('react')
const ms = require('pretty-ms')

class TimerTrigger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            start: Date.now()
        }
        this.startTimer();
    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    render() {
        return (
            <div>
                <h3>Time elapsed: {ms(this.state.time)}</h3>
            </div>
        );
    }
}

export default TimerTrigger;