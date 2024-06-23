/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TrendingUp = ({ className = "" }) => {
  return (
    <svg
      className={`trending-up ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M40.9999 27.0005V15.0005H29"
        stroke="url(#paint0_linear_1_1024)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <path
        className="path"
        d="M6 37L16.3385 24.5L26.1846 30.5L41 15"
        stroke="url(#paint1_linear_1_1024)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_1024"
          x1="35"
          x2="35"
          y1="15.0005"
          y2="27.0005"
        >
          <stop className="stop" stopColor="#1AAE70" />
          <stop className="stop" offset="1" stopColor="#A1FF57" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_1024"
          x1="23.5"
          x2="23.5"
          y1="15"
          y2="37"
        >
          <stop className="stop" stopColor="#1AAE70" />
          <stop className="stop" offset="1" stopColor="#A1FF57" />
        </linearGradient>
      </defs>
    </svg>
  );
};
