import { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";
import { AuthProps } from "../types/Auth";

function useFormValidation({ email, password }: AuthProps) {
  const [isValid, setIsValid] = useState(false);
  useEffect(
    function updateIsValidStatus() {
      const isFormValid = validateEmail(email) && validatePassword(password);
      setIsValid(isFormValid);
    },
    [email, password]
  );

  return isValid;
}

export default useFormValidation;
