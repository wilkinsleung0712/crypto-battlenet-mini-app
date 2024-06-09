import React from "react";
import { CheckOne } from "../../icons/CheckOne";
import { CircleRightDown1 } from "../../icons/CircleRightDown1";
import { CircleRightUp1 } from "../../icons/CircleRightUp1";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";

export const ConfirmPredict = () => {
  return (
    <div className="confirm-predict">
      <div className="div-6">
        <div className="frame-47">
          <div className="text-wrapper-16">Confirm Predict</div>
          <CloseOne1 className="close-one-9" />
        </div>
        <div className="frame-48">
          <div className="frame-49">
            <div className="element-x-payout">0.00X&nbsp;&nbsp;Payout</div>
            <p className="bid-coin">
              <span className="text-wrapper-17">Bid </span>
              <span className="text-wrapper-18">0000000 Coin</span>
            </p>
          </div>
          <CircleRightUp1 className="icon-instance-node-4" />
          <div className="text-wrapper-19">UP!</div>
          <CircleRightDown1 className="icon-instance-node-4" />
          <div className="text-wrapper-20">DOWN!</div>
        </div>
        <div className="frame-49">
          <div className="frame-50">
            <div className="saved-messages-3">Confirm</div>
          </div>
        </div>
      </div>
      <div className="frame-47">
        <div className="text-wrapper-16">Predict Succeed</div>
        <CloseOne1 className="close-one-9" />
      </div>
      <div className="frame-48">
        <CheckOne className="icon-instance-node-4" />
        <div className="text-wrapper-21">Success</div>
        <div className="frame-49">
          <p className="p">Bid 00000 COIN to predict UP! for 0.00X payout</p>
        </div>
      </div>
      <div className="frame-51">
        <div className="frame-52">
          <img className="shape" alt="Shape" src="/img/shape-1.svg" />
          <div className="saved-messages-4">Share</div>
        </div>
      </div>
    </div>
  );
};
