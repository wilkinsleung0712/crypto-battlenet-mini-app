import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import { TrendingDown2 } from "../../icons/TrendingDown2";
import "./style.css";
import { BottomDrawerClose } from "../../components/BottomDrawer";

export const ResultWin = () => {
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
            <TrendingDown2 className="trending-down" />
            <div className="text-wrapper-23">$104.2207</div>
            <div className="text-wrapper-24">－$0.0934</div>
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
