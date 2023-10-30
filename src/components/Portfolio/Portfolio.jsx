import './Portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link link-hover'
            to='https://how-to-learn-liard.vercel.app/'
            target='_blank'
          >
            Статичный сайт
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link link-hover'
            to='https://russian-travel-delta.vercel.app/'
            target='_blank'
          >
            Адаптивный сайт
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='portfolio__link link-hover'
            to='https://react-mesto-auth-p3ir.vercel.app'
            target='_blank'
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
