import useToggle from "../../hooks/useToggle";
import { Todo } from "../../types/Todo";
import EditingTodo from "../EditingTodo/EditingTodo";
import NormalTodo from "../NormalTodo/NormalTodo";

function TodoContainer({ id, todo, isCompleted }: Todo) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <li>
      {isEditing ? (
        <EditingTodo id={id} isCompleted={isCompleted} todo={todo} toggleIsEditing={toggleIsEditing} />
      ) : (
        <NormalTodo id={id} isCompleted={isCompleted} todo={todo} toggleIsEditing={toggleIsEditing} />
      )}
    </li>
  );
}

export default TodoContainer;
