const TODO_ACTIONS = {
  SET_TODOS: "SET_TODOS",
  ADD_TODO: "ADD_TODO",
  MODIFY_TODO: "MODIFY_TODO",
  DELETE_TODO: "DELETE_TODO",
} as const;

export interface TodoType {
  id: number;
  content: string;
}
interface Todos {
  todos: TodoType[];
}
function setTodos({ todos }: Todos) {
  return { type: TODO_ACTIONS.SET_TODOS, payload: { todos } };
}

function addTodos({ id, content }: TodoType) {
  return { type: TODO_ACTIONS.ADD_TODO, payload: { id, content } };
}

function modifyTodo({ id, content }: TodoType) {
  return { type: TODO_ACTIONS.MODIFY_TODO, payload: { id, content } };
}

function deleteTodo({ id }: { id: number }) {
  return { type: TODO_ACTIONS.DELETE_TODO, payload: { id } };
}

const initialState: TodoType[] = [];

type ActionType =
  | { type: typeof TODO_ACTIONS.SET_TODOS; payload: Todos }
  | { type: typeof TODO_ACTIONS.ADD_TODO; payload: TodoType }
  | { type: typeof TODO_ACTIONS.MODIFY_TODO; payload: TodoType }
  | { type: typeof TODO_ACTIONS.DELETE_TODO; payload: { id: number } };

function todoReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case TODO_ACTIONS.SET_TODOS:
      return action.payload.todos;
    case TODO_ACTIONS.ADD_TODO:
      const newTodo = { id: action.payload.id, content: action.payload.content };
      return [...state, newTodo];
    case TODO_ACTIONS.MODIFY_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          const modifiedTodo = { ...todo, content: action.payload.content };
          return modifiedTodo;
        }
        return todo;
      });
    case TODO_ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export { setTodos, addTodos, modifyTodo, deleteTodo, todoReducer };
