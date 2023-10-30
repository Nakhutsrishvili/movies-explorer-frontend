import './MoviesCard.css';
import { memo, useContext } from 'react';
import ButtonLike from '../../ButtonLike/ButtonLike';
import { getDuration } from '../../../utils/utils';
import { BASE_URL_MOVIES, PATH } from '../../../utils/constants';
import { useLocation } from 'react-router-dom';
import SavedMoviesContext from '../../../contexts/SavedMoviesContext';

const MoviesCard = memo(({ card, onCardLike, onCardDelete }) => {
  const savedMovies = useContext(SavedMoviesContext);
  const { pathname } = useLocation();
  const onCardClick = () => {
    window.open(card.trailerLink, '_blank', 'noopener noreferrer');
  };
  const isLike =
    pathname === PATH.MOVIES &&
    savedMovies.some((item) => item.movieId === card.id);

  return (
    <article className='movies__element'>
      <div className='movies__wrapper'>
        <h2 className='movies__title'>{card.nameRU}</h2>
        <p className='movies__duration'>{getDuration(card.duration)}</p>
        <ButtonLike
          card={card}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
          isLike={isLike}
        />
      </div>
      <img
        src={
          pathname === PATH.MOVIES
            ? BASE_URL_MOVIES + '/' + card.image.url
            : card.image
        }
        alt={`Изображение ${card.nameRU}`}
        className='movies__image button-hover'
        onClick={onCardClick}
        tabIndex={0}
      />
    </article>
  );
});

export default MoviesCard;
