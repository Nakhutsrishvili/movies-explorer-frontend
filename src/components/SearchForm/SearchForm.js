import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearch, onSubmitCheckbox, isChecked, setIsChecked }) {
  const [inputValue, setInputValue] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [searchError, setSearchError] = useState({
    errorMessage: "",
    isValid: true,
  });

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("searchWord") !== 0 &&
      localStorage.getItem("searchWord") !== ""
    ) {
      console.log(localStorage.getItem("searchWord"));
      console.log(isCheckboxChecked);
      onSearch(localStorage.getItem("searchWord"), isChecked);
    }
  }, [location]);

  useEffect(() => {
    searchError.isValid && setSearchError({ errorMessage: "", isValid: true });
  }, []);

  function handleInputChange(evt) {
    setInputValue(evt.target.value);

    if (evt.target.value.length === 0) {
      setSearchError({
        isValid: evt.target.validity.valid,
        errorMessage: "Введите ключевое слово",
      });
    } else {
      setSearchError({
        isValid: evt.target.validity.valid,
        errorMessage: " ",
      });
    }
  }

  function handleCheckboxClick() {
    setIsCheckboxChecked(!isCheckboxChecked);
    onSubmitCheckbox(!isCheckboxChecked);
    setIsChecked(!isCheckboxChecked);
  }

  function handleSubmitForm(evt) {
    evt.preventDefault();

    if (!inputValue) {
      return setSearchError({
        isValid: false,
        errorMessage: "Введите ключевое слово",
      });
    }
    onSearch(inputValue, isCheckboxChecked);
  }

  return (
    <div className="search-form-content">
      <form className="search-form" onSubmit={handleSubmitForm} noValidate>
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          value={inputValue || ""}
          onChange={handleInputChange}
        />
        <button className="search-form__button" type="submit"></button>
      </form>
      <span className="search-form__error">{searchError.errorMessage}</span>
      <FilterCheckbox
        isCheckboxChecked={isCheckboxChecked}
        onSubmitCheckbox={handleCheckboxClick}
      />
    </div>
  );
}

export default SearchForm;
