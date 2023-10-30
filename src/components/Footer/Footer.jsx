import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__description'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__wrapper'>
          <p className='footer__copyright'>&copy; 2023</p>
          <ul className='footer__list'>
            <li className='footer__item'>
              <Link
                className='footer__link link-hover'
                to='https://practicum.yandex.ru'
                target='_blank'
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className='footer__item'>
              <Link
                className='footer__link link-hover'
                to='https://github.com/Nakhutsrishvili'
                target='_blank'
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
