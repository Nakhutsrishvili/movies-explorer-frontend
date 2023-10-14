import "./BurgerMenu.css";

function BurgerMenu({ onButtonClick }) {
  return (
    <button
      className="burger-menu"
      title="Открыть меню"
      type="button"
      onClick={onButtonClick}
    />
  );
}

export default BurgerMenu;
