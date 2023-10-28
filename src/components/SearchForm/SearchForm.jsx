import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  values,
  errors,
  isValid,
  isInputValid,
  handleChange,
  onSubmit,
}) {
  

  return (
    <Form name='search' onSubmit={onSubmit} isValid={isValid}>
      <Input
        name='search'
        type='search'
        placeholder='Фильм'
        values={values}
        errors={errors}
        isValid={isValid}
        isInputValid={isInputValid}
        handleChange={handleChange}
        required
      />
      <FilterCheckbox
        values={values}
        errors={errors}
        isValid={isValid}
        isInputValid={isInputValid}
        handleChange={handleChange}
      />
    </Form>
  );
}

export default SearchForm;
