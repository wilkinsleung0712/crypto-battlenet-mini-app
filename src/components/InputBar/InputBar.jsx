import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

export const InputBar = ({ property1, className, amount, setAmount }) => {
  const handleMaxClick = () => {
    setAmount(1000000); // Replace with your MAX value
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSliderChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={`input-bar ${className}`}>
      <div className="frame-5">
        <div className="frame-6">
          <div className="text-wrapper-2">Enter an amount</div>
          <div className="frame-7">
            <div className="text-wrapper-3">My Prediction:</div>
            <div className="none">
              {property1 === "zero" && <>None</>}

              {["amount-0", "wrong"].includes(property1) && <>1000 UP</>}
            </div>
          </div>
        </div>
        <div className={`frame-wrapper ${property1}`}>
          <div className="frame-8">
            <input
              type="number"
              value={amount}
              onChange={handleInputChange}
              className="cursor"
            />
            <div className="text-wrapper-4" onClick={handleMaxClick}>MAX</div>
          </div>
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="div-2" />
          <div className="slider-wrapper">
            <input
              type="range"
              min="0"
              max="1000000"
              value={amount}
              onChange={handleSliderChange}
              className={`div-3 property-1-3-${property1}`}
            />
            <div
              className="slider-track"
              style={{ width: `${(amount / 1000000) * 100}%` }}
            />
          </div>
          <div className={`div-4 property-1-4-${property1}`} />
        </div>
      </div>
    </div>
  );
};

InputBar.propTypes = {
  property1: PropTypes.oneOf(["zero", "wrong", "amount-0"]),
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};
