import React from "react";
import "./PastRound.style.css";
export const PastRound = ({ live, lastPrice, priceChange, lockedPrice, prizePool, roundId, timeLeft }) => {
  return (
    <div className="past-round">
      <div className="header">
        <div className="status">
          <span className="live-status">Live #{roundId}</span>
          <span className="time-left">{timeLeft}</span>
        </div>
        <div className="price-info">
          <div className="last-price">
            <span>H2O Last Price</span>
            <span className="price">{lastPrice}</span>
            <span className="change">{priceChange}</span>
          </div>
          <div className="locked-price">
            <span>Locked Price</span>
            <span className="price">{lockedPrice}</span>
          </div>
          <div className="prize-pool">
            <span>Prize Pool</span>
            <span className="prize">{prizePool}</span>
          </div>
        </div>
      </div>
    </div>
  );
};