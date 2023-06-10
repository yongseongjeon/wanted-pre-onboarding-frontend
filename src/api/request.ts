import { setItemToLocalStorage } from "../utils/localStorage";
import { SIGN_IN_API_URL, SIGN_UP_API_URL } from "./url";

async function signUp({ email, password }: AuthProps) {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ email, password });
  const res = await fetch(SIGN_UP_API_URL, { method: "POST", headers, body });
  return res;
}

async function signIn({ email, password }: AuthProps) {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ email, password });
  const res = await fetch(SIGN_IN_API_URL, { method: "POST", headers, body });
  const { access_token: receivedAccessToken } = await res.json();
  setItemToLocalStorage("accessToken", receivedAccessToken);
  return res;
}

export { signUp, signIn };

interface AuthProps {
  email: string;
  password: string;
}
