import React from 'react';
import img from '../../assets/img/tomato.png';
import './Clock.css';

const Clock = (props) => {
    const style = {
        height: "450px",
        width: "450px",
        marginTop: "10%"
    }
    return (
        <div className="container">
            <div>
                <img src={img} alt="image" style={style} />
                <div class="centered-text">25:00</div>
            </div>
            <button className="start">Start</button>
            <button className="reset">Reset</button>
        </div>
    )
}

export default Clock;

