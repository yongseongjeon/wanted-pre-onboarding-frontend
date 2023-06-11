import { useState } from "react";

function useToggle(initialState: boolean): useToggleReturnType {
  const [state, setState] = useState(initialState);

  function toggleState() {
    setState(!state);
  }

  return [state, toggleState];
}

export default useToggle;

type useToggleReturnType = [boolean, () => void];
