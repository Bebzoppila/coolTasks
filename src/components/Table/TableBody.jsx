const TableBody = ({ bodyContent }) => {
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
