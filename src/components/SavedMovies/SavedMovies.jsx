import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import useFormValidation from '../../hooks/useForm';
import './SavedMovies.css';
import { useContext, useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';

const SavedMovies = ({ ...props }) => {
  const savedMovies = useContext(SavedMoviesContext);
  const [values, setValues] = useState({ search: '', short: false });
  const { errors, isValid, isInputValid, handleChange } = useFormValidation(
    values,
    setValues
  );
  const { movies, handldeSearch, message, setMovies } = useSearch(
    values,
    setValues
  );

  useEffect(() => {
    if (movies !== savedMovies) {
      setMovies(savedMovies);
    }
  }, [savedMovies]);

  return (
    <>
      <section className='search'>
        <SearchForm
          values={values}
          errors={errors}
          isValid={isValid}
          isInputValid={isInputValid}
          handleChange={handleChange}
          onSubmit={handldeSearch}
        />
      </section>
      <MoviesCardList movies={movies} message={message} {...props} />
    </>
  );
};

export default SavedMovies;
