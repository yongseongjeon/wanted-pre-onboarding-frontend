import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../route";

function Home() {
  return (
    <ul>
      <li>
        <Link to={ROUTE_PATH.SIGN_IN}>로그인</Link>
      </li>
      <li>
        <Link to={ROUTE_PATH.SIGN_UP}>회원가입</Link>
      </li>
      <li>
        <Link to={ROUTE_PATH.TODO}>할 일 목록</Link>
      </li>
    </ul>
  );
}

export default Home;
