import { Link } from 'react-router-dom';

function NavigationAuth() {
  return (
    <nav className='header__nav header__nav_auth'>
      <ul className='header__list'>
        <li className='header__item'>
          <Link
            className='header__link header__link_auth link-hover'
            to='/signup'
          >
            Регистрация
          </Link>
        </li>
        <li className='header__item'>
          <Link
            className='header__link header__link_auth link-hover'
            to='/signin'
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationAuth;
