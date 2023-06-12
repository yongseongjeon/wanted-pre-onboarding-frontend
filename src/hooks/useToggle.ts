import { useState } from "react";

type useToggleReturnType = [boolean, () => void];

function useToggle(initialState: boolean): useToggleReturnType {
  const [state, setState] = useState(initialState);

  function toggleState() {
    setState(!state);
  }

  return [state, toggleState];
}

export default useToggle;
