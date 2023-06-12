import { Dispatch, SetStateAction, useState } from "react";

type useInputReturnType = [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void, Dispatch<SetStateAction<string>>];

function useInput(initialState: string): useInputReturnType {
  const [value, setValue] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.target.value;
    setValue(changedValue);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, handleChange, resetValue, setValue];
}

export default useInput;
