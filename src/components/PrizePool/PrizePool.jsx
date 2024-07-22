import React, { useEffect, useMemo, useState } from "react";
import { InputBar } from "../InputBar";
import { useSnapshot } from "valtio";
import { mainManager } from "../../models/main";
import Countdown from "react-countdown";
import PoolImg from "../../../static/img/pool.png";
import { formatCoin } from "../../utils";
import dayjs from "dayjs";
// import { CountdownTimer } from "../countdown";

export const PrizePool = () => {
  const { openRound } = useSnapshot(mainManager);
  const { roundId, startTime, prizePool } = openRound || {};
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (startTime) {
      const now = new Date().toUTCString();
      const diff = dayjs(new Date(startTime).toUTCString()).diff(now, 'seconds');
      setTimeLeft(diff - 1);
    }
  }, [startTime]);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "0s";
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <div className="w-full px-2.5">
      <header
        className="w-full p-2.5 grid gap-2.5 rounded-[20px]"
        style={{
          background: `radial-gradient(99.95% 99.95% at 50% 0.05%, #1C1C1E 0%, #111111 100%)`,
        }}
      >
        <div className="w-full flex items-center">
          {/* next container */}
          <div className="w-full flex justify-between items-center">
            <div className="text-xs font-semibold font-regular text-grey px-2.5 py-1 bg-black/20 rounded-[15px] font-[inter]">
              Next #{roundId}
            </div>
            <span className="text-xs font-semibold font-regular text-grey px-2.5 py-1 bg-black/20 rounded-[15px] font-[inter]">
              {/* <CountdownTimer timeLeft={timeLeft} /> */}
              {startTime ? (
                <Countdown
                  autoStart
                  intervalDelay={0}
                  date={new Date(startTime).toUTCString()}
                  renderer={renderer}
                />
              ) : null}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-1">
          <img src={PoolImg} className="w-[190px]" />
          <div className="text-base font-semibold text-yellow">
            Prize pool: {formatCoin(prizePool)} Coin
          </div>
        </div>
        <InputBar property1="amount-0" />
      </header>
    </div>
  );
};
