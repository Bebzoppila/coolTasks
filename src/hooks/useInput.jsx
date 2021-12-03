import { useState } from "react";

const useInput = (initialState) => {
  const [inputState, setInputState] = useState(initialState);

  const updateInputState = (event) => {
    setInputState(event.target.value);
  };

  return [inputState, updateInputState]
}
export default useInput