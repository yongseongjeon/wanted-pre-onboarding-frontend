import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodoList from "./pages/TodoList";

const ROUTE_PATH = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  TODO: "/todo",
} as const;

const routeConfigs: RouteConfig[] = [
  { path: ROUTE_PATH.SIGN_UP, element: <SignUp /> },
  { path: ROUTE_PATH.SIGN_IN, element: <SignIn /> },
  { path: ROUTE_PATH.TODO, element: <TodoList /> },
];

interface RouteConfig {
  path: (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
  element: React.ReactNode;
}

export { ROUTE_PATH, routeConfigs };
