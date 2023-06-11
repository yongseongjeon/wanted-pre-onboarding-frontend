import useToggle from "../../hooks/useToggle";
import { TodoType } from "../../store/todo";
import EditingTodo from "../EditingTodo/EditingTodo";
import NormalTodo from "../NormalTodo/NormalTodo";

function TodoContainer({ id, todo, isCompleted }: TodoType) {
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
