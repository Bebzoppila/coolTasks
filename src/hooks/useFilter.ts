import { useMemo, useState, useCallback } from "react";

type filterReturn<T> = [
  Array<T>,
  ({}: { field: keyof T; value: string }) => void
];

const useFilter: <T extends object>(
  data: Array<T>,
  field: keyof T
) => filterReturn<T> = (data, field) => {

  type dataItem = keyof typeof data[0];
  type filterStateType = { field: dataItem; value: string };
  
  const [activeFields, setActivField] = useState<filterStateType>({
    field: field,
    value: "",
  });

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
  }, [activeFields.value, activeFields.field, data]);

  const updateFilter = ({ field, value }: { field: dataItem; value: string }) =>
    setActivField({
      ...activeFields,
      field,
      value,
    });

  const memoFilter = useMemo(() => filterFromDate(), [filterFromDate]);

  return [memoFilter, updateFilter];
};

export default useFilter;
