import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({
  onSearch,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  onSubmitCheckbox,
  preloaderStatus,
  isCheckedInSaved,
  setIsCheckedInSaved,
}) {
  return (
    <>
      <Header navType={"loggedInLinks"} />
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          onSubmitCheckbox={onSubmitCheckbox}
          setIsCheckedInSaved={setIsCheckedInSaved}
        />
        {preloaderStatus ? (
          <Preloader />
        ) : (
          <MoviesCardList
            foundMovies={savedMovies}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            savedMovies={savedMovies}
            isCheckedInSaved={isCheckedInSaved}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
