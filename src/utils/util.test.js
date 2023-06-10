import { validateEmail } from "./util";

describe("Util", () => {
  it("validateEmail의 이메일에 @가 없으면 false를 반환한다.", () => {
    const mockEmail = "isjd84kd.com";
    expect(validateEmail(mockEmail)).toBeFalsy();
  });
  it("validateEmail의 이메일에 @가 있으면 true를 반환한다.", () => {
    const mockEmail = "isjd84@naver.com";
    expect(validateEmail(mockEmail)).toBeTruthy();
  });
});
