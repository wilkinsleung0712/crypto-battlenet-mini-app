/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowRightUp1 } from "../../icons/ArrowRightUp1";
import "./style.css";
import { ConfirmPredictDown } from "../../blocks/confirm-predict-down";
import {
  BottomDrawerRoot,
  BottomDrawerTrigger,
  BottomDrawerPortal,
  BottomDrawerOverlay,
  BottomDrawerContent,
  BottomDrawerTitle,
  BottomDrawerDescription,
} from "../BottomDrawer";
import { ConfirmPredictUp } from "../../blocks/confirm-predict-up";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { setUserInfo, userManager } from "../../models/user";
import { getUserById } from "../../api/api";
import { useSnapshot } from "valtio";

export const Buttom = ({
  property1,
  pressing,
  className,
  payout = 1,
  disabled = false,
  icon = <ArrowRightUp1 className="arrow-right-up" />,
  to,
}) => {
  const { id } = useSnapshot(userManager);

  const getUserInfo = () => {
    getUserById(id)
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((error) => console.error("Failed to get user info", error));
  }

  if (disabled) {
    return (
      <div className="w-full">
        <div className={`buttom ${className}`}>
          <div className={`frame-9 p-2.5 bg-grey`} aria-disabled={disabled}>
            {icon}
            <div className="UP-2">
              {["UP", "pressing"].includes(property1) && <>UP</>}
              {["DOWN", "variant-4"].includes(property1) && <>DOWN</>}
            </div>
          </div>
          <div className="element-payout font-bold underline">
            {payout}X&nbsp;&nbsp;Payout
          </div>
        </div>
      </div>
    );
  }
  return (
    <BottomDrawerRoot shouldScaleBackground={false}>
      <BottomDrawerTrigger asChild>
        <div className="w-full">
          <div className={`buttom ${className}`}>
            <div
              className={`frame-9 ${property1} pressing-${pressing}`}
              aria-disabled={disabled}
            >
              {icon}
              <div className="UP-2">
                {["UP", "pressing"].includes(property1) && <>UP</>}
                {["DOWN", "variant-4"].includes(property1) && <>DOWN</>}
              </div>
            </div>
            <div className="element-payout font-bold underline">
              {payout}X&nbsp;&nbsp;Payout
            </div>
          </div>
        </div>
      </BottomDrawerTrigger>
      <BottomDrawerPortal>
        <BottomDrawerOverlay />
        <BottomDrawerContent aria-describedby={undefined}>
          <VisuallyHidden.Root>
            <BottomDrawerTitle />
          </VisuallyHidden.Root>
          {property1.includes("DOWN") ? <ConfirmPredictDown refresh={getUserInfo} /> : null}
          {property1.includes("UP") ? <ConfirmPredictUp refresh={getUserInfo} /> : null}
        </BottomDrawerContent>
      </BottomDrawerPortal>
    </BottomDrawerRoot>
  );
};

Buttom.propTypes = {
  property1: PropTypes.oneOf(["pressing", "UP", "DOWN", "variant-4"]),
  pressing: PropTypes.bool,
  to: PropTypes.string,
};
