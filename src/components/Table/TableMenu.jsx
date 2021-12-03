import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import CustomSelect from "./CustomSelect";
const TableMenu = ({ updateFilter, filterField }) => {
  const [inputValue, updateInputValue] = useInput("");
  const [select, updateSelect] = useState(filterField[0]);

  const newFilter = () => {
    updateFilter({field:select, value:inputValue})
  }

  useEffect(() => {
    if (inputValue.length === 0) {
      newFilter()
    }
  }, [inputValue]);

  

  return (
    <div className="menu">
      <CustomSelect updateSelect={updateSelect} selectValue={select} option={filterField} />
      <input onChange={updateInputValue} value={inputValue} type="text" />
      <button onClick={() => newFilter()}>Поиск</button>
    </div>
  );
};

export default TableMenu;
