import { Button } from "../Button";
import { InputOTP } from "../InputOTP";
import { REQUIRED_OTP_LENGTH } from "../../constants/magicNumber";
import useOTPForm from "../../hooks/useOTPForm";
import { setItemToLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

function OTP() {
  const navigate = useNavigate();
  const {
    formError,
    setFormError,
    loading,
    handleOnOTPChange,
    handleSubmit,
    apiError,
  } = useOTPForm({
    onSuccess: () => {
      setItemToLocalStorage("isAuthenticated", true);
      navigate("/success");
    },
  });

  return (
    <div className="flex items-center space-y-4 flex-col justify-center min-h-screen bg-gray-100">
      <div className="w-500">
        <InputOTP
          isError={formError.otp}
          isDisabled={loading}
          setError={() => {
            setFormError({
              ...formError,
              otp: "",
            });
          }}
          length={REQUIRED_OTP_LENGTH}
          onChange={handleOnOTPChange}
        />

        {formError.otp && <div className="text-red-500">{formError.otp}</div>}

        {apiError && <div className="text-red-500">{apiError}</div>}

        <Button
          handleClick={handleSubmit}
          loading={loading}
          label="Verify OTP"
        />
      </div>
    </div>
  );
}

export default OTP;
