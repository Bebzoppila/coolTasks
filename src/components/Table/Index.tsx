import "./style.css";
import { useAppSelector } from "../../hooks/redux"
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableMenu from "./TableMenu";
import useFilter from "../../hooks/useFilter";

const Table = () => {
  const { table, tableTitile } = useAppSelector((store) => store.table);
  const [filterDate, updateFilter] = useFilter(table);
  
  const tableCoulumName = Object.keys(table[0] || []);

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
