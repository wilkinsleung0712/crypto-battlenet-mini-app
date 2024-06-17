import React, { useEffect, useState, useRef } from "react";
import "./PastRound.style.css";

export const PastRound = ({ contestId }) => {
    const [contest, setContest] = useState({
        live: false,
        lastPrice: "N/A",
        priceChange: "N/A",
        lockedPrice: "N/A",
        prizePool: "N/A",
        roundId: "N/A",
        timeLeft: new Date() // 初始化为当前时间
    });
    const intervalId = useRef(null);

    useEffect(() => {
        const fetchContestById = async () => {
            try {
                const response = await fetch(`/contests/${contestId}`);
                const contentType = response.headers.get("content-type");

                if (!response.ok || !contentType.includes("application/json")) {
                    // console.error("Failed to fetch or non-JSON response received");
                    setDefaultContest();
                    return;
                }

                const data = await response.json();
                const createdAt = new Date(data.createdAt || new Date());
                const deadline = new Date(createdAt.getTime() + 5 * 60000);
                setContest({
                    ...data,
                    timeLeft: deadline
                });
            } catch (error) {
                console.error("Error fetching contest:", error);
                setDefaultContest();
            }
        };

        fetchContestById();
    }, [contestId]);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            updateTimer();
        }, 1000);

        return () => clearInterval(intervalId.current);
    }, [contest.timeLeft]);

    const updateTimer = () => {
        setContest(prevContest => {
            const now = new Date();
            const timeDiff = prevContest.timeLeft - now;
            if (timeDiff <= 0) {
                clearInterval(intervalId.current);
                return { ...prevContest, live: false, timeLeft: new Date() }; // 如果时间结束，更新竞赛状态为非活跃
            }
            return { ...prevContest, timeLeft: new Date(prevContest.timeLeft.getTime() - 1000) }; // 每秒递减一秒
        });
    };

    const setDefaultContest = () => {
        const mockCreatedAt = new Date();
        const mockDeadline = new Date(mockCreatedAt.getTime() + 5 * 60000);
        setContest({
            live: true,
            lastPrice: "$100.00",
            priceChange: "+$1.00",
            lockedPrice: "$99.00",
            prizePool: "$1000",
            roundId: "15",
            timeLeft: mockDeadline,
            createdAt: mockCreatedAt
        });
    };

    const formatTimeLeft = () => {
        const now = new Date();
        const timeDiff = contest.timeLeft - now;
        if (timeDiff <= 0) {
            return "0m 0s";
        }
        const minutes = Math.floor(timeDiff / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);
        return `${minutes}m ${seconds}s`;
    };

    return (
        <div className="past-round">
            <div className="header">
                <div className="status">
                    <span className="live-status">{contest.live ? "Live" : "Not Live"} #{contest.roundId}</span>
                    <span className="time-left">{formatTimeLeft()}</span>
                </div>
                <div className="price-info">
                    <div className="last-price">
                        <span>H2O Last Price</span>
                        <span className="price">{contest.lastPrice}</span>
                        <span className="change">{contest.priceChange}</span>
                    </div>
                    <div className="locked-price">
                        <span>Locked Price</span>
                        <span className="price">{contest.lockedPrice}</span>
                    </div>
                    <div className="prize-pool">
                        <span>Prize Pool</span>
                        <span className="prize">{contest.prizePool}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
