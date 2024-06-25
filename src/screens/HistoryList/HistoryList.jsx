import React, { useEffect } from "react";
import "./style.css";
import { faker } from "@faker-js/faker";
import { HistoryItem } from "../../blocks/history-item";
import dayjs from "dayjs";
import { useSnapshot } from "valtio";
import { historyManager, setHistoryList } from "../../models/history";
import sample from "lodash/sample";
import InfiniteScroll from "react-infinite-scroll-component";
import { getHistoryList } from "../../api/api";

export const HistoryList = () => {
  const { list, offset, limit } = useSnapshot(historyManager);

  const generateItem = () => {
    return {
      isUp: sample([true, false]),
      price: faker.number.int({ max: 1000 }),
      change: faker.number.float({ max: 10 }),
      date: dayjs(new Date(faker.date.past()).toUTCString()).format(
        "YYYY-MM-DD HH:mm:ss",
      ),
      coinAmount: faker.number.int({ min: 100, max: 10000 }),
    };
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      const items = Array.from({ length: Math.random() * 10 }).map(
        generateItem,
      );
      setHistoryList(items);
    }, 500);
  };

  useEffect(() => {
    const items = Array.from({ length: 10 }).map(generateItem);
    console.log("items", items);
    setHistoryList(items);
    getHistoryList(offset, limit).then(res => {
      console.log('get list', res.data)
      // setHistoryList(items);
    }).catch((error) => console.error("Failed to get history information", error));
  }, []);

  return (
    <div className="history-list w-full">
      <div className="w-full ">
      <InfiniteScroll
        next={fetchMoreData}
        dataLength={list.length}
        hasMore={list.length < 100}
        loader={
          <div className="text-center text-grey text-lg pb-6">Loading...</div>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="w-full frame-38">
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
      </InfiniteScroll>
    </div>
    </div>
  );
};
