interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

interface Todos {
  [index: number]: Todo;
}

interface TodoProps extends Todo {
  toggleIsEditing: () => void;
}

export { Todo, Todos, TodoProps };
