import { createContext, useReducer } from "react";
import { todoReducer } from "./todo";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>;
}

export { TodoContext, TodoProvider };
