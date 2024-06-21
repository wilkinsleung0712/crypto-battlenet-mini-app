import React from "react";
import { Buttom } from "../../components/Buttom";
import { LogoBar } from "../../components/LogoBar";
import { NaviBar } from "../../components/NaviBar";
import { ArrowRightDown } from "../../icons/ArrowRightDown";
import { ArrowRightUp3 } from "../../icons/ArrowRightUp3";
import {
  SocialMedia1,
  SocialMedia2,
  SocialMedia3,
  SocialMedia4,
} from "../../icons/SocialMedia";
import "./style.css";
import { PastRound } from "../../components/PastRound";
import { PrizePool } from "../../components/PrizePool/PrizePool";
import {
  BottomDrawerRoot,
  BottomDrawerContent,
  BottomDrawerTrigger,
  BottomDrawerPortal,
  BottomDrawerOverlay,
} from "../../components/BottomDrawer";
import { ConfirmPredictUp } from "../../blocks/confirm-predict-up";
import { ConfirmPredictDown } from "../../blocks/confirm-predict-down";
export const MediaBar = {
  social_link_haya: "https://example.com/sphere2",
  social_link_exchangehaya: "https://example.com/x1",
  social_link_twitter: "https://example.com/logo26",
  social_link_telegram: "https://example.com/logo24",
  social_logo_haya: "/img/social-app-logo-24.svg",
  social_logo_exchangehaya: "/img/social-app-logo-24.svg",
  social_logo_twitter: "/img/social-app-logo-24.svg",
  social_logo_telegram: "/img/social-app-logo-24.svg",
};

export const Main = () => {
  const roundId = "123"; // 这里可以设置你的 roundId
  const amount = 1;

  const handleBethandleBet = async (direction) => {
    const response = await fetch("/api/bet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, direction, roundId }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="main w-full grid gap-2.5">
      <div className="px-2.5">
        <NaviBar
          className="flex-0 p-2.5 w-full"
          vector="/img/vector-5.svg"
        />
      </div>
      <div className="px-2.5">
        <LogoBar
          className="logo-bar-instance"
          frame="/img/frame-307265693-1.svg"
        />
      </div>
      {/*<User />  // 添加 User*/}
      {/*<Contest />  // 添加 Contest*/}
      <PastRound
        contestId='111'
      />
      <PrizePool />
      <div className="flex items-center gap-2.5 px-2.5">
        <BottomDrawerRoot shouldScaleBackground={false}>
          <BottomDrawerTrigger asChild>
            <div className="w-full">
              <Buttom
                className="buttom-instance"
                icon={<ArrowRightUp3 className="icon-instance-node" />}
                pressing={false}
                property1="UP"
              />
            </div>
          </BottomDrawerTrigger>
          <BottomDrawerPortal>
            <BottomDrawerOverlay />
            <BottomDrawerContent>
              <ConfirmPredictUp />
            </BottomDrawerContent>
          </BottomDrawerPortal>
        </BottomDrawerRoot>
        <BottomDrawerRoot shouldScaleBackground={false}>
          <BottomDrawerTrigger asChild>
            <div className="w-full">
              <Buttom
                className="buttom-instance"
                icon={<ArrowRightDown className="icon-instance-node" />}
                pressing={false}
                property1="DOWN"
              />
            </div>
          </BottomDrawerTrigger>
          <BottomDrawerPortal>
            <BottomDrawerOverlay />
            <BottomDrawerContent>
              <ConfirmPredictDown />
            </BottomDrawerContent>
          </BottomDrawerPortal>
        </BottomDrawerRoot>
      </div>
      <div className="frame-16">
        {/* Media links */}
        <a
          href={MediaBar.social_link_haya}
          className="bg-[#1b1b1b] rounded-[10px] w-8 h-8 flex items-center justify-center"
        >
          <SocialMedia1 />
        </a>
        <a
          href={MediaBar.social_link_exchangehaya}
          className="bg-[#1b1b1b] rounded-[10px] w-8 h-8 flex items-center justify-center"
        >
          <SocialMedia2 />
        </a>
        <a
          href={MediaBar.social_link_twitter}
          className="bg-[#1b1b1b] rounded-[10px] w-8 h-8 flex items-center justify-center"
        >
          <SocialMedia3 />
        </a>
        <a
          href={MediaBar.social_link_telegram}
          className="bg-[#1b1b1b] rounded-[10px] w-8 h-8 flex items-center justify-center"
        >
          <SocialMedia4 />
        </a>
      </div>
    </div>
  );
};
