import { useLocation } from 'react-router-dom';
import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import { PATH } from '../../utils/constants';

const MoviesCardList = ({
  movies,
  isLoading,
  message,
  handleSaveMovies,
  handleDeleteMovies,
  isShowButton,
  handleClickMore,
}) => {
  const { pathname } = useLocation();

  return (
    <section className='movies'>
      {isLoading ? (
        <Preloader />
      ) : movies && movies.length !== 0 ? (
        <ul className='movies__list'>
          {movies?.map((data) => {
            return (
              <li className='movies__item' key={data.id || data.movieId}>
                <MoviesCard
                  card={data}
                  onCardLike={handleSaveMovies}
                  onCardDelete={handleDeleteMovies}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <span className='movies__error'>{message}</span>
      )}
      {pathname === PATH.MOVIES && isShowButton ? (
        <div className='movies__container'>
          <button
            className='movies__button-more button-hover'
            onClick={handleClickMore}
            type='button'
          >
            Ещё
          </button>
        </div>
      ) : (
        <div className='movies__container' />
      )}
    </section>
  );
};

export default MoviesCardList;
