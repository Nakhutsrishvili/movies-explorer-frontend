import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, image, onClose, message }) {
  function closeByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      onClick={closeByOverlay}
      className={`popup ${isOpen && "popup_opened"}`}
    >
      <div className="popup__container">
        <img className="popup__image" src={image} alt="Картинка" />
        <p className="popup__text">{message}</p>
        <button
          type="button"
          className="popup__button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
