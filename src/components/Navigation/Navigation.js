import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../Navigation/Navigation.css";
import "../Header/Header.css";

function Navigation({ type, loggedIn }) {
  const location = useLocation();

  const MainPageLinks = (
    <nav className="header__navigation">
      <NavLink to="/signup" className="header__register">
        Регистрация
      </NavLink>
      <NavLink to="/signin">
        <button className="header__signin" type="button">
          Войти
        </button>
      </NavLink>
    </nav>
  );

  const AfterLoggedIn = (
    <nav className="navigation">
      <div className="navigation__links-movies">
        <NavLink
          className={`navigation__link ${loggedIn && "navigation__link-white"}
                        ${
                          location.pathname === "/movies" &&
                          "navigation__link-active"
                        }`}
          to="/movies"
        >
          Фильмы
        </NavLink>
        <NavLink
          className={`navigation__link ${loggedIn && "navigation__link-white"}
                        ${
                          location.pathname === "/saved-movies" &&
                          "navigation__link-active"
                        }`}
          to="/saved-movies"
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <NavLink to="/profile">
        <button className="navigation__link-account" type="button">
          <p className="navigation__account-text">Аккаунт</p>
        </button>
      </NavLink>
    </nav>
  );

  return (
    (type === "mainPage" && MainPageLinks) ||
    (type === "loggedInLinks" && AfterLoggedIn)
  );
}

export default Navigation;
