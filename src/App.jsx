import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import routers from "./router.js";
import { fetchTable } from "./store/slices/TableSlice";
import { fetchTodo } from "./store/slices/TodoSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react"
function App() {
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchTodo(10));
    dispatcher(fetchTable(20));
  }, [dispatcher]);

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Menu />
      <Routes>
        {routers.map((rout) => (
          <Route key={rout.path} path={rout.path} element={<rout.component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
