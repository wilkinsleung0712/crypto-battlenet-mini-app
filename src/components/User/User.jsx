import React, { useState, useEffect } from "react";

export const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 确保 Telegram Web App API 已经准备好
    if (window.Telegram.WebApp) {
      Telegram.WebApp.ready();

      const userData = Telegram.WebApp.initDataUnsafe?.user;
      if (userData) {
        // 使用 Telegram 数据
        setUser({
          username: userData.first_name, // 假设用户的名字存在于 first_name 字段
          id: userData.id,
          points: userData.points, // 假设点数信息包含在 userData
        });
      } else {
        // 没有找到用户数据，设置 Dummy User
        setUser({
          username: "Dummy User",
          id: "dummyuser",
          points: 3559,
        });
      }
    }
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      {user ? (
        <div>
          <h2>User: {user.username}</h2>
          <p>Points: {user.points}</p>
          {/* 可以显示更多用户信息 */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};
