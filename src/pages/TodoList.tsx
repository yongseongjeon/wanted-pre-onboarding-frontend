import { validateSignIn } from "../utils/validation";
import { ROUTE_PATH } from "../route";
import useRouter from "../hooks/useRouter";
import { useEffect, useReducer } from "react";
import Todo from "../components/Todo/Todo";
import { setTodos, todoReducer } from "../reducer/todoReducer";
import { getTodos } from "../api/request";

function TodoList() {
  const { routeTo } = useRouter();
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(function redirectSignInPageIfNotSignedIn() {
    const isSignedIn = validateSignIn();
    if (!isSignedIn) {
      routeTo(ROUTE_PATH.SIGN_IN);
    }
  }, []);

  useEffect(() => {
    async function fetchAndSetTodos() {
      const todos = await getTodos();
      dispatch(setTodos({ todos }));
    }
    fetchAndSetTodos();
  }, []);

  return (
    <div>
      {todos.map(({ id, content }) => (
        <Todo id={id} content={content} />
      ))}
    </div>
  );
}

export default TodoList;
