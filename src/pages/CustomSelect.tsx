import { useState } from "react";

type CustomSelectType<T> = {
  option: Array<T>;
  activSelect: T;
  updateSelect: (newSelect: T) => void;
};

function CustomSelect<T>({
  option,
  activSelect,
  updateSelect,
}: CustomSelectType<T>) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  const setNewSelect = (newSelect: T) => {
    updateSelect(newSelect);
    setSelectIsOpen(false);
  };

  const selecIsOpenClass = () =>
    "select__conten" + (selectIsOpen ? " select__conten--active" : " ");

  return (
    <div role="listbox" aria-labelledby="listbox1label" className="select">
      <div
        onClick={() => setSelectIsOpen(!selectIsOpen)}
        className="active__select"
      >
        {activSelect || "Выберите значение"}
      </div>
      <div className={selecIsOpenClass()}>
        {option.map((optionElement) => (
          <div
            key={String(optionElement)}
            onClick={() => setNewSelect(optionElement)}
            aria-selected={
              activSelect === optionElement ? "true" : "false"
            }
            role="option"
            className="select__option"
          >
            {optionElement}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomSelect;
