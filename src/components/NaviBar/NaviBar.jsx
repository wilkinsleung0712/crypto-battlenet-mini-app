import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Plus2 } from "../../icons/Plus2";
import { Link } from "react-router-dom";
import "./style.css";

export const NaviBar = ({
  className,
  groupClassName,
  group = "/img/group-48095409.png",
  vector = "/img/vector-4.svg",
}) => {
  const [coinCount, setCoinCount] = useState(0);

  useEffect(() => {
    // Fetch coin count from API
    const fetchCoinCount = async () => {
      try {
        const response = await fetch("/api/coin-count"); // Update with your API endpoint
        const data = await response.json();
        setCoinCount(data.count);
      } catch (error) {
        console.error("Error fetching coin count:", error);
      }
    };

    fetchCoinCount();
  }, []);

  return (
    <div className={`navi-bar ${className}`}>
      <div className="frame">
        <div className="div" />
        <div className="frame-2">
          <img className="plus" alt="Image" src="/img/image-1850-1.png" />
          <div className="text-wrapper">{coinCount}</div>
          <Link to="/add-coins">
            <Plus2 className="plus" color="#1AAE70" />
          </Link>
        </div>
      </div>
      <div className="frame-3">
        <Link to="/some-page" className="frame-4">
          <div className="ellipse" />
          <img className={`group ${groupClassName}`} alt="Group" src={group} />
        </Link>
        <Link to="/help" className="frame-4">
          <div className="ellipse" />
          <img className="vector" alt="Vector" src={vector} />
        </Link>
   
      </div>
    </div>
  );
};

NaviBar.propTypes = {
  group: PropTypes.string,
  vector: PropTypes.string,
};
