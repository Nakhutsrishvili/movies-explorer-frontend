import Popup from "../Popup";
import "./InfoTooltip.css";

export default function InfoTooltip({ name, titleText, isOpen, onClose }) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <div
        className={`popup__image ${
          name === "error" ? "popup__image_type_error" : ""
        }`}
      />
      <h2 className="popup__title">{titleText}</h2>
    </Popup>
  );
}