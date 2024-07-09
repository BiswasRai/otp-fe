import Input from "../Input/Input";
import React, { useRef, useState } from "react";
import { KEYBOARD_KEY } from "../../constants/keyboardEvent";
// TODO: absolute import in vite
// Need to only accept number as a value/input
type InputProps = {
  length?: number;
  onChange: (pin: number) => void;
  isError?: string;
  setError: any;
};

const InputOTP = ({ length = 4, isError, setError, onChange }: InputProps) => {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleFocusIndex = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    event?.preventDefault();
    inputRef.current[index].focus();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const input = event.target.value;
    const newPin = [...OTP];

    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      handleFocusIndex(event, index + 1);
    }
    if (input.length === 0 && index > 0) {
      handleFocusIndex(event, index - 1);
    }

    onChange(+newPin.join(""));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === KEYBOARD_KEY.backspace && !OTP[index] && index > 0) {
      handleFocusIndex(event, index - 1);
      return;
    }
    if (event.key === KEYBOARD_KEY.left && index > 0) {
      handleFocusIndex(event, index - 1);
      return;
    }
    if (event.key === KEYBOARD_KEY.right && index < length - 1) {
      handleFocusIndex(event, index + 1);
      return;
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text");
    const newOtp = pasteData.split("");

    setOTP(newOtp);
    onChange(newOtp.join(""));
    handleFocusIndex(event, length - 1);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const handleBlur = () => {
    if (isError) {
      setError();
    }
  };

  return (
    <div>
      <div className="flex space-x-2 mb-3">
        {Array.from({ length }, (_, index) => (
          <Input
            onPaste={(e) => handlePaste(e)}
            ariaLabel="input OTP"
            placeholder="-"
            autoFocus={index === 0}
            name="inputOTP"
            onKeyDown={(e) => handleKeyDown(e, index)}
            onChange={(e) => handleChange(e, index)}
            value={OTP[index]}
            key={`inputOTP+${index}`}
            ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
            onFocus={(e) => handleFocus(e)}
            onBlur={handleBlur}
            className={`w-12 h-12 text-center border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
              isError && "border-red-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InputOTP;
