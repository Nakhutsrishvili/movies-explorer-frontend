import { useCallback, useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";
import { EMAIL_REGEX, MESSAGE, NAME_REGEX } from "../utils/constants";

export default function useForm(values, setValues) {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState({});
  const currentUser = useContext(CurrentUserContext);
 const { pathname } = useLocation();

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    const validationMessage = evt.target.validationMessage;
    const valid = evt.target.validity.valid;
    const form = evt.target.form;
    const checked = evt.target.checked;
    const type = evt.target.type;

    setIsInputValid((oldValid) => {
      if (type === "email" && !EMAIL_REGEX.test(value)) {
        return { ...oldValid, [name]: false };
      } else if (name === "forename" && !NAME_REGEX.test(value)) {
        return { ...oldValid, [name]: false };
      } else {
        return { ...oldValid, [name]: valid };
      }
    });

    setValues((oldValues) => {
      if (type === "checkbox") {
        return { ...oldValues, [name]: checked };
      }
      return { ...oldValues, [name]: value };
    });

    setErrors((oldErrors) => {
      if (type === "email" && !EMAIL_REGEX.test(value)) {
        return { ...oldErrors, [name]: MESSAGE.EMAIL_ER };
      } else if (name === "forename" && !NAME_REGEX.test(value)) {
        return { ...oldErrors, [name]: MESSAGE.NAME_ER };
      } else {
        return { ...oldErrors, [name]: validationMessage };
      }
    });

    setIsValid(() => {
      if (
        (type === "email" && !EMAIL_REGEX.test(value)) ||
        (name === "forename" && !NAME_REGEX.test(value))
      ) {
        return false;
      } else {
        return form.checkValidity();
      }
    });
  }

  const reset = useCallback((data = {}) => {
    setValues(data);
    setErrors({});
    setIsValid(false);
    setIsInputValid({});
  }, []);

  return {
    values,
    errors,
    isValid,
    isInputValid,
    handleChange,
    reset,
    setValues,
  };
}
