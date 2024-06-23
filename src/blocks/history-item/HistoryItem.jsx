import { TrendingUp } from "../../icons/TrendingUp";
import { TrendingDown } from "../../icons/TrendingDown";
import React from "react";
import PropTypes from "prop-types";
import "./HistoryItem.style.css";
import { formatCoin, formatCurrency } from "../../utils";

export const HistoryItem = ({ isUp, price, change, date, coinAmount }) => {
  return (
    <div className="history-item flex items-center gap-2">
      {isUp ? (
        <TrendingUp className="icon-instance-node-3" />
      ) : (
        <TrendingDown className="icon-instance-node-3" />
      )}
      <div className="body gap-1">
        <div className="frame-40 gap-1">
          <div className="text-wrapper-10">${formatCurrency(price)}</div>
          <div className={isUp ? "text-wrapper-11" : "text-wrapper-12"}>
            {isUp > 0 ? "+" : "-"}${formatCurrency(Math.abs(change))}
          </div>
        </div>
        <div className="subtitle">{date}</div>
      </div>
      {isUp ? (
        <div className="list-item-right">
          <div className="frame-41">
            <img className="image-2" alt="Image" src="/img/coin.png" />
            <div className="label">+{formatCoin(coinAmount)}</div>
          </div>
        </div>
      ) : null}
      <img
        className="arrow-right"
        alt="Arrow right"
        src="/img/arrow-right.png"
      />
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
