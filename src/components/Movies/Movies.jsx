import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import useFormValidation from "../../hooks/useForm";
import "./Movies.css";
import { useSearch } from "../../hooks/useSearch";
import { useEffect, useState } from "react";
import { DEVICE } from "../../utils/constants";

const Movies = ({ ...props }) => {
  const [values, setValues] = useState({ search: "", short: false });
  const { errors, isValid, isInputValid, handleChange } = useFormValidation(
    values,
    setValues
  );
  const { movies, handldeSearch, isLoading, message } = useSearch(
    values,
    setValues
  );
  const [maxMovies, setMaxMovies] = useState(DEVICE.desctop.maxMovies);
  const [moreMovies, setMoreMovies] = useState(DEVICE.desctop.moreMovies);
  const [device, setDevice] = useState(DEVICE.desctop.device);
  const [isShowButton, setShowButton] = useState(false);
  console.log(values);
  useEffect(() => {
    const handleChangeDevice = () => {
      if (window.innerWidth >= DEVICE.desctop.width) {
        setDevice(DEVICE.desctop.device);
      } else if (window.innerWidth >= DEVICE.tablet.width) {
        setDevice(DEVICE.tablet.device);
      } else {
        setDevice(DEVICE.mobile.device);
      }
    };
    handleChangeDevice();
    window.addEventListener("resize", handleChangeDevice);

    return () => {
      window.removeEventListener("resize", handleChangeDevice);
    };
  }, [device]);

  useEffect(() => {
    setMaxMovies(DEVICE[device].maxMovies);
    setMoreMovies(DEVICE[device].moreMovies);
  }, [device, movies]);

  useEffect(() => {
    if (!!movies) {
      if (!(movies.length <= maxMovies)) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  }, [movies, maxMovies]);

  const handleClickMore = () => {
    setMaxMovies((maxMovies) => maxMovies + moreMovies);
  };

  return (
    <>
      <section className="search">
        <SearchForm
          values={values}
          errors={errors}
          isValid={isValid}
          isInputValid={isInputValid}
          handleChange={handleChange}
          onSubmit={handldeSearch}
        />
      </section>
      <MoviesCardList
        movies={movies.slice(0, maxMovies)}
        isLoading={isLoading}
        message={message}
        handleClickMore={handleClickMore}
        isShowButton={isShowButton}
        {...props}
      />
    </>
  );
};

export default Movies;
