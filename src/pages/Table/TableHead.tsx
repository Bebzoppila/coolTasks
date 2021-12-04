import { FC } from "react";

type TableHeaderProps = {
  headValues:Array<string>,
}

const TableHead:FC<TableHeaderProps> = ({ headValues }) => {
  return (
    <thead>
      <tr>
          {headValues.map(headItem=> <th key={headItem}>{headItem}</th>)}
      </tr>
    </thead>
  );
};

export default TableHead;
