import { Todo } from "../types/Todo";

interface RootState {
  todo: TodoStore;
}

type TodoStore = Todo[];

export { RootState };
