import React, { FormEvent, useCallback } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCheck,
  faXmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/util/intersection";

import { FormData, INotification } from "@/types";
import { useFormValidator } from "@/hooks/formValidation";
import { getClassName, isFieldValid, submitEnquiryForm } from "@/util/helpers";
import { InputIcon } from "@/components/InputIcon";
import { ErrorMessages } from "@/components/ErrorMessages";
import { AlertBox } from "@/components/AlertBox";
import { useCaptcha } from "@/hooks/captchaHook";
import {
  DEV_AUTH_SERVER_URL,
  DEV_SERVER_URL,
  PROD_AUTH_SERVER_URL,
  PROD_SERVER_URL,
} from "@/settings";

export default function LoginForm() {
  const [notification, setNotification] = useState<INotification>({
    content: "",
    type: "",
  });

  const defaultState = {
    email: { content: "", validations: { required: true, isEmail: true } },
    password: {
      content: "",
      validations: { minLen: 3, maxLen: 100, required: true },
    },
  };
  const [formData, setFormData] = useState<FormData>({ ...defaultState });

  const { errors, validateForm, onBlurField } = useFormValidator(formData);
  const { executeCaptcha } = useCaptcha(formData);

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const field = e.currentTarget.name;
    const nextFormState = {
      ...formData,
      [field]: {
        ...formData[field],
        content: e.currentTarget.value,
      },
    };
    setFormData(nextFormState);
    validateForm(nextFormState, errors);
  };
  const handleSubmit =
    //   useCallback(
    async (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      const { isValid } = validateForm(formData, errors, true);
      if (!isValid) {
        return;
      }
      await executeCaptcha();
      const data = {
        email: formData.email.content,
        password: formData.password.content,
      };

      await axios({
        method: "post",
        url: `${
          process.env.NODE_ENV === "development"
            ? DEV_AUTH_SERVER_URL
            : PROD_AUTH_SERVER_URL
        }/api/auth/login`,
        data,
        withCredentials: true,
      });
      setFormData(defaultState);
    };
  return (
    <>
      <section id="login-form">
        <form onSubmit={handleSubmit} className="box mx-auto">
          <AlertBox notification={notification} />
          <h1 className="is-size-4">Login</h1>
          <div className="field">
            <label htmlFor="email" className="label">
              email
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                type="text"
                className={`input ${getClassName(errors.email)}`}
                placeholder="Email"
                name="email"
                id="email"
                onChange={onChange}
                value={formData.email.content}
                onBlur={onBlurField}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} size={"sm"} />
              </span>
              <InputIcon value={getClassName(errors.email)} />
            </div>
            <ErrorMessages errors={errors.email} />
          </div>

          <div className="field">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                type="password"
                className={`input ${getClassName(errors.password)}`}
                placeholder="Password"
                name="password"
                id="password"
                onChange={onChange}
                value={formData.password.content}
                onBlur={onBlurField}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} size={"sm"} />
              </span>
              <InputIcon value={getClassName(errors.email)} />
            </div>
            <ErrorMessages errors={errors.email} />
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-black is-medium">Submit</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
