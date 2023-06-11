import { useState } from "react";

function useInput(initialState: string): useInputReturnType {
  const [value, setValue] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.target.value;
    setValue(changedValue);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, handleChange, resetValue];
}

export default useInput;

type useInputReturnType = [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void];
