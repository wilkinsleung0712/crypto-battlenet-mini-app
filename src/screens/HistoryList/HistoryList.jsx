import React from "react";
import { HomeIndicator } from "../../components/HomeIndicator";
import { HistoryItem } from "../../components/HistoryItem";
import "./style.css";

export const HistoryList = () => {
  const historyItems = [
    {
      isUp: true,
      price: "$104.2207",
      change: "+$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
    {
      isUp: true,
      price: "$104.2207",
      change: "+$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
    {
      isUp: false,
      price: "$104.2207",
      change: "−$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
    {
      isUp: false,
      price: "$104.2207",
      change: "−$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
    {
      isUp: true,
      price: "$104.2207",
      change: "+$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
    {
      isUp: false,
      price: "$104.2207",
      change: "−$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
    {
      isUp: true,
      price: "$104.2207",
      change: "+$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
    {
      isUp: true,
      price: "$104.2207",
      change: "+$0.0934",
      date: "2024.00.00 00:00:00",
      coinAmount: "+00000",
    },
  ];

  return (
    <div className="history-list">
      <div className="leaderboard-top">
        <div className="frame-38">
          {historyItems.map((item, index) => (
            <HistoryItem
              key={index}
              isUp={item.isUp}
              price={item.price}
              change={item.change}
              date={item.date}
              coinAmount={item.coinAmount}
            />
          ))}
        </div>
      </div>
      <div className="tab-bar">
        <HomeIndicator className="home-indicator-instance" onOverlay />
      </div>
    </div>
  );
};
