import SignIn from "./SignIn";
import { TEST_ID } from "../constants/test";
import { renderWithRouter } from "../utils/test";

describe("SignIn page", () => {
  it("이메일 입력창을 표시한다.", () => {
    const { getByTestId } = renderWithRouter(<SignIn />);
    const emailInput = getByTestId(TEST_ID.INPUT.EMAIL);
    expect(emailInput).toBeInTheDocument();
  });
  it("비밀번호 입력창을 표시한다.", () => {
    const { getByTestId } = renderWithRouter(<SignIn />);
    const passwordInput = getByTestId(TEST_ID.INPUT.PASSWORD);
    expect(passwordInput).toBeInTheDocument();
  });
  it("로그인 버튼을 표시한다.", () => {
    const { container, getByTestId } = renderWithRouter(<SignIn />);
    const signInButton = getByTestId(TEST_ID.BUTTON.SIGN_IN);
    expect(signInButton).toBeInTheDocument();
    expect(container).toHaveTextContent("로그인");
  });
});
