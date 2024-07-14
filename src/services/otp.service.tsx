import { useState } from "react";
import endpoints from "../constants/endpoints";
import { postData } from "./http.service";

type OTPPayload = {
  otp: number;
  id: string;
};

export const useVerifyOTP = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerifyOTP = async (payload: OTPPayload) => {
    setLoading((prev) => !prev);
    try {
      const result = await postData(endpoints.VERIFY_OTP, payload);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error?.message);
        throw new Error(error?.message);
      }

      setErrorMessage("Something went wrong");
      throw new Error("Something went wrong");
    } finally {
      setLoading((prev) => !prev);
    }
  };

  return {
    loading,
    errorMessage,
    handleVerifyOTP,
  };
};
