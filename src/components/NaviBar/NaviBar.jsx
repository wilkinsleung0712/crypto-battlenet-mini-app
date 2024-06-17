import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Plus2 } from "../../icons/Plus2";
import { Link } from "react-router-dom";
import "./style.css";

export const NaviBar = ({
                            className,
                            groupClassName,
                            group = "/img/group-48095409.png",
                            vector = "/img/vector-4.svg",
                        }) => {
    const [user, setUser] = useState({ username: 'Dummy User', points: 3559 });

    useEffect(() => {
        // Check if Telegram Web App API is available and ready
        if (window.Telegram?.WebApp) {
            Telegram.WebApp.ready();

            const telegramUserData = Telegram.WebApp.initDataUnsafe?.user;
            if (telegramUserData) {
                setUser({
                    username: telegramUserData.first_name, // assuming first_name is the field for username
                    points: telegramUserData.points
                });
            } else {
                console.error('Telegram user data is not available. Using Dummy User.');
                setUser({ username: 'Dummy User', points: 3559 });
            }
        } else {
            console.error('Telegram WebApp not available. Using Dummy User.');
            setUser({ username: 'Dummy User', points: 3559 });
        }
    }, []);

    return (
        <div className={`navi-bar ${className}`}>
            <div className="frame">
                <div className="div" />
                <div className="frame-2">
                    <img className="plus" alt="Image" src="/img/image-1850-1.png" />
                    <div className="text-wrapper">{user.points}</div>
                    <Link to="/add-coins">
                        <Plus2 className="plus" color="#1AAE70" />
                    </Link>
                </div>
            </div>
            <div className="frame-3">
                <Link to="/some-page" className="frame-4">
                    <div className="ellipse" />
                    <img className={`group ${groupClassName}`} alt="Group" src={group} />
                </Link>
                <Link to="/help" className="frame-4">
                    <div className="ellipse" />
                    <img className="vector" alt="Vector" src={vector} />
                </Link>
            </div>
        </div>
    );
};

NaviBar.propTypes = {
    className: PropTypes.string,
    groupClassName: PropTypes.string,
    group: PropTypes.string,
    vector: PropTypes.string,
};
