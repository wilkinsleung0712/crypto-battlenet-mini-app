/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Status = ({ property1, className, text = "Live #000234" }) => {
  return (
    <div className={`status ${property1} ${className}`}>
      <div className="live-2">
        {property1 === "live" && <>{text}</>}

        {property1 === "next" && <>Next #000235</>}
      </div>
    </div>
  );
};

Status.propTypes = {
  property1: PropTypes.oneOf(["live", "next"]),
  text: PropTypes.string,
};
