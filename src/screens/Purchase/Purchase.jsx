import React, { useState } from "react";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";
import { PurchaseConfirm } from "../PurchaseConfirm";

const coinItems = [
  { image: "/img/18.png", amount: 300, price: "$0.99" },
  { image: "/img/20-1.png", amount: 1500, price: "$4.99" },
  { image: "/img/19-1.png", amount: 4050, price: "$13.49" },
  { image: "/img/17.png", amount: 8100, price: "$26.99" },
  { image: "/img/15.png", amount: 20700, price: "$68.99" },
  { image: "/img/14.png", amount: 39000, price: "$129.99" },
];

const CoinItem = ({ image, amount, price, onClick }) => (
  <div className="frame-23" onClick={onClick}>
    <div className="frame-25">
      <img className="element-5" alt="Element" src={image} />
    </div>
    <div className="frame-24">
      <p className="element-coin">
        <span className="span">{amount} </span>
        <span className="text-wrapper-8">Coin </span>
      </p>
      <div className="element-3">{price}</div>
    </div>
  </div>
);

export const Purchase = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleConfirmClick = () => {
    setShowConfirm(true);
  };

  const handleCloseConfirm = () => {
    setShowConfirm(false);
  };

  const handleItemClick = (item) => {
    setSelectedCoin(item);
    handleConfirmClick();
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < coinItems.length; i += 2) {
      rows.push(
        <div className="frame-22" key={i}>
          <CoinItem
            image={coinItems[i].image}
            amount={coinItems[i].amount}
            price={coinItems[i].price}
            onClick={() => handleItemClick(coinItems[i])}
          />
          {i + 1 < coinItems.length && (
            <CoinItem
              image={coinItems[i + 1].image}
              amount={coinItems[i + 1].amount}
              price={coinItems[i + 1].price}
              onClick={() => handleItemClick(coinItems[i + 1])}
            />
          )}
        </div>,
      );
    }
    return rows;
  };

  return (
    <div className="purchase">
      <div className="frame-17">
        <div className="text-wrapper-6">Purchase</div>
        <CloseOne1 className="close-one" />
      </div>
      <div className="frame-18">
        <div className="frame-19" />
        <div className="frame-20">
          <img className="image" alt="Image" src="/img/coin.png" />
          <div className="text-wrapper-7">0000000</div>
        </div>
      </div>
      <div className="frame-21">{renderRows()}</div>
      <div className="saved-messages-wrapper">
        <div className="saved-messages">Close</div>
      </div>
      {showConfirm && (
        <PurchaseConfirm
          onClose={handleCloseConfirm}
          tonAmount={
            selectedCoin ? selectedCoin.amount / 1000 + " TON" : "0 TON"
          }
          onWalletClick={() => console.log("Wallet clicked")}
          onTonConnectClick={() => console.log("TON Connect clicked")}
        />
      )}
    </div>
  );
};
