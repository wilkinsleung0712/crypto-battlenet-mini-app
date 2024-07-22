import React, { useState, useEffect } from 'react';

export const CountdownTimer = ({ timeLeft }) => {
  const [time, setTime] = useState(0);
    const [minutes, setMinutes] = useState(Math.floor(timeLeft / 60));
    const [seconds, setSeconds] = useState(timeLeft % 60);
    console.log('timer left', timeLeft)
    
    useEffect(() => {
      if (timeLeft === time) return;
      setTime(timeLeft);
        let countdownInterval = setInterval(() => {
          console.log('timeLeft', minutes, seconds)
          if (seconds > 0) {
              setSeconds(seconds - 1);
          } else {
              if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
              } else {
                // clearInterval(countdownInterval);
              }
          }
        }, 1000);

    return () => clearInterval(countdownInterval);
    }, [time, timeLeft]);

    return (
        <div>
          { minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`}
        </div>
    );
};