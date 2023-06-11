import { useNavigate } from "react-router-dom";
import { requestSignUp } from "../api/request";
import Input from "../components/Input/Input";
import { TEST_ID } from "../constants/test";
import useFormValidation from "../hooks/useFormValidation";
import useInput from "../hooks/useInput";
import { ROUTE_PATH } from "../route";
import { useEffect } from "react";
import { validateSignIn } from "../utils/validation";

const INIT_STATE = "";

function SignUp() {
  const [email, handleChangeEmail] = useInput(INIT_STATE);
  const [password, handleChangePassword] = useInput(INIT_STATE);
  const isFormValid = useFormValidation({ email, password });
  const router = useNavigate();

  useEffect(function RedirectTodoPageIfSignedIn() {
    const isSignedIn = validateSignIn();
    if (isSignedIn) {
      router(ROUTE_PATH.TODO);
    }
  }, []);

  const handleClickSubmitBtn = async () => {
    await requestSignUp({ email, password });
    router(ROUTE_PATH.SIGN_IN);
  };

  return (
    <>
      <Input type="email" value={email} onChange={handleChangeEmail} testId={TEST_ID.INPUT.EMAIL} />
      <Input type="password" value={password} onChange={handleChangePassword} testId={TEST_ID.INPUT.PASSWORD} />
      <button disabled={!isFormValid} onClick={handleClickSubmitBtn} data-testid={TEST_ID.BUTTON.SIGN_UP}>
        회원가입
      </button>
    </>
  );
}

export default SignUp;
