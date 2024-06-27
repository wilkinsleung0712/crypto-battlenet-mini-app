/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";
import {
  BottomDrawerClose,
  BottomDrawerContent,
  BottomDrawerOverlay,
  BottomDrawerPortal,
  BottomDrawerRoot,
  BottomDrawerTitle,
  BottomDrawerTrigger,
} from "../BottomDrawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CloseOne1 } from "../../icons/CloseOne1";

export const LogoBar = ({ className, frame = "/img/frame-307265693.svg" }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`logo-bar ${className}`}>
      <img className="img" alt="Frame" src={frame} />
      <BottomDrawerRoot open={open} onOpenChange={setOpen}>
        <BottomDrawerTrigger asChild>
          <div className="leading-crypto-index">Leading Crypto Index &gt;</div>
        </BottomDrawerTrigger>
        <BottomDrawerPortal>
          <BottomDrawerOverlay />
          {/* @ts-ignore */}
          <BottomDrawerContent aria-describedby={undefined}>
            <VisuallyHidden.Root>
              <BottomDrawerTitle />
            </VisuallyHidden.Root>
            <div className="win-overlay">
              <div className="win" onClick={(e) => e.stopPropagation()}>
                <div className="frame-47">
                  <div className="text-wrapper-16">Hello</div>
                  <BottomDrawerClose asChild>
                    <CloseOne1 className="close-one-9" />
                  </BottomDrawerClose>
                </div>
                <img
                  className="animatedemojies-2"
                  alt="Animatedemojies"
                  src="/img/animatedemojies-512px-4.png"
                />
                <div className="frame-63">
                  <div className="frame-64">
                    <div className="text-wrapper-28">Have fun here!</div>
                    <div className="text-wrapper-30"></div>
                  </div>
                </div>
                <div className="frame-68">
                  <BottomDrawerClose asChild>
                    <div className="flex w-full justify-center bg-white items-center flex h-[50px] rounded-xl flex-1 leading-[50px]">
                      <div className="saved-messages-7">Got it!</div>
                    </div>
                  </BottomDrawerClose>
                </div>
              </div>
            </div>
          </BottomDrawerContent>
        </BottomDrawerPortal>
      </BottomDrawerRoot>
    </div>
  );
};

LogoBar.propTypes = {
  frame: PropTypes.string,
};
