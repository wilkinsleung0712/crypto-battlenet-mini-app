import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";

// Example function to share on Telegram
const shareOnTelegram = () => {
  const telegramShareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(
    window.location.href,
  )}&text=${encodeURIComponent("Check out this prediction!")}`;
  window.open(telegramShareUrl, "_blank");
};

export const RewardLose = ({ onClose }) => {
  const handleNextGame = () => {
    window.location.href = "/main"; // Navigate to the main page
    onClose(); // Close the dialog
  };

  return (
    <div className="win-overlay" onClick={onClose}>
      <div className="win" onClick={(e) => e.stopPropagation()}>
        <div className="frame-47">
          <div className="text-wrapper-16">Reward</div>
          <CloseOne1 className="close-one-9" onClick={onClose} />
        </div>
        <img
          className="animatedemojies-2"
          alt="Animatedemojies"
          src="/img/animatedemojies-512px-67.gif"
        />
        <div className="frame-63">
          <div className="frame-64">
            <div className="text-wrapper-28">Sorry</div>
            <div className="text-wrapper-30">Your prediction is wrong!</div>
          </div>
          <div className="frame-65">
            <div className="text-wrapper-31">Time: 2024.00.00 00:00:00</div>
            <div className="text-wrapper-31">#00000</div>
            <div className="text-wrapper-31">#00000</div>
          </div>
        </div>
        <div className="frame-68">
          <div className="frame-69">
            <div className="frame-70" onClick={shareOnTelegram}>
              <img className="shape-3" alt="Shape" src="/img/shape-1.svg" />
              <div className="saved-messages-8">Share</div>
            </div>
          </div>
          <div className="frame-66">
            <div className="frame-67" onClick={handleNextGame}>
              <div className="saved-messages-7">Next game</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
