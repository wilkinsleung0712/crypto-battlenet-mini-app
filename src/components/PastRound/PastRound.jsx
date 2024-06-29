import React, { useEffect, useState, useRef } from "react";
import { TrendingUp } from "../../icons/TrendingUp";
import { TrendingDown } from "../../icons/TrendingDown";
import "./PastRound.style.css";
import { useSnapshot } from "valtio";
import { mainManager } from "../../models/main";
import Countdown from "react-countdown";
import { formatCoin, formatCurrency } from "../../utils";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import CoinImg from "../../../static/img/coin.png";

export const PastRound = () => {
  const { pastRound } = useSnapshot(mainManager);
  const { lockedPrice, endPrice, endTime, prizePool, roundId, currentPrice } =
    pastRound || {};
  const intervalId = useRef(null);

  const priceChange = Number(
    ((currentPrice * 100 - Number(lockedPrice) * 100) / 100).toFixed(2),
  );

  useEffect(() => {
    const fetchContestById = async () => {
      try {
        const response = await fetch(`/contests/${roundId}`);
        const contentType = response.headers.get("content-type");

        // @ts-ignore
        if (!response.ok || !contentType.includes("application/json")) {
          return;
        }

        const data = await response.json();
        const createdAt = new Date(data.createdAt || new Date());
        const deadline = new Date(createdAt.getTime() + 5 * 60000);
      } catch (error) {
        console.error("Error fetching contest:", error);
      }
    };

    fetchContestById();
  }, [pastRound?.roundId]);

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

  const priceChangeVariants = cva("text-lg font-semibold", {
    variants: {
      status: {
        up: "text-green",
        down: "text-red",
        none: "hidden",
      },
    },
  });

  return (
    <div className="w-full px-2.5">
      <div
        className={twMerge("past-round p-2.5", priceChange < 0 ? "down" : "")}
      >
        <div className="header">
          <div className="flex justify-between items-center rounded-[10px]">
            <span className="text-xs font-semibold font-regular text-grey px-2.5 py-1 bg-black/20 rounded-[15px] font-[inter]">
              {roundId ? "Live" : "Not Live"} #{roundId ?? "-"}
            </span>
            <span className="text-xs font-semibold font-regular text-grey px-2.5 py-1 bg-black/20 rounded-[15px] font-[inter]">
              {roundId ? (
                <Countdown
                  autoStart
                  intervalDelay={0}
                  date={new Date(endTime).toUTCString()}
                  renderer={renderer}
                />
              ) : null}
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col last-price items-start gap-1">
                <span className="text-xs text-grey">H2O Last Price</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl">
                    ${formatCurrency(currentPrice ?? 0)}
                  </span>
                  <span
                    className={priceChangeVariants({
                      status:
                        priceChange > 0
                          ? "up"
                          : priceChange < 0
                          ? "down"
                          : "none",
                    })}
                  >
                    {priceChange > 0
                      ? `+$${formatCurrency(priceChange)}`
                      : `-$${formatCurrency(Math.abs(priceChange))}`}
                  </span>
                </div>
              </div>
              {priceChange > 0 ? (
                <TrendingUp />
              ) : priceChange < 0 ? (
                <TrendingDown />
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <div className="locked-price">
                <span className="text-xs text-grey">Locked Price</span>
                <span className="text-base font-semibold">
                  ${formatCurrency(lockedPrice ?? 0)}
                </span>
              </div>
              <div className="prize-pool flex items-center justify-between">
                <span className="text-xs text-grey">Prize Pool</span>
                <div className="flex items-center justify-end gap-1">
                  <img src={CoinImg} className="" alt="" />
                  <span className="text-base font-semibold">
                    {formatCoin(prizePool ?? 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
