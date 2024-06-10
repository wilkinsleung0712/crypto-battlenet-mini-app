/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CountDown = ({
  property1,
  className,
  frameClassName,
  union = "https://cdn.animaapp.com/projects/66641dbc59e6661189d283f3/releases/66641de4dc5f7759f1404660/img/union.svg",
}) => {
  return (
    <div className={`count-down ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <img className="union" alt="Union" src={union} />
      </div>
      <div className={`element ${property1}`}>
        {property1 === "default" && <>4m30s</>}

        {property1 === "sixty-s" && <>59s</>}
      </div>
    </div>
  );
};

CountDown.propTypes = {
  property1: PropTypes.oneOf(["sixty-s", "default"]),
  union: PropTypes.string,
};
