import { Dispatch, SetStateAction, useCallback, useState } from "react";
import {
  NUMBER_ONLY_REGEX,
  REQUIRED_OTP_LENGTH,
} from "../constants/magicNumber";
import { useVerifyOTP } from "../services/otp.service";

type FormValues = {
  otp: string;
  id: string;
};

type ErrorFormValues = {
  otp: string;
};

type Response = {
  formError: ErrorFormValues;
  setFormError: Dispatch<SetStateAction<ErrorFormValues>>;
  loading: boolean;
  apiError: string;
  handleSubmit: () => void;
  handleOnOTPChange: (otp: string) => void;
};

type UseOTPForm = {
  onSuccess: () => void;
};

const useOTPForm = ({ onSuccess }: UseOTPForm): Response => {
  const [formError, setFormError] = useState<ErrorFormValues>({
    otp: "",
  });
  const [form, setForm] = useState<FormValues>({
    otp: "",
    id: "1", // Hardcoding for now
  });
  const { loading, errorMessage: apiError, handleVerifyOTP } = useVerifyOTP();

  const handleOnOTPChange = useCallback(
    (otp: string) => {
      setForm({
        ...form,
        otp,
      });
    },
    [form.otp]
  );

  const handleFormValidation = useCallback(() => {
    if (form.otp.length !== REQUIRED_OTP_LENGTH) {
      setFormError({
        otp: `${REQUIRED_OTP_LENGTH} digits are required`,
      });

      return false;
    }
    if (!NUMBER_ONLY_REGEX.test(form.otp.toString())) {
      setFormError({
        otp: `OTP should only be number`,
      });
      return false;
    }

    return true;
  }, [form.otp]);

  const handleSubmit = useCallback(async () => {
    const { id, otp } = form;
    const isValid = handleFormValidation();

    if (!isValid) {
      return;
    }

    await handleVerifyOTP({
      id,
      otp: +otp,
    });

    onSuccess();
  }, [form]);

  return {
    handleSubmit,
    handleOnOTPChange,
    loading,
    apiError,
    formError,
    setFormError,
  };
};

export default useOTPForm;
