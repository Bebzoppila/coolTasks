import { FC } from "react";
import useInput from "../../hooks/useInput";

interface MenuProps {
  addTodo: (str: string) => void
}


const Menu:FC<MenuProps> = ({ addTodo }) => {
  const [inputValue, updateInputValue] = useInput('')

  const onBtnClick = () => {
    addTodo(inputValue);
    updateInputValue("");
  };

  return (
    <div>
      <input onChange={updateInputValue} value={inputValue} type="text" />
      <button onClick={onBtnClick}>Добавить</button>
    </div>
  );
};

export default Menu;
