import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  MOVIES_AT_DESKTOP,
  MOVIES_AT_TABLETS,
  MOVIES_AT_MOBILES,
  ADD_MOVIES_DESKTOP,
  ADD_MOVIES_TABLETS,
  ADD_MOVIES_MOBILES,
  MOVIES_DEFAULT,
  ADD_MOVIES_DEFAULT,
} from "../../utils/config";

function MoviesCardList({
  foundMovies,
  isApiError,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  isChecked,
}) {
  const location = useLocation();

  const [maxMovies, setMaxMovies] = useState(12);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [windowWidth, setWindowWidth] = useState(1280);
  const [isButtonShown, setIsButtonShown] = useState(false);

  useEffect(() => {
    handleSubscribeResize();
  }, [maxMovies]);

  useEffect(() => {
    setMovies();
  }, [maxMovies]);

  useEffect(() => {
    checkWidthOfWindow();
  }, [windowWidth, foundMovies, location]);

  useEffect(() => {
    if (isApiError) {
      setMaxMovies(false);
    } else {
      setMaxMovies(null);
    }
  }, [isApiError]);

  useEffect(() => {
    onSubscribeResize();
    return () => offSubscribeResize();
  }, [windowWidth]);

  function setFoundMovies(count) {
    setMaxMovies(count);
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < count) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);

    if (foundMovies.length < renderedMovies.length) {
      setIsButtonShown(false);
    } else {
      setIsButtonShown(true);
    }
  }

  function checkWidthOfWindow() {
    if (windowWidth >= 1100) {
      setFoundMovies(MOVIES_AT_DESKTOP);
    } else if (windowWidth >= 625) {
      setFoundMovies(MOVIES_AT_TABLETS);
    } else if (windowWidth >= 320) {
      setFoundMovies(MOVIES_AT_MOBILES);
    }
  }

  function handleSubscribeResize() {
    setWindowWidth(window.innerWidth);
  }

  function onSubscribeResize() {
    window.addEventListener("resize", handleSubscribeResize);
  }

  function offSubscribeResize() {
    window.removeEventListener("resize", handleSubscribeResize);
  }

  function setMovies() {
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < maxMovies) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);

    if (foundMovies.length < renderedMovies.length) {
      setIsButtonShown(false);
    } else {
      setIsButtonShown(true);
    }
  }

  function handleButtonClick() {
    if (windowWidth >= 1100) {
      setMaxMovies(maxMovies + ADD_MOVIES_DESKTOP);
    } else if (windowWidth >= 625) {
      setMaxMovies(maxMovies + ADD_MOVIES_TABLETS);
    } else if (windowWidth >= 320) {
      setMaxMovies(maxMovies + ADD_MOVIES_MOBILES);
    } else {
      setMaxMovies(maxMovies + ADD_MOVIES_DEFAULT);
    }
  }

  const moreButtonVisible = (
    <button
      className="movies-card-list__button"
      type="button"
      onClick={handleButtonClick}
    >
      Ещё
    </button>
  );
  const moreButtonHidden = (
    <button className="movies-card-list__button_disbled" type="button"></button>
  );

  return (
    <section className="movies-card-list">
      <p className="movies-card-list__not-found">Фильмы не найдены</p>
      <ul className="movies-card-list__container">
        {renderedMovies
          .filter((item) => {
            if (isChecked) return item.duration <= 41;
            else return item;
          })
          .map((item) => (
            <MoviesCard
              movie={item}
              key={item.id || item._id}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
            />
          ))}
      </ul>
      {renderedMovies.length < foundMovies.length && isButtonShown
        ? moreButtonVisible
        : moreButtonHidden}
    </section>
  );
}

export default MoviesCardList;
