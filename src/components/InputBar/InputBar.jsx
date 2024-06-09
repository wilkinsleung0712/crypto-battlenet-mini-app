/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const InputBar = ({ property1, className }) => {
  return (
    <div className={`input-bar ${className}`}>
      <div className="frame-5">
        <div className="frame-6">
          <div className="text-wrapper-2">Enter a amount</div>
          <div className="frame-7">
            <div className="text-wrapper-3">My Prediction:</div>
            <div className="none">
              {property1 === "zero" && <>None</>}

              {["amount-0", "wrong"].includes(property1) && <>1000 UP</>}
            </div>
          </div>
        </div>
        <div className={`frame-wrapper ${property1}`}>
          <div className="frame-8">
            <div className="cursor">
              {property1 === "amount-0" && <>100000</>}

              {property1 === "wrong" && <>9999999999999999</>}
            </div>
            <div className="element">{property1 === "zero" && <>0</>}</div>
            <div className="text-wrapper-4">MAX</div>
          </div>
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="div-2" />
          <div className={`div-3 property-1-3-${property1}`} />
          <div className={`div-4 property-1-4-${property1}`} />
        </div>
      </div>
    </div>
  );
};

InputBar.propTypes = {
  property1: PropTypes.oneOf(["zero", "wrong", "amount-0"]),
};
