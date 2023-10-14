import "./Header.css";
import logo from "../../images/logo.svg";
import { useLocation, Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

function Header({ navType, onButtonClick, loggedIn }) {
  const location = useLocation();

  return (
    <header className={location.pathname === "/" ? "header" : "header-black"}>
      <div className="navigation-links">
        {loggedIn ? (
          <img className="logo" src={logo} alt="Логотип" />
        ) : (
          <>
            <Link to="/">
              <img className="header-logo" src={logo} alt="Логотип" />
            </Link>
            <BurgerMenu onButtonClick={onButtonClick} />
          </>
        )}
        <Navigation loggedIn={loggedIn} type={navType} />
      </div>
    </header>
  );
}

export default Header;
