import React, { Component } from 'react';
import Clock from '../../components/Clock';

class Timer extends Component {
    state = {
        defaultTime: `${25}:00`,
        time: 1500000
    }

    millisToMinutes = () => {
        const value = this.state.time;
        const seconds = value / 60;
        const minutes = seconds / 1000;
        console.log(minutes);

        this.setState({ defaultTime: `${minutes}:00` })
        this.startTimer();
    }

    startTimer() {
        //write a function of setTimeOut for 25 min 
        // print some msg after that

        // setTimeout(function, ms);

        const value = this.state.time;
        setTimeout(() => console.log("Time is up!"), value)
    }

    render() {
        return (
            <Clock
                time={this.state.defaultTime}
                clicked={this.millisToMinutes} />
        )
    }
}

export default Timer;