import { getItemFromLocalStorage, setItemToLocalStorage } from "../utils/localStorage";
import { FULL_REQUEST_URL, ID_REQUIRED_FULL_REQUEST_URL } from "./url";

async function requestSignUp({ email, password }: AuthProps) {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ email, password });
  const res = await fetch(FULL_REQUEST_URL.SIGN_UP, { method: "POST", headers, body });
  return res;
}

async function requestSignIn({ email, password }: AuthProps) {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ email, password });
  const res = await fetch(FULL_REQUEST_URL.SIGN_IN, { method: "POST", headers, body });
  const { access_token: receivedAccessToken } = await res.json();
  setItemToLocalStorage("accessToken", receivedAccessToken);
  return res;
}

async function requestGetTodos() {
  const storedAccessToken = getItemFromLocalStorage("accessToken");
  const headers = {
    Authorization: `Bearer ${storedAccessToken}`,
  };
  const res = await fetch(FULL_REQUEST_URL.GET_TODOS, { headers });
  const resJson = await res.json();
  return resJson;
}

async function requestAddTodo({ todo }: { todo: string }) {
  const storedAccessToken = getItemFromLocalStorage("accessToken");
  const headers = {
    Authorization: `Bearer ${storedAccessToken}`,
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ todo });
  const res = await fetch(FULL_REQUEST_URL.CREATE_TODO, { method: "POST", headers, body });
  const resJson = await res.json();
  return resJson;
}

async function requestDeleteTodo({ id }: { id: number }) {
  const storedAccessToken = getItemFromLocalStorage("accessToken");
  const headers = {
    Authorization: `Bearer ${storedAccessToken}`,
  };
  const res = await fetch(ID_REQUIRED_FULL_REQUEST_URL.DELETE(id), { method: "DELETE", headers });
  return res;
}

async function requestUpdateTodo({ id, todo, isCompleted }: { id: number; todo: string; isCompleted: boolean }) {
  const storedAccessToken = getItemFromLocalStorage("accessToken");
  const headers = {
    Authorization: `Bearer ${storedAccessToken}`,
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ todo, isCompleted });
  const res = await fetch(ID_REQUIRED_FULL_REQUEST_URL.UPDATE(id), { method: "PUT", headers, body });
  const resJson = await res.json();
  return resJson;
}

export { requestSignUp, requestSignIn, requestGetTodos, requestAddTodo, requestDeleteTodo, requestUpdateTodo };

interface AuthProps {
  email: string;
  password: string;
}
