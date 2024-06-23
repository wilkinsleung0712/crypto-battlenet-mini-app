import React, { useEffect } from "react";
import "./style.css";
import { faker } from "@faker-js/faker";
import { HistoryItem } from "../../blocks/history-item";
import dayjs from "dayjs";
import { useSnapshot } from "valtio";
import { historyManager, setHistoryList } from "../../models/history";
import sample from 'lodash/sample';

export const HistoryList = () => {

  const { list } = useSnapshot(historyManager);

  const generateItem = () => {
    return {
      isUp: sample([true, false]),
        price: faker.number.int({ max: 1000 }),
        change: faker.number.float({ max: 10 }),
        date: dayjs(new Date(faker.date.past()).toUTCString()).format(
          "YYYY-MM-DD HH:mm:ss",
        ),
        coinAmount: faker.number.int({ min: 100, max: 10000 }),
    }
  }
  
  useEffect(() => {
    const items = Array.from({ length: 10 }).map(generateItem);
    console.log('items', items)
    setHistoryList(items);
  }, [])

  return (
    <div className="history-list">
      <div className="leaderboard-top">
        <div className="frame-38">
          {list.map((item, index) => (
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
      {/* <div className="tab-bar">
        <HomeIndicator className="home-indicator-instance" onOverlay />
      </div> */}
    </div>
  );
};
