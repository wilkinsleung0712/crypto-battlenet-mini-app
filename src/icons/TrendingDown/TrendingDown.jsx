/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TrendingDown = ({ className = "" }) => {
  return (
    <svg
      className={`trending-down ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M29 34.9999H41V23"
        stroke="url(#paint0_linear_1_1050)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <path
        className="path"
        d="M6 13L16.3385 25.5L26.1846 19.5L41 35"
        stroke="url(#paint1_linear_1_1050)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_1050"
          x1="35"
          x2="35"
          y1="23"
          y2="34.9999"
        >
          <stop className="stop" stopColor="#FA8451" />
          <stop className="stop" offset="1" stopColor="#FF6D90" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_1050"
          x1="23.5"
          x2="23.5"
          y1="13"
          y2="35"
        >
          <stop className="stop" stopColor="#FA8451" />
          <stop className="stop" offset="1" stopColor="#FF6D90" />
        </linearGradient>
      </defs>
    </svg>
  );
};
