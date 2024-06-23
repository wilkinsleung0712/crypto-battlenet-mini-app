import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./screens/Main";
import { Purchase } from "./screens/Purchase";
import { HistoryList } from "./screens/HistoryList";
import { PurchaseConfirm } from "./screens/PurchaseConfirm";
import { ConfirmPredictUp } from "./screens/ConfirmPredictUp";
import { ConfirmPredictDown } from "./screens/ConfirmPredictDown";
import { ConfirmPredictSuccess } from "./screens/ConfirmPredictSuccess";
import { RewardWin } from "./screens/RewardWin";
import { RewardLose } from "./screens/RewardLose";
import { ResultWin } from "./screens/ResultWin";
import { Lose } from "./screens/Lose";
import { StompSessionProvider, useSubscription } from "react-stomp-hooks";
// import { Win } from "./screens/Win";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Main />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/history-list",
    element: <HistoryList />,
  },
  {
    path: "/purchase-confirm",
    element: <PurchaseConfirm />,
  },
  {
    path: "/reward-win",
    element: <RewardWin />,
  },
  {
    path: "/reward-lose",
    element: <RewardLose />,
  },
  {
    path: "/ResultWin",
    element: <ResultWin />,
  },
  {
    path: "/lose",
    element: <Lose />,
  },
  // {
  //   path: "/win",
  //   element: <Win />,
  // },
]);

export const App = () => {
  return (
    <StompSessionProvider
      url={"wss://e407-115-194-133-246.ngrok-free.app/crypto-battlenet"}
      //All options supported by @stomp/stompjs can be used here
    >
      <RouterProvider router={router} />
    </StompSessionProvider>
  );
  return <RouterProvider router={router} />;
};
