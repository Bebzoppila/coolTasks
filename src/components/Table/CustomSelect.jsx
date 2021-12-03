import { useState } from "react";

const CustomSelect = ({ option, selectValue, updateSelect }) => {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  const setNewSelect = (text) => {
    updateSelect(text);
    setSelectIsOpen(false);
  };
  
  const selecIsOpenClass = () =>
    "select__conten" + (selectIsOpen ? " select__conten--active" : " ");

  return (
    <div role="listbox" aria-labelledby="listbox1label" className="select">
      <div  onClick={() => 
            setSelectIsOpen(!selectIsOpen)}
            className="active__select">
        {selectValue || 'Выберите значение'}
      </div>
      <div className={selecIsOpenClass()}>
        {
          option.map((optionElement) => (
            <div
              key={optionElement}
              onClick={() => setNewSelect(optionElement)}
              aria-selected={selectValue === optionElement ? "true" : "false"}
              role="option"
              className="select__option"
            >
              {optionElement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
