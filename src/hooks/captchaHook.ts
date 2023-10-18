import { FormData } from "@/types";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { submitEnquiryForm } from "@/util/helpers";

export const useCaptcha = (formData: FormData) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const executeCaptcha = async () => {
    if (!executeRecaptcha) {
      throw new Error("Execute recaptcha not yet available");
    }
    try {
      const gReCaptchaToken = await executeRecaptcha("enquiryFormSubmit");
      await submitEnquiryForm(gReCaptchaToken, formData);
    } catch (error) {
      throw new Error("Google ReCaptcha Failure.");
    }
  };
  return { executeCaptcha };
};
