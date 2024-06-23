import React, { useEffect, useRef, useState } from "react";
import { Buttom } from "../../components/Buttom";
import { LogoBar } from "../../components/LogoBar";
import { NaviBar } from "../../components/NaviBar";
import { ArrowRightDown } from "../../icons/ArrowRightDown";
import { ArrowRightUp3 } from "../../icons/ArrowRightUp3";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import {
  SocialMedia1,
  SocialMedia2,
  SocialMedia3,
  SocialMedia4,
} from "../../icons/SocialMedia";
import "./style.css";
import { PastRound } from "../../components/PastRound";
import { PrizePool } from "../../components/PrizePool/PrizePool";
import { resetUserManager } from "../../models/user";
import { mainManager, resetMainManager, setRounds } from "../../models/main";
import { faker } from "@faker-js/faker";
import { useSubscription } from "react-stomp-hooks";
import { useSnapshot } from "valtio";
import {
  BottomDrawerContent,
  BottomDrawerDescription,
  BottomDrawerOverlay,
  BottomDrawerPortal,
  BottomDrawerRoot,
  BottomDrawerTitle,
} from "../../components/BottomDrawer";
import { RewardWin } from "../../blocks/reward-win";
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
  const [open, setOpen] = useState(false);
  const { upPayout, downPayout, amount, openRound, closedRound, pastRound } =
    useSnapshot(mainManager);

  useSubscription("/topic/rounds", (message) => {
    try {
      const parsedMessage = JSON.parse(message.body); // Attempt to parse as JSON
      console.log('round info', parsedMessage.roundInfo)
      setRounds(parsedMessage.roundInfo);
    } catch (err) {
      console.log("Round Error");
    }
  });

  useSubscription("/topic/rounds/closed", (message) => {
    try {
      const parsedMessage = JSON.parse(message.body); // Attempt to parse as JSON
      console.log('parsedMeeee', parsedMessage)
    } catch (err) {
      console.log("Closed Error");
    }
  })

  useEffect(() => {
    setOpen(!!closedRound.roundId);
  }, [closedRound.roundId]);

  useEffect(() => {
    setOpen(!!closedRound.roundId);
  }, [closedRound.roundId]);

  useEffect(() => {
    setRounds([
      {
        roundId: faker.number.int({ max: 999999 }),
        lockedPrice: faker.number.int({ max: 9999 }),
        endPrice: null,
        openTime: faker.date.past().toUTCString(),
        startTime: faker.date.soon().toUTCString(),
        endTime: faker.date.soon().toUTCString(),
        prizePool: faker.number.int(),
        status: "OPEN",
        option: [
          {
            id: faker.number.int(),
            createdAt: "",
            optionText: "UP",
          },
          {
            optionText: "DOWN",
            id: faker.number.int(),
            createdAt: "",
          },
        ],
      },
      {
        roundId: faker.number.int({ max: 999999 }),
        lockedPrice: faker.number.int({ max: 9999 }),
        endPrice: null,
        openTime: faker.date.past().toUTCString(),
        startTime: faker.date.soon().toUTCString(),
        endTime: faker.date.soon().toUTCString(),
        prizePool: faker.number.int(),
        currentPrice: faker.number.int({ max: 9999 }),
        status: "STARTED",
      },
    ]);
    return () => {
      resetUserManager();
      resetMainManager();
    };
  }, []);

  return (
    <div className="main w-full grid gap-2.5">
      <div className="px-2.5">
        <NaviBar className="flex-0 p-2.5 w-full" vector="/img/vector-5.svg" />
      </div>
      <div className="px-2.5">
        <LogoBar
          className="logo-bar-instance"
          frame="/img/frame-307265693-1.svg"
        />
      </div>
      {/*<User />  // 添加 User*/}
      {/*<Contest />  // 添加 Contest*/}
      <PastRound />
      <PrizePool />
      <div className="flex items-center gap-2.5 px-2.5">
        <Buttom
          className="buttom-instance"
          icon={<ArrowRightUp3 className="icon-instance-node" />}
          pressing={false}
          property1="UP"
          payout={upPayout}
          disabled={amount === 0 || !openRound.roundId}
        />
        <Buttom
          className="buttom-instance"
          icon={<ArrowRightDown className="icon-instance-node" />}
          pressing={false}
          property1="DOWN"
          payout={downPayout}
          disabled={amount === 0 || !openRound.roundId}
        />
      </div>
      <BottomDrawerRoot open={open} onOpenChange={setOpen}>
        <BottomDrawerPortal>
          <BottomDrawerOverlay />
          {/* @ts-ignore */}
          <BottomDrawerContent aria-describedby={undefined}>
            <VisuallyHidden.Root>
              <BottomDrawerTitle />
            </VisuallyHidden.Root>
            <RewardWin />
          </BottomDrawerContent>
        </BottomDrawerPortal>
      </BottomDrawerRoot>
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
