import { getItemFromLocalStorage, setItemToLocalStorage } from "../utils/localStorage";
import { FULL_REQUEST_URL, ID_REQUIRED_FULL_REQUEST_URL } from "./url";

interface requestProps {
  url: string;
  method?: string;
  body?: object;
  withAuth?: boolean;
}

async function request({ url, method, body, withAuth }: requestProps): Promise<any> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (withAuth) {
    const storedAccessToken = getItemFromLocalStorage("accessToken");
    headers.Authorization = `Bearer ${storedAccessToken}`;
  }
  const options: RequestInit = { method, headers };
  const hasBody = !!body;
  if (hasBody) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  const hasBodyOfRes = !!res.headers.get("Content-Type");
  if (!hasBodyOfRes) {
    return res;
  }
  const resJson = await res.json();
  return resJson;
}

interface AuthProps {
  email: string;
  password: string;
}

async function requestSignUp({ email, password }: AuthProps): Promise<Response> {
  const body = { email, password };
  const res = await request({ url: FULL_REQUEST_URL.SIGN_UP, method: "POST", body });
  return res;
}

interface SignInRes {
  access_token: string;
}

async function requestSignIn({ email, password }: AuthProps): Promise<SignInRes> {
  const body = { email, password };
  const res = await request({ url: FULL_REQUEST_URL.SIGN_IN, method: "POST", body });
  const { access_token: receivedAccessToken } = res;
  setItemToLocalStorage("accessToken", receivedAccessToken);
  return res;
}

async function requestGetTodos(): Promise<any> {
  const res = await request({ url: FULL_REQUEST_URL.GET_TODOS, method: "GET", withAuth: true });
  return res;
}

async function requestAddTodo({ todo }: { todo: string }): Promise<any> {
  const body = { todo };
  const res = await request({ url: FULL_REQUEST_URL.CREATE_TODO, method: "POST", body, withAuth: true });
  return res;
}

async function requestDeleteTodo({ id }: { id: number }): Promise<any> {
  const res = await request({ url: ID_REQUIRED_FULL_REQUEST_URL.DELETE(id), method: "DELETE", withAuth: true });
  return res;
}

async function requestUpdateTodo({ id, todo, isCompleted }: { id: number; todo: string; isCompleted: boolean }): Promise<any> {
  const body = { todo, isCompleted };
  const res = await request({ url: ID_REQUIRED_FULL_REQUEST_URL.UPDATE(id), method: "PUT", body, withAuth: true });
  return res;
}

export { requestSignUp, requestSignIn, requestGetTodos, requestAddTodo, requestDeleteTodo, requestUpdateTodo };
