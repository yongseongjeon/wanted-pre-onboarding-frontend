import { TEST_ID } from "../constants/test";
import SignUp from "./SignUp";
import { renderWithRouter } from "../utils/test";

describe("SignIn page", () => {
  it("이메일 입력창을 표시한다.", () => {
    const { getByTestId } = renderWithRouter(<SignUp />);
    const emailInput = getByTestId(TEST_ID.INPUT.EMAIL);
    expect(emailInput).toBeInTheDocument();
  });
  it("비밀번호 입력창을 표시한다.", () => {
    const { getByTestId } = renderWithRouter(<SignUp />);
    const passwordInput = getByTestId(TEST_ID.INPUT.PASSWORD);
    expect(passwordInput).toBeInTheDocument();
  });
  it("로그인 버튼을 표시한다.", () => {
    const { container, getByTestId } = renderWithRouter(<SignUp />);
    const signUpButton = getByTestId(TEST_ID.BUTTON.SIGN_UP);
    expect(signUpButton).toBeInTheDocument();
    expect(container).toHaveTextContent("회원가입");
  });
});
