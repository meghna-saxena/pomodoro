import React, { Component } from 'react';
import Clock from '../../components/Clock';

class Timer extends Component {
    state = {
        defaultTime: "Press Start",
        time: 1500000
    }

    millisToMinutes = () => {
        const value = this.state.time
        console.log(value);
        const seconds = value / 60
        const minutes = seconds / 1000
        console.log(minutes);

        this.setState({ time: value })
    }

    startTimer = () => {
        const value = this.state.time
        const seconds = value / 60
        const minutes = seconds / 1000
        console.log(minutes);

        this.setState({ defaultTime: `${minutes}:00` })
    }

    render() {
        return (
            <Clock 
            time={this.state.defaultTime}
            clicked={this.startTimer} />
        )
    }
}

export default Timer;