import { TEST_ID } from "../../constants/test";
import { requestDeleteTodo, requestUpdateTodo } from "../../api/request";
import { checkTodo, deleteTodo } from "../../store/todo";
import { TodoProps } from "../../types/Todo";
import { useContext } from "react";
import { TodoContext } from "../../store/TodoContext";

function NormalTodo({ id, isCompleted, todo, toggleIsEditing }: TodoProps) {
  const { dispatch } = useContext(TodoContext);

  const handleClickDeleteBtn = () => {
    requestDeleteTodo({ id });
    dispatch(deleteTodo({ id }));
  };

  const handleChangeCheckbox = () => {
    requestUpdateTodo({ id, todo, isCompleted: !isCompleted });
    dispatch(checkTodo({ id, isCompleted }));
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={handleChangeCheckbox} />
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

export default NormalTodo;
