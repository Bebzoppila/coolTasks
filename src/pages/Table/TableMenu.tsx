import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import CustomSelect from "./CustomSelect";
import { TableItemType } from "../../types/store";

type updateFilterType = ({}:{
  field: keyof TableItemType;
  value: string;
}) => void 

type tableMenuProps =  {
  updateFilter: updateFilterType
  filterField: Array<keyof TableItemType>;
}

const TableMenu = ({ updateFilter, filterField }: tableMenuProps) => {
  const [inputValue, updateInputValue] = useInput("");
  const [select, updateSelect] = useState<keyof TableItemType>("id");

  const newFilter = () => {
    updateFilter({ field: select, value: inputValue });
  };

  useEffect(() => {
    if (inputValue.length === 0) {
      newFilter();
    }
  }, [inputValue]);

  return (
    <div className="menu">
      <CustomSelect
        updateSelect={(indx) => updateSelect(indx)}
        activSelect={select}
        option={filterField}
      />
      <input onChange={updateInputValue} value={inputValue} type="text" />
      <button onClick={() => newFilter()}>Поиск</button>
    </div>
  );
};

export default TableMenu;
