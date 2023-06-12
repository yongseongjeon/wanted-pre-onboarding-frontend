import { useNavigate } from "react-router-dom";
import { RoutePath } from "../types/Route";

function useRouter() {
  const router = useNavigate();

  return {
    routeTo: (path: RoutePath) => router(path),
  };
}

export default useRouter;
