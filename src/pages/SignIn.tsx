import Input from "../components/Input/Input";
import { TEST_ID } from "../constants/test";
import useInput from "../hooks/useInput";

const INIT_STATE = "";

function SignIn() {
  const [email, handleChangeEmail] = useInput(INIT_STATE);
  const [password, handleChangePassword] = useInput(INIT_STATE);

  return (
    <>
      <Input type="email" value={email} onChange={handleChangeEmail} testId={TEST_ID.INPUT.EMAIL} />
      <Input type="password" value={password} onChange={handleChangePassword} testId={TEST_ID.INPUT.PASSWORD} />
      <button data-testid={TEST_ID.BUTTON.SIGN_IN}>로그인</button>
    </>
  );
}

export default SignIn;
