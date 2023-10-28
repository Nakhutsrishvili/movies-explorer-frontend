import { NavLink } from 'react-router-dom';

function NavigationSite({ isLoggedIn, isBurgerMenu, className, isOpenBurger }) {
  const classNameItem = `header__item ${
    isBurgerMenu && isOpenBurger && 'header__item_burger'
  }`;
  return (
    <nav className={`header__nav header__nave_site ${className ?? ''}`}>
      <ul
        className={`header__list ${isLoggedIn ? 'header__list_active' : ''} ${
          isBurgerMenu ? 'header__nav_burger' : ''
        }`}
      >
        {isBurgerMenu && (
          <li className={classNameItem}>
            <NavLink className='header__link link-hover' to='/'>
              Главная
            </NavLink>
          </li>
        )}
        <li className={classNameItem}>
          <NavLink className='header__link link-hover' to='/movies'>
            Фильмы
          </NavLink>
        </li>
        <li className={classNameItem}>
          <NavLink className='header__link link-hover' to='/saved-movies'>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className={`header__item_profile ${classNameItem}`}>
          <NavLink
            className='header__link header__link_profile link-hover'
            to='/profile'
          >
            Аккаунт
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationSite;
