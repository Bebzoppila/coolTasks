import { useState } from "react";

const useInput = (initialState) => {
  const [inputState, setInputState] = useState(initialState);

  const updateInputValue = (text) => {
    setInputState(text.trim());
  };

  return [inputState, updateInputValue]
}
export default useInput