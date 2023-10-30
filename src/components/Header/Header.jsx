import './Header.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationSite from './NavigationSite/NavigationSite';
import { useEffect, useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function Header({ isLoggedIn }) {
  const [isBurgerMenu, setBurgerMenu] = useState(false);
  const [isOpenBurger, setOpenBurger] = useState(false);
  const { pathname } = useLocation();
  const className =
    pathname === '/signup' || pathname === '/signin'
      ? 'header header_auth'
      : pathname === '/'
      ? 'header header_landing'
      : 'header';

  useEffect(() => {
    const handleChangeDevice = () => {
      if (window.innerWidth > 920) {
        setBurgerMenu(false);
      } else setBurgerMenu(true);
    };

    handleChangeDevice();
    window.addEventListener('resize', handleChangeDevice);

    return () => {
      window.removeEventListener('resize', handleChangeDevice);
    };
  }, [isBurgerMenu]);

  const handleClose = () => {
    setOpenBurger(false);
  };

  const handleClickMenu = () => {
    setOpenBurger(true);
  };

  return (
    <header className={className}>
      <div className='header__container'>
        <Link to='/'>
          <Logo className='header__link link-hover' />
        </Link>
        {pathname !== '/signup' &&
          pathname !== '/signin' &&
          (isLoggedIn ? (
            isBurgerMenu ? (
              <>
                <button
                  className='burger__menu button-hover'
                  type='button'
                  onClick={handleClickMenu}
                />
                {isOpenBurger && (
                  <BurgerMenu
                    isOpenBurger={isOpenBurger}
                    isLoggedIn={isLoggedIn}
                    isBurgerMenu={isBurgerMenu}
                    handleClose={handleClose}
                  />
                )}
              </>
            ) : (
              <NavigationSite
                isLoggedIn={isLoggedIn}
                isBurgerMenu={isBurgerMenu}
              />
            )
          ) : (
            <NavigationAuth isLoggedIn={isLoggedIn} />
          ))}
      </div>
    </header>
  );
}

export default Header;
