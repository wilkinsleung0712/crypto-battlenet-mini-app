import React from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";
import { BottomDrawerClose } from "../../components/BottomDrawer";
import { useSnapshot } from "valtio";
import { mainManager } from "../../models/main";
import dayjs from "dayjs";

// Example function to share on Telegram
const shareOnTelegram = () => {
  const telegramShareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(
    window.location.href,
  )}&text=${encodeURIComponent("Check out this prediction!")}`;
  window.open(telegramShareUrl, "_blank");
};

export const RewardLose = () => {
  const { closedRound } = useSnapshot(mainManager);

  return (
    <div className="win-overlay">
      <div className="win" onClick={(e) => e.stopPropagation()}>
        <div className="frame-47">
          <div className="text-wrapper-16">Reward</div>
          <BottomDrawerClose asChild>
            <CloseOne1 className="close-one-9" />
          </BottomDrawerClose>
        </div>
        <img
          className="animatedemojies-2"
          alt="Animatedemojies"
          src="/img/animatedemojies-512px-67.gif"
        />
        <div className="frame-63 grid gap-4">
          <div className="frame-64">
            <div className="text-wrapper-28">Sorry</div>
            <div className="text-wrapper-30">Your prediction is wrong!</div>
          </div>
          <div className="frame-65 flex items-center gap-4">
            <div className="text-wrapper-31">#{closedRound.roundId}</div>
            <div className="text-wrapper-31">Time: {dayjs(closedRound.endTime).format('YYYY.MM.DD HH:mm:ss')}</div>
          </div>
        </div>
        <div className="frame-68 my-2">
          <div className="frame-69">
            <div className="frame-70" onClick={shareOnTelegram}>
              <img className="shape-3" alt="Shape" src="/img/shape-1.svg" />
              <div className="saved-messages-8">Share</div>
            </div>
          </div>
          <BottomDrawerClose asChild>
            <div className="flex w-full justify-center bg-white items-center flex h-[50px] rounded-xl flex-1 leading-[50px]">
              <div className="saved-messages-7">Next game</div>
            </div>
          </BottomDrawerClose>
        </div>
      </div>
    </div>
  );
};
