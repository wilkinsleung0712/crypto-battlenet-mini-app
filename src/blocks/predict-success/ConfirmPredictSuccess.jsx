import React, { useEffect, useState } from "react";
import { CheckOne } from "../../icons/CheckOne";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";
import { useSnapshot } from "valtio";
import { mainManager, resetPredictAmount, setPredictStatus } from "../../models/main";
import { BottomDrawerClose } from "../../components/BottomDrawer";

export const ConfirmPredictSuccess = () => {
  const { amount, bidPayout, bidText } = useSnapshot(mainManager);
  const [showToast, setShowToast] = useState(false);

  const handleConfirm = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      setPredictStatus(false);
      resetPredictAmount();
    };
  }, []);

  return (
    <div className="confirm-predict">
      <div className="div-6">
        <div className="frame-8">
          <div className="text-wrapper-9">Predict Succeed</div>
          <BottomDrawerClose asChild>
            <CloseOne1 className="close-one-instance" />
          </BottomDrawerClose>
        </div>
        <div className="frame-9">
          <CheckOne className="check-one" />
          <div className="text-wrapper-10">Success</div>
          <div className="div-wrapper">
            <p className="p">
              Bid {amount} COIN to predict {bidText} ! for {bidPayout}X payout
            </p>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-10" onClick={handleConfirm}>
            <img
              className="shape"
              alt="Shape"
              src="https://cdn.animaapp.com/projects/66641dbc59e6661189d283f3/releases/66641de4dc5f7759f1404660/img/shape-1.svg"
            />
            <div className="saved-messages">Share</div>
          </div>
        </div>
        {showToast && (
          <div className="toast">
            <div className="toast-message">Prediction Confirmed!</div>
          </div>
        )}
      </div>
    </div>
  );
};
