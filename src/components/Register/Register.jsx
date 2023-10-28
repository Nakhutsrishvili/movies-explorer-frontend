import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useForm';
import './Register.css';
import Auth from '../Auth/Auth';
import { useState } from 'react';

const Register = ({
  openCard,
  openProfile,
  openAvatar,
  openDelete,
  onCardClick,
  onCardLike,
  cards,
  isLoading,
  isCheckToken,
  handleLogin,
  handleRegister,
  errorMessage,
}) => {
  const [values, setValues] = useState({ forename: '', email: '', password: '' });
  const { errors, isValid, isInputValid, handleChange } = useFormValidation(
    values,
    setValues
  );

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values.forename, values.email, values.password);
  };

  return (
    <section className='auth'>
      <h1 className='auth__title'>Добро пожаловать!</h1>
      <Auth
        values={values}
        errors={errors}
        isValid={isValid}
        isInputValid={isInputValid}
        handleChange={handleChange}
        titleButton='Зарегистрироваться'
        onSubmit={onSubmit}
      />
      <p className='auth__text'>
        Уже зарегистрированы?
        <Link className='auth__link link-hover' to='/signin'>
          Войти
        </Link>
      </p>
    </section>
  );
};

export default Register;
