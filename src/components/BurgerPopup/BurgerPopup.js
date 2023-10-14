import { NavLink, Link } from "react-router-dom";
import "./BurgerPopup.css";

function BurgerPopup({ isOpen, onButtonClick }) {
  return (
    <section className={`burger-popup ${isOpen && "burger-popup_opened"}`}>
      <div className="burger-popup__content">
        <button
          className="burger-popup__close"
          type="button"
          onClick={onButtonClick}
        />
        <ul className="burger-popup__links">
          <li>
            <NavLink
              to="/"
              className="burger-popup__link"
              onClick={onButtonClick}
            >
              Главная
            </NavLink>
          </li>
          <li className="burger-popup__link-active">
            <NavLink
              to="/movies"
              className="burger-popup__link"
              onClick={onButtonClick}
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved-movies"
              className="burger-popup__link"
              onClick={onButtonClick}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className="burger-popup__profile">
          <Link
            to="/profile"
            className="burger-popup__profile-link"
            onClick={onButtonClick}
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BurgerPopup;
