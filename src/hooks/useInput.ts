import React, { useState } from "react";

type useInputEventType = React.ChangeEvent<HTMLInputElement> | ''

const useInput = (initialState:string):[string, (e:useInputEventType) => void] => {
  const [inputState, setInputState] = useState(initialState);

  const updateInputState = (event: useInputEventType) => {
    typeof event === 'string' ? setInputState('') : setInputState(event.target.value);
  };

  return [inputState, updateInputState]
}
export default useInput