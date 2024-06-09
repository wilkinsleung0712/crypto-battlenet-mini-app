import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import { TrendingDown2 } from "../../icons/TrendingDown2";
import "./style.css";

export const Lose = () => {
  return (
    <div className="lose">
      <div className="frame-53">
        <CloseOne1 className="close-one-2" />
        <div className="text-wrapper-22">Result</div>
        <div className="text-wrapper-22">Reward</div>
      </div>
      <div className="frame-54">
        <div className="frame-55">
          <div className="text-wrapper-23">$104.2207</div>
          <div className="text-wrapper-24">－$0.0934</div>
          <div className="text-wrapper-23">Sorry</div>
          <div className="text-wrapper-25">Your prediction is wrong!</div>
        </div>
        <div className="frame-56">
          <div className="text-wrapper-26">Time: 2024.00.00 00:00:00</div>
          <div className="text-wrapper-26">#00000</div>
          <div className="text-wrapper-26">#00000</div>
        </div>
        <TrendingDown2 className="trending-down" />
        <img className="animatedemojies" alt="Animatedemojies" src="/img/animatedemojies-512px-67.gif" />
      </div>
      <div className="frame-57">
        <div className="frame-58">
          <div className="saved-messages-5">Share</div>
        </div>
      </div>
      <div className="frame-59">
        <div className="frame-60">
          <div className="frame-61">
            <img className="shape-2" alt="Shape" src="/img/shape-1.svg" />
            <div className="saved-messages-6">Share</div>
          </div>
        </div>
        <div className="frame-57">
          <div className="frame-58">
            <div className="saved-messages-5">Next game</div>
          </div>
        </div>
      </div>
    </div>
  );
};
