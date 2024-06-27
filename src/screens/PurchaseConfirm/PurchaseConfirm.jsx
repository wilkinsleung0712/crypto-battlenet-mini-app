import React, {useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { CloseOne1 } from "../../icons/CloseOne1";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { topUpCoins } from '../../api/api';  // 确保正确导入API函数
import "./style.css";

const defaultTx = (walletAddress, amount) => ({
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [
        {
            address: walletAddress,
            amount: amount,  // 初始化时设置金额
            stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
            payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
        },
    ],
});

export const PurchaseConfirm = ({
                                    onClose,
                                    tonAmount,
                                    userId  // 假设userId是作为属性传递给组件的
                                }) => {
    const [tx, setTx] = useState(defaultTx(process.env.REACT_APP_WALLET_ADDRESS, tonAmount));
    const wallet = useTonWallet();
    const [tonConnectUi] = useTonConnectUI();

    useEffect(() => {
        setTx(defaultTx(process.env.REACT_APP_WALLET_ADDRESS, tonAmount));
    }, [tonAmount]); // 当tonAmount变化时，更新tx

    const handleSendTransaction = async () => {
        try {
            const transactionResult = await tonConnectUi.sendTransaction(tx);
            if (transactionResult && transactionResult.success) {
                await topUpCoins(userId, tx.messages[0].amount);
                console.log('Coins topped up successfully');
            } else {
                console.error('Transaction failed:', transactionResult);
            }
        } catch (error) {
            console.error('Transaction error:', error);
        }
    };

    return (
        <div className="purchase-confirm-overlay" onClick={onClose}>
            <div className="purchase-confirm" onClick={(e) => e.stopPropagation()}>
                <div className="frame-43">
                    <div className="text-wrapper-13">Purchase</div>
                    <CloseOne1 className="close-one-1" onClick={onClose} />
                </div>
                <div className="frame-44">
                    <div className="text-wrapper-14">{tonAmount} TON</div>
                </div>
                <div className="frame-45">
                    <div className="frame-46">
                        <img className="TON" alt="Frame" src="/img/frame-307265132.png"/>
                        {wallet ? (
                            <button className="saved-messages-2" onClick={handleSendTransaction}>
                                Send transaction
                            </button>
                        ) : (
                            <button className="saved-messages-2" onClick={() => tonConnectUi.openModal()}>
                                Connect Your Wallet
                            </button>
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
    userId: PropTypes.string.isRequired  // 确保传入userId
};
