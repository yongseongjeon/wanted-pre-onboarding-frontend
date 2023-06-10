import Input from "../components/Input/Input";
import { TEST_ID } from "../constants/test";
import useInput from "../hooks/useInput";

const INIT_STATE = "";

function SignUp() {
  const [email, handleChangeEmail] = useInput(INIT_STATE);
  const [password, handleChangePassword] = useInput(INIT_STATE);

  return (
    <>
      <Input type="email" value={email} onChange={handleChangeEmail} testId={TEST_ID.INPUT.EMAIL} />
      <Input type="password" value={password} onChange={handleChangePassword} testId={TEST_ID.INPUT.PASSWORD} />
      <button data-testid={TEST_ID.BUTTON.SIGN_UP}>회원가입</button>
    </>
  );
}

export default SignUp;
