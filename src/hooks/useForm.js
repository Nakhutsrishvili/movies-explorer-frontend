import { useCallback, useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

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
      return { ...oldValid, [name]: valid };
    });

    setValues((oldValues) => {
      if (type === 'checkbox') {
        return { ...oldValues, [name]: checked };
      }
      return { ...oldValues, [name]: value };
    });

    setErrors((oldErrors) => {
      return { ...oldErrors, [name]: validationMessage };
    });

    setIsValid(form.checkValidity());
  }
console.log(isValid);
  const reset = useCallback((data = {}) => {
    setValues(data);
    setErrors({});
    setIsValid(false);
    setIsInputValid({});
  }, []);

  useEffect(() => {
    if (pathname === '/profile') {
      setValues((values) => ({
        ...values,
        forename: currentUser.forename,
        email: currentUser.email,
      }));
    }
  }, [currentUser]);

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
