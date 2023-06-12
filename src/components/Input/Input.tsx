import { TEST_ID } from "../../constants/test";

type TestIdInputType = typeof TEST_ID.INPUT;

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  testId: TestIdInputType[keyof TestIdInputType];
}

function Input({ type, value, onChange, testId }: InputProps) {
  return <input type={type} value={value} onChange={onChange} data-testid={testId} />;
}

export default Input;
