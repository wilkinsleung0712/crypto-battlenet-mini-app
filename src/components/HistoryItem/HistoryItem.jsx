import { TrendingUp6 } from "../../icons/TrendingUp6";
import { TrendingDown3 } from "../../icons/TrendingDown3";
import React from "react";
import PropTypes from "prop-types";
import "./HistoryItem.style.css";

export const HistoryItem = ({ isUp, price, change, date, coinAmount }) => {
  return (
    <div className="history-item">
      {isUp ? (
        <TrendingUp6 className="icon-instance-node-3" />
      ) : (
        <TrendingDown3 className="icon-instance-node-3" />
      )}
      <div className="body">
        <div className="frame-40">
          <div className="text-wrapper-10">{price}</div>
          <div className={isUp ? "text-wrapper-11" : "text-wrapper-12"}>{change}</div>
        </div>
        <div className="subtitle">{date}</div>
      </div>
      <div className="list-item-right">
        <div className="frame-41">
          <img className="image-2" alt="Image" src="/img/image-1850-1.png" />
          <div className="label">{coinAmount}</div>
        </div>
      </div>
      <img className="arrow-right" alt="Arrow right" src="/img/arrow-right.png" />
    </div>
  );
};

HistoryItem.propTypes = {
  isUp: PropTypes.bool,
  price: PropTypes.string,
  change: PropTypes.string,
  date: PropTypes.string,
  coinAmount: PropTypes.string,
};
