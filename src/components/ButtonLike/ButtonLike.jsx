import { useLocation } from 'react-router-dom';
import './ButtonLike.css';
import { BASE_URL_MOVIES } from '../../utils/constants';

export default function ButtonLike({ card, onCardLike, onCardDelete, isLike }) {
  const { pathname } = useLocation();

  const handleLike = () => {
    onCardLike({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: BASE_URL_MOVIES + card.image.url,
      trailerLink: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: BASE_URL_MOVIES + card.image.formats.thumbnail.url,
      movieId: card.id,
    }, isLike);
  };

  return (
    <>
      {
        {
          '/movies': (
            <button
              type='button'
              className={`movies__like-icon button-hover ${
                isLike ? 'movies__like-icon_active' : ''
              }`}
              onClick={handleLike}
            />
          ),
          '/saved-movies': (
            <button
              type='button'
              className='movies__like-icon button-hover movies__like-icon_delete'
              onClick={() => onCardDelete(card)}
            />
          ),
        }[pathname]
      }
    </>
  );
}
