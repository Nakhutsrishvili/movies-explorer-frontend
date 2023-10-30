import NavigationSite from '../NavigationSite/NavigationSite';
import './BurgerMenu.css';

const BurgerMenu = ({
  isLoggedIn,
  isBurgerMenu,
  handleClose,
  isOpenBurger,
}) => {
  return (
    <div className='burger'>
      <NavigationSite
        isLoggedIn={isLoggedIn}
        isBurgerMenu={isBurgerMenu}
        className='burger__nav'
        isOpenBurger={isOpenBurger}
      />
      <button
        className='burger__close button-hover'
        aria-label='Закрыть меню'
        type='button'
        onClick={handleClose}
      />
    </div>
  );
};

export default BurgerMenu;
