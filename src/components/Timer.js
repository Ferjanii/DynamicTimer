import React from 'react'
import './timer.css';

const timers=(number)=>{
    let hours=Math.trunc(number/3600);
    let minutes=Math.trunc((number%3600)/60);
    let seconds=number%60;
    return{
        hours,
        minutes,
        seconds
    }
}
const time = timers(87654);
const TimerTotal =()=>{
    return<div className="top-class"> 
            <h1 className="title">Timer</h1>
            <div className="boxe">
            <div className="time-app">
                <h1 className="items">{time.hours.toString().length<2 ? "0"+time.hours:time.hours}</h1>
                <h1 className="item">:</h1>
                <h1 className="items">{time.minutes.toString().length<2 ? "0"+time.minutes:time.minutes}</h1>
                <h1 className="item">:</h1>
                <h1 className="items">{time.seconds.toString().length<2 ? "0"+time.seconds:time.seconds}</h1>
            </div>
            </div>
            <div className="btn">
                <button className="buttons">Start</button>
                <button className="buttons">Reset</button>
            </div>
        </div>
}
const Timer = () => {
    return<div>
        <TimerTotal/>
    </div>
}
export default Timer;
