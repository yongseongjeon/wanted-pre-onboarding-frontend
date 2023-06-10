import { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";

function useFormValidation({ email, password }: any) {
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
