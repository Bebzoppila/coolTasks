import { useState } from "react";

type CustomSelectType<T> = {
  option: Array<T>;
  activIntex: number;
  updateSelect: (indx: number) => void;
};

function CustomSelect<T>({
  option,
  activIntex,
  updateSelect,
}: CustomSelectType<T>) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  const setNewSelect = (indx: number) => {
    updateSelect(indx);
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
        {option[activIntex] || "Выберите значение"}
      </div>
      <div className={selecIsOpenClass()}>
        {option.map((optionElement, indx) => (
          <div
            key={String(optionElement)}
            onClick={() => setNewSelect(indx)}
            aria-selected={
              option[activIntex] === optionElement ? "true" : "false"
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
