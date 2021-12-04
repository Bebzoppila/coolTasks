import { TodoItemType } from "../../types/store";

interface todoItemProps {
  todos: Array<TodoItemType>;
  updateComplited: (id: number) => void;
}

const TodoItems = ({ todos, updateComplited }: todoItemProps) => {
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
