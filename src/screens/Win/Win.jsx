import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import { TrendingUp2 } from "../../icons/TrendingUp2";
import "./style.css";

export const Win = () => {
  return (
    <div className="win">
      <div className="frame-62">
        <CloseOne1 className="close-one-1-instance" />
        <div className="text-wrapper-27">Result</div>
        <div className="text-wrapper-27">Reward</div>
      </div>
      <div className="frame-63">
        <div className="frame-64">
          <div className="text-wrapper-28">$104.2207</div>
          <div className="text-wrapper-29">＋$0.0934</div>
          <div className="text-wrapper-28">Congratulation</div>
          <div className="text-wrapper-30">Your prediction is correct!</div>
        </div>
        <div className="frame-65">
          <div className="text-wrapper-31">Time: 2024.00.00 00:00:00</div>
          <div className="text-wrapper-31">#00000</div>
          <div className="text-wrapper-31">#00000</div>
        </div>
        <TrendingUp2 className="trending-up" />
        <img className="animatedemojies-2" alt="Animatedemojies" src="/img/animatedemojies-512px-4.png" />
        <div className="text-wrapper-32">＋0000000 COIN</div>
      </div>
      <div className="frame-66">
        <div className="frame-67">
          <div className="saved-messages-7">Share</div>
        </div>
      </div>
      <div className="frame-68">
        <div className="frame-69">
          <div className="frame-70">
            <img className="shape-3" alt="Shape" src="/img/shape-1.svg" />
            <div className="saved-messages-8">Share</div>
          </div>
        </div>
        <div className="frame-66">
          <div className="frame-67">
            <div className="saved-messages-7">Next game</div>
          </div>
        </div>
      </div>
    </div>
  );
};
