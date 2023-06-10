import { getItemFromLocalStorage, setItemToLocalStorage } from "./localStorage";

describe("LocalStorage", () => {
  it("setItemToLocalStorage 함수로 로컬 스토리지에 문자열을 저장할 수 있다.", () => {
    const mockKey = "이름";
    const mockItem = "홍길동";
    setItemToLocalStorage(mockKey, mockItem);
    const item = localStorage.getItem(mockKey);
    expect(mockItem).toEqual(item);
  });
  it("setItemToLocalStorage 함수로 로컬 스토리지에 객체를 저장할 수 있다.", () => {
    const mockKey = "사람";
    const mockItem = { name: "홍길동", age: 20 };
    setItemToLocalStorage(mockKey, mockItem);
    const item = JSON.parse(localStorage.getItem(mockKey));
    expect(mockItem).toEqual(item);
  });
  it("setItemToLocalStorage 함수로 로컬 스토리지에 배열을 저장할 수 있다.", () => {
    const mockKey = "예약 명단";
    const mockItem = ["홍길동", "김철수", "박영미"];
    setItemToLocalStorage(mockKey, mockItem);
    const item = JSON.parse(localStorage.getItem(mockKey));
    expect(mockItem).toEqual(item);
  });
  it("getItemFromLocalStorage 함수로 로컬 스토리지에 저장되어 있는 문자열을 가져올 수 있다.", () => {
    const mockKey = "이름";
    const mockItem = "홍길동";
    localStorage.setItem(mockKey, mockItem);
    const item = getItemFromLocalStorage(mockKey);
    expect(mockItem).toEqual(item);
  });
  it("getItemFromLocalStorage 함수로 로컬 스토리지에 저장되어 있는 객체를 가져올 수 있다.", () => {
    const mockKey = "사람";
    const mockItem = { name: "홍길동", age: 20 };
    localStorage.setItem(mockKey, JSON.stringify(mockItem));
    const item = getItemFromLocalStorage(mockKey);
    expect(mockItem).toEqual(item);
  });
  it("getItemFromLocalStorage 함수로 로컬 스토리지에 저장되어 있는 배열을 가져올 수 있다.", () => {
    const mockKey = "예약 명단";
    const mockItem = ["홍길동", "김철수", "박영미"];
    localStorage.setItem(mockKey, JSON.stringify(mockItem));
    const item = getItemFromLocalStorage(mockKey);
    expect(mockItem).toEqual(item);
  });
});
