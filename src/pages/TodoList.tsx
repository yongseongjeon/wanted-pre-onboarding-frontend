import { validateSignIn } from "../utils/validation";
import { ROUTE_PATH } from "../route";
import useRouter from "../hooks/useRouter";
import { useEffect, useReducer } from "react";
import Todo from "../components/Todo/Todo";
import { TodoType, addTodo, setTodos, todoReducer } from "../reducer/todoReducer";
import { requestAddTodo, requestGetTodos } from "../api/request";
import Input from "../components/Input/Input";
import useInput from "../hooks/useInput";
import { TEST_ID } from "../constants/test";

function TodoList() {
  const { routeTo } = useRouter();
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoInputValue, handleTodoInputValue] = useInput("");

  useEffect(function redirectSignInPageIfNotSignedIn() {
    const isSignedIn = validateSignIn();
    if (!isSignedIn) {
      routeTo(ROUTE_PATH.SIGN_IN);
    }
  }, []);

  useEffect(() => {
    async function fetchAndSetTodos() {
      const todos = await requestGetTodos();
      dispatch(setTodos({ todos }));
    }
    fetchAndSetTodos();
  }, []);

  async function handleClickAddBtn() {
    const newTodo = await requestAddTodo({ todo: todoInputValue });
    dispatch(addTodo(newTodo));
  }

  return (
    <div>
      <Input type="text" value={todoInputValue} onChange={handleTodoInputValue} testId={TEST_ID.INPUT.NEW_TODO} />
      <button type="button" onClick={handleClickAddBtn} data-testid={TEST_ID.BUTTON.NEW_TODO_ADD}>
        추가
      </button>
      {todos.map(({ id, todo, isCompleted }: TodoType) => (
        <Todo id={id} todo={todo} isCompleted={isCompleted} />
      ))}
    </div>
  );
}

export default TodoList;
