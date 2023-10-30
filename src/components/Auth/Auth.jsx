import { useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import './Auth.css';

const Auth = ({
  openCard,
  openProfile,
  openAvatar,
  openDelete,
  onCardClick,
  onCardLike,
  cards,
  isLoading,
  isCheckToken,
  onSubmit,
  errorMessage,
  values,
  errors,
  isValid,
  isInputValid,
  handleChange,
  titleButton,
}) => {
  const { pathname } = useLocation();

  return (
    <Form
      name='auth'
      titleButton={titleButton}
      isValid={isValid}
      onSubmit={onSubmit}
    >
      {pathname === '/signup' && (
        <Input
          name='forename'
          type='text'
          values={values}
          errors={errors}
          isValid={isValid}
          isInputValid={isInputValid}
          handleChange={handleChange}
          placeholder='Виталий'
          minLength='2'
          maxLength='30'
          required
        >
          Имя
        </Input>
      )}
      <Input
        name='email'
        type='email'
        values={values}
        errors={errors}
        isValid={isValid}
        isInputValid={isInputValid}
        handleChange={handleChange}
        placeholder='pochta@yandex.ru'
        required
      >
        E-mail
      </Input>
      <Input
        name='password'
        type='password'
        values={values}
        errors={errors}
        isValid={isValid}
        isInputValid={isInputValid}
        handleChange={handleChange}
        placeholder='••••••••••••••'
        required
        minLength='6'
      >
        Пароль
      </Input>
    </Form>
  );
};

export default Auth;
