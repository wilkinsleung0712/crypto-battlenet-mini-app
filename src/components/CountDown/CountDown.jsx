import React, { useState, useEffect, useRef } from 'react';

export const CountdownTimer = ({ timeLeft }) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const timer = useRef();


    useEffect(() => {
      if (timeLeft) {
        setMinutes(Math.floor(timeLeft / 60));
        setSeconds(timeLeft % 60);
      }
    }, [timeLeft]);
    
    useEffect(() => {
        timer.current = setInterval(() => {
          console.log('timeLeft111', minutes, seconds)
          if (seconds > 0) {
              setSeconds(seconds - 1);
          } else {
              if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
              }
          }
        }, 1000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    }
    }, [minutes, seconds]);

    return (
        <div>
          { minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`}
        </div>
    );
};