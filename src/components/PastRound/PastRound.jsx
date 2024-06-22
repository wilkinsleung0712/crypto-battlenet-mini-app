import React, { useEffect, useState, useRef } from "react";
import { TrendingUp } from "../../icons/TrendingUp";
import "./PastRound.style.css";
import { useSnapshot } from "valtio";
import { mainManager } from "../../models/main";
import Countdown from 'react-countdown';

export const PastRound = () => {
  const { pastRound } = useSnapshot(mainManager);

  const [contest, setContest] = useState({
    live: false,
    lastPrice: "N/A",
    priceChange: "N/A",
    lockedPrice: "N/A",
    prizePool: "N/A",
    roundId: "N/A",
    timeLeft: new Date(), // 初始化为当前时间
  });
  const intervalId = useRef(null);

  useEffect(() => {
    const fetchContestById = async () => {
      try {
        const response = await fetch(`/contests/${pastRound.roundId}`);
        const contentType = response.headers.get("content-type");

        // @ts-ignore
        if (!response.ok || !contentType.includes("application/json")) {
          // console.error("Failed to fetch or non-JSON response received");
          setDefaultContest();
          return;
        }

        const data = await response.json();
        const createdAt = new Date(data.createdAt || new Date());
        const deadline = new Date(createdAt.getTime() + 5 * 60000);
      } catch (error) {
        console.error("Error fetching contest:", error);
        setDefaultContest();
      }
    };

    fetchContestById();
  }, [pastRound.roundId]);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(intervalId.current);
  }, []);

  const updateTimer = () => {
    setContest((prevContest) => {
      const now = new Date();
      const timeDiff = prevContest.timeLeft - now;
      if (timeDiff <= 0) {
        clearInterval(intervalId.current);
        return { ...prevContest, live: false, timeLeft: new Date() }; // 如果时间结束，更新竞赛状态为非活跃
      }
      return {
        ...prevContest,
        timeLeft: new Date(prevContest.timeLeft.getTime() - 1000),
      }; // 每秒递减一秒
    });
  };

  const setDefaultContest = () => {
    const mockCreatedAt = new Date();
    const mockDeadline = new Date(mockCreatedAt.getTime() + 5 * 60000);
    setContest({
      live: true,
      lastPrice: "$100.00",
      priceChange: "1.00",
      lockedPrice: "99.00",
      prizePool: "1000",
      roundId: "15",
      timeLeft: mockDeadline,
      createdAt: mockCreatedAt,
    });
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return '0s';
    } else {
      // Render a countdown
      return <span>{minutes}m {seconds}s</span>;
    }
  };

  return (
    <div className="w-full px-2.5">
      <div className="past-round p-2.5">
        <div className="header">
          <div className="flex justify-between items-center rounded-[10px]">
            <span className="text-xs font-semibold font-regular text-grey px-2.5 py-1 bg-black/20 rounded-[15px] font-[inter]">
              {contest.live ? "Live" : "Not Live"} #{contest.roundId}
            </span>
            <span className="text-xs font-semibold font-regular text-grey px-2.5 py-1 bg-black/20 rounded-[15px] font-[inter]">
              <Countdown date={contest.timeLeft} renderer={renderer} />
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col last-price items-start gap-1">
                <span className="text-xs text-grey">H2O Last Price</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">{contest.lastPrice}</span>
                  <span className="change font-semibold">
                    {contest.priceChange}
                  </span>
                </div>
              </div>
              <TrendingUp />
            </div>

            <div className="flex flex-col gap-2">
              <div className="locked-price">
                <span className="text-xs text-grey">Locked Price</span>
                <span className="text-base font-semibold">
                  {contest.lockedPrice}
                </span>
              </div>
              <div className="prize-pool">
                <span className="text-xs text-grey">Prize Pool</span>
                <span className="text-base font-semibold">
                  {contest.prizePool}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
