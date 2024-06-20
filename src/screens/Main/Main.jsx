import React, { useState } from "react";
import { Buttom } from "../../components/Buttom";
import { InputBar } from "../../components/InputBar";
import { LogoBar } from "../../components/LogoBar";
import { NaviBar } from "../../components/NaviBar";
import { Status } from "../../components/Status";
import { ArrowRightDown } from "../../icons/ArrowRightDown";
import { ArrowRightUp3 } from "../../icons/ArrowRightUp3";
import { Sphere2 } from "../../icons/Sphere2";
import { X1 } from "../../icons/X1";
import "./style.css";
import { PastRound } from "../../components/PastRound";
import { User } from "../../components/User"; // 引入 User
import { Contest } from "../../components/Contest"; // 引入 Contest

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
  const [amount, setAmount] = useState(0);
  const roundId = "123"; // 这里可以设置你的 roundId

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
          group="/img/group-48095409-1.png"
          groupClassName="navi-bar-instance"
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
        live={true}
        lastPrice="$104.2207"
        priceChange="+$0.0934"
        lockedPrice="$104.2207"
        prizePool="0,000,000,000"
        roundId={roundId}
        timeLeft="4m30s"
      />
      <InputBar
        className="design-component-instance-node"
        property1="amount-0"
        amount={amount}
        setAmount={setAmount}
      />
      <div className="frame-15 px-2.5">
        <Buttom
          className="buttom-instance"
          icon={<ArrowRightUp3 className="icon-instance-node" />}
          pressing={false}
          property1="UP"
          to="/confirm-predict-1"
        />
        <Buttom
          className="buttom-instance"
          icon={<ArrowRightDown className="icon-instance-node" />}
          pressing={false}
          property1="DOWN"
        />
      </div>
      <div className="frame-16">
        {/* Media links */}
        <a href={MediaBar.social_link_haya} className="social-app-logo-3">
          <img alt="Social app logo" src={MediaBar.social_logo_haya} />
        </a>
        <a
          href={MediaBar.social_link_exchangehaya}
          className="social-app-logo-4"
        >
          <img alt="Social app logo" src={MediaBar.social_logo_exchangehaya} />
        </a>
        <a href={MediaBar.social_link_twitter} className="social-app-logo-3">
          <img alt="Social app logo" src={MediaBar.social_logo_twitter} />
        </a>
        <a href={MediaBar.social_link_telegram} className="social-app-logo-4">
          <img alt="Social app logo" src={MediaBar.social_logo_telegram} />
        </a>
      </div>
    </div>
  );
};
