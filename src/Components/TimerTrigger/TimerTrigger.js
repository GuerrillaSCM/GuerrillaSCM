const React = require('react')
const ms = require('pretty-ms')

class TimerTrigger extends React.Component {
    constructor(props) {
        console.log("Constructing component");
        super(props);
        this.state = {
            time: 0,
            start: Date.now(),
            isOn: false, 
            isDone: false
        }
        // this.popSurvey.bind(this.popSurvey);
        // this.startTimer.bind(this.stopTimer);

        this.startTimer();
    }

    startTimer() {
        this.setState({isOn: true})
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
        // const range = Math.abs(this.time - this.props.timerLength);
        // if (range <= 1) {
        //     this.stopTimer();
        //     this.popSurvey();
        // }
    }

    stopTimer() {
        this.setState({isOn: false, isDone: true})
        clearInterval(this.timer)
    }

    popSurvey() {
        return (
            <div>
                <p>Survey pop!</p>
            </div>
        );
    }

    render() {

        let pop = (this.time > 5) ? <h4>Survey was triggered</h4> : null
 
        return (
            <div>
                <h3>Time elapsed: {ms(this.state.time)}</h3>
                <h4>TriggerTime: {this.props.timerLength}</h4>
                {pop}
            </div>
        );
    }
}

export default TimerTrigger;