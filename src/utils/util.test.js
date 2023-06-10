import { validateEmail, validatePassword } from "./util";

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
});
