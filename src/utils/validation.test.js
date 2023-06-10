import { setItemToLocalStorage } from "./localStorage";
import { validateEmail, validatePassword, validateSignIn } from "./validation";

describe("Util", () => {
  it("validateEmail의 이메일에 @가 없으면 false를 반환한다.", () => {
    const mockEmail = "isjd84kd.com";
    expect(validateEmail(mockEmail)).toBeFalsy();
  });
  it("validateEmail의 이메일에 @가 있으면 true를 반환한다.", () => {
    const mockEmail = "isjd84@naver.com";
    expect(validateEmail(mockEmail)).toBeTruthy();
  });
  it("비밀번호가 8자 미만이면 false를 반환한다.", () => {
    const mockPassword = "1234567";
    expect(validatePassword(mockPassword)).toBeFalsy();
  });
  it("비밀번호가 8자 이상이면 true를 반환한다.", () => {
    const mockPassword = "12345678";
    expect(validatePassword(mockPassword)).toBeTruthy();
  });
  it("로컬 스토리지에 액세스 토큰이 없으면 false를 반환한다.", () => {
    expect(validateSignIn()).toBeFalsy();
  });
  it("로컬 스토리지에 액세스 토큰이 있으면 true를 반환한다.", () => {
    const mockAccessToken = "ABCD";
    setItemToLocalStorage("accessToken", mockAccessToken);
    expect(validateSignIn()).toBeTruthy();
  });
});
