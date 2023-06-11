import useInput from "../../hooks/useInput";
import Input from "../Input/Input";
import { TEST_ID } from "../../constants/test";
import { requestUpdateTodo } from "../../api/request";
import { useDispatch } from "react-redux";
import { checkTodo, modifyTodo } from "../../store/todo";

export interface TodoProps {
  id: number;
  isCompleted: boolean;
  todo: string;
  toggleIsEditing: () => void;
}

function EditingTodo({ id, isCompleted, todo, toggleIsEditing }: TodoProps) {
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

  const handleChangeCheckbox = () => {
    requestUpdateTodo({ id, todo, isCompleted: !isCompleted });
    dispatch(checkTodo({ id, isCompleted }));
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={handleChangeCheckbox} />
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

export default EditingTodo;
