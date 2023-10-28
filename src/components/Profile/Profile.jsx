import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import useForm from '../../hooks/useForm';
import './Profile.css';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Profile = ({
  handleSignout,
  messageError,
  handlsChangeProfile,
  setFormActive,
  isFormActive,
}) => {
  const [values, setValues] = useState({ forename: '', email: '' });
  const { errors, isValid, isInputValid, handleChange } = useForm(
    values,
    setValues
  );
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    handlsChangeProfile(values);
  }

  const handleFormActivated = () => {
    setFormActive(true);
  };

  return (
    <section className='profile'>
      <h1 className='profile__title'>{`Привет, ${currentUser.forename}!`}</h1>
      <Form
        name='profile'
        titleButton='Сохранить'
        handleSignout={handleSignout}
        onSubmit={handleSubmit}
        isFormActive={isFormActive}
        handleFormActivated={handleFormActivated}
        isValid={isValid}
      >
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
          isFormActive={isFormActive}
        >
          Имя
        </Input>
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
          isFormActive={isFormActive}
        >
          E-mail
        </Input>
        <span className='profile__error'>{messageError}</span>
      </Form>
    </section>
  );
};

export default Profile;
