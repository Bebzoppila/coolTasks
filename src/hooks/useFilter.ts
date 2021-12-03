import { useMemo, useState } from "react";
import { TableItemType } from "../types/store"
type useFilterType = Array<TableItemType>
type filterStateType = {
  field: 'userId' | "id" | 'title' | "body"
  value:string
}

function useFilter(data: useFilterType){
  const [filterState, setFilterState] = useState<filterStateType>({ field: "id", value: "" });

  const strTolover = (str: string) => {
    return str.toLowerCase();
  };
  
  
  const filterFromDate = () => {
    if (!filterState.field) {
      return data;
    }
    console.log(filterState);
    return data.filter((dataItem) =>
      strTolover(String(dataItem[filterState.field])).includes(
        strTolover(filterState.value)
      )
    );
  };
  const updateFilter = ({field, value}:filterStateType) =>
    setFilterState({ ...filterState, field, value });

  const memoFilter = useMemo(() => filterFromDate(), [filterState, data]);

  return [memoFilter, updateFilter];


}

export default useFilter;
