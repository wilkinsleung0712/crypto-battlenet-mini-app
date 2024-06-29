import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import { TrendingDown2 } from "../../icons/TrendingDown2";
import { TrendingUp2 } from "../../icons/TrendingUp2";
import "./style.css";
import { BottomDrawerClose } from "../../components/BottomDrawer";
import { useSnapshot } from "valtio";
import { mainManager } from "../../models/main";
import { formatCurrency } from "../../utils";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export const PredictResult = () => {
  const { closedRound } = useSnapshot(mainManager);
  const { endPrice, lockedPrice } = closedRound || {};
  const priceChange = Number(
    (((endPrice ?? 0) * 100 - Number(lockedPrice) * 100) / 100).toFixed(2),
  );

  return (
    <div className="win-overlay">
      <div className="win" onClick={(e) => e.stopPropagation()}>
        <div className="frame-47">
          <div className="text-wrapper-16">Result</div>
          <BottomDrawerClose asChild>
            <CloseOne1 className="close-one-9" />
          </BottomDrawerClose>
        </div>
        <div className="frame-54">
          <div className="frame-55 text-center">
            {priceChange > 0 ? (
                <TrendingUp2 className="trending-down" />
              ) : priceChange < 0 ? (
                <TrendingDown2 className="trending-down" />
              ) : null}
            <div className="text-xl font-semibold text-white text-center">${endPrice}</div>
            <div className={twMerge('text-sm', priceChange > 0 ? 'text-green' : 'text-red')}>{priceChange > 0
                ? `+$${formatCurrency(priceChange)}`
                : `-$${formatCurrency(Math.abs(priceChange))}`}
            </div>
            <div className="frame-65 flex justify-center gap-2">
              <div className="text-wrapper-31">#{closedRound.roundId}</div>
              <div className="text-wrapper-31">
                Time: {dayjs(closedRound.endTime).format("YYYY.MM.DD HH:mm:ss")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center bg-white items-center flex h-[50px] rounded-xl flex-1">
          <div className="leading-[50px] text-black text-xl font-medium font-regular">Share</div>
        </div>
      </div>
    </div>
  );
};
