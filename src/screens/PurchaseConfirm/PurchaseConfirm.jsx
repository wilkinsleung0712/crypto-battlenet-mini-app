import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { CloseOne1 } from "../../icons/CloseOne1";
import "./style.css";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";

const defaultTx = (walletAddress) => ({
  validUntil: Math.floor(Date.now() / 1000) + 600,
  messages: [
    {
      // 从环境变量获取接收者地址。
      address: walletAddress,
      // 以nanoTON为单位发送的金额。
      amount: '',  // 初始为空，稍后将基于tonAmount更新
      // （可选）以boc base64格式的状态初始化。
      stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
      // （可选）以boc base64格式的有效载荷。
      payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
    },
  ],
});

export const PurchaseConfirm = ({
                                  onClose,
                                  tonAmount,
                                }) => {
  // 使用环境变量初始化tx
  const [tx, setTx] = useState(defaultTx(process.env.REACT_APP_WALLET_ADDRESS));
  const wallet = useTonWallet();
  const [tonConnectUi] = useTonConnectUI();

  // 使用useEffect来更新tx的amount值
  useEffect(() => {
    const newTx = {
      ...tx,
      messages: tx.messages.map(message => ({
        ...message,
        amount: tonAmount  // 更新amount为tonAmount
      }))
    };
    setTx(newTx);
  }, [tonAmount, tx]); // 依赖项包括tonAmount和tx，当这些变化时更新

  // const onChange = useCallback((value) => setTx(value.updated_src), []);

  return (
      <div className="purchase-confirm-overlay" onClick={onClose}>
        <div className="purchase-confirm" onClick={(e) => e.stopPropagation()}>
          <div className="frame-43">
            <div className="text-wrapper-13">Purchase</div>
            <CloseOne1 className="close-one-1" onClick={onClose} />
          </div>
          <div className="frame-44">
            <div className="text-wrapper-14">{tonAmount}</div>
          </div>
          <div className="frame-45">
            <div className="frame-46">
              <img className="TON" alt="Frame" src="/img/frame-307265132.png"/>
              {wallet ? (
                  <button className="saved-messages-2" onClick={() => tonConnectUi.sendTransaction(tx)}>
                    Send transaction
                  </button>
              ) : (
                  <button className="saved-messages-2" onClick={() => tonConnectUi.openModal()}>Connect Your Wallet</button>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

PurchaseConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  tonAmount: PropTypes.string.isRequired,
};
