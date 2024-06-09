import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import { Ton1 } from "../../icons/Ton1";
import "./style.css";

export const PurchaseConfirm = () => {
  return (
    <div className="purchase-confirm">
      <div className="frame-43">
        <div className="text-wrapper-13">Purchase</div>
        <CloseOne1 className="close-one-1" />
      </div>
      <div className="frame-44">
        <div className="text-wrapper-14">0.014 TON</div>
        <div className="text-wrapper-15">≈ $0.00</div>
      </div>
      <div className="frame-45">
        <div className="frame-46">
          <img className="TON" alt="Frame" src="/img/frame-307265132.png" />
          <div className="saved-messages-2">Wallet</div>
        </div>
        <div className="frame-46">
          <Ton1 className="TON" />
          <div className="saved-messages-2">TON Connet</div>
        </div>
      </div>
    </div>
  );
};
