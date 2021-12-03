import Menu from "./Menu.tsx";
import TodoItems from "./TodoItems";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateComplitedTodo } from "../../store/slices/TodoSlice";

const TodoList = () => {
  const { todos, erors } = useSelector((store) => store.todos);
  const dispatcher = useDispatch();

  const addNewTodo = (text) => {
    let newTodoItem = { id: Date.now(), complited: false, title: text };
    dispatcher(addTodo(newTodoItem));
  };

  const updateTodo = (id) => {
    dispatcher(updateComplitedTodo(id));
  };

  return (
    <div className="todo-list">
      <Menu addTodo={addNewTodo} />
      {erors ? (
        <h2>Произошла ошибка при загрузке данных</h2>
      ) : (
        <TodoItems updateComplited={updateTodo} todos={todos} />
      )}
    </div>
  );
};

export default TodoList;
