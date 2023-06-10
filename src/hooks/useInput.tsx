import { useState } from "react";

function useInput(initialState: string): useInputReturnType {
  const [value, setValue] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.target.value;
    setValue(changedValue);
  };

  return [value, handleChange];
}

export default useInput;

type useInputReturnType = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];
