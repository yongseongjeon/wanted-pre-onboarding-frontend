const END_POINT = "https://www.pre-onboarding-selection-task.shop";

const API_PATH = {
  SIGN_UP: "/auth/signup",
  SIGN_IN: "/auth/signin",
  CREATE_TODO: "/todos",
  GET_TODOS: "/todos",
} as const;

const ID_REQUIRED_API_PATH = {
  UPDATE_TODO: (id: number) => `/todos/:${id}`,
  DELETE_TODO: (id: number) => `/todos/:${id}`,
};

const ID_REQUIRED_FULL_REQUEST_URL = {
  DELETE: (id: number) => END_POINT + ID_REQUIRED_API_PATH.DELETE_TODO(id),
  UPDATE: (id: number) => END_POINT + ID_REQUIRED_API_PATH.UPDATE_TODO(id),
};

const FULL_REQUEST_URL = Object.entries(API_PATH).reduce((prev, [apiName, apiPath]) => {
  const fullApiUrl = END_POINT + apiPath;
  return {
    ...prev,
    [apiName]: fullApiUrl,
  };
}, {} as APIUrls);

export { FULL_REQUEST_URL, ID_REQUIRED_FULL_REQUEST_URL };

interface APIUrls {
  CREATE_TODO: string;
  GET_TODOS: string;
  SIGN_IN: string;
  SIGN_UP: string;
}
