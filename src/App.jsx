import TodoList from "./components/TodoList/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodo } from "./store/slices/TodoSlice"
function App() {
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchTodo(10))
  }, [dispatcher]);
  
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
