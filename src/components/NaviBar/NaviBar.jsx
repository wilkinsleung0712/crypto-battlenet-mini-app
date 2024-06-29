// @ts-ignore
import PropTypes from "prop-types";
// @ts-ignore
import React, { useEffect } from "react";
import { Plus2 } from "../../icons/Plus2";
import { QuestionIcon } from "../../icons/Question";
import { Link } from "react-router-dom";
import "./style.css";
import { useSnapshot } from "valtio";
import { resetUserManager, setUserInfo, userManager } from "../../models/user";
import { getUserById } from "../../api/api";

export const NaviBar = ({ className, vector = "/img/vector-4.svg" }) => {
  const { id, username, points } = useSnapshot(userManager);

  const getUserInfo = (id) => {
    getUserById(id)
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((error) => console.error("Failed to get user info", error));
  }

  useEffect(() => {
    // Check if Telegram Web App API is available and ready
    // @ts-ignore
    if (window.Telegram?.WebApp) {
      // @ts-ignore
      Telegram.WebApp.ready();

      // @ts-ignore
      const telegramUserData = Telegram.WebApp.initDataUnsafe?.user;
      console.log('telegramUserData', telegramUserData)
      if (telegramUserData) {
        setUserInfo({
          id: telegramUserData.id,
          userName: telegramUserData.first_name, // assuming first_name is the field for username
          points: telegramUserData.points,
        });
      } else {
        console.error("Telegram user data is not available. Hello stranger.");
        // resetUserManager();
        if (!id) return;
        getUserInfo(id);
      }
    } else {
      console.error("Telegram WebApp not available. Hello stranger.");
      // resetUserManager();
      if (!id) return;
      getUserInfo(id);
    }
  }, [id]);

  return (
    <div className={`navi-bar ${className}`}>
      <div className="frame">
        <div className="div" />
        <div className="frame-2">
          <div className="text-sm text-white font-semibold">{username.slice(0, 15)}</div>
          <img className="plus ml-2" alt="Image" src="/img/coin.png" />
          <div className="text-wrapper">{points}</div>
          <Link to="/purchase">
            <Plus2 className="plus" color="#1AAE70" />
          </Link>
        </div>
      </div>
      <div className="flex gap-2 relative">
        <Link
          to="/history-list"
          className="rounded-[99px] bg-[#1c1c1e] relative w-[30px] h-[30px] flex items-center justify-center"
        >
          <QuestionIcon />
        </Link>
        <Link
          to="/help"
          className="rounded-[99px] bg-[#1c1c1e] relative w-[30px] h-[30px] flex items-center justify-center"
        >
          <img className="vector" alt="Vector" src={vector} />
        </Link>
      </div>
    </div>
  );
};

NaviBar.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
};
