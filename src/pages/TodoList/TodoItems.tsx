import { TodoItemType } from "../../types/store";

interface todoItemProps {
  todos: Array<TodoItemType>;
  updateComplited: (id: number) => void;
  deleteTodoItem: (id: number) => void;
}

const TodoItems = ({ todos, updateComplited, deleteTodoItem}: todoItemProps) => {
  return (
    <ul>
      {todos.map(({ id, title, completed }) => (
        <div key={id}>
          <li>{title} <button onClick={() => deleteTodoItem(id)}>Удалить</button></li>
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
