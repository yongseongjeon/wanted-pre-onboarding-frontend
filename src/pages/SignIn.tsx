import { useEffect } from "react";
import Input from "../components/Input/Input";
import { TEST_ID } from "../constants/test";
import useFormValidation from "../hooks/useFormValidation";
import useInput from "../hooks/useInput";
import { validateSignIn } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../route";

const INIT_STATE = "";

function SignIn() {
  const [email, handleChangeEmail] = useInput(INIT_STATE);
  const [password, handleChangePassword] = useInput(INIT_STATE);
  const isValid = useFormValidation({ email, password });
  const router = useNavigate();

  useEffect(function RedirectTodoPageIfSignedIn() {
    const isSignedIn = validateSignIn();
    if (isSignedIn) {
      router(ROUTE_PATH.TODO);
    }
  }, []);

  return (
    <>
      <Input type="email" value={email} onChange={handleChangeEmail} testId={TEST_ID.INPUT.EMAIL} />
      <Input type="password" value={password} onChange={handleChangePassword} testId={TEST_ID.INPUT.PASSWORD} />
      <button disabled={!isValid} data-testid={TEST_ID.BUTTON.SIGN_IN}>
        로그인
      </button>
    </>
  );
}

export default SignIn;
