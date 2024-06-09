import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./screens/Main";
import { Purchase } from "./screens/Purchase";
import { MainScreen } from "./screens/MainScreen";
import { HistoryList } from "./screens/HistoryList";
import { PurchaseConfirm } from "./screens/PurchaseConfirm";
import { ConfirmPredict } from "./screens/ConfirmPredict";
import { Lose } from "./screens/Lose";
import { Win } from "./screens/Win";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Main />,
  },
  {
    path: "/main-1",
    element: <Main />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/main-2",
    element: <MainScreen />,
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
    path: "/confirm-predict-1",
    element: <ConfirmPredict />,
  },
  {
    path: "/lose",
    element: <Lose />,
  },
  {
    path: "/win",
    element: <Win />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
