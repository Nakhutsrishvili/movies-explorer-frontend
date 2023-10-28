import { useContext, useEffect, useState } from 'react';
import { SHORT_DURATION, MESSAGE, PATH } from '../utils/constants';
import { getMovies } from '../utils/MoviesApi';
import { useLocation } from 'react-router-dom';
import SavedMoviesContext from '../contexts/SavedMoviesContext';

export const useSearch = (values, setValues) => {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const { pathname } = useLocation();
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const savedMovies = useContext(SavedMoviesContext);

  const filterMovies = (moviesList) => {
    const flteredMovies = moviesList.filter(
      (movie) =>
        movie.nameRU
          .trim()
          .toLowerCase()
          .includes(values.search.trim().toLowerCase()) ||
        movie.nameEN
          .trim()
          .toLowerCase()
          .includes(values.search.trim().toLowerCase())
    );
    if (!values.short) {
      return flteredMovies;
    } else {
      return flteredMovies.filter((movie) => movie.duration <= SHORT_DURATION);
    }
  };

  useEffect(() => {
    if ('allMovies' in localStorage && pathname === PATH.MOVIES) {
      setAllMovies(JSON.parse(localStorage.allMovies));
      setValues(JSON.parse(localStorage.values));
      search();
    } else if (pathname === PATH.SAVED) {
      setMovies(filterMovies(savedMovies));
    }
  }, []);

  const search = () => {
    console.log(123);
    if (pathname === PATH.MOVIES) {
      localStorage.values = JSON.stringify(values);
      setMovies(filterMovies(allMovies));
    } else {
      setMovies(filterMovies(savedMovies));
    }
  };

  useEffect(() => {
    search();
  }, [values]);

  useEffect(() => {
    if ('allMovies' in localStorage && movies.length === 0) {
      setMessage(MESSAGE.NO_MOVIES);
    }
  }, [movies]);

  const handldeSearch = async (evt) => {
    evt.preventDefault();
    setMessage('');
    if (!('allMovies' in localStorage) && pathname === PATH.MOVIES) {
      try {
        setLoading(true);
        localStorage.values = JSON.stringify(values);
        const allMovies = await getMovies();
        setAllMovies(allMovies);
        localStorage.allMovies = JSON.stringify(allMovies);
        setMovies(filterMovies(allMovies));
        setLoading(false);
        return;
      } catch (err) {
        setLoading(false);
        setMessage(MESSAGE.serverError);
      }
    }
    search();
  };

  return { movies, handldeSearch, isLoading, message, setMovies };
};
