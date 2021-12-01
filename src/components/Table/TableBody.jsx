const TableBody = ({ bodyContent }) => {

  return (
    <tbody>
      {bodyContent.map((bodyItem) => (
        <tr key={bodyItem.id}>
          <td>{bodyItem.id}</td>
          <td>{bodyItem.name}</td>
          <td>{bodyItem.username}</td>
          <td>{bodyItem.email}</td>
          <td>{bodyItem.address.street}</td>
          <td>{bodyItem.phone}</td>
          <td>{bodyItem.website}</td>
          <td>{bodyItem.company.name}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody