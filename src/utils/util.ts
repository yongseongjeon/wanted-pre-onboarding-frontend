function validateEmail(email: string) {
  return email.includes("@");
}

function validatePassword(password: string) {
  const MIN_LENGTH = 8;
  return password.length >= MIN_LENGTH;
}

export { validateEmail, validatePassword };
