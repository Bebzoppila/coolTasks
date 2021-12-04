import { useMemo, useState } from "react";

export type filterStateType = {
  field: number;
  value: string;
};

type useFilterReturn<T> = [Array<T>, ({}: filterStateType) => void];

function useFilter<T extends object, U extends keyof T>(
  data: Array<T>,
  fields: Array<U>
): useFilterReturn<T> {
  const filterFields = fields;
  const [activeFields, setActivField] = useState<filterStateType>({
    field: 1,
    value: "",
  });

  const strTolover = (str: string) => {
    return str.toLowerCase();
  };

  const filterFromDate = () => {
    if (!activeFields.field) {
      return data;
    }

    return data.filter((dataItem) =>
      strTolover(String(dataItem[filterFields[activeFields.field]])).includes(
        strTolover(activeFields.value)
      )
    );
  };

  const updateFilter = ({ field, value }: filterStateType) =>
    setActivField({
      ...activeFields,
      field: Math.min(Math.max(1, field), filterFields.length),
      value,
    });

  const memoFilter = useMemo(
    () => filterFromDate(),
    [activeFields.field, data]
  );

  return [memoFilter, updateFilter];
}

export default useFilter;
