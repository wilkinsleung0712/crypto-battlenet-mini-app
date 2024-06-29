import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import { TrendingDown2 } from "../../icons/TrendingDown2";
import { TrendingUp2 } from "../../icons/TrendingUp2";
import "./style.css";
import { BottomDrawerClose } from "../../components/BottomDrawer";
import { useSnapshot } from "valtio";
import { mainManager } from "../../models/main";
import { formatCurrency } from "../../utils";

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
          <div className="frame-55">
            {priceChange > 0 ? (
                <TrendingUp2 className="trending-down" />
              ) : priceChange < 0 ? (
                <TrendingDown2 className="trending-down" />
              ) : null}
            <div className="text-wrapper-23">${endPrice}</div>
            <div className="text-wrapper-24">{priceChange > 0
                      ? `+$${formatCurrency(priceChange)}`
                      : `-$${formatCurrency(Math.abs(priceChange))}`}</div>
          </div>
        </div>
        <div className="frame-57">
          <div className="frame-58">
            <div className="saved-messages-5">Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};
