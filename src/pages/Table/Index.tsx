import "./style.css";
import { useAppSelector } from "../../hooks/redux"
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableMenu from "./TableMenu";
import useFilter from "../../hooks/useFilter";
import { FC } from "react";

const Table:FC = () => {
  const { table, tableTitile } = useAppSelector((store) => store.table);

  const tableCoulumName = Object.keys(table[0] || {}) as Array<keyof typeof table[0]>;
  
  const [filterDate, updateFilter] = useFilter<typeof table[0]>(table, tableCoulumName[2]);

  return (
    <div className="table">
      <p>{tableTitile}</p>
      <TableMenu filterField={tableCoulumName} updateFilter={updateFilter} />
      <table id="customers">
        <TableHead headValues={tableCoulumName} />
        <TableBody bodyContent={filterDate} />
      </table>
    </div>
  );
};

export default Table;
