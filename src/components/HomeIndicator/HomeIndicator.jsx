/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HomeIndicator = ({ onOverlay, className }) => {
  return (
    <div className={`home-indicator ${className}`}>
      <div className={`div-5 on-overlay-${onOverlay}`} />
    </div>
  );
};

HomeIndicator.propTypes = {
  onOverlay: PropTypes.bool,
};
