import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import "../Auth/Auth.css";
import "../ErrorMessage/ErrorMessage.css";

function Register({
  onRegister,
  isLoading,
  isErrorOnRegister,
  setIsErrorOnRegister,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameInputValidity, setNameInputValidity] = useState(false);
  const [emailInputValidity, setEmailInputValidity] = useState(false);
  const [passwordInputValidity, setPasswordInputValidity] = useState(false);

  const [isNameInputErr, setNameInputErr] = useState(false);
  const [isEmailInputErr, setEmailInputErr] = useState(false);
  const [isPasswordInputErr, setPasswordInputErr] = useState(false);

  const isValid =
    nameInputValidity && emailInputValidity && passwordInputValidity;
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setIsErrorOnRegister(false);
  }, []);

  useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    if (nameInputValidity && passwordInputValidity && emailInputValidity) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

    setIsErrorOnRegister(false);
  }, [email, password, name]);

  function handleNameChange(evt) {
    setName(evt.target.value);
    setNameInputValidity(evt.target.validity.valid);

    if (!evt.target.validity.valid) {
      setNameInputErr(true);
    } else {
      setNameInputErr(false);
    }
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setEmailInputValidity(evt.target.validity.valid);

    if (!evt.target.validity.valid) {
      setEmailInputErr(true);
    } else {
      setEmailInputErr(false);
    }
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    setPasswordInputValidity(evt.target.validity.valid);

    if (!evt.target.validity.valid) {
      setPasswordInputErr(true);
    } else {
      setPasswordInputErr(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(name, email, password);
  }

  const registerCaption = (
    <p className="auth__text">
      Уже зарегистрированы?
      <Link className="auth__link" to="/signin">
        Войти
      </Link>
    </p>
  );

  return (
    <Auth
      title={"Добро пожаловать!"}
      caption={registerCaption}
      disabled={disabled}
      onSubmit={handleSubmit}
      isErrorOnRegister={isErrorOnRegister}
    >
      <label className="auth__form-label">Имя</label>
      <input
        className="auth__input"
        type="text"
        name="name"
        required
        minLength="2"
        maxLength="15"
        onChange={handleNameChange}
        disabled={isLoading}
      />
      <span className="auth__form-error">
        {isNameInputErr ? "Имя должно содержать от 2 до 12 символов" : ""}
      </span>
      <label className="auth__form-label">E-mail</label>
      <input
        className="auth__input"
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        onChange={handleEmailChange}
        disabled={isLoading}
        required
      />
      <span className="auth__form-error">
        {isEmailInputErr ? "Необходимо ввести корректный email" : ""}
      </span>
      <label className="auth__form-label">Пароль</label>
      <input
        className="auth__input"
        type="password"
        name="password"
        minLength="4"
        maxLength="12"
        onChange={handlePasswordChange}
        disabled={isLoading}
        required
      />
      <span className="auth__form-error">
        {isPasswordInputErr
          ? "Пароль должен содержать от 2 до 12 символов"
          : ""}
      </span>
      <button
        className={`${isValid ? "auth__submit" : "auth__submit_disabled"}`}
        type="submit"
        disabled={disabled}
      >
        Зарегистрироваться
      </button>
    </Auth>
  );
}

export default Register;
