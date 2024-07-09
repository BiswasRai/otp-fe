import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import InputOTP from "./components/InputOTP/InputOTP";
import { useVerifyOTP } from "./services/otp.service";

function App() {
  const [error, errorMessage] = useState({
    otp: "",
  });
  const [form, setForm] = useState({
    otp: NaN,
    id: "1",
  });
  const { loading, handleVerifyOTP } = useVerifyOTP();

  const hello = (otp: number) => {
    setForm({
      ...form,
      otp,
    });
  };

  const handleSubmit = async () => {
    const { id, otp } = form;

    await handleVerifyOTP({
      id,
      otp,
    });
  };

  console.log(loading, "load");

  return (
    <div className="flex items-center space-y-4 flex-col justify-center min-h-screen bg-gray-100">
      <div className="w-500">
        <InputOTP
          isError={error.otp}
          setError={() => {
            errorMessage({
              ...error,
              otp: "",
            });
          }}
          length={6}
          onChange={hello}
        />

        {error.otp && <div className="text-red-500">{error.otp}</div>}
        <Button handleClick={handleSubmit} label="Verify OTP" />
      </div>
    </div>
  );
}

export default App;
