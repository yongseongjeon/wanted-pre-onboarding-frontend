import { TEST_ID } from "../constant/test";

function SignUp() {
  return (
    <>
      <input data-testid={TEST_ID.INPUT.EMAIL} type="text" />
      <input data-testid={TEST_ID.INPUT.PASSWORD} type="password" />
      <button data-testid={TEST_ID.BUTTON.SIGN_UP}>회원가입</button>
    </>
  );
}

export default SignUp;
