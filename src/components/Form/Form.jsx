import { useContext } from "react";
import "./Form.css";
import SendContext from "../../contexts/SendContext";
import { useLocation } from "react-router-dom";

export default function Form({
  name,
  titleButton,
  children,
  isValid,
  onSubmit,
  handleSignout,
  handleFormActivated,
  isFormActive,
  isChanged,
}) {
  const isSend = useContext(SendContext);
  const { pathname } = useLocation();
  return (
    <>
      <form name={name} onSubmit={onSubmit} className={`form form_${name}`}>
        {children}
        {pathname === "/profile" ? (
          isFormActive && (
            <button
              disabled={!isValid || isSend || isChanged}
              className={`form__submit button-hover form__submit_${name} ${
                isSend ? "form__submit_loading" : ""
              } ${isValid ? "" : "form__submit_disable"}`}
              type="onSubmit"
            >
              {isSend ? "" : titleButton || ""}
            </button>
          )
        ) : (
          <button
            disabled={!isValid || isSend}
            className={`form__submit button-hover form__submit_${name} ${
              isSend ? "form__submit_loading" : ""
            } ${isValid ? "" : "form__submit_disable"}`}
            type="onSubmit"
          >
            {isSend ? "" : titleButton || ""}
          </button>
        )}
      </form>
      {pathname === "/profile" && !isFormActive && (
        <>
          <button
            className="form__button button-hover form__button_activated"
            onClick={handleFormActivated}
            type="button"
          >
            Редактировать
          </button>
          <button
            className="form__button button-hover"
            onClick={handleSignout}
            type="button"
          >
            Выйти из аккаунта
          </button>
        </>
      )}
    </>
  );
}
