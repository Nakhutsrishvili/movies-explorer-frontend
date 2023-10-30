import { useContext } from 'react';
import SendContext from '../../../contexts/SendContext';
import './Input.css';
import { useLocation } from 'react-router-dom';
import { PATH } from '../../../utils/constants';

const Input = ({
  name,
  type,
  placeholder,
  minLength,
  maxLength,
  isInputValid,
  values,
  handleChange,
  errors,
  children,
  required,
  isFormActive,
}) => {
  const isSend = useContext(SendContext);
  const { pathname } = useLocation();
  const className = `form__input input-hover  form__input_${name} ${
    isInputValid[name] === undefined || isInputValid[name]
      ? ''
      : 'form__input_invalid'
  }`;

  return (
    <label className={`form__label form__label_${name}`}>
      {
        {
          search: (
            <input
              name={name}
              type={type}
              placeholder={placeholder}
              required={required}
              className={className}
              value={values[name]}
              onChange={handleChange}
              disabled={isSend}
            />
          ),
          checkbox: (
            <input
              name={name}
              type={type}
              required={required}
              className={className}
              checked={values[name]}
              onChange={handleChange}
              disabled={isSend}
            />
          ),
          text: (
            <input
              placeholder={placeholder}
              minLength={minLength ?? ''}
              maxLength={maxLength ?? ''}
              required={required}
              name={name}
              type={type}
              className={className}
              value={values[name]}
              onChange={handleChange}
              disabled={isSend || (pathname === PATH.PROFILE && !isFormActive)}
            />
          ),
          email: (
            <input
              placeholder={placeholder}
              required={required}
              name={name}
              type={type}
              className={className}
              value={values[name]}
              onChange={handleChange}
              disabled={isSend || (pathname === PATH.PROFILE && !isFormActive)}
            />
          ),
          password: (
            <input
              placeholder={placeholder}
              minLength={minLength ?? ''}
              required={required}
              name={name}
              type={type}
              className={className}
              value={values[name]}
              onChange={handleChange}
              disabled={isSend}
            />
          ),
        }[type]
      }
      {children}
      <span className={'form__error'}>{errors[name]}</span>
    </label>
  );
};

export default Input;
