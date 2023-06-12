import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TodoList from "./pages/TodoList";
import { RoutePath } from "./types/Route";

const ROUTE_PATH = {
  SIGN_UP: "/signup",
  SIGN_IN: "/signin",
  TODO: "/todo",
} as const;

interface RouteConfig {
  path: RoutePath;
  element: React.ReactNode;
}

const routeConfigs: RouteConfig[] = [
  { path: ROUTE_PATH.SIGN_UP, element: <SignUp /> },
  { path: ROUTE_PATH.SIGN_IN, element: <SignIn /> },
  { path: ROUTE_PATH.TODO, element: <TodoList /> },
];

export { ROUTE_PATH, routeConfigs };
