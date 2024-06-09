/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Sphere = ({ className }) => {
  return (
    <svg
      className={`sphere ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 16C17.5229 16 22 14.2092 22 12C22 9.79085 17.5229 8 12 8C6.47715 8 2 9.79085 2 12C2 14.2092 6.47715 16 12 16Z"
        stroke="#333333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M16 12C16 17.5229 14.2092 22 12 22C9.79085 22 8 17.5229 8 12C8 6.47715 9.79085 2 12 2C14.2092 2 16 6.47715 16 12Z"
        stroke="#333333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#333333"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
