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
  id: number;
  path: RoutePath;
  element: React.ReactNode;
}

const routeConfigs: RouteConfig[] = [
  { id: 0, path: ROUTE_PATH.SIGN_UP, element: <SignUp /> },
  { id: 1, path: ROUTE_PATH.SIGN_IN, element: <SignIn /> },
  { id: 2, path: ROUTE_PATH.TODO, element: <TodoList /> },
];

export { ROUTE_PATH, routeConfigs };
