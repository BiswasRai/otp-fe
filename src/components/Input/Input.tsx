import React, { forwardRef } from "react";

type InputProps = {
  value: string;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: React.MutableRefObject<(HTMLInputElement | null)[]>;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  label?: string;
  name: string;
  ariaLabel?: string;
  type?: string;
  maxLength?: number;
  autoFocus?: boolean;
  className?: string;
  placeholder?: string;
};

/**
 * Custom input field
 *
 * @example
 * <Input name="name" value="1" placeholder="John" />
 * @returns {JSXElement} JSXELement
 *
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      value,
      onPaste,
      onFocus,
      onBlur,
      name,
      onChange,
      maxLength = 1,
      onKeyDown,
      ariaLabel,
      label = "",
      autoFocus = false,
      className,
      placeholder,
    },
    ref
  ) => {
    return (
      <div>
        <input
          placeholder={placeholder || "-"}
          type={type}
          name={name}
          aria-label={ariaLabel || label}
          maxLength={maxLength || 1}
          autoFocus={autoFocus}
          value={value}
          onPaste={onPaste}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          className={className}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  }
);

export default Input;
