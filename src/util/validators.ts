export const requiredValidator = (content: string, inputName: string) => {
  if (!content) {
    return `${inputName} is required`;
  } else return "";
};
export const minLengthValidator = (
  content: string,
  minLength: number,
  inputName: string
) => {
  if (!content || content.length <= minLength) {
    return `${inputName} must be longer than ${minLength} characters`;
  } else return "";
};

export const maxLengthValidator = (
  content: string,
  maxLength: number,
  inputName: string
) => {
  if (content && content.length >= maxLength) {
    return `${inputName} must be less than ${maxLength} characters`;
  } else return "";
};

export const emailValidator = (email: string) => {
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format";
  } else return "";
};
