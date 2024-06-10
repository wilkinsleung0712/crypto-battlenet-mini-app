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
const socialLinks = [
  { href: 'https://example.com/social-1', src: '/img/social-app-logo-26-1.svg', alt: 'Social app logo 1' },
  { href: 'https://example.com/social-2', src: '/img/social-app-logo-24.svg', alt: 'Social app logo 2' },
  { href: 'https://example.com/social-3', src: '/img/social-app-logo-26-1.svg', alt: 'Social app logo 3' },
  { href: 'https://example.com/social-4', src: '/img/social-app-logo-24.svg', alt: 'Social app logo 4' }
];

export const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="frame-30">
        <NaviBar
          className="design-component-instance-node-2"
          group="/img/group-48095409-1.png"
          groupClassName="navi-bar-2"
          vector="/img/vector-7.svg"
        />
        <LogoBar className="logo-bar-2" frame="/img/frame-307265693-2.svg" />
        <div className="frame-2">
        <div className="frame-3">
          <Status className="design-component-instance-node" property1="live" />
          <div className="frame-4">
            <CountDown
              className="design-component-instance-node"
              frameClassName="count-down-instance"
              property1="default"
              union="https://cdn.animaapp.com/projects/66641dbc59e6661189d283f3/releases/66641de4dc5f7759f1404660/img/union-2.svg"
            />
            <div className="history-wrapper">
              <History3 className="history" />
            </div>
          </div>
        </div>
        <div className="price-card-up">
          <div className="frame-5">
            <div className="text-wrapper">H20 Last Price</div>
            <div className="frame-6">
              <div className="text-wrapper-2">$104.2207</div>
              <div className="text-wrapper-3">＋$0.0934</div>
            </div>
          </div>
          <TrendingUp2 className="trending-up" color="url(#paint0_linear_3_219)" stroke="url(#paint1_linear_3_219)" />
        </div>
        <div className="frame-7">
          <div className="frame-8">
            <div className="text-wrapper-4">Locked Price</div>
            <div className="text-wrapper-5">$104.2207</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-4">Prize Pool</div>
            <div className="frame-9">
              <img
                className="image"
                alt="Image"
                src="https://cdn.animaapp.com/projects/66641dbc59e6661189d283f3/releases/6666d3e5104c030a6e50e352/img/image-1850@2x.png"
              />
              <div className="text-wrapper-6">0,000,000,000</div>
            </div>
          </div>
        </div>
        <img
          className="dashboard"
          alt="Dashboard"
          src="https://cdn.animaapp.com/projects/66641dbc59e6661189d283f3/releases/6666d488bd5d11b47331080a/img/dashboard.svg"
        />
      </div>
        <img className="dashboard-2" alt="Dashboard" src="/img/dashboard-1.svg" />
        <div className="frame-31">
          <div className="frame-32">
            <Status className="status-2" property1="live" text="Next #000235" />
            <div className="frame-33">
              <div className="count-down-2">
                <div className="frame-34">
                  <img className="union-2" alt="Union" src="/img/union-4.svg" />
                </div>
                <div className="element-9">10m30s</div>
              </div>
            </div>
          </div>
          <div className="frame-35">
            <img className="img-3" alt="Img" src="/img/c615243f461cb78df5e453595f63941816b0182628704-xahsk8-2.png" />
            {/* <div className="text-wrapper-9">1Prize Pool: 1688,888,888 Coin</div> */}
          </div>
          <InputBar className="design-component-instance-node-2" property1="amount-0" />
          <div className="frame-36">
            <Buttom
              className="buttom-2"
              icon={<ArrowRightUp3 className="icon-instance-node-2" />}
              pressing={false}
              property1="UP"
              to="/confirm-predict-1"
            />
            <Buttom
              className="buttom-2"
              icon={<ArrowRightDown className="icon-instance-node-2" />}
              pressing={false}
              property1="DOWN"
            />
          </div>
        </div>
        <div className="frame-37">
          <div className="social-app-logo-3">
            <div className="sphere-2-wrapper">
              <Sphere2 className="sphere-1" />
            </div>
          </div>
          <img className="social-app-logo-4" alt="Social app logo" src="/img/social-app-logo-26-1.svg" />
          <div className="social-app-logo-3">
            <X1 className="x-2" />
          </div>
          <img className="social-app-logo-4" alt="Social app logo" src="/img/social-app-logo-24.svg" />
        </div>
      </div>
    </div>
  );
};
