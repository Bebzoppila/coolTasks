import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import CustomSelect from "./CustomSelect";
import { filterStateType } from "../../hooks/useFilter"
import { TableItemField } from "../../types/store"
interface tableMenuProps{
  updateFilter: ({}:filterStateType) => void,
  filterField:  Array<TableItemField>
}

const TableMenu = ({ updateFilter, filterField }:tableMenuProps) => {
  const [inputValue, updateInputValue] = useInput("");
  const [select, updateSelect] = useState<number>(1);

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
      <CustomSelect updateSelect={(indx) => updateSelect(indx)} activIntex={select} option={filterField} />
      <input onChange={updateInputValue} value={inputValue} type="text" />
      <button onClick={() => newFilter()}>Поиск</button>
    </div>
  );
};

export default TableMenu;
