import { Todo, Todos } from "../types/Todo";

const TODO_ACTIONS = {
  SET_TODOS: "SET_TODOS",
  ADD_TODO: "ADD_TODO",
  MODIFY_TODO: "MODIFY_TODO",
  DELETE_TODO: "DELETE_TODO",
  CHECK_TODO: "CHECK_TODO",
} as const;

function setTodos({ todos }: { todos: Todos }) {
  return { type: TODO_ACTIONS.SET_TODOS, payload: { todos } };
}

function addTodo({ id, todo, isCompleted, userId }: { id: number; todo: string; isCompleted: boolean; userId: number }) {
  return { type: TODO_ACTIONS.ADD_TODO, payload: { id, todo, isCompleted, userId } };
}

function modifyTodo({ id, todo }: { id: number; todo: string }) {
  return { type: TODO_ACTIONS.MODIFY_TODO, payload: { id, todo } };
}

function deleteTodo({ id }: { id: number }) {
  return { type: TODO_ACTIONS.DELETE_TODO, payload: { id } };
}

function checkTodo({ id, isCompleted }: { id: number; isCompleted: boolean }) {
  return { type: TODO_ACTIONS.CHECK_TODO, payload: { id, isCompleted } };
}

const initialState: Todo[] = [];

type ActionType =
  | { type: typeof TODO_ACTIONS.SET_TODOS; payload: { todos: Todos } }
  | { type: typeof TODO_ACTIONS.ADD_TODO; payload: { id: number; todo: string; isCompleted: boolean; userId: number } }
  | { type: typeof TODO_ACTIONS.MODIFY_TODO; payload: { id: number; todo: string } }
  | { type: typeof TODO_ACTIONS.DELETE_TODO; payload: { id: number } }
  | { type: typeof TODO_ACTIONS.CHECK_TODO; payload: { id: number; isCompleted: boolean } };

function todoReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case TODO_ACTIONS.SET_TODOS:
      return action.payload.todos;
    case TODO_ACTIONS.ADD_TODO:
      const newTodo = {
        id: action.payload.id,
        todo: action.payload.todo,
        isCompleted: action.payload.isCompleted,
        userId: action.payload.userId,
      };
      return [...state, newTodo];
    case TODO_ACTIONS.MODIFY_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          const modifiedTodo = { ...todo, todo: action.payload.todo };
          return modifiedTodo;
        }
        return todo;
      });
    case TODO_ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TODO_ACTIONS.CHECK_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: !action.payload.isCompleted };
        }
        return todo;
      });
    default:
      return state;
  }
}

export { setTodos, addTodo, modifyTodo, deleteTodo, checkTodo, todoReducer };
