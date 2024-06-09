/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogoBar = ({ className, frame = "/img/frame-307265693.svg" }) => {
  return (
    <div className={`logo-bar ${className}`}>
      <img className="img" alt="Frame" src={frame} />
      <div className="leading-crypto-index">Leading Crypto Index &gt;</div>
    </div>
  );
};

LogoBar.propTypes = {
  frame: PropTypes.string,
};
