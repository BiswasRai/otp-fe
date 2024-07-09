import { useState } from "react";
import endpoints from "../constants/endpoints";
import { postData } from "./http.service";

type OTPPayload = {
  otp: number;
  id: string;
};

export const useVerifyOTP = () => {
  const [loading, setLoading] = useState(false);

  const handleVerifyOTP = async (payload: OTPPayload) => {
    setLoading((prev) => !prev);
    const result = await postData(endpoints.VERIFY_OTP, payload);
    setLoading((prev) => !prev);

    return result;
  };

  return {
    loading,
    handleVerifyOTP,
  };
};
