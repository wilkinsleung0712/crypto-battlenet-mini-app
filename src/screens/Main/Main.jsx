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

export const Main = () => {
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
        <img className="dashboard" alt="Dashboard" src="/img/dashboard.svg" />
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
            <div className="text-wrapper-5">Prize Pool: 688,888,888 Coin</div>
          </div>
          <InputBar className="design-component-instance-node" property1="amount-0" />
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
        <div className="frame-16">
          <div className="social-app-logo">
            <div className="sphere-wrapper">
              <Sphere2 className="sphere-2" />
            </div>
          </div>
          <img className="social-app-logo-2" alt="Social app logo" src="/img/social-app-logo-26.svg" />
          <div className="social-app-logo">
            <X1 className="x-1" />
          </div>
          <img className="social-app-logo-2" alt="Social app logo" src="/img/social-app-logo-24.svg" />
        </div>
      </div>
    </div>
  );
};
