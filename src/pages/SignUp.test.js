import { render } from "@testing-library/react";
import { TEST_ID } from "../constants/test";
import SignUp from "./SignUp";

describe("SignIn page", () => {
  it("이메일 입력창을 표시한다.", () => {
    const { getByTestId } = render(<SignUp />);
    const emailInput = getByTestId(TEST_ID.INPUT.EMAIL);
    expect(emailInput).toBeInTheDocument();
  });
  it("비밀번호 입력창을 표시한다.", () => {
    const { getByTestId } = render(<SignUp />);
    const passwordInput = getByTestId(TEST_ID.INPUT.PASSWORD);
    expect(passwordInput).toBeInTheDocument();
  });
  it("로그인 버튼을 표시한다.", () => {
    const { container, getByTestId } = render(<SignUp />);
    const signUpButton = getByTestId(TEST_ID.BUTTON.SIGN_UP);
    expect(signUpButton).toBeInTheDocument();
    expect(container).toHaveTextContent("회원가입");
  });
});
