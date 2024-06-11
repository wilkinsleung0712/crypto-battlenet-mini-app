import React from "react";
import PropTypes from "prop-types";
import "./ToastItem.style.css";

export const ToastItem = ({ message, onClose }) => (
  <div className="toast-item">
    <div className="toast-message">{message}</div>
    <button className="toast-close" onClick={onClose}>X</button>
  </div>
);

ToastItem.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
