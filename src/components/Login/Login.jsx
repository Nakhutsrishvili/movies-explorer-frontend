import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useForm";
import "./Login.css";
import Auth from "../Auth/Auth";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { errors, isValid, isInputValid, handleChange } = useFormValidation(
    values,
    setValues
  );

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values.email, values.password);
  };

  return (
    <section className="auth">
      <h1 className="auth__title">Рады видеть!</h1>
      <Auth
        values={values}
        errors={errors}
        isValid={isValid}
        isInputValid={isInputValid}
        handleChange={handleChange}
        titleButton="Войти"
        onSubmit={onSubmit}
      />
      <p className="auth__text">
        Ещё не зарегистрированы?&ensp;
        <Link className="auth__link link-hover" to="/signup">
          Регистрация
        </Link>
      </p>
    </section>
  );
};

export default Login;
