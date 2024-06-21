import React, { useState } from "react";
import { CheckOne } from "../../icons/CheckOne";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";

export const ConfirmPredictSuccess = () => {
  const [showToast, setShowToast] = useState(false);

  const handleConfirm = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 2000);
  };

  const onClose = () => {
    window.location.href = "/"; // Navigate to the main page
  };

  return (
    <div className="confirm-predict">
      <div className="div-6">
        <div className="frame-8">
          <div className="text-wrapper-9">Predict Succeed</div>
          <CloseOne1 className="close-one-instance" onClick={onClose} />
        </div>
        <div className="frame-9">
          <CheckOne className="check-one" />
          <div className="text-wrapper-10">Success</div>
          <div className="div-wrapper">
            <p className="p">Bid 00000 COIN to predict UP! for 0.00X payout</p>
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
