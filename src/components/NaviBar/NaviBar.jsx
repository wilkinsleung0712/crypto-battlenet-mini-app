// @ts-ignore
import PropTypes from "prop-types";
// @ts-ignore
import React, { useEffect } from "react";
import { Plus2 } from "../../icons/Plus2";
import { QuestionIcon } from "../../icons/Question";
import { Link } from "react-router-dom";
import "./style.css";
import { useSnapshot } from "valtio";
import { setUserFromTg, setUserInfo, userManager } from "../../models/user";
import { registerUser } from "../../api/api";

export const NaviBar = ({ className, vector = "/img/vector-4.svg" }) => {
  const { id, username, points } = useSnapshot(userManager);

  useEffect(() => {
    // Check if Telegram Web App API is available and ready
    // @ts-ignore
    if (window.Telegram?.WebApp) {
      // @ts-ignore
      Telegram.WebApp.ready();

      // @ts-ignore
      const telegramUserData = Telegram.WebApp.initDataUnsafe?.user;
      if (telegramUserData) {
        setUserFromTg({
          id: telegramUserData.id,
          username: telegramUserData.first_name,
        })
      } else {
        console.error("Telegram user data is not available. Hello stranger.");
      }
    } else {
      console.error("Telegram WebApp not available. Hello stranger.");
    }
  }, []);

  useEffect(() => {
    registerUser({
      username,
      telegramId: id,
    }).then((res)=> {
      console.log('register user', res?.data);
      if (res.data) {
        setUserInfo(res.data)
      }
    }).catch((error) => console.error("Register error", error));

  }, [id])

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
