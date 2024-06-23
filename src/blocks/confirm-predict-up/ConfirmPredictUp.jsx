import React, { useEffect, useState } from "react";
import { CircleRightUp1 } from "../../icons/CircleRightUp1";
import { CloseOne1 } from "../../icons/CloseOne1";
import { BottomDrawerClose } from "../../components/BottomDrawer";
import "./style.css";
import { useSnapshot } from "valtio";
import {
  mainManager,
  resetMainPredict,
  setPredictResult,
  setPredictStatus,
} from "../../models/main";
import { ConfirmPredictSuccess } from "../predict-success/ConfirmPredictSuccess";
import { placeBet } from "../../api/api";
import { userManager } from "../../models/user";

export const ConfirmPredictUp = () => {
  const { predictResult, amount, upPayout, predictSuccess, openRound, upId } =
    useSnapshot(mainManager);
  const { id } = useSnapshot(userManager);

  const handleConfirmClick = () => {
    placeBet(1, openRound?.roundId, {
      optionId: upId,
      amount,
      userId: id,
    })
      .then((response) => {
        console.log("Bet placed", response.data);
        setPredictStatus(true);
      })
      .catch((error) => console.error("Error placing bet", error));
  };

  useEffect(() => {
    return () => {
      resetMainPredict();
    };
  }, []);

  if (predictSuccess) {
    return <ConfirmPredictSuccess />;
  }

  return (
    <div className="confirm-predict">
      <div className="div-6">
        <div className="frame-47">
          <div className="text-wrapper-16">Confirm Predict</div>
          <BottomDrawerClose asChild>
            <CloseOne1 className="close-one-9" />
          </BottomDrawerClose>
        </div>
        <div className="frame-48">
          <CircleRightUp1 className="icon-instance-node-4" />
          <div className="text-wrapper-19">UP!</div>
          <div className="frame-49">
            <div className="element-x-payout">
              {upPayout}X&nbsp;&nbsp;Payout
            </div>
            <p className="bid-coin">
              <span className="text-wrapper-17">Bid </span>
              <span className="text-wrapper-18">{amount} Coin</span>
            </p>
          </div>
        </div>
        <div className="frame-49">
          <div className="frame-50" onClick={handleConfirmClick}>
            <div className="saved-messages-3">Confirm</div>
          </div>
        </div>
      </div>
    </div>
  );
};
