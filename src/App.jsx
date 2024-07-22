import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./screens/Main";
import { Purchase } from "./screens/Purchase";
import { HistoryList } from "./screens/HistoryList";
import { StompSessionProvider } from "react-stomp-hooks";
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import { WSS_BASE_URL } from "./api/api";

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <StompSessionProvider
        url={`${WSS_BASE_URL}/crypto-battlenet`}
      >
        <Main />
      </StompSessionProvider>
    ),
  },
  {
    path: "/main",
    element: (
      <StompSessionProvider
        url={`${WSS_BASE_URL}/crypto-battlenet`}
      >
        <Main />
      </StompSessionProvider>
    ),
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
  {
    path: "/history-list",
    element: <HistoryList />,
  },
  // {
  //   path: "/purchase-confirm",
  //   element: <PurchaseConfirm />,
  // },
  // {
  //   path: "/reward-win",
  //   element: <RewardWin />,
  // },
  // {
  //   path: "/ResultWin",
  //   element: <ResultWin />,
  // },
]);

export const App = () => {
  return(
  <TonConnectUIProvider
      manifestUrl={process.env.REACT_APP_MANIFEST_URL}
      uiPreferences={{theme: THEME.DARK}}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "safepalwallet",
            name: "SafePal",
            imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
            tondns: "",
            aboutUrl: "https://www.safepal.com",
            universalLink: "https://link.safepal.io/ton-connect",
            deepLink: "safepal-tc://",
            jsBridgeKey: "safepalwallet",
            bridgeUrl: "https://ton-bridge.safepal.com/tonbridge/v1/bridge",
            platforms: ["ios", "android", "chrome", "firefox"]
          },
          {
            appName: "bitgetTonWallet",
            name: "Bitget Wallet",
            imageUrl: "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget%20wallet_logo_iOS.png",
            aboutUrl: "https://web3.bitget.com",
            deepLink: "bitkeep://",
            jsBridgeKey: "bitgetTonWallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["ios", "android", "chrome"],
            universalLink: "https://bkcode.vip/ton-connect"
          },
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"]
          }
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: process.env.REACT_APP_API_BASE_URL
      }}
  >
    <RouterProvider router={router} />
  </TonConnectUIProvider>
  )
};
