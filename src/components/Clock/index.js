import React, { Component } from 'react';
import img from '../../assets/img/tomato.png';
import './Clock.css';

class Clock extends Component {
    render() {
        const style = {
            height: "450px",
            width: "450px",
            marginTop: "10%"
        }

        const toggle = this.props.stop
        console.log(toggle)

        // if (toggle) {

        // }

        return (
            <div className="container" >
                <div>
                    <img src={img} alt="pomodoro" style={style} />
                    <div className="centered-text">{this.props.time}</div>
                </div>
                <button className="start" onClick={this.props.start}>Start</button>
                {/* <button className="start" onClick={props.stop}>Stop</button> */}
                <button className="reset" onClick={this.props.reset} > Reset</button>
            </div >
        )

    }

}

export default Clock;

