import "./Auth.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Auth({
  title,
  children,
  caption,
  onSubmit,
  isErrorOnRegister,
  isErrorOnLogin,
}) {
  return (
    <div className="auth">
      <Link to="/">
        <img src={logo} alt="Логотип" className="logo auth__logo" />
      </Link>
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" onSubmit={onSubmit}>
        {children}
      </form>
      <div className="auth__wrapper">
        {(isErrorOnRegister || isErrorOnLogin) && (
          <p className="auth__form-error">
            При отправке данных на сервер произошла ошибка, проверьте
            корректность данных и попробуйте еще раз
          </p>
        )}
        {caption}
      </div>
    </div>
  );
}

export default Auth;
