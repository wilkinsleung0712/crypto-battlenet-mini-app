/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Plus2 = ({ color = "#1AAE70", className }) => {
  return (
    <svg
      className={`plus-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.02017 3.33331L8.00797 12.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.83333"
      />
      <path
        className="path"
        d="M3.33333 8H12.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.83333"
      />
    </svg>
  );
};

Plus2.propTypes = {
  color: PropTypes.string,
};
