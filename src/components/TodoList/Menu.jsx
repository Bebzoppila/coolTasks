import useInput from "../../hooks/useInput";

const Menu = ({ addTodo }) => {
  const [inputValue, updateInputValue] = useInput('')

  const onBtnClick = () => {
    addTodo(inputValue);
    updateInputValue("");
  };

  return (
    <div>
      <input onChange={(event) => updateInputValue(event.target.value)} value={inputValue} type="text" />
      <button onClick={onBtnClick}>Добавить</button>
    </div>
  );
};

export default Menu;
