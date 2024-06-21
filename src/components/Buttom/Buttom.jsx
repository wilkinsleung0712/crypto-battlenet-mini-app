/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowRightUp1 } from "../../icons/ArrowRightUp1";
import "./style.css";

export const Buttom = ({
  property1,
  pressing,
  className,
  icon = <ArrowRightUp1 className="arrow-right-up" />,
  to,
}) => {
  return (
    <div className={`buttom ${className}`}>
      <div className={`frame-9 ${property1} pressing-${pressing}`}>
        {icon}
        <div className="UP-2">
          {["UP", "pressing"].includes(property1) && <>UP</>}
          {["DOWN", "variant-4"].includes(property1) && <>DOWN</>}
        </div>
      </div>
      <div className="element-payout font-bold underline">
        0.00X&nbsp;&nbsp;Payout
      </div>
    </div>
  );
};

Buttom.propTypes = {
  property1: PropTypes.oneOf(["pressing", "UP", "DOWN", "variant-4"]),
  pressing: PropTypes.bool,
  to: PropTypes.string,
};
