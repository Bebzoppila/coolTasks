import { FC } from "react";
import { TableItemType } from "../../types/store"
type TableBodyProps = {
  bodyContent: Array<TableItemType>
}

const TableBody:FC<TableBodyProps> = ({ bodyContent }) => {
  return (
    <tbody>
      {bodyContent.map((bodyItem) => (
        <tr key={bodyItem.id}>
          <td>{bodyItem.userId}</td>
          <td>{bodyItem.id}</td>
          <td>{bodyItem.title}</td>
          <td>{bodyItem.body}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
