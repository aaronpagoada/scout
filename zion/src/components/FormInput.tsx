import React, { useState } from "react";

interface InputProps {
  name: string;
  label: string;
  type: string;
  required: boolean;
  pattern: string;
  errorMessage: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput(props: InputProps) {
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);
  const { name, label, onChange, errorMessage, value, ...inputProps } = props;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    console.log(RegExp(inputProps.pattern).test(value), value);

    if (!new RegExp(inputProps.pattern).test(value)) {
      setError(errorMessage);
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    onChange(e);
  };

  return (
    <div className="mb-8 flex flex-col items-start">
      <label className="text-gray-500 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className={`transition duration-150 ease-linear w-full h-9 pl-2 pr-6 border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:border-black text-black rounded hover:border-gray-400`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name={name}
        {...inputProps}
      />
      {error && focused && (
        <span className="text-red-500 text-xs">{errorMessage}</span>
      )}
    </div>
  );
}

export default FormInput;