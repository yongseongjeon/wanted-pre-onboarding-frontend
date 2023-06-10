const END_POINT = "https://www.pre-onboarding-selection-task.shop";

async function signUp({ email, password }: SignUpProps) {
  const headers = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify({ email, password });
  const res = await fetch(`${END_POINT}/auth/signup`, { method: "POST", headers, body });
  return res;
}

export { signUp };

interface SignUpProps {
  email: string;
  password: string;
}
