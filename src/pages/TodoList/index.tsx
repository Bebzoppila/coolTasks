import Menu from "./Menu";
import TodoItems from "./TodoItems";
import { addTodo, updateComplitedTodo, deleteTodo } from "../../store/slices/TodoSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { TodoItemType } from "../../types/store"
import { FC } from "react";

const TodoList:FC = () => {
  const { todos, erors } = useAppSelector((store) => store.todos);
  const dispatcher = useAppDispatch();

  const addNewTodo = (text:string) => {
    let newTodoItem:TodoItemType = { id: Date.now(), completed: false, title: text, userId:Math.floor(Math.random() * 11) };
    dispatcher(addTodo(newTodoItem));
  };

  const updateTodo = (id:number) => {
    dispatcher(updateComplitedTodo(id));
  };

  const deleteTodoItem = (id:number) => {
    dispatcher(deleteTodo(id))
  }

  return (
    <div className="todo-list">
      <Menu addTodo={addNewTodo} />
      {erors ? (
        <h2>Произошла ошибка при загрузке данных</h2>
      ) : (
        <TodoItems deleteTodoItem={deleteTodoItem} updateComplited={updateTodo} todos={todos} />
      )}
    </div>
  );
};

export default TodoList;
