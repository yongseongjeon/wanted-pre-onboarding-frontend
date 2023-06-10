const END_POINT = "https://www.pre-onboarding-selection-task.shop";

const API_URL = {
  SIGN_UP: "/auth/signup",
  SIGN_IN: "/auth/signin",
  CREATE_TODO: "/todos",
  GET_TODO: "/todos",
  UPDATE_TODO: (id: number) => `/todos/:${id}`,
  DELETE_TODO: (id: number) => `/todos/:${id}`,
} as const;

const SIGN_UP_API_URL = END_POINT + API_URL.SIGN_UP;
const SIGN_IN_API_URL = END_POINT + API_URL.SIGN_IN;

export { SIGN_UP_API_URL, SIGN_IN_API_URL };
