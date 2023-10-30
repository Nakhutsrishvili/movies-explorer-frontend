import Input from '../../Form/Input/Input';
import './FilterCheckbox.css';

function FilterCheckbox({ values, errors, isValid, isInputValid, handleChange }) {
  return (
    <Input
      name='short'
      type='checkbox'
      values={values}
      errors={errors}
      isValid={isValid}
      isInputValid={isInputValid}
      handleChange={handleChange}
    >
      Короткометражки
    </Input>
  );
}

export default FilterCheckbox;
