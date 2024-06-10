import React from "react";
import "./style.css";

export const PastRound = () => {
  return (
    
    <div className="past-round">
      <div className="header">
        <span className="live-label">Live #000234</span>
        <span className="time-remaining">4m30s</span>
      </div>
      <div className="price-info">
        <div className="price-detail">
          <div className="price-label">H2O Last Price</div>
          <div className="price-value">
            $104.2207 <span className="price-change">+$0.0934</span>
          </div>
        </div>
        <div className="price-detail">
          <div className="price-label">Locked Price</div>
          <div className="price-value">$104.2207</div>
        </div>
        <div className="price-detail">
          <div className="price-label">Prize Pool</div>
          <div className="prize-pool">
            <img src="/img/coin-icon.svg" alt="coin" className="coin-icon" />
            <span>0,000,000,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
