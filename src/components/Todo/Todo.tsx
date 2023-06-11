import { TodoType } from "../../reducer/todoReducer";

function Todo({ id, content }: TodoType) {
  return (
    <li key={id}>
      <label>
        <input type="checkbox" />
        <span>{content}</span>
      </label>
    </li>
  );
}

export default Todo;
