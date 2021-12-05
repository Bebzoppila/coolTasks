import { useMemo, useState, useCallback } from "react";

type filterReturn<T> = [
  Array<T>,
  ({}: { field: keyof T; value: string }) => void
];

function useFilter<T extends object>(data: Array<T>, field: keyof T): filterReturn<T> {
  type filterStateType = { field: keyof T; value: string; }
  const [activeFields, setActivField] = useState<filterStateType>({field: field,value: "",});

  const strTolover = (str: string) => {
    return str.toLowerCase();
  };

  const filterFromDate = useCallback(() => {
    if (!activeFields.field) {
      return data;
    }

    return data.filter((dataItem) =>
      strTolover(String(dataItem[activeFields.field])).includes(
        strTolover(activeFields.value)
      )
    );
  }, [activeFields.value,activeFields.field, data]);

  const updateFilter = ({ field, value }: { field: keyof T; value: string }) =>
    setActivField({
      ...activeFields,
      field,
      value,
    });

  const memoFilter = useMemo(() => filterFromDate(), [filterFromDate]);

  return [memoFilter, updateFilter];
}

export default useFilter;
