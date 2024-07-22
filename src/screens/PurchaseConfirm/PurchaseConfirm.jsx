import React, {useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { CloseOne1 } from "../../icons/CloseOne1";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { toNano } from '@ton/ton'
import { topUpCoins } from '../../api/api';  // 确保正确导入API函数
import "./style.css";

const defaultTx = (walletAddress, amount) => ({
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [
        {
            address: walletAddress,
            // address: "UQDEgIhbx4sAjhbnV4_XI44nq3QFRVbzHtlVOYmIIj11E-LX",
            amount: toNano(amount).toString(),
            // (optional) State initialization in boc base64 format.
            stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
            // (optional) Payload in boc base64 format.
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
            console.log('Transaction Result:', transactionResult);  // 打印响应结果查看结构

            if (transactionResult && transactionResult.success) {
                // 成功发送交易后，尝试充值
                try {
                    await topUpCoins(userId, tx.messages[0].amount);
                    console.log('Coins topped up successfully');
                } catch (topUpError) {
                    // 处理topUpCoins函数可能抛出的错误
                    console.error('Failed to top up coins:', topUpError);
                    // 可以在这里添加更多用户反馈逻辑，比如显示错误消息给用户
                }
            } else {
                console.error('Transaction failed:', transactionResult);
                // 交易失败的额外用户反馈逻辑
            }
        } catch (transactionError) {
            console.error('Transaction error:', transactionError);
            // 可能需要处理网络问题或其他意外情况的用户反馈
        }
    };

    return (
        <div className="purchase-confirm-overlay" onClick={onClose}>
            <div className="purchase-confirm" onClick={(e) => e.stopPropagation()}>
                <div className="frame-43">
                    <div className="text-wrapper-13">Purchase</div>
                    <CloseOne1 className="close-one-1" onClick={onClose}/>
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
    tonAmount: PropTypes.number.isRequired,
    telegramId: PropTypes.string.isRequired  // 确保传入userId
};