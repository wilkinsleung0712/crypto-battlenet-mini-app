/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TrendingUp6 = ({
  color = "url(#paint0_linear_1_770)",
  stroke = "url(#paint1_linear_1_770)",
  className,
}) => {
  return (
    <svg
      className={`trending-up-6 ${className}`}
      fill="none"
      height="33"
      viewBox="0 0 32 33"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M27.3332 18.5003V10.5003H19.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        className="path"
        d="M4 25.1667L10.8923 16.8333L17.4564 20.8333L27.3333 10.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_688"
          x1="23.3332"
          x2="23.3332"
          y1="10.5003"
          y2="18.5003"
        >
          <stop className="stop" stopColor="#1AAE70" />
          <stop className="stop" offset="1" stopColor="#A1FF57" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_688"
          x1="15.6667"
          x2="15.6667"
          y1="10.5"
          y2="25.1667"
        >
          <stop className="stop" stopColor="#1AAE70" />
          <stop className="stop" offset="1" stopColor="#A1FF57" />
        </linearGradient>
      </defs>
    </svg>
  );
};

TrendingUp6.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
};
