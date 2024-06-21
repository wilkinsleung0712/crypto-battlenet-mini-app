// ContestComponent.jsx
import React, { useState, useEffect } from "react";
import { registerForContest, getContestById, placeBet } from "../../api/api"; // 确保这里的路径指向你的API文件

export const Contest = () => {
  const [contest, setContest] = useState(null);

  useEffect(() => {
    // 示例：加载比赛ID为1的比赛信息
    getContestById(1)
      .then(setContest)
      .catch((error) => console.error("Error fetching contest", error));
  }, []);

  const handleRegisterContest = (contestData) => {
    registerForContest(contestData)
      .then(setContest)
      .catch((error) => console.error("Error registering contest", error));
  };

  const handlePlaceBet = (contestId, roundId, betData) => {
    placeBet(contestId, roundId, betData)
      .then((response) => console.log("Bet placed", response.data))
      .catch((error) => console.error("Error placing bet", error));
  };

  return (
    <div>
      <h1>Contest Management</h1>
      {contest ? (
        <div>
          <h2>Contest: {contest.content}</h2>
          {/* 添加更多比赛信息和操作的按钮或展示 */}
        </div>
      ) : (
        <p>Loading contest data...</p>
      )}
    </div>
  );
};
