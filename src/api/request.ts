import { getItemFromLocalStorage, setItemToLocalStorage } from "../utils/localStorage";
import { FULL_REQUEST_URL } from "./url";

async function signUp({ email, password }: AuthProps) {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ email, password });
  const res = await fetch(FULL_REQUEST_URL.SIGN_UP, { method: "POST", headers, body });
  return res;
}

async function signIn({ email, password }: AuthProps) {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ email, password });
  const res = await fetch(FULL_REQUEST_URL.SIGN_IN, { method: "POST", headers, body });
  const { access_token: receivedAccessToken } = await res.json();
  setItemToLocalStorage("accessToken", receivedAccessToken);
  return res;
}

async function getTodos() {
  const storedAccessToken = getItemFromLocalStorage("accessToken");
  const headers = {
    Authorization: `Bearer ${storedAccessToken}`,
  };
  const res = await fetch(FULL_REQUEST_URL.GET_TODOS, { headers });
  const resJson = await res.json();
  return resJson;
}

export { signUp, signIn, getTodos };

interface AuthProps {
  email: string;
  password: string;
}
