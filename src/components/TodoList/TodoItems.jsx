const TodoItems = ({ todos, updateComplited }) => {
  
  return (
    <ul>
      {todos.map(({ id, title, completed }) => (
        <div key={id}>
          <li>{title}</li>
          <input
            onChange={() => updateComplited(id)}
            checked={completed}
            type="checkbox"
          />
        </div>
      ))}
    </ul>
  );
};

export default TodoItems;
