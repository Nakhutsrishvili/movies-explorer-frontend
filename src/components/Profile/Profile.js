import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BurgerPopup from "../BurgerPopup/BurgerPopup";
import Header from "../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  setCurrentUser,
  setLoggedIn,
  onUpdateUser,
  isUpdateProfileErr,
  setAllMovies,
  setSavedMovies,
  setFilteredMovies,
  isUpdateProfileDone,
  setIsUpdateProfileErr,
  setIsUpdateProfileDone,
  isLoading,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailInputValidity, setEmailInputValidity] = useState(true);
  const [nameInputValidity, setNameInputValidity] = useState(true);
  const [isEmaiInputErr, setEmailInputErr] = useState(false);
  const [isNameInputErr, setNameInputErr] = useState(false);

  const [isApiErrorShown, setIsApiErrorShown] = useState(false);
  const [buttonDisabled, setButtomDisabled] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [isBurgerPopupOpened, setIsBurgerPopupOpened] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setIsUpdateProfileDone(false);
  }, [location.pathname]);

  useEffect(() => {
    setName(currentUser.name || "");
    setEmail(currentUser.email || "");
  }, [currentUser]);

  useEffect(() => {
    isLoading ? setButtomDisabled(true) : setButtomDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    if (isUpdateProfileErr) {
      setIsApiErrorShown(true);
      setIsEditMode(true);
      setButtomDisabled(true);
    } else {
      setIsApiErrorShown(false);
    }
  }, [isUpdateProfileErr]);

  useEffect(() => {
    if (
      nameInputValidity &&
      emailInputValidity &&
      (!(name === currentUser.name) || !(email === currentUser.email))
    ) {
      setButtomDisabled(false);
    } else {
      setButtomDisabled(true);
    }

    setIsUpdateProfileDone(false);
    setIsUpdateProfileErr(false);
  }, [email, name]);

  function handleEditButton() {
    setIsEditMode(true);
  }

  function handleButtonClick() {
    setIsEditMode(false);
  }

  function handleChangeName(evt) {
    setIsApiErrorShown(false);
    setName(evt.target.value);
    setNameInputValidity(evt.target.validity.valid);

    if (!evt.target.validity.valid) {
      setNameInputErr(true);
    } else {
      setNameInputErr(false);
    }
  }

  function handleChangeEmail(evt) {
    setIsApiErrorShown(false);
    setEmail(evt.target.value);
    setEmailInputValidity(evt.target.validity.valid);

    if (!evt.target.validity.valid) {
      setEmailInputErr(true);
    } else {
      setEmailInputErr(false);
    }
  }

  function handleSubmitButton(evt) {
    evt.preventDefault();

    if (!(name === currentUser.name) || !(email === currentUser.email)) {
      onUpdateUser(name, email);
      setIsEditMode(false);
    } else if (name === currentUser.name) {
      setNameInputErr(true);
    } else if (email === currentUser.email) {
      setEmailInputErr(true);
    }
  }

  function signOut() {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
    setCurrentUser({});
    setAllMovies(null);
    setSavedMovies(null);
    setFilteredMovies(null);
  }

  function handleBurgerPopupClick() {
    setIsBurgerPopupOpened(true);
  }

  function closePopup() {
    setIsBurgerPopupOpened(false);
  }

  const nameErrorMessage = nameInputValidity
    ? "Введите имя"
    : "Введите новое корректное имя";

  const emailErrorMessage = emailInputValidity
    ? "Введите email"
    : "Введите новый корректный email";

  const profileLinks = (
    <>
      <button
        onClick={handleEditButton}
        className="profile-button"
        type="button"
      >
        Редактировать
      </button>
      <Link className="profile__exit-link" onClick={signOut} to="/">
        Выйти из аккаунта
      </Link>
    </>
  );

  const profileButton = (
    <>
      <span className="auth__form-error">
        {isApiErrorShown && "Произошла ошибка, попробуйте еще раз"}
      </span>
      <button
        disabled={buttonDisabled}
        className={
          buttonDisabled ? "profile-button-disabled" : "profile-button"
        }
        type="submit"
      >
        Сохранить
      </button>
    </>
  );

  return (
    <>
      <Header
        navType={"loggedInLinks"}
        onButtonClick={handleBurgerPopupClick}
      />
      <BurgerPopup isOpen={isBurgerPopupOpened} onButtonClick={closePopup} />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}</h2>
        <form className="profile__form" onSubmit={handleSubmitButton}>
          <label className="profile__label">
            <p className="profile__label-text">Имя</p>
            <input
              className="profile__input"
              type="text"
              name="name"
              pattern="[a-zA-Zа-яА-ЯёЁ\-\s]+"
              required
              minLength="2"
              maxLength="20"
              value={name}
              disabled={!isEditMode || isLoading}
              onChange={handleChangeName}
            />
          </label>
          <span className="auth__form-error">
            {isNameInputErr ? nameErrorMessage : ""}
          </span>
          <label className="profile__label">
            <p className="profile__label-text">Почта</p>
            <input
              className="profile__input"
              type="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={email}
              disabled={!isEditMode || isLoading}
              onChange={handleChangeEmail}
            />
          </label>
          <span className="auth__form-error">
            {isEmaiInputErr ? emailErrorMessage : ""}
          </span>
          {isEditMode ? profileButton : profileLinks}
        </form>
      </section>
    </>
  );
}

export default Profile;
