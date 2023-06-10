import { validateSignIn } from "../utils/validation";
import { ROUTE_PATH } from "../route";
import useRouter from "../hooks/useRouter";
import { useEffect } from "react";

function TodoList() {
  const { routeTo } = useRouter();

  useEffect(function redirectSignInPageIfNotSignedIn() {
    const isSignedIn = validateSignIn();
    if (!isSignedIn) {
      routeTo(ROUTE_PATH.SIGN_IN);
    }
  }, []);

  return <div>TodoList page</div>;
}

export default TodoList;
