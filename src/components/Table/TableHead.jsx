const TableHead = ({ headValues }) => {
  return (
    <thead>
      <tr>
          {headValues.map(headItem=> <th key={headItem}>{headItem}</th>)}
      </tr>
    </thead>
  );
};

export default TableHead;
