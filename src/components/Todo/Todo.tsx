import useInput from "../../hooks/useInput";
import Input from "../Input/Input";
import { TEST_ID } from "../../constants/test";
import useToggle from "../../hooks/useToggle";
import { requestDeleteTodo, requestUpdateTodo } from "../../api/request";
import { useDispatch } from "react-redux";
import { TodoType, deleteTodo, modifyTodo } from "../../store/todo";

function Todo({ id, todo, isCompleted }: TodoType) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <li>
      {isEditing ? (
        <EditingTodo id={id} isCompleted={isCompleted} todo={todo} toggleIsEditing={toggleIsEditing} />
      ) : (
        <NormalTodo id={id} todo={todo} toggleIsEditing={toggleIsEditing} />
      )}
    </li>
  );
}

export default Todo;

function EditingTodo({
  id,
  isCompleted,
  todo,
  toggleIsEditing,
}: {
  id: number;
  isCompleted: boolean;
  todo: string;
  toggleIsEditing: () => void;
}) {
  const [todoInputValue, handleTodoInputValue, , setTodoInputValue] = useInput(todo);
  const dispatch = useDispatch();

  const handleClickSubmitBtn = () => {
    requestUpdateTodo({ id, todo: todoInputValue, isCompleted });
    dispatch(modifyTodo({ id, todo: todoInputValue }));
    toggleIsEditing();
  };

  const handleClickCancelBtn = () => {
    toggleIsEditing();
    setTodoInputValue(todo);
  };

  return (
    <>
      <label>
        <input type="checkbox" />
        <Input type="text" value={todoInputValue} onChange={handleTodoInputValue} testId={TEST_ID.INPUT.MODIFY} />
      </label>
      <button onClick={handleClickSubmitBtn} data-testid={TEST_ID.BUTTON.SUBMIT}>
        제출
      </button>
      <button onClick={handleClickCancelBtn} data-testid={TEST_ID.BUTTON.CANCEL}>
        취소
      </button>
    </>
  );
}

function NormalTodo({ id, todo, toggleIsEditing }: { id: number; todo: string; toggleIsEditing: () => void }) {
  const dispatch = useDispatch();

  const handleClickDeleteBtn = () => {
    requestDeleteTodo({ id });
    dispatch(deleteTodo({ id }));
  };

  return (
    <>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
      <button onClick={toggleIsEditing} data-testid={TEST_ID.BUTTON.MODIFY}>
        수정
      </button>
      <button onClick={handleClickDeleteBtn} data-testid={TEST_ID.BUTTON.DELETE}>
        삭제
      </button>
    </>
  );
}
