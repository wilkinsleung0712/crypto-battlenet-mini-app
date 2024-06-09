/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TrendingDown3 = ({
  color = "url(#paint0_linear_1_716)",
  stroke = "url(#paint1_linear_1_716)",
  className,
}) => {
  return (
    <svg
      className={`trending-down-3 ${className}`}
      fill="none"
      height="33"
      viewBox="0 0 32 33"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.3333 23.8332H27.3333V15.8333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        className="path"
        d="M4 9.16669L10.8923 17.5L17.4564 13.5L27.3333 23.8334"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_750"
          x1="23.3333"
          x2="23.3333"
          y1="15.8333"
          y2="23.8332"
        >
          <stop className="stop" stopColor="#FA8451" />
          <stop className="stop" offset="1" stopColor="#FF6D90" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_750"
          x1="15.6667"
          x2="15.6667"
          y1="9.16669"
          y2="23.8334"
        >
          <stop className="stop" stopColor="#FA8451" />
          <stop className="stop" offset="1" stopColor="#FF6D90" />
        </linearGradient>
      </defs>
    </svg>
  );
};

TrendingDown3.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
};
