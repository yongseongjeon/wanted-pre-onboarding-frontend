import { TodoType } from "../../reducer/todoReducer";
import useInput from "../../hooks/useInput";
import Input from "../Input/Input";
import { TEST_ID } from "../../constants/test";
import useToggle from "../../hooks/useToggle";
import { requestDeleteTodo } from "../../api/request";

function Todo({ id, todo, isCompleted }: TodoType) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <li>
      {isEditing ? (
        <EditingTodo todo={todo} toggleIsEditing={toggleIsEditing} />
      ) : (
        <NormalTodo id={id} todo={todo} toggleIsEditing={toggleIsEditing} />
      )}
    </li>
  );
}

export default Todo;

function EditingTodo({ todo, toggleIsEditing }: { todo: string; toggleIsEditing: () => void }) {
  const [todoInputValue, handleTodoInputValue, , setTodoInputValue] = useInput(todo);

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
      <button data-testid={TEST_ID.BUTTON.SUBMIT}>제출</button>
      <button onClick={handleClickCancelBtn} data-testid={TEST_ID.BUTTON.CANCEL}>
        취소
      </button>
    </>
  );
}

function NormalTodo({ id, todo, toggleIsEditing }: { id: number; todo: string; toggleIsEditing: () => void }) {
  const handleClickDeleteBtn = () => {
    requestDeleteTodo({ id });
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
