import './Popup.css';

export default function Popup({ name, children, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
      onMouseDown={onClose}
    >
      <div
        className='popup__container'
        onMouseDown={(evt) => evt.stopPropagation()}
      >
        <button
          type='button'
          className='popup__close-icon button-hover'
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}
