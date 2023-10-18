import {
  DEV_AUTH_SERVER_URL,
  DEV_SERVER_URL,
  PROD_AUTH_SERVER_URL,
  PROD_SERVER_URL,
} from "@/settings";
import { FieldData, FieldError, FormData } from "@/types";
import axios from "axios";

export const isFieldValid = (error: FieldError) => {
  if (error.messages.length === 0) {
    return true;
  }
  return false;
};

export const getClassName = (error: FieldError) => {
  const fieldValid = isFieldValid(error);
  if (error.dirty) {
    if (fieldValid) {
      return "is-success";
    } else {
      return "is-danger";
    }
  }
};

export const capitalizeFirstLetter = (txt: string) => {
  return `${txt.charAt(0).toUpperCase()}${txt.slice(1)}`;
};

export const submitEnquiryForm = async (
  gReCaptchaToken: string,
  formData: FormData
) => {
  console.log("submit");
  console.log(DEV_SERVER_URL);
  const res = await axios({
    method: "post",
    url: `${
      process.env.NODE_ENV === "development" ? DEV_SERVER_URL : PROD_SERVER_URL
    }/api/enquiry`,
    data: JSON.stringify({
      ...formData,
      gRecaptchaToken: gReCaptchaToken,
    }),
  });
  console.log(res);
  if (res?.status === 200) {
    return;
  } else {
    throw Error;
  }
};
