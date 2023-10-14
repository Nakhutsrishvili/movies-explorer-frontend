import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ isCheckboxChecked, onSubmitCheckbox }) {
  return (
    <div className="checkbox-content">
      <input
        className="checkbox-content__input"
        id={`checkbox__check`}
        type="checkbox"
        onChange={onSubmitCheckbox}
        checked={isCheckboxChecked}
      />
      <label className="checkbox-content__label" htmlFor={`checkbox__check`}>
        <span className={`checkbox-content__switch-button`} />
      </label>
      <p className="checkbox-content__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
