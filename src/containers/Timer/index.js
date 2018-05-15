import React, { Component } from 'react';
import Clock from '../../components/Clock';

class Timer extends Component {
    state = {
        defaultTime: `${25}:00`,
        time: `${25 * 60}`,
        interval: null,
        toggleButton: false
    }

    startTimer = () => {
        const duration = this.state.time;
        let timer = duration;
        let minutes;
        let seconds;

        const interval = setInterval(() => {
            console.log('timer ', timer);
            timer = timer - 1;
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            const time = `${minutes}:${seconds}`
            console.log('In setInterval', time);

            this.setState({ defaultTime: time });
        }, 1000);

        this.setState({ interval, toggleButton: true })
    }

    resetTimer = () => {
        clearInterval(this.state.interval);
        this.setState({ defaultTime: `${25}:00` })
    }

    render() {
        return (
            <Clock
                time={this.state.defaultTime}
                start={this.startTimer}
                stop={this.state.toggleButton}
                reset={this.resetTimer} />
        )
    }
}

export default Timer;