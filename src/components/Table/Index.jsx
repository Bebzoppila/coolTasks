import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import TableHead from "./TableHead";
import TableBody from "./TableBody"
const Table = () => {
  const {table, tableTitile} = useSelector((store) => store.table);
  const dispatcher = useDispatch()
  console.log(table);
  return (
    <div>
      <p>{tableTitile}</p>
      <table id="customers">
        <TableHead headValues={Object.keys(table[0] || {})} />
        <TableBody bodyContent={table} />
      </table>
    </div>
  );
};

export default Table;
