import { TEST_ID } from "../constant/test";

function SignIn() {
  return (
    <>
      <input data-testid={TEST_ID.INPUT.EMAIL} type="text" />
      <input data-testid={TEST_ID.INPUT.PASSWORD} type="password" />
      <button data-testid={TEST_ID.BUTTON.SIGN_IN}>로그인</button>
    </>
  );
}

export default SignIn;
