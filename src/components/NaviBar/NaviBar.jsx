/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Plus2 } from "../../icons/Plus2";
import "./style.css";

export const NaviBar = ({
  className,
  groupClassName,
  group = "/img/group-48095409.png",
  vector = "/img/vector-4.svg",
}) => {
  return (
    <div className={`navi-bar ${className}`}>
      <div className="frame">
        <div className="div" />
        <div className="frame-2">
          <img className="plus" alt="Image" src="/img/image-1850-1.png" />
          <div className="text-wrapper">0000000</div>
          <Plus2 className="plus" color="#1AAE70" />
        </div>
      </div>
      <div className="frame-3">
        <div className="frame-4">
          <div className="frame-4">
            <div className="ellipse" />
            <img className={`group ${groupClassName}`} alt="Group" src={group} />
          </div>
        </div>
        <div className="frame-4">
          <div className="ellipse" />
          <img className="vector" alt="Vector" src={vector} />
        </div>
      </div>
    </div>
  );
};

NaviBar.propTypes = {
  group: PropTypes.string,
  vector: PropTypes.string,
};
