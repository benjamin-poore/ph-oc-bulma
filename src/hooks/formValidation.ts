import { FieldError, FormData } from "@/types";
import {
  requiredValidator,
  minLengthValidator,
  maxLengthValidator,
  emailValidator,
} from "@/util/validators";
import { useState } from "react";

type Errors = Record<string, FieldError>;

const touchErrors = (errors: Errors): Record<string, FieldError> => {
  console.log("in touch errors");

  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {} as Record<string, FieldError>);
};

export const useFormValidator = (form: FormData) => {
  const defaultData = {} as Record<string, FieldError>;
  const formKeys = Object.keys(form);
  for (const key of formKeys) {
    defaultData[key] = { dirty: false, error: false, messages: [] };
  }
  const [errors, setErrors] = useState(defaultData);

  const validateForm = (
    form: FormData,
    errors: Errors,
    forceTouchErrors = false
  ) => {
    console.log("in validate form");
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }
    const formKeys = Object.keys(form);

    for (const key of formKeys) {
      const keyValidationErrors = [];
      if (nextErrors[key].dirty && Object.entries(form[key].validations)) {
        for (const validation of Object.keys(form[key].validations)) {
          let validationError = "";
          if (validation === "required") {
            console.log("req");
            validationError = requiredValidator(form[key].content, key);
          } else if (validation === "minLen") {
            console.log("min");
            validationError = minLengthValidator(
              form[key].content,
              form[key].validations.minLen,
              key
            );
          } else if (validation === "maxLen") {
            console.log("max");
            validationError = maxLengthValidator(
              form[key].content,
              form[key].validations.maxLen,
              key
            );
          } else if (validation === "isEmail") {
            console.log("email");
            console.log(form[key], key);
            console.log(form[key].content, "content");
            console.log("...................");
            validationError = emailValidator(form[key].content);
          }
          if (validationError.length > 0) {
            keyValidationErrors.push(validationError);
            isValid = false;
          }
        }

        // set the errors for the key
        console.log(keyValidationErrors);
        nextErrors[key].messages = keyValidationErrors;
      }
    }
    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("in blur field");
    const field = e.currentTarget.name;
    console.log(field, "field");
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    console.log(updatedErrors);

    validateForm(form, updatedErrors);
  };
  return {
    validateForm,
    onBlurField,
    errors,
  };
};
