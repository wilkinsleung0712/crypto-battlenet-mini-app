import React, { useState, useEffect } from 'react';

export const Countdown = ({ initialMinutes = 0, initialSeconds = 60 }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    let countdownInterval = null;

    console.log('countdown timer', initialMinutes, initialSeconds)

    useEffect(() => {
        countdownInterval = window.setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    window.clearInterval(countdownInterval);
                    // 倒计时结束时触发的事件
                    alert("倒计时结束！");
                }
            }
        }, 1000);

        return () => window.clearInterval(countdownInterval);
    }, [minutes, seconds]);

    return (
        <div>
            <h1>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
        </div>
    );
};

export default CountdownTimer;