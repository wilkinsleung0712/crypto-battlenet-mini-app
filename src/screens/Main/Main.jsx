import React from "react";
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
import { useState } from 'react';
import { PastRound } from "../../components/PastRound";

export const MediaBar = {
  // need to be updated
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

  const handleBet = async (direction) => {
    const response = await fetch('/api/bet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, direction, roundId })
    });
    const data = await response.json();
    console.log(data);


  };
  return (
    <div className="main">
      <div className="frame-10">
        <NaviBar
          className="design-component-instance-node"
          group="/img/group-48095409-1.png"
          groupClassName="navi-bar-instance"
          vector="/img/vector-5.svg"
        />
        <LogoBar className="logo-bar-instance" frame="/img/frame-307265693-1.svg" />
        {/* <img className="dashboard" alt="Dashboard" src="/img/dashboard.svg" /> */}
          {/* <PastRound
        liveStatus={liveData.liveStatus}
        lastPrice={liveData.lastPrice}
        priceChange={liveData.priceChange}
        lockedPrice={liveData.lockedPrice}
        prizePool={liveData.prizePool}
        roundId={roundId}
        timeRemaining={liveData.timeRemaining}
      /> */}
<PastRound
        live={true}
        lastPrice="$104.2207"
        priceChange="+$0.0934"
        lockedPrice="$104.2207"
        prizePool="0,000,000,000"
        roundId={roundId}
        timeLeft="4m30s"
      />     

        <div className="frame-11">
          <div className="frame-12">
            <Status className="status-instance" property1="live" text="Next #000235" />
            <div className="frame-13">
              <div className="count-down">
                <div className="union-wrapper">
                  <img className="union" alt="Union" src="/img/union-4.svg" />
                </div>
                <div className="element-m-s">10m30s</div>
              </div>
            </div>
          </div>
          <div className="frame-14">
            <img className="img-2" alt="Img" src="/img/c615243f461cb78df5e453595f63941816b0182628704-xahsk8-2.png" />
            <div className="text-wrapper-5">1 Prize Pool: 688,888,888 Coin</div>
          </div>
          {/* <InputBar className="design-component-instance-node" property1="amount-0" /> */}
          <InputBar
        className="design-component-instance-node"
        property1="amount-0"
        amount={amount}
        setAmount={setAmount}
      />
          <div className="frame-15">
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
        </div>


        {/* media bar completed */}
        <div className="frame-16">
          <a href={MediaBar.social_link_haya} className="social-app-logo-3">
            <img alt="Social app logo" src={MediaBar.social_logo_haya} />
          </a>
          <a href={MediaBar.social_link_exchangehaya} className="social-app-logo-4">
            <img alt="Social app logo" src={MediaBar.social_logo_exchangehaya} />
          </a>
          <a href={MediaBar.social_link_twitter} className="social-app-logo-3">
            <img alt="Social app logo" src={MediaBar.social_logo_twitter} />
          </a>
          <a href={MediaBar.social_link_telegram} className="social-app-logo-4">
            <img alt="Social app logo" src={MediaBar.social_logo_telegram} />
          </a>
        </div>
        {/* media bar completed */}

        </div>
    </div>
  );
};