import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MOVIE_DURATION } from "../../utils/config";
import "./MoviesCard.css";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, savedMovies }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  function checkForSaved() {
    const result = savedMovies.find((obj) => {
      return obj.nameRU === movie.nameRU;
    });
    if (result !== undefined) return setIsSaved(true);
  }

  useEffect(() => {
    checkForSaved();
  }, []);

  function handleAddClick() {
    console.log(movie);
    onSaveMovie(movie);
    setIsSaved(!isSaved);
  }

  function handleDeleteClick() {
    const result = savedMovies.find((obj) => {
      return obj.nameRU === movie.nameRU;
    });
    onDeleteMovie(result._id);
    setIsSaved(!isSaved);
  }

  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <a href={movie.trailerLink} className="movie-card__link" target="blank">
          <img
            className="movie-card__img"
            src={
              movie.image.url
                ? "https://api.nomoreparties.co/" + movie.image.url
                : movie.image
            }
            alt={movie.nameRU}
          />
        </a>
        <div className="movie-card__info">
          <p className="movie-card__name">{movie.nameRU}</p>
          <p className="movie-card__duration"> {MOVIE_DURATION(movie)}</p>
        </div>
        {location.pathname === "/movies" ? (
          <button
            className={
              isSaved ? "movie-card__button-saved" : "movie-card__button"
            }
            type="button"
            onClick={isSaved ? handleDeleteClick : handleAddClick}
          >
            {!isSaved ? "Сохранить" : ""}
          </button>
        ) : (
          <button
            className="movie-card__button-del"
            type="button"
            onClick={handleDeleteClick}
          ></button>
        )}
      </div>
    </li>
  );
}
export default MoviesCard;
