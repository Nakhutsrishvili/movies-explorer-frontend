import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";

function Movies({
  onSearch,
  isApiError,
  foundMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  onSubmitCheckbox,
  preloaderStatus,
  isChecked,
  setIsChecked,
}) {
  const [isBurgerPopupOpened, setIsBurgerPopupOpened] = useState(false);

  function handleBurgerPopupClick() {
    setIsBurgerPopupOpened(true);
  }

  function closePopup() {
    setIsBurgerPopupOpened(false);
  }

  return (
    <>
      <Header
        navType={"loggedInLinks"}
        onButtonClick={handleBurgerPopupClick}
      />
      <BurgerPopup isOpen={isBurgerPopupOpened} onButtonClick={closePopup} />
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          onSubmitCheckbox={onSubmitCheckbox}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
        {preloaderStatus ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isApiError={isApiError}
            foundMovies={foundMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            savedMovies={savedMovies}
            isChecked={isChecked}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
