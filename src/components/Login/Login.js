import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import "../Auth/Auth.css";

function Login({ onLogin, isLoading, setIsErrorOnLogin, isErrorOnLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInputValidity, setEmailInputValidity] = useState(false);
  const [passwordInputValidity, setPasswordInputValidity] = useState(false);
  const [isEmailInputErr, setEmailInputErr] = useState(false);
  const [isPasswordInputErr, setPasswordInputErr] = useState(false);

  const isValid = emailInputValidity && passwordInputValidity;
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setIsErrorOnLogin(false);
  }, [setIsErrorOnLogin]);

  useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    if (passwordInputValidity && emailInputValidity) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailInputValidity, passwordInputValidity]);

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setEmailInputValidity(evt.target.validity.valid);
    setIsErrorOnLogin(false);

    if (!evt.target.validity.valid) {
      setEmailInputErr(true);
    } else {
      setEmailInputErr(false);
    }
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    setPasswordInputValidity(evt.target.validity.valid);
    setIsErrorOnLogin(false);

    if (!evt.target.validity.valid) {
      setPasswordInputErr(true);
    } else {
      setPasswordInputErr(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin(email, password);
  }

  const loginCaption = (
    <p className="auth__text">
      Еще не зарегистрированы?
      <Link className="auth__link" to="/signup">
        Регистрация
      </Link>
    </p>
  );

  return (
    <Auth
      title={"Рады видеть!"}
      caption={loginCaption}
      disabled={disabled}
      onSubmit={handleSubmit}
      isErrorOnLogin={isErrorOnLogin}
    >
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
        {isEmailInputErr ? "Введите корректный email" : ""}
      </span>
      <label className="auth__form-label">Пароль</label>
      <input
        className="auth__input"
        type="password"
        name="password"
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
        Войти
      </button>
    </Auth>
  );
}

export default Login;
