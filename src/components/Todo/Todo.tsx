interface TodoProps {
  todo: string;
}

function Todo({ todo }: TodoProps) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
    </li>
  );
}

export default Todo;
