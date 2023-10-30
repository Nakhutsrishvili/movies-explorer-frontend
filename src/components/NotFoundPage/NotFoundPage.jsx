import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import Main from '../Main/Main';

const NotFoundPage = () => {
  return (
    <Main>
      <section className='error'>
        <h1 className='error__title'>404</h1>
        <p className='error__text'>Страница не найдена</p>
        <Link className='error__link link-hover' to={-1}>
          Назад
        </Link>
      </section>
    </Main>
  );
};

export default NotFoundPage;
