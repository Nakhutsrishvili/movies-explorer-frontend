import "./NavTab.css";

function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li>
          <a className="nav-tab__link" href="#about-project">
            О проекте
          </a>
        </li>
        <li>
          <a className="nav-tab__link" href="#techs">
            Технологии
          </a>
        </li>
        <li>
          <a className="nav-tab__link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
