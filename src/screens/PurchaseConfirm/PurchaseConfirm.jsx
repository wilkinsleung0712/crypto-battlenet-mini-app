import React from "react";
import PropTypes from "prop-types";
import { CloseOne1 } from "../../icons/CloseOne1";
import { Ton1 } from "../../icons/Ton1";
import "./style.css";

export const PurchaseConfirm = ({ onClose, tonAmount, onWalletClick, onTonConnectClick }) => {
  return (
    <div className="purchase-confirm-overlay" onClick={onClose}>
      <div className="purchase-confirm" onClick={(e) => e.stopPropagation()}>
        <div className="frame-43">
          <div className="text-wrapper-13">Purchase</div>
          <CloseOne1 className="close-one-1" onClick={onClose} />
        </div>
        <div className="frame-44">
          <div className="text-wrapper-14">{tonAmount} TON</div>
          <div className="text-wrapper-15">≈ $0.00</div>
        </div>
        <div className="frame-45">
          <div className="frame-46" onClick={onWalletClick}>
            <img className="TON" alt="Frame" src="/img/frame-307265132.png" />
            <div className="saved-messages-2">Wallet</div>
          </div>
          <div className="frame-46" onClick={onTonConnectClick}>
            <Ton1 className="TON" />
            <div className="saved-messages-2">TON Connect</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PurchaseConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  tonAmount: PropTypes.string.isRequired,
  onWalletClick: PropTypes.func.isRequired,
  onTonConnectClick: PropTypes.func.isRequired,
};
